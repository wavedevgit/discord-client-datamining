package qp;

import zq.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final b f47977a;

    public c(b bVar) {
        this.f47977a = bVar;
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
        return b(this.f47977a);
    }
}
