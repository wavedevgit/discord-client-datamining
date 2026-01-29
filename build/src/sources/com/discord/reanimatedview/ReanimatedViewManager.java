package com.discord.reanimatedview;

import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.annotations.ReactPropGroup;
import com.facebook.react.viewmanagers.ReanimatedViewManagerInterface;
import com.facebook.react.views.view.ReactViewGroup;
import com.facebook.react.views.view.ReactViewManager;
import com.swmansion.reanimated.NodesManager;
import com.swmansion.reanimated.ReanimatedModule;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@ReactModule(name = ReanimatedViewManager.REACT_CLASS)
@Metadata(d1 = {"\u0000V\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0007\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000e\n\u0002\b\u0002\b\u0007\u0018\u0000 \u001f2\u00020\u00012\b\u0012\u0004\u0012\u00020\u00030\u0002:\u0001\u001fB\u0007¢\u0006\u0004\b\u0004\u0010\u0005J\u0010\u0010\b\u001a\u00020\u00032\u0006\u0010\t\u001a\u00020\nH\u0016J\u000e\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u0003J\u001a\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\r\u001a\u00020\u00032\b\u0010\u0010\u001a\u0004\u0018\u00010\u0011H\u0017J\u0018\u0010\u0012\u001a\u00020\u000f2\u0006\u0010\r\u001a\u00020\u00032\u0006\u0010\u0013\u001a\u00020\u0014H\u0017J \u0010\u0015\u001a\u00020\u000f2\u0006\u0010\r\u001a\u00020\u00032\u0006\u0010\u0016\u001a\u00020\u00172\u0006\u0010\u0018\u001a\u00020\u0019H\u0017J\u001a\u0010\u001a\u001a\u0004\u0018\u00010\u00032\u0006\u0010\u001b\u001a\u00020\n2\u0006\u0010\r\u001a\u00020\u0003H\u0014J\u0010\u0010\u001c\u001a\u00020\u000f2\u0006\u0010\r\u001a\u00020\u0003H\u0014J\b\u0010\u001d\u001a\u00020\u001eH\u0016R\u0010\u0010\u0006\u001a\u0004\u0018\u00010\u0007X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006 "}, d2 = {"Lcom/discord/reanimatedview/ReanimatedViewManager;", "Lcom/facebook/react/views/view/ReactViewManager;", "Lcom/facebook/react/viewmanagers/ReanimatedViewManagerInterface;", "Lcom/facebook/react/views/view/ReactViewGroup;", "<init>", "()V", "nodesManager", "Lcom/swmansion/reanimated/NodesManager;", "createViewInstance", "context", "Lcom/facebook/react/uimanager/ThemedReactContext;", "allowUpdating", "", "view", "setTransform", "", "matrix", "Lcom/facebook/react/bridge/ReadableArray;", "setOpacity", ViewProps.OPACITY, "", "setBorderRadius", "index", "", "rawBorderRadius", "Lcom/facebook/react/bridge/Dynamic;", "prepareToRecycleView", "reactContext", "onAfterUpdateTransaction", "getName", "", "Companion", "reanimated_view_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReanimatedViewManager extends ReactViewManager implements ReanimatedViewManagerInterface<ReactViewGroup> {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final String REACT_CLASS = "ReanimatedView";
    private NodesManager nodesManager;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/reanimatedview/ReanimatedViewManager$Companion;", "", "<init>", "()V", "REACT_CLASS", "", "reanimated_view_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    public final boolean allowUpdating(@NotNull ReactViewGroup view) {
        NodesManager nodesManager;
        Intrinsics.checkNotNullParameter(view, "view");
        if (view.getTag(R.id.firstRenderPerformed) != null && (nodesManager = this.nodesManager) != null) {
            Intrinsics.checkNotNull(nodesManager);
            if (!nodesManager.isPerformOperationsActive()) {
                return false;
            }
        }
        return true;
    }

    @Override // com.facebook.react.views.view.ReactViewManager, com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return REACT_CLASS;
    }

    @Override // com.facebook.react.views.view.ReactViewManager
    @ReactPropGroup(names = {"borderRadius", "borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius", ViewProps.BORDER_TOP_START_RADIUS, ViewProps.BORDER_TOP_END_RADIUS, ViewProps.BORDER_BOTTOM_START_RADIUS, ViewProps.BORDER_BOTTOM_END_RADIUS, ViewProps.BORDER_END_END_RADIUS, ViewProps.BORDER_END_START_RADIUS, ViewProps.BORDER_START_END_RADIUS, ViewProps.BORDER_START_START_RADIUS})
    public void setBorderRadius(@NotNull ReactViewGroup view, int i10, @NotNull Dynamic rawBorderRadius) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(rawBorderRadius, "rawBorderRadius");
        if (!allowUpdating(view)) {
            return;
        }
        super.setBorderRadius(view, i10, rawBorderRadius);
    }

    @Override // com.facebook.react.views.view.ReactViewManager, com.facebook.react.uimanager.ViewManager
    @NotNull
    public ReactViewGroup createViewInstance(@NotNull ThemedReactContext context) {
        Intrinsics.checkNotNullParameter(context, "context");
        if (this.nodesManager == null) {
            ReanimatedModule reanimatedModule = (ReanimatedModule) context.getNativeModule(ReanimatedModule.class);
            this.nodesManager = reanimatedModule != null ? reanimatedModule.getNodesManager() : null;
        }
        return new ReactViewGroup(context);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    public void onAfterUpdateTransaction(@NotNull ReactViewGroup view) {
        Intrinsics.checkNotNullParameter(view, "view");
        super.onAfterUpdateTransaction((ReanimatedViewManager) view);
        view.setTag(R.id.firstRenderPerformed, Boolean.TRUE);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewManager, com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    public ReactViewGroup prepareToRecycleView(@NotNull ThemedReactContext reactContext, @NotNull ReactViewGroup view) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        Intrinsics.checkNotNullParameter(view, "view");
        view.setTag(R.id.firstRenderPerformed, null);
        return super.prepareToRecycleView(reactContext, view);
    }

    @Override // com.facebook.react.views.view.ReactViewManager, com.facebook.react.uimanager.BaseViewManager
    @ReactProp(name = ViewProps.OPACITY)
    public void setOpacity(@NotNull ReactViewGroup view, float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (allowUpdating(view)) {
            super.setOpacity(view, f10);
        }
    }

    @Override // com.facebook.react.uimanager.BaseViewManager
    @ReactProp(name = ViewProps.TRANSFORM)
    public void setTransform(@NotNull ReactViewGroup view, ReadableArray readableArray) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (allowUpdating(view)) {
            super.setTransform((ReanimatedViewManager) view, readableArray);
        }
    }
}
