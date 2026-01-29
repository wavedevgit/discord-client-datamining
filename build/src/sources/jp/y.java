package jp;

import android.view.Window;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final v f32392a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f32393b;

    public y(v vVar, tq.h hVar) {
        this.f32392a = vVar;
        this.f32393b = hVar;
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
        return c(this.f32392a, (Window) this.f32393b.get());
    }
}
