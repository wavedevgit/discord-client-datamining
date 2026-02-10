package za;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f56150a = new b();

    /* renamed from: b  reason: collision with root package name */
    public static final a f56151b = new C0795b();

    /* renamed from: c  reason: collision with root package name */
    private static c f56152c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
    }

    /* renamed from: za.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class C0795b implements a {
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
        f56150a.c().a(name);
    }

    public static final void b() {
        f56150a.c().b();
    }

    private final c c() {
        za.a aVar;
        c cVar = f56152c;
        if (cVar == null) {
            synchronized (b.class) {
                aVar = new za.a();
                f56152c = aVar;
            }
            return aVar;
        }
        return cVar;
    }

    public static final boolean d() {
        return f56150a.c().isTracing();
    }
}
