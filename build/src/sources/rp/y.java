package rp;

import android.view.Window;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final v f49200a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f49201b;

    public y(v vVar, br.h hVar) {
        this.f49200a = vVar;
        this.f49201b = hVar;
    }

    public static y a(v vVar, br.h hVar) {
        return new y(vVar, hVar);
    }

    public static aq.a c(v vVar, Window window) {
        return (aq.a) br.g.d(vVar.c(window));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public aq.a get() {
        return c(this.f49200a, (Window) this.f49201b.get());
    }
}
