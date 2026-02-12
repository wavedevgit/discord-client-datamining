package no;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final lr.h f38200a;

    public s(lr.h hVar) {
        this.f38200a = hVar;
    }

    public static s a(lr.h hVar) {
        return new s(hVar);
    }

    public static r c(Context context) {
        return new r(context);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public r get() {
        return c((Context) this.f38200a.get());
    }
}
