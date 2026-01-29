package com.facebook.react.bridge;

import android.os.SystemClock;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.List;
import java.util.Queue;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.CopyOnWriteArrayList;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000H\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\t\n\u0002\b\r\bÇ\u0002\u0018\u00002\u00020\u0001:\u0003&'(B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\tH\u0007J\u0010\u0010\u000f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\tH\u0007J\b\u0010\u0010\u001a\u00020\rH\u0007J\u0010\u0010\u0011\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000bH\u0007J\u0010\u0010\u0012\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000bH\u0007J\b\u0010\u0013\u001a\u00020\rH\u0007J2\u0010\u0014\u001a\u00020\r2\u0006\u0010\u0015\u001a\u00020\u00162\b\u0010\u0017\u001a\u0004\u0018\u00010\u00182\u0006\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u001aH\u0007J*\u0010\u0014\u001a\u00020\r2\u0006\u0010\u0015\u001a\u00020\u00162\b\u0010\u0017\u001a\u0004\u0018\u00010\u00182\u0006\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u001b\u001a\u00020\u001cH\u0007J\"\u0010\u0014\u001a\u00020\r2\u0006\u0010\u0015\u001a\u00020\u00162\b\u0010\u0017\u001a\u0004\u0018\u00010\u00182\u0006\u0010\u0019\u001a\u00020\u001aH\u0007J\u0010\u0010\u001e\u001a\u00020\r2\u0006\u0010\u0015\u001a\u00020\u0018H\u0007J\u0018\u0010\u001e\u001a\u00020\r2\u0006\u0010\u0015\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\u001aH\u0007J\u001a\u0010\u001e\u001a\u00020\r2\u0006\u0010\u0015\u001a\u00020\u00182\b\u0010\u0017\u001a\u0004\u0018\u00010\u0018H\u0007J\"\u0010\u001e\u001a\u00020\r2\u0006\u0010\u0015\u001a\u00020\u00182\b\u0010\u0017\u001a\u0004\u0018\u00010\u00182\u0006\u0010\u0019\u001a\u00020\u001aH\u0007J\u0010\u0010\u001e\u001a\u00020\r2\u0006\u0010\u0015\u001a\u00020\u0016H\u0007J\u0018\u0010\u001e\u001a\u00020\r2\u0006\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0019\u001a\u00020\u001aH\u0007J\u001a\u0010\u001e\u001a\u00020\r2\u0006\u0010\u0015\u001a\u00020\u00162\b\u0010\u0017\u001a\u0004\u0018\u00010\u0018H\u0007J\u0018\u0010\u001e\u001a\u00020\r2\u0006\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u001f\u001a\u00020\u001cH\u0007J\"\u0010\u001e\u001a\u00020\r2\u0006\u0010\u0015\u001a\u00020\u00162\b\u0010\u0017\u001a\u0004\u0018\u00010\u00182\u0006\u0010\u0019\u001a\u00020\u001aH\u0007J1\u0010\u001e\u001a\u00020\r2\u0006\u0010\u0015\u001a\u00020\u00162\b\u0010\u0017\u001a\u0004\u0018\u00010\u00182\u0006\u0010\u0019\u001a\u00020\u001a2\b\u0010\u001f\u001a\u0004\u0018\u00010\u001cH\u0007¢\u0006\u0002\u0010 J\u001f\u0010!\u001a\u00020\r2\u0006\u0010\u0015\u001a\u00020\u00162\b\u0010\u001f\u001a\u0004\u0018\u00010\u001cH\u0003¢\u0006\u0002\u0010\"J\u0019\u0010#\u001a\u00020\r2\u0006\u0010$\u001a\u00020\u00182\u0006\u0010%\u001a\u00020\u001cH\u0083 R\u0014\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\t0\bX\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\n\u001a\b\u0012\u0004\u0012\u00020\u000b0\bX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006)"}, d2 = {"Lcom/facebook/react/bridge/ReactMarker;", "", "<init>", "()V", "nativeReactMarkerQueue", "Ljava/util/Queue;", "Lcom/facebook/react/bridge/ReactMarker$ReactMarkerRecord;", "listeners", "", "Lcom/facebook/react/bridge/ReactMarker$MarkerListener;", "fabricMarkerListeners", "Lcom/facebook/react/bridge/ReactMarker$FabricMarkerListener;", "addListener", "", "listener", "removeListener", "clearMarkerListeners", "addFabricListener", "removeFabricListener", "clearFabricMarkerListeners", "logFabricMarker", StackTraceHelper.NAME_KEY, "Lcom/facebook/react/bridge/ReactMarkerConstants;", "tag", "", "instanceKey", "", "timestamp", "", "counter", "logMarker", "time", "(Lcom/facebook/react/bridge/ReactMarkerConstants;Ljava/lang/String;ILjava/lang/Long;)V", "notifyNativeMarker", "(Lcom/facebook/react/bridge/ReactMarkerConstants;Ljava/lang/Long;)V", "nativeLogMarker", "markerName", "markerTime", "ReactMarkerRecord", "MarkerListener", "FabricMarkerListener", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@fb.a
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactMarker {
    @NotNull
    public static final ReactMarker INSTANCE = new ReactMarker();
    @NotNull
    private static final Queue<ReactMarkerRecord> nativeReactMarkerQueue = new ConcurrentLinkedQueue();
    @NotNull
    private static final List<MarkerListener> listeners = new CopyOnWriteArrayList();
    @NotNull
    private static final List<FabricMarkerListener> fabricMarkerListeners = new CopyOnWriteArrayList();

    @Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\t\n\u0002\b\u0002\bf\u0018\u00002\u00020\u0001J*\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u00072\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000bH&J2\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u00072\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\tH\u0016ø\u0001\u0000\u0082\u0002\u0006\n\u0004\b!0\u0001¨\u0006\rÀ\u0006\u0001"}, d2 = {"Lcom/facebook/react/bridge/ReactMarker$FabricMarkerListener;", "", "logFabricMarker", "", StackTraceHelper.NAME_KEY, "Lcom/facebook/react/bridge/ReactMarkerConstants;", "tag", "", "instanceKey", "", "timestamp", "", "counter", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface FabricMarkerListener {
        void logFabricMarker(@NotNull ReactMarkerConstants reactMarkerConstants, String str, int i10, long j10);

        default void logFabricMarker(@NotNull ReactMarkerConstants name, String str, int i10, long j10, int i11) {
            Intrinsics.checkNotNullParameter(name, "name");
            logFabricMarker(name, str, i10, j10);
        }
    }

    @Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0000\bæ\u0080\u0001\u0018\u00002\u00020\u0001J\"\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u00072\u0006\u0010\b\u001a\u00020\tH&ø\u0001\u0000\u0082\u0002\u0006\n\u0004\b!0\u0001¨\u0006\nÀ\u0006\u0001"}, d2 = {"Lcom/facebook/react/bridge/ReactMarker$MarkerListener;", "", "logMarker", "", StackTraceHelper.NAME_KEY, "Lcom/facebook/react/bridge/ReactMarkerConstants;", "tag", "", "instanceKey", "", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface MarkerListener {
        void logMarker(@NotNull ReactMarkerConstants reactMarkerConstants, String str, int i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\t\n\u0002\b\u0007\b\u0002\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000b¨\u0006\f"}, d2 = {"Lcom/facebook/react/bridge/ReactMarker$ReactMarkerRecord;", "", "markerName", "", "markerTime", "", "<init>", "(Ljava/lang/String;J)V", "getMarkerName", "()Ljava/lang/String;", "getMarkerTime", "()J", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class ReactMarkerRecord {
        @NotNull
        private final String markerName;
        private final long markerTime;

        public ReactMarkerRecord(@NotNull String markerName, long j10) {
            Intrinsics.checkNotNullParameter(markerName, "markerName");
            this.markerName = markerName;
            this.markerTime = j10;
        }

        @NotNull
        public final String getMarkerName() {
            return this.markerName;
        }

        public final long getMarkerTime() {
            return this.markerTime;
        }
    }

    private ReactMarker() {
    }

    @fb.a
    public static final void addFabricListener(@NotNull FabricMarkerListener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        List<FabricMarkerListener> list = fabricMarkerListeners;
        if (!list.contains(listener)) {
            list.add(listener);
        }
    }

    @fb.a
    public static final void addListener(@NotNull MarkerListener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        List<MarkerListener> list = listeners;
        if (!list.contains(listener)) {
            list.add(listener);
        }
    }

    @fb.a
    public static final void clearFabricMarkerListeners() {
        fabricMarkerListeners.clear();
    }

    @fb.a
    public static final void clearMarkerListeners() {
        listeners.clear();
    }

    @fb.a
    public static final void logFabricMarker(@NotNull ReactMarkerConstants name, String str, int i10, long j10, int i11) {
        Intrinsics.checkNotNullParameter(name, "name");
        for (FabricMarkerListener fabricMarkerListener : fabricMarkerListeners) {
            fabricMarkerListener.logFabricMarker(name, str, i10, j10, i11);
        }
    }

    @fb.a
    public static final void logMarker(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        logMarker(name, (String) null);
    }

    @fb.a
    private static final native void nativeLogMarker(String str, long j10);

    @fb.a
    private static final void notifyNativeMarker(ReactMarkerConstants reactMarkerConstants, Long l10) {
        long uptimeMillis;
        if (reactMarkerConstants.hasMatchingNameMarker()) {
            if (l10 != null) {
                uptimeMillis = l10.longValue();
            } else {
                uptimeMillis = SystemClock.uptimeMillis();
            }
            if (ReactNativeJniCommonSoLoader.isInitialized()) {
                nativeLogMarker(reactMarkerConstants.name(), uptimeMillis);
                while (true) {
                    ReactMarkerRecord poll = nativeReactMarkerQueue.poll();
                    if (poll == null) {
                        return;
                    }
                    nativeLogMarker(poll.getMarkerName(), poll.getMarkerTime());
                }
            } else {
                nativeReactMarkerQueue.add(new ReactMarkerRecord(reactMarkerConstants.name(), uptimeMillis));
            }
        }
    }

    @fb.a
    public static final void removeFabricListener(@NotNull FabricMarkerListener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        fabricMarkerListeners.remove(listener);
    }

    @fb.a
    public static final void removeListener(@NotNull MarkerListener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        listeners.remove(listener);
    }

    @fb.a
    public static final void logMarker(@NotNull String name, int i10) {
        Intrinsics.checkNotNullParameter(name, "name");
        logMarker(name, (String) null, i10);
    }

    @fb.a
    public static final void logFabricMarker(@NotNull ReactMarkerConstants name, String str, int i10, long j10) {
        Intrinsics.checkNotNullParameter(name, "name");
        for (FabricMarkerListener fabricMarkerListener : fabricMarkerListeners) {
            fabricMarkerListener.logFabricMarker(name, str, i10, j10, 0);
        }
    }

    @fb.a
    public static final void logMarker(@NotNull String name, String str) {
        Intrinsics.checkNotNullParameter(name, "name");
        logMarker(name, str, 0);
    }

    @fb.a
    public static final void logMarker(@NotNull String name, String str, int i10) {
        Intrinsics.checkNotNullParameter(name, "name");
        logMarker(ReactMarkerConstants.valueOf(name), str, i10);
    }

    @fb.a
    public static final void logFabricMarker(@NotNull ReactMarkerConstants name, String str, int i10) {
        Intrinsics.checkNotNullParameter(name, "name");
        logFabricMarker(name, str, i10, SystemClock.uptimeMillis(), 0);
    }

    @fb.a
    public static final void logMarker(@NotNull ReactMarkerConstants name) {
        Intrinsics.checkNotNullParameter(name, "name");
        logMarker(name, (String) null, 0);
    }

    @fb.a
    public static final void logMarker(@NotNull ReactMarkerConstants name, int i10) {
        Intrinsics.checkNotNullParameter(name, "name");
        logMarker(name, (String) null, i10);
    }

    @fb.a
    public static final void logMarker(@NotNull ReactMarkerConstants name, String str) {
        Intrinsics.checkNotNullParameter(name, "name");
        logMarker(name, str, 0);
    }

    @fb.a
    public static final void logMarker(@NotNull ReactMarkerConstants name, long j10) {
        Intrinsics.checkNotNullParameter(name, "name");
        logMarker(name, null, 0, Long.valueOf(j10));
    }

    @fb.a
    public static final void logMarker(@NotNull ReactMarkerConstants name, String str, int i10) {
        Intrinsics.checkNotNullParameter(name, "name");
        logMarker(name, str, i10, null);
    }

    @fb.a
    public static final void logMarker(@NotNull ReactMarkerConstants name, String str, int i10, Long l10) {
        Intrinsics.checkNotNullParameter(name, "name");
        logFabricMarker(name, str, i10);
        for (MarkerListener markerListener : listeners) {
            markerListener.logMarker(name, str, i10);
        }
        notifyNativeMarker(name, l10);
    }
}
