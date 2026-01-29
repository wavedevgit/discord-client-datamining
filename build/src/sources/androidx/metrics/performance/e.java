package androidx.metrics.performance;

import android.view.FrameMetrics;
import android.view.View;
import android.view.Window;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e extends o3.e {

    /* renamed from: r  reason: collision with root package name */
    private final o3.b f4626r;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public e(JankStats jankStats, View view, Window window) {
        super(jankStats, view, window);
        Intrinsics.checkNotNullParameter(jankStats, "jankStats");
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(window, "window");
        this.f4626r = new o3.b(0L, 0L, 0L, 0L, 0L, false, h());
    }

    @Override // androidx.metrics.performance.d
    public long k(FrameMetrics metrics) {
        Intrinsics.checkNotNullParameter(metrics, "metrics");
        return metrics.getMetric(13);
    }

    @Override // androidx.metrics.performance.d
    /* renamed from: r */
    public o3.b l(long j10, long j11, FrameMetrics frameMetrics) {
        boolean z10;
        Intrinsics.checkNotNullParameter(frameMetrics, "frameMetrics");
        long metric = frameMetrics.getMetric(0) + frameMetrics.getMetric(1) + frameMetrics.getMetric(2) + frameMetrics.getMetric(3) + frameMetrics.getMetric(4) + frameMetrics.getMetric(5);
        q(j10 + metric);
        g a10 = g().a();
        if (a10 != null) {
            a10.c(j10, o(), h());
        }
        if (metric > j11) {
            z10 = true;
        } else {
            z10 = false;
        }
        long metric2 = frameMetrics.getMetric(8);
        this.f4626r.h(j10, metric, (metric2 - frameMetrics.getMetric(12)) + frameMetrics.getMetric(7), metric2, metric2 - frameMetrics.getMetric(13), z10);
        return this.f4626r;
    }
}
