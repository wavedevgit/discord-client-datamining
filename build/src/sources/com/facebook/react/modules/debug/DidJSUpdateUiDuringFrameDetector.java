package com.facebook.react.modules.debug;

import com.facebook.react.bridge.NotThreadSafeBridgeIdleDebugListener;
import com.facebook.react.uimanager.debug.NotThreadSafeViewHierarchyUpdateDebugListener;
import java.util.ArrayList;
import kotlin.Metadata;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0010\t\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u000b\b\u0000\u0018\u00002\u00020\u00012\u00020\u0002B\u0007¢\u0006\u0004\b\u0003\u0010\u0004J\b\u0010\u000e\u001a\u00020\u000fH\u0016J\b\u0010\u0010\u001a\u00020\u000fH\u0016J\b\u0010\u0011\u001a\u00020\u000fH\u0016J\b\u0010\u0012\u001a\u00020\u000fH\u0016J\b\u0010\u0013\u001a\u00020\u000fH\u0016J\u0016\u0010\u0014\u001a\u00020\r2\u0006\u0010\u0015\u001a\u00020\u00072\u0006\u0010\u0016\u001a\u00020\u0007J\u0018\u0010\u0017\u001a\u00020\r2\u0006\u0010\u0018\u001a\u00020\u00072\u0006\u0010\u0019\u001a\u00020\u0007H\u0002R\u001e\u0010\u0005\u001a\u0012\u0012\u0004\u0012\u00020\u00070\u0006j\b\u0012\u0004\u0012\u00020\u0007`\bX\u0082\u0004¢\u0006\u0002\n\u0000R\u001e\u0010\t\u001a\u0012\u0012\u0004\u0012\u00020\u00070\u0006j\b\u0012\u0004\u0012\u00020\u0007`\bX\u0082\u0004¢\u0006\u0002\n\u0000R\u001e\u0010\n\u001a\u0012\u0012\u0004\u0012\u00020\u00070\u0006j\b\u0012\u0004\u0012\u00020\u0007`\bX\u0082\u0004¢\u0006\u0002\n\u0000R\u001e\u0010\u000b\u001a\u0012\u0012\u0004\u0012\u00020\u00070\u0006j\b\u0012\u0004\u0012\u00020\u0007`\bX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u001a"}, d2 = {"Lcom/facebook/react/modules/debug/DidJSUpdateUiDuringFrameDetector;", "Lcom/facebook/react/bridge/NotThreadSafeBridgeIdleDebugListener;", "Lcom/facebook/react/uimanager/debug/NotThreadSafeViewHierarchyUpdateDebugListener;", "<init>", "()V", "transitionToIdleEvents", "Ljava/util/ArrayList;", "", "Lkotlin/collections/ArrayList;", "transitionToBusyEvents", "viewHierarchyUpdateEnqueuedEvents", "viewHierarchyUpdateFinishedEvents", "wasIdleAtEndOfLastFrame", "", "onTransitionToBridgeIdle", "", "onTransitionToBridgeBusy", "onBridgeDestroyed", "onViewHierarchyUpdateEnqueued", "onViewHierarchyUpdateFinished", "getDidJSHitFrameAndCleanup", "frameStartTimeNanos", "frameEndTimeNanos", "didEndFrameIdle", "startTime", "endTime", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DidJSUpdateUiDuringFrameDetector implements NotThreadSafeBridgeIdleDebugListener, NotThreadSafeViewHierarchyUpdateDebugListener {
    @NotNull
    private final ArrayList<Long> transitionToIdleEvents = new ArrayList<>(20);
    @NotNull
    private final ArrayList<Long> transitionToBusyEvents = new ArrayList<>(20);
    @NotNull
    private final ArrayList<Long> viewHierarchyUpdateEnqueuedEvents = new ArrayList<>(20);
    @NotNull
    private final ArrayList<Long> viewHierarchyUpdateFinishedEvents = new ArrayList<>(20);
    private volatile boolean wasIdleAtEndOfLastFrame = true;

    private final boolean didEndFrameIdle(long j10, long j11) {
        long lastEventBetweenTimestamps;
        long lastEventBetweenTimestamps2;
        lastEventBetweenTimestamps = DidJSUpdateUiDuringFrameDetectorKt.getLastEventBetweenTimestamps(this.transitionToIdleEvents, j10, j11);
        lastEventBetweenTimestamps2 = DidJSUpdateUiDuringFrameDetectorKt.getLastEventBetweenTimestamps(this.transitionToBusyEvents, j10, j11);
        if (lastEventBetweenTimestamps == -1 && lastEventBetweenTimestamps2 == -1) {
            return this.wasIdleAtEndOfLastFrame;
        }
        if (lastEventBetweenTimestamps > lastEventBetweenTimestamps2) {
            return true;
        }
        return false;
    }

    public final synchronized boolean getDidJSHitFrameAndCleanup(long j10, long j11) {
        boolean hasEventBetweenTimestamps;
        boolean z10;
        boolean hasEventBetweenTimestamps2;
        try {
            hasEventBetweenTimestamps = DidJSUpdateUiDuringFrameDetectorKt.hasEventBetweenTimestamps(this.viewHierarchyUpdateFinishedEvents, j10, j11);
            boolean didEndFrameIdle = didEndFrameIdle(j10, j11);
            z10 = true;
            if (!hasEventBetweenTimestamps) {
                if (didEndFrameIdle) {
                    hasEventBetweenTimestamps2 = DidJSUpdateUiDuringFrameDetectorKt.hasEventBetweenTimestamps(this.viewHierarchyUpdateEnqueuedEvents, j10, j11);
                    if (!hasEventBetweenTimestamps2) {
                    }
                }
                z10 = false;
            }
            DidJSUpdateUiDuringFrameDetectorKt.cleanUp(this.transitionToIdleEvents, j11);
            DidJSUpdateUiDuringFrameDetectorKt.cleanUp(this.transitionToBusyEvents, j11);
            DidJSUpdateUiDuringFrameDetectorKt.cleanUp(this.viewHierarchyUpdateEnqueuedEvents, j11);
            DidJSUpdateUiDuringFrameDetectorKt.cleanUp(this.viewHierarchyUpdateFinishedEvents, j11);
            this.wasIdleAtEndOfLastFrame = didEndFrameIdle;
        } catch (Throwable th2) {
            throw th2;
        }
        return z10;
    }

    @Override // com.facebook.react.bridge.NotThreadSafeBridgeIdleDebugListener
    public synchronized void onBridgeDestroyed() {
    }

    @Override // com.facebook.react.bridge.NotThreadSafeBridgeIdleDebugListener
    public synchronized void onTransitionToBridgeBusy() {
        this.transitionToBusyEvents.add(Long.valueOf(System.nanoTime()));
    }

    @Override // com.facebook.react.bridge.NotThreadSafeBridgeIdleDebugListener
    public synchronized void onTransitionToBridgeIdle() {
        this.transitionToIdleEvents.add(Long.valueOf(System.nanoTime()));
    }

    @Override // com.facebook.react.uimanager.debug.NotThreadSafeViewHierarchyUpdateDebugListener
    public synchronized void onViewHierarchyUpdateEnqueued() {
        this.viewHierarchyUpdateEnqueuedEvents.add(Long.valueOf(System.nanoTime()));
    }

    @Override // com.facebook.react.uimanager.debug.NotThreadSafeViewHierarchyUpdateDebugListener
    public synchronized void onViewHierarchyUpdateFinished() {
        this.viewHierarchyUpdateFinishedEvents.add(Long.valueOf(System.nanoTime()));
    }
}
