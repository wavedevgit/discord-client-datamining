package va;

import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    public static final c f51240a;

    /* renamed from: b  reason: collision with root package name */
    public static final int f51241b;

    /* renamed from: c  reason: collision with root package name */
    private static int f51242c;

    /* renamed from: d  reason: collision with root package name */
    private static volatile b f51243d;

    static {
        c cVar = new c();
        f51240a = cVar;
        f51241b = cVar.b();
        f51242c = 384;
    }

    private c() {
    }

    public static final b a() {
        if (f51243d == null) {
            synchronized (c.class) {
                try {
                    if (f51243d == null) {
                        f51243d = new b(f51242c, f51241b);
                    }
                    Unit unit = Unit.f32464a;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
        b bVar = f51243d;
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
