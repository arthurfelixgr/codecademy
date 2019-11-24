import java.util.ArrayList;
public class Playlist{  
  public static void main(String[] args){
    ArrayList<String> desertIslandPlaylist = new ArrayList<String>();
    desertIslandPlaylist.add("expedicionario");
    desertIslandPlaylist.add("fibra");
    desertIslandPlaylist.add("vida doce");
    desertIslandPlaylist.add("fuego");
    desertIslandPlaylist.add("giz");
    desertIslandPlaylist.add("faint");
    System.out.println(desertIslandPlaylist);
    System.out.println(desertIslandPlaylist.size());
    desertIslandPlaylist.remove(0);
    System.out.println(desertIslandPlaylist.size());
    int a = desertIslandPlaylist.indexOf("fibra");
    int b = desertIslandPlaylist.indexOf("giz");
    String tempA = "fibra";
    desertIslandPlaylist.set(a, "giz");
    desertIslandPlaylist.set(b, tempA);
    System.out.println(desertIslandPlaylist);
  }
}
