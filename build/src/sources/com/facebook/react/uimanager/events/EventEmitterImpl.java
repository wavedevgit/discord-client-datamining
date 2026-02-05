package com.facebook.react.uimanager.events;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactNoCrashSoftException;
import com.facebook.react.bridge.ReactSoftExceptionLogger;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.common.ViewUtil;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0004\b\u0000\u0018\u0000 \u001d2\u00020\u0001:\u0001\u001dB\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0010\u0010\t\u001a\u00020\n2\b\u0010\u000b\u001a\u0004\u0018\u00010\u0001J\"\u0010\f\u001a\u00020\n2\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00102\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012H\u0017J*\u0010\f\u001a\u00020\n2\u0006\u0010\u0013\u001a\u00020\u000e2\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00102\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012H\u0016J \u0010\u0014\u001a\u00020\n2\u0006\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u0016H\u0017J\n\u0010\u0018\u001a\u0004\u0018\u00010\u0007H\u0002JB\u0010\f\u001a\u00020\n2\u0006\u0010\u0013\u001a\u00020\u000e2\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u001b\u001a\u00020\u000e2\b\u0010\u0011\u001a\u0004\u0018\u00010\u00122\u0006\u0010\u001c\u001a\u00020\u000eH\u0016R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u0006\u001a\u0004\u0018\u00010\u0007X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\b\u001a\u0004\u0018\u00010\u0001X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u001e"}, d2 = {"Lcom/facebook/react/uimanager/events/EventEmitterImpl;", "Lcom/facebook/react/uimanager/events/RCTModernEventEmitter;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "legacyEventEmitter", "Lcom/facebook/react/uimanager/events/RCTEventEmitter;", "fabricEventEmitter", "registerFabricEventEmitter", "", "eventEmitter", "receiveEvent", "targetTag", "", "eventName", "", "params", "Lcom/facebook/react/bridge/WritableMap;", "surfaceId", "receiveTouches", "touches", "Lcom/facebook/react/bridge/WritableArray;", "changedIndices", "ensureLegacyEventEmitter", "canCoalesceEvent", "", "customCoalesceKey", "category", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class EventEmitterImpl implements RCTModernEventEmitter {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final String TAG = "ReactEventEmitter";
    private RCTModernEventEmitter fabricEventEmitter;
    private RCTEventEmitter legacyEventEmitter;
    @NotNull
    private final ReactApplicationContext reactContext;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/facebook/react/uimanager/events/EventEmitterImpl$Companion;", "", "<init>", "()V", "TAG", "", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    public EventEmitterImpl(@NotNull ReactApplicationContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.reactContext = reactContext;
    }

    private final RCTEventEmitter ensureLegacyEventEmitter() {
        if (this.legacyEventEmitter == null) {
            if (this.reactContext.hasActiveReactInstance()) {
                this.legacyEventEmitter = (RCTEventEmitter) this.reactContext.getJSModule(RCTEventEmitter.class);
            } else {
                ReactSoftExceptionLogger.logSoftException(TAG, new ReactNoCrashSoftException("Cannot get RCTEventEmitter without active Catalyst instance!"));
            }
        }
        return this.legacyEventEmitter;
    }

    @Override // com.facebook.react.uimanager.events.RCTEventEmitter
    @or.c
    public void receiveEvent(int i10, @NotNull String eventName, WritableMap writableMap) {
        Intrinsics.checkNotNullParameter(eventName, "eventName");
        receiveEvent(-1, i10, eventName, writableMap);
    }

    @Override // com.facebook.react.uimanager.events.RCTEventEmitter
    @or.c
    public void receiveTouches(@NotNull String eventName, @NotNull WritableArray touches, @NotNull WritableArray changedIndices) {
        RCTEventEmitter ensureLegacyEventEmitter;
        Intrinsics.checkNotNullParameter(eventName, "eventName");
        Intrinsics.checkNotNullParameter(touches, "touches");
        Intrinsics.checkNotNullParameter(changedIndices, "changedIndices");
        if (touches.size() > 0) {
            int i10 = 0;
            ReadableMap map = touches.getMap(0);
            if (map != null) {
                i10 = map.getInt(TouchesHelper.TARGET_KEY);
            }
            if (ViewUtil.getUIManagerType(i10) == 1 && (ensureLegacyEventEmitter = ensureLegacyEventEmitter()) != null) {
                ensureLegacyEventEmitter.receiveTouches(eventName, touches, changedIndices);
                return;
            }
            return;
        }
        throw new IllegalStateException("Check failed.");
    }

    public final void registerFabricEventEmitter(RCTModernEventEmitter rCTModernEventEmitter) {
        this.fabricEventEmitter = rCTModernEventEmitter;
    }

    @Override // com.facebook.react.uimanager.events.RCTModernEventEmitter
    public void receiveEvent(int i10, int i11, @NotNull String eventName, WritableMap writableMap) {
        Intrinsics.checkNotNullParameter(eventName, "eventName");
        receiveEvent(i10, i11, eventName, false, 0, writableMap, 2);
    }

    @Override // com.facebook.react.uimanager.events.RCTModernEventEmitter
    public void receiveEvent(int i10, int i11, @NotNull String eventName, boolean z10, int i12, WritableMap writableMap, int i13) {
        Intrinsics.checkNotNullParameter(eventName, "eventName");
        int uIManagerType = ViewUtil.getUIManagerType(i11, i10);
        if (uIManagerType == 1) {
            RCTEventEmitter ensureLegacyEventEmitter = ensureLegacyEventEmitter();
            if (ensureLegacyEventEmitter != null) {
                ensureLegacyEventEmitter.receiveEvent(i11, eventName, writableMap);
            }
        } else if (uIManagerType != 2) {
        } else {
            RCTModernEventEmitter rCTModernEventEmitter = this.fabricEventEmitter;
            if (rCTModernEventEmitter == null) {
                ReactSoftExceptionLogger.logSoftException(TAG, new ReactNoCrashSoftException("No fabricEventEmitter registered, cannot dispatch event"));
            } else {
                rCTModernEventEmitter.receiveEvent(i10, i11, eventName, z10, i12, writableMap, i13);
            }
        }
    }
}
