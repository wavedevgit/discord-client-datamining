package yn;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k implements wq.d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        static final k f54823a = new k();
    }

    public static k a() {
        return a.f54823a;
    }

    public static Set c() {
        return (Set) wq.g.d(j.a());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Set get() {
        return c();
    }
}
