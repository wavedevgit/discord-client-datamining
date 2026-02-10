package qg;

import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d0 extends r {

    /* renamed from: d  reason: collision with root package name */
    private final Object f44244d;

    /* renamed from: e  reason: collision with root package name */
    private int f44245e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ f0 f44246i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d0(f0 f0Var, int i10) {
        this.f44246i = f0Var;
        this.f44244d = f0.i(f0Var, i10);
        this.f44245e = i10;
    }

    private final void a() {
        int x10;
        int i10 = this.f44245e;
        if (i10 == -1 || i10 >= this.f44246i.size() || !ze.a(this.f44244d, f0.i(this.f44246i, this.f44245e))) {
            x10 = this.f44246i.x(this.f44244d);
            this.f44245e = x10;
        }
    }

    @Override // qg.r, java.util.Map.Entry
    public final Object getKey() {
        return this.f44244d;
    }

    @Override // qg.r, java.util.Map.Entry
    public final Object getValue() {
        Map n10 = this.f44246i.n();
        if (n10 != null) {
            return n10.get(this.f44244d);
        }
        a();
        int i10 = this.f44245e;
        if (i10 == -1) {
            return null;
        }
        return f0.l(this.f44246i, i10);
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        Map n10 = this.f44246i.n();
        if (n10 != null) {
            return n10.put(this.f44244d, obj);
        }
        a();
        int i10 = this.f44245e;
        if (i10 == -1) {
            this.f44246i.put(this.f44244d, obj);
            return null;
        }
        Object l10 = f0.l(this.f44246i, i10);
        f0.o(this.f44246i, this.f44245e, obj);
        return l10;
    }
}
