package vo;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements wq.d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        static final j f51729a = new j();
    }

    public static j a() {
        return a.f51729a;
    }

    public static Set c() {
        return (Set) wq.g.d(com.withpersona.sdk2.inquiry.internal.network.f.e());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Set get() {
        return c();
    }
}
