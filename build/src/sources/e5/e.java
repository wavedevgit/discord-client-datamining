package e5;

import e5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e implements c {

    /* renamed from: a  reason: collision with root package name */
    private final h f22658a;

    /* renamed from: b  reason: collision with root package name */
    private final i f22659b;

    public e(h hVar, i iVar) {
        this.f22658a = hVar;
        this.f22659b = iVar;
    }

    @Override // e5.c
    public void a(int i10) {
        this.f22658a.a(i10);
        this.f22659b.a(i10);
    }

    @Override // e5.c
    public c.C0299c b(c.b bVar) {
        c.C0299c b10 = this.f22658a.b(bVar);
        if (b10 == null) {
            return this.f22659b.b(bVar);
        }
        return b10;
    }

    @Override // e5.c
    public void c(c.b bVar, c.C0299c c0299c) {
        this.f22658a.d(c.b.b(bVar, null, k5.c.b(bVar.c()), 1, null), c0299c.a(), k5.c.b(c0299c.b()));
    }

    @Override // e5.c
    public void clear() {
        this.f22658a.c();
        this.f22659b.c();
    }
}
