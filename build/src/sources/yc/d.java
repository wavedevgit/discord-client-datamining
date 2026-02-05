package yc;

import tc.a0;
import tc.b0;
import tc.m;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d implements m {

    /* renamed from: d  reason: collision with root package name */
    private final long f54696d;

    /* renamed from: e  reason: collision with root package name */
    private final m f54697e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements z {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ z f54698a;

        a(z zVar) {
            this.f54698a = zVar;
        }

        @Override // tc.z
        public z.a e(long j10) {
            z.a e10 = this.f54698a.e(j10);
            a0 a0Var = e10.f50604a;
            a0 a0Var2 = new a0(a0Var.f50500a, a0Var.f50501b + d.this.f54696d);
            a0 a0Var3 = e10.f50605b;
            return new z.a(a0Var2, new a0(a0Var3.f50500a, a0Var3.f50501b + d.this.f54696d));
        }

        @Override // tc.z
        public boolean h() {
            return this.f54698a.h();
        }

        @Override // tc.z
        public long i() {
            return this.f54698a.i();
        }
    }

    public d(long j10, m mVar) {
        this.f54696d = j10;
        this.f54697e = mVar;
    }

    @Override // tc.m
    public b0 c(int i10, int i11) {
        return this.f54697e.c(i10, i11);
    }

    @Override // tc.m
    public void q(z zVar) {
        this.f54697e.q(new a(zVar));
    }

    @Override // tc.m
    public void s() {
        this.f54697e.s();
    }
}
