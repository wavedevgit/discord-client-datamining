package gq;

import lr.d;
import lr.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements d {

    /* renamed from: a  reason: collision with root package name */
    private final a f25965a;

    public b(a aVar) {
        this.f25965a = aVar;
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
        return c(this.f25965a);
    }
}
