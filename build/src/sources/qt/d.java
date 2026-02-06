package qt;

import java.util.concurrent.TimeUnit;
import net.time4j.a0;
import net.time4j.i0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum d {
    NEW_MOON(0),
    FIRST_QUARTER(90),
    FULL_MOON(180),
    LAST_QUARTER(270);
    

    /* renamed from: d  reason: collision with root package name */
    private final transient int f48169d;

    /* renamed from: q  reason: collision with root package name */
    private static final int[] f48159q = {100, 1000, 10000, 100000};

    /* renamed from: r  reason: collision with root package name */
    private static final a0 f48160r = i0.a0(2000, 1, 6, 18, 13, 42).R();

    /* renamed from: s  reason: collision with root package name */
    private static final int[] f48161s = {0, 1, 0, 0, 1, 1, 2, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0};

    /* renamed from: t  reason: collision with root package name */
    private static final int[] f48162t = {0, 1, 1, 0, 0, 1, 2, 0, 0, 0, 1, 1, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0};

    /* renamed from: u  reason: collision with root package name */
    private static final int[] f48163u = {0, 1, 0, 0, -1, 1, 2, 0, 0, 1, 0, 1, 1, -1, 2, 0, 3, 1, 0, 1, -1, -1, 1, 0};

    /* renamed from: v  reason: collision with root package name */
    private static final int[] f48164v = {0, 1, 1, 0, 0, -1, 2, 0, 0, 0, -1, 1, 1, 2, 1, -1, 0, 1, -2, 1, 3, 0, -1, 1};

    /* renamed from: w  reason: collision with root package name */
    private static final int[] f48165w = {1, 0, 2, 0, 1, 1, 0, 1, 1, 2, 3, 0, 0, 2, 1, 2, 0, 1, 2, 1, 1, 1, 3, 4};

    /* renamed from: x  reason: collision with root package name */
    private static final int[] f48166x = {1, 0, 1, 2, 0, 1, 0, 1, 1, 3, 2, 0, 0, 1, 2, 1, 2, 1, 1, 1, 0, 2, 1, 3};

    /* renamed from: y  reason: collision with root package name */
    private static final int[] f48167y = {0, 0, 0, 2, 0, 0, 0, -2, 2, 0, 0, 2, -2, 0, 0, -2, 0, -2, 2, 2, 2, -2, 0, 0};

    /* renamed from: z  reason: collision with root package name */
    private static final int[] f48168z = {0, 0, 0, 0, 2, 0, 0, -2, 2, 0, 0, 2, -2, 0, 0, -2, 2, 2, 0, -2, 0, -2, 2, 0};
    private static final double[] A = {-0.4072d, 0.17241d, 0.01608d, 0.01039d, 0.00739d, -0.00514d, 0.00208d, -0.00111d, -5.7E-4d, 5.6E-4d, -4.2E-4d, 4.2E-4d, 3.8E-4d, -2.4E-4d, -7.0E-5d, 4.0E-5d, 4.0E-5d, 3.0E-5d, 3.0E-5d, -3.0E-5d, 3.0E-5d, -2.0E-5d, -2.0E-5d, 2.0E-5d};
    private static final double[] B = {-0.40614d, 0.17302d, 0.01614d, 0.01043d, 0.00734d, -0.00515d, 0.00209d, -0.00111d, -5.7E-4d, 5.6E-4d, -4.2E-4d, 4.2E-4d, 3.8E-4d, -2.4E-4d, -7.0E-5d, 4.0E-5d, 4.0E-5d, 3.0E-5d, 3.0E-5d, -3.0E-5d, 3.0E-5d, -2.0E-5d, -2.0E-5d, 2.0E-5d};
    private static final double[] C = {-0.62801d, 0.17172d, -0.01183d, 0.00862d, 0.00804d, 0.00454d, 0.00204d, -0.0018d, -7.0E-4d, -4.0E-4d, -3.4E-4d, 3.2E-4d, 3.2E-4d, -2.8E-4d, 2.7E-4d, -5.0E-5d, 4.0E-5d, -4.0E-5d, 4.0E-5d, 3.0E-5d, 3.0E-5d, 2.0E-5d, 2.0E-5d, -2.0E-5d};

    d(int i10) {
        this.f48169d = i10;
    }

    private static double f(double d10, double d11, double d12, double d13) {
        return (((0.00306d - ((d10 * 3.8E-4d) * g(d11))) + (g(d12) * 2.6E-4d)) - (g(d12 - d11) * 2.0E-5d)) + (g(d12 + d11) * 2.0E-5d) + (g(d13 * 2.0d) * 2.0E-5d);
    }

    private static double g(double d10) {
        return Math.cos((d10 * 3.141592653589793d) / 180.0d);
    }

    private int h(a0 a0Var) {
        return pt.c.g(Math.round((f48160r.L(a0Var, TimeUnit.DAYS) / 29.530588861d) - (this.f48169d / 360.0d)));
    }

    private double i(double d10, double d11, double d12, double d13) {
        double[] dArr;
        int[] iArr;
        int[] iArr2;
        int[] iArr3;
        int[] iArr4;
        d dVar = NEW_MOON;
        if (this == dVar) {
            dArr = A;
        } else if (this == FULL_MOON) {
            dArr = B;
        } else {
            dArr = C;
        }
        if (this != dVar && this != FULL_MOON) {
            iArr = f48162t;
        } else {
            iArr = f48161s;
        }
        if (this != dVar && this != FULL_MOON) {
            iArr2 = f48164v;
        } else {
            iArr2 = f48163u;
        }
        if (this != dVar && this != FULL_MOON) {
            iArr3 = f48166x;
        } else {
            iArr3 = f48165w;
        }
        if (this != dVar && this != FULL_MOON) {
            iArr4 = f48168z;
        } else {
            iArr4 = f48167y;
        }
        double d14 = 0.0d;
        for (int i10 = 23; i10 >= 0; i10--) {
            double d15 = dArr[i10];
            int i11 = iArr[i10];
            if (i11 != 1) {
                if (i11 == 2) {
                    d15 *= d10;
                } else {
                    d14 += d15 * j((iArr2[i10] * d11) + (iArr3[i10] * d12) + (iArr4[i10] * d13));
                }
            }
            d15 *= d10;
            d14 += d15 * j((iArr2[i10] * d11) + (iArr3[i10] * d12) + (iArr4[i10] * d13));
        }
        return d14;
    }

    private static double j(double d10) {
        return Math.sin((d10 * 3.141592653589793d) / 180.0d);
    }

    public a0 a(int i10) {
        double d10 = i10 + (this.f48169d / 360.0d);
        double d11 = d10 / 1236.85d;
        double d12 = d11 * d11;
        double d13 = 1.0d - (((7.4E-6d * d11) + 0.002516d) * d11);
        double d14 = ((29.1053567d * d10) + 2.5534d) - (((1.1E-7d * d11) + 1.4E-6d) * d12);
        double d15 = (385.81693528d * d10) + 201.5643d + ((((1.238E-5d - (5.8E-8d * d11)) * d11) + 0.0107582d) * d12);
        double d16 = (390.67050284d * d10) + 160.7108d + (((((1.1E-8d * d11) - 2.27E-6d) * d11) - 0.0016118d) * d12);
        double sin = ((((29.530588861d * d10) + 2451550.09766d) + (((((7.3E-10d * d11) - 1.5E-7d) * d11) + 1.5437E-4d) * d12)) - (Math.sin(Math.toRadians((124.7746d - (1.56375588d * d10)) + (((2.15E-6d * d11) + 0.0020672d) * d12))) * 1.7E-4d)) + i(d13, d14, d15, d16);
        if (this == FIRST_QUARTER) {
            sin += f(d13, d14, d15, d16);
        } else if (this == LAST_QUARTER) {
            sin -= f(d13, d14, d15, d16);
        }
        double[] dArr = {((0.107408d * d10) + 299.77d) - (d12 * 0.009173d), 3.25E-4d, (0.016321d * d10) + 251.88d, 1.65E-4d, (26.651886d * d10) + 251.83d, 1.64E-4d, (36.412478d * d10) + 349.42d, 1.26E-4d, (18.206239d * d10) + 84.66d, 1.1E-4d, (53.303771d * d10) + 141.74d, 6.2E-5d, (2.453732d * d10) + 207.14d, 6.0E-5d, (7.30686d * d10) + 154.84d, 5.6E-5d, (27.261239d * d10) + 34.52d, 4.7E-5d, (0.121824d * d10) + 207.19d, 4.2E-5d, (1.844379d * d10) + 291.34d, 4.0E-5d, (24.198154d * d10) + 161.72d, 3.7E-5d, (25.513099d * d10) + 239.56d, 3.5E-5d, (d10 * 3.592518d) + 331.55d, 2.3E-5d};
        for (int i11 = 0; i11 < 28; i11 += 2) {
            sin += dArr[i11 + 1] * Math.sin(Math.toRadians(dArr[i11]));
        }
        return (a0) c.f(sin).h().E(a0.f39063z, TimeUnit.SECONDS);
    }

    public a0 d(a0 a0Var) {
        int h10 = h(a0Var);
        a0 a10 = a(h10);
        int i10 = h10;
        while (a10.i0(a0Var)) {
            i10++;
            a10 = a(i10);
        }
        if (i10 <= h10) {
            while (true) {
                i10--;
                a0 a11 = a(i10);
                if (a11.i0(a0Var)) {
                    break;
                }
                a10 = a11;
            }
        }
        return a10;
    }

    public a0 e(a0 a0Var) {
        int h10 = h(a0Var);
        a0 a10 = a(h10);
        int i10 = h10;
        while (!a10.i0(a0Var)) {
            i10--;
            a10 = a(i10);
        }
        if (i10 >= h10) {
            while (((a0) a10.K(29L, TimeUnit.DAYS)).i0(a0Var)) {
                i10++;
                a0 a11 = a(i10);
                if (!a11.i0(a0Var)) {
                    break;
                }
                a10 = a11;
            }
        }
        return a10;
    }
}
