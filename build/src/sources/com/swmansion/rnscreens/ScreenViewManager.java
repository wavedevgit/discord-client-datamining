package com.swmansion.rnscreens;

import android.view.View;
import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.ReactStylesDiffMap;
import com.facebook.react.uimanager.StateWrapper;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.RNSScreenManagerDelegate;
import com.facebook.react.viewmanagers.RNSScreenManagerInterface;
import com.swmansion.rnscreens.Screen;
import java.util.Map;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000z\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u0007\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u000b\n\u0002\b\u001e\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010%\n\u0002\b\u0003\b\u0017\u0018\u0000 T2\b\u0012\u0004\u0012\u00020\u00020\u00012\b\u0012\u0004\u0012\u00020\u00020\u0003:\u0001TB\u0007¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\b\u001a\u00020\tH\u0016J\u0010\u0010\n\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\fH\u0014J\u0018\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00022\u0006\u0010\u0010\u001a\u00020\u0011H\u0016J \u0010\u0012\u001a\u00020\u000e2\u0006\u0010\u0013\u001a\u00020\u00022\u0006\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u0017H\u0016J\u0018\u0010\u0018\u001a\u00020\u000e2\u0006\u0010\u0013\u001a\u00020\u00022\u0006\u0010\u0016\u001a\u00020\u0017H\u0016J\u0018\u0010\u0019\u001a\u00020\u000e2\u0006\u0010\u0013\u001a\u00020\u00022\u0006\u0010\u000f\u001a\u00020\u0015H\u0016J&\u0010\u001a\u001a\u0004\u0018\u00010\u001b2\u0006\u0010\u000f\u001a\u00020\u00022\b\u0010\u001c\u001a\u0004\u0018\u00010\u001d2\b\u0010\u001e\u001a\u0004\u0018\u00010\u001fH\u0016J\u0010\u0010 \u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u0002H\u0014J\u0018\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00022\u0006\u0010\u0010\u001a\u00020\u0017H\u0007J\u001a\u0010!\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00022\b\u0010\"\u001a\u0004\u0018\u00010\tH\u0017J\u001a\u0010#\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00022\b\u0010$\u001a\u0004\u0018\u00010\tH\u0017J\u0018\u0010%\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00022\u0006\u0010&\u001a\u00020'H\u0017J\u001a\u0010(\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00022\b\u0010$\u001a\u0004\u0018\u00010\tH\u0017J\u001a\u0010)\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00022\b\u0010*\u001a\u0004\u0018\u00010\tH\u0017J\u001a\u0010+\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00022\b\u0010,\u001a\u0004\u0018\u00010\tH\u0017J\u001f\u0010-\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00022\b\u0010.\u001a\u0004\u0018\u00010\u0017H\u0017¢\u0006\u0002\u0010/J\u001a\u00100\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00022\b\u00101\u001a\u0004\u0018\u00010\tH\u0017J\u0018\u00102\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00022\u0006\u00103\u001a\u00020'H\u0017J\u0018\u00104\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00022\u0006\u00105\u001a\u00020'H\u0017J\u001f\u00106\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00022\b\u00107\u001a\u0004\u0018\u00010\u0017H\u0017¢\u0006\u0002\u0010/J\u0018\u00108\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00022\u0006\u00109\u001a\u00020'H\u0017J\u0018\u0010:\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00022\u0006\u0010;\u001a\u00020'H\u0017J\u0018\u0010<\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00022\u0006\u0010=\u001a\u00020'H\u0017J\u001a\u0010>\u001a\u00020\u000e2\b\u0010\u000f\u001a\u0004\u0018\u00010\u00022\u0006\u0010?\u001a\u00020\u0017H\u0017J\u001a\u0010@\u001a\u00020\u000e2\b\u0010\u000f\u001a\u0004\u0018\u00010\u00022\u0006\u0010?\u001a\u00020'H\u0016J\u001a\u0010A\u001a\u00020\u000e2\b\u0010\u000f\u001a\u0004\u0018\u00010\u00022\u0006\u0010?\u001a\u00020'H\u0016J\u001a\u0010B\u001a\u00020\u000e2\b\u0010\u000f\u001a\u0004\u0018\u00010\u00022\u0006\u0010?\u001a\u00020\u0017H\u0016J\u001a\u0010C\u001a\u00020\u000e2\b\u0010\u000f\u001a\u0004\u0018\u00010\u00022\u0006\u0010?\u001a\u00020'H\u0016J\u001a\u0010D\u001a\u00020\u000e2\b\u0010\u000f\u001a\u0004\u0018\u00010\u00022\u0006\u0010?\u001a\u00020'H\u0016J\u001c\u0010E\u001a\u00020\u000e2\b\u0010\u000f\u001a\u0004\u0018\u00010\u00022\b\u0010?\u001a\u0004\u0018\u00010FH\u0016J\u001a\u0010G\u001a\u00020\u000e2\b\u0010\u000f\u001a\u0004\u0018\u00010\u00022\u0006\u0010?\u001a\u00020'H\u0016J\u001a\u0010H\u001a\u00020\u000e2\b\u0010\u000f\u001a\u0004\u0018\u00010\u00022\u0006\u0010?\u001a\u00020'H\u0016J\u001c\u0010I\u001a\u00020\u000e2\b\u0010\u000f\u001a\u0004\u0018\u00010\u00022\b\u0010?\u001a\u0004\u0018\u00010\tH\u0016J\u001a\u0010J\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00022\b\u0010?\u001a\u0004\u0018\u00010KH\u0017J\u0018\u0010L\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00022\u0006\u0010?\u001a\u00020\u0017H\u0017J\u0018\u0010M\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00022\u0006\u0010?\u001a\u00020'H\u0017J\u0018\u0010N\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00022\u0006\u0010?\u001a\u00020\u0011H\u0017J\u0018\u0010O\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00022\u0006\u0010?\u001a\u00020'H\u0017J\u0018\u0010P\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00022\u0006\u0010?\u001a\u00020\u0017H\u0017J\u0014\u0010Q\u001a\u000e\u0012\u0004\u0012\u00020\t\u0012\u0004\u0012\u00020\u001b0RH\u0016J\u000e\u0010S\u001a\b\u0012\u0004\u0012\u00020\u00020\u0007H\u0014R\u0014\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006U"}, d2 = {"Lcom/swmansion/rnscreens/ScreenViewManager;", "Lcom/facebook/react/uimanager/ViewGroupManager;", "Lcom/swmansion/rnscreens/Screen;", "Lcom/facebook/react/viewmanagers/RNSScreenManagerInterface;", "<init>", "()V", "delegate", "Lcom/facebook/react/uimanager/ViewManagerDelegate;", "getName", "", "createViewInstance", "reactContext", "Lcom/facebook/react/uimanager/ThemedReactContext;", "setActivityState", "", "view", "activityState", "", "addView", "parent", "child", "Landroid/view/View;", "index", "", "removeViewAt", "removeView", "updateState", "", "props", "Lcom/facebook/react/uimanager/ReactStylesDiffMap;", "stateWrapper", "Lcom/facebook/react/uimanager/StateWrapper;", "onAfterUpdateTransaction", "setStackPresentation", "presentation", "setStackAnimation", "animation", "setGestureEnabled", "gestureEnabled", "", "setReplaceAnimation", "setScreenOrientation", "screenOrientation", "setStatusBarAnimation", "statusBarAnimation", "setStatusBarColor", "statusBarColor", "(Lcom/swmansion/rnscreens/Screen;Ljava/lang/Integer;)V", "setStatusBarStyle", "statusBarStyle", "setStatusBarTranslucent", "statusBarTranslucent", "setStatusBarHidden", "statusBarHidden", "setNavigationBarColor", "navigationBarColor", "setNavigationBarTranslucent", "navigationBarTranslucent", "setNavigationBarHidden", "navigationBarHidden", "setNativeBackButtonDismissalEnabled", "nativeBackButtonDismissalEnabled", "setSheetElevation", "value", "setFullScreenSwipeEnabled", "setFullScreenSwipeShadowEnabled", "setTransitionDuration", "setHideKeyboardOnSwipe", "setCustomAnimationOnSwipe", "setGestureResponseDistance", "Lcom/facebook/react/bridge/ReadableMap;", "setHomeIndicatorHidden", "setPreventNativeDismiss", "setSwipeDirection", "setSheetAllowedDetents", "Lcom/facebook/react/bridge/ReadableArray;", "setSheetLargestUndimmedDetent", "setSheetGrabberVisible", "setSheetCornerRadius", "setSheetExpandsWhenScrolledToEdge", "setSheetInitialDetent", "getExportedCustomDirectEventTypeConstants", "", "getDelegate", "Companion", "react-native-screens_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@ReactModule(name = ScreenViewManager.REACT_CLASS)
@SourceDebugExtension({"SMAP\nScreenViewManager.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ScreenViewManager.kt\ncom/swmansion/rnscreens/ScreenViewManager\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,399:1\n1#2:400\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class ScreenViewManager extends ViewGroupManager<Screen> implements RNSScreenManagerInterface<Screen> {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final String REACT_CLASS = "RNSScreen";
    @NotNull
    private final ViewManagerDelegate<Screen> delegate;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    public ScreenViewManager() {
        super(null, 1, null);
        this.delegate = new RNSScreenManagerDelegate(this);
    }

    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    protected ViewManagerDelegate<Screen> getDelegate() {
        return this.delegate;
    }

    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    @NotNull
    public Map<String, Object> getExportedCustomDirectEventTypeConstants() {
        return kotlin.collections.o0.n(qr.v.a("topDismissed", MapBuilder.of("registrationName", "onDismissed")), qr.v.a("topWillAppear", MapBuilder.of("registrationName", "onWillAppear")), qr.v.a("topAppear", MapBuilder.of("registrationName", "onAppear")), qr.v.a("topWillDisappear", MapBuilder.of("registrationName", "onWillDisappear")), qr.v.a("topDisappear", MapBuilder.of("registrationName", "onDisappear")), qr.v.a("topHeaderHeightChange", MapBuilder.of("registrationName", "onHeaderHeightChange")), qr.v.a("topHeaderBackButtonClicked", MapBuilder.of("registrationName", "onHeaderBackButtonClicked")), qr.v.a("topTransitionProgress", MapBuilder.of("registrationName", "onTransitionProgress")), qr.v.a("topSheetDetentChanged", MapBuilder.of("registrationName", "onSheetDetentChanged")));
    }

    @Override // com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return REACT_CLASS;
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenManagerInterface
    public void setCustomAnimationOnSwipe(Screen screen, boolean z10) {
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenManagerInterface
    public void setFullScreenSwipeEnabled(Screen screen, boolean z10) {
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenManagerInterface
    public void setFullScreenSwipeShadowEnabled(Screen screen, boolean z10) {
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenManagerInterface
    public void setGestureResponseDistance(Screen screen, ReadableMap readableMap) {
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenManagerInterface
    public void setHideKeyboardOnSwipe(Screen screen, boolean z10) {
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenManagerInterface
    public void setHomeIndicatorHidden(Screen screen, boolean z10) {
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenManagerInterface
    public void setPreventNativeDismiss(Screen screen, boolean z10) {
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenManagerInterface
    public void setSwipeDirection(Screen screen, String str) {
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenManagerInterface
    public void setTransitionDuration(Screen screen, int i10) {
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public Screen createViewInstance(@NotNull ThemedReactContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        return new Screen(reactContext);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    public void onAfterUpdateTransaction(@NotNull Screen view) {
        Intrinsics.checkNotNullParameter(view, "view");
        super.onAfterUpdateTransaction((ScreenViewManager) view);
        view.onFinalizePropsUpdate$react_native_screens_release();
    }

    @Override // com.facebook.react.uimanager.ViewGroupManager
    public void removeView(@NotNull Screen parent, @NotNull View view) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        Intrinsics.checkNotNullParameter(view, "view");
        super.removeView((ScreenViewManager) parent, view);
        if (view instanceof ScreenFooter) {
            parent.setFooter(null);
        }
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenManagerInterface
    public void setActivityState(@NotNull Screen view, float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        setActivityState(view, (int) f10);
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenManagerInterface
    @ReactProp(defaultBoolean = true, name = "gestureEnabled")
    public void setGestureEnabled(@NotNull Screen view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setGestureEnabled(z10);
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenManagerInterface
    @ReactProp(name = "nativeBackButtonDismissalEnabled")
    public void setNativeBackButtonDismissalEnabled(@NotNull Screen view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setNativeBackButtonDismissalEnabled(z10);
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenManagerInterface
    @ReactProp(customType = "Color", name = "navigationBarColor")
    @qr.c
    public void setNavigationBarColor(@NotNull Screen view, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setNavigationBarColor(num);
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenManagerInterface
    @ReactProp(name = "navigationBarHidden")
    public void setNavigationBarHidden(@NotNull Screen view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setNavigationBarHidden(Boolean.valueOf(z10));
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenManagerInterface
    @ReactProp(name = "navigationBarTranslucent")
    @qr.c
    public void setNavigationBarTranslucent(@NotNull Screen view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setNavigationBarTranslucent(Boolean.valueOf(z10));
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenManagerInterface
    @ReactProp(name = "replaceAnimation")
    public void setReplaceAnimation(@NotNull Screen view, String str) {
        Screen.ReplaceAnimation replaceAnimation;
        Intrinsics.checkNotNullParameter(view, "view");
        if (str != null && !Intrinsics.areEqual(str, "pop")) {
            if (!Intrinsics.areEqual(str, "push")) {
                throw new JSApplicationIllegalArgumentException("Unknown replace animation type " + str);
            }
            replaceAnimation = Screen.ReplaceAnimation.f18148d;
        } else {
            replaceAnimation = Screen.ReplaceAnimation.f18149e;
        }
        view.setReplaceAnimation(replaceAnimation);
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenManagerInterface
    @ReactProp(name = "screenOrientation")
    public void setScreenOrientation(@NotNull Screen view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setScreenOrientation(str);
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenManagerInterface
    @ReactProp(name = "sheetAllowedDetents")
    public void setSheetAllowedDetents(@NotNull Screen view, final ReadableArray readableArray) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.getSheetDetents().clear();
        if (readableArray != null && readableArray.size() != 0) {
            kotlin.sequences.k.X(kotlin.sequences.k.R(CollectionsKt.b0(kotlin.ranges.a.f32102o.a(0, readableArray.size() - 1, 1)), new Function1() { // from class: com.swmansion.rnscreens.r0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    double d10;
                    d10 = ReadableArray.this.getDouble(((Integer) obj).intValue());
                    return Double.valueOf(d10);
                }
            }), view.getSheetDetents());
        } else {
            view.getSheetDetents().add(Double.valueOf(1.0d));
        }
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenManagerInterface
    @ReactProp(name = "sheetCornerRadius")
    public void setSheetCornerRadius(@NotNull Screen view, float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setSheetCornerRadius(f10);
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenManagerInterface
    @ReactProp(name = "sheetElevation")
    public void setSheetElevation(Screen screen, int i10) {
        if (screen != null) {
            screen.setSheetElevation(i10);
        }
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenManagerInterface
    @ReactProp(name = "sheetExpandsWhenScrolledToEdge")
    public void setSheetExpandsWhenScrolledToEdge(@NotNull Screen view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setSheetExpandsWhenScrolledToEdge(z10);
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenManagerInterface
    @ReactProp(name = "sheetGrabberVisible")
    public void setSheetGrabberVisible(@NotNull Screen view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setSheetGrabberVisible(z10);
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenManagerInterface
    @ReactProp(name = "sheetInitialDetent")
    public void setSheetInitialDetent(@NotNull Screen view, int i10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setSheetInitialDetentIndex(i10);
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenManagerInterface
    @ReactProp(name = "sheetLargestUndimmedDetent")
    public void setSheetLargestUndimmedDetent(@NotNull Screen view, int i10) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (-1 <= i10 && i10 < 3) {
            view.setSheetLargestUndimmedDetentIndex(i10);
            return;
        }
        throw new IllegalStateException("[RNScreens] sheetLargestUndimmedDetent on Android supports values between -1 and 2");
    }

    /* JADX WARN: Code restructure failed: missing block: B:11:0x0022, code lost:
        if (r4.equals("default") != false) goto L40;
     */
    /* JADX WARN: Code restructure failed: missing block: B:23:0x004e, code lost:
        if (r4.equals("flip") != false) goto L40;
     */
    /* JADX WARN: Code restructure failed: missing block: B:38:0x0083, code lost:
        if (r4.equals("simple_push") != false) goto L40;
     */
    @Override // com.facebook.react.viewmanagers.RNSScreenManagerInterface
    @com.facebook.react.uimanager.annotations.ReactProp(name = "stackAnimation")
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void setStackAnimation(@org.jetbrains.annotations.NotNull com.swmansion.rnscreens.Screen r3, java.lang.String r4) {
        /*
            r2 = this;
            java.lang.String r0 = "view"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r3, r0)
            if (r4 == 0) goto L9d
            int r0 = r4.hashCode()
            switch(r0) {
                case -1418955385: goto L7d;
                case -1198710326: goto L72;
                case -427095442: goto L67;
                case -349395819: goto L5c;
                case 3135100: goto L51;
                case 3145837: goto L48;
                case 3387192: goto L3d;
                case 182437661: goto L32;
                case 1500346553: goto L26;
                case 1544803905: goto L1c;
                case 1601504978: goto L10;
                default: goto Le;
            }
        Le:
            goto L86
        L10:
            java.lang.String r0 = "slide_from_bottom"
            boolean r0 = r4.equals(r0)
            if (r0 == 0) goto L86
            com.swmansion.rnscreens.Screen$StackAnimation r4 = com.swmansion.rnscreens.Screen.StackAnimation.f18155o
            goto L9f
        L1c:
            java.lang.String r0 = "default"
            boolean r0 = r4.equals(r0)
            if (r0 == 0) goto L86
            goto L9d
        L26:
            java.lang.String r0 = "ios_from_right"
            boolean r0 = r4.equals(r0)
            if (r0 == 0) goto L86
            com.swmansion.rnscreens.Screen$StackAnimation r4 = com.swmansion.rnscreens.Screen.StackAnimation.f18159s
            goto L9f
        L32:
            java.lang.String r0 = "fade_from_bottom"
            boolean r0 = r4.equals(r0)
            if (r0 == 0) goto L86
            com.swmansion.rnscreens.Screen$StackAnimation r4 = com.swmansion.rnscreens.Screen.StackAnimation.f18158r
            goto L9f
        L3d:
            java.lang.String r0 = "none"
            boolean r0 = r4.equals(r0)
            if (r0 == 0) goto L86
            com.swmansion.rnscreens.Screen$StackAnimation r4 = com.swmansion.rnscreens.Screen.StackAnimation.f18153e
            goto L9f
        L48:
            java.lang.String r0 = "flip"
            boolean r0 = r4.equals(r0)
            if (r0 == 0) goto L86
            goto L9d
        L51:
            java.lang.String r0 = "fade"
            boolean r0 = r4.equals(r0)
            if (r0 == 0) goto L86
            com.swmansion.rnscreens.Screen$StackAnimation r4 = com.swmansion.rnscreens.Screen.StackAnimation.f18154i
            goto L9f
        L5c:
            java.lang.String r0 = "slide_from_right"
            boolean r0 = r4.equals(r0)
            if (r0 == 0) goto L86
            com.swmansion.rnscreens.Screen$StackAnimation r4 = com.swmansion.rnscreens.Screen.StackAnimation.f18156p
            goto L9f
        L67:
            java.lang.String r0 = "slide_from_left"
            boolean r0 = r4.equals(r0)
            if (r0 == 0) goto L86
            com.swmansion.rnscreens.Screen$StackAnimation r4 = com.swmansion.rnscreens.Screen.StackAnimation.f18157q
            goto L9f
        L72:
            java.lang.String r0 = "ios_from_left"
            boolean r0 = r4.equals(r0)
            if (r0 == 0) goto L86
            com.swmansion.rnscreens.Screen$StackAnimation r4 = com.swmansion.rnscreens.Screen.StackAnimation.f18160t
            goto L9f
        L7d:
            java.lang.String r0 = "simple_push"
            boolean r0 = r4.equals(r0)
            if (r0 == 0) goto L86
            goto L9d
        L86:
            com.facebook.react.bridge.JSApplicationIllegalArgumentException r3 = new com.facebook.react.bridge.JSApplicationIllegalArgumentException
            java.lang.StringBuilder r0 = new java.lang.StringBuilder
            r0.<init>()
            java.lang.String r1 = "Unknown animation type "
            r0.append(r1)
            r0.append(r4)
            java.lang.String r4 = r0.toString()
            r3.<init>(r4)
            throw r3
        L9d:
            com.swmansion.rnscreens.Screen$StackAnimation r4 = com.swmansion.rnscreens.Screen.StackAnimation.f18152d
        L9f:
            r3.setStackAnimation(r4)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.swmansion.rnscreens.ScreenViewManager.setStackAnimation(com.swmansion.rnscreens.Screen, java.lang.String):void");
    }

    /* JADX WARN: Code restructure failed: missing block: B:11:0x0020, code lost:
        if (r4.equals("fullScreenModal") != false) goto L13;
     */
    /* JADX WARN: Code restructure failed: missing block: B:14:0x0029, code lost:
        if (r4.equals("containedTransparentModal") != false) goto L16;
     */
    /* JADX WARN: Code restructure failed: missing block: B:17:0x0032, code lost:
        if (r4.equals("pageSheet") != false) goto L13;
     */
    /* JADX WARN: Code restructure failed: missing block: B:20:0x003b, code lost:
        if (r4.equals("containedModal") != false) goto L13;
     */
    /* JADX WARN: Code restructure failed: missing block: B:23:0x0044, code lost:
        if (r4.equals("modal") != false) goto L13;
     */
    /* JADX WARN: Code restructure failed: missing block: B:24:0x0046, code lost:
        r4 = com.swmansion.rnscreens.Screen.StackPresentation.f18164e;
     */
    /* JADX WARN: Code restructure failed: missing block: B:29:0x005a, code lost:
        if (r4.equals("transparentModal") != false) goto L16;
     */
    /* JADX WARN: Code restructure failed: missing block: B:30:0x005c, code lost:
        r4 = com.swmansion.rnscreens.Screen.StackPresentation.f18165i;
     */
    @Override // com.facebook.react.viewmanagers.RNSScreenManagerInterface
    @com.facebook.react.uimanager.annotations.ReactProp(name = "stackPresentation")
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void setStackPresentation(@org.jetbrains.annotations.NotNull com.swmansion.rnscreens.Screen r3, java.lang.String r4) {
        /*
            r2 = this;
            java.lang.String r0 = "view"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r3, r0)
            if (r4 == 0) goto L62
            int r0 = r4.hashCode()
            switch(r0) {
                case -76271493: goto L54;
                case 3452698: goto L49;
                case 104069805: goto L3e;
                case 438078970: goto L35;
                case 872434704: goto L2c;
                case 955284238: goto L23;
                case 1171936146: goto L1a;
                case 1798290171: goto Lf;
                default: goto Le;
            }
        Le:
            goto L62
        Lf:
            java.lang.String r0 = "formSheet"
            boolean r0 = r4.equals(r0)
            if (r0 == 0) goto L62
            com.swmansion.rnscreens.Screen$StackPresentation r4 = com.swmansion.rnscreens.Screen.StackPresentation.f18166o
            goto L5e
        L1a:
            java.lang.String r0 = "fullScreenModal"
            boolean r0 = r4.equals(r0)
            if (r0 == 0) goto L62
            goto L46
        L23:
            java.lang.String r0 = "containedTransparentModal"
            boolean r0 = r4.equals(r0)
            if (r0 == 0) goto L62
            goto L5c
        L2c:
            java.lang.String r0 = "pageSheet"
            boolean r0 = r4.equals(r0)
            if (r0 == 0) goto L62
            goto L46
        L35:
            java.lang.String r0 = "containedModal"
            boolean r0 = r4.equals(r0)
            if (r0 == 0) goto L62
            goto L46
        L3e:
            java.lang.String r0 = "modal"
            boolean r0 = r4.equals(r0)
            if (r0 == 0) goto L62
        L46:
            com.swmansion.rnscreens.Screen$StackPresentation r4 = com.swmansion.rnscreens.Screen.StackPresentation.f18164e
            goto L5e
        L49:
            java.lang.String r0 = "push"
            boolean r0 = r4.equals(r0)
            if (r0 == 0) goto L62
            com.swmansion.rnscreens.Screen$StackPresentation r4 = com.swmansion.rnscreens.Screen.StackPresentation.f18163d
            goto L5e
        L54:
            java.lang.String r0 = "transparentModal"
            boolean r0 = r4.equals(r0)
            if (r0 == 0) goto L62
        L5c:
            com.swmansion.rnscreens.Screen$StackPresentation r4 = com.swmansion.rnscreens.Screen.StackPresentation.f18165i
        L5e:
            r3.setStackPresentation(r4)
            return
        L62:
            com.facebook.react.bridge.JSApplicationIllegalArgumentException r3 = new com.facebook.react.bridge.JSApplicationIllegalArgumentException
            java.lang.StringBuilder r0 = new java.lang.StringBuilder
            r0.<init>()
            java.lang.String r1 = "Unknown presentation type "
            r0.append(r1)
            r0.append(r4)
            java.lang.String r4 = r0.toString()
            r3.<init>(r4)
            throw r3
        */
        throw new UnsupportedOperationException("Method not decompiled: com.swmansion.rnscreens.ScreenViewManager.setStackPresentation(com.swmansion.rnscreens.Screen, java.lang.String):void");
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenManagerInterface
    @ReactProp(name = "statusBarAnimation")
    public void setStatusBarAnimation(@NotNull Screen view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setStatusBarAnimated(Boolean.valueOf((str == null || Intrinsics.areEqual(ViewProps.NONE, str)) ? false : true));
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenManagerInterface
    @ReactProp(customType = "Color", name = "statusBarColor")
    @qr.c
    public void setStatusBarColor(@NotNull Screen view, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setStatusBarColor(num);
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenManagerInterface
    @ReactProp(name = "statusBarHidden")
    public void setStatusBarHidden(@NotNull Screen view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setStatusBarHidden(Boolean.valueOf(z10));
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenManagerInterface
    @ReactProp(name = "statusBarStyle")
    public void setStatusBarStyle(@NotNull Screen view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setStatusBarStyle(str);
    }

    @Override // com.facebook.react.viewmanagers.RNSScreenManagerInterface
    @ReactProp(name = "statusBarTranslucent")
    @qr.c
    public void setStatusBarTranslucent(@NotNull Screen view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setStatusBarTranslucent(Boolean.valueOf(z10));
    }

    @Override // com.facebook.react.uimanager.ViewManager
    public Object updateState(@NotNull Screen view, ReactStylesDiffMap reactStylesDiffMap, StateWrapper stateWrapper) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setStateWrapper(stateWrapper);
        return super.updateState((ScreenViewManager) view, reactStylesDiffMap, stateWrapper);
    }

    @Override // com.facebook.react.uimanager.ViewGroupManager
    public void addView(@NotNull Screen parent, @NotNull View child, int i10) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        Intrinsics.checkNotNullParameter(child, "child");
        if (child instanceof ScreenContentWrapper) {
            parent.registerLayoutCallbackForWrapper((ScreenContentWrapper) child);
        } else if (child instanceof ScreenFooter) {
            parent.setFooter((ScreenFooter) child);
        }
        super.addView((ScreenViewManager) parent, child, i10);
    }

    @Override // com.facebook.react.uimanager.ViewGroupManager
    public void removeViewAt(@NotNull Screen parent, int i10) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        if (parent.getChildAt(i10) instanceof ScreenFooter) {
            parent.setFooter(null);
        }
        super.removeViewAt((ScreenViewManager) parent, i10);
    }

    @ReactProp(name = "activityState")
    public final void setActivityState(@NotNull Screen view, int i10) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (i10 == -1) {
            return;
        }
        if (i10 == 0) {
            view.setActivityState(Screen.ActivityState.f18143d);
        } else if (i10 == 1) {
            view.setActivityState(Screen.ActivityState.f18144e);
        } else if (i10 != 2) {
        } else {
            view.setActivityState(Screen.ActivityState.f18145i);
        }
    }
}
