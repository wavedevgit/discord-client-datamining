package ip;

import androidx.lifecycle.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f30356a;

    public g(c cVar) {
        this.f30356a = cVar;
    }

    public static g a(c cVar) {
        return new g(cVar);
    }

    public static b0 c(c cVar) {
        return (b0) lr.g.d(cVar.d());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public b0 get() {
        return c(this.f30356a);
    }
}
