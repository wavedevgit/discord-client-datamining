package com.discord.analytics.touch;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000,\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u0006\n\u0002\b\u0006\u001a\u009d\u0001\u0010\u0000\u001a\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\u00072\u0006\u0010\t\u001a\u00020\u00072\u0006\u0010\n\u001a\u00020\u00072\u0006\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u00032\b\u0010\u000e\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0010\u001a\u0004\u0018\u00010\u00112\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\u00112\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u0011¢\u0006\u0002\u0010\u0016¨\u0006\u0017"}, d2 = {"createTouchEventDetails", "Lcom/discord/analytics/touch/TouchEventDetails;", "eventType", "", "timestamp", "", "screenX", "", "screenY", "viewX", "viewY", "memStats", "Lcom/discord/analytics/touch/MemoryStats;", "hierarchyString", "gesture", "windowName", "hitTestDurationUs", "", "distance", "durationMs", "velocity", "scaleFactor", "(Ljava/lang/String;JIIIILcom/discord/analytics/touch/MemoryStats;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Double;Ljava/lang/Integer;Ljava/lang/Long;Ljava/lang/Double;Ljava/lang/Double;)Lcom/discord/analytics/touch/TouchEventDetails;", "analytics_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TouchEventListenerKt {
    @NotNull
    public static final TouchEventDetails createTouchEventDetails(@NotNull String eventType, long j10, int i10, int i11, int i12, int i13, @NotNull MemoryStats memStats, @NotNull String hierarchyString, String str, String str2, Double d10, Integer num, Long l10, Double d11, Double d12) {
        Intrinsics.checkNotNullParameter(eventType, "eventType");
        Intrinsics.checkNotNullParameter(memStats, "memStats");
        Intrinsics.checkNotNullParameter(hierarchyString, "hierarchyString");
        long totalPss = memStats.getTotalPss();
        long j11 = (long) IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
        int i14 = (int) (totalPss / j11);
        StringBuilder sb2 = new StringBuilder();
        sb2.append("PSS: " + (memStats.getTotalPss() / j11) + "MB");
        sb2.append(", Native: " + (memStats.getNativePss() / j11) + "MB");
        sb2.append(", Java: " + (memStats.getJavaPss() / j11) + "MB");
        if (memStats.getSwapPss() > 1024) {
            sb2.append(", Swap: " + (memStats.getSwapPss() / j11) + "MB");
        }
        if (memStats.getGraphicsPss() > 1024) {
            sb2.append(", Graphics: " + (memStats.getGraphicsPss() / j11) + "MB");
        }
        return new TouchEventDetails(eventType, j10, i10, i11, i12, i13, i14, sb2.toString(), hierarchyString, str, str2, d10, num, l10, d11, d12);
    }
}
