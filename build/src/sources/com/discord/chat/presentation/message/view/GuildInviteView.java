package com.discord.chat.presentation.message.view;

import android.content.Context;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.discord.SetTextSizeSpKt;
import com.discord.chat.databinding.GuildInviteViewBinding;
import com.discord.core.DCDButton;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.misc.utilities.view.ViewBackgroundUtilsKt;
import com.discord.misc.utilities.view.ViewUtilsKt;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchUtilsKt;
import com.discord.theme.R;
import com.discord.theme.ThemeManagerKt;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.drawee.view.SimpleDraweeView;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\r\n\u0002\b\u0019\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\u0018\u00002\u00020\u0001B'\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\r2\n\b\u0001\u0010\u000e\u001a\u0004\u0018\u00010\u0007¢\u0006\u0002\u0010\u000fJ\u0010\u0010\u0010\u001a\u00020\r2\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012J\u0010\u0010\u0013\u001a\u00020\r2\b\u0010\u0014\u001a\u0004\u0018\u00010\u0015J\u0010\u0010\u0016\u001a\u00020\r2\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012J\u0019\u0010\u0017\u001a\u0004\u0018\u00010\r2\n\b\u0001\u0010\u000e\u001a\u0004\u0018\u00010\u0007¢\u0006\u0002\u0010\u0018J\u0010\u0010\u0019\u001a\u00020\r2\b\u0010\u001a\u001a\u0004\u0018\u00010\u0015J\u0019\u0010\u001b\u001a\u0004\u0018\u00010\r2\n\b\u0001\u0010\u000e\u001a\u0004\u0018\u00010\u0007¢\u0006\u0002\u0010\u0018J5\u0010\u001c\u001a\u00020\r2\b\u0010\u0011\u001a\u0004\u0018\u00010\u00122\b\u0010\u001d\u001a\u0004\u0018\u00010\u00122\n\b\u0001\u0010\u001e\u001a\u0004\u0018\u00010\u00072\b\u0010\u001f\u001a\u0004\u0018\u00010\u0007¢\u0006\u0002\u0010 J\u0010\u0010!\u001a\u00020\r2\b\u0010\"\u001a\u0004\u0018\u00010\u0015J\u0010\u0010#\u001a\u00020\r2\b\u0010$\u001a\u0004\u0018\u00010\u0012J\u0017\u0010%\u001a\u00020\r2\n\b\u0001\u0010\u000e\u001a\u0004\u0018\u00010\u0007¢\u0006\u0002\u0010\u000fJ\u001a\u0010&\u001a\u00020\r2\b\u0010'\u001a\u0004\u0018\u00010\u00152\b\u0010(\u001a\u0004\u0018\u00010\u0015J\u0010\u0010)\u001a\u00020\r2\b\u0010*\u001a\u0004\u0018\u00010\u0015J\u0017\u0010+\u001a\u00020\r2\n\b\u0001\u0010\u000e\u001a\u0004\u0018\u00010\u0007¢\u0006\u0002\u0010\u000fJ\u0017\u0010,\u001a\u00020\r2\n\b\u0001\u0010\u000e\u001a\u0004\u0018\u00010\u0007¢\u0006\u0002\u0010\u000fJ)\u0010-\u001a\u00020\r2\b\u0010.\u001a\u0004\u0018\u00010/2\b\u00100\u001a\u0004\u0018\u0001012\b\u00102\u001a\u0004\u0018\u000101¢\u0006\u0002\u00103J\u000e\u00104\u001a\u00020\r2\u0006\u00105\u001a\u00020/R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u0004¢\u0006\u0002\n\u0000¨\u00066"}, d2 = {"Lcom/discord/chat/presentation/message/view/GuildInviteView;", "Landroidx/constraintlayout/widget/ConstraintLayout;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "defStyleAttr", "", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "binding", "Lcom/discord/chat/databinding/GuildInviteViewBinding;", "setBackgroundRectangleColor", "", ViewProps.COLOR, "(Ljava/lang/Integer;)V", "setInviteSplash", "url", "", "setHeaderText", "headerText", "", "setGuildBadge", "setHeaderColor", "(Ljava/lang/Integer;)Lkotlin/Unit;", "setTitleText", StackTraceHelper.NAME_KEY, "setTitleColor", "setGuildImage", "thumbnailText", "thumbnailBackgroundColor", "thumbnailCornerRadius", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;)V", "setSubtitle", "subtitle", "setSubtitleIcon", "subtitleIconUrl", "setSubtitleColor", "setPresence", "onlineText", "memberText", "setButtonText", "text", "setButtonTextColor", "setButtonBackgroundColor", "setClickListeners", "canBeAccepted", "", "tapEmbedListener", "Landroid/view/View$OnClickListener;", "tapAcceptListener", "(Ljava/lang/Boolean;Landroid/view/View$OnClickListener;Landroid/view/View$OnClickListener;)V", "setLoading", "loading", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nGuildInviteView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 GuildInviteView.kt\ncom/discord/chat/presentation/message/view/GuildInviteView\n+ 2 View.kt\nandroidx/core/view/ViewKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,179:1\n257#2,2:180\n257#2,2:182\n257#2,2:185\n257#2,2:187\n257#2,2:189\n257#2,2:191\n1#3:184\n*S KotlinDebug\n*F\n+ 1 GuildInviteView.kt\ncom/discord/chat/presentation/message/view/GuildInviteView\n*L\n80#1:180,2\n85#1:182,2\n133#1:185,2\n136#1:187,2\n140#1:189,2\n146#1:191,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class GuildInviteView extends ConstraintLayout {
    @NotNull
    private final GuildInviteViewBinding binding;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public GuildInviteView(@NotNull Context context) {
        this(context, null, 0, 6, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public final void setBackgroundRectangleColor(Integer num) {
        int colorCompat;
        if (num != null) {
            colorCompat = num.intValue();
        } else {
            Context context = getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            colorCompat = ColorUtilsKt.getColorCompat(context, ThemeManagerKt.getTheme().getColorRes(R.color.primary_100, R.color.primary_630));
        }
        ViewBackgroundUtilsKt.setBackgroundRectangle$default(this, colorCompat, SizeUtilsKt.getDpToPx(4), null, 0, 12, null);
    }

    public final void setButtonBackgroundColor(Integer num) {
        this.binding.itemInviteJoinedButton.setBackgroundColor(num);
    }

    public final void setButtonText(CharSequence charSequence) {
        boolean z10;
        DCDButton itemInviteJoinedButton = this.binding.itemInviteJoinedButton;
        Intrinsics.checkNotNullExpressionValue(itemInviteJoinedButton, "itemInviteJoinedButton");
        int i10 = 0;
        if (charSequence != null && !StringsKt.k0(charSequence)) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (z10) {
            i10 = 8;
        }
        itemInviteJoinedButton.setVisibility(i10);
        this.binding.itemInviteJoinedButton.setText(charSequence);
    }

    public final void setButtonTextColor(Integer num) {
        this.binding.itemInviteJoinedButton.setTextColor(num);
    }

    public final void setClickListeners(Boolean bool, View.OnClickListener onClickListener, View.OnClickListener onClickListener2) {
        ConstraintLayout itemBottomContainer = this.binding.itemBottomContainer;
        Intrinsics.checkNotNullExpressionValue(itemBottomContainer, "itemBottomContainer");
        NestedScrollOnTouchUtilsKt.setOnClickListenerNested(itemBottomContainer, true, onClickListener);
        DCDButton dCDButton = this.binding.itemInviteJoinedButton;
        if (Intrinsics.areEqual(bool, Boolean.TRUE)) {
            dCDButton.setOnClickButtonListener(onClickListener2);
        } else {
            dCDButton.setOnClickButtonListener(onClickListener);
        }
    }

    public final void setGuildBadge(String str) {
        SimpleDraweeView itemGuildBadge = this.binding.itemGuildBadge;
        Intrinsics.checkNotNullExpressionValue(itemGuildBadge, "itemGuildBadge");
        ReactAssetUtilsKt.setOptionalReactImageUrl(itemGuildBadge, str);
    }

    public final void setGuildImage(String str, String str2, Integer num, Integer num2) {
        GuildView.configure$default(this.binding.itemInviteImage, str, str2, num, num2, null, 16, null);
    }

    public final Unit setHeaderColor(Integer num) {
        if (num != null) {
            this.binding.itemInviteHeader.setTextColor(num.intValue());
            return Unit.f32008a;
        }
        return null;
    }

    public final void setHeaderText(CharSequence charSequence) {
        boolean z10;
        TextView itemInviteHeader = this.binding.itemInviteHeader;
        Intrinsics.checkNotNullExpressionValue(itemInviteHeader, "itemInviteHeader");
        int i10 = 0;
        if (charSequence != null && charSequence.length() != 0) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (z10) {
            i10 = 8;
        }
        itemInviteHeader.setVisibility(i10);
        this.binding.itemInviteHeader.setText(charSequence);
    }

    public final void setInviteSplash(String str) {
        boolean z10;
        SimpleDraweeView itemInviteSplash = this.binding.itemInviteSplash;
        Intrinsics.checkNotNullExpressionValue(itemInviteSplash, "itemInviteSplash");
        int i10 = 0;
        if (str != null && str.length() != 0) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (z10) {
            i10 = 8;
        }
        itemInviteSplash.setVisibility(i10);
        this.binding.itemInviteSplash.setImageURI(str);
    }

    public final void setLoading(boolean z10) {
        DCDButton.setLoading$default(this.binding.itemInviteJoinedButton, z10, false, 2, null);
    }

    public final void setPresence(CharSequence charSequence, CharSequence charSequence2) {
        boolean z10;
        int i10;
        boolean z11;
        int i11;
        ImageView itemInviteOnlineDot = this.binding.itemInviteOnlineDot;
        Intrinsics.checkNotNullExpressionValue(itemInviteOnlineDot, "itemInviteOnlineDot");
        boolean z12 = true;
        int i12 = 0;
        if (charSequence != null && !StringsKt.k0(charSequence)) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (!z10) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        itemInviteOnlineDot.setVisibility(i10);
        ImageView itemInviteOnlineDot2 = this.binding.itemInviteOnlineDot;
        Intrinsics.checkNotNullExpressionValue(itemInviteOnlineDot2, "itemInviteOnlineDot");
        ViewBackgroundUtilsKt.setBackgroundOval$default(itemInviteOnlineDot2, ColorUtilsKt.getColorCompat(this, R.color.green_360), 0, 2, null);
        this.binding.itemInviteOnlineText.setText(charSequence);
        ImageView itemInviteTotalMemberDot = this.binding.itemInviteTotalMemberDot;
        Intrinsics.checkNotNullExpressionValue(itemInviteTotalMemberDot, "itemInviteTotalMemberDot");
        if (charSequence2 != null && !StringsKt.k0(charSequence2)) {
            z11 = false;
        } else {
            z11 = true;
        }
        if (!z11) {
            i11 = 0;
        } else {
            i11 = 8;
        }
        itemInviteTotalMemberDot.setVisibility(i11);
        ImageView itemInviteTotalMemberDot2 = this.binding.itemInviteTotalMemberDot;
        Intrinsics.checkNotNullExpressionValue(itemInviteTotalMemberDot2, "itemInviteTotalMemberDot");
        ViewBackgroundUtilsKt.setBackgroundOval$default(itemInviteTotalMemberDot2, ColorUtilsKt.getColorCompat(this, R.color.primary_500), 0, 2, null);
        this.binding.itemInviteTotalMemberText.setText(charSequence2);
        LinearLayout itemInviteMemberContainer = this.binding.itemInviteMemberContainer;
        Intrinsics.checkNotNullExpressionValue(itemInviteMemberContainer, "itemInviteMemberContainer");
        if ((charSequence == null || StringsKt.k0(charSequence)) && (charSequence2 == null || StringsKt.k0(charSequence2))) {
            z12 = false;
        }
        if (!z12) {
            i12 = 8;
        }
        itemInviteMemberContainer.setVisibility(i12);
    }

    public final void setSubtitle(CharSequence charSequence) {
        TextView itemInviteSubtitle = this.binding.itemInviteSubtitle;
        Intrinsics.checkNotNullExpressionValue(itemInviteSubtitle, "itemInviteSubtitle");
        ViewUtilsKt.setOptionalText(itemInviteSubtitle, charSequence);
    }

    public final void setSubtitleColor(Integer num) {
        if (num != null) {
            this.binding.itemInviteSubtitle.setTextColor(num.intValue());
        }
        SimpleDraweeView itemInviteSubtitleIcon = this.binding.itemInviteSubtitleIcon;
        Intrinsics.checkNotNullExpressionValue(itemInviteSubtitleIcon, "itemInviteSubtitleIcon");
        ColorUtilsKt.setTintColor(itemInviteSubtitleIcon, num);
    }

    public final void setSubtitleIcon(String str) {
        SimpleDraweeView simpleDraweeView = this.binding.itemInviteSubtitleIcon;
        Intrinsics.checkNotNull(simpleDraweeView);
        ReactAssetUtilsKt.setOptionalReactImageUrl(simpleDraweeView, str);
    }

    public final Unit setTitleColor(Integer num) {
        if (num != null) {
            this.binding.itemInviteTitle.setTextColor(num.intValue());
            return Unit.f32008a;
        }
        return null;
    }

    public final void setTitleText(CharSequence charSequence) {
        this.binding.itemInviteTitle.setText(charSequence);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public GuildInviteView(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 4, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public /* synthetic */ GuildInviteView(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i11 & 2) != 0 ? null : attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public GuildInviteView(@NotNull Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Intrinsics.checkNotNullParameter(context, "context");
        GuildInviteViewBinding inflate = GuildInviteViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        TextView textView = inflate.itemInviteHeader;
        textView.setTextColor(ThemeManagerKt.getTheme().getInteractiveTextDefault());
        Intrinsics.checkNotNull(textView);
        SetTextSizeSpKt.setTextSizeSp(textView, 12.0f);
        DiscordFontUtilsKt.setDiscordFont(textView, DiscordFont.PrimaryBold);
        TextView textView2 = inflate.itemInviteTitle;
        textView2.setTextColor(ThemeManagerKt.getTheme().getMobileTextHeadingPrimary());
        Intrinsics.checkNotNull(textView2);
        SetTextSizeSpKt.setTextSizeSp(textView2, 16.0f);
        DiscordFont discordFont = DiscordFont.PrimarySemibold;
        DiscordFontUtilsKt.setDiscordFont(textView2, discordFont);
        TextView textView3 = inflate.itemInviteSubtitle;
        textView3.setTextColor(ThemeManagerKt.getTheme().getInteractiveTextDefault());
        Intrinsics.checkNotNull(textView3);
        DiscordFont discordFont2 = DiscordFont.PrimaryMedium;
        DiscordFontUtilsKt.setDiscordFont(textView3, discordFont2);
        TextView textView4 = inflate.itemInviteOnlineText;
        textView4.setTextColor(ThemeManagerKt.getTheme().getInteractiveTextDefault());
        Intrinsics.checkNotNull(textView4);
        SetTextSizeSpKt.setTextSizeSp(textView4, 12.0f);
        DiscordFontUtilsKt.setDiscordFont(textView4, discordFont);
        TextView textView5 = inflate.itemInviteTotalMemberText;
        textView5.setTextColor(ThemeManagerKt.getTheme().getInteractiveTextDefault());
        Intrinsics.checkNotNull(textView5);
        SetTextSizeSpKt.setTextSizeSp(textView5, 12.0f);
        DiscordFontUtilsKt.setDiscordFont(textView5, discordFont);
        TextView textView6 = inflate.itemInviteHubLink;
        textView6.setTextColor(ThemeManagerKt.getTheme().getInteractiveTextDefault());
        Intrinsics.checkNotNull(textView6);
        DiscordFontUtilsKt.setDiscordFont(textView6, discordFont2);
        inflate.itemInviteJoinedButton.setBackgroundColor(ColorUtilsKt.getColorCompat(context, R.color.brand));
    }
}
