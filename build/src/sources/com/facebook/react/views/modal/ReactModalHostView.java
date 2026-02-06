package com.facebook.react.views.modal;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Context;
import android.content.DialogInterface;
import android.os.Build;
import android.util.DisplayMetrics;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.view.ViewStructure;
import android.view.Window;
import android.view.WindowInsets;
import android.view.accessibility.AccessibilityEvent;
import android.view.accessibility.AccessibilityNodeInfo;
import android.widget.FrameLayout;
import androidx.activity.ComponentDialog;
import androidx.activity.OnBackPressedCallback;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import androidx.core.view.w0;
import com.facebook.react.R;
import com.facebook.react.bridge.GuardedRunnable;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.common.annotations.VisibleForTesting;
import com.facebook.react.common.build.ReactBuildConfig;
import com.facebook.react.config.ReactFeatureFlags;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.DisplayMetricsHolder;
import com.facebook.react.uimanager.JSPointerDispatcher;
import com.facebook.react.uimanager.JSTouchDispatcher;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.RootView;
import com.facebook.react.uimanager.StateWrapper;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIManagerModule;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.uimanager.events.PointerEventHelper;
import com.facebook.react.views.common.ContextUtils;
import com.facebook.react.views.modal.ReactModalHostView;
import com.facebook.react.views.view.ReactViewGroup;
import com.facebook.react.views.view.WindowUtilKt;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000¤\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\u000e\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\b\u0006\b\u0007\u0018\u0000 s2\u00020\u00012\u00020\u0002:\u0003rstB\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0004¢\u0006\u0004\b\u0005\u0010\u0006J\u0010\u0010<\u001a\u00020=2\u0006\u0010>\u001a\u00020?H\u0016J0\u0010@\u001a\u00020=2\u0006\u0010A\u001a\u00020\r2\u0006\u0010B\u001a\u00020C2\u0006\u0010D\u001a\u00020C2\u0006\u0010E\u001a\u00020C2\u0006\u0010F\u001a\u00020CH\u0014J\u0010\u0010G\u001a\u00020=2\u0006\u0010H\u001a\u00020CH\u0016J\b\u0010I\u001a\u00020=H\u0014J\b\u0010J\u001a\u00020=H\u0014J\u001a\u0010K\u001a\u00020=2\b\u0010L\u001a\u0004\u0018\u00010M2\u0006\u0010N\u001a\u00020CH\u0016J\b\u0010O\u001a\u00020CH\u0016J\u0012\u0010P\u001a\u0004\u0018\u00010M2\u0006\u0010N\u001a\u00020CH\u0016J\u0012\u0010Q\u001a\u00020=2\b\u0010L\u001a\u0004\u0018\u00010MH\u0016J\u0010\u0010R\u001a\u00020=2\u0006\u0010N\u001a\u00020CH\u0016J \u0010S\u001a\u00020=2\u0016\u0010T\u001a\u0012\u0012\u0004\u0012\u00020M0Uj\b\u0012\u0004\u0012\u00020M`VH\u0016J\u0010\u0010W\u001a\u00020\r2\u0006\u0010X\u001a\u00020YH\u0016J\u0006\u0010Z\u001a\u00020=J\b\u0010[\u001a\u00020=H\u0002J\b\u0010\\\u001a\u00020=H\u0016J\b\u0010]\u001a\u00020=H\u0016J\b\u0010^\u001a\u00020=H\u0016J\n\u0010_\u001a\u0004\u0018\u00010`H\u0002J\u0012\u0010a\u001a\u00020\r2\b\u0010b\u001a\u0004\u0018\u00010`H\u0002J\u0006\u0010c\u001a\u00020=J\b\u0010g\u001a\u00020=H\u0002J\b\u0010h\u001a\u00020=H\u0002J*\u0010i\u001a\u00020=2\u0006\u0010j\u001a\u00020k2\b\u0010l\u001a\u0004\u0018\u00010m2\u000e\b\u0002\u0010n\u001a\b\u0012\u0004\u0012\u00020C0oH\u0002J\u0010\u0010p\u001a\u00020=2\b\u0010q\u001a\u0004\u0018\u00010$R$\u0010\t\u001a\u0004\u0018\u00010\b2\b\u0010\u0007\u001a\u0004\u0018\u00010\b8G@BX\u0086\u000e¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u001a\u0010\f\u001a\u00020\rX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u000e\u0010\u000f\"\u0004\b\u0010\u0010\u0011R\u001c\u0010\u0012\u001a\u0004\u0018\u00010\u0013X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0014\u0010\u0015\"\u0004\b\u0016\u0010\u0017R\u001c\u0010\u0018\u001a\u0004\u0018\u00010\u0019X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u001a\u0010\u001b\"\u0004\b\u001c\u0010\u001dR&\u0010\u001e\u001a\u00020\r2\u0006\u0010\u0007\u001a\u00020\r8F@FX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u001f\u0010\u000f\"\u0004\b \u0010\u0011R&\u0010!\u001a\u00020\r2\u0006\u0010\u0007\u001a\u00020\r8F@FX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\"\u0010\u000f\"\u0004\b#\u0010\u0011R(\u0010%\u001a\u0004\u0018\u00010$2\b\u0010\u0007\u001a\u0004\u0018\u00010$@FX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b&\u0010'\"\u0004\b(\u0010)R$\u0010*\u001a\u00020\r2\u0006\u0010\u0007\u001a\u00020\r@FX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b+\u0010\u000f\"\u0004\b,\u0010\u0011R(\u0010-\u001a\u0004\u0018\u00010.2\b\u0010-\u001a\u0004\u0018\u00010.8F@FX\u0086\u000e¢\u0006\f\u001a\u0004\b/\u00100\"\u0004\b1\u00102R(\u00103\u001a\u0004\u0018\u0001042\b\u00103\u001a\u0004\u0018\u0001048F@FX\u0086\u000e¢\u0006\f\u001a\u0004\b5\u00106\"\u0004\b7\u00108R\u000e\u00109\u001a\u00020:X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010;\u001a\u00020\rX\u0082\u000e¢\u0006\u0002\n\u0000R\u0014\u0010d\u001a\u00020M8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\be\u0010f¨\u0006u"}, d2 = {"Lcom/facebook/react/views/modal/ReactModalHostView;", "Landroid/view/ViewGroup;", "Lcom/facebook/react/bridge/LifecycleEventListener;", "context", "Lcom/facebook/react/uimanager/ThemedReactContext;", "<init>", "(Lcom/facebook/react/uimanager/ThemedReactContext;)V", "value", "Landroidx/activity/ComponentDialog;", "dialog", "getDialog", "()Landroidx/activity/ComponentDialog;", "transparent", "", "getTransparent", "()Z", "setTransparent", "(Z)V", "onShowListener", "Landroid/content/DialogInterface$OnShowListener;", "getOnShowListener", "()Landroid/content/DialogInterface$OnShowListener;", "setOnShowListener", "(Landroid/content/DialogInterface$OnShowListener;)V", "onRequestCloseListener", "Lcom/facebook/react/views/modal/ReactModalHostView$OnRequestCloseListener;", "getOnRequestCloseListener", "()Lcom/facebook/react/views/modal/ReactModalHostView$OnRequestCloseListener;", "setOnRequestCloseListener", "(Lcom/facebook/react/views/modal/ReactModalHostView$OnRequestCloseListener;)V", "statusBarTranslucent", "getStatusBarTranslucent", "setStatusBarTranslucent", "navigationBarTranslucent", "getNavigationBarTranslucent", "setNavigationBarTranslucent", "", "animationType", "getAnimationType", "()Ljava/lang/String;", "setAnimationType", "(Ljava/lang/String;)V", "hardwareAccelerated", "getHardwareAccelerated", "setHardwareAccelerated", "stateWrapper", "Lcom/facebook/react/uimanager/StateWrapper;", "getStateWrapper", "()Lcom/facebook/react/uimanager/StateWrapper;", "setStateWrapper", "(Lcom/facebook/react/uimanager/StateWrapper;)V", "eventDispatcher", "Lcom/facebook/react/uimanager/events/EventDispatcher;", "getEventDispatcher", "()Lcom/facebook/react/uimanager/events/EventDispatcher;", "setEventDispatcher", "(Lcom/facebook/react/uimanager/events/EventDispatcher;)V", "dialogRootViewGroup", "Lcom/facebook/react/views/modal/ReactModalHostView$DialogRootViewGroup;", "createNewDialog", "dispatchProvideStructure", "", "structure", "Landroid/view/ViewStructure;", "onLayout", "changed", "l", "", "t", "r", "b", "setId", StackTraceHelper.ID_KEY, "onAttachedToWindow", "onDetachedFromWindow", "addView", "child", "Landroid/view/View;", "index", "getChildCount", "getChildAt", "removeView", "removeViewAt", "addChildrenForAccessibility", "outChildren", "Ljava/util/ArrayList;", "Lkotlin/collections/ArrayList;", "dispatchPopulateAccessibilityEvent", "event", "Landroid/view/accessibility/AccessibilityEvent;", "onDropInstance", "dismiss", "onHostResume", "onHostPause", "onHostDestroy", "getCurrentActivity", "Landroid/app/Activity;", "isFlagSecureSet", "activity", "showOrUpdate", "contentView", "getContentView", "()Landroid/view/View;", "updateProperties", "updateSystemAppearance", "syncSystemBarsVisibility", "activityRootWindowInsets", "Landroidx/core/view/WindowInsetsCompat;", "dialogWindowInsetsController", "Landroidx/core/view/WindowInsetsControllerCompat;", "types", "", "setDialogRootViewGroupTestId", "testId", "OnRequestCloseListener", "Companion", "DialogRootViewGroup", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SuppressLint({"ViewConstructor"})
@sb.a
@SourceDebugExtension({"SMAP\nReactModalHostView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReactModalHostView.kt\ncom/facebook/react/views/modal/ReactModalHostView\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,657:1\n1#2:658\n1869#3,2:659\n*S KotlinDebug\n*F\n+ 1 ReactModalHostView.kt\ncom/facebook/react/views/modal/ReactModalHostView\n*L\n465#1:659,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactModalHostView extends ViewGroup implements LifecycleEventListener {
    @NotNull
    private static final Companion Companion = new Companion(null);
    @NotNull
    private static final String TAG = "ReactModalHost";
    private static int statusBarHeight;
    private String animationType;
    private boolean createNewDialog;
    private ComponentDialog dialog;
    @NotNull
    private final DialogRootViewGroup dialogRootViewGroup;
    private boolean hardwareAccelerated;
    private boolean navigationBarTranslucent;
    private OnRequestCloseListener onRequestCloseListener;
    private DialogInterface.OnShowListener onShowListener;
    private boolean statusBarTranslucent;
    private boolean transparent;

    @Metadata(d1 = {"\u00004\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0002\b\u0002\n\u0002\u0010\u0007\n\u0002\b\u0002\b\u0082\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000bH\u0002J\b\u0010\f\u001a\u00020\rH\u0003J\u0018\u0010\u000e\u001a\u00020\r2\u0006\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u0010H\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u0012"}, d2 = {"Lcom/facebook/react/views/modal/ReactModalHostView$Companion;", "", "<init>", "()V", "TAG", "", "statusBarHeight", "", "initStatusBarHeight", "", "reactContext", "Lcom/facebook/react/bridge/ReactContext;", "getScreenDisplayMetricsWithoutInsets", "", "encodeFloatsToLong", "width", "", "height", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final long encodeFloatsToLong(float f10, float f11) {
            return Float.floatToRawIntBits(f11) | (Float.floatToRawIntBits(f10) << 32);
        }

        /* JADX INFO: Access modifiers changed from: private */
        @sb.a
        public final long getScreenDisplayMetricsWithoutInsets() {
            DisplayMetrics screenDisplayMetrics = DisplayMetricsHolder.getScreenDisplayMetrics();
            PixelUtil pixelUtil = PixelUtil.INSTANCE;
            return encodeFloatsToLong(pixelUtil.pxToDp(screenDisplayMetrics.widthPixels), pixelUtil.pxToDp(screenDisplayMetrics.heightPixels - ReactModalHostView.statusBarHeight));
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final void initStatusBarHeight(ReactContext reactContext) {
            ReactModalHostView.statusBarHeight = DisplayMetricsHolder.INSTANCE.getStatusBarHeightPx$ReactAndroid_release(reactContext.getCurrentActivity());
        }

        private Companion() {
        }
    }

    @Metadata(d1 = {"\u0000l\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\u0003\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0005\u0018\u00002\u00020\u00012\u00020\u0002B\u0011\b\u0000\u0012\u0006\u0010\u0003\u001a\u00020\u0004¢\u0006\u0004\b\u0005\u0010\u0006J\u0010\u0010\u001e\u001a\u00020\u001f2\u0006\u0010 \u001a\u00020!H\u0016J(\u0010\"\u001a\u00020\u001f2\u0006\u0010#\u001a\u00020\u00142\u0006\u0010$\u001a\u00020\u00142\u0006\u0010%\u001a\u00020\u00142\u0006\u0010&\u001a\u00020\u0014H\u0014J\u0018\u0010'\u001a\u00020\u001f2\u0006\u0010(\u001a\u00020\u00142\u0006\u0010)\u001a\u00020\u0014H\u0007J\u0010\u0010*\u001a\u00020\u001f2\u0006\u0010+\u001a\u00020,H\u0016J\u0010\u0010-\u001a\u00020.2\u0006\u0010/\u001a\u000200H\u0016J\u0010\u00101\u001a\u00020.2\u0006\u0010/\u001a\u000200H\u0017J\u0010\u00102\u001a\u00020.2\u0006\u0010/\u001a\u000200H\u0016J\u0010\u00103\u001a\u00020.2\u0006\u0010/\u001a\u000200H\u0016J\u001a\u00104\u001a\u00020\u001f2\b\u00105\u001a\u0004\u0018\u0001062\u0006\u00107\u001a\u000200H\u0016J\u0018\u00108\u001a\u00020\u001f2\u0006\u00105\u001a\u0002062\u0006\u00107\u001a\u000200H\u0016J\u0010\u00109\u001a\u00020\u001f2\u0006\u0010:\u001a\u00020.H\u0016R\u001c\u0010\u0007\u001a\u0004\u0018\u00010\bX\u0080\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\t\u0010\n\"\u0004\b\u000b\u0010\fR\u001c\u0010\r\u001a\u0004\u0018\u00010\u000eX\u0080\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u000f\u0010\u0010\"\u0004\b\u0011\u0010\u0012R\u000e\u0010\u0013\u001a\u00020\u0014X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0015\u001a\u00020\u0014X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0016\u001a\u00020\u0017X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u0018\u001a\u0004\u0018\u00010\u0019X\u0082\u000e¢\u0006\u0002\n\u0000R\u0014\u0010\u001a\u001a\u00020\u001b8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\u001c\u0010\u001d¨\u0006;"}, d2 = {"Lcom/facebook/react/views/modal/ReactModalHostView$DialogRootViewGroup;", "Lcom/facebook/react/views/view/ReactViewGroup;", "Lcom/facebook/react/uimanager/RootView;", "context", "Landroid/content/Context;", "<init>", "(Landroid/content/Context;)V", "stateWrapper", "Lcom/facebook/react/uimanager/StateWrapper;", "getStateWrapper$ReactAndroid_release", "()Lcom/facebook/react/uimanager/StateWrapper;", "setStateWrapper$ReactAndroid_release", "(Lcom/facebook/react/uimanager/StateWrapper;)V", "eventDispatcher", "Lcom/facebook/react/uimanager/events/EventDispatcher;", "getEventDispatcher$ReactAndroid_release", "()Lcom/facebook/react/uimanager/events/EventDispatcher;", "setEventDispatcher$ReactAndroid_release", "(Lcom/facebook/react/uimanager/events/EventDispatcher;)V", "viewWidth", "", "viewHeight", "jSTouchDispatcher", "Lcom/facebook/react/uimanager/JSTouchDispatcher;", "jSPointerDispatcher", "Lcom/facebook/react/uimanager/JSPointerDispatcher;", "reactContext", "Lcom/facebook/react/uimanager/ThemedReactContext;", "getReactContext", "()Lcom/facebook/react/uimanager/ThemedReactContext;", "onInitializeAccessibilityNodeInfo", "", "info", "Landroid/view/accessibility/AccessibilityNodeInfo;", "onSizeChanged", "w", "h", "oldw", "oldh", "updateState", "width", "height", "handleException", "t", "", "onInterceptTouchEvent", "", "event", "Landroid/view/MotionEvent;", "onTouchEvent", "onInterceptHoverEvent", "onHoverEvent", "onChildStartedNativeGesture", "childView", "Landroid/view/View;", "ev", "onChildEndedNativeGesture", "requestDisallowInterceptTouchEvent", "disallowIntercept", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nReactModalHostView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReactModalHostView.kt\ncom/facebook/react/views/modal/ReactModalHostView$DialogRootViewGroup\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,657:1\n1#2:658\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class DialogRootViewGroup extends ReactViewGroup implements RootView {
        private EventDispatcher eventDispatcher;
        private JSPointerDispatcher jSPointerDispatcher;
        @NotNull
        private final JSTouchDispatcher jSTouchDispatcher;
        private StateWrapper stateWrapper;
        private int viewHeight;
        private int viewWidth;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public DialogRootViewGroup(@NotNull Context context) {
            super(context);
            Intrinsics.checkNotNullParameter(context, "context");
            this.jSTouchDispatcher = new JSTouchDispatcher(this);
            if (ReactFeatureFlags.dispatchPointerEvents) {
                this.jSPointerDispatcher = new JSPointerDispatcher(this);
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final ThemedReactContext getReactContext() {
            Context context = getContext();
            Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.uimanager.ThemedReactContext");
            return (ThemedReactContext) context;
        }

        public final EventDispatcher getEventDispatcher$ReactAndroid_release() {
            return this.eventDispatcher;
        }

        public final StateWrapper getStateWrapper$ReactAndroid_release() {
            return this.stateWrapper;
        }

        @Override // com.facebook.react.uimanager.RootView
        public void handleException(@NotNull Throwable t10) {
            Intrinsics.checkNotNullParameter(t10, "t");
            getReactContext().getReactApplicationContext().handleException(new RuntimeException(t10));
        }

        @Override // com.facebook.react.uimanager.RootView
        public void onChildEndedNativeGesture(@NotNull View childView, @NotNull MotionEvent ev2) {
            Intrinsics.checkNotNullParameter(childView, "childView");
            Intrinsics.checkNotNullParameter(ev2, "ev");
            EventDispatcher eventDispatcher = this.eventDispatcher;
            if (eventDispatcher != null) {
                this.jSTouchDispatcher.onChildEndedNativeGesture(ev2, eventDispatcher);
            }
            JSPointerDispatcher jSPointerDispatcher = this.jSPointerDispatcher;
            if (jSPointerDispatcher != null) {
                jSPointerDispatcher.onChildEndedNativeGesture();
            }
        }

        @Override // com.facebook.react.uimanager.RootView
        public void onChildStartedNativeGesture(View view, @NotNull MotionEvent ev2) {
            Intrinsics.checkNotNullParameter(ev2, "ev");
            EventDispatcher eventDispatcher = this.eventDispatcher;
            if (eventDispatcher != null) {
                this.jSTouchDispatcher.onChildStartedNativeGesture(ev2, eventDispatcher);
                JSPointerDispatcher jSPointerDispatcher = this.jSPointerDispatcher;
                if (jSPointerDispatcher != null) {
                    jSPointerDispatcher.onChildStartedNativeGesture(view, ev2, eventDispatcher);
                }
            }
        }

        @Override // com.facebook.react.views.view.ReactViewGroup, android.view.View
        public boolean onHoverEvent(@NotNull MotionEvent event) {
            JSPointerDispatcher jSPointerDispatcher;
            Intrinsics.checkNotNullParameter(event, "event");
            EventDispatcher eventDispatcher = this.eventDispatcher;
            if (eventDispatcher != null && (jSPointerDispatcher = this.jSPointerDispatcher) != null) {
                jSPointerDispatcher.handleMotionEvent(event, eventDispatcher, false);
            }
            return super.onHoverEvent(event);
        }

        @Override // android.view.View
        public void onInitializeAccessibilityNodeInfo(@NotNull AccessibilityNodeInfo info) {
            Intrinsics.checkNotNullParameter(info, "info");
            super.onInitializeAccessibilityNodeInfo(info);
            String str = (String) getTag(R.id.react_test_id);
            if (str != null) {
                info.setViewIdResourceName(str);
            }
        }

        @Override // android.view.ViewGroup
        public boolean onInterceptHoverEvent(@NotNull MotionEvent event) {
            JSPointerDispatcher jSPointerDispatcher;
            Intrinsics.checkNotNullParameter(event, "event");
            EventDispatcher eventDispatcher = this.eventDispatcher;
            if (eventDispatcher != null && (jSPointerDispatcher = this.jSPointerDispatcher) != null) {
                jSPointerDispatcher.handleMotionEvent(event, eventDispatcher, true);
            }
            return super.onHoverEvent(event);
        }

        @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup
        public boolean onInterceptTouchEvent(@NotNull MotionEvent event) {
            Intrinsics.checkNotNullParameter(event, "event");
            EventDispatcher eventDispatcher = this.eventDispatcher;
            if (eventDispatcher != null) {
                this.jSTouchDispatcher.handleTouchEvent(event, eventDispatcher, getReactContext());
                JSPointerDispatcher jSPointerDispatcher = this.jSPointerDispatcher;
                if (jSPointerDispatcher != null) {
                    jSPointerDispatcher.handleMotionEvent(event, eventDispatcher, true);
                }
            }
            return super.onInterceptTouchEvent(event);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.react.views.view.ReactViewGroup, android.view.View
        public void onSizeChanged(int i10, int i11, int i12, int i13) {
            super.onSizeChanged(i10, i11, i12, i13);
            this.viewWidth = i10;
            this.viewHeight = i11;
            updateState(i10, i11);
        }

        @Override // com.facebook.react.views.view.ReactViewGroup, android.view.View
        @SuppressLint({"ClickableViewAccessibility"})
        public boolean onTouchEvent(@NotNull MotionEvent event) {
            Intrinsics.checkNotNullParameter(event, "event");
            EventDispatcher eventDispatcher = this.eventDispatcher;
            if (eventDispatcher != null) {
                this.jSTouchDispatcher.handleTouchEvent(event, eventDispatcher, getReactContext());
                JSPointerDispatcher jSPointerDispatcher = this.jSPointerDispatcher;
                if (jSPointerDispatcher != null) {
                    jSPointerDispatcher.handleMotionEvent(event, eventDispatcher, false);
                }
            }
            super.onTouchEvent(event);
            return true;
        }

        @Override // android.view.ViewGroup, android.view.ViewParent
        public void requestDisallowInterceptTouchEvent(boolean z10) {
        }

        public final void setEventDispatcher$ReactAndroid_release(EventDispatcher eventDispatcher) {
            this.eventDispatcher = eventDispatcher;
        }

        public final void setStateWrapper$ReactAndroid_release(StateWrapper stateWrapper) {
            this.stateWrapper = stateWrapper;
        }

        public final void updateState(int i10, int i11) {
            PixelUtil pixelUtil = PixelUtil.INSTANCE;
            int i12 = this.viewWidth;
            if (i12 > 0) {
                i10 = i12;
            }
            float pxToDp = pixelUtil.pxToDp(i10);
            int i13 = this.viewHeight;
            if (i13 > 0) {
                i11 = i13;
            }
            float pxToDp2 = pixelUtil.pxToDp(i11);
            StateWrapper stateWrapper = this.stateWrapper;
            if (stateWrapper != null) {
                WritableNativeMap writableNativeMap = new WritableNativeMap();
                writableNativeMap.putDouble("screenWidth", pxToDp);
                writableNativeMap.putDouble("screenHeight", pxToDp2);
                stateWrapper.updateState(writableNativeMap);
            } else if (!ReactBuildConfig.UNSTABLE_ENABLE_MINIFY_LEGACY_ARCHITECTURE) {
                ThemedReactContext reactContext = getReactContext();
                final ThemedReactContext reactContext2 = getReactContext();
                reactContext.runOnNativeModulesQueueThread(new GuardedRunnable(reactContext2) { // from class: com.facebook.react.views.modal.ReactModalHostView$DialogRootViewGroup$updateState$1$1
                    @Override // com.facebook.react.bridge.GuardedRunnable
                    public void runGuarded() {
                        ThemedReactContext reactContext3;
                        int i14;
                        int i15;
                        reactContext3 = ReactModalHostView.DialogRootViewGroup.this.getReactContext();
                        UIManagerModule uIManagerModule = (UIManagerModule) reactContext3.getReactApplicationContext().getNativeModule(UIManagerModule.class);
                        if (uIManagerModule != null) {
                            int id2 = ReactModalHostView.DialogRootViewGroup.this.getId();
                            i14 = ReactModalHostView.DialogRootViewGroup.this.viewWidth;
                            i15 = ReactModalHostView.DialogRootViewGroup.this.viewHeight;
                            uIManagerModule.updateNodeSize(id2, i14, i15);
                        }
                    }
                });
            }
        }
    }

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\bæ\u0080\u0001\u0018\u00002\u00020\u0001J\u0012\u0010\u0002\u001a\u00020\u00032\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005H&ø\u0001\u0000\u0082\u0002\u0006\n\u0004\b!0\u0001¨\u0006\u0006À\u0006\u0001"}, d2 = {"Lcom/facebook/react/views/modal/ReactModalHostView$OnRequestCloseListener;", "", "onRequestClose", "", "dialog", "Landroid/content/DialogInterface;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface OnRequestCloseListener {
        void onRequestClose(DialogInterface dialogInterface);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ReactModalHostView(@NotNull ThemedReactContext context) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        Companion.initStatusBarHeight(context);
        this.dialogRootViewGroup = new DialogRootViewGroup(context);
    }

    private final void dismiss() {
        Activity activity;
        UiThreadUtil.assertOnUiThread();
        ComponentDialog componentDialog = this.dialog;
        if (componentDialog != null) {
            if (componentDialog.isShowing() && ((activity = (Activity) ContextUtils.findContextOfType(componentDialog.getContext(), Activity.class)) == null || !activity.isFinishing())) {
                componentDialog.dismiss();
            }
            ViewGroup viewGroup = null;
            this.dialog = null;
            this.createNewDialog = true;
            ViewParent parent = this.dialogRootViewGroup.getParent();
            if (parent instanceof ViewGroup) {
                viewGroup = (ViewGroup) parent;
            }
            if (viewGroup != null) {
                viewGroup.removeViewAt(0);
            }
        }
    }

    private final View getContentView() {
        FrameLayout frameLayout = new FrameLayout(getContext());
        frameLayout.addView(this.dialogRootViewGroup);
        if (!getStatusBarTranslucent()) {
            frameLayout.setFitsSystemWindows(true);
        }
        return frameLayout;
    }

    private final Activity getCurrentActivity() {
        Context context = getContext();
        Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.uimanager.ThemedReactContext");
        return ((ThemedReactContext) context).getCurrentActivity();
    }

    @sb.a
    private static final long getScreenDisplayMetricsWithoutInsets() {
        return Companion.getScreenDisplayMetricsWithoutInsets();
    }

    private final boolean isFlagSecureSet(Activity activity) {
        if (activity == null || (activity.getWindow().getAttributes().flags & 8192) == 0) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit showOrUpdate$lambda$3(ReactModalHostView reactModalHostView, ComponentDialog componentDialog) {
        OnRequestCloseListener onRequestCloseListener = reactModalHostView.onRequestCloseListener;
        if (onRequestCloseListener != null) {
            onRequestCloseListener.onRequestClose(componentDialog);
            return Unit.f32008a;
        }
        throw new IllegalStateException("onRequestClose callback must be set if back key is expected to close the modal");
    }

    private final void syncSystemBarsVisibility(WindowInsetsCompat windowInsetsCompat, WindowInsetsControllerCompat windowInsetsControllerCompat, List<Integer> list) {
        for (Number number : list) {
            int intValue = number.intValue();
            if (windowInsetsCompat.u(intValue)) {
                if (windowInsetsControllerCompat != null) {
                    windowInsetsControllerCompat.g(intValue);
                }
            } else if (windowInsetsControllerCompat != null) {
                windowInsetsControllerCompat.b(intValue);
            }
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    static /* synthetic */ void syncSystemBarsVisibility$default(ReactModalHostView reactModalHostView, WindowInsetsCompat windowInsetsCompat, WindowInsetsControllerCompat windowInsetsControllerCompat, List list, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            list = CollectionsKt.o(Integer.valueOf(WindowInsetsCompat.p.g()), Integer.valueOf(WindowInsetsCompat.p.f()));
        }
        reactModalHostView.syncSystemBarsVisibility(windowInsetsCompat, windowInsetsControllerCompat, list);
    }

    private final void updateProperties() {
        ComponentDialog componentDialog = this.dialog;
        if (componentDialog != null) {
            Window window = componentDialog.getWindow();
            if (window != null) {
                Activity currentActivity = getCurrentActivity();
                if (currentActivity != null && !currentActivity.isFinishing() && !currentActivity.isDestroyed()) {
                    try {
                        Window window2 = currentActivity.getWindow();
                        if (window2 != null) {
                            if ((window2.getAttributes().flags & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                                window.addFlags(IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET);
                            } else {
                                window.clearFlags(IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET);
                            }
                        }
                        if (getNavigationBarTranslucent()) {
                            WindowUtilKt.enableEdgeToEdge(window);
                        } else {
                            WindowUtilKt.disableEdgeToEdge(window);
                            WindowUtilKt.setStatusBarTranslucency(window, getStatusBarTranslucent());
                        }
                        if (this.transparent) {
                            window.clearFlags(2);
                            return;
                        }
                        window.setDimAmount(0.5f);
                        window.setFlags(2, 2);
                        return;
                    } catch (IllegalArgumentException e10) {
                        p8.a.o(TAG, "ReactModalHostView: error while setting window flags: ", e10.getMessage());
                        return;
                    }
                }
                return;
            }
            throw new IllegalStateException("dialog must have window when we call updateProperties");
        }
        throw new IllegalStateException("dialog must exist when we call updateProperties");
    }

    private final void updateSystemAppearance() {
        Activity currentActivity = getCurrentActivity();
        if (currentActivity != null) {
            ComponentDialog componentDialog = this.dialog;
            if (componentDialog != null) {
                Window window = componentDialog.getWindow();
                if (window != null) {
                    Window window2 = currentActivity.getWindow();
                    if (Build.VERSION.SDK_INT > 30) {
                        WindowInsetsControllerCompat windowInsetsControllerCompat = new WindowInsetsControllerCompat(window2, window2.getDecorView());
                        WindowInsetsControllerCompat windowInsetsControllerCompat2 = new WindowInsetsControllerCompat(window, window.getDecorView());
                        if (WindowUtilKt.isEdgeToEdgeFeatureFlagOn()) {
                            windowInsetsControllerCompat.f(2);
                            windowInsetsControllerCompat2.f(2);
                        }
                        windowInsetsControllerCompat2.e(windowInsetsControllerCompat.c());
                        WindowInsets rootWindowInsets = window2.getDecorView().getRootWindowInsets();
                        if (rootWindowInsets != null) {
                            WindowInsetsCompat C = WindowInsetsCompat.C(rootWindowInsets);
                            Intrinsics.checkNotNullExpressionValue(C, "toWindowInsetsCompat(...)");
                            syncSystemBarsVisibility$default(this, C, windowInsetsControllerCompat2, null, 4, null);
                            return;
                        }
                        return;
                    }
                    window.getDecorView().setSystemUiVisibility(window2.getDecorView().getSystemUiVisibility());
                    return;
                }
                throw new IllegalStateException("dialog must have window when we call updateProperties");
            }
            throw new IllegalStateException("dialog must exist when we call updateProperties");
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    public void addChildrenForAccessibility(@NotNull ArrayList<View> outChildren) {
        Intrinsics.checkNotNullParameter(outChildren, "outChildren");
    }

    @Override // android.view.ViewGroup
    public void addView(View view, int i10) {
        UiThreadUtil.assertOnUiThread();
        this.dialogRootViewGroup.addView(view, i10);
    }

    @Override // android.view.View
    public boolean dispatchPopulateAccessibilityEvent(@NotNull AccessibilityEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        return false;
    }

    @Override // android.view.ViewGroup, android.view.View
    public void dispatchProvideStructure(@NotNull ViewStructure structure) {
        Intrinsics.checkNotNullParameter(structure, "structure");
        this.dialogRootViewGroup.dispatchProvideStructure(structure);
    }

    public final String getAnimationType() {
        return this.animationType;
    }

    @Override // android.view.ViewGroup
    public View getChildAt(int i10) {
        return this.dialogRootViewGroup.getChildAt(i10);
    }

    @Override // android.view.ViewGroup
    public int getChildCount() {
        return this.dialogRootViewGroup.getChildCount();
    }

    @VisibleForTesting
    public final ComponentDialog getDialog() {
        return this.dialog;
    }

    public final EventDispatcher getEventDispatcher() {
        return this.dialogRootViewGroup.getEventDispatcher$ReactAndroid_release();
    }

    public final boolean getHardwareAccelerated() {
        return this.hardwareAccelerated;
    }

    public final boolean getNavigationBarTranslucent() {
        if (!this.navigationBarTranslucent && !WindowUtilKt.isEdgeToEdgeFeatureFlagOn()) {
            return false;
        }
        return true;
    }

    public final OnRequestCloseListener getOnRequestCloseListener() {
        return this.onRequestCloseListener;
    }

    public final DialogInterface.OnShowListener getOnShowListener() {
        return this.onShowListener;
    }

    public final StateWrapper getStateWrapper() {
        return this.dialogRootViewGroup.getStateWrapper$ReactAndroid_release();
    }

    public final boolean getStatusBarTranslucent() {
        if (!this.statusBarTranslucent && !WindowUtilKt.isEdgeToEdgeFeatureFlagOn()) {
            return false;
        }
        return true;
    }

    public final boolean getTransparent() {
        return this.transparent;
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        Context context = getContext();
        Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.uimanager.ThemedReactContext");
        ((ThemedReactContext) context).addLifecycleEventListener(this);
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        onDropInstance();
    }

    public final void onDropInstance() {
        Context context = getContext();
        Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.uimanager.ThemedReactContext");
        ((ThemedReactContext) context).removeLifecycleEventListener(this);
        dismiss();
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostDestroy() {
        onDropInstance();
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostPause() {
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostResume() {
        showOrUpdate();
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
    }

    @Override // android.view.ViewGroup, android.view.ViewManager
    public void removeView(View view) {
        UiThreadUtil.assertOnUiThread();
        if (view != null) {
            this.dialogRootViewGroup.removeView(view);
        }
    }

    @Override // android.view.ViewGroup
    public void removeViewAt(int i10) {
        UiThreadUtil.assertOnUiThread();
        this.dialogRootViewGroup.removeView(getChildAt(i10));
    }

    public final void setAnimationType(String str) {
        this.animationType = str;
        this.createNewDialog = true;
    }

    public final void setDialogRootViewGroupTestId(String str) {
        this.dialogRootViewGroup.setTag(R.id.react_test_id, str);
    }

    public final void setEventDispatcher(EventDispatcher eventDispatcher) {
        this.dialogRootViewGroup.setEventDispatcher$ReactAndroid_release(eventDispatcher);
    }

    public final void setHardwareAccelerated(boolean z10) {
        this.hardwareAccelerated = z10;
        this.createNewDialog = true;
    }

    @Override // android.view.View
    public void setId(int i10) {
        super.setId(i10);
        this.dialogRootViewGroup.setId(i10);
    }

    public final void setNavigationBarTranslucent(boolean z10) {
        boolean z11;
        this.navigationBarTranslucent = z10;
        if (!this.createNewDialog && WindowUtilKt.isEdgeToEdgeFeatureFlagOn()) {
            z11 = false;
        } else {
            z11 = true;
        }
        this.createNewDialog = z11;
    }

    public final void setOnRequestCloseListener(OnRequestCloseListener onRequestCloseListener) {
        this.onRequestCloseListener = onRequestCloseListener;
    }

    public final void setOnShowListener(DialogInterface.OnShowListener onShowListener) {
        this.onShowListener = onShowListener;
    }

    public final void setStateWrapper(StateWrapper stateWrapper) {
        this.dialogRootViewGroup.setStateWrapper$ReactAndroid_release(stateWrapper);
    }

    public final void setStatusBarTranslucent(boolean z10) {
        boolean z11;
        this.statusBarTranslucent = z10;
        if (!this.createNewDialog && WindowUtilKt.isEdgeToEdgeFeatureFlagOn()) {
            z11 = false;
        } else {
            z11 = true;
        }
        this.createNewDialog = z11;
    }

    public final void setTransparent(boolean z10) {
        this.transparent = z10;
    }

    public final void showOrUpdate() {
        int i10;
        Context context;
        Window window;
        UiThreadUtil.assertOnUiThread();
        if (this.createNewDialog) {
            dismiss();
            this.createNewDialog = false;
            String str = this.animationType;
            if (Intrinsics.areEqual(str, "fade")) {
                i10 = R.style.Theme_FullScreenDialogAnimatedFade;
            } else if (Intrinsics.areEqual(str, "slide")) {
                i10 = R.style.Theme_FullScreenDialogAnimatedSlide;
            } else {
                i10 = R.style.Theme_FullScreenDialog;
            }
            Activity currentActivity = getCurrentActivity();
            if (currentActivity != null) {
                context = currentActivity;
            } else {
                context = getContext();
            }
            Intrinsics.checkNotNull(context);
            final ComponentDialog componentDialog = new ComponentDialog(context, i10);
            this.dialog = componentDialog;
            Window window2 = componentDialog.getWindow();
            if (window2 != null) {
                window2.setFlags(8, 8);
                if (this.transparent && getStatusBarTranslucent() && (window = componentDialog.getWindow()) != null) {
                    window.addFlags(IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING);
                    window.setNavigationBarColor(androidx.core.content.a.c(getContext(), 17170445));
                    w0.c(window, false);
                }
                componentDialog.setContentView(getContentView());
                updateProperties();
                componentDialog.setOnShowListener(this.onShowListener);
                final Function0 function0 = new Function0() { // from class: com.facebook.react.views.modal.c
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit showOrUpdate$lambda$3;
                        showOrUpdate$lambda$3 = ReactModalHostView.showOrUpdate$lambda$3(ReactModalHostView.this, componentDialog);
                        return showOrUpdate$lambda$3;
                    }
                };
                componentDialog.getOnBackPressedDispatcher().h(componentDialog, new OnBackPressedCallback() { // from class: com.facebook.react.views.modal.ReactModalHostView$showOrUpdate$backPressedCallback$1
                    /* JADX INFO: Access modifiers changed from: package-private */
                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    {
                        super(true);
                    }

                    @Override // androidx.activity.OnBackPressedCallback
                    public void handleOnBackPressed() {
                        function0.invoke();
                    }
                });
                componentDialog.setOnKeyListener(new DialogInterface.OnKeyListener() { // from class: com.facebook.react.views.modal.ReactModalHostView$showOrUpdate$2
                    @Override // android.content.DialogInterface.OnKeyListener
                    public boolean onKey(DialogInterface dialog, int i11, KeyEvent event) {
                        Intrinsics.checkNotNullParameter(dialog, "dialog");
                        Intrinsics.checkNotNullParameter(event, "event");
                        if (event.getAction() == 1) {
                            if (i11 != 4 && i11 != 111) {
                                Context context2 = this.getContext();
                                Intrinsics.checkNotNull(context2, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
                                Activity currentActivity2 = ((ReactContext) context2).getCurrentActivity();
                                if (currentActivity2 != null) {
                                    return currentActivity2.onKeyUp(i11, event);
                                }
                                return false;
                            }
                            function0.invoke();
                            return true;
                        }
                        return false;
                    }
                });
                window2.setSoftInputMode(16);
                if (this.hardwareAccelerated) {
                    window2.addFlags(PointerEventHelper.X_FLAG_SUPPORTS_HOVER);
                }
                if (isFlagSecureSet(currentActivity)) {
                    window2.setFlags(8192, 8192);
                }
                if (currentActivity != null && !currentActivity.isFinishing()) {
                    componentDialog.show();
                    updateSystemAppearance();
                    window2.clearFlags(8);
                    return;
                }
                return;
            }
            throw new IllegalArgumentException("Required value was null.");
        }
        updateProperties();
    }
}
