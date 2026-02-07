package uo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final br.h f52009a;

    public i(br.h hVar) {
        this.f52009a = hVar;
    }

    public static i a(br.h hVar) {
        return new i(hVar);
    }

    public static com.withpersona.sdk2.inquiry.internal.f c(String str, com.withpersona.sdk2.inquiry.internal.network.e eVar) {
        return new com.withpersona.sdk2.inquiry.internal.f(str, eVar);
    }

    public com.withpersona.sdk2.inquiry.internal.f b(String str) {
        return c(str, (com.withpersona.sdk2.inquiry.internal.network.e) this.f52009a.get());
    }
}
