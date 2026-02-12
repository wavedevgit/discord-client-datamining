package rg;

import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z extends n {

    /* renamed from: d  reason: collision with root package name */
    private final Object f47377d;

    /* renamed from: e  reason: collision with root package name */
    private int f47378e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ c0 f47379i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(c0 c0Var, int i10) {
        this.f47379i = c0Var;
        this.f47377d = c0.j(c0Var, i10);
        this.f47378e = i10;
    }

    private final void a() {
        int z10;
        int i10 = this.f47378e;
        if (i10 == -1 || i10 >= this.f47379i.size() || !dl.a(this.f47377d, c0.j(this.f47379i, this.f47378e))) {
            z10 = this.f47379i.z(this.f47377d);
            this.f47378e = z10;
        }
    }

    @Override // rg.n, java.util.Map.Entry
    public final Object getKey() {
        return this.f47377d;
    }

    @Override // rg.n, java.util.Map.Entry
    public final Object getValue() {
        Map o10 = this.f47379i.o();
        if (o10 != null) {
            return o10.get(this.f47377d);
        }
        a();
        int i10 = this.f47378e;
        if (i10 == -1) {
            return null;
        }
        return c0.m(this.f47379i, i10);
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        Map o10 = this.f47379i.o();
        if (o10 != null) {
            return o10.put(this.f47377d, obj);
        }
        a();
        int i10 = this.f47378e;
        if (i10 == -1) {
            this.f47379i.put(this.f47377d, obj);
            return null;
        }
        c0 c0Var = this.f47379i;
        Object m10 = c0.m(c0Var, i10);
        c0.q(c0Var, this.f47378e, obj);
        return m10;
    }
}
