package jq;

import lr.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final h f31294a;

    public c(h hVar) {
        this.f31294a = hVar;
    }

    public static c a(h hVar) {
        return new c(hVar);
    }

    public static b c(fq.e eVar) {
        return new b(eVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public b get() {
        return c((fq.e) this.f31294a.get());
    }
}
