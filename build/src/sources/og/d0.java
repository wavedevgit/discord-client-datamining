package og;

import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d0 extends r {

    /* renamed from: d  reason: collision with root package name */
    private final Object f42672d;

    /* renamed from: e  reason: collision with root package name */
    private int f42673e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ f0 f42674i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d0(f0 f0Var, int i10) {
        this.f42674i = f0Var;
        this.f42672d = f0.i(f0Var, i10);
        this.f42673e = i10;
    }

    private final void a() {
        int x10;
        int i10 = this.f42673e;
        if (i10 == -1 || i10 >= this.f42674i.size() || !ze.a(this.f42672d, f0.i(this.f42674i, this.f42673e))) {
            x10 = this.f42674i.x(this.f42672d);
            this.f42673e = x10;
        }
    }

    @Override // og.r, java.util.Map.Entry
    public final Object getKey() {
        return this.f42672d;
    }

    @Override // og.r, java.util.Map.Entry
    public final Object getValue() {
        Map n10 = this.f42674i.n();
        if (n10 != null) {
            return n10.get(this.f42672d);
        }
        a();
        int i10 = this.f42673e;
        if (i10 == -1) {
            return null;
        }
        return f0.l(this.f42674i, i10);
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        Map n10 = this.f42674i.n();
        if (n10 != null) {
            return n10.put(this.f42672d, obj);
        }
        a();
        int i10 = this.f42673e;
        if (i10 == -1) {
            this.f42674i.put(this.f42672d, obj);
            return null;
        }
        Object l10 = f0.l(this.f42674i, i10);
        f0.o(this.f42674i, this.f42673e, obj);
        return l10;
    }
}
