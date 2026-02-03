package rp;

import wq.d;
import wq.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements d {

    /* renamed from: a  reason: collision with root package name */
    private final a f49052a;

    public b(a aVar) {
        this.f49052a = aVar;
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
        return c(this.f49052a);
    }
}
