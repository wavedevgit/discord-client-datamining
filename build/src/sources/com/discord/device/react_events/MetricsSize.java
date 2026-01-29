package com.discord.device.react_events;

import android.util.DisplayMetrics;
import androidx.window.layout.WindowMetrics;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.react.utilities.NativeMapExtensionsKt;
import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.uimanager.DisplayMetricsHolder;
import ir.v;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\b\u0080\b\u0018\u0000 \u00182\u00020\u0001:\u0001\u0018B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006B\u0011\b\u0016\u0012\u0006\u0010\u0007\u001a\u00020\b¢\u0006\u0004\b\u0005\u0010\tB\u0011\b\u0016\u0012\u0006\u0010\u0007\u001a\u00020\n¢\u0006\u0004\b\u0005\u0010\u000bJ\b\u0010\f\u001a\u00020\rH\u0016J\t\u0010\u000e\u001a\u00020\u0003HÂ\u0003J\t\u0010\u000f\u001a\u00020\u0003HÂ\u0003J\u001d\u0010\u0010\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u0011\u001a\u00020\u00122\b\u0010\u0013\u001a\u0004\u0018\u00010\u0014HÖ\u0003J\t\u0010\u0015\u001a\u00020\u0003HÖ\u0001J\t\u0010\u0016\u001a\u00020\u0017HÖ\u0001R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0004\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0019"}, d2 = {"Lcom/discord/device/react_events/MetricsSize;", "Lcom/discord/reactevents/ReactEvent;", "widthPixels", "", "heightPixels", "<init>", "(II)V", "metrics", "Landroid/util/DisplayMetrics;", "(Landroid/util/DisplayMetrics;)V", "Landroidx/window/layout/WindowMetrics;", "(Landroidx/window/layout/WindowMetrics;)V", "serialize", "Lcom/facebook/react/bridge/WritableNativeMap;", "component1", "component2", "copy", "equals", "", "other", "", "hashCode", "toString", "", "Companion", "device_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MetricsSize implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final int heightPixels;
    private final int widthPixels;

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0006\u0010\u0004\u001a\u00020\u0005J\u0006\u0010\u0006\u001a\u00020\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/device/react_events/MetricsSize$Companion;", "", "<init>", "()V", "createWindowFallback", "Lcom/facebook/react/bridge/WritableNativeMap;", "createScreenFallback", "device_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final WritableNativeMap createScreenFallback() {
            return new MetricsSize(DisplayMetricsHolder.getScreenDisplayMetrics()).serialize();
        }

        @NotNull
        public final WritableNativeMap createWindowFallback() {
            return new MetricsSize(DisplayMetricsHolder.getWindowDisplayMetrics()).serialize();
        }

        private Companion() {
        }
    }

    public MetricsSize(int i10, int i11) {
        this.widthPixels = i10;
        this.heightPixels = i11;
    }

    private final int component1() {
        return this.widthPixels;
    }

    private final int component2() {
        return this.heightPixels;
    }

    public static /* synthetic */ MetricsSize copy$default(MetricsSize metricsSize, int i10, int i11, int i12, Object obj) {
        if ((i12 & 1) != 0) {
            i10 = metricsSize.widthPixels;
        }
        if ((i12 & 2) != 0) {
            i11 = metricsSize.heightPixels;
        }
        return metricsSize.copy(i10, i11);
    }

    @NotNull
    public final MetricsSize copy(int i10, int i11) {
        return new MetricsSize(i10, i11);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof MetricsSize) {
            MetricsSize metricsSize = (MetricsSize) obj;
            return this.widthPixels == metricsSize.widthPixels && this.heightPixels == metricsSize.heightPixels;
        }
        return false;
    }

    public int hashCode() {
        return (Integer.hashCode(this.widthPixels) * 31) + Integer.hashCode(this.heightPixels);
    }

    @NotNull
    public String toString() {
        int i10 = this.widthPixels;
        int i11 = this.heightPixels;
        return "MetricsSize(widthPixels=" + i10 + ", heightPixels=" + i11 + ")";
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableNativeMap serialize() {
        return NativeMapExtensionsKt.nativeMapOf(v.a("width", Float.valueOf(SizeUtilsKt.getPxToDp(this.widthPixels))), v.a("height", Float.valueOf(SizeUtilsKt.getPxToDp(this.heightPixels))));
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public MetricsSize(@NotNull DisplayMetrics metrics) {
        this(metrics.widthPixels, metrics.heightPixels);
        Intrinsics.checkNotNullParameter(metrics, "metrics");
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public MetricsSize(@NotNull WindowMetrics metrics) {
        this(metrics.a().width(), metrics.a().height());
        Intrinsics.checkNotNullParameter(metrics, "metrics");
    }
}
