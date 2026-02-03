package np;

import wq.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final b f41917a;

    public c(b bVar) {
        this.f41917a = bVar;
    }

    public static c a(b bVar) {
        return new c(bVar);
    }

    public static a b(b bVar) {
        return (a) g.d(bVar.a());
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public a get() {
        return b(this.f41917a);
    }
}
