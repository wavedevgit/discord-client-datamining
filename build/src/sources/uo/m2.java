package uo;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m2 implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final br.h f52062a;

    public m2(br.h hVar) {
        this.f52062a = hVar;
    }

    public static m2 a(br.h hVar) {
        return new m2(hVar);
    }

    public static l2 c(Context context) {
        return new l2(context);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public l2 get() {
        return c((Context) this.f52062a.get());
    }
}
