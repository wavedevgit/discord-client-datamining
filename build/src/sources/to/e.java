package to;

import com.withpersona.sdk2.inquiry.FallbackMode;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final c f50163a;

    public e(c cVar) {
        this.f50163a = cVar;
    }

    public static e a(c cVar) {
        return new e(cVar);
    }

    public static FallbackMode b(c cVar) {
        return (FallbackMode) wq.g.d(cVar.b());
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public FallbackMode get() {
        return b(this.f50163a);
    }
}
