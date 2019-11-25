public class FizzBuzz {
  public static void main(String[] args) {
    for(int i = 0; i < 100; i++){
      int a = i%3;
      int b = i%5;
      if(a == 0){
        if(b == 0){
          System.out.println("FizzBuzz");
        }
        else{
          System.out.println("Fizz");
        }
      }
      else{
        if(b == 0){
          System.out.println("Buzz");
        }
        else{
          System.out.println(i);
        }
      }
    }
  }
}
