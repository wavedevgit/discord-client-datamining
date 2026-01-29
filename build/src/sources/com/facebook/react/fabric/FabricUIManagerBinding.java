package com.facebook.react.fabric;

import android.annotation.SuppressLint;
import com.facebook.jni.HybridClassBase;
import com.facebook.react.bridge.NativeMap;
import com.facebook.react.bridge.RuntimeExecutor;
import com.facebook.react.bridge.RuntimeScheduler;
import com.facebook.react.fabric.events.EventBeatManager;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000h\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0007\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u0015\n\u0002\b\u0011\b\u0001\u0018\u0000 <2\u00020\u0001:\u0001<B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\t\u0010\u0004\u001a\u00020\u0005H\u0082 J1\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u0010H\u0082 J#\u0010\u0011\u001a\u00020\u00052\u0006\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u00152\b\u0010\u0016\u001a\u0004\u0018\u00010\u0017H\u0086 Jc\u0010\u0018\u001a\u00020\u00052\u0006\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u00152\b\u0010\u0016\u001a\u0004\u0018\u00010\u00172\u0006\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u001b\u001a\u00020\u001a2\u0006\u0010\u001c\u001a\u00020\u001a2\u0006\u0010\u001d\u001a\u00020\u001a2\u0006\u0010\u001e\u001a\u00020\u001a2\u0006\u0010\u001f\u001a\u00020\u001a2\u0006\u0010 \u001a\u00020!2\u0006\u0010\"\u001a\u00020!H\u0086 J!\u0010#\u001a\u00020\u00052\u0006\u0010\u0012\u001a\u00020\u00132\u0006\u0010$\u001a\u00020%2\u0006\u0010&\u001a\u00020!H\u0086 J!\u0010'\u001a\u00020\u00132\u0006\u0010(\u001a\u00020\u00132\u0006\u0010)\u001a\u00020\u00132\u0006\u0010*\u001a\u00020\u0013H\u0086 J\u0019\u0010+\u001a\u00020,2\u0006\u0010-\u001a\u00020\u00132\u0006\u0010.\u001a\u00020\u0013H\u0086 J\u0011\u0010/\u001a\u00020\u00052\u0006\u0010\u0012\u001a\u00020\u0013H\u0086 J\u0011\u00100\u001a\u00020\u00052\u0006\u0010$\u001a\u00020%H\u0086 J\u0011\u00101\u001a\u00020\u00052\u0006\u00102\u001a\u00020\u001aH\u0086 JQ\u00103\u001a\u00020\u00052\u0006\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u001b\u001a\u00020\u001a2\u0006\u0010\u001c\u001a\u00020\u001a2\u0006\u0010\u001d\u001a\u00020\u001a2\u0006\u0010\u001e\u001a\u00020\u001a2\u0006\u0010\u001f\u001a\u00020\u001a2\u0006\u0010 \u001a\u00020!2\u0006\u0010\"\u001a\u00020!H\u0086 J\t\u00104\u001a\u00020\u0005H\u0086 J\t\u00105\u001a\u00020\u0005H\u0086 J\u0011\u00106\u001a\u00020\u00052\u0006\u0010\u0012\u001a\u00020\u0013H\u0086 J.\u00107\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\n2\u0006\u00108\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000e2\u0006\u00109\u001a\u00020\u0010J\t\u0010:\u001a\u00020\u0005H\u0082 J\u0006\u0010;\u001a\u00020\u0005¨\u0006="}, d2 = {"Lcom/facebook/react/fabric/FabricUIManagerBinding;", "Lcom/facebook/jni/HybridClassBase;", "<init>", "()V", "initHybrid", "", "installFabricUIManager", "runtimeExecutor", "Lcom/facebook/react/bridge/RuntimeExecutor;", "runtimeScheduler", "Lcom/facebook/react/bridge/RuntimeScheduler;", "uiManager", "Lcom/facebook/react/fabric/FabricUIManager;", "eventBeatManager", "Lcom/facebook/react/fabric/events/EventBeatManager;", "componentsRegistry", "Lcom/facebook/react/fabric/ComponentFactory;", "startSurface", "surfaceId", "", "moduleName", "", "initialProps", "Lcom/facebook/react/bridge/NativeMap;", "startSurfaceWithConstraints", ViewProps.MIN_WIDTH, "", ViewProps.MAX_WIDTH, ViewProps.MIN_HEIGHT, ViewProps.MAX_HEIGHT, "offsetX", "offsetY", "isRTL", "", "doLeftAndRightSwapInRTL", "startSurfaceWithSurfaceHandler", "surfaceHandler", "Lcom/facebook/react/fabric/SurfaceHandlerBinding;", "isMountable", "findNextFocusableElement", "parentTag", "focusedTag", "direction", "getRelativeAncestorList", "", "rootTag", "childTag", "stopSurface", "stopSurfaceWithSurfaceHandler", "setPixelDensity", "pointScaleFactor", "setConstraints", "driveCxxAnimations", "drainPreallocateViewsQueue", "reportMount", "register", "fabricUIManager", "componentFactory", "uninstallFabricUIManager", "unregister", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SuppressLint({"MissingNativeLoadLibrary"})
@fb.a
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class FabricUIManagerBinding extends HybridClassBase {
    @NotNull
    private static final Companion Companion = new Companion(null);

    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0082\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003¨\u0006\u0004"}, d2 = {"Lcom/facebook/react/fabric/FabricUIManagerBinding$Companion;", "", "<init>", "()V", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    static {
        FabricSoLoader.staticInit();
    }

    public FabricUIManagerBinding() {
        initHybrid();
    }

    private final native void initHybrid();

    private final native void installFabricUIManager(RuntimeExecutor runtimeExecutor, RuntimeScheduler runtimeScheduler, FabricUIManager fabricUIManager, EventBeatManager eventBeatManager, ComponentFactory componentFactory);

    private final native void uninstallFabricUIManager();

    public final native void drainPreallocateViewsQueue();

    public final native void driveCxxAnimations();

    public final native int findNextFocusableElement(int i10, int i11, int i12);

    @NotNull
    public final native int[] getRelativeAncestorList(int i10, int i11);

    public final void register(@NotNull RuntimeExecutor runtimeExecutor, @NotNull RuntimeScheduler runtimeScheduler, @NotNull FabricUIManager fabricUIManager, @NotNull EventBeatManager eventBeatManager, @NotNull ComponentFactory componentFactory) {
        Intrinsics.checkNotNullParameter(runtimeExecutor, "runtimeExecutor");
        Intrinsics.checkNotNullParameter(runtimeScheduler, "runtimeScheduler");
        Intrinsics.checkNotNullParameter(fabricUIManager, "fabricUIManager");
        Intrinsics.checkNotNullParameter(eventBeatManager, "eventBeatManager");
        Intrinsics.checkNotNullParameter(componentFactory, "componentFactory");
        fabricUIManager.setBinding(this);
        installFabricUIManager(runtimeExecutor, runtimeScheduler, fabricUIManager, eventBeatManager, componentFactory);
        setPixelDensity(PixelUtil.getDisplayMetricDensity());
    }

    public final native void reportMount(int i10);

    public final native void setConstraints(int i10, float f10, float f11, float f12, float f13, float f14, float f15, boolean z10, boolean z11);

    public final native void setPixelDensity(float f10);

    public final native void startSurface(int i10, @NotNull String str, NativeMap nativeMap);

    public final native void startSurfaceWithConstraints(int i10, @NotNull String str, NativeMap nativeMap, float f10, float f11, float f12, float f13, float f14, float f15, boolean z10, boolean z11);

    public final native void startSurfaceWithSurfaceHandler(int i10, @NotNull SurfaceHandlerBinding surfaceHandlerBinding, boolean z10);

    public final native void stopSurface(int i10);

    public final native void stopSurfaceWithSurfaceHandler(@NotNull SurfaceHandlerBinding surfaceHandlerBinding);

    public final void unregister() {
        uninstallFabricUIManager();
    }
}
