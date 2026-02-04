package zk;

import ck.r;
import gk.n;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import xk.h;
import xk.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    private static final int[] f56023a = {-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 36, -1, -1, -1, 37, 38, -1, -1, -1, -1, 39, 40, -1, 41, 42, 43, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 44, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, -1, -1, -1, -1, -1};

    /* renamed from: b  reason: collision with root package name */
    static final Charset f56024b = StandardCharsets.ISO_8859_1;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f56025a;

        static {
            int[] iArr = new int[h.values().length];
            f56025a = iArr;
            try {
                iArr[h.NUMERIC.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f56025a[h.ALPHANUMERIC.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f56025a[h.BYTE.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f56025a[h.KANJI.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    static void a(String str, gk.a aVar, Charset charset) {
        for (byte b10 : str.getBytes(charset)) {
            aVar.c(b10, 8);
        }
    }

    static void b(CharSequence charSequence, gk.a aVar) {
        int length = charSequence.length();
        int i10 = 0;
        while (i10 < length) {
            int p10 = p(charSequence.charAt(i10));
            if (p10 != -1) {
                int i11 = i10 + 1;
                if (i11 < length) {
                    int p11 = p(charSequence.charAt(i11));
                    if (p11 != -1) {
                        aVar.c((p10 * 45) + p11, 11);
                        i10 += 2;
                    } else {
                        throw new r();
                    }
                } else {
                    aVar.c(p10, 6);
                    i10 = i11;
                }
            } else {
                throw new r();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void c(String str, h hVar, gk.a aVar, Charset charset) {
        int i10 = a.f56025a[hVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 == 4) {
                        e(str, aVar);
                        return;
                    }
                    throw new r("Invalid mode: " + hVar);
                }
                a(str, aVar, charset);
                return;
            }
            b(str, aVar);
            return;
        }
        h(str, aVar);
    }

    private static void d(gk.d dVar, gk.a aVar) {
        aVar.c(h.ECI.d(), 4);
        aVar.c(dVar.g(), 8);
    }

    /* JADX WARN: Removed duplicated region for block: B:20:0x003e A[LOOP:0: B:7:0x0011->B:20:0x003e, LOOP_END] */
    /* JADX WARN: Removed duplicated region for block: B:29:0x004d A[SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    static void e(java.lang.String r6, gk.a r7) {
        /*
            java.nio.charset.Charset r0 = gk.n.f26342b
            if (r0 == 0) goto L5e
            byte[] r6 = r6.getBytes(r0)
            int r0 = r6.length
            int r0 = r0 % 2
            if (r0 != 0) goto L56
            int r0 = r6.length
            int r0 = r0 + (-1)
            r1 = 0
        L11:
            if (r1 >= r0) goto L55
            r2 = r6[r1]
            r2 = r2 & 255(0xff, float:3.57E-43)
            int r3 = r1 + 1
            r3 = r6[r3]
            r3 = r3 & 255(0xff, float:3.57E-43)
            int r2 = r2 << 8
            r2 = r2 | r3
            r3 = 33088(0x8140, float:4.6366E-41)
            r4 = -1
            if (r2 < r3) goto L2d
            r5 = 40956(0x9ffc, float:5.7392E-41)
            if (r2 > r5) goto L2d
        L2b:
            int r2 = r2 - r3
            goto L3c
        L2d:
            r3 = 57408(0xe040, float:8.0446E-41)
            if (r2 < r3) goto L3b
            r3 = 60351(0xebbf, float:8.457E-41)
            if (r2 > r3) goto L3b
            r3 = 49472(0xc140, float:6.9325E-41)
            goto L2b
        L3b:
            r2 = r4
        L3c:
            if (r2 == r4) goto L4d
            int r3 = r2 >> 8
            int r3 = r3 * 192
            r2 = r2 & 255(0xff, float:3.57E-43)
            int r3 = r3 + r2
            r2 = 13
            r7.c(r3, r2)
            int r1 = r1 + 2
            goto L11
        L4d:
            ck.r r6 = new ck.r
            java.lang.String r7 = "Invalid byte sequence"
            r6.<init>(r7)
            throw r6
        L55:
            return
        L56:
            ck.r r6 = new ck.r
            java.lang.String r7 = "Kanji byte size not even"
            r6.<init>(r7)
            throw r6
        L5e:
            ck.r r6 = new ck.r
            java.lang.String r7 = "SJIS Charset not supported on this platform"
            r6.<init>(r7)
            throw r6
        */
        throw new UnsupportedOperationException("Method not decompiled: zk.c.e(java.lang.String, gk.a):void");
    }

    static void f(int i10, j jVar, h hVar, gk.a aVar) {
        int e10 = hVar.e(jVar);
        int i11 = 1 << e10;
        if (i10 < i11) {
            aVar.c(i10, e10);
            return;
        }
        throw new r(i10 + " is bigger than " + (i11 - 1));
    }

    static void g(h hVar, gk.a aVar) {
        aVar.c(hVar.d(), 4);
    }

    static void h(CharSequence charSequence, gk.a aVar) {
        int length = charSequence.length();
        int i10 = 0;
        while (i10 < length) {
            int charAt = charSequence.charAt(i10) - '0';
            int i11 = i10 + 2;
            if (i11 < length) {
                aVar.c((charAt * 100) + ((charSequence.charAt(i10 + 1) - '0') * 10) + (charSequence.charAt(i11) - '0'), 10);
                i10 += 3;
            } else {
                i10++;
                if (i10 < length) {
                    aVar.c((charAt * 10) + (charSequence.charAt(i10) - '0'), 7);
                    i10 = i11;
                } else {
                    aVar.c(charAt, 4);
                }
            }
        }
    }

    private static int i(h hVar, gk.a aVar, gk.a aVar2, j jVar) {
        return aVar.l() + hVar.e(jVar) + aVar2.l();
    }

    private static int j(b bVar) {
        return d.a(bVar) + d.c(bVar) + d.d(bVar) + d.e(bVar);
    }

    private static int k(gk.a aVar, xk.f fVar, j jVar, b bVar) {
        int i10 = Integer.MAX_VALUE;
        int i11 = -1;
        for (int i12 = 0; i12 < 8; i12++) {
            e.a(aVar, fVar, jVar, i12, bVar);
            int j10 = j(bVar);
            if (j10 < i10) {
                i11 = i12;
                i10 = j10;
            }
        }
        return i11;
    }

    private static h l(String str, Charset charset) {
        Charset charset2 = n.f26342b;
        if (charset2 != null && charset2.equals(charset) && s(str)) {
            return h.KANJI;
        }
        boolean z10 = false;
        boolean z11 = false;
        for (int i10 = 0; i10 < str.length(); i10++) {
            char charAt = str.charAt(i10);
            if (charAt >= '0' && charAt <= '9') {
                z11 = true;
            } else if (p(charAt) != -1) {
                z10 = true;
            } else {
                return h.BYTE;
            }
        }
        if (z10) {
            return h.ALPHANUMERIC;
        }
        if (z11) {
            return h.NUMERIC;
        }
        return h.BYTE;
    }

    private static j m(int i10, xk.f fVar) {
        for (int i11 = 1; i11 <= 40; i11++) {
            j i12 = j.i(i11);
            if (v(i10, i12, fVar)) {
                return i12;
            }
        }
        throw new r("Data too big");
    }

    /* JADX WARN: Code restructure failed: missing block: B:57:0x013a, code lost:
        if (zk.g.b(r8) != false) goto L31;
     */
    /* JADX WARN: Removed duplicated region for block: B:11:0x001f  */
    /* JADX WARN: Removed duplicated region for block: B:19:0x003c  */
    /* JADX WARN: Removed duplicated region for block: B:25:0x0057  */
    /* JADX WARN: Removed duplicated region for block: B:29:0x0075  */
    /* JADX WARN: Removed duplicated region for block: B:49:0x00da  */
    /* JADX WARN: Removed duplicated region for block: B:50:0x00df  */
    /* JADX WARN: Removed duplicated region for block: B:54:0x0122  */
    /* JADX WARN: Removed duplicated region for block: B:61:0x0140  */
    /* JADX WARN: Removed duplicated region for block: B:65:0x0047 A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static zk.g n(java.lang.String r6, xk.f r7, java.util.Map r8) {
        /*
            Method dump skipped, instructions count: 334
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: zk.c.n(java.lang.String, xk.f, java.util.Map):zk.g");
    }

    static byte[] o(byte[] bArr, int i10) {
        int length = bArr.length;
        int[] iArr = new int[length + i10];
        for (int i11 = 0; i11 < length; i11++) {
            iArr[i11] = bArr[i11] & 255;
        }
        new ik.d(ik.a.f28446l).b(iArr, i10);
        byte[] bArr2 = new byte[i10];
        for (int i12 = 0; i12 < i10; i12++) {
            bArr2[i12] = (byte) iArr[length + i12];
        }
        return bArr2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int p(int i10) {
        int[] iArr = f56023a;
        if (i10 < iArr.length) {
            return iArr[i10];
        }
        return -1;
    }

    static void q(int i10, int i11, int i12, int i13, int[] iArr, int[] iArr2) {
        if (i13 < i12) {
            int i14 = i10 % i12;
            int i15 = i12 - i14;
            int i16 = i10 / i12;
            int i17 = i16 + 1;
            int i18 = i11 / i12;
            int i19 = i18 + 1;
            int i20 = i16 - i18;
            int i21 = i17 - i19;
            if (i20 == i21) {
                if (i12 == i15 + i14) {
                    if (i10 == ((i18 + i20) * i15) + ((i19 + i21) * i14)) {
                        if (i13 < i15) {
                            iArr[0] = i18;
                            iArr2[0] = i20;
                            return;
                        }
                        iArr[0] = i19;
                        iArr2[0] = i21;
                        return;
                    }
                    throw new r("Total bytes mismatch");
                }
                throw new r("RS blocks mismatch");
            }
            throw new r("EC bytes mismatch");
        }
        throw new r("Block ID too large");
    }

    static gk.a r(gk.a aVar, int i10, int i11, int i12) {
        if (aVar.m() == i11) {
            ArrayList<zk.a> arrayList = new ArrayList(i12);
            int i13 = 0;
            int i14 = 0;
            int i15 = 0;
            int i16 = 0;
            while (i13 < i12) {
                int[] iArr = new int[1];
                int[] iArr2 = new int[1];
                int i17 = i10;
                int i18 = i11;
                int i19 = i12;
                q(i17, i18, i19, i13, iArr, iArr2);
                int i20 = iArr[0];
                byte[] bArr = new byte[i20];
                aVar.t(i14 * 8, bArr, 0, i20);
                byte[] o10 = o(bArr, iArr2[0]);
                arrayList.add(new zk.a(bArr, o10));
                i15 = Math.max(i15, i20);
                i16 = Math.max(i16, o10.length);
                i14 += iArr[0];
                i13++;
                i10 = i17;
                i11 = i18;
                i12 = i19;
            }
            int i21 = i10;
            if (i11 == i14) {
                gk.a aVar2 = new gk.a();
                for (int i22 = 0; i22 < i15; i22++) {
                    for (zk.a aVar3 : arrayList) {
                        byte[] a10 = aVar3.a();
                        if (i22 < a10.length) {
                            aVar2.c(a10[i22], 8);
                        }
                    }
                }
                for (int i23 = 0; i23 < i16; i23++) {
                    for (zk.a aVar4 : arrayList) {
                        byte[] b10 = aVar4.b();
                        if (i23 < b10.length) {
                            aVar2.c(b10[i23], 8);
                        }
                    }
                }
                if (i21 == aVar2.m()) {
                    return aVar2;
                }
                throw new r("Interleaving error: " + i21 + " and " + aVar2.m() + " differ.");
            }
            throw new r("Data bytes does not match offset");
        }
        throw new r("Number of bits and data bytes does not match");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean s(String str) {
        byte[] bytes = str.getBytes(n.f26342b);
        int length = bytes.length;
        if (length % 2 != 0) {
            return false;
        }
        for (int i10 = 0; i10 < length; i10 += 2) {
            int i11 = bytes[i10] & 255;
            if ((i11 < 129 || i11 > 159) && (i11 < 224 || i11 > 235)) {
                return false;
            }
        }
        return true;
    }

    private static j t(xk.f fVar, h hVar, gk.a aVar, gk.a aVar2) {
        return m(i(hVar, aVar, aVar2, m(i(hVar, aVar, aVar2, j.i(1)), fVar)), fVar);
    }

    static void u(int i10, gk.a aVar) {
        int i11;
        int i12 = i10 * 8;
        if (aVar.l() <= i12) {
            for (int i13 = 0; i13 < 4 && aVar.l() < i12; i13++) {
                aVar.a(false);
            }
            int l10 = aVar.l() & 7;
            if (l10 > 0) {
                while (l10 < 8) {
                    aVar.a(false);
                    l10++;
                }
            }
            int m10 = i10 - aVar.m();
            for (int i14 = 0; i14 < m10; i14++) {
                if ((i14 & 1) == 0) {
                    i11 = 236;
                } else {
                    i11 = 17;
                }
                aVar.c(i11, 8);
            }
            if (aVar.l() == i12) {
                return;
            }
            throw new r("Bits size does not equal capacity");
        }
        throw new r("data bits cannot fit in the QR Code" + aVar.l() + " > " + i12);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean v(int i10, j jVar, xk.f fVar) {
        if (jVar.h() - jVar.f(fVar).d() >= (i10 + 7) / 8) {
            return true;
        }
        return false;
    }
}
