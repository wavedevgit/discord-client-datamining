package com.facebook.react.views.scroll;

import android.content.Context;
import android.graphics.Rect;
import android.view.View;
import android.view.ViewGroup;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.UIManager;
import com.facebook.react.bridge.UIManagerListener;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.common.ViewUtil;
import com.facebook.react.views.scroll.ReactScrollViewHelper;
import com.facebook.react.views.scroll.ReactScrollViewHelper.HasSmoothScroll;
import com.facebook.react.views.view.ReactViewGroup;
import java.lang.ref.WeakReference;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000P\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\f\b\u0000\u0018\u0000*\u0010\b\u0000\u0010\u0001*\u0004\u0018\u00010\u0002*\u0004\u0018\u00010\u00032\u00020\u0004:\u0001+B\u0017\u0012\u0006\u0010\u0005\u001a\u00028\u0000\u0012\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tJ\u0006\u0010\u001f\u001a\u00020 J\u0006\u0010!\u001a\u00020 J\u0006\u0010\"\u001a\u00020 J\b\u0010#\u001a\u00020 H\u0002J\b\u0010$\u001a\u00020 H\u0002J\u0010\u0010%\u001a\u00020 2\u0006\u0010&\u001a\u00020\u001cH\u0016J\u0010\u0010'\u001a\u00020 2\u0006\u0010&\u001a\u00020\u001cH\u0016J\u0010\u0010(\u001a\u00020 2\u0006\u0010&\u001a\u00020\u001cH\u0016J\u0010\u0010)\u001a\u00020 2\u0006\u0010&\u001a\u00020\u001cH\u0016J\u0010\u0010*\u001a\u00020 2\u0006\u0010&\u001a\u00020\u001cH\u0016R\u0010\u0010\u0005\u001a\u00028\u0000X\u0082\u0004¢\u0006\u0004\n\u0002\u0010\nR\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u001c\u0010\u000b\u001a\u0004\u0018\u00010\fX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\r\u0010\u000e\"\u0004\b\u000f\u0010\u0010R\u0016\u0010\u0011\u001a\n\u0012\u0004\u0012\u00020\u0013\u0018\u00010\u0012X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u0014\u001a\u0004\u0018\u00010\u0015X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0016\u001a\u00020\u0007X\u0082\u000e¢\u0006\u0002\n\u0000R\u0016\u0010\u0017\u001a\u0004\u0018\u00010\u00188BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\u0019\u0010\u001aR\u0014\u0010\u001b\u001a\u00020\u001c8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\u001d\u0010\u001e¨\u0006,"}, d2 = {"Lcom/facebook/react/views/scroll/MaintainVisibleScrollPositionHelper;", "ScrollViewT", "Lcom/facebook/react/views/scroll/ReactScrollViewHelper$HasSmoothScroll;", "Landroid/view/ViewGroup;", "Lcom/facebook/react/bridge/UIManagerListener;", "scrollView", "horizontal", "", "<init>", "(Landroid/view/ViewGroup;Z)V", "Landroid/view/ViewGroup;", "config", "Lcom/facebook/react/views/scroll/MaintainVisibleScrollPositionHelper$Config;", "getConfig", "()Lcom/facebook/react/views/scroll/MaintainVisibleScrollPositionHelper$Config;", "setConfig", "(Lcom/facebook/react/views/scroll/MaintainVisibleScrollPositionHelper$Config;)V", "firstVisibleViewRef", "Ljava/lang/ref/WeakReference;", "Landroid/view/View;", "prevFirstVisibleFrame", "Landroid/graphics/Rect;", "isListening", "contentView", "Lcom/facebook/react/views/view/ReactViewGroup;", "getContentView", "()Lcom/facebook/react/views/view/ReactViewGroup;", "uIManager", "Lcom/facebook/react/bridge/UIManager;", "getUIManager", "()Lcom/facebook/react/bridge/UIManager;", ViewProps.START, "", "stop", "updateScrollPosition", "updateScrollPositionInternal", "computeTargetView", "willDispatchViewUpdates", "uiManager", "willMountItems", "didMountItems", "didDispatchMountItems", "didScheduleMountItems", "Config", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MaintainVisibleScrollPositionHelper<ScrollViewT extends ViewGroup & ReactScrollViewHelper.HasSmoothScroll> implements UIManagerListener {
    private Config config;
    private WeakReference<View> firstVisibleViewRef;
    private final boolean horizontal;
    private boolean isListening;
    private Rect prevFirstVisibleFrame;
    private final ScrollViewT scrollView;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\n\u0018\u0000 \f2\u00020\u0001:\u0001\fB\u001b\b\u0000\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0005\u0010\u0006R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0015\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u0010\u000b\u001a\u0004\b\t\u0010\n¨\u0006\r"}, d2 = {"Lcom/facebook/react/views/scroll/MaintainVisibleScrollPositionHelper$Config;", "", "minIndexForVisible", "", "autoScrollToTopThreshold", "<init>", "(ILjava/lang/Integer;)V", "getMinIndexForVisible", "()I", "getAutoScrollToTopThreshold", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Config {
        @NotNull
        public static final Companion Companion = new Companion(null);
        private final Integer autoScrollToTopThreshold;
        private final int minIndexForVisible;

        @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007H\u0007¨\u0006\b"}, d2 = {"Lcom/facebook/react/views/scroll/MaintainVisibleScrollPositionHelper$Config$Companion;", "", "<init>", "()V", "fromReadableMap", "Lcom/facebook/react/views/scroll/MaintainVisibleScrollPositionHelper$Config;", "value", "Lcom/facebook/react/bridge/ReadableMap;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            @NotNull
            public final Config fromReadableMap(@NotNull ReadableMap value) {
                Integer num;
                Intrinsics.checkNotNullParameter(value, "value");
                int i10 = value.getInt("minIndexForVisible");
                if (value.hasKey("autoscrollToTopThreshold")) {
                    num = Integer.valueOf(value.getInt("autoscrollToTopThreshold"));
                } else {
                    num = null;
                }
                return new Config(i10, num);
            }

            private Companion() {
            }
        }

        public Config(int i10, Integer num) {
            this.minIndexForVisible = i10;
            this.autoScrollToTopThreshold = num;
        }

        @NotNull
        public static final Config fromReadableMap(@NotNull ReadableMap readableMap) {
            return Companion.fromReadableMap(readableMap);
        }

        public final Integer getAutoScrollToTopThreshold() {
            return this.autoScrollToTopThreshold;
        }

        public final int getMinIndexForVisible() {
            return this.minIndexForVisible;
        }
    }

    public MaintainVisibleScrollPositionHelper(ScrollViewT scrollviewt, boolean z10) {
        this.scrollView = scrollviewt;
        this.horizontal = z10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void computeTargetView() {
        ViewGroup viewGroup;
        ReactViewGroup contentView;
        int scrollY;
        float y10;
        int height;
        Config config = this.config;
        if (config != null && (viewGroup = (ScrollViewT) this.scrollView) != null && (contentView = getContentView()) != null) {
            if (this.horizontal) {
                scrollY = viewGroup.getScrollX();
            } else {
                scrollY = viewGroup.getScrollY();
            }
            int childCount = contentView.getChildCount();
            for (int minIndexForVisible = config.getMinIndexForVisible(); minIndexForVisible < childCount; minIndexForVisible++) {
                View childAt = contentView.getChildAt(minIndexForVisible);
                if (this.horizontal) {
                    y10 = childAt.getX();
                    height = childAt.getWidth();
                } else {
                    y10 = childAt.getY();
                    height = childAt.getHeight();
                }
                if (y10 + height > scrollY || minIndexForVisible == contentView.getChildCount() - 1) {
                    this.firstVisibleViewRef = new WeakReference<>(childAt);
                    Rect rect = new Rect();
                    childAt.getHitRect(rect);
                    this.prevFirstVisibleFrame = rect;
                    return;
                }
            }
        }
    }

    private final ReactViewGroup getContentView() {
        View view;
        ScrollViewT scrollviewt = this.scrollView;
        if (scrollviewt != null) {
            view = scrollviewt.getChildAt(0);
        } else {
            view = null;
        }
        return (ReactViewGroup) view;
    }

    private final UIManager getUIManager() {
        Context context;
        int i10;
        ViewGroup viewGroup = (ScrollViewT) this.scrollView;
        if (viewGroup != null) {
            context = viewGroup.getContext();
        } else {
            context = null;
        }
        ReactContext reactContext = (ReactContext) context;
        if (reactContext != null) {
            ViewGroup viewGroup2 = (ScrollViewT) this.scrollView;
            if (viewGroup2 != null) {
                i10 = viewGroup2.getId();
            } else {
                i10 = 0;
            }
            UIManager uIManager = UIManagerHelper.getUIManager(reactContext, ViewUtil.getUIManagerType(i10));
            if (uIManager != null) {
                return uIManager;
            }
            throw new IllegalStateException("Required value was null.");
        }
        throw new IllegalStateException("Required value was null.");
    }

    private final void updateScrollPositionInternal() {
        WeakReference<View> weakReference;
        Rect rect;
        View view;
        ViewGroup viewGroup;
        Config config = this.config;
        if (config != null && (weakReference = this.firstVisibleViewRef) != null && (rect = this.prevFirstVisibleFrame) != null && (view = weakReference.get()) != null && (viewGroup = (ScrollViewT) this.scrollView) != null) {
            Rect rect2 = new Rect();
            view.getHitRect(rect2);
            if (this.horizontal) {
                int i10 = rect2.left - rect.left;
                if (i10 != 0) {
                    int scrollX = viewGroup.getScrollX();
                    ReactScrollViewHelper.HasSmoothScroll hasSmoothScroll = (ReactScrollViewHelper.HasSmoothScroll) viewGroup;
                    hasSmoothScroll.scrollToPreservingMomentum(i10 + scrollX, viewGroup.getScrollY());
                    this.prevFirstVisibleFrame = rect2;
                    if (config.getAutoScrollToTopThreshold() != null && scrollX <= config.getAutoScrollToTopThreshold().intValue()) {
                        hasSmoothScroll.reactSmoothScrollTo(0, viewGroup.getScrollY());
                        return;
                    }
                    return;
                }
                return;
            }
            int i11 = rect2.top - rect.top;
            if (i11 != 0) {
                int scrollY = viewGroup.getScrollY();
                ReactScrollViewHelper.HasSmoothScroll hasSmoothScroll2 = (ReactScrollViewHelper.HasSmoothScroll) viewGroup;
                hasSmoothScroll2.scrollToPreservingMomentum(viewGroup.getScrollX(), i11 + scrollY);
                this.prevFirstVisibleFrame = rect2;
                if (config.getAutoScrollToTopThreshold() != null && scrollY <= config.getAutoScrollToTopThreshold().intValue()) {
                    hasSmoothScroll2.reactSmoothScrollTo(viewGroup.getScrollX(), 0);
                }
            }
        }
    }

    @Override // com.facebook.react.bridge.UIManagerListener
    public void didDispatchMountItems(@NotNull UIManager uiManager) {
        Intrinsics.checkNotNullParameter(uiManager, "uiManager");
    }

    @Override // com.facebook.react.bridge.UIManagerListener
    public void didMountItems(@NotNull UIManager uiManager) {
        Intrinsics.checkNotNullParameter(uiManager, "uiManager");
        updateScrollPositionInternal();
    }

    @Override // com.facebook.react.bridge.UIManagerListener
    public void didScheduleMountItems(@NotNull UIManager uiManager) {
        Intrinsics.checkNotNullParameter(uiManager, "uiManager");
    }

    public final Config getConfig() {
        return this.config;
    }

    public final void setConfig(Config config) {
        this.config = config;
    }

    public final void start() {
        if (this.isListening) {
            return;
        }
        this.isListening = true;
        getUIManager().addUIManagerEventListener(this);
    }

    public final void stop() {
        if (!this.isListening) {
            return;
        }
        this.isListening = false;
        getUIManager().removeUIManagerEventListener(this);
    }

    public final void updateScrollPosition() {
        ViewGroup viewGroup = (ScrollViewT) this.scrollView;
        if (viewGroup != null && ViewUtil.getUIManagerType(viewGroup.getId()) != 2) {
            updateScrollPositionInternal();
        }
    }

    @Override // com.facebook.react.bridge.UIManagerListener
    public void willDispatchViewUpdates(@NotNull UIManager uiManager) {
        Intrinsics.checkNotNullParameter(uiManager, "uiManager");
        UiThreadUtil.runOnUiThread(new Runnable() { // from class: com.facebook.react.views.scroll.a
            @Override // java.lang.Runnable
            public final void run() {
                MaintainVisibleScrollPositionHelper.this.computeTargetView();
            }
        });
    }

    @Override // com.facebook.react.bridge.UIManagerListener
    public void willMountItems(@NotNull UIManager uiManager) {
        Intrinsics.checkNotNullParameter(uiManager, "uiManager");
        computeTargetView();
    }
}
