package com.discord.chat.presentation.message.view;

import android.content.Context;
import android.graphics.Paint;
import android.text.TextPaint;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.discord.SetTextSizeSpKt;
import com.discord.chat.bridge.spoiler.SpoilerConfig;
import com.discord.chat.bridge.structurabletext.StructurableText;
import com.discord.chat.databinding.PostPreviewEmbedViewBinding;
import com.discord.chat.presentation.textutils.TextUtilsKt;
import com.discord.core.DCDButton;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.misc.utilities.view.ViewClippingUtilsKt;
import com.discord.misc.utilities.view.ViewUtilsKt;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchUtilsKt;
import com.discord.theme.ThemeManagerKt;
import com.facebook.drawee.drawable.ScalingUtils$ScaleType;
import com.facebook.drawee.generic.GenericDraweeHierarchy;
import com.facebook.drawee.span.SimpleDraweeSpanTextView;
import com.facebook.drawee.view.SimpleDraweeView;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.Footer;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000^\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\r\n\u0002\b\u000b\u0018\u00002\u00020\u0001B'\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tJ\u0099\u0001\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000f2\b\u0010\u0010\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\u0011\u001a\u00020\u000f2\u0006\u0010\u0012\u001a\u00020\u00072\u0006\u0010\u0013\u001a\u00020\u00142\u0006\u0010\u0015\u001a\u00020\u00162\b\u0010\u0017\u001a\u0004\u0018\u00010\u000f2\b\u0010\u0018\u001a\u0004\u0018\u00010\u000f2\b\u0010\u0019\u001a\u0004\u0018\u00010\u000f2\b\u0010\u001a\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020\u001e2\u0006\u0010 \u001a\u00020\u001e2\u0006\u0010!\u001a\u00020\u001e2\b\u0010\"\u001a\u0004\u0018\u00010#¢\u0006\u0004\b$\u0010%J\u0010\u0010&\u001a\u00020\r2\u0006\u0010'\u001a\u00020(H\u0002J\u0010\u0010)\u001a\u00020\r2\u0006\u0010\u0012\u001a\u00020\u0007H\u0002J\u0010\u0010*\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020(H\u0002J\u0012\u0010+\u001a\u00020\r2\b\u0010\u0010\u001a\u0004\u0018\u00010(H\u0002J\u001f\u0010,\u001a\u00020\r2\u0006\u0010\u0013\u001a\u00020\u00142\u0006\u0010\u0015\u001a\u00020\u0016H\u0002¢\u0006\u0004\b-\u0010.J&\u0010/\u001a\u00020\r2\b\u00100\u001a\u0004\u0018\u00010\u000f2\b\u0010\u0018\u001a\u0004\u0018\u00010\u000f2\b\u0010\u001a\u001a\u0004\u0018\u00010\u000fH\u0002J\u0012\u00101\u001a\u00020\r2\b\u0010\u0019\u001a\u0004\u0018\u00010\u000fH\u0002J2\u00102\u001a\u00020\r2\b\u0010\"\u001a\u0004\u0018\u00010#2\u0006\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020\u001e2\u0006\u0010 \u001a\u00020\u001e2\u0006\u0010!\u001a\u00020\u001eH\u0002R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u0004¢\u0006\u0002\n\u0000¨\u00063"}, d2 = {"Lcom/discord/chat/presentation/message/view/PostPreviewEmbedView;", "Landroidx/constraintlayout/widget/ConstraintLayout;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "defStyleAttr", "", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "binding", "Lcom/discord/chat/databinding/PostPreviewEmbedViewBinding;", "setPostPreviewEmbed", "", "title", "", "subtitle", "ctaCopy", "ctaButtonColor", Footer.type, "Lcom/discord/chat/bridge/structurabletext/StructurableText;", "messageId", "Lcom/discord/primitives/MessageId;", "thumbnailUrl", "blurredThumbnailUrl", "coverImageOverlayText", "backgroundImageUrl", "onButtonClickListener", "Landroid/view/View$OnClickListener;", "isSpoiler", "", "isObscureAwaitingScan", "obscureHideControls", "obscureIsOpaque", "spoilerConfig", "Lcom/discord/chat/bridge/spoiler/SpoilerConfig;", "setPostPreviewEmbed-4itWklQ", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;ILcom/discord/chat/bridge/structurabletext/StructurableText;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Landroid/view/View$OnClickListener;ZZZZLcom/discord/chat/bridge/spoiler/SpoilerConfig;)V", "setButtonText", "cta", "", "setButtonColor", "setTitle", "setSubtitle", "setFooter", "setFooter-Ayv7vGE", "(Lcom/discord/chat/bridge/structurabletext/StructurableText;Ljava/lang/String;)V", "setCoverImage", "url", "setCoverImageButtonText", "setupSpoilerView", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nPostPreviewEmbedView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 PostPreviewEmbedView.kt\ncom/discord/chat/presentation/message/view/PostPreviewEmbedView\n+ 2 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,172:1\n257#2,2:173\n257#2,2:175\n257#2,2:177\n257#2,2:179\n255#2:181\n257#2,2:182\n257#2,2:184\n*S KotlinDebug\n*F\n+ 1 PostPreviewEmbedView.kt\ncom/discord/chat/presentation/message/view/PostPreviewEmbedView\n*L\n100#1:173,2\n125#1:175,2\n126#1:177,2\n144#1:179,2\n157#1:181\n161#1:182,2\n164#1:184,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class PostPreviewEmbedView extends ConstraintLayout {
    @NotNull
    private final PostPreviewEmbedViewBinding binding;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public PostPreviewEmbedView(@NotNull Context context) {
        this(context, null, 0, 6, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    private final void setButtonColor(int i10) {
        this.binding.cta.setBackgroundColor(i10);
    }

    private final void setButtonText(CharSequence charSequence) {
        this.binding.cta.setText(charSequence);
    }

    private final void setCoverImage(String str, String str2, String str3) {
        boolean z10;
        int i10;
        boolean z11 = true;
        int i11 = 0;
        if ((str != null && !StringsKt.k0(str)) || (str2 != null && !StringsKt.k0(str2))) {
            z10 = true;
        } else {
            z10 = false;
        }
        SimpleDraweeView coverImage = this.binding.coverImage;
        Intrinsics.checkNotNullExpressionValue(coverImage, "coverImage");
        if (z10) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        coverImage.setVisibility(i10);
        SimpleDraweeView backgroundImage = this.binding.backgroundImage;
        Intrinsics.checkNotNullExpressionValue(backgroundImage, "backgroundImage");
        if (!z10 || str3 == null || StringsKt.k0(str3)) {
            z11 = false;
        }
        if (!z11) {
            i11 = 8;
        }
        backgroundImage.setVisibility(i11);
        if (str != null && !StringsKt.k0(str)) {
            if (str3 != null && !StringsKt.k0(str3)) {
                ((GenericDraweeHierarchy) this.binding.coverImage.getHierarchy()).t(ScalingUtils$ScaleType.f9634e);
                this.binding.backgroundImage.setImageURI(str3);
            } else {
                ((GenericDraweeHierarchy) this.binding.coverImage.getHierarchy()).t(ScalingUtils$ScaleType.f9638i);
            }
            this.binding.coverImage.setImageURI(str);
        } else if (str2 != null && !StringsKt.k0(str2)) {
            SimpleDraweeView coverImage2 = this.binding.coverImage;
            Intrinsics.checkNotNullExpressionValue(coverImage2, "coverImage");
            ReactAssetUtilsKt.setOptionalReactImageUrl(coverImage2, str2);
        }
    }

    private final void setCoverImageButtonText(String str) {
        boolean z10;
        DCDButton dCDButton = this.binding.coverImageOverlayButton;
        Intrinsics.checkNotNull(dCDButton);
        int i10 = 0;
        if (str != null && !StringsKt.k0(str)) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (z10) {
            i10 = 8;
        }
        dCDButton.setVisibility(i10);
        dCDButton.setText(str);
    }

    /* renamed from: setFooter-Ayv7vGE  reason: not valid java name */
    private final void m704setFooterAyv7vGE(StructurableText structurableText, String str) {
        SimpleDraweeSpanTextView simpleDraweeSpanTextView = this.binding.footer;
        Intrinsics.checkNotNull(simpleDraweeSpanTextView);
        Context context = simpleDraweeSpanTextView.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Paint.FontMetrics fontMetrics = simpleDraweeSpanTextView.getPaint().getFontMetrics();
        Intrinsics.checkNotNullExpressionValue(fontMetrics, "getFontMetrics(...)");
        float baselineHeightPx = TextUtilsKt.getBaselineHeightPx(fontMetrics);
        TextPaint paint = simpleDraweeSpanTextView.getPaint();
        Intrinsics.checkNotNullExpressionValue(paint, "getPaint(...)");
        ViewUtilsKt.setOptionalText(simpleDraweeSpanTextView, TextUtilsKt.toSpannable$default(structurableText, context, str, false, false, false, true, paint, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, true, null, baselineHeightPx, null, false, 113246080, null));
        NestedScrollOnTouchUtilsKt.enableNestedSpanClickListener$default(simpleDraweeSpanTextView, false, 1, null);
    }

    private final void setSubtitle(CharSequence charSequence) {
        boolean z10;
        TextView subtitle = this.binding.subtitle;
        Intrinsics.checkNotNullExpressionValue(subtitle, "subtitle");
        int i10 = 0;
        if (charSequence != null && !StringsKt.k0(charSequence)) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (z10) {
            i10 = 8;
        }
        subtitle.setVisibility(i10);
        this.binding.subtitle.setText(charSequence);
    }

    private final void setTitle(CharSequence charSequence) {
        this.binding.title.setText(charSequence);
    }

    private final void setupSpoilerView(SpoilerConfig spoilerConfig, boolean z10, boolean z11, boolean z12, boolean z13) {
        this.binding.spoiler.configure(spoilerConfig, this);
        SpoilerView spoiler = this.binding.spoiler;
        Intrinsics.checkNotNullExpressionValue(spoiler, "spoiler");
        if (spoiler.getVisibility() == 0) {
            this.binding.spoiler.handleObscureAwaitingScan(z11);
            this.binding.spoiler.setRevealButtonVisible(!z12);
            this.binding.spoiler.setOpaqueBackgroundVisible(z13);
            FrameLayout imageBlurBg = this.binding.imageBlurBg;
            Intrinsics.checkNotNullExpressionValue(imageBlurBg, "imageBlurBg");
            imageBlurBg.setVisibility(0);
            this.binding.coverImage.setImportantForAccessibility(4);
            return;
        }
        FrameLayout imageBlurBg2 = this.binding.imageBlurBg;
        Intrinsics.checkNotNullExpressionValue(imageBlurBg2, "imageBlurBg");
        imageBlurBg2.setVisibility(8);
        this.binding.coverImage.setImportantForAccessibility(0);
        if (z10) {
            this.binding.coverImage.requestFocus();
        }
    }

    /* renamed from: setPostPreviewEmbed-4itWklQ  reason: not valid java name */
    public final void m705setPostPreviewEmbed4itWklQ(@NotNull String title, String str, @NotNull String ctaCopy, int i10, @NotNull StructurableText footer, @NotNull String messageId, String str2, String str3, String str4, String str5, @NotNull View.OnClickListener onButtonClickListener, boolean z10, boolean z11, boolean z12, boolean z13, SpoilerConfig spoilerConfig) {
        Intrinsics.checkNotNullParameter(title, "title");
        Intrinsics.checkNotNullParameter(ctaCopy, "ctaCopy");
        Intrinsics.checkNotNullParameter(footer, "footer");
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(onButtonClickListener, "onButtonClickListener");
        setButtonText(ctaCopy);
        setButtonColor(i10);
        setTitle(title);
        setSubtitle(str);
        m704setFooterAyv7vGE(footer, messageId);
        setCoverImage(str2, str3, str5);
        setCoverImageButtonText(str4);
        this.binding.cta.setOnClickButtonListener(onButtonClickListener);
        SimpleDraweeView coverImage = this.binding.coverImage;
        Intrinsics.checkNotNullExpressionValue(coverImage, "coverImage");
        NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(coverImage, false, onButtonClickListener, 1, null);
        this.binding.coverImageOverlayButton.setOnClickButtonListener(onButtonClickListener);
        setupSpoilerView(spoilerConfig, z10, z11, z12, z13);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public PostPreviewEmbedView(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 4, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public /* synthetic */ PostPreviewEmbedView(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i11 & 2) != 0 ? null : attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public PostPreviewEmbedView(@NotNull Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Intrinsics.checkNotNullParameter(context, "context");
        PostPreviewEmbedViewBinding inflate = PostPreviewEmbedViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        setBackgroundColor(ThemeManagerKt.getTheme().getBackgroundSurfaceHigh());
        ViewClippingUtilsKt.clipToRoundedRectangle(this, SizeUtilsKt.getDpToPx(8));
        TextView textView = inflate.title;
        textView.setTextColor(ThemeManagerKt.getTheme().getTextDefault());
        Intrinsics.checkNotNull(textView);
        SetTextSizeSpKt.setTextSizeSp(textView, 16.0f);
        DiscordFontUtilsKt.setDiscordFont(textView, DiscordFont.PrimarySemibold);
        TextView textView2 = inflate.subtitle;
        textView2.setTextColor(ThemeManagerKt.getTheme().getTextMuted());
        Intrinsics.checkNotNull(textView2);
        SetTextSizeSpKt.setTextSizeSp(textView2, 14.0f);
        DiscordFont discordFont = DiscordFont.PrimaryNormal;
        DiscordFontUtilsKt.setDiscordFont(textView2, discordFont);
        SimpleDraweeSpanTextView simpleDraweeSpanTextView = inflate.footer;
        simpleDraweeSpanTextView.setTextColor(ThemeManagerKt.getTheme().getTextMuted());
        Intrinsics.checkNotNull(simpleDraweeSpanTextView);
        SetTextSizeSpKt.setTextSizeSp(simpleDraweeSpanTextView, 12.0f);
        DiscordFontUtilsKt.setDiscordFont(simpleDraweeSpanTextView, discordFont);
        DCDButton dCDButton = inflate.coverImageOverlayButton;
        dCDButton.setBackgroundColor(ThemeManagerKt.getTheme().getBackgroundBaseLower());
        dCDButton.setAlpha(0.7f);
        dCDButton.setTextSizeSp(12.0f);
        dCDButton.setCornerRadius(SizeUtilsKt.getDpToPx(64));
    }
}
