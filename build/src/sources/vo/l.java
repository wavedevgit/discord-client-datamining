package vo;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l implements wq.d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        static final l f51731a = new l();
    }

    public static l a() {
        return a.f51731a;
    }

    public static Set c() {
        return (Set) wq.g.d(com.withpersona.sdk2.inquiry.internal.network.f.h());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Set get() {
        return c();
    }
}
