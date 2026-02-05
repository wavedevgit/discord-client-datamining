package tc;

import com.google.android.exoplayer2.metadata.Metadata;
import java.util.Arrays;
import java.util.List;
import lc.l0;
import ld.h;
import ne.g0;
import ne.h0;
import tc.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class r {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public t f50577a;

        public a(t tVar) {
            this.f50577a = tVar;
        }
    }

    public static boolean a(l lVar) {
        h0 h0Var = new h0(4);
        lVar.n(h0Var.e(), 0, 4);
        if (h0Var.J() != 1716281667) {
            return false;
        }
        return true;
    }

    public static int b(l lVar) {
        lVar.e();
        h0 h0Var = new h0(2);
        lVar.n(h0Var.e(), 0, 2);
        int N = h0Var.N();
        if ((N >> 2) == 16382) {
            lVar.e();
            return N;
        }
        lVar.e();
        throw l0.a("First frame does not start with sync code.", null);
    }

    public static Metadata c(l lVar, boolean z10) {
        h.a aVar;
        if (z10) {
            aVar = null;
        } else {
            aVar = ld.h.f36663b;
        }
        Metadata a10 = new w().a(lVar, aVar);
        if (a10 == null || a10.e() == 0) {
            return null;
        }
        return a10;
    }

    public static Metadata d(l lVar, boolean z10) {
        lVar.e();
        long g10 = lVar.g();
        Metadata c10 = c(lVar, z10);
        lVar.k((int) (lVar.g() - g10));
        return c10;
    }

    public static boolean e(l lVar, a aVar) {
        lVar.e();
        g0 g0Var = new g0(new byte[4]);
        lVar.n(g0Var.f39566a, 0, 4);
        boolean g10 = g0Var.g();
        int h10 = g0Var.h(7);
        int h11 = g0Var.h(24) + 4;
        if (h10 == 0) {
            aVar.f50577a = h(lVar);
            return g10;
        }
        t tVar = aVar.f50577a;
        if (tVar != null) {
            if (h10 == 3) {
                aVar.f50577a = tVar.b(g(lVar, h11));
                return g10;
            } else if (h10 == 4) {
                aVar.f50577a = tVar.c(j(lVar, h11));
                return g10;
            } else if (h10 == 6) {
                h0 h0Var = new h0(h11);
                lVar.readFully(h0Var.e(), 0, h11);
                h0Var.V(4);
                aVar.f50577a = tVar.a(mi.s.t(jd.a.a(h0Var)));
                return g10;
            } else {
                lVar.k(h11);
                return g10;
            }
        }
        throw new IllegalArgumentException();
    }

    public static t.a f(h0 h0Var) {
        h0Var.V(1);
        int K = h0Var.K();
        long f10 = h0Var.f() + K;
        int i10 = K / 18;
        long[] jArr = new long[i10];
        long[] jArr2 = new long[i10];
        int i11 = 0;
        while (true) {
            if (i11 >= i10) {
                break;
            }
            long A = h0Var.A();
            if (A == -1) {
                jArr = Arrays.copyOf(jArr, i11);
                jArr2 = Arrays.copyOf(jArr2, i11);
                break;
            }
            jArr[i11] = A;
            jArr2[i11] = h0Var.A();
            h0Var.V(2);
            i11++;
        }
        h0Var.V((int) (f10 - h0Var.f()));
        return new t.a(jArr, jArr2);
    }

    private static t.a g(l lVar, int i10) {
        h0 h0Var = new h0(i10);
        lVar.readFully(h0Var.e(), 0, i10);
        return f(h0Var);
    }

    private static t h(l lVar) {
        byte[] bArr = new byte[38];
        lVar.readFully(bArr, 0, 38);
        return new t(bArr, 4);
    }

    public static void i(l lVar) {
        h0 h0Var = new h0(4);
        lVar.readFully(h0Var.e(), 0, 4);
        if (h0Var.J() == 1716281667) {
            return;
        }
        throw l0.a("Failed to read FLAC stream marker.", null);
    }

    private static List j(l lVar, int i10) {
        h0 h0Var = new h0(i10);
        lVar.readFully(h0Var.e(), 0, i10);
        h0Var.V(4);
        return Arrays.asList(e0.i(h0Var, false, false).f50538b);
    }
}
