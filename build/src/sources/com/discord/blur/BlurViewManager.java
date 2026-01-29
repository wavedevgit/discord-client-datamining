package com.discord.blur;

import android.os.Build;
import android.view.ViewGroup;
import com.discord.react.utilities.InitialPropsViewGroupManager;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.ReactStylesDiffMap;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.DCDVisualEffectViewManagerDelegate;
import com.facebook.react.viewmanagers.DCDVisualEffectViewManagerInterface;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000@\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u0007\n\u0002\b\b\b\u0001\u0018\u0000 \u001c2\b\u0012\u0004\u0012\u00020\u00020\u00012\b\u0012\u0004\u0012\u00020\u00020\u0003:\u0001\u001cB\u0007¢\u0006\u0004\b\u0004\u0010\u0005J$\u0010\t\u001a\u001e\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00020\u0002\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00000\u00000\u0007H\u0014J\b\u0010\n\u001a\u00020\u000bH\u0016J\u0018\u0010\f\u001a\u00020\u00022\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u0010H\u0016J\u0018\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00022\u0006\u0010\u0014\u001a\u00020\u0015H\u0017J\u001c\u0010\u0016\u001a\u00020\u00122\b\u0010\u0013\u001a\u0004\u0018\u00010\u00022\b\u0010\u0017\u001a\u0004\u0018\u00010\u000bH\u0017J\u001a\u0010\u0018\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00022\b\u0010\u0019\u001a\u0004\u0018\u00010\u000bH\u0017J\u001a\u0010\u001a\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00022\b\u0010\u001b\u001a\u0004\u0018\u00010\u000bH\u0017R*\u0010\u0006\u001a\u001e\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00020\u0002\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00000\u00000\u0007X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u001d"}, d2 = {"Lcom/discord/blur/BlurViewManager;", "Lcom/discord/react/utilities/InitialPropsViewGroupManager;", "Landroid/view/ViewGroup;", "Lcom/facebook/react/viewmanagers/DCDVisualEffectViewManagerInterface;", "<init>", "()V", "delegate", "Lcom/facebook/react/viewmanagers/DCDVisualEffectViewManagerDelegate;", "kotlin.jvm.PlatformType", "getDelegate", "getName", "", "createViewInstance", "reactContext", "Lcom/facebook/react/uimanager/ThemedReactContext;", "initialProps", "Lcom/facebook/react/uimanager/ReactStylesDiffMap;", "setBlurAmount", "", "blurView", BlurViewManager.PROP_BLUR_AMOUNT, "", "setBlurTintIOSParityCompensationRgba", BlurViewManager.PROP_BLUR_TINT_IOS_PARITY_RGBA, "setBlurTargetViewNativeId", BlurViewManager.PROP_BLUR_TARGET_VIEW_NATIVE_ID, "setBlurTintRgba", BlurViewManager.PROP_BLUR_TINT_RGBA, "Companion", "blur_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@ReactModule(name = BlurViewManager.NAME)
@SourceDebugExtension({"SMAP\nBlurViewManager.kt\nKotlin\n*S Kotlin\n*F\n+ 1 BlurViewManager.kt\ncom/discord/blur/BlurViewManager\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,101:1\n1#2:102\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BlurViewManager extends InitialPropsViewGroupManager<ViewGroup> implements DCDVisualEffectViewManagerInterface<ViewGroup> {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final String NAME = "DCDVisualEffectView";
    @NotNull
    private static final String PROP_BLUR_AMOUNT = "blurAmount";
    @NotNull
    private static final String PROP_BLUR_TARGET_VIEW_NATIVE_ID = "blurTargetViewNativeId";
    @NotNull
    private static final String PROP_BLUR_TINT_IOS_PARITY_RGBA = "blurTintIOSParityCompensationRgba";
    @NotNull
    private static final String PROP_BLUR_TINT_RGBA = "blurTintRgba";
    @NotNull
    private final DCDVisualEffectViewManagerDelegate<ViewGroup, BlurViewManager> delegate = new DCDVisualEffectViewManagerDelegate<>(this);

    @Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\r\u0010\n\u001a\u00020\u000bH\u0001¢\u0006\u0002\b\fR\u000e\u0010\u0004\u001a\u00020\u0005X\u0080T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\r"}, d2 = {"Lcom/discord/blur/BlurViewManager$Companion;", "", "<init>", "()V", "NAME", "", "PROP_BLUR_TARGET_VIEW_NATIVE_ID", "PROP_BLUR_AMOUNT", "PROP_BLUR_TINT_IOS_PARITY_RGBA", "PROP_BLUR_TINT_RGBA", "isHardwareBlurEnabled", "", "isHardwareBlurEnabled$blur_release", "blur_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final boolean isHardwareBlurEnabled$blur_release() {
            if (Build.VERSION.SDK_INT >= 31) {
                return true;
            }
            return false;
        }

        private Companion() {
        }
    }

    @Override // com.discord.react.utilities.InitialPropsViewGroupManager
    @NotNull
    public ViewGroup createViewInstance(@NotNull ThemedReactContext reactContext, @NotNull ReactStylesDiffMap initialProps) {
        boolean z10;
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        Intrinsics.checkNotNullParameter(initialProps, "initialProps");
        String string = initialProps.getString(PROP_BLUR_TARGET_VIEW_NATIVE_ID);
        String string2 = initialProps.getString(PROP_BLUR_TINT_RGBA);
        float f10 = initialProps.getFloat(PROP_BLUR_AMOUNT, -1.0f);
        String string3 = initialProps.getString(PROP_BLUR_TINT_IOS_PARITY_RGBA);
        if (string != null) {
            if (f10 == -1.0f) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (!z10) {
                if (Companion.isHardwareBlurEnabled$blur_release()) {
                    return new BlurViewHardwareAccelerated(reactContext, string, ColorUtilsKt.rgbaToArgb(string2), ColorUtilsKt.rgbaToArgb(string3), f10);
                }
                return new BlurView(reactContext, string, ColorUtilsKt.rgbaToArgb(string2), ColorUtilsKt.rgbaToArgb(string3), f10);
            }
            throw new IllegalArgumentException("Failed requirement.");
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    @Override // com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return NAME;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public DCDVisualEffectViewManagerDelegate<ViewGroup, BlurViewManager> getDelegate() {
        return this.delegate;
    }

    @Override // com.facebook.react.viewmanagers.DCDVisualEffectViewManagerInterface
    @ReactProp(name = PROP_BLUR_AMOUNT)
    public void setBlurAmount(@NotNull ViewGroup blurView, float f10) {
        Intrinsics.checkNotNullParameter(blurView, "blurView");
        if (blurView instanceof BlurViewAPI) {
            ((BlurViewAPIBase) blurView).setBlurAmount(blurView.getId(), f10);
            return;
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    @Override // com.facebook.react.viewmanagers.DCDVisualEffectViewManagerInterface
    @ReactProp(name = PROP_BLUR_TARGET_VIEW_NATIVE_ID)
    public void setBlurTargetViewNativeId(@NotNull ViewGroup blurView, String str) {
        Intrinsics.checkNotNullParameter(blurView, "blurView");
        if (!(blurView instanceof BlurViewAPI)) {
            throw new IllegalArgumentException("Failed requirement.");
        }
        if (str != null) {
            ((BlurViewAPIBase) blurView).setBlurTargetNativeId(str);
            return;
        }
        throw new IllegalArgumentException("blurTargetViewNativeId cannot be changed to undefined/null!");
    }

    @Override // com.facebook.react.viewmanagers.DCDVisualEffectViewManagerInterface
    @ReactProp(name = PROP_BLUR_TINT_IOS_PARITY_RGBA)
    public void setBlurTintIOSParityCompensationRgba(ViewGroup viewGroup, String str) {
        if (viewGroup instanceof BlurViewAPI) {
            ((BlurViewAPI) viewGroup).setBlurTintIOSParityCompensation(ColorUtilsKt.rgbaToArgb(str));
            return;
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    @Override // com.facebook.react.viewmanagers.DCDVisualEffectViewManagerInterface
    @ReactProp(name = PROP_BLUR_TINT_RGBA)
    public void setBlurTintRgba(@NotNull ViewGroup blurView, String str) {
        Intrinsics.checkNotNullParameter(blurView, "blurView");
        if (blurView instanceof BlurViewAPI) {
            ((BlurViewAPI) blurView).setBlurTint(ColorUtilsKt.rgbaToArgb(str));
            return;
        }
        throw new IllegalArgumentException("Failed requirement.");
    }
}
