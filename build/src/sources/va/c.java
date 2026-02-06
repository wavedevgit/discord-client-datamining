package va;

import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    public static final c f52291a;

    /* renamed from: b  reason: collision with root package name */
    public static final int f52292b;

    /* renamed from: c  reason: collision with root package name */
    private static int f52293c;

    /* renamed from: d  reason: collision with root package name */
    private static volatile b f52294d;

    static {
        c cVar = new c();
        f52291a = cVar;
        f52292b = cVar.b();
        f52293c = 384;
    }

    private c() {
    }

    public static final b a() {
        if (f52294d == null) {
            synchronized (c.class) {
                try {
                    if (f52294d == null) {
                        f52294d = new b(f52293c, f52292b);
                    }
                    Unit unit = Unit.f32008a;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
        b bVar = f52294d;
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
