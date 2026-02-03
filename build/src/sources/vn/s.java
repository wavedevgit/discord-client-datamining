package vn;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final uq.h f51461a;

    public s(uq.h hVar) {
        this.f51461a = hVar;
    }

    public static s a(uq.h hVar) {
        return new s(hVar);
    }

    public static r c(Context context) {
        return new r(context);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public r get() {
        return c((Context) this.f51461a.get());
    }
}
