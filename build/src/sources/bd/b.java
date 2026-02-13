package bd;

import oe.w0;
import oe.z;
import uc.a0;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b implements g {

    /* renamed from: a  reason: collision with root package name */
    private final long f6569a;

    /* renamed from: b  reason: collision with root package name */
    private final z f6570b;

    /* renamed from: c  reason: collision with root package name */
    private final z f6571c;

    /* renamed from: d  reason: collision with root package name */
    private long f6572d;

    public b(long j10, long j11, long j12) {
        this.f6572d = j10;
        this.f6569a = j12;
        z zVar = new z();
        this.f6570b = zVar;
        z zVar2 = new z();
        this.f6571c = zVar2;
        zVar.a(0L);
        zVar2.a(j11);
    }

    public boolean a(long j10) {
        z zVar = this.f6570b;
        if (j10 - zVar.b(zVar.c() - 1) < 100000) {
            return true;
        }
        return false;
    }

    @Override // bd.g
    public long b(long j10) {
        return this.f6570b.b(w0.g(this.f6571c, j10, true, true));
    }

    public void c(long j10, long j11) {
        if (a(j10)) {
            return;
        }
        this.f6570b.a(j10);
        this.f6571c.a(j11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(long j10) {
        this.f6572d = j10;
    }

    @Override // uc.z
    public z.a e(long j10) {
        int g10 = w0.g(this.f6570b, j10, true, true);
        a0 a0Var = new a0(this.f6570b.b(g10), this.f6571c.b(g10));
        if (a0Var.f51180a != j10 && g10 != this.f6570b.c() - 1) {
            int i10 = g10 + 1;
            return new z.a(a0Var, new a0(this.f6570b.b(i10), this.f6571c.b(i10)));
        }
        return new z.a(a0Var);
    }

    @Override // bd.g
    public long f() {
        return this.f6569a;
    }

    @Override // uc.z
    public boolean g() {
        return true;
    }

    @Override // uc.z
    public long i() {
        return this.f6572d;
    }
}
