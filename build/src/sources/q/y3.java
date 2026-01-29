package q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class y3 {
    public static int a(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                return 1;
            }
            if (i10 == 2) {
                return 2;
            }
            throw new IllegalArgumentException("The given lens facing integer: " + i10 + " can not be recognized.");
        }
        return 0;
    }
}
