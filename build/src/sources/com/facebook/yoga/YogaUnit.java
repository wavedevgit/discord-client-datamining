package com.facebook.yoga;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public enum YogaUnit {
    UNDEFINED(0),
    POINT(1),
    PERCENT(2),
    AUTO(3),
    MAX_CONTENT(4),
    FIT_CONTENT(5),
    STRETCH(6);
    

    /* renamed from: d  reason: collision with root package name */
    private final int f11454d;

    YogaUnit(int i10) {
        this.f11454d = i10;
    }

    public static YogaUnit d(int i10) {
        switch (i10) {
            case 0:
                return UNDEFINED;
            case 1:
                return POINT;
            case 2:
                return PERCENT;
            case 3:
                return AUTO;
            case 4:
                return MAX_CONTENT;
            case 5:
                return FIT_CONTENT;
            case 6:
                return STRETCH;
            default:
                throw new IllegalArgumentException("Unknown enum value: " + i10);
        }
    }

    public int e() {
        return this.f11454d;
    }
}
