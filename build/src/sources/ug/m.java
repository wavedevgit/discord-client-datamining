package ug;

import gf.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class m {
    public static int a(int i10) {
        boolean z10 = true;
        if (i10 != 100 && i10 != 102 && i10 != 104) {
            if (i10 == 105) {
                i10 = 105;
            } else {
                z10 = false;
            }
        }
        q.c(z10, "priority %d must be a Priority.PRIORITY_* constant", Integer.valueOf(i10));
        return i10;
    }

    public static String b(int i10) {
        if (i10 != 100) {
            if (i10 != 102) {
                if (i10 != 104) {
                    if (i10 == 105) {
                        return "PASSIVE";
                    }
                    throw new IllegalArgumentException();
                }
                return "LOW_POWER";
            }
            return "BALANCED_POWER_ACCURACY";
        }
        return "HIGH_ACCURACY";
    }
}
