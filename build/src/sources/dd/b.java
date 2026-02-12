package dd;

import dd.i;
import java.util.Arrays;
import kotlin.jvm.internal.ByteCompanionObject;
import oe.h0;
import oe.w0;
import uc.l;
import uc.q;
import uc.r;
import uc.s;
import uc.t;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b extends i {

    /* renamed from: n  reason: collision with root package name */
    private t f21577n;

    /* renamed from: o  reason: collision with root package name */
    private a f21578o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a implements g {

        /* renamed from: a  reason: collision with root package name */
        private t f21579a;

        /* renamed from: b  reason: collision with root package name */
        private t.a f21580b;

        /* renamed from: c  reason: collision with root package name */
        private long f21581c = -1;

        /* renamed from: d  reason: collision with root package name */
        private long f21582d = -1;

        public a(t tVar, t.a aVar) {
            this.f21579a = tVar;
            this.f21580b = aVar;
        }

        @Override // dd.g
        public long a(l lVar) {
            long j10 = this.f21582d;
            if (j10 < 0) {
                return -1L;
            }
            long j11 = -(j10 + 2);
            this.f21582d = -1L;
            return j11;
        }

        @Override // dd.g
        public z b() {
            boolean z10;
            if (this.f21581c != -1) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.g(z10);
            return new s(this.f21579a, this.f21581c);
        }

        @Override // dd.g
        public void c(long j10) {
            long[] jArr = this.f21580b.f50704a;
            this.f21582d = jArr[w0.i(jArr, j10, true, true)];
        }

        public void d(long j10) {
            this.f21581c = j10;
        }
    }

    private int n(h0 h0Var) {
        int i10 = (h0Var.e()[2] & 255) >> 4;
        if (i10 == 6 || i10 == 7) {
            h0Var.V(4);
            h0Var.O();
        }
        int j10 = q.j(h0Var, i10);
        h0Var.U(0);
        return j10;
    }

    private static boolean o(byte[] bArr) {
        if (bArr[0] != -1) {
            return false;
        }
        return true;
    }

    public static boolean p(h0 h0Var) {
        if (h0Var.a() >= 5 && h0Var.H() == 127 && h0Var.J() == 1179402563) {
            return true;
        }
        return false;
    }

    @Override // dd.i
    protected long f(h0 h0Var) {
        if (!o(h0Var.e())) {
            return -1L;
        }
        return n(h0Var);
    }

    @Override // dd.i
    protected boolean h(h0 h0Var, long j10, i.b bVar) {
        byte[] e10 = h0Var.e();
        t tVar = this.f21577n;
        if (tVar == null) {
            t tVar2 = new t(e10, 17);
            this.f21577n = tVar2;
            bVar.f21619a = tVar2.g(Arrays.copyOfRange(e10, 9, h0Var.g()), null);
            return true;
        } else if ((e10[0] & ByteCompanionObject.MAX_VALUE) == 3) {
            t.a f10 = r.f(h0Var);
            t b10 = tVar.b(f10);
            this.f21577n = b10;
            this.f21578o = new a(b10, f10);
            return true;
        } else if (!o(e10)) {
            return true;
        } else {
            a aVar = this.f21578o;
            if (aVar != null) {
                aVar.d(j10);
                bVar.f21620b = this.f21578o;
            }
            oe.a.e(bVar.f21619a);
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dd.i
    public void l(boolean z10) {
        super.l(z10);
        if (z10) {
            this.f21577n = null;
            this.f21578o = null;
        }
    }
}
