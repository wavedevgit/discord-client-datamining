package og;

import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class w0 extends j0 {

    /* renamed from: d  reason: collision with root package name */
    private final Object f39754d;

    /* renamed from: e  reason: collision with root package name */
    private int f39755e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ y0 f39756i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public w0(y0 y0Var, int i10) {
        this.f39756i = y0Var;
        this.f39754d = y0.j(y0Var, i10);
        this.f39755e = i10;
    }

    private final void a() {
        int z10;
        int i10 = this.f39755e;
        if (i10 == -1 || i10 >= this.f39756i.size() || !r.a(this.f39754d, y0.j(this.f39756i, this.f39755e))) {
            z10 = this.f39756i.z(this.f39754d);
            this.f39755e = z10;
        }
    }

    @Override // og.j0, java.util.Map.Entry
    public final Object getKey() {
        return this.f39754d;
    }

    @Override // og.j0, java.util.Map.Entry
    public final Object getValue() {
        Map o10 = this.f39756i.o();
        if (o10 != null) {
            return o10.get(this.f39754d);
        }
        a();
        int i10 = this.f39755e;
        if (i10 == -1) {
            return null;
        }
        return y0.m(this.f39756i, i10);
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        Map o10 = this.f39756i.o();
        if (o10 != null) {
            return o10.put(this.f39754d, obj);
        }
        a();
        int i10 = this.f39755e;
        if (i10 == -1) {
            this.f39756i.put(this.f39754d, obj);
            return null;
        }
        y0 y0Var = this.f39756i;
        Object m10 = y0.m(y0Var, i10);
        y0.q(y0Var, this.f39755e, obj);
        return m10;
    }
}
