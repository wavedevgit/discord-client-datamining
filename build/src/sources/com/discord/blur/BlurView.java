package com.discord.blur;

import android.annotation.SuppressLint;
import android.content.Context;
import android.view.ViewGroup;
import com.discord.blur.BlurViewAPI;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.react.uimanager.ViewProps;
import java.lang.ref.WeakReference;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000H\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u0007\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\r\b\u0001\u0018\u0000 \"2\u00020\u00012\u00020\u0002:\u0001\"B3\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\b\b\u0001\u0010\u0007\u001a\u00020\b\u0012\b\b\u0001\u0010\t\u001a\u00020\b\u0012\u0006\u0010\n\u001a\u00020\u000b¢\u0006\u0004\b\f\u0010\rJ\b\u0010\u0017\u001a\u00020\u0016H\u0014J\b\u0010\u0018\u001a\u00020\u0016H\u0014J\u0012\u0010\u0019\u001a\u00020\u00162\b\b\u0001\u0010\u001a\u001a\u00020\bH\u0016J\u0012\u0010\u001b\u001a\u00020\u00162\b\b\u0001\u0010\u001a\u001a\u00020\bH\u0016J\u0018\u0010\u001c\u001a\u00020\u00162\u0006\u0010\u001d\u001a\u00020\b2\u0006\u0010\n\u001a\u00020\u000bH\u0016J\u0010\u0010\u001e\u001a\u00020\u00162\u0006\u0010\u001f\u001a\u00020\u0006H\u0016J\b\u0010 \u001a\u00020\u0016H\u0002J\b\u0010!\u001a\u00020\u0016H\u0002R\u000e\u0010\u0005\u001a\u00020\u0006X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u000fX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0010\u001a\u00020\u000fX\u0082\u000e¢\u0006\u0002\n\u0000R\u0014\u0010\u0011\u001a\b\u0012\u0004\u0012\u00020\u00130\u0012X\u0082\u000e¢\u0006\u0002\n\u0000R\u0014\u0010\u0014\u001a\b\u0012\u0004\u0012\u00020\u00160\u0015X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006#"}, d2 = {"Lcom/discord/blur/BlurView;", "Leightbitlab/com/blurview/BlurView;", "Lcom/discord/blur/BlurViewAPI;", "context", "Landroid/content/Context;", "blurTargetNativeId", "", "blurTint", "", "blurTintIOSParityCompensation", "blurAmount", "", "<init>", "(Landroid/content/Context;Ljava/lang/String;IIF)V", "blurEnabled", "", "blurViewPropertiesDirty", "blurTarget", "Ljava/lang/ref/WeakReference;", "Lcom/discord/blur/BlurViewAPI$Target;", "blurTargetChangeListener", "Lkotlin/Function0;", "", "onAttachedToWindow", "onDetachedFromWindow", "setBlurTint", ViewProps.COLOR, "setBlurTintIOSParityCompensation", "setBlurAmount", "rectId", "setBlurTargetNativeId", "nativeId", "maybeUpdate", "maybeUpdateBlurEnabled", "Companion", "blur_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SuppressLint({"ViewConstructor"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BlurView extends eightbitlab.com.blurview.BlurView implements BlurViewAPI {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private float blurAmount;
    private boolean blurEnabled;
    @NotNull
    private WeakReference<BlurViewAPI.Target> blurTarget;
    @NotNull
    private final Function0<Unit> blurTargetChangeListener;
    @NotNull
    private String blurTargetNativeId;
    private int blurTint;
    private int blurTintIOSParityCompensation;
    private boolean blurViewPropertiesDirty;

    @Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0002\b\u0005\n\u0002\u0010\b\n\u0002\b\u0005\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J1\u0010\u0004\u001a\u00020\u00052\f\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\u00050\u00072\u0006\u0010\b\u001a\u00020\t2\f\u0010\n\u001a\b\u0012\u0004\u0012\u00020\u00050\u0007H\u0000¢\u0006\u0002\b\u000bJ)\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\r2\b\b\u0002\u0010\u000f\u001a\u00020\r2\b\b\u0002\u0010\u0010\u001a\u00020\rH\u0000¢\u0006\u0002\b\u0011J%\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u00132\u0006\u0010\u0015\u001a\u00020\u00132\u0006\u0010\u0016\u001a\u00020\rH\u0001¢\u0006\u0002\b\u0017¨\u0006\u0018"}, d2 = {"Lcom/discord/blur/BlurView$Companion;", "", "<init>", "()V", "updateListener", "", "blurTargetChangeListener", "Lkotlin/Function0;", "attached", "", "maybeUpdate", "updateListener$blur_release", "mapRadius", "", "radius", "maxRadius", "minRadius", "mapRadius$blur_release", "mapBlurTint", "", "blurAmountTint", "blurTint", "blurAmount", "mapBlurTint$blur_release", "blur_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public static /* synthetic */ float mapRadius$blur_release$default(Companion companion, float f10, float f11, float f12, int i10, Object obj) {
            if ((i10 & 2) != 0) {
                f11 = 24.0f;
            }
            if ((i10 & 4) != 0) {
                f12 = 0.0f;
            }
            return companion.mapRadius$blur_release(f10, f11, f12);
        }

        public final int mapBlurTint$blur_release(int i10, int i11, float f10) {
            return r1.c.h(i11, ColorUtilsKt.argbWithAdjustedAlpha(i10, f10));
        }

        public final float mapRadius$blur_release(float f10, float f11, float f12) {
            return Math.max(f12, Math.min(1.0f, f10)) * f11;
        }

        public final void updateListener$blur_release(@NotNull Function0<Unit> blurTargetChangeListener, boolean z10, @NotNull Function0<Unit> maybeUpdate) {
            Intrinsics.checkNotNullParameter(blurTargetChangeListener, "blurTargetChangeListener");
            Intrinsics.checkNotNullParameter(maybeUpdate, "maybeUpdate");
            if (z10) {
                BlurViewTargetRegistry.INSTANCE.addChangeListener(blurTargetChangeListener);
            } else {
                BlurViewTargetRegistry.INSTANCE.removeChangeListener(blurTargetChangeListener);
            }
            if (z10) {
                maybeUpdate.invoke();
            }
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public BlurView(@NotNull Context context, @NotNull String blurTargetNativeId, int i10, int i11, float f10) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(blurTargetNativeId, "blurTargetNativeId");
        this.blurTargetNativeId = blurTargetNativeId;
        this.blurTint = i10;
        this.blurTintIOSParityCompensation = i11;
        this.blurAmount = f10;
        this.blurEnabled = true;
        this.blurViewPropertiesDirty = true;
        this.blurTarget = new WeakReference<>(null);
        Function0<Unit> function0 = new Function0() { // from class: com.discord.blur.c
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit blurTargetChangeListener$lambda$0;
                blurTargetChangeListener$lambda$0 = BlurView.blurTargetChangeListener$lambda$0(BlurView.this);
                return blurTargetChangeListener$lambda$0;
            }
        };
        this.blurTargetChangeListener = function0;
        Companion.updateListener$blur_release(function0, true, new Function0() { // from class: com.discord.blur.d
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit _init_$lambda$1;
                _init_$lambda$1 = BlurView._init_$lambda$1(BlurView.this);
                return _init_$lambda$1;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit _init_$lambda$1(BlurView blurView) {
        blurView.maybeUpdate();
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit blurTargetChangeListener$lambda$0(BlurView blurView) {
        blurView.maybeUpdate();
        return Unit.f33074a;
    }

    private final void maybeUpdate() {
        ViewGroup viewRef;
        BlurViewAPI.Target target = BlurViewTargetRegistry.INSTANCE.get(this.blurTargetNativeId);
        if (target != null && this.blurViewPropertiesDirty) {
            if (!Intrinsics.areEqual(this.blurTarget.get(), target)) {
                this.blurTarget = new WeakReference<>(target);
                setupWith(target.getViewRef()).d(target.getViewRef().getBackground());
            }
            maybeUpdateBlurEnabled();
            Companion companion = Companion;
            setOverlayColor(companion.mapBlurTint$blur_release(this.blurTintIOSParityCompensation, this.blurTint, this.blurAmount));
            setBlurRadius(Companion.mapRadius$blur_release$default(companion, this.blurAmount, 0.0f, 0.0f, 6, null));
            BlurViewAPI.Target target2 = this.blurTarget.get();
            if (target2 != null && (viewRef = target2.getViewRef()) != null) {
                viewRef.invalidate();
            }
            invalidate();
            this.blurViewPropertiesDirty = false;
        }
    }

    private final void maybeUpdateBlurEnabled() {
        boolean z10 = this.blurEnabled;
        if (z10 && this.blurAmount <= 0.0f) {
            this.blurEnabled = false;
            setBlurEnabled(false);
        } else if (!z10 && this.blurAmount > 0.0f) {
            this.blurEnabled = true;
            setBlurEnabled(true);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onAttachedToWindow$lambda$2(BlurView blurView) {
        blurView.maybeUpdate();
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onDetachedFromWindow$lambda$3(BlurView blurView) {
        blurView.maybeUpdate();
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // eightbitlab.com.blurview.BlurView, android.view.ViewGroup, android.view.View
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        Companion.updateListener$blur_release(this.blurTargetChangeListener, true, new Function0() { // from class: com.discord.blur.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit onAttachedToWindow$lambda$2;
                onAttachedToWindow$lambda$2 = BlurView.onAttachedToWindow$lambda$2(BlurView.this);
                return onAttachedToWindow$lambda$2;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // eightbitlab.com.blurview.BlurView, android.view.ViewGroup, android.view.View
    public void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        Companion.updateListener$blur_release(this.blurTargetChangeListener, false, new Function0() { // from class: com.discord.blur.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit onDetachedFromWindow$lambda$3;
                onDetachedFromWindow$lambda$3 = BlurView.onDetachedFromWindow$lambda$3(BlurView.this);
                return onDetachedFromWindow$lambda$3;
            }
        });
    }

    @Override // com.discord.blur.BlurViewAPIBase
    public void setBlurAmount(int i10, float f10) {
        if (this.blurAmount != f10) {
            this.blurAmount = f10;
            this.blurViewPropertiesDirty = true;
        }
        maybeUpdate();
    }

    @Override // com.discord.blur.BlurViewAPIBase
    public void setBlurTargetNativeId(@NotNull String nativeId) {
        Intrinsics.checkNotNullParameter(nativeId, "nativeId");
        if (!Intrinsics.areEqual(this.blurTargetNativeId, nativeId)) {
            this.blurTargetNativeId = nativeId;
            this.blurViewPropertiesDirty = true;
        }
        maybeUpdate();
    }

    @Override // com.discord.blur.BlurViewAPI
    public void setBlurTint(int i10) {
        if (this.blurTint != i10) {
            this.blurTint = i10;
            this.blurViewPropertiesDirty = true;
        }
        maybeUpdate();
    }

    @Override // com.discord.blur.BlurViewAPI
    public void setBlurTintIOSParityCompensation(int i10) {
        if (this.blurTintIOSParityCompensation != i10) {
            this.blurTintIOSParityCompensation = i10;
            this.blurViewPropertiesDirty = true;
        }
        maybeUpdate();
    }
}
