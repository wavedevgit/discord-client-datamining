package yo;

import androidx.lifecycle.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f55550a;

    public g(c cVar) {
        this.f55550a = cVar;
    }

    public static g a(c cVar) {
        return new g(cVar);
    }

    public static b0 c(c cVar) {
        return (b0) br.g.d(cVar.d());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public b0 get() {
        return c(this.f55550a);
    }
}
