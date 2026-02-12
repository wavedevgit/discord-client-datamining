package ep;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n2 {

    /* renamed from: a  reason: collision with root package name */
    private final lr.h f23199a;

    public n2(lr.h hVar) {
        this.f23199a = hVar;
    }

    public static n2 a(lr.h hVar) {
        return new n2(hVar);
    }

    public static com.withpersona.sdk2.inquiry.internal.a0 c(String str, String str2, iq.g gVar, com.withpersona.sdk2.inquiry.internal.network.e eVar) {
        return new com.withpersona.sdk2.inquiry.internal.a0(str, str2, gVar, eVar);
    }

    public com.withpersona.sdk2.inquiry.internal.a0 b(String str, String str2, iq.g gVar) {
        return c(str, str2, gVar, (com.withpersona.sdk2.inquiry.internal.network.e) this.f23199a.get());
    }
}
