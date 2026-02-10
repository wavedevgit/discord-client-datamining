package av;

import java.util.concurrent.atomic.AtomicReference;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h0 {

    /* renamed from: a  reason: collision with root package name */
    public static final h0 f6273a = new h0();

    /* renamed from: b  reason: collision with root package name */
    private static final int f6274b = 65536;

    /* renamed from: c  reason: collision with root package name */
    private static final g0 f6275c = new g0(new byte[0], 0, 0, false, false);

    /* renamed from: d  reason: collision with root package name */
    private static final int f6276d;

    /* renamed from: e  reason: collision with root package name */
    private static final AtomicReference[] f6277e;

    static {
        int highestOneBit = Integer.highestOneBit((Runtime.getRuntime().availableProcessors() * 2) - 1);
        f6276d = highestOneBit;
        AtomicReference[] atomicReferenceArr = new AtomicReference[highestOneBit];
        for (int i10 = 0; i10 < highestOneBit; i10++) {
            atomicReferenceArr[i10] = new AtomicReference();
        }
        f6277e = atomicReferenceArr;
    }

    private h0() {
    }

    private final AtomicReference a() {
        return f6277e[(int) (Thread.currentThread().getId() & (f6276d - 1))];
    }

    public static final void b(g0 segment) {
        int i10;
        Intrinsics.checkNotNullParameter(segment, "segment");
        if (segment.f6267f == null && segment.f6268g == null) {
            if (!segment.f6265d) {
                AtomicReference a10 = f6273a.a();
                g0 g0Var = f6275c;
                g0 g0Var2 = (g0) a10.getAndSet(g0Var);
                if (g0Var2 == g0Var) {
                    return;
                }
                if (g0Var2 != null) {
                    i10 = g0Var2.f6264c;
                } else {
                    i10 = 0;
                }
                if (i10 >= f6274b) {
                    a10.set(g0Var2);
                    return;
                }
                segment.f6267f = g0Var2;
                segment.f6263b = 0;
                segment.f6264c = i10 + 8192;
                a10.set(segment);
                return;
            }
            return;
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    public static final g0 c() {
        AtomicReference a10 = f6273a.a();
        g0 g0Var = f6275c;
        g0 g0Var2 = (g0) a10.getAndSet(g0Var);
        if (g0Var2 == g0Var) {
            return new g0();
        }
        if (g0Var2 == null) {
            a10.set(null);
            return new g0();
        }
        a10.set(g0Var2.f6267f);
        g0Var2.f6267f = null;
        g0Var2.f6264c = 0;
        return g0Var2;
    }
}
