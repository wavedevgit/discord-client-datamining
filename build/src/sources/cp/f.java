package cp;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements zq.d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        static final f f20002a = new f();
    }

    public static f a() {
        return a.f20002a;
    }

    public static Set c() {
        return (Set) zq.g.d(e.a());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Set get() {
        return c();
    }
}
