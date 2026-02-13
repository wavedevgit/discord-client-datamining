package zc;

import uc.a0;
import uc.b0;
import uc.m;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d implements m {

    /* renamed from: d  reason: collision with root package name */
    private final long f56921d;

    /* renamed from: e  reason: collision with root package name */
    private final m f56922e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements z {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ z f56923a;

        a(z zVar) {
            this.f56923a = zVar;
        }

        @Override // uc.z
        public z.a e(long j10) {
            z.a e10 = this.f56923a.e(j10);
            a0 a0Var = e10.f51284a;
            a0 a0Var2 = new a0(a0Var.f51180a, a0Var.f51181b + d.this.f56921d);
            a0 a0Var3 = e10.f51285b;
            return new z.a(a0Var2, new a0(a0Var3.f51180a, a0Var3.f51181b + d.this.f56921d));
        }

        @Override // uc.z
        public boolean g() {
            return this.f56923a.g();
        }

        @Override // uc.z
        public long i() {
            return this.f56923a.i();
        }
    }

    public d(long j10, m mVar) {
        this.f56921d = j10;
        this.f56922e = mVar;
    }

    @Override // uc.m
    public b0 c(int i10, int i11) {
        return this.f56922e.c(i10, i11);
    }

    @Override // uc.m
    public void j(z zVar) {
        this.f56922e.j(new a(zVar));
    }

    @Override // uc.m
    public void q() {
        this.f56922e.q();
    }
}
