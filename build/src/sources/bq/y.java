package bq;

import android.view.Window;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final v f7454a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f7455b;

    public y(v vVar, lr.h hVar) {
        this.f7454a = vVar;
        this.f7455b = hVar;
    }

    public static y a(v vVar, lr.h hVar) {
        return new y(vVar, hVar);
    }

    public static kq.a c(v vVar, Window window) {
        return (kq.a) lr.g.d(vVar.c(window));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public kq.a get() {
        return c(this.f7454a, (Window) this.f7455b.get());
    }
}
