package cd;

import cd.i;
import java.util.Arrays;
import kotlin.jvm.internal.ByteCompanionObject;
import ne.h0;
import ne.w0;
import tc.l;
import tc.q;
import tc.r;
import tc.s;
import tc.t;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b extends i {

    /* renamed from: n  reason: collision with root package name */
    private t f8100n;

    /* renamed from: o  reason: collision with root package name */
    private a f8101o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a implements g {

        /* renamed from: a  reason: collision with root package name */
        private t f8102a;

        /* renamed from: b  reason: collision with root package name */
        private t.a f8103b;

        /* renamed from: c  reason: collision with root package name */
        private long f8104c = -1;

        /* renamed from: d  reason: collision with root package name */
        private long f8105d = -1;

        public a(t tVar, t.a aVar) {
            this.f8102a = tVar;
            this.f8103b = aVar;
        }

        @Override // cd.g
        public long a(l lVar) {
            long j10 = this.f8105d;
            if (j10 < 0) {
                return -1L;
            }
            long j11 = -(j10 + 2);
            this.f8105d = -1L;
            return j11;
        }

        @Override // cd.g
        public z b() {
            boolean z10;
            if (this.f8104c != -1) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z10);
            return new s(this.f8102a, this.f8104c);
        }

        @Override // cd.g
        public void c(long j10) {
            long[] jArr = this.f8103b.f49779a;
            this.f8105d = jArr[w0.i(jArr, j10, true, true)];
        }

        public void d(long j10) {
            this.f8104c = j10;
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

    @Override // cd.i
    protected long f(h0 h0Var) {
        if (!o(h0Var.e())) {
            return -1L;
        }
        return n(h0Var);
    }

    @Override // cd.i
    protected boolean h(h0 h0Var, long j10, i.b bVar) {
        byte[] e10 = h0Var.e();
        t tVar = this.f8100n;
        if (tVar == null) {
            t tVar2 = new t(e10, 17);
            this.f8100n = tVar2;
            bVar.f8142a = tVar2.g(Arrays.copyOfRange(e10, 9, h0Var.g()), null);
            return true;
        } else if ((e10[0] & ByteCompanionObject.MAX_VALUE) == 3) {
            t.a f10 = r.f(h0Var);
            t b10 = tVar.b(f10);
            this.f8100n = b10;
            this.f8101o = new a(b10, f10);
            return true;
        } else if (!o(e10)) {
            return true;
        } else {
            a aVar = this.f8101o;
            if (aVar != null) {
                aVar.d(j10);
                bVar.f8143b = this.f8101o;
            }
            ne.a.e(bVar.f8142a);
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // cd.i
    public void l(boolean z10) {
        super.l(z10);
        if (z10) {
            this.f8100n = null;
            this.f8101o = null;
        }
    }
}
