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
    public static final p f21583d = new p() { // from class: dd.c
        @Override // uc.p
        public final k[] b() {
            return d.b();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private m f21584a;

    /* renamed from: b  reason: collision with root package name */
    private i f21585b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f21586c;

    public static /* synthetic */ k[] b() {
        return new k[]{new d()};
    }

    private static h0 e(h0 h0Var) {
        h0Var.U(0);
        return h0Var;
    }

    private boolean f(l lVar) {
        f fVar = new f();
        if (fVar.a(lVar, true) && (fVar.f21593b & 2) == 2) {
            int min = Math.min(fVar.f21600i, 8);
            h0 h0Var = new h0(min);
            lVar.n(h0Var.e(), 0, min);
            if (b.p(e(h0Var))) {
                this.f21585b = new b();
            } else if (j.r(e(h0Var))) {
                this.f21585b = new j();
            } else if (h.o(e(h0Var))) {
                this.f21585b = new h();
            }
            return true;
        }
        return false;
    }

    @Override // uc.k
    public void a(long j10, long j11) {
        i iVar = this.f21585b;
        if (iVar != null) {
            iVar.m(j10, j11);
        }
    }

    @Override // uc.k
    public void c(m mVar) {
        this.f21584a = mVar;
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
        oe.a.i(this.f21584a);
        if (this.f21585b == null) {
            if (f(lVar)) {
                lVar.e();
            } else {
                throw l0.a("Failed to determine bitstream type", null);
            }
        }
        if (!this.f21586c) {
            b0 c10 = this.f21584a.c(0, 1);
            this.f21584a.q();
            this.f21585b.d(this.f21584a, c10);
            this.f21586c = true;
        }
        return this.f21585b.g(lVar, yVar);
    }

    @Override // uc.k
    public void release() {
    }
}
