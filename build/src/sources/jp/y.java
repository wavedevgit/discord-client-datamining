package jp;

import android.view.Window;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final v f32408a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f32409b;

    public y(v vVar, tq.h hVar) {
        this.f32408a = vVar;
        this.f32409b = hVar;
    }

    public static y a(v vVar, tq.h hVar) {
        return new y(vVar, hVar);
    }

    public static sp.a c(v vVar, Window window) {
        return (sp.a) tq.g.d(vVar.c(window));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public sp.a get() {
        return c(this.f32408a, (Window) this.f32409b.get());
    }
}
