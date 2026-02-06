package co;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final br.h f7660a;

    public s(br.h hVar) {
        this.f7660a = hVar;
    }

    public static s a(br.h hVar) {
        return new s(hVar);
    }

    public static r c(Context context) {
        return new r(context);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public r get() {
        return c((Context) this.f7660a.get());
    }
}
