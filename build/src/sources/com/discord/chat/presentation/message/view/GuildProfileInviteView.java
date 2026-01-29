package com.discord.chat.presentation.message.view;

import android.content.Context;
import android.graphics.drawable.GradientDrawable;
import android.text.TextUtils;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.SetTextSizeSpKt;
import com.discord.chat.bridge.codedlinks.InviteRole;
import com.discord.chat.databinding.GuildProfileInviteViewBinding;
import com.discord.core.DCDButton;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.misc.utilities.view.ViewBackgroundUtilsKt;
import com.discord.misc.utilities.view.ViewClippingUtilsKt;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchUtilsKt;
import com.discord.theme.ThemeManagerKt;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.drawee.generic.GenericDraweeHierarchy;
import com.facebook.drawee.view.SimpleDraweeView;
import com.facebook.react.uimanager.ViewProps;
import com.google.android.flexbox.FlexboxLayoutManager;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\\\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\r\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0011\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\u00020\u0001B'\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tJ\u0010\u0010\u000e\u001a\u00020\u000f2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0011J,\u0010\u0012\u001a\u00020\u000f2\b\u0010\u0013\u001a\u0004\u0018\u00010\u00142\b\b\u0001\u0010\u0015\u001a\u00020\u00072\b\b\u0001\u0010\u0016\u001a\u00020\u00072\u0006\u0010\u0017\u001a\u00020\u0018J\u0010\u0010\u0019\u001a\u00020\u000f2\b\u0010\u001a\u001a\u0004\u0018\u00010\u0011J\u0010\u0010\u001b\u001a\u00020\u000f2\b\u0010\u0013\u001a\u0004\u0018\u00010\u0014J\u0018\u0010\u001c\u001a\u00020\u000f2\b\u0010\u001d\u001a\u0004\u0018\u00010\u00112\u0006\u0010\u001e\u001a\u00020\u0018J!\u0010\u001f\u001a\u00020\u000f2\b\u0010 \u001a\u0004\u0018\u00010\u00112\n\b\u0001\u0010!\u001a\u0004\u0018\u00010\u0007¢\u0006\u0002\u0010\"J\u0010\u0010#\u001a\u00020\u000f2\b\u0010$\u001a\u0004\u0018\u00010\u0011J\u001a\u0010%\u001a\u00020\u000f2\b\u0010&\u001a\u0004\u0018\u00010\u00112\b\u0010'\u001a\u0004\u0018\u00010\u0011J\u001a\u0010(\u001a\u00020\u000f2\b\u0010)\u001a\u0004\u0018\u00010*2\b\u0010+\u001a\u0004\u0018\u00010*J\u001a\u0010,\u001a\u00020\u000f2\b\u0010\u0013\u001a\u0004\u0018\u00010\u00142\b\u0010-\u001a\u0004\u0018\u00010\u0014J \u0010.\u001a\u00020\u000f2\u000e\u0010/\u001a\n\u0012\u0004\u0012\u000201\u0018\u0001002\b\u00102\u001a\u0004\u0018\u00010\u0014R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0082\u0004¢\u0006\u0002\n\u0000¨\u00063"}, d2 = {"Lcom/discord/chat/presentation/message/view/GuildProfileInviteView;", "Landroidx/constraintlayout/widget/ConstraintLayout;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "defStyleAttr", "", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "binding", "Lcom/discord/chat/databinding/GuildProfileInviteViewBinding;", "rolesAdapter", "Lcom/discord/chat/presentation/message/view/GuildProfileInviteRoleAdapter;", "setHeader", "", "headerText", "", "setBanner", "url", "", ViewProps.COLOR, "secondaryColor", "roundTop", "", "setTitle", "titleText", "setGuildBadge", "setBody", "bodyText", "hasProfileOverflow", "setAcceptButton", "text", ViewProps.BACKGROUND_COLOR, "(Ljava/lang/CharSequence;Ljava/lang/Integer;)V", "setEstablished", "establishedText", "setPresence", "onlineText", "memberText", "setClickListeners", "tapEmbedListener", "Landroid/view/View$OnClickListener;", "tapAcceptListener", "setAvatar", "thumbnailText", "setRoles", "roles", "", "Lcom/discord/chat/bridge/codedlinks/InviteRole;", "rolesHeadingText", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nGuildProfileInviteView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 GuildProfileInviteView.kt\ncom/discord/chat/presentation/message/view/GuildProfileInviteView\n+ 2 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,243:1\n257#2,2:244\n257#2,2:246\n257#2,2:248\n67#2,4:250\n37#2,2:254\n55#2:256\n72#2:257\n257#2,2:258\n257#2,2:260\n257#2,2:262\n257#2,2:264\n257#2,2:266\n257#2,2:268\n257#2,2:270\n257#2,2:272\n257#2,2:274\n257#2,2:276\n*S KotlinDebug\n*F\n+ 1 GuildProfileInviteView.kt\ncom/discord/chat/presentation/message/view/GuildProfileInviteView\n*L\n119#1:244,2\n149#1:246,2\n160#1:248,2\n171#1:250,4\n171#1:254,2\n171#1:256\n171#1:257\n188#1:258,2\n196#1:260,2\n202#1:262,2\n203#1:264,2\n205#1:266,2\n206#1:268,2\n233#1:270,2\n234#1:272,2\n238#1:274,2\n239#1:276,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class GuildProfileInviteView extends ConstraintLayout {
    @NotNull
    private final GuildProfileInviteViewBinding binding;
    @NotNull
    private final GuildProfileInviteRoleAdapter rolesAdapter;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public GuildProfileInviteView(@NotNull Context context) {
        this(context, null, 0, 6, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public final void setAcceptButton(CharSequence charSequence, Integer num) {
        boolean z10;
        int controlPrimaryBackgroundDefault;
        DCDButton dCDButton = this.binding.acceptButton;
        Intrinsics.checkNotNull(dCDButton);
        int i10 = 0;
        if (charSequence != null && !StringsKt.k0(charSequence)) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (z10) {
            i10 = 8;
        }
        dCDButton.setVisibility(i10);
        if (num != null) {
            controlPrimaryBackgroundDefault = num.intValue();
        } else {
            controlPrimaryBackgroundDefault = ThemeManagerKt.getTheme().getControlPrimaryBackgroundDefault();
        }
        dCDButton.setBackgroundColor(controlPrimaryBackgroundDefault);
        dCDButton.setText(charSequence);
    }

    public final void setAvatar(String str, String str2) {
        this.binding.avatar.configure(str, str2, Integer.valueOf(ThemeManagerKt.getTheme().getBackgroundBaseLow()), 16, Integer.valueOf(ThemeManagerKt.getTheme().getMobileTextHeadingPrimary()));
    }

    public final void setBanner(String str, int i10, int i11, boolean z10) {
        float f10;
        if (z10) {
            f10 = SizeUtilsKt.getDpToPx(16);
        } else {
            f10 = 0.0f;
        }
        SimpleDraweeView simpleDraweeView = this.binding.itemInviteSplash;
        ((GenericDraweeHierarchy) simpleDraweeView.getHierarchy()).D(com.facebook.drawee.generic.a.b(f10, f10, 0.0f, 0.0f));
        simpleDraweeView.setImageURI(str);
        if (str == null) {
            Intrinsics.checkNotNull(simpleDraweeView);
            ViewBackgroundUtilsKt.setBackgroundRectangle$default(simpleDraweeView, new int[]{i10, i11}, GradientDrawable.Orientation.TL_BR, f10, f10, 0.0f, 0.0f, null, 0, 240, null);
            return;
        }
        simpleDraweeView.setBackground(null);
    }

    public final void setBody(CharSequence charSequence, boolean z10) {
        boolean z11;
        int i10;
        final TextView textView = this.binding.bodyText;
        Intrinsics.checkNotNull(textView);
        int i11 = 0;
        if (charSequence != null && charSequence.length() != 0) {
            z11 = false;
        } else {
            z11 = true;
        }
        if (!z11) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        textView.setVisibility(i10);
        textView.setText(charSequence);
        if (charSequence != null && charSequence.length() != 0) {
            if (z10) {
                this.binding.overlayGradient.setVisibility(0);
                return;
            } else if (textView.isLaidOut() && !textView.isLayoutRequested()) {
                View view = this.binding.overlayGradient;
                if (textView.getLayout() == null || textView.getLayout().getLineCount() <= 0 || textView.getLayout().getEllipsisCount(textView.getLayout().getLineCount() - 1) <= 0) {
                    i11 = 4;
                }
                view.setVisibility(i11);
                return;
            } else {
                textView.addOnLayoutChangeListener(new View.OnLayoutChangeListener() { // from class: com.discord.chat.presentation.message.view.GuildProfileInviteView$setBody$lambda$15$$inlined$doOnLayout$1
                    @Override // android.view.View.OnLayoutChangeListener
                    public void onLayoutChange(View view2, int i12, int i13, int i14, int i15, int i16, int i17, int i18, int i19) {
                        int i20;
                        view2.removeOnLayoutChangeListener(this);
                        View view3 = GuildProfileInviteView.this.binding.overlayGradient;
                        if (textView.getLayout() != null && textView.getLayout().getLineCount() > 0 && textView.getLayout().getEllipsisCount(textView.getLayout().getLineCount() - 1) > 0) {
                            i20 = 0;
                        } else {
                            i20 = 4;
                        }
                        view3.setVisibility(i20);
                    }
                });
                return;
            }
        }
        this.binding.overlayGradient.setVisibility(4);
    }

    public final void setClickListeners(View.OnClickListener onClickListener, View.OnClickListener onClickListener2) {
        NestedScrollOnTouchUtilsKt.setOnClickListenerNested(this, true, onClickListener);
        this.binding.acceptButton.setOnClickButtonListener(onClickListener2);
    }

    public final void setEstablished(CharSequence charSequence) {
        boolean z10;
        TextView textView = this.binding.establishedText;
        Intrinsics.checkNotNull(textView);
        int i10 = 0;
        if (charSequence != null && charSequence.length() != 0) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (z10) {
            i10 = 8;
        }
        textView.setVisibility(i10);
        textView.setText(charSequence);
    }

    public final void setGuildBadge(String str) {
        SimpleDraweeView guildBadge = this.binding.guildBadge;
        Intrinsics.checkNotNullExpressionValue(guildBadge, "guildBadge");
        ReactAssetUtilsKt.setOptionalReactImageUrl(guildBadge, str);
    }

    public final void setHeader(CharSequence charSequence) {
        boolean z10;
        TextView textView = this.binding.headerText;
        Intrinsics.checkNotNull(textView);
        int i10 = 0;
        if (charSequence != null && charSequence.length() != 0) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (z10) {
            i10 = 8;
        }
        textView.setVisibility(i10);
        textView.setText(charSequence);
    }

    public final void setPresence(CharSequence charSequence, CharSequence charSequence2) {
        boolean z10;
        int i10;
        boolean z11;
        int i11;
        boolean z12;
        int i12;
        ImageView itemInviteOnlineDot = this.binding.itemInviteOnlineDot;
        Intrinsics.checkNotNullExpressionValue(itemInviteOnlineDot, "itemInviteOnlineDot");
        boolean z13 = true;
        int i13 = 0;
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
        TextView itemInviteOnlineText = this.binding.itemInviteOnlineText;
        Intrinsics.checkNotNullExpressionValue(itemInviteOnlineText, "itemInviteOnlineText");
        if (charSequence != null && !StringsKt.k0(charSequence)) {
            z11 = false;
        } else {
            z11 = true;
        }
        if (!z11) {
            i11 = 0;
        } else {
            i11 = 8;
        }
        itemInviteOnlineText.setVisibility(i11);
        this.binding.itemInviteOnlineText.setText(charSequence);
        ImageView itemInviteTotalMemberDot = this.binding.itemInviteTotalMemberDot;
        Intrinsics.checkNotNullExpressionValue(itemInviteTotalMemberDot, "itemInviteTotalMemberDot");
        if (charSequence2 != null && !StringsKt.k0(charSequence2)) {
            z12 = false;
        } else {
            z12 = true;
        }
        if (!z12) {
            i12 = 0;
        } else {
            i12 = 8;
        }
        itemInviteTotalMemberDot.setVisibility(i12);
        TextView itemInviteTotalMemberText = this.binding.itemInviteTotalMemberText;
        Intrinsics.checkNotNullExpressionValue(itemInviteTotalMemberText, "itemInviteTotalMemberText");
        if (charSequence2 != null && !StringsKt.k0(charSequence2)) {
            z13 = false;
        }
        if (z13) {
            i13 = 8;
        }
        itemInviteTotalMemberText.setVisibility(i13);
        this.binding.itemInviteTotalMemberText.setText(charSequence2);
    }

    public final void setRoles(List<InviteRole> list, String str) {
        List<InviteRole> list2 = list;
        if (list2 != null && !list2.isEmpty()) {
            TextView rolesHeadingText = this.binding.rolesHeadingText;
            Intrinsics.checkNotNullExpressionValue(rolesHeadingText, "rolesHeadingText");
            rolesHeadingText.setVisibility(0);
            RecyclerView rolesContainer = this.binding.rolesContainer;
            Intrinsics.checkNotNullExpressionValue(rolesContainer, "rolesContainer");
            rolesContainer.setVisibility(0);
            this.binding.rolesHeadingText.setText(str);
            this.rolesAdapter.setRoles(list);
            return;
        }
        TextView rolesHeadingText2 = this.binding.rolesHeadingText;
        Intrinsics.checkNotNullExpressionValue(rolesHeadingText2, "rolesHeadingText");
        rolesHeadingText2.setVisibility(8);
        RecyclerView rolesContainer2 = this.binding.rolesContainer;
        Intrinsics.checkNotNullExpressionValue(rolesContainer2, "rolesContainer");
        rolesContainer2.setVisibility(8);
    }

    public final void setTitle(CharSequence charSequence) {
        boolean z10;
        TextView textView = this.binding.titleText;
        Intrinsics.checkNotNull(textView);
        int i10 = 0;
        if (charSequence != null && charSequence.length() != 0) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (z10) {
            i10 = 8;
        }
        textView.setVisibility(i10);
        textView.setText(charSequence);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public GuildProfileInviteView(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 4, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public /* synthetic */ GuildProfileInviteView(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i11 & 2) != 0 ? null : attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public GuildProfileInviteView(@NotNull Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Intrinsics.checkNotNullParameter(context, "context");
        GuildProfileInviteViewBinding inflate = GuildProfileInviteViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        GuildProfileInviteRoleAdapter guildProfileInviteRoleAdapter = new GuildProfileInviteRoleAdapter();
        this.rolesAdapter = guildProfileInviteRoleAdapter;
        setMaxWidth(SizeUtilsKt.getDpToPx(375));
        ViewBackgroundUtilsKt.setBackgroundRectangle(this, ThemeManagerKt.getTheme().getBackgroundSurfaceHigh(), SizeUtilsKt.getDpToPx(16), Integer.valueOf(ThemeManagerKt.getTheme().getBorderSubtle()), SizeUtilsKt.getDpToPx(1));
        TextView textView = inflate.headerText;
        textView.setTextColor(ThemeManagerKt.getTheme().getTextSubtle());
        Intrinsics.checkNotNull(textView);
        SetTextSizeSpKt.setTextSizeSp(textView, 14.0f);
        DiscordFont discordFont = DiscordFont.PrimarySemibold;
        DiscordFontUtilsKt.setDiscordFont(textView, discordFont);
        TextView textView2 = inflate.titleText;
        textView2.setTextColor(ThemeManagerKt.getTheme().getMobileTextHeadingPrimary());
        Intrinsics.checkNotNull(textView2);
        SetTextSizeSpKt.setTextSizeSp(textView2, 16.0f);
        DiscordFontUtilsKt.setDiscordFont(textView2, discordFont);
        TextView textView3 = inflate.itemInviteOnlineText;
        textView3.setTextColor(ThemeManagerKt.getTheme().getTextSubtle());
        Intrinsics.checkNotNull(textView3);
        SetTextSizeSpKt.setTextSizeSp(textView3, 14.0f);
        DiscordFont discordFont2 = DiscordFont.PrimaryMedium;
        DiscordFontUtilsKt.setDiscordFont(textView3, discordFont2);
        TextView textView4 = inflate.itemInviteTotalMemberText;
        textView4.setTextColor(ThemeManagerKt.getTheme().getTextSubtle());
        Intrinsics.checkNotNull(textView4);
        SetTextSizeSpKt.setTextSizeSp(textView4, 14.0f);
        DiscordFontUtilsKt.setDiscordFont(textView4, discordFont2);
        TextView textView5 = inflate.establishedText;
        textView5.setTextColor(ThemeManagerKt.getTheme().getTextMuted());
        Intrinsics.checkNotNull(textView5);
        SetTextSizeSpKt.setTextSizeSp(textView5, 14.0f);
        DiscordFontUtilsKt.setDiscordFont(textView5, discordFont2);
        TextView textView6 = inflate.bodyText;
        textView6.setTextColor(ThemeManagerKt.getTheme().getTextSubtle());
        Intrinsics.checkNotNull(textView6);
        SetTextSizeSpKt.setTextSizeSp(textView6, 14.0f);
        DiscordFontUtilsKt.setDiscordFont(textView6, discordFont2);
        DCDButton dCDButton = inflate.acceptButton;
        dCDButton.setMaxLines(1);
        dCDButton.ellipsize(TextUtils.TruncateAt.END);
        dCDButton.setTextSizeSp(14.0f);
        dCDButton.setDiscordFont(discordFont);
        dCDButton.setCornerRadius(SizeUtilsKt.getDpToPx(20));
        dCDButton.setTextColor(Integer.valueOf(ThemeManagerKt.getTheme().getWhite()));
        FrameLayout frameLayout = inflate.avatarContainer;
        frameLayout.setBackgroundColor(ThemeManagerKt.getTheme().getBackgroundSurfaceHigh());
        Intrinsics.checkNotNull(frameLayout);
        ViewClippingUtilsKt.clipToRoundedRectangle(frameLayout, SizeUtilsKt.getDpToPx(16));
        View overlayGradient = inflate.overlayGradient;
        Intrinsics.checkNotNullExpressionValue(overlayGradient, "overlayGradient");
        ViewBackgroundUtilsKt.setBackgroundRectangle$default(overlayGradient, new int[]{ColorUtilsKt.argbWithAdjustedAlpha(ThemeManagerKt.getTheme().getBackgroundSurfaceHigh(), 0.9f), 0}, GradientDrawable.Orientation.BOTTOM_TOP, 0.0f, 0.0f, 0.0f, 0.0f, null, 0, 252, null);
        ImageView itemInviteOnlineDot = inflate.itemInviteOnlineDot;
        Intrinsics.checkNotNullExpressionValue(itemInviteOnlineDot, "itemInviteOnlineDot");
        ViewBackgroundUtilsKt.setBackgroundOval$default(itemInviteOnlineDot, ThemeManagerKt.getTheme().getStatusPositive(), 0, 2, null);
        ImageView itemInviteTotalMemberDot = inflate.itemInviteTotalMemberDot;
        Intrinsics.checkNotNullExpressionValue(itemInviteTotalMemberDot, "itemInviteTotalMemberDot");
        ViewBackgroundUtilsKt.setBackgroundOval$default(itemInviteTotalMemberDot, ThemeManagerKt.getTheme().getBackgroundModMuted(), 0, 2, null);
        TextView textView7 = inflate.rolesHeadingText;
        textView7.setTextColor(ThemeManagerKt.getTheme().getTextDefault());
        Intrinsics.checkNotNull(textView7);
        SetTextSizeSpKt.setTextSizeSp(textView7, 14.0f);
        DiscordFontUtilsKt.setDiscordFont(textView7, discordFont);
        RecyclerView recyclerView = inflate.rolesContainer;
        recyclerView.setLayoutManager(new FlexboxLayoutManager(context));
        recyclerView.setAdapter(guildProfileInviteRoleAdapter);
        recyclerView.setItemAnimator(null);
    }
}
