package com.discord.self_measured_view;

import android.content.Context;
import android.util.AttributeSet;
import android.widget.FrameLayout;
import com.discord.misc.utilities.measure.ViewMeasureExtensionsKt;
import com.discord.react.utilities.NativeMapExtensionsKt;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.StateWrapper;
import com.facebook.react.uimanager.UIManagerModule;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import qr.v;
@Metadata(d1 = {"\u0000@\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\n\u0018\u0000  2\u00020\u0001:\u0001 B'\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tJ\b\u0010\u0014\u001a\u00020\u0015H\u0016J\u0018\u0010\u0018\u001a\u00020\u00152\u0006\u0010\u0019\u001a\u00020\u00072\u0006\u0010\u001a\u001a\u00020\u0007H\u0014J(\u0010\u001b\u001a\u00020\u00152\u0006\u0010\u001c\u001a\u00020\u00072\u0006\u0010\u001d\u001a\u00020\u00072\u0006\u0010\u001e\u001a\u00020\u00072\u0006\u0010\u001f\u001a\u00020\u0007H\u0002R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0082D¢\u0006\u0002\n\u0000R\u001c\u0010\u000e\u001a\u0004\u0018\u00010\u000fX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0010\u0010\u0011\"\u0004\b\u0012\u0010\u0013R\u000e\u0010\u0016\u001a\u00020\u0017X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006!"}, d2 = {"Lcom/discord/self_measured_view/SelfMeasuredView;", "Landroid/widget/FrameLayout;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "defStyleAttr", "", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "reactContext", "Lcom/facebook/react/bridge/ReactContext;", "fabricEnabled", "", "stateWrapper", "Lcom/facebook/react/uimanager/StateWrapper;", "getStateWrapper", "()Lcom/facebook/react/uimanager/StateWrapper;", "setStateWrapper", "(Lcom/facebook/react/uimanager/StateWrapper;)V", "requestLayout", "", "runnable", "Ljava/lang/Runnable;", "onMeasure", "widthMeasureSpec", "heightMeasureSpec", "maybePostMeasuredEvent", "previousMeasuredWidth", "newMeasuredWidth", "previousMeasuredHeight", "newMeasuredHeight", "Companion", "self_measured_view_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class SelfMeasuredView extends FrameLayout {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final int LAYOUT_SIZE_CHANGE_THRESHOLD = 2;
    private final boolean fabricEnabled;
    @NotNull
    private final ReactContext reactContext;
    @NotNull
    private final Runnable runnable;
    private StateWrapper stateWrapper;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/self_measured_view/SelfMeasuredView$Companion;", "", "<init>", "()V", "LAYOUT_SIZE_CHANGE_THRESHOLD", "", "self_measured_view_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public SelfMeasuredView(@NotNull Context context) {
        this(context, null, 0, 6, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    private final void maybePostMeasuredEvent(int i10, int i11, int i12, int i13) {
        if (Math.abs(i13 - i12) >= 2 || Math.abs(i11 - i10) >= 2) {
            if (this.fabricEnabled) {
                StateWrapper stateWrapper = this.stateWrapper;
                if (stateWrapper != null) {
                    stateWrapper.updateState(NativeMapExtensionsKt.nativeMapOf(v.a("measuredViewWidth", Float.valueOf(PixelUtil.toDIPFromPixel(i11))), v.a("measuredViewHeight", Float.valueOf(PixelUtil.toDIPFromPixel(i13)))));
                    return;
                }
                return;
            }
            final UIManagerModule uIManagerModule = (UIManagerModule) this.reactContext.getNativeModule(UIManagerModule.class);
            if (uIManagerModule != null) {
                this.reactContext.runOnNativeModulesQueueThread(new Runnable() { // from class: com.discord.self_measured_view.b
                    @Override // java.lang.Runnable
                    public final void run() {
                        SelfMeasuredView.maybePostMeasuredEvent$lambda$3$lambda$2(UIManagerModule.this, this);
                    }
                });
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void maybePostMeasuredEvent$lambda$3$lambda$2(UIManagerModule uIManagerModule, SelfMeasuredView selfMeasuredView) {
        uIManagerModule.updateNodeSize(selfMeasuredView.getId(), selfMeasuredView.getMeasuredWidth(), selfMeasuredView.getMeasuredHeight());
    }

    public final StateWrapper getStateWrapper() {
        return this.stateWrapper;
    }

    @Override // android.widget.FrameLayout, android.view.View
    protected void onMeasure(int i10, int i11) {
        int measuredWidth = getMeasuredWidth();
        int measuredHeight = getMeasuredHeight();
        Pair<Integer, Integer> maximumSizeOfChildren = ViewMeasureExtensionsKt.getMaximumSizeOfChildren(this, i10);
        setMeasuredDimension(((Number) maximumSizeOfChildren.a()).intValue(), ((Number) maximumSizeOfChildren.b()).intValue());
        maybePostMeasuredEvent(measuredWidth, getMeasuredWidth(), measuredHeight, getMeasuredHeight());
    }

    @Override // android.view.View, android.view.ViewParent
    public void requestLayout() {
        super.requestLayout();
        post(this.runnable);
    }

    public final void setStateWrapper(StateWrapper stateWrapper) {
        this.stateWrapper = stateWrapper;
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public SelfMeasuredView(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 4, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public /* synthetic */ SelfMeasuredView(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i11 & 2) != 0 ? null : attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public SelfMeasuredView(@NotNull Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Intrinsics.checkNotNullParameter(context, "context");
        this.reactContext = (ReactContext) context;
        this.fabricEnabled = true;
        this.runnable = new Runnable() { // from class: com.discord.self_measured_view.a
            @Override // java.lang.Runnable
            public final void run() {
                ViewMeasureExtensionsKt.measureAndLayout(SelfMeasuredView.this);
            }
        };
    }
}
