package pp;

import android.view.Window;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final v f46251a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f46252b;

    public y(v vVar, zq.h hVar) {
        this.f46251a = vVar;
        this.f46252b = hVar;
    }

    public static y a(v vVar, zq.h hVar) {
        return new y(vVar, hVar);
    }

    public static yp.a c(v vVar, Window window) {
        return (yp.a) zq.g.d(vVar.c(window));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public yp.a get() {
        return c(this.f46251a, (Window) this.f46252b.get());
    }
}
