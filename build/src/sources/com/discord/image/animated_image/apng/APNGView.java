package com.discord.image.animated_image.apng;

import android.content.Context;
import android.graphics.drawable.Drawable;
import androidx.appcompat.widget.m;
import com.discord.image.animated_image.animated_image_utils.AnimatedImageStateManager;
import com.discord.image.animated_image.apng.APNGView;
import com.discord.misc.utilities.coroutines.CoroutineViewUtilsKt;
import com.linecorp.apng.ApngDrawable;
import java.security.MessageDigest;
import java.util.Arrays;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.Charsets;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
import os.i;
import os.m0;
@Metadata(d1 = {"\u0000B\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\t\n\u0002\u0010\u000b\n\u0002\b\u0006\n\u0002\u0010\t\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0005\u0018\u0000 (2\u00020\u0001:\u0002()B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005J\u0017\u0010\t\u001a\u00020\b2\u0006\u0010\u0007\u001a\u00020\u0006H\u0002¢\u0006\u0004\b\t\u0010\nJ\u000f\u0010\u000b\u001a\u00020\bH\u0002¢\u0006\u0004\b\u000b\u0010\fJ\u000f\u0010\r\u001a\u00020\bH\u0002¢\u0006\u0004\b\r\u0010\fJ\u000f\u0010\u000e\u001a\u00020\bH\u0002¢\u0006\u0004\b\u000e\u0010\fJ\r\u0010\u000f\u001a\u00020\b¢\u0006\u0004\b\u000f\u0010\fJ\r\u0010\u0010\u001a\u00020\b¢\u0006\u0004\b\u0010\u0010\fJ\u0015\u0010\u0011\u001a\u00020\b2\u0006\u0010\u0007\u001a\u00020\u0006¢\u0006\u0004\b\u0011\u0010\nJ!\u0010\u0015\u001a\u00020\b2\b\b\u0002\u0010\u0013\u001a\u00020\u00122\b\b\u0002\u0010\u0014\u001a\u00020\u0012¢\u0006\u0004\b\u0015\u0010\u0016J\u000f\u0010\u0017\u001a\u00020\bH\u0014¢\u0006\u0004\b\u0017\u0010\fJ\u000f\u0010\u0018\u001a\u00020\bH\u0014¢\u0006\u0004\b\u0018\u0010\fJ\u0015\u0010\u001b\u001a\u00020\b2\u0006\u0010\u001a\u001a\u00020\u0019¢\u0006\u0004\b\u001b\u0010\u001cR0\u0010\u001f\u001a\u0010\u0012\u0004\u0012\u00020\u001e\u0012\u0004\u0012\u00020\b\u0018\u00010\u001d8\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b\u001f\u0010 \u001a\u0004\b!\u0010\"\"\u0004\b#\u0010$R\u001a\u0010&\u001a\b\u0012\u0004\u0012\u00020\u00060%8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b&\u0010'¨\u0006*"}, d2 = {"Lcom/discord/image/animated_image/apng/APNGView;", "Landroidx/appcompat/widget/m;", "Landroid/content/Context;", "context", "<init>", "(Landroid/content/Context;)V", "Lcom/discord/image/animated_image/apng/APNGView$Config;", "config", "", "fetchAPNG", "(Lcom/discord/image/animated_image/apng/APNGView$Config;)V", "playApngAnimation", "()V", "pauseApngAnimation", "stopApngAnimation", "play", "pause", "loadImage", "", "resetState", "showLoading", "recycle", "(ZZ)V", "onDetachedFromWindow", "onAttachedToWindow", "", "positionMillis", "seek", "(J)V", "Lkotlin/Function1;", "", "onImageLoaded", "Lkotlin/jvm/functions/Function1;", "getOnImageLoaded", "()Lkotlin/jvm/functions/Function1;", "setOnImageLoaded", "(Lkotlin/jvm/functions/Function1;)V", "Lcom/discord/image/animated_image/animated_image_utils/AnimatedImageStateManager;", "apngStateManager", "Lcom/discord/image/animated_image/animated_image_utils/AnimatedImageStateManager;", "Companion", "Config", "animated_image_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class APNGView extends m {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final AnimatedImageStateManager<Config> apngStateManager;
    private Function1<? super String, Unit> onImageLoaded;

    @Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0005H\u0002J\u0010\u0010\u0007\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u0005H\u0002¨\u0006\t"}, d2 = {"Lcom/discord/image/animated_image/apng/APNGView$Companion;", "", "<init>", "()V", "getFilename", "", "url", "hasFilename", "", "animated_image_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nAPNGView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 APNGView.kt\ncom/discord/image/animated_image/apng/APNGView$Companion\n+ 2 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n*L\n1#1,170:1\n12897#2,3:171\n*S KotlinDebug\n*F\n+ 1 APNGView.kt\ncom/discord/image/animated_image/apng/APNGView$Companion\n*L\n153#1:171,3\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final String getFilename(String str) {
            MessageDigest messageDigest = MessageDigest.getInstance("SHA-256");
            byte[] bytes = str.getBytes(Charsets.UTF_8);
            Intrinsics.checkNotNullExpressionValue(bytes, "getBytes(...)");
            byte[] digest = messageDigest.digest(bytes);
            Intrinsics.checkNotNullExpressionValue(digest, "digest(...)");
            String str2 = "";
            for (byte b10 : digest) {
                String format = String.format("%02x", Arrays.copyOf(new Object[]{Byte.valueOf(b10)}, 1));
                Intrinsics.checkNotNullExpressionValue(format, "format(...)");
                str2 = str2 + format;
            }
            return str2;
        }

        public final boolean hasFilename(String str) {
            return !StringsKt.k0(getFilename(str));
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public APNGView(@NotNull Context context) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        this.apngStateManager = new AnimatedImageStateManager<>(new Function0() { // from class: com.discord.image.animated_image.apng.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit apngStateManager$lambda$0;
                apngStateManager$lambda$0 = APNGView.apngStateManager$lambda$0(APNGView.this);
                return apngStateManager$lambda$0;
            }
        }, new Function0() { // from class: com.discord.image.animated_image.apng.c
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit apngStateManager$lambda$1;
                apngStateManager$lambda$1 = APNGView.apngStateManager$lambda$1(APNGView.this);
                return apngStateManager$lambda$1;
            }
        }, new Function0() { // from class: com.discord.image.animated_image.apng.d
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit apngStateManager$lambda$2;
                apngStateManager$lambda$2 = APNGView.apngStateManager$lambda$2(APNGView.this);
                return apngStateManager$lambda$2;
            }
        }, new Function1() { // from class: com.discord.image.animated_image.apng.e
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit apngStateManager$lambda$3;
                apngStateManager$lambda$3 = APNGView.apngStateManager$lambda$3(APNGView.this, (APNGView.Config) obj);
                return apngStateManager$lambda$3;
            }
        }, new Function1() { // from class: com.discord.image.animated_image.apng.f
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                boolean apngStateManager$lambda$4;
                apngStateManager$lambda$4 = APNGView.apngStateManager$lambda$4(APNGView.this, (APNGView.Config) obj);
                return Boolean.valueOf(apngStateManager$lambda$4);
            }
        }, new Function1() { // from class: com.discord.image.animated_image.apng.g
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit apngStateManager$lambda$5;
                apngStateManager$lambda$5 = APNGView.apngStateManager$lambda$5(APNGView.this, (APNGView.Config) obj);
                return apngStateManager$lambda$5;
            }
        });
    }

    public static final Unit apngStateManager$lambda$0(APNGView aPNGView) {
        aPNGView.playApngAnimation();
        return Unit.f32056a;
    }

    public static final Unit apngStateManager$lambda$1(APNGView aPNGView) {
        aPNGView.pauseApngAnimation();
        return Unit.f32056a;
    }

    public static final Unit apngStateManager$lambda$2(APNGView aPNGView) {
        aPNGView.stopApngAnimation();
        return Unit.f32056a;
    }

    public static final Unit apngStateManager$lambda$3(APNGView aPNGView, Config config) {
        Intrinsics.checkNotNullParameter(config, "<unused var>");
        recycle$default(aPNGView, false, false, 2, null);
        return Unit.f32056a;
    }

    public static final boolean apngStateManager$lambda$4(APNGView aPNGView, Config config) {
        Intrinsics.checkNotNullParameter(config, "config");
        if (aPNGView.isAttachedToWindow() && Companion.hasFilename(config.getUrl())) {
            return true;
        }
        return false;
    }

    public static final Unit apngStateManager$lambda$5(APNGView aPNGView, Config config) {
        Intrinsics.checkNotNullParameter(config, "config");
        aPNGView.fetchAPNG(config);
        return Unit.f32056a;
    }

    private final void fetchAPNG(Config config) {
        i.d(CoroutineViewUtilsKt.attachedScope(this, true), m0.b(), null, new APNGView$fetchAPNG$1(this, config, null), 2, null);
    }

    private final void pauseApngAnimation() {
        ApngDrawable apngDrawable;
        Drawable drawable = getDrawable();
        if (drawable instanceof ApngDrawable) {
            apngDrawable = (ApngDrawable) drawable;
        } else {
            apngDrawable = null;
        }
        if (apngDrawable != null) {
            apngDrawable.stop();
        }
    }

    private final void playApngAnimation() {
        ApngDrawable apngDrawable;
        Drawable drawable = getDrawable();
        if (drawable instanceof ApngDrawable) {
            apngDrawable = (ApngDrawable) drawable;
        } else {
            apngDrawable = null;
        }
        if (apngDrawable != null) {
            apngDrawable.start();
        }
    }

    public static /* synthetic */ void recycle$default(APNGView aPNGView, boolean z10, boolean z11, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = false;
        }
        if ((i10 & 2) != 0) {
            z11 = false;
        }
        aPNGView.recycle(z10, z11);
    }

    private final void stopApngAnimation() {
        ApngDrawable apngDrawable;
        Drawable drawable = getDrawable();
        if (drawable instanceof ApngDrawable) {
            apngDrawable = (ApngDrawable) drawable;
        } else {
            apngDrawable = null;
        }
        if (apngDrawable != null) {
            apngDrawable.stop();
            apngDrawable.k(0L);
        }
    }

    public final Function1<String, Unit> getOnImageLoaded() {
        return this.onImageLoaded;
    }

    public final void loadImage(@NotNull Config config) {
        Intrinsics.checkNotNullParameter(config, "config");
        this.apngStateManager.onTryFetch(config);
    }

    @Override // android.widget.ImageView, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        this.apngStateManager.onAttachedToWindow();
    }

    @Override // android.widget.ImageView, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        this.apngStateManager.onDetachedFromWindow();
    }

    public final void pause() {
        this.apngStateManager.pause();
    }

    public final void play() {
        this.apngStateManager.play();
    }

    public final void recycle(boolean z10, boolean z11) {
        Drawable drawable = getDrawable();
        if (drawable instanceof ApngDrawable) {
            ApngDrawable apngDrawable = (ApngDrawable) drawable;
            apngDrawable.stop();
            apngDrawable.j();
        }
        setImageDrawable(null);
        if (z10) {
            this.apngStateManager.reset();
        }
        if (z11) {
            setBackground(null);
        }
    }

    public final void seek(long j10) {
        ApngDrawable apngDrawable;
        Drawable drawable = getDrawable();
        if (drawable instanceof ApngDrawable) {
            apngDrawable = (ApngDrawable) drawable;
        } else {
            apngDrawable = null;
        }
        if (apngDrawable != null) {
            apngDrawable.k(j10);
        }
    }

    public final void setOnImageLoaded(Function1<? super String, Unit> function1) {
        this.onImageLoaded = function1;
    }

    @Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u001b\b\u0086\b\u0018\u00002\u00020\u0001B=\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0005\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\b\u0010\t\u001a\u0004\u0018\u00010\b\u0012\u0006\u0010\n\u001a\u00020\u0003¢\u0006\u0004\b\u000b\u0010\fJ\t\u0010\u0017\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0018\u001a\u00020\u0005HÆ\u0003J\t\u0010\u0019\u001a\u00020\u0005HÆ\u0003J\u0010\u0010\u001a\u001a\u0004\u0018\u00010\bHÆ\u0003¢\u0006\u0002\u0010\u0013J\u0010\u0010\u001b\u001a\u0004\u0018\u00010\bHÆ\u0003¢\u0006\u0002\u0010\u0013J\t\u0010\u001c\u001a\u00020\u0003HÆ\u0003JN\u0010\u001d\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00052\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\b2\b\b\u0002\u0010\n\u001a\u00020\u0003HÆ\u0001¢\u0006\u0002\u0010\u001eJ\u0013\u0010\u001f\u001a\u00020\u00052\b\u0010 \u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010!\u001a\u00020\bHÖ\u0001J\t\u0010\"\u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0011\u0010\u0006\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0010R\u0015\u0010\u0007\u001a\u0004\u0018\u00010\b¢\u0006\n\n\u0002\u0010\u0014\u001a\u0004\b\u0012\u0010\u0013R\u0015\u0010\t\u001a\u0004\u0018\u00010\b¢\u0006\n\n\u0002\u0010\u0014\u001a\u0004\b\u0015\u0010\u0013R\u0011\u0010\n\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u000e¨\u0006#"}, d2 = {"Lcom/discord/image/animated_image/apng/APNGView$Config;", "", "url", "", "animate", "", "showLoading", "widthDp", "", "heightDp", "cacheDirectory", "<init>", "(Ljava/lang/String;ZZLjava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;)V", "getUrl", "()Ljava/lang/String;", "getAnimate", "()Z", "getShowLoading", "getWidthDp", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getHeightDp", "getCacheDirectory", "component1", "component2", "component3", "component4", "component5", "component6", "copy", "(Ljava/lang/String;ZZLjava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;)Lcom/discord/image/animated_image/apng/APNGView$Config;", "equals", "other", "hashCode", "toString", "animated_image_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Config {
        private final boolean animate;
        @NotNull
        private final String cacheDirectory;
        private final Integer heightDp;
        private final boolean showLoading;
        @NotNull
        private final String url;
        private final Integer widthDp;

        public Config(@NotNull String url, boolean z10, boolean z11, Integer num, Integer num2, @NotNull String cacheDirectory) {
            Intrinsics.checkNotNullParameter(url, "url");
            Intrinsics.checkNotNullParameter(cacheDirectory, "cacheDirectory");
            this.url = url;
            this.animate = z10;
            this.showLoading = z11;
            this.widthDp = num;
            this.heightDp = num2;
            this.cacheDirectory = cacheDirectory;
        }

        public static /* synthetic */ Config copy$default(Config config, String str, boolean z10, boolean z11, Integer num, Integer num2, String str2, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = config.url;
            }
            if ((i10 & 2) != 0) {
                z10 = config.animate;
            }
            if ((i10 & 4) != 0) {
                z11 = config.showLoading;
            }
            if ((i10 & 8) != 0) {
                num = config.widthDp;
            }
            if ((i10 & 16) != 0) {
                num2 = config.heightDp;
            }
            if ((i10 & 32) != 0) {
                str2 = config.cacheDirectory;
            }
            Integer num3 = num2;
            String str3 = str2;
            return config.copy(str, z10, z11, num, num3, str3);
        }

        @NotNull
        public final String component1() {
            return this.url;
        }

        public final boolean component2() {
            return this.animate;
        }

        public final boolean component3() {
            return this.showLoading;
        }

        public final Integer component4() {
            return this.widthDp;
        }

        public final Integer component5() {
            return this.heightDp;
        }

        @NotNull
        public final String component6() {
            return this.cacheDirectory;
        }

        @NotNull
        public final Config copy(@NotNull String url, boolean z10, boolean z11, Integer num, Integer num2, @NotNull String cacheDirectory) {
            Intrinsics.checkNotNullParameter(url, "url");
            Intrinsics.checkNotNullParameter(cacheDirectory, "cacheDirectory");
            return new Config(url, z10, z11, num, num2, cacheDirectory);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Config) {
                Config config = (Config) obj;
                return Intrinsics.areEqual(this.url, config.url) && this.animate == config.animate && this.showLoading == config.showLoading && Intrinsics.areEqual(this.widthDp, config.widthDp) && Intrinsics.areEqual(this.heightDp, config.heightDp) && Intrinsics.areEqual(this.cacheDirectory, config.cacheDirectory);
            }
            return false;
        }

        public final boolean getAnimate() {
            return this.animate;
        }

        @NotNull
        public final String getCacheDirectory() {
            return this.cacheDirectory;
        }

        public final Integer getHeightDp() {
            return this.heightDp;
        }

        public final boolean getShowLoading() {
            return this.showLoading;
        }

        @NotNull
        public final String getUrl() {
            return this.url;
        }

        public final Integer getWidthDp() {
            return this.widthDp;
        }

        public int hashCode() {
            int hashCode = ((((this.url.hashCode() * 31) + Boolean.hashCode(this.animate)) * 31) + Boolean.hashCode(this.showLoading)) * 31;
            Integer num = this.widthDp;
            int hashCode2 = (hashCode + (num == null ? 0 : num.hashCode())) * 31;
            Integer num2 = this.heightDp;
            return ((hashCode2 + (num2 != null ? num2.hashCode() : 0)) * 31) + this.cacheDirectory.hashCode();
        }

        @NotNull
        public String toString() {
            String str = this.url;
            boolean z10 = this.animate;
            boolean z11 = this.showLoading;
            Integer num = this.widthDp;
            Integer num2 = this.heightDp;
            String str2 = this.cacheDirectory;
            return "Config(url=" + str + ", animate=" + z10 + ", showLoading=" + z11 + ", widthDp=" + num + ", heightDp=" + num2 + ", cacheDirectory=" + str2 + ")";
        }

        public /* synthetic */ Config(String str, boolean z10, boolean z11, Integer num, Integer num2, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, z10, (i10 & 4) != 0 ? true : z11, num, num2, str2);
        }
    }
}
