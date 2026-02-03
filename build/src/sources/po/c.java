package po;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final wq.h f46423a;

    public c(wq.h hVar) {
        this.f46423a = hVar;
    }

    public static c a(wq.h hVar) {
        return new c(hVar);
    }

    public static com.withpersona.sdk2.inquiry.internal.a c(String str, com.withpersona.sdk2.inquiry.internal.network.e eVar) {
        return new com.withpersona.sdk2.inquiry.internal.a(str, eVar);
    }

    public com.withpersona.sdk2.inquiry.internal.a b(String str) {
        return c(str, (com.withpersona.sdk2.inquiry.internal.network.e) this.f46423a.get());
    }
}
