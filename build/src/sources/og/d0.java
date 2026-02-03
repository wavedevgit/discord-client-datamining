package og;

import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d0 extends r {

    /* renamed from: d  reason: collision with root package name */
    private final Object f42766d;

    /* renamed from: e  reason: collision with root package name */
    private int f42767e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ f0 f42768i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d0(f0 f0Var, int i10) {
        this.f42768i = f0Var;
        this.f42766d = f0.i(f0Var, i10);
        this.f42767e = i10;
    }

    private final void a() {
        int x10;
        int i10 = this.f42767e;
        if (i10 == -1 || i10 >= this.f42768i.size() || !ze.a(this.f42766d, f0.i(this.f42768i, this.f42767e))) {
            x10 = this.f42768i.x(this.f42766d);
            this.f42767e = x10;
        }
    }

    @Override // og.r, java.util.Map.Entry
    public final Object getKey() {
        return this.f42766d;
    }

    @Override // og.r, java.util.Map.Entry
    public final Object getValue() {
        Map n10 = this.f42768i.n();
        if (n10 != null) {
            return n10.get(this.f42766d);
        }
        a();
        int i10 = this.f42767e;
        if (i10 == -1) {
            return null;
        }
        return f0.l(this.f42768i, i10);
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        Map n10 = this.f42768i.n();
        if (n10 != null) {
            return n10.put(this.f42766d, obj);
        }
        a();
        int i10 = this.f42767e;
        if (i10 == -1) {
            this.f42768i.put(this.f42766d, obj);
            return null;
        }
        Object l10 = f0.l(this.f42768i, i10);
        f0.o(this.f42768i, this.f42767e, obj);
        return l10;
    }
}
