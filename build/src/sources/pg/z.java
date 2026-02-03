package pg;

import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z extends n {

    /* renamed from: d  reason: collision with root package name */
    private final Object f46038d;

    /* renamed from: e  reason: collision with root package name */
    private int f46039e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ c0 f46040i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(c0 c0Var, int i10) {
        this.f46040i = c0Var;
        this.f46038d = c0.j(c0Var, i10);
        this.f46039e = i10;
    }

    private final void a() {
        int z10;
        int i10 = this.f46039e;
        if (i10 == -1 || i10 >= this.f46040i.size() || !dl.a(this.f46038d, c0.j(this.f46040i, this.f46039e))) {
            z10 = this.f46040i.z(this.f46038d);
            this.f46039e = z10;
        }
    }

    @Override // pg.n, java.util.Map.Entry
    public final Object getKey() {
        return this.f46038d;
    }

    @Override // pg.n, java.util.Map.Entry
    public final Object getValue() {
        Map o10 = this.f46040i.o();
        if (o10 != null) {
            return o10.get(this.f46038d);
        }
        a();
        int i10 = this.f46039e;
        if (i10 == -1) {
            return null;
        }
        return c0.m(this.f46040i, i10);
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        Map o10 = this.f46040i.o();
        if (o10 != null) {
            return o10.put(this.f46038d, obj);
        }
        a();
        int i10 = this.f46039e;
        if (i10 == -1) {
            this.f46040i.put(this.f46038d, obj);
            return null;
        }
        c0 c0Var = this.f46040i;
        Object m10 = c0.m(c0Var, i10);
        c0.q(c0Var, this.f46039e, obj);
        return m10;
    }
}
