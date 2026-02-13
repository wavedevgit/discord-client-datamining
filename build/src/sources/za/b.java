package za;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f56758a = new b();

    /* renamed from: b  reason: collision with root package name */
    public static final a f56759b = new C0796b();

    /* renamed from: c  reason: collision with root package name */
    private static c f56760c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
    }

    /* renamed from: za.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class C0796b implements a {
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
        f56758a.c().a(name);
    }

    public static final void b() {
        f56758a.c().b();
    }

    private final c c() {
        za.a aVar;
        c cVar = f56760c;
        if (cVar == null) {
            synchronized (b.class) {
                aVar = new za.a();
                f56760c = aVar;
            }
            return aVar;
        }
        return cVar;
    }

    public static final boolean d() {
        return f56758a.c().isTracing();
    }
}
