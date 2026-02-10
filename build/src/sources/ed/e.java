package ed;

import ed.i0;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e implements uc.k {

    /* renamed from: d  reason: collision with root package name */
    public static final uc.p f22447d = new uc.p() { // from class: ed.d
        @Override // uc.p
        public final uc.k[] b() {
            return e.b();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final f f22448a = new f();

    /* renamed from: b  reason: collision with root package name */
    private final oe.h0 f22449b = new oe.h0(16384);

    /* renamed from: c  reason: collision with root package name */
    private boolean f22450c;

    public static /* synthetic */ uc.k[] b() {
        return new uc.k[]{new e()};
    }

    @Override // uc.k
    public void a(long j10, long j11) {
        this.f22450c = false;
        this.f22448a.b();
    }

    @Override // uc.k
    public void c(uc.m mVar) {
        this.f22448a.c(mVar, new i0.d(0, 1));
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
            lVar.n(h0Var.e(), 0, 7);
            h0Var.U(0);
            int N = h0Var.N();
            if (N != 44096 && N != 44097) {
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
                int e10 = oc.c.e(h0Var.e(), N);
                if (e10 == -1) {
                    return false;
                }
                lVar.h(e10 - 7);
            }
        }
    }

    @Override // uc.k
    public int h(uc.l lVar, uc.y yVar) {
        int read = lVar.read(this.f22449b.e(), 0, 16384);
        if (read == -1) {
            return -1;
        }
        this.f22449b.U(0);
        this.f22449b.T(read);
        if (!this.f22450c) {
            this.f22448a.e(0L, 4);
            this.f22450c = true;
        }
        this.f22448a.a(this.f22449b);
        return 0;
    }

    @Override // uc.k
    public void release() {
    }
}
