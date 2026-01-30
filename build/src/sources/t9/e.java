package t9;

import android.os.Handler;
import android.os.HandlerThread;
import ir.p;
import java.util.Date;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import t9.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    public static final e f49334a;

    /* renamed from: b  reason: collision with root package name */
    private static final AtomicInteger f49335b;

    /* renamed from: c  reason: collision with root package name */
    private static final AtomicInteger f49336c;

    /* renamed from: d  reason: collision with root package name */
    private static final AtomicInteger f49337d;

    /* renamed from: e  reason: collision with root package name */
    private static final ConcurrentHashMap f49338e;

    /* renamed from: f  reason: collision with root package name */
    private static final Lazy f49339f;

    /* renamed from: g  reason: collision with root package name */
    private static final Runnable f49340g;

    /* renamed from: h  reason: collision with root package name */
    private static final Runnable f49341h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f49342a;

        static {
            int[] iArr = new int[l.a.values().length];
            try {
                iArr[l.a.f49370d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[l.a.f49371e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[l.a.f49372i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f49342a = iArr;
        }
    }

    static {
        e eVar = new e();
        f49334a = eVar;
        f49335b = new AtomicInteger(0);
        f49336c = new AtomicInteger(0);
        f49337d = new AtomicInteger(0);
        f49338e = new ConcurrentHashMap();
        f49339f = ir.l.b(new Function0() { // from class: t9.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Handler g10;
                g10 = e.g();
                return g10;
            }
        });
        Runnable runnable = new Runnable() { // from class: t9.c
            @Override // java.lang.Runnable
            public final void run() {
                e.d();
            }
        };
        f49340g = runnable;
        Runnable runnable2 = new Runnable() { // from class: t9.d
            @Override // java.lang.Runnable
            public final void run() {
                e.e();
            }
        };
        f49341h = runnable2;
        eVar.f().post(runnable);
        eVar.f().post(runnable2);
    }

    private e() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void d() {
        float andSet = f49335b.getAndSet(0);
        float andSet2 = f49336c.getAndSet(0);
        float andSet3 = f49337d.getAndSet(0);
        float f10 = andSet + andSet2 + andSet3;
        if (f10 > 0.0f) {
            float f11 = andSet / f10;
            float f12 = andSet3 / f10;
            if (andSet2 / f10 <= 0.25f && f12 <= 0.1f) {
                if (f11 > 0.98f) {
                    for (Map.Entry entry : f49338e.entrySet()) {
                        f49334a.k((i) entry.getKey(), ((Number) entry.getValue()).intValue());
                    }
                }
            } else {
                for (Map.Entry entry2 : f49338e.entrySet()) {
                    f49334a.k((i) entry2.getKey(), -((Number) entry2.getValue()).intValue());
                }
            }
            f49338e.clear();
        }
        f49334a.j();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void e() {
        k.f49363d.a(new Date(System.currentTimeMillis() - 10000));
        f49334a.i();
    }

    private final Handler f() {
        return (Handler) f49339f.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Handler g() {
        HandlerThread handlerThread = new HandlerThread("FrescoAnimationWorker");
        handlerThread.start();
        return new Handler(handlerThread.getLooper());
    }

    private final boolean i() {
        return f().postDelayed(f49341h, 10000L);
    }

    private final boolean j() {
        return f().postDelayed(f49340g, 2000L);
    }

    private final void k(i iVar, int i10) {
        int m10 = kotlin.ranges.d.m(iVar.a() + i10, (int) kotlin.ranges.d.c(iVar.c() * 0.5f, 1.0f), iVar.c());
        if (m10 != iVar.a()) {
            iVar.b(m10);
        }
    }

    public final void h(i animation, l frameResult) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        Intrinsics.checkNotNullParameter(frameResult, "frameResult");
        ConcurrentHashMap concurrentHashMap = f49338e;
        if (!concurrentHashMap.contains(animation)) {
            concurrentHashMap.put(animation, Integer.valueOf((int) (animation.c() * 0.2f)));
        }
        int i10 = a.f49342a[frameResult.b().ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    f49337d.incrementAndGet();
                    return;
                }
                throw new p();
            }
            f49336c.incrementAndGet();
            return;
        }
        f49335b.incrementAndGet();
    }
}
