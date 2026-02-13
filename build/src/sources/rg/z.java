package rg;

import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z extends n {

    /* renamed from: d  reason: collision with root package name */
    private final Object f47945d;

    /* renamed from: e  reason: collision with root package name */
    private int f47946e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ c0 f47947i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(c0 c0Var, int i10) {
        this.f47947i = c0Var;
        this.f47945d = c0.j(c0Var, i10);
        this.f47946e = i10;
    }

    private final void a() {
        int z10;
        int i10 = this.f47946e;
        if (i10 == -1 || i10 >= this.f47947i.size() || !dl.a(this.f47945d, c0.j(this.f47947i, this.f47946e))) {
            z10 = this.f47947i.z(this.f47945d);
            this.f47946e = z10;
        }
    }

    @Override // rg.n, java.util.Map.Entry
    public final Object getKey() {
        return this.f47945d;
    }

    @Override // rg.n, java.util.Map.Entry
    public final Object getValue() {
        Map o10 = this.f47947i.o();
        if (o10 != null) {
            return o10.get(this.f47945d);
        }
        a();
        int i10 = this.f47946e;
        if (i10 == -1) {
            return null;
        }
        return c0.m(this.f47947i, i10);
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        Map o10 = this.f47947i.o();
        if (o10 != null) {
            return o10.put(this.f47945d, obj);
        }
        a();
        int i10 = this.f47946e;
        if (i10 == -1) {
            this.f47947i.put(this.f47945d, obj);
            return null;
        }
        c0 c0Var = this.f47947i;
        Object m10 = c0.m(c0Var, i10);
        c0.q(c0Var, this.f47946e, obj);
        return m10;
    }
}
