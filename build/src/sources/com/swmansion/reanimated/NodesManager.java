package com.swmansion.reanimated;

import android.graphics.drawable.Drawable;
import android.os.Handler;
import android.os.Looper;
import android.os.SystemClock;
import android.view.View;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.GuardedRunnable;
import com.facebook.react.bridge.JavaOnlyMap;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableType;
import com.facebook.react.bridge.UIManager;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.modules.core.ReactChoreographer;
import com.facebook.react.uimanager.GuardedFrameCallback;
import com.facebook.react.uimanager.IllegalViewOperationException;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ReactStylesDiffMap;
import com.facebook.react.uimanager.UIImplementation;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.UIManagerModule;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.uimanager.events.EventDispatcherListener;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.swmansion.reanimated.layoutReanimation.AnimationsManager;
import com.swmansion.reanimated.nativeProxy.NoopEventHandler;
import com.swmansion.worklets.WorkletsModule;
import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Queue;
import java.util.Set;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class NodesManager implements EventDispatcherListener {
    static final /* synthetic */ boolean $assertionsDisabled = false;
    private ReaCompatibility compatibility;
    int count;
    private boolean isPerformOperationsActive;
    private double lastFrameTimeMs;
    private final AnimationsManager mAnimationManager;
    private int mAnimationsDragFactor;
    private final GuardedFrameCallback mChoreographerCallback;
    private final ReactContext mContext;
    protected final UIManagerModule.CustomEventNamesResolver mCustomEventNamesResolver;
    private final DeviceEventManagerModule.RCTDeviceEventEmitter mEventEmitter;
    private NativeProxy mNativeProxy;
    private Queue<NativeUpdateOperation> mOperationsInBatch;
    private final ReactChoreographer mReactChoreographer;
    private boolean mTryRunBatchUpdatesSynchronously;
    private final UIImplementation mUIImplementation;
    private final UIManager mUIManager;
    private Runnable mUnsubscribe;
    private final WorkletsModule mWorkletsModule;
    Handler mainHandler;
    public Set<String> nativeProps;
    int scheduled;
    public Set<String> uiProps;
    private Long mFirstUptime = Long.valueOf(SystemClock.uptimeMillis());
    private boolean mSlowAnimationsEnabled = false;
    private final AtomicBoolean mCallbackPosted = new AtomicBoolean();
    private RCTEventEmitter mCustomEventHandler = new NoopEventHandler();
    private List<OnAnimationFrame> mFrameCallbacks = new ArrayList();
    private ConcurrentLinkedQueue<CopiedEvent> mEventQueue = new ConcurrentLinkedQueue<>();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.swmansion.reanimated.NodesManager$4  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class AnonymousClass4 {
        static final /* synthetic */ int[] $SwitchMap$com$facebook$react$bridge$ReadableType;

        static {
            int[] iArr = new int[ReadableType.values().length];
            $SwitchMap$com$facebook$react$bridge$ReadableType = iArr;
            try {
                iArr[ReadableType.Boolean.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                $SwitchMap$com$facebook$react$bridge$ReadableType[ReadableType.String.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                $SwitchMap$com$facebook$react$bridge$ReadableType[ReadableType.Null.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                $SwitchMap$com$facebook$react$bridge$ReadableType[ReadableType.Number.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                $SwitchMap$com$facebook$react$bridge$ReadableType[ReadableType.Map.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                $SwitchMap$com$facebook$react$bridge$ReadableType[ReadableType.Array.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public final class NativeUpdateOperation {
        public WritableMap mNativeProps;
        public int mViewTag;

        public NativeUpdateOperation(int i10, WritableMap writableMap) {
            this.mViewTag = i10;
            this.mNativeProps = writableMap;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface OnAnimationFrame {
        void onAnimationFrame(double d10);
    }

    public NodesManager(ReactContext reactContext, WorkletsModule workletsModule) {
        Set<String> set = Collections.EMPTY_SET;
        this.uiProps = set;
        this.nativeProps = set;
        this.mUnsubscribe = null;
        this.mOperationsInBatch = new LinkedList();
        this.mTryRunBatchUpdatesSynchronously = false;
        this.count = 0;
        this.scheduled = 0;
        this.mainHandler = new Handler(Looper.getMainLooper());
        this.mContext = reactContext;
        this.mWorkletsModule = workletsModule;
        final UIManager uIManager = UIManagerHelper.getUIManager(reactContext, 2);
        this.mUIManager = uIManager;
        this.mUIImplementation = uIManager instanceof UIManagerModule ? ((UIManagerModule) uIManager).getUIImplementation() : null;
        Objects.requireNonNull(uIManager);
        this.mCustomEventNamesResolver = new UIManagerModule.CustomEventNamesResolver() { // from class: com.swmansion.reanimated.c
            @Override // com.facebook.react.uimanager.UIManagerModule.CustomEventNamesResolver
            public final String resolveCustomEventName(String str) {
                return UIManager.this.resolveCustomDirectEventName(str);
            }
        };
        this.mEventEmitter = (DeviceEventManagerModule.RCTDeviceEventEmitter) reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class);
        this.mReactChoreographer = ReactChoreographer.getInstance();
        this.mChoreographerCallback = new GuardedFrameCallback(reactContext) { // from class: com.swmansion.reanimated.NodesManager.2
            @Override // com.facebook.react.uimanager.GuardedFrameCallback
            protected void doFrameGuarded(long j10) {
                NodesManager.this.onAnimationFrame(j10);
            }
        };
        this.mAnimationManager = new AnimationsManager(reactContext, uIManager);
    }

    private static void addProp(WritableMap writableMap, String str, Object obj) {
        if (obj == null) {
            writableMap.putNull(str);
        } else if (obj instanceof Double) {
            writableMap.putDouble(str, ((Double) obj).doubleValue());
        } else if (obj instanceof Integer) {
            writableMap.putInt(str, ((Integer) obj).intValue());
        } else if (obj instanceof Number) {
            writableMap.putDouble(str, ((Number) obj).doubleValue());
        } else if (obj instanceof Boolean) {
            writableMap.putBoolean(str, ((Boolean) obj).booleanValue());
        } else if (obj instanceof String) {
            writableMap.putString(str, (String) obj);
        } else if (obj instanceof ReadableArray) {
            if (!(obj instanceof WritableArray)) {
                writableMap.putArray(str, copyReadableArray((ReadableArray) obj));
            } else {
                writableMap.putArray(str, (ReadableArray) obj);
            }
        } else if (obj instanceof ReadableMap) {
            if (!(obj instanceof WritableMap)) {
                writableMap.putMap(str, copyReadableMap((ReadableMap) obj));
            } else {
                writableMap.putMap(str, (ReadableMap) obj);
            }
        } else {
            throw new IllegalStateException("[Reanimated] Unknown type of animated value.");
        }
    }

    private static WritableArray copyReadableArray(ReadableArray readableArray) {
        WritableArray createArray = Arguments.createArray();
        for (int i10 = 0; i10 < readableArray.size(); i10++) {
            switch (AnonymousClass4.$SwitchMap$com$facebook$react$bridge$ReadableType[readableArray.getType(i10).ordinal()]) {
                case 1:
                    createArray.pushBoolean(readableArray.getBoolean(i10));
                    break;
                case 2:
                    createArray.pushString(readableArray.getString(i10));
                    break;
                case 3:
                    createArray.pushNull();
                    break;
                case 4:
                    createArray.pushDouble(readableArray.getDouble(i10));
                    break;
                case 5:
                    createArray.pushMap(copyReadableMap(readableArray.getMap(i10)));
                    break;
                case 6:
                    createArray.pushArray(copyReadableArray(readableArray.getArray(i10)));
                    break;
                default:
                    throw new IllegalStateException("[Reanimated] Unknown type of ReadableArray.");
            }
        }
        return createArray;
    }

    private static WritableMap copyReadableMap(ReadableMap readableMap) {
        WritableMap createMap = Arguments.createMap();
        createMap.merge(readableMap);
        return createMap;
    }

    private void handleEvent(Event event) {
        event.dispatch(this.mCustomEventHandler);
    }

    private /* synthetic */ void lambda$new$0(EventDispatcher eventDispatcher) {
        eventDispatcher.removeListener(this);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void onAnimationFrame(long j10) {
        double d10 = j10 / 1000000.0d;
        if (this.mSlowAnimationsEnabled) {
            d10 = ((d10 - this.mFirstUptime.longValue()) / this.mAnimationsDragFactor) + this.mFirstUptime.longValue();
        }
        if (d10 > this.lastFrameTimeMs) {
            this.lastFrameTimeMs = d10;
            while (!this.mEventQueue.isEmpty()) {
                CopiedEvent poll = this.mEventQueue.poll();
                handleEvent(poll.getTargetTag(), poll.getEventName(), poll.getPayload());
            }
            if (!this.mFrameCallbacks.isEmpty()) {
                List<OnAnimationFrame> list = this.mFrameCallbacks;
                this.mFrameCallbacks = new ArrayList(list.size());
                int size = list.size();
                for (int i10 = 0; i10 < size; i10++) {
                    list.get(i10).onAnimationFrame(d10);
                }
            }
            performOperations(false, false);
        }
        this.mCallbackPosted.set(false);
        if (this.mFrameCallbacks.isEmpty() && this.mEventQueue.isEmpty()) {
            return;
        }
        startUpdatingOnAnimationFrame();
    }

    private void stopUpdatingOnAnimationFrame() {
        if (this.mCallbackPosted.getAndSet(false)) {
            this.mReactChoreographer.removeFrameCallback(ReactChoreographer.CallbackType.NATIVE_ANIMATED_MODULE, this.mChoreographerCallback);
        }
    }

    public void configureProps(Set<String> set, Set<String> set2) {
        this.uiProps = set;
        this.nativeProps = set2;
    }

    public void dispatchCommand(final int i10, final String str, final ReadableArray readableArray) {
        ReactContext reactContext = this.mContext;
        reactContext.runOnNativeModulesQueueThread(new GuardedRunnable(reactContext.getExceptionHandler()) { // from class: com.swmansion.reanimated.NodesManager.1
            @Override // com.facebook.react.bridge.GuardedRunnable
            public void runGuarded() {
                NodesManager.this.mUIManager.dispatchCommand(i10, str, readableArray);
            }
        });
    }

    public void enableSlowAnimations(boolean z10, int i10) {
        this.mSlowAnimationsEnabled = z10;
        this.mAnimationsDragFactor = i10;
        if (z10) {
            this.mFirstUptime = Long.valueOf(SystemClock.uptimeMillis());
        }
    }

    public void enqueueUpdateViewOnNativeThread(int i10, WritableMap writableMap, boolean z10) {
        if (z10) {
            this.mTryRunBatchUpdatesSynchronously = true;
        }
        this.mOperationsInBatch.add(new NativeUpdateOperation(i10, writableMap));
    }

    public AnimationsManager getAnimationsManager() {
        return this.mAnimationManager;
    }

    public UIManagerModule.CustomEventNamesResolver getEventNameResolver() {
        return this.mCustomEventNamesResolver;
    }

    public NativeProxy getNativeProxy() {
        return this.mNativeProxy;
    }

    public void initWithContext(ReactApplicationContext reactApplicationContext) {
        this.mNativeProxy = new NativeProxy(reactApplicationContext, this.mWorkletsModule);
        this.mAnimationManager.setAndroidUIScheduler(this.mWorkletsModule.getAndroidUIScheduler());
        ReaCompatibility reaCompatibility = new ReaCompatibility(reactApplicationContext);
        this.compatibility = reaCompatibility;
        reaCompatibility.registerFabricEventListener(this);
    }

    public void invalidate() {
        AnimationsManager animationsManager = this.mAnimationManager;
        if (animationsManager != null) {
            animationsManager.invalidate();
        }
        NativeProxy nativeProxy = this.mNativeProxy;
        if (nativeProxy != null) {
            nativeProxy.invalidate();
            this.mNativeProxy = null;
        }
        ReaCompatibility reaCompatibility = this.compatibility;
        if (reaCompatibility != null) {
            reaCompatibility.unregisterFabricEventListener(this);
        }
        Runnable runnable = this.mUnsubscribe;
        if (runnable != null) {
            runnable.run();
            this.mUnsubscribe = null;
        }
    }

    public boolean isAnimationRunning() {
        return this.mCallbackPosted.get();
    }

    public boolean isPerformOperationsActive() {
        return this.isPerformOperationsActive;
    }

    public float[] measure(int i10) {
        try {
            return NativeMethodsHelper.measure(this.mUIManager.resolveView(i10));
        } catch (IllegalViewOperationException e10) {
            e10.printStackTrace();
            return new float[]{Float.NaN, Float.NaN, Float.NaN, Float.NaN, Float.NaN, Float.NaN};
        }
    }

    public String obtainProp(int i10, String str) {
        try {
            View resolveView = this.mUIManager.resolveView(i10);
            str.getClass();
            char c10 = 65535;
            switch (str.hashCode()) {
                case -1267206133:
                    if (str.equals(ViewProps.OPACITY)) {
                        c10 = 0;
                        break;
                    }
                    break;
                case -1221029593:
                    if (str.equals("height")) {
                        c10 = 1;
                        break;
                    }
                    break;
                case -731417480:
                    if (str.equals(ViewProps.Z_INDEX)) {
                        c10 = 2;
                        break;
                    }
                    break;
                case 115029:
                    if (str.equals(ViewProps.TOP)) {
                        c10 = 3;
                        break;
                    }
                    break;
                case 3317767:
                    if (str.equals(ViewProps.LEFT)) {
                        c10 = 4;
                        break;
                    }
                    break;
                case 113126854:
                    if (str.equals("width")) {
                        c10 = 5;
                        break;
                    }
                    break;
                case 1287124693:
                    if (str.equals(ViewProps.BACKGROUND_COLOR)) {
                        c10 = 6;
                        break;
                    }
                    break;
            }
            switch (c10) {
                case 0:
                    return Float.toString(resolveView.getAlpha());
                case 1:
                    return Float.toString(PixelUtil.toDIPFromPixel(resolveView.getHeight()));
                case 2:
                    return Float.toString(resolveView.getElevation());
                case 3:
                    return Float.toString(PixelUtil.toDIPFromPixel(resolveView.getTop()));
                case 4:
                    return Float.toString(PixelUtil.toDIPFromPixel(resolveView.getLeft()));
                case 5:
                    return Float.toString(PixelUtil.toDIPFromPixel(resolveView.getWidth()));
                case 6:
                    Drawable background = resolveView.getBackground();
                    try {
                        String format = String.format("%08x", Integer.valueOf(((Integer) background.getClass().getMethod("getColor", null).invoke(background, null)).intValue()));
                        return "#" + format.substring(2, 8) + format.substring(0, 2);
                    } catch (Exception unused) {
                        return "Unable to resolve background color";
                    }
                default:
                    throw new IllegalArgumentException("[Reanimated] Attempted to get unsupported property " + str + " with function `getViewProp`");
            }
        } catch (Exception unused2) {
            return "[Reanimated] Unable to resolve view";
        }
    }

    @Override // com.facebook.react.uimanager.events.EventDispatcherListener
    public void onEventDispatch(Event event) {
        if (this.mNativeProxy != null) {
            if (UiThreadUtil.isOnUiThread()) {
                handleEvent(event);
                String eventName = event.getEventName();
                if (!eventName.contains("GestureHandler") && !eventName.contains("Scroll")) {
                    return;
                }
                performOperations(true, event.isDrawing());
                return;
            }
            if (this.mNativeProxy.isAnyHandlerWaitingForEvent(this.mCustomEventNamesResolver.resolveCustomEventName(event.getEventName()), event.getViewTag())) {
                this.mEventQueue.offer(new CopiedEvent(event));
            }
            startUpdatingOnAnimationFrame();
        }
    }

    public void onHostPause() {
        if (this.mCallbackPosted.get()) {
            stopUpdatingOnAnimationFrame();
            this.mCallbackPosted.set(true);
        }
    }

    public void onHostResume() {
        if (this.mCallbackPosted.getAndSet(false)) {
            startUpdatingOnAnimationFrame();
        }
    }

    public void performOperations(boolean z10, boolean z11) {
        NativeProxy nativeProxy = this.mNativeProxy;
        if (nativeProxy != null) {
            this.isPerformOperationsActive = true;
            nativeProxy.performOperations(z10, !z11);
            this.isPerformOperationsActive = false;
        }
    }

    public void postOnAnimation(OnAnimationFrame onAnimationFrame) {
        this.mFrameCallbacks.add(onAnimationFrame);
        startUpdatingOnAnimationFrame();
    }

    public void registerEventHandler(RCTEventEmitter rCTEventEmitter) {
        this.mCustomEventHandler = rCTEventEmitter;
    }

    public void scrollTo(int i10, double d10, double d11, boolean z10) {
        try {
            NativeMethodsHelper.scrollTo(this.mUIManager.resolveView(i10), d10, d11, z10);
        } catch (IllegalViewOperationException e10) {
            e10.printStackTrace();
        }
    }

    public void sendEvent(String str, WritableMap writableMap) {
        this.mEventEmitter.emit(str, writableMap);
    }

    public void startUpdatingOnAnimationFrame() {
        if (!this.mCallbackPosted.getAndSet(true)) {
            this.mReactChoreographer.postFrameCallback(ReactChoreographer.CallbackType.NATIVE_ANIMATED_MODULE, this.mChoreographerCallback);
        }
    }

    public void synchronouslyUpdateUIProps(int i10, ReadableMap readableMap) {
        this.compatibility.synchronouslyUpdateUIProps(i10, readableMap);
    }

    public void updateProps(int i10, Map<String, Object> map) {
        try {
            if (this.mUIManager.resolveView(i10) != null) {
                JavaOnlyMap javaOnlyMap = new JavaOnlyMap();
                WritableMap createMap = Arguments.createMap();
                WritableMap createMap2 = Arguments.createMap();
                boolean z10 = false;
                boolean z11 = false;
                boolean z12 = false;
                for (Map.Entry<String, Object> entry : map.entrySet()) {
                    String key = entry.getKey();
                    Object value = entry.getValue();
                    if (this.uiProps.contains(key)) {
                        addProp(javaOnlyMap, key, value);
                        z10 = true;
                    } else if (this.nativeProps.contains(key)) {
                        addProp(createMap2, key, value);
                        z11 = true;
                    } else {
                        addProp(createMap, key, value);
                        z12 = true;
                    }
                }
                if (i10 != -1) {
                    if (z10) {
                        this.mUIImplementation.synchronouslyUpdateViewOnUIThread(i10, new ReactStylesDiffMap(javaOnlyMap));
                    }
                    if (z11) {
                        enqueueUpdateViewOnNativeThread(i10, createMap2, true);
                    }
                    if (z12) {
                        WritableMap createMap3 = Arguments.createMap();
                        createMap3.putInt("viewTag", i10);
                        createMap3.putMap("props", createMap);
                        sendEvent("onReanimatedPropsChange", createMap3);
                    }
                }
            }
        } catch (IllegalViewOperationException unused) {
        }
    }

    private void handleEvent(int i10, String str, WritableMap writableMap) {
        this.mCustomEventHandler.receiveEvent(i10, str, writableMap);
    }
}
