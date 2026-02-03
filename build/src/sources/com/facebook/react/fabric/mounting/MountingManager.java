package com.facebook.react.fabric.mounting;

import android.graphics.Matrix;
import android.graphics.RectF;
import android.view.View;
import android.view.ViewParent;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactSoftExceptionLogger;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.RetryableMountingLayerException;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.annotations.UnstableReactNativeAPI;
import com.facebook.react.common.mapbuffer.MapBuffer;
import com.facebook.react.fabric.events.EventEmitterWrapper;
import com.facebook.react.fabric.mounting.mountitems.MountItem;
import com.facebook.react.modules.dialog.AlertFragment;
import com.facebook.react.touch.JSResponderHandler;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.RootViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewManagerRegistry;
import com.facebook.yoga.YogaMeasureMode;
import java.util.Map;
import java.util.Queue;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000¾\u0001\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0010\b\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0005\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u0007\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0014\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0015\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0000\u0018\u0000 W2\u00020\u0001:\u0002VWB\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J$\u0010\u0014\u001a\u00020\u000b2\u0006\u0010\u0015\u001a\u00020\n2\b\u0010\u0016\u001a\u0004\u0018\u00010\u00172\b\u0010\u0018\u001a\u0004\u0018\u00010\u0019H\u0007J$\u0010\u001a\u001a\u00020\u001b2\u0006\u0010\u0015\u001a\u00020\n2\b\u0010\u0018\u001a\u0004\u0018\u00010\u00192\b\u0010\u001c\u001a\u0004\u0018\u00010\u0017H\u0007J\u0010\u0010\u001d\u001a\u00020\u001b2\u0006\u0010\u0015\u001a\u00020\nH\u0007J\u0010\u0010\u001e\u001a\u0004\u0018\u00010\u000b2\u0006\u0010\u0015\u001a\u00020\nJ\u0016\u0010\u001f\u001a\u00020\u000b2\u0006\u0010\u0015\u001a\u00020\n2\u0006\u0010 \u001a\u00020!J\u000e\u0010\"\u001a\u00020#2\u0006\u0010\u0015\u001a\u00020\nJ\u000e\u0010$\u001a\u00020#2\u0006\u0010\u0015\u001a\u00020\nJ\u0010\u0010%\u001a\u0004\u0018\u00010\u000b2\u0006\u0010&\u001a\u00020\nJ\u0010\u0010'\u001a\u00020\u000b2\u0006\u0010&\u001a\u00020\nH\u0007J\u000e\u0010(\u001a\u00020#2\u0006\u0010&\u001a\u00020\nJ(\u0010)\u001a\u00020\u001b2\u0006\u0010\u0015\u001a\u00020\n2\u0006\u0010&\u001a\u00020\n2\u0006\u0010*\u001a\u00020\n2\u0006\u0010+\u001a\u00020,H\u0007J(\u0010)\u001a\u00020\u001b2\u0006\u0010\u0015\u001a\u00020\n2\u0006\u0010&\u001a\u00020\n2\b\u0010*\u001a\u0004\u0018\u00010!2\u0006\u0010+\u001a\u00020,J\u001e\u0010-\u001a\u00020\u001b2\u0006\u0010\u0015\u001a\u00020\n2\u0006\u0010&\u001a\u00020\n2\u0006\u0010.\u001a\u00020\nJ\u001a\u0010/\u001a\u00020\u001b2\u0006\u0010&\u001a\u00020\n2\b\u00100\u001a\u0004\u0018\u000101H\u0007J\b\u00102\u001a\u00020\u001bH\u0007J\u001a\u00103\u001a\u0004\u0018\u0001042\u0006\u0010\u0015\u001a\u00020\n2\u0006\u0010&\u001a\u00020\nH\u0007Jh\u00105\u001a\u0002062\b\u0010 \u001a\u0004\u0018\u0001072\b\u00108\u001a\u0004\u0018\u00010!2\b\u00109\u001a\u0004\u0018\u0001012\b\u00100\u001a\u0004\u0018\u0001012\b\u0010:\u001a\u0004\u0018\u0001012\u0006\u0010;\u001a\u00020<2\b\u0010=\u001a\u0004\u0018\u00010>2\u0006\u0010?\u001a\u00020<2\b\u0010@\u001a\u0004\u0018\u00010>2\b\u0010A\u001a\u0004\u0018\u00010BH\u0007J6\u0010C\u001a\u00020\u001b2\b\u0010\u0016\u001a\u0004\u0018\u0001072\b\u00108\u001a\u0004\u0018\u00010!2\u0006\u0010\u0015\u001a\u00020\n2\u0006\u0010&\u001a\u00020\n2\b\u0010D\u001a\u0004\u0018\u00010EH\u0007J:\u0010F\u001a\u00020\u001b2\u0006\u0010\u0015\u001a\u00020\n2\u0006\u0010&\u001a\u00020\n2\b\u0010G\u001a\u0004\u0018\u00010!2\u0006\u0010H\u001a\u00020#2\b\u0010D\u001a\u0004\u0018\u00010I2\u0006\u0010J\u001a\u00020\nJ \u00105\u001a\u00020\u001b2\u0006\u0010\u0015\u001a\u00020\n2\u0006\u0010&\u001a\u00020\n2\u0006\u0010K\u001a\u00020LH\u0007J\u001e\u00105\u001a\u00020\u001b2\u0006\u0010\u0018\u001a\u00020\u00192\u0006\u0010M\u001a\u00020\u00192\u0006\u0010N\u001a\u00020OJ\u0018\u0010P\u001a\u00020\u001b2\u0006\u0010Q\u001a\u00020\u00192\u0006\u0010N\u001a\u00020OH\u0002J\u0018\u0010R\u001a\u00020\u001b2\u0006\u0010Q\u001a\u00020\u00192\u0006\u0010S\u001a\u00020TH\u0002J\u001a\u0010U\u001a\u0004\u0018\u00010\u000b2\u0006\u0010\u0015\u001a\u00020\n2\u0006\u0010&\u001a\u00020\nH\u0002R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u001a\u0010\b\u001a\u000e\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u000b0\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\f\u001a\b\u0012\u0004\u0012\u00020\n0\rX\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u000e\u001a\u0004\u0018\u00010\u000bX\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u000f\u001a\u0004\u0018\u00010\u000bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0010\u001a\u00020\u0011X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0012\u001a\u00020\u0013X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006X"}, d2 = {"Lcom/facebook/react/fabric/mounting/MountingManager;", "", "viewManagerRegistry", "Lcom/facebook/react/uimanager/ViewManagerRegistry;", "mountItemExecutor", "Lcom/facebook/react/fabric/mounting/MountingManager$MountItemExecutor;", "<init>", "(Lcom/facebook/react/uimanager/ViewManagerRegistry;Lcom/facebook/react/fabric/mounting/MountingManager$MountItemExecutor;)V", "surfaceIdToManager", "Ljava/util/concurrent/ConcurrentHashMap;", "", "Lcom/facebook/react/fabric/mounting/SurfaceMountingManager;", "stoppedSurfaceIds", "Ljava/util/concurrent/CopyOnWriteArrayList;", "mostRecentSurfaceMountingManager", "lastQueriedSurfaceMountingManager", "jsResponderHandler", "Lcom/facebook/react/touch/JSResponderHandler;", "rootViewManager", "Lcom/facebook/react/uimanager/RootViewManager;", "startSurface", "surfaceId", "reactContext", "Lcom/facebook/react/uimanager/ThemedReactContext;", "rootView", "Landroid/view/View;", "attachRootView", "", "themedReactContext", "stopSurface", "getSurfaceManager", "getSurfaceManagerEnforced", "context", "", "surfaceIsStopped", "", "isWaitingForViewAttach", "getSurfaceManagerForView", "reactTag", "getSurfaceManagerForViewEnforced", "getViewExists", "receiveCommand", "commandId", "commandArgs", "Lcom/facebook/react/bridge/ReadableArray;", "sendAccessibilityEvent", "eventType", "updateProps", "props", "Lcom/facebook/react/bridge/ReadableMap;", "clearJSResponder", "getEventEmitter", "Lcom/facebook/react/fabric/events/EventEmitterWrapper;", "measure", "", "Lcom/facebook/react/bridge/ReactContext;", "componentName", "localData", "state", "width", "", "widthMode", "Lcom/facebook/yoga/YogaMeasureMode;", "height", "heightMode", "attachmentsPositions", "", "experimental_prefetchResource", "params", "Lcom/facebook/react/common/mapbuffer/MapBuffer;", "enqueuePendingEvent", "eventName", "canCoalesceEvent", "Lcom/facebook/react/bridge/WritableMap;", "eventCategory", "callback", "Lcom/facebook/react/bridge/Callback;", "v", "outputBuffer", "", "computeBoundingBox", "view", "mapRectFromViewToWindowCoords", "rect", "Landroid/graphics/RectF;", "getSurfaceMountingManager", "MountItemExecutor", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MountingManager {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final int MAX_STOPPED_SURFACE_IDS_LENGTH = 15;
    @NotNull
    private static final String TAG;
    @NotNull
    private final JSResponderHandler jsResponderHandler;
    private SurfaceMountingManager lastQueriedSurfaceMountingManager;
    private SurfaceMountingManager mostRecentSurfaceMountingManager;
    @NotNull
    private final MountItemExecutor mountItemExecutor;
    @NotNull
    private final RootViewManager rootViewManager;
    @NotNull
    private final CopyOnWriteArrayList<Integer> stoppedSurfaceIds;
    @NotNull
    private final ConcurrentHashMap<Integer, SurfaceMountingManager> surfaceIdToManager;
    @NotNull
    private final ViewManagerRegistry viewManagerRegistry;

    @Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007R\u000e\u0010\b\u001a\u00020\tX\u0082T¢\u0006\u0002\n\u0000¨\u0006\n"}, d2 = {"Lcom/facebook/react/fabric/mounting/MountingManager$Companion;", "", "<init>", "()V", "TAG", "", "getTAG", "()Ljava/lang/String;", "MAX_STOPPED_SURFACE_IDS_LENGTH", "", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final String getTAG() {
            return MountingManager.TAG;
        }

        private Companion() {
        }
    }

    @Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\bà\u0080\u0001\u0018\u00002\u00020\u0001J\u001a\u0010\u0002\u001a\u00020\u00032\u0010\u0010\u0004\u001a\f\u0012\u0006\u0012\u0004\u0018\u00010\u0006\u0018\u00010\u0005H'ø\u0001\u0000\u0082\u0002\u0006\n\u0004\b!0\u0001¨\u0006\u0007À\u0006\u0001"}, d2 = {"Lcom/facebook/react/fabric/mounting/MountingManager$MountItemExecutor;", "", "executeItems", "", AlertFragment.ARG_ITEMS, "Ljava/util/Queue;", "Lcom/facebook/react/fabric/mounting/mountitems/MountItem;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface MountItemExecutor {
        void executeItems(Queue<MountItem> queue);
    }

    static {
        String simpleName = MountingManager.class.getSimpleName();
        Intrinsics.checkNotNullExpressionValue(simpleName, "getSimpleName(...)");
        TAG = simpleName;
    }

    public MountingManager(@NotNull ViewManagerRegistry viewManagerRegistry, @NotNull MountItemExecutor mountItemExecutor) {
        Intrinsics.checkNotNullParameter(viewManagerRegistry, "viewManagerRegistry");
        Intrinsics.checkNotNullParameter(mountItemExecutor, "mountItemExecutor");
        this.viewManagerRegistry = viewManagerRegistry;
        this.mountItemExecutor = mountItemExecutor;
        this.surfaceIdToManager = new ConcurrentHashMap<>();
        this.stoppedSurfaceIds = new CopyOnWriteArrayList<>();
        this.jsResponderHandler = new JSResponderHandler();
        this.rootViewManager = new RootViewManager();
    }

    private final void computeBoundingBox(View view, int[] iArr) {
        RectF rectF = new RectF();
        rectF.set(0.0f, 0.0f, view.getWidth(), view.getHeight());
        mapRectFromViewToWindowCoords(view, rectF);
        iArr[0] = Math.round(rectF.left);
        iArr[1] = Math.round(rectF.top);
        iArr[2] = Math.round(rectF.right - rectF.left);
        iArr[3] = Math.round(rectF.bottom - rectF.top);
    }

    private final SurfaceMountingManager getSurfaceMountingManager(int i10, int i11) {
        if (i10 == -1) {
            return getSurfaceManagerForView(i11);
        }
        return getSurfaceManager(i10);
    }

    private final void mapRectFromViewToWindowCoords(View view, RectF rectF) {
        Matrix matrix = view.getMatrix();
        Intrinsics.checkNotNullExpressionValue(matrix, "getMatrix(...)");
        if (!matrix.isIdentity()) {
            matrix.mapRect(rectF);
        }
        rectF.offset(view.getLeft(), view.getTop());
        ViewParent parent = view.getParent();
        while (parent instanceof View) {
            View view2 = (View) parent;
            rectF.offset(-view2.getScrollX(), -view2.getScrollY());
            Matrix matrix2 = view2.getMatrix();
            Intrinsics.checkNotNullExpressionValue(matrix2, "getMatrix(...)");
            if (!matrix2.isIdentity()) {
                matrix2.mapRect(rectF);
            }
            rectF.offset(view2.getLeft(), view2.getTop());
            parent = view2.getParent();
        }
    }

    public final void attachRootView(int i10, View view, ThemedReactContext themedReactContext) {
        SurfaceMountingManager surfaceManagerEnforced = getSurfaceManagerEnforced(i10, "attachView");
        if (surfaceManagerEnforced.isStopped()) {
            ReactSoftExceptionLogger.logSoftException(TAG, new IllegalStateException("Trying to attach a view to a stopped surface"));
        } else {
            surfaceManagerEnforced.attachRootView(view, themedReactContext);
        }
    }

    public final void clearJSResponder() {
        this.jsResponderHandler.clearJSResponder();
    }

    public final void enqueuePendingEvent(int i10, int i11, String str, boolean z10, WritableMap writableMap, int i12) {
        SurfaceMountingManager surfaceMountingManager = getSurfaceMountingManager(i10, i11);
        if (surfaceMountingManager == null) {
            p8.a.d(TAG, "Cannot queue event without valid surface mounting manager for tag: %d, surfaceId: %d", Integer.valueOf(i11), Integer.valueOf(i10));
        } else {
            surfaceMountingManager.enqueuePendingEvent(i11, str, z10, writableMap, i12);
        }
    }

    @UnstableReactNativeAPI
    public final void experimental_prefetchResource(ReactContext reactContext, String str, int i10, int i11, MapBuffer mapBuffer) {
        ViewManagerRegistry viewManagerRegistry = this.viewManagerRegistry;
        if (str != null) {
            viewManagerRegistry.get(str).experimental_prefetchResource(reactContext, i10, i11, mapBuffer);
            return;
        }
        throw new IllegalStateException("Required value was null.");
    }

    public final EventEmitterWrapper getEventEmitter(int i10, int i11) {
        SurfaceMountingManager surfaceMountingManager = getSurfaceMountingManager(i10, i11);
        if (surfaceMountingManager != null) {
            return surfaceMountingManager.getEventEmitter(i11);
        }
        return null;
    }

    public final SurfaceMountingManager getSurfaceManager(int i10) {
        SurfaceMountingManager surfaceMountingManager = this.lastQueriedSurfaceMountingManager;
        if (surfaceMountingManager != null && surfaceMountingManager.getSurfaceId() == i10) {
            return this.lastQueriedSurfaceMountingManager;
        }
        SurfaceMountingManager surfaceMountingManager2 = this.mostRecentSurfaceMountingManager;
        if (surfaceMountingManager2 != null && surfaceMountingManager2.getSurfaceId() == i10) {
            return this.mostRecentSurfaceMountingManager;
        }
        SurfaceMountingManager surfaceMountingManager3 = this.surfaceIdToManager.get(Integer.valueOf(i10));
        this.lastQueriedSurfaceMountingManager = surfaceMountingManager3;
        return surfaceMountingManager3;
    }

    @NotNull
    public final SurfaceMountingManager getSurfaceManagerEnforced(int i10, @NotNull String context) {
        Intrinsics.checkNotNullParameter(context, "context");
        SurfaceMountingManager surfaceManager = getSurfaceManager(i10);
        if (surfaceManager != null) {
            return surfaceManager;
        }
        throw new RetryableMountingLayerException("Unable to find SurfaceMountingManager for surfaceId: [" + i10 + "]. Context: " + context);
    }

    public final SurfaceMountingManager getSurfaceManagerForView(int i10) {
        SurfaceMountingManager surfaceMountingManager = this.mostRecentSurfaceMountingManager;
        if (surfaceMountingManager != null && surfaceMountingManager.getViewExists(i10)) {
            return this.mostRecentSurfaceMountingManager;
        }
        for (Map.Entry<Integer, SurfaceMountingManager> entry : this.surfaceIdToManager.entrySet()) {
            SurfaceMountingManager value = entry.getValue();
            if (value != this.mostRecentSurfaceMountingManager && value.getViewExists(i10)) {
                if (this.mostRecentSurfaceMountingManager == null) {
                    this.mostRecentSurfaceMountingManager = value;
                }
                return value;
            }
        }
        return null;
    }

    @NotNull
    public final SurfaceMountingManager getSurfaceManagerForViewEnforced(int i10) {
        SurfaceMountingManager surfaceManagerForView = getSurfaceManagerForView(i10);
        if (surfaceManagerForView != null) {
            return surfaceManagerForView;
        }
        throw new RetryableMountingLayerException("Unable to find SurfaceMountingManager for tag: [" + i10 + "]");
    }

    public final boolean getViewExists(int i10) {
        if (getSurfaceManagerForView(i10) != null) {
            return true;
        }
        return false;
    }

    public final boolean isWaitingForViewAttach(int i10) {
        SurfaceMountingManager surfaceManager = getSurfaceManager(i10);
        if (surfaceManager == null || surfaceManager.isStopped()) {
            return false;
        }
        return !surfaceManager.isRootViewAttached();
    }

    public final long measure(ReactContext reactContext, String str, ReadableMap readableMap, ReadableMap readableMap2, ReadableMap readableMap3, float f10, YogaMeasureMode yogaMeasureMode, float f11, YogaMeasureMode yogaMeasureMode2, float[] fArr) {
        ViewManagerRegistry viewManagerRegistry = this.viewManagerRegistry;
        if (str != null) {
            return viewManagerRegistry.get(str).measure(reactContext, readableMap, readableMap2, readableMap3, f10, yogaMeasureMode, f11, yogaMeasureMode2, fArr);
        }
        throw new IllegalStateException("Required value was null.");
    }

    @lr.c
    public final void receiveCommand(int i10, int i11, int i12, @NotNull ReadableArray commandArgs) {
        Intrinsics.checkNotNullParameter(commandArgs, "commandArgs");
        UiThreadUtil.assertOnUiThread();
        getSurfaceManagerEnforced(i10, "receiveCommand:int").receiveCommand(i11, i12, commandArgs);
    }

    public final void sendAccessibilityEvent(int i10, int i11, int i12) {
        UiThreadUtil.assertOnUiThread();
        if (i10 == -1) {
            getSurfaceManagerForViewEnforced(i11).sendAccessibilityEvent(i11, i12);
        } else {
            getSurfaceManagerEnforced(i10, "sendAccessibilityEvent").sendAccessibilityEvent(i11, i12);
        }
    }

    @NotNull
    public final SurfaceMountingManager startSurface(int i10, ThemedReactContext themedReactContext, View view) {
        JSResponderHandler jSResponderHandler = this.jsResponderHandler;
        ViewManagerRegistry viewManagerRegistry = this.viewManagerRegistry;
        RootViewManager rootViewManager = this.rootViewManager;
        MountItemExecutor mountItemExecutor = this.mountItemExecutor;
        if (themedReactContext != null) {
            SurfaceMountingManager surfaceMountingManager = new SurfaceMountingManager(i10, jSResponderHandler, viewManagerRegistry, rootViewManager, mountItemExecutor, themedReactContext);
            this.surfaceIdToManager.putIfAbsent(Integer.valueOf(i10), surfaceMountingManager);
            if (this.surfaceIdToManager.get(Integer.valueOf(i10)) != surfaceMountingManager) {
                String str = TAG;
                ReactSoftExceptionLogger.logSoftException(str, new IllegalStateException("Called startSurface more than once for the SurfaceId [" + i10 + "]"));
            }
            this.mostRecentSurfaceMountingManager = this.surfaceIdToManager.get(Integer.valueOf(i10));
            if (view != null) {
                surfaceMountingManager.attachRootView(view, themedReactContext);
            }
            return surfaceMountingManager;
        }
        throw new IllegalStateException("Required value was null.");
    }

    public final void stopSurface(int i10) {
        SurfaceMountingManager surfaceMountingManager = this.surfaceIdToManager.get(Integer.valueOf(i10));
        if (surfaceMountingManager != null) {
            while (this.stoppedSurfaceIds.size() >= 15) {
                Integer num = this.stoppedSurfaceIds.get(0);
                if (num != null) {
                    this.surfaceIdToManager.remove(num);
                    this.stoppedSurfaceIds.remove(num);
                    p8.a.c(TAG, "Removing stale SurfaceMountingManager: [%d]", num);
                } else {
                    throw new IllegalStateException("Required value was null.");
                }
            }
            this.stoppedSurfaceIds.add(Integer.valueOf(i10));
            surfaceMountingManager.stopSurface();
            if (this.mostRecentSurfaceMountingManager == surfaceMountingManager) {
                this.mostRecentSurfaceMountingManager = null;
            }
            if (this.lastQueriedSurfaceMountingManager == surfaceMountingManager) {
                this.lastQueriedSurfaceMountingManager = null;
                return;
            }
            return;
        }
        String str = TAG;
        ReactSoftExceptionLogger.logSoftException(str, new IllegalStateException("Cannot call stopSurface on non-existent surface: [" + i10 + "]"));
    }

    public final boolean surfaceIsStopped(int i10) {
        if (this.stoppedSurfaceIds.contains(Integer.valueOf(i10))) {
            return true;
        }
        SurfaceMountingManager surfaceManager = getSurfaceManager(i10);
        if (surfaceManager != null && surfaceManager.isStopped()) {
            return true;
        }
        return false;
    }

    public final void updateProps(int i10, ReadableMap readableMap) {
        UiThreadUtil.assertOnUiThread();
        if (readableMap == null) {
            return;
        }
        getSurfaceManagerForViewEnforced(i10).updateProps(i10, readableMap);
    }

    public final void receiveCommand(int i10, int i11, String str, @NotNull ReadableArray commandArgs) {
        Intrinsics.checkNotNullParameter(commandArgs, "commandArgs");
        UiThreadUtil.assertOnUiThread();
        SurfaceMountingManager surfaceManagerEnforced = getSurfaceManagerEnforced(i10, "receiveCommand:string");
        if (str == null) {
            throw new IllegalStateException("Required value was null.");
        }
        surfaceManagerEnforced.receiveCommand(i11, str, commandArgs);
    }

    public final synchronized void measure(int i10, int i11, @NotNull Callback callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        UiThreadUtil.assertOnUiThread();
        SurfaceMountingManager surfaceMountingManager = getSurfaceMountingManager(i10, i11);
        if (surfaceMountingManager == null) {
            callback.invoke(0, 0, 0, 0, 0, 0);
            return;
        }
        try {
            View view = surfaceMountingManager.getView(i11);
            Intrinsics.checkNotNull(view);
            int[] iArr = new int[4];
            View rootViewIfAttached = surfaceMountingManager.getRootViewIfAttached();
            if (rootViewIfAttached == null) {
                p8.a.o(TAG, "Failed to get root view for surfaceId: %d", Integer.valueOf(i10));
                return;
            }
            measure(rootViewIfAttached, view, iArr);
            float dIPFromPixel = PixelUtil.toDIPFromPixel(iArr[0]);
            float dIPFromPixel2 = PixelUtil.toDIPFromPixel(iArr[1]);
            callback.invoke(0, 0, Float.valueOf(PixelUtil.toDIPFromPixel(iArr[2])), Float.valueOf(PixelUtil.toDIPFromPixel(iArr[3])), Float.valueOf(dIPFromPixel), Float.valueOf(dIPFromPixel2));
        } catch (Exception e10) {
            p8.a.o(TAG, "Failed to get view for reactTag: %d, surfaceId: %d", Integer.valueOf(i11), Integer.valueOf(i10), e10);
        }
    }

    public final synchronized void measure(@NotNull View rootView, @NotNull View v10, @NotNull int[] outputBuffer) {
        Intrinsics.checkNotNullParameter(rootView, "rootView");
        Intrinsics.checkNotNullParameter(v10, "v");
        Intrinsics.checkNotNullParameter(outputBuffer, "outputBuffer");
        computeBoundingBox(rootView, outputBuffer);
        int i10 = outputBuffer[0];
        int i11 = outputBuffer[1];
        computeBoundingBox(v10, outputBuffer);
        outputBuffer[0] = outputBuffer[0] - i10;
        outputBuffer[1] = outputBuffer[1] - i11;
    }
}
