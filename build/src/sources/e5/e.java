package e5;

import e5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e implements c {

    /* renamed from: a  reason: collision with root package name */
    private final h f21349a;

    /* renamed from: b  reason: collision with root package name */
    private final i f21350b;

    public e(h hVar, i iVar) {
        this.f21349a = hVar;
        this.f21350b = iVar;
    }

    @Override // e5.c
    public void a(int i10) {
        this.f21349a.a(i10);
        this.f21350b.a(i10);
    }

    @Override // e5.c
    public c.C0277c b(c.b bVar) {
        c.C0277c b10 = this.f21349a.b(bVar);
        if (b10 == null) {
            return this.f21350b.b(bVar);
        }
        return b10;
    }

    @Override // e5.c
    public void c(c.b bVar, c.C0277c c0277c) {
        this.f21349a.d(c.b.b(bVar, null, k5.c.b(bVar.c()), 1, null), c0277c.a(), k5.c.b(c0277c.b()));
    }

    @Override // e5.c
    public void clear() {
        this.f21349a.c();
        this.f21350b.c();
    }
}
