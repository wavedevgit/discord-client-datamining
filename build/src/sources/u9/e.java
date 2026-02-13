package u9;

import android.os.Handler;
import android.os.HandlerThread;
import as.p;
import java.util.Date;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import u9.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    public static final e f51099a;

    /* renamed from: b  reason: collision with root package name */
    private static final AtomicInteger f51100b;

    /* renamed from: c  reason: collision with root package name */
    private static final AtomicInteger f51101c;

    /* renamed from: d  reason: collision with root package name */
    private static final AtomicInteger f51102d;

    /* renamed from: e  reason: collision with root package name */
    private static final ConcurrentHashMap f51103e;

    /* renamed from: f  reason: collision with root package name */
    private static final Lazy f51104f;

    /* renamed from: g  reason: collision with root package name */
    private static final Runnable f51105g;

    /* renamed from: h  reason: collision with root package name */
    private static final Runnable f51106h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f51107a;

        static {
            int[] iArr = new int[l.a.values().length];
            try {
                iArr[l.a.f51135d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[l.a.f51136e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[l.a.f51137i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f51107a = iArr;
        }
    }

    static {
        e eVar = new e();
        f51099a = eVar;
        f51100b = new AtomicInteger(0);
        f51101c = new AtomicInteger(0);
        f51102d = new AtomicInteger(0);
        f51103e = new ConcurrentHashMap();
        f51104f = as.l.b(new Function0() { // from class: u9.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Handler g10;
                g10 = e.g();
                return g10;
            }
        });
        Runnable runnable = new Runnable() { // from class: u9.c
            @Override // java.lang.Runnable
            public final void run() {
                e.d();
            }
        };
        f51105g = runnable;
        Runnable runnable2 = new Runnable() { // from class: u9.d
            @Override // java.lang.Runnable
            public final void run() {
                e.e();
            }
        };
        f51106h = runnable2;
        eVar.f().post(runnable);
        eVar.f().post(runnable2);
    }

    private e() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void d() {
        float andSet = f51100b.getAndSet(0);
        float andSet2 = f51101c.getAndSet(0);
        float andSet3 = f51102d.getAndSet(0);
        float f10 = andSet + andSet2 + andSet3;
        if (f10 > 0.0f) {
            float f11 = andSet / f10;
            float f12 = andSet3 / f10;
            if (andSet2 / f10 <= 0.25f && f12 <= 0.1f) {
                if (f11 > 0.98f) {
                    for (Map.Entry entry : f51103e.entrySet()) {
                        f51099a.k((i) entry.getKey(), ((Number) entry.getValue()).intValue());
                    }
                }
            } else {
                for (Map.Entry entry2 : f51103e.entrySet()) {
                    f51099a.k((i) entry2.getKey(), -((Number) entry2.getValue()).intValue());
                }
            }
            f51103e.clear();
        }
        f51099a.j();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void e() {
        k.f51128d.a(new Date(System.currentTimeMillis() - 10000));
        f51099a.i();
    }

    private final Handler f() {
        return (Handler) f51104f.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Handler g() {
        HandlerThread handlerThread = new HandlerThread("FrescoAnimationWorker");
        handlerThread.start();
        return new Handler(handlerThread.getLooper());
    }

    private final boolean i() {
        return f().postDelayed(f51106h, 10000L);
    }

    private final boolean j() {
        return f().postDelayed(f51105g, 2000L);
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
        ConcurrentHashMap concurrentHashMap = f51103e;
        if (!concurrentHashMap.contains(animation)) {
            concurrentHashMap.put(animation, Integer.valueOf((int) (animation.c() * 0.2f)));
        }
        int i10 = a.f51107a[frameResult.b().ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    f51102d.incrementAndGet();
                    return;
                }
                throw new p();
            }
            f51101c.incrementAndGet();
            return;
        }
        f51100b.incrementAndGet();
    }
}
