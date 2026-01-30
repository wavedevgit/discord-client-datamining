package op;

import tq.d;
import tq.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements d {

    /* renamed from: a  reason: collision with root package name */
    private final a f44626a;

    public b(a aVar) {
        this.f44626a = aVar;
    }

    public static b a(a aVar) {
        return new b(aVar);
    }

    public static c c(a aVar) {
        return (c) g.d(aVar.a());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public c get() {
        return c(this.f44626a);
    }
}
