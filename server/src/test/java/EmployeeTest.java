package payroll;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class EmployeeTest {

    @Test
    public void TestBasic() {
    	Employee alex = new Employee("franco bobadilla", "jefe");
    	assertEquals(alex.getName(), "franco bobadilla");
    }
}
