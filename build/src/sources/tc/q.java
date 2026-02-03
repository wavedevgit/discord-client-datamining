package tc;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import lc.l0;
import ne.h0;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class q {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public long f49974a;
    }

    private static boolean a(h0 h0Var, t tVar, int i10) {
        int j10 = j(h0Var, i10);
        if (j10 != -1 && j10 <= tVar.f49979b) {
            return true;
        }
        return false;
    }

    private static boolean b(h0 h0Var, int i10) {
        if (h0Var.H() == w0.u(h0Var.e(), i10, h0Var.f() - 1, 0)) {
            return true;
        }
        return false;
    }

    private static boolean c(h0 h0Var, t tVar, boolean z10, a aVar) {
        try {
            long O = h0Var.O();
            if (!z10) {
                O *= tVar.f49979b;
            }
            aVar.f49974a = O;
            return true;
        } catch (NumberFormatException unused) {
            return false;
        }
    }

    public static boolean d(h0 h0Var, t tVar, int i10, a aVar) {
        boolean z10;
        boolean z11;
        int f10 = h0Var.f();
        long J = h0Var.J();
        long j10 = J >>> 16;
        if (j10 != i10) {
            return false;
        }
        if ((j10 & 1) == 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        int i11 = (int) ((J >> 12) & 15);
        int i12 = (int) ((J >> 8) & 15);
        int i13 = (int) ((J >> 4) & 15);
        int i14 = (int) ((J >> 1) & 7);
        if ((J & 1) == 1) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (!g(i13, tVar) || !f(i14, tVar) || z11 || !c(h0Var, tVar, z10, aVar) || !a(h0Var, tVar, i11) || !e(h0Var, tVar, i12) || !b(h0Var, f10)) {
            return false;
        }
        return true;
    }

    private static boolean e(h0 h0Var, t tVar, int i10) {
        int i11 = tVar.f49982e;
        if (i10 == 0) {
            return true;
        }
        if (i10 <= 11) {
            if (i10 == tVar.f49983f) {
                return true;
            }
            return false;
        } else if (i10 == 12) {
            if (h0Var.H() * 1000 == i11) {
                return true;
            }
            return false;
        } else {
            if (i10 <= 14) {
                int N = h0Var.N();
                if (i10 == 14) {
                    N *= 10;
                }
                if (N == i11) {
                    return true;
                }
            }
            return false;
        }
    }

    private static boolean f(int i10, t tVar) {
        if (i10 == 0 || i10 == tVar.f49986i) {
            return true;
        }
        return false;
    }

    private static boolean g(int i10, t tVar) {
        if (i10 <= 7) {
            if (i10 != tVar.f49984g - 1) {
                return false;
            }
            return true;
        } else if (i10 > 10 || tVar.f49984g != 2) {
            return false;
        } else {
            return true;
        }
    }

    public static boolean h(l lVar, t tVar, int i10, a aVar) {
        long g10 = lVar.g();
        byte[] bArr = new byte[2];
        lVar.n(bArr, 0, 2);
        if ((((bArr[0] & 255) << 8) | (bArr[1] & 255)) != i10) {
            lVar.e();
            lVar.h((int) (g10 - lVar.getPosition()));
            return false;
        }
        h0 h0Var = new h0(16);
        System.arraycopy(bArr, 0, h0Var.e(), 0, 2);
        h0Var.T(n.c(lVar, h0Var.e(), 2, 14));
        lVar.e();
        lVar.h((int) (g10 - lVar.getPosition()));
        return d(h0Var, tVar, i10, aVar);
    }

    public static long i(l lVar, t tVar) {
        int i10;
        lVar.e();
        boolean z10 = true;
        lVar.h(1);
        byte[] bArr = new byte[1];
        lVar.n(bArr, 0, 1);
        if ((bArr[0] & 1) != 1) {
            z10 = false;
        }
        lVar.h(2);
        if (z10) {
            i10 = 7;
        } else {
            i10 = 6;
        }
        h0 h0Var = new h0(i10);
        h0Var.T(n.c(lVar, h0Var.e(), 0, i10));
        lVar.e();
        a aVar = new a();
        if (c(h0Var, tVar, z10, aVar)) {
            return aVar.f49974a;
        }
        throw l0.a(null, null);
    }

    public static int j(h0 h0Var, int i10) {
        switch (i10) {
            case 1:
                return 192;
            case 2:
            case 3:
            case 4:
            case 5:
                return 576 << (i10 - 2);
            case 6:
                return h0Var.H() + 1;
            case 7:
                return h0Var.N() + 1;
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
                return IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER << (i10 - 8);
            default:
                return -1;
        }
    }
}
