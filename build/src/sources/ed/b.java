package ed;

import ed.i0;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements uc.k {

    /* renamed from: d  reason: collision with root package name */
    public static final uc.p f22424d = new uc.p() { // from class: ed.a
        @Override // uc.p
        public final uc.k[] b() {
            return b.b();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final c f22425a = new c();

    /* renamed from: b  reason: collision with root package name */
    private final oe.h0 f22426b = new oe.h0(2786);

    /* renamed from: c  reason: collision with root package name */
    private boolean f22427c;

    public static /* synthetic */ uc.k[] b() {
        return new uc.k[]{new b()};
    }

    @Override // uc.k
    public void a(long j10, long j11) {
        this.f22427c = false;
        this.f22425a.b();
    }

    @Override // uc.k
    public void c(uc.m mVar) {
        this.f22425a.c(mVar, new i0.d(0, 1));
        mVar.q();
        mVar.j(new z.b(-9223372036854775807L));
    }

    @Override // uc.k
    public boolean d(uc.l lVar) {
        oe.h0 h0Var = new oe.h0(10);
        int i10 = 0;
        while (true) {
            lVar.n(h0Var.e(), 0, 10);
            h0Var.U(0);
            if (h0Var.K() != 4801587) {
                break;
            }
            h0Var.V(3);
            int G = h0Var.G();
            i10 += G + 10;
            lVar.h(G);
        }
        lVar.e();
        lVar.h(i10);
        int i11 = 0;
        int i12 = i10;
        while (true) {
            lVar.n(h0Var.e(), 0, 6);
            h0Var.U(0);
            if (h0Var.N() != 2935) {
                lVar.e();
                i12++;
                if (i12 - i10 >= 8192) {
                    return false;
                }
                lVar.h(i12);
                i11 = 0;
            } else {
                i11++;
                if (i11 >= 4) {
                    return true;
                }
                int g10 = oc.b.g(h0Var.e());
                if (g10 == -1) {
                    return false;
                }
                lVar.h(g10 - 6);
            }
        }
    }

    @Override // uc.k
    public int h(uc.l lVar, uc.y yVar) {
        int read = lVar.read(this.f22426b.e(), 0, 2786);
        if (read == -1) {
            return -1;
        }
        this.f22426b.U(0);
        this.f22426b.T(read);
        if (!this.f22427c) {
            this.f22425a.e(0L, 4);
            this.f22427c = true;
        }
        this.f22425a.a(this.f22426b);
        return 0;
    }

    @Override // uc.k
    public void release() {
    }
}
