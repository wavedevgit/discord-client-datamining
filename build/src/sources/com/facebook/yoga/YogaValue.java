package com.facebook.yoga;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class YogaValue {

    /* renamed from: c  reason: collision with root package name */
    static final YogaValue f11455c = new YogaValue(Float.NaN, YogaUnit.UNDEFINED);

    /* renamed from: d  reason: collision with root package name */
    static final YogaValue f11456d = new YogaValue(0.0f, YogaUnit.POINT);

    /* renamed from: e  reason: collision with root package name */
    static final YogaValue f11457e = new YogaValue(Float.NaN, YogaUnit.AUTO);

    /* renamed from: a  reason: collision with root package name */
    public final float f11458a;

    /* renamed from: b  reason: collision with root package name */
    public final YogaUnit f11459b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f11460a;

        static {
            int[] iArr = new int[YogaUnit.values().length];
            f11460a = iArr;
            try {
                iArr[YogaUnit.UNDEFINED.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f11460a[YogaUnit.POINT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f11460a[YogaUnit.PERCENT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f11460a[YogaUnit.AUTO.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    public YogaValue(float f10, YogaUnit yogaUnit) {
        this.f11458a = f10;
        this.f11459b = yogaUnit;
    }

    public static YogaValue a(String str) {
        if (str == null) {
            return null;
        }
        if ("undefined".equals(str)) {
            return f11455c;
        }
        if ("auto".equals(str)) {
            return f11457e;
        }
        if (str.endsWith("%")) {
            return new YogaValue(Float.parseFloat(str.substring(0, str.length() - 1)), YogaUnit.PERCENT);
        }
        return new YogaValue(Float.parseFloat(str), YogaUnit.POINT);
    }

    public boolean equals(Object obj) {
        if (obj instanceof YogaValue) {
            YogaValue yogaValue = (YogaValue) obj;
            YogaUnit yogaUnit = this.f11459b;
            if (yogaUnit == yogaValue.f11459b) {
                if (yogaUnit != YogaUnit.UNDEFINED && yogaUnit != YogaUnit.AUTO && Float.compare(this.f11458a, yogaValue.f11458a) != 0) {
                    return false;
                }
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return Float.floatToIntBits(this.f11458a) + this.f11459b.e();
    }

    public String toString() {
        int i10 = a.f11460a[this.f11459b.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 == 4) {
                        return "auto";
                    }
                    throw new IllegalStateException();
                }
                return this.f11458a + "%";
            }
            return Float.toString(this.f11458a);
        }
        return "undefined";
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public YogaValue(float f10, int i10) {
        this(f10, YogaUnit.d(i10));
    }
}
