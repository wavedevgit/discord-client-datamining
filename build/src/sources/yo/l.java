package yo;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l implements zq.d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        static final l f54896a = new l();
    }

    public static l a() {
        return a.f54896a;
    }

    public static Set c() {
        return (Set) zq.g.d(com.withpersona.sdk2.inquiry.internal.network.f.h());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Set get() {
        return c();
    }
}
