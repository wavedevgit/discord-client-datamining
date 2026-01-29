package com.discord.chat.presentation.message.view;

import android.content.Context;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.discord.SetTextSizeSpKt;
import com.discord.chat.bridge.automod.AutoModerationContext;
import com.discord.chat.bridge.automod.AutoModerationNotification;
import com.discord.chat.databinding.AutoModerationNotificationEmbedViewBinding;
import com.discord.core.DCDButton;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.misc.utilities.view.ViewClippingUtilsKt;
import com.discord.react.FontManager;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.discord.recycler_view.decorations.VerticalSpacingItemDecoration;
import com.discord.ripple.RippleUtilsKt;
import com.discord.theme.ThemeManagerKt;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.drawee.view.SimpleDraweeView;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\u0018\u00002\u00020\u00012\u00020\u0002B\u001d\b\u0007\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0006¢\u0006\u0004\b\u0007\u0010\bJ\u0010\u0010\r\u001a\u00020\f2\u0006\u0010\u000e\u001a\u00020\u000fH\u0016J\u001e\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u0015J\r\u0010\u0017\u001a\u00020\u0018H\u0016¢\u0006\u0002\u0010\u0019R\u000e\u0010\t\u001a\u00020\nX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\fX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u001a"}, d2 = {"Lcom/discord/chat/presentation/message/view/AutoModerationNotificationEmbedView;", "Landroidx/constraintlayout/widget/ConstraintLayout;", "Lcom/discord/recycler_view/decorations/VerticalSpacingItemDecoration$SpacingProviderView;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "binding", "Lcom/discord/chat/databinding/AutoModerationNotificationEmbedViewBinding;", "allowChildGestures", "", "onInterceptTouchEvent", "ev", "Landroid/view/MotionEvent;", "configure", "", "moderationContext", "Lcom/discord/chat/bridge/automod/AutoModerationContext;", "onTapAutoModerationActions", "Landroid/view/View$OnClickListener;", "onTapAutoModerationFeedback", "spacingPxOverride", "", "()Ljava/lang/Integer;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nAutoModerationNotificationEmbedView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 AutoModerationNotificationEmbedView.kt\ncom/discord/chat/presentation/message/view/AutoModerationNotificationEmbedView\n+ 2 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,191:1\n257#2,2:192\n257#2,2:194\n257#2,2:196\n257#2,2:198\n257#2,2:200\n257#2,2:202\n257#2,2:204\n257#2,2:206\n257#2,2:208\n257#2,2:210\n257#2,2:212\n257#2,2:214\n257#2,2:216\n257#2,2:218\n257#2,2:220\n257#2,2:222\n257#2,2:224\n257#2,2:226\n257#2,2:228\n*S KotlinDebug\n*F\n+ 1 AutoModerationNotificationEmbedView.kt\ncom/discord/chat/presentation/message/view/AutoModerationNotificationEmbedView\n*L\n114#1:192,2\n115#1:194,2\n116#1:196,2\n117#1:198,2\n118#1:200,2\n119#1:202,2\n120#1:204,2\n124#1:206,2\n128#1:208,2\n132#1:210,2\n133#1:212,2\n135#1:214,2\n141#1:216,2\n145#1:218,2\n149#1:220,2\n153#1:222,2\n157#1:224,2\n160#1:226,2\n167#1:228,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AutoModerationNotificationEmbedView extends ConstraintLayout implements VerticalSpacingItemDecoration.SpacingProviderView {
    private boolean allowChildGestures;
    @NotNull
    private final AutoModerationNotificationEmbedViewBinding binding;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public AutoModerationNotificationEmbedView(@NotNull Context context) {
        this(context, null, 2, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public final void configure(@NotNull AutoModerationContext moderationContext, @NotNull View.OnClickListener onTapAutoModerationActions, @NotNull View.OnClickListener onTapAutoModerationFeedback) {
        int i10;
        boolean z10;
        Intrinsics.checkNotNullParameter(moderationContext, "moderationContext");
        Intrinsics.checkNotNullParameter(onTapAutoModerationActions, "onTapAutoModerationActions");
        Intrinsics.checkNotNullParameter(onTapAutoModerationFeedback, "onTapAutoModerationFeedback");
        AutoModerationNotification notification = moderationContext.getNotification();
        TextView header = this.binding.header;
        Intrinsics.checkNotNullExpressionValue(header, "header");
        int i11 = 8;
        header.setVisibility(8);
        SimpleDraweeView headerIcon = this.binding.headerIcon;
        Intrinsics.checkNotNullExpressionValue(headerIcon, "headerIcon");
        headerIcon.setVisibility(8);
        TextView subtitleLeft = this.binding.subtitleLeft;
        Intrinsics.checkNotNullExpressionValue(subtitleLeft, "subtitleLeft");
        subtitleLeft.setVisibility(8);
        TextView subtitleRight = this.binding.subtitleRight;
        Intrinsics.checkNotNullExpressionValue(subtitleRight, "subtitleRight");
        subtitleRight.setVisibility(8);
        SimpleDraweeView subtitleLeftAvatar = this.binding.subtitleLeftAvatar;
        Intrinsics.checkNotNullExpressionValue(subtitleLeftAvatar, "subtitleLeftAvatar");
        subtitleLeftAvatar.setVisibility(8);
        TextView subtitleLeftAuthor = this.binding.subtitleLeftAuthor;
        Intrinsics.checkNotNullExpressionValue(subtitleLeftAuthor, "subtitleLeftAuthor");
        subtitleLeftAuthor.setVisibility(8);
        TextView body = this.binding.body;
        Intrinsics.checkNotNullExpressionValue(body, "body");
        body.setVisibility(8);
        if (notification != null) {
            TextView header2 = this.binding.header;
            Intrinsics.checkNotNullExpressionValue(header2, "header");
            header2.setVisibility(0);
            this.binding.header.setText(notification.getHeader());
            this.binding.header.setTextColor(notification.getHeaderColor());
            SimpleDraweeView headerIcon2 = this.binding.headerIcon;
            Intrinsics.checkNotNullExpressionValue(headerIcon2, "headerIcon");
            headerIcon2.setVisibility(0);
            this.binding.headerIcon.setImageURI(notification.getHeaderIconURL());
            SimpleDraweeView headerIcon3 = this.binding.headerIcon;
            Intrinsics.checkNotNullExpressionValue(headerIcon3, "headerIcon");
            ColorUtilsKt.setTintColor(headerIcon3, Integer.valueOf(notification.getHeaderIconColor()));
            TextView body2 = this.binding.body;
            Intrinsics.checkNotNullExpressionValue(body2, "body");
            body2.setVisibility(0);
            LinearLayout actions = this.binding.actions;
            Intrinsics.checkNotNullExpressionValue(actions, "actions");
            if (notification.getShouldShowActions()) {
                i10 = 0;
            } else {
                i10 = 8;
            }
            actions.setVisibility(i10);
            ImageView subtitleDivider = this.binding.subtitleDivider;
            Intrinsics.checkNotNullExpressionValue(subtitleDivider, "subtitleDivider");
            if (notification.getSubtitleLeft() != null && notification.getSubtitleRight() != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10) {
                i11 = 0;
            }
            subtitleDivider.setVisibility(i11);
            if (notification.getBody() != null) {
                this.binding.body.setText(notification.getBody());
                TextView body3 = this.binding.body;
                Intrinsics.checkNotNullExpressionValue(body3, "body");
                body3.setVisibility(0);
            }
            if (notification.getSubtitleLeft() != null) {
                this.binding.subtitleLeft.setText(notification.getSubtitleLeft());
                TextView subtitleLeft2 = this.binding.subtitleLeft;
                Intrinsics.checkNotNullExpressionValue(subtitleLeft2, "subtitleLeft");
                subtitleLeft2.setVisibility(0);
            } else if (notification.getSeverity() != null) {
                this.binding.subtitleLeft.setText(notification.getSeverity());
                TextView subtitleLeft3 = this.binding.subtitleLeft;
                Intrinsics.checkNotNullExpressionValue(subtitleLeft3, "subtitleLeft");
                subtitleLeft3.setVisibility(0);
            }
            if (notification.getSubtitleRight() != null) {
                this.binding.subtitleRight.setText(notification.getSubtitleRight());
                TextView subtitleRight2 = this.binding.subtitleRight;
                Intrinsics.checkNotNullExpressionValue(subtitleRight2, "subtitleRight");
                subtitleRight2.setVisibility(0);
            } else if (notification.getStartTime() != null) {
                this.binding.subtitleLeft.setText(notification.getStartTime());
                TextView subtitleLeft4 = this.binding.subtitleLeft;
                Intrinsics.checkNotNullExpressionValue(subtitleLeft4, "subtitleLeft");
                subtitleLeft4.setVisibility(0);
            }
            if (notification.getEnabledByUsername() != null) {
                TextView subtitleLeftAuthor2 = this.binding.subtitleLeftAuthor;
                Intrinsics.checkNotNullExpressionValue(subtitleLeftAuthor2, "subtitleLeftAuthor");
                subtitleLeftAuthor2.setVisibility(0);
                this.binding.subtitleLeftAuthor.setText(notification.getEnabledByUsername());
            }
            if (notification.getEnabledByColor() != null) {
                this.binding.subtitleLeftAuthor.setTextColor(notification.getEnabledByColor().intValue());
            }
            if (notification.getEnabledByAvatarURL() != null) {
                SimpleDraweeView subtitleLeftAvatar2 = this.binding.subtitleLeftAvatar;
                Intrinsics.checkNotNullExpressionValue(subtitleLeftAvatar2, "subtitleLeftAvatar");
                subtitleLeftAvatar2.setVisibility(0);
                SimpleDraweeView subtitleLeftAvatar3 = this.binding.subtitleLeftAvatar;
                Intrinsics.checkNotNullExpressionValue(subtitleLeftAvatar3, "subtitleLeftAvatar");
                ReactAssetUtilsKt.setReactImageUrl(subtitleLeftAvatar3, notification.getEnabledByAvatarURL());
            }
        }
        String actionsIconURL = moderationContext.getActionsIconURL();
        String actionsText = moderationContext.getActionsText();
        DCDButton dCDButton = this.binding.actionsButton;
        if (actionsIconURL != null) {
            dCDButton.setIcon(actionsIconURL, SizeUtilsKt.getDpToPx(16));
        }
        dCDButton.setText(actionsText);
        dCDButton.setOnClickButtonListener(onTapAutoModerationActions);
        String feedbackText = moderationContext.getFeedbackText();
        DCDButton dCDButton2 = this.binding.feedbackButton;
        dCDButton2.setText(feedbackText);
        dCDButton2.setOnClickButtonListener(onTapAutoModerationFeedback);
    }

    @Override // android.view.ViewGroup
    public boolean onInterceptTouchEvent(@NotNull MotionEvent ev2) {
        Intrinsics.checkNotNullParameter(ev2, "ev");
        return !this.allowChildGestures;
    }

    @Override // com.discord.recycler_view.decorations.VerticalSpacingItemDecoration.SpacingProviderView
    @NotNull
    public Integer spacingPxOverride() {
        return Integer.valueOf(SizeUtilsKt.getDpToPx(4));
    }

    public /* synthetic */ AutoModerationNotificationEmbedView(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public AutoModerationNotificationEmbedView(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        AutoModerationNotificationEmbedViewBinding inflate = AutoModerationNotificationEmbedViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        this.allowChildGestures = true;
        RippleUtilsKt.addRipple$default(this, false, SizeUtilsKt.getDpToPx(8), 1, null);
        View root = inflate.getRoot();
        root.setBackgroundColor(ThemeManagerKt.getTheme().getBackgroundSurfaceHigh());
        Intrinsics.checkNotNull(root);
        ViewClippingUtilsKt.clipToRoundedRectangle(root, SizeUtilsKt.getDpToPx(8));
        TextView textView = inflate.header;
        textView.setTextColor(ThemeManagerKt.getTheme().getTextFeedbackCritical());
        Intrinsics.checkNotNull(textView);
        DiscordFont discordFont = DiscordFont.PrimarySemibold;
        DiscordFontUtilsKt.setDiscordFont(textView, discordFont);
        SetTextSizeSpKt.setTextSizeSp(textView, 16.0f, 20.0f);
        textView.setLineSpacing(0.0f, 1.05f);
        ImageView imageView = inflate.subtitleDivider;
        imageView.setBackgroundColor(ThemeManagerKt.getTheme().getBorderSubtle());
        Intrinsics.checkNotNull(imageView);
        ViewClippingUtilsKt.clipToRoundedRectangle(imageView, SizeUtilsKt.getDpToPx(4));
        TextView textView2 = inflate.subtitleLeft;
        textView2.setTextColor(ThemeManagerKt.getTheme().getTextDefault());
        Intrinsics.checkNotNull(textView2);
        DiscordFontUtilsKt.setDiscordFont(textView2, discordFont);
        SetTextSizeSpKt.setTextSizeSp(textView2, 12.0f, 20.0f);
        TextView textView3 = inflate.subtitleRight;
        textView3.setTextColor(ThemeManagerKt.getTheme().getTextDefault());
        Intrinsics.checkNotNull(textView3);
        DiscordFontUtilsKt.setDiscordFont(textView3, discordFont);
        SetTextSizeSpKt.setTextSizeSp(textView3, 12.0f, 20.0f);
        TextView textView4 = inflate.subtitleLeftAuthor;
        textView4.setTextColor(ThemeManagerKt.getTheme().getTextDefault());
        Intrinsics.checkNotNull(textView4);
        DiscordFontUtilsKt.setDiscordFont(textView4, discordFont);
        SetTextSizeSpKt.setTextSizeSp(textView4, 12.0f, 20.0f);
        TextView textView5 = inflate.body;
        textView5.setTextColor(ThemeManagerKt.getTheme().getTextMuted());
        Intrinsics.checkNotNull(textView5);
        DiscordFont discordFont2 = DiscordFont.PrimaryMedium;
        DiscordFontUtilsKt.setDiscordFont(textView5, discordFont2);
        SetTextSizeSpKt.setTextSizeSp(textView5, FontManager.INSTANCE.getIsClassicChatFontScaleEnabled(context) ? 14.0f : 16.0f);
        inflate.actions.setBackgroundColor(ThemeManagerKt.getTheme().getBackgroundModNormal());
        ImageView imageView2 = inflate.separatorDot;
        imageView2.setBackgroundColor(ThemeManagerKt.getTheme().getBorderSubtle());
        Intrinsics.checkNotNull(imageView2);
        ViewClippingUtilsKt.clipToRoundedRectangle(imageView2, SizeUtilsKt.getDpToPx(4));
        DCDButton dCDButton = inflate.actionsButton;
        dCDButton.setTextSizeSp(12.0f);
        dCDButton.setTextColor(Integer.valueOf(ThemeManagerKt.getTheme().getTextLink()));
        dCDButton.setDiscordFont(discordFont2);
        dCDButton.setBackgroundColor(ThemeManagerKt.getTheme().getBackgroundModNormal());
        DCDButton dCDButton2 = inflate.feedbackButton;
        dCDButton2.setTextSizeSp(12.0f);
        dCDButton2.setTextColor(Integer.valueOf(ThemeManagerKt.getTheme().getTextLink()));
        dCDButton2.setDiscordFont(discordFont2);
        dCDButton2.setBackgroundColor(ThemeManagerKt.getTheme().getBackgroundModNormal());
    }
}
