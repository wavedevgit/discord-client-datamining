package tk;

import java.math.BigInteger;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class e {

    /* renamed from: a  reason: collision with root package name */
    private static final char[] f50112a = ";<>@[\\]_`~!\r\t,:\n-.$/\"|*()?{}'".toCharArray();

    /* renamed from: b  reason: collision with root package name */
    private static final char[] f50113b = "0123456789&\r\t,:#-.$/+%*=^".toCharArray();

    /* renamed from: c  reason: collision with root package name */
    private static final BigInteger[] f50114c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f50115a;

        static {
            int[] iArr = new int[b.values().length];
            f50115a = iArr;
            try {
                iArr[b.ALPHA.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f50115a[b.LOWER.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f50115a[b.MIXED.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f50115a[b.PUNCT.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f50115a[b.ALPHA_SHIFT.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f50115a[b.PUNCT_SHIFT.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum b {
        ALPHA,
        LOWER,
        MIXED,
        PUNCT,
        ALPHA_SHIFT,
        PUNCT_SHIFT
    }

    static {
        BigInteger[] bigIntegerArr = new BigInteger[16];
        f50114c = bigIntegerArr;
        bigIntegerArr[0] = BigInteger.ONE;
        BigInteger valueOf = BigInteger.valueOf(900L);
        bigIntegerArr[1] = valueOf;
        int i10 = 2;
        while (true) {
            BigInteger[] bigIntegerArr2 = f50114c;
            if (i10 < bigIntegerArr2.length) {
                bigIntegerArr2[i10] = bigIntegerArr2[i10 - 1].multiply(valueOf);
                i10++;
            } else {
                return;
            }
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:27:0x0046, code lost:
        if (r11 == 924) goto L36;
     */
    /* JADX WARN: Code restructure failed: missing block: B:29:0x004a, code lost:
        if (r8 >= r12[0]) goto L43;
     */
    /* JADX WARN: Code restructure failed: missing block: B:31:0x004e, code lost:
        if (r12[r8] >= 900) goto L43;
     */
    /* JADX WARN: Code restructure failed: missing block: B:32:0x0050, code lost:
        r13 = 0;
     */
    /* JADX WARN: Code restructure failed: missing block: B:34:0x0052, code lost:
        if (r13 >= 6) goto L40;
     */
    /* JADX WARN: Code restructure failed: missing block: B:35:0x0054, code lost:
        r14.a((byte) (r6 >> ((5 - r13) * 8)));
        r13 = r13 + 1;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static int a(int r11, int[] r12, int r13, gk.i r14) {
        /*
            r0 = 0
            r1 = r0
        L2:
            r2 = r12[r0]
            if (r13 >= r2) goto L86
            if (r1 != 0) goto L86
        L8:
            r2 = r12[r0]
            r3 = 927(0x39f, float:1.299E-42)
            if (r13 >= r2) goto L1c
            r4 = r12[r13]
            if (r4 != r3) goto L1c
            int r2 = r13 + 1
            r2 = r12[r2]
            r14.f(r2)
            int r13 = r13 + 2
            goto L8
        L1c:
            r4 = 1
            if (r13 >= r2) goto L83
            r2 = r12[r13]
            r5 = 900(0x384, float:1.261E-42)
            if (r2 < r5) goto L27
            goto L83
        L27:
            r6 = 0
            r2 = r0
        L2a:
            r8 = 900(0x384, double:4.447E-321)
            long r6 = r6 * r8
            int r8 = r13 + 1
            r13 = r12[r13]
            long r9 = (long) r13
            long r6 = r6 + r9
            int r2 = r2 + r4
            r13 = 5
            if (r2 >= r13) goto L42
            r9 = r12[r0]
            if (r8 >= r9) goto L42
            r9 = r12[r8]
            if (r9 < r5) goto L40
            goto L42
        L40:
            r13 = r8
            goto L2a
        L42:
            if (r2 != r13) goto L64
            r13 = 924(0x39c, float:1.295E-42)
            if (r11 == r13) goto L50
            r13 = r12[r0]
            if (r8 >= r13) goto L64
            r13 = r12[r8]
            if (r13 >= r5) goto L64
        L50:
            r13 = r0
        L51:
            r2 = 6
            if (r13 >= r2) goto L62
            int r2 = 5 - r13
            int r2 = r2 * 8
            long r2 = r6 >> r2
            int r2 = (int) r2
            byte r2 = (byte) r2
            r14.a(r2)
            int r13 = r13 + 1
            goto L51
        L62:
            r13 = r8
            goto L2
        L64:
            int r8 = r8 - r2
        L65:
            r13 = r12[r0]
            if (r8 >= r13) goto L62
            if (r1 != 0) goto L62
            int r13 = r8 + 1
            r2 = r12[r8]
            if (r2 >= r5) goto L77
            byte r2 = (byte) r2
            r14.a(r2)
            r8 = r13
            goto L65
        L77:
            if (r2 != r3) goto L81
            int r8 = r8 + 2
            r13 = r12[r13]
            r14.f(r13)
            goto L65
        L81:
            r1 = r4
            goto L65
        L83:
            r1 = r4
            goto L2
        L86:
            return r13
        */
        throw new UnsupportedOperationException("Method not decompiled: tk.e.a(int, int[], int, gk.i):int");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static gk.e b(int[] iArr, String str) {
        gk.i iVar = new gk.i(iArr.length * 2);
        int g10 = g(iArr, 1, iVar);
        sk.c cVar = new sk.c();
        while (g10 < iArr[0]) {
            int i10 = g10 + 1;
            int i11 = iArr[g10];
            if (i11 != 913) {
                switch (i11) {
                    case 900:
                        g10 = g(iArr, i10, iVar);
                        break;
                    case 901:
                        g10 = a(i11, iArr, i10, iVar);
                        break;
                    case 902:
                        g10 = f(iArr, i10, iVar);
                        break;
                    default:
                        switch (i11) {
                            case 922:
                            case 923:
                                throw ck.g.a();
                            case 924:
                                g10 = a(i11, iArr, i10, iVar);
                                break;
                            case 925:
                                g10 += 2;
                                break;
                            case 926:
                                g10 += 3;
                                break;
                            case 927:
                                g10 += 2;
                                iVar.f(iArr[i10]);
                                break;
                            case 928:
                                g10 = d(iArr, i10, cVar);
                                break;
                            default:
                                g10 = g(iArr, g10, iVar);
                                break;
                        }
                }
            } else {
                g10 += 2;
                iVar.b((char) iArr[i10]);
            }
        }
        if (iVar.h() && cVar.a() == null) {
            throw ck.g.a();
        }
        gk.e eVar = new gk.e(null, iVar.toString(), null, str);
        eVar.p(cVar);
        return eVar;
    }

    private static String c(int[] iArr, int i10) {
        BigInteger bigInteger = BigInteger.ZERO;
        for (int i11 = 0; i11 < i10; i11++) {
            bigInteger = bigInteger.add(f50114c[(i10 - i11) - 1].multiply(BigInteger.valueOf(iArr[i11])));
        }
        String bigInteger2 = bigInteger.toString();
        if (bigInteger2.charAt(0) == '1') {
            return bigInteger2.substring(1);
        }
        throw ck.g.a();
    }

    static int d(int[] iArr, int i10, sk.c cVar) {
        int i11;
        int i12;
        if (i10 + 2 <= iArr[0]) {
            int[] iArr2 = new int[2];
            int i13 = 0;
            while (i13 < 2) {
                iArr2[i13] = iArr[i10];
                i13++;
                i10++;
            }
            String c10 = c(iArr2, 2);
            if (c10.isEmpty()) {
                cVar.k(0);
            } else {
                try {
                    cVar.k(Integer.parseInt(c10));
                } catch (NumberFormatException unused) {
                    throw ck.g.a();
                }
            }
            StringBuilder sb2 = new StringBuilder();
            while (i10 < iArr[0] && i10 < iArr.length && (i12 = iArr[i10]) != 922 && i12 != 923) {
                sb2.append(String.format("%03d", Integer.valueOf(i12)));
                i10++;
            }
            if (sb2.length() != 0) {
                cVar.e(sb2.toString());
                if (iArr[i10] == 923) {
                    i11 = i10 + 1;
                } else {
                    i11 = -1;
                }
                while (i10 < iArr[0]) {
                    int i14 = iArr[i10];
                    if (i14 != 922) {
                        if (i14 == 923) {
                            switch (iArr[i10 + 1]) {
                                case 0:
                                    gk.i iVar = new gk.i();
                                    i10 = g(iArr, i10 + 2, iVar);
                                    cVar.f(iVar.toString());
                                    continue;
                                case 1:
                                    gk.i iVar2 = new gk.i();
                                    i10 = f(iArr, i10 + 2, iVar2);
                                    try {
                                        cVar.j(Integer.parseInt(iVar2.toString()));
                                        continue;
                                    } catch (NumberFormatException unused2) {
                                        throw ck.g.a();
                                    }
                                case 2:
                                    gk.i iVar3 = new gk.i();
                                    i10 = f(iArr, i10 + 2, iVar3);
                                    try {
                                        cVar.m(Long.parseLong(iVar3.toString()));
                                        continue;
                                    } catch (NumberFormatException unused3) {
                                        throw ck.g.a();
                                    }
                                case 3:
                                    gk.i iVar4 = new gk.i();
                                    i10 = g(iArr, i10 + 2, iVar4);
                                    cVar.l(iVar4.toString());
                                    continue;
                                case 4:
                                    gk.i iVar5 = new gk.i();
                                    i10 = g(iArr, i10 + 2, iVar5);
                                    cVar.c(iVar5.toString());
                                    continue;
                                case 5:
                                    gk.i iVar6 = new gk.i();
                                    i10 = f(iArr, i10 + 2, iVar6);
                                    try {
                                        cVar.g(Long.parseLong(iVar6.toString()));
                                        continue;
                                    } catch (NumberFormatException unused4) {
                                        throw ck.g.a();
                                    }
                                case 6:
                                    gk.i iVar7 = new gk.i();
                                    i10 = f(iArr, i10 + 2, iVar7);
                                    try {
                                        cVar.d(Integer.parseInt(iVar7.toString()));
                                        continue;
                                    } catch (NumberFormatException unused5) {
                                        throw ck.g.a();
                                    }
                                default:
                                    throw ck.g.a();
                            }
                        } else {
                            throw ck.g.a();
                        }
                    } else {
                        i10++;
                        cVar.h(true);
                    }
                }
                if (i11 != -1) {
                    int i15 = i10 - i11;
                    if (cVar.b()) {
                        i15--;
                    }
                    if (i15 > 0) {
                        cVar.i(Arrays.copyOfRange(iArr, i11, i15 + i11));
                    }
                }
                return i10;
            }
            throw ck.g.a();
        }
        throw ck.g.a();
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    /* JADX WARN: Removed duplicated region for block: B:24:0x0052 A[FALL_THROUGH, PHI: r3 r4 
      PHI: (r3v10 tk.e$b) = (r3v1 tk.e$b), (r3v1 tk.e$b), (r3v2 tk.e$b), (r3v1 tk.e$b), (r3v1 tk.e$b), (r3v3 tk.e$b), (r3v1 tk.e$b), (r3v1 tk.e$b), (r3v5 tk.e$b), (r3v12 tk.e$b) binds: [B:70:0x00dd, B:65:0x00cc, B:67:0x00d0, B:59:0x00b9, B:53:0x00a9, B:56:0x00af, B:46:0x0095, B:40:0x0083, B:42:0x0087, B:23:0x0050] A[DONT_GENERATE, DONT_INLINE]
      PHI: (r4v13 tk.e$b) = (r4v1 tk.e$b), (r4v1 tk.e$b), (r4v3 tk.e$b), (r4v1 tk.e$b), (r4v1 tk.e$b), (r4v6 tk.e$b), (r4v1 tk.e$b), (r4v1 tk.e$b), (r4v9 tk.e$b), (r4v1 tk.e$b) binds: [B:70:0x00dd, B:65:0x00cc, B:67:0x00d0, B:59:0x00b9, B:53:0x00a9, B:56:0x00af, B:46:0x0095, B:40:0x0083, B:42:0x0087, B:23:0x0050] A[DONT_GENERATE, DONT_INLINE]] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static tk.e.b e(int[] r15, int[] r16, int r17, gk.i r18, tk.e.b r19) {
        /*
            Method dump skipped, instructions count: 298
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: tk.e.e(int[], int[], int, gk.i, tk.e$b):tk.e$b");
    }

    /* JADX WARN: Code restructure failed: missing block: B:29:0x003e, code lost:
        r10.d(c(r0, r3));
        r3 = 0;
     */
    /* JADX WARN: Removed duplicated region for block: B:25:0x0036  */
    /* JADX WARN: Removed duplicated region for block: B:33:0x003c A[ADDED_TO_REGION, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static int f(int[] r8, int r9, gk.i r10) {
        /*
            r0 = 15
            int[] r0 = new int[r0]
            r1 = 0
            r2 = r1
            r3 = r2
        L7:
            r4 = r8[r1]
            if (r9 >= r4) goto L47
            if (r2 != 0) goto L47
            int r5 = r9 + 1
            r6 = r8[r9]
            r7 = 1
            if (r5 != r4) goto L15
            r2 = r7
        L15:
            r4 = 900(0x384, float:1.261E-42)
            if (r6 >= r4) goto L1f
            r0[r3] = r6
            int r3 = r3 + 1
        L1d:
            r9 = r5
            goto L32
        L1f:
            if (r6 == r4) goto L31
            r4 = 901(0x385, float:1.263E-42)
            if (r6 == r4) goto L31
            r4 = 927(0x39f, float:1.299E-42)
            if (r6 == r4) goto L31
            r4 = 928(0x3a0, float:1.3E-42)
            if (r6 == r4) goto L31
            switch(r6) {
                case 922: goto L31;
                case 923: goto L31;
                case 924: goto L31;
                default: goto L30;
            }
        L30:
            goto L1d
        L31:
            r2 = r7
        L32:
            int r4 = r3 % 15
            if (r4 == 0) goto L3c
            r4 = 902(0x386, float:1.264E-42)
            if (r6 == r4) goto L3c
            if (r2 == 0) goto L7
        L3c:
            if (r3 <= 0) goto L7
            java.lang.String r3 = c(r0, r3)
            r10.d(r3)
            r3 = r1
            goto L7
        L47:
            return r9
        */
        throw new UnsupportedOperationException("Method not decompiled: tk.e.f(int[], int, gk.i):int");
    }

    private static int g(int[] iArr, int i10, gk.i iVar) {
        int i11 = iArr[0];
        int[] iArr2 = new int[(i11 - i10) * 2];
        int[] iArr3 = new int[(i11 - i10) * 2];
        b bVar = b.ALPHA;
        boolean z10 = false;
        int i12 = 0;
        while (i10 < iArr[0] && !z10) {
            int i13 = i10 + 1;
            int i14 = iArr[i10];
            if (i14 < 900) {
                iArr2[i12] = i14 / 30;
                iArr2[i12 + 1] = i14 % 30;
                i12 += 2;
            } else if (i14 != 913) {
                if (i14 != 927) {
                    if (i14 != 928) {
                        switch (i14) {
                            case 900:
                                iArr2[i12] = 900;
                                i12++;
                                break;
                            case 901:
                            case 902:
                                break;
                            default:
                                switch (i14) {
                                }
                        }
                    }
                    z10 = true;
                } else {
                    b e10 = e(iArr2, iArr3, i12, iVar, bVar);
                    i10 += 2;
                    iVar.f(iArr[i13]);
                    int i15 = iArr[0];
                    if (i10 <= i15) {
                        bVar = e10;
                        iArr3 = new int[(i15 - i10) * 2];
                        iArr2 = new int[(i15 - i10) * 2];
                        i12 = 0;
                    } else {
                        throw ck.g.a();
                    }
                }
            } else {
                iArr2[i12] = 913;
                i10 += 2;
                iArr3[i12] = iArr[i13];
                i12++;
            }
            i10 = i13;
        }
        e(iArr2, iArr3, i12, iVar, bVar);
        return i10;
    }
}
