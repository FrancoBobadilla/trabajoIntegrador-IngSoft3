package payroll;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertEquals;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Arrays;

import org.junit.Before;
import org.junit.Test;
import org.springframework.hateoas.MediaTypes;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;


public class OrderControllerTests extends AbstractTest {
	
   @Override
   @Before
   public void setUp() {
      super.setUp();
   }

	@Test
	public void getOrders_Test_1() throws Exception {
		String uri = "/orders";
	    MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)
	         .accept(MediaTypes.HAL_JSON_VALUE)).andReturn();
	      
	    String content = mvcResult.getResponse().getContentAsString();
	    int status = mvcResult.getResponse().getStatus();
	    assertEquals(200, status);
	}
	
	@Test
	public void getOrders_Test_2() throws Exception {

		given(orderRepository.findAll()).willReturn( //
		Arrays.asList( //
				new Order("iPad", Status.IN_PROGRESS), //
				new Order("Apple Watch", Status.COMPLETED)));
		
		mvc.perform(get("/orders").accept(MediaTypes.HAL_JSON_VALUE))
		.andDo(print())
		.andExpect(status().isOk())
		.andExpect(jsonPath("$._embedded.orderList[0].description", is("iPad")))
		.andExpect(jsonPath("$._embedded.orderList[0].status", is("IN_PROGRESS")))
		.andExpect(jsonPath("$._embedded.orderList[0]._links.orders.href", is("http://localhost/orders")))
		.andExpect(jsonPath("$._embedded.orderList[1].description", is("Apple Watch")))
		.andExpect(jsonPath("$._embedded.orderList[1].status", is("COMPLETED")))
		.andExpect(jsonPath("$._embedded.orderList[1]._links.orders.href", is("http://localhost/orders")))
		.andExpect(jsonPath("$._links.self.href", is("http://localhost/orders")))
		.andReturn();
	}
}
