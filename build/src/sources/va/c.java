package va;

import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    public static final c f52339a;

    /* renamed from: b  reason: collision with root package name */
    public static final int f52340b;

    /* renamed from: c  reason: collision with root package name */
    private static int f52341c;

    /* renamed from: d  reason: collision with root package name */
    private static volatile b f52342d;

    static {
        c cVar = new c();
        f52339a = cVar;
        f52340b = cVar.b();
        f52341c = 384;
    }

    private c() {
    }

    public static final b a() {
        if (f52342d == null) {
            synchronized (c.class) {
                try {
                    if (f52342d == null) {
                        f52342d = new b(f52341c, f52340b);
                    }
                    Unit unit = Unit.f32056a;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
        b bVar = f52342d;
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
