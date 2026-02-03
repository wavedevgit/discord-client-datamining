package lp;

import uq.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final b f37517a;

    public c(b bVar) {
        this.f37517a = bVar;
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
        return b(this.f37517a);
    }
}
