package com.discord.chat.presentation.message;

import android.content.Context;
import android.graphics.Paint;
import android.graphics.Rect;
import android.os.Bundle;
import android.text.SpannableStringBuilder;
import android.text.TextPaint;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import com.discord.SetTextSizeSpKt;
import com.discord.channel_spine.ChannelSpineView;
import com.discord.chat.R;
import com.discord.chat.bridge.Message;
import com.discord.chat.bridge.MessageKt;
import com.discord.chat.bridge.contentnode.CommandMentionContentNode;
import com.discord.chat.bridge.contentnode.LinkContentNode;
import com.discord.chat.bridge.contentnode.LinkContextData;
import com.discord.chat.bridge.executedcommand.ExecutedCommand;
import com.discord.chat.bridge.executedcommand.ExecutedCommandBackgroundStyles;
import com.discord.chat.bridge.referencedmessage.LoadedReferencedMessage;
import com.discord.chat.bridge.referencedmessage.ReferencedMessage;
import com.discord.chat.bridge.referencedmessage.SystemReferencedMessage;
import com.discord.chat.bridge.rolecolors.RoleColors;
import com.discord.chat.bridge.rolecolors.RoleColorsKt;
import com.discord.chat.bridge.structurabletext.AnnotatedStructurableText;
import com.discord.chat.bridge.structurabletext.StructurableText;
import com.discord.chat.databinding.MessageViewReplyPreviewBinding;
import com.discord.chat.presentation.events.ChatEventHandler;
import com.discord.chat.presentation.message.utils.DisplayNameStylesUtils;
import com.discord.chat.presentation.message.utils.ReplyUtilsKt;
import com.discord.chat.presentation.message.view.MessageContentView;
import com.discord.chat.presentation.spine.SpineParentMessage;
import com.discord.chat.presentation.textutils.LinkBackgroundStyle;
import com.discord.chat.presentation.textutils.LinkStyle;
import com.discord.chat.presentation.textutils.TextUtilsKt;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.misc.utilities.measure.ViewMeasureExtensionsKt;
import com.discord.misc.utilities.view.ViewBackgroundUtilsKt;
import com.discord.misc.utilities.view.ViewClippingUtilsKt;
import com.discord.react_asset_fetcher.ReactAsset;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchUtilsKt;
import com.discord.react_strings.I18nMessage;
import com.discord.react_strings.I18nUtilsKt;
import com.discord.span.utilities.BackgroundSpanDrawer;
import com.discord.span.utilities.SpannableExtensionsKt;
import com.discord.theme.ThemeManagerKt;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.drawee.span.DraweeSpanStringBuilder;
import com.facebook.drawee.view.SimpleDraweeView;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000h\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0004\u0018\u00002\u00020\u00012\u00020\u0002B\u001d\b\u0007\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0006¢\u0006\u0004\b\u0007\u0010\bJ\u0010\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u0014H\u0002J\u0010\u0010\u0015\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u0014H\u0002J\u0010\u0010\u0016\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u0014H\u0002J\b\u0010\u0017\u001a\u00020\u0012H\u0002J&\u0010\u0018\u001a\u00020\u00122\u0006\u0010\u0019\u001a\u00020\u001a2\b\b\u0002\u0010\u001b\u001a\u00020\u001c2\f\u0010\u001d\u001a\b\u0012\u0004\u0012\u00020\u00120\u001eJE\u0010\u001f\u001a\u00020\u00122\u0006\u0010 \u001a\u00020!2\u0006\u0010\"\u001a\u00020#2\u0006\u0010$\u001a\u00020\u001c2\u0006\u0010%\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u001c2\u0006\u0010'\u001a\u00020\u001c2\u0006\u0010(\u001a\u00020)¢\u0006\u0004\b*\u0010+J\u0006\u0010,\u001a\u00020\u0012R\u000e\u0010\t\u001a\u00020\nX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\fX\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\r\u001a\u00020\u000e8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u000f\u0010\u0010¨\u0006-"}, d2 = {"Lcom/discord/chat/presentation/message/MessageViewReplyPreview;", "Landroidx/constraintlayout/widget/ConstraintLayout;", "Lcom/discord/chat/presentation/spine/SpineParentMessage;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "binding", "Lcom/discord/chat/databinding/MessageViewReplyPreviewBinding;", "replyTextLineBounds", "Landroid/graphics/Rect;", "spineOriginView", "Landroid/view/View;", "getSpineOriginView", "()Landroid/view/View;", "configureLeadingIcon", "", "message", "Lcom/discord/chat/bridge/Message;", "configureTrailingIcon", "configureClanTagChiplet", "measureAndSetReplyLeadingViewsHeight", "configureReply", "reply", "Lcom/discord/chat/bridge/referencedmessage/ReferencedMessage;", "showSpine", "", ViewProps.ON_CLICK, "Lkotlin/Function0;", "configureExecutedCommand", "messageId", "Lcom/discord/primitives/MessageId;", "executedCommand", "Lcom/discord/chat/bridge/executedcommand/ExecutedCommand;", "shouldAnimateEmoji", "shouldShowLinkDecorations", "shouldShowRoleDot", "shouldShowRoleOnName", "eventHandler", "Lcom/discord/chat/presentation/events/ChatEventHandler;", "configureExecutedCommand-dB0-bEw", "(Ljava/lang/String;Lcom/discord/chat/bridge/executedcommand/ExecutedCommand;ZZZZLcom/discord/chat/presentation/events/ChatEventHandler;)V", "clear", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nMessageViewReplyPreview.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MessageViewReplyPreview.kt\ncom/discord/chat/presentation/message/MessageViewReplyPreview\n+ 2 View.kt\nandroidx/core/view/ViewKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,433:1\n327#2,4:434\n255#2:439\n257#2,2:440\n257#2,2:442\n257#2,2:444\n257#2,2:446\n311#2:448\n327#2,4:449\n312#2:453\n257#2,2:454\n257#2,2:456\n257#2,2:458\n257#2,2:460\n257#2,2:462\n257#2,2:464\n257#2,2:466\n257#2,2:468\n257#2,2:470\n257#2,2:472\n257#2,2:474\n257#2,2:476\n257#2,2:478\n257#2,2:480\n257#2,2:482\n257#2,2:484\n257#2,2:486\n257#2,2:488\n257#2,2:490\n37#2,2:492\n55#2:494\n257#2,2:495\n257#2,2:497\n257#2,2:499\n257#2,2:501\n257#2,2:503\n257#2,2:505\n257#2,2:507\n257#2,2:509\n257#2,2:511\n257#2,2:513\n257#2,2:515\n257#2,2:517\n257#2,2:519\n1#3:438\n*S KotlinDebug\n*F\n+ 1 MessageViewReplyPreview.kt\ncom/discord/chat/presentation/message/MessageViewReplyPreview\n*L\n103#1:434,4\n71#1:439\n119#1:440,2\n133#1:442,2\n139#1:444,2\n141#1:446,2\n158#1:448\n158#1:449,4\n158#1:453\n181#1:454,2\n182#1:456,2\n183#1:458,2\n186#1:460,2\n192#1:462,2\n198#1:464,2\n200#1:466,2\n202#1:468,2\n213#1:470,2\n214#1:472,2\n215#1:474,2\n261#1:476,2\n262#1:478,2\n263#1:480,2\n265#1:482,2\n266#1:484,2\n268#1:486,2\n275#1:488,2\n276#1:490,2\n284#1:492,2\n284#1:494\n348#1:495,2\n349#1:497,2\n351#1:499,2\n352#1:501,2\n353#1:503,2\n359#1:505,2\n360#1:507,2\n361#1:509,2\n426#1:511,2\n427#1:513,2\n428#1:515,2\n429#1:517,2\n430#1:519,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MessageViewReplyPreview extends ConstraintLayout implements SpineParentMessage {
    @NotNull
    private final MessageViewReplyPreviewBinding binding;
    @NotNull
    private final Rect replyTextLineBounds;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public MessageViewReplyPreview(@NotNull Context context) {
        this(context, null, 2, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    private final void configureClanTagChiplet(Message message) {
        if (message.getClanTag() != null && message.m235getClanTagGuildIdqOKuAAo() != null) {
            this.binding.tagChiplet.m502configureD0ylKIU(message.getClanTag(), message.getClanBadgeUrl(), message.m235getClanTagGuildIdqOKuAAo().m1080unboximpl(), null, 0.89f);
            ClanTagChipletView tagChiplet = this.binding.tagChiplet;
            Intrinsics.checkNotNullExpressionValue(tagChiplet, "tagChiplet");
            tagChiplet.setVisibility(0);
            return;
        }
        ClanTagChipletView tagChiplet2 = this.binding.tagChiplet;
        Intrinsics.checkNotNullExpressionValue(tagChiplet2, "tagChiplet");
        tagChiplet2.setVisibility(8);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void configureExecutedCommand_dB0_bEw$lambda$10(ChatEventHandler chatEventHandler, String str, ExecutedCommand executedCommand, View view) {
        chatEventHandler.mo448onTapAvatarx5gers8(str, executedCommand.m395getUserIdre6GcUE());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit configureExecutedCommand_dB0_bEw$lambda$11(ChatEventHandler chatEventHandler, String str, LinkContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        chatEventHandler.mo437onLinkClickedntcYbpo(str, it);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit configureExecutedCommand_dB0_bEw$lambda$12(ChatEventHandler chatEventHandler, CommandMentionContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        chatEventHandler.onTapCommand(it);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit configureExecutedCommand_dB0_bEw$lambda$13(ChatEventHandler chatEventHandler, CommandMentionContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        chatEventHandler.onLongPressCommand(it);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final LinkStyle configureExecutedCommand_dB0_bEw$lambda$14(ExecutedCommand executedCommand, LinkContentNode it) {
        Integer num;
        Integer num2;
        Boolean bool;
        int textLink;
        Intrinsics.checkNotNullParameter(it, "it");
        LinkContextData target = it.getTarget();
        if (target instanceof LinkContextData.BindUserMenu) {
            Integer linkColor = it.getLinkColor();
            if (linkColor != null) {
                textLink = linkColor.intValue();
            } else {
                textLink = ThemeManagerKt.getTheme().getTextLink();
            }
            return new LinkStyle(DiscordFont.PrimarySemibold, textLink, null, null, 12, null);
        } else if (target instanceof LinkContextData.BindTapCommandName) {
            DiscordFont discordFont = DiscordFont.PrimarySemibold;
            ExecutedCommandBackgroundStyles commandNameBackgroundStyles = executedCommand.getCommandNameBackgroundStyles();
            ReactAsset reactAsset = null;
            if (commandNameBackgroundStyles != null) {
                num = commandNameBackgroundStyles.getColor();
            } else {
                num = null;
            }
            ExecutedCommandBackgroundStyles commandNameBackgroundStyles2 = executedCommand.getCommandNameBackgroundStyles();
            if (commandNameBackgroundStyles2 != null) {
                num2 = commandNameBackgroundStyles2.getBorderRadius();
            } else {
                num2 = null;
            }
            ExecutedCommandBackgroundStyles commandNameBackgroundStyles3 = executedCommand.getCommandNameBackgroundStyles();
            if (commandNameBackgroundStyles3 != null) {
                bool = commandNameBackgroundStyles3.getSpaceAround();
            } else {
                bool = null;
            }
            LinkBackgroundStyle linkBackgroundStyle = new LinkBackgroundStyle(num, num2, bool);
            Boolean showAppsIcon = executedCommand.getShowAppsIcon();
            Boolean bool2 = Boolean.TRUE;
            if (Intrinsics.areEqual(showAppsIcon, bool2)) {
                if (Intrinsics.areEqual(executedCommand.getShowControllerIcon(), bool2)) {
                    reactAsset = ReactAsset.GameController;
                } else {
                    reactAsset = ReactAsset.AppsIcon;
                }
            }
            return new LinkStyle(discordFont, 0, linkBackgroundStyle, reactAsset, 2, null);
        } else {
            return new LinkStyle(DiscordFont.PrimarySemibold, 0, null, null, 14, null);
        }
    }

    private final void configureLeadingIcon(Message message) {
        boolean z10;
        ReactAsset reactAsset;
        boolean z11 = true;
        int i10 = 0;
        if (message.getForwardInfo() != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (message.isPollResult()) {
            reactAsset = ReactAsset.PollsIcon;
        } else if (z10) {
            reactAsset = ReactAsset.ArrowAngleRightUpIcon;
        } else {
            reactAsset = null;
        }
        if (reactAsset != null) {
            SimpleDraweeView replyLeadingIcon = this.binding.replyLeadingIcon;
            Intrinsics.checkNotNullExpressionValue(replyLeadingIcon, "replyLeadingIcon");
            ReactAssetUtilsKt.setReactAsset(replyLeadingIcon, reactAsset);
        }
        SimpleDraweeView replyLeadingIcon2 = this.binding.replyLeadingIcon;
        Intrinsics.checkNotNullExpressionValue(replyLeadingIcon2, "replyLeadingIcon");
        if (reactAsset == null) {
            z11 = false;
        }
        if (!z11) {
            i10 = 8;
        }
        replyLeadingIcon2.setVisibility(i10);
    }

    public static /* synthetic */ void configureReply$default(MessageViewReplyPreview messageViewReplyPreview, ReferencedMessage referencedMessage, boolean z10, Function0 function0, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = true;
        }
        messageViewReplyPreview.configureReply(referencedMessage, z10, function0);
    }

    private final void configureTrailingIcon(Message message) {
        ReactAsset reactAsset;
        boolean z10;
        if (message.hasStickers()) {
            reactAsset = ReactAsset.Sticker;
        } else if (message.hasCommand()) {
            reactAsset = ReactAsset.SlashBox;
        } else if (message.isVoiceMessage()) {
            reactAsset = ReactAsset.Mic;
        } else if (message.hasAttachmentsOrEmbeds()) {
            reactAsset = ReactAsset.ImageIcon;
        } else {
            reactAsset = null;
        }
        if (reactAsset != null) {
            SimpleDraweeView replyTrailingIcon = this.binding.replyTrailingIcon;
            Intrinsics.checkNotNullExpressionValue(replyTrailingIcon, "replyTrailingIcon");
            ReactAssetUtilsKt.setReactAsset(replyTrailingIcon, reactAsset);
        }
        SimpleDraweeView replyTrailingIcon2 = this.binding.replyTrailingIcon;
        Intrinsics.checkNotNullExpressionValue(replyTrailingIcon2, "replyTrailingIcon");
        int i10 = 0;
        if (reactAsset != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10) {
            i10 = 8;
        }
        replyTrailingIcon2.setVisibility(i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void measureAndSetReplyLeadingViewsHeight() {
        if (this.binding.replyText.getWidth() <= 0) {
            return;
        }
        MessageContentView messageContentView = this.binding.replyText;
        messageContentView.measure(View.MeasureSpec.makeMeasureSpec(messageContentView.getWidth(), Integer.MIN_VALUE), View.MeasureSpec.makeMeasureSpec(0, 0));
        this.binding.replyText.getLineBounds(0, this.replyTextLineBounds);
        Rect rect = this.replyTextLineBounds;
        int i10 = rect.bottom - rect.top;
        LinearLayout replyLeadingViews = this.binding.replyLeadingViews;
        Intrinsics.checkNotNullExpressionValue(replyLeadingViews, "replyLeadingViews");
        ViewGroup.LayoutParams layoutParams = replyLeadingViews.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            replyLeadingViews.setLayoutParams(layoutParams);
            return;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    public final void clear() {
        ChannelSpineView replySpline = this.binding.replySpline;
        Intrinsics.checkNotNullExpressionValue(replySpline, "replySpline");
        replySpline.setVisibility(8);
        LinearLayout replyLeadingViews = this.binding.replyLeadingViews;
        Intrinsics.checkNotNullExpressionValue(replyLeadingViews, "replyLeadingViews");
        replyLeadingViews.setVisibility(8);
        MessageContentView replyText = this.binding.replyText;
        Intrinsics.checkNotNullExpressionValue(replyText, "replyText");
        replyText.setVisibility(8);
        SimpleDraweeView replyTrailingIcon = this.binding.replyTrailingIcon;
        Intrinsics.checkNotNullExpressionValue(replyTrailingIcon, "replyTrailingIcon");
        replyTrailingIcon.setVisibility(8);
        ClanTagChipletView tagChiplet = this.binding.tagChiplet;
        Intrinsics.checkNotNullExpressionValue(tagChiplet, "tagChiplet");
        tagChiplet.setVisibility(8);
    }

    /* renamed from: configureExecutedCommand-dB0-bEw  reason: not valid java name */
    public final void m532configureExecutedCommanddB0bEw(@NotNull final String messageId, @NotNull final ExecutedCommand executedCommand, boolean z10, boolean z11, boolean z12, boolean z13, @NotNull final ChatEventHandler eventHandler) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(executedCommand, "executedCommand");
        Intrinsics.checkNotNullParameter(eventHandler, "eventHandler");
        ChannelSpineView replySpline = this.binding.replySpline;
        Intrinsics.checkNotNullExpressionValue(replySpline, "replySpline");
        replySpline.setVisibility(0);
        MessageContentView replyText = this.binding.replyText;
        Intrinsics.checkNotNullExpressionValue(replyText, "replyText");
        replyText.setVisibility(0);
        LinearLayout replyLeadingViews = this.binding.replyLeadingViews;
        Intrinsics.checkNotNullExpressionValue(replyLeadingViews, "replyLeadingViews");
        replyLeadingViews.setVisibility(0);
        SimpleDraweeView replyAuthorAvatar = this.binding.replyAuthorAvatar;
        Intrinsics.checkNotNullExpressionValue(replyAuthorAvatar, "replyAuthorAvatar");
        replyAuthorAvatar.setVisibility(0);
        TextView replyAuthorName = this.binding.replyAuthorName;
        Intrinsics.checkNotNullExpressionValue(replyAuthorName, "replyAuthorName");
        replyAuthorName.setVisibility(8);
        SimpleDraweeView replyAuthorAvatar2 = this.binding.replyAuthorAvatar;
        Intrinsics.checkNotNullExpressionValue(replyAuthorAvatar2, "replyAuthorAvatar");
        NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(replyAuthorAvatar2, false, new View.OnClickListener() { // from class: com.discord.chat.presentation.message.p1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                MessageViewReplyPreview.configureExecutedCommand_dB0_bEw$lambda$10(ChatEventHandler.this, messageId, executedCommand, view);
            }
        }, 1, null);
        SimpleDraweeView replyIcon = this.binding.replyIcon;
        Intrinsics.checkNotNullExpressionValue(replyIcon, "replyIcon");
        replyIcon.setVisibility(8);
        SimpleDraweeView replyTrailingIcon = this.binding.replyTrailingIcon;
        Intrinsics.checkNotNullExpressionValue(replyTrailingIcon, "replyTrailingIcon");
        replyTrailingIcon.setVisibility(8);
        ClanTagChipletView tagChiplet = this.binding.tagChiplet;
        Intrinsics.checkNotNullExpressionValue(tagChiplet, "tagChiplet");
        tagChiplet.setVisibility(8);
        MessageViewReplyPreviewBinding messageViewReplyPreviewBinding = this.binding;
        MessageContentView messageContentView = messageViewReplyPreviewBinding.replyText;
        LinearLayout replyLeadingViews2 = messageViewReplyPreviewBinding.replyLeadingViews;
        Intrinsics.checkNotNullExpressionValue(replyLeadingViews2, "replyLeadingViews");
        AnnotatedStructurableText content = executedCommand.getContent();
        Context context = getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Paint.FontMetrics fontMetrics = this.binding.replyText.getPaint().getFontMetrics();
        Intrinsics.checkNotNullExpressionValue(fontMetrics, "getFontMetrics(...)");
        float baselineHeightPx = TextUtilsKt.getBaselineHeightPx(fontMetrics);
        TextPaint paint = this.binding.replyText.getPaint();
        Intrinsics.checkNotNullExpressionValue(paint, "getPaint(...)");
        DraweeSpanStringBuilder spannable$default = TextUtilsKt.toSpannable$default(content, context, messageId, z10, z11, z12, z13, paint, new Function1() { // from class: com.discord.chat.presentation.message.q1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit configureExecutedCommand_dB0_bEw$lambda$11;
                configureExecutedCommand_dB0_bEw$lambda$11 = MessageViewReplyPreview.configureExecutedCommand_dB0_bEw$lambda$11(ChatEventHandler.this, messageId, (LinkContentNode) obj);
                return configureExecutedCommand_dB0_bEw$lambda$11;
            }
        }, null, null, null, null, null, null, new Function1() { // from class: com.discord.chat.presentation.message.r1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit configureExecutedCommand_dB0_bEw$lambda$12;
                configureExecutedCommand_dB0_bEw$lambda$12 = MessageViewReplyPreview.configureExecutedCommand_dB0_bEw$lambda$12(ChatEventHandler.this, (CommandMentionContentNode) obj);
                return configureExecutedCommand_dB0_bEw$lambda$12;
            }
        }, new Function1() { // from class: com.discord.chat.presentation.message.s1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit configureExecutedCommand_dB0_bEw$lambda$13;
                configureExecutedCommand_dB0_bEw$lambda$13 = MessageViewReplyPreview.configureExecutedCommand_dB0_bEw$lambda$13(ChatEventHandler.this, (CommandMentionContentNode) obj);
                return configureExecutedCommand_dB0_bEw$lambda$13;
            }
        }, null, null, null, new Function1() { // from class: com.discord.chat.presentation.message.t1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                LinkStyle configureExecutedCommand_dB0_bEw$lambda$14;
                configureExecutedCommand_dB0_bEw$lambda$14 = MessageViewReplyPreview.configureExecutedCommand_dB0_bEw$lambda$14(ExecutedCommand.this, (LinkContentNode) obj);
                return configureExecutedCommand_dB0_bEw$lambda$14;
            }
        }, null, null, false, null, baselineHeightPx, null, false, 116866816, null);
        MessageContentView replyText2 = this.binding.replyText;
        Intrinsics.checkNotNullExpressionValue(replyText2, "replyText");
        SpannableExtensionsKt.coverWithSpan(spannable$default, new BackgroundSpanDrawer(replyText2));
        Unit unit = Unit.f33298a;
        messageContentView.setDraweeSpanStringBuilder(ReplyUtilsKt.createReplyContent(replyLeadingViews2, spannable$default));
        MessageContentView replyText3 = this.binding.replyText;
        Intrinsics.checkNotNullExpressionValue(replyText3, "replyText");
        NestedScrollOnTouchUtilsKt.enableNestedSpanClickListener(replyText3, true);
        this.binding.replyAuthorAvatar.setImageURI(executedCommand.getAvatarURL());
    }

    public final void configureReply(@NotNull ReferencedMessage reply, boolean z10, @NotNull final Function0<Unit> onClick) {
        Intrinsics.checkNotNullParameter(reply, "reply");
        Intrinsics.checkNotNullParameter(onClick, "onClick");
        NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(this, false, new View.OnClickListener() { // from class: com.discord.chat.presentation.message.u1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                Function0.this.invoke();
            }
        }, 1, null);
        if (reply instanceof LoadedReferencedMessage) {
            LoadedReferencedMessage loadedReferencedMessage = (LoadedReferencedMessage) reply;
            Message message = loadedReferencedMessage.getMessage();
            configureLeadingIcon(message);
            configureTrailingIcon(message);
            configureClanTagChiplet(message);
            ChannelSpineView replySpline = this.binding.replySpline;
            Intrinsics.checkNotNullExpressionValue(replySpline, "replySpline");
            replySpline.setVisibility(z10 ? 0 : 8);
            LinearLayout replyLeadingViews = this.binding.replyLeadingViews;
            Intrinsics.checkNotNullExpressionValue(replyLeadingViews, "replyLeadingViews");
            replyLeadingViews.setVisibility(0);
            MessageContentView replyText = this.binding.replyText;
            Intrinsics.checkNotNullExpressionValue(replyText, "replyText");
            replyText.setVisibility(0);
            if (message.getShouldShowRoleDot()) {
                RoleDotView replyRoleDot = this.binding.replyRoleDot;
                Intrinsics.checkNotNullExpressionValue(replyRoleDot, "replyRoleDot");
                replyRoleDot.setVisibility(0);
                RoleDotView roleDotView = this.binding.replyRoleDot;
                RoleColors androidColors = RoleColorsKt.toAndroidColors(message.getRoleColors());
                if (androidColors == null) {
                    androidColors = new RoleColors(MessageKt.roleDotColor$default(message, 0, 1, null), (Integer) null, (Integer) null, 6, (DefaultConstructorMarker) null);
                }
                roleDotView.configure(androidColors, 16);
            } else {
                RoleDotView replyRoleDot2 = this.binding.replyRoleDot;
                Intrinsics.checkNotNullExpressionValue(replyRoleDot2, "replyRoleDot");
                replyRoleDot2.setVisibility(8);
            }
            Context context = getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            String avatarUrl = MessageKt.avatarUrl(message, context);
            if (avatarUrl != null && message.getUsername() != null && message.m233getAuthorIdwUX8bhU() != null) {
                SimpleDraweeView replyAuthorAvatar = this.binding.replyAuthorAvatar;
                Intrinsics.checkNotNullExpressionValue(replyAuthorAvatar, "replyAuthorAvatar");
                replyAuthorAvatar.setVisibility(0);
                SimpleDraweeView replyIcon = this.binding.replyIcon;
                Intrinsics.checkNotNullExpressionValue(replyIcon, "replyIcon");
                replyIcon.setVisibility(8);
                this.binding.replyAuthorAvatar.setImageURI(avatarUrl);
                TextView replyAuthorName = this.binding.replyAuthorName;
                Intrinsics.checkNotNullExpressionValue(replyAuthorName, "replyAuthorName");
                replyAuthorName.setVisibility(0);
                this.binding.replyAuthorName.setText(message.getUsername());
                TextView textView = this.binding.replyAuthorName;
                textView.setTextColor(MessageKt.usernameColor$default(message, 0, 1, null));
                Intrinsics.checkNotNull(textView);
                MessageUtilsKt.clearOrSetRoleColors(textView, message);
                DisplayNameStylesUtils.INSTANCE.applyDisplayNameStyles(textView, message.getDisplayNameStyles());
                Intrinsics.checkNotNull(textView);
            } else {
                SimpleDraweeView replyAuthorAvatar2 = this.binding.replyAuthorAvatar;
                Intrinsics.checkNotNullExpressionValue(replyAuthorAvatar2, "replyAuthorAvatar");
                replyAuthorAvatar2.setVisibility(8);
                TextView replyAuthorName2 = this.binding.replyAuthorName;
                Intrinsics.checkNotNullExpressionValue(replyAuthorName2, "replyAuthorName");
                replyAuthorName2.setVisibility(8);
                SimpleDraweeView replyIcon2 = this.binding.replyIcon;
                Intrinsics.checkNotNullExpressionValue(replyIcon2, "replyIcon");
                replyIcon2.setVisibility(message.isPollResult() ? 8 : 0);
            }
            if (loadedReferencedMessage.getSystemContent() != null) {
                MessageViewReplyPreviewBinding messageViewReplyPreviewBinding = this.binding;
                MessageContentView messageContentView = messageViewReplyPreviewBinding.replyText;
                LinearLayout replyLeadingViews2 = messageViewReplyPreviewBinding.replyLeadingViews;
                Intrinsics.checkNotNullExpressionValue(replyLeadingViews2, "replyLeadingViews");
                StructurableText systemContent = loadedReferencedMessage.getSystemContent();
                Context context2 = getContext();
                Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
                String m237getId3Eiw7ao = message.m237getId3Eiw7ao();
                boolean shouldAnimateEmoji = MessageKt.shouldAnimateEmoji(message);
                boolean shouldShowLinkDecorations = MessageKt.shouldShowLinkDecorations(message);
                boolean shouldShowRoleDot = message.getShouldShowRoleDot();
                boolean shouldShowRoleOnName = message.getShouldShowRoleOnName();
                Paint.FontMetrics fontMetrics = this.binding.replyText.getPaint().getFontMetrics();
                Intrinsics.checkNotNullExpressionValue(fontMetrics, "getFontMetrics(...)");
                float baselineHeightPx = TextUtilsKt.getBaselineHeightPx(fontMetrics);
                TextPaint paint = this.binding.replyText.getPaint();
                Intrinsics.checkNotNullExpressionValue(paint, "getPaint(...)");
                DraweeSpanStringBuilder spannable$default = TextUtilsKt.toSpannable$default(systemContent, context2, m237getId3Eiw7ao, shouldAnimateEmoji, shouldShowLinkDecorations, shouldShowRoleDot, shouldShowRoleOnName, paint, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, true, null, baselineHeightPx, null, false, 113246080, null);
                MessageContentView replyText2 = this.binding.replyText;
                Intrinsics.checkNotNullExpressionValue(replyText2, "replyText");
                SpannableExtensionsKt.coverWithSpan(spannable$default, new BackgroundSpanDrawer(replyText2));
                Unit unit = Unit.f33298a;
                messageContentView.setDraweeSpanStringBuilder(ReplyUtilsKt.createSystemReplyContentFromBuilder(replyLeadingViews2, spannable$default));
            } else if (message.getContent() != null) {
                MessageViewReplyPreviewBinding messageViewReplyPreviewBinding2 = this.binding;
                MessageContentView messageContentView2 = messageViewReplyPreviewBinding2.replyText;
                LinearLayout replyLeadingViews3 = messageViewReplyPreviewBinding2.replyLeadingViews;
                Intrinsics.checkNotNullExpressionValue(replyLeadingViews3, "replyLeadingViews");
                StructurableText content = message.getContent();
                Context context3 = getContext();
                Intrinsics.checkNotNullExpressionValue(context3, "getContext(...)");
                String m237getId3Eiw7ao2 = message.m237getId3Eiw7ao();
                boolean shouldAnimateEmoji2 = MessageKt.shouldAnimateEmoji(message);
                boolean shouldShowLinkDecorations2 = MessageKt.shouldShowLinkDecorations(message);
                boolean shouldShowRoleDot2 = message.getShouldShowRoleDot();
                boolean shouldShowRoleOnName2 = message.getShouldShowRoleOnName();
                Paint.FontMetrics fontMetrics2 = this.binding.replyText.getPaint().getFontMetrics();
                Intrinsics.checkNotNullExpressionValue(fontMetrics2, "getFontMetrics(...)");
                float baselineHeightPx2 = TextUtilsKt.getBaselineHeightPx(fontMetrics2);
                TextPaint paint2 = this.binding.replyText.getPaint();
                Intrinsics.checkNotNullExpressionValue(paint2, "getPaint(...)");
                DraweeSpanStringBuilder spannable$default2 = TextUtilsKt.toSpannable$default(content, context3, m237getId3Eiw7ao2, shouldAnimateEmoji2, shouldShowLinkDecorations2, shouldShowRoleDot2, shouldShowRoleOnName2, paint2, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, true, null, baselineHeightPx2, null, false, 113246080, null);
                MessageContentView replyText3 = this.binding.replyText;
                Intrinsics.checkNotNullExpressionValue(replyText3, "replyText");
                SpannableExtensionsKt.coverWithSpan(spannable$default2, new BackgroundSpanDrawer(replyText3));
                Unit unit2 = Unit.f33298a;
                messageContentView2.setDraweeSpanStringBuilder(ReplyUtilsKt.createReplyContent(replyLeadingViews3, spannable$default2));
            } else {
                this.binding.replyText.setText((CharSequence) null);
            }
        } else if (reply instanceof SystemReferencedMessage) {
            ChannelSpineView replySpline2 = this.binding.replySpline;
            Intrinsics.checkNotNullExpressionValue(replySpline2, "replySpline");
            replySpline2.setVisibility(z10 ? 0 : 8);
            LinearLayout replyLeadingViews4 = this.binding.replyLeadingViews;
            Intrinsics.checkNotNullExpressionValue(replyLeadingViews4, "replyLeadingViews");
            replyLeadingViews4.setVisibility(0);
            SimpleDraweeView replyAuthorAvatar3 = this.binding.replyAuthorAvatar;
            Intrinsics.checkNotNullExpressionValue(replyAuthorAvatar3, "replyAuthorAvatar");
            replyAuthorAvatar3.setVisibility(0);
            SimpleDraweeView replyAuthorAvatar4 = this.binding.replyAuthorAvatar;
            Intrinsics.checkNotNullExpressionValue(replyAuthorAvatar4, "replyAuthorAvatar");
            ReactAssetUtilsKt.setReactAsset(replyAuthorAvatar4, ReactAsset.DefaultAvatar0);
            TextView replyAuthorName3 = this.binding.replyAuthorName;
            Intrinsics.checkNotNullExpressionValue(replyAuthorName3, "replyAuthorName");
            replyAuthorName3.setVisibility(8);
            SimpleDraweeView replyIcon3 = this.binding.replyIcon;
            Intrinsics.checkNotNullExpressionValue(replyIcon3, "replyIcon");
            replyIcon3.setVisibility(8);
            this.binding.replyIcon.setBackgroundColor(ThemeManagerKt.getTheme().getBackgroundBaseLowest());
            MessageContentView replyText4 = this.binding.replyText;
            Intrinsics.checkNotNullExpressionValue(replyText4, "replyText");
            replyText4.setVisibility(0);
            MessageViewReplyPreviewBinding messageViewReplyPreviewBinding3 = this.binding;
            MessageContentView messageContentView3 = messageViewReplyPreviewBinding3.replyText;
            LinearLayout replyLeadingViews5 = messageViewReplyPreviewBinding3.replyLeadingViews;
            Intrinsics.checkNotNullExpressionValue(replyLeadingViews5, "replyLeadingViews");
            messageContentView3.setDraweeSpanStringBuilder(ReplyUtilsKt.createSystemReplyContent(replyLeadingViews5, ((SystemReferencedMessage) reply).getContent()));
            SimpleDraweeView replyTrailingIcon = this.binding.replyTrailingIcon;
            Intrinsics.checkNotNullExpressionValue(replyTrailingIcon, "replyTrailingIcon");
            replyTrailingIcon.setVisibility(8);
            ClanTagChipletView tagChiplet = this.binding.tagChiplet;
            Intrinsics.checkNotNullExpressionValue(tagChiplet, "tagChiplet");
            tagChiplet.setVisibility(8);
        } else {
            throw new ir.p();
        }
        if (this.binding.replyText.isLaidOut() && !this.binding.replyText.isLayoutRequested()) {
            measureAndSetReplyLeadingViewsHeight();
        } else {
            MessageContentView replyText5 = this.binding.replyText;
            Intrinsics.checkNotNullExpressionValue(replyText5, "replyText");
            replyText5.addOnLayoutChangeListener(new View.OnLayoutChangeListener() { // from class: com.discord.chat.presentation.message.MessageViewReplyPreview$configureReply$$inlined$doOnNextLayout$1
                @Override // android.view.View.OnLayoutChangeListener
                public void onLayoutChange(View view, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
                    MessageViewReplyPreviewBinding messageViewReplyPreviewBinding4;
                    view.removeOnLayoutChangeListener(this);
                    messageViewReplyPreviewBinding4 = MessageViewReplyPreview.this.binding;
                    if (messageViewReplyPreviewBinding4.replyText.getWidth() > 0) {
                        MessageViewReplyPreview.this.measureAndSetReplyLeadingViewsHeight();
                        ViewMeasureExtensionsKt.measureAndLayout(MessageViewReplyPreview.this);
                    }
                }
            });
        }
        setImportantForAccessibility(1);
        androidx.core.view.h0.n0(this, new androidx.core.view.a() { // from class: com.discord.chat.presentation.message.MessageViewReplyPreview$configureReply$6
            @Override // androidx.core.view.a
            public void onInitializeAccessibilityNodeInfo(View host, AccessibilityNodeInfoCompat info) {
                MessageViewReplyPreviewBinding messageViewReplyPreviewBinding4;
                MessageViewReplyPreviewBinding messageViewReplyPreviewBinding5;
                Intrinsics.checkNotNullParameter(host, "host");
                Intrinsics.checkNotNullParameter(info, "info");
                super.onInitializeAccessibilityNodeInfo(host, info);
                info.w0("android.widget.Button");
                Context context4 = MessageViewReplyPreview.this.getContext();
                Intrinsics.checkNotNullExpressionValue(context4, "getContext(...)");
                SpannableStringBuilder spannableStringBuilder = new SpannableStringBuilder(I18nUtilsKt.i18nFormat$default(context4, I18nMessage.MOBILE_REPLY_PREVIEW_A11Y_LABEL, null, 2, null));
                spannableStringBuilder.append((CharSequence) ", ");
                messageViewReplyPreviewBinding4 = MessageViewReplyPreview.this.binding;
                spannableStringBuilder.append(messageViewReplyPreviewBinding4.replyAuthorName.getText());
                spannableStringBuilder.append((CharSequence) ", ");
                messageViewReplyPreviewBinding5 = MessageViewReplyPreview.this.binding;
                spannableStringBuilder.append(messageViewReplyPreviewBinding5.replyText.getText());
                info.A0(spannableStringBuilder);
                Context context5 = MessageViewReplyPreview.this.getContext();
                Intrinsics.checkNotNullExpressionValue(context5, "getContext(...)");
                info.b(new AccessibilityNodeInfoCompat.a(16, I18nUtilsKt.i18nFormat$default(context5, I18nMessage.MOBILE_SCROLL_TO_MESSAGE_ACTION_A11Y_LABEL, null, 2, null)));
            }

            @Override // androidx.core.view.a
            public boolean performAccessibilityAction(View host, int i10, Bundle bundle) {
                Intrinsics.checkNotNullParameter(host, "host");
                if (i10 == 16) {
                    onClick.invoke();
                }
                return super.performAccessibilityAction(host, i10, bundle);
            }
        });
    }

    @Override // com.discord.chat.presentation.spine.SpineParentMessage
    @NotNull
    public View getSpineOriginView() {
        SimpleDraweeView simpleDraweeView = this.binding.replyAuthorAvatar;
        Intrinsics.checkNotNull(simpleDraweeView);
        if (simpleDraweeView.getVisibility() != 0) {
            simpleDraweeView = null;
        }
        if (simpleDraweeView != null) {
            return simpleDraweeView;
        }
        SimpleDraweeView replyIcon = this.binding.replyIcon;
        Intrinsics.checkNotNullExpressionValue(replyIcon, "replyIcon");
        return replyIcon;
    }

    public /* synthetic */ MessageViewReplyPreview(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MessageViewReplyPreview(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        MessageViewReplyPreviewBinding inflate = MessageViewReplyPreviewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        this.replyTextLineBounds = new Rect();
        SimpleDraweeView simpleDraweeView = inflate.replyIcon;
        if (!simpleDraweeView.isInEditMode()) {
            Intrinsics.checkNotNull(simpleDraweeView);
            ReactAssetUtilsKt.setReactAsset(simpleDraweeView, ReactAsset.Reply);
            ColorUtilsKt.setTintColor(simpleDraweeView, Integer.valueOf(ThemeManagerKt.getTheme().getInteractiveTextDefault()));
            ViewBackgroundUtilsKt.setBackgroundOval$default(simpleDraweeView, ThemeManagerKt.getTheme().getBackgroundBaseLowest(), 0, 2, null);
        }
        TextView replyAuthorName = inflate.replyAuthorName;
        Intrinsics.checkNotNullExpressionValue(replyAuthorName, "replyAuthorName");
        DiscordFontUtilsKt.setDiscordFont(replyAuthorName, DiscordFont.PrimarySemibold);
        TextView replyAuthorName2 = inflate.replyAuthorName;
        Intrinsics.checkNotNullExpressionValue(replyAuthorName2, "replyAuthorName");
        SetTextSizeSpKt.setTextSizeSp(replyAuthorName2, 12.0f);
        SimpleDraweeView replyLeadingIcon = inflate.replyLeadingIcon;
        Intrinsics.checkNotNullExpressionValue(replyLeadingIcon, "replyLeadingIcon");
        ColorUtilsKt.setTintColor(replyLeadingIcon, Integer.valueOf(ThemeManagerKt.getTheme().getTextSubtle()));
        SimpleDraweeView replyTrailingIcon = inflate.replyTrailingIcon;
        Intrinsics.checkNotNullExpressionValue(replyTrailingIcon, "replyTrailingIcon");
        ColorUtilsKt.setTintColor(replyTrailingIcon, Integer.valueOf(ThemeManagerKt.getTheme().getTextSubtle()));
        SimpleDraweeView replyAuthorAvatar = inflate.replyAuthorAvatar;
        Intrinsics.checkNotNullExpressionValue(replyAuthorAvatar, "replyAuthorAvatar");
        ViewClippingUtilsKt.clipToCircle(replyAuthorAvatar);
        MessageContentView messageContentView = inflate.replyText;
        Intrinsics.checkNotNull(messageContentView);
        DiscordFontUtilsKt.setDiscordFont(messageContentView, DiscordFont.PrimaryMedium);
        SetTextSizeSpKt.setTextSizeSp(messageContentView, 12.0f);
        messageContentView.setTextColor(ThemeManagerKt.getTheme().getInteractiveTextDefault());
        float dimension = getResources().getDimension(R.dimen.message_start_guideline);
        float f10 = 2;
        float dimension2 = (dimension / f10) - (getResources().getDimension(com.discord.channel_spine.R.dimen.spine_width) / f10);
        float dimension3 = (dimension - getResources().getDimension(R.dimen.message_reply_leading_views_margin_start)) - dimension2;
        inflate.replySpline.configureAsReplySpline();
        ChannelSpineView replySpline = inflate.replySpline;
        Intrinsics.checkNotNullExpressionValue(replySpline, "replySpline");
        ViewGroup.LayoutParams layoutParams = replySpline.getLayoutParams();
        if (layoutParams != null) {
            ViewGroup.MarginLayoutParams marginLayoutParams = (ViewGroup.MarginLayoutParams) layoutParams;
            marginLayoutParams.width = (int) dimension3;
            marginLayoutParams.setMarginStart((int) dimension2);
            replySpline.setLayoutParams(marginLayoutParams);
            return;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.MarginLayoutParams");
    }
}
