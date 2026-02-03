package kp;

import android.view.Window;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final v f36327a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f36328b;

    public y(v vVar, uq.h hVar) {
        this.f36327a = vVar;
        this.f36328b = hVar;
    }

    public static y a(v vVar, uq.h hVar) {
        return new y(vVar, hVar);
    }

    public static tp.a c(v vVar, Window window) {
        return (tp.a) uq.g.d(vVar.c(window));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public tp.a get() {
        return c(this.f36327a, (Window) this.f36328b.get());
    }
}
