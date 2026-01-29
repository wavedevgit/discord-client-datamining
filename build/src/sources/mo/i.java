package mo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final tq.h f39448a;

    public i(tq.h hVar) {
        this.f39448a = hVar;
    }

    public static i a(tq.h hVar) {
        return new i(hVar);
    }

    public static com.withpersona.sdk2.inquiry.internal.f c(String str, com.withpersona.sdk2.inquiry.internal.network.e eVar) {
        return new com.withpersona.sdk2.inquiry.internal.f(str, eVar);
    }

    public com.withpersona.sdk2.inquiry.internal.f b(String str) {
        return c(str, (com.withpersona.sdk2.inquiry.internal.network.e) this.f39448a.get());
    }
}
