package oi;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {
    public static int a(boolean z10, boolean z11) {
        if (z10 == z11) {
            return 0;
        }
        if (z10) {
            return 1;
        }
        return -1;
    }

    public static boolean b(boolean[] zArr, boolean z10) {
        for (boolean z11 : zArr) {
            if (z11 == z10) {
                return true;
            }
        }
        return false;
    }
}
