package kp;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k implements lr.d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        static final k f35151a = new k();
    }

    public static k a() {
        return a.f35151a;
    }

    public static Set c() {
        return (Set) lr.g.d(com.withpersona.sdk2.inquiry.internal.network.f.g());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Set get() {
        return c();
    }
}
