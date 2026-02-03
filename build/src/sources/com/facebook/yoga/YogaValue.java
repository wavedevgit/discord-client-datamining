package com.facebook.yoga;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class YogaValue {

    /* renamed from: c  reason: collision with root package name */
    static final YogaValue f11171c = new YogaValue(Float.NaN, YogaUnit.UNDEFINED);

    /* renamed from: d  reason: collision with root package name */
    static final YogaValue f11172d = new YogaValue(0.0f, YogaUnit.POINT);

    /* renamed from: e  reason: collision with root package name */
    static final YogaValue f11173e = new YogaValue(Float.NaN, YogaUnit.AUTO);

    /* renamed from: a  reason: collision with root package name */
    public final float f11174a;

    /* renamed from: b  reason: collision with root package name */
    public final YogaUnit f11175b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f11176a;

        static {
            int[] iArr = new int[YogaUnit.values().length];
            f11176a = iArr;
            try {
                iArr[YogaUnit.UNDEFINED.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f11176a[YogaUnit.POINT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f11176a[YogaUnit.PERCENT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f11176a[YogaUnit.AUTO.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    public YogaValue(float f10, YogaUnit yogaUnit) {
        this.f11174a = f10;
        this.f11175b = yogaUnit;
    }

    public static YogaValue a(String str) {
        if (str == null) {
            return null;
        }
        if ("undefined".equals(str)) {
            return f11171c;
        }
        if ("auto".equals(str)) {
            return f11173e;
        }
        if (str.endsWith("%")) {
            return new YogaValue(Float.parseFloat(str.substring(0, str.length() - 1)), YogaUnit.PERCENT);
        }
        return new YogaValue(Float.parseFloat(str), YogaUnit.POINT);
    }

    public boolean equals(Object obj) {
        if (obj instanceof YogaValue) {
            YogaValue yogaValue = (YogaValue) obj;
            YogaUnit yogaUnit = this.f11175b;
            if (yogaUnit == yogaValue.f11175b) {
                if (yogaUnit != YogaUnit.UNDEFINED && yogaUnit != YogaUnit.AUTO && Float.compare(this.f11174a, yogaValue.f11174a) != 0) {
                    return false;
                }
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return Float.floatToIntBits(this.f11174a) + this.f11175b.e();
    }

    public String toString() {
        int i10 = a.f11176a[this.f11175b.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 == 4) {
                        return "auto";
                    }
                    throw new IllegalStateException();
                }
                return this.f11174a + "%";
            }
            return Float.toString(this.f11174a);
        }
        return "undefined";
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public YogaValue(float f10, int i10) {
        this(f10, YogaUnit.d(i10));
    }
}
