package com.discord.sticker.sticker_types;

import android.content.Context;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.ShapeDrawable;
import android.graphics.drawable.shapes.OvalShape;
import com.discord.image.animated_image.animated_image_utils.AnimatedImageStateManager;
import com.discord.misc.utilities.coroutines.CoroutineViewUtilsKt;
import com.discord.rlottie.RLottieDrawable;
import com.discord.sticker.sticker_types.RLottieImageView;
import com.discord.theme.ThemeManagerKt;
import com.facebook.react.views.textinput.ReactTextInputShadowNode;
import hs.g;
import hs.m0;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0005\b\u0000\u0018\u00002\u00020\u0001:\u0001\u0014B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u000e\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\nJ\u0010\u0010\u000e\u001a\u00020\f2\b\b\u0002\u0010\u000f\u001a\u00020\u0010J\b\u0010\u0011\u001a\u00020\fH\u0014J\b\u0010\u0012\u001a\u00020\fH\u0014J\u0010\u0010\u0013\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\nH\u0002R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\b\u001a\b\u0012\u0004\u0012\u00020\n0\tX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0015"}, d2 = {"Lcom/discord/sticker/sticker_types/RLottieImageView;", "Lcom/discord/rlottie/RLottieImageView;", "context", "Landroid/content/Context;", "<init>", "(Landroid/content/Context;)V", ReactTextInputShadowNode.PROP_PLACEHOLDER, "Landroid/graphics/drawable/ShapeDrawable;", "rLottieStateManager", "Lcom/discord/image/animated_image/animated_image_utils/AnimatedImageStateManager;", "Lcom/discord/sticker/sticker_types/RLottieImageView$Config;", "loadImage", "", "config", "recycle", "resetState", "", "onDetachedFromWindow", "onAttachedToWindow", "fetchSticker", "Config", "sticker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class RLottieImageView extends com.discord.rlottie.RLottieImageView {
    @NotNull
    private final ShapeDrawable placeholder;
    @NotNull
    private final AnimatedImageStateManager<Config> rLottieStateManager;

    @Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\b\n\u0002\b\u001a\b\u0086\b\u0018\u00002\u00020\u0001B7\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\u0007\u0012\u0006\u0010\t\u001a\u00020\u0003\u0012\u0006\u0010\n\u001a\u00020\u0007¢\u0006\u0004\b\u000b\u0010\fJ\t\u0010\u0016\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0017\u001a\u00020\u0005HÆ\u0003J\t\u0010\u0018\u001a\u00020\u0007HÆ\u0003J\t\u0010\u0019\u001a\u00020\u0007HÆ\u0003J\t\u0010\u001a\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001b\u001a\u00020\u0007HÆ\u0003JE\u0010\u001c\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00072\b\b\u0002\u0010\b\u001a\u00020\u00072\b\b\u0002\u0010\t\u001a\u00020\u00032\b\b\u0002\u0010\n\u001a\u00020\u0007HÆ\u0001J\u0013\u0010\u001d\u001a\u00020\u00052\b\u0010\u001e\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001f\u001a\u00020\u0007HÖ\u0001J\t\u0010 \u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0012R\u0011\u0010\b\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0012R\u0011\u0010\t\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u000eR\u0011\u0010\n\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0012¨\u0006!"}, d2 = {"Lcom/discord/sticker/sticker_types/RLottieImageView$Config;", "", "url", "", "animate", "", "widthDp", "", "heightDp", "asset", "renderMode", "<init>", "(Ljava/lang/String;ZIILjava/lang/String;I)V", "getUrl", "()Ljava/lang/String;", "getAnimate", "()Z", "getWidthDp", "()I", "getHeightDp", "getAsset", "getRenderMode", "component1", "component2", "component3", "component4", "component5", "component6", "copy", "equals", "other", "hashCode", "toString", "sticker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Config {
        private final boolean animate;
        @NotNull
        private final String asset;
        private final int heightDp;
        private final int renderMode;
        @NotNull
        private final String url;
        private final int widthDp;

        public Config(@NotNull String url, boolean z10, int i10, int i11, @NotNull String asset, int i12) {
            Intrinsics.checkNotNullParameter(url, "url");
            Intrinsics.checkNotNullParameter(asset, "asset");
            this.url = url;
            this.animate = z10;
            this.widthDp = i10;
            this.heightDp = i11;
            this.asset = asset;
            this.renderMode = i12;
        }

        public static /* synthetic */ Config copy$default(Config config, String str, boolean z10, int i10, int i11, String str2, int i12, int i13, Object obj) {
            if ((i13 & 1) != 0) {
                str = config.url;
            }
            if ((i13 & 2) != 0) {
                z10 = config.animate;
            }
            if ((i13 & 4) != 0) {
                i10 = config.widthDp;
            }
            if ((i13 & 8) != 0) {
                i11 = config.heightDp;
            }
            if ((i13 & 16) != 0) {
                str2 = config.asset;
            }
            if ((i13 & 32) != 0) {
                i12 = config.renderMode;
            }
            String str3 = str2;
            int i14 = i12;
            return config.copy(str, z10, i10, i11, str3, i14);
        }

        @NotNull
        public final String component1() {
            return this.url;
        }

        public final boolean component2() {
            return this.animate;
        }

        public final int component3() {
            return this.widthDp;
        }

        public final int component4() {
            return this.heightDp;
        }

        @NotNull
        public final String component5() {
            return this.asset;
        }

        public final int component6() {
            return this.renderMode;
        }

        @NotNull
        public final Config copy(@NotNull String url, boolean z10, int i10, int i11, @NotNull String asset, int i12) {
            Intrinsics.checkNotNullParameter(url, "url");
            Intrinsics.checkNotNullParameter(asset, "asset");
            return new Config(url, z10, i10, i11, asset, i12);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Config) {
                Config config = (Config) obj;
                return Intrinsics.areEqual(this.url, config.url) && this.animate == config.animate && this.widthDp == config.widthDp && this.heightDp == config.heightDp && Intrinsics.areEqual(this.asset, config.asset) && this.renderMode == config.renderMode;
            }
            return false;
        }

        public final boolean getAnimate() {
            return this.animate;
        }

        @NotNull
        public final String getAsset() {
            return this.asset;
        }

        public final int getHeightDp() {
            return this.heightDp;
        }

        public final int getRenderMode() {
            return this.renderMode;
        }

        @NotNull
        public final String getUrl() {
            return this.url;
        }

        public final int getWidthDp() {
            return this.widthDp;
        }

        public int hashCode() {
            return (((((((((this.url.hashCode() * 31) + Boolean.hashCode(this.animate)) * 31) + Integer.hashCode(this.widthDp)) * 31) + Integer.hashCode(this.heightDp)) * 31) + this.asset.hashCode()) * 31) + Integer.hashCode(this.renderMode);
        }

        @NotNull
        public String toString() {
            String str = this.url;
            boolean z10 = this.animate;
            int i10 = this.widthDp;
            int i11 = this.heightDp;
            String str2 = this.asset;
            int i12 = this.renderMode;
            return "Config(url=" + str + ", animate=" + z10 + ", widthDp=" + i10 + ", heightDp=" + i11 + ", asset=" + str2 + ", renderMode=" + i12 + ")";
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public RLottieImageView(@NotNull Context context) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        ShapeDrawable shapeDrawable = new ShapeDrawable();
        shapeDrawable.setShape(new OvalShape());
        shapeDrawable.getPaint().setColor(ThemeManagerKt.getTheme().getBackgroundModMuted());
        this.placeholder = shapeDrawable;
        this.rLottieStateManager = new AnimatedImageStateManager<>(new Function0() { // from class: com.discord.sticker.sticker_types.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit rLottieStateManager$lambda$1;
                rLottieStateManager$lambda$1 = RLottieImageView.rLottieStateManager$lambda$1(RLottieImageView.this);
                return rLottieStateManager$lambda$1;
            }
        }, new Function0() { // from class: com.discord.sticker.sticker_types.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit rLottieStateManager$lambda$2;
                rLottieStateManager$lambda$2 = RLottieImageView.rLottieStateManager$lambda$2(RLottieImageView.this);
                return rLottieStateManager$lambda$2;
            }
        }, null, new Function1() { // from class: com.discord.sticker.sticker_types.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit rLottieStateManager$lambda$3;
                rLottieStateManager$lambda$3 = RLottieImageView.rLottieStateManager$lambda$3(RLottieImageView.this, (RLottieImageView.Config) obj);
                return rLottieStateManager$lambda$3;
            }
        }, new Function1() { // from class: com.discord.sticker.sticker_types.d
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                boolean rLottieStateManager$lambda$4;
                rLottieStateManager$lambda$4 = RLottieImageView.rLottieStateManager$lambda$4(RLottieImageView.this, (RLottieImageView.Config) obj);
                return Boolean.valueOf(rLottieStateManager$lambda$4);
            }
        }, new Function1() { // from class: com.discord.sticker.sticker_types.e
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit rLottieStateManager$lambda$5;
                rLottieStateManager$lambda$5 = RLottieImageView.rLottieStateManager$lambda$5(RLottieImageView.this, (RLottieImageView.Config) obj);
                return rLottieStateManager$lambda$5;
            }
        }, 4, null);
    }

    private final void fetchSticker(Config config) {
        g.d(CoroutineViewUtilsKt.getAttachedScope(this), m0.b(), null, new RLottieImageView$fetchSticker$1(this, config, null), 2, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit rLottieStateManager$lambda$1(RLottieImageView rLottieImageView) {
        rLottieImageView.playAnimation();
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit rLottieStateManager$lambda$2(RLottieImageView rLottieImageView) {
        rLottieImageView.pauseAnimation();
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit rLottieStateManager$lambda$3(RLottieImageView rLottieImageView, Config it) {
        Intrinsics.checkNotNullParameter(it, "it");
        rLottieImageView.recycle(false);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean rLottieStateManager$lambda$4(RLottieImageView rLottieImageView, Config it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return rLottieImageView.isAttachedToWindow();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit rLottieStateManager$lambda$5(RLottieImageView rLottieImageView, Config config) {
        Intrinsics.checkNotNullParameter(config, "config");
        rLottieImageView.fetchSticker(config);
        return Unit.f33074a;
    }

    public static /* synthetic */ void recycle$default(RLottieImageView rLottieImageView, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = false;
        }
        rLottieImageView.recycle(z10);
    }

    public final void loadImage(@NotNull Config config) {
        Intrinsics.checkNotNullParameter(config, "config");
        this.rLottieStateManager.onTryFetch(config);
    }

    @Override // com.discord.rlottie.RLottieImageView, android.widget.ImageView, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        this.rLottieStateManager.onAttachedToWindow();
    }

    @Override // com.discord.rlottie.RLottieImageView, android.widget.ImageView, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        this.rLottieStateManager.onDetachedFromWindow();
    }

    public final void recycle(boolean z10) {
        Drawable drawable = getDrawable();
        if (drawable instanceof RLottieDrawable) {
            RLottieDrawable rLottieDrawable = (RLottieDrawable) drawable;
            rLottieDrawable.stop();
            rLottieDrawable.recycle();
        }
        setImageDrawable(null);
        if (z10) {
            this.rLottieStateManager.reset();
        }
        setBackground(this.placeholder);
    }
}
