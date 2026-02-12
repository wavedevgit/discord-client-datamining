package ip;

import com.withpersona.sdk2.inquiry.FallbackMode;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f30353a;

    public e(c cVar) {
        this.f30353a = cVar;
    }

    public static e a(c cVar) {
        return new e(cVar);
    }

    public static FallbackMode b(c cVar) {
        return (FallbackMode) lr.g.d(cVar.b());
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public FallbackMode get() {
        return b(this.f30353a);
    }
}
