package com.discord.chat.presentation.message.view;

import android.content.Context;
import android.graphics.Color;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.discord.chat.databinding.ObscureOverlayViewBinding;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.react_asset_fetcher.ReactAsset;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchUtilsKt;
import com.discord.react_strings.I18nMessage;
import com.discord.theme.R;
import com.discord.theme.ThemeManagerKt;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.drawee.generic.GenericDraweeHierarchy;
import com.facebook.drawee.view.SimpleDraweeView;
import eightbitlab.com.blurview.BlurView;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u00020\u00012\u00020\u0002B\u001d\b\u0007\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0006¢\u0006\u0004\b\u0007\u0010\bJB\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u000e2\u0006\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u00132\f\u0010\u0014\u001a\b\u0012\u0004\u0012\u00020\f0\u00152\f\u0010\u0016\u001a\b\u0012\u0004\u0012\u00020\f0\u0015J\u000e\u0010\u0017\u001a\u00020\f2\u0006\u0010\u0018\u001a\u00020\u0013J\u0006\u0010\u0019\u001a\u00020\fJ\u000e\u0010\u001a\u001a\u00020\f2\u0006\u0010\u0018\u001a\u00020\u0013J\u000e\u0010\u001b\u001a\u00020\f2\u0006\u0010\u0018\u001a\u00020\u0013J\u000e\u0010\u001c\u001a\u00020\f2\u0006\u0010\u001d\u001a\u00020\u0013J\u0010\u0010\u001e\u001a\u00020\f2\u0006\u0010\u0012\u001a\u00020\u0013H\u0002J\b\u0010\u001f\u001a\u00020 H\u0016R\u000e\u0010\t\u001a\u00020\nX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006!"}, d2 = {"Lcom/discord/chat/presentation/message/view/ObscureOverlayView;", "Landroid/widget/FrameLayout;", "Lcom/discord/chat/presentation/message/view/SpoilerViewOverlay;", "context", "Landroid/content/Context;", "attributeSet", "Landroid/util/AttributeSet;", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "binding", "Lcom/discord/chat/databinding/ObscureOverlayViewBinding;", "configure", "", "header", "", "description", "parent", "Landroid/view/ViewGroup;", "isOverlayVisible", "", "onReveal", "Lkotlin/Function0;", "onHide", "setLabelVisible", "isVisible", "makeHideButtonHidden", "setRevealButtonVisible", "setOpaqueBackgroundVisible", "handleObscureAwaitingScan", "isAwaitingScan", "handleRevealedState", "getOverlayView", "Landroid/view/View;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nObscureOverlayView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ObscureOverlayView.kt\ncom/discord/chat/presentation/message/view/ObscureOverlayView\n+ 2 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,110:1\n257#2,2:111\n257#2,2:113\n257#2,2:115\n257#2,2:117\n257#2,2:119\n257#2,2:121\n*S KotlinDebug\n*F\n+ 1 ObscureOverlayView.kt\ncom/discord/chat/presentation/message/view/ObscureOverlayView\n*L\n79#1:111,2\n83#1:113,2\n87#1:115,2\n91#1:117,2\n95#1:119,2\n99#1:121,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ObscureOverlayView extends FrameLayout implements SpoilerViewOverlay {
    @NotNull
    private final ObscureOverlayViewBinding binding;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public ObscureOverlayView(@NotNull Context context) {
        this(context, null, 2, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void _init_$lambda$0(View view) {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit configure$lambda$2(Function0 function0, ObscureOverlayView obscureOverlayView) {
        function0.invoke();
        obscureOverlayView.binding.revealButton.requestFocus();
        return Unit.f31988a;
    }

    private final void handleRevealedState(boolean z10) {
        int i10;
        BlurView blurView = this.binding.blurView;
        Intrinsics.checkNotNullExpressionValue(blurView, "blurView");
        int i11 = 0;
        if (z10) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        blurView.setVisibility(i10);
        IconButtonView iconButtonView = this.binding.hideButton;
        if (z10) {
            i11 = 4;
        }
        iconButtonView.setImportantForAccessibility(i11);
    }

    public final void configure(@NotNull String header, @NotNull String description, @NotNull ViewGroup parent, boolean z10, @NotNull Function0<Unit> onReveal, @NotNull final Function0<Unit> onHide) {
        Intrinsics.checkNotNullParameter(header, "header");
        Intrinsics.checkNotNullParameter(description, "description");
        Intrinsics.checkNotNullParameter(parent, "parent");
        Intrinsics.checkNotNullParameter(onReveal, "onReveal");
        Intrinsics.checkNotNullParameter(onHide, "onHide");
        handleRevealedState(z10);
        this.binding.blurView.setupWith(parent).g(24.0f).a(Color.argb(80, 0, 0, 0)).d(parent.getBackground()).c(true);
        this.binding.hideButton.configure(ReactAsset.HideMedia, I18nMessage.OBSCURED_CONTENT_HIDE_CONTENT_ALT, new Function0() { // from class: com.discord.chat.presentation.message.view.w2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit configure$lambda$2;
                configure$lambda$2 = ObscureOverlayView.configure$lambda$2(Function0.this, this);
                return configure$lambda$2;
            }
        });
        this.binding.revealButton.configure(ReactAsset.ShowMedia, I18nMessage.OBSCURED_CONTENT_SHOW_CONTENT_ALT, onReveal);
        this.binding.descriptionLabel.setText(header);
        this.binding.descriptionLabel.setContentDescription(description);
    }

    @Override // com.discord.chat.presentation.message.view.SpoilerViewOverlay
    @NotNull
    public View getOverlayView() {
        BlurView blurView = this.binding.blurView;
        Intrinsics.checkNotNullExpressionValue(blurView, "blurView");
        return blurView;
    }

    public final void handleObscureAwaitingScan(boolean z10) {
        int i10;
        ConstraintLayout overlayLayout = this.binding.overlayLayout;
        Intrinsics.checkNotNullExpressionValue(overlayLayout, "overlayLayout");
        if (!z10) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        overlayLayout.setVisibility(i10);
    }

    public final void makeHideButtonHidden() {
        IconButtonView hideButton = this.binding.hideButton;
        Intrinsics.checkNotNullExpressionValue(hideButton, "hideButton");
        hideButton.setVisibility(8);
    }

    public final void setLabelVisible(boolean z10) {
        int i10;
        TextView descriptionLabel = this.binding.descriptionLabel;
        Intrinsics.checkNotNullExpressionValue(descriptionLabel, "descriptionLabel");
        if (z10) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        descriptionLabel.setVisibility(i10);
    }

    public final void setOpaqueBackgroundVisible(boolean z10) {
        int i10;
        FrameLayout opaqueBackground = this.binding.opaqueBackground;
        Intrinsics.checkNotNullExpressionValue(opaqueBackground, "opaqueBackground");
        if (z10) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        opaqueBackground.setVisibility(i10);
    }

    public final void setRevealButtonVisible(boolean z10) {
        int i10;
        IconButtonView revealButton = this.binding.revealButton;
        Intrinsics.checkNotNullExpressionValue(revealButton, "revealButton");
        if (z10) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        revealButton.setVisibility(i10);
    }

    public /* synthetic */ ObscureOverlayView(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ObscureOverlayView(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        ObscureOverlayViewBinding inflate = ObscureOverlayViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        BlurView blurView = inflate.blurView;
        Intrinsics.checkNotNullExpressionValue(blurView, "blurView");
        NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(blurView, false, new View.OnClickListener() { // from class: com.discord.chat.presentation.message.view.v2
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                ObscureOverlayView._init_$lambda$0(view);
            }
        }, 1, null);
        SimpleDraweeView simpleDraweeView = inflate.mediaWarningIcon;
        Intrinsics.checkNotNull(simpleDraweeView);
        ReactAssetUtilsKt.setReactAsset(simpleDraweeView, ReactAsset.MediaChannelNSFW);
        ColorUtilsKt.setTintColor(simpleDraweeView, Integer.valueOf(ThemeManagerKt.getTheme().getWhite()));
        ((GenericDraweeHierarchy) simpleDraweeView.getHierarchy()).w(0);
        TextView descriptionLabel = inflate.descriptionLabel;
        Intrinsics.checkNotNullExpressionValue(descriptionLabel, "descriptionLabel");
        DiscordFontUtilsKt.setDiscordFont(descriptionLabel, DiscordFont.PrimaryNormal);
        inflate.opaqueBackground.setBackgroundColor(ColorUtilsKt.getColorCompat(context, R.color.primary_500));
    }
}
