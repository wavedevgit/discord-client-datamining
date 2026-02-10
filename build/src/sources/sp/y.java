package sp;

import android.view.Window;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final v f50025a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f50026b;

    public y(v vVar, cr.h hVar) {
        this.f50025a = vVar;
        this.f50026b = hVar;
    }

    public static y a(v vVar, cr.h hVar) {
        return new y(vVar, hVar);
    }

    public static bq.a c(v vVar, Window window) {
        return (bq.a) cr.g.d(vVar.c(window));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public bq.a get() {
        return c(this.f50025a, (Window) this.f50026b.get());
    }
}
