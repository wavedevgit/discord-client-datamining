package com.discord.chat.presentation.message.view;

import android.content.Context;
import android.graphics.drawable.ColorDrawable;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import com.discord.SetTextSizeSpKt;
import com.discord.chat.databinding.MediaImageViewBinding;
import com.discord.chat.presentation.media.MediaContainingViewResizer;
import com.discord.chat.presentation.message.view.mosaic_recycler.MosaicView;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.image.fresco.R;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.misc.utilities.view.ViewUtilsKt;
import com.discord.theme.ThemeManagerKt;
import com.facebook.drawee.generic.GenericDraweeHierarchy;
import com.facebook.drawee.view.SimpleDraweeView;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.textinput.ReactTextInputShadowNode;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0084\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\b\n\u0002\b\u0006\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0010\u0007\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0007\b\u0016\u0018\u0000 R2\u00020\u00012\u00020\u0002:\u0002SRB\u001d\b\u0007\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0007\u0010\bJ\u001f\u0010\r\u001a\u00020\u000b2\u0006\u0010\n\u001a\u00020\t2\u0006\u0010\f\u001a\u00020\u000bH\u0002¢\u0006\u0004\b\r\u0010\u000eJ\u001f\u0010\u0010\u001a\u00020\u000b2\u0006\u0010\n\u001a\u00020\t2\u0006\u0010\u000f\u001a\u00020\u000bH\u0002¢\u0006\u0004\b\u0010\u0010\u000eJ)\u0010\u0015\u001a\u00020\t2\u0006\u0010\u0011\u001a\u00020\t2\b\u0010\u0013\u001a\u0004\u0018\u00010\u00122\u0006\u0010\u0014\u001a\u00020\tH\u0002¢\u0006\u0004\b\u0015\u0010\u0016J)\u0010\u0018\u001a\u00020\u00172\u0006\u0010\u0011\u001a\u00020\t2\b\u0010\u0013\u001a\u0004\u0018\u00010\u00122\u0006\u0010\u0014\u001a\u00020\tH\u0002¢\u0006\u0004\b\u0018\u0010\u0019J§\u0001\u0010*\u001a\u00020\u00172\u0006\u0010\u001a\u001a\u00020\u00122\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\u000f\u001a\u00020\u000b2\u0006\u0010\u001c\u001a\u00020\u001b2\b\u0010\u001d\u001a\u0004\u0018\u00010\u00122\b\u0010\u001e\u001a\u0004\u0018\u00010\u000b2\u0006\u0010\u001f\u001a\u00020\t2\b\u0010!\u001a\u0004\u0018\u00010 2\u0006\u0010\"\u001a\u00020\u000b2\b\u0010$\u001a\u0004\u0018\u00010#2\u0006\u0010%\u001a\u00020\t2\u0006\u0010&\u001a\u00020\t2\u0006\u0010'\u001a\u00020\t2\u0006\u0010(\u001a\u00020\t2\u0006\u0010)\u001a\u00020\t2\u0006\u0010\u0011\u001a\u00020\t2\b\u0010\u0013\u001a\u0004\u0018\u00010\u00122\u0006\u0010\u0014\u001a\u00020\t¢\u0006\u0004\b*\u0010+J\u000f\u0010-\u001a\u00020,H\u0016¢\u0006\u0004\b-\u0010.J\u001f\u0010/\u001a\u00020\u00172\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\u000f\u001a\u00020\u000bH\u0016¢\u0006\u0004\b/\u00100J!\u00103\u001a\u00020\u00172\b\u00101\u001a\u0004\u0018\u00010\u00122\b\u00102\u001a\u0004\u0018\u00010\u0012¢\u0006\u0004\b3\u00104J\u001f\u00106\u001a\u00020\u00172\u0006\u00105\u001a\u00020\t2\b\u00101\u001a\u0004\u0018\u00010\u0012¢\u0006\u0004\b6\u00107J;\u0010;\u001a\u00020\u00172\u0006\u00105\u001a\u00020\t2\b\u00101\u001a\u0004\u0018\u00010\u00122\u001a\u0010:\u001a\u0016\u0012\u0004\u0012\u00020\u0012\u0012\u0004\u0012\u00020\u0017\u0018\u000108j\u0004\u0018\u0001`9¢\u0006\u0004\b;\u0010<J\u0017\u0010>\u001a\u00020\u00172\b\u0010=\u001a\u0004\u0018\u00010\u0012¢\u0006\u0004\b>\u0010?R\u0017\u0010A\u001a\u00020@8\u0006¢\u0006\f\n\u0004\bA\u0010B\u001a\u0004\bC\u0010DR\u0014\u0010F\u001a\u00020E8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bF\u0010GR\u0014\u0010I\u001a\u00020H8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bI\u0010JR\u0014\u0010K\u001a\u00020\u000b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bK\u0010LR\u0016\u0010N\u001a\u00020M8\u0002@\u0002X\u0082.¢\u0006\u0006\n\u0004\bN\u0010OR\u0016\u0010P\u001a\u00020\u00128\u0002@\u0002X\u0082.¢\u0006\u0006\n\u0004\bP\u0010Q¨\u0006T"}, d2 = {"Lcom/discord/chat/presentation/message/view/MediaImageView;", "Landroid/widget/FrameLayout;", "Lcom/discord/chat/presentation/message/view/mosaic_recycler/MosaicView;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "", "isEligibleForMinConstraints", "", "width", "getWidth", "(ZI)I", "height", "getHeight", "shouldAutoPlayGif", "", "filename", "srcIsAnimated", "shouldShowGifIndicator", "(ZLjava/lang/String;Z)Z", "", "configureGifIndicator", "(ZLjava/lang/String;Z)V", "url", "Lcom/discord/chat/presentation/media/MediaContainingViewResizer$ResizeMode;", ViewProps.RESIZE_MODE, ReactTextInputShadowNode.PROP_PLACEHOLDER, "placeholderVersion", "isSpoiler", "Lcom/discord/chat/bridge/spoiler/SpoilerConfig;", "spoilerConfig", "radiusPx", "Lcom/discord/chat/presentation/message/view/UploadItemProps;", "uploadItemProps", "isObscure", "isObscureAwaitingScan", "obscureHideControls", "obscureIsOpaque", "isPartOfMosaic", "setContent", "(Ljava/lang/String;IILcom/discord/chat/presentation/media/MediaContainingViewResizer$ResizeMode;Ljava/lang/String;Ljava/lang/Integer;ZLcom/discord/chat/bridge/spoiler/SpoilerConfig;ILcom/discord/chat/presentation/message/view/UploadItemProps;ZZZZZZLjava/lang/String;Z)V", "", "getSingleAspectRatio", "()F", "setMosaicSize", "(II)V", "description", "hint", "setDescription", "(Ljava/lang/String;Ljava/lang/String;)V", "show", "showDescription", "(ZLjava/lang/String;)V", "Lkotlin/Function1;", "Lcom/discord/chat/presentation/events/MessageTapShowAltText;", "onAltTextButtonClicked", "showAltTextButton", "(ZLjava/lang/String;Lkotlin/jvm/functions/Function1;)V", ViewProps.ROLE, "setRole", "(Ljava/lang/String;)V", "Lcom/discord/chat/databinding/MediaImageViewBinding;", "binding", "Lcom/discord/chat/databinding/MediaImageViewBinding;", "getBinding", "()Lcom/discord/chat/databinding/MediaImageViewBinding;", "Lcom/discord/chat/presentation/message/view/SpoilerViewManager;", "spoilerViewManager", "Lcom/discord/chat/presentation/message/view/SpoilerViewManager;", "Lcom/discord/chat/presentation/message/view/AttachmentUploadOverlayViewManager;", "attachmentUploadOverlay", "Lcom/discord/chat/presentation/message/view/AttachmentUploadOverlayViewManager;", "imageFadeDuration", "I", "Lcom/discord/chat/presentation/message/view/MediaImageView$TargetSize;", "targetSize", "Lcom/discord/chat/presentation/message/view/MediaImageView$TargetSize;", "targetUrl", "Ljava/lang/String;", "Companion", "TargetSize", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nMediaImageView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MediaImageView.kt\ncom/discord/chat/presentation/message/view/MediaImageView\n+ 2 ColorDrawable.kt\nandroidx/core/graphics/drawable/ColorDrawableKt\n+ 3 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,258:1\n27#2:259\n311#3:260\n327#3,4:261\n312#3:265\n257#3,2:266\n257#3,2:268\n*S KotlinDebug\n*F\n+ 1 MediaImageView.kt\ncom/discord/chat/presentation/message/view/MediaImageView\n*L\n61#1:259\n155#1:260\n155#1:261,4\n155#1:265\n189#1:266,2\n249#1:268,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class MediaImageView extends FrameLayout implements MosaicView {
    @NotNull
    private final AttachmentUploadOverlayViewManager attachmentUploadOverlay;
    @NotNull
    private final MediaImageViewBinding binding;
    private final int imageFadeDuration;
    @NotNull
    private final SpoilerViewManager spoilerViewManager;
    private TargetSize targetSize;
    private String targetUrl;
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final int GIF_INDICATOR_HEIGHT = SizeUtilsKt.getDpToPx(22);
    private static final int GIF_INDICATOR_WIDTH = SizeUtilsKt.getDpToPx(36);
    private static final int GIF_INDICATOR_PADDING = SizeUtilsKt.getDpToPx(8);

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0007\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007R\u0011\u0010\b\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\u0007R\u0011\u0010\n\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\u0007¨\u0006\f"}, d2 = {"Lcom/discord/chat/presentation/message/view/MediaImageView$Companion;", "", "<init>", "()V", "GIF_INDICATOR_HEIGHT", "", "getGIF_INDICATOR_HEIGHT", "()I", "GIF_INDICATOR_WIDTH", "getGIF_INDICATOR_WIDTH", "GIF_INDICATOR_PADDING", "getGIF_INDICATOR_PADDING", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final int getGIF_INDICATOR_HEIGHT() {
            return MediaImageView.GIF_INDICATOR_HEIGHT;
        }

        public final int getGIF_INDICATOR_PADDING() {
            return MediaImageView.GIF_INDICATOR_PADDING;
        }

        public final int getGIF_INDICATOR_WIDTH() {
            return MediaImageView.GIF_INDICATOR_WIDTH;
        }

        private Companion() {
        }
    }

    @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\f\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u001f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006¢\u0006\u0004\b\u0007\u0010\bJ\t\u0010\u000e\u001a\u00020\u0003HÆ\u0003J\t\u0010\u000f\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0010\u001a\u00020\u0006HÆ\u0003J'\u0010\u0011\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u0006HÆ\u0001J\u0013\u0010\u0012\u001a\u00020\u00132\b\u0010\u0014\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0015\u001a\u00020\u0003HÖ\u0001J\t\u0010\u0016\u001a\u00020\u0017HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\nR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\nR\u0011\u0010\u0005\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\r¨\u0006\u0018"}, d2 = {"Lcom/discord/chat/presentation/message/view/MediaImageView$TargetSize;", "", "width", "", "height", ViewProps.RESIZE_MODE, "Lcom/discord/chat/presentation/media/MediaContainingViewResizer$ResizeMode;", "<init>", "(IILcom/discord/chat/presentation/media/MediaContainingViewResizer$ResizeMode;)V", "getWidth", "()I", "getHeight", "getResizeMode", "()Lcom/discord/chat/presentation/media/MediaContainingViewResizer$ResizeMode;", "component1", "component2", "component3", "copy", "equals", "", "other", "hashCode", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class TargetSize {
        private final int height;
        @NotNull
        private final MediaContainingViewResizer.ResizeMode resizeMode;
        private final int width;

        public TargetSize(int i10, int i11, @NotNull MediaContainingViewResizer.ResizeMode resizeMode) {
            Intrinsics.checkNotNullParameter(resizeMode, "resizeMode");
            this.width = i10;
            this.height = i11;
            this.resizeMode = resizeMode;
        }

        public static /* synthetic */ TargetSize copy$default(TargetSize targetSize, int i10, int i11, MediaContainingViewResizer.ResizeMode resizeMode, int i12, Object obj) {
            if ((i12 & 1) != 0) {
                i10 = targetSize.width;
            }
            if ((i12 & 2) != 0) {
                i11 = targetSize.height;
            }
            if ((i12 & 4) != 0) {
                resizeMode = targetSize.resizeMode;
            }
            return targetSize.copy(i10, i11, resizeMode);
        }

        public final int component1() {
            return this.width;
        }

        public final int component2() {
            return this.height;
        }

        @NotNull
        public final MediaContainingViewResizer.ResizeMode component3() {
            return this.resizeMode;
        }

        @NotNull
        public final TargetSize copy(int i10, int i11, @NotNull MediaContainingViewResizer.ResizeMode resizeMode) {
            Intrinsics.checkNotNullParameter(resizeMode, "resizeMode");
            return new TargetSize(i10, i11, resizeMode);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof TargetSize) {
                TargetSize targetSize = (TargetSize) obj;
                return this.width == targetSize.width && this.height == targetSize.height && this.resizeMode == targetSize.resizeMode;
            }
            return false;
        }

        public final int getHeight() {
            return this.height;
        }

        @NotNull
        public final MediaContainingViewResizer.ResizeMode getResizeMode() {
            return this.resizeMode;
        }

        public final int getWidth() {
            return this.width;
        }

        public int hashCode() {
            return (((Integer.hashCode(this.width) * 31) + Integer.hashCode(this.height)) * 31) + this.resizeMode.hashCode();
        }

        @NotNull
        public String toString() {
            int i10 = this.width;
            int i11 = this.height;
            MediaContainingViewResizer.ResizeMode resizeMode = this.resizeMode;
            return "TargetSize(width=" + i10 + ", height=" + i11 + ", resizeMode=" + resizeMode + ")";
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public MediaImageView(@NotNull Context context) {
        this(context, null, 2, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    private final void configureGifIndicator(boolean z10, String str, boolean z11) {
        int i10;
        SimpleDraweeView gifIndicator = this.binding.gifIndicator;
        Intrinsics.checkNotNullExpressionValue(gifIndicator, "gifIndicator");
        if (shouldShowGifIndicator(z10, str, z11)) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        gifIndicator.setVisibility(i10);
    }

    private final int getHeight(boolean z10, int i10) {
        if (z10 && i10 <= 212) {
            return SizeUtilsKt.getDpToPx((int) MediaImageViewKt.OBSCURED_IMAGE_MIN_HEIGHT);
        }
        return i10;
    }

    private final int getWidth(boolean z10, int i10) {
        if (z10 && i10 <= 146) {
            return SizeUtilsKt.getDpToPx((int) MediaImageViewKt.OBSCURED_IMAGE_MIN_WIDTH);
        }
        return i10;
    }

    private final boolean shouldShowGifIndicator(boolean z10, String str, boolean z11) {
        if (z10) {
            return false;
        }
        int i10 = getLayoutParams().height;
        int i11 = GIF_INDICATOR_HEIGHT;
        int i12 = GIF_INDICATOR_PADDING;
        if (i10 <= i11 + (i12 * 2) || getLayoutParams().width <= GIF_INDICATOR_WIDTH + (i12 * 2) || str == null) {
            return false;
        }
        if (!StringsKt.y(str, ".gif", true) && !StringsKt.y(str, ".gifv", true) && ((!StringsKt.y(str, ".webp", false) || !z11) && (!StringsKt.y(str, ".avif", false) || !z11))) {
            return false;
        }
        return true;
    }

    @NotNull
    public final MediaImageViewBinding getBinding() {
        return this.binding;
    }

    @Override // com.discord.chat.presentation.message.view.mosaic_recycler.MosaicView
    public float getSingleAspectRatio() {
        TargetSize targetSize = this.targetSize;
        TargetSize targetSize2 = null;
        if (targetSize == null) {
            Intrinsics.throwUninitializedPropertyAccessException("targetSize");
            targetSize = null;
        }
        float width = targetSize.getWidth();
        TargetSize targetSize3 = this.targetSize;
        if (targetSize3 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("targetSize");
        } else {
            targetSize2 = targetSize3;
        }
        return width / targetSize2.getHeight();
    }

    /* JADX WARN: Code restructure failed: missing block: B:25:0x0082, code lost:
        if (kotlin.jvm.internal.Intrinsics.areEqual(r2, r5) == false) goto L31;
     */
    /* JADX WARN: Code restructure failed: missing block: B:7:0x0022, code lost:
        if (kotlin.jvm.internal.Intrinsics.areEqual(r1, r14) == false) goto L34;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void setContent(@org.jetbrains.annotations.NotNull java.lang.String r14, int r15, int r16, @org.jetbrains.annotations.NotNull com.discord.chat.presentation.media.MediaContainingViewResizer.ResizeMode r17, java.lang.String r18, java.lang.Integer r19, boolean r20, com.discord.chat.bridge.spoiler.SpoilerConfig r21, int r22, com.discord.chat.presentation.message.view.UploadItemProps r23, boolean r24, boolean r25, boolean r26, boolean r27, boolean r28, boolean r29, java.lang.String r30, boolean r31) {
        /*
            Method dump skipped, instructions count: 246
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.presentation.message.view.MediaImageView.setContent(java.lang.String, int, int, com.discord.chat.presentation.media.MediaContainingViewResizer$ResizeMode, java.lang.String, java.lang.Integer, boolean, com.discord.chat.bridge.spoiler.SpoilerConfig, int, com.discord.chat.presentation.message.view.UploadItemProps, boolean, boolean, boolean, boolean, boolean, boolean, java.lang.String, boolean):void");
    }

    public final void setDescription(String str, String str2) {
        if (str == null) {
            return;
        }
        SimpleDraweeView simpleDraweeView = this.binding.image;
        if (str2 == null) {
            str2 = "";
        }
        simpleDraweeView.setContentDescription(str + ", " + str2);
    }

    @Override // com.discord.chat.presentation.message.view.mosaic_recycler.MosaicView
    public void setMosaicSize(int i10, int i11) {
        ConstraintLayout container = this.binding.container;
        Intrinsics.checkNotNullExpressionValue(container, "container");
        ViewGroup.LayoutParams layoutParams = container.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.width = i10;
            layoutParams.height = i11;
            container.setLayoutParams(layoutParams);
            return;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    public final void setRole(final String str) {
        if (str != null) {
            androidx.core.view.h0.n0(this.binding.image, new androidx.core.view.a() { // from class: com.discord.chat.presentation.message.view.MediaImageView$setRole$1
                @Override // androidx.core.view.a
                public void onInitializeAccessibilityNodeInfo(View host, AccessibilityNodeInfoCompat info) {
                    Intrinsics.checkNotNullParameter(host, "host");
                    Intrinsics.checkNotNullParameter(info, "info");
                    super.onInitializeAccessibilityNodeInfo(host, info);
                    info.T0(str);
                }
            });
        }
    }

    public final void showAltTextButton(boolean z10, String str, Function1<? super String, Unit> function1) {
        AltTextButtonView altTextButtonView = this.binding.mediaViewAltTextButton;
        if (!z10) {
            str = null;
        }
        altTextButtonView.configure(str, function1);
    }

    public final void showDescription(boolean z10, String str) {
        boolean z11;
        TextView textView = this.binding.imageAltText;
        Intrinsics.checkNotNull(textView);
        ViewUtilsKt.setOptionalText(textView, str);
        int i10 = 0;
        if (str != null && z10) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (!z11) {
            i10 = 8;
        }
        textView.setVisibility(i10);
    }

    public /* synthetic */ MediaImageView(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MediaImageView(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        MediaImageViewBinding inflate = MediaImageViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        this.spoilerViewManager = new SpoilerViewManager();
        this.attachmentUploadOverlay = new AttachmentUploadOverlayViewManager();
        this.imageFadeDuration = getResources().getInteger(R.integer.image_fade_duration);
        ((GenericDraweeHierarchy) inflate.image.getHierarchy()).z(new ColorDrawable(ThemeManagerKt.getTheme().getBackgroundModNormal()));
        TextView textView = inflate.imageAltText;
        textView.setImportantForAccessibility(4);
        Intrinsics.checkNotNull(textView);
        DiscordFontUtilsKt.setDiscordFont(textView, DiscordFont.PrimaryNormal);
        textView.setTextColor(ThemeManagerKt.getTheme().getTextMuted());
        SetTextSizeSpKt.setTextSizeSp(textView, 12.0f);
        inflate.imageBlurBg.setBackgroundColor(ThemeManagerKt.getTheme().getBackgroundBaseLower());
    }
}
