package so;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final com.withpersona.sdk2.inquiry.internal.network.f f49127a;

    public n(com.withpersona.sdk2.inquiry.internal.network.f fVar) {
        this.f49127a = fVar;
    }

    public static n a(com.withpersona.sdk2.inquiry.internal.network.f fVar) {
        return new n(fVar);
    }

    public static String c(com.withpersona.sdk2.inquiry.internal.network.f fVar) {
        return (String) tq.g.d(fVar.j());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public String get() {
        return c(this.f49127a);
    }
}
