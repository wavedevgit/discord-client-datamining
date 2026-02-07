package sp;

import br.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final b f50049a;

    public c(b bVar) {
        this.f50049a = bVar;
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
        return b(this.f50049a);
    }
}
