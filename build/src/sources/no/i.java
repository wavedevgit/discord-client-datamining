package no;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final uq.h f42207a;

    public i(uq.h hVar) {
        this.f42207a = hVar;
    }

    public static i a(uq.h hVar) {
        return new i(hVar);
    }

    public static com.withpersona.sdk2.inquiry.internal.f c(String str, com.withpersona.sdk2.inquiry.internal.network.e eVar) {
        return new com.withpersona.sdk2.inquiry.internal.f(str, eVar);
    }

    public com.withpersona.sdk2.inquiry.internal.f b(String str) {
        return c(str, (com.withpersona.sdk2.inquiry.internal.network.e) this.f42207a.get());
    }
}
