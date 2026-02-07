package uo;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final l f52063a;

    public n(l lVar) {
        this.f52063a = lVar;
    }

    public static Context a(l lVar) {
        return (Context) br.g.d(lVar.b());
    }

    public static n b(l lVar) {
        return new n(lVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public Context get() {
        return a(this.f52063a);
    }
}
