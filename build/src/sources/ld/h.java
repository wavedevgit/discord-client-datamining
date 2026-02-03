package ld;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.metadata.Metadata;
import com.reactnativecommunity.clipboard.ClipboardModule;
import java.nio.ByteBuffer;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Locale;
import ji.s;
import ne.g0;
import ne.h0;
import ne.w0;
import ne.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h extends gd.e {

    /* renamed from: b  reason: collision with root package name */
    public static final a f37267b = new a() { // from class: ld.g
        @Override // ld.h.a
        public final boolean a(int i10, int i11, int i12, int i13, int i14) {
            return h.c(i10, i11, i12, i13, i14);
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final a f37268a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        boolean a(int i10, int i11, int i12, int i13, int i14);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final int f37269a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f37270b;

        /* renamed from: c  reason: collision with root package name */
        private final int f37271c;

        public b(int i10, boolean z10, int i11) {
            this.f37269a = i10;
            this.f37270b = z10;
            this.f37271c = i11;
        }
    }

    public h() {
        this(null);
    }

    private static int A(h0 h0Var, int i10) {
        byte[] e10 = h0Var.e();
        int f10 = h0Var.f();
        int i11 = f10;
        while (true) {
            int i12 = i11 + 1;
            if (i12 < f10 + i10) {
                if ((e10[i11] & 255) == 255 && e10[i12] == 0) {
                    System.arraycopy(e10, i11 + 2, e10, i12, (i10 - (i11 - f10)) - 2);
                    i10--;
                }
                i11 = i12;
            } else {
                return i10;
            }
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:33:0x0079, code lost:
        if ((r10 & 1) != 0) goto L33;
     */
    /* JADX WARN: Code restructure failed: missing block: B:35:0x007c, code lost:
        r4 = false;
     */
    /* JADX WARN: Code restructure failed: missing block: B:42:0x0089, code lost:
        if ((r10 & com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) goto L33;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static boolean B(ne.h0 r18, int r19, int r20, boolean r21) {
        /*
            r1 = r18
            r0 = r19
            int r2 = r1.f()
        L8:
            int r3 = r1.a()     // Catch: java.lang.Throwable -> L22
            r4 = 1
            r5 = r20
            if (r3 < r5) goto Lae
            r3 = 3
            r6 = 0
            if (r0 < r3) goto L25
            int r7 = r1.q()     // Catch: java.lang.Throwable -> L22
            long r8 = r1.J()     // Catch: java.lang.Throwable -> L22
            int r10 = r1.N()     // Catch: java.lang.Throwable -> L22
            goto L2f
        L22:
            r0 = move-exception
            goto Lb2
        L25:
            int r7 = r1.K()     // Catch: java.lang.Throwable -> L22
            int r8 = r1.K()     // Catch: java.lang.Throwable -> L22
            long r8 = (long) r8
            r10 = r6
        L2f:
            r11 = 0
            if (r7 != 0) goto L3d
            int r7 = (r8 > r11 ? 1 : (r8 == r11 ? 0 : -1))
            if (r7 != 0) goto L3d
            if (r10 != 0) goto L3d
            r1.U(r2)
            return r4
        L3d:
            r7 = 4
            if (r0 != r7) goto L6e
            if (r21 != 0) goto L6e
            r13 = 8421504(0x808080, double:4.160776E-317)
            long r13 = r13 & r8
            int r11 = (r13 > r11 ? 1 : (r13 == r11 ? 0 : -1))
            if (r11 == 0) goto L4e
            r1.U(r2)
            return r6
        L4e:
            r11 = 255(0xff, double:1.26E-321)
            long r13 = r8 & r11
            r15 = 8
            long r15 = r8 >> r15
            long r15 = r15 & r11
            r17 = 7
            long r15 = r15 << r17
            long r13 = r13 | r15
            r15 = 16
            long r15 = r8 >> r15
            long r15 = r15 & r11
            r17 = 14
            long r15 = r15 << r17
            long r13 = r13 | r15
            r15 = 24
            long r8 = r8 >> r15
            long r8 = r8 & r11
            r11 = 21
            long r8 = r8 << r11
            long r8 = r8 | r13
        L6e:
            if (r0 != r7) goto L7e
            r3 = r10 & 64
            if (r3 == 0) goto L76
            r3 = r4
            goto L77
        L76:
            r3 = r6
        L77:
            r7 = r10 & 1
            if (r7 == 0) goto L7c
            goto L8e
        L7c:
            r4 = r6
            goto L8e
        L7e:
            if (r0 != r3) goto L8c
            r3 = r10 & 32
            if (r3 == 0) goto L86
            r3 = r4
            goto L87
        L86:
            r3 = r6
        L87:
            r7 = r10 & 128(0x80, float:1.794E-43)
            if (r7 == 0) goto L7c
            goto L8e
        L8c:
            r3 = r6
            r4 = r3
        L8e:
            if (r4 == 0) goto L92
            int r3 = r3 + 4
        L92:
            long r3 = (long) r3
            int r3 = (r8 > r3 ? 1 : (r8 == r3 ? 0 : -1))
            if (r3 >= 0) goto L9b
            r1.U(r2)
            return r6
        L9b:
            int r3 = r1.a()     // Catch: java.lang.Throwable -> L22
            long r3 = (long) r3
            int r3 = (r3 > r8 ? 1 : (r3 == r8 ? 0 : -1))
            if (r3 >= 0) goto La8
            r1.U(r2)
            return r6
        La8:
            int r3 = (int) r8
            r1.V(r3)     // Catch: java.lang.Throwable -> L22
            goto L8
        Lae:
            r1.U(r2)
            return r4
        Lb2:
            r1.U(r2)
            throw r0
        */
        throw new UnsupportedOperationException("Method not decompiled: ld.h.B(ne.h0, int, int, boolean):boolean");
    }

    public static /* synthetic */ boolean c(int i10, int i11, int i12, int i13, int i14) {
        return false;
    }

    private static byte[] d(byte[] bArr, int i10, int i11) {
        if (i11 <= i10) {
            return w0.f40163f;
        }
        return Arrays.copyOfRange(bArr, i10, i11);
    }

    private static ld.a f(h0 h0Var, int i10, int i11) {
        int z10;
        String str;
        int H = h0Var.H();
        Charset w10 = w(H);
        int i12 = i10 - 1;
        byte[] bArr = new byte[i12];
        h0Var.l(bArr, 0, i12);
        if (i11 == 2) {
            str = "image/" + ii.b.e(new String(bArr, 0, 3, ii.d.f28183b));
            if (ClipboardModule.MIMETYPE_JPG.equals(str)) {
                str = ClipboardModule.MIMETYPE_JPEG;
            }
            z10 = 2;
        } else {
            z10 = z(bArr, 0);
            String e10 = ii.b.e(new String(bArr, 0, z10, ii.d.f28183b));
            if (e10.indexOf(47) == -1) {
                str = "image/" + e10;
            } else {
                str = e10;
            }
        }
        int i13 = z10 + 2;
        int y10 = y(bArr, i13, H);
        return new ld.a(str, new String(bArr, i13, y10 - i13, w10), bArr[z10 + 1] & 255, d(bArr, y10 + v(H), i12));
    }

    private static ld.b g(h0 h0Var, int i10, String str) {
        byte[] bArr = new byte[i10];
        h0Var.l(bArr, 0, i10);
        return new ld.b(str, bArr);
    }

    private static c h(h0 h0Var, int i10, int i11, boolean z10, int i12, a aVar) {
        long j10;
        int f10 = h0Var.f();
        int z11 = z(h0Var.e(), f10);
        String str = new String(h0Var.e(), f10, z11 - f10, ii.d.f28183b);
        h0Var.U(z11 + 1);
        int q10 = h0Var.q();
        int q11 = h0Var.q();
        long J = h0Var.J();
        if (J == 4294967295L) {
            J = -1;
        }
        long J2 = h0Var.J();
        if (J2 == 4294967295L) {
            j10 = -1;
        } else {
            j10 = J2;
        }
        ArrayList arrayList = new ArrayList();
        int i13 = f10 + i10;
        while (h0Var.f() < i13) {
            i k10 = k(i11, h0Var, z10, i12, aVar);
            if (k10 != null) {
                arrayList.add(k10);
            }
        }
        return new c(str, q10, q11, J, j10, (i[]) arrayList.toArray(new i[0]));
    }

    private static d i(h0 h0Var, int i10, int i11, boolean z10, int i12, a aVar) {
        boolean z11;
        boolean z12;
        int f10 = h0Var.f();
        int z13 = z(h0Var.e(), f10);
        String str = new String(h0Var.e(), f10, z13 - f10, ii.d.f28183b);
        h0Var.U(z13 + 1);
        int H = h0Var.H();
        if ((H & 2) != 0) {
            z11 = true;
        } else {
            z11 = false;
        }
        if ((H & 1) != 0) {
            z12 = true;
        } else {
            z12 = false;
        }
        int H2 = h0Var.H();
        String[] strArr = new String[H2];
        for (int i13 = 0; i13 < H2; i13++) {
            int f11 = h0Var.f();
            int z14 = z(h0Var.e(), f11);
            strArr[i13] = new String(h0Var.e(), f11, z14 - f11, ii.d.f28183b);
            h0Var.U(z14 + 1);
        }
        ArrayList arrayList = new ArrayList();
        int i14 = f10 + i10;
        while (h0Var.f() < i14) {
            i k10 = k(i11, h0Var, z10, i12, aVar);
            if (k10 != null) {
                arrayList.add(k10);
            }
        }
        return new d(str, z11, z12, strArr, (i[]) arrayList.toArray(new i[0]));
    }

    private static e j(h0 h0Var, int i10) {
        if (i10 < 4) {
            return null;
        }
        int H = h0Var.H();
        Charset w10 = w(H);
        byte[] bArr = new byte[3];
        h0Var.l(bArr, 0, 3);
        String str = new String(bArr, 0, 3);
        int i11 = i10 - 4;
        byte[] bArr2 = new byte[i11];
        h0Var.l(bArr2, 0, i11);
        int y10 = y(bArr2, 0, H);
        String str2 = new String(bArr2, 0, y10, w10);
        int v10 = y10 + v(H);
        return new e(str, str2, p(bArr2, v10, y(bArr2, v10, H), w10));
    }

    /* JADX WARN: Code restructure failed: missing block: B:130:0x0188, code lost:
        if (r4 == 67) goto L100;
     */
    /* JADX WARN: Removed duplicated region for block: B:168:0x01ff A[Catch: all -> 0x01e0, TRY_LEAVE, TryCatch #0 {all -> 0x01e0, blocks: (B:168:0x01ff, B:156:0x01db, B:165:0x01f0, B:166:0x01f5), top: B:175:0x0109 }] */
    /* JADX WARN: Type inference failed for: r1v16, types: [ne.h0] */
    /* JADX WARN: Type inference failed for: r1v17 */
    /* JADX WARN: Type inference failed for: r1v19 */
    /* JADX WARN: Type inference failed for: r1v27 */
    /* JADX WARN: Type inference failed for: r1v28 */
    /* JADX WARN: Type inference failed for: r1v29 */
    /* JADX WARN: Type inference failed for: r1v6, types: [int] */
    /* JADX WARN: Type inference failed for: r1v9 */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static ld.i k(int r18, ne.h0 r19, boolean r20, int r21, ld.h.a r22) {
        /*
            Method dump skipped, instructions count: 560
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: ld.h.k(int, ne.h0, boolean, int, ld.h$a):ld.i");
    }

    private static f l(h0 h0Var, int i10) {
        int H = h0Var.H();
        Charset w10 = w(H);
        int i11 = i10 - 1;
        byte[] bArr = new byte[i11];
        h0Var.l(bArr, 0, i11);
        int z10 = z(bArr, 0);
        String str = new String(bArr, 0, z10, ii.d.f28183b);
        int i12 = z10 + 1;
        int y10 = y(bArr, i12, H);
        String p10 = p(bArr, i12, y10, w10);
        int v10 = y10 + v(H);
        int y11 = y(bArr, v10, H);
        return new f(str, p10, p(bArr, v10, y11, w10), d(bArr, y11 + v(H), i11));
    }

    private static b m(h0 h0Var) {
        int K;
        if (h0Var.a() < 10) {
            y.i("Id3Decoder", "Data too short to be an ID3 tag");
            return null;
        }
        if (h0Var.K() != 4801587) {
            y.i("Id3Decoder", "Unexpected first three bytes of ID3 tag header: 0x" + String.format("%06X", Integer.valueOf(K)));
            return null;
        }
        int H = h0Var.H();
        boolean z10 = true;
        h0Var.V(1);
        int H2 = h0Var.H();
        int G = h0Var.G();
        if (H == 2) {
            if ((H2 & 64) != 0) {
                y.i("Id3Decoder", "Skipped ID3 tag with majorVersion=2 and undefined compression scheme");
                return null;
            }
        } else if (H == 3) {
            if ((H2 & 64) != 0) {
                int q10 = h0Var.q();
                h0Var.V(q10);
                G -= q10 + 4;
            }
        } else if (H == 4) {
            if ((H2 & 64) != 0) {
                int G2 = h0Var.G();
                h0Var.V(G2 - 4);
                G -= G2;
            }
            if ((H2 & 16) != 0) {
                G -= 10;
            }
        } else {
            y.i("Id3Decoder", "Skipped ID3 tag with unsupported majorVersion=" + H);
            return null;
        }
        return new b(H, (H >= 4 || (H2 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) ? false : false, G);
    }

    private static k n(h0 h0Var, int i10) {
        int N = h0Var.N();
        int K = h0Var.K();
        int K2 = h0Var.K();
        int H = h0Var.H();
        int H2 = h0Var.H();
        g0 g0Var = new g0();
        g0Var.m(h0Var);
        int i11 = ((i10 - 10) * 8) / (H + H2);
        int[] iArr = new int[i11];
        int[] iArr2 = new int[i11];
        for (int i12 = 0; i12 < i11; i12++) {
            int h10 = g0Var.h(H);
            int h11 = g0Var.h(H2);
            iArr[i12] = h10;
            iArr2[i12] = h11;
        }
        return new k(N, K, K2, iArr, iArr2);
    }

    private static l o(h0 h0Var, int i10) {
        byte[] bArr = new byte[i10];
        h0Var.l(bArr, 0, i10);
        int z10 = z(bArr, 0);
        return new l(new String(bArr, 0, z10, ii.d.f28183b), d(bArr, z10 + 1, i10));
    }

    private static String p(byte[] bArr, int i10, int i11, Charset charset) {
        if (i11 > i10 && i11 <= bArr.length) {
            return new String(bArr, i10, i11 - i10, charset);
        }
        return "";
    }

    private static m q(h0 h0Var, int i10, String str) {
        if (i10 < 1) {
            return null;
        }
        int H = h0Var.H();
        int i11 = i10 - 1;
        byte[] bArr = new byte[i11];
        h0Var.l(bArr, 0, i11);
        return new m(str, null, r(bArr, H, 0));
    }

    private static s r(byte[] bArr, int i10, int i11) {
        if (i11 >= bArr.length) {
            return s.s("");
        }
        s.a j10 = s.j();
        int y10 = y(bArr, i11, i10);
        while (i11 < y10) {
            j10.a(new String(bArr, i11, y10 - i11, w(i10)));
            i11 = v(i10) + y10;
            y10 = y(bArr, i11, i10);
        }
        s k10 = j10.k();
        if (k10.isEmpty()) {
            return s.s("");
        }
        return k10;
    }

    private static m s(h0 h0Var, int i10) {
        if (i10 < 1) {
            return null;
        }
        int H = h0Var.H();
        int i11 = i10 - 1;
        byte[] bArr = new byte[i11];
        h0Var.l(bArr, 0, i11);
        int y10 = y(bArr, 0, H);
        return new m("TXXX", new String(bArr, 0, y10, w(H)), r(bArr, H, y10 + v(H)));
    }

    private static n t(h0 h0Var, int i10, String str) {
        byte[] bArr = new byte[i10];
        h0Var.l(bArr, 0, i10);
        return new n(str, null, new String(bArr, 0, z(bArr, 0), ii.d.f28183b));
    }

    private static n u(h0 h0Var, int i10) {
        if (i10 < 1) {
            return null;
        }
        int H = h0Var.H();
        int i11 = i10 - 1;
        byte[] bArr = new byte[i11];
        h0Var.l(bArr, 0, i11);
        int y10 = y(bArr, 0, H);
        String str = new String(bArr, 0, y10, w(H));
        int v10 = y10 + v(H);
        return new n("WXXX", str, p(bArr, v10, z(bArr, v10), ii.d.f28183b));
    }

    private static int v(int i10) {
        if (i10 != 0 && i10 != 3) {
            return 2;
        }
        return 1;
    }

    private static Charset w(int i10) {
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    return ii.d.f28183b;
                }
                return ii.d.f28184c;
            }
            return ii.d.f28185d;
        }
        return ii.d.f28187f;
    }

    private static String x(int i10, int i11, int i12, int i13, int i14) {
        if (i10 == 2) {
            return String.format(Locale.US, "%c%c%c", Integer.valueOf(i11), Integer.valueOf(i12), Integer.valueOf(i13));
        }
        return String.format(Locale.US, "%c%c%c%c", Integer.valueOf(i11), Integer.valueOf(i12), Integer.valueOf(i13), Integer.valueOf(i14));
    }

    private static int y(byte[] bArr, int i10, int i11) {
        int z10 = z(bArr, i10);
        if (i11 != 0 && i11 != 3) {
            while (z10 < bArr.length - 1) {
                if ((z10 - i10) % 2 == 0 && bArr[z10 + 1] == 0) {
                    return z10;
                }
                z10 = z(bArr, z10 + 1);
            }
            return bArr.length;
        }
        return z10;
    }

    private static int z(byte[] bArr, int i10) {
        while (i10 < bArr.length) {
            if (bArr[i10] == 0) {
                return i10;
            }
            i10++;
        }
        return bArr.length;
    }

    @Override // gd.e
    protected Metadata b(gd.c cVar, ByteBuffer byteBuffer) {
        return e(byteBuffer.array(), byteBuffer.limit());
    }

    public Metadata e(byte[] bArr, int i10) {
        int i11;
        ArrayList arrayList = new ArrayList();
        h0 h0Var = new h0(bArr, i10);
        b m10 = m(h0Var);
        if (m10 == null) {
            return null;
        }
        int f10 = h0Var.f();
        if (m10.f37269a == 2) {
            i11 = 6;
        } else {
            i11 = 10;
        }
        int i12 = m10.f37271c;
        if (m10.f37270b) {
            i12 = A(h0Var, m10.f37271c);
        }
        h0Var.T(f10 + i12);
        boolean z10 = false;
        if (!B(h0Var, m10.f37269a, i11, false)) {
            if (m10.f37269a == 4 && B(h0Var, 4, i11, true)) {
                z10 = true;
            } else {
                y.i("Id3Decoder", "Failed to validate ID3 tag with majorVersion=" + m10.f37269a);
                return null;
            }
        }
        while (h0Var.a() >= i11) {
            i k10 = k(m10.f37269a, h0Var, z10, i11, this.f37268a);
            if (k10 != null) {
                arrayList.add(k10);
            }
        }
        return new Metadata(arrayList);
    }

    public h(a aVar) {
        this.f37268a = aVar;
    }
}
