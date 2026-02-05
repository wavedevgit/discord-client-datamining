package com.facebook.yoga;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public enum f {
    NONE(0),
    STRETCH_FLEX_BASIS(1),
    ABSOLUTE_POSITION_WITHOUT_INSETS_EXCLUDES_PADDING(2),
    ABSOLUTE_PERCENT_AGAINST_INNER_SIZE(4),
    ALL(Integer.MAX_VALUE),
    CLASSIC(2147483646);
    

    /* renamed from: d  reason: collision with root package name */
    private final int f11586d;

    f(int i10) {
        this.f11586d = i10;
    }

    public int d() {
        return this.f11586d;
    }
}
