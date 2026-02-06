package androidx.metrics.performance;

import android.os.Handler;
import android.os.HandlerThread;
import android.view.FrameMetrics;
import android.view.View;
import android.view.Window;
import java.util.ArrayList;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d extends o3.c {

    /* renamed from: p  reason: collision with root package name */
    public static final a f5072p = new a(null);

    /* renamed from: q  reason: collision with root package name */
    private static Handler f5073q;

    /* renamed from: j  reason: collision with root package name */
    private final Window f5074j;

    /* renamed from: k  reason: collision with root package name */
    private long f5075k;

    /* renamed from: l  reason: collision with root package name */
    private long f5076l;

    /* renamed from: m  reason: collision with root package name */
    private long f5077m;

    /* renamed from: n  reason: collision with root package name */
    private final o3.a f5078n;

    /* renamed from: o  reason: collision with root package name */
    private final Window.OnFrameMetricsAvailableListener f5079o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d(final JankStats jankStats, View view, Window window) {
        super(jankStats, view);
        Intrinsics.checkNotNullParameter(jankStats, "jankStats");
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(window, "window");
        this.f5074j = window;
        this.f5078n = new o3.a(0L, 0L, 0L, false, h());
        this.f5079o = new Window.OnFrameMetricsAvailableListener() { // from class: o3.d
            @Override // android.view.Window.OnFrameMetricsAvailableListener
            public final void onFrameMetricsAvailable(Window window2, FrameMetrics frameMetrics, int i10) {
                androidx.metrics.performance.d.j(androidx.metrics.performance.d.this, jankStats, window2, frameMetrics, i10);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(d this$0, JankStats jankStats, Window window, FrameMetrics frameMetrics, int i10) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Intrinsics.checkNotNullParameter(jankStats, "$jankStats");
        Intrinsics.checkNotNullExpressionValue(frameMetrics, "frameMetrics");
        long max = Math.max(this$0.m(frameMetrics), this$0.f5077m);
        if (max >= this$0.f5076l && max != this$0.f5075k) {
            jankStats.b(this$0.l(max, ((float) this$0.k(frameMetrics)) * jankStats.a(), frameMetrics));
            this$0.f5075k = max;
        }
    }

    private final androidx.metrics.performance.a n(Window window) {
        androidx.metrics.performance.a aVar = (androidx.metrics.performance.a) window.getDecorView().getTag(o3.g.f41454a);
        if (aVar == null) {
            androidx.metrics.performance.a aVar2 = new androidx.metrics.performance.a(new ArrayList());
            if (f5073q == null) {
                HandlerThread handlerThread = new HandlerThread("FrameMetricsAggregator");
                handlerThread.start();
                f5073q = new Handler(handlerThread.getLooper());
            }
            window.addOnFrameMetricsAvailableListener(aVar2, f5073q);
            window.getDecorView().setTag(o3.g.f41454a, aVar2);
            return aVar2;
        }
        return aVar;
    }

    private final void p(Window window, Window.OnFrameMetricsAvailableListener onFrameMetricsAvailableListener) {
        androidx.metrics.performance.a aVar = (androidx.metrics.performance.a) window.getDecorView().getTag(o3.g.f41454a);
        if (aVar != null) {
            aVar.b(onFrameMetricsAvailableListener, window);
        }
    }

    @Override // androidx.metrics.performance.f
    public void c(boolean z10) {
        synchronized (this.f5074j) {
            try {
                if (z10) {
                    if (this.f5076l == 0) {
                        n(this.f5074j).a(this.f5079o);
                        this.f5076l = System.nanoTime();
                    }
                } else {
                    p(this.f5074j, this.f5079o);
                    this.f5076l = 0L;
                }
                Unit unit = Unit.f32008a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public long k(FrameMetrics metrics) {
        Intrinsics.checkNotNullParameter(metrics, "metrics");
        return e((View) d().get());
    }

    public o3.a l(long j10, long j11, FrameMetrics frameMetrics) {
        boolean z10;
        Intrinsics.checkNotNullParameter(frameMetrics, "frameMetrics");
        long metric = frameMetrics.getMetric(0) + frameMetrics.getMetric(1) + frameMetrics.getMetric(2) + frameMetrics.getMetric(3) + frameMetrics.getMetric(4) + frameMetrics.getMetric(5);
        this.f5077m = j10 + metric;
        g a10 = g().a();
        if (a10 != null) {
            a10.c(j10, this.f5077m, h());
        }
        if (metric > j11) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f5078n.g(j10, metric, frameMetrics.getMetric(8), z10);
        return this.f5078n;
    }

    public long m(FrameMetrics frameMetrics) {
        Intrinsics.checkNotNullParameter(frameMetrics, "frameMetrics");
        return f();
    }

    public final long o() {
        return this.f5077m;
    }

    public final void q(long j10) {
        this.f5077m = j10;
    }
}
