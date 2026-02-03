package pg;

import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z extends n {

    /* renamed from: d  reason: collision with root package name */
    private final Object f45996d;

    /* renamed from: e  reason: collision with root package name */
    private int f45997e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ c0 f45998i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(c0 c0Var, int i10) {
        this.f45998i = c0Var;
        this.f45996d = c0.j(c0Var, i10);
        this.f45997e = i10;
    }

    private final void a() {
        int z10;
        int i10 = this.f45997e;
        if (i10 == -1 || i10 >= this.f45998i.size() || !dl.a(this.f45996d, c0.j(this.f45998i, this.f45997e))) {
            z10 = this.f45998i.z(this.f45996d);
            this.f45997e = z10;
        }
    }

    @Override // pg.n, java.util.Map.Entry
    public final Object getKey() {
        return this.f45996d;
    }

    @Override // pg.n, java.util.Map.Entry
    public final Object getValue() {
        Map o10 = this.f45998i.o();
        if (o10 != null) {
            return o10.get(this.f45996d);
        }
        a();
        int i10 = this.f45997e;
        if (i10 == -1) {
            return null;
        }
        return c0.m(this.f45998i, i10);
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        Map o10 = this.f45998i.o();
        if (o10 != null) {
            return o10.put(this.f45996d, obj);
        }
        a();
        int i10 = this.f45997e;
        if (i10 == -1) {
            this.f45998i.put(this.f45996d, obj);
            return null;
        }
        c0 c0Var = this.f45998i;
        Object m10 = c0.m(c0Var, i10);
        c0.q(c0Var, this.f45997e, obj);
        return m10;
    }
}
