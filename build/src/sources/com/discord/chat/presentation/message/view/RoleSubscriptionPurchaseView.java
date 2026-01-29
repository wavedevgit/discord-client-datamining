package com.discord.chat.presentation.message.view;

import android.content.Context;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.discord.SetTextSizeSpKt;
import com.discord.chat.databinding.RoleSubscriptionPurchaseViewBinding;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.misc.utilities.view.ViewClippingUtilsKt;
import com.discord.react_asset_fetcher.ReactAsset;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.discord.react_strings.I18nMessage;
import com.discord.react_strings.I18nUtilsKt;
import com.discord.theme.ThemeManagerKt;
import com.facebook.drawee.view.SimpleDraweeView;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\u0018\u00002\u00020\u0001B'\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tJ\"\u0010\f\u001a\u00020\r2\b\u0010\u000e\u001a\u0004\u0018\u00010\u000f2\b\u0010\u0010\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\u0011\u001a\u00020\u0007R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0012"}, d2 = {"Lcom/discord/chat/presentation/message/view/RoleSubscriptionPurchaseView;", "Landroidx/constraintlayout/widget/ConstraintLayout;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "defStyleAttr", "", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "binding", "Lcom/discord/chat/databinding/RoleSubscriptionPurchaseViewBinding;", "configure", "", "authorUsername", "", "authorAvatar", "widthPx", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class RoleSubscriptionPurchaseView extends ConstraintLayout {
    @NotNull
    private final RoleSubscriptionPurchaseViewBinding binding;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public RoleSubscriptionPurchaseView(@NotNull Context context) {
        this(context, null, 0, 6, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public final void configure(String str, String str2, int i10) {
        this.binding.roleSubscriptionPurchaserUsername.setText(str);
        this.binding.roleSubscriptionPurchaserAvatar.setImageURI(str2);
        ViewGroup.LayoutParams layoutParams = this.binding.roleSubscriptionPurchaseCardBg.getLayoutParams();
        layoutParams.width = i10;
        double d10 = i10;
        layoutParams.height = (int) (0.339d * d10);
        ViewGroup.LayoutParams layoutParams2 = this.binding.roleSubscriptionPurchaseBadge.getLayoutParams();
        int i11 = (int) (0.21d * d10);
        layoutParams2.width = i11;
        layoutParams2.height = (int) (i11 * 1.37d);
        ViewGroup.LayoutParams layoutParams3 = this.binding.roleSubscriptionPurchaseLanyard.getLayoutParams();
        int i12 = (int) (d10 * 0.18d);
        layoutParams3.width = i12;
        layoutParams3.height = (int) (i12 * 2.327d);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public RoleSubscriptionPurchaseView(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 4, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public /* synthetic */ RoleSubscriptionPurchaseView(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i11 & 2) != 0 ? null : attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public RoleSubscriptionPurchaseView(@NotNull Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Intrinsics.checkNotNullParameter(context, "context");
        RoleSubscriptionPurchaseViewBinding inflate = RoleSubscriptionPurchaseViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        TextView textView = inflate.roleSubscriptionWelcome;
        Intrinsics.checkNotNull(textView);
        DiscordFontUtilsKt.setDiscordFont(textView, DiscordFont.PrimaryMedium);
        SetTextSizeSpKt.setTextSizeSp(textView, 16.0f);
        textView.setTextColor(ThemeManagerKt.getTheme().getStatusPositiveText());
        TextView textView2 = inflate.roleSubscriptionPurchaserUsername;
        Intrinsics.checkNotNull(textView2);
        DiscordFontUtilsKt.setDiscordFont(textView2, DiscordFont.PrimaryExtraBold);
        SetTextSizeSpKt.setTextSizeSp(textView2, 20.0f);
        textView2.setTextColor(ThemeManagerKt.getTheme().getStatusPositiveText());
        SimpleDraweeView roleSubscriptionPurchaseBadge = inflate.roleSubscriptionPurchaseBadge;
        Intrinsics.checkNotNullExpressionValue(roleSubscriptionPurchaseBadge, "roleSubscriptionPurchaseBadge");
        ReactAssetUtilsKt.setReactAsset(roleSubscriptionPurchaseBadge, ReactAsset.RoleSubscriptionBadge);
        SimpleDraweeView roleSubscriptionPurchaseLanyard = inflate.roleSubscriptionPurchaseLanyard;
        Intrinsics.checkNotNullExpressionValue(roleSubscriptionPurchaseLanyard, "roleSubscriptionPurchaseLanyard");
        ReactAssetUtilsKt.setReactAsset(roleSubscriptionPurchaseLanyard, ReactAsset.RoleSubscriptionLanyard);
        SimpleDraweeView roleSubscriptionPurchaseCardBg = inflate.roleSubscriptionPurchaseCardBg;
        Intrinsics.checkNotNullExpressionValue(roleSubscriptionPurchaseCardBg, "roleSubscriptionPurchaseCardBg");
        ReactAssetUtilsKt.setReactAsset(roleSubscriptionPurchaseCardBg, ReactAsset.RoleSubscriptionPurchaseCardBg);
        SimpleDraweeView roleSubscriptionPurchaserAvatar = inflate.roleSubscriptionPurchaserAvatar;
        Intrinsics.checkNotNullExpressionValue(roleSubscriptionPurchaserAvatar, "roleSubscriptionPurchaserAvatar");
        ViewClippingUtilsKt.clipToCircle(roleSubscriptionPurchaserAvatar);
        inflate.roleSubscriptionWelcome.setText(I18nUtilsKt.i18nFormat$default(context, I18nMessage.ROLE_SUBSCRIPTION_WELCOME_LABEL, null, 2, null));
    }
}
