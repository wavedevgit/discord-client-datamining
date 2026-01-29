package com.facebook.react.views.view;

import android.annotation.SuppressLint;
import android.annotation.TargetApi;
import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.view.ViewStructure;
import android.view.accessibility.AccessibilityManager;
import com.facebook.react.R;
import com.facebook.react.bridge.ReactNoCrashSoftException;
import com.facebook.react.bridge.ReactSoftExceptionLogger;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.config.ReactFeatureFlags;
import com.facebook.react.modules.appstate.AppStateModule;
import com.facebook.react.touch.OnInterceptTouchEventListener;
import com.facebook.react.touch.ReactHitSlopView;
import com.facebook.react.touch.ReactInterceptingViewGroup;
import com.facebook.react.uimanager.BackgroundStyleApplicator;
import com.facebook.react.uimanager.BlendModeHelper;
import com.facebook.react.uimanager.LengthPercentage;
import com.facebook.react.uimanager.LengthPercentageType;
import com.facebook.react.uimanager.MeasureSpecAssertions;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.PointerEvents;
import com.facebook.react.uimanager.ReactAxOrderHelper;
import com.facebook.react.uimanager.ReactClippingProhibitedView;
import com.facebook.react.uimanager.ReactClippingViewGroup;
import com.facebook.react.uimanager.ReactClippingViewGroupHelper;
import com.facebook.react.uimanager.ReactOverflowViewWithInset;
import com.facebook.react.uimanager.ReactPointerEventsView;
import com.facebook.react.uimanager.ReactZIndexedViewGroup;
import com.facebook.react.uimanager.ViewGroupDrawingOrderHelper;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.common.ViewUtil;
import com.facebook.react.uimanager.style.BorderRadiusProp;
import com.facebook.react.uimanager.style.BorderStyle;
import com.facebook.react.uimanager.style.LogicalEdge;
import com.facebook.react.uimanager.style.Overflow;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.collections.i;
import kotlin.collections.m0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.ranges.IntRange;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000à\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010!\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0007\n\u0002\b\u0002\n\u0002\u0010#\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u000f\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u000e\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\"\n\u0002\b-\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\t\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0012\b\u0016\u0018\u0000 Ð\u00012\u00020\u00012\u00020\u00022\u00020\u00032\u00020\u00042\u00020\u00052\u00020\u00062\u00020\u0007:\u0004Ï\u0001Ð\u0001B\u0011\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\u0004\b\n\u0010\u000bJ\b\u0010@\u001a\u00020AH\u0002J\r\u0010B\u001a\u00020AH\u0010¢\u0006\u0002\bCJ\u0018\u0010I\u001a\u00020A2\u0006\u0010J\u001a\u00020\u00112\u0006\u0010K\u001a\u00020\u0011H\u0014J0\u0010L\u001a\u00020A2\u0006\u0010M\u001a\u00020\u00132\u0006\u0010N\u001a\u00020\u00112\u0006\u0010O\u001a\u00020\u00112\u0006\u0010P\u001a\u00020\u00112\u0006\u0010Q\u001a\u00020\u0011H\u0014J\b\u0010R\u001a\u00020AH\u0017J\u0010\u0010S\u001a\u00020A2\u0006\u0010T\u001a\u00020UH\u0017J\u0010\u0010V\u001a\u00020A2\u0006\u0010W\u001a\u00020\u0011H\u0016J\u0012\u0010X\u001a\u00020A2\b\u0010Y\u001a\u0004\u0018\u00010ZH\u0007J\u0010\u0010[\u001a\u00020A2\u0006\u0010\\\u001a\u000202H\u0016J\u0010\u0010]\u001a\u00020\u00132\u0006\u0010^\u001a\u00020_H\u0016J\u0010\u0010`\u001a\u00020\u00132\u0006\u0010^\u001a\u00020_H\u0016J\u0010\u0010a\u001a\u00020\u00132\u0006\u0010^\u001a\u00020_H\u0016J\u0010\u0010b\u001a\u00020\u00132\u0006\u0010c\u001a\u00020_H\u0016J\b\u0010d\u001a\u00020\u0013H\u0016J\u000e\u0010e\u001a\u00020A2\u0006\u00103\u001a\u00020\u0013J\u0016\u0010f\u001a\u00020A2\u0006\u0010g\u001a\u00020\u00112\u0006\u0010h\u001a\u000205J\u001d\u0010i\u001a\u00020A2\u0006\u0010g\u001a\u00020\u00112\b\u0010W\u001a\u0004\u0018\u00010\u0011¢\u0006\u0002\u0010jJ\u0010\u0010k\u001a\u00020A2\u0006\u0010l\u001a\u000205H\u0007J\u0018\u0010k\u001a\u00020A2\u0006\u0010l\u001a\u0002052\u0006\u0010g\u001a\u00020\u0011H\u0007J\u0018\u0010k\u001a\u00020A2\u0006\u0010m\u001a\u00020n2\b\u0010l\u001a\u0004\u0018\u00010oJ\u0010\u0010p\u001a\u00020A2\b\u0010q\u001a\u0004\u0018\u00010*J\u0010\u0010v\u001a\u00020A2\u0006\u0010w\u001a\u00020\rH\u0016J\b\u0010x\u001a\u00020AH\u0016J\u0018\u0010x\u001a\u00020A2\u000e\u0010y\u001a\n\u0012\u0004\u0012\u00020\u0011\u0018\u00010zH\u0016J\u0010\u0010{\u001a\u00020A2\u0006\u0010|\u001a\u00020\u0017H\u0016J\u0010\u0010}\u001a\u00020A2\u0006\u0010~\u001a\u00020\u0011H\u0002J\u0011\u0010\u007f\u001a\u00020\u00132\u0007\u0010\u0080\u0001\u001a\u00020\u0017H\u0002J$\u0010\u0081\u0001\u001a\u00020A2\u0006\u0010\u001d\u001a\u00020\r2\u0011\b\u0002\u0010\u0082\u0001\u001a\n\u0012\u0004\u0012\u00020\u0011\u0018\u00010zH\u0002J6\u0010\u0083\u0001\u001a\u00020A2\u0006\u0010\u001d\u001a\u00020\r2\u0007\u0010\u0084\u0001\u001a\u00020\u00112\u0007\u0010\u0085\u0001\u001a\u00020\u00112\u0011\b\u0002\u0010\u0082\u0001\u001a\n\u0012\u0004\u0012\u00020\u0011\u0018\u00010zH\u0002J\u0012\u0010\u0083\u0001\u001a\u00020A2\u0007\u0010\u0086\u0001\u001a\u00020\u0017H\u0002J-\u0010\u0087\u0001\u001a\u00020A2\u0007\u0010\u0088\u0001\u001a\u00020\u00112\u0007\u0010\u0089\u0001\u001a\u00020\u00112\u0007\u0010\u008a\u0001\u001a\u00020\u00112\u0007\u0010\u008b\u0001\u001a\u00020\u0011H\u0014J\t\u0010\u008c\u0001\u001a\u00020AH\u0014J\t\u0010\u008d\u0001\u001a\u00020\u0013H\u0002J\u0012\u0010\u008e\u0001\u001a\u00020A2\u0007\u0010\u0080\u0001\u001a\u00020\u0017H\u0016J\u0012\u0010\u008f\u0001\u001a\u00020A2\u0007\u0010\u0080\u0001\u001a\u00020\u0017H\u0016J\u001b\u0010\u0090\u0001\u001a\u00020A2\u0007\u0010\u0080\u0001\u001a\u00020\u00172\u0007\u0010\u0091\u0001\u001a\u00020\u0013H\u0002J\u001b\u0010\u0092\u0001\u001a\u00020\u00112\u0007\u0010\u0093\u0001\u001a\u00020\u00112\u0007\u0010\u0094\u0001\u001a\u00020\u0011H\u0014J\u0012\u0010\u0095\u0001\u001a\u00020\u00112\u0007\u0010\u0094\u0001\u001a\u00020\u0011H\u0016J\t\u0010\u0096\u0001\u001a\u00020AH\u0016J\u0012\u0010\u0097\u0001\u001a\u00020A2\u0007\u0010\u0098\u0001\u001a\u00020\u0013H\u0014J\t\u0010\u0099\u0001\u001a\u00020AH\u0002J\u001a\u0010\u009a\u0001\u001a\u0004\u0018\u00010\u00172\u0007\u0010\u0094\u0001\u001a\u00020\u0011H\u0000¢\u0006\u0003\b\u009b\u0001J!\u0010\u009c\u0001\u001a\u00020A2\u0007\u0010\u0080\u0001\u001a\u00020\u00172\u0007\u0010\u0094\u0001\u001a\u00020\u0011H\u0000¢\u0006\u0003\b\u009d\u0001J\u0017\u0010\u009e\u0001\u001a\u00020A2\u0006\u0010|\u001a\u00020\u0017H\u0000¢\u0006\u0003\b\u009f\u0001J\u000f\u0010 \u0001\u001a\u00020AH\u0000¢\u0006\u0003\b¡\u0001J$\u0010¢\u0001\u001a\u00020\u00132\b\u0010|\u001a\u0004\u0018\u00010\u00172\t\u0010\u0094\u0001\u001a\u0004\u0018\u00010\u0011H\u0002¢\u0006\u0003\u0010£\u0001J\u0012\u0010¤\u0001\u001a\u00020\u00112\u0007\u0010\u0080\u0001\u001a\u00020\u0017H\u0002J\u001b\u0010¥\u0001\u001a\u00020A2\u0007\u0010\u0080\u0001\u001a\u00020\u00172\u0007\u0010\u0094\u0001\u001a\u00020\u0011H\u0002J\u0012\u0010¦\u0001\u001a\u00020A2\u0007\u0010\u0094\u0001\u001a\u00020\u0011H\u0002J)\u0010®\u0001\u001a\u00020A2\u0006\u0010N\u001a\u00020\u00112\u0006\u0010O\u001a\u00020\u00112\u0006\u0010P\u001a\u00020\u00112\u0006\u0010Q\u001a\u00020\u0011H\u0016J\u0014\u0010¯\u0001\u001a\u00020A2\t\u0010°\u0001\u001a\u0004\u0018\u00010ZH\u0002J\u0013\u0010±\u0001\u001a\u00020A2\b\u0010²\u0001\u001a\u00030³\u0001H\u0016J\u0013\u0010´\u0001\u001a\u00020A2\b\u0010²\u0001\u001a\u00030³\u0001H\u0014J&\u0010µ\u0001\u001a\u00020\u00132\b\u0010²\u0001\u001a\u00030³\u00012\u0007\u0010\u0080\u0001\u001a\u00020\u00172\b\u0010¶\u0001\u001a\u00030·\u0001H\u0014J\u0010\u0010¸\u0001\u001a\u00020A2\u0007\u0010¹\u0001\u001a\u000205J\u0010\u0010º\u0001\u001a\u00020A2\u0007\u0010»\u0001\u001a\u00020*J\u0007\u0010¼\u0001\u001a\u00020AJ\u0019\u0010½\u0001\u001a\u00020A2\u000e\u0010¾\u0001\u001a\t\u0012\u0004\u0012\u00020\u00170¿\u0001H\u0016J\u0007\u0010À\u0001\u001a\u00020AJ\u0013\u0010Á\u0001\u001a\u00020A2\b\u0010|\u001a\u0004\u0018\u00010\u0017H\u0016J\u0012\u0010Â\u0001\u001a\u00020A2\u0007\u0010\u0094\u0001\u001a\u00020\u0011H\u0016J\u001b\u0010Ã\u0001\u001a\u00020A2\u0007\u0010Ä\u0001\u001a\u00020\u00112\u0007\u0010Å\u0001\u001a\u00020\u0011H\u0016J\u0013\u0010Æ\u0001\u001a\u00020A2\b\u0010|\u001a\u0004\u0018\u00010\u0017H\u0016J\u001b\u0010Ç\u0001\u001a\u00020A2\u0007\u0010Ä\u0001\u001a\u00020\u00112\u0007\u0010Å\u0001\u001a\u00020\u0011H\u0016J\t\u0010È\u0001\u001a\u00020AH\u0016J\t\u0010É\u0001\u001a\u00020AH\u0016J\t\u0010Ê\u0001\u001a\u0004\u0018\u00010*J\u0007\u0010Ë\u0001\u001a\u00020*J\t\u0010Ì\u0001\u001a\u00020*H\u0002J\u0010\u0010Í\u0001\u001a\u00020*2\u0007\u0010Ä\u0001\u001a\u00020\u0017J\u0007\u0010Î\u0001\u001a\u00020*R\u0014\u0010\f\u001a\u00020\rX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u000e\u0010\u0010\u001a\u00020\u0011X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0012\u001a\u00020\u0013X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0014\u001a\u00020\u0013X\u0082\u000e¢\u0006\u0002\n\u0000R\u001a\u0010\u0015\u001a\f\u0012\u0006\u0012\u0004\u0018\u00010\u0017\u0018\u00010\u0016X\u0082\u000e¢\u0006\u0004\n\u0002\u0010\u0018R\u001e\u0010\u001a\u001a\u00020\u00112\u0006\u0010\u0019\u001a\u00020\u0011@BX\u0080\u000e¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u001cR\u0010\u0010\u001d\u001a\u0004\u0018\u00010\rX\u0082\u000e¢\u0006\u0002\n\u0000R\u001c\u0010\u001e\u001a\u0004\u0018\u00010\rX\u0096\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u001f\u0010\u000f\"\u0004\b \u0010!R\u001a\u0010\"\u001a\u00020#X\u0096\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b$\u0010%\"\u0004\b&\u0010'R\"\u0010(\u001a\n\u0012\u0004\u0012\u00020*\u0018\u00010)X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b+\u0010,\"\u0004\b-\u0010.R\u0010\u0010/\u001a\u0004\u0018\u000100X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u00101\u001a\u0004\u0018\u000102X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u00103\u001a\u00020\u0013X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u00104\u001a\u000205X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u00106\u001a\u00020\u0013X\u0082\u000e¢\u0006\u0002\n\u0000R\u0016\u00107\u001a\n\u0012\u0004\u0012\u00020\u0011\u0018\u000108X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u00109\u001a\u0004\u0018\u00010:X\u0082\u000e¢\u0006\u0002\n\u0000R\u001a\u0010;\u001a\u00020\u0013X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b<\u0010=\"\u0004\b>\u0010?R\u0010\u0010D\u001a\u0004\u0018\u00010EX\u0082\u000e¢\u0006\u0002\n\u0000R\u0014\u0010F\u001a\u00020E8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\bG\u0010HR$\u0010s\u001a\u00020\u00132\u0006\u0010r\u001a\u00020\u00138V@VX\u0096\u000e¢\u0006\f\u001a\u0004\bt\u0010=\"\u0004\bu\u0010?R\u0012\u0010§\u0001\u001a\u0005\u0018\u00010¨\u0001X\u0082\u000e¢\u0006\u0002\n\u0000R.\u0010©\u0001\u001a\u0004\u0018\u00010*2\t\u0010©\u0001\u001a\u0004\u0018\u00010*8V@VX\u0096\u000e¢\u0006\u0010\u001a\u0006\bª\u0001\u0010«\u0001\"\u0006\b¬\u0001\u0010\u00ad\u0001¨\u0006Ñ\u0001"}, d2 = {"Lcom/facebook/react/views/view/ReactViewGroup;", "Landroid/view/ViewGroup;", "Lcom/facebook/react/touch/ReactInterceptingViewGroup;", "Lcom/facebook/react/uimanager/ReactClippingViewGroup;", "Lcom/facebook/react/uimanager/ReactPointerEventsView;", "Lcom/facebook/react/touch/ReactHitSlopView;", "Lcom/facebook/react/uimanager/ReactZIndexedViewGroup;", "Lcom/facebook/react/uimanager/ReactOverflowViewWithInset;", "context", "Landroid/content/Context;", "<init>", "(Landroid/content/Context;)V", "overflowInset", "Landroid/graphics/Rect;", "getOverflowInset", "()Landroid/graphics/Rect;", "recycleCount", "", "_removeClippedSubviews", "", "inSubviewClippingLoop", "allChildren", "", "Landroid/view/View;", "[Landroid/view/View;", "value", "allChildrenCount", "getAllChildrenCount$ReactAndroid_release", "()I", "clippingRect", "hitSlopRect", "getHitSlopRect", "setHitSlopRect", "(Landroid/graphics/Rect;)V", ViewProps.POINTER_EVENTS, "Lcom/facebook/react/uimanager/PointerEvents;", "getPointerEvents", "()Lcom/facebook/react/uimanager/PointerEvents;", "setPointerEvents", "(Lcom/facebook/react/uimanager/PointerEvents;)V", "axOrderList", "", "", "getAxOrderList", "()Ljava/util/List;", "setAxOrderList", "(Ljava/util/List;)V", "childrenLayoutChangeListener", "Lcom/facebook/react/views/view/ReactViewGroup$ChildrenLayoutChangeListener;", "onInterceptTouchEventListener", "Lcom/facebook/react/touch/OnInterceptTouchEventListener;", ViewProps.NEEDS_OFFSCREEN_ALPHA_COMPOSITING, "backfaceOpacity", "", "backfaceVisible", "childrenRemovedWhileTransitioning", "", "accessibilityStateChangeListener", "Landroid/view/accessibility/AccessibilityManager$AccessibilityStateChangeListener;", "preventClipping", "getPreventClipping", "()Z", "setPreventClipping", "(Z)V", "initView", "", "recycleView", "recycleView$ReactAndroid_release", "_drawingOrderHelper", "Lcom/facebook/react/uimanager/ViewGroupDrawingOrderHelper;", "drawingOrderHelper", "getDrawingOrderHelper", "()Lcom/facebook/react/uimanager/ViewGroupDrawingOrderHelper;", "onMeasure", "widthMeasureSpec", "heightMeasureSpec", "onLayout", "changed", ViewProps.LEFT, ViewProps.TOP, ViewProps.RIGHT, ViewProps.BOTTOM, "requestLayout", "dispatchProvideStructure", "structure", "Landroid/view/ViewStructure;", "setBackgroundColor", ViewProps.COLOR, "setTranslucentBackgroundDrawable", AppStateModule.APP_STATE_BACKGROUND, "Landroid/graphics/drawable/Drawable;", "setOnInterceptTouchEventListener", "listener", "onInterceptTouchEvent", "event", "Landroid/view/MotionEvent;", "onTouchEvent", "onHoverEvent", "dispatchGenericMotionEvent", "ev", "hasOverlappingRendering", "setNeedsOffscreenAlphaCompositing", "setBorderWidth", ViewProps.POSITION, "width", "setBorderColor", "(ILjava/lang/Integer;)V", "setBorderRadius", "borderRadius", "property", "Lcom/facebook/react/uimanager/style/BorderRadiusProp;", "Lcom/facebook/react/uimanager/LengthPercentage;", "setBorderStyle", "style", "newValue", ReactClippingViewGroupHelper.PROP_REMOVE_CLIPPED_SUBVIEWS, "getRemoveClippedSubviews", "setRemoveClippedSubviews", "getClippingRect", "outClippingRect", "updateClippingRect", "excludedViews", "", "endViewTransition", "view", "trackChildViewTransition", "childId", "isChildRemovedWhileTransitioning", "child", "updateClippingToRect", "excludedViewsSet", "updateSubviewClipStatus", "idx", "clippedSoFar", "subview", "onSizeChanged", "w", "h", "oldw", "oldh", "onAttachedToWindow", "customDrawOrderDisabled", "onViewAdded", "onViewRemoved", "checkViewClippingTag", "expectedTag", "getChildDrawingOrder", "childCount", "index", "getZIndexMappedChildIndex", "updateDrawingOrder", "dispatchSetPressed", "pressed", "resetPointerEvents", "getChildAtWithSubviewClippingEnabled", "getChildAtWithSubviewClippingEnabled$ReactAndroid_release", "addViewWithSubviewClippingEnabled", "addViewWithSubviewClippingEnabled$ReactAndroid_release", "removeViewWithSubviewClippingEnabled", "removeViewWithSubviewClippingEnabled$ReactAndroid_release", "removeAllViewsWithSubviewClippingEnabled", "removeAllViewsWithSubviewClippingEnabled$ReactAndroid_release", "isViewClipped", "(Landroid/view/View;Ljava/lang/Integer;)Z", "indexOfChildInAllChildren", "addInArray", "removeFromArray", "_overflow", "Lcom/facebook/react/uimanager/style/Overflow;", ViewProps.OVERFLOW, "getOverflow", "()Ljava/lang/String;", "setOverflow", "(Ljava/lang/String;)V", "setOverflowInset", "updateBackgroundDrawable", "drawable", "draw", "canvas", "Landroid/graphics/Canvas;", "dispatchDraw", "drawChild", "drawingTime", "", "setOpacityIfPossible", ViewProps.OPACITY, "setBackfaceVisibility", "backfaceVisibility", "setBackfaceVisibilityDependantOpacity", "addChildrenForAccessibility", "outChildren", "Ljava/util/ArrayList;", "cleanUpAxOrderListener", "removeView", "removeViewAt", "removeViews", ViewProps.START, "count", "removeViewInLayout", "removeViewsInLayout", "removeAllViewsInLayout", "removeAllViews", "getNativeId", "getStack", "viewHierarchyDescription", "describeViewAncestry", "describeChildren", "ChildrenLayoutChangeListener", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nReactViewGroup.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReactViewGroup.kt\ncom/facebook/react/views/view/ReactViewGroup\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,1250:1\n1#2:1251\n1563#3:1252\n1634#3,3:1253\n1563#3:1256\n1634#3,3:1257\n1563#3:1260\n1634#3,3:1261\n1563#3:1264\n1634#3,3:1265\n1563#3:1268\n1634#3,3:1269\n1563#3:1272\n1634#3,3:1273\n1563#3:1276\n1634#3,3:1277\n1563#3:1280\n1634#3,3:1281\n*S KotlinDebug\n*F\n+ 1 ReactViewGroup.kt\ncom/facebook/react/views/view/ReactViewGroup\n*L\n1067#1:1252\n1067#1:1253,3\n1068#1:1256\n1068#1:1257,3\n1098#1:1260\n1098#1:1261,3\n1099#1:1264\n1099#1:1265,3\n1114#1:1268\n1114#1:1269,3\n1115#1:1272\n1115#1:1273,3\n1130#1:1276\n1130#1:1277,3\n1131#1:1280\n1131#1:1281,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class ReactViewGroup extends ViewGroup implements ReactInterceptingViewGroup, ReactClippingViewGroup, ReactPointerEventsView, ReactHitSlopView, ReactZIndexedViewGroup, ReactOverflowViewWithInset {
    private static final int ARRAY_CAPACITY_INCREMENT = 12;
    @NotNull
    private static final Companion Companion = new Companion(null);
    @NotNull
    private static final ViewGroup.LayoutParams defaultLayoutParam = new ViewGroup.LayoutParams(0, 0);
    private ViewGroupDrawingOrderHelper _drawingOrderHelper;
    private Overflow _overflow;
    private boolean _removeClippedSubviews;
    private AccessibilityManager.AccessibilityStateChangeListener accessibilityStateChangeListener;
    private View[] allChildren;
    private int allChildrenCount;
    private List<String> axOrderList;
    private float backfaceOpacity;
    private boolean backfaceVisible;
    private ChildrenLayoutChangeListener childrenLayoutChangeListener;
    private Set<Integer> childrenRemovedWhileTransitioning;
    private Rect clippingRect;
    private Rect hitSlopRect;
    private volatile boolean inSubviewClippingLoop;
    private boolean needsOffscreenAlphaCompositing;
    private OnInterceptTouchEventListener onInterceptTouchEventListener;
    @NotNull
    private final Rect overflowInset;
    @NotNull
    private PointerEvents pointerEvents;
    private boolean preventClipping;
    private int recycleCount;

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\t\b\u0002\u0018\u00002\u00020\u0001B\u0011\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0004\u0010\u0005JP\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\r\u001a\u00020\u000b2\u0006\u0010\u000e\u001a\u00020\u000b2\u0006\u0010\u000f\u001a\u00020\u000b2\u0006\u0010\u0010\u001a\u00020\u000b2\u0006\u0010\u0011\u001a\u00020\u000b2\u0006\u0010\u0012\u001a\u00020\u000bH\u0016J\u0006\u0010\u0013\u001a\u00020\u0007R\u0010\u0010\u0002\u001a\u0004\u0018\u00010\u0003X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u0014"}, d2 = {"Lcom/facebook/react/views/view/ReactViewGroup$ChildrenLayoutChangeListener;", "Landroid/view/View$OnLayoutChangeListener;", "parent", "Lcom/facebook/react/views/view/ReactViewGroup;", "<init>", "(Lcom/facebook/react/views/view/ReactViewGroup;)V", "onLayoutChange", "", "v", "Landroid/view/View;", ViewProps.LEFT, "", ViewProps.TOP, ViewProps.RIGHT, ViewProps.BOTTOM, "oldLeft", "oldTop", "oldRight", "oldBottom", "shutdown", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class ChildrenLayoutChangeListener implements View.OnLayoutChangeListener {
        private ReactViewGroup parent;

        public ChildrenLayoutChangeListener(ReactViewGroup reactViewGroup) {
            this.parent = reactViewGroup;
        }

        @Override // android.view.View.OnLayoutChangeListener
        public void onLayoutChange(@NotNull View v10, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
            ReactViewGroup reactViewGroup;
            Intrinsics.checkNotNullParameter(v10, "v");
            ReactViewGroup reactViewGroup2 = this.parent;
            if (reactViewGroup2 != null && reactViewGroup2.getRemoveClippedSubviews() && (reactViewGroup = this.parent) != null) {
                reactViewGroup.updateSubviewClipStatus(v10);
            }
        }

        public final void shutdown() {
            this.parent = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\b\u0082\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0018\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\rH\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u000e"}, d2 = {"Lcom/facebook/react/views/view/ReactViewGroup$Companion;", "", "<init>", "()V", "ARRAY_CAPACITY_INCREMENT", "", "defaultLayoutParam", "Landroid/view/ViewGroup$LayoutParams;", "setViewClipped", "", "view", "Landroid/view/View;", "clipped", "", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final void setViewClipped(View view, boolean z10) {
            view.setTag(R.id.view_clipped, Boolean.valueOf(z10));
        }

        private Companion() {
        }
    }

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[Overflow.values().length];
            try {
                iArr[Overflow.HIDDEN.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[Overflow.SCROLL.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[Overflow.VISIBLE.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    public ReactViewGroup(Context context) {
        super(context);
        this.overflowInset = new Rect();
        this.pointerEvents = PointerEvents.AUTO;
        initView();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void addChildrenForAccessibility$lambda$1(ReactViewGroup reactViewGroup, boolean z10) {
        if (!z10) {
            ReactAxOrderHelper.restoreFocusability(reactViewGroup);
        }
    }

    private final void addInArray(View view, int i10) {
        View[] viewArr = this.allChildren;
        if (viewArr != null) {
            int i11 = this.allChildrenCount;
            int length = viewArr.length;
            if (i10 == i11) {
                if (length == i11) {
                    View[] viewArr2 = new View[length + 12];
                    System.arraycopy(viewArr, 0, viewArr2, 0, length);
                    this.allChildren = viewArr2;
                    viewArr = viewArr2;
                }
                int i12 = this.allChildrenCount;
                this.allChildrenCount = i12 + 1;
                viewArr[i12] = view;
                return;
            } else if (i10 < i11) {
                if (length == i11) {
                    View[] viewArr3 = new View[length + 12];
                    System.arraycopy(viewArr, 0, viewArr3, 0, i10);
                    System.arraycopy(viewArr, i10, viewArr3, i10 + 1, i11 - i10);
                    this.allChildren = viewArr3;
                    viewArr = viewArr3;
                } else {
                    System.arraycopy(viewArr, i10, viewArr, i10 + 1, i11 - i10);
                }
                viewArr[i10] = view;
                this.allChildrenCount++;
                return;
            } else {
                throw new IndexOutOfBoundsException("index=" + i10 + " count=" + i11);
            }
        }
        throw new IllegalStateException("Required value was null.");
    }

    private final void checkViewClippingTag(View view, boolean z10) {
        if (this.inSubviewClippingLoop) {
            Object tag = view.getTag(R.id.view_clipped);
            if (!Intrinsics.areEqual(Boolean.valueOf(z10), tag)) {
                ReactSoftExceptionLogger.logSoftException(ReactSoftExceptionLogger.Categories.RVG_ON_VIEW_REMOVED, new ReactNoCrashSoftException("View clipping tag mismatch: tag=" + tag + " expected=" + z10));
            }
        }
        if (this._removeClippedSubviews) {
            view.setTag(R.id.view_clipped, Boolean.valueOf(z10));
        } else {
            view.setTag(R.id.view_clipped, null);
        }
    }

    private final boolean customDrawOrderDisabled() {
        if (getId() == -1 || ViewUtil.getUIManagerType(getId()) != 2) {
            return false;
        }
        return true;
    }

    private final ViewGroupDrawingOrderHelper getDrawingOrderHelper() {
        if (this._drawingOrderHelper == null) {
            this._drawingOrderHelper = new ViewGroupDrawingOrderHelper(this);
        }
        ViewGroupDrawingOrderHelper viewGroupDrawingOrderHelper = this._drawingOrderHelper;
        if (viewGroupDrawingOrderHelper != null) {
            return viewGroupDrawingOrderHelper;
        }
        throw new IllegalArgumentException("Required value was null.");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CharSequence getStack$lambda$18(StackTraceElement stackTraceElement) {
        String className = stackTraceElement.getClassName();
        String methodName = stackTraceElement.getMethodName();
        String fileName = stackTraceElement.getFileName();
        int lineNumber = stackTraceElement.getLineNumber();
        return "  at " + className + "." + methodName + "(" + fileName + ":" + lineNumber + ")";
    }

    private final int indexOfChildInAllChildren(View view) {
        int i10 = this.allChildrenCount;
        View[] viewArr = this.allChildren;
        if (viewArr != null) {
            for (int i11 = 0; i11 < i10; i11++) {
                if (viewArr[i11] == view) {
                    return i11;
                }
            }
            return -1;
        }
        throw new IllegalStateException("Required value was null.");
    }

    private final void initView() {
        setClipChildren(false);
        this._removeClippedSubviews = false;
        this.inSubviewClippingLoop = false;
        this.allChildren = null;
        this.allChildrenCount = 0;
        this.clippingRect = null;
        setHitSlopRect(null);
        this._overflow = Overflow.VISIBLE;
        setPointerEvents(PointerEvents.AUTO);
        this.childrenLayoutChangeListener = null;
        this.onInterceptTouchEventListener = null;
        this.needsOffscreenAlphaCompositing = false;
        this._drawingOrderHelper = null;
        this.backfaceOpacity = 1.0f;
        this.backfaceVisible = true;
        this.childrenRemovedWhileTransitioning = null;
        this.preventClipping = false;
    }

    private final boolean isChildRemovedWhileTransitioning(View view) {
        Set<Integer> set = this.childrenRemovedWhileTransitioning;
        if (set == null || !set.contains(Integer.valueOf(view.getId()))) {
            return false;
        }
        return true;
    }

    private final boolean isViewClipped(View view, Integer num) {
        boolean z10;
        boolean z11;
        if (view != null) {
            Object tag = view.getTag(R.id.view_clipped);
            if (tag != null) {
                return ((Boolean) tag).booleanValue();
            }
            ViewParent parent = view.getParent();
            boolean isChildRemovedWhileTransitioning = isChildRemovedWhileTransitioning(view);
            if (num != null) {
                if (parent == null) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                if (parent == this) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                ReactSoftExceptionLogger.logSoftException(ReactSoftExceptionLogger.Categories.RVG_IS_VIEW_CLIPPED, new ReactNoCrashSoftException("View missing clipping tag: index=" + num + " parentNull=" + z10 + " parentThis=" + z11 + " transitioning=" + isChildRemovedWhileTransitioning));
            }
            if (parent == null || isChildRemovedWhileTransitioning) {
                return true;
            }
            if (parent == this) {
                return false;
            }
            throw new IllegalStateException("Check failed.");
        }
        throw new IllegalStateException("Required value was null.");
    }

    private final void removeFromArray(int i10) {
        View[] viewArr = this.allChildren;
        if (viewArr != null) {
            int i11 = this.allChildrenCount;
            if (i10 == i11 - 1) {
                int i12 = i11 - 1;
                this.allChildrenCount = i12;
                viewArr[i12] = null;
                return;
            } else if (i10 >= 0 && i10 < i11) {
                System.arraycopy(viewArr, i10 + 1, viewArr, i10, (i11 - i10) - 1);
                int i13 = this.allChildrenCount - 1;
                this.allChildrenCount = i13;
                viewArr[i13] = null;
                return;
            } else {
                throw new IndexOutOfBoundsException();
            }
        }
        throw new IllegalStateException("Required value was null.");
    }

    private final void resetPointerEvents() {
        setPointerEvents(PointerEvents.AUTO);
    }

    private final void trackChildViewTransition(int i10) {
        if (this.childrenRemovedWhileTransitioning == null) {
            this.childrenRemovedWhileTransitioning = new LinkedHashSet();
        }
        Set<Integer> set = this.childrenRemovedWhileTransitioning;
        if (set != null) {
            set.add(Integer.valueOf(i10));
        }
    }

    private final void updateBackgroundDrawable(Drawable drawable) {
        super.setBackground(drawable);
    }

    private final void updateClippingToRect(Rect rect, Set<Integer> set) {
        int i10;
        int i11;
        View[] viewArr = this.allChildren;
        if (viewArr != null) {
            this.inSubviewClippingLoop = true;
            int i12 = this.allChildrenCount;
            int i13 = 0;
            for (int i14 = 0; i14 < i12; i14++) {
                try {
                    updateSubviewClipStatus(rect, i14, i13, set);
                    if (isViewClipped(viewArr[i14], Integer.valueOf(i14))) {
                        i13++;
                    }
                    if (i14 - i13 > getChildCount()) {
                        int childCount = getChildCount();
                        int i15 = this.allChildrenCount;
                        int i16 = this.recycleCount;
                        if (set != null) {
                            i11 = set.size();
                        } else {
                            i11 = 0;
                        }
                        throw new IllegalStateException("Invalid clipping state. i=" + i14 + " clippedSoFar=" + i13 + " count=" + childCount + " allChildrenCount=" + i15 + " recycleCount=" + i16 + "  excludedViews=" + i11);
                    }
                } catch (IndexOutOfBoundsException e10) {
                    HashSet hashSet = new HashSet();
                    int i17 = 0;
                    for (int i18 = 0; i18 < i14; i18++) {
                        i17 += isViewClipped(viewArr[i18], Integer.valueOf(i18)) ? 1 : 0;
                        hashSet.add(viewArr[i18]);
                    }
                    int childCount2 = getChildCount();
                    int i19 = this.allChildrenCount;
                    int i20 = this.recycleCount;
                    int size = hashSet.size();
                    if (set != null) {
                        i10 = set.size();
                    } else {
                        i10 = 0;
                    }
                    throw new IllegalStateException("Invalid clipping state. i=" + i14 + " clippedSoFar=" + i13 + " count=" + childCount2 + " allChildrenCount=" + i19 + " recycleCount=" + i20 + " realClippedSoFar=" + i17 + " uniqueViewsCount=" + size + " excludedViews=" + i10, e10);
                }
            }
            this.inSubviewClippingLoop = false;
            return;
        }
        throw new IllegalStateException("Required value was null.");
    }

    /* JADX WARN: Multi-variable type inference failed */
    static /* synthetic */ void updateClippingToRect$default(ReactViewGroup reactViewGroup, Rect rect, Set set, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 2) != 0) {
                set = null;
            }
            reactViewGroup.updateClippingToRect(rect, set);
            return;
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: updateClippingToRect");
    }

    /* JADX WARN: Code restructure failed: missing block: B:61:0x00e8, code lost:
        if (r5 == false) goto L36;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final void updateSubviewClipStatus(android.graphics.Rect r10, int r11, int r12, java.util.Set<java.lang.Integer> r13) {
        /*
            Method dump skipped, instructions count: 269
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.views.view.ReactViewGroup.updateSubviewClipStatus(android.graphics.Rect, int, int, java.util.Set):void");
    }

    /* JADX WARN: Multi-variable type inference failed */
    static /* synthetic */ void updateSubviewClipStatus$default(ReactViewGroup reactViewGroup, Rect rect, int i10, int i11, Set set, int i12, Object obj) {
        if (obj == null) {
            if ((i12 & 8) != 0) {
                set = null;
            }
            reactViewGroup.updateSubviewClipStatus(rect, i10, i11, set);
            return;
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: updateSubviewClipStatus");
    }

    private final String viewHierarchyDescription() {
        String str;
        String describeChildren = describeChildren();
        String str2 = "children count info: getChildCount: " + getChildCount();
        try {
            str = describeViewAncestry(this);
        } catch (Exception unused) {
            str = null;
        }
        return "View ancestry:\n" + str + ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE + str2 + ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE + describeChildren;
    }

    @Override // android.view.ViewGroup, android.view.View
    public void addChildrenForAccessibility(@NotNull ArrayList<View> outChildren) {
        List<String> list;
        Intrinsics.checkNotNullParameter(outChildren, "outChildren");
        ReactViewGroup reactViewGroup = (ReactViewGroup) getTag(R.id.accessibility_order_parent);
        if (reactViewGroup != null) {
            list = reactViewGroup.axOrderList;
        } else {
            list = null;
        }
        List<String> list2 = this.axOrderList;
        if (list2 != null) {
            AccessibilityManager accessibilityManager = (AccessibilityManager) getContext().getSystemService("accessibility");
            if (this.accessibilityStateChangeListener == null && accessibilityManager != null) {
                AccessibilityManager.AccessibilityStateChangeListener accessibilityStateChangeListener = new AccessibilityManager.AccessibilityStateChangeListener() { // from class: com.facebook.react.views.view.b
                    @Override // android.view.accessibility.AccessibilityManager.AccessibilityStateChangeListener
                    public final void onAccessibilityStateChanged(boolean z10) {
                        ReactViewGroup.addChildrenForAccessibility$lambda$1(ReactViewGroup.this, z10);
                    }
                };
                accessibilityManager.addAccessibilityStateChangeListener(accessibilityStateChangeListener);
                this.accessibilityStateChangeListener = accessibilityStateChangeListener;
            }
            int size = list2.size();
            View[] viewArr = new View[size];
            int childCount = getChildCount();
            for (int i10 = 0; i10 < childCount; i10++) {
                ReactAxOrderHelper reactAxOrderHelper = ReactAxOrderHelper.INSTANCE;
                View childAt = getChildAt(i10);
                Intrinsics.checkNotNullExpressionValue(childAt, "getChildAt(...)");
                reactAxOrderHelper.buildAxOrderList(childAt, list2, viewArr);
            }
            for (int i11 = 0; i11 < size; i11++) {
                View view = viewArr[i11];
                if (view != null) {
                    if (view.isFocusable()) {
                        outChildren.add(view);
                    } else {
                        view.addChildrenForAccessibility(outChildren);
                    }
                }
            }
        } else if (list != null) {
            if (!isFocusable()) {
                super.addChildrenForAccessibility(outChildren);
            } else if (isFocusable() && (getContentDescription() == null || Intrinsics.areEqual(getContentDescription(), ""))) {
                super.addChildrenForAccessibility(outChildren);
                ReactAxOrderHelper.INSTANCE.disableFocusForSubtree(this, list);
            } else if (isFocusable() && getContentDescription() != null) {
                Intrinsics.areEqual(getContentDescription(), "");
            }
        } else {
            super.addChildrenForAccessibility(outChildren);
        }
    }

    public final void addViewWithSubviewClippingEnabled$ReactAndroid_release(@NotNull final View child, int i10) {
        Intrinsics.checkNotNullParameter(child, "child");
        if (this._removeClippedSubviews) {
            Companion.setViewClipped(child, true);
            addInArray(child, i10);
            Rect rect = this.clippingRect;
            if (rect != null) {
                View[] viewArr = this.allChildren;
                if (viewArr != null) {
                    this.inSubviewClippingLoop = true;
                    int i11 = 0;
                    for (int i12 = 0; i12 < i10; i12++) {
                        if (isViewClipped(viewArr[i12], Integer.valueOf(i12))) {
                            i11++;
                        }
                    }
                    updateSubviewClipStatus$default(this, rect, i10, i11, null, 8, null);
                    this.inSubviewClippingLoop = false;
                    child.addOnLayoutChangeListener(this.childrenLayoutChangeListener);
                    if (child instanceof ReactClippingProhibitedView) {
                        UiThreadUtil.runOnUiThread(new Runnable() { // from class: com.facebook.react.views.view.ReactViewGroup$addViewWithSubviewClippingEnabled$1
                            @Override // java.lang.Runnable
                            public void run() {
                                if (!child.isShown()) {
                                    int id2 = child.getId();
                                    View view = child;
                                    int id3 = this.getId();
                                    ReactSoftExceptionLogger.logSoftException(ReactSoftExceptionLogger.Categories.CLIPPING_PROHIBITED_VIEW, new ReactNoCrashSoftException("Child view has been added to Parent view in which it is clipped and not visible. This is not legal for this particular child view. Child: [" + id2 + "] " + view + " Parent: [" + id3 + "] " + this));
                                }
                            }
                        });
                        return;
                    }
                    return;
                }
                throw new IllegalStateException("Required value was null.");
            }
            throw new IllegalStateException("Required value was null.");
        }
        throw new IllegalStateException("Check failed.");
    }

    public final void cleanUpAxOrderListener() {
        AccessibilityManager accessibilityManager;
        AccessibilityManager.AccessibilityStateChangeListener accessibilityStateChangeListener;
        Object systemService = getContext().getSystemService("accessibility");
        if (systemService instanceof AccessibilityManager) {
            accessibilityManager = (AccessibilityManager) systemService;
        } else {
            accessibilityManager = null;
        }
        if (accessibilityManager != null && (accessibilityStateChangeListener = this.accessibilityStateChangeListener) != null) {
            accessibilityManager.removeAccessibilityStateChangeListener(accessibilityStateChangeListener);
        }
        this.accessibilityStateChangeListener = null;
    }

    @NotNull
    public final String describeChildren() {
        String str;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("  Attached children: ");
        int childCount = getChildCount();
        if (childCount == 0) {
            sb2.append("    (none)\n");
        } else {
            for (int i10 = 0; i10 < childCount; i10++) {
                try {
                    View childAt = getChildAt(i10);
                    if (childAt == null) {
                        sb2.append("    [" + i10 + "] NULL CHILD!\n");
                    } else {
                        Object tag = childAt.getTag(R.id.view_tag_native_id);
                        Object tag2 = childAt.getTag(R.id.react_test_id);
                        sb2.append("    [" + i10 + "] ");
                        sb2.append(childAt.getClass().getSimpleName());
                        sb2.append(" id=");
                        sb2.append(childAt.getId());
                        if (tag != null) {
                            sb2.append(" nativeID=");
                            sb2.append(tag);
                        }
                        if (tag2 != null) {
                            sb2.append(" testID=");
                            sb2.append(tag2);
                        }
                        sb2.append(" parent=");
                        if (childAt.getParent() != null) {
                            str = "attached";
                        } else {
                            str = "DETACHED";
                        }
                        sb2.append(str);
                        sb2.append('\n');
                    }
                } catch (Exception e10) {
                    sb2.append("    [" + i10 + "] ERROR: ");
                    sb2.append(e10.getMessage());
                    sb2.append('\n');
                }
            }
        }
        try {
            if (getRemoveClippedSubviews() && this.allChildren != null && this.allChildrenCount > childCount) {
                sb2.append("  Clipped children:\n");
                int i11 = this.allChildrenCount;
                for (int i12 = 0; i12 < i11; i12++) {
                    View[] viewArr = this.allChildren;
                    Intrinsics.checkNotNull(viewArr);
                    View view = viewArr[i12];
                    if (view != null && view.getParent() == null) {
                        Object tag3 = view.getTag(R.id.view_tag_native_id);
                        sb2.append("    [" + i12 + "] ");
                        sb2.append(view.getClass().getSimpleName());
                        sb2.append(" id=");
                        sb2.append(view.getId());
                        if (tag3 != null) {
                            sb2.append(" nativeID=");
                            sb2.append(tag3);
                        }
                        sb2.append(" (CLIPPED)\n");
                    }
                }
            }
        } catch (Exception e11) {
            sb2.append("  Error describing clipped children: ");
            sb2.append(e11.getMessage());
            sb2.append('\n');
        }
        String sb3 = sb2.toString();
        Intrinsics.checkNotNullExpressionValue(sb3, "toString(...)");
        return sb3;
    }

    @NotNull
    public final String describeViewAncestry(@NotNull View start) {
        Intrinsics.checkNotNullParameter(start, "start");
        StringBuilder sb2 = new StringBuilder();
        int i10 = 0;
        while (start != null) {
            Object tag = start.getTag(R.id.view_tag_native_id);
            Object tag2 = start.getTag(R.id.react_test_id);
            String valueOf = String.valueOf(ViewUtil.getUIManagerType(start));
            CharSequence contentDescription = start.getContentDescription();
            sb2.append("#");
            sb2.append(i10);
            sb2.append(" class=");
            sb2.append(start.getClass().getName());
            sb2.append(" tag=");
            sb2.append(start.getId());
            sb2.append(" ui=");
            sb2.append(valueOf);
            if (tag != null) {
                sb2.append(" nativeID=");
                sb2.append(tag);
            }
            if (tag2 != null) {
                sb2.append(" testID=");
                sb2.append(tag2);
            }
            if (contentDescription != null) {
                sb2.append(" contentDesc=");
                sb2.append(contentDescription);
            }
            sb2.append('\n');
            ViewParent parent = start.getParent();
            if (parent instanceof View) {
                start = (View) parent;
            } else {
                start = null;
            }
            i10++;
        }
        String sb3 = sb2.toString();
        Intrinsics.checkNotNullExpressionValue(sb3, "toString(...)");
        return sb3;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.view.ViewGroup, android.view.View
    public void dispatchDraw(@NotNull Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        if (this._overflow != Overflow.VISIBLE || getTag(R.id.filter) != null) {
            BackgroundStyleApplicator.clipToPaddingBox(this, canvas);
        }
        super.dispatchDraw(canvas);
    }

    @Override // android.view.View
    public boolean dispatchGenericMotionEvent(@NotNull MotionEvent ev2) {
        Intrinsics.checkNotNullParameter(ev2, "ev");
        if (!PointerEvents.Companion.canChildrenBeTouchTarget(getPointerEvents())) {
            return false;
        }
        return super.dispatchGenericMotionEvent(ev2);
    }

    @Override // android.view.ViewGroup, android.view.View
    @TargetApi(23)
    public void dispatchProvideStructure(@NotNull ViewStructure structure) {
        Intrinsics.checkNotNullParameter(structure, "structure");
        try {
            super.dispatchProvideStructure(structure);
        } catch (NullPointerException e10) {
            p8.a.n(ReactConstants.TAG, "NullPointerException when executing dispatchProvideStructure", e10);
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void dispatchSetPressed(boolean z10) {
    }

    @Override // android.view.View
    public void draw(@NotNull Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        if (Build.VERSION.SDK_INT >= 29 && ViewUtil.getUIManagerType(this) == 2 && BlendModeHelper.needsIsolatedLayer(this)) {
            Rect overflowInset = getOverflowInset();
            canvas.saveLayer(overflowInset.left, overflowInset.top, getWidth() + (-overflowInset.right), getHeight() + (-overflowInset.bottom), null);
            super.draw(canvas);
            canvas.restore();
            return;
        }
        super.draw(canvas);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* JADX WARN: Removed duplicated region for block: B:22:0x0073  */
    /* JADX WARN: Removed duplicated region for block: B:24:0x0078  */
    @Override // android.view.ViewGroup
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public boolean drawChild(@org.jetbrains.annotations.NotNull android.graphics.Canvas r12, @org.jetbrains.annotations.NotNull android.view.View r13, long r14) {
        /*
            r11 = this;
            java.lang.String r0 = "canvas"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r12, r0)
            java.lang.String r0 = "child"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r13, r0)
            float r0 = r13.getElevation()
            r1 = 0
            int r0 = (r0 > r1 ? 1 : (r0 == r1 ? 0 : -1))
            r1 = 0
            r2 = 1
            if (r0 <= 0) goto L17
            r0 = r2
            goto L18
        L17:
            r0 = r1
        L18:
            if (r0 == 0) goto L1d
            com.facebook.react.views.view.CanvasUtil.enableZ(r12, r2)
        L1d:
            int r2 = android.os.Build.VERSION.SDK_INT
            r3 = 29
            r4 = 0
            if (r2 < r3) goto L6c
            int r2 = com.facebook.react.uimanager.common.ViewUtil.getUIManagerType(r11)
            r3 = 2
            if (r2 != r3) goto L6c
            boolean r2 = com.facebook.react.uimanager.BlendModeHelper.needsIsolatedLayer(r11)
            if (r2 == 0) goto L6c
            int r2 = com.facebook.react.R.id.mix_blend_mode
            java.lang.Object r2 = r13.getTag(r2)
            boolean r3 = com.facebook.react.views.view.a.a(r2)
            if (r3 == 0) goto L41
            android.graphics.BlendMode r4 = com.facebook.react.y.a(r2)
        L41:
            if (r4 == 0) goto L6c
            android.graphics.Paint r10 = new android.graphics.Paint
            r10.<init>()
            r10.setBlendMode(r4)
            android.graphics.Rect r2 = r11.getOverflowInset()
            int r3 = r2.left
            float r6 = (float) r3
            int r3 = r2.top
            float r7 = (float) r3
            int r3 = r11.getWidth()
            int r5 = r2.right
            int r5 = -r5
            int r3 = r3 + r5
            float r8 = (float) r3
            int r3 = r11.getHeight()
            int r2 = r2.bottom
            int r2 = -r2
            int r3 = r3 + r2
            float r9 = (float) r3
            r5 = r12
            r5.saveLayer(r6, r7, r8, r9, r10)
            goto L6d
        L6c:
            r5 = r12
        L6d:
            boolean r12 = super.drawChild(r5, r13, r14)
            if (r4 == 0) goto L76
            r5.restore()
        L76:
            if (r0 == 0) goto L7b
            com.facebook.react.views.view.CanvasUtil.enableZ(r5, r1)
        L7b:
            return r12
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.views.view.ReactViewGroup.drawChild(android.graphics.Canvas, android.view.View, long):boolean");
    }

    @Override // android.view.ViewGroup
    public void endViewTransition(@NotNull View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        super.endViewTransition(view);
        Set<Integer> set = this.childrenRemovedWhileTransitioning;
        if (set != null) {
            set.remove(Integer.valueOf(view.getId()));
        }
    }

    public final int getAllChildrenCount$ReactAndroid_release() {
        return this.allChildrenCount;
    }

    public final List<String> getAxOrderList() {
        return this.axOrderList;
    }

    public final View getChildAtWithSubviewClippingEnabled$ReactAndroid_release(int i10) {
        if (i10 >= 0 && i10 < this.allChildrenCount) {
            View[] viewArr = this.allChildren;
            if (viewArr != null) {
                return viewArr[i10];
            }
            throw new IllegalStateException("Required value was null.");
        }
        return null;
    }

    @Override // android.view.ViewGroup
    protected int getChildDrawingOrder(int i10, int i11) {
        UiThreadUtil.assertOnUiThread();
        if (!customDrawOrderDisabled()) {
            return getDrawingOrderHelper().getChildDrawingOrder(i10, i11);
        }
        return i11;
    }

    @Override // com.facebook.react.uimanager.ReactClippingViewGroup
    public void getClippingRect(@NotNull Rect outClippingRect) {
        Intrinsics.checkNotNullParameter(outClippingRect, "outClippingRect");
        Rect rect = this.clippingRect;
        if (rect != null) {
            outClippingRect.set(rect);
            return;
        }
        throw new IllegalStateException("Required value was null.");
    }

    @Override // com.facebook.react.touch.ReactHitSlopView
    public Rect getHitSlopRect() {
        return this.hitSlopRect;
    }

    public final String getNativeId() {
        Object tag = getTag(R.id.view_tag_native_id);
        if (tag instanceof String) {
            return (String) tag;
        }
        return null;
    }

    @Override // com.facebook.react.uimanager.ReactOverflowView
    public String getOverflow() {
        int i10;
        Overflow overflow = this._overflow;
        if (overflow == null) {
            i10 = -1;
        } else {
            i10 = WhenMappings.$EnumSwitchMapping$0[overflow.ordinal()];
        }
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    return null;
                }
                return ViewProps.VISIBLE;
            }
            return ViewProps.SCROLL;
        }
        return ViewProps.HIDDEN;
    }

    @Override // com.facebook.react.uimanager.ReactOverflowViewWithInset
    @NotNull
    public Rect getOverflowInset() {
        return this.overflowInset;
    }

    @Override // com.facebook.react.uimanager.ReactPointerEventsView
    @NotNull
    public PointerEvents getPointerEvents() {
        return this.pointerEvents;
    }

    public final boolean getPreventClipping() {
        return this.preventClipping;
    }

    public boolean getRemoveClippedSubviews() {
        return this._removeClippedSubviews;
    }

    @NotNull
    public final String getStack() {
        StackTraceElement[] stackTrace = Thread.currentThread().getStackTrace();
        Intrinsics.checkNotNullExpressionValue(stackTrace, "getStackTrace(...)");
        return CollectionsKt.x0(i.Q(stackTrace, 2), ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, null, null, 0, null, new Function1() { // from class: com.facebook.react.views.view.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                CharSequence stack$lambda$18;
                stack$lambda$18 = ReactViewGroup.getStack$lambda$18((StackTraceElement) obj);
                return stack$lambda$18;
            }
        }, 30, null);
    }

    @Override // com.facebook.react.uimanager.ReactZIndexedViewGroup
    public int getZIndexMappedChildIndex(int i10) {
        UiThreadUtil.assertOnUiThread();
        if (!customDrawOrderDisabled() && getDrawingOrderHelper().shouldEnableCustomDrawingOrder()) {
            return getDrawingOrderHelper().getChildDrawingOrder(getChildCount(), i10);
        }
        return i10;
    }

    @Override // android.view.View
    public boolean hasOverlappingRendering() {
        return this.needsOffscreenAlphaCompositing;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.view.ViewGroup, android.view.View
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        if (this._removeClippedSubviews) {
            updateClippingRect();
        }
    }

    @Override // android.view.View
    public boolean onHoverEvent(@NotNull MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        if (ReactFeatureFlags.dispatchPointerEvents) {
            return PointerEvents.Companion.canBeTouchTarget(getPointerEvents());
        }
        return super.onHoverEvent(event);
    }

    @Override // android.view.ViewGroup
    public boolean onInterceptTouchEvent(@NotNull MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        OnInterceptTouchEventListener onInterceptTouchEventListener = this.onInterceptTouchEventListener;
        if ((onInterceptTouchEventListener != null && onInterceptTouchEventListener.onInterceptTouchEvent(this, event)) || !PointerEvents.Companion.canChildrenBeTouchTarget(getPointerEvents())) {
            return true;
        }
        return super.onInterceptTouchEvent(event);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.view.ViewGroup, android.view.View
    public void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
    }

    @Override // android.view.View
    protected void onMeasure(int i10, int i11) {
        MeasureSpecAssertions.assertExplicitMeasureSpec(i10, i11);
        setMeasuredDimension(View.MeasureSpec.getSize(i10), View.MeasureSpec.getSize(i11));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.view.View
    public void onSizeChanged(int i10, int i11, int i12, int i13) {
        super.onSizeChanged(i10, i11, i12, i13);
        if (this._removeClippedSubviews) {
            updateClippingRect();
        }
    }

    @Override // android.view.View
    public boolean onTouchEvent(@NotNull MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        if (!PointerEvents.Companion.canBeTouchTarget(getPointerEvents())) {
            return false;
        }
        return true;
    }

    @Override // android.view.ViewGroup
    public void onViewAdded(@NotNull View child) {
        Intrinsics.checkNotNullParameter(child, "child");
        UiThreadUtil.assertOnUiThread();
        checkViewClippingTag(child, false);
        if (!customDrawOrderDisabled()) {
            getDrawingOrderHelper().handleAddView(child);
            setChildrenDrawingOrderEnabled(getDrawingOrderHelper().shouldEnableCustomDrawingOrder());
        } else {
            setChildrenDrawingOrderEnabled(false);
        }
        super.onViewAdded(child);
    }

    @Override // android.view.ViewGroup
    public void onViewRemoved(@NotNull View child) {
        Intrinsics.checkNotNullParameter(child, "child");
        UiThreadUtil.assertOnUiThread();
        checkViewClippingTag(child, true);
        if (!customDrawOrderDisabled()) {
            getDrawingOrderHelper().handleRemoveView(child);
            setChildrenDrawingOrderEnabled(getDrawingOrderHelper().shouldEnableCustomDrawingOrder());
        } else {
            setChildrenDrawingOrderEnabled(false);
        }
        if (child.getParent() != null) {
            trackChildViewTransition(child.getId());
        }
        super.onViewRemoved(child);
    }

    public void recycleView$ReactAndroid_release() {
        ChildrenLayoutChangeListener childrenLayoutChangeListener;
        this.recycleCount++;
        View[] viewArr = this.allChildren;
        if (viewArr != null && (childrenLayoutChangeListener = this.childrenLayoutChangeListener) != null) {
            if (childrenLayoutChangeListener != null) {
                childrenLayoutChangeListener.shutdown();
            }
            int i10 = this.allChildrenCount;
            for (int i11 = 0; i11 < i10; i11++) {
                View view = viewArr[i11];
                if (view != null) {
                    view.removeOnLayoutChangeListener(this.childrenLayoutChangeListener);
                }
            }
        }
        initView();
        getOverflowInset().setEmpty();
        removeAllViews();
        if (getParent() != null) {
            ViewParent parent = getParent();
            Intrinsics.checkNotNull(parent, "null cannot be cast to non-null type android.view.ViewGroup");
            ((ViewGroup) parent).removeView(this);
        }
        updateBackgroundDrawable(null);
        resetPointerEvents();
    }

    @Override // android.view.ViewGroup
    public void removeAllViews() {
        String str;
        UiThreadUtil.assertOnUiThread();
        String nativeId = getNativeId();
        if (nativeId != null) {
            IntRange u10 = kotlin.ranges.d.u(0, getChildCount());
            ArrayList<View> arrayList = new ArrayList(CollectionsKt.w(u10, 10));
            Iterator it = u10.iterator();
            while (it.hasNext()) {
                arrayList.add(getChildAt(((m0) it).nextInt()));
            }
            ArrayList arrayList2 = new ArrayList(CollectionsKt.w(arrayList, 10));
            for (View view : arrayList) {
                if (view != null) {
                    str = view.getClass().getSimpleName();
                } else {
                    str = "null";
                }
                arrayList2.add(str);
            }
            String stack = getStack();
            String viewHierarchyDescription = viewHierarchyDescription();
            p8.a.J("ReactViewGroup", "[" + nativeId + "] removeAllViews called for views of classes " + arrayList2 + "\nStack trace:\n" + stack + "\nHierarchy:\n" + viewHierarchyDescription);
        }
        super.removeAllViews();
    }

    @Override // android.view.ViewGroup
    public void removeAllViewsInLayout() {
        String str;
        UiThreadUtil.assertOnUiThread();
        String nativeId = getNativeId();
        if (nativeId != null) {
            IntRange u10 = kotlin.ranges.d.u(0, getChildCount());
            ArrayList<View> arrayList = new ArrayList(CollectionsKt.w(u10, 10));
            Iterator it = u10.iterator();
            while (it.hasNext()) {
                arrayList.add(getChildAt(((m0) it).nextInt()));
            }
            ArrayList arrayList2 = new ArrayList(CollectionsKt.w(arrayList, 10));
            for (View view : arrayList) {
                if (view != null) {
                    str = view.getClass().getSimpleName();
                } else {
                    str = "null";
                }
                arrayList2.add(str);
            }
            String stack = getStack();
            String viewHierarchyDescription = viewHierarchyDescription();
            p8.a.J("ReactViewGroup", "[" + nativeId + "] removeAllViewsInLayout called for views of classes " + arrayList2 + "\nStack trace:\n" + stack + "\nHierarchy:\n" + viewHierarchyDescription);
        }
        super.removeAllViewsInLayout();
    }

    public final void removeAllViewsWithSubviewClippingEnabled$ReactAndroid_release() {
        if (this._removeClippedSubviews) {
            View[] viewArr = this.allChildren;
            if (viewArr != null) {
                int i10 = this.allChildrenCount;
                for (int i11 = 0; i11 < i10; i11++) {
                    View view = viewArr[i11];
                    if (view != null) {
                        view.removeOnLayoutChangeListener(this.childrenLayoutChangeListener);
                    }
                }
                removeAllViewsInLayout();
                this.allChildrenCount = 0;
                return;
            }
            throw new IllegalStateException("Required value was null.");
        }
        throw new IllegalStateException("Check failed.");
    }

    @Override // android.view.ViewGroup, android.view.ViewManager
    public void removeView(View view) {
        String str;
        UiThreadUtil.assertOnUiThread();
        String nativeId = getNativeId();
        if (nativeId != null) {
            if (view != null) {
                str = view.getClass().getSimpleName();
            } else {
                str = "null";
            }
            int indexOfChild = indexOfChild(view);
            String stack = getStack();
            String viewHierarchyDescription = viewHierarchyDescription();
            p8.a.J("ReactViewGroup", "[" + nativeId + "] removeView called for view of class " + str + " at index " + indexOfChild + "\nStack trace:\n" + stack + "\nHierarchy:\n" + viewHierarchyDescription);
        }
        super.removeView(view);
    }

    @Override // android.view.ViewGroup
    public void removeViewAt(int i10) {
        String str;
        UiThreadUtil.assertOnUiThread();
        String nativeId = getNativeId();
        if (nativeId != null) {
            View childAt = getChildAt(i10);
            if (childAt != null) {
                str = childAt.getClass().getSimpleName();
            } else {
                str = "null";
            }
            String stack = getStack();
            String viewHierarchyDescription = viewHierarchyDescription();
            p8.a.J("ReactViewGroup", "[" + nativeId + "] removeViewAt called for view of class " + str + " at index " + i10 + "\nStack trace:\n" + stack + "\nHierarchy:\n" + viewHierarchyDescription);
        }
        super.removeViewAt(i10);
    }

    @Override // android.view.ViewGroup
    public void removeViewInLayout(View view) {
        String str;
        UiThreadUtil.assertOnUiThread();
        String nativeId = getNativeId();
        if (nativeId != null) {
            if (view != null) {
                str = view.getClass().getSimpleName();
            } else {
                str = "null";
            }
            int indexOfChild = indexOfChild(view);
            String stack = getStack();
            p8.a.J("ReactViewGroup", "[" + nativeId + "] removeViewInLayout called for view of class " + str + " at index " + indexOfChild + "\nStack trace:\n" + stack);
        }
        super.removeViewInLayout(view);
    }

    public final void removeViewWithSubviewClippingEnabled$ReactAndroid_release(@NotNull View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        UiThreadUtil.assertOnUiThread();
        if (this._removeClippedSubviews) {
            View[] viewArr = this.allChildren;
            if (viewArr != null) {
                view.removeOnLayoutChangeListener(this.childrenLayoutChangeListener);
                int indexOfChildInAllChildren = indexOfChildInAllChildren(view);
                if (!isViewClipped(viewArr[indexOfChildInAllChildren], Integer.valueOf(indexOfChildInAllChildren))) {
                    int i10 = 0;
                    for (int i11 = 0; i11 < indexOfChildInAllChildren; i11++) {
                        if (isViewClipped(viewArr[i11], Integer.valueOf(i11))) {
                            i10++;
                        }
                    }
                    removeViewsInLayout(indexOfChildInAllChildren - i10, 1);
                    invalidate();
                }
                removeFromArray(indexOfChildInAllChildren);
                return;
            }
            throw new IllegalStateException("Required value was null.");
        }
        throw new IllegalStateException("Check failed.");
    }

    @Override // android.view.ViewGroup
    public void removeViews(int i10, int i11) {
        String str;
        UiThreadUtil.assertOnUiThread();
        String nativeId = getNativeId();
        if (nativeId != null) {
            IntRange u10 = kotlin.ranges.d.u(i10, i10 + i11);
            ArrayList<View> arrayList = new ArrayList(CollectionsKt.w(u10, 10));
            Iterator it = u10.iterator();
            while (it.hasNext()) {
                arrayList.add(getChildAt(((m0) it).nextInt()));
            }
            ArrayList arrayList2 = new ArrayList(CollectionsKt.w(arrayList, 10));
            for (View view : arrayList) {
                if (view != null) {
                    str = view.getClass().getSimpleName();
                } else {
                    str = "null";
                }
                arrayList2.add(str);
            }
            String stack = getStack();
            String viewHierarchyDescription = viewHierarchyDescription();
            p8.a.J("ReactViewGroup", "[" + nativeId + "] removeViews called for views of classes " + arrayList2 + " starting at index " + i10 + " count " + i11 + "\nStack trace:\n" + stack + "\nHierarchy:\n" + viewHierarchyDescription);
        }
        super.removeViews(i10, i11);
    }

    @Override // android.view.ViewGroup
    public void removeViewsInLayout(int i10, int i11) {
        String str;
        UiThreadUtil.assertOnUiThread();
        String nativeId = getNativeId();
        if (nativeId != null) {
            IntRange u10 = kotlin.ranges.d.u(i10, i10 + i11);
            ArrayList<View> arrayList = new ArrayList(CollectionsKt.w(u10, 10));
            Iterator it = u10.iterator();
            while (it.hasNext()) {
                arrayList.add(getChildAt(((m0) it).nextInt()));
            }
            ArrayList arrayList2 = new ArrayList(CollectionsKt.w(arrayList, 10));
            for (View view : arrayList) {
                if (view != null) {
                    str = view.getClass().getSimpleName();
                } else {
                    str = "null";
                }
                arrayList2.add(str);
            }
            String stack = getStack();
            String viewHierarchyDescription = viewHierarchyDescription();
            p8.a.J("ReactViewGroup", "[" + nativeId + "] removeViewsInLayout called for views of classes " + arrayList2 + " starting at index " + i10 + " count " + i11 + "\nStack trace:\n" + stack + "\nHierarchy:\n" + viewHierarchyDescription);
        }
        super.removeViewsInLayout(i10, i11);
    }

    @Override // android.view.View, android.view.ViewParent
    @SuppressLint({"MissingSuperCall"})
    public void requestLayout() {
    }

    public final void setAxOrderList(List<String> list) {
        this.axOrderList = list;
    }

    public final void setBackfaceVisibility(@NotNull String backfaceVisibility) {
        Intrinsics.checkNotNullParameter(backfaceVisibility, "backfaceVisibility");
        this.backfaceVisible = Intrinsics.areEqual(ViewProps.VISIBLE, backfaceVisibility);
        setBackfaceVisibilityDependantOpacity();
    }

    public final void setBackfaceVisibilityDependantOpacity() {
        if (this.backfaceVisible) {
            setAlpha(this.backfaceOpacity);
            return;
        }
        float rotationX = getRotationX();
        float rotationY = getRotationY();
        if (rotationX >= -90.0f && rotationX < 90.0f && rotationY >= -90.0f && rotationY < 90.0f) {
            setAlpha(this.backfaceOpacity);
        } else {
            setAlpha(0.0f);
        }
    }

    @Override // android.view.View
    public void setBackgroundColor(int i10) {
        BackgroundStyleApplicator.setBackgroundColor(this, Integer.valueOf(i10));
    }

    public final void setBorderColor(int i10, Integer num) {
        BackgroundStyleApplicator.setBorderColor(this, (LogicalEdge) LogicalEdge.getEntries().get(i10), num);
    }

    @ir.c
    public final void setBorderRadius(float f10) {
        BackgroundStyleApplicator.setBorderRadius(this, BorderRadiusProp.BORDER_RADIUS, Float.isNaN(f10) ? null : new LengthPercentage(f10, LengthPercentageType.POINT));
    }

    public final void setBorderStyle(String str) {
        BorderStyle borderStyle;
        if (str != null) {
            borderStyle = BorderStyle.Companion.fromString(str);
        } else {
            borderStyle = null;
        }
        BackgroundStyleApplicator.setBorderStyle(this, borderStyle);
    }

    public final void setBorderWidth(int i10, float f10) {
        BackgroundStyleApplicator.setBorderWidth(this, (LogicalEdge) LogicalEdge.getEntries().get(i10), Float.valueOf(PixelUtil.toDIPFromPixel(f10)));
    }

    public void setHitSlopRect(Rect rect) {
        this.hitSlopRect = rect;
    }

    public final void setNeedsOffscreenAlphaCompositing(boolean z10) {
        this.needsOffscreenAlphaCompositing = z10;
    }

    @Override // com.facebook.react.touch.ReactInterceptingViewGroup
    public void setOnInterceptTouchEventListener(@NotNull OnInterceptTouchEventListener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        this.onInterceptTouchEventListener = listener;
    }

    public final void setOpacityIfPossible(float f10) {
        this.backfaceOpacity = f10;
        setBackfaceVisibilityDependantOpacity();
    }

    public void setOverflow(String str) {
        Overflow fromString;
        if (str == null) {
            fromString = Overflow.VISIBLE;
        } else {
            fromString = Overflow.Companion.fromString(str);
        }
        this._overflow = fromString;
        invalidate();
    }

    @Override // com.facebook.react.uimanager.ReactOverflowViewWithInset
    public void setOverflowInset(int i10, int i11, int i12, int i13) {
        if (BlendModeHelper.needsIsolatedLayer(this) && (getOverflowInset().left != i10 || getOverflowInset().top != i11 || getOverflowInset().right != i12 || getOverflowInset().bottom != i13)) {
            invalidate();
        }
        getOverflowInset().set(i10, i11, i12, i13);
    }

    public void setPointerEvents(@NotNull PointerEvents pointerEvents) {
        Intrinsics.checkNotNullParameter(pointerEvents, "<set-?>");
        this.pointerEvents = pointerEvents;
    }

    public final void setPreventClipping(boolean z10) {
        this.preventClipping = z10;
    }

    public void setRemoveClippedSubviews(boolean z10) {
        if (z10 == this._removeClippedSubviews) {
            return;
        }
        this._removeClippedSubviews = z10;
        this.childrenRemovedWhileTransitioning = null;
        if (z10) {
            Rect rect = new Rect();
            ReactClippingViewGroupHelper.calculateClippingRect(this, rect);
            this.clippingRect = rect;
            int childCount = getChildCount();
            this.allChildrenCount = childCount;
            View[] viewArr = new View[Math.max(12, childCount)];
            this.childrenLayoutChangeListener = new ChildrenLayoutChangeListener(this);
            int i10 = this.allChildrenCount;
            for (int i11 = 0; i11 < i10; i11++) {
                View childAt = getChildAt(i11);
                viewArr[i11] = childAt;
                childAt.addOnLayoutChangeListener(this.childrenLayoutChangeListener);
                Companion companion = Companion;
                Intrinsics.checkNotNull(childAt);
                companion.setViewClipped(childAt, false);
            }
            this.allChildren = viewArr;
            updateClippingRect();
            return;
        }
        View[] viewArr2 = this.allChildren;
        if (viewArr2 != null) {
            if (this.childrenLayoutChangeListener != null) {
                int i12 = this.allChildrenCount;
                for (int i13 = 0; i13 < i12; i13++) {
                    View view = viewArr2[i13];
                    if (view != null) {
                        view.removeOnLayoutChangeListener(this.childrenLayoutChangeListener);
                    }
                }
                Rect rect2 = this.clippingRect;
                if (rect2 != null) {
                    getDrawingRect(rect2);
                    updateClippingToRect$default(this, rect2, null, 2, null);
                    this.allChildren = null;
                    this.clippingRect = null;
                    this.allChildrenCount = 0;
                    this.childrenLayoutChangeListener = null;
                    return;
                }
                throw new IllegalStateException("Required value was null.");
            }
            throw new IllegalStateException("Required value was null.");
        }
        throw new IllegalStateException("Required value was null.");
    }

    @ir.c
    public final void setTranslucentBackgroundDrawable(Drawable drawable) {
        BackgroundStyleApplicator.setFeedbackUnderlay(this, drawable);
    }

    @Override // com.facebook.react.uimanager.ReactClippingViewGroup
    public void updateClippingRect() {
        updateClippingRect(null);
    }

    @Override // com.facebook.react.uimanager.ReactZIndexedViewGroup
    public void updateDrawingOrder() {
        if (customDrawOrderDisabled()) {
            return;
        }
        getDrawingOrderHelper().update();
        setChildrenDrawingOrderEnabled(getDrawingOrderHelper().shouldEnableCustomDrawingOrder());
        invalidate();
    }

    @Override // com.facebook.react.uimanager.ReactClippingViewGroup
    public void updateClippingRect(Set<Integer> set) {
        if (this._removeClippedSubviews) {
            Rect rect = this.clippingRect;
            if (rect != null) {
                ReactClippingViewGroupHelper.calculateClippingRect(this, rect);
                updateClippingToRect(rect, set);
                return;
            }
            throw new IllegalStateException("Required value was null.");
        }
    }

    @ir.c
    public final void setBorderRadius(float f10, int i10) {
        BackgroundStyleApplicator.setBorderRadius(this, (BorderRadiusProp) BorderRadiusProp.getEntries().get(i10), Float.isNaN(f10) ? null : new LengthPercentage(f10, LengthPercentageType.POINT));
    }

    public final void setBorderRadius(@NotNull BorderRadiusProp property, LengthPercentage lengthPercentage) {
        Intrinsics.checkNotNullParameter(property, "property");
        BackgroundStyleApplicator.setBorderRadius(this, property, lengthPercentage);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void updateSubviewClipStatus(View view) {
        ReactViewGroup reactViewGroup;
        if (this._removeClippedSubviews && getParent() != null) {
            Rect rect = this.clippingRect;
            if (rect != null) {
                View[] viewArr = this.allChildren;
                if (viewArr != null) {
                    if (rect.intersects(view.getLeft(), view.getTop(), view.getRight(), view.getBottom()) != (!isViewClipped(view, null))) {
                        this.inSubviewClippingLoop = true;
                        int i10 = this.allChildrenCount;
                        int i11 = 0;
                        int i12 = 0;
                        while (true) {
                            if (i11 >= i10) {
                                reactViewGroup = this;
                                break;
                            }
                            View view2 = viewArr[i11];
                            if (view2 == view) {
                                updateSubviewClipStatus$default(this, rect, i11, i12, null, 8, null);
                                reactViewGroup = this;
                                break;
                            }
                            int i13 = i11;
                            Rect rect2 = rect;
                            if (isViewClipped(view2, Integer.valueOf(i13))) {
                                i12++;
                            }
                            rect = rect2;
                            i11 = i13 + 1;
                        }
                        reactViewGroup.inSubviewClippingLoop = false;
                    }
                } else {
                    throw new IllegalStateException("Required value was null.");
                }
            } else {
                throw new IllegalStateException("Required value was null.");
            }
        }
    }
}
