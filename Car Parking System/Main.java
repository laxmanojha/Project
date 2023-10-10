import java.util.*;
public class Main {
    static class ParkDetails {
        String name;
        String vehicleNo;
        char vehicleType;
        int duration;
        int totalCharge;
        public void getDetails() {
            Scanner sc = new Scanner(System.in);
            System.out.print("Enter Your Name: ");
            this.name = sc.nextLine();
            System.out.print("Enter Your Vehicle No.: ");
            this.vehicleNo = sc.nextLine();
            System.out.print("Vehicle Type: (a)Two-wheeler (b)Three-wheeler (c)Four-wheeler: ");
            this.vehicleType = sc.next().charAt(0);
            System.out.print("Enter Duration in Days: ");
            this.duration = sc.nextInt();
            addTotal();
        }
        public void addTotal() {
            if(vehicleType=='a') {
                this.totalCharge = 50*this.duration;
            }
            else if(vehicleType=='b') {
                this.totalCharge = 100*this.duration;
            }
            else if(vehicleType=='c') {
                this.totalCharge = 200*this.duration;
            }
        }
    }
    public static ArrayList<ParkDetails>customers = new ArrayList<>();
    public static char startPage() {
        Scanner sc = new Scanner(System.in);
        System.out.println("\n");
        System.out.println("------------Welcome To Parking Plot------------\n");
        System.out.println("What is your Choice: \n");
        System.out.println("A. Park My Vehicle    B. Get My Vehicle\n");
        System.out.print("Enter Your Choice:");
        char ch = sc.nextLine().charAt(0);
        return ch;
    }
    public static void main(String[] args) {
        char choice='n';
        do{
            Scanner sc = new Scanner(System.in);
            char decision = startPage();
            if(decision == 'A'||decision=='a') {
                ParkDetails object = new ParkDetails();
                object.getDetails();
                customers.add(object);
            }
            else if(decision=='B'||decision=='b') {
                System.out.print("Enter Your Name: ");
                String name = sc.nextLine();
                System.out.print("Enter Your Vehicle No.: ");
                String vehicleNo = sc.nextLine();
                boolean flag = true;
                for(int i=0;i<customers.size();i++) {
                    if(customers.get(i).name.equals(name) && customers.get(i).vehicleNo.equals(vehicleNo)) {
                        System.out.println("Your Total is: "+customers.get(i).totalCharge);
                        customers.remove(i);
                        flag = false;
                        break;
                    }
                }
                if(flag) {
                    System.out.println("Incorrect Details....!");
                }
            }
            System.out.println("Start Again- Y or N:");
            choice = sc.next().charAt(0);
        }while(choice == 'Y' || choice == 'y');
        System.out.println("------------Thanks For Visiting us------------\n");
    }
}