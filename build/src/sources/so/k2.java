package so;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k2 {

    /* renamed from: a  reason: collision with root package name */
    private final zq.h f50128a;

    public k2(zq.h hVar) {
        this.f50128a = hVar;
    }

    public static k2 a(zq.h hVar) {
        return new k2(hVar);
    }

    public static com.withpersona.sdk2.inquiry.internal.u c(String str, String str2, String str3, wp.g gVar, com.withpersona.sdk2.inquiry.internal.network.e eVar) {
        return new com.withpersona.sdk2.inquiry.internal.u(str, str2, str3, gVar, eVar);
    }

    public com.withpersona.sdk2.inquiry.internal.u b(String str, String str2, String str3, wp.g gVar) {
        return c(str, str2, str3, gVar, (com.withpersona.sdk2.inquiry.internal.network.e) this.f50128a.get());
    }
}
