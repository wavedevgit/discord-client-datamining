package cd;

import lc.l0;
import ne.h0;
import tc.b0;
import tc.k;
import tc.l;
import tc.m;
import tc.p;
import tc.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d implements k {

    /* renamed from: d  reason: collision with root package name */
    public static final p f8250d = new p() { // from class: cd.c
        @Override // tc.p
        public final k[] b() {
            return d.b();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private m f8251a;

    /* renamed from: b  reason: collision with root package name */
    private i f8252b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f8253c;

    public static /* synthetic */ k[] b() {
        return new k[]{new d()};
    }

    private static h0 e(h0 h0Var) {
        h0Var.U(0);
        return h0Var;
    }

    private boolean g(l lVar) {
        f fVar = new f();
        if (fVar.a(lVar, true) && (fVar.f8260b & 2) == 2) {
            int min = Math.min(fVar.f8267i, 8);
            h0 h0Var = new h0(min);
            lVar.n(h0Var.e(), 0, min);
            if (b.p(e(h0Var))) {
                this.f8252b = new b();
            } else if (j.r(e(h0Var))) {
                this.f8252b = new j();
            } else if (h.o(e(h0Var))) {
                this.f8252b = new h();
            }
            return true;
        }
        return false;
    }

    @Override // tc.k
    public void a(long j10, long j11) {
        i iVar = this.f8252b;
        if (iVar != null) {
            iVar.m(j10, j11);
        }
    }

    @Override // tc.k
    public void c(m mVar) {
        this.f8251a = mVar;
    }

    @Override // tc.k
    public int d(l lVar, y yVar) {
        ne.a.i(this.f8251a);
        if (this.f8252b == null) {
            if (g(lVar)) {
                lVar.e();
            } else {
                throw l0.a("Failed to determine bitstream type", null);
            }
        }
        if (!this.f8253c) {
            b0 c10 = this.f8251a.c(0, 1);
            this.f8251a.s();
            this.f8252b.d(this.f8251a, c10);
            this.f8253c = true;
        }
        return this.f8252b.g(lVar, yVar);
    }

    @Override // tc.k
    public boolean f(l lVar) {
        try {
            return g(lVar);
        } catch (l0 unused) {
            return false;
        }
    }

    @Override // tc.k
    public void release() {
    }
}
