package ep;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final lr.h f23066a;

    public c(lr.h hVar) {
        this.f23066a = hVar;
    }

    public static c a(lr.h hVar) {
        return new c(hVar);
    }

    public static com.withpersona.sdk2.inquiry.internal.a c(String str, com.withpersona.sdk2.inquiry.internal.network.e eVar) {
        return new com.withpersona.sdk2.inquiry.internal.a(str, eVar);
    }

    public com.withpersona.sdk2.inquiry.internal.a b(String str) {
        return c(str, (com.withpersona.sdk2.inquiry.internal.network.e) this.f23066a.get());
    }
}
