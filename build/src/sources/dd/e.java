package dd;

import dd.i0;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e implements tc.k {

    /* renamed from: d  reason: collision with root package name */
    public static final tc.p f21785d = new tc.p() { // from class: dd.d
        @Override // tc.p
        public final tc.k[] b() {
            return e.b();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final f f21786a = new f();

    /* renamed from: b  reason: collision with root package name */
    private final ne.h0 f21787b = new ne.h0(16384);

    /* renamed from: c  reason: collision with root package name */
    private boolean f21788c;

    public static /* synthetic */ tc.k[] b() {
        return new tc.k[]{new e()};
    }

    @Override // tc.k
    public void a(long j10, long j11) {
        this.f21788c = false;
        this.f21786a.c();
    }

    @Override // tc.k
    public void c(tc.m mVar) {
        this.f21786a.f(mVar, new i0.d(0, 1));
        mVar.s();
        mVar.q(new z.b(-9223372036854775807L));
    }

    @Override // tc.k
    public int d(tc.l lVar, tc.y yVar) {
        int read = lVar.read(this.f21787b.e(), 0, 16384);
        if (read == -1) {
            return -1;
        }
        this.f21787b.U(0);
        this.f21787b.T(read);
        if (!this.f21788c) {
            this.f21786a.e(0L, 4);
            this.f21788c = true;
        }
        this.f21786a.b(this.f21787b);
        return 0;
    }

    @Override // tc.k
    public boolean f(tc.l lVar) {
        ne.h0 h0Var = new ne.h0(10);
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
                int e10 = nc.c.e(h0Var.e(), N);
                if (e10 == -1) {
                    return false;
                }
                lVar.h(e10 - 7);
            }
        }
    }

    @Override // tc.k
    public void release() {
    }
}
