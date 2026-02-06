package e5;

import e5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e implements c {

    /* renamed from: a  reason: collision with root package name */
    private final h f21354a;

    /* renamed from: b  reason: collision with root package name */
    private final i f21355b;

    public e(h hVar, i iVar) {
        this.f21354a = hVar;
        this.f21355b = iVar;
    }

    @Override // e5.c
    public void a(int i10) {
        this.f21354a.a(i10);
        this.f21355b.a(i10);
    }

    @Override // e5.c
    public c.C0284c b(c.b bVar) {
        c.C0284c b10 = this.f21354a.b(bVar);
        if (b10 == null) {
            return this.f21355b.b(bVar);
        }
        return b10;
    }

    @Override // e5.c
    public void c(c.b bVar, c.C0284c c0284c) {
        this.f21354a.d(c.b.b(bVar, null, k5.c.b(bVar.c()), 1, null), c0284c.a(), k5.c.b(c0284c.b()));
    }

    @Override // e5.c
    public void clear() {
        this.f21354a.c();
        this.f21355b.c();
    }
}
