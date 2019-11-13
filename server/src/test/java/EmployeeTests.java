package payroll;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class EmployeeTests {

    @Test
    public void TestBasic() {
    	Employee alex = new Employee("franco", "bobadilla", "test");
    	assertEquals("franco bobadilla", alex.getName());
    }
}
