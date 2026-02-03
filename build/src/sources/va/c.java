package va;

import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    public static final c f50912a;

    /* renamed from: b  reason: collision with root package name */
    public static final int f50913b;

    /* renamed from: c  reason: collision with root package name */
    private static int f50914c;

    /* renamed from: d  reason: collision with root package name */
    private static volatile b f50915d;

    static {
        c cVar = new c();
        f50912a = cVar;
        f50913b = cVar.b();
        f50914c = 384;
    }

    private c() {
    }

    public static final b a() {
        if (f50915d == null) {
            synchronized (c.class) {
                try {
                    if (f50915d == null) {
                        f50915d = new b(f50914c, f50913b);
                    }
                    Unit unit = Unit.f33074a;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
        b bVar = f50915d;
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
