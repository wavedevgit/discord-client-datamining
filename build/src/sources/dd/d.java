package dd;

import mc.l0;
import oe.h0;
import uc.b0;
import uc.k;
import uc.l;
import uc.m;
import uc.p;
import uc.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d implements k {

    /* renamed from: d  reason: collision with root package name */
    public static final p f20635d = new p() { // from class: dd.c
        @Override // uc.p
        public final k[] b() {
            return d.b();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private m f20636a;

    /* renamed from: b  reason: collision with root package name */
    private i f20637b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f20638c;

    public static /* synthetic */ k[] b() {
        return new k[]{new d()};
    }

    private static h0 e(h0 h0Var) {
        h0Var.U(0);
        return h0Var;
    }

    private boolean f(l lVar) {
        f fVar = new f();
        if (fVar.a(lVar, true) && (fVar.f20645b & 2) == 2) {
            int min = Math.min(fVar.f20652i, 8);
            h0 h0Var = new h0(min);
            lVar.n(h0Var.e(), 0, min);
            if (b.p(e(h0Var))) {
                this.f20637b = new b();
            } else if (j.r(e(h0Var))) {
                this.f20637b = new j();
            } else if (h.o(e(h0Var))) {
                this.f20637b = new h();
            }
            return true;
        }
        return false;
    }

    @Override // uc.k
    public void a(long j10, long j11) {
        i iVar = this.f20637b;
        if (iVar != null) {
            iVar.m(j10, j11);
        }
    }

    @Override // uc.k
    public void c(m mVar) {
        this.f20636a = mVar;
    }

    @Override // uc.k
    public boolean d(l lVar) {
        try {
            return f(lVar);
        } catch (l0 unused) {
            return false;
        }
    }

    @Override // uc.k
    public int h(l lVar, y yVar) {
        oe.a.i(this.f20636a);
        if (this.f20637b == null) {
            if (f(lVar)) {
                lVar.e();
            } else {
                throw l0.a("Failed to determine bitstream type", null);
            }
        }
        if (!this.f20638c) {
            b0 c10 = this.f20636a.c(0, 1);
            this.f20636a.q();
            this.f20637b.d(this.f20636a, c10);
            this.f20638c = true;
        }
        return this.f20637b.g(lVar, yVar);
    }

    @Override // uc.k
    public void release() {
    }
}
