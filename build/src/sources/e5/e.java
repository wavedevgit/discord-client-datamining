package e5;

import e5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e implements c {

    /* renamed from: a  reason: collision with root package name */
    private final h f22317a;

    /* renamed from: b  reason: collision with root package name */
    private final i f22318b;

    public e(h hVar, i iVar) {
        this.f22317a = hVar;
        this.f22318b = iVar;
    }

    @Override // e5.c
    public void a(int i10) {
        this.f22317a.a(i10);
        this.f22318b.a(i10);
    }

    @Override // e5.c
    public c.C0302c b(c.b bVar) {
        c.C0302c b10 = this.f22317a.b(bVar);
        if (b10 == null) {
            return this.f22318b.b(bVar);
        }
        return b10;
    }

    @Override // e5.c
    public void c(c.b bVar, c.C0302c c0302c) {
        this.f22317a.d(c.b.b(bVar, null, k5.c.b(bVar.c()), 1, null), c0302c.a(), k5.c.b(c0302c.b()));
    }

    @Override // e5.c
    public void clear() {
        this.f22317a.c();
        this.f22318b.c();
    }
}
