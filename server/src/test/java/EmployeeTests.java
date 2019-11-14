package payroll;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class EmployeeTests {

    @Test
    public void TestBasic() {
    	Employee franco = new Employee("Franco", "Bobadilla", "CEO");
	franco.setName("Franco_José Bobadilla");
    	assertEquals("Franco_José Bobadilla", franco.getName());
    }
}
