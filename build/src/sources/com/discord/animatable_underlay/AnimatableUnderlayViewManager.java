package com.discord.animatable_underlay;

import com.discord.animatable_underlay.AnimatableUnderlay;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.AnimatableUnderlayViewManagerDelegate;
import com.facebook.react.viewmanagers.AnimatableUnderlayViewManagerInterface;
import com.facebook.react.views.view.ReactClippingViewManager;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@ReactModule(name = AnimatableUnderlayViewManager.NAME)
@Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u0007\n\u0002\b\u0015\b\u0007\u0018\u0000 '2\b\u0012\u0004\u0012\u00020\u00020\u00012\b\u0012\u0004\u0012\u00020\u00020\u0003:\u0001'B\u0007¢\u0006\u0004\b\u0004\u0010\u0005J$\u0010\t\u001a\u001e\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00020\u0002\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00000\u00000\u0007H\u0014J\b\u0010\n\u001a\u00020\u000bH\u0016J\u0010\u0010\f\u001a\u00020\u00022\u0006\u0010\r\u001a\u00020\u000eH\u0014J\u0018\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00022\u0006\u0010\u0012\u001a\u00020\u0013H\u0017J\u0018\u0010\u0014\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00022\u0006\u0010\u0015\u001a\u00020\u0013H\u0017J\u0018\u0010\u0016\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00022\u0006\u0010\u0017\u001a\u00020\u0013H\u0017J\u0018\u0010\u0018\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00022\u0006\u0010\u0019\u001a\u00020\u0013H\u0017J\u0018\u0010\u001a\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00022\u0006\u0010\u001b\u001a\u00020\u0013H\u0017J\u0018\u0010\u001c\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00022\u0006\u0010\u001d\u001a\u00020\u0013H\u0017J\u001a\u0010\u001e\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00022\b\u0010\u001f\u001a\u0004\u0018\u00010\u000bH\u0017J\u001a\u0010 \u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00022\b\u0010!\u001a\u0004\u0018\u00010\u000bH\u0017J\u0018\u0010\"\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00022\u0006\u0010#\u001a\u00020\u0013H\u0017J\u001a\u0010$\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00022\b\u0010%\u001a\u0004\u0018\u00010\u000bH\u0017J\u001a\u0010&\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00022\b\u0010%\u001a\u0004\u0018\u00010\u000bH\u0017R*\u0010\u0006\u001a\u001e\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00020\u0002\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00000\u00000\u0007X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006("}, d2 = {"Lcom/discord/animatable_underlay/AnimatableUnderlayViewManager;", "Lcom/facebook/react/views/view/ReactClippingViewManager;", "Lcom/discord/animatable_underlay/AnimatableUnderlay;", "Lcom/facebook/react/viewmanagers/AnimatableUnderlayViewManagerInterface;", "<init>", "()V", "delegate", "Lcom/facebook/react/viewmanagers/AnimatableUnderlayViewManagerDelegate;", "kotlin.jvm.PlatformType", "getDelegate", "getName", "", "createViewInstance", "reactContext", "Lcom/facebook/react/uimanager/ThemedReactContext;", "setAnimatedHeight", "", "view", "height", "", "setAnimatedWidth", "width", "setAnimatedTopLeftRadius", "topLeftRadius", "setAnimatedTopRightRadius", "topRightRadius", "setAnimatedBottomLeftRadius", "bottomLeftRadius", "setAnimatedBottomRightRadius", "bottomRightRadius", "setAnimatedBackgroundColorRgba", ViewProps.BACKGROUND_COLOR, "setAnimatedBorderColorRgba", ViewProps.BORDER_COLOR, "setAnimatedBorderWidth", ViewProps.BORDER_WIDTH, "setClipDirectionX", "value", "setClipDirectionY", "Companion", "animatable_underlay_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AnimatableUnderlayViewManager extends ReactClippingViewManager<AnimatableUnderlay> implements AnimatableUnderlayViewManagerInterface<AnimatableUnderlay> {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final String NAME = "AnimatableUnderlayView";
    @NotNull
    private final AnimatableUnderlayViewManagerDelegate<AnimatableUnderlay, AnimatableUnderlayViewManager> delegate = new AnimatableUnderlayViewManagerDelegate<>(this);

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/animatable_underlay/AnimatableUnderlayViewManager$Companion;", "", "<init>", "()V", "NAME", "", "animatable_underlay_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    @Override // com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return NAME;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public AnimatableUnderlay createViewInstance(@NotNull ThemedReactContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        return new AnimatableUnderlay(reactContext);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public AnimatableUnderlayViewManagerDelegate<AnimatableUnderlay, AnimatableUnderlayViewManager> getDelegate() {
        return this.delegate;
    }

    @Override // com.facebook.react.viewmanagers.AnimatableUnderlayViewManagerInterface
    @ReactProp(name = "animatedBackgroundColorRgba")
    public void setAnimatedBackgroundColorRgba(@NotNull AnimatableUnderlay view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (str != null) {
            view.setShapeBackgroundColor(ColorUtilsKt.rgbaToArgb(str));
            view.invalidate();
        }
    }

    @Override // com.facebook.react.viewmanagers.AnimatableUnderlayViewManagerInterface
    @ReactProp(name = "animatedBorderColorRgba")
    public void setAnimatedBorderColorRgba(@NotNull AnimatableUnderlay view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (str != null) {
            view.getShapeBorderConfig$animatable_underlay_release().setBorderColor(ColorUtilsKt.rgbaToArgb(str));
            view.invalidate();
        }
    }

    @Override // com.facebook.react.viewmanagers.AnimatableUnderlayViewManagerInterface
    @ReactProp(name = "animatedBorderWidth")
    public void setAnimatedBorderWidth(@NotNull AnimatableUnderlay view, float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.getShapeBorderConfig$animatable_underlay_release().setBorderWidth(SizeUtilsKt.getDpToPx(f10));
        view.invalidate();
    }

    @Override // com.facebook.react.viewmanagers.AnimatableUnderlayViewManagerInterface
    @ReactProp(name = "animatedBottomLeftRadius")
    public void setAnimatedBottomLeftRadius(@NotNull AnimatableUnderlay view, float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.getShapeBorderConfig$animatable_underlay_release().setBorderBottomLeftRadius(SizeUtilsKt.getDpToPx(f10));
        view.invalidate();
    }

    @Override // com.facebook.react.viewmanagers.AnimatableUnderlayViewManagerInterface
    @ReactProp(name = "animatedBottomRightRadius")
    public void setAnimatedBottomRightRadius(@NotNull AnimatableUnderlay view, float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.getShapeBorderConfig$animatable_underlay_release().setBorderBottomRightRadius(SizeUtilsKt.getDpToPx(f10));
        view.invalidate();
    }

    @Override // com.facebook.react.viewmanagers.AnimatableUnderlayViewManagerInterface
    @ReactProp(name = "animatedHeight")
    public void setAnimatedHeight(@NotNull AnimatableUnderlay view, float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setShapeHeight(SizeUtilsKt.getDpToPx(f10));
        view.invalidate();
    }

    @Override // com.facebook.react.viewmanagers.AnimatableUnderlayViewManagerInterface
    @ReactProp(name = "animatedTopLeftRadius")
    public void setAnimatedTopLeftRadius(@NotNull AnimatableUnderlay view, float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.getShapeBorderConfig$animatable_underlay_release().setBorderTopLeftRadius(SizeUtilsKt.getDpToPx(f10));
        view.invalidate();
    }

    @Override // com.facebook.react.viewmanagers.AnimatableUnderlayViewManagerInterface
    @ReactProp(name = "animatedTopRightRadius")
    public void setAnimatedTopRightRadius(@NotNull AnimatableUnderlay view, float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.getShapeBorderConfig$animatable_underlay_release().setBorderTopRightRadius(SizeUtilsKt.getDpToPx(f10));
        view.invalidate();
    }

    @Override // com.facebook.react.viewmanagers.AnimatableUnderlayViewManagerInterface
    @ReactProp(name = "animatedWidth")
    public void setAnimatedWidth(@NotNull AnimatableUnderlay view, float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setShapeWidth(SizeUtilsKt.getDpToPx(f10));
        view.invalidate();
    }

    @Override // com.facebook.react.viewmanagers.AnimatableUnderlayViewManagerInterface
    @ReactProp(name = "clipDirectionX")
    public void setClipDirectionX(@NotNull AnimatableUnderlay view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setClipDirectionX(AnimatableUnderlay.ClipDirectionX.Companion.parse(str));
        view.invalidate();
    }

    @Override // com.facebook.react.viewmanagers.AnimatableUnderlayViewManagerInterface
    @ReactProp(name = "clipDirectionY")
    public void setClipDirectionY(@NotNull AnimatableUnderlay view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setClipDirectionY(AnimatableUnderlay.ClipDirectionY.Companion.parse(str));
        view.invalidate();
    }
}
