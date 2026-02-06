package dd;

import dd.i0;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements tc.k {

    /* renamed from: d  reason: collision with root package name */
    public static final tc.p f20367d = new tc.p() { // from class: dd.a
        @Override // tc.p
        public final tc.k[] b() {
            return b.b();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final c f20368a = new c();

    /* renamed from: b  reason: collision with root package name */
    private final ne.h0 f20369b = new ne.h0(2786);

    /* renamed from: c  reason: collision with root package name */
    private boolean f20370c;

    public static /* synthetic */ tc.k[] b() {
        return new tc.k[]{new b()};
    }

    @Override // tc.k
    public void a(long j10, long j11) {
        this.f20370c = false;
        this.f20368a.c();
    }

    @Override // tc.k
    public void c(tc.m mVar) {
        this.f20368a.f(mVar, new i0.d(0, 1));
        mVar.s();
        mVar.q(new z.b(-9223372036854775807L));
    }

    @Override // tc.k
    public int d(tc.l lVar, tc.y yVar) {
        int read = lVar.read(this.f20369b.e(), 0, 2786);
        if (read == -1) {
            return -1;
        }
        this.f20369b.U(0);
        this.f20369b.T(read);
        if (!this.f20370c) {
            this.f20368a.e(0L, 4);
            this.f20370c = true;
        }
        this.f20368a.b(this.f20369b);
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
                int g10 = nc.b.g(h0Var.e());
                if (g10 == -1) {
                    return false;
                }
                lVar.h(g10 - 6);
            }
        }
    }

    @Override // tc.k
    public void release() {
    }
}
