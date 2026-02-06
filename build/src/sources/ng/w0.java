package ng;

import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class w0 extends j0 {

    /* renamed from: d  reason: collision with root package name */
    private final Object f40354d;

    /* renamed from: e  reason: collision with root package name */
    private int f40355e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ y0 f40356i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public w0(y0 y0Var, int i10) {
        this.f40356i = y0Var;
        this.f40354d = y0.j(y0Var, i10);
        this.f40355e = i10;
    }

    private final void a() {
        int z10;
        int i10 = this.f40355e;
        if (i10 == -1 || i10 >= this.f40356i.size() || !r.a(this.f40354d, y0.j(this.f40356i, this.f40355e))) {
            z10 = this.f40356i.z(this.f40354d);
            this.f40355e = z10;
        }
    }

    @Override // ng.j0, java.util.Map.Entry
    public final Object getKey() {
        return this.f40354d;
    }

    @Override // ng.j0, java.util.Map.Entry
    public final Object getValue() {
        Map o10 = this.f40356i.o();
        if (o10 != null) {
            return o10.get(this.f40354d);
        }
        a();
        int i10 = this.f40355e;
        if (i10 == -1) {
            return null;
        }
        return y0.m(this.f40356i, i10);
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        Map o10 = this.f40356i.o();
        if (o10 != null) {
            return o10.put(this.f40354d, obj);
        }
        a();
        int i10 = this.f40355e;
        if (i10 == -1) {
            this.f40356i.put(this.f40354d, obj);
            return null;
        }
        y0 y0Var = this.f40356i;
        Object m10 = y0.m(y0Var, i10);
        y0.q(y0Var, this.f40355e, obj);
        return m10;
    }
}
