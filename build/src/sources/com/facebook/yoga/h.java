package com.facebook.yoga;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h {
    public static long a(float f10, float f11) {
        int floatToRawIntBits = Float.floatToRawIntBits(f10);
        return Float.floatToRawIntBits(f11) | (floatToRawIntBits << 32);
    }

    public static long b(int i10, int i11) {
        return a(i10, i11);
    }
}
