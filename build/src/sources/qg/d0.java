package qg;

import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d0 extends r {

    /* renamed from: d  reason: collision with root package name */
    private final Object f44813d;

    /* renamed from: e  reason: collision with root package name */
    private int f44814e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ f0 f44815i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d0(f0 f0Var, int i10) {
        this.f44815i = f0Var;
        this.f44813d = f0.i(f0Var, i10);
        this.f44814e = i10;
    }

    private final void a() {
        int x10;
        int i10 = this.f44814e;
        if (i10 == -1 || i10 >= this.f44815i.size() || !ze.a(this.f44813d, f0.i(this.f44815i, this.f44814e))) {
            x10 = this.f44815i.x(this.f44813d);
            this.f44814e = x10;
        }
    }

    @Override // qg.r, java.util.Map.Entry
    public final Object getKey() {
        return this.f44813d;
    }

    @Override // qg.r, java.util.Map.Entry
    public final Object getValue() {
        Map n10 = this.f44815i.n();
        if (n10 != null) {
            return n10.get(this.f44813d);
        }
        a();
        int i10 = this.f44814e;
        if (i10 == -1) {
            return null;
        }
        return f0.l(this.f44815i, i10);
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        Map n10 = this.f44815i.n();
        if (n10 != null) {
            return n10.put(this.f44813d, obj);
        }
        a();
        int i10 = this.f44814e;
        if (i10 == -1) {
            this.f44815i.put(this.f44813d, obj);
            return null;
        }
        Object l10 = f0.l(this.f44815i, i10);
        f0.o(this.f44815i, this.f44814e, obj);
        return l10;
    }
}
