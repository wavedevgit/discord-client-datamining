package ya;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f53837a = new b();

    /* renamed from: b  reason: collision with root package name */
    public static final a f53838b = new C0738b();

    /* renamed from: c  reason: collision with root package name */
    private static c f53839c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
    }

    /* renamed from: ya.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class C0738b implements a {
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
        f53837a.c().a(name);
    }

    public static final void b() {
        f53837a.c().b();
    }

    private final c c() {
        ya.a aVar;
        c cVar = f53839c;
        if (cVar == null) {
            synchronized (b.class) {
                aVar = new ya.a();
                f53839c = aVar;
            }
            return aVar;
        }
        return cVar;
    }

    public static final boolean d() {
        return f53837a.c().isTracing();
    }
}
