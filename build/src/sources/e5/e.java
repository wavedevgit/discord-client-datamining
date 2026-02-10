package e5;

import e5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e implements c {

    /* renamed from: a  reason: collision with root package name */
    private final h f21149a;

    /* renamed from: b  reason: collision with root package name */
    private final i f21150b;

    public e(h hVar, i iVar) {
        this.f21149a = hVar;
        this.f21150b = iVar;
    }

    @Override // e5.c
    public void a(int i10) {
        this.f21149a.a(i10);
        this.f21150b.a(i10);
    }

    @Override // e5.c
    public c.C0315c b(c.b bVar) {
        c.C0315c b10 = this.f21149a.b(bVar);
        if (b10 == null) {
            return this.f21150b.b(bVar);
        }
        return b10;
    }

    @Override // e5.c
    public void c(c.b bVar, c.C0315c c0315c) {
        this.f21149a.d(c.b.b(bVar, null, k5.c.b(bVar.c()), 1, null), c0315c.a(), k5.c.b(c0315c.b()));
    }

    @Override // e5.c
    public void clear() {
        this.f21149a.c();
        this.f21150b.c();
    }
}
