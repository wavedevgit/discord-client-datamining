package com.horcrux.svg;

import android.graphics.Path;
import android.graphics.RectF;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class j0 {

    /* renamed from: a  reason: collision with root package name */
    static float f17056a;

    /* renamed from: b  reason: collision with root package name */
    private static int f17057b;

    /* renamed from: c  reason: collision with root package name */
    private static int f17058c;

    /* renamed from: d  reason: collision with root package name */
    private static String f17059d;

    /* renamed from: e  reason: collision with root package name */
    private static Path f17060e;

    /* renamed from: f  reason: collision with root package name */
    static ArrayList f17061f;

    /* renamed from: g  reason: collision with root package name */
    private static float f17062g;

    /* renamed from: h  reason: collision with root package name */
    private static float f17063h;

    /* renamed from: i  reason: collision with root package name */
    private static float f17064i;

    /* renamed from: j  reason: collision with root package name */
    private static float f17065j;

    /* renamed from: k  reason: collision with root package name */
    private static float f17066k;

    /* renamed from: l  reason: collision with root package name */
    private static float f17067l;

    /* renamed from: m  reason: collision with root package name */
    private static boolean f17068m;

    private static void A(float f10, float f11, float f12, float f13) {
        f17064i = f10;
        f17065j = f11;
        e((f17062g * 2.0f) - f17064i, (f17063h * 2.0f) - f17065j, f10, f11, f12, f13);
    }

    private static void B(float f10, float f11) {
        C(f10 + f17062g, f11 + f17063h);
    }

    private static void C(float f10, float f11) {
        u((f17062g * 2.0f) - f17064i, (f17063h * 2.0f) - f17065j, f10, f11);
    }

    private static void a(float f10, float f11, float f12, boolean z10, boolean z11, float f13, float f14) {
        b(f10, f11, f12, z10, z11, f13 + f17062g, f14 + f17063h);
    }

    private static void b(float f10, float f11, float f12, boolean z10, boolean z11, float f13, float f14) {
        float f15;
        float f16;
        float f17;
        float f18;
        float f19;
        float f20;
        float f21;
        float f22;
        float f23;
        float f24 = f17062g;
        float f25 = f17063h;
        if (f11 == 0.0f) {
            if (f10 == 0.0f) {
                f15 = f14 - f25;
            } else {
                f15 = f10;
            }
        } else {
            f15 = f11;
        }
        float abs = Math.abs(f15);
        if (f10 == 0.0f) {
            f16 = f13 - f24;
        } else {
            f16 = f10;
        }
        float abs2 = Math.abs(f16);
        if (abs2 != 0.0f && abs != 0.0f && (f13 != f24 || f14 != f25)) {
            float radians = (float) Math.toRadians(f12);
            double d10 = radians;
            float cos = (float) Math.cos(d10);
            float sin = (float) Math.sin(d10);
            float f26 = f13 - f24;
            float f27 = f14 - f25;
            float f28 = ((cos * f26) / 2.0f) + ((sin * f27) / 2.0f);
            float f29 = -sin;
            float f30 = ((f29 * f26) / 2.0f) + ((cos * f27) / 2.0f);
            float f31 = abs2 * abs2;
            float f32 = abs * abs * f28 * f28;
            if ((((f31 * abs) * abs) - ((f31 * f30) * f30)) - f32 < 0.0f) {
                f20 = 0.0f;
                float sqrt = (float) Math.sqrt(1.0f - (f19 / f17));
                abs2 *= sqrt;
                f23 = abs * sqrt;
                f22 = f26 / 2.0f;
                f21 = f27 / 2.0f;
            } else {
                f20 = 0.0f;
                float sqrt2 = (float) Math.sqrt(f19 / (f18 + f32));
                if (z10 == z11) {
                    sqrt2 = -sqrt2;
                }
                float f33 = (((-sqrt2) * f30) * abs2) / abs;
                float f34 = ((sqrt2 * f28) * abs) / abs2;
                f21 = (f27 / 2.0f) + (f33 * sin) + (f34 * cos);
                f22 = ((cos * f33) - (sin * f34)) + (f26 / 2.0f);
                f23 = abs;
            }
            float f35 = cos / abs2;
            float f36 = sin / abs2;
            float f37 = f29 / f23;
            float f38 = cos / f23;
            float f39 = -f22;
            float f40 = -f21;
            float f41 = f22;
            float atan2 = (float) Math.atan2((f37 * f39) + (f38 * f40), (f39 * f35) + (f36 * f40));
            float f42 = f26 - f41;
            float f43 = f27 - f21;
            float atan22 = (float) Math.atan2((f37 * f42) + (f38 * f43), (f35 * f42) + (f36 * f43));
            float f44 = f41 + f24;
            float f45 = f21 + f25;
            float f46 = f26 + f24;
            float f47 = f27 + f25;
            w();
            f17064i = f46;
            f17062g = f46;
            f17065j = f47;
            f17063h = f47;
            if (abs2 == f23 && radians == f20) {
                float degrees = (float) Math.toDegrees(atan2);
                float abs3 = Math.abs((degrees - ((float) Math.toDegrees(atan22))) % 360.0f);
                if (!z10 ? abs3 > 180.0f : abs3 < 180.0f) {
                    abs3 = 360.0f - abs3;
                }
                if (!z11) {
                    abs3 = -abs3;
                }
                float f48 = f17056a;
                f17060e.arcTo(new RectF((f44 - abs2) * f48, (f45 - abs2) * f48, (f44 + abs2) * f48, (f45 + abs2) * f48), degrees, abs3);
                f17061f.add(new i0(g.kCGPathElementAddCurveToPoint, new m0[]{new m0(f46, f47)}));
                return;
            }
            c(f44, f45, abs2, f23, atan2, atan22, z11, radians);
            return;
        }
        l(f13, f14);
    }

    /* JADX WARN: Removed duplicated region for block: B:13:0x0067 A[LOOP:0: B:12:0x0065->B:13:0x0067, LOOP_END] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static void c(float r23, float r24, float r25, float r26, float r27, float r28, boolean r29, float r30) {
        /*
            Method dump skipped, instructions count: 275
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.horcrux.svg.j0.c(float, float, float, float, float, float, boolean, float):void");
    }

    private static void d() {
        if (f17068m) {
            f17062g = f17066k;
            f17063h = f17067l;
            f17068m = false;
            f17060e.close();
            f17061f.add(new i0(g.kCGPathElementCloseSubpath, new m0[]{new m0(f17062g, f17063h)}));
        }
    }

    private static void e(float f10, float f11, float f12, float f13, float f14, float f15) {
        w();
        f17062g = f14;
        f17063h = f15;
        Path path = f17060e;
        float f16 = f17056a;
        path.cubicTo(f10 * f16, f11 * f16, f12 * f16, f13 * f16, f14 * f16, f16 * f15);
        f17061f.add(new i0(g.kCGPathElementAddCurveToPoint, new m0[]{new m0(f10, f11), new m0(f12, f13), new m0(f14, f15)}));
    }

    private static void f(float f10, float f11, float f12, float f13, float f14, float f15) {
        float f16 = f17062g;
        float f17 = f17063h;
        g(f10 + f16, f11 + f17, f12 + f16, f13 + f17, f14 + f16, f15 + f17);
    }

    private static void g(float f10, float f11, float f12, float f13, float f14, float f15) {
        f17064i = f12;
        f17065j = f13;
        e(f10, f11, f12, f13, f14, f15);
    }

    private static boolean h(char c10) {
        return Character.isUpperCase(c10);
    }

    private static boolean i(char c10) {
        switch (c10) {
            case 'A':
            case 'C':
            case 'H':
            case 'L':
            case 'M':
            case com.swmansion.reanimated.BuildConfig.REACT_NATIVE_MINOR_VERSION /* 81 */:
            case 'S':
            case 'T':
            case 'V':
            case 'Z':
            case 'a':
            case 'c':
            case 'h':
            case 'l':
            case 'm':
            case 'q':
            case 's':
            case 't':
            case 'v':
            case 'z':
                return true;
            default:
                return false;
        }
    }

    private static boolean j(char c10) {
        return (c10 >= '0' && c10 <= '9') || c10 == '.' || c10 == '-' || c10 == '+';
    }

    private static void k(float f10, float f11) {
        l(f10 + f17062g, f11 + f17063h);
    }

    private static void l(float f10, float f11) {
        w();
        f17062g = f10;
        f17064i = f10;
        f17063h = f11;
        f17065j = f11;
        Path path = f17060e;
        float f12 = f17056a;
        path.lineTo(f10 * f12, f12 * f11);
        f17061f.add(new i0(g.kCGPathElementAddLineToPoint, new m0[]{new m0(f10, f11)}));
    }

    private static void m(float f10, float f11) {
        n(f10 + f17062g, f11 + f17063h);
    }

    private static void n(float f10, float f11) {
        f17062g = f10;
        f17064i = f10;
        f17066k = f10;
        f17063h = f11;
        f17065j = f11;
        f17067l = f11;
        Path path = f17060e;
        float f12 = f17056a;
        path.moveTo(f10 * f12, f12 * f11);
        f17061f.add(new i0(g.kCGPathElementMoveToPoint, new m0[]{new m0(f10, f11)}));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Path o(String str) {
        boolean z10;
        f17061f = new ArrayList();
        Path path = new Path();
        f17060e = path;
        if (str == null) {
            return path;
        }
        f17058c = str.length();
        f17059d = str;
        f17057b = 0;
        f17062g = 0.0f;
        f17063h = 0.0f;
        f17064i = 0.0f;
        f17065j = 0.0f;
        f17066k = 0.0f;
        f17067l = 0.0f;
        f17068m = false;
        char c10 = ' ';
        while (f17057b < f17058c) {
            y();
            int i10 = f17057b;
            if (i10 < f17058c) {
                boolean z11 = true;
                if (c10 != ' ') {
                    z10 = true;
                } else {
                    z10 = false;
                }
                char charAt = f17059d.charAt(i10);
                if (!z10 && charAt != 'M' && charAt != 'm') {
                    throw new IllegalArgumentException(String.format("Unexpected character '%c' (i=%d, s=%s)", Character.valueOf(charAt), Integer.valueOf(f17057b), f17059d));
                }
                if (i(charAt)) {
                    f17057b++;
                    z11 = false;
                    c10 = charAt;
                } else if (j(charAt) && z10) {
                    if (c10 != 'Z' && c10 != 'z') {
                        if (c10 != 'M' && c10 != 'm') {
                            z11 = false;
                        } else if (h(c10)) {
                            c10 = 'L';
                        } else {
                            c10 = 'l';
                        }
                    } else {
                        throw new IllegalArgumentException(String.format("Unexpected number after 'z' (s=%s)", f17059d));
                    }
                } else {
                    throw new IllegalArgumentException(String.format("Unexpected character '%c' (i=%d, s=%s)", Character.valueOf(charAt), Integer.valueOf(f17057b), f17059d));
                }
                boolean h10 = h(c10);
                switch (c10) {
                    case 'A':
                        b(q(), q(), q(), p(), p(), q(), q());
                        break;
                    case 'C':
                        g(q(), q(), q(), q(), q(), q());
                        break;
                    case 'H':
                        l(q(), f17063h);
                        break;
                    case 'L':
                        l(q(), q());
                        break;
                    case 'M':
                        n(q(), q());
                        break;
                    case com.swmansion.reanimated.BuildConfig.REACT_NATIVE_MINOR_VERSION /* 81 */:
                        u(q(), q(), q(), q());
                        break;
                    case 'S':
                        A(q(), q(), q(), q());
                        break;
                    case 'T':
                        C(q(), q());
                        break;
                    case 'V':
                        l(f17062g, q());
                        break;
                    case 'Z':
                    case 'z':
                        d();
                        break;
                    case 'a':
                        a(q(), q(), q(), p(), p(), q(), q());
                        break;
                    case 'c':
                        f(q(), q(), q(), q(), q(), q());
                        break;
                    case 'h':
                        k(q(), 0.0f);
                        break;
                    case 'l':
                        k(q(), q());
                        break;
                    case 'm':
                        m(q(), q());
                        break;
                    case 'q':
                        t(q(), q(), q(), q());
                        break;
                    case 's':
                        z(q(), q(), q(), q());
                        break;
                    case 't':
                        B(q(), q());
                        break;
                    case 'v':
                        k(0.0f, q());
                        break;
                    default:
                        throw new IllegalArgumentException(String.format("Unexpected comand '%c' (s=%s)", Character.valueOf(c10), f17059d));
                }
                if (z11) {
                    if (h10) {
                        c10 = 'M';
                    } else {
                        c10 = 'm';
                    }
                }
            } else {
                return f17060e;
            }
        }
        return f17060e;
    }

    private static boolean p() {
        y();
        char charAt = f17059d.charAt(f17057b);
        if (charAt != '0' && charAt != '1') {
            throw new Error(String.format("Unexpected flag '%c' (i=%d, s=%s)", Character.valueOf(charAt), Integer.valueOf(f17057b), f17059d));
        }
        int i10 = f17057b + 1;
        f17057b = i10;
        if (i10 < f17058c && f17059d.charAt(i10) == ',') {
            f17057b++;
        }
        y();
        if (charAt == '1') {
            return true;
        }
        return false;
    }

    private static float q() {
        if (f17057b != f17058c) {
            float s10 = s();
            y();
            r();
            return s10;
        }
        throw new Error(String.format("Unexpected end (s=%s)", f17059d));
    }

    private static void r() {
        int i10 = f17057b;
        if (i10 < f17058c && f17059d.charAt(i10) == ',') {
            f17057b++;
        }
    }

    private static float s() {
        char charAt;
        y();
        int i10 = f17057b;
        if (i10 != f17058c) {
            char charAt2 = f17059d.charAt(i10);
            if (charAt2 == '-' || charAt2 == '+') {
                int i11 = f17057b + 1;
                f17057b = i11;
                charAt2 = f17059d.charAt(i11);
            }
            if (charAt2 >= '0' && charAt2 <= '9') {
                x();
                int i12 = f17057b;
                if (i12 < f17058c) {
                    charAt2 = f17059d.charAt(i12);
                }
            } else if (charAt2 != '.') {
                throw new IllegalArgumentException(String.format("Invalid number formating character '%c' (i=%d, s=%s)", Character.valueOf(charAt2), Integer.valueOf(f17057b), f17059d));
            }
            if (charAt2 == '.') {
                f17057b++;
                x();
                int i13 = f17057b;
                if (i13 < f17058c) {
                    charAt2 = f17059d.charAt(i13);
                }
            }
            if (charAt2 == 'e' || charAt2 == 'E') {
                int i14 = f17057b;
                if (i14 + 1 < f17058c && (charAt = f17059d.charAt(i14 + 1)) != 'm' && charAt != 'x') {
                    int i15 = f17057b + 1;
                    f17057b = i15;
                    char charAt3 = f17059d.charAt(i15);
                    if (charAt3 != '+' && charAt3 != '-') {
                        if (charAt3 >= '0' && charAt3 <= '9') {
                            x();
                        } else {
                            throw new IllegalArgumentException(String.format("Invalid number formating character '%c' (i=%d, s=%s)", Character.valueOf(charAt3), Integer.valueOf(f17057b), f17059d));
                        }
                    } else {
                        f17057b++;
                        x();
                    }
                }
            }
            String substring = f17059d.substring(i10, f17057b);
            float parseFloat = Float.parseFloat(substring);
            if (!Float.isInfinite(parseFloat) && !Float.isNaN(parseFloat)) {
                return parseFloat;
            }
            throw new IllegalArgumentException(String.format("Invalid number '%s' (start=%d, i=%d, s=%s)", substring, Integer.valueOf(i10), Integer.valueOf(f17057b), f17059d));
        }
        throw new Error(String.format("Unexpected end (s=%s)", f17059d));
    }

    private static void t(float f10, float f11, float f12, float f13) {
        float f14 = f17062g;
        float f15 = f17063h;
        u(f10 + f14, f11 + f15, f12 + f14, f13 + f15);
    }

    private static void u(float f10, float f11, float f12, float f13) {
        f17064i = f10;
        f17065j = f11;
        float f14 = f10 * 2.0f;
        float f15 = f11 * 2.0f;
        float f16 = (f17062g + f14) / 3.0f;
        float f17 = (f17063h + f15) / 3.0f;
        e(f16, f17, (f12 + f14) / 3.0f, (f13 + f15) / 3.0f, f12, f13);
    }

    private static double v(double d10) {
        double pow = Math.pow(10.0d, 4.0d);
        return Math.round(d10 * pow) / pow;
    }

    private static void w() {
        if (!f17068m) {
            f17066k = f17062g;
            f17067l = f17063h;
            f17068m = true;
        }
    }

    private static void x() {
        while (true) {
            int i10 = f17057b;
            if (i10 < f17058c && Character.isDigit(f17059d.charAt(i10))) {
                f17057b++;
            } else {
                return;
            }
        }
    }

    private static void y() {
        while (true) {
            int i10 = f17057b;
            if (i10 < f17058c && Character.isWhitespace(f17059d.charAt(i10))) {
                f17057b++;
            } else {
                return;
            }
        }
    }

    private static void z(float f10, float f11, float f12, float f13) {
        float f14 = f17062g;
        float f15 = f17063h;
        A(f10 + f14, f11 + f15, f12 + f14, f13 + f15);
    }
}
