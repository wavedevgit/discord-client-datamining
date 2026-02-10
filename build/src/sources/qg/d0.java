package qg;

import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d0 extends r {

    /* renamed from: d  reason: collision with root package name */
    private final Object f45576d;

    /* renamed from: e  reason: collision with root package name */
    private int f45577e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ f0 f45578i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d0(f0 f0Var, int i10) {
        this.f45578i = f0Var;
        this.f45576d = f0.i(f0Var, i10);
        this.f45577e = i10;
    }

    private final void a() {
        int x10;
        int i10 = this.f45577e;
        if (i10 == -1 || i10 >= this.f45578i.size() || !ze.a(this.f45576d, f0.i(this.f45578i, this.f45577e))) {
            x10 = this.f45578i.x(this.f45576d);
            this.f45577e = x10;
        }
    }

    @Override // qg.r, java.util.Map.Entry
    public final Object getKey() {
        return this.f45576d;
    }

    @Override // qg.r, java.util.Map.Entry
    public final Object getValue() {
        Map n10 = this.f45578i.n();
        if (n10 != null) {
            return n10.get(this.f45576d);
        }
        a();
        int i10 = this.f45577e;
        if (i10 == -1) {
            return null;
        }
        return f0.l(this.f45578i, i10);
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        Map n10 = this.f45578i.n();
        if (n10 != null) {
            return n10.put(this.f45576d, obj);
        }
        a();
        int i10 = this.f45577e;
        if (i10 == -1) {
            this.f45578i.put(this.f45576d, obj);
            return null;
        }
        Object l10 = f0.l(this.f45578i, i10);
        f0.o(this.f45578i, this.f45577e, obj);
        return l10;
    }
}
