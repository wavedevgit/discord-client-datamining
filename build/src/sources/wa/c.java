package wa;

import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    public static final c f53366a;

    /* renamed from: b  reason: collision with root package name */
    public static final int f53367b;

    /* renamed from: c  reason: collision with root package name */
    private static int f53368c;

    /* renamed from: d  reason: collision with root package name */
    private static volatile b f53369d;

    static {
        c cVar = new c();
        f53366a = cVar;
        f53367b = cVar.b();
        f53368c = 384;
    }

    private c() {
    }

    public static final b a() {
        if (f53369d == null) {
            synchronized (c.class) {
                try {
                    if (f53369d == null) {
                        f53369d = new b(f53368c, f53367b);
                    }
                    Unit unit = Unit.f31765a;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
        b bVar = f53369d;
        Intrinsics.checkNotNull(bVar);
        return bVar;
    }

    private final int b() {
        int min = (int) Math.min(Runtime.getRuntime().maxMemory(), 2147483647L);
        if (min > 16777216) {
            return (min / 4) * 3;
        }
        return min / 2;
    }
}
