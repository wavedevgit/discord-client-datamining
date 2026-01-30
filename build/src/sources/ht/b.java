package ht;

import net.time4j.a0;
import qt.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum b {
    VERNAL_EQUINOX,
    SUMMER_SOLSTICE,
    AUTUMNAL_EQUINOX,
    WINTER_SOLSTICE;
    

    /* renamed from: p  reason: collision with root package name */
    private static final int[] f28210p = {485, 203, 199, 182, 156, 136, 77, 74, 70, 58, 52, 50, 45, 44, 29, 18, 17, 16, 14, 12, 12, 12, 9, 8};

    /* renamed from: q  reason: collision with root package name */
    private static final double[] f28211q = {324.96d, 337.23d, 342.08d, 27.85d, 73.14d, 171.52d, 222.54d, 296.72d, 243.58d, 119.81d, 297.17d, 21.02d, 247.54d, 325.15d, 60.93d, 155.12d, 288.79d, 198.04d, 199.76d, 95.39d, 287.11d, 320.81d, 227.73d, 15.45d};

    /* renamed from: r  reason: collision with root package name */
    private static final double[] f28212r = {1934.136d, 32964.467d, 20.186d, 445267.112d, 45036.886d, 22518.443d, 65928.934d, 3034.906d, 9037.513d, 33718.147d, 150.678d, 2281.226d, 29929.562d, 31555.956d, 4443.417d, 67555.328d, 4562.452d, 62894.029d, 31436.921d, 14577.848d, 31931.756d, 34777.259d, 1222.114d, 16859.074d};

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f28214a;

        static {
            int[] iArr = new int[b.values().length];
            f28214a = iArr;
            try {
                iArr[b.VERNAL_EQUINOX.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f28214a[b.SUMMER_SOLSTICE.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f28214a[b.AUTUMNAL_EQUINOX.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f28214a[b.WINTER_SOLSTICE.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    private static void a(int i10) {
        if (i10 >= -2000 && i10 <= 3000) {
            return;
        }
        throw new IllegalArgumentException("Year out of supported range: -2000 <= " + i10 + " <= +3000");
    }

    private static double d(double d10) {
        return Math.cos((d10 * 3.141592653589793d) / 180.0d);
    }

    private double f(int i10) {
        double g10 = g(i10);
        double d10 = (g10 - 2451545.0d) / 36525.0d;
        double d11 = (35999.373d * d10) - 2.47d;
        return g10 + ((h(d10) * 1.0E-5d) / (((d(d11) * 0.0334d) + 1.0d) + (d(d11 * 2.0d) * 7.0E-4d)));
    }

    private double g(int i10) {
        double d10;
        double d11;
        double d12;
        double d13;
        if (i10 < 1000) {
            double d14 = i10 / 1000.0d;
            int i11 = a.f28214a[ordinal()];
            if (i11 != 1) {
                if (i11 != 2) {
                    if (i11 != 3) {
                        if (i11 == 4) {
                            d10 = ((((((-0.00933d) - (6.0E-5d * d14)) * d14) - 0.00769d) * d14) + 365242.88257d) * d14;
                            d11 = 1721414.39987d;
                        } else {
                            throw new AssertionError(this);
                        }
                    } else {
                        d12 = ((((((7.4E-4d * d14) - 0.00297d) * d14) - 0.11677d) * d14) + 365242.49558d) * d14;
                        d13 = 1721325.70455d;
                    }
                } else {
                    d12 = ((((((2.5E-4d * d14) + 0.00907d) * d14) - 0.05323d) * d14) + 365241.72562d) * d14;
                    d13 = 1721233.25401d;
                }
                return d12 + d13;
            }
            d10 = (((((0.00111d - (7.1E-4d * d14)) * d14) + 0.06134d) * d14) + 365242.1374d) * d14;
            d11 = 1721139.29189d;
            return d10 + d11;
        }
        double d15 = (i10 - 2000) / 1000.0d;
        int i12 = a.f28214a[ordinal()];
        if (i12 != 1) {
            if (i12 != 2) {
                if (i12 != 3) {
                    if (i12 == 4) {
                        d12 = ((((((3.2E-4d * d15) - 0.00823d) * d15) - 0.06223d) * d15) + 365242.74049d) * d15;
                        d13 = 2451900.05952d;
                    } else {
                        throw new AssertionError(this);
                    }
                } else {
                    d12 = ((((((7.8E-4d * d15) + 0.00337d) * d15) - 0.11575d) * d15) + 365242.01767d) * d15;
                    d13 = 2451810.21715d;
                }
                return d12 + d13;
            }
            d10 = (((((0.00888d - (3.0E-4d * d15)) * d15) + 0.00325d) * d15) + 365241.62603d) * d15;
            d11 = 2451716.56767d;
        } else {
            d10 = ((((((-0.00411d) - (5.7E-4d * d15)) * d15) + 0.05169d) * d15) + 365242.37404d) * d15;
            d11 = 2451623.80984d;
        }
        return d10 + d11;
    }

    private static double h(double d10) {
        double d11 = 0.0d;
        for (int i10 = 0; i10 < 24; i10++) {
            d11 += f28210p[i10] * d(f28211q[i10] + (f28212r[i10] * d10));
        }
        return d11;
    }

    public a0 e(int i10) {
        double d10;
        f fVar;
        a(i10);
        double f10 = (f(i10) - 2441317.5d) * 86400.0d;
        boolean D = qt.d.p().D();
        if (D && i10 >= 1972) {
            d10 = f10 - 42.184d;
            fVar = f.UTC;
        } else {
            d10 = f10 - f.d(i10, (ordinal() + 1) * 3);
            fVar = f.UT;
        }
        long floor = (long) Math.floor(d10);
        int i11 = (int) ((d10 - floor) * 1.0E9d);
        if (!D) {
            floor += 63072000;
            fVar = f.POSIX;
        }
        return a0.l0(floor, i11, fVar);
    }
}
