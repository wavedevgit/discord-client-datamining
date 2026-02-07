package uo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n2 {

    /* renamed from: a  reason: collision with root package name */
    private final br.h f52066a;

    public n2(br.h hVar) {
        this.f52066a = hVar;
    }

    public static n2 a(br.h hVar) {
        return new n2(hVar);
    }

    public static com.withpersona.sdk2.inquiry.internal.a0 c(String str, String str2, yp.g gVar, com.withpersona.sdk2.inquiry.internal.network.e eVar) {
        return new com.withpersona.sdk2.inquiry.internal.a0(str, str2, gVar, eVar);
    }

    public com.withpersona.sdk2.inquiry.internal.a0 b(String str, String str2, yp.g gVar) {
        return c(str, str2, gVar, (com.withpersona.sdk2.inquiry.internal.network.e) this.f52066a.get());
    }
}
