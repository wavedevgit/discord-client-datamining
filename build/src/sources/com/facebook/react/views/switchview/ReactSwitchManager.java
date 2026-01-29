package com.facebook.react.views.switchview;

import android.content.Context;
import android.view.View;
import android.widget.CompoundButton;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.viewmanagers.AndroidSwitchManagerDelegate;
import com.facebook.react.viewmanagers.AndroidSwitchManagerInterface;
import com.facebook.yoga.YogaMeasureMode;
import com.facebook.yoga.h;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000|\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0013\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\t\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0014\n\u0002\b\u0003\b\u0000\u0018\u0000 >2\u000e\u0012\u0004\u0012\u00020\u0002\u0012\u0004\u0012\u00020\u00030\u00012\b\u0012\u0004\u0012\u00020\u00020\u0004:\u0001>B\u0007¢\u0006\u0004\b\u0005\u0010\u0006J\b\u0010\t\u001a\u00020\nH\u0016J\b\u0010\u000b\u001a\u00020\u0003H\u0016J\u000e\u0010\f\u001a\b\u0012\u0004\u0012\u00020\u00030\rH\u0016J\u0010\u0010\u000e\u001a\u00020\u00022\u0006\u0010\u000f\u001a\u00020\u0010H\u0014J\u001a\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00022\b\b\u0001\u0010\u0014\u001a\u00020\u0015H\u0016J\u0018\u0010\u0016\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00022\u0006\u0010\u0017\u001a\u00020\u0018H\u0017J\u0018\u0010\u0019\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00022\u0006\u0010\u001a\u001a\u00020\u0018H\u0017J\u0018\u0010\u001b\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00022\u0006\u0010\u001c\u001a\u00020\u0018H\u0017J\u0018\u0010\u001d\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00022\u0006\u0010\u001e\u001a\u00020\u0018H\u0017J\u001f\u0010\u001f\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00022\b\u0010 \u001a\u0004\u0018\u00010\u0015H\u0017¢\u0006\u0002\u0010!J\u001f\u0010\"\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00022\b\u0010 \u001a\u0004\u0018\u00010\u0015H\u0017¢\u0006\u0002\u0010!J\u001f\u0010#\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00022\b\u0010 \u001a\u0004\u0018\u00010\u0015H\u0017¢\u0006\u0002\u0010!J\u001f\u0010$\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00022\b\u0010 \u001a\u0004\u0018\u00010\u0015H\u0017¢\u0006\u0002\u0010!J\u001f\u0010%\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00022\b\u0010 \u001a\u0004\u0018\u00010\u0015H\u0017¢\u0006\u0002\u0010!J\u0018\u0010&\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00022\u0006\u0010\u001e\u001a\u00020\u0018H\u0016J\u0018\u0010'\u001a\u00020\u00122\u0006\u0010(\u001a\u00020\u00102\u0006\u0010\u0013\u001a\u00020\u0002H\u0014J\u0018\u0010)\u001a\u00020\u00122\u0006\u0010*\u001a\u00020\u00022\u0006\u0010+\u001a\u00020,H\u0016J\u000e\u0010-\u001a\b\u0012\u0004\u0012\u00020\u00020\bH\u0014JX\u0010.\u001a\u00020/2\u0006\u0010\u000f\u001a\u0002002\b\u00101\u001a\u0004\u0018\u0001022\b\u00103\u001a\u0004\u0018\u0001022\b\u00104\u001a\u0004\u0018\u0001022\u0006\u00105\u001a\u0002062\u0006\u00107\u001a\u0002082\u0006\u00109\u001a\u0002062\u0006\u0010:\u001a\u0002082\b\u0010;\u001a\u0004\u0018\u00010<H\u0016J\u0018\u0010=\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00022\u0006\u0010\u001e\u001a\u00020\u0018H\u0002R\u0014\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\u00020\bX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006?"}, d2 = {"Lcom/facebook/react/views/switchview/ReactSwitchManager;", "Lcom/facebook/react/uimanager/BaseViewManager;", "Lcom/facebook/react/views/switchview/ReactSwitch;", "Lcom/facebook/react/views/switchview/ReactSwitchShadowNode;", "Lcom/facebook/react/viewmanagers/AndroidSwitchManagerInterface;", "<init>", "()V", "delegate", "Lcom/facebook/react/uimanager/ViewManagerDelegate;", "getName", "", "createShadowNodeInstance", "getShadowNodeClass", "Ljava/lang/Class;", "createViewInstance", "context", "Lcom/facebook/react/uimanager/ThemedReactContext;", "setBackgroundColor", "", "view", ViewProps.BACKGROUND_COLOR, "", "setDisabled", "disabled", "", "setEnabled", ViewProps.ENABLED, "setOn", ViewProps.ON, "setValue", "value", "setThumbTintColor", ViewProps.COLOR, "(Lcom/facebook/react/views/switchview/ReactSwitch;Ljava/lang/Integer;)V", "setThumbColor", "setTrackColorForFalse", "setTrackColorForTrue", "setTrackTintColor", "setNativeValue", "addEventEmitters", "reactContext", "updateExtraData", "root", "extraData", "", "getDelegate", "measure", "", "Landroid/content/Context;", "localData", "Lcom/facebook/react/bridge/ReadableMap;", "props", "state", "width", "", "widthMode", "Lcom/facebook/yoga/YogaMeasureMode;", "height", "heightMode", "attachmentsPositions", "", "setValueInternal", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nReactSwitchManager.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReactSwitchManager.kt\ncom/facebook/react/views/switchview/ReactSwitchManager\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,146:1\n1#2:147\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactSwitchManager extends BaseViewManager<ReactSwitch, ReactSwitchShadowNode> implements AndroidSwitchManagerInterface<ReactSwitch> {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final CompoundButton.OnCheckedChangeListener ON_CHECKED_CHANGE_LISTENER = new CompoundButton.OnCheckedChangeListener() { // from class: com.facebook.react.views.switchview.a
        @Override // android.widget.CompoundButton.OnCheckedChangeListener
        public final void onCheckedChanged(CompoundButton compoundButton, boolean z10) {
            ReactSwitchManager.ON_CHECKED_CHANGE_LISTENER$lambda$2(compoundButton, z10);
        }
    };
    @NotNull
    public static final String REACT_CLASS = "AndroidSwitch";
    @NotNull
    private final ViewManagerDelegate<ReactSwitch> delegate = new AndroidSwitchManagerDelegate(this);

    @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0080\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\b"}, d2 = {"Lcom/facebook/react/views/switchview/ReactSwitchManager$Companion;", "", "<init>", "()V", "REACT_CLASS", "", "ON_CHECKED_CHANGE_LISTENER", "Landroid/widget/CompoundButton$OnCheckedChangeListener;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void ON_CHECKED_CHANGE_LISTENER$lambda$2(CompoundButton buttonView, boolean z10) {
        Intrinsics.checkNotNullParameter(buttonView, "buttonView");
        Context context = buttonView.getContext();
        Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
        ReactContext reactContext = (ReactContext) context;
        int id2 = buttonView.getId();
        EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag(reactContext, id2);
        if (eventDispatcherForReactTag != null) {
            eventDispatcherForReactTag.dispatchEvent(new ReactSwitchEvent(UIManagerHelper.getSurfaceId(reactContext), id2, z10));
        }
    }

    private final void setValueInternal(ReactSwitch reactSwitch, boolean z10) {
        reactSwitch.setOnCheckedChangeListener(null);
        reactSwitch.setOn(z10);
        reactSwitch.setOnCheckedChangeListener(ON_CHECKED_CHANGE_LISTENER);
    }

    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    protected ViewManagerDelegate<ReactSwitch> getDelegate() {
        return this.delegate;
    }

    @Override // com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return REACT_CLASS;
    }

    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public Class<ReactSwitchShadowNode> getShadowNodeClass() {
        return ReactSwitchShadowNode.class;
    }

    @Override // com.facebook.react.uimanager.ViewManager
    public long measure(@NotNull Context context, ReadableMap readableMap, ReadableMap readableMap2, ReadableMap readableMap3, float f10, @NotNull YogaMeasureMode widthMode, float f11, @NotNull YogaMeasureMode heightMode, float[] fArr) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(widthMode, "widthMode");
        Intrinsics.checkNotNullParameter(heightMode, "heightMode");
        ReactSwitch reactSwitch = new ReactSwitch(context);
        reactSwitch.setShowText(false);
        int makeMeasureSpec = View.MeasureSpec.makeMeasureSpec(0, 0);
        reactSwitch.measure(makeMeasureSpec, makeMeasureSpec);
        return h.a(PixelUtil.toDIPFromPixel(reactSwitch.getMeasuredWidth()), PixelUtil.toDIPFromPixel(reactSwitch.getMeasuredHeight()));
    }

    @Override // com.facebook.react.uimanager.ViewManager
    public void updateExtraData(@NotNull ReactSwitch root, @NotNull Object extraData) {
        Intrinsics.checkNotNullParameter(root, "root");
        Intrinsics.checkNotNullParameter(extraData, "extraData");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    public void addEventEmitters(@NotNull ThemedReactContext reactContext, @NotNull ReactSwitch view) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        Intrinsics.checkNotNullParameter(view, "view");
        view.setOnCheckedChangeListener(ON_CHECKED_CHANGE_LISTENER);
    }

    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public ReactSwitchShadowNode createShadowNodeInstance() {
        return new ReactSwitchShadowNode();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public ReactSwitch createViewInstance(@NotNull ThemedReactContext context) {
        Intrinsics.checkNotNullParameter(context, "context");
        ReactSwitch reactSwitch = new ReactSwitch(context);
        reactSwitch.setShowText(false);
        return reactSwitch;
    }

    @Override // com.facebook.react.uimanager.BaseViewManager
    public void setBackgroundColor(@NotNull ReactSwitch view, int i10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setBackgroundColor(i10);
    }

    @Override // com.facebook.react.viewmanagers.AndroidSwitchManagerInterface
    @ReactProp(defaultBoolean = false, name = "disabled")
    public void setDisabled(@NotNull ReactSwitch view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setEnabled(!z10);
    }

    @Override // com.facebook.react.viewmanagers.AndroidSwitchManagerInterface
    @ReactProp(defaultBoolean = true, name = ViewProps.ENABLED)
    public void setEnabled(@NotNull ReactSwitch view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setEnabled(z10);
    }

    @Override // com.facebook.react.viewmanagers.AndroidSwitchManagerInterface
    public void setNativeValue(@NotNull ReactSwitch view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        setValueInternal(view, z10);
    }

    @Override // com.facebook.react.viewmanagers.AndroidSwitchManagerInterface
    @ReactProp(name = ViewProps.ON)
    public void setOn(@NotNull ReactSwitch view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        setValueInternal(view, z10);
    }

    @Override // com.facebook.react.viewmanagers.AndroidSwitchManagerInterface
    @ReactProp(customType = "Color", name = "thumbColor")
    public void setThumbColor(@NotNull ReactSwitch view, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setThumbColor(num);
    }

    @Override // com.facebook.react.viewmanagers.AndroidSwitchManagerInterface
    @ReactProp(customType = "Color", name = "thumbTintColor")
    public void setThumbTintColor(@NotNull ReactSwitch view, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        setThumbColor(view, num);
    }

    @Override // com.facebook.react.viewmanagers.AndroidSwitchManagerInterface
    @ReactProp(customType = "Color", name = "trackColorForFalse")
    public void setTrackColorForFalse(@NotNull ReactSwitch view, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setTrackColorForFalse(num);
    }

    @Override // com.facebook.react.viewmanagers.AndroidSwitchManagerInterface
    @ReactProp(customType = "Color", name = "trackColorForTrue")
    public void setTrackColorForTrue(@NotNull ReactSwitch view, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setTrackColorForTrue(num);
    }

    @Override // com.facebook.react.viewmanagers.AndroidSwitchManagerInterface
    @ReactProp(customType = "Color", name = "trackTintColor")
    public void setTrackTintColor(@NotNull ReactSwitch view, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setTrackColor(num);
    }

    @Override // com.facebook.react.viewmanagers.AndroidSwitchManagerInterface
    @ReactProp(name = "value")
    public void setValue(@NotNull ReactSwitch view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        setValueInternal(view, z10);
    }
}
