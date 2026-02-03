package no;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m2 implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final uq.h f42260a;

    public m2(uq.h hVar) {
        this.f42260a = hVar;
    }

    public static m2 a(uq.h hVar) {
        return new m2(hVar);
    }

    public static l2 c(Context context) {
        return new l2(context);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public l2 get() {
        return c((Context) this.f42260a.get());
    }
}
