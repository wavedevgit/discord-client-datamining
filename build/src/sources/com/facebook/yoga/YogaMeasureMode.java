package com.facebook.yoga;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public enum YogaMeasureMode {
    UNDEFINED(0),
    EXACTLY(1),
    AT_MOST(2);
    

    /* renamed from: d  reason: collision with root package name */
    private final int f11142d;

    YogaMeasureMode(int i10) {
        this.f11142d = i10;
    }

    public static YogaMeasureMode d(int i10) {
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 == 2) {
                    return AT_MOST;
                }
                throw new IllegalArgumentException("Unknown enum value: " + i10);
            }
            return EXACTLY;
        }
        return UNDEFINED;
    }
}
