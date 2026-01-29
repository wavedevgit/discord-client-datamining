package un;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final tq.h f50489a;

    public s(tq.h hVar) {
        this.f50489a = hVar;
    }

    public static s a(tq.h hVar) {
        return new s(hVar);
    }

    public static r c(Context context) {
        return new r(context);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public r get() {
        return c((Context) this.f50489a.get());
    }
}
