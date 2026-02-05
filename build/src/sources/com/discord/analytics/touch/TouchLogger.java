package com.discord.analytics.touch;

import android.annotation.NonNull;
import android.annotation.Nullable;
import android.app.Activity;
import android.app.Application;
import android.content.Context;
import android.graphics.Matrix;
import android.graphics.PointF;
import android.graphics.Rect;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.view.ActionMode;
import android.view.KeyEvent;
import android.view.Menu;
import android.view.MenuItem;
import android.view.MotionEvent;
import android.view.ScaleGestureDetector;
import android.view.SearchEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.view.ViewTreeObserver;
import android.view.Window;
import android.view.WindowManager;
import android.view.accessibility.AccessibilityEvent;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.logging.Log;
import com.facebook.react.BuildConfig;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.lang.ref.WeakReference;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.jvm.internal.StringCompanionObject;
import kotlin.text.StringsKt;
import or.p;
import or.v;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000Ì\u0001\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010%\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010#\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0007\n\u0002\b\u0002\n\u0002\u0010\t\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0014\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0007\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u000e\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u000e\bÆ\u0002\u0018\u00002\u00020\u0001:\u0004nopqB\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u00104\u001a\u0002052\u0006\u00106\u001a\u00020\u000bJ\u000e\u00107\u001a\u0002052\u0006\u00106\u001a\u00020\u000bJ\u0006\u00107\u001a\u000205J\u000e\u00108\u001a\u0002052\u0006\u00109\u001a\u00020\"J\u000e\u0010:\u001a\u0002052\u0006\u00109\u001a\u00020\"J\u0006\u0010;\u001a\u000205J\u0006\u0010<\u001a\u00020=J\u0015\u0010>\u001a\u0002052\u0006\u0010?\u001a\u00020@H\u0000¢\u0006\u0002\bAJ\u0010\u0010B\u001a\u0002052\u0006\u00106\u001a\u00020\u000bH\u0002J\b\u0010C\u001a\u000205H\u0002J\u0010\u0010D\u001a\u0002052\u0006\u0010E\u001a\u00020FH\u0002J\u0010\u0010G\u001a\u0002052\u0006\u00106\u001a\u00020\u000bH\u0002J\u0018\u0010H\u001a\u0002052\u0006\u0010I\u001a\u00020\u00162\u0006\u0010J\u001a\u00020\u0005H\u0002J\u0015\u0010K\u001a\u00020\u00052\u0006\u0010I\u001a\u00020\u0016H\u0000¢\u0006\u0002\bLJ \u0010M\u001a\u0002052\u0006\u0010?\u001a\u00020N2\u0006\u0010O\u001a\u00020F2\u0006\u0010P\u001a\u00020\u0005H\u0002J\u001f\u0010Q\u001a\u0004\u0018\u00010\u001f2\u0006\u0010R\u001a\u00020.2\u0006\u0010S\u001a\u00020\u001fH\u0000¢\u0006\u0002\bTJ\u001a\u0010U\u001a\u0004\u0018\u00010\u001f2\u0006\u0010R\u001a\u00020.2\u0006\u0010S\u001a\u00020\u001fH\u0002J\u001a\u0010V\u001a\u0004\u0018\u00010\u001f2\u0006\u0010R\u001a\u00020.2\u0006\u0010S\u001a\u00020\u001fH\u0002J\u001a\u0010W\u001a\u0004\u0018\u00010\u001f2\u0006\u0010R\u001a\u00020.2\u0006\u0010S\u001a\u00020\u001fH\u0002J\u001a\u0010X\u001a\u0004\u0018\u00010\u001f2\u0006\u0010R\u001a\u00020.2\u0006\u0010Y\u001a\u00020FH\u0002J\u0014\u0010Z\u001a\u0002032\n\u0010[\u001a\u0006\u0012\u0002\b\u000302H\u0002J\u0010\u0010\\\u001a\u00020]2\u0006\u0010S\u001a\u00020\u001fH\u0002J\u0018\u0010^\u001a\u00020=2\u0006\u0010Y\u001a\u00020F2\u0006\u0010_\u001a\u00020=H\u0002J \u0010`\u001a\u00020\u00072\u0006\u0010a\u001a\u00020%2\u0006\u0010b\u001a\u00020%2\u0006\u0010S\u001a\u00020\u001fH\u0002J\u0012\u0010c\u001a\u0004\u0018\u00010d2\u0006\u0010S\u001a\u00020\u001fH\u0002J0\u0010e\u001a\u0002052\u0006\u0010f\u001a\u00020%2\u0006\u0010g\u001a\u00020%2\u0006\u0010h\u001a\u00020F2\u0006\u0010i\u001a\u00020\u001f2\u0006\u0010j\u001a\u00020,H\u0002J\u0017\u0010k\u001a\u00020\u00052\b\u0010S\u001a\u0004\u0018\u00010\u001fH\u0000¢\u0006\u0002\blJ\u0012\u0010m\u001a\u0004\u0018\u00010\u00052\u0006\u0010S\u001a\u00020\u001fH\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0007X\u0082\u000e¢\u0006\u0002\n\u0000R\"\u0010\t\u001a\n\u0012\u0004\u0012\u00020\u000b\u0018\u00010\nX\u0080\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\f\u0010\r\"\u0004\b\u000e\u0010\u000fR\u0010\u0010\u0010\u001a\u0004\u0018\u00010\u0011X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u0012\u001a\u0004\u0018\u00010\u0013X\u0082\u000e¢\u0006\u0002\n\u0000R\u001a\u0010\u0014\u001a\u000e\u0012\u0004\u0012\u00020\u0016\u0012\u0004\u0012\u00020\u00170\u0015X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u0018\u001a\u0004\u0018\u00010\u0019X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u001a\u001a\u0004\u0018\u00010\u001bX\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u001c\u001a\u0004\u0018\u00010\u001dX\u0082\u000e¢\u0006\u0002\n\u0000R\u0016\u0010\u001e\u001a\n\u0012\u0004\u0012\u00020\u001f\u0018\u00010\nX\u0082\u000e¢\u0006\u0002\n\u0000R\u0014\u0010 \u001a\b\u0012\u0004\u0012\u00020\"0!X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010#\u001a\u00020\u0001X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010$\u001a\u00020%X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010&\u001a\u00020%X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010'\u001a\u00020(X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010)\u001a\u00020*X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010+\u001a\u00020,X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010-\u001a\u00020.X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010/\u001a\u000200X\u0082\u0004¢\u0006\u0002\n\u0000R\u001e\u00101\u001a\u0012\u0012\b\u0012\u0006\u0012\u0002\b\u000302\u0012\u0004\u0012\u0002030\u0015X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006r"}, d2 = {"Lcom/discord/analytics/touch/TouchLogger;", "", "<init>", "()V", "TAG", "", "VERBOSE_LOGGING", "", "isEnabled", "activityRef", "Ljava/lang/ref/WeakReference;", "Landroid/app/Activity;", "getActivityRef$analytics_release", "()Ljava/lang/ref/WeakReference;", "setActivityRef$analytics_release", "(Ljava/lang/ref/WeakReference;)V", "application", "Landroid/app/Application;", "scaleGestureDetector", "Landroid/view/ScaleGestureDetector;", "trackedWindows", "", "Landroid/view/Window;", "Landroid/view/Window$Callback;", "windowFocusListener", "Lcom/discord/analytics/touch/TouchLogger$WindowFocusListener;", "windowFocusChangeListener", "Landroid/view/ViewTreeObserver$OnWindowFocusChangeListener;", "globalLayoutListener", "Landroid/view/ViewTreeObserver$OnGlobalLayoutListener;", "monitoredDecorView", "Landroid/view/View;", "eventListeners", "", "Lcom/discord/analytics/touch/OnEventRecognizedListener;", "listenerLock", "initialX", "", "initialY", "startTime", "", "callbackHandler", "Landroid/os/Handler;", "tempPoint", "Landroid/graphics/PointF;", "matrixTransformCoords", "", "inverseMatrix", "Landroid/graphics/Matrix;", "viewClassInfoCache", "Ljava/lang/Class;", "Lcom/discord/analytics/touch/TouchLogger$ViewClassInfo;", "enable", "", "activity", "disable", "registerListener", "listener", "unregisterListener", "clearListeners", "getListenerCount", "", "notifyListeners", "event", "Lcom/discord/analytics/touch/TouchEventDetails;", "notifyListeners$analytics_release", "startWindowMonitoring", "stopWindowMonitoring", "detectPortalsAndBottomSheets", "decorView", "Landroid/view/ViewGroup;", "scanForNewWindows", "trackWindow", "window", StackTraceHelper.NAME_KEY, "identifyWindow", "identifyWindow$analytics_release", "handleTouchEvent", "Landroid/view/MotionEvent;", "rootView", "windowName", "findTouchTargetView", "eventCoords", "view", "findTouchTargetView$analytics_release", "findTouchTargetChildrenOnly", "findTouchTargetSelfOnly", "findTouchTargetChildrenThenSelf", "findTouchTargetInChildren", "viewGroup", "getViewClassInfo", "viewClass", "getPointerEvents", "Lcom/discord/analytics/touch/TouchLogger$PointerEvents;", "getZIndexMappedChildIndex", "reverseIndex", "isTouchPointInView", "x", "y", "getHitSlopRect", "Landroid/graphics/Rect;", "getChildPoint", "parentX", "parentY", "parent", "child", "outLocalPoint", "formatViewHierarchy", "formatViewHierarchy$analytics_release", "getNativeID", "ViewClassInfo", "PointerEvents", "WindowFocusListener", "ScaleGestureListener", "analytics_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nTouchLogger.kt\nKotlin\n*S Kotlin\n*F\n+ 1 TouchLogger.kt\ncom/discord/analytics/touch/TouchLogger\n+ 2 _Maps.kt\nkotlin/collections/MapsKt___MapsKt\n+ 3 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n+ 4 Maps.kt\nkotlin/collections/MapsKt__MapsKt\n+ 5 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,970:1\n216#2,2:971\n13472#3,2:973\n384#4,7:975\n1869#5,2:982\n*S KotlinDebug\n*F\n+ 1 TouchLogger.kt\ncom/discord/analytics/touch/TouchLogger\n*L\n109#1:971,2\n291#1:973,2\n593#1:975,7\n190#1:982,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TouchLogger {
    @NotNull
    private static final String TAG = "TouchLogger";
    private static final boolean VERBOSE_LOGGING = false;
    private static WeakReference<Activity> activityRef;
    private static Application application;
    private static ViewTreeObserver.OnGlobalLayoutListener globalLayoutListener;
    private static float initialX;
    private static float initialY;
    private static boolean isEnabled;
    private static WeakReference<View> monitoredDecorView;
    private static ScaleGestureDetector scaleGestureDetector;
    private static long startTime;
    private static ViewTreeObserver.OnWindowFocusChangeListener windowFocusChangeListener;
    private static WindowFocusListener windowFocusListener;
    @NotNull
    public static final TouchLogger INSTANCE = new TouchLogger();
    @NotNull
    private static final Map<Window, Window.Callback> trackedWindows = new LinkedHashMap();
    @NotNull
    private static final Set<OnEventRecognizedListener> eventListeners = new LinkedHashSet();
    @NotNull
    private static final Object listenerLock = new Object();
    @NotNull
    private static final Handler callbackHandler = new Handler(Looper.getMainLooper());
    @NotNull
    private static final PointF tempPoint = new PointF();
    @NotNull
    private static final float[] matrixTransformCoords = new float[2];
    @NotNull
    private static final Matrix inverseMatrix = new Matrix();
    @NotNull
    private static final Map<Class<?>, ViewClassInfo> viewClassInfoCache = new LinkedHashMap();

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0007\b\u0082\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006j\u0002\b\u0007¨\u0006\b"}, d2 = {"Lcom/discord/analytics/touch/TouchLogger$PointerEvents;", "", "<init>", "(Ljava/lang/String;I)V", "NONE", "BOX_NONE", "BOX_ONLY", "AUTO", "analytics_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class PointerEvents {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ PointerEvents[] $VALUES;
        public static final PointerEvents NONE = new PointerEvents("NONE", 0);
        public static final PointerEvents BOX_NONE = new PointerEvents("BOX_NONE", 1);
        public static final PointerEvents BOX_ONLY = new PointerEvents("BOX_ONLY", 2);
        public static final PointerEvents AUTO = new PointerEvents("AUTO", 3);

        private static final /* synthetic */ PointerEvents[] $values() {
            return new PointerEvents[]{NONE, BOX_NONE, BOX_ONLY, AUTO};
        }

        static {
            PointerEvents[] $values = $values();
            $VALUES = $values;
            $ENTRIES = vr.a.a($values);
        }

        private PointerEvents(String str, int i10) {
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static PointerEvents valueOf(String str) {
            return (PointerEvents) Enum.valueOf(PointerEvents.class, str);
        }

        public static PointerEvents[] values() {
            return (PointerEvents[]) $VALUES.clone();
        }
    }

    @Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\b\u0002\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J,\u0010\u0004\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00060\u00052\u0006\u0010\u0007\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\nH\u0002J\u0010\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000fH\u0016J\u0010\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u000e\u001a\u00020\u000fH\u0016¨\u0006\u0012"}, d2 = {"Lcom/discord/analytics/touch/TouchLogger$ScaleGestureListener;", "Landroid/view/ScaleGestureDetector$SimpleOnScaleGestureListener;", "<init>", "()V", "getScreenCoordsFromWindow", "Lkotlin/Pair;", "", "activity", "Landroid/app/Activity;", "windowX", "", "windowY", "onScaleBegin", "", "detector", "Landroid/view/ScaleGestureDetector;", "onScaleEnd", "", "analytics_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nTouchLogger.kt\nKotlin\n*S Kotlin\n*F\n+ 1 TouchLogger.kt\ncom/discord/analytics/touch/TouchLogger$ScaleGestureListener\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,970:1\n1#2:971\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class ScaleGestureListener extends ScaleGestureDetector.SimpleOnScaleGestureListener {
        private final Pair<Integer, Integer> getScreenCoordsFromWindow(Activity activity, float f10, float f11) {
            int[] iArr = new int[2];
            activity.getWindow().getDecorView().getLocationOnScreen(iArr);
            return v.a(Integer.valueOf((int) (iArr[0] + f10)), Integer.valueOf((int) (iArr[1] + f11)));
        }

        @Override // android.view.ScaleGestureDetector.SimpleOnScaleGestureListener, android.view.ScaleGestureDetector.OnScaleGestureListener
        public boolean onScaleBegin(@NotNull ScaleGestureDetector detector) {
            WeakReference<Activity> activityRef$analytics_release;
            Activity activity;
            ViewGroup viewGroup;
            TouchEventDetails createTouchEventDetails;
            Intrinsics.checkNotNullParameter(detector, "detector");
            TouchLogger touchLogger = TouchLogger.INSTANCE;
            if (touchLogger.getListenerCount() != 0 && (activityRef$analytics_release = touchLogger.getActivityRef$analytics_release()) != null && (activity = activityRef$analytics_release.get()) != null) {
                Window window = activity.getWindow();
                Intrinsics.checkNotNullExpressionValue(window, "getWindow(...)");
                String identifyWindow$analytics_release = touchLogger.identifyWindow$analytics_release(window);
                MemoryStats memoryStats = TouchLoggerMemory.INSTANCE.getMemoryStats(TouchLogger.TAG);
                float focusX = detector.getFocusX();
                float focusY = detector.getFocusY();
                Pair<Integer, Integer> screenCoordsFromWindow = getScreenCoordsFromWindow(activity, focusX, focusY);
                int intValue = ((Number) screenCoordsFromWindow.a()).intValue();
                int intValue2 = ((Number) screenCoordsFromWindow.b()).intValue();
                float[] fArr = {focusX, focusY};
                View decorView = activity.getWindow().getDecorView();
                View view = null;
                if (decorView instanceof ViewGroup) {
                    viewGroup = (ViewGroup) decorView;
                } else {
                    viewGroup = null;
                }
                if (viewGroup != null) {
                    view = touchLogger.findTouchTargetView$analytics_release(fArr, viewGroup);
                }
                createTouchEventDetails = TouchEventListenerKt.createTouchEventDetails("pinch_start", System.currentTimeMillis(), intValue, intValue2, (int) fArr[0], (int) fArr[1], memoryStats, touchLogger.formatViewHierarchy$analytics_release(view), "pinch", (r35 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : identifyWindow$analytics_release, (r35 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : null, (r35 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : null, (r35 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : null, (r35 & 8192) != 0 ? null : null, (r35 & 16384) != 0 ? null : Double.valueOf(detector.getScaleFactor()));
                touchLogger.notifyListeners$analytics_release(createTouchEventDetails);
            }
            return true;
        }

        @Override // android.view.ScaleGestureDetector.SimpleOnScaleGestureListener, android.view.ScaleGestureDetector.OnScaleGestureListener
        public void onScaleEnd(@NotNull ScaleGestureDetector detector) {
            WeakReference<Activity> activityRef$analytics_release;
            Activity activity;
            ViewGroup viewGroup;
            TouchEventDetails createTouchEventDetails;
            Intrinsics.checkNotNullParameter(detector, "detector");
            TouchLogger touchLogger = TouchLogger.INSTANCE;
            if (touchLogger.getListenerCount() != 0 && (activityRef$analytics_release = touchLogger.getActivityRef$analytics_release()) != null && (activity = activityRef$analytics_release.get()) != null) {
                Window window = activity.getWindow();
                Intrinsics.checkNotNullExpressionValue(window, "getWindow(...)");
                String identifyWindow$analytics_release = touchLogger.identifyWindow$analytics_release(window);
                MemoryStats memoryStats = TouchLoggerMemory.INSTANCE.getMemoryStats(TouchLogger.TAG);
                float focusX = detector.getFocusX();
                float focusY = detector.getFocusY();
                Pair<Integer, Integer> screenCoordsFromWindow = getScreenCoordsFromWindow(activity, focusX, focusY);
                int intValue = ((Number) screenCoordsFromWindow.a()).intValue();
                int intValue2 = ((Number) screenCoordsFromWindow.b()).intValue();
                float[] fArr = {focusX, focusY};
                View decorView = activity.getWindow().getDecorView();
                View view = null;
                if (decorView instanceof ViewGroup) {
                    viewGroup = (ViewGroup) decorView;
                } else {
                    viewGroup = null;
                }
                if (viewGroup != null) {
                    view = touchLogger.findTouchTargetView$analytics_release(fArr, viewGroup);
                }
                createTouchEventDetails = TouchEventListenerKt.createTouchEventDetails("pinch_end", System.currentTimeMillis(), intValue, intValue2, (int) fArr[0], (int) fArr[1], memoryStats, touchLogger.formatViewHierarchy$analytics_release(view), "pinch", (r35 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : identifyWindow$analytics_release, (r35 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : null, (r35 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : null, (r35 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : null, (r35 & 8192) != 0 ? null : null, (r35 & 16384) != 0 ? null : Double.valueOf(detector.getScaleFactor()));
                touchLogger.notifyListeners$analytics_release(createTouchEventDetails);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u001b\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0082\b\u0018\u00002\u00020\u0001BW\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0003\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\u0005\u0012\u0006\u0010\b\u001a\u00020\u0003\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0005\u0012\u0006\u0010\n\u001a\u00020\u0003\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f\u0012\u0006\u0010\r\u001a\u00020\u0003¢\u0006\u0004\b\u000e\u0010\u000fJ\t\u0010\u001b\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\u001c\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\t\u0010\u001d\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\u001e\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\t\u0010\u001f\u001a\u00020\u0003HÆ\u0003J\u000b\u0010 \u001a\u0004\u0018\u00010\u0005HÆ\u0003J\t\u0010!\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\"\u001a\u0004\u0018\u00010\fHÆ\u0003J\t\u0010#\u001a\u00020\u0003HÆ\u0003Jk\u0010$\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00032\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u00052\b\b\u0002\u0010\b\u001a\u00020\u00032\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u00052\b\b\u0002\u0010\n\u001a\u00020\u00032\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\f2\b\b\u0002\u0010\r\u001a\u00020\u0003HÆ\u0001J\u0013\u0010%\u001a\u00020\u00032\b\u0010&\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010'\u001a\u00020(HÖ\u0001J\t\u0010)\u001a\u00020*HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0011\u0010\u0006\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0011R\u0013\u0010\u0007\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0013R\u0011\u0010\b\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0011R\u0013\u0010\t\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0013R\u0011\u0010\n\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0011R\u0013\u0010\u000b\u001a\u0004\u0018\u00010\f¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u001aR\u0011\u0010\r\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u0011¨\u0006+"}, d2 = {"Lcom/discord/analytics/touch/TouchLogger$ViewClassInfo;", "", "hasGetPointerEvents", "", "getPointerEventsMethod", "Ljava/lang/reflect/Method;", "hasGetZIndexMappedChildIndex", "getZIndexMappedChildIndexMethod", "hasGetHitSlopRect", "getHitSlopRectMethod", "hasNativeIDField", "nativeIDField", "Ljava/lang/reflect/Field;", "isReactView", "<init>", "(ZLjava/lang/reflect/Method;ZLjava/lang/reflect/Method;ZLjava/lang/reflect/Method;ZLjava/lang/reflect/Field;Z)V", "getHasGetPointerEvents", "()Z", "getGetPointerEventsMethod", "()Ljava/lang/reflect/Method;", "getHasGetZIndexMappedChildIndex", "getGetZIndexMappedChildIndexMethod", "getHasGetHitSlopRect", "getGetHitSlopRectMethod", "getHasNativeIDField", "getNativeIDField", "()Ljava/lang/reflect/Field;", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "copy", "equals", "other", "hashCode", "", "toString", "", "analytics_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class ViewClassInfo {
        private final Method getHitSlopRectMethod;
        private final Method getPointerEventsMethod;
        private final Method getZIndexMappedChildIndexMethod;
        private final boolean hasGetHitSlopRect;
        private final boolean hasGetPointerEvents;
        private final boolean hasGetZIndexMappedChildIndex;
        private final boolean hasNativeIDField;
        private final boolean isReactView;
        private final Field nativeIDField;

        public ViewClassInfo(boolean z10, Method method, boolean z11, Method method2, boolean z12, Method method3, boolean z13, Field field, boolean z14) {
            this.hasGetPointerEvents = z10;
            this.getPointerEventsMethod = method;
            this.hasGetZIndexMappedChildIndex = z11;
            this.getZIndexMappedChildIndexMethod = method2;
            this.hasGetHitSlopRect = z12;
            this.getHitSlopRectMethod = method3;
            this.hasNativeIDField = z13;
            this.nativeIDField = field;
            this.isReactView = z14;
        }

        public static /* synthetic */ ViewClassInfo copy$default(ViewClassInfo viewClassInfo, boolean z10, Method method, boolean z11, Method method2, boolean z12, Method method3, boolean z13, Field field, boolean z14, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                z10 = viewClassInfo.hasGetPointerEvents;
            }
            if ((i10 & 2) != 0) {
                method = viewClassInfo.getPointerEventsMethod;
            }
            if ((i10 & 4) != 0) {
                z11 = viewClassInfo.hasGetZIndexMappedChildIndex;
            }
            if ((i10 & 8) != 0) {
                method2 = viewClassInfo.getZIndexMappedChildIndexMethod;
            }
            if ((i10 & 16) != 0) {
                z12 = viewClassInfo.hasGetHitSlopRect;
            }
            if ((i10 & 32) != 0) {
                method3 = viewClassInfo.getHitSlopRectMethod;
            }
            if ((i10 & 64) != 0) {
                z13 = viewClassInfo.hasNativeIDField;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                field = viewClassInfo.nativeIDField;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z14 = viewClassInfo.isReactView;
            }
            Field field2 = field;
            boolean z15 = z14;
            Method method4 = method3;
            boolean z16 = z13;
            boolean z17 = z12;
            boolean z18 = z11;
            return viewClassInfo.copy(z10, method, z18, method2, z17, method4, z16, field2, z15);
        }

        public final boolean component1() {
            return this.hasGetPointerEvents;
        }

        public final Method component2() {
            return this.getPointerEventsMethod;
        }

        public final boolean component3() {
            return this.hasGetZIndexMappedChildIndex;
        }

        public final Method component4() {
            return this.getZIndexMappedChildIndexMethod;
        }

        public final boolean component5() {
            return this.hasGetHitSlopRect;
        }

        public final Method component6() {
            return this.getHitSlopRectMethod;
        }

        public final boolean component7() {
            return this.hasNativeIDField;
        }

        public final Field component8() {
            return this.nativeIDField;
        }

        public final boolean component9() {
            return this.isReactView;
        }

        @NotNull
        public final ViewClassInfo copy(boolean z10, Method method, boolean z11, Method method2, boolean z12, Method method3, boolean z13, Field field, boolean z14) {
            return new ViewClassInfo(z10, method, z11, method2, z12, method3, z13, field, z14);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof ViewClassInfo) {
                ViewClassInfo viewClassInfo = (ViewClassInfo) obj;
                return this.hasGetPointerEvents == viewClassInfo.hasGetPointerEvents && Intrinsics.areEqual(this.getPointerEventsMethod, viewClassInfo.getPointerEventsMethod) && this.hasGetZIndexMappedChildIndex == viewClassInfo.hasGetZIndexMappedChildIndex && Intrinsics.areEqual(this.getZIndexMappedChildIndexMethod, viewClassInfo.getZIndexMappedChildIndexMethod) && this.hasGetHitSlopRect == viewClassInfo.hasGetHitSlopRect && Intrinsics.areEqual(this.getHitSlopRectMethod, viewClassInfo.getHitSlopRectMethod) && this.hasNativeIDField == viewClassInfo.hasNativeIDField && Intrinsics.areEqual(this.nativeIDField, viewClassInfo.nativeIDField) && this.isReactView == viewClassInfo.isReactView;
            }
            return false;
        }

        public final Method getGetHitSlopRectMethod() {
            return this.getHitSlopRectMethod;
        }

        public final Method getGetPointerEventsMethod() {
            return this.getPointerEventsMethod;
        }

        public final Method getGetZIndexMappedChildIndexMethod() {
            return this.getZIndexMappedChildIndexMethod;
        }

        public final boolean getHasGetHitSlopRect() {
            return this.hasGetHitSlopRect;
        }

        public final boolean getHasGetPointerEvents() {
            return this.hasGetPointerEvents;
        }

        public final boolean getHasGetZIndexMappedChildIndex() {
            return this.hasGetZIndexMappedChildIndex;
        }

        public final boolean getHasNativeIDField() {
            return this.hasNativeIDField;
        }

        public final Field getNativeIDField() {
            return this.nativeIDField;
        }

        public int hashCode() {
            int hashCode = Boolean.hashCode(this.hasGetPointerEvents) * 31;
            Method method = this.getPointerEventsMethod;
            int hashCode2 = (((hashCode + (method == null ? 0 : method.hashCode())) * 31) + Boolean.hashCode(this.hasGetZIndexMappedChildIndex)) * 31;
            Method method2 = this.getZIndexMappedChildIndexMethod;
            int hashCode3 = (((hashCode2 + (method2 == null ? 0 : method2.hashCode())) * 31) + Boolean.hashCode(this.hasGetHitSlopRect)) * 31;
            Method method3 = this.getHitSlopRectMethod;
            int hashCode4 = (((hashCode3 + (method3 == null ? 0 : method3.hashCode())) * 31) + Boolean.hashCode(this.hasNativeIDField)) * 31;
            Field field = this.nativeIDField;
            return ((hashCode4 + (field != null ? field.hashCode() : 0)) * 31) + Boolean.hashCode(this.isReactView);
        }

        public final boolean isReactView() {
            return this.isReactView;
        }

        @NotNull
        public String toString() {
            boolean z10 = this.hasGetPointerEvents;
            Method method = this.getPointerEventsMethod;
            boolean z11 = this.hasGetZIndexMappedChildIndex;
            Method method2 = this.getZIndexMappedChildIndexMethod;
            boolean z12 = this.hasGetHitSlopRect;
            Method method3 = this.getHitSlopRectMethod;
            boolean z13 = this.hasNativeIDField;
            Field field = this.nativeIDField;
            boolean z14 = this.isReactView;
            return "ViewClassInfo(hasGetPointerEvents=" + z10 + ", getPointerEventsMethod=" + method + ", hasGetZIndexMappedChildIndex=" + z11 + ", getZIndexMappedChildIndexMethod=" + method2 + ", hasGetHitSlopRect=" + z12 + ", getHitSlopRectMethod=" + method3 + ", hasNativeIDField=" + z13 + ", nativeIDField=" + field + ", isReactView=" + z14 + ")";
        }
    }

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[PointerEvents.values().length];
            try {
                iArr[PointerEvents.NONE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[PointerEvents.BOX_ONLY.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[PointerEvents.BOX_NONE.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[PointerEvents.AUTO.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0007\b\u0002\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0010\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\tH\u0016J\u001a\u0010\n\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\t2\b\u0010\u000b\u001a\u0004\u0018\u00010\fH\u0016J\u0010\u0010\r\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\tH\u0016J\u0010\u0010\u000e\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\tH\u0016J\u0010\u0010\u000f\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\tH\u0016J\u0018\u0010\u0010\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\u0011\u001a\u00020\fH\u0016J\u0010\u0010\u0012\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\tH\u0016R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0013"}, d2 = {"Lcom/discord/analytics/touch/TouchLogger$WindowFocusListener;", "Landroid/app/Application$ActivityLifecycleCallbacks;", "touchLogger", "Lcom/discord/analytics/touch/TouchLogger;", "<init>", "(Lcom/discord/analytics/touch/TouchLogger;)V", "onActivityResumed", "", "activity", "Landroid/app/Activity;", "onActivityCreated", "savedInstanceState", "Landroid/os/Bundle;", "onActivityStarted", "onActivityPaused", "onActivityStopped", "onActivitySaveInstanceState", "outState", "onActivityDestroyed", "analytics_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class WindowFocusListener implements Application.ActivityLifecycleCallbacks {
        @NotNull
        private final TouchLogger touchLogger;

        public WindowFocusListener(@NotNull TouchLogger touchLogger) {
            Intrinsics.checkNotNullParameter(touchLogger, "touchLogger");
            this.touchLogger = touchLogger;
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivityCreated(@NotNull Activity activity, Bundle bundle) {
            Intrinsics.checkNotNullParameter(activity, "activity");
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivityDestroyed(@NotNull Activity activity) {
            Intrinsics.checkNotNullParameter(activity, "activity");
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivityPaused(@NotNull Activity activity) {
            Intrinsics.checkNotNullParameter(activity, "activity");
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivityResumed(@NotNull Activity activity) {
            Intrinsics.checkNotNullParameter(activity, "activity");
            this.touchLogger.scanForNewWindows(activity);
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivitySaveInstanceState(@NotNull Activity activity, @NotNull Bundle outState) {
            Intrinsics.checkNotNullParameter(activity, "activity");
            Intrinsics.checkNotNullParameter(outState, "outState");
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivityStarted(@NotNull Activity activity) {
            Intrinsics.checkNotNullParameter(activity, "activity");
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivityStopped(@NotNull Activity activity) {
            Intrinsics.checkNotNullParameter(activity, "activity");
        }
    }

    private TouchLogger() {
    }

    private final void detectPortalsAndBottomSheets(ViewGroup viewGroup) {
        detectPortalsAndBottomSheets$scan$default(new Ref.BooleanRef(), new Ref.BooleanRef(), viewGroup, 0, 8, null);
    }

    private static final void detectPortalsAndBottomSheets$scan(Ref.BooleanRef booleanRef, Ref.BooleanRef booleanRef2, View view, int i10) {
        if (i10 <= 20) {
            String name = view.getClass().getName();
            Intrinsics.checkNotNull(name);
            if (StringsKt.V(name, "Portal", false, 2, null)) {
                booleanRef.element = true;
            } else if (StringsKt.V(name, "BottomSheet", false, 2, null) || StringsKt.V(name, "bottomsheet", false, 2, null)) {
                booleanRef2.element = true;
            }
            if (view instanceof ViewGroup) {
                ViewGroup viewGroup = (ViewGroup) view;
                int childCount = viewGroup.getChildCount();
                for (int i11 = 0; i11 < childCount; i11++) {
                    View childAt = viewGroup.getChildAt(i11);
                    Intrinsics.checkNotNullExpressionValue(childAt, "getChildAt(...)");
                    detectPortalsAndBottomSheets$scan(booleanRef, booleanRef2, childAt, i10 + 1);
                }
            }
        }
    }

    static /* synthetic */ void detectPortalsAndBottomSheets$scan$default(Ref.BooleanRef booleanRef, Ref.BooleanRef booleanRef2, View view, int i10, int i11, Object obj) {
        if ((i11 & 8) != 0) {
            i10 = 0;
        }
        detectPortalsAndBottomSheets$scan(booleanRef, booleanRef2, view, i10);
    }

    private final View findTouchTargetChildrenOnly(float[] fArr, View view) {
        if (!(view instanceof ViewGroup)) {
            return null;
        }
        return findTouchTargetInChildren(fArr, (ViewGroup) view);
    }

    private final View findTouchTargetChildrenThenSelf(float[] fArr, View view) {
        View findTouchTargetInChildren;
        if ((view instanceof ViewGroup) && (findTouchTargetInChildren = findTouchTargetInChildren(fArr, (ViewGroup) view)) != null) {
            return findTouchTargetInChildren;
        }
        if (isTouchPointInView(fArr[0], fArr[1], view)) {
            return view;
        }
        return null;
    }

    private final View findTouchTargetInChildren(float[] fArr, ViewGroup viewGroup) {
        int childCount;
        if ((!isTouchPointInView(fArr[0], fArr[1], viewGroup) && viewGroup.getClipChildren()) || (childCount = viewGroup.getChildCount()) == 0) {
            return null;
        }
        int i10 = childCount - 1;
        while (-1 < i10) {
            View childAt = viewGroup.getChildAt(getZIndexMappedChildIndex(viewGroup, i10));
            PointF pointF = tempPoint;
            float f10 = fArr[0];
            float f11 = fArr[1];
            Intrinsics.checkNotNull(childAt);
            ViewGroup viewGroup2 = viewGroup;
            getChildPoint(f10, f11, viewGroup2, childAt, pointF);
            float f12 = fArr[0];
            float f13 = fArr[1];
            fArr[0] = pointF.x;
            fArr[1] = pointF.y;
            View findTouchTargetView$analytics_release = findTouchTargetView$analytics_release(fArr, childAt);
            if (findTouchTargetView$analytics_release != null) {
                return findTouchTargetView$analytics_release;
            }
            fArr[0] = f12;
            fArr[1] = f13;
            i10--;
            viewGroup = viewGroup2;
        }
        return null;
    }

    private final View findTouchTargetSelfOnly(float[] fArr, View view) {
        if (isTouchPointInView(fArr[0], fArr[1], view)) {
            return view;
        }
        return null;
    }

    private final void getChildPoint(float f10, float f11, ViewGroup viewGroup, View view, PointF pointF) {
        float scrollX = (f10 + viewGroup.getScrollX()) - view.getLeft();
        float scrollY = (f11 + viewGroup.getScrollY()) - view.getTop();
        Matrix matrix = view.getMatrix();
        if (!matrix.isIdentity()) {
            float[] fArr = matrixTransformCoords;
            fArr[0] = scrollX;
            fArr[1] = scrollY;
            Matrix matrix2 = inverseMatrix;
            if (matrix.invert(matrix2)) {
                matrix2.mapPoints(fArr);
                scrollX = fArr[0];
                scrollY = fArr[1];
            }
        }
        pointF.set(scrollX, scrollY);
    }

    private final Rect getHitSlopRect(View view) {
        ViewClassInfo viewClassInfo = getViewClassInfo(view.getClass());
        if (viewClassInfo.getHasGetHitSlopRect() && viewClassInfo.getGetHitSlopRectMethod() != null) {
            try {
                Object invoke = viewClassInfo.getGetHitSlopRectMethod().invoke(view, null);
                if (invoke instanceof Rect) {
                    return (Rect) invoke;
                }
            } catch (Exception unused) {
            }
        }
        return null;
    }

    private final String getNativeID(View view) {
        ViewClassInfo viewClassInfo = getViewClassInfo(view.getClass());
        if (viewClassInfo.getHasNativeIDField() && viewClassInfo.getNativeIDField() != null) {
            try {
                Object obj = viewClassInfo.getNativeIDField().get(view);
                if (obj instanceof String) {
                    return (String) obj;
                }
            } catch (Exception unused) {
            }
        }
        return null;
    }

    private final PointerEvents getPointerEvents(View view) {
        PointerEvents pointerEvents = PointerEvents.AUTO;
        ViewClassInfo viewClassInfo = getViewClassInfo(view.getClass());
        if (viewClassInfo.getHasGetPointerEvents() && viewClassInfo.getGetPointerEventsMethod() != null) {
            try {
                Object invoke = viewClassInfo.getGetPointerEventsMethod().invoke(view, null);
                String str = (invoke == null || (str = invoke.toString()) == null) ? "" : "";
                switch (str.hashCode()) {
                    case -2089141766:
                        if (!str.equals(ViewProps.BOX_NONE)) {
                            break;
                        }
                        pointerEvents = PointerEvents.BOX_NONE;
                        break;
                    case -2089112978:
                        if (!str.equals("box-only")) {
                            break;
                        }
                        pointerEvents = PointerEvents.BOX_ONLY;
                        break;
                    case -1230786228:
                        if (!str.equals("BOX_NONE")) {
                            break;
                        }
                        pointerEvents = PointerEvents.BOX_NONE;
                        break;
                    case -1230757440:
                        if (!str.equals("BOX_ONLY")) {
                            break;
                        }
                        pointerEvents = PointerEvents.BOX_ONLY;
                        break;
                    case 2402104:
                        if (!str.equals("NONE")) {
                            break;
                        }
                        pointerEvents = PointerEvents.NONE;
                        break;
                    case 3387192:
                        if (!str.equals(ViewProps.NONE)) {
                            break;
                        }
                        pointerEvents = PointerEvents.NONE;
                        break;
                }
            } catch (Exception unused) {
            }
        }
        if (!view.isEnabled()) {
            int i10 = WhenMappings.$EnumSwitchMapping$0[pointerEvents.ordinal()];
            if (i10 != 2) {
                if (i10 == 4) {
                    return PointerEvents.BOX_NONE;
                }
                return pointerEvents;
            }
            return PointerEvents.NONE;
        }
        return pointerEvents;
    }

    private final ViewClassInfo getViewClassInfo(Class<?> cls) {
        boolean z10;
        Method method;
        boolean z11;
        Method method2;
        boolean z12;
        Method method3;
        boolean z13;
        Map<Class<?>, ViewClassInfo> map = viewClassInfoCache;
        ViewClassInfo viewClassInfo = map.get(cls);
        if (viewClassInfo == null) {
            String name = cls.getName();
            Intrinsics.checkNotNull(name);
            Field field = null;
            boolean V = StringsKt.V(name, BuildConfig.LIBRARY_PACKAGE_NAME, false, 2, null);
            try {
                z10 = true;
                method = cls.getMethod("getPointerEvents", null);
            } catch (Exception unused) {
                z10 = false;
                method = null;
            }
            try {
                z11 = true;
                method2 = cls.getMethod("getZIndexMappedChildIndex", Integer.TYPE);
            } catch (Exception unused2) {
                z11 = false;
                method2 = null;
            }
            try {
                z12 = true;
                method3 = cls.getMethod("getHitSlopRect", null);
            } catch (Exception unused3) {
                z12 = false;
                method3 = null;
            }
            try {
                field = cls.getField(ViewProps.NATIVE_ID);
                z13 = true;
            } catch (Exception unused4) {
                z13 = false;
            }
            ViewClassInfo viewClassInfo2 = new ViewClassInfo(z10, method, z11, method2, z12, method3, z13, field, V);
            map.put(cls, viewClassInfo2);
            viewClassInfo = viewClassInfo2;
        }
        return viewClassInfo;
    }

    private final int getZIndexMappedChildIndex(ViewGroup viewGroup, int i10) {
        ViewClassInfo viewClassInfo = getViewClassInfo(viewGroup.getClass());
        if (viewClassInfo.getHasGetZIndexMappedChildIndex() && viewClassInfo.getGetZIndexMappedChildIndexMethod() != null) {
            try {
                Object invoke = viewClassInfo.getGetZIndexMappedChildIndexMethod().invoke(viewGroup, Integer.valueOf(i10));
                Intrinsics.checkNotNull(invoke, "null cannot be cast to non-null type kotlin.Int");
                return ((Integer) invoke).intValue();
            } catch (Exception unused) {
            }
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:52:0x00fe  */
    /* JADX WARN: Removed duplicated region for block: B:58:? A[RETURN, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void handleTouchEvent(android.view.MotionEvent r40, android.view.ViewGroup r41, java.lang.String r42) {
        /*
            Method dump skipped, instructions count: 438
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.analytics.touch.TouchLogger.handleTouchEvent(android.view.MotionEvent, android.view.ViewGroup, java.lang.String):void");
    }

    private final boolean isTouchPointInView(float f10, float f11, View view) {
        Rect hitSlopRect = getHitSlopRect(view);
        if (hitSlopRect != null) {
            if (f10 < (-hitSlopRect.left) || f10 >= view.getWidth() + hitSlopRect.right || f11 < (-hitSlopRect.top) || f11 >= view.getHeight() + hitSlopRect.bottom) {
                return false;
            }
            return true;
        } else if (f10 < 0.0f || f10 >= view.getWidth() || f11 < 0.0f || f11 >= view.getHeight()) {
            return false;
        } else {
            return true;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void notifyListeners$lambda$7(List list, TouchEventDetails touchEventDetails) {
        Iterator it = list.iterator();
        while (it.hasNext()) {
            OnEventRecognizedListener onEventRecognizedListener = (OnEventRecognizedListener) it.next();
            try {
                onEventRecognizedListener.onEventRecognized(touchEventDetails);
            } catch (Exception e10) {
                Log log = Log.INSTANCE;
                String simpleName = onEventRecognizedListener.getClass().getSimpleName();
                log.e(TAG, "Listener " + simpleName + " threw exception", e10);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void scanForNewWindows(Activity activity) {
        View view;
        Field field;
        Object obj;
        Window window;
        try {
            Class<?> cls = Class.forName("android.view.WindowManagerGlobal");
            Object invoke = cls.getMethod("getInstance", null).invoke(null, null);
            Object invoke2 = cls.getMethod("getViewRootNames", null).invoke(invoke, null);
            Intrinsics.checkNotNull(invoke2, "null cannot be cast to non-null type kotlin.Array<*>");
            Method method = cls.getMethod("getRootView", String.class);
            for (Object obj2 : (Object[]) invoke2) {
                try {
                    Object invoke3 = method.invoke(invoke, obj2);
                    if (invoke3 instanceof View) {
                        view = (View) invoke3;
                    } else {
                        view = null;
                    }
                    if (view != null) {
                        ViewParent parent = view.getParent();
                        if (parent != null) {
                            field = parent.getClass().getDeclaredField("mWindow");
                        } else {
                            field = null;
                        }
                        if (field != null) {
                            field.setAccessible(true);
                        }
                        if (field != null) {
                            obj = field.get(parent);
                        } else {
                            obj = null;
                        }
                        if (obj instanceof Window) {
                            window = (Window) obj;
                        } else {
                            window = null;
                        }
                        if (window != null && !trackedWindows.containsKey(window)) {
                            TouchLogger touchLogger = INSTANCE;
                            touchLogger.trackWindow(window, touchLogger.identifyWindow$analytics_release(window));
                        }
                    }
                } catch (Exception unused) {
                }
            }
        } catch (Exception e10) {
            Log.w$default(Log.INSTANCE, TAG, "Could not scan for windows: " + e10.getMessage(), (Throwable) null, 4, (Object) null);
        }
    }

    private final void startWindowMonitoring(Activity activity) {
        Application application2 = activity.getApplication();
        WindowFocusListener windowFocusListener2 = new WindowFocusListener(this);
        windowFocusListener = windowFocusListener2;
        application2.registerActivityLifecycleCallbacks(windowFocusListener2);
        final View decorView = activity.getWindow().getDecorView();
        Intrinsics.checkNotNullExpressionValue(decorView, "getDecorView(...)");
        monitoredDecorView = new WeakReference<>(decorView);
        windowFocusChangeListener = new ViewTreeObserver.OnWindowFocusChangeListener() { // from class: com.discord.analytics.touch.a
            @Override // android.view.ViewTreeObserver.OnWindowFocusChangeListener
            public final void onWindowFocusChanged(boolean z10) {
                TouchLogger.startWindowMonitoring$lambda$8(z10);
            }
        };
        decorView.getViewTreeObserver().addOnWindowFocusChangeListener(windowFocusChangeListener);
        if (decorView instanceof ViewGroup) {
            globalLayoutListener = new ViewTreeObserver.OnGlobalLayoutListener() { // from class: com.discord.analytics.touch.b
                @Override // android.view.ViewTreeObserver.OnGlobalLayoutListener
                public final void onGlobalLayout() {
                    TouchLogger.startWindowMonitoring$lambda$9(decorView);
                }
            };
            ((ViewGroup) decorView).getViewTreeObserver().addOnGlobalLayoutListener(globalLayoutListener);
        }
        Log.i$default(Log.INSTANCE, TAG, "📡 Started monitoring", (Throwable) null, 4, (Object) null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void startWindowMonitoring$lambda$8(boolean z10) {
        Activity activity;
        if (z10) {
            WeakReference<Activity> weakReference = activityRef;
            if (weakReference != null) {
                activity = weakReference.get();
            } else {
                activity = null;
            }
            if (activity != null) {
                INSTANCE.scanForNewWindows(activity);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void startWindowMonitoring$lambda$9(View view) {
        INSTANCE.detectPortalsAndBottomSheets((ViewGroup) view);
    }

    private final void stopWindowMonitoring() {
        View view;
        ViewTreeObserver viewTreeObserver;
        Application application2;
        WindowFocusListener windowFocusListener2 = windowFocusListener;
        if (windowFocusListener2 != null && (application2 = application) != null) {
            application2.unregisterActivityLifecycleCallbacks(windowFocusListener2);
        }
        windowFocusListener = null;
        WeakReference<View> weakReference = monitoredDecorView;
        if (weakReference != null) {
            view = weakReference.get();
        } else {
            view = null;
        }
        if (view != null) {
            viewTreeObserver = view.getViewTreeObserver();
        } else {
            viewTreeObserver = null;
        }
        if (viewTreeObserver != null && viewTreeObserver.isAlive()) {
            ViewTreeObserver.OnWindowFocusChangeListener onWindowFocusChangeListener = windowFocusChangeListener;
            if (onWindowFocusChangeListener != null) {
                viewTreeObserver.removeOnWindowFocusChangeListener(onWindowFocusChangeListener);
            }
            ViewTreeObserver.OnGlobalLayoutListener onGlobalLayoutListener = globalLayoutListener;
            if (onGlobalLayoutListener != null) {
                viewTreeObserver.removeOnGlobalLayoutListener(onGlobalLayoutListener);
            }
        }
        windowFocusChangeListener = null;
        globalLayoutListener = null;
        monitoredDecorView = null;
    }

    private final void trackWindow(final Window window, final String str) {
        Map<Window, Window.Callback> map = trackedWindows;
        if (map.containsKey(window)) {
            return;
        }
        final Window.Callback callback = window.getCallback();
        if (callback == null) {
            Log log = Log.INSTANCE;
            Log.w$default(log, TAG, "!  Window " + str + " has no callback, skipping", (Throwable) null, 4, (Object) null);
            return;
        }
        map.put(window, callback);
        window.setCallback(new Window.Callback(callback, window, str) { // from class: com.discord.analytics.touch.TouchLogger$trackWindow$1
            private final /* synthetic */ Window.Callback $$delegate_0;
            final /* synthetic */ String $name;
            final /* synthetic */ Window.Callback $originalCallback;
            final /* synthetic */ Window $window;

            /* JADX INFO: Access modifiers changed from: package-private */
            {
                this.$originalCallback = callback;
                this.$window = window;
                this.$name = str;
                this.$$delegate_0 = callback;
            }

            @Override // android.view.Window.Callback
            public boolean dispatchGenericMotionEvent(MotionEvent motionEvent) {
                return this.$$delegate_0.dispatchGenericMotionEvent(motionEvent);
            }

            @Override // android.view.Window.Callback
            public boolean dispatchKeyEvent(KeyEvent keyEvent) {
                return this.$$delegate_0.dispatchKeyEvent(keyEvent);
            }

            @Override // android.view.Window.Callback
            public boolean dispatchKeyShortcutEvent(KeyEvent keyEvent) {
                return this.$$delegate_0.dispatchKeyShortcutEvent(keyEvent);
            }

            @Override // android.view.Window.Callback
            public boolean dispatchPopulateAccessibilityEvent(AccessibilityEvent accessibilityEvent) {
                return this.$$delegate_0.dispatchPopulateAccessibilityEvent(accessibilityEvent);
            }

            @Override // android.view.Window.Callback
            public boolean dispatchTouchEvent(MotionEvent motionEvent) {
                boolean z10;
                ScaleGestureDetector scaleGestureDetector2;
                if (motionEvent != null) {
                    z10 = TouchLogger.isEnabled;
                    if (z10) {
                        scaleGestureDetector2 = TouchLogger.scaleGestureDetector;
                        if (scaleGestureDetector2 != null) {
                            scaleGestureDetector2.onTouchEvent(motionEvent);
                        }
                        if (motionEvent.getPointerCount() == 1 && motionEvent.getActionMasked() != 6) {
                            View decorView = this.$window.getDecorView();
                            Intrinsics.checkNotNullExpressionValue(decorView, "getDecorView(...)");
                            if (decorView instanceof ViewGroup) {
                                TouchLogger.INSTANCE.handleTouchEvent(motionEvent, (ViewGroup) decorView, this.$name);
                            }
                        }
                    }
                }
                return this.$originalCallback.dispatchTouchEvent(motionEvent);
            }

            @Override // android.view.Window.Callback
            public boolean dispatchTrackballEvent(MotionEvent motionEvent) {
                return this.$$delegate_0.dispatchTrackballEvent(motionEvent);
            }

            @Override // android.view.Window.Callback
            public void onActionModeFinished(ActionMode actionMode) {
                this.$$delegate_0.onActionModeFinished(actionMode);
            }

            @Override // android.view.Window.Callback
            public void onActionModeStarted(ActionMode actionMode) {
                this.$$delegate_0.onActionModeStarted(actionMode);
            }

            @Override // android.view.Window.Callback
            public void onAttachedToWindow() {
                this.$$delegate_0.onAttachedToWindow();
            }

            @Override // android.view.Window.Callback
            public void onContentChanged() {
                this.$$delegate_0.onContentChanged();
            }

            @Override // android.view.Window.Callback
            public boolean onCreatePanelMenu(int i10, @NonNull Menu p12) {
                Intrinsics.checkNotNullParameter(p12, "p1");
                return this.$$delegate_0.onCreatePanelMenu(i10, p12);
            }

            @Override // android.view.Window.Callback
            @Nullable
            public View onCreatePanelView(int i10) {
                return this.$$delegate_0.onCreatePanelView(i10);
            }

            @Override // android.view.Window.Callback
            public void onDetachedFromWindow() {
                this.$$delegate_0.onDetachedFromWindow();
            }

            @Override // android.view.Window.Callback
            public boolean onMenuItemSelected(int i10, @NonNull MenuItem p12) {
                Intrinsics.checkNotNullParameter(p12, "p1");
                return this.$$delegate_0.onMenuItemSelected(i10, p12);
            }

            @Override // android.view.Window.Callback
            public boolean onMenuOpened(int i10, @NonNull Menu p12) {
                Intrinsics.checkNotNullParameter(p12, "p1");
                return this.$$delegate_0.onMenuOpened(i10, p12);
            }

            @Override // android.view.Window.Callback
            public void onPanelClosed(int i10, @NonNull Menu p12) {
                Intrinsics.checkNotNullParameter(p12, "p1");
                this.$$delegate_0.onPanelClosed(i10, p12);
            }

            @Override // android.view.Window.Callback
            public boolean onPreparePanel(int i10, @Nullable View view, @NonNull Menu p22) {
                Intrinsics.checkNotNullParameter(p22, "p2");
                return this.$$delegate_0.onPreparePanel(i10, view, p22);
            }

            @Override // android.view.Window.Callback
            public boolean onSearchRequested() {
                return this.$$delegate_0.onSearchRequested();
            }

            @Override // android.view.Window.Callback
            public void onWindowAttributesChanged(WindowManager.LayoutParams layoutParams) {
                this.$$delegate_0.onWindowAttributesChanged(layoutParams);
            }

            @Override // android.view.Window.Callback
            public void onWindowFocusChanged(boolean z10) {
                this.$$delegate_0.onWindowFocusChanged(z10);
            }

            @Override // android.view.Window.Callback
            @Nullable
            public ActionMode onWindowStartingActionMode(ActionMode.Callback callback2) {
                return this.$$delegate_0.onWindowStartingActionMode(callback2);
            }

            @Override // android.view.Window.Callback
            public boolean onSearchRequested(SearchEvent searchEvent) {
                return this.$$delegate_0.onSearchRequested(searchEvent);
            }

            @Override // android.view.Window.Callback
            @Nullable
            public ActionMode onWindowStartingActionMode(ActionMode.Callback callback2, int i10) {
                return this.$$delegate_0.onWindowStartingActionMode(callback2, i10);
            }
        });
        Log log2 = Log.INSTANCE;
        Log.i$default(log2, TAG, "📱 Now tracking: " + str, (Throwable) null, 4, (Object) null);
    }

    public final void clearListeners() {
        synchronized (listenerLock) {
            Set<OnEventRecognizedListener> set = eventListeners;
            int size = set.size();
            set.clear();
            Log log = Log.INSTANCE;
            Log.i$default(log, TAG, "✅ Cleared " + size + " listeners", (Throwable) null, 4, (Object) null);
            Unit unit = Unit.f31988a;
        }
    }

    public final void disable(@NotNull Activity activity) {
        Intrinsics.checkNotNullParameter(activity, "activity");
        disable();
    }

    public final void enable(@NotNull Activity activity) {
        Intrinsics.checkNotNullParameter(activity, "activity");
        if (isEnabled) {
            return;
        }
        activityRef = new WeakReference<>(activity);
        application = activity.getApplication();
        scaleGestureDetector = new ScaleGestureDetector(activity, new ScaleGestureListener());
        Window window = activity.getWindow();
        Intrinsics.checkNotNullExpressionValue(window, "getWindow(...)");
        String simpleName = activity.getClass().getSimpleName();
        Intrinsics.checkNotNullExpressionValue(simpleName, "getSimpleName(...)");
        trackWindow(window, simpleName);
        startWindowMonitoring(activity);
        isEnabled = true;
        TouchLoggerMemory touchLoggerMemory = TouchLoggerMemory.INSTANCE;
        MemoryStats memoryStats = touchLoggerMemory.getMemoryStats(TAG);
        Log log = Log.INSTANCE;
        Log.i$default(log, TAG, "✅ Touch logging enabled", (Throwable) null, 4, (Object) null);
        String formatMemoryStats = touchLoggerMemory.formatMemoryStats(memoryStats);
        Log.i$default(log, TAG, "   " + formatMemoryStats, (Throwable) null, 4, (Object) null);
    }

    public final View findTouchTargetView$analytics_release(@NotNull float[] eventCoords, @NotNull View view) {
        Intrinsics.checkNotNullParameter(eventCoords, "eventCoords");
        Intrinsics.checkNotNullParameter(view, "view");
        int i10 = WhenMappings.$EnumSwitchMapping$0[getPointerEvents(view).ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 == 4) {
                        return findTouchTargetChildrenThenSelf(eventCoords, view);
                    }
                    throw new p();
                }
                return findTouchTargetChildrenOnly(eventCoords, view);
            }
            return findTouchTargetSelfOnly(eventCoords, view);
        }
        return null;
    }

    @NotNull
    public final String formatViewHierarchy$analytics_release(View view) {
        float elevation;
        String str;
        String str2;
        int i10;
        if (view == null) {
            return "  No view found";
        }
        ArrayList arrayList = new ArrayList();
        View view2 = view;
        int i11 = 0;
        while (view2 != null) {
            String F = StringsKt.F("  ", i11);
            String simpleName = view2.getClass().getSimpleName();
            ArrayList arrayList2 = new ArrayList();
            Intrinsics.checkNotNull(simpleName);
            arrayList2.add(simpleName);
            String name = view2.getClass().getName();
            Intrinsics.checkNotNull(name);
            if (StringsKt.V(name, "Portal", false, 2, null)) {
                arrayList2.add("(Portal)");
            } else if (StringsKt.V(name, "BottomSheet", false, 2, null) || StringsKt.V(name, "bottomsheet", false, 2, null)) {
                arrayList2.add("(BottomSheet)");
            }
            if (view2.getTranslationX() != 0.0f || view2.getTranslationY() != 0.0f) {
                arrayList2.add("[tx=" + ((int) view2.getTranslationX()) + ", ty=" + ((int) view2.getTranslationY()) + "]");
            }
            if (view2.getRotation() != 0.0f) {
                arrayList2.add("[rot=" + ((int) view2.getRotation()) + "°]");
            }
            if (view2.getScaleX() != 1.0f || view2.getScaleY() != 1.0f) {
                StringCompanionObject stringCompanionObject = StringCompanionObject.INSTANCE;
                Locale locale = Locale.US;
                String format = String.format(locale, "%.1f", Arrays.copyOf(new Object[]{Float.valueOf(view2.getScaleX())}, 1));
                Intrinsics.checkNotNullExpressionValue(format, "format(...)");
                String format2 = String.format(locale, "%.1f", Arrays.copyOf(new Object[]{Float.valueOf(view2.getScaleY())}, 1));
                Intrinsics.checkNotNullExpressionValue(format2, "format(...)");
                arrayList2.add("[scale=" + format + "x" + format2 + "]");
            }
            if (view2.getElevation() + view2.getTranslationZ() != 0.0f) {
                arrayList2.add("[z=" + ((int) elevation) + "dp]");
            }
            if (view2 instanceof RecyclerView) {
                RecyclerView recyclerView = (RecyclerView) view2;
                RecyclerView.Adapter adapter = recyclerView.getAdapter();
                if (adapter != null) {
                    i10 = adapter.getItemCount();
                } else {
                    i10 = 0;
                }
                arrayList2.add("[items=" + i10 + ", visible=" + recyclerView.getChildCount() + "]");
            }
            ViewParent parent = view2.getParent();
            if (parent instanceof RecyclerView) {
                try {
                    int bindingAdapterPosition = ((RecyclerView) parent).getChildViewHolder(view2).getBindingAdapterPosition();
                    if (bindingAdapterPosition != -1) {
                        arrayList2.add("[position=" + bindingAdapterPosition + "]");
                    }
                } catch (Exception unused) {
                }
            }
            String nativeID = getNativeID(view2);
            Object tag = view2.getTag();
            if (tag != null) {
                str = tag.toString();
            } else {
                str = null;
            }
            CharSequence contentDescription = view2.getContentDescription();
            if (contentDescription != null) {
                str2 = contentDescription.toString();
            } else {
                str2 = null;
            }
            if (nativeID != null) {
                arrayList2.add("[nativeID=\"" + nativeID + "\"]");
            } else if (str2 != null) {
                arrayList2.add("[desc=\"" + str2 + "\"]");
            } else if (str != null && str.length() > 0) {
                arrayList2.add("[tag=\"" + str + "\"]");
            }
            if (getViewClassInfo(view2.getClass()).isReactView()) {
                arrayList2.add("(React)");
            }
            PointerEvents pointerEvents = getPointerEvents(view2);
            if (pointerEvents != PointerEvents.AUTO) {
                arrayList2.add("[pointerEvents=" + pointerEvents + "]");
            }
            if (!view2.isEnabled()) {
                arrayList2.add("[disabled]");
            }
            arrayList.add(F + CollectionsKt.x0(arrayList2, " ", null, null, 0, null, null, 62, null));
            ViewParent parent2 = view2.getParent();
            if (parent2 instanceof View) {
                view2 = (View) parent2;
            } else {
                view2 = null;
            }
            i11++;
        }
        return CollectionsKt.x0(arrayList, ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, null, null, 0, null, null, 62, null);
    }

    public final WeakReference<Activity> getActivityRef$analytics_release() {
        return activityRef;
    }

    public final int getListenerCount() {
        int size;
        synchronized (listenerLock) {
            size = eventListeners.size();
        }
        return size;
    }

    @NotNull
    public final String identifyWindow$analytics_release(@NotNull Window window) {
        Intrinsics.checkNotNullParameter(window, "window");
        String simpleName = window.getClass().getSimpleName();
        Intrinsics.checkNotNullExpressionValue(simpleName, "getSimpleName(...)");
        if (StringsKt.V(simpleName, "PhoneWindow", false, 2, null)) {
            Context context = window.getContext();
            String simpleName2 = context.getClass().getSimpleName();
            Intrinsics.checkNotNullExpressionValue(simpleName2, "getSimpleName(...)");
            if (StringsKt.V(simpleName2, "Dialog", false, 2, null)) {
                return "Dialog";
            }
            String simpleName3 = context.getClass().getSimpleName();
            Intrinsics.checkNotNullExpressionValue(simpleName3, "getSimpleName(...)");
            if (StringsKt.V(simpleName3, "BottomSheet", false, 2, null)) {
                return "BottomSheet";
            }
            String simpleName4 = window.getContext().getClass().getSimpleName();
            Intrinsics.checkNotNullExpressionValue(simpleName4, "getSimpleName(...)");
            return simpleName4;
        }
        String simpleName5 = window.getClass().getSimpleName();
        Intrinsics.checkNotNullExpressionValue(simpleName5, "getSimpleName(...)");
        return simpleName5;
    }

    public final void notifyListeners$analytics_release(@NotNull final TouchEventDetails event) {
        final List h12;
        Intrinsics.checkNotNullParameter(event, "event");
        synchronized (listenerLock) {
            h12 = CollectionsKt.h1(eventListeners);
        }
        callbackHandler.post(new Runnable() { // from class: com.discord.analytics.touch.c
            @Override // java.lang.Runnable
            public final void run() {
                TouchLogger.notifyListeners$lambda$7(h12, event);
            }
        });
    }

    public final void registerListener(@NotNull OnEventRecognizedListener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        synchronized (listenerLock) {
            Set<OnEventRecognizedListener> set = eventListeners;
            set.add(listener);
            Log log = Log.INSTANCE;
            String simpleName = listener.getClass().getSimpleName();
            int size = set.size();
            Log.i$default(log, TAG, "✅ Registered listener: " + simpleName + " (total: " + size + ")", (Throwable) null, 4, (Object) null);
            Unit unit = Unit.f31988a;
        }
    }

    public final void setActivityRef$analytics_release(WeakReference<Activity> weakReference) {
        activityRef = weakReference;
    }

    public final void unregisterListener(@NotNull OnEventRecognizedListener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        synchronized (listenerLock) {
            try {
                Set<OnEventRecognizedListener> set = eventListeners;
                if (set.remove(listener)) {
                    Log log = Log.INSTANCE;
                    String simpleName = listener.getClass().getSimpleName();
                    int size = set.size();
                    Log.i$default(log, TAG, "✅ Unregistered listener: " + simpleName + " (total: " + size + ")", (Throwable) null, 4, (Object) null);
                }
                Unit unit = Unit.f31988a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void disable() {
        if (isEnabled) {
            stopWindowMonitoring();
            for (Map.Entry<Window, Window.Callback> entry : trackedWindows.entrySet()) {
                Window key = entry.getKey();
                try {
                    key.setCallback(entry.getValue());
                    Log log = Log.INSTANCE;
                    String identifyWindow$analytics_release = INSTANCE.identifyWindow$analytics_release(key);
                    Log.i$default(log, TAG, "   Restored window: " + identifyWindow$analytics_release, (Throwable) null, 4, (Object) null);
                } catch (Exception e10) {
                    Log.INSTANCE.e(TAG, "   Failed to restore window", e10);
                }
            }
            trackedWindows.clear();
            viewClassInfoCache.clear();
            scaleGestureDetector = null;
            activityRef = null;
            application = null;
            isEnabled = false;
            Log.i$default(Log.INSTANCE, TAG, "✅ Touch logging disabled", (Throwable) null, 4, (Object) null);
        }
    }
}
