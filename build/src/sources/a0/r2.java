package a0;

import x.i1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class r2 implements x.i1 {

    /* renamed from: d  reason: collision with root package name */
    private final long f262d;

    /* renamed from: e  reason: collision with root package name */
    private final x.i1 f263e;

    public r2(long j10, x.i1 i1Var) {
        boolean z10;
        if (j10 >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        b2.e.b(z10, "Timeout must be non-negative.");
        this.f262d = j10;
        this.f263e = i1Var;
    }

    @Override // x.i1
    public long b() {
        return this.f262d;
    }

    @Override // x.i1
    public i1.c e(i1.b bVar) {
        i1.c e10 = this.f263e.e(bVar);
        if (b() > 0 && bVar.c() >= b() - e10.b()) {
            return i1.c.f54253d;
        }
        return e10;
    }
}
