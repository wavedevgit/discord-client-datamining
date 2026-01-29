package com.facebook.react.views.scroll;

import android.animation.Animator;
import android.animation.ValueAnimator;
import android.content.Context;
import android.graphics.Point;
import android.view.View;
import android.view.ViewGroup;
import android.widget.OverScroller;
import androidx.recyclerview.widget.h;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.UIManager;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.fabric.FabricUIManager;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ReactClippingViewGroup;
import com.facebook.react.uimanager.StateWrapper;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.common.ViewUtil;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.views.scroll.ReactScrollViewHelper;
import java.lang.ref.WeakReference;
import java.util.Iterator;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.function.Predicate;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.collections.i;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u008c\u0001\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\t\n\u0002\b\u0004\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0007\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u000f\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0010\bÆ\u0002\u0018\u00002\u00020\u0001:\tcdefghijkB\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J?\u0010\u001e\u001a\u00020\u001f\"\u000e\b\u0000\u0010 *\u0004\u0018\u00010!*\u00020\"2\u0006\u0010#\u001a\u0002H 2\u0006\u0010$\u001a\u00020%2\u0006\u0010&\u001a\u00020%2\b\b\u0002\u0010'\u001a\u00020\bH\u0007¢\u0006\u0002\u0010(J%\u0010)\u001a\u00020\u001f\"\u000e\b\u0000\u0010 *\u0004\u0018\u00010!*\u00020\"2\u0006\u0010#\u001a\u0002H H\u0007¢\u0006\u0002\u0010*J5\u0010+\u001a\u00020\u001f\"\u000e\b\u0000\u0010 *\u0004\u0018\u00010!*\u00020\"2\u0006\u0010#\u001a\u0002H 2\u0006\u0010$\u001a\u00020%2\u0006\u0010&\u001a\u00020%H\u0007¢\u0006\u0002\u0010,J5\u0010-\u001a\u00020\u001f\"\u000e\b\u0000\u0010 *\u0004\u0018\u00010!*\u00020\"2\u0006\u0010#\u001a\u0002H 2\u0006\u0010$\u001a\u00020\u00122\u0006\u0010&\u001a\u00020\u0012H\u0007¢\u0006\u0002\u0010.J%\u0010/\u001a\u00020\u001f\"\u000e\b\u0000\u0010 *\u0004\u0018\u00010!*\u00020\"2\u0006\u0010#\u001a\u0002H H\u0007¢\u0006\u0002\u0010*J-\u0010\u001e\u001a\u00020\u001f\"\u000e\b\u0000\u0010 *\u0004\u0018\u00010!*\u00020\"2\u0006\u0010#\u001a\u0002H 2\u0006\u00100\u001a\u000201H\u0002¢\u0006\u0002\u00102JG\u0010\u001e\u001a\u00020\u001f\"\u000e\b\u0000\u0010 *\u0004\u0018\u00010!*\u00020\"2\u0006\u0010#\u001a\u0002H 2\u0006\u00100\u001a\u0002012\u0006\u0010$\u001a\u00020%2\u0006\u0010&\u001a\u00020%2\b\b\u0002\u0010'\u001a\u00020\bH\u0002¢\u0006\u0002\u00103J\u0010\u00104\u001a\u00020\u001f2\u0006\u0010#\u001a\u00020\"H\u0007J\u0010\u00105\u001a\u00020\u001f2\u0006\u0010#\u001a\u00020\"H\u0007J\u0012\u00106\u001a\u00020\u00122\b\u00107\u001a\u0004\u0018\u00010\u0005H\u0007J\u0012\u00108\u001a\u00020\u00122\b\u00109\u001a\u0004\u0018\u00010\u0005H\u0007J\u0012\u0010:\u001a\u00020\u00122\b\u0010;\u001a\u0004\u0018\u00010<H\u0007J\u0010\u0010=\u001a\u00020\u001f2\u0006\u0010>\u001a\u00020\u0019H\u0007J\u0010\u0010?\u001a\u00020\u001f2\u0006\u0010>\u001a\u00020\u0019H\u0007J\u0010\u0010@\u001a\u00020\u001f2\u0006\u0010>\u001a\u00020\u001bH\u0007J\u0010\u0010A\u001a\u00020\u001f2\u0006\u0010>\u001a\u00020\u001bH\u0007JA\u0010B\u001a\u00020\u001f\"\u001a\b\u0000\u0010 *\u0004\u0018\u00010C*\u0004\u0018\u00010D*\u0004\u0018\u00010E*\u00020\"2\u0006\u0010#\u001a\u0002H 2\u0006\u0010F\u001a\u00020\u00122\u0006\u0010G\u001a\u00020\u0012H\u0007¢\u0006\u0002\u0010.JC\u0010H\u001a\u00020\u0012\"\u0014\b\u0000\u0010 *\u0004\u0018\u00010C*\u0004\u0018\u00010D*\u00020\"2\u0006\u0010#\u001a\u0002H 2\u0006\u0010I\u001a\u00020\u00122\u0006\u0010J\u001a\u00020\u00122\u0006\u0010K\u001a\u00020\u0012H\u0007¢\u0006\u0002\u0010LJ1\u0010M\u001a\u00020\u001f\"\u001a\b\u0000\u0010 *\u0004\u0018\u00010C*\u0004\u0018\u00010D*\u0004\u0018\u00010E*\u00020\"2\u0006\u0010#\u001a\u0002H H\u0007¢\u0006\u0002\u0010*J9\u0010M\u001a\u00020\u001f\"\u0014\b\u0000\u0010 *\u0004\u0018\u00010D*\u0004\u0018\u00010E*\u00020\"2\u0006\u0010#\u001a\u0002H 2\u0006\u0010N\u001a\u00020\u00122\u0006\u0010O\u001a\u00020\u0012¢\u0006\u0002\u0010.J+\u0010P\u001a\u00020\u001f\"\u0014\b\u0000\u0010 *\u0004\u0018\u00010D*\u0004\u0018\u00010E*\u00020\"2\u0006\u0010#\u001a\u0002H H\u0007¢\u0006\u0002\u0010*JQ\u0010Q\u001a\u00020\u001f\" \b\u0000\u0010 *\u0004\u0018\u00010C*\u0004\u0018\u00010!*\u0004\u0018\u00010D*\u0004\u0018\u00010E*\u00020\"2\u0006\u0010#\u001a\u0002H 2\u0006\u0010$\u001a\u00020%2\u0006\u0010&\u001a\u00020%2\b\b\u0002\u0010'\u001a\u00020\bH\u0007¢\u0006\u0002\u0010(J/\u0010R\u001a\u00020\u001f\"\u001a\b\u0000\u0010 *\u0004\u0018\u00010C*\u0004\u0018\u00010D*\u0004\u0018\u00010E*\u00020\"2\u0006\u0010#\u001a\u0002H ¢\u0006\u0002\u0010*J+\u0010S\u001a\u00020\u001f\"\u0014\b\u0000\u0010 *\u0004\u0018\u00010C*\u0004\u0018\u00010!*\u00020\"2\u0006\u0010#\u001a\u0002H H\u0007¢\u0006\u0002\u0010*JK\u0010T\u001a\u00020U\"\u0014\b\u0000\u0010 *\u0004\u0018\u00010C*\u0004\u0018\u00010D*\u00020\"2\u0006\u0010#\u001a\u0002H 2\u0006\u0010V\u001a\u00020\u00122\u0006\u0010W\u001a\u00020\u00122\u0006\u0010X\u001a\u00020\u00122\u0006\u0010Y\u001a\u00020\u0012H\u0007¢\u0006\u0002\u0010ZJ\"\u0010[\u001a\u0004\u0018\u00010\\2\u0006\u0010]\u001a\u00020\"2\u0006\u0010^\u001a\u00020\\2\u0006\u0010_\u001a\u00020\u0012H\u0007J \u0010`\u001a\u00020\u00122\u0006\u0010_\u001a\u00020\u00122\u0006\u0010a\u001a\u00020\b2\u0006\u0010b\u001a\u00020\u0012H\u0007R\u0016\u0010\u0004\u001a\n \u0006*\u0004\u0018\u00010\u00050\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\bX\u0082D¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u000f\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0010\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0011\u001a\u00020\u0012X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0013\u001a\u00020\u0012X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0014\u001a\u00020\u0012X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0015\u001a\u00020\u0012X\u0086T¢\u0006\u0002\n\u0000R\u001a\u0010\u0016\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00190\u00180\u0017X\u0082\u0004¢\u0006\u0002\n\u0000R\u001a\u0010\u001a\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u001b0\u00180\u0017X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u001c\u001a\u00020\u0012X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u001d\u001a\u00020\bX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006l"}, d2 = {"Lcom/facebook/react/views/scroll/ReactScrollViewHelper;", "", "<init>", "()V", "TAG", "", "kotlin.jvm.PlatformType", "DEBUG_MODE", "", "CONTENT_OFFSET_LEFT", "CONTENT_OFFSET_TOP", "SCROLL_AWAY_PADDING_TOP", "MOMENTUM_DELAY", "", "OVER_SCROLL_ALWAYS", "AUTO", "OVER_SCROLL_NEVER", "SNAP_ALIGNMENT_DISABLED", "", "SNAP_ALIGNMENT_START", "SNAP_ALIGNMENT_CENTER", "SNAP_ALIGNMENT_END", "scrollListeners", "Ljava/util/concurrent/CopyOnWriteArrayList;", "Ljava/lang/ref/WeakReference;", "Lcom/facebook/react/views/scroll/ReactScrollViewHelper$ScrollListener;", "layoutChangeListeners", "Lcom/facebook/react/views/scroll/ReactScrollViewHelper$LayoutChangeListener;", "SMOOTH_SCROLL_DURATION", "smoothScrollDurationInitialized", "emitScrollEvent", "", "T", "Lcom/facebook/react/views/scroll/ReactScrollViewHelper$HasScrollEventThrottle;", "Landroid/view/ViewGroup;", "scrollView", "xVelocity", "", "yVelocity", "isDrawing", "(Landroid/view/ViewGroup;FFZ)V", "emitScrollBeginDragEvent", "(Landroid/view/ViewGroup;)V", "emitScrollEndDragEvent", "(Landroid/view/ViewGroup;FF)V", "emitScrollMomentumBeginEvent", "(Landroid/view/ViewGroup;II)V", "emitScrollMomentumEndEvent", "scrollEventType", "Lcom/facebook/react/views/scroll/ScrollEventType;", "(Landroid/view/ViewGroup;Lcom/facebook/react/views/scroll/ScrollEventType;)V", "(Landroid/view/ViewGroup;Lcom/facebook/react/views/scroll/ScrollEventType;FFZ)V", "emitLayoutEvent", "emitLayoutChangeEvent", "parseOverScrollMode", "jsOverScrollMode", "parseSnapToAlignment", "alignment", "getDefaultScrollAnimationDuration", "context", "Landroid/content/Context;", "addScrollListener", "listener", "removeScrollListener", "addLayoutChangeListener", "removeLayoutChangeListener", "smoothScrollTo", "Lcom/facebook/react/views/scroll/ReactScrollViewHelper$HasFlingAnimator;", "Lcom/facebook/react/views/scroll/ReactScrollViewHelper$HasScrollState;", "Lcom/facebook/react/views/scroll/ReactScrollViewHelper$HasStateWrapper;", "x", "y", "getNextFlingStartValue", "currentValue", "postAnimationValue", "velocity", "(Landroid/view/ViewGroup;III)I", "updateFabricScrollState", "scrollX", "scrollY", "forceUpdateState", "updateStateOnScrollChanged", "registerFlingAnimator", "dispatchMomentumEndOnAnimationEnd", "predictFinalScrollPosition", "Landroid/graphics/Point;", "velocityX", "velocityY", "maximumOffsetX", "maximumOffsetY", "(Landroid/view/ViewGroup;IIII)Landroid/graphics/Point;", "findNextFocusableView", "Landroid/view/View;", "host", "focused", "direction", "resolveAbsoluteDirection", "horizontal", ViewProps.LAYOUT_DIRECTION, "ScrollListener", "LayoutChangeListener", "HasStateWrapper", "OverScrollerDurationGetter", "ReactScrollViewScrollState", "HasScrollState", "HasFlingAnimator", "HasScrollEventThrottle", "HasSmoothScroll", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactScrollViewHelper {
    @NotNull
    public static final String AUTO = "auto";
    @NotNull
    private static final String CONTENT_OFFSET_LEFT = "contentOffsetLeft";
    @NotNull
    private static final String CONTENT_OFFSET_TOP = "contentOffsetTop";
    private static final boolean DEBUG_MODE = false;
    public static final long MOMENTUM_DELAY = 20;
    @NotNull
    public static final String OVER_SCROLL_ALWAYS = "always";
    @NotNull
    public static final String OVER_SCROLL_NEVER = "never";
    @NotNull
    private static final String SCROLL_AWAY_PADDING_TOP = "scrollAwayPaddingTop";
    public static final int SNAP_ALIGNMENT_CENTER = 2;
    public static final int SNAP_ALIGNMENT_DISABLED = 0;
    public static final int SNAP_ALIGNMENT_END = 3;
    public static final int SNAP_ALIGNMENT_START = 1;
    private static boolean smoothScrollDurationInitialized;
    @NotNull
    public static final ReactScrollViewHelper INSTANCE = new ReactScrollViewHelper();
    private static final String TAG = ReactScrollView.class.getSimpleName();
    @NotNull
    private static final CopyOnWriteArrayList<WeakReference<ScrollListener>> scrollListeners = new CopyOnWriteArrayList<>();
    @NotNull
    private static final CopyOnWriteArrayList<WeakReference<LayoutChangeListener>> layoutChangeListeners = new CopyOnWriteArrayList<>();
    private static int SMOOTH_SCROLL_DURATION = h.DEFAULT_SWIPE_ANIMATION_DURATION;

    @Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\bf\u0018\u00002\u00020\u0001J\u0018\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0005H&J\b\u0010\u0007\u001a\u00020\bH&J\u0010\u0010\t\u001a\u00020\u00052\u0006\u0010\n\u001a\u00020\u0005H&ø\u0001\u0000\u0082\u0002\u0006\n\u0004\b!0\u0001¨\u0006\u000bÀ\u0006\u0001"}, d2 = {"Lcom/facebook/react/views/scroll/ReactScrollViewHelper$HasFlingAnimator;", "", "startFlingAnimator", "", ViewProps.START, "", ViewProps.END, "getFlingAnimator", "Landroid/animation/ValueAnimator;", "getFlingExtrapolatedDistance", "velocity", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface HasFlingAnimator {
        @NotNull
        ValueAnimator getFlingAnimator();

        int getFlingExtrapolatedDistance(int i10);

        void startFlingAnimator(int i10, int i11);
    }

    @Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0010\t\n\u0002\b\u0005\bf\u0018\u00002\u00020\u0001R\u0018\u0010\u0002\u001a\u00020\u0003X¦\u000e¢\u0006\f\u001a\u0004\b\u0004\u0010\u0005\"\u0004\b\u0006\u0010\u0007R\u0018\u0010\b\u001a\u00020\tX¦\u000e¢\u0006\f\u001a\u0004\b\n\u0010\u000b\"\u0004\b\f\u0010\rø\u0001\u0000\u0082\u0002\u0006\n\u0004\b!0\u0001¨\u0006\u000eÀ\u0006\u0001"}, d2 = {"Lcom/facebook/react/views/scroll/ReactScrollViewHelper$HasScrollEventThrottle;", "", "scrollEventThrottle", "", "getScrollEventThrottle", "()I", "setScrollEventThrottle", "(I)V", "lastScrollDispatchTime", "", "getLastScrollDispatchTime", "()J", "setLastScrollDispatchTime", "(J)V", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface HasScrollEventThrottle {
        long getLastScrollDispatchTime();

        int getScrollEventThrottle();

        void setLastScrollDispatchTime(long j10);

        void setScrollEventThrottle(int i10);
    }

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\bf\u0018\u00002\u00020\u0001R\u0012\u0010\u0002\u001a\u00020\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0004\u0010\u0005ø\u0001\u0000\u0082\u0002\u0006\n\u0004\b!0\u0001¨\u0006\u0006À\u0006\u0001"}, d2 = {"Lcom/facebook/react/views/scroll/ReactScrollViewHelper$HasScrollState;", "", "reactScrollViewScrollState", "Lcom/facebook/react/views/scroll/ReactScrollViewHelper$ReactScrollViewScrollState;", "getReactScrollViewScrollState", "()Lcom/facebook/react/views/scroll/ReactScrollViewHelper$ReactScrollViewScrollState;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface HasScrollState {
        @NotNull
        ReactScrollViewScrollState getReactScrollViewScrollState();
    }

    @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\bf\u0018\u00002\u00020\u0001J\u0018\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0005H&J\u0018\u0010\u0007\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0005H&ø\u0001\u0000\u0082\u0002\u0006\n\u0004\b!0\u0001¨\u0006\bÀ\u0006\u0001"}, d2 = {"Lcom/facebook/react/views/scroll/ReactScrollViewHelper$HasSmoothScroll;", "", "reactSmoothScrollTo", "", "x", "", "y", "scrollToPreservingMomentum", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface HasSmoothScroll {
        void reactSmoothScrollTo(int i10, int i11);

        void scrollToPreservingMomentum(int i10, int i11);
    }

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\bf\u0018\u00002\u00020\u0001R\u0014\u0010\u0002\u001a\u0004\u0018\u00010\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0004\u0010\u0005ø\u0001\u0000\u0082\u0002\u0006\n\u0004\b!0\u0001¨\u0006\u0006À\u0006\u0001"}, d2 = {"Lcom/facebook/react/views/scroll/ReactScrollViewHelper$HasStateWrapper;", "", "stateWrapper", "Lcom/facebook/react/uimanager/StateWrapper;", "getStateWrapper", "()Lcom/facebook/react/uimanager/StateWrapper;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface HasStateWrapper {
        StateWrapper getStateWrapper();
    }

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\bf\u0018\u00002\u00020\u0001J\u0010\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H&ø\u0001\u0000\u0082\u0002\u0006\n\u0004\b!0\u0001¨\u0006\u0006À\u0006\u0001"}, d2 = {"Lcom/facebook/react/views/scroll/ReactScrollViewHelper$LayoutChangeListener;", "", "onLayoutChange", "", "scrollView", "Landroid/view/ViewGroup;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface LayoutChangeListener {
        void onLayoutChange(@NotNull ViewGroup viewGroup);
    }

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0006\b\u0002\u0018\u00002\u00020\u0001B\u0011\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0004\u0010\u0005J0\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u00072\u0006\u0010\u000e\u001a\u00020\u00072\u0006\u0010\u000f\u001a\u00020\u00072\u0006\u0010\u0010\u001a\u00020\u00072\u0006\u0010\u0011\u001a\u00020\u0007H\u0016R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u000e¢\u0006\u0002\n\u0000R\u0011\u0010\b\u001a\u00020\u00078F¢\u0006\u0006\u001a\u0004\b\t\u0010\n¨\u0006\u0012"}, d2 = {"Lcom/facebook/react/views/scroll/ReactScrollViewHelper$OverScrollerDurationGetter;", "Landroid/widget/OverScroller;", "context", "Landroid/content/Context;", "<init>", "(Landroid/content/Context;)V", "currentScrollAnimationDuration", "", "scrollAnimationDuration", "getScrollAnimationDuration", "()I", "startScroll", "", "startX", "startY", "dx", "dy", "duration", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class OverScrollerDurationGetter extends OverScroller {
        private int currentScrollAnimationDuration;

        public OverScrollerDurationGetter(Context context) {
            super(context);
            this.currentScrollAnimationDuration = h.DEFAULT_SWIPE_ANIMATION_DURATION;
        }

        public final int getScrollAnimationDuration() {
            super.startScroll(0, 0, 0, 0);
            return this.currentScrollAnimationDuration;
        }

        @Override // android.widget.OverScroller
        public void startScroll(int i10, int i11, int i12, int i13, int i14) {
            this.currentScrollAnimationDuration = i14;
        }
    }

    @Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0007\n\u0002\u0010\u000b\n\u0002\b\u0006\n\u0002\u0010\u0007\n\u0002\b\u000b\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u0016\u0010\u001d\u001a\u00020\u00002\u0006\u0010\u001e\u001a\u00020\t2\u0006\u0010\u001f\u001a\u00020\tJ\u0016\u0010 \u001a\u00020\u00002\u0006\u0010!\u001a\u00020\t2\u0006\u0010\"\u001a\u00020\tR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007R\u001a\u0010\b\u001a\u00020\tX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\n\u0010\u000b\"\u0004\b\f\u0010\rR\u0011\u0010\u000e\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0007R\u001a\u0010\u0010\u001a\u00020\u0011X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0010\u0010\u0012\"\u0004\b\u0013\u0010\u0014R\u001a\u0010\u0015\u001a\u00020\u0011X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0015\u0010\u0012\"\u0004\b\u0016\u0010\u0014R\u001a\u0010\u0017\u001a\u00020\u0018X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0019\u0010\u001a\"\u0004\b\u001b\u0010\u001c¨\u0006#"}, d2 = {"Lcom/facebook/react/views/scroll/ReactScrollViewHelper$ReactScrollViewScrollState;", "", "<init>", "()V", "finalAnimatedPositionScroll", "Landroid/graphics/Point;", "getFinalAnimatedPositionScroll", "()Landroid/graphics/Point;", ReactScrollViewHelper.SCROLL_AWAY_PADDING_TOP, "", "getScrollAwayPaddingTop", "()I", "setScrollAwayPaddingTop", "(I)V", "lastStateUpdateScroll", "getLastStateUpdateScroll", "isCanceled", "", "()Z", "setCanceled", "(Z)V", "isFinished", "setFinished", "decelerationRate", "", "getDecelerationRate", "()F", "setDecelerationRate", "(F)V", "setFinalAnimatedPositionScroll", "finalAnimatedPositionScrollX", "finalAnimatedPositionScrollY", "setLastStateUpdateScroll", "lastStateUpdateScrollX", "lastStateUpdateScrollY", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class ReactScrollViewScrollState {
        private boolean isCanceled;
        private int scrollAwayPaddingTop;
        @NotNull
        private final Point finalAnimatedPositionScroll = new Point();
        @NotNull
        private final Point lastStateUpdateScroll = new Point(-1, -1);
        private boolean isFinished = true;
        private float decelerationRate = 0.985f;

        public final float getDecelerationRate() {
            return this.decelerationRate;
        }

        @NotNull
        public final Point getFinalAnimatedPositionScroll() {
            return this.finalAnimatedPositionScroll;
        }

        @NotNull
        public final Point getLastStateUpdateScroll() {
            return this.lastStateUpdateScroll;
        }

        public final int getScrollAwayPaddingTop() {
            return this.scrollAwayPaddingTop;
        }

        public final boolean isCanceled() {
            return this.isCanceled;
        }

        public final boolean isFinished() {
            return this.isFinished;
        }

        public final void setCanceled(boolean z10) {
            this.isCanceled = z10;
        }

        public final void setDecelerationRate(float f10) {
            this.decelerationRate = f10;
        }

        @NotNull
        public final ReactScrollViewScrollState setFinalAnimatedPositionScroll(int i10, int i11) {
            this.finalAnimatedPositionScroll.set(i10, i11);
            return this;
        }

        public final void setFinished(boolean z10) {
            this.isFinished = z10;
        }

        @NotNull
        public final ReactScrollViewScrollState setLastStateUpdateScroll(int i10, int i11) {
            this.lastStateUpdateScroll.set(i10, i11);
            return this;
        }

        public final void setScrollAwayPaddingTop(int i10) {
            this.scrollAwayPaddingTop = i10;
        }
    }

    @Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0002\b\u0003\bf\u0018\u00002\u00020\u0001J,\u0010\u0002\u001a\u00020\u00032\b\u0010\u0004\u001a\u0004\u0018\u00010\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u00072\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\tH&J\u0012\u0010\u000b\u001a\u00020\u00032\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005H&ø\u0001\u0000\u0082\u0002\u0006\n\u0004\b!0\u0001¨\u0006\fÀ\u0006\u0001"}, d2 = {"Lcom/facebook/react/views/scroll/ReactScrollViewHelper$ScrollListener;", "", "onScroll", "", "scrollView", "Landroid/view/ViewGroup;", "scrollEventType", "Lcom/facebook/react/views/scroll/ScrollEventType;", "xVelocity", "", "yVelocity", "onLayout", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface ScrollListener {
        void onLayout(ViewGroup viewGroup);

        void onScroll(ViewGroup viewGroup, ScrollEventType scrollEventType, float f10, float f11);
    }

    private ReactScrollViewHelper() {
    }

    public static final void addLayoutChangeListener(@NotNull LayoutChangeListener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        layoutChangeListeners.add(new WeakReference<>(listener));
    }

    public static final void addScrollListener(@NotNull ScrollListener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        scrollListeners.add(new WeakReference<>(listener));
    }

    public static final <T extends ViewGroup & HasFlingAnimator & HasScrollEventThrottle> void dispatchMomentumEndOnAnimationEnd(final T t10) {
        t10.getFlingAnimator().addListener(new Animator.AnimatorListener() { // from class: com.facebook.react.views.scroll.ReactScrollViewHelper$dispatchMomentumEndOnAnimationEnd$1
            @Override // android.animation.Animator.AnimatorListener
            public void onAnimationCancel(Animator animator) {
                Intrinsics.checkNotNullParameter(animator, "animator");
                ReactScrollViewHelper.emitScrollMomentumEndEvent(t10);
                animator.removeListener(this);
            }

            @Override // android.animation.Animator.AnimatorListener
            public void onAnimationEnd(Animator animator) {
                Intrinsics.checkNotNullParameter(animator, "animator");
                ReactScrollViewHelper.emitScrollMomentumEndEvent(t10);
                animator.removeListener(this);
            }

            @Override // android.animation.Animator.AnimatorListener
            public void onAnimationRepeat(Animator animator) {
                Intrinsics.checkNotNullParameter(animator, "animator");
            }

            @Override // android.animation.Animator.AnimatorListener
            public void onAnimationStart(Animator animator) {
                Intrinsics.checkNotNullParameter(animator, "animator");
            }
        });
    }

    public static final void emitLayoutChangeEvent(@NotNull ViewGroup scrollView) {
        Intrinsics.checkNotNullParameter(scrollView, "scrollView");
        Iterator<WeakReference<LayoutChangeListener>> it = layoutChangeListeners.iterator();
        Intrinsics.checkNotNullExpressionValue(it, "iterator(...)");
        while (it.hasNext()) {
            LayoutChangeListener layoutChangeListener = it.next().get();
            if (layoutChangeListener != null) {
                layoutChangeListener.onLayoutChange(scrollView);
            }
        }
    }

    public static final void emitLayoutEvent(@NotNull ViewGroup scrollView) {
        Intrinsics.checkNotNullParameter(scrollView, "scrollView");
        Iterator<WeakReference<ScrollListener>> it = scrollListeners.iterator();
        Intrinsics.checkNotNullExpressionValue(it, "iterator(...)");
        while (it.hasNext()) {
            ScrollListener scrollListener = it.next().get();
            if (scrollListener != null) {
                scrollListener.onLayout(scrollView);
            }
        }
    }

    public static final <T extends ViewGroup & HasScrollEventThrottle> void emitScrollBeginDragEvent(T t10) {
        INSTANCE.emitScrollEvent(t10, ScrollEventType.BEGIN_DRAG);
    }

    public static final <T extends ViewGroup & HasScrollEventThrottle> void emitScrollEndDragEvent(T t10, float f10, float f11) {
        emitScrollEvent$default(INSTANCE, t10, ScrollEventType.END_DRAG, f10, f11, false, 16, null);
    }

    public static final <T extends ViewGroup & HasScrollEventThrottle> void emitScrollEvent(T t10, float f10, float f11, boolean z10) {
        INSTANCE.emitScrollEvent(t10, ScrollEventType.SCROLL, f10, f11, z10);
    }

    public static /* synthetic */ void emitScrollEvent$default(ViewGroup viewGroup, float f10, float f11, boolean z10, int i10, Object obj) {
        if ((i10 & 8) != 0) {
            z10 = false;
        }
        emitScrollEvent(viewGroup, f10, f11, z10);
    }

    public static final <T extends ViewGroup & HasScrollEventThrottle> void emitScrollMomentumBeginEvent(T t10, int i10, int i11) {
        emitScrollEvent$default(INSTANCE, t10, ScrollEventType.MOMENTUM_BEGIN, i10, i11, false, 16, null);
    }

    public static final <T extends ViewGroup & HasScrollEventThrottle> void emitScrollMomentumEndEvent(T t10) {
        INSTANCE.emitScrollEvent(t10, ScrollEventType.MOMENTUM_END);
    }

    public static final View findNextFocusableView(@NotNull ViewGroup host, @NotNull View focused, int i10) {
        FabricUIManager fabricUIManager;
        Integer findNextFocusableElement;
        int intValue;
        int[] relativeAncestorList;
        Set<Integer> d12;
        Intrinsics.checkNotNullParameter(host, "host");
        Intrinsics.checkNotNullParameter(focused, "focused");
        if (!(host instanceof ReactClippingViewGroup)) {
            return null;
        }
        Context context = host.getContext();
        Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
        UIManager uIManager = UIManagerHelper.getUIManager((ReactContext) context, 2);
        if (uIManager == null || (findNextFocusableElement = (fabricUIManager = (FabricUIManager) uIManager).findNextFocusableElement(host.getId(), focused.getId(), i10)) == null || (relativeAncestorList = fabricUIManager.getRelativeAncestorList(host.getChildAt(0).getId(), (intValue = findNextFocusableElement.intValue()))) == null || (d12 = i.d1(relativeAncestorList)) == null) {
            return null;
        }
        d12.add(findNextFocusableElement);
        ((ReactClippingViewGroup) host).updateClippingRect(d12);
        return host.findViewById(intValue);
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static final <T extends ViewGroup & HasScrollState & HasStateWrapper> void forceUpdateState(T t10) {
        ReactScrollViewScrollState reactScrollViewScrollState = t10.getReactScrollViewScrollState();
        int scrollAwayPaddingTop = reactScrollViewScrollState.getScrollAwayPaddingTop();
        Point lastStateUpdateScroll = reactScrollViewScrollState.getLastStateUpdateScroll();
        int i10 = lastStateUpdateScroll.x;
        int i11 = lastStateUpdateScroll.y;
        if (DEBUG_MODE) {
            p8.a.u(TAG, "updateFabricScrollState[%d] scrollX %d scrollY %d", Integer.valueOf(t10.getId()), Integer.valueOf(i10), Integer.valueOf(i11));
        }
        StateWrapper stateWrapper = t10.getStateWrapper();
        if (stateWrapper != null) {
            WritableNativeMap writableNativeMap = new WritableNativeMap();
            writableNativeMap.putDouble(CONTENT_OFFSET_LEFT, PixelUtil.toDIPFromPixel(i10));
            writableNativeMap.putDouble(CONTENT_OFFSET_TOP, PixelUtil.toDIPFromPixel(i11));
            writableNativeMap.putDouble(SCROLL_AWAY_PADDING_TOP, PixelUtil.toDIPFromPixel(scrollAwayPaddingTop));
            stateWrapper.updateState(writableNativeMap);
        }
    }

    public static final int getDefaultScrollAnimationDuration(Context context) {
        if (!smoothScrollDurationInitialized) {
            smoothScrollDurationInitialized = true;
            try {
                SMOOTH_SCROLL_DURATION = new OverScrollerDurationGetter(context).getScrollAnimationDuration();
            } catch (Throwable unused) {
            }
        }
        return SMOOTH_SCROLL_DURATION;
    }

    public static final <T extends ViewGroup & HasFlingAnimator & HasScrollState> int getNextFlingStartValue(T t10, int i10, int i11, int i12) {
        int i13;
        ReactScrollViewScrollState reactScrollViewScrollState = t10.getReactScrollViewScrollState();
        boolean z10 = false;
        if (i12 != 0) {
            i13 = i12 / Math.abs(i12);
        } else {
            i13 = 0;
        }
        if (i13 * (i11 - i10) > 0) {
            z10 = true;
        }
        if (reactScrollViewScrollState.isFinished() && (!reactScrollViewScrollState.isCanceled() || !z10)) {
            return i10;
        }
        return i11;
    }

    /* JADX WARN: Code restructure failed: missing block: B:17:0x0028, code lost:
        if (r3.equals("auto") != false) goto L20;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final int parseOverScrollMode(java.lang.String r3) {
        /*
            r0 = 1
            if (r3 == 0) goto L4c
            int r1 = r3.hashCode()
            r2 = -1414557169(0xffffffffabaf920f, float:-1.2475037E-12)
            if (r1 == r2) goto L2b
            r2 = 3005871(0x2dddaf, float:4.212122E-39)
            if (r1 == r2) goto L22
            r2 = 104712844(0x63dca8c, float:3.5695757E-35)
            if (r1 == r2) goto L17
            goto L33
        L17:
            java.lang.String r1 = "never"
            boolean r1 = r3.equals(r1)
            if (r1 != 0) goto L20
            goto L33
        L20:
            r3 = 2
            return r3
        L22:
            java.lang.String r1 = "auto"
            boolean r1 = r3.equals(r1)
            if (r1 == 0) goto L33
            goto L4c
        L2b:
            java.lang.String r1 = "always"
            boolean r1 = r3.equals(r1)
            if (r1 != 0) goto L4a
        L33:
            java.lang.StringBuilder r1 = new java.lang.StringBuilder
            r1.<init>()
            java.lang.String r2 = "wrong overScrollMode: "
            r1.append(r2)
            r1.append(r3)
            java.lang.String r3 = r1.toString()
            java.lang.String r1 = "ReactNative"
            p8.a.J(r1, r3)
            return r0
        L4a:
            r3 = 0
            return r3
        L4c:
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.views.scroll.ReactScrollViewHelper.parseOverScrollMode(java.lang.String):int");
    }

    public static final int parseSnapToAlignment(String str) {
        if (str == null) {
            return 0;
        }
        if (StringsKt.A(ViewProps.START, str, true)) {
            return 1;
        }
        if (StringsKt.A("center", str, true)) {
            return 2;
        }
        if (Intrinsics.areEqual(ViewProps.END, str)) {
            return 3;
        }
        p8.a.J(ReactConstants.TAG, "wrong snap alignment value: " + str);
        return 0;
    }

    /* JADX WARN: Multi-variable type inference failed */
    @NotNull
    public static final <T extends ViewGroup & HasFlingAnimator & HasScrollState> Point predictFinalScrollPosition(T t10, int i10, int i11, int i12, int i13) {
        ReactScrollViewScrollState reactScrollViewScrollState = t10.getReactScrollViewScrollState();
        OverScroller overScroller = new OverScroller(t10.getContext());
        overScroller.setFriction(1.0f - reactScrollViewScrollState.getDecelerationRate());
        int width = (t10.getWidth() - t10.getPaddingStart()) - t10.getPaddingEnd();
        int height = (t10.getHeight() - t10.getPaddingBottom()) - t10.getPaddingTop();
        Point finalAnimatedPositionScroll = reactScrollViewScrollState.getFinalAnimatedPositionScroll();
        overScroller.fling(getNextFlingStartValue(t10, t10.getScrollX(), finalAnimatedPositionScroll.x, i10), getNextFlingStartValue(t10, t10.getScrollY(), finalAnimatedPositionScroll.y, i11), i10, i11, 0, i12, 0, i13, width / 2, height / 2);
        return new Point(overScroller.getFinalX(), overScroller.getFinalY());
    }

    public static final void removeLayoutChangeListener(@NotNull final LayoutChangeListener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        CopyOnWriteArrayList<WeakReference<LayoutChangeListener>> copyOnWriteArrayList = layoutChangeListeners;
        final Function1 function1 = new Function1() { // from class: com.facebook.react.views.scroll.d
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                boolean removeLayoutChangeListener$lambda$3;
                removeLayoutChangeListener$lambda$3 = ReactScrollViewHelper.removeLayoutChangeListener$lambda$3(ReactScrollViewHelper.LayoutChangeListener.this, (WeakReference) obj);
                return Boolean.valueOf(removeLayoutChangeListener$lambda$3);
            }
        };
        copyOnWriteArrayList.removeIf(new Predicate() { // from class: com.facebook.react.views.scroll.e
            @Override // java.util.function.Predicate
            public final boolean test(Object obj) {
                boolean removeLayoutChangeListener$lambda$4;
                removeLayoutChangeListener$lambda$4 = ReactScrollViewHelper.removeLayoutChangeListener$lambda$4(Function1.this, obj);
                return removeLayoutChangeListener$lambda$4;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean removeLayoutChangeListener$lambda$3(LayoutChangeListener layoutChangeListener, WeakReference weakReference) {
        if (weakReference.get() != null && !Intrinsics.areEqual(weakReference.get(), layoutChangeListener)) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean removeLayoutChangeListener$lambda$4(Function1 function1, Object obj) {
        return ((Boolean) function1.invoke(obj)).booleanValue();
    }

    public static final void removeScrollListener(@NotNull final ScrollListener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        CopyOnWriteArrayList<WeakReference<ScrollListener>> copyOnWriteArrayList = scrollListeners;
        final Function1 function1 = new Function1() { // from class: com.facebook.react.views.scroll.b
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                boolean removeScrollListener$lambda$1;
                removeScrollListener$lambda$1 = ReactScrollViewHelper.removeScrollListener$lambda$1(ReactScrollViewHelper.ScrollListener.this, (WeakReference) obj);
                return Boolean.valueOf(removeScrollListener$lambda$1);
            }
        };
        copyOnWriteArrayList.removeIf(new Predicate() { // from class: com.facebook.react.views.scroll.c
            @Override // java.util.function.Predicate
            public final boolean test(Object obj) {
                boolean removeScrollListener$lambda$2;
                removeScrollListener$lambda$2 = ReactScrollViewHelper.removeScrollListener$lambda$2(Function1.this, obj);
                return removeScrollListener$lambda$2;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean removeScrollListener$lambda$1(ScrollListener scrollListener, WeakReference weakReference) {
        if (weakReference.get() != null && !Intrinsics.areEqual(weakReference.get(), scrollListener)) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean removeScrollListener$lambda$2(Function1 function1, Object obj) {
        return ((Boolean) function1.invoke(obj)).booleanValue();
    }

    public static final int resolveAbsoluteDirection(int i10, boolean z10, int i11) {
        boolean z11 = i11 == 1;
        if (i10 == 1 || i10 == 2) {
            if (z10) {
                return (i10 == 2) != z11 ? 66 : 17;
            }
            return i10 == 2 ? 130 : 33;
        }
        return i10;
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static final <T extends ViewGroup & HasFlingAnimator & HasScrollState & HasStateWrapper> void smoothScrollTo(T t10, int i10, int i11) {
        if (DEBUG_MODE) {
            p8.a.u(TAG, "smoothScrollTo[%d] x %d y %d", Integer.valueOf(t10.getId()), Integer.valueOf(i10), Integer.valueOf(i11));
        }
        T t11 = t10;
        ValueAnimator flingAnimator = t11.getFlingAnimator();
        if (flingAnimator.getListeners() == null || flingAnimator.getListeners().size() == 0) {
            INSTANCE.registerFlingAnimator(t10);
        }
        t10.getReactScrollViewScrollState().setFinalAnimatedPositionScroll(i10, i11);
        int scrollX = t10.getScrollX();
        int scrollY = t10.getScrollY();
        if (scrollX != i10) {
            t11.startFlingAnimator(scrollX, i10);
        }
        if (scrollY != i11) {
            t11.startFlingAnimator(scrollY, i11);
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static final <T extends ViewGroup & HasFlingAnimator & HasScrollState & HasStateWrapper> void updateFabricScrollState(T t10) {
        INSTANCE.updateFabricScrollState(t10, t10.getScrollX(), t10.getScrollY());
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static final <T extends ViewGroup & HasFlingAnimator & HasScrollEventThrottle & HasScrollState & HasStateWrapper> void updateStateOnScrollChanged(T t10, float f10, float f11, boolean z10) {
        INSTANCE.updateFabricScrollState(t10, t10.getScrollX(), t10.getScrollY());
        emitScrollEvent(t10, f10, f11, z10);
    }

    public static /* synthetic */ void updateStateOnScrollChanged$default(ViewGroup viewGroup, float f10, float f11, boolean z10, int i10, Object obj) {
        if ((i10 & 8) != 0) {
            z10 = false;
        }
        updateStateOnScrollChanged(viewGroup, f10, f11, z10);
    }

    public final <T extends ViewGroup & HasFlingAnimator & HasScrollState & HasStateWrapper> void registerFlingAnimator(final T t10) {
        t10.getFlingAnimator().addListener(new Animator.AnimatorListener() { // from class: com.facebook.react.views.scroll.ReactScrollViewHelper$registerFlingAnimator$1
            @Override // android.animation.Animator.AnimatorListener
            public void onAnimationCancel(Animator animator) {
                Intrinsics.checkNotNullParameter(animator, "animator");
                ((ReactScrollViewHelper.HasScrollState) t10).getReactScrollViewScrollState().setCanceled(true);
            }

            @Override // android.animation.Animator.AnimatorListener
            public void onAnimationEnd(Animator animator) {
                Intrinsics.checkNotNullParameter(animator, "animator");
                ((ReactScrollViewHelper.HasScrollState) t10).getReactScrollViewScrollState().setFinished(true);
                ReactScrollViewHelper.updateFabricScrollState(t10);
            }

            @Override // android.animation.Animator.AnimatorListener
            public void onAnimationRepeat(Animator animator) {
                Intrinsics.checkNotNullParameter(animator, "animator");
            }

            @Override // android.animation.Animator.AnimatorListener
            public void onAnimationStart(Animator animator) {
                Intrinsics.checkNotNullParameter(animator, "animator");
                ReactScrollViewHelper.ReactScrollViewScrollState reactScrollViewScrollState = ((ReactScrollViewHelper.HasScrollState) t10).getReactScrollViewScrollState();
                reactScrollViewScrollState.setCanceled(false);
                reactScrollViewScrollState.setFinished(false);
            }
        });
    }

    private final <T extends ViewGroup & HasScrollEventThrottle> void emitScrollEvent(T t10, ScrollEventType scrollEventType) {
        emitScrollEvent$default(this, t10, scrollEventType, 0.0f, 0.0f, false, 16, null);
    }

    static /* synthetic */ void emitScrollEvent$default(ReactScrollViewHelper reactScrollViewHelper, ViewGroup viewGroup, ScrollEventType scrollEventType, float f10, float f11, boolean z10, int i10, Object obj) {
        if ((i10 & 16) != 0) {
            z10 = false;
        }
        reactScrollViewHelper.emitScrollEvent(viewGroup, scrollEventType, f10, f11, z10);
    }

    /* JADX WARN: Multi-variable type inference failed */
    public final <T extends ViewGroup & HasScrollState & HasStateWrapper> void updateFabricScrollState(T t10, int i10, int i11) {
        if (DEBUG_MODE) {
            p8.a.u(TAG, "updateFabricScrollState[%d] scrollX %d scrollY %d", Integer.valueOf(t10.getId()), Integer.valueOf(i10), Integer.valueOf(i11));
        }
        if (ViewUtil.getUIManagerType(t10.getId()) == 1 || t10.getStateWrapper() == null) {
            return;
        }
        ReactScrollViewScrollState reactScrollViewScrollState = t10.getReactScrollViewScrollState();
        if (reactScrollViewScrollState.getLastStateUpdateScroll().equals(i10, i11)) {
            return;
        }
        reactScrollViewScrollState.setLastStateUpdateScroll(i10, i11);
        forceUpdateState(t10);
    }

    /* JADX WARN: Multi-variable type inference failed */
    private final <T extends ViewGroup & HasScrollEventThrottle> void emitScrollEvent(T t10, ScrollEventType scrollEventType, float f10, float f11, boolean z10) {
        long currentTimeMillis = System.currentTimeMillis();
        if (scrollEventType == ScrollEventType.SCROLL) {
            T t11 = t10;
            if (t11.getScrollEventThrottle() >= Math.max(17L, currentTimeMillis - t11.getLastScrollDispatchTime())) {
                return;
            }
        }
        View childAt = t10.getChildAt(0);
        if (childAt == null) {
            return;
        }
        for (WeakReference weakReference : CollectionsKt.h1(scrollListeners)) {
            ScrollListener scrollListener = (ScrollListener) weakReference.get();
            if (scrollListener != null) {
                scrollListener.onScroll(t10, scrollEventType, f10, f11);
            }
        }
        Context context = t10.getContext();
        Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
        ReactContext reactContext = (ReactContext) context;
        int surfaceId = UIManagerHelper.getSurfaceId(reactContext);
        EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag(reactContext, t10.getId());
        if (eventDispatcherForReactTag != null) {
            ScrollEvent obtain = ScrollEvent.Companion.obtain(surfaceId, t10.getId(), scrollEventType, t10.getScrollX(), t10.getScrollY(), f10, f11, childAt.getWidth(), childAt.getHeight(), t10.getWidth(), t10.getHeight());
            obtain.setDrawing(z10);
            eventDispatcherForReactTag.dispatchEvent(obtain);
            if (scrollEventType == ScrollEventType.SCROLL) {
                t10.setLastScrollDispatchTime(currentTimeMillis);
            }
        }
    }
}
