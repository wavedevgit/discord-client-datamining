package ya;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f54533a = new b();

    /* renamed from: b  reason: collision with root package name */
    public static final a f54534b = new C0758b();

    /* renamed from: c  reason: collision with root package name */
    private static c f54535c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
    }

    /* renamed from: ya.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class C0758b implements a {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface c {
        void a(String str);

        void b();

        boolean isTracing();
    }

    private b() {
    }

    public static final void a(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        f54533a.c().a(name);
    }

    public static final void b() {
        f54533a.c().b();
    }

    private final c c() {
        ya.a aVar;
        c cVar = f54535c;
        if (cVar == null) {
            synchronized (b.class) {
                aVar = new ya.a();
                f54535c = aVar;
            }
            return aVar;
        }
        return cVar;
    }

    public static final boolean d() {
        return f54533a.c().isTracing();
    }
}
