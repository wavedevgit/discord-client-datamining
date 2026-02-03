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
    public static final a f4631p = new a(null);

    /* renamed from: q  reason: collision with root package name */
    private static Handler f4632q;

    /* renamed from: j  reason: collision with root package name */
    private final Window f4633j;

    /* renamed from: k  reason: collision with root package name */
    private long f4634k;

    /* renamed from: l  reason: collision with root package name */
    private long f4635l;

    /* renamed from: m  reason: collision with root package name */
    private long f4636m;

    /* renamed from: n  reason: collision with root package name */
    private final o3.a f4637n;

    /* renamed from: o  reason: collision with root package name */
    private final Window.OnFrameMetricsAvailableListener f4638o;

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
        this.f4633j = window;
        this.f4637n = new o3.a(0L, 0L, 0L, false, h());
        this.f4638o = new Window.OnFrameMetricsAvailableListener() { // from class: o3.d
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
        long max = Math.max(this$0.m(frameMetrics), this$0.f4636m);
        if (max >= this$0.f4635l && max != this$0.f4634k) {
            jankStats.b(this$0.l(max, ((float) this$0.k(frameMetrics)) * jankStats.a(), frameMetrics));
            this$0.f4634k = max;
        }
    }

    private final androidx.metrics.performance.a n(Window window) {
        androidx.metrics.performance.a aVar = (androidx.metrics.performance.a) window.getDecorView().getTag(o3.g.f42325a);
        if (aVar == null) {
            androidx.metrics.performance.a aVar2 = new androidx.metrics.performance.a(new ArrayList());
            if (f4632q == null) {
                HandlerThread handlerThread = new HandlerThread("FrameMetricsAggregator");
                handlerThread.start();
                f4632q = new Handler(handlerThread.getLooper());
            }
            window.addOnFrameMetricsAvailableListener(aVar2, f4632q);
            window.getDecorView().setTag(o3.g.f42325a, aVar2);
            return aVar2;
        }
        return aVar;
    }

    private final void p(Window window, Window.OnFrameMetricsAvailableListener onFrameMetricsAvailableListener) {
        androidx.metrics.performance.a aVar = (androidx.metrics.performance.a) window.getDecorView().getTag(o3.g.f42325a);
        if (aVar != null) {
            aVar.b(onFrameMetricsAvailableListener, window);
        }
    }

    @Override // androidx.metrics.performance.f
    public void c(boolean z10) {
        synchronized (this.f4633j) {
            try {
                if (z10) {
                    if (this.f4635l == 0) {
                        n(this.f4633j).a(this.f4638o);
                        this.f4635l = System.nanoTime();
                    }
                } else {
                    p(this.f4633j, this.f4638o);
                    this.f4635l = 0L;
                }
                Unit unit = Unit.f32464a;
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
        this.f4636m = j10 + metric;
        g a10 = g().a();
        if (a10 != null) {
            a10.c(j10, this.f4636m, h());
        }
        if (metric > j11) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f4637n.g(j10, metric, frameMetrics.getMetric(8), z10);
        return this.f4637n;
    }

    public long m(FrameMetrics frameMetrics) {
        Intrinsics.checkNotNullParameter(frameMetrics, "frameMetrics");
        return f();
    }

    public final long o() {
        return this.f4636m;
    }

    public final void q(long j10) {
        this.f4636m = j10;
    }
}
