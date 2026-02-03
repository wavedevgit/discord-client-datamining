package com.facebook.react.views.scroll;

import android.view.View;
import androidx.core.view.h0;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableType;
import com.facebook.react.bridge.RetryableMountingLayerException;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.BackgroundStyleApplicator;
import com.facebook.react.uimanager.LengthPercentage;
import com.facebook.react.uimanager.LengthPercentageType;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.PointerEvents;
import com.facebook.react.uimanager.ReactClippingViewGroupHelper;
import com.facebook.react.uimanager.ReactStylesDiffMap;
import com.facebook.react.uimanager.StateWrapper;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.annotations.ReactPropGroup;
import com.facebook.react.uimanager.style.BorderRadiusProp;
import com.facebook.react.uimanager.style.BorderStyle;
import com.facebook.react.uimanager.style.LogicalEdge;
import com.facebook.react.views.scroll.MaintainVisibleScrollPositionHelper;
import com.facebook.react.views.scroll.ReactScrollViewCommandHelper;
import java.util.ArrayList;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FloatCompanionObject;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@ReactModule(name = ReactHorizontalScrollViewManager.REACT_CLASS)
@Metadata(d1 = {"\u0000~\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0011\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000f\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\b\u0017\u0018\u0000 W2\b\u0012\u0004\u0012\u00020\u00020\u00012\b\u0012\u0004\u0012\u00020\u00020\u0003:\u0001WB\u0015\b\u0007\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\b\u0010\b\u001a\u00020\tH\u0016J\u0010\u0010\n\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\fH\u0016J\"\u0010\r\u001a\u0004\u0018\u00010\u000e2\u0006\u0010\u000f\u001a\u00020\u00022\u0006\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u0013H\u0016J\u0018\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u000f\u001a\u00020\u00022\u0006\u0010\u0016\u001a\u00020\u0017H\u0007J\u0018\u0010\u0018\u001a\u00020\u00152\u0006\u0010\u000f\u001a\u00020\u00022\u0006\u0010\u0016\u001a\u00020\u0017H\u0007J\u0018\u0010\u0019\u001a\u00020\u00152\u0006\u0010\u000f\u001a\u00020\u00022\u0006\u0010\u001a\u001a\u00020\u001bH\u0007J\u0018\u0010\u001c\u001a\u00020\u00152\u0006\u0010\u000f\u001a\u00020\u00022\u0006\u0010\u001d\u001a\u00020\u0017H\u0007J\u0018\u0010\u001e\u001a\u00020\u00152\u0006\u0010\u000f\u001a\u00020\u00022\u0006\u0010\u001f\u001a\u00020\u001bH\u0007J\u001a\u0010 \u001a\u00020\u00152\u0006\u0010\u000f\u001a\u00020\u00022\b\u0010!\u001a\u0004\u0018\u00010\tH\u0007J\u001a\u0010\"\u001a\u00020\u00152\u0006\u0010\u000f\u001a\u00020\u00022\b\u0010#\u001a\u0004\u0018\u00010$H\u0007J\u0018\u0010%\u001a\u00020\u00152\u0006\u0010\u000f\u001a\u00020\u00022\u0006\u0010&\u001a\u00020\u0017H\u0007J\u0018\u0010'\u001a\u00020\u00152\u0006\u0010\u000f\u001a\u00020\u00022\u0006\u0010(\u001a\u00020\u0017H\u0007J\u0018\u0010)\u001a\u00020\u00152\u0006\u0010\u000f\u001a\u00020\u00022\u0006\u0010*\u001a\u00020\u0017H\u0007J\u0018\u0010+\u001a\u00020\u00152\u0006\u0010\u000f\u001a\u00020\u00022\u0006\u0010,\u001a\u00020\u0017H\u0007J\u001a\u0010-\u001a\u00020\u00152\u0006\u0010\u000f\u001a\u00020\u00022\b\u0010.\u001a\u0004\u0018\u00010\tH\u0007J\u0018\u0010/\u001a\u00020\u00152\u0006\u0010\u000f\u001a\u00020\u00022\u0006\u00100\u001a\u00020\u0017H\u0007J\u001a\u00101\u001a\u00020\u00152\u0006\u0010\u000f\u001a\u00020\u00022\b\u0010\u0016\u001a\u0004\u0018\u00010\tH\u0017J\u001a\u00102\u001a\u00020\u00152\b\u0010\u000f\u001a\u0004\u0018\u00010\u00022\u0006\u0010\u0016\u001a\u00020\u0017H\u0007J\"\u00103\u001a\u00020\u00152\u0006\u00104\u001a\u00020\u00022\u0006\u00105\u001a\u0002062\b\u00107\u001a\u0004\u0018\u00010$H\u0017J\"\u00103\u001a\u00020\u00152\u0006\u00104\u001a\u00020\u00022\u0006\u00105\u001a\u00020\t2\b\u00107\u001a\u0004\u0018\u00010$H\u0016J\u0010\u00108\u001a\u00020\u00152\u0006\u00104\u001a\u00020\u0002H\u0016J\u0018\u00109\u001a\u00020\u00152\u0006\u00104\u001a\u00020\u00022\u0006\u0010:\u001a\u00020;H\u0016J\u0018\u0010<\u001a\u00020\u00152\u0006\u00104\u001a\u00020\u00022\u0006\u0010:\u001a\u00020=H\u0016J\u0018\u0010>\u001a\u00020\u00152\u0006\u0010\u000f\u001a\u00020\u00022\u0006\u0010?\u001a\u000206H\u0007J\"\u0010@\u001a\u00020\u00152\b\u0010\u000f\u001a\u0004\u0018\u00010\u00022\u0006\u0010A\u001a\u0002062\u0006\u0010B\u001a\u00020\u001bH\u0007J\u001c\u0010C\u001a\u00020\u00152\b\u0010\u000f\u001a\u0004\u0018\u00010\u00022\b\u0010D\u001a\u0004\u0018\u00010\tH\u0007J\"\u0010E\u001a\u00020\u00152\b\u0010\u000f\u001a\u0004\u0018\u00010\u00022\u0006\u0010A\u001a\u0002062\u0006\u0010F\u001a\u00020\u001bH\u0007J'\u0010G\u001a\u00020\u00152\u0006\u0010\u000f\u001a\u00020\u00022\u0006\u0010A\u001a\u0002062\b\u0010?\u001a\u0004\u0018\u000106H\u0007¢\u0006\u0002\u0010HJ\u001a\u0010I\u001a\u00020\u00152\u0006\u0010\u000f\u001a\u00020\u00022\b\u0010J\u001a\u0004\u0018\u00010\tH\u0007J\u0018\u0010K\u001a\u00020\u00152\u0006\u0010\u000f\u001a\u00020\u00022\u0006\u0010\u0016\u001a\u00020\u0017H\u0007J\u0018\u0010L\u001a\u00020\u00152\u0006\u0010\u000f\u001a\u00020\u00022\u0006\u0010\u0016\u001a\u00020MH\u0007J\u001a\u0010N\u001a\u00020\u00152\u0006\u0010\u000f\u001a\u00020\u00022\b\u0010\u0016\u001a\u0004\u0018\u00010OH\u0007J\u001a\u0010P\u001a\u00020\u00152\u0006\u0010\u000f\u001a\u00020\u00022\b\u0010\u0016\u001a\u0004\u0018\u00010OH\u0007J\u001a\u0010Q\u001a\u00020\u00152\u0006\u0010\u000f\u001a\u00020\u00022\b\u0010R\u001a\u0004\u0018\u00010\tH\u0007J\u0018\u0010S\u001a\u00020\u00152\u0006\u0010\u000f\u001a\u00020\u00022\u0006\u0010T\u001a\u000206H\u0007J\u001a\u0010U\u001a\u00020\u00152\b\u0010\u000f\u001a\u0004\u0018\u00010\u00022\u0006\u0010V\u001a\u00020\u0017H\u0007R\u0010\u0010\u0004\u001a\u0004\u0018\u00010\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006X"}, d2 = {"Lcom/facebook/react/views/scroll/ReactHorizontalScrollViewManager;", "Lcom/facebook/react/uimanager/ViewGroupManager;", "Lcom/facebook/react/views/scroll/ReactHorizontalScrollView;", "Lcom/facebook/react/views/scroll/ReactScrollViewCommandHelper$ScrollCommandHandler;", "fpsListener", "Lcom/facebook/react/views/scroll/FpsListener;", "<init>", "(Lcom/facebook/react/views/scroll/FpsListener;)V", "getName", "", "createViewInstance", "context", "Lcom/facebook/react/uimanager/ThemedReactContext;", "updateState", "", "view", "props", "Lcom/facebook/react/uimanager/ReactStylesDiffMap;", "stateWrapper", "Lcom/facebook/react/uimanager/StateWrapper;", "setScrollEnabled", "", "value", "", "setShowsHorizontalScrollIndicator", "setDecelerationRate", "decelerationRate", "", "setDisableIntervalMomentum", "disableIntervalMomentum", "setSnapToInterval", "snapToInterval", "setSnapToAlignment", "alignment", "setSnapToOffsets", "snapToOffsets", "Lcom/facebook/react/bridge/ReadableArray;", "setSnapToStart", "snapToStart", "setSnapToEnd", "snapToEnd", "setRemoveClippedSubviews", ReactClippingViewGroupHelper.PROP_REMOVE_CLIPPED_SUBVIEWS, "setSendMomentumEvents", "sendMomentumEvents", "setScrollPerfTag", "scrollPerfTag", "setPagingEnabled", "pagingEnabled", "setOverScrollMode", "setNestedScrollEnabled", "receiveCommand", "scrollView", "commandId", "", "args", "flashScrollIndicators", "scrollTo", "data", "Lcom/facebook/react/views/scroll/ReactScrollViewCommandHelper$ScrollToCommandData;", "scrollToEnd", "Lcom/facebook/react/views/scroll/ReactScrollViewCommandHelper$ScrollToEndCommandData;", "setBottomFillColor", ViewProps.COLOR, "setBorderRadius", "index", "borderRadius", "setBorderStyle", "borderStyle", "setBorderWidth", "width", "setBorderColor", "(Lcom/facebook/react/views/scroll/ReactHorizontalScrollView;ILjava/lang/Integer;)V", "setOverflow", ViewProps.OVERFLOW, "setPersistentScrollbar", "setFadingEdgeLength", "Lcom/facebook/react/bridge/Dynamic;", "setContentOffset", "Lcom/facebook/react/bridge/ReadableMap;", "setMaintainVisibleContentPosition", "setPointerEvents", "pointerEventsStr", "setScrollEventThrottle", "scrollEventThrottle", "setHorizontal", "horizontal", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class ReactHorizontalScrollViewManager extends ViewGroupManager<ReactHorizontalScrollView> implements ReactScrollViewCommandHelper.ScrollCommandHandler<ReactHorizontalScrollView> {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final String REACT_CLASS = "AndroidHorizontalScrollView";
    private final FpsListener fpsListener;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/facebook/react/views/scroll/ReactHorizontalScrollViewManager$Companion;", "", "<init>", "()V", "REACT_CLASS", "", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[ReadableType.values().length];
            try {
                iArr[ReadableType.Number.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[ReadableType.Map.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    public ReactHorizontalScrollViewManager() {
        this(null, 1, null);
    }

    @Override // com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return REACT_CLASS;
    }

    @ReactPropGroup(customType = "Color", names = {ViewProps.BORDER_COLOR, ViewProps.BORDER_LEFT_COLOR, ViewProps.BORDER_RIGHT_COLOR, ViewProps.BORDER_TOP_COLOR, ViewProps.BORDER_BOTTOM_COLOR})
    public final void setBorderColor(@NotNull ReactHorizontalScrollView view, int i10, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        BackgroundStyleApplicator.setBorderColor(view, LogicalEdge.ALL, num);
    }

    @ReactPropGroup(defaultFloat = FloatCompanionObject.NaN, names = {"borderRadius", "borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"})
    public final void setBorderRadius(ReactHorizontalScrollView reactHorizontalScrollView, int i10, float f10) {
        LengthPercentage lengthPercentage;
        if (reactHorizontalScrollView != null) {
            if (Float.isNaN(f10)) {
                lengthPercentage = null;
            } else {
                lengthPercentage = new LengthPercentage(f10, LengthPercentageType.POINT);
            }
            BackgroundStyleApplicator.setBorderRadius(reactHorizontalScrollView, (BorderRadiusProp) BorderRadiusProp.getEntries().get(i10), lengthPercentage);
        }
    }

    @ReactProp(name = "borderStyle")
    public final void setBorderStyle(ReactHorizontalScrollView reactHorizontalScrollView, String str) {
        BorderStyle fromString;
        if (reactHorizontalScrollView != null) {
            if (str == null) {
                fromString = null;
            } else {
                fromString = BorderStyle.Companion.fromString(str);
            }
            BackgroundStyleApplicator.setBorderStyle(reactHorizontalScrollView, fromString);
        }
    }

    @ReactPropGroup(defaultFloat = FloatCompanionObject.NaN, names = {ViewProps.BORDER_WIDTH, ViewProps.BORDER_LEFT_WIDTH, ViewProps.BORDER_RIGHT_WIDTH, ViewProps.BORDER_TOP_WIDTH, ViewProps.BORDER_BOTTOM_WIDTH})
    public final void setBorderWidth(ReactHorizontalScrollView reactHorizontalScrollView, int i10, float f10) {
        if (reactHorizontalScrollView != null) {
            BackgroundStyleApplicator.setBorderWidth(reactHorizontalScrollView, (LogicalEdge) LogicalEdge.getEntries().get(i10), Float.valueOf(f10));
        }
    }

    @ReactProp(customType = "Color", defaultInt = 0, name = "endFillColor")
    public final void setBottomFillColor(@NotNull ReactHorizontalScrollView view, int i10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setEndFillColor(i10);
    }

    @ReactProp(name = "contentOffset")
    public final void setContentOffset(@NotNull ReactHorizontalScrollView view, ReadableMap readableMap) {
        double d10;
        Intrinsics.checkNotNullParameter(view, "view");
        if (readableMap != null) {
            double d11 = 0.0d;
            if (readableMap.hasKey("x")) {
                d10 = readableMap.getDouble("x");
            } else {
                d10 = 0.0d;
            }
            if (readableMap.hasKey("y")) {
                d11 = readableMap.getDouble("y");
            }
            view.scrollTo((int) PixelUtil.toPixelFromDIP(d10), (int) PixelUtil.toPixelFromDIP(d11));
            return;
        }
        view.scrollTo(0, 0);
    }

    @ReactProp(name = "decelerationRate")
    public final void setDecelerationRate(@NotNull ReactHorizontalScrollView view, float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setDecelerationRate(f10);
    }

    @ReactProp(name = "disableIntervalMomentum")
    public final void setDisableIntervalMomentum(@NotNull ReactHorizontalScrollView view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setDisableIntervalMomentum(z10);
    }

    @ReactProp(name = "fadingEdgeLength")
    public final void setFadingEdgeLength(@NotNull ReactHorizontalScrollView view, @NotNull Dynamic value) {
        ReadableMap asMap;
        int i10;
        int i11;
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(value, "value");
        int i12 = WhenMappings.$EnumSwitchMapping$0[value.getType().ordinal()];
        if (i12 != 1) {
            if (i12 == 2 && (asMap = value.asMap()) != null) {
                if (asMap.hasKey(ViewProps.START) && asMap.getInt(ViewProps.START) > 0) {
                    i10 = asMap.getInt(ViewProps.START);
                } else {
                    i10 = 0;
                }
                if (asMap.hasKey(ViewProps.END) && asMap.getInt(ViewProps.END) > 0) {
                    i11 = asMap.getInt(ViewProps.END);
                } else {
                    i11 = 0;
                }
                view.setFadingEdgeLengthStart(i10);
                view.setFadingEdgeLengthEnd(i11);
            }
        } else {
            view.setFadingEdgeLengthStart(value.asInt());
            view.setFadingEdgeLengthEnd(value.asInt());
        }
        if (view.getFadingEdgeLengthStart() <= 0 && view.getFadingEdgeLengthEnd() <= 0) {
            view.setHorizontalFadingEdgeEnabled(false);
            view.setFadingEdgeLength(0);
            return;
        }
        view.setHorizontalFadingEdgeEnabled(true);
        view.setFadingEdgeLength(Math.round(PixelUtil.INSTANCE.dpToPx(Math.max(view.getFadingEdgeLengthStart(), view.getFadingEdgeLengthEnd()))));
    }

    @ReactProp(name = "horizontal")
    public final void setHorizontal(ReactHorizontalScrollView reactHorizontalScrollView, boolean z10) {
    }

    @ReactProp(name = "maintainVisibleContentPosition")
    public final void setMaintainVisibleContentPosition(@NotNull ReactHorizontalScrollView view, ReadableMap readableMap) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (readableMap != null) {
            view.setMaintainVisibleContentPosition(MaintainVisibleScrollPositionHelper.Config.Companion.fromReadableMap(readableMap));
        } else {
            view.setMaintainVisibleContentPosition(null);
        }
    }

    @ReactProp(name = "nestedScrollEnabled")
    public final void setNestedScrollEnabled(ReactHorizontalScrollView reactHorizontalScrollView, boolean z10) {
        if (reactHorizontalScrollView != null) {
            h0.C0(reactHorizontalScrollView, z10);
        }
    }

    @ReactProp(name = "overScrollMode")
    public void setOverScrollMode(@NotNull ReactHorizontalScrollView view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setOverScrollMode(ReactScrollViewHelper.parseOverScrollMode(str));
    }

    @ReactProp(name = ViewProps.OVERFLOW)
    public final void setOverflow(@NotNull ReactHorizontalScrollView view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setOverflow(str);
    }

    @ReactProp(name = "pagingEnabled")
    public final void setPagingEnabled(@NotNull ReactHorizontalScrollView view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setPagingEnabled(z10);
    }

    @ReactProp(name = "persistentScrollbar")
    public final void setPersistentScrollbar(@NotNull ReactHorizontalScrollView view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setScrollbarFadingEnabled(!z10);
    }

    @ReactProp(name = ViewProps.POINTER_EVENTS)
    public final void setPointerEvents(@NotNull ReactHorizontalScrollView view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setPointerEvents(PointerEvents.Companion.parsePointerEvents(str));
    }

    @ReactProp(name = ReactClippingViewGroupHelper.PROP_REMOVE_CLIPPED_SUBVIEWS)
    public final void setRemoveClippedSubviews(@NotNull ReactHorizontalScrollView view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setRemoveClippedSubviews(z10);
    }

    @ReactProp(defaultBoolean = true, name = "scrollEnabled")
    public final void setScrollEnabled(@NotNull ReactHorizontalScrollView view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setScrollEnabled(z10);
    }

    @ReactProp(name = "scrollEventThrottle")
    public final void setScrollEventThrottle(@NotNull ReactHorizontalScrollView view, int i10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setScrollEventThrottle(i10);
    }

    @ReactProp(name = "scrollPerfTag")
    public final void setScrollPerfTag(@NotNull ReactHorizontalScrollView view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setScrollPerfTag(str);
    }

    @ReactProp(name = "sendMomentumEvents")
    public final void setSendMomentumEvents(@NotNull ReactHorizontalScrollView view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setSendMomentumEvents(z10);
    }

    @ReactProp(defaultBoolean = true, name = "showsHorizontalScrollIndicator")
    public final void setShowsHorizontalScrollIndicator(@NotNull ReactHorizontalScrollView view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setHorizontalScrollBarEnabled(z10);
    }

    @ReactProp(name = "snapToAlignment")
    public final void setSnapToAlignment(@NotNull ReactHorizontalScrollView view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setSnapToAlignment(ReactScrollViewHelper.parseSnapToAlignment(str));
    }

    @ReactProp(name = "snapToEnd")
    public final void setSnapToEnd(@NotNull ReactHorizontalScrollView view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setSnapToEnd(z10);
    }

    @ReactProp(name = "snapToInterval")
    public final void setSnapToInterval(@NotNull ReactHorizontalScrollView view, float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setSnapInterval((int) (f10 * PixelUtil.getDisplayMetricDensity()));
    }

    @ReactProp(name = "snapToOffsets")
    public final void setSnapToOffsets(@NotNull ReactHorizontalScrollView view, ReadableArray readableArray) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (readableArray != null && readableArray.size() != 0) {
            float displayMetricDensity = PixelUtil.getDisplayMetricDensity();
            ArrayList arrayList = new ArrayList();
            int size = readableArray.size();
            for (int i10 = 0; i10 < size; i10++) {
                arrayList.add(Integer.valueOf((int) (readableArray.getDouble(i10) * displayMetricDensity)));
            }
            view.setSnapOffsets(arrayList);
            return;
        }
        view.setSnapOffsets(null);
    }

    @ReactProp(name = "snapToStart")
    public final void setSnapToStart(@NotNull ReactHorizontalScrollView view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setSnapToStart(z10);
    }

    public /* synthetic */ ReactHorizontalScrollViewManager(FpsListener fpsListener, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : fpsListener);
    }

    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public ReactHorizontalScrollView createViewInstance(@NotNull ThemedReactContext context) {
        Intrinsics.checkNotNullParameter(context, "context");
        return new ReactHorizontalScrollView(context, this.fpsListener);
    }

    @Override // com.facebook.react.views.scroll.ReactScrollViewCommandHelper.ScrollCommandHandler
    public void flashScrollIndicators(@NotNull ReactHorizontalScrollView scrollView) {
        Intrinsics.checkNotNullParameter(scrollView, "scrollView");
        scrollView.flashScrollIndicators();
    }

    @Override // com.facebook.react.views.scroll.ReactScrollViewCommandHelper.ScrollCommandHandler
    public void scrollTo(@NotNull ReactHorizontalScrollView scrollView, @NotNull ReactScrollViewCommandHelper.ScrollToCommandData data) {
        Intrinsics.checkNotNullParameter(scrollView, "scrollView");
        Intrinsics.checkNotNullParameter(data, "data");
        scrollView.abortAnimation();
        if (data.mAnimated) {
            scrollView.reactSmoothScrollTo(data.mDestX, data.mDestY);
        } else {
            scrollView.scrollTo(data.mDestX, data.mDestY);
        }
    }

    @Override // com.facebook.react.views.scroll.ReactScrollViewCommandHelper.ScrollCommandHandler
    public void scrollToEnd(@NotNull ReactHorizontalScrollView scrollView, @NotNull ReactScrollViewCommandHelper.ScrollToEndCommandData data) {
        Intrinsics.checkNotNullParameter(scrollView, "scrollView");
        Intrinsics.checkNotNullParameter(data, "data");
        View childAt = scrollView.getChildAt(0);
        if (childAt != null) {
            int width = childAt.getWidth() + scrollView.getPaddingRight();
            scrollView.abortAnimation();
            if (data.mAnimated) {
                scrollView.reactSmoothScrollTo(width, scrollView.getScrollY());
                return;
            } else {
                scrollView.scrollTo(width, scrollView.getScrollY());
                return;
            }
        }
        throw new RetryableMountingLayerException("scrollToEnd called on HorizontalScrollView without child");
    }

    @Override // com.facebook.react.uimanager.ViewManager
    public Object updateState(@NotNull ReactHorizontalScrollView view, @NotNull ReactStylesDiffMap props, @NotNull StateWrapper stateWrapper) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(props, "props");
        Intrinsics.checkNotNullParameter(stateWrapper, "stateWrapper");
        view.setStateWrapper(stateWrapper);
        return null;
    }

    public ReactHorizontalScrollViewManager(FpsListener fpsListener) {
        super(null, 1, null);
        this.fpsListener = fpsListener;
    }

    @Override // com.facebook.react.uimanager.ViewManager
    @lr.c
    public void receiveCommand(@NotNull ReactHorizontalScrollView scrollView, int i10, ReadableArray readableArray) {
        Intrinsics.checkNotNullParameter(scrollView, "scrollView");
        ReactScrollViewCommandHelper.Companion.receiveCommand((ReactScrollViewCommandHelper.ScrollCommandHandler<ReactHorizontalScrollViewManager>) this, (ReactHorizontalScrollViewManager) scrollView, i10, readableArray);
    }

    @Override // com.facebook.react.uimanager.ViewManager
    public void receiveCommand(@NotNull ReactHorizontalScrollView scrollView, @NotNull String commandId, ReadableArray readableArray) {
        Intrinsics.checkNotNullParameter(scrollView, "scrollView");
        Intrinsics.checkNotNullParameter(commandId, "commandId");
        ReactScrollViewCommandHelper.Companion.receiveCommand((ReactScrollViewCommandHelper.ScrollCommandHandler<ReactHorizontalScrollViewManager>) this, (ReactHorizontalScrollViewManager) scrollView, commandId, readableArray);
    }
}
