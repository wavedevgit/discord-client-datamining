package ya;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f54091a = new b();

    /* renamed from: b  reason: collision with root package name */
    public static final a f54092b = new C0756b();

    /* renamed from: c  reason: collision with root package name */
    private static c f54093c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
    }

    /* renamed from: ya.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class C0756b implements a {
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
        f54091a.c().a(name);
    }

    public static final void b() {
        f54091a.c().b();
    }

    private final c c() {
        ya.a aVar;
        c cVar = f54093c;
        if (cVar == null) {
            synchronized (b.class) {
                aVar = new ya.a();
                f54093c = aVar;
            }
            return aVar;
        }
        return cVar;
    }

    public static final boolean d() {
        return f54091a.c().isTracing();
    }
}
