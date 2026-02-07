package ne;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.nio.ByteBuffer;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class d0 {

    /* renamed from: a  reason: collision with root package name */
    public static final byte[] f38913a = {0, 0, 0, 1};

    /* renamed from: b  reason: collision with root package name */
    public static final float[] f38914b = {1.0f, 1.0f, 1.0909091f, 0.90909094f, 1.4545455f, 1.2121212f, 2.1818182f, 1.8181819f, 2.909091f, 2.4242425f, 1.6363636f, 1.3636364f, 1.939394f, 1.6161616f, 1.3333334f, 1.5f, 2.0f};

    /* renamed from: c  reason: collision with root package name */
    private static final Object f38915c = new Object();

    /* renamed from: d  reason: collision with root package name */
    private static int[] f38916d = new int[10];

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final int f38917a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f38918b;

        /* renamed from: c  reason: collision with root package name */
        public final int f38919c;

        /* renamed from: d  reason: collision with root package name */
        public final int f38920d;

        /* renamed from: e  reason: collision with root package name */
        public final int f38921e;

        /* renamed from: f  reason: collision with root package name */
        public final int f38922f;

        /* renamed from: g  reason: collision with root package name */
        public final int f38923g;

        /* renamed from: h  reason: collision with root package name */
        public final int[] f38924h;

        /* renamed from: i  reason: collision with root package name */
        public final int f38925i;

        /* renamed from: j  reason: collision with root package name */
        public final int f38926j;

        /* renamed from: k  reason: collision with root package name */
        public final int f38927k;

        /* renamed from: l  reason: collision with root package name */
        public final int f38928l;

        /* renamed from: m  reason: collision with root package name */
        public final float f38929m;

        /* renamed from: n  reason: collision with root package name */
        public final int f38930n;

        /* renamed from: o  reason: collision with root package name */
        public final int f38931o;

        /* renamed from: p  reason: collision with root package name */
        public final int f38932p;

        public a(int i10, boolean z10, int i11, int i12, int i13, int i14, int i15, int[] iArr, int i16, int i17, int i18, int i19, float f10, int i20, int i21, int i22) {
            this.f38917a = i10;
            this.f38918b = z10;
            this.f38919c = i11;
            this.f38920d = i12;
            this.f38921e = i13;
            this.f38922f = i14;
            this.f38923g = i15;
            this.f38924h = iArr;
            this.f38925i = i16;
            this.f38926j = i17;
            this.f38927k = i18;
            this.f38928l = i19;
            this.f38929m = f10;
            this.f38930n = i20;
            this.f38931o = i21;
            this.f38932p = i22;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f38933a;

        /* renamed from: b  reason: collision with root package name */
        public final int f38934b;

        /* renamed from: c  reason: collision with root package name */
        public final boolean f38935c;

        public b(int i10, int i11, boolean z10) {
            this.f38933a = i10;
            this.f38934b = i11;
            this.f38935c = z10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final int f38936a;

        /* renamed from: b  reason: collision with root package name */
        public final int f38937b;

        /* renamed from: c  reason: collision with root package name */
        public final int f38938c;

        /* renamed from: d  reason: collision with root package name */
        public final int f38939d;

        /* renamed from: e  reason: collision with root package name */
        public final int f38940e;

        /* renamed from: f  reason: collision with root package name */
        public final int f38941f;

        /* renamed from: g  reason: collision with root package name */
        public final int f38942g;

        /* renamed from: h  reason: collision with root package name */
        public final float f38943h;

        /* renamed from: i  reason: collision with root package name */
        public final boolean f38944i;

        /* renamed from: j  reason: collision with root package name */
        public final boolean f38945j;

        /* renamed from: k  reason: collision with root package name */
        public final int f38946k;

        /* renamed from: l  reason: collision with root package name */
        public final int f38947l;

        /* renamed from: m  reason: collision with root package name */
        public final int f38948m;

        /* renamed from: n  reason: collision with root package name */
        public final boolean f38949n;

        /* renamed from: o  reason: collision with root package name */
        public final int f38950o;

        /* renamed from: p  reason: collision with root package name */
        public final int f38951p;

        /* renamed from: q  reason: collision with root package name */
        public final int f38952q;

        public c(int i10, int i11, int i12, int i13, int i14, int i15, int i16, float f10, boolean z10, boolean z11, int i17, int i18, int i19, boolean z12, int i20, int i21, int i22) {
            this.f38936a = i10;
            this.f38937b = i11;
            this.f38938c = i12;
            this.f38939d = i13;
            this.f38940e = i14;
            this.f38941f = i15;
            this.f38942g = i16;
            this.f38943h = f10;
            this.f38944i = z10;
            this.f38945j = z11;
            this.f38946k = i17;
            this.f38947l = i18;
            this.f38948m = i19;
            this.f38949n = z12;
            this.f38950o = i20;
            this.f38951p = i21;
            this.f38952q = i22;
        }
    }

    public static void a(boolean[] zArr) {
        zArr[0] = false;
        zArr[1] = false;
        zArr[2] = false;
    }

    public static void b(ByteBuffer byteBuffer) {
        int position = byteBuffer.position();
        int i10 = 0;
        int i11 = 0;
        while (true) {
            int i12 = i10 + 1;
            if (i12 < position) {
                int i13 = byteBuffer.get(i10) & 255;
                if (i11 == 3) {
                    if (i13 == 1 && (byteBuffer.get(i12) & 31) == 7) {
                        ByteBuffer duplicate = byteBuffer.duplicate();
                        duplicate.position(i10 - 3);
                        duplicate.limit(position);
                        byteBuffer.position(0);
                        byteBuffer.put(duplicate);
                        return;
                    }
                } else if (i13 == 0) {
                    i11++;
                }
                if (i13 != 0) {
                    i11 = 0;
                }
                i10 = i12;
            } else {
                byteBuffer.clear();
                return;
            }
        }
    }

    public static int c(byte[] bArr, int i10, int i11, boolean[] zArr) {
        boolean z10;
        boolean z11;
        boolean z12;
        int i12 = i11 - i10;
        boolean z13 = false;
        if (i12 >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        if (i12 == 0) {
            return i11;
        }
        if (zArr[0]) {
            a(zArr);
            return i10 - 3;
        } else if (i12 > 1 && zArr[1] && bArr[i10] == 1) {
            a(zArr);
            return i10 - 2;
        } else if (i12 > 2 && zArr[2] && bArr[i10] == 0 && bArr[i10 + 1] == 1) {
            a(zArr);
            return i10 - 1;
        } else {
            int i13 = i11 - 1;
            int i14 = i10 + 2;
            while (i14 < i13) {
                byte b10 = bArr[i14];
                if ((b10 & 254) == 0) {
                    int i15 = i14 - 2;
                    if (bArr[i15] == 0 && bArr[i14 - 1] == 0 && b10 == 1) {
                        a(zArr);
                        return i15;
                    }
                    i14 -= 2;
                }
                i14 += 3;
            }
            if (i12 <= 2 ? !(i12 != 2 ? !zArr[1] || bArr[i13] != 1 : !zArr[2] || bArr[i11 - 2] != 0 || bArr[i13] != 1) : !(bArr[i11 - 3] != 0 || bArr[i11 - 2] != 0 || bArr[i13] != 1)) {
                z11 = true;
            } else {
                z11 = false;
            }
            zArr[0] = z11;
            if (i12 <= 1 ? !(!zArr[2] || bArr[i13] != 0) : !(bArr[i11 - 2] != 0 || bArr[i13] != 0)) {
                z12 = true;
            } else {
                z12 = false;
            }
            zArr[1] = z12;
            if (bArr[i13] == 0) {
                z13 = true;
            }
            zArr[2] = z13;
            return i11;
        }
    }

    private static int d(byte[] bArr, int i10, int i11) {
        while (i10 < i11 - 2) {
            if (bArr[i10] == 0 && bArr[i10 + 1] == 0 && bArr[i10 + 2] == 3) {
                return i10;
            }
            i10++;
        }
        return i11;
    }

    public static int e(byte[] bArr, int i10) {
        return (bArr[i10 + 3] & 126) >> 1;
    }

    public static int f(byte[] bArr, int i10) {
        return bArr[i10 + 3] & 31;
    }

    public static boolean g(String str, byte b10) {
        if (("video/avc".equals(str) && (b10 & 31) == 6) || ("video/hevc".equals(str) && ((b10 & 126) >> 1) == 39)) {
            return true;
        }
        return false;
    }

    public static a h(byte[] bArr, int i10, int i11) {
        return i(bArr, i10 + 2, i11);
    }

    public static a i(byte[] bArr, int i10, int i11) {
        int i12;
        int i13;
        int i14;
        int i15;
        int i16;
        int i17;
        int i18;
        int i19;
        int i20;
        int i21;
        int i22;
        int i23;
        i0 i0Var = new i0(bArr, i10, i11);
        i0Var.l(4);
        int e10 = i0Var.e(3);
        i0Var.k();
        int e11 = i0Var.e(2);
        boolean d10 = i0Var.d();
        int e12 = i0Var.e(5);
        int i24 = 0;
        for (int i25 = 0; i25 < 32; i25++) {
            if (i0Var.d()) {
                i24 |= 1 << i25;
            }
        }
        int[] iArr = new int[6];
        for (int i26 = 0; i26 < 6; i26++) {
            iArr[i26] = i0Var.e(8);
        }
        int e13 = i0Var.e(8);
        int i27 = 0;
        for (int i28 = 0; i28 < e10; i28++) {
            if (i0Var.d()) {
                i27 += 89;
            }
            if (i0Var.d()) {
                i27 += 8;
            }
        }
        i0Var.l(i27);
        if (e10 > 0) {
            i0Var.l((8 - e10) * 2);
        }
        int h10 = i0Var.h();
        int h11 = i0Var.h();
        if (h11 == 3) {
            i0Var.k();
        }
        int h12 = i0Var.h();
        int h13 = i0Var.h();
        if (i0Var.d()) {
            int h14 = i0Var.h();
            int h15 = i0Var.h();
            int h16 = i0Var.h();
            int h17 = i0Var.h();
            if (h11 != 1 && h11 != 2) {
                i22 = 1;
            } else {
                i22 = 2;
            }
            if (h11 == 1) {
                i23 = 2;
            } else {
                i23 = 1;
            }
            h12 -= i22 * (h14 + h15);
            h13 -= i23 * (h16 + h17);
        }
        int h18 = i0Var.h();
        int h19 = i0Var.h();
        int h20 = i0Var.h();
        if (i0Var.d()) {
            i12 = 0;
        } else {
            i12 = e10;
        }
        for (int i29 = i12; i29 <= e10; i29++) {
            i0Var.h();
            i0Var.h();
            i0Var.h();
        }
        i0Var.h();
        i0Var.h();
        i0Var.h();
        i0Var.h();
        i0Var.h();
        i0Var.h();
        if (i0Var.d() && i0Var.d()) {
            n(i0Var);
        }
        i0Var.l(2);
        if (i0Var.d()) {
            i0Var.l(8);
            i0Var.h();
            i0Var.h();
            i0Var.k();
        }
        p(i0Var);
        if (i0Var.d()) {
            int h21 = i0Var.h();
            for (int i30 = 0; i30 < h21; i30++) {
                i0Var.l(h20 + 5);
            }
        }
        i0Var.l(2);
        float f10 = 1.0f;
        if (i0Var.d()) {
            if (i0Var.d()) {
                int e14 = i0Var.e(8);
                if (e14 == 255) {
                    int e15 = i0Var.e(16);
                    int e16 = i0Var.e(16);
                    if (e15 != 0 && e16 != 0) {
                        f10 = e15 / e16;
                    }
                } else {
                    float[] fArr = f38914b;
                    if (e14 < fArr.length) {
                        f10 = fArr[e14];
                    } else {
                        y.i("NalUnitUtil", "Unexpected aspect_ratio_idc value: " + e14);
                    }
                }
            }
            if (i0Var.d()) {
                i0Var.k();
            }
            if (i0Var.d()) {
                i0Var.l(3);
                if (i0Var.d()) {
                    i21 = 1;
                } else {
                    i21 = 2;
                }
                if (i0Var.d()) {
                    int e17 = i0Var.e(8);
                    int e18 = i0Var.e(8);
                    i0Var.l(8);
                    int h22 = oe.c.h(e17);
                    int i31 = oe.c.i(e18);
                    i20 = h22;
                    i19 = i31;
                } else {
                    i19 = -1;
                    i20 = -1;
                }
            } else {
                i19 = -1;
                i20 = -1;
                i21 = -1;
            }
            if (i0Var.d()) {
                i0Var.h();
                i0Var.h();
            }
            i0Var.k();
            if (i0Var.d()) {
                h13 *= 2;
            }
            i18 = i19;
            i16 = i20;
            i17 = i21;
            i13 = h10;
            i14 = h12;
            i15 = h13;
        } else {
            i13 = h10;
            i14 = h12;
            i15 = h13;
            i16 = -1;
            i17 = -1;
            i18 = -1;
        }
        return new a(e11, d10, e12, i24, h11, h18, h19, iArr, e13, i13, i14, i15, f10, i16, i17, i18);
    }

    public static b j(byte[] bArr, int i10, int i11) {
        return k(bArr, i10 + 1, i11);
    }

    public static b k(byte[] bArr, int i10, int i11) {
        i0 i0Var = new i0(bArr, i10, i11);
        int h10 = i0Var.h();
        int h11 = i0Var.h();
        i0Var.k();
        return new b(h10, h11, i0Var.d());
    }

    public static c l(byte[] bArr, int i10, int i11) {
        return m(bArr, i10 + 1, i11);
    }

    public static c m(byte[] bArr, int i10, int i11) {
        int h10;
        boolean z10;
        int i12;
        int i13;
        int i14;
        boolean z11;
        int i15;
        boolean z12;
        int i16;
        int i17;
        int i18;
        int i19;
        int i20;
        int i21;
        i0 i0Var = new i0(bArr, i10, i11);
        int e10 = i0Var.e(8);
        int e11 = i0Var.e(8);
        int e12 = i0Var.e(8);
        int h11 = i0Var.h();
        if (e10 != 100 && e10 != 110 && e10 != 122 && e10 != 244 && e10 != 44 && e10 != 83 && e10 != 86 && e10 != 118 && e10 != 128 && e10 != 138) {
            h10 = 1;
            z10 = false;
        } else {
            h10 = i0Var.h();
            if (h10 == 3) {
                z10 = i0Var.d();
            } else {
                z10 = false;
            }
            i0Var.h();
            i0Var.h();
            i0Var.k();
            if (i0Var.d()) {
                if (h10 != 3) {
                    i12 = 8;
                } else {
                    i12 = 12;
                }
                for (int i22 = 0; i22 < i12; i22++) {
                    if (i0Var.d()) {
                        if (i22 < 6) {
                            i13 = 16;
                        } else {
                            i13 = 64;
                        }
                        o(i0Var, i13);
                    }
                }
            }
        }
        int h12 = i0Var.h() + 4;
        int h13 = i0Var.h();
        if (h13 == 0) {
            i14 = 1;
            z11 = z10;
            i16 = i0Var.h() + 4;
            i15 = 16;
            z12 = false;
        } else {
            if (h13 == 1) {
                boolean d10 = i0Var.d();
                i0Var.g();
                i0Var.g();
                z11 = z10;
                long h14 = i0Var.h();
                i14 = 1;
                i15 = 16;
                for (int i23 = 0; i23 < h14; i23++) {
                    i0Var.h();
                }
                z12 = d10;
            } else {
                i14 = 1;
                z11 = z10;
                i15 = 16;
                z12 = false;
            }
            i16 = 0;
        }
        int h15 = i0Var.h();
        i0Var.k();
        int h16 = i0Var.h() + 1;
        boolean d11 = i0Var.d();
        int h17 = (2 - (d11 ? 1 : 0)) * (i0Var.h() + 1);
        if (!d11) {
            i0Var.k();
        }
        i0Var.k();
        int i24 = h16 * 16;
        int i25 = h17 * 16;
        int i26 = 2;
        if (i0Var.d()) {
            int h18 = i0Var.h();
            int h19 = i0Var.h();
            int h20 = i0Var.h();
            int h21 = i0Var.h();
            if (h10 == 0) {
                i21 = 2 - (d11 ? 1 : 0);
            } else {
                if (h10 == 3) {
                    i19 = i14;
                } else {
                    i19 = i14;
                    i14 = 2;
                }
                if (h10 == i19) {
                    i20 = 2;
                } else {
                    i20 = i19;
                }
                i21 = i20 * (2 - (d11 ? 1 : 0));
            }
            i24 -= (h18 + h19) * i14;
            i25 -= (h20 + h21) * i21;
        }
        float f10 = 1.0f;
        if (i0Var.d()) {
            if (i0Var.d()) {
                int e13 = i0Var.e(8);
                if (e13 == 255) {
                    int i27 = i15;
                    int e14 = i0Var.e(i27);
                    int e15 = i0Var.e(i27);
                    if (e14 != 0 && e15 != 0) {
                        f10 = e14 / e15;
                    }
                } else {
                    float[] fArr = f38914b;
                    if (e13 < fArr.length) {
                        f10 = fArr[e13];
                    } else {
                        y.i("NalUnitUtil", "Unexpected aspect_ratio_idc value: " + e13);
                    }
                }
            }
            if (i0Var.d()) {
                i0Var.k();
            }
            if (i0Var.d()) {
                i0Var.l(3);
                if (i0Var.d()) {
                    i26 = 1;
                }
                if (i0Var.d()) {
                    int e16 = i0Var.e(8);
                    int e17 = i0Var.e(8);
                    i0Var.l(8);
                    i17 = oe.c.h(e16);
                    i18 = oe.c.i(e17);
                    return new c(e10, e11, e12, h11, h15, i24, i25, f10, z11, d11, h12, h13, i16, z12, i17, i26, i18);
                }
                i17 = -1;
                i18 = -1;
                return new c(e10, e11, e12, h11, h15, i24, i25, f10, z11, d11, h12, h13, i16, z12, i17, i26, i18);
            }
        }
        i17 = -1;
        i26 = -1;
        i18 = -1;
        return new c(e10, e11, e12, h11, h15, i24, i25, f10, z11, d11, h12, h13, i16, z12, i17, i26, i18);
    }

    private static void n(i0 i0Var) {
        for (int i10 = 0; i10 < 4; i10++) {
            int i11 = 0;
            while (i11 < 6) {
                int i12 = 1;
                if (!i0Var.d()) {
                    i0Var.h();
                } else {
                    int min = Math.min(64, 1 << ((i10 << 1) + 4));
                    if (i10 > 1) {
                        i0Var.g();
                    }
                    for (int i13 = 0; i13 < min; i13++) {
                        i0Var.g();
                    }
                }
                if (i10 == 3) {
                    i12 = 3;
                }
                i11 += i12;
            }
        }
    }

    private static void o(i0 i0Var, int i10) {
        int i11 = 8;
        int i12 = 8;
        for (int i13 = 0; i13 < i10; i13++) {
            if (i11 != 0) {
                i11 = ((i0Var.g() + i12) + IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
            }
            if (i11 != 0) {
                i12 = i11;
            }
        }
    }

    private static void p(i0 i0Var) {
        int i10;
        int i11;
        int h10 = i0Var.h();
        int[] iArr = new int[0];
        int[] iArr2 = new int[0];
        int i12 = -1;
        int i13 = -1;
        for (int i14 = 0; i14 < h10; i14++) {
            if (i14 != 0 && i0Var.d()) {
                int i15 = i12 + i13;
                int h11 = (1 - ((i0Var.d() ? 1 : 0) * 2)) * (i0Var.h() + 1);
                int i16 = i15 + 1;
                boolean[] zArr = new boolean[i16];
                for (int i17 = 0; i17 <= i15; i17++) {
                    if (!i0Var.d()) {
                        zArr[i17] = i0Var.d();
                    } else {
                        zArr[i17] = true;
                    }
                }
                int[] iArr3 = new int[i16];
                int[] iArr4 = new int[i16];
                int i18 = 0;
                for (int i19 = i13 - 1; i19 >= 0; i19--) {
                    int i20 = iArr2[i19] + h11;
                    if (i20 < 0 && zArr[i12 + i19]) {
                        iArr3[i18] = i20;
                        i18++;
                    }
                }
                if (h11 < 0 && zArr[i15]) {
                    iArr3[i18] = h11;
                    i18++;
                }
                for (int i21 = 0; i21 < i12; i21++) {
                    int i22 = iArr[i21] + h11;
                    if (i22 < 0 && zArr[i21]) {
                        iArr3[i18] = i22;
                        i18++;
                    }
                }
                int[] copyOf = Arrays.copyOf(iArr3, i18);
                int i23 = 0;
                for (int i24 = i12 - 1; i24 >= 0; i24--) {
                    int i25 = iArr[i24] + h11;
                    if (i25 > 0 && zArr[i24]) {
                        iArr4[i23] = i25;
                        i23++;
                    }
                }
                if (h11 > 0 && zArr[i15]) {
                    iArr4[i23] = h11;
                    i23++;
                }
                for (int i26 = 0; i26 < i13; i26++) {
                    int i27 = iArr2[i26] + h11;
                    if (i27 > 0 && zArr[i12 + i26]) {
                        iArr4[i23] = i27;
                        i23++;
                    }
                }
                iArr2 = Arrays.copyOf(iArr4, i23);
                iArr = copyOf;
                i12 = i18;
                i13 = i23;
            } else {
                int h12 = i0Var.h();
                int h13 = i0Var.h();
                int[] iArr5 = new int[h12];
                for (int i28 = 0; i28 < h12; i28++) {
                    if (i28 > 0) {
                        i11 = iArr5[i28 - 1];
                    } else {
                        i11 = 0;
                    }
                    iArr5[i28] = i11 - (i0Var.h() + 1);
                    i0Var.k();
                }
                int[] iArr6 = new int[h13];
                for (int i29 = 0; i29 < h13; i29++) {
                    if (i29 > 0) {
                        i10 = iArr6[i29 - 1];
                    } else {
                        i10 = 0;
                    }
                    iArr6[i29] = i10 + i0Var.h() + 1;
                    i0Var.k();
                }
                i12 = h12;
                iArr = iArr5;
                i13 = h13;
                iArr2 = iArr6;
            }
        }
    }

    public static int q(byte[] bArr, int i10) {
        int i11;
        synchronized (f38915c) {
            int i12 = 0;
            int i13 = 0;
            while (i12 < i10) {
                try {
                    i12 = d(bArr, i12, i10);
                    if (i12 < i10) {
                        int[] iArr = f38916d;
                        if (iArr.length <= i13) {
                            f38916d = Arrays.copyOf(iArr, iArr.length * 2);
                        }
                        f38916d[i13] = i12;
                        i12 += 3;
                        i13++;
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            i11 = i10 - i13;
            int i14 = 0;
            int i15 = 0;
            for (int i16 = 0; i16 < i13; i16++) {
                int i17 = f38916d[i16] - i15;
                System.arraycopy(bArr, i15, bArr, i14, i17);
                int i18 = i14 + i17;
                int i19 = i18 + 1;
                bArr[i18] = 0;
                i14 = i18 + 2;
                bArr[i19] = 0;
                i15 += i17 + 3;
            }
            System.arraycopy(bArr, i15, bArr, i14, i11 - i14);
        }
        return i11;
    }
}
