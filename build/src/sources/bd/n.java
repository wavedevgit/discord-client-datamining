package bd;

import ne.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class n {

    /* renamed from: a  reason: collision with root package name */
    private static final int[] f6352a = {1769172845, 1769172786, 1769172787, 1769172788, 1769172789, 1769172790, 1769172793, 1635148593, 1752589105, 1751479857, 1635135537, 1836069937, 1836069938, 862401121, 862401122, 862417462, 862417718, 862414134, 862414646, 1295275552, 1295270176, 1714714144, 1801741417, 1295275600, 1903435808, 1297305174, 1684175153, 1769172332, 1885955686};

    private static boolean a(int i10, boolean z10) {
        if ((i10 >>> 8) == 3368816) {
            return true;
        }
        if (i10 == 1751476579 && z10) {
            return true;
        }
        for (int i11 : f6352a) {
            if (i11 == i10) {
                return true;
            }
        }
        return false;
    }

    public static boolean b(tc.l lVar) {
        return c(lVar, true, false);
    }

    /* JADX WARN: Multi-variable type inference failed */
    private static boolean c(tc.l lVar, boolean z10, boolean z11) {
        boolean z12;
        boolean z13;
        int i10;
        int i11;
        long length = lVar.getLength();
        long j10 = -1;
        int i12 = (length > (-1L) ? 1 : (length == (-1L) ? 0 : -1));
        long j11 = 4096;
        if (i12 != 0 && length <= 4096) {
            j11 = length;
        }
        int i13 = (int) j11;
        h0 h0Var = new h0(64);
        int i14 = 0;
        int i15 = 0;
        boolean z14 = false;
        while (i15 < i13) {
            h0Var.Q(8);
            if (!lVar.c(h0Var.e(), i14, 8, true)) {
                break;
            }
            long J = h0Var.J();
            int q10 = h0Var.q();
            if (J == 1) {
                lVar.n(h0Var.e(), 8, 8);
                h0Var.T(16);
                z13 = i14;
                i10 = i15;
                i11 = 16;
                J = h0Var.A();
            } else {
                if (J == 0) {
                    long length2 = lVar.getLength();
                    if (length2 != j10) {
                        J = (length2 - lVar.g()) + 8;
                    }
                }
                z13 = i14;
                i10 = i15;
                i11 = 8;
            }
            long j12 = i11;
            if (J < j12) {
                return z13;
            }
            int i16 = i10 + i11;
            boolean z15 = z13;
            if (q10 == 1836019574) {
                i13 += (int) J;
                if (i12 != 0 && i13 > length) {
                    i13 = (int) length;
                }
                i15 = i16;
                i14 = z15 ? 1 : 0;
                j10 = -1;
            } else if (q10 != 1836019558 && q10 != 1836475768) {
                int i17 = i12;
                if ((i16 + J) - j12 >= i13) {
                    break;
                }
                int i18 = (int) (J - j12);
                i15 = i16 + i18;
                if (q10 == 1718909296) {
                    if (i18 < 8) {
                        return z15;
                    }
                    h0Var.Q(i18);
                    lVar.n(h0Var.e(), z15 ? 1 : 0, i18);
                    int i19 = i18 / 4;
                    int i20 = 0;
                    while (true) {
                        if (i20 >= i19) {
                            break;
                        }
                        if (i20 == 1) {
                            h0Var.V(4);
                        } else if (a(h0Var.q(), z11)) {
                            z14 = true;
                            break;
                        }
                        i20++;
                    }
                    if (!z14) {
                        return false;
                    }
                } else if (i18 != 0) {
                    lVar.h(i18);
                }
                i12 = i17;
                j10 = -1;
                i14 = 0;
            } else {
                z12 = true;
                break;
            }
        }
        z12 = false;
        if (z14 && z10 == z12) {
            return true;
        }
        return false;
    }

    public static boolean d(tc.l lVar, boolean z10) {
        return c(lVar, false, z10);
    }
}
