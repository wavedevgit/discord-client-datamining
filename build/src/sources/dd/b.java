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
    private t f20629n;

    /* renamed from: o  reason: collision with root package name */
    private a f20630o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a implements g {

        /* renamed from: a  reason: collision with root package name */
        private t f20631a;

        /* renamed from: b  reason: collision with root package name */
        private t.a f20632b;

        /* renamed from: c  reason: collision with root package name */
        private long f20633c = -1;

        /* renamed from: d  reason: collision with root package name */
        private long f20634d = -1;

        public a(t tVar, t.a aVar) {
            this.f20631a = tVar;
            this.f20632b = aVar;
        }

        @Override // dd.g
        public long a(l lVar) {
            long j10 = this.f20634d;
            if (j10 < 0) {
                return -1L;
            }
            long j11 = -(j10 + 2);
            this.f20634d = -1L;
            return j11;
        }

        @Override // dd.g
        public z b() {
            boolean z10;
            if (this.f20633c != -1) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.g(z10);
            return new s(this.f20631a, this.f20633c);
        }

        @Override // dd.g
        public void c(long j10) {
            long[] jArr = this.f20632b.f51524a;
            this.f20634d = jArr[w0.i(jArr, j10, true, true)];
        }

        public void d(long j10) {
            this.f20633c = j10;
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
        t tVar = this.f20629n;
        if (tVar == null) {
            t tVar2 = new t(e10, 17);
            this.f20629n = tVar2;
            bVar.f20671a = tVar2.g(Arrays.copyOfRange(e10, 9, h0Var.g()), null);
            return true;
        } else if ((e10[0] & ByteCompanionObject.MAX_VALUE) == 3) {
            t.a f10 = r.f(h0Var);
            t b10 = tVar.b(f10);
            this.f20629n = b10;
            this.f20630o = new a(b10, f10);
            return true;
        } else if (!o(e10)) {
            return true;
        } else {
            a aVar = this.f20630o;
            if (aVar != null) {
                aVar.d(j10);
                bVar.f20672b = this.f20630o;
            }
            oe.a.e(bVar.f20671a);
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dd.i
    public void l(boolean z10) {
        super.l(z10);
        if (z10) {
            this.f20629n = null;
            this.f20630o = null;
        }
    }
}
