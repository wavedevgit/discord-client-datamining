package va;

import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    public static final c f50788a;

    /* renamed from: b  reason: collision with root package name */
    public static final int f50789b;

    /* renamed from: c  reason: collision with root package name */
    private static int f50790c;

    /* renamed from: d  reason: collision with root package name */
    private static volatile b f50791d;

    static {
        c cVar = new c();
        f50788a = cVar;
        f50789b = cVar.b();
        f50790c = 384;
    }

    private c() {
    }

    public static final b a() {
        if (f50791d == null) {
            synchronized (c.class) {
                try {
                    if (f50791d == null) {
                        f50791d = new b(f50790c, f50789b);
                    }
                    Unit unit = Unit.f33298a;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
        b bVar = f50791d;
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
