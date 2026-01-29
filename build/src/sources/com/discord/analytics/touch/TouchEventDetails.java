package com.discord.analytics.touch;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnection;
@Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0010\b\n\u0002\b\t\n\u0002\u0010\u0006\n\u0002\b2\n\u0002\u0010\u000b\n\u0002\b\u0004\b\u0086\b\u0018\u00002\u00020\u0001B¡\u0001\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\u0007\u0012\u0006\u0010\t\u001a\u00020\u0007\u0012\u0006\u0010\n\u001a\u00020\u0007\u0012\u0006\u0010\u000b\u001a\u00020\u0007\u0012\u0006\u0010\f\u001a\u00020\u0003\u0012\u0006\u0010\r\u001a\u00020\u0003\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0010\u001a\u0004\u0018\u00010\u0011\u0012\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\u0007\u0012\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\u0011\u0012\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u0011¢\u0006\u0004\b\u0016\u0010\u0017J\t\u00101\u001a\u00020\u0003HÆ\u0003J\t\u00102\u001a\u00020\u0005HÆ\u0003J\t\u00103\u001a\u00020\u0007HÆ\u0003J\t\u00104\u001a\u00020\u0007HÆ\u0003J\t\u00105\u001a\u00020\u0007HÆ\u0003J\t\u00106\u001a\u00020\u0007HÆ\u0003J\t\u00107\u001a\u00020\u0007HÆ\u0003J\t\u00108\u001a\u00020\u0003HÆ\u0003J\t\u00109\u001a\u00020\u0003HÆ\u0003J\u000b\u0010:\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010;\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0010\u0010<\u001a\u0004\u0018\u00010\u0011HÆ\u0003¢\u0006\u0002\u0010'J\u0010\u0010=\u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0002\u0010*J\u0010\u0010>\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010-J\u0010\u0010?\u001a\u0004\u0018\u00010\u0011HÆ\u0003¢\u0006\u0002\u0010'J\u0010\u0010@\u001a\u0004\u0018\u00010\u0011HÆ\u0003¢\u0006\u0002\u0010'J¼\u0001\u0010A\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00072\b\b\u0002\u0010\b\u001a\u00020\u00072\b\b\u0002\u0010\t\u001a\u00020\u00072\b\b\u0002\u0010\n\u001a\u00020\u00072\b\b\u0002\u0010\u000b\u001a\u00020\u00072\b\b\u0002\u0010\f\u001a\u00020\u00032\b\b\u0002\u0010\r\u001a\u00020\u00032\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0010\u001a\u0004\u0018\u00010\u00112\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\u00112\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u0011HÆ\u0001¢\u0006\u0002\u0010BJ\u0013\u0010C\u001a\u00020D2\b\u0010E\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010F\u001a\u00020\u0007HÖ\u0001J\t\u0010G\u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0019R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u001bR\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u001c\u0010\u001dR\u0011\u0010\b\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u001dR\u0011\u0010\t\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u001f\u0010\u001dR\u0011\u0010\n\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b \u0010\u001dR\u0011\u0010\u000b\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b!\u0010\u001dR\u0011\u0010\f\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\"\u0010\u0019R\u0011\u0010\r\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b#\u0010\u0019R\u0013\u0010\u000e\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b$\u0010\u0019R\u0013\u0010\u000f\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b%\u0010\u0019R\u0015\u0010\u0010\u001a\u0004\u0018\u00010\u0011¢\u0006\n\n\u0002\u0010(\u001a\u0004\b&\u0010'R\u0015\u0010\u0012\u001a\u0004\u0018\u00010\u0007¢\u0006\n\n\u0002\u0010+\u001a\u0004\b)\u0010*R\u0015\u0010\u0013\u001a\u0004\u0018\u00010\u0005¢\u0006\n\n\u0002\u0010.\u001a\u0004\b,\u0010-R\u0015\u0010\u0014\u001a\u0004\u0018\u00010\u0011¢\u0006\n\n\u0002\u0010(\u001a\u0004\b/\u0010'R\u0015\u0010\u0015\u001a\u0004\u0018\u00010\u0011¢\u0006\n\n\u0002\u0010(\u001a\u0004\b0\u0010'¨\u0006H"}, d2 = {"Lcom/discord/analytics/touch/TouchEventDetails;", "", "eventType", "", "timestamp", "", "screenX", "", "screenY", "viewX", "viewY", "totalMemoryMB", "memoryBreakdown", "viewHierarchy", "gesture", "windowName", "hitTestDurationUs", "", "distance", "durationMs", "velocity", "scaleFactor", "<init>", "(Ljava/lang/String;JIIIIILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Double;Ljava/lang/Integer;Ljava/lang/Long;Ljava/lang/Double;Ljava/lang/Double;)V", "getEventType", "()Ljava/lang/String;", "getTimestamp", "()J", "getScreenX", "()I", "getScreenY", "getViewX", "getViewY", "getTotalMemoryMB", "getMemoryBreakdown", "getViewHierarchy", "getGesture", "getWindowName", "getHitTestDurationUs", "()Ljava/lang/Double;", "Ljava/lang/Double;", "getDistance", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getDurationMs", "()Ljava/lang/Long;", "Ljava/lang/Long;", "getVelocity", "getScaleFactor", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "component12", "component13", "component14", "component15", "component16", "copy", "(Ljava/lang/String;JIIIIILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Double;Ljava/lang/Integer;Ljava/lang/Long;Ljava/lang/Double;Ljava/lang/Double;)Lcom/discord/analytics/touch/TouchEventDetails;", "equals", "", "other", "hashCode", "toString", "analytics_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TouchEventDetails {
    private final Integer distance;
    private final Long durationMs;
    @NotNull
    private final String eventType;
    private final String gesture;
    private final Double hitTestDurationUs;
    @NotNull
    private final String memoryBreakdown;
    private final Double scaleFactor;
    private final int screenX;
    private final int screenY;
    private final long timestamp;
    private final int totalMemoryMB;
    private final Double velocity;
    @NotNull
    private final String viewHierarchy;
    private final int viewX;
    private final int viewY;
    private final String windowName;

    public TouchEventDetails(@NotNull String eventType, long j10, int i10, int i11, int i12, int i13, int i14, @NotNull String memoryBreakdown, @NotNull String viewHierarchy, String str, String str2, Double d10, Integer num, Long l10, Double d11, Double d12) {
        Intrinsics.checkNotNullParameter(eventType, "eventType");
        Intrinsics.checkNotNullParameter(memoryBreakdown, "memoryBreakdown");
        Intrinsics.checkNotNullParameter(viewHierarchy, "viewHierarchy");
        this.eventType = eventType;
        this.timestamp = j10;
        this.screenX = i10;
        this.screenY = i11;
        this.viewX = i12;
        this.viewY = i13;
        this.totalMemoryMB = i14;
        this.memoryBreakdown = memoryBreakdown;
        this.viewHierarchy = viewHierarchy;
        this.gesture = str;
        this.windowName = str2;
        this.hitTestDurationUs = d10;
        this.distance = num;
        this.durationMs = l10;
        this.velocity = d11;
        this.scaleFactor = d12;
    }

    @NotNull
    public final String component1() {
        return this.eventType;
    }

    public final String component10() {
        return this.gesture;
    }

    public final String component11() {
        return this.windowName;
    }

    public final Double component12() {
        return this.hitTestDurationUs;
    }

    public final Integer component13() {
        return this.distance;
    }

    public final Long component14() {
        return this.durationMs;
    }

    public final Double component15() {
        return this.velocity;
    }

    public final Double component16() {
        return this.scaleFactor;
    }

    public final long component2() {
        return this.timestamp;
    }

    public final int component3() {
        return this.screenX;
    }

    public final int component4() {
        return this.screenY;
    }

    public final int component5() {
        return this.viewX;
    }

    public final int component6() {
        return this.viewY;
    }

    public final int component7() {
        return this.totalMemoryMB;
    }

    @NotNull
    public final String component8() {
        return this.memoryBreakdown;
    }

    @NotNull
    public final String component9() {
        return this.viewHierarchy;
    }

    @NotNull
    public final TouchEventDetails copy(@NotNull String eventType, long j10, int i10, int i11, int i12, int i13, int i14, @NotNull String memoryBreakdown, @NotNull String viewHierarchy, String str, String str2, Double d10, Integer num, Long l10, Double d11, Double d12) {
        Intrinsics.checkNotNullParameter(eventType, "eventType");
        Intrinsics.checkNotNullParameter(memoryBreakdown, "memoryBreakdown");
        Intrinsics.checkNotNullParameter(viewHierarchy, "viewHierarchy");
        return new TouchEventDetails(eventType, j10, i10, i11, i12, i13, i14, memoryBreakdown, viewHierarchy, str, str2, d10, num, l10, d11, d12);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof TouchEventDetails) {
            TouchEventDetails touchEventDetails = (TouchEventDetails) obj;
            return Intrinsics.areEqual(this.eventType, touchEventDetails.eventType) && this.timestamp == touchEventDetails.timestamp && this.screenX == touchEventDetails.screenX && this.screenY == touchEventDetails.screenY && this.viewX == touchEventDetails.viewX && this.viewY == touchEventDetails.viewY && this.totalMemoryMB == touchEventDetails.totalMemoryMB && Intrinsics.areEqual(this.memoryBreakdown, touchEventDetails.memoryBreakdown) && Intrinsics.areEqual(this.viewHierarchy, touchEventDetails.viewHierarchy) && Intrinsics.areEqual(this.gesture, touchEventDetails.gesture) && Intrinsics.areEqual(this.windowName, touchEventDetails.windowName) && Intrinsics.areEqual((Object) this.hitTestDurationUs, (Object) touchEventDetails.hitTestDurationUs) && Intrinsics.areEqual(this.distance, touchEventDetails.distance) && Intrinsics.areEqual(this.durationMs, touchEventDetails.durationMs) && Intrinsics.areEqual((Object) this.velocity, (Object) touchEventDetails.velocity) && Intrinsics.areEqual((Object) this.scaleFactor, (Object) touchEventDetails.scaleFactor);
        }
        return false;
    }

    public final Integer getDistance() {
        return this.distance;
    }

    public final Long getDurationMs() {
        return this.durationMs;
    }

    @NotNull
    public final String getEventType() {
        return this.eventType;
    }

    public final String getGesture() {
        return this.gesture;
    }

    public final Double getHitTestDurationUs() {
        return this.hitTestDurationUs;
    }

    @NotNull
    public final String getMemoryBreakdown() {
        return this.memoryBreakdown;
    }

    public final Double getScaleFactor() {
        return this.scaleFactor;
    }

    public final int getScreenX() {
        return this.screenX;
    }

    public final int getScreenY() {
        return this.screenY;
    }

    public final long getTimestamp() {
        return this.timestamp;
    }

    public final int getTotalMemoryMB() {
        return this.totalMemoryMB;
    }

    public final Double getVelocity() {
        return this.velocity;
    }

    @NotNull
    public final String getViewHierarchy() {
        return this.viewHierarchy;
    }

    public final int getViewX() {
        return this.viewX;
    }

    public final int getViewY() {
        return this.viewY;
    }

    public final String getWindowName() {
        return this.windowName;
    }

    public int hashCode() {
        int hashCode = ((((((((((((((((this.eventType.hashCode() * 31) + Long.hashCode(this.timestamp)) * 31) + Integer.hashCode(this.screenX)) * 31) + Integer.hashCode(this.screenY)) * 31) + Integer.hashCode(this.viewX)) * 31) + Integer.hashCode(this.viewY)) * 31) + Integer.hashCode(this.totalMemoryMB)) * 31) + this.memoryBreakdown.hashCode()) * 31) + this.viewHierarchy.hashCode()) * 31;
        String str = this.gesture;
        int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
        String str2 = this.windowName;
        int hashCode3 = (hashCode2 + (str2 == null ? 0 : str2.hashCode())) * 31;
        Double d10 = this.hitTestDurationUs;
        int hashCode4 = (hashCode3 + (d10 == null ? 0 : d10.hashCode())) * 31;
        Integer num = this.distance;
        int hashCode5 = (hashCode4 + (num == null ? 0 : num.hashCode())) * 31;
        Long l10 = this.durationMs;
        int hashCode6 = (hashCode5 + (l10 == null ? 0 : l10.hashCode())) * 31;
        Double d11 = this.velocity;
        int hashCode7 = (hashCode6 + (d11 == null ? 0 : d11.hashCode())) * 31;
        Double d12 = this.scaleFactor;
        return hashCode7 + (d12 != null ? d12.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        String str = this.eventType;
        long j10 = this.timestamp;
        int i10 = this.screenX;
        int i11 = this.screenY;
        int i12 = this.viewX;
        int i13 = this.viewY;
        int i14 = this.totalMemoryMB;
        String str2 = this.memoryBreakdown;
        String str3 = this.viewHierarchy;
        String str4 = this.gesture;
        String str5 = this.windowName;
        Double d10 = this.hitTestDurationUs;
        Integer num = this.distance;
        Long l10 = this.durationMs;
        Double d11 = this.velocity;
        Double d12 = this.scaleFactor;
        return "TouchEventDetails(eventType=" + str + ", timestamp=" + j10 + ", screenX=" + i10 + ", screenY=" + i11 + ", viewX=" + i12 + ", viewY=" + i13 + ", totalMemoryMB=" + i14 + ", memoryBreakdown=" + str2 + ", viewHierarchy=" + str3 + ", gesture=" + str4 + ", windowName=" + str5 + ", hitTestDurationUs=" + d10 + ", distance=" + num + ", durationMs=" + l10 + ", velocity=" + d11 + ", scaleFactor=" + d12 + ")";
    }

    public /* synthetic */ TouchEventDetails(String str, long j10, int i10, int i11, int i12, int i13, int i14, String str2, String str3, String str4, String str5, Double d10, Integer num, Long l10, Double d11, Double d12, int i15, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, j10, i10, i11, i12, i13, i14, str2, str3, str4, (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : str5, (i15 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : d10, (i15 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : num, (i15 & 8192) != 0 ? null : l10, (i15 & 16384) != 0 ? null : d11, (i15 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? null : d12);
    }
}
