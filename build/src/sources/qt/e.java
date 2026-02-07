package qt;

import com.discord.media.engine.MediaEngine;
import net.time4j.g0;
import net.time4j.i0;
import net.time4j.tz.p;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class e {

    /* renamed from: d  reason: collision with root package name */
    public static final e f48218d;

    /* renamed from: e  reason: collision with root package name */
    public static final e f48219e;

    /* renamed from: i  reason: collision with root package name */
    public static final e f48220i;

    /* renamed from: o  reason: collision with root package name */
    public static final e f48221o;

    /* renamed from: p  reason: collision with root package name */
    private static final int[] f48222p;

    /* renamed from: q  reason: collision with root package name */
    private static final double[] f48223q;

    /* renamed from: r  reason: collision with root package name */
    private static final double[] f48224r;

    /* renamed from: s  reason: collision with root package name */
    private static final double[][] f48225s;

    /* renamed from: t  reason: collision with root package name */
    private static final /* synthetic */ e[] f48226t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    enum a extends e {
        a(String str, int i10) {
            super(str, i10, null);
        }

        private double n(double d10) {
            i0 t02 = qt.c.f(d10).h().t0(p.f39689v);
            return t02.V().B0() + (((Integer) t02.X().s(g0.K)).intValue() / 86400.0d);
        }

        private double o(double d10) {
            double d11 = (d10 * 0.9856d) - 3.289d;
            return qt.a.b((Math.sin(Math.toRadians(d11)) * 1.916d) + d11 + (Math.sin(Math.toRadians(d11) * 2.0d) * 0.02d) + 282.634d);
        }

        @Override // qt.e
        public double g(double d10) {
            return Math.toDegrees(Math.asin(Math.sin(Math.toRadians(o(n(d10)))) * 0.39782d));
        }

        @Override // qt.e
        public double k(double d10) {
            double o10 = o(n(d10));
            double b10 = qt.a.b(Math.toDegrees(Math.atan(Math.tan(Math.toRadians(o10)) * 0.91764d)));
            return (b10 + (Math.floor(o10 / 90.0d) * 90.0d)) - (Math.floor(b10 / 90.0d) * 90.0d);
        }
    }

    static {
        a aVar = new a("SIMPLE", 0);
        f48218d = aVar;
        e eVar = new e("NOAA", 1) { // from class: qt.e.b
            private double n(double d10) {
                return Math.asin(Math.sin(Math.toRadians(s(d10))) * Math.sin(Math.toRadians(t(d10))));
            }

            private double o(double d10) {
                double radians = Math.toRadians(q(d10));
                return (Math.sin(radians) * (1.914602d - (((1.4E-5d * d10) + 0.004817d) * d10))) + (Math.sin(2.0d * radians) * (0.019993d - (d10 * 1.01E-4d))) + (Math.sin(radians * 3.0d) * 2.89E-4d);
            }

            private double q(double d10) {
                return ((35999.05029d - (1.537E-4d * d10)) * d10) + 357.52911d;
            }

            private double r(double d10) {
                return ((((3.032E-4d * d10) + 36000.76983d) * d10) + 280.46646d) % 360.0d;
            }

            private double s(double d10) {
                return (((((((0.001813d * d10) - 5.9E-4d) * d10) - 46.815d) * d10) + 21.448d) / 3600.0d) + 23.433333333333334d + (Math.cos(Math.toRadians(125.04d - (d10 * 1934.136d))) * 0.00256d);
            }

            private double t(double d10) {
                return ((r(d10) + o(d10)) - 0.00569d) - (Math.sin(Math.toRadians(125.04d - (d10 * 1934.136d))) * 0.00478d);
            }

            @Override // qt.e
            public double g(double d10) {
                return Math.toDegrees(n(e.m(d10)));
            }

            @Override // qt.e
            public double k(double d10) {
                double m10 = e.m(d10);
                double radians = Math.toRadians(t(m10));
                return qt.a.b(Math.toDegrees(Math.atan2(Math.cos(Math.toRadians(s(m10))) * Math.sin(radians), Math.cos(radians))));
            }
        };
        f48219e = eVar;
        e eVar2 = new e("CC", 2) { // from class: qt.e.c
            private double n(double d10) {
                return Math.asin(Math.sin(Math.toRadians(r(d10))) * Math.sin(Math.toRadians(e.f(d10, q(d10)))));
            }

            private double o(double d10) {
                return (((((4.8E-7d * d10) - 1.559E-4d) * d10) + 35999.0503d) * d10) + 357.5291d;
            }

            private double q(double d10) {
                return (Math.sin(Math.toRadians((((0.002063d * d10) - 1934.134d) * d10) + 124.9d)) * (-0.004778d)) - (Math.sin(Math.toRadians((((5.7E-4d * d10) + 72001.5377d) * d10) + 201.11d)) * 3.667E-4d);
            }

            private double r(double d10) {
                return (((((((0.001813d * d10) - 5.9E-4d) * d10) - 46.815d) * d10) + 21.448d) / 3600.0d) + 23.433333333333334d;
            }

            @Override // qt.e
            public double g(double d10) {
                return h(d10, "declination");
            }

            @Override // qt.e
            public double h(double d10, String str) {
                double m10 = e.m(d10);
                if (str.equals("declination")) {
                    return Math.toDegrees(n(m10));
                }
                if (str.equals("right-ascension")) {
                    double radians = Math.toRadians(e.f(m10, q(m10)));
                    return qt.a.b(Math.toDegrees(Math.atan2(Math.cos(Math.toRadians(r(m10))) * Math.sin(radians), Math.cos(radians))));
                } else if (str.equals("nutation")) {
                    return q(m10);
                } else {
                    if (str.equals("obliquity")) {
                        return r(m10);
                    }
                    if (str.equals("mean-anomaly")) {
                        return o(m10);
                    }
                    if (str.equals("solar-longitude")) {
                        return e.f(m10, q(m10));
                    }
                    if (str.equals("solar-latitude")) {
                        return 0.0d;
                    }
                    return Double.NaN;
                }
            }

            @Override // qt.e
            public double k(double d10) {
                return h(d10, "right-ascension");
            }
        };
        f48220i = eVar2;
        e eVar3 = new e("TIME4J", 3) { // from class: qt.e.d
            private double n(double d10) {
                double[] dArr = new double[2];
                e.j(d10, dArr);
                return Math.asin(Math.sin(Math.toRadians(e.i(d10) + dArr[1])) * Math.sin(Math.toRadians(e.f(d10, dArr[0]))));
            }

            private double o(double d10) {
                return ((35999.05029d - (1.537E-4d * d10)) * d10) + 357.52911d;
            }

            @Override // qt.e
            public double g(double d10) {
                return h(d10, "declination");
            }

            @Override // qt.e
            public double h(double d10, String str) {
                double m10 = e.m(d10);
                if (str.equals("declination")) {
                    return Math.toDegrees(n(m10));
                }
                if (str.equals("right-ascension")) {
                    double[] dArr = new double[2];
                    e.j(m10, dArr);
                    double radians = Math.toRadians(e.f(m10, dArr[0]));
                    return qt.a.b(Math.toDegrees(Math.atan2(Math.cos(Math.toRadians(e.i(m10) + dArr[1])) * Math.sin(radians), Math.cos(radians))));
                } else if (str.equals("nutation")) {
                    double[] dArr2 = new double[2];
                    e.j(m10, dArr2);
                    return dArr2[0];
                } else if (str.equals("obliquity")) {
                    double[] dArr3 = new double[2];
                    e.j(m10, dArr3);
                    return e.i(m10) + dArr3[1];
                } else if (str.equals("mean-anomaly")) {
                    return o(m10);
                } else {
                    if (str.equals("solar-longitude")) {
                        double[] dArr4 = new double[2];
                        e.j(m10, dArr4);
                        return e.f(m10, dArr4[0]);
                    } else if (str.equals("solar-latitude")) {
                        return 0.0d;
                    } else {
                        return Double.NaN;
                    }
                }
            }

            @Override // qt.e
            public double k(double d10) {
                return h(d10, "right-ascension");
            }
        };
        f48221o = eVar3;
        f48226t = new e[]{aVar, eVar, eVar2, eVar3};
        f48222p = new int[]{403406, 195207, 119433, 112392, 3891, 2819, 1721, 660, 350, 334, 314, 268, 242, 234, 158, 132, 129, MediaEngine.MAX_SUPPORTED_PROTOCOL_VERSION, 99, 93, 86, 78, 72, 68, 64, 46, 38, 37, 32, 29, 28, 27, 27, 25, 24, 21, 21, 20, 18, 17, 14, 13, 13, 13, 12, 10, 10, 10, 10};
        f48223q = new double[]{270.54861d, 340.19128d, 63.91854d, 331.2622d, 317.843d, 86.631d, 240.052d, 310.26d, 247.23d, 260.87d, 297.82d, 343.14d, 166.79d, 81.53d, 3.5d, 132.75d, 182.95d, 162.03d, 29.8d, 266.4d, 249.2d, 157.6d, 257.8d, 185.1d, 69.9d, 8.0d, 197.1d, 250.4d, 65.3d, 162.7d, 341.5d, 291.6d, 98.5d, 146.7d, 110.0d, 5.2d, 342.6d, 230.9d, 256.1d, 45.3d, 242.9d, 115.2d, 151.8d, 285.3d, 53.3d, 126.6d, 205.7d, 85.9d, 146.1d};
        f48224r = new double[]{0.9287892d, 35999.1376958d, 35999.4089666d, 35998.7287385d, 71998.20261d, 71998.4403d, 36000.35726d, 71997.4812d, 32964.4678d, -19.441d, 445267.1117d, 45036.884d, 3.1008d, 22518.4434d, -19.9739d, 65928.9345d, 9038.0293d, 3034.7684d, 33718.148d, 3034.448d, -2280.773d, 29929.992d, 31556.493d, 149.588d, 9037.75d, 107997.405d, -4444.176d, 151.771d, 67555.316d, 31556.08d, -4561.54d, 107996.706d, 1221.655d, 62894.167d, 31437.369d, 14578.298d, -31931.757d, 34777.243d, 1221.999d, 62894.511d, -4442.039d, 107997.909d, 119.066d, 16859.071d, -4.578d, 26895.292d, -39.127d, 12297.536d, 90073.778d};
        f48225s = new double[][]{new double[]{0.0d, 0.0d, 0.0d, 0.0d, 1.0d, -171996.0d, -174.2d, 92025.0d, 8.9d}, new double[]{-2.0d, 0.0d, 0.0d, 2.0d, 2.0d, -13187.0d, -1.6d, 5736.0d, -3.1d}, new double[]{0.0d, 0.0d, 0.0d, 2.0d, 2.0d, -2274.0d, -0.2d, 977.0d, -0.5d}, new double[]{0.0d, 0.0d, 0.0d, 0.0d, 2.0d, 2062.0d, 0.2d, -895.0d, 0.5d}, new double[]{0.0d, 1.0d, 0.0d, 0.0d, 0.0d, 1426.0d, -3.4d, 54.0d, -0.1d}, new double[]{0.0d, 0.0d, 1.0d, 0.0d, 0.0d, 712.0d, 0.1d, -7.0d, 0.0d}, new double[]{-2.0d, 1.0d, 0.0d, 2.0d, 2.0d, -517.0d, 1.2d, 224.0d, -0.6d}, new double[]{0.0d, 0.0d, 0.0d, 2.0d, 1.0d, -386.0d, -0.4d, 200.0d, 0.0d}, new double[]{0.0d, 0.0d, 1.0d, 2.0d, 2.0d, -301.0d, 0.0d, 129.0d, -0.1d}, new double[]{-2.0d, -1.0d, 0.0d, 2.0d, 2.0d, 217.0d, -0.5d, -95.0d, 0.3d}, new double[]{-2.0d, 0.0d, 1.0d, 0.0d, 0.0d, -158.0d, 0.0d, 0.0d, 0.0d}, new double[]{-2.0d, 0.0d, 0.0d, 2.0d, 1.0d, 129.0d, 0.1d, -70.0d, 0.0d}, new double[]{0.0d, 0.0d, -1.0d, 2.0d, 2.0d, 123.0d, 0.0d, -53.0d, 0.0d}, new double[]{2.0d, 0.0d, 0.0d, 0.0d, 0.0d, 63.0d, 0.0d, 0.0d, 0.0d}, new double[]{0.0d, 0.0d, 1.0d, 0.0d, 1.0d, 63.0d, 0.1d, -33.0d, 0.0d}, new double[]{2.0d, 0.0d, -1.0d, 2.0d, 2.0d, -59.0d, 0.0d, 26.0d, 0.0d}, new double[]{0.0d, 0.0d, -1.0d, 0.0d, 1.0d, -58.0d, -0.1d, 32.0d, 0.0d}, new double[]{0.0d, 0.0d, 1.0d, 2.0d, 1.0d, -51.0d, 0.0d, 27.0d, 0.0d}, new double[]{-2.0d, 0.0d, 2.0d, 0.0d, 0.0d, 48.0d, 0.0d, 0.0d, 0.0d}, new double[]{0.0d, 0.0d, -2.0d, 2.0d, 1.0d, 46.0d, 0.0d, -24.0d, 0.0d}, new double[]{2.0d, 0.0d, 0.0d, 2.0d, 2.0d, -38.0d, 0.0d, 16.0d, 0.0d}, new double[]{0.0d, 0.0d, 2.0d, 2.0d, 2.0d, -31.0d, 0.0d, 13.0d, 0.0d}, new double[]{0.0d, 0.0d, 2.0d, 0.0d, 0.0d, 29.0d, 0.0d, 0.0d, 0.0d}, new double[]{-2.0d, 0.0d, 1.0d, 2.0d, 2.0d, 29.0d, 0.0d, -12.0d, 0.0d}, new double[]{0.0d, 0.0d, 0.0d, 2.0d, 0.0d, 26.0d, 0.0d, 0.0d, 0.0d}, new double[]{-2.0d, 0.0d, 0.0d, 2.0d, 0.0d, -22.0d, 0.0d, 0.0d, 0.0d}, new double[]{0.0d, 0.0d, -1.0d, 2.0d, 1.0d, 21.0d, 0.0d, -10.0d, 0.0d}, new double[]{0.0d, 2.0d, 0.0d, 0.0d, 0.0d, 17.0d, -0.1d, 0.0d, 0.0d}, new double[]{2.0d, 0.0d, -1.0d, 0.0d, 1.0d, 16.0d, 0.0d, -8.0d, 0.0d}, new double[]{-2.0d, 2.0d, 0.0d, 2.0d, 2.0d, -16.0d, 0.1d, 7.0d, 0.0d}, new double[]{0.0d, 1.0d, 0.0d, 0.0d, 1.0d, -15.0d, 0.0d, 9.0d, 0.0d}, new double[]{-2.0d, 0.0d, 1.0d, 0.0d, 1.0d, -13.0d, 0.0d, 7.0d, 0.0d}, new double[]{0.0d, -1.0d, 0.0d, 0.0d, 1.0d, -12.0d, 0.0d, 6.0d, 0.0d}, new double[]{0.0d, 0.0d, 2.0d, -2.0d, 0.0d, 11.0d, 0.0d, 0.0d, 0.0d}, new double[]{2.0d, 0.0d, -1.0d, 2.0d, 1.0d, -10.0d, 0.0d, 5.0d, 0.0d}, new double[]{2.0d, 0.0d, 1.0d, 2.0d, 2.0d, -8.0d, 0.0d, 3.0d, 0.0d}, new double[]{0.0d, 1.0d, 0.0d, 2.0d, 2.0d, 7.0d, 0.0d, -3.0d, 0.0d}, new double[]{-2.0d, 1.0d, 1.0d, 0.0d, 0.0d, -7.0d, 0.0d, 0.0d, 0.0d}, new double[]{0.0d, -1.0d, 0.0d, 2.0d, 2.0d, -7.0d, 0.0d, 3.0d, 0.0d}, new double[]{2.0d, 0.0d, 0.0d, 2.0d, 1.0d, -7.0d, 0.0d, 3.0d, 0.0d}, new double[]{2.0d, 0.0d, 1.0d, 0.0d, 0.0d, 6.0d, 0.0d, 0.0d, 0.0d}, new double[]{-2.0d, 0.0d, 2.0d, 2.0d, 2.0d, 6.0d, 0.0d, -3.0d, 0.0d}, new double[]{-2.0d, 0.0d, 1.0d, 2.0d, 1.0d, 6.0d, 0.0d, -3.0d, 0.0d}, new double[]{2.0d, 0.0d, -2.0d, 0.0d, 1.0d, -6.0d, 0.0d, 3.0d, 0.0d}, new double[]{2.0d, 0.0d, 0.0d, 0.0d, 1.0d, -6.0d, 0.0d, 3.0d, 0.0d}, new double[]{0.0d, -1.0d, 1.0d, 0.0d, 0.0d, 5.0d, 0.0d, 0.0d, 0.0d}, new double[]{-2.0d, -1.0d, 0.0d, 2.0d, 1.0d, -5.0d, 0.0d, 3.0d, 0.0d}, new double[]{-2.0d, 0.0d, 0.0d, 0.0d, 1.0d, -5.0d, 0.0d, 3.0d, 0.0d}, new double[]{0.0d, 0.0d, 2.0d, 2.0d, 1.0d, -5.0d, 0.0d, 3.0d, 0.0d}, new double[]{-2.0d, 0.0d, 2.0d, 0.0d, 1.0d, 4.0d, 0.0d, 0.0d, 0.0d}, new double[]{-2.0d, 1.0d, 0.0d, 2.0d, 1.0d, 4.0d, 0.0d, 0.0d, 0.0d}, new double[]{0.0d, 0.0d, 1.0d, -2.0d, 0.0d, 4.0d, 0.0d, 0.0d, 0.0d}, new double[]{-1.0d, 0.0d, 1.0d, 0.0d, 0.0d, -4.0d, 0.0d, 0.0d, 0.0d}, new double[]{-2.0d, 1.0d, 0.0d, 0.0d, 0.0d, -4.0d, 0.0d, 0.0d, 0.0d}, new double[]{1.0d, 0.0d, 0.0d, 0.0d, 0.0d, -4.0d, 0.0d, 0.0d, 0.0d}, new double[]{0.0d, 0.0d, 1.0d, 2.0d, 0.0d, 3.0d, 0.0d, 0.0d, 0.0d}, new double[]{0.0d, 0.0d, -2.0d, 2.0d, 2.0d, -3.0d, 0.0d, 0.0d, 0.0d}, new double[]{-1.0d, -1.0d, 1.0d, 0.0d, 0.0d, -3.0d, 0.0d, 0.0d, 0.0d}, new double[]{0.0d, 1.0d, 1.0d, 0.0d, 0.0d, -3.0d, 0.0d, 0.0d, 0.0d}, new double[]{0.0d, -1.0d, 1.0d, 2.0d, 2.0d, -3.0d, 0.0d, 0.0d, 0.0d}, new double[]{2.0d, -1.0d, -1.0d, 2.0d, 2.0d, -3.0d, 0.0d, 0.0d, 0.0d}, new double[]{0.0d, 0.0d, 3.0d, 2.0d, 2.0d, -3.0d, 0.0d, 0.0d, 0.0d}, new double[]{2.0d, -1.0d, 0.0d, 2.0d, 2.0d, -3.0d, 0.0d, 0.0d, 0.0d}};
    }

    private e(String str, int i10) {
    }

    private static double a(double d10) {
        return (Math.cos(Math.toRadians((d10 * 35999.01848d) + 177.63d)) * 9.74E-5d) - 0.005575d;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static double f(double d10, double d11) {
        double d12 = 0.0d;
        for (int length = f48222p.length - 1; length >= 0; length--) {
            d12 += f48222p[length] * Math.sin(Math.toRadians(f48223q[length] + (f48224r[length] * d10)));
        }
        double a10 = (((((36000.76953744d * d10) + 282.7771834d) + ((d12 * 5.729577951308232d) / 1000000.0d)) + a(d10)) + d11) / 360.0d;
        return (a10 - Math.floor(a10)) * 360.0d;
    }

    static double i(double d10) {
        return (((((((0.001813d * d10) - 5.9E-4d) * d10) - 46.815d) * d10) + 21.448d) / 3600.0d) + 23.433333333333334d;
    }

    static void j(double d10, double[] dArr) {
        double radians = Math.toRadians((((((5.277768981496142E-6d * d10) - 0.0019142d) * d10) + 445267.11148d) * d10) + 297.85036d);
        double radians2 = Math.toRadians(((((((-3.3333333333333333E-6d) * d10) - 1.603E-4d) * d10) + 35999.05034d) * d10) + 357.52772d);
        double radians3 = Math.toRadians((((((1.7777777777777779E-4d * d10) + 0.0086972d) * d10) + 477198.867398d) * d10) + 134.96298d);
        double radians4 = Math.toRadians((((((3.0555810187307116E-6d * d10) - 0.0036825d) * d10) + 483202.017538d) * d10) + 93.27191d);
        double radians5 = Math.toRadians((((((2.222222222222222E-6d * d10) + 0.0020708d) * d10) - 1934.136261d) * d10) + 125.04452d);
        double d11 = 0.0d;
        double d12 = 0.0d;
        for (int length = f48225s.length - 1; length >= 0; length--) {
            double[] dArr2 = f48225s[length];
            double d13 = (dArr2[0] * radians) + (dArr2[1] * radians2) + (dArr2[2] * radians3) + (dArr2[3] * radians4) + (dArr2[4] * radians5);
            d11 += Math.sin(d13) * (dArr2[5] + (dArr2[6] * d10));
            d12 += Math.cos(d13) * (dArr2[7] + (dArr2[8] * d10));
        }
        dArr[0] = (d11 * 1.0E-4d) / 3600.0d;
        dArr[1] = (d12 * 1.0E-4d) / 3600.0d;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static double m(double d10) {
        return (d10 - 2451545.0d) / 36525.0d;
    }

    public static e valueOf(String str) {
        return (e) Enum.valueOf(e.class, str);
    }

    public static e[] values() {
        return (e[]) f48226t.clone();
    }

    public abstract double g(double d10);

    public double h(double d10, String str) {
        if (str.equals("declination")) {
            return g(d10);
        }
        if (str.equals("right-ascension")) {
            return k(d10);
        }
        return Double.NaN;
    }

    public abstract double k(double d10);

    /* synthetic */ e(String str, int i10, a aVar) {
        this(str, i10);
    }
}
