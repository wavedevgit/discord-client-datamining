package x4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    public static final j f53116a = new j();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f53117a;

        static {
            int[] iArr = new int[h5.h.values().length];
            try {
                iArr[h5.h.f26827d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[h5.h.f26828e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f53117a = iArr;
        }
    }

    private j() {
    }

    public static final int a(int i10, int i11, int i12, int i13, h5.h hVar) {
        int min;
        int highestOneBit = Integer.highestOneBit(i10 / i12);
        int highestOneBit2 = Integer.highestOneBit(i11 / i13);
        int i14 = a.f53117a[hVar.ordinal()];
        if (i14 != 1) {
            if (i14 == 2) {
                min = Math.max(highestOneBit, highestOneBit2);
            } else {
                throw new lr.p();
            }
        } else {
            min = Math.min(highestOneBit, highestOneBit2);
        }
        return kotlin.ranges.d.d(min, 1);
    }

    public static final double b(double d10, double d11, double d12, double d13, h5.h hVar) {
        double d14 = d12 / d10;
        double d15 = d13 / d11;
        int i10 = a.f53117a[hVar.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return Math.min(d14, d15);
            }
            throw new lr.p();
        }
        return Math.max(d14, d15);
    }

    public static final double c(int i10, int i11, int i12, int i13, h5.h hVar) {
        double d10 = i12 / i10;
        double d11 = i13 / i11;
        int i14 = a.f53117a[hVar.ordinal()];
        if (i14 != 1) {
            if (i14 == 2) {
                return Math.min(d10, d11);
            }
            throw new lr.p();
        }
        return Math.max(d10, d11);
    }

    public static final float d(float f10, float f11, float f12, float f13, h5.h hVar) {
        float f14 = f12 / f10;
        float f15 = f13 / f11;
        int i10 = a.f53117a[hVar.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return Math.min(f14, f15);
            }
            throw new lr.p();
        }
        return Math.max(f14, f15);
    }
}
