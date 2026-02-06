package ad;

import ne.w0;
import ne.z;
import tc.a0;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b implements g {

    /* renamed from: a  reason: collision with root package name */
    private final long f475a;

    /* renamed from: b  reason: collision with root package name */
    private final z f476b;

    /* renamed from: c  reason: collision with root package name */
    private final z f477c;

    /* renamed from: d  reason: collision with root package name */
    private long f478d;

    public b(long j10, long j11, long j12) {
        this.f478d = j10;
        this.f475a = j12;
        z zVar = new z();
        this.f476b = zVar;
        z zVar2 = new z();
        this.f477c = zVar2;
        zVar.a(0L);
        zVar2.a(j11);
    }

    public boolean a(long j10) {
        z zVar = this.f476b;
        if (j10 - zVar.b(zVar.c() - 1) < 100000) {
            return true;
        }
        return false;
    }

    @Override // ad.g
    public long b(long j10) {
        return this.f476b.b(w0.g(this.f477c, j10, true, true));
    }

    public void c(long j10, long j11) {
        if (a(j10)) {
            return;
        }
        this.f476b.a(j10);
        this.f477c.a(j11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(long j10) {
        this.f478d = j10;
    }

    @Override // tc.z
    public z.a e(long j10) {
        int g10 = w0.g(this.f476b, j10, true, true);
        a0 a0Var = new a0(this.f476b.b(g10), this.f477c.b(g10));
        if (a0Var.f50476a != j10 && g10 != this.f476b.c() - 1) {
            int i10 = g10 + 1;
            return new z.a(a0Var, new a0(this.f476b.b(i10), this.f477c.b(i10)));
        }
        return new z.a(a0Var);
    }

    @Override // ad.g
    public long g() {
        return this.f475a;
    }

    @Override // tc.z
    public boolean h() {
        return true;
    }

    @Override // tc.z
    public long i() {
        return this.f478d;
    }
}
