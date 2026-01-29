package com.discord.resource_usage;

import android.net.TrafficStats;
import android.os.Build;
import android.os.Process;
import android.telephony.SignalStrength;
import android.telephony.TelephonyManager;
import com.discord.react.utilities.NativeMapExtensionsKt;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.WritableNativeMap;
import ir.v;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import okhttp3.Interceptor;
import okhttp3.Response;
import okhttp3.ResponseBody;
import okio.BufferedSource;
import org.jetbrains.annotations.NotNull;
import zt.e;
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0005\u0018\u0000 \u00052\u00020\u0001:\u0002\u0004\u0005B\u0007¢\u0006\u0004\b\u0002\u0010\u0003¨\u0006\u0006"}, d2 = {"Lcom/discord/resource_usage/DeviceResourceUsageRecorder;", "", "<init>", "()V", "RequestStats", "Companion", "resource_usage_monitor_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DeviceResourceUsageRecorder {
    private static final long initialAppReceiveBytes;
    private static final long initialAppSendBytes;
    private static long initialCellularReceiveBytes;
    private static long initialCellularSendBytes;
    private static long initialTotalReceiveBytes;
    private static long initialTotalSendBytes;
    private static long mediaPlayerBytesReceived;
    private static long socketBytesReceived;
    private static final int uid;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final RequestStats ota = new RequestStats(0, 0, 3, null);
    @NotNull
    private static final RequestStats xhr = new RequestStats(0, 0, 3, null);
    @NotNull
    private static final RequestStats fresco = new RequestStats(0, 0, 3, null);
    @NotNull
    private static final RequestStats downloads = new RequestStats(0, 0, 3, null);

    @Metadata(d1 = {"\u0000@\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\t\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\b\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u001a\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u001dJ\u000e\u0010\u001e\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u001dJ\u000e\u0010\u001f\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u001dJ\u000e\u0010 \u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u001dJ\u000e\u0010!\u001a\u00020\"2\u0006\u0010#\u001a\u00020$J\u0018\u0010%\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u001d2\u0006\u0010&\u001a\u00020\u000eH\u0002R\u001a\u0010\u0004\u001a\u00020\u0005X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0006\u0010\u0007\"\u0004\b\b\u0010\tR\u001a\u0010\n\u001a\u00020\u0005X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u000b\u0010\u0007\"\u0004\b\f\u0010\tR\u000e\u0010\r\u001a\u00020\u000eX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000f\u001a\u00020\u000eX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0010\u001a\u00020\u000eX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0011\u001a\u00020\u000eX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0012\u001a\u00020\u0013X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0014\u001a\u00020\u0005X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0015\u001a\u00020\u0005X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0016\u001a\u00020\u0005X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0017\u001a\u00020\u0005X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0018\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0019\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006'"}, d2 = {"Lcom/discord/resource_usage/DeviceResourceUsageRecorder$Companion;", "", "<init>", "()V", "socketBytesReceived", "", "getSocketBytesReceived", "()J", "setSocketBytesReceived", "(J)V", "mediaPlayerBytesReceived", "getMediaPlayerBytesReceived", "setMediaPlayerBytesReceived", "ota", "Lcom/discord/resource_usage/DeviceResourceUsageRecorder$RequestStats;", "xhr", "fresco", "downloads", "uid", "", "initialCellularReceiveBytes", "initialCellularSendBytes", "initialTotalReceiveBytes", "initialTotalSendBytes", "initialAppReceiveBytes", "initialAppSendBytes", "bundleUpdaterInterceptor", "Lokhttp3/Response;", "chain", "Lokhttp3/Interceptor$Chain;", "clientXHRInterceptor", "frescoInterceptor", "downloadInterceptor", "getNetworkUsage", "Lcom/facebook/react/bridge/WritableNativeMap;", "reactApplicationContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "requestStatsInterceptor", "stats", "resource_usage_monitor_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final Response requestStatsInterceptor(Interceptor.Chain chain, RequestStats requestStats) {
            Response a10 = chain.a(chain.h());
            ResponseBody x10 = a10.x();
            requestStats.setNumRequests(requestStats.getNumRequests() + 1);
            if (e.b(a10) && x10 != null) {
                BufferedSource source = x10.source();
                source.B0(LongCompanionObject.MAX_VALUE);
                requestStats.setBytesReceived(requestStats.getBytesReceived() + source.e().size());
            }
            return a10;
        }

        @NotNull
        public final Response bundleUpdaterInterceptor(@NotNull Interceptor.Chain chain) {
            Intrinsics.checkNotNullParameter(chain, "chain");
            return requestStatsInterceptor(chain, DeviceResourceUsageRecorder.ota);
        }

        @NotNull
        public final Response clientXHRInterceptor(@NotNull Interceptor.Chain chain) {
            Intrinsics.checkNotNullParameter(chain, "chain");
            return requestStatsInterceptor(chain, DeviceResourceUsageRecorder.xhr);
        }

        @NotNull
        public final Response downloadInterceptor(@NotNull Interceptor.Chain chain) {
            Intrinsics.checkNotNullParameter(chain, "chain");
            return requestStatsInterceptor(chain, DeviceResourceUsageRecorder.downloads);
        }

        @NotNull
        public final Response frescoInterceptor(@NotNull Interceptor.Chain chain) {
            Intrinsics.checkNotNullParameter(chain, "chain");
            return requestStatsInterceptor(chain, DeviceResourceUsageRecorder.fresco);
        }

        public final long getMediaPlayerBytesReceived() {
            return DeviceResourceUsageRecorder.mediaPlayerBytesReceived;
        }

        @NotNull
        public final WritableNativeMap getNetworkUsage(@NotNull ReactApplicationContext reactApplicationContext) {
            Pair pair;
            Integer num;
            int i10;
            Intrinsics.checkNotNullParameter(reactApplicationContext, "reactApplicationContext");
            try {
                Object systemService = reactApplicationContext.getSystemService("phone");
                Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.telephony.TelephonyManager");
                TelephonyManager telephonyManager = (TelephonyManager) systemService;
                if (Build.VERSION.SDK_INT >= 28) {
                    SignalStrength signalStrength = telephonyManager.getSignalStrength();
                    if (signalStrength != null) {
                        i10 = signalStrength.getLevel();
                    } else {
                        i10 = 0;
                    }
                    num = Integer.valueOf(i10);
                } else {
                    num = null;
                }
                pair = new Pair(num, Boolean.valueOf(telephonyManager.isNetworkRoaming()));
            } catch (Exception unused) {
                pair = new Pair(null, null);
            }
            return NativeMapExtensionsKt.nativeMapOf(v.a("signalStrengthLevel", (Integer) pair.a()), v.a("isNetworkRoaming", (Boolean) pair.b()), v.a("cellularReceiveBytes", Long.valueOf(TrafficStats.getMobileRxBytes() - DeviceResourceUsageRecorder.initialCellularReceiveBytes)), v.a("cellularSendBytes", Long.valueOf(TrafficStats.getMobileTxBytes() - DeviceResourceUsageRecorder.initialCellularSendBytes)), v.a("totalReceiveBytes", Long.valueOf(TrafficStats.getTotalRxBytes() - DeviceResourceUsageRecorder.initialTotalReceiveBytes)), v.a("totalSendBytes", Long.valueOf(TrafficStats.getTotalTxBytes() - DeviceResourceUsageRecorder.initialTotalSendBytes)), v.a("uidReceiveBytes", Long.valueOf(TrafficStats.getUidRxBytes(DeviceResourceUsageRecorder.uid) - DeviceResourceUsageRecorder.initialAppReceiveBytes)), v.a("uidSendBytes", Long.valueOf(TrafficStats.getUidTxBytes(DeviceResourceUsageRecorder.uid) - DeviceResourceUsageRecorder.initialAppSendBytes)), v.a("socketBytesReceived", Long.valueOf(getSocketBytesReceived())), v.a("otaBytesReceived", Long.valueOf(DeviceResourceUsageRecorder.ota.getBytesReceived())), v.a("otaNumRequests", Integer.valueOf(DeviceResourceUsageRecorder.ota.getNumRequests())), v.a("xhrBytesReceived", Long.valueOf(DeviceResourceUsageRecorder.xhr.getBytesReceived())), v.a("xhrNumRequests", Integer.valueOf(DeviceResourceUsageRecorder.xhr.getNumRequests())), v.a("frescoBytesReceived", Long.valueOf(DeviceResourceUsageRecorder.fresco.getBytesReceived())), v.a("frescoNumRequests", Integer.valueOf(DeviceResourceUsageRecorder.fresco.getNumRequests())), v.a("downloadBytesReceived", Long.valueOf(DeviceResourceUsageRecorder.downloads.getBytesReceived())), v.a("downloadNumRequests", Integer.valueOf(DeviceResourceUsageRecorder.downloads.getNumRequests())), v.a("mediaPlayerBytesReceived", Long.valueOf(getMediaPlayerBytesReceived())));
        }

        public final long getSocketBytesReceived() {
            return DeviceResourceUsageRecorder.socketBytesReceived;
        }

        public final void setMediaPlayerBytesReceived(long j10) {
            DeviceResourceUsageRecorder.mediaPlayerBytesReceived = j10;
        }

        public final void setSocketBytesReceived(long j10) {
            DeviceResourceUsageRecorder.socketBytesReceived = j10;
        }

        private Companion() {
        }
    }

    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\t\n\u0002\b\u000e\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u001b\u0012\b\b\u0002\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\t\u0010\u0010\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0011\u001a\u00020\u0005HÆ\u0003J\u001d\u0010\u0012\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u0013\u001a\u00020\u00142\b\u0010\u0015\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0016\u001a\u00020\u0003HÖ\u0001J\t\u0010\u0017\u001a\u00020\u0018HÖ\u0001R\u001a\u0010\u0002\u001a\u00020\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\b\u0010\t\"\u0004\b\n\u0010\u000bR\u001a\u0010\u0004\u001a\u00020\u0005X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\f\u0010\r\"\u0004\b\u000e\u0010\u000f¨\u0006\u0019"}, d2 = {"Lcom/discord/resource_usage/DeviceResourceUsageRecorder$RequestStats;", "", "numRequests", "", "bytesReceived", "", "<init>", "(IJ)V", "getNumRequests", "()I", "setNumRequests", "(I)V", "getBytesReceived", "()J", "setBytesReceived", "(J)V", "component1", "component2", "copy", "equals", "", "other", "hashCode", "toString", "", "resource_usage_monitor_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class RequestStats {
        private long bytesReceived;
        private int numRequests;

        public RequestStats() {
            this(0, 0L, 3, null);
        }

        public static /* synthetic */ RequestStats copy$default(RequestStats requestStats, int i10, long j10, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                i10 = requestStats.numRequests;
            }
            if ((i11 & 2) != 0) {
                j10 = requestStats.bytesReceived;
            }
            return requestStats.copy(i10, j10);
        }

        public final int component1() {
            return this.numRequests;
        }

        public final long component2() {
            return this.bytesReceived;
        }

        @NotNull
        public final RequestStats copy(int i10, long j10) {
            return new RequestStats(i10, j10);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof RequestStats) {
                RequestStats requestStats = (RequestStats) obj;
                return this.numRequests == requestStats.numRequests && this.bytesReceived == requestStats.bytesReceived;
            }
            return false;
        }

        public final long getBytesReceived() {
            return this.bytesReceived;
        }

        public final int getNumRequests() {
            return this.numRequests;
        }

        public int hashCode() {
            return (Integer.hashCode(this.numRequests) * 31) + Long.hashCode(this.bytesReceived);
        }

        public final void setBytesReceived(long j10) {
            this.bytesReceived = j10;
        }

        public final void setNumRequests(int i10) {
            this.numRequests = i10;
        }

        @NotNull
        public String toString() {
            int i10 = this.numRequests;
            long j10 = this.bytesReceived;
            return "RequestStats(numRequests=" + i10 + ", bytesReceived=" + j10 + ")";
        }

        public RequestStats(int i10, long j10) {
            this.numRequests = i10;
            this.bytesReceived = j10;
        }

        public /* synthetic */ RequestStats(int i10, long j10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this((i11 & 1) != 0 ? 0 : i10, (i11 & 2) != 0 ? 0L : j10);
        }
    }

    static {
        int myUid = Process.myUid();
        uid = myUid;
        initialCellularReceiveBytes = TrafficStats.getMobileRxBytes();
        initialCellularSendBytes = TrafficStats.getMobileTxBytes();
        initialTotalReceiveBytes = TrafficStats.getTotalRxBytes();
        initialTotalSendBytes = TrafficStats.getTotalTxBytes();
        initialAppReceiveBytes = TrafficStats.getUidRxBytes(myUid);
        initialAppSendBytes = TrafficStats.getUidTxBytes(myUid);
    }
}
