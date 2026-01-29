package tc;

import ne.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b {
    public static void a(long j10, h0 h0Var, b0[] b0VarArr) {
        int i10;
        boolean z10;
        while (true) {
            boolean z11 = true;
            if (h0Var.a() > 1) {
                int c10 = c(h0Var);
                int c11 = c(h0Var);
                int f10 = h0Var.f() + c11;
                if (c11 != -1 && c11 <= h0Var.a()) {
                    if (c10 == 4 && c11 >= 8) {
                        int H = h0Var.H();
                        int N = h0Var.N();
                        if (N == 49) {
                            i10 = h0Var.q();
                        } else {
                            i10 = 0;
                        }
                        int H2 = h0Var.H();
                        if (N == 47) {
                            h0Var.V(1);
                        }
                        if (H == 181 && ((N == 49 || N == 47) && H2 == 3)) {
                            z10 = true;
                        } else {
                            z10 = false;
                        }
                        if (N == 49) {
                            if (i10 != 1195456820) {
                                z11 = false;
                            }
                            z10 &= z11;
                        }
                        if (z10) {
                            b(j10, h0Var, b0VarArr);
                        }
                    }
                } else {
                    ne.y.i("CeaUtil", "Skipping remainder of malformed SEI NAL unit.");
                    f10 = h0Var.g();
                }
                h0Var.U(f10);
            } else {
                return;
            }
        }
    }

    public static void b(long j10, h0 h0Var, b0[] b0VarArr) {
        long j11;
        int H = h0Var.H();
        if ((H & 64) != 0) {
            h0Var.V(1);
            int i10 = (H & 31) * 3;
            int f10 = h0Var.f();
            int length = b0VarArr.length;
            int i11 = 0;
            while (i11 < length) {
                b0 b0Var = b0VarArr[i11];
                h0Var.U(f10);
                b0Var.f(h0Var, i10);
                if (j10 != -9223372036854775807L) {
                    j11 = j10;
                    b0Var.d(j11, 1, i10, 0, null);
                } else {
                    j11 = j10;
                }
                i11++;
                j10 = j11;
            }
        }
    }

    private static int c(h0 h0Var) {
        int i10 = 0;
        while (h0Var.a() != 0) {
            int H = h0Var.H();
            i10 += H;
            if (H != 255) {
                return i10;
            }
        }
        return -1;
    }
}
