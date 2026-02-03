package com.facebook.yoga;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public enum YogaDirection {
    INHERIT(0),
    LTR(1),
    RTL(2);
    

    /* renamed from: d  reason: collision with root package name */
    private final int f12142d;

    YogaDirection(int i10) {
        this.f12142d = i10;
    }

    public static YogaDirection d(int i10) {
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 == 2) {
                    return RTL;
                }
                throw new IllegalArgumentException("Unknown enum value: " + i10);
            }
            return LTR;
        }
        return INHERIT;
    }

    public int e() {
        return this.f12142d;
    }
}
