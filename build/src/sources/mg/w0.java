package mg;

import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class w0 extends j0 {

    /* renamed from: d  reason: collision with root package name */
    private final Object f38732d;

    /* renamed from: e  reason: collision with root package name */
    private int f38733e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ y0 f38734i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public w0(y0 y0Var, int i10) {
        this.f38734i = y0Var;
        this.f38732d = y0.j(y0Var, i10);
        this.f38733e = i10;
    }

    private final void a() {
        int z10;
        int i10 = this.f38733e;
        if (i10 == -1 || i10 >= this.f38734i.size() || !r.a(this.f38732d, y0.j(this.f38734i, this.f38733e))) {
            z10 = this.f38734i.z(this.f38732d);
            this.f38733e = z10;
        }
    }

    @Override // mg.j0, java.util.Map.Entry
    public final Object getKey() {
        return this.f38732d;
    }

    @Override // mg.j0, java.util.Map.Entry
    public final Object getValue() {
        Map o10 = this.f38734i.o();
        if (o10 != null) {
            return o10.get(this.f38732d);
        }
        a();
        int i10 = this.f38733e;
        if (i10 == -1) {
            return null;
        }
        return y0.m(this.f38734i, i10);
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        Map o10 = this.f38734i.o();
        if (o10 != null) {
            return o10.put(this.f38732d, obj);
        }
        a();
        int i10 = this.f38733e;
        if (i10 == -1) {
            this.f38734i.put(this.f38732d, obj);
            return null;
        }
        y0 y0Var = this.f38734i;
        Object m10 = y0.m(y0Var, i10);
        y0.q(y0Var, this.f38733e, obj);
        return m10;
    }
}
