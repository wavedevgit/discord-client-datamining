package ed;

import android.util.Pair;
import lc.l0;
import ne.h0;
import ne.w0;
import ne.y;
import tc.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class d {

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final int f21507a;

        /* renamed from: b  reason: collision with root package name */
        public final long f21508b;

        private a(int i10, long j10) {
            this.f21507a = i10;
            this.f21508b = j10;
        }

        public static a a(l lVar, h0 h0Var) {
            lVar.n(h0Var.e(), 0, 8);
            h0Var.U(0);
            return new a(h0Var.q(), h0Var.x());
        }
    }

    public static boolean a(l lVar) {
        h0 h0Var = new h0(8);
        int i10 = a.a(lVar, h0Var).f21507a;
        if (i10 != 1380533830 && i10 != 1380333108) {
            return false;
        }
        lVar.n(h0Var.e(), 0, 4);
        h0Var.U(0);
        int q10 = h0Var.q();
        if (q10 != 1463899717) {
            y.c("WavHeaderReader", "Unsupported form type: " + q10);
            return false;
        }
        return true;
    }

    public static c b(l lVar) {
        boolean z10;
        byte[] bArr;
        h0 h0Var = new h0(16);
        a d10 = d(1718449184, lVar, h0Var);
        if (d10.f21508b >= 16) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        lVar.n(h0Var.e(), 0, 16);
        h0Var.U(0);
        int z11 = h0Var.z();
        int z12 = h0Var.z();
        int y10 = h0Var.y();
        int y11 = h0Var.y();
        int z13 = h0Var.z();
        int z14 = h0Var.z();
        int i10 = ((int) d10.f21508b) - 16;
        if (i10 > 0) {
            bArr = new byte[i10];
            lVar.n(bArr, 0, i10);
        } else {
            bArr = w0.f39662f;
        }
        byte[] bArr2 = bArr;
        lVar.k((int) (lVar.g() - lVar.getPosition()));
        return new c(z11, z12, y10, y11, z13, z14, bArr2);
    }

    public static long c(l lVar) {
        h0 h0Var = new h0(8);
        a a10 = a.a(lVar, h0Var);
        if (a10.f21507a != 1685272116) {
            lVar.e();
            return -1L;
        }
        lVar.h(8);
        h0Var.U(0);
        lVar.n(h0Var.e(), 0, 8);
        long v10 = h0Var.v();
        lVar.k(((int) a10.f21508b) + 8);
        return v10;
    }

    private static a d(int i10, l lVar, h0 h0Var) {
        a a10 = a.a(lVar, h0Var);
        while (a10.f21507a != i10) {
            y.i("WavHeaderReader", "Ignoring unknown WAV chunk: " + a10.f21507a);
            long j10 = a10.f21508b + 8;
            if (j10 <= 2147483647L) {
                lVar.k((int) j10);
                a10 = a.a(lVar, h0Var);
            } else {
                throw l0.d("Chunk is too large (~2GB+) to skip; id: " + a10.f21507a);
            }
        }
        return a10;
    }

    public static Pair e(l lVar) {
        lVar.e();
        a d10 = d(1684108385, lVar, new h0(8));
        lVar.k(8);
        return Pair.create(Long.valueOf(lVar.getPosition()), Long.valueOf(d10.f21508b));
    }
}
