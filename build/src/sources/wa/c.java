package wa;

import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    public static final c f52396a;

    /* renamed from: b  reason: collision with root package name */
    public static final int f52397b;

    /* renamed from: c  reason: collision with root package name */
    private static int f52398c;

    /* renamed from: d  reason: collision with root package name */
    private static volatile b f52399d;

    static {
        c cVar = new c();
        f52396a = cVar;
        f52397b = cVar.b();
        f52398c = 384;
    }

    private c() {
    }

    public static final b a() {
        if (f52399d == null) {
            synchronized (c.class) {
                try {
                    if (f52399d == null) {
                        f52399d = new b(f52398c, f52397b);
                    }
                    Unit unit = Unit.f31988a;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
        b bVar = f52399d;
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
