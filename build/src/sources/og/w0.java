package og;

import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class w0 extends j0 {

    /* renamed from: d  reason: collision with root package name */
    private final Object f40322d;

    /* renamed from: e  reason: collision with root package name */
    private int f40323e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ y0 f40324i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public w0(y0 y0Var, int i10) {
        this.f40324i = y0Var;
        this.f40322d = y0.j(y0Var, i10);
        this.f40323e = i10;
    }

    private final void a() {
        int z10;
        int i10 = this.f40323e;
        if (i10 == -1 || i10 >= this.f40324i.size() || !r.a(this.f40322d, y0.j(this.f40324i, this.f40323e))) {
            z10 = this.f40324i.z(this.f40322d);
            this.f40323e = z10;
        }
    }

    @Override // og.j0, java.util.Map.Entry
    public final Object getKey() {
        return this.f40322d;
    }

    @Override // og.j0, java.util.Map.Entry
    public final Object getValue() {
        Map o10 = this.f40324i.o();
        if (o10 != null) {
            return o10.get(this.f40322d);
        }
        a();
        int i10 = this.f40323e;
        if (i10 == -1) {
            return null;
        }
        return y0.m(this.f40324i, i10);
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        Map o10 = this.f40324i.o();
        if (o10 != null) {
            return o10.put(this.f40322d, obj);
        }
        a();
        int i10 = this.f40323e;
        if (i10 == -1) {
            this.f40324i.put(this.f40322d, obj);
            return null;
        }
        y0 y0Var = this.f40324i;
        Object m10 = y0.m(y0Var, i10);
        y0.q(y0Var, this.f40323e, obj);
        return m10;
    }
}
