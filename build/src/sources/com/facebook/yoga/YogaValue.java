package com.facebook.yoga;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class YogaValue {

    /* renamed from: c  reason: collision with root package name */
    static final YogaValue f11595c = new YogaValue(Float.NaN, YogaUnit.UNDEFINED);

    /* renamed from: d  reason: collision with root package name */
    static final YogaValue f11596d = new YogaValue(0.0f, YogaUnit.POINT);

    /* renamed from: e  reason: collision with root package name */
    static final YogaValue f11597e = new YogaValue(Float.NaN, YogaUnit.AUTO);

    /* renamed from: a  reason: collision with root package name */
    public final float f11598a;

    /* renamed from: b  reason: collision with root package name */
    public final YogaUnit f11599b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f11600a;

        static {
            int[] iArr = new int[YogaUnit.values().length];
            f11600a = iArr;
            try {
                iArr[YogaUnit.UNDEFINED.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f11600a[YogaUnit.POINT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f11600a[YogaUnit.PERCENT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f11600a[YogaUnit.AUTO.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    public YogaValue(float f10, YogaUnit yogaUnit) {
        this.f11598a = f10;
        this.f11599b = yogaUnit;
    }

    public static YogaValue a(String str) {
        if (str == null) {
            return null;
        }
        if ("undefined".equals(str)) {
            return f11595c;
        }
        if ("auto".equals(str)) {
            return f11597e;
        }
        if (str.endsWith("%")) {
            return new YogaValue(Float.parseFloat(str.substring(0, str.length() - 1)), YogaUnit.PERCENT);
        }
        return new YogaValue(Float.parseFloat(str), YogaUnit.POINT);
    }

    public boolean equals(Object obj) {
        if (obj instanceof YogaValue) {
            YogaValue yogaValue = (YogaValue) obj;
            YogaUnit yogaUnit = this.f11599b;
            if (yogaUnit == yogaValue.f11599b) {
                if (yogaUnit != YogaUnit.UNDEFINED && yogaUnit != YogaUnit.AUTO && Float.compare(this.f11598a, yogaValue.f11598a) != 0) {
                    return false;
                }
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return Float.floatToIntBits(this.f11598a) + this.f11599b.e();
    }

    public String toString() {
        int i10 = a.f11600a[this.f11599b.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 == 4) {
                        return "auto";
                    }
                    throw new IllegalStateException();
                }
                return this.f11598a + "%";
            }
            return Float.toString(this.f11598a);
        }
        return "undefined";
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public YogaValue(float f10, int i10) {
        this(f10, YogaUnit.d(i10));
    }
}
