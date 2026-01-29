package so;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements tq.d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        static final i f49121a = new i();
    }

    public static i a() {
        return a.f49121a;
    }

    public static Set c() {
        return (Set) tq.g.d(com.withpersona.sdk2.inquiry.internal.network.f.f());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Set get() {
        return c();
    }
}
