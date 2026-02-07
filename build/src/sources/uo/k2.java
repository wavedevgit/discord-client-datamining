package uo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k2 {

    /* renamed from: a  reason: collision with root package name */
    private final br.h f52022a;

    public k2(br.h hVar) {
        this.f52022a = hVar;
    }

    public static k2 a(br.h hVar) {
        return new k2(hVar);
    }

    public static com.withpersona.sdk2.inquiry.internal.u c(String str, String str2, String str3, yp.g gVar, com.withpersona.sdk2.inquiry.internal.network.e eVar) {
        return new com.withpersona.sdk2.inquiry.internal.u(str, str2, str3, gVar, eVar);
    }

    public com.withpersona.sdk2.inquiry.internal.u b(String str, String str2, String str3, yp.g gVar) {
        return c(str, str2, str3, gVar, (com.withpersona.sdk2.inquiry.internal.network.e) this.f52022a.get());
    }
}
