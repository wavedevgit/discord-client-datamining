package va;

import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    public static final c f51237a;

    /* renamed from: b  reason: collision with root package name */
    public static final int f51238b;

    /* renamed from: c  reason: collision with root package name */
    private static int f51239c;

    /* renamed from: d  reason: collision with root package name */
    private static volatile b f51240d;

    static {
        c cVar = new c();
        f51237a = cVar;
        f51238b = cVar.b();
        f51239c = 384;
    }

    private c() {
    }

    public static final b a() {
        if (f51240d == null) {
            synchronized (c.class) {
                try {
                    if (f51240d == null) {
                        f51240d = new b(f51239c, f51238b);
                    }
                    Unit unit = Unit.f32464a;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
        b bVar = f51240d;
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
