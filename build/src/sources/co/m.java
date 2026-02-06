package co;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final br.h f7652a;

    public m(br.h hVar) {
        this.f7652a = hVar;
    }

    public static m a(br.h hVar) {
        return new m(hVar);
    }

    public static l c(Context context) {
        return new l(context);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public l get() {
        return c((Context) this.f7652a.get());
    }
}
