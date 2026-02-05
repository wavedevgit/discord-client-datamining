package oi;

import li.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {
    public static char a(long j10) {
        boolean z10;
        char c10 = (char) j10;
        if (c10 == j10) {
            z10 = true;
        } else {
            z10 = false;
        }
        m.g(z10, "Out of range: %s", j10);
        return c10;
    }

    public static boolean b(char[] cArr, char c10) {
        for (char c11 : cArr) {
            if (c11 == c10) {
                return true;
            }
        }
        return false;
    }

    public static char c(byte b10, byte b11) {
        return (char) ((b10 << 8) | (b11 & 255));
    }
}
