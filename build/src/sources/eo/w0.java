package eo;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w0 implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final wq.h f22404a;

    public w0(wq.h hVar) {
        this.f22404a = hVar;
    }

    public static w0 a(wq.h hVar) {
        return new w0(hVar);
    }

    public static Set c(i0 i0Var) {
        return (Set) wq.g.d(u0.b(i0Var));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Set get() {
        return c((i0) this.f22404a.get());
    }
}
