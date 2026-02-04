package yc;

import tc.a0;
import tc.b0;
import tc.m;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d implements m {

    /* renamed from: d  reason: collision with root package name */
    private final long f54000d;

    /* renamed from: e  reason: collision with root package name */
    private final m f54001e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements z {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ z f54002a;

        a(z zVar) {
            this.f54002a = zVar;
        }

        @Override // tc.z
        public z.a e(long j10) {
            z.a e10 = this.f54002a.e(j10);
            a0 a0Var = e10.f49999a;
            a0 a0Var2 = new a0(a0Var.f49895a, a0Var.f49896b + d.this.f54000d);
            a0 a0Var3 = e10.f50000b;
            return new z.a(a0Var2, new a0(a0Var3.f49895a, a0Var3.f49896b + d.this.f54000d));
        }

        @Override // tc.z
        public boolean h() {
            return this.f54002a.h();
        }

        @Override // tc.z
        public long i() {
            return this.f54002a.i();
        }
    }

    public d(long j10, m mVar) {
        this.f54000d = j10;
        this.f54001e = mVar;
    }

    @Override // tc.m
    public b0 c(int i10, int i11) {
        return this.f54001e.c(i10, i11);
    }

    @Override // tc.m
    public void q(z zVar) {
        this.f54001e.q(new a(zVar));
    }

    @Override // tc.m
    public void s() {
        this.f54001e.s();
    }
}
