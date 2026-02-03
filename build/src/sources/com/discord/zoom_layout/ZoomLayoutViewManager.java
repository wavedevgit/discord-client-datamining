package com.discord.zoom_layout;

import com.discord.reactevents.ReactEvents;
import com.discord.zoom_layout.reactevents.OnZoomChangedEvent;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.viewmanagers.DCDZoomLayoutAndroidManagerDelegate;
import com.facebook.react.viewmanagers.DCDZoomLayoutAndroidManagerInterface;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import lr.v;
import org.jetbrains.annotations.NotNull;
@ReactModule(name = ZoomLayoutViewManager.NAME)
@Metadata(d1 = {"\u0000`\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010%\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0007\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0007\b\u0001\u0018\u0000 (2\b\u0012\u0004\u0012\u00020\u00020\u00012\b\u0012\u0004\u0012\u00020\u00020\u0003:\u0001(B\u0007¢\u0006\u0004\b\u0004\u0010\u0005J\u000e\u0010\u000b\u001a\b\u0012\u0004\u0012\u00020\u00020\fH\u0014J\b\u0010\r\u001a\u00020\u000eH\u0016J\u0014\u0010\u000f\u001a\u000e\u0012\u0004\u0012\u00020\u000e\u0012\u0004\u0012\u00020\u00110\u0010H\u0016J\"\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u00022\u0006\u0010\u0015\u001a\u00020\u000e2\b\u0010\u0016\u001a\u0004\u0018\u00010\u0017H\u0016J0\u0010\u0018\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u00022\u0006\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u001b\u001a\u00020\u001a2\u0006\u0010\u001c\u001a\u00020\u001a2\u0006\u0010\u001d\u001a\u00020\u001eH\u0016J\u0018\u0010\u001f\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u00022\u0006\u0010\u001d\u001a\u00020\u001eH\u0016J\u0010\u0010 \u001a\u00020\u00022\u0006\u0010!\u001a\u00020\"H\u0014J\u0018\u0010#\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u00022\u0006\u0010$\u001a\u00020\u001eH\u0016J\u001f\u0010%\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u00022\b\u0010$\u001a\u0004\u0018\u00010\u001aH\u0016¢\u0006\u0002\u0010&J\u001f\u0010'\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u00022\b\u0010$\u001a\u0004\u0018\u00010\u001aH\u0016¢\u0006\u0002\u0010&R*\u0010\u0006\u001a\u001e\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00020\u0002\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00000\u00000\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\nX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006)"}, d2 = {"Lcom/discord/zoom_layout/ZoomLayoutViewManager;", "Lcom/facebook/react/uimanager/ViewGroupManager;", "Lcom/discord/zoom_layout/ZoomLayoutFixed;", "Lcom/facebook/react/viewmanagers/DCDZoomLayoutAndroidManagerInterface;", "<init>", "()V", "delegate", "Lcom/facebook/react/viewmanagers/DCDZoomLayoutAndroidManagerDelegate;", "kotlin.jvm.PlatformType", "reactEvents", "Lcom/discord/reactevents/ReactEvents;", "getDelegate", "Lcom/facebook/react/uimanager/ViewManagerDelegate;", "getName", "", "getExportedCustomDirectEventTypeConstants", "", "", "receiveCommand", "", "view", "commandId", "args", "Lcom/facebook/react/bridge/ReadableArray;", ZoomLayoutViewManager.COMMAND_ZOOM_TO, "x", "", "y", "scale", "animate", "", ZoomLayoutViewManager.COMMAND_UN_ZOOM, "createViewInstance", "reactContext", "Lcom/facebook/react/uimanager/ThemedReactContext;", "setGestureEnabled", "value", "setMinimumZoomScale", "(Lcom/discord/zoom_layout/ZoomLayoutFixed;Ljava/lang/Float;)V", "setMaximumZoomScale", "Companion", "zoom_layout_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ZoomLayoutViewManager extends ViewGroupManager<ZoomLayoutFixed> implements DCDZoomLayoutAndroidManagerInterface<ZoomLayoutFixed> {
    @NotNull
    private static final String COMMAND_UN_ZOOM = "unzoom";
    @NotNull
    private static final String COMMAND_ZOOM_TO = "zoomTo";
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final String NAME = "DCDZoomLayoutAndroid";
    @NotNull
    private final DCDZoomLayoutAndroidManagerDelegate<ZoomLayoutFixed, ZoomLayoutViewManager> delegate;
    @NotNull
    private final ReactEvents reactEvents;

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\b"}, d2 = {"Lcom/discord/zoom_layout/ZoomLayoutViewManager$Companion;", "", "<init>", "()V", "COMMAND_ZOOM_TO", "", "COMMAND_UN_ZOOM", "NAME", "zoom_layout_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    public ZoomLayoutViewManager() {
        super(null, 1, null);
        this.delegate = new DCDZoomLayoutAndroidManagerDelegate<>(this);
        this.reactEvents = new ReactEvents(v.a("onZoomChanged", Reflection.getOrCreateKotlinClass(OnZoomChangedEvent.class)));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit createViewInstance$lambda$0(ZoomLayoutViewManager zoomLayoutViewManager, ZoomLayoutFixed zoomLayout) {
        Intrinsics.checkNotNullParameter(zoomLayout, "zoomLayout");
        zoomLayoutViewManager.reactEvents.emitEvent(zoomLayout, new OnZoomChangedEvent(zoomLayout.getZoom()));
        return Unit.f32464a;
    }

    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    protected ViewManagerDelegate<ZoomLayoutFixed> getDelegate() {
        return this.delegate;
    }

    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    @NotNull
    public Map<String, Object> getExportedCustomDirectEventTypeConstants() {
        return this.reactEvents.exportEventConstants();
    }

    @Override // com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return NAME;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public ZoomLayoutFixed createViewInstance(@NotNull ThemedReactContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        return new ZoomLayoutFixed(reactContext, new Function1() { // from class: com.discord.zoom_layout.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit createViewInstance$lambda$0;
                createViewInstance$lambda$0 = ZoomLayoutViewManager.createViewInstance$lambda$0(ZoomLayoutViewManager.this, (ZoomLayoutFixed) obj);
                return createViewInstance$lambda$0;
            }
        });
    }

    @Override // com.facebook.react.uimanager.ViewManager
    public void receiveCommand(@NotNull ZoomLayoutFixed view, @NotNull String commandId, ReadableArray readableArray) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(commandId, "commandId");
        if (Intrinsics.areEqual(commandId, COMMAND_ZOOM_TO)) {
            zoomTo(view, readableArray != null ? (float) readableArray.getDouble(0) : 0.0f, readableArray != null ? (float) readableArray.getDouble(1) : 0.0f, readableArray != null ? (float) readableArray.getDouble(2) : 2.0f, readableArray != null ? readableArray.getBoolean(3) : true);
        } else if (Intrinsics.areEqual(commandId, COMMAND_UN_ZOOM)) {
            unzoom(view, readableArray != null ? readableArray.getBoolean(0) : true);
        }
    }

    @Override // com.facebook.react.viewmanagers.DCDZoomLayoutAndroidManagerInterface
    public void setGestureEnabled(@NotNull ZoomLayoutFixed view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setGestureEnabled(z10);
    }

    @Override // com.facebook.react.viewmanagers.DCDZoomLayoutAndroidManagerInterface
    public void setMaximumZoomScale(@NotNull ZoomLayoutFixed view, Float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (f10 == null) {
            return;
        }
        view.setMaxZoom(f10.floatValue());
    }

    @Override // com.facebook.react.viewmanagers.DCDZoomLayoutAndroidManagerInterface
    public void setMinimumZoomScale(@NotNull ZoomLayoutFixed view, Float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (f10 == null) {
            return;
        }
        view.setMinZoom(f10.floatValue());
    }

    @Override // com.facebook.react.viewmanagers.DCDZoomLayoutAndroidManagerInterface
    public void unzoom(@NotNull ZoomLayoutFixed view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.moveToCenter(Float.valueOf(1.0f), z10);
    }

    @Override // com.facebook.react.viewmanagers.DCDZoomLayoutAndroidManagerInterface
    public void zoomTo(@NotNull ZoomLayoutFixed view, float f10, float f11, float f12, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.moveTo(f12, f10, f11, z10);
    }
}
