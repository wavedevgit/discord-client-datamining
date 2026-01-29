package e5;

import e5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e implements c {

    /* renamed from: a  reason: collision with root package name */
    private final h f22626a;

    /* renamed from: b  reason: collision with root package name */
    private final i f22627b;

    public e(h hVar, i iVar) {
        this.f22626a = hVar;
        this.f22627b = iVar;
    }

    @Override // e5.c
    public void a(int i10) {
        this.f22626a.a(i10);
        this.f22627b.a(i10);
    }

    @Override // e5.c
    public c.C0288c b(c.b bVar) {
        c.C0288c b10 = this.f22626a.b(bVar);
        if (b10 == null) {
            return this.f22627b.b(bVar);
        }
        return b10;
    }

    @Override // e5.c
    public void c(c.b bVar, c.C0288c c0288c) {
        this.f22626a.d(c.b.b(bVar, null, k5.c.b(bVar.c()), 1, null), c0288c.a(), k5.c.b(c0288c.b()));
    }

    @Override // e5.c
    public void clear() {
        this.f22626a.c();
        this.f22627b.c();
    }
}
