package tc;

import android.util.Base64;
import com.google.android.exoplayer2.metadata.Metadata;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import lc.l0;
import ne.h0;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class e0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final String f49935a;

        /* renamed from: b  reason: collision with root package name */
        public final String[] f49936b;

        /* renamed from: c  reason: collision with root package name */
        public final int f49937c;

        public a(String str, String[] strArr, int i10) {
            this.f49935a = str;
            this.f49936b = strArr;
            this.f49937c = i10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final boolean f49938a;

        /* renamed from: b  reason: collision with root package name */
        public final int f49939b;

        /* renamed from: c  reason: collision with root package name */
        public final int f49940c;

        /* renamed from: d  reason: collision with root package name */
        public final int f49941d;

        public b(boolean z10, int i10, int i11, int i12) {
            this.f49938a = z10;
            this.f49939b = i10;
            this.f49940c = i11;
            this.f49941d = i12;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final int f49942a;

        /* renamed from: b  reason: collision with root package name */
        public final int f49943b;

        /* renamed from: c  reason: collision with root package name */
        public final int f49944c;

        /* renamed from: d  reason: collision with root package name */
        public final int f49945d;

        /* renamed from: e  reason: collision with root package name */
        public final int f49946e;

        /* renamed from: f  reason: collision with root package name */
        public final int f49947f;

        /* renamed from: g  reason: collision with root package name */
        public final int f49948g;

        /* renamed from: h  reason: collision with root package name */
        public final int f49949h;

        /* renamed from: i  reason: collision with root package name */
        public final boolean f49950i;

        /* renamed from: j  reason: collision with root package name */
        public final byte[] f49951j;

        public c(int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17, boolean z10, byte[] bArr) {
            this.f49942a = i10;
            this.f49943b = i11;
            this.f49944c = i12;
            this.f49945d = i13;
            this.f49946e = i14;
            this.f49947f = i15;
            this.f49948g = i16;
            this.f49949h = i17;
            this.f49950i = z10;
            this.f49951j = bArr;
        }
    }

    public static int a(int i10) {
        int i11 = 0;
        while (i10 > 0) {
            i11++;
            i10 >>>= 1;
        }
        return i11;
    }

    private static long b(long j10, long j11) {
        return (long) Math.floor(Math.pow(j10, 1.0d / j11));
    }

    public static Metadata c(List list) {
        ArrayList arrayList = new ArrayList();
        for (int i10 = 0; i10 < list.size(); i10++) {
            String str = (String) list.get(i10);
            String[] e12 = w0.e1(str, "=");
            if (e12.length != 2) {
                ne.y.i("VorbisUtil", "Failed to parse Vorbis comment: " + str);
            } else if (e12[0].equals("METADATA_BLOCK_PICTURE")) {
                try {
                    arrayList.add(jd.a.a(new h0(Base64.decode(e12[1], 0))));
                } catch (RuntimeException e10) {
                    ne.y.j("VorbisUtil", "Failed to parse vorbis picture", e10);
                }
            } else {
                arrayList.add(new od.a(e12[0], e12[1]));
            }
        }
        if (arrayList.isEmpty()) {
            return null;
        }
        return new Metadata(arrayList);
    }

    private static void d(d0 d0Var) {
        int d10 = d0Var.d(6) + 1;
        for (int i10 = 0; i10 < d10; i10++) {
            int d11 = d0Var.d(16);
            if (d11 != 0) {
                if (d11 == 1) {
                    int d12 = d0Var.d(5);
                    int[] iArr = new int[d12];
                    int i11 = -1;
                    for (int i12 = 0; i12 < d12; i12++) {
                        int d13 = d0Var.d(4);
                        iArr[i12] = d13;
                        if (d13 > i11) {
                            i11 = d13;
                        }
                    }
                    int i13 = i11 + 1;
                    int[] iArr2 = new int[i13];
                    for (int i14 = 0; i14 < i13; i14++) {
                        iArr2[i14] = d0Var.d(3) + 1;
                        int d14 = d0Var.d(2);
                        if (d14 > 0) {
                            d0Var.e(8);
                        }
                        for (int i15 = 0; i15 < (1 << d14); i15++) {
                            d0Var.e(8);
                        }
                    }
                    d0Var.e(2);
                    int d15 = d0Var.d(4);
                    int i16 = 0;
                    int i17 = 0;
                    for (int i18 = 0; i18 < d12; i18++) {
                        i16 += iArr2[iArr[i18]];
                        while (i17 < i16) {
                            d0Var.e(d15);
                            i17++;
                        }
                    }
                } else {
                    throw l0.a("floor type greater than 1 not decodable: " + d11, null);
                }
            } else {
                d0Var.e(8);
                d0Var.e(16);
                d0Var.e(16);
                d0Var.e(6);
                d0Var.e(8);
                int d16 = d0Var.d(4) + 1;
                for (int i19 = 0; i19 < d16; i19++) {
                    d0Var.e(8);
                }
            }
        }
    }

    private static void e(int i10, d0 d0Var) {
        int i11;
        int d10 = d0Var.d(6) + 1;
        for (int i12 = 0; i12 < d10; i12++) {
            int d11 = d0Var.d(16);
            if (d11 != 0) {
                ne.y.c("VorbisUtil", "mapping type other than 0 not supported: " + d11);
            } else {
                if (d0Var.c()) {
                    i11 = d0Var.d(4) + 1;
                } else {
                    i11 = 1;
                }
                if (d0Var.c()) {
                    int d12 = d0Var.d(8) + 1;
                    for (int i13 = 0; i13 < d12; i13++) {
                        int i14 = i10 - 1;
                        d0Var.e(a(i14));
                        d0Var.e(a(i14));
                    }
                }
                if (d0Var.d(2) == 0) {
                    if (i11 > 1) {
                        for (int i15 = 0; i15 < i10; i15++) {
                            d0Var.e(4);
                        }
                    }
                    for (int i16 = 0; i16 < i11; i16++) {
                        d0Var.e(8);
                        d0Var.e(8);
                        d0Var.e(8);
                    }
                } else {
                    throw l0.a("to reserved bits must be zero after mapping coupling steps", null);
                }
            }
        }
    }

    private static b[] f(d0 d0Var) {
        int d10 = d0Var.d(6) + 1;
        b[] bVarArr = new b[d10];
        for (int i10 = 0; i10 < d10; i10++) {
            bVarArr[i10] = new b(d0Var.c(), d0Var.d(16), d0Var.d(16), d0Var.d(8));
        }
        return bVarArr;
    }

    private static void g(d0 d0Var) {
        int i10;
        int d10 = d0Var.d(6) + 1;
        for (int i11 = 0; i11 < d10; i11++) {
            if (d0Var.d(16) <= 2) {
                d0Var.e(24);
                d0Var.e(24);
                d0Var.e(24);
                int d11 = d0Var.d(6) + 1;
                d0Var.e(8);
                int[] iArr = new int[d11];
                for (int i12 = 0; i12 < d11; i12++) {
                    int d12 = d0Var.d(3);
                    if (d0Var.c()) {
                        i10 = d0Var.d(5);
                    } else {
                        i10 = 0;
                    }
                    iArr[i12] = (i10 * 8) + d12;
                }
                for (int i13 = 0; i13 < d11; i13++) {
                    for (int i14 = 0; i14 < 8; i14++) {
                        if ((iArr[i13] & (1 << i14)) != 0) {
                            d0Var.e(8);
                        }
                    }
                }
            } else {
                throw l0.a("residueType greater than 2 is not decodable", null);
            }
        }
    }

    public static a h(h0 h0Var) {
        return i(h0Var, true, true);
    }

    public static a i(h0 h0Var, boolean z10, boolean z11) {
        if (z10) {
            m(3, h0Var, false);
        }
        String E = h0Var.E((int) h0Var.x());
        int length = E.length();
        long x10 = h0Var.x();
        String[] strArr = new String[(int) x10];
        int i10 = length + 15;
        for (int i11 = 0; i11 < x10; i11++) {
            String E2 = h0Var.E((int) h0Var.x());
            strArr[i11] = E2;
            i10 = i10 + 4 + E2.length();
        }
        if (z11 && (h0Var.H() & 1) == 0) {
            throw l0.a("framing bit expected to be set", null);
        }
        return new a(E, strArr, i10 + 1);
    }

    public static c j(h0 h0Var) {
        boolean z10;
        m(1, h0Var, false);
        int y10 = h0Var.y();
        int H = h0Var.H();
        int y11 = h0Var.y();
        int u10 = h0Var.u();
        if (u10 <= 0) {
            u10 = -1;
        }
        int u11 = h0Var.u();
        if (u11 <= 0) {
            u11 = -1;
        }
        int u12 = h0Var.u();
        if (u12 <= 0) {
            u12 = -1;
        }
        int H2 = h0Var.H();
        int pow = (int) Math.pow(2.0d, H2 & 15);
        int pow2 = (int) Math.pow(2.0d, (H2 & 240) >> 4);
        if ((h0Var.H() & 1) > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        return new c(y10, H, y11, u10, u11, u12, pow, pow2, z10, Arrays.copyOf(h0Var.e(), h0Var.g()));
    }

    public static b[] k(h0 h0Var, int i10) {
        m(5, h0Var, false);
        int H = h0Var.H() + 1;
        d0 d0Var = new d0(h0Var.e());
        d0Var.e(h0Var.f() * 8);
        for (int i11 = 0; i11 < H; i11++) {
            l(d0Var);
        }
        int d10 = d0Var.d(6) + 1;
        for (int i12 = 0; i12 < d10; i12++) {
            if (d0Var.d(16) != 0) {
                throw l0.a("placeholder of time domain transforms not zeroed out", null);
            }
        }
        d(d0Var);
        g(d0Var);
        e(i10, d0Var);
        b[] f10 = f(d0Var);
        if (d0Var.c()) {
            return f10;
        }
        throw l0.a("framing bit after modes not set as expected", null);
    }

    private static void l(d0 d0Var) {
        long j10;
        if (d0Var.d(24) == 5653314) {
            int d10 = d0Var.d(16);
            int d11 = d0Var.d(24);
            int i10 = 0;
            if (!d0Var.c()) {
                boolean c10 = d0Var.c();
                while (i10 < d11) {
                    if (c10) {
                        if (d0Var.c()) {
                            d0Var.e(5);
                        }
                    } else {
                        d0Var.e(5);
                    }
                    i10++;
                }
            } else {
                d0Var.e(5);
                while (i10 < d11) {
                    i10 += d0Var.d(a(d11 - i10));
                }
            }
            int d12 = d0Var.d(4);
            if (d12 <= 2) {
                if (d12 != 1 && d12 != 2) {
                    return;
                }
                d0Var.e(32);
                d0Var.e(32);
                int d13 = d0Var.d(4) + 1;
                d0Var.e(1);
                if (d12 == 1) {
                    if (d10 != 0) {
                        j10 = b(d11, d10);
                    } else {
                        j10 = 0;
                    }
                } else {
                    j10 = d10 * d11;
                }
                d0Var.e((int) (j10 * d13));
                return;
            }
            throw l0.a("lookup type greater than 2 not decodable: " + d12, null);
        }
        throw l0.a("expected code book to start with [0x56, 0x43, 0x42] at " + d0Var.b(), null);
    }

    public static boolean m(int i10, h0 h0Var, boolean z10) {
        if (h0Var.a() < 7) {
            if (z10) {
                return false;
            }
            throw l0.a("too short header: " + h0Var.a(), null);
        } else if (h0Var.H() != i10) {
            if (z10) {
                return false;
            }
            throw l0.a("expected header type " + Integer.toHexString(i10), null);
        } else if (h0Var.H() == 118 && h0Var.H() == 111 && h0Var.H() == 114 && h0Var.H() == 98 && h0Var.H() == 105 && h0Var.H() == 115) {
            return true;
        } else {
            if (z10) {
                return false;
            }
            throw l0.a("expected characters 'vorbis'", null);
        }
    }
}
