package payroll;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class OrderTests {

    @Test
    public void TestBasic() {
    	Order iPad = new Order("iPad", Status.IN_PROGRESS);
    	assertEquals("iPad", iPad.getDescription());
    }
}
