package com.facebook.react.views.safeareaview;

import android.view.View;
import android.view.ViewGroup;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.h0;
import androidx.core.view.v;
import com.facebook.react.bridge.GuardedRunnable;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.common.build.ReactBuildConfig;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.StateWrapper;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIManagerModule;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\b\u0000\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\u000e\u001a\u00020\u000fH\u0014J0\u0010\u0010\u001a\u00020\u000f2\u0006\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00142\u0006\u0010\u0015\u001a\u00020\u00142\u0006\u0010\u0016\u001a\u00020\u00142\u0006\u0010\u0017\u001a\u00020\u0014H\u0014J\u0010\u0010\u0018\u001a\u00020\u000f2\u0006\u0010\u0019\u001a\u00020\u001aH\u0003R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007R\u001c\u0010\b\u001a\u0004\u0018\u00010\tX\u0080\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\n\u0010\u000b\"\u0004\b\f\u0010\r¨\u0006\u001b"}, d2 = {"Lcom/facebook/react/views/safeareaview/ReactSafeAreaView;", "Landroid/view/ViewGroup;", "reactContext", "Lcom/facebook/react/uimanager/ThemedReactContext;", "<init>", "(Lcom/facebook/react/uimanager/ThemedReactContext;)V", "getReactContext", "()Lcom/facebook/react/uimanager/ThemedReactContext;", "stateWrapper", "Lcom/facebook/react/uimanager/StateWrapper;", "getStateWrapper$ReactAndroid_release", "()Lcom/facebook/react/uimanager/StateWrapper;", "setStateWrapper$ReactAndroid_release", "(Lcom/facebook/react/uimanager/StateWrapper;)V", "onAttachedToWindow", "", "onLayout", "p0", "", "p1", "", "p2", "p3", "p4", "updateState", "insets", "Landroidx/core/graphics/Insets;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactSafeAreaView extends ViewGroup {
    @NotNull
    private final ThemedReactContext reactContext;
    private StateWrapper stateWrapper;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ReactSafeAreaView(@NotNull ThemedReactContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.reactContext = reactContext;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final WindowInsetsCompat onAttachedToWindow$lambda$0(ReactSafeAreaView reactSafeAreaView, View view, WindowInsetsCompat windowInsets) {
        Intrinsics.checkNotNullParameter(view, "<unused var>");
        Intrinsics.checkNotNullParameter(windowInsets, "windowInsets");
        Insets f10 = windowInsets.f(WindowInsetsCompat.p.h() | WindowInsetsCompat.p.b());
        Intrinsics.checkNotNullExpressionValue(f10, "getInsets(...)");
        reactSafeAreaView.updateState(f10);
        return WindowInsetsCompat.f3376b;
    }

    private final void updateState(final Insets insets) {
        StateWrapper stateWrapper = this.stateWrapper;
        if (stateWrapper != null) {
            WritableNativeMap writableNativeMap = new WritableNativeMap();
            PixelUtil pixelUtil = PixelUtil.INSTANCE;
            writableNativeMap.putDouble(ViewProps.LEFT, pixelUtil.pxToDp(insets.f3275a));
            writableNativeMap.putDouble(ViewProps.TOP, pixelUtil.pxToDp(insets.f3276b));
            writableNativeMap.putDouble(ViewProps.BOTTOM, pixelUtil.pxToDp(insets.f3278d));
            writableNativeMap.putDouble(ViewProps.RIGHT, pixelUtil.pxToDp(insets.f3277c));
            stateWrapper.updateState(writableNativeMap);
        } else if (!ReactBuildConfig.UNSTABLE_ENABLE_MINIFY_LEGACY_ARCHITECTURE) {
            final ThemedReactContext themedReactContext = this.reactContext;
            themedReactContext.runOnNativeModulesQueueThread(new GuardedRunnable(themedReactContext) { // from class: com.facebook.react.views.safeareaview.ReactSafeAreaView$updateState$2
                @Override // com.facebook.react.bridge.GuardedRunnable
                public void runGuarded() {
                    UIManagerModule uIManagerModule = (UIManagerModule) ReactSafeAreaView.this.getReactContext().getReactApplicationContext().getNativeModule(UIManagerModule.class);
                    if (uIManagerModule != null) {
                        int id2 = ReactSafeAreaView.this.getId();
                        Insets insets2 = insets;
                        uIManagerModule.updateInsetsPadding(id2, insets2.f3276b, insets2.f3275a, insets2.f3278d, insets2.f3277c);
                    }
                }
            });
        }
    }

    @NotNull
    public final ThemedReactContext getReactContext() {
        return this.reactContext;
    }

    public final StateWrapper getStateWrapper$ReactAndroid_release() {
        return this.stateWrapper;
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        h0.D0(this, new v() { // from class: com.facebook.react.views.safeareaview.a
            @Override // androidx.core.view.v
            public final WindowInsetsCompat a(View view, WindowInsetsCompat windowInsetsCompat) {
                WindowInsetsCompat onAttachedToWindow$lambda$0;
                onAttachedToWindow$lambda$0 = ReactSafeAreaView.onAttachedToWindow$lambda$0(ReactSafeAreaView.this, view, windowInsetsCompat);
                return onAttachedToWindow$lambda$0;
            }
        });
        requestApplyInsets();
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
    }

    public final void setStateWrapper$ReactAndroid_release(StateWrapper stateWrapper) {
        this.stateWrapper = stateWrapper;
    }
}
