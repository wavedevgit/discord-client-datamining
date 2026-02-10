package rg;

import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z extends n {

    /* renamed from: d  reason: collision with root package name */
    private final Object f48922d;

    /* renamed from: e  reason: collision with root package name */
    private int f48923e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ c0 f48924i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(c0 c0Var, int i10) {
        this.f48924i = c0Var;
        this.f48922d = c0.j(c0Var, i10);
        this.f48923e = i10;
    }

    private final void a() {
        int z10;
        int i10 = this.f48923e;
        if (i10 == -1 || i10 >= this.f48924i.size() || !dl.a(this.f48922d, c0.j(this.f48924i, this.f48923e))) {
            z10 = this.f48924i.z(this.f48922d);
            this.f48923e = z10;
        }
    }

    @Override // rg.n, java.util.Map.Entry
    public final Object getKey() {
        return this.f48922d;
    }

    @Override // rg.n, java.util.Map.Entry
    public final Object getValue() {
        Map o10 = this.f48924i.o();
        if (o10 != null) {
            return o10.get(this.f48922d);
        }
        a();
        int i10 = this.f48923e;
        if (i10 == -1) {
            return null;
        }
        return c0.m(this.f48924i, i10);
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        Map o10 = this.f48924i.o();
        if (o10 != null) {
            return o10.put(this.f48922d, obj);
        }
        a();
        int i10 = this.f48923e;
        if (i10 == -1) {
            this.f48924i.put(this.f48922d, obj);
            return null;
        }
        c0 c0Var = this.f48924i;
        Object m10 = c0.m(c0Var, i10);
        c0.q(c0Var, this.f48923e, obj);
        return m10;
    }
}
