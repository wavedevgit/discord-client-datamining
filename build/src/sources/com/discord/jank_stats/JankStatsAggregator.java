package com.discord.jank_stats;

import android.view.Window;
import androidx.metrics.performance.FrameData;
import androidx.metrics.performance.JankStats;
import com.discord.crash_reporting.CrashReporting;
import com.discord.jank_stats.JankStatsAggregator;
import com.discord.logging.Log;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000B\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000eJ\u0006\u0010\u000f\u001a\u00020\fJ\u000e\u0010\u0010\u001a\u00020\f2\u0006\u0010\u0011\u001a\u00020\u0012J\u0006\u0010\u0013\u001a\u00020\fJ\u0010\u0010\u0014\u001a\u00020\u00152\b\b\u0002\u0010\u0016\u001a\u00020\u0017R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u0006\u001a\u0004\u0018\u00010\u0007X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\tX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u0018"}, d2 = {"Lcom/discord/jank_stats/JankStatsAggregator;", "", "<init>", "()V", "listener", "Landroidx/metrics/performance/JankStats$OnFrameListener;", "jankStats", "Landroidx/metrics/performance/JankStats;", "numFrames", "", "numJankFrames", "initialize", "", "window", "Landroid/view/Window;", "enableTracking", "setJankHeuristicMultiplier", "jankHeuristicMultiplier", "", "disableTracking", "issueJankReport", "Lcom/discord/jank_stats/JankReport;", "reason", "", "jank_stats_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class JankStatsAggregator {
    private static JankStats jankStats;
    private static int numFrames;
    private static int numJankFrames;
    @NotNull
    public static final JankStatsAggregator INSTANCE = new JankStatsAggregator();
    @NotNull
    private static final JankStats.OnFrameListener listener = new JankStats.OnFrameListener() { // from class: j7.a
        @Override // androidx.metrics.performance.JankStats.OnFrameListener
        public final void a(FrameData frameData) {
            JankStatsAggregator.listener$lambda$0(frameData);
        }
    };

    private JankStatsAggregator() {
    }

    public static /* synthetic */ JankReport issueJankReport$default(JankStatsAggregator jankStatsAggregator, String str, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = "";
        }
        return jankStatsAggregator.issueJankReport(str);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void listener$lambda$0(FrameData frameData) {
        Intrinsics.checkNotNullParameter(frameData, "frameData");
        int i10 = numFrames;
        if (i10 != Integer.MAX_VALUE && numJankFrames != Integer.MAX_VALUE) {
            numFrames = i10 + 1;
            if (frameData.d()) {
                numJankFrames++;
                return;
            }
            return;
        }
        INSTANCE.disableTracking();
        Log.e$default(Log.INSTANCE, JankStatsAggregatorKt.LOG_TAG, "Frame count reached unexpected max int", (Throwable) null, 4, (Object) null);
        CrashReporting.INSTANCE.captureMessage(JankStatsAggregatorKt.LOG_TAG, "Frame count reached unexpected max int", CrashReporting.ErrorLevel.WARNING);
    }

    public final void disableTracking() {
        JankStats jankStats2 = jankStats;
        if (jankStats2 == null) {
            return;
        }
        Intrinsics.checkNotNull(jankStats2);
        jankStats2.d(false);
        Log.i$default(Log.INSTANCE, JankStatsAggregatorKt.LOG_TAG, "Jank tracking disabled.", (Throwable) null, 4, (Object) null);
    }

    public final void enableTracking() {
        JankStats jankStats2 = jankStats;
        if (jankStats2 == null) {
            return;
        }
        Intrinsics.checkNotNull(jankStats2);
        jankStats2.d(true);
        Log.i$default(Log.INSTANCE, JankStatsAggregatorKt.LOG_TAG, "Jank tracking enabled.", (Throwable) null, 4, (Object) null);
    }

    public final void initialize(@NotNull Window window) {
        Intrinsics.checkNotNullParameter(window, "window");
        synchronized (this) {
            jankStats = JankStats.f4642f.a(window, listener);
            INSTANCE.setJankHeuristicMultiplier(1.0f);
            Unit unit = Unit.f33074a;
        }
    }

    @NotNull
    public final JankReport issueJankReport(@NotNull String reason) {
        double d10;
        Intrinsics.checkNotNullParameter(reason, "reason");
        int i10 = numFrames;
        int i11 = numJankFrames;
        numFrames = 0;
        numJankFrames = 0;
        Log log = Log.INSTANCE;
        if (i10 > 0) {
            d10 = (i11 / i10) * 100.0d;
        } else {
            d10 = 0.0d;
        }
        Log.i$default(log, JankStatsAggregatorKt.LOG_TAG, "*** Jank Report (" + reason + "), totalFrames = " + i10 + ", jankFrames = " + i11 + ", jank % = " + d10, (Throwable) null, 4, (Object) null);
        return new JankReport(i10, i11);
    }

    public final void setJankHeuristicMultiplier(float f10) {
        JankStats jankStats2 = jankStats;
        Intrinsics.checkNotNull(jankStats2);
        jankStats2.c(f10);
        Log log = Log.INSTANCE;
        Log.i$default(log, JankStatsAggregatorKt.LOG_TAG, "Jank heuristic multiplier set to " + f10 + ".", (Throwable) null, 4, (Object) null);
    }
}
