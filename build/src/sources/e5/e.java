package e5;

import e5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e implements c {

    /* renamed from: a  reason: collision with root package name */
    private final h f21421a;

    /* renamed from: b  reason: collision with root package name */
    private final i f21422b;

    public e(h hVar, i iVar) {
        this.f21421a = hVar;
        this.f21422b = iVar;
    }

    @Override // e5.c
    public void a(int i10) {
        this.f21421a.a(i10);
        this.f21422b.a(i10);
    }

    @Override // e5.c
    public c.C0292c b(c.b bVar) {
        c.C0292c b10 = this.f21421a.b(bVar);
        if (b10 == null) {
            return this.f21422b.b(bVar);
        }
        return b10;
    }

    @Override // e5.c
    public void c(c.b bVar, c.C0292c c0292c) {
        this.f21421a.d(c.b.b(bVar, null, k5.c.b(bVar.c()), 1, null), c0292c.a(), k5.c.b(c0292c.b()));
    }

    @Override // e5.c
    public void clear() {
        this.f21421a.c();
        this.f21422b.c();
    }
}
