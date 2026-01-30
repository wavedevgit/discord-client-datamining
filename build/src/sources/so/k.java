package so;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k implements tq.d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        static final k f49139a = new k();
    }

    public static k a() {
        return a.f49139a;
    }

    public static Set c() {
        return (Set) tq.g.d(com.withpersona.sdk2.inquiry.internal.network.f.g());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Set get() {
        return c();
    }
}
