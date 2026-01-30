package com.discord.chat.presentation.message;

import android.content.Context;
import android.content.res.Resources;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.SetTextSizeSpKt;
import com.discord.chat.R;
import com.discord.chat.bridge.MediaType;
import com.discord.chat.bridge.Message;
import com.discord.chat.bridge.MessageKt;
import com.discord.chat.bridge.MessageState;
import com.discord.chat.bridge.MessageType;
import com.discord.chat.bridge.activities.ActivityInstanceEmbed;
import com.discord.chat.bridge.activities.ActivityRichPresenceInviteEmbed;
import com.discord.chat.bridge.attachment.Attachment;
import com.discord.chat.bridge.attachment.AttachmentType;
import com.discord.chat.bridge.codedlinks.AppMessageEmbedImpl;
import com.discord.chat.bridge.codedlinks.CodedLinkEmbed;
import com.discord.chat.bridge.codedlinks.EmbeddedActivityInviteEmbedImpl;
import com.discord.chat.bridge.codedlinks.GuildEventInviteEmbedImpl;
import com.discord.chat.bridge.codedlinks.GuildInviteDisabledEmbedImpl;
import com.discord.chat.bridge.codedlinks.GuildInviteEmbedImpl;
import com.discord.chat.bridge.codedlinks.GuildProfileInviteEmbedImpl;
import com.discord.chat.bridge.ctabutton.CtaButton;
import com.discord.chat.bridge.embed.Embed;
import com.discord.chat.bridge.ephemeral.EphemeralIndication;
import com.discord.chat.bridge.feedback.SurveyIndication;
import com.discord.chat.bridge.forwarding.ForwardInfo;
import com.discord.chat.bridge.gift.GiftEmbed;
import com.discord.chat.bridge.interaction.InteractionStatus;
import com.discord.chat.bridge.policynotice.SafetyPolicyNoticeEmbed;
import com.discord.chat.bridge.polls.PollLayoutType;
import com.discord.chat.bridge.postpreviewembed.PostPreviewEmbed;
import com.discord.chat.bridge.premium_group_invite.PremiumGroupInviteEmbed;
import com.discord.chat.bridge.reaction.MessageReaction;
import com.discord.chat.bridge.reaction.ReactionsTheme;
import com.discord.chat.bridge.referral.ReferralEmbed;
import com.discord.chat.bridge.rolecolors.RoleColors;
import com.discord.chat.bridge.rolecolors.RoleColorsKt;
import com.discord.chat.bridge.safetysystemnotification.SafetySystemNotificationEmbed;
import com.discord.chat.bridge.spoiler.SpoilerAttributes;
import com.discord.chat.bridge.sticker.Sticker;
import com.discord.chat.bridge.structurabletext.StructurableText;
import com.discord.chat.bridge.threads.ThreadEmbed;
import com.discord.chat.databinding.MessageViewBinding;
import com.discord.chat.presentation.events.ChatEventHandler;
import com.discord.chat.presentation.list.ChatListRelativeLayout;
import com.discord.chat.presentation.list.FactoryCreatable;
import com.discord.chat.presentation.list.MaskedShadowView;
import com.discord.chat.presentation.list.SwipeReplyInitiator;
import com.discord.chat.presentation.message.MessageView;
import com.discord.chat.presentation.message.messagepart.ActivityInstanceEmbedMessageAccessory;
import com.discord.chat.presentation.message.messagepart.ActivityRichPresenceInviteEmbedMessageAccessory;
import com.discord.chat.presentation.message.messagepart.AppMessageEmbedAccessory;
import com.discord.chat.presentation.message.messagepart.CtaButtonMessageAccessory;
import com.discord.chat.presentation.message.messagepart.EmbedMessageAccessory;
import com.discord.chat.presentation.message.messagepart.EmbeddedActivityInviteMessageAccessory;
import com.discord.chat.presentation.message.messagepart.EphemeralIndicationMessageAccessory;
import com.discord.chat.presentation.message.messagepart.ForumPostActionBar;
import com.discord.chat.presentation.message.messagepart.ForwardBreadcrumbMessageAccessory;
import com.discord.chat.presentation.message.messagepart.ForwardHeaderMessageAccessory;
import com.discord.chat.presentation.message.messagepart.GiftMessageAccessory;
import com.discord.chat.presentation.message.messagepart.GuildEventInviteMessageAccessory;
import com.discord.chat.presentation.message.messagepart.GuildInviteDisabledMessageAccessory;
import com.discord.chat.presentation.message.messagepart.GuildInviteMessageAccessory;
import com.discord.chat.presentation.message.messagepart.GuildProfileInviteMessageAccessory;
import com.discord.chat.presentation.message.messagepart.InfoLinkMessageAccessory;
import com.discord.chat.presentation.message.messagepart.InteractionStatusMessageAccessory;
import com.discord.chat.presentation.message.messagepart.MediaMosaicAttachmentMessageAccessory;
import com.discord.chat.presentation.message.messagepart.MessageAccessory;
import com.discord.chat.presentation.message.messagepart.MessageComponentsAccessory;
import com.discord.chat.presentation.message.messagepart.MessageContentAccessory;
import com.discord.chat.presentation.message.messagepart.MessageMargins;
import com.discord.chat.presentation.message.messagepart.PollMessageAccessory;
import com.discord.chat.presentation.message.messagepart.PostPreviewEmbedMessageAccessory;
import com.discord.chat.presentation.message.messagepart.PremiumGroupInviteMessageAccessory;
import com.discord.chat.presentation.message.messagepart.ReactionsMessageAccessory;
import com.discord.chat.presentation.message.messagepart.ReferralMessageAccessory;
import com.discord.chat.presentation.message.messagepart.SafetyPolicyNoticeMessageAccessory;
import com.discord.chat.presentation.message.messagepart.SafetySystemNotificationMessageAccessory;
import com.discord.chat.presentation.message.messagepart.SharedCustomThemeMessageAccessory;
import com.discord.chat.presentation.message.messagepart.StickerMessageAccessory;
import com.discord.chat.presentation.message.messagepart.SurveyIndicationMessageAccessory;
import com.discord.chat.presentation.message.messagepart.ThreadEmbedMessageAccessory;
import com.discord.chat.presentation.message.utils.DisplayNameStylesUtils;
import com.discord.chat.presentation.message.view.botuikit.ComponentProvider;
import com.discord.chat.presentation.root.MessageContext;
import com.discord.chat.presentation.root.MessageContextType;
import com.discord.chat.presentation.spine.SpineParentMessage;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.misc.utilities.view.ViewClippingUtilsKt;
import com.discord.primitives.ChannelId;
import com.discord.primitives.GuildId;
import com.discord.primitives.MessageFlag;
import com.discord.primitives.MessageFlagKt;
import com.discord.primitives.MessageId;
import com.discord.react_asset_fetcher.ReactAsset;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchUtilsKt;
import com.discord.recycler_view.decorations.VerticalSpacingItemDecoration;
import com.discord.ripple.RippleUtilsKt;
import com.discord.theme.ThemeManagerKt;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.drawee.view.SimpleDraweeView;
import com.facebook.react.modules.dialog.AlertFragment;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Comparator;
import java.util.List;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.IndexedValue;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function6;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000È\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\b\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u000e\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u001d\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0007\u0018\u00002\u00020\u00012\u00020\u00022\u00020\u00032\u00020\u00042\u00020\u0005:\u0001\u007fB\u001d\b\u0007\u0012\u0006\u0010\u0007\u001a\u00020\u0006\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\b¢\u0006\u0004\b\n\u0010\u000bJ\u000f\u0010\r\u001a\u00020\fH\u0002¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\u00020\f2\u0006\u0010\u0010\u001a\u00020\u000fH\u0002¢\u0006\u0004\b\u0011\u0010\u0012J#\u0010\u0018\u001a\u00020\f*\u00020\u00132\u0006\u0010\u0015\u001a\u00020\u00142\u0006\u0010\u0017\u001a\u00020\u0016H\u0002¢\u0006\u0004\b\u0018\u0010\u0019Jo\u0010(\u001a\b\u0012\u0004\u0012\u00020'0&2\u0006\u0010\u001b\u001a\u00020\u001a2\u0006\u0010\u0015\u001a\u00020\u00142\u0006\u0010\u001d\u001a\u00020\u001c2@\u0010%\u001a<\u0012\u0004\u0012\u00020\u001f\u0012\u0004\u0012\u00020 \u0012\u0006\u0012\u0004\u0018\u00010!\u0012\u0006\u0012\u0004\u0018\u00010\"\u0012\u0006\u0012\u0004\u0018\u00010#\u0012\u0006\u0012\u0004\u0018\u00010!\u0012\u0004\u0012\u00020\f\u0018\u00010\u001ej\u0004\u0018\u0001`$H\u0002¢\u0006\u0004\b(\u0010)J'\u0010,\u001a\u00020\f2\u0006\u0010\u0015\u001a\u00020\u00142\u0006\u0010\u0017\u001a\u00020\u00162\u0006\u0010+\u001a\u00020*H\u0002¢\u0006\u0004\b,\u0010-J\u000f\u0010.\u001a\u00020\fH\u0002¢\u0006\u0004\b.\u0010\u000eJ\u001d\u00100\u001a\u00020\f2\f\u0010/\u001a\b\u0012\u0004\u0012\u00020'0&H\u0002¢\u0006\u0004\b0\u00101J\u001f\u00103\u001a\u00020\f2\u0006\u00102\u001a\u00020\u000f2\u0006\u0010+\u001a\u00020*H\u0002¢\u0006\u0004\b3\u00104J'\u00106\u001a\u00020\f2\u0006\u00105\u001a\u00020\u000f2\u0006\u0010\u0017\u001a\u00020\u00162\u0006\u0010+\u001a\u00020*H\u0002¢\u0006\u0004\b6\u00107J\u000f\u00108\u001a\u00020\fH\u0016¢\u0006\u0004\b8\u0010\u000eJ\u0017\u0010;\u001a\u00020\u000f2\u0006\u0010:\u001a\u000209H\u0016¢\u0006\u0004\b;\u0010<J\u000f\u0010=\u001a\u00020\fH\u0016¢\u0006\u0004\b=\u0010\u000eJ\u000f\u0010>\u001a\u00020\fH\u0016¢\u0006\u0004\b>\u0010\u000eJ\u0017\u0010@\u001a\u00020\f2\u0006\u0010?\u001a\u00020\u000fH\u0016¢\u0006\u0004\b@\u0010\u0012J\r\u0010A\u001a\u00020\f¢\u0006\u0004\bA\u0010\u000eJW\u0010H\u001a\u00020\f2\u0006\u0010\u0015\u001a\u00020\u00142\u0006\u0010\u001d\u001a\u00020\u001c2\b\b\u0002\u0010\u0017\u001a\u00020\u00162\n\b\u0002\u0010C\u001a\u0004\u0018\u00010B2\u000e\b\u0002\u0010E\u001a\b\u0012\u0004\u0012\u00020*0D2\b\b\u0002\u0010F\u001a\u00020\u000f2\b\b\u0002\u0010G\u001a\u00020\u000f¢\u0006\u0004\bH\u0010IJ\u0015\u0010L\u001a\u00020\f2\u0006\u0010K\u001a\u00020J¢\u0006\u0004\bL\u0010MJ\u000f\u0010N\u001a\u00020!H\u0016¢\u0006\u0004\bN\u0010OR\u0014\u0010Q\u001a\u00020P8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bQ\u0010RR\"\u0010T\u001a\u00020S8\u0006@\u0006X\u0086.¢\u0006\u0012\n\u0004\bT\u0010U\u001a\u0004\bV\u0010W\"\u0004\bX\u0010YR\"\u0010[\u001a\u00020Z8\u0016@\u0016X\u0096\u000e¢\u0006\u0012\n\u0004\b[\u0010\\\u001a\u0004\b]\u0010^\"\u0004\b_\u0010`R\u0018\u0010a\u001a\u0004\u0018\u00010\u001f8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\ba\u0010bR\u001c\u0010E\u001a\b\u0012\u0004\u0012\u00020*0D8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bE\u0010cR\u0016\u0010F\u001a\u00020\u000f8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bF\u0010dR(\u0010e\u001a\b\u0012\u0004\u0012\u00020\f0D8\u0016@\u0016X\u0096\u000e¢\u0006\u0012\n\u0004\be\u0010c\u001a\u0004\bf\u0010g\"\u0004\bh\u0010iR\u001c\u0010j\u001a\b\u0012\u0004\u0012\u00020\f0D8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bj\u0010cR(\u0010k\u001a\b\u0012\u0004\u0012\u00020\f0D8\u0016@\u0016X\u0096\u000e¢\u0006\u0012\n\u0004\bk\u0010c\u001a\u0004\bl\u0010g\"\u0004\bm\u0010iR\"\u0010n\u001a\u00020\u000f8\u0016@\u0016X\u0096\u000e¢\u0006\u0012\n\u0004\bn\u0010d\u001a\u0004\bo\u0010p\"\u0004\bq\u0010\u0012R\"\u0010r\u001a\u00020\u000f8\u0016@\u0016X\u0096\u000e¢\u0006\u0012\n\u0004\br\u0010d\u001a\u0004\bs\u0010p\"\u0004\bt\u0010\u0012R\"\u0010u\u001a\u00020\u000f8\u0016@\u0016X\u0096\u000e¢\u0006\u0012\n\u0004\bu\u0010d\u001a\u0004\bv\u0010p\"\u0004\bw\u0010\u0012R&\u0010z\u001a\u0012\u0012\u0004\u0012\u00020'0xj\b\u0012\u0004\u0012\u00020'`y8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bz\u0010{R\u0014\u0010~\u001a\u00020\u00138VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b|\u0010}¨\u0006\u0080\u0001"}, d2 = {"Lcom/discord/chat/presentation/message/MessageView;", "Lcom/discord/chat/presentation/list/ChatListRelativeLayout;", "Lcom/discord/recycler_view/decorations/VerticalSpacingItemDecoration$SpacingProviderView;", "Lcom/discord/chat/presentation/spine/SpineParentMessage;", "Lcom/discord/chat/presentation/list/SwipeReplyInitiator;", "Lcom/discord/chat/presentation/list/FactoryCreatable;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "", "initReplyView", "()V", "", "showDivider", "configureDivider", "(Z)V", "Landroid/view/View;", "Lcom/discord/chat/bridge/Message;", "message", "Lcom/discord/chat/presentation/events/ChatEventHandler;", "eventHandler", "configureAuthorClickListeners", "(Landroid/view/View;Lcom/discord/chat/bridge/Message;Lcom/discord/chat/presentation/events/ChatEventHandler;)V", "Lcom/discord/chat/presentation/message/messagepart/MessageMargins;", "margins", "Lcom/discord/chat/presentation/root/MessageContext;", "messageContext", "Lkotlin/Function6;", "Lcom/discord/primitives/MessageId;", "Lcom/discord/primitives/ChannelId;", "", "Lcom/discord/chat/bridge/MediaType;", "", "Lcom/discord/chat/presentation/events/MessageLongPress;", "onLongClick", "", "Lcom/discord/chat/presentation/message/messagepart/MessageAccessory;", "generateMessageAccessories", "(Lcom/discord/chat/presentation/message/messagepart/MessageMargins;Lcom/discord/chat/bridge/Message;Lcom/discord/chat/presentation/root/MessageContext;Lkotlin/jvm/functions/Function6;)Ljava/util/List;", "Lcom/discord/chat/presentation/message/MessageView$ChainPart;", "chainPart", "configureAuthor", "(Lcom/discord/chat/bridge/Message;Lcom/discord/chat/presentation/events/ChatEventHandler;Lcom/discord/chat/presentation/message/MessageView$ChainPart;)V", "hideHeader", AlertFragment.ARG_ITEMS, "configureAccessoriesMargin", "(Ljava/util/List;)V", "isCommunicationDisabled", "configureCommunicationDisabled", "(ZLcom/discord/chat/presentation/message/MessageView$ChainPart;)V", "isSuppressNotifications", "configureSuppressNotifications", "(ZLcom/discord/chat/presentation/events/ChatEventHandler;Lcom/discord/chat/presentation/message/MessageView$ChainPart;)V", "onFactoryCreate", "Landroid/view/MotionEvent;", "ev", "onInterceptTouchEvent", "(Landroid/view/MotionEvent;)Z", "onSwipeStart", "onSwipeEnd", "pressed", "setPressed", "onRecycledHint", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentProvider;", "componentProvider", "Lkotlin/Function0;", "onChainPart", "allowChildGestures", "renderContentOnly", "setMessage", "(Lcom/discord/chat/bridge/Message;Lcom/discord/chat/presentation/root/MessageContext;Lcom/discord/chat/presentation/events/ChatEventHandler;Lcom/discord/chat/presentation/message/view/botuikit/ComponentProvider;Lkotlin/jvm/functions/Function0;ZZ)V", "Landroidx/recyclerview/widget/RecyclerView$RecycledViewPool;", "recycledViewPool", "setAccessoriesRecycledViewPool", "(Landroidx/recyclerview/widget/RecyclerView$RecycledViewPool;)V", "spacingPxOverride", "()Ljava/lang/Integer;", "Lcom/discord/chat/databinding/MessageViewBinding;", "binding", "Lcom/discord/chat/databinding/MessageViewBinding;", "Lcom/discord/chat/presentation/message/MessageViewReplyPreview;", "replyPreview", "Lcom/discord/chat/presentation/message/MessageViewReplyPreview;", "getReplyPreview", "()Lcom/discord/chat/presentation/message/MessageViewReplyPreview;", "setReplyPreview", "(Lcom/discord/chat/presentation/message/MessageViewReplyPreview;)V", "Lcom/discord/chat/presentation/list/MaskedShadowView;", "shadowView", "Lcom/discord/chat/presentation/list/MaskedShadowView;", "getShadowView", "()Lcom/discord/chat/presentation/list/MaskedShadowView;", "setShadowView", "(Lcom/discord/chat/presentation/list/MaskedShadowView;)V", "messageId", "Ljava/lang/String;", "Lkotlin/jvm/functions/Function0;", "Z", "onInitiateReply", "getOnInitiateReply", "()Lkotlin/jvm/functions/Function0;", "setOnInitiateReply", "(Lkotlin/jvm/functions/Function0;)V", "onInitiateThread", "onInitiateEdit", "getOnInitiateEdit", "setOnInitiateEdit", "enableSwipeToReply", "getEnableSwipeToReply", "()Z", "setEnableSwipeToReply", "enableSwipeToEdit", "getEnableSwipeToEdit", "setEnableSwipeToEdit", "usingGradientTheme", "getUsingGradientTheme", "setUsingGradientTheme", "Ljava/util/ArrayList;", "Lkotlin/collections/ArrayList;", "accessories", "Ljava/util/ArrayList;", "getSpineOriginView", "()Landroid/view/View;", "spineOriginView", "ChainPart", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nMessageView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MessageView.kt\ncom/discord/chat/presentation/message/MessageView\n+ 2 View.kt\nandroidx/core/view/ViewKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 4 ViewGroup.kt\nandroidx/core/view/ViewGroupKt\n*L\n1#1,964:1\n257#2,2:965\n257#2,2:1001\n257#2,2:1003\n257#2,2:1005\n257#2,2:1007\n257#2,2:1009\n257#2,2:1011\n257#2,2:1013\n257#2,2:1015\n257#2,2:1017\n257#2,2:1019\n257#2,2:1021\n257#2,2:1023\n257#2,2:1025\n257#2,2:1027\n257#2,2:1029\n257#2,2:1031\n257#2,2:1033\n257#2,2:1035\n257#2,2:1037\n257#2,2:1039\n257#2,2:1041\n257#2,2:1043\n257#2,2:1045\n257#2,2:1047\n257#2,2:1049\n257#2,2:1051\n257#2,2:1053\n257#2,2:1055\n257#2,2:1065\n257#2,2:1067\n1761#3,3:967\n3307#3,10:970\n1563#3:980\n1634#3,3:981\n1634#3,3:984\n1878#3,3:987\n1878#3,3:990\n1878#3,3:993\n1878#3,3:996\n1869#3,2:999\n199#4,8:1057\n*S KotlinDebug\n*F\n+ 1 MessageView.kt\ncom/discord/chat/presentation/message/MessageView\n*L\n330#1:965,2\n789#1:1001,2\n792#1:1003,2\n795#1:1005,2\n796#1:1007,2\n797#1:1009,2\n800#1:1011,2\n803#1:1013,2\n808#1:1015,2\n810#1:1017,2\n815#1:1019,2\n817#1:1021,2\n822#1:1023,2\n824#1:1025,2\n835#1:1027,2\n837#1:1029,2\n842#1:1031,2\n856#1:1033,2\n864#1:1035,2\n865#1:1037,2\n866#1:1039,2\n867#1:1041,2\n868#1:1043,2\n869#1:1045,2\n870#1:1047,2\n871#1:1049,2\n872#1:1051,2\n873#1:1053,2\n874#1:1055,2\n918#1:1065,2\n936#1:1067,2\n425#1:967,3\n427#1:970,10\n439#1:980\n439#1:981,3\n456#1:984,3\n480#1:987,3\n496#1:990,3\n531#1:993,3\n580#1:996,3\n640#1:999,2\n903#1:1057,8\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MessageView extends ChatListRelativeLayout implements VerticalSpacingItemDecoration.SpacingProviderView, SpineParentMessage, SwipeReplyInitiator, FactoryCreatable {
    @NotNull
    private ArrayList<MessageAccessory> accessories;
    private boolean allowChildGestures;
    @NotNull
    private final MessageViewBinding binding;
    private boolean enableSwipeToEdit;
    private boolean enableSwipeToReply;
    private String messageId;
    @NotNull
    private Function0<? extends ChainPart> onChainPart;
    @NotNull
    private Function0<Unit> onInitiateEdit;
    @NotNull
    private Function0<Unit> onInitiateReply;
    @NotNull
    private Function0<Unit> onInitiateThread;
    public MessageViewReplyPreview replyPreview;
    @NotNull
    private MaskedShadowView shadowView;
    private boolean usingGradientTheme;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0007\b\u0086\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006j\u0002\b\u0007¨\u0006\b"}, d2 = {"Lcom/discord/chat/presentation/message/MessageView$ChainPart;", "", "<init>", "(Ljava/lang/String;I)V", "ONLY", "START", "MIDDLE", "END", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class ChainPart {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ ChainPart[] $VALUES;
        public static final ChainPart ONLY = new ChainPart("ONLY", 0);
        public static final ChainPart START = new ChainPart("START", 1);
        public static final ChainPart MIDDLE = new ChainPart("MIDDLE", 2);
        public static final ChainPart END = new ChainPart("END", 3);

        private static final /* synthetic */ ChainPart[] $values() {
            return new ChainPart[]{ONLY, START, MIDDLE, END};
        }

        static {
            ChainPart[] $values = $values();
            $VALUES = $values;
            $ENTRIES = pr.a.a($values);
        }

        private ChainPart(String str, int i10) {
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static ChainPart valueOf(String str) {
            return (ChainPart) Enum.valueOf(ChainPart.class, str);
        }

        public static ChainPart[] values() {
            return (ChainPart[]) $VALUES.clone();
        }
    }

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;
        public static final /* synthetic */ int[] $EnumSwitchMapping$1;

        static {
            int[] iArr = new int[MessageState.values().length];
            try {
                iArr[MessageState.SendFailed.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[MessageState.Sending.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            $EnumSwitchMapping$0 = iArr;
            int[] iArr2 = new int[ChainPart.values().length];
            try {
                iArr2[ChainPart.END.ordinal()] = 1;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr2[ChainPart.ONLY.ordinal()] = 2;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[ChainPart.START.ordinal()] = 3;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[ChainPart.MIDDLE.ordinal()] = 4;
            } catch (NoSuchFieldError unused6) {
            }
            $EnumSwitchMapping$1 = iArr2;
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public MessageView(@NotNull Context context) {
        this(context, null, 2, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    private final void configureAccessoriesMargin(List<? extends MessageAccessory> list) {
        boolean z10;
        int dpToPx;
        boolean z11 = CollectionsKt.firstOrNull(list) instanceof MessageContentAccessory;
        int i10 = 0;
        boolean z12 = true;
        if (list.size() > 1 || !z11) {
            z10 = true;
        } else {
            z10 = false;
        }
        ChainPart chainPart = (ChainPart) this.onChainPart.invoke();
        if (chainPart != ChainPart.MIDDLE && chainPart != ChainPart.START) {
            z12 = false;
        }
        if (z11) {
            dpToPx = 0;
        } else {
            dpToPx = SizeUtilsKt.getDpToPx(8);
        }
        if (z10 && z12) {
            i10 = SizeUtilsKt.getDpToPx(4);
        }
        ViewGroup.LayoutParams layoutParams = this.binding.accessoriesView.getLayoutParams();
        Intrinsics.checkNotNull(layoutParams, "null cannot be cast to non-null type android.view.ViewGroup.MarginLayoutParams");
        ViewGroup.MarginLayoutParams marginLayoutParams = (ViewGroup.MarginLayoutParams) layoutParams;
        int i11 = marginLayoutParams.topMargin;
        int i12 = marginLayoutParams.bottomMargin;
        if (i11 == dpToPx && i12 == i10) {
            return;
        }
        marginLayoutParams.setMargins(marginLayoutParams.leftMargin, dpToPx, marginLayoutParams.rightMargin, i10);
        this.binding.accessoriesView.setLayoutParams(marginLayoutParams);
    }

    private final void configureAuthor(final Message message, final ChatEventHandler chatEventHandler, ChainPart chainPart) {
        if (chainPart != ChainPart.START && chainPart != ChainPart.ONLY) {
            hideHeader();
            return;
        }
        TextView textView = this.binding.authorName;
        textView.setText(message.getUsername());
        Intrinsics.checkNotNull(textView);
        configureAuthorClickListeners(textView, message, chatEventHandler);
        textView.setTextColor(MessageKt.usernameColor$default(message, 0, 1, null));
        MessageUtilsKt.clearOrSetRoleColors(textView, message);
        DisplayNameStylesUtils.INSTANCE.applyDisplayNameStyles(textView, message.getDisplayNameStyles());
        View roleDot = this.binding.roleDot;
        Intrinsics.checkNotNullExpressionValue(roleDot, "roleDot");
        configureAuthorClickListeners(roleDot, message, chatEventHandler);
        this.binding.timestamp.setText(message.getTimestamp());
        SimpleDraweeView simpleDraweeView = this.binding.authorAvatar;
        Context context = simpleDraweeView.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        simpleDraweeView.setImageURI(MessageKt.avatarUrl(message, context));
        Intrinsics.checkNotNull(simpleDraweeView);
        NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(simpleDraweeView, false, new View.OnClickListener() { // from class: com.discord.chat.presentation.message.m1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                MessageView.configureAuthor$lambda$49$lambda$47(Message.this, chatEventHandler, view);
            }
        }, 1, null);
        NestedScrollOnTouchUtilsKt.setOnLongClickListenerNested$default(simpleDraweeView, false, new View.OnLongClickListener() { // from class: com.discord.chat.presentation.message.n1
            @Override // android.view.View.OnLongClickListener
            public final boolean onLongClick(View view) {
                boolean configureAuthor$lambda$49$lambda$48;
                configureAuthor$lambda$49$lambda$48 = MessageView.configureAuthor$lambda$49$lambda$48(Message.this, chatEventHandler, view);
                return configureAuthor$lambda$49$lambda$48;
            }
        }, 1, null);
        if (message.getAvatarDecorationURL() != null) {
            SimpleDraweeView authorAvatarDecoration = this.binding.authorAvatarDecoration;
            Intrinsics.checkNotNullExpressionValue(authorAvatarDecoration, "authorAvatarDecoration");
            authorAvatarDecoration.setVisibility(0);
            this.binding.authorAvatarDecoration.setImageURI(message.getAvatarDecorationURL());
        } else {
            SimpleDraweeView authorAvatarDecoration2 = this.binding.authorAvatarDecoration;
            Intrinsics.checkNotNullExpressionValue(authorAvatarDecoration2, "authorAvatarDecoration");
            authorAvatarDecoration2.setVisibility(8);
            this.binding.authorAvatarDecoration.setImageURI((String) null);
        }
        TextView timestamp = this.binding.timestamp;
        Intrinsics.checkNotNullExpressionValue(timestamp, "timestamp");
        timestamp.setVisibility(0);
        TextView authorName = this.binding.authorName;
        Intrinsics.checkNotNullExpressionValue(authorName, "authorName");
        authorName.setVisibility(0);
        SimpleDraweeView authorAvatar = this.binding.authorAvatar;
        Intrinsics.checkNotNullExpressionValue(authorAvatar, "authorAvatar");
        authorAvatar.setVisibility(0);
        if (message.getShouldShowRoleDot()) {
            RoleDotView roleDot2 = this.binding.roleDot;
            Intrinsics.checkNotNullExpressionValue(roleDot2, "roleDot");
            roleDot2.setVisibility(0);
            RoleDotView roleDotView = this.binding.roleDot;
            RoleColors androidColors = RoleColorsKt.toAndroidColors(message.getRoleColors());
            if (androidColors == null) {
                androidColors = new RoleColors(MessageKt.roleDotColor$default(message, 0, 1, null), (Integer) null, (Integer) null, 6, (DefaultConstructorMarker) null);
            }
            RoleDotView.configure$default(roleDotView, androidColors, 0, 2, null);
        } else {
            RoleDotView roleDot3 = this.binding.roleDot;
            Intrinsics.checkNotNullExpressionValue(roleDot3, "roleDot");
            roleDot3.setVisibility(8);
        }
        if (message.getClanTag() != null && message.m235getClanTagGuildIdqOKuAAo() != null) {
            ClanTagChipletView.m501configureD0ylKIU$default(this.binding.clanTagChiplet, message.getClanTag(), message.getClanBadgeUrl(), message.m235getClanTagGuildIdqOKuAAo().m1080unboximpl(), chatEventHandler, 0.0f, 16, null);
            ClanTagChipletView clanTagChiplet = this.binding.clanTagChiplet;
            Intrinsics.checkNotNullExpressionValue(clanTagChiplet, "clanTagChiplet");
            clanTagChiplet.setVisibility(0);
        } else {
            ClanTagChipletView clanTagChiplet2 = this.binding.clanTagChiplet;
            Intrinsics.checkNotNullExpressionValue(clanTagChiplet2, "clanTagChiplet");
            clanTagChiplet2.setVisibility(8);
        }
        if (message.getRoleIcon() != null) {
            this.binding.roleIcon.configureRoleIcon(message.getRoleIcon(), chatEventHandler);
            RoleIconView roleIcon = this.binding.roleIcon;
            Intrinsics.checkNotNullExpressionValue(roleIcon, "roleIcon");
            roleIcon.setVisibility(0);
        } else {
            RoleIconView roleIcon2 = this.binding.roleIcon;
            Intrinsics.checkNotNullExpressionValue(roleIcon2, "roleIcon");
            roleIcon2.setVisibility(8);
        }
        if (message.getGameApplicationId() != null && message.getTimestamp() != null) {
            this.binding.gameIcon.configureGameIcon(message.getGameApplicationId(), message.getTimestamp(), chatEventHandler);
            GameIconView gameIcon = this.binding.gameIcon;
            Intrinsics.checkNotNullExpressionValue(gameIcon, "gameIcon");
            gameIcon.setVisibility(0);
        } else {
            GameIconView gameIcon2 = this.binding.gameIcon;
            Intrinsics.checkNotNullExpressionValue(gameIcon2, "gameIcon");
            gameIcon2.setVisibility(8);
        }
        if (message.getConnectionsRoleTag() != null) {
            this.binding.connectionsRoleTag.m503configureConnectionsRoleTaguESh2Cg(message.m233getAuthorIdwUX8bhU(), message.m236getGuildIdqOKuAAo(), ChannelId.m1058boximpl(message.m234getChannelIdo4g7jtM()), message.getConnectionsRoleTag(), chatEventHandler);
            ConnectionsRoleTagView connectionsRoleTag = this.binding.connectionsRoleTag;
            Intrinsics.checkNotNullExpressionValue(connectionsRoleTag, "connectionsRoleTag");
            connectionsRoleTag.setVisibility(0);
        } else {
            ConnectionsRoleTagView connectionsRoleTag2 = this.binding.connectionsRoleTag;
            Intrinsics.checkNotNullExpressionValue(connectionsRoleTag2, "connectionsRoleTag");
            connectionsRoleTag2.setVisibility(8);
        }
        if (message.getTagText() == null && message.getOpTagText() == null) {
            MessageTagView messageTagView = this.binding.messageTagView;
            Intrinsics.checkNotNullExpressionValue(messageTagView, "messageTagView");
            messageTagView.setVisibility(8);
            return;
        }
        MessageTagView messageTagView2 = this.binding.messageTagView;
        Intrinsics.checkNotNullExpressionValue(messageTagView2, "messageTagView");
        messageTagView2.setVisibility(0);
        this.binding.messageTagView.m531configureTagViewUl7AT2Q(message.getTagText(), message.getTagVerified(), message.getTagTextColor(), message.getTagBackgroundColor(), message.getOpTagText(), chatEventHandler, message.m237getId3Eiw7ao(), message.m234getChannelIdo4g7jtM(), message.getTagType(), message.getTagIconUrl());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void configureAuthor$lambda$49$lambda$47(Message message, ChatEventHandler chatEventHandler, View view) {
        if (message.m233getAuthorIdwUX8bhU() != null) {
            chatEventHandler.mo448onTapAvatarx5gers8(message.m237getId3Eiw7ao(), message.m233getAuthorIdwUX8bhU().m1145unboximpl());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean configureAuthor$lambda$49$lambda$48(Message message, ChatEventHandler chatEventHandler, View view) {
        if (message.m233getAuthorIdwUX8bhU() != null) {
            chatEventHandler.mo439onLongPressAvatarx5gers8(message.m237getId3Eiw7ao(), message.m233getAuthorIdwUX8bhU().m1145unboximpl());
            return true;
        }
        return true;
    }

    private final void configureAuthorClickListeners(View view, final Message message, final ChatEventHandler chatEventHandler) {
        NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(view, false, new View.OnClickListener() { // from class: com.discord.chat.presentation.message.d1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view2) {
                MessageView.configureAuthorClickListeners$lambda$16(Message.this, chatEventHandler, view2);
            }
        }, 1, null);
        NestedScrollOnTouchUtilsKt.setOnLongClickListenerNested$default(view, false, new View.OnLongClickListener() { // from class: com.discord.chat.presentation.message.e1
            @Override // android.view.View.OnLongClickListener
            public final boolean onLongClick(View view2) {
                boolean configureAuthorClickListeners$lambda$17;
                configureAuthorClickListeners$lambda$17 = MessageView.configureAuthorClickListeners$lambda$17(Message.this, chatEventHandler, view2);
                return configureAuthorClickListeners$lambda$17;
            }
        }, 1, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void configureAuthorClickListeners$lambda$16(Message message, ChatEventHandler chatEventHandler, View view) {
        if (message.m233getAuthorIdwUX8bhU() != null) {
            chatEventHandler.mo485onTapUsernamex5gers8(message.m237getId3Eiw7ao(), message.m233getAuthorIdwUX8bhU().m1145unboximpl());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean configureAuthorClickListeners$lambda$17(Message message, ChatEventHandler chatEventHandler, View view) {
        if (message.m233getAuthorIdwUX8bhU() != null) {
            chatEventHandler.mo442onLongPressUsernamex5gers8(message.m237getId3Eiw7ao(), message.m233getAuthorIdwUX8bhU().m1145unboximpl());
            return true;
        }
        return true;
    }

    private final void configureCommunicationDisabled(boolean z10, ChainPart chainPart) {
        boolean z11;
        float f10;
        float f11;
        float f12;
        float f13;
        float f14;
        int i10 = 0;
        if (z10 && (chainPart == ChainPart.START || chainPart == ChainPart.ONLY)) {
            z11 = true;
        } else {
            z11 = false;
        }
        SimpleDraweeView guildCommunicationDisabledIcon = this.binding.guildCommunicationDisabledIcon;
        Intrinsics.checkNotNullExpressionValue(guildCommunicationDisabledIcon, "guildCommunicationDisabledIcon");
        if (!z11) {
            i10 = 8;
        }
        guildCommunicationDisabledIcon.setVisibility(i10);
        SimpleDraweeView guildCommunicationDisabledIcon2 = this.binding.guildCommunicationDisabledIcon;
        Intrinsics.checkNotNullExpressionValue(guildCommunicationDisabledIcon2, "guildCommunicationDisabledIcon");
        ReactAssetUtilsKt.setReactAsset(guildCommunicationDisabledIcon2, ReactAsset.ClockTimeout);
        SimpleDraweeView simpleDraweeView = this.binding.authorAvatar;
        float f15 = 1.0f;
        if (z11) {
            f10 = 0.5f;
        } else {
            f10 = 1.0f;
        }
        simpleDraweeView.setAlpha(f10);
        ClanTagChipletView clanTagChipletView = this.binding.clanTagChiplet;
        if (z11) {
            f11 = 0.5f;
        } else {
            f11 = 1.0f;
        }
        clanTagChipletView.setAlpha(f11);
        RoleIconView roleIconView = this.binding.roleIcon;
        if (z11) {
            f12 = 0.5f;
        } else {
            f12 = 1.0f;
        }
        roleIconView.setAlpha(f12);
        GameIconView gameIconView = this.binding.gameIcon;
        if (z11) {
            f13 = 0.5f;
        } else {
            f13 = 1.0f;
        }
        gameIconView.setAlpha(f13);
        SimpleDraweeView simpleDraweeView2 = this.binding.authorAvatarDecoration;
        if (z11) {
            f14 = 0.5f;
        } else {
            f14 = 1.0f;
        }
        simpleDraweeView2.setAlpha(f14);
        SimpleDraweeView simpleDraweeView3 = this.binding.suppressNotificationsIcon;
        if (z11) {
            f15 = 0.5f;
        }
        simpleDraweeView3.setAlpha(f15);
    }

    private final void configureDivider(boolean z10) {
        int i10;
        View messageHeaderDivider = this.binding.messageHeaderDivider;
        Intrinsics.checkNotNullExpressionValue(messageHeaderDivider, "messageHeaderDivider");
        if (z10) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        messageHeaderDivider.setVisibility(i10);
    }

    private final void configureSuppressNotifications(boolean z10, final ChatEventHandler chatEventHandler, ChainPart chainPart) {
        boolean z11;
        int i10;
        if (z10 && (chainPart == ChainPart.START || chainPart == ChainPart.ONLY)) {
            z11 = true;
        } else {
            z11 = false;
        }
        SimpleDraweeView suppressNotificationsIcon = this.binding.suppressNotificationsIcon;
        Intrinsics.checkNotNullExpressionValue(suppressNotificationsIcon, "suppressNotificationsIcon");
        if (z11) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        suppressNotificationsIcon.setVisibility(i10);
        if (z11) {
            SimpleDraweeView suppressNotificationsIcon2 = this.binding.suppressNotificationsIcon;
            Intrinsics.checkNotNullExpressionValue(suppressNotificationsIcon2, "suppressNotificationsIcon");
            ReactAssetUtilsKt.setReactAsset(suppressNotificationsIcon2, ReactAsset.BellSnooze);
            SimpleDraweeView suppressNotificationsIcon3 = this.binding.suppressNotificationsIcon;
            Intrinsics.checkNotNullExpressionValue(suppressNotificationsIcon3, "suppressNotificationsIcon");
            ColorUtilsKt.setTintColor(suppressNotificationsIcon3, Integer.valueOf(ThemeManagerKt.getTheme().getInteractiveTextDefault()));
        }
        SimpleDraweeView suppressNotificationsIcon4 = this.binding.suppressNotificationsIcon;
        Intrinsics.checkNotNullExpressionValue(suppressNotificationsIcon4, "suppressNotificationsIcon");
        NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(suppressNotificationsIcon4, false, new View.OnClickListener() { // from class: com.discord.chat.presentation.message.u0
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                ChatEventHandler.this.onTapSuppressNotificationsIcon();
            }
        }, 1, null);
    }

    /* JADX WARN: Multi-variable type inference failed */
    private final List<MessageAccessory> generateMessageAccessories(MessageMargins messageMargins, Message message, MessageContext messageContext, Function6 function6) {
        boolean z10;
        int i10;
        int dimensionPixelSize;
        int i11;
        int i12;
        DefaultConstructorMarker defaultConstructorMarker;
        List<MessageReaction> reactions;
        boolean z11;
        String str;
        Integer num;
        boolean z12;
        MessageAccessory guildProfileInviteMessageAccessory;
        String str2;
        String str3;
        boolean z13;
        String str4;
        String m237getId3Eiw7ao;
        boolean z14;
        int textLink;
        int i13;
        int textMuted;
        Message message2 = message;
        this.accessories.clear();
        if (message2.getForwardInfo() != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            this.accessories.add(new ForwardHeaderMessageAccessory(message2.m237getId3Eiw7ao(), null));
        }
        Integer constrainedWidth = message2.getConstrainedWidth();
        if (constrainedWidth != null) {
            i10 = constrainedWidth.intValue();
        } else {
            i10 = getResources().getDisplayMetrics().widthPixels;
        }
        int i14 = i10;
        if (messageContext.getUseAttachmentGridLayout()) {
            dimensionPixelSize = getContext().getResources().getDimensionPixelSize(R.dimen.message_media_radius);
        } else {
            dimensionPixelSize = getContext().getResources().getDimensionPixelSize(R.dimen.message_media_non_mosaic_radius);
        }
        int i15 = dimensionPixelSize;
        StructurableText content = message2.getContent();
        if (content != null && content.getHasContent() && message2.getType() != MessageType.CUSTOM_GIFT) {
            ArrayList<MessageAccessory> arrayList = this.accessories;
            String m237getId3Eiw7ao2 = message2.m237getId3Eiw7ao();
            StructurableText content2 = message2.getContent();
            boolean shouldAnimateEmoji = MessageKt.shouldAnimateEmoji(message2);
            boolean shouldShowLinkDecorations = MessageKt.shouldShowLinkDecorations(message2);
            boolean shouldShowRoleDot = message2.getShouldShowRoleDot();
            boolean shouldShowRoleOnName = message2.getShouldShowRoleOnName();
            int dimensionPixelSize2 = getResources().getDimensionPixelSize(R.dimen.message_accessories_vertical_spacing);
            Integer linkColor = message2.getLinkColor();
            if (linkColor != null) {
                textLink = linkColor.intValue();
            } else {
                textLink = ThemeManagerKt.getTheme().getTextLink();
            }
            int i16 = textLink;
            DiscordFont discordFont = DiscordFont.PrimaryMedium;
            Context context = getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            int chatTextSizeSp = MessageUtilsKt.getChatTextSizeSp(context);
            MessageState state = message2.getState();
            if (state == null) {
                i13 = -1;
            } else {
                i13 = WhenMappings.$EnumSwitchMapping$0[state.ordinal()];
            }
            if (i13 != 1 && i13 != 2) {
                Integer textColor = message2.getTextColor();
                if (textColor != null) {
                    textMuted = textColor.intValue();
                } else {
                    textMuted = ThemeManagerKt.getTheme().getTextDefault();
                }
            } else {
                textMuted = ThemeManagerKt.getTheme().getTextMuted();
            }
            MessageContentAccessory messageContentAccessory = new MessageContentAccessory(m237getId3Eiw7ao2, messageMargins, content2, shouldAnimateEmoji, shouldShowLinkDecorations, shouldShowRoleDot, shouldShowRoleOnName, dimensionPixelSize2, i16, textMuted, discordFont, chatTextSizeSp, false, i14, message2.getEdited(), message2.getEditedColor(), z10, messageContext.getTruncation(), null, 262144, null);
            i11 = i14;
            arrayList.add(messageContentAccessory);
        } else {
            i11 = i14;
        }
        if (message2.getPollData() != null && message2.getPollData().getLayoutType() != PollLayoutType.UNKNOWN) {
            ArrayList<MessageAccessory> arrayList2 = this.accessories;
            PollMessageAccessory.Companion companion = PollMessageAccessory.Companion;
            Context context2 = getContext();
            Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
            arrayList2.add(companion.create(context2, message2, message2.getPollData()));
        }
        if (message2.getSharedClientTheme() != null) {
            this.accessories.add(SharedCustomThemeMessageAccessory.Companion.create(message2, message2.getSharedClientTheme()));
        }
        if (message2.getAttachments() != null && message2.getPollData() == null && !MessageFlagKt.hasMessageFlag(Long.valueOf(message2.getFlags()), MessageFlag.IS_COMPONENTS_V2)) {
            List<Attachment> attachments = message2.getAttachments();
            if (!(attachments instanceof Collection) || !attachments.isEmpty()) {
                for (Attachment attachment : attachments) {
                    if (Intrinsics.areEqual(attachment.getObscure(), Boolean.TRUE)) {
                        z13 = true;
                        break;
                    }
                }
            }
            z13 = false;
            Iterable n12 = CollectionsKt.n1(message2.getAttachments());
            ArrayList arrayList3 = new ArrayList();
            ArrayList arrayList4 = new ArrayList();
            for (Object obj : n12) {
                IndexedValue indexedValue = (IndexedValue) obj;
                if (((Attachment) indexedValue.d()).type() != AttachmentType.Image && ((Attachment) indexedValue.d()).type() != AttachmentType.Video) {
                    arrayList4.add(obj);
                } else {
                    arrayList3.add(obj);
                }
            }
            Pair pair = new Pair(arrayList3, arrayList4);
            List list = (List) pair.a();
            List<IndexedValue> list2 = (List) pair.b();
            if (!list.isEmpty() && messageContext.getUseAttachmentGridLayout()) {
                if (!Intrinsics.areEqual(message2.isCurrentUserMessageAuthor(), Boolean.TRUE) || (m237getId3Eiw7ao = message2.m238getNonceN_6c4I0()) == null) {
                    m237getId3Eiw7ao = message2.m237getId3Eiw7ao();
                }
                String str5 = m237getId3Eiw7ao;
                ArrayList<MessageAccessory> arrayList5 = this.accessories;
                long m234getChannelIdo4g7jtM = message2.m234getChannelIdo4g7jtM();
                List<IndexedValue> list3 = list;
                ArrayList arrayList6 = new ArrayList(CollectionsKt.w(list3, 10));
                for (IndexedValue indexedValue2 : list3) {
                    arrayList6.add(CreateAttachmentAccessoryKt.createAttachmentAccessory((Attachment) indexedValue2.d(), message2, indexedValue2.c(), i11, getContext().getResources().getDimensionPixelSize(R.dimen.message_media_grid_inner_radius), ((Attachment) indexedValue2.d()).getVerifyAge()));
                    message2 = message;
                }
                MessageState state2 = message.getState();
                if (state2 == null) {
                    state2 = MessageState.Unknown;
                }
                MessageState messageState = state2;
                Boolean gifAutoPlay = message.getGifAutoPlay();
                if (gifAutoPlay != null) {
                    z14 = gifAutoPlay.booleanValue();
                } else {
                    z14 = false;
                }
                arrayList5.add(new MediaMosaicAttachmentMessageAccessory(str5, messageMargins, m234getChannelIdo4g7jtM, arrayList6, i11, z10, messageState, z14, null));
            }
            ArrayList<MessageAccessory> arrayList7 = this.accessories;
            for (IndexedValue indexedValue3 : list2) {
                int i17 = i15;
                arrayList7.add(CreateAttachmentAccessoryKt.createAttachmentAccessory((Attachment) indexedValue3.d(), message, indexedValue3.c(), i11, i17, ((Attachment) indexedValue3.d()).getVerifyAge()));
                i15 = i17;
            }
            message2 = message;
            i12 = i15;
            if (z13) {
                ArrayList<MessageAccessory> arrayList8 = this.accessories;
                String m237getId3Eiw7ao3 = message2.m237getId3Eiw7ao();
                long m234getChannelIdo4g7jtM2 = message2.m234getChannelIdo4g7jtM();
                String obscureLearnMoreLabel = message2.getObscureLearnMoreLabel();
                if (obscureLearnMoreLabel == null) {
                    str4 = "";
                } else {
                    str4 = obscureLearnMoreLabel;
                }
                arrayList8.add(new InfoLinkMessageAccessory(m237getId3Eiw7ao3, m234getChannelIdo4g7jtM2, null, null, str4, ReactAsset.Info, null));
            }
        } else {
            i12 = i15;
        }
        List<PostPreviewEmbed> postPreviewEmbeds = message2.getPostPreviewEmbeds();
        if (postPreviewEmbeds != null) {
            int i18 = 0;
            for (Object obj2 : postPreviewEmbeds) {
                int i19 = i18 + 1;
                if (i18 < 0) {
                    CollectionsKt.v();
                }
                PostPreviewEmbed postPreviewEmbed = (PostPreviewEmbed) obj2;
                this.accessories.add(new PostPreviewEmbedMessageAccessory(message2.m237getId3Eiw7ao(), postPreviewEmbed, i18, SpoilerAttributes.Companion.forMediaPostPreviewEmbed(postPreviewEmbed, message2, i18, postPreviewEmbed.getVerifyAge()), null));
                i18 = i19;
            }
            Unit unit = Unit.f33298a;
        }
        List<Embed> embeds = message2.getEmbeds();
        if (embeds != null) {
            int i20 = 0;
            for (Object obj3 : embeds) {
                int i21 = i20 + 1;
                if (i20 < 0) {
                    CollectionsKt.v();
                }
                Embed embed = (Embed) obj3;
                boolean z15 = z10;
                z10 = z15;
                this.accessories.add(new EmbedMessageAccessory(message2.m237getId3Eiw7ao(), messageMargins, i20, message2.m234getChannelIdo4g7jtM(), i11, i12, embed, MessageKt.shouldAutoPlayGifs(message2), MessageKt.shouldAnimateEmoji(message2), MessageKt.shouldShowLinkDecorations(message2), message2.getShouldShowRoleDot(), message2.getShouldShowRoleOnName(), SpoilerAttributes.Companion.forEmbed(embed, message2, i20, embed.getVerifyAge()), generateMessageAccessories$getLongClickListener(function6, message2, i20, MediaType.Embed), z15, null));
                if (embed.getObscureOrNull() != null) {
                    ArrayList<MessageAccessory> arrayList9 = this.accessories;
                    String m237getId3Eiw7ao4 = message2.m237getId3Eiw7ao();
                    long m234getChannelIdo4g7jtM3 = message2.m234getChannelIdo4g7jtM();
                    String id2 = embed.getId();
                    if (id2 != null && !StringsKt.k0(id2)) {
                        str2 = embed.getId();
                    } else {
                        str2 = "index_" + i20;
                    }
                    String str6 = str2;
                    String obscureLearnMoreLabel2 = message2.getObscureLearnMoreLabel();
                    if (obscureLearnMoreLabel2 == null) {
                        str3 = "";
                    } else {
                        str3 = obscureLearnMoreLabel2;
                    }
                    arrayList9.add(new InfoLinkMessageAccessory(m237getId3Eiw7ao4, m234getChannelIdo4g7jtM3, null, str6, str3, ReactAsset.Info, null));
                }
                i20 = i21;
            }
            Unit unit2 = Unit.f33298a;
        }
        List<GiftEmbed> giftCodes = message2.getGiftCodes();
        if (giftCodes != null) {
            int i22 = 0;
            for (Object obj4 : giftCodes) {
                int i23 = i22 + 1;
                if (i22 < 0) {
                    CollectionsKt.v();
                }
                this.accessories.add(new GiftMessageAccessory(message2.m237getId3Eiw7ao(), i22, (GiftEmbed) obj4, null));
                i22 = i23;
            }
            Unit unit3 = Unit.f33298a;
        }
        GiftEmbed referralTrialOffer = message2.getReferralTrialOffer();
        if (referralTrialOffer != null) {
            this.accessories.add(new GiftMessageAccessory(message2.m237getId3Eiw7ao(), 0, referralTrialOffer, null));
        }
        ReferralEmbed referralTrialOfferInfo = message2.getReferralTrialOfferInfo();
        if (referralTrialOfferInfo != null) {
            this.accessories.add(new ReferralMessageAccessory(message2.m237getId3Eiw7ao(), referralTrialOfferInfo, null));
        }
        PremiumGroupInviteEmbed premiumGroupInviteInfo = message2.getPremiumGroupInviteInfo();
        if (premiumGroupInviteInfo != null) {
            this.accessories.add(new PremiumGroupInviteMessageAccessory(message2.m237getId3Eiw7ao(), premiumGroupInviteInfo, null));
        }
        ActivityInstanceEmbed activityInstanceEmbed = message2.getActivityInstanceEmbed();
        if (activityInstanceEmbed != null) {
            this.accessories.add(new ActivityInstanceEmbedMessageAccessory(message2.m237getId3Eiw7ao(), messageMargins, activityInstanceEmbed, i11, null));
        }
        List<CodedLinkEmbed> codedLinks = message2.getCodedLinks();
        if (codedLinks != null) {
            int i24 = 0;
            for (Object obj5 : codedLinks) {
                int i25 = i24 + 1;
                if (i24 < 0) {
                    CollectionsKt.v();
                }
                CodedLinkEmbed codedLinkEmbed = (CodedLinkEmbed) obj5;
                if (codedLinkEmbed != null) {
                    ArrayList<MessageAccessory> arrayList10 = this.accessories;
                    if (codedLinkEmbed instanceof GuildEventInviteEmbedImpl) {
                        guildProfileInviteMessageAccessory = new GuildEventInviteMessageAccessory(message2.m237getId3Eiw7ao(), messageMargins, i24, (GuildEventInviteEmbedImpl) codedLinkEmbed, MessageKt.shouldAnimateEmoji(message2), MessageKt.shouldShowLinkDecorations(message2), message2.getShouldShowRoleDot(), message2.getShouldShowRoleDot(), null);
                    } else if (codedLinkEmbed instanceof GuildInviteDisabledEmbedImpl) {
                        guildProfileInviteMessageAccessory = new GuildInviteDisabledMessageAccessory(message2.m237getId3Eiw7ao(), i24, (GuildInviteDisabledEmbedImpl) codedLinkEmbed, null);
                    } else if (codedLinkEmbed instanceof GuildInviteEmbedImpl) {
                        guildProfileInviteMessageAccessory = new GuildInviteMessageAccessory(message2.m237getId3Eiw7ao(), i24, (GuildInviteEmbedImpl) codedLinkEmbed, null);
                    } else if (codedLinkEmbed instanceof AppMessageEmbedImpl) {
                        int i26 = i11;
                        guildProfileInviteMessageAccessory = new AppMessageEmbedAccessory(message2.m237getId3Eiw7ao(), messageMargins, i24, (AppMessageEmbedImpl) codedLinkEmbed, i26, null);
                        i11 = i26;
                    } else if (codedLinkEmbed instanceof EmbeddedActivityInviteEmbedImpl) {
                        int i27 = i11;
                        i11 = i27;
                        guildProfileInviteMessageAccessory = new EmbeddedActivityInviteMessageAccessory(message2.m237getId3Eiw7ao(), messageMargins, i24, (EmbeddedActivityInviteEmbedImpl) codedLinkEmbed, i27, null);
                    } else if (codedLinkEmbed instanceof GuildProfileInviteEmbedImpl) {
                        guildProfileInviteMessageAccessory = new GuildProfileInviteMessageAccessory(message2.m237getId3Eiw7ao(), i24, (GuildProfileInviteEmbedImpl) codedLinkEmbed, null);
                    } else {
                        throw new ir.p();
                    }
                    arrayList10.add(guildProfileInviteMessageAccessory);
                    Unit unit4 = Unit.f33298a;
                }
                i24 = i25;
            }
            Unit unit5 = Unit.f33298a;
        }
        List<Sticker> stickers = message2.getStickers();
        if (stickers != null) {
            for (Sticker sticker : stickers) {
                this.accessories.add(new StickerMessageAccessory(message2.m237getId3Eiw7ao(), sticker, null));
            }
            Unit unit6 = Unit.f33298a;
        }
        if (message2.getComponents() != null) {
            defaultConstructorMarker = null;
            this.accessories.add(new MessageComponentsAccessory(message.m237getId3Eiw7ao(), messageMargins, message, message.getComponents(), i11, null));
        } else {
            defaultConstructorMarker = null;
        }
        if (message.getReactions() != null && (!reactions.isEmpty())) {
            z11 = true;
        } else {
            z11 = false;
        }
        if ((z11 && !message.isFirstForumPostMessage()) || messageContext.getContextType() == MessageContextType.MEDIA_VIEWER) {
            List<Embed> embeds2 = message.getEmbeds();
            if (embeds2 != null && !embeds2.isEmpty()) {
                str = "embed";
            } else {
                str = "shortcut";
            }
            ArrayList<MessageAccessory> arrayList11 = this.accessories;
            String m237getId3Eiw7ao5 = message.m237getId3Eiw7ao();
            List<MessageReaction> reactions2 = message.getReactions();
            if (reactions2 == null) {
                reactions2 = CollectionsKt.l();
            }
            List<MessageReaction> list4 = reactions2;
            boolean canAddNewReactions = messageContext.getCanAddNewReactions();
            String addNewReactionAccessibilityLabel = messageContext.getAddNewReactionAccessibilityLabel();
            ReactionsTheme reactionsTheme = messageContext.getReactionsTheme();
            if (Intrinsics.areEqual(str, "embed")) {
                num = 0;
            } else {
                num = defaultConstructorMarker;
            }
            if (messageContext.getContextType() == MessageContextType.MEDIA_VIEWER && !z11) {
                z12 = true;
            } else {
                z12 = false;
            }
            arrayList11.add(new ReactionsMessageAccessory(m237getId3Eiw7ao5, list4, canAddNewReactions, addNewReactionAccessibilityLabel, reactionsTheme, null, str, num, z12, messageContext.getShowReplyButton(), 32, null));
        }
        ActivityRichPresenceInviteEmbed activityRichPresenceInviteEmbed = message.getActivityRichPresenceInviteEmbed();
        if (activityRichPresenceInviteEmbed != null) {
            this.accessories.add(new ActivityRichPresenceInviteEmbedMessageAccessory(message.m237getId3Eiw7ao(), messageMargins, activityRichPresenceInviteEmbed, defaultConstructorMarker));
        }
        ThreadEmbed threadEmbed = message.getThreadEmbed();
        if (threadEmbed != null) {
            this.accessories.add(new ThreadEmbedMessageAccessory(message.m237getId3Eiw7ao(), threadEmbed, defaultConstructorMarker));
        }
        InteractionStatus interactionStatus = message.getInteractionStatus();
        if (interactionStatus != null) {
            this.accessories.add(new InteractionStatusMessageAccessory(message.m237getId3Eiw7ao(), interactionStatus, defaultConstructorMarker));
        }
        CtaButton ctaButton = message.getCtaButton();
        if (ctaButton != null) {
            this.accessories.add(new CtaButtonMessageAccessory(message.m234getChannelIdo4g7jtM(), message.m237getId3Eiw7ao(), ctaButton, null));
        }
        EphemeralIndication ephemeralIndication = message.getEphemeralIndication();
        if (ephemeralIndication != null) {
            this.accessories.add(new EphemeralIndicationMessageAccessory(message.m237getId3Eiw7ao(), ephemeralIndication, defaultConstructorMarker));
        }
        SurveyIndication surveyIndication = message.getSurveyIndication();
        if (surveyIndication != null) {
            this.accessories.add(new SurveyIndicationMessageAccessory(message.m237getId3Eiw7ao(), surveyIndication, defaultConstructorMarker));
        }
        if (message.isFirstForumPostMessage() && message.getPostActions() != null && messageContext.getContextType() != MessageContextType.MEDIA_VIEWER) {
            this.accessories.add(new ForumPostActionBar(message.m237getId3Eiw7ao(), message.getPostActions(), message.getReactions(), messageContext.getCanAddNewReactions(), messageContext.getAddNewReactionAccessibilityLabel(), messageContext.getReactionsTheme(), null));
        }
        SafetyPolicyNoticeEmbed safetyPolicyNoticeEmbed = message.getSafetyPolicyNoticeEmbed();
        if (safetyPolicyNoticeEmbed != null) {
            this.accessories.add(new SafetyPolicyNoticeMessageAccessory(message.m237getId3Eiw7ao(), safetyPolicyNoticeEmbed, defaultConstructorMarker));
        }
        SafetySystemNotificationEmbed safetySystemNotificationEmbed = message.getSafetySystemNotificationEmbed();
        if (safetySystemNotificationEmbed != null) {
            this.accessories.add(new SafetySystemNotificationMessageAccessory(message.m237getId3Eiw7ao(), safetySystemNotificationEmbed, defaultConstructorMarker));
        }
        ForwardInfo forwardInfo = message.getForwardInfo();
        if (forwardInfo != null && forwardInfo.getFooterInfo() != null) {
            this.accessories.add(new ForwardBreadcrumbMessageAccessory(message.m237getId3Eiw7ao(), message.m234getChannelIdo4g7jtM(), message.getForwardInfo(), null));
        }
        if (message.getForwardInfo() != null) {
            ArrayList<MessageAccessory> arrayList12 = this.accessories;
            final Function2 function2 = new Function2() { // from class: com.discord.chat.presentation.message.k1
                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(Object obj6, Object obj7) {
                    int generateMessageAccessories$lambda$44;
                    generateMessageAccessories$lambda$44 = MessageView.generateMessageAccessories$lambda$44((MessageAccessory) obj6, (MessageAccessory) obj7);
                    return Integer.valueOf(generateMessageAccessories$lambda$44);
                }
            };
            CollectionsKt.A(arrayList12, new Comparator() { // from class: com.discord.chat.presentation.message.l1
                @Override // java.util.Comparator
                public final int compare(Object obj6, Object obj7) {
                    int generateMessageAccessories$lambda$45;
                    generateMessageAccessories$lambda$45 = MessageView.generateMessageAccessories$lambda$45(Function2.this, obj6, obj7);
                    return generateMessageAccessories$lambda$45;
                }
            });
        }
        return this.accessories;
    }

    private static final View.OnLongClickListener generateMessageAccessories$getLongClickListener(final Function6 function6, final Message message, final int i10, final MediaType mediaType) {
        if (function6 != null) {
            return new View.OnLongClickListener() { // from class: com.discord.chat.presentation.message.v0
                @Override // android.view.View.OnLongClickListener
                public final boolean onLongClick(View view) {
                    boolean generateMessageAccessories$getLongClickListener$lambda$19$lambda$18;
                    generateMessageAccessories$getLongClickListener$lambda$19$lambda$18 = MessageView.generateMessageAccessories$getLongClickListener$lambda$19$lambda$18(Function6.this, message, i10, mediaType, view);
                    return generateMessageAccessories$getLongClickListener$lambda$19$lambda$18;
                }
            };
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean generateMessageAccessories$getLongClickListener$lambda$19$lambda$18(Function6 function6, Message message, int i10, MediaType mediaType, View view) {
        function6.invoke(MessageId.m1084boximpl(message.m237getId3Eiw7ao()), ChannelId.m1058boximpl(message.m234getChannelIdo4g7jtM()), Integer.valueOf(i10), mediaType, null, null);
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int generateMessageAccessories$lambda$44(MessageAccessory messageAccessory, MessageAccessory messageAccessory2) {
        if (!messageAccessory.isForwardInner() && messageAccessory2.isForwardInner()) {
            return 1;
        }
        if (messageAccessory.isForwardInner() && !messageAccessory2.isForwardInner()) {
            return -1;
        }
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int generateMessageAccessories$lambda$45(Function2 function2, Object obj, Object obj2) {
        return ((Number) function2.invoke(obj, obj2)).intValue();
    }

    private final void hideHeader() {
        TextView timestamp = this.binding.timestamp;
        Intrinsics.checkNotNullExpressionValue(timestamp, "timestamp");
        timestamp.setVisibility(8);
        TextView authorName = this.binding.authorName;
        Intrinsics.checkNotNullExpressionValue(authorName, "authorName");
        authorName.setVisibility(8);
        SimpleDraweeView authorAvatar = this.binding.authorAvatar;
        Intrinsics.checkNotNullExpressionValue(authorAvatar, "authorAvatar");
        authorAvatar.setVisibility(8);
        SimpleDraweeView authorAvatarDecoration = this.binding.authorAvatarDecoration;
        Intrinsics.checkNotNullExpressionValue(authorAvatarDecoration, "authorAvatarDecoration");
        authorAvatarDecoration.setVisibility(8);
        RoleDotView roleDot = this.binding.roleDot;
        Intrinsics.checkNotNullExpressionValue(roleDot, "roleDot");
        roleDot.setVisibility(8);
        ClanTagChipletView clanTagChiplet = this.binding.clanTagChiplet;
        Intrinsics.checkNotNullExpressionValue(clanTagChiplet, "clanTagChiplet");
        clanTagChiplet.setVisibility(8);
        RoleIconView roleIcon = this.binding.roleIcon;
        Intrinsics.checkNotNullExpressionValue(roleIcon, "roleIcon");
        roleIcon.setVisibility(8);
        GameIconView gameIcon = this.binding.gameIcon;
        Intrinsics.checkNotNullExpressionValue(gameIcon, "gameIcon");
        gameIcon.setVisibility(8);
        ConnectionsRoleTagView connectionsRoleTag = this.binding.connectionsRoleTag;
        Intrinsics.checkNotNullExpressionValue(connectionsRoleTag, "connectionsRoleTag");
        connectionsRoleTag.setVisibility(8);
        MessageTagView messageTagView = this.binding.messageTagView;
        Intrinsics.checkNotNullExpressionValue(messageTagView, "messageTagView");
        messageTagView.setVisibility(8);
        SimpleDraweeView suppressNotificationsIcon = this.binding.suppressNotificationsIcon;
        Intrinsics.checkNotNullExpressionValue(suppressNotificationsIcon, "suppressNotificationsIcon");
        suppressNotificationsIcon.setVisibility(8);
    }

    private final void initReplyView() {
        View inflate = this.binding.replyPreviewView.inflate();
        Intrinsics.checkNotNull(inflate, "null cannot be cast to non-null type com.discord.chat.presentation.message.MessageViewReplyPreview");
        setReplyPreview((MessageViewReplyPreview) inflate);
    }

    public static /* synthetic */ void setMessage$default(MessageView messageView, Message message, MessageContext messageContext, ChatEventHandler chatEventHandler, ComponentProvider componentProvider, Function0 function0, boolean z10, boolean z11, int i10, Object obj) {
        boolean z12;
        if ((i10 & 4) != 0) {
            chatEventHandler = ChatEventHandler.Empty.INSTANCE;
        }
        ChatEventHandler chatEventHandler2 = chatEventHandler;
        if ((i10 & 8) != 0) {
            componentProvider = null;
        }
        ComponentProvider componentProvider2 = componentProvider;
        Function0 function02 = function0;
        if ((i10 & 16) != 0) {
            function02 = new Function0() { // from class: com.discord.chat.presentation.message.f1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    MessageView.ChainPart chainPart;
                    chainPart = MessageView.ChainPart.ONLY;
                    return chainPart;
                }
            };
        }
        Function0 function03 = function02;
        if ((i10 & 32) != 0) {
            z10 = true;
        }
        boolean z13 = z10;
        if ((i10 & 64) != 0) {
            z12 = false;
        } else {
            z12 = z11;
        }
        messageView.setMessage(message, messageContext, chatEventHandler2, componentProvider2, function03, z13, z12);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void setMessage$lambda$11$lambda$10(Function2 function2, Message message, View view) {
        function2.invoke(MessageId.m1084boximpl(message.m237getId3Eiw7ao()), ChannelId.m1058boximpl(message.m234getChannelIdo4g7jtM()));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean setMessage$lambda$13$lambda$12(Function6 function6, Message message, View view) {
        function6.invoke(MessageId.m1084boximpl(message.m237getId3Eiw7ao()), ChannelId.m1058boximpl(message.m234getChannelIdo4g7jtM()), null, null, null, null);
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void setMessage$lambda$15$lambda$14(Function2 function2, Message message, View view) {
        function2.invoke(MessageId.m1084boximpl(message.m237getId3Eiw7ao()), ChannelId.m1058boximpl(message.m234getChannelIdo4g7jtM()));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setMessage$lambda$5(ChatEventHandler chatEventHandler, Message message) {
        ChatEventHandler.DefaultImpls.m488onInitiateReply8a0ehIg$default(chatEventHandler, message.m237getId3Eiw7ao(), message.m234getChannelIdo4g7jtM(), null, null, 12, null);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setMessage$lambda$6(ChatEventHandler chatEventHandler, Message message) {
        chatEventHandler.mo436onInitiateThreadpfaIj0E(message.m237getId3Eiw7ao(), message.m234getChannelIdo4g7jtM());
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setMessage$lambda$7(ChatEventHandler chatEventHandler, Message message) {
        chatEventHandler.mo434onInitiateEditpfaIj0E(message.m237getId3Eiw7ao(), message.m234getChannelIdo4g7jtM());
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setMessage$lambda$9(ChatEventHandler chatEventHandler, Message message) {
        chatEventHandler.mo467onTapMessageReply0eiqbug(message.m234getChannelIdo4g7jtM(), message.m237getId3Eiw7ao());
        return Unit.f33298a;
    }

    @Override // com.discord.chat.presentation.list.SwipeReplyInitiator
    public boolean getEnableSwipeToEdit() {
        return this.enableSwipeToEdit;
    }

    @Override // com.discord.chat.presentation.list.SwipeReplyInitiator
    public boolean getEnableSwipeToReply() {
        return this.enableSwipeToReply;
    }

    @Override // com.discord.chat.presentation.list.SwipeReplyInitiator
    @NotNull
    public Function0<Unit> getOnInitiateEdit() {
        return this.onInitiateEdit;
    }

    @Override // com.discord.chat.presentation.list.SwipeReplyInitiator
    @NotNull
    public Function0<Unit> getOnInitiateReply() {
        return this.onInitiateReply;
    }

    @NotNull
    public final MessageViewReplyPreview getReplyPreview() {
        MessageViewReplyPreview messageViewReplyPreview = this.replyPreview;
        if (messageViewReplyPreview != null) {
            return messageViewReplyPreview;
        }
        Intrinsics.throwUninitializedPropertyAccessException("replyPreview");
        return null;
    }

    @Override // com.discord.chat.presentation.list.SwipeReplyInitiator
    @NotNull
    public MaskedShadowView getShadowView() {
        return this.shadowView;
    }

    @Override // com.discord.chat.presentation.spine.SpineParentMessage
    @NotNull
    public View getSpineOriginView() {
        SimpleDraweeView authorAvatar = this.binding.authorAvatar;
        Intrinsics.checkNotNullExpressionValue(authorAvatar, "authorAvatar");
        return authorAvatar;
    }

    @Override // com.discord.chat.presentation.list.SwipeReplyInitiator
    public boolean getUsingGradientTheme() {
        return this.usingGradientTheme;
    }

    @Override // com.discord.chat.presentation.list.FactoryCreatable
    public void onFactoryCreate() {
        initReplyView();
    }

    @Override // android.view.ViewGroup
    public boolean onInterceptTouchEvent(@NotNull MotionEvent ev2) {
        Intrinsics.checkNotNullParameter(ev2, "ev");
        return !this.allowChildGestures;
    }

    public final void onRecycledHint() {
        this.binding.accessoriesView.clear(false);
    }

    @Override // com.discord.chat.presentation.list.SwipeReplyInitiator
    public void onSwipeEnd() {
        setClipChildren(true);
        getShadowView().setVisibility(4);
    }

    @Override // com.discord.chat.presentation.list.SwipeReplyInitiator
    public void onSwipeStart() {
        setClipChildren(false);
        getShadowView().setVisibility(0);
    }

    public final void setAccessoriesRecycledViewPool(@NotNull RecyclerView.RecycledViewPool recycledViewPool) {
        Intrinsics.checkNotNullParameter(recycledViewPool, "recycledViewPool");
        this.binding.accessoriesView.setRecycledViewPool(recycledViewPool);
    }

    @Override // com.discord.chat.presentation.list.SwipeReplyInitiator
    public void setEnableSwipeToEdit(boolean z10) {
        this.enableSwipeToEdit = z10;
    }

    @Override // com.discord.chat.presentation.list.SwipeReplyInitiator
    public void setEnableSwipeToReply(boolean z10) {
        this.enableSwipeToReply = z10;
    }

    public final void setMessage(@NotNull final Message message, @NotNull MessageContext messageContext, @NotNull final ChatEventHandler eventHandler, ComponentProvider componentProvider, @NotNull Function0<? extends ChainPart> onChainPart, boolean z10, boolean z11) {
        boolean m1088equalsimpl0;
        View.OnClickListener onClickListener;
        View.OnLongClickListener onLongClickListener;
        View.OnLongClickListener onLongClickListener2;
        boolean z12;
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(messageContext, "messageContext");
        Intrinsics.checkNotNullParameter(eventHandler, "eventHandler");
        Intrinsics.checkNotNullParameter(onChainPart, "onChainPart");
        bindKey(MessageId.m1084boximpl(message.m237getId3Eiw7ao()));
        String str = this.messageId;
        String m237getId3Eiw7ao = message.m237getId3Eiw7ao();
        if (str == null) {
            m1088equalsimpl0 = false;
        } else {
            m1088equalsimpl0 = MessageId.m1088equalsimpl0(str, m237getId3Eiw7ao);
        }
        this.messageId = message.m237getId3Eiw7ao();
        View.OnClickListener onClickListener2 = null;
        if (!m1088equalsimpl0 && messageContext.getContextType() == MessageContextType.SEARCH) {
            MessageAccessoriesView.clear$default(this.binding.accessoriesView, false, 1, null);
        }
        this.onChainPart = onChainPart;
        setOnInitiateReply(new Function0() { // from class: com.discord.chat.presentation.message.w0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit message$lambda$5;
                message$lambda$5 = MessageView.setMessage$lambda$5(ChatEventHandler.this, message);
                return message$lambda$5;
            }
        });
        this.onInitiateThread = new Function0() { // from class: com.discord.chat.presentation.message.x0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit message$lambda$6;
                message$lambda$6 = MessageView.setMessage$lambda$6(ChatEventHandler.this, message);
                return message$lambda$6;
            }
        };
        setOnInitiateEdit(new Function0() { // from class: com.discord.chat.presentation.message.y0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit message$lambda$7;
                message$lambda$7 = MessageView.setMessage$lambda$7(ChatEventHandler.this, message);
                return message$lambda$7;
            }
        });
        setEnableSwipeToReply(messageContext.getEnableSwipeToReply());
        setEnableSwipeToEdit(messageContext.getEnableSwipeToEdit());
        setUsingGradientTheme(messageContext.getUsingGradientTheme());
        this.allowChildGestures = z10;
        ChainPart chainPart = (ChainPart) onChainPart.invoke();
        Integer timestampColor = message.getTimestampColor();
        if (timestampColor != null) {
            this.binding.timestamp.setTextColor(timestampColor.intValue());
        }
        configureDivider(messageContext.getShowDivider());
        if (message.getReferencedMessage() != null) {
            if (this.replyPreview == null) {
                initReplyView();
            }
            MessageViewReplyPreview.configureReply$default(getReplyPreview(), message.getReferencedMessage(), false, new Function0() { // from class: com.discord.chat.presentation.message.z0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit message$lambda$9;
                    message$lambda$9 = MessageView.setMessage$lambda$9(ChatEventHandler.this, message);
                    return message$lambda$9;
                }
            }, 2, null);
        } else if (message.getExecutedCommand() != null) {
            if (this.replyPreview == null) {
                initReplyView();
            }
            getReplyPreview().m532configureExecutedCommanddB0bEw(message.m237getId3Eiw7ao(), message.getExecutedCommand(), MessageKt.shouldAnimateEmoji(message), MessageKt.shouldShowLinkDecorations(message), message.getShouldShowRoleDot(), message.getShouldShowRoleOnName(), eventHandler);
        } else if (this.replyPreview != null) {
            getReplyPreview().clear();
        }
        final Function2<MessageId, ChannelId, Unit> mo494getOnMessageTapped = eventHandler.mo494getOnMessageTapped();
        if (mo494getOnMessageTapped != null) {
            onClickListener = new View.OnClickListener() { // from class: com.discord.chat.presentation.message.a1
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    MessageView.setMessage$lambda$11$lambda$10(Function2.this, message, view);
                }
            };
        } else {
            onClickListener = null;
        }
        final Function6 mo493getOnMessageLongPressed = eventHandler.mo493getOnMessageLongPressed();
        if (mo493getOnMessageLongPressed != null) {
            onLongClickListener = new View.OnLongClickListener() { // from class: com.discord.chat.presentation.message.b1
                @Override // android.view.View.OnLongClickListener
                public final boolean onLongClick(View view) {
                    boolean message$lambda$13$lambda$12;
                    message$lambda$13$lambda$12 = MessageView.setMessage$lambda$13$lambda$12(Function6.this, message, view);
                    return message$lambda$13$lambda$12;
                }
            };
        } else {
            onLongClickListener = null;
        }
        final Function2<MessageId, ChannelId, Unit> mo492getOnMessageDoubleTapped = eventHandler.mo492getOnMessageDoubleTapped();
        if (mo492getOnMessageDoubleTapped != null) {
            onClickListener2 = new View.OnClickListener() { // from class: com.discord.chat.presentation.message.c1
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    MessageView.setMessage$lambda$15$lambda$14(Function2.this, message, view);
                }
            };
        }
        NestedScrollOnTouchUtilsKt.setOnDoubleClickListenerNested(this, true, onClickListener2);
        NestedScrollOnTouchUtilsKt.setOnClickListenerNested(this, true, onClickListener);
        NestedScrollOnTouchUtilsKt.setOnLongClickListenerNested(this, true, onLongClickListener);
        Resources resources = getResources();
        Intrinsics.checkNotNullExpressionValue(resources, "getResources(...)");
        MessageMargins messageMargins = new MessageMargins(resources, messageContext, z11);
        List<MessageAccessory> generateMessageAccessories = generateMessageAccessories(messageMargins, message, messageContext, eventHandler.mo493getOnMessageLongPressed());
        MessageAccessoriesView messageAccessoriesView = this.binding.accessoriesView;
        View.OnLongClickListener onLongClickListener3 = onLongClickListener;
        String m237getId3Eiw7ao2 = message.m237getId3Eiw7ao();
        long m234getChannelIdo4g7jtM = message.m234getChannelIdo4g7jtM();
        GuildId m236getGuildIdqOKuAAo = message.m236getGuildIdqOKuAAo();
        if (message.getForwardInfo() != null) {
            onLongClickListener2 = onLongClickListener3;
            z12 = true;
        } else {
            onLongClickListener2 = onLongClickListener3;
            z12 = false;
        }
        messageAccessoriesView.m528setAccessoriesdvvEyHs(messageMargins, m237getId3Eiw7ao2, m234getChannelIdo4g7jtM, m236getGuildIdqOKuAAo, generateMessageAccessories, eventHandler, componentProvider, z12);
        configureAccessoriesMargin(generateMessageAccessories);
        configureCommunicationDisabled(Intrinsics.areEqual(message.getCommunicationDisabled(), Boolean.TRUE), chainPart);
        configureSuppressNotifications(MessageFlagKt.hasMessageFlag(Long.valueOf(message.getFlags()), MessageFlag.SUPPRESS_NOTIFICATIONS), eventHandler, chainPart);
        if (messageContext.getContextType() == MessageContextType.SEARCH) {
            hideHeader();
        } else {
            configureAuthor(message, eventHandler, chainPart);
        }
        androidx.core.view.h0.n0(this, new MessageViewAccessibilityDelegate(message, onClickListener, onLongClickListener2));
    }

    @Override // com.discord.chat.presentation.list.SwipeReplyInitiator
    public void setOnInitiateEdit(@NotNull Function0<Unit> function0) {
        Intrinsics.checkNotNullParameter(function0, "<set-?>");
        this.onInitiateEdit = function0;
    }

    @Override // com.discord.chat.presentation.list.SwipeReplyInitiator
    public void setOnInitiateReply(@NotNull Function0<Unit> function0) {
        Intrinsics.checkNotNullParameter(function0, "<set-?>");
        this.onInitiateReply = function0;
    }

    @Override // android.view.View
    public void setPressed(boolean z10) {
        boolean z11;
        if (z10 && (isClickable() || isFocusable())) {
            z11 = true;
        } else {
            z11 = false;
        }
        super.setPressed(z11);
    }

    public final void setReplyPreview(@NotNull MessageViewReplyPreview messageViewReplyPreview) {
        Intrinsics.checkNotNullParameter(messageViewReplyPreview, "<set-?>");
        this.replyPreview = messageViewReplyPreview;
    }

    @Override // com.discord.chat.presentation.list.SwipeReplyInitiator
    public void setShadowView(@NotNull MaskedShadowView maskedShadowView) {
        Intrinsics.checkNotNullParameter(maskedShadowView, "<set-?>");
        this.shadowView = maskedShadowView;
    }

    @Override // com.discord.chat.presentation.list.SwipeReplyInitiator
    public void setUsingGradientTheme(boolean z10) {
        this.usingGradientTheme = z10;
    }

    @Override // com.discord.recycler_view.decorations.VerticalSpacingItemDecoration.SpacingProviderView
    @NotNull
    public Integer spacingPxOverride() {
        int dpToPx;
        int i10 = WhenMappings.$EnumSwitchMapping$1[((ChainPart) this.onChainPart.invoke()).ordinal()];
        if (i10 != 1 && i10 != 2) {
            if (i10 != 3 && i10 != 4) {
                throw new ir.p();
            }
            dpToPx = 0;
        } else {
            dpToPx = SizeUtilsKt.getDpToPx(16);
        }
        return Integer.valueOf(dpToPx);
    }

    public /* synthetic */ MessageView(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MessageView(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        MessageViewBinding inflate = MessageViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        setPadding(0, SizeUtilsKt.getDpToPx(2), 0, SizeUtilsKt.getDpToPx(2));
        RippleUtilsKt.addRipple$default(this, false, 0, 3, null);
        TextView timestamp = inflate.timestamp;
        Intrinsics.checkNotNullExpressionValue(timestamp, "timestamp");
        DiscordFontUtilsKt.setDiscordFont(timestamp, DiscordFont.PrimaryMedium);
        inflate.timestamp.setTextColor(ThemeManagerKt.getTheme().getTextMuted());
        TextView timestamp2 = inflate.timestamp;
        Intrinsics.checkNotNullExpressionValue(timestamp2, "timestamp");
        SetTextSizeSpKt.setTextSizeSp(timestamp2, 12.0f, 15.0f);
        TextView authorName = inflate.authorName;
        Intrinsics.checkNotNullExpressionValue(authorName, "authorName");
        DiscordFontUtilsKt.setDiscordFont(authorName, DiscordFont.PrimarySemibold);
        TextView authorName2 = inflate.authorName;
        Intrinsics.checkNotNullExpressionValue(authorName2, "authorName");
        SetTextSizeSpKt.setTextSizeSp(authorName2, 16.0f, 20.0f);
        SimpleDraweeView authorAvatar = inflate.authorAvatar;
        Intrinsics.checkNotNullExpressionValue(authorAvatar, "authorAvatar");
        ViewClippingUtilsKt.clipToCircle(authorAvatar);
        inflate.messageHeaderDivider.setBackgroundColor(ColorUtilsKt.getThemeColor(context, R.color.message_divider_light, R.color.message_divider_dark));
        MaskedShadowView shadowView = inflate.shadowView;
        Intrinsics.checkNotNullExpressionValue(shadowView, "shadowView");
        setShadowView(shadowView);
        getShadowView().setVisibility(4);
        setClipToPadding(false);
        this.onChainPart = new Function0() { // from class: com.discord.chat.presentation.message.g1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                MessageView.ChainPart chainPart;
                chainPart = MessageView.ChainPart.ONLY;
                return chainPart;
            }
        };
        this.allowChildGestures = true;
        this.onInitiateReply = new Function0() { // from class: com.discord.chat.presentation.message.h1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f33298a;
                return unit;
            }
        };
        this.onInitiateThread = new Function0() { // from class: com.discord.chat.presentation.message.i1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f33298a;
                return unit;
            }
        };
        this.onInitiateEdit = new Function0() { // from class: com.discord.chat.presentation.message.j1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f33298a;
                return unit;
            }
        };
        this.accessories = new ArrayList<>(2);
    }
}
