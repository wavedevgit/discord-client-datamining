package pg;

import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z extends n {

    /* renamed from: d  reason: collision with root package name */
    private final Object f45948d;

    /* renamed from: e  reason: collision with root package name */
    private int f45949e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ c0 f45950i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(c0 c0Var, int i10) {
        this.f45950i = c0Var;
        this.f45948d = c0.j(c0Var, i10);
        this.f45949e = i10;
    }

    private final void a() {
        int z10;
        int i10 = this.f45949e;
        if (i10 == -1 || i10 >= this.f45950i.size() || !dl.a(this.f45948d, c0.j(this.f45950i, this.f45949e))) {
            z10 = this.f45950i.z(this.f45948d);
            this.f45949e = z10;
        }
    }

    @Override // pg.n, java.util.Map.Entry
    public final Object getKey() {
        return this.f45948d;
    }

    @Override // pg.n, java.util.Map.Entry
    public final Object getValue() {
        Map o10 = this.f45950i.o();
        if (o10 != null) {
            return o10.get(this.f45948d);
        }
        a();
        int i10 = this.f45949e;
        if (i10 == -1) {
            return null;
        }
        return c0.m(this.f45950i, i10);
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        Map o10 = this.f45950i.o();
        if (o10 != null) {
            return o10.put(this.f45948d, obj);
        }
        a();
        int i10 = this.f45949e;
        if (i10 == -1) {
            this.f45950i.put(this.f45948d, obj);
            return null;
        }
        c0 c0Var = this.f45950i;
        Object m10 = c0.m(c0Var, i10);
        c0.q(c0Var, this.f45949e, obj);
        return m10;
    }
}
