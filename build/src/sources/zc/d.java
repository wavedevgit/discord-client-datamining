package zc;

import uc.a0;
import uc.b0;
import uc.m;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d implements m {

    /* renamed from: d  reason: collision with root package name */
    private final long f56313d;

    /* renamed from: e  reason: collision with root package name */
    private final m f56314e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements z {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ z f56315a;

        a(z zVar) {
            this.f56315a = zVar;
        }

        @Override // uc.z
        public z.a e(long j10) {
            z.a e10 = this.f56315a.e(j10);
            a0 a0Var = e10.f51536a;
            a0 a0Var2 = new a0(a0Var.f51432a, a0Var.f51433b + d.this.f56313d);
            a0 a0Var3 = e10.f51537b;
            return new z.a(a0Var2, new a0(a0Var3.f51432a, a0Var3.f51433b + d.this.f56313d));
        }

        @Override // uc.z
        public boolean g() {
            return this.f56315a.g();
        }

        @Override // uc.z
        public long i() {
            return this.f56315a.i();
        }
    }

    public d(long j10, m mVar) {
        this.f56313d = j10;
        this.f56314e = mVar;
    }

    @Override // uc.m
    public b0 c(int i10, int i11) {
        return this.f56314e.c(i10, i11);
    }

    @Override // uc.m
    public void j(z zVar) {
        this.f56314e.j(new a(zVar));
    }

    @Override // uc.m
    public void q() {
        this.f56314e.q();
    }
}
