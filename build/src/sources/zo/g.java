package zo;

import androidx.lifecycle.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f56575a;

    public g(c cVar) {
        this.f56575a = cVar;
    }

    public static g a(c cVar) {
        return new g(cVar);
    }

    public static b0 c(c cVar) {
        return (b0) cr.g.d(cVar.d());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public b0 get() {
        return c(this.f56575a);
    }
}
