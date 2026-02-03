package yc;

import tc.a0;
import tc.b0;
import tc.m;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d implements m {

    /* renamed from: d  reason: collision with root package name */
    private final long f54003d;

    /* renamed from: e  reason: collision with root package name */
    private final m f54004e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements z {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ z f54005a;

        a(z zVar) {
            this.f54005a = zVar;
        }

        @Override // tc.z
        public z.a e(long j10) {
            z.a e10 = this.f54005a.e(j10);
            a0 a0Var = e10.f50002a;
            a0 a0Var2 = new a0(a0Var.f49898a, a0Var.f49899b + d.this.f54003d);
            a0 a0Var3 = e10.f50003b;
            return new z.a(a0Var2, new a0(a0Var3.f49898a, a0Var3.f49899b + d.this.f54003d));
        }

        @Override // tc.z
        public boolean h() {
            return this.f54005a.h();
        }

        @Override // tc.z
        public long i() {
            return this.f54005a.i();
        }
    }

    public d(long j10, m mVar) {
        this.f54003d = j10;
        this.f54004e = mVar;
    }

    @Override // tc.m
    public b0 c(int i10, int i11) {
        return this.f54004e.c(i10, i11);
    }

    @Override // tc.m
    public void q(z zVar) {
        this.f54004e.q(new a(zVar));
    }

    @Override // tc.m
    public void s() {
        this.f54004e.s();
    }
}
