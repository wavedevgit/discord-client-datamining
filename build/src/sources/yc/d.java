package yc;

import tc.a0;
import tc.b0;
import tc.m;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d implements m {

    /* renamed from: d  reason: collision with root package name */
    private final long f55240d;

    /* renamed from: e  reason: collision with root package name */
    private final m f55241e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements z {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ z f55242a;

        a(z zVar) {
            this.f55242a = zVar;
        }

        @Override // tc.z
        public z.a e(long j10) {
            z.a e10 = this.f55242a.e(j10);
            a0 a0Var = e10.f50580a;
            a0 a0Var2 = new a0(a0Var.f50476a, a0Var.f50477b + d.this.f55240d);
            a0 a0Var3 = e10.f50581b;
            return new z.a(a0Var2, new a0(a0Var3.f50476a, a0Var3.f50477b + d.this.f55240d));
        }

        @Override // tc.z
        public boolean h() {
            return this.f55242a.h();
        }

        @Override // tc.z
        public long i() {
            return this.f55242a.i();
        }
    }

    public d(long j10, m mVar) {
        this.f55240d = j10;
        this.f55241e = mVar;
    }

    @Override // tc.m
    public b0 c(int i10, int i11) {
        return this.f55241e.c(i10, i11);
    }

    @Override // tc.m
    public void q(z zVar) {
        this.f55241e.q(new a(zVar));
    }

    @Override // tc.m
    public void s() {
        this.f55241e.s();
    }
}
