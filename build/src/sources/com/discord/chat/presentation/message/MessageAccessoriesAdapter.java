package com.discord.chat.presentation.message;

import android.annotation.SuppressLint;
import android.content.Context;
import android.graphics.Point;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.R;
import com.discord.chat.bridge.MediaType;
import com.discord.chat.bridge.contentnode.LinkContentNode;
import com.discord.chat.bridge.ctabutton.CtaButton;
import com.discord.chat.bridge.polls.PollLayoutType;
import com.discord.chat.bridge.postpreviewembed.PostPreviewEmbed;
import com.discord.chat.bridge.reaction.ReactionsTheme;
import com.discord.chat.bridge.safetysystemnotification.SafetySystemNotificationEmbed;
import com.discord.chat.bridge.spoiler.SpoilerAttributes;
import com.discord.chat.bridge.sticker.Sticker;
import com.discord.chat.bridge.sticker.StickerFormatType;
import com.discord.chat.databinding.TimestampViewBinding;
import com.discord.chat.presentation.events.ChatEventHandler;
import com.discord.chat.presentation.invitetospeak.InviteToSpeakView;
import com.discord.chat.presentation.message.messagepart.ActivityInstanceEmbedMessageAccessory;
import com.discord.chat.presentation.message.messagepart.ActivityRichPresenceInviteEmbedMessageAccessory;
import com.discord.chat.presentation.message.messagepart.AppMessageEmbedAccessory;
import com.discord.chat.presentation.message.messagepart.AudioAttachmentMessageAccessory;
import com.discord.chat.presentation.message.messagepart.AutoModerationNotificationEmbedAccessory;
import com.discord.chat.presentation.message.messagepart.ChannelPromptActionsAccessory;
import com.discord.chat.presentation.message.messagepart.CtaButtonMessageAccessory;
import com.discord.chat.presentation.message.messagepart.EmbedMessageAccessory;
import com.discord.chat.presentation.message.messagepart.EmbeddedActivityInviteMessageAccessory;
import com.discord.chat.presentation.message.messagepart.EphemeralIndicationMessageAccessory;
import com.discord.chat.presentation.message.messagepart.FileAttachmentMessageAccessory;
import com.discord.chat.presentation.message.messagepart.FlaggedMessageActionBarAccessory;
import com.discord.chat.presentation.message.messagepart.FlaggedMessageEmbedAccessory;
import com.discord.chat.presentation.message.messagepart.ForumPostActionBar;
import com.discord.chat.presentation.message.messagepart.ForwardBreadcrumbMessageAccessory;
import com.discord.chat.presentation.message.messagepart.ForwardHeaderMessageAccessory;
import com.discord.chat.presentation.message.messagepart.GiftMessageAccessory;
import com.discord.chat.presentation.message.messagepart.GuildEventInviteMessageAccessory;
import com.discord.chat.presentation.message.messagepart.GuildInviteDisabledMessageAccessory;
import com.discord.chat.presentation.message.messagepart.GuildInviteMessageAccessory;
import com.discord.chat.presentation.message.messagepart.GuildProfileInviteMessageAccessory;
import com.discord.chat.presentation.message.messagepart.ImageAttachmentMessageAccessory;
import com.discord.chat.presentation.message.messagepart.InfoLinkMessageAccessory;
import com.discord.chat.presentation.message.messagepart.InteractionStatusMessageAccessory;
import com.discord.chat.presentation.message.messagepart.InviteToSpeakAccessory;
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
import com.discord.chat.presentation.message.messagepart.RoleSubscriptionPurchaseAccessory;
import com.discord.chat.presentation.message.messagepart.SafetyPolicyNoticeMessageAccessory;
import com.discord.chat.presentation.message.messagepart.SafetySystemNotificationMessageAccessory;
import com.discord.chat.presentation.message.messagepart.SharedCustomThemeMessageAccessory;
import com.discord.chat.presentation.message.messagepart.StickerMessageAccessory;
import com.discord.chat.presentation.message.messagepart.SurveyIndicationMessageAccessory;
import com.discord.chat.presentation.message.messagepart.ThreadEmbedMessageAccessory;
import com.discord.chat.presentation.message.messagepart.TimestampMessageAccessory;
import com.discord.chat.presentation.message.messagepart.VideoAttachmentMessageAccessory;
import com.discord.chat.presentation.message.messagepart.WelcomeStickerAccessory;
import com.discord.chat.presentation.message.view.ActivityInstanceEmbedView;
import com.discord.chat.presentation.message.view.ActivityRichPresenceInviteEmbedView;
import com.discord.chat.presentation.message.view.AppMessageEmbedView;
import com.discord.chat.presentation.message.view.AutoModerationNotificationEmbedView;
import com.discord.chat.presentation.message.view.ChannelPromptActionsView;
import com.discord.chat.presentation.message.view.CtaButtonView;
import com.discord.chat.presentation.message.view.EmbedView;
import com.discord.chat.presentation.message.view.EmbeddedActivityInviteView;
import com.discord.chat.presentation.message.view.EphemeralIndicationView;
import com.discord.chat.presentation.message.view.FileAttachmentView;
import com.discord.chat.presentation.message.view.FlaggedMessageActionBarView;
import com.discord.chat.presentation.message.view.FlaggedMessageEmbedView;
import com.discord.chat.presentation.message.view.ForumPostActionBarView;
import com.discord.chat.presentation.message.view.ForwardBreadcrumbView;
import com.discord.chat.presentation.message.view.ForwardHeaderView;
import com.discord.chat.presentation.message.view.GiftView;
import com.discord.chat.presentation.message.view.GuildEventInviteView;
import com.discord.chat.presentation.message.view.GuildInviteDisabledView;
import com.discord.chat.presentation.message.view.GuildInviteView;
import com.discord.chat.presentation.message.view.GuildProfileInviteView;
import com.discord.chat.presentation.message.view.InfoLinkView;
import com.discord.chat.presentation.message.view.InteractionStatusView;
import com.discord.chat.presentation.message.view.MediaImageView;
import com.discord.chat.presentation.message.view.MediaVideoView;
import com.discord.chat.presentation.message.view.MessageContentView;
import com.discord.chat.presentation.message.view.PostPreviewEmbedView;
import com.discord.chat.presentation.message.view.PremiumGroupInviteView;
import com.discord.chat.presentation.message.view.ReferralView;
import com.discord.chat.presentation.message.view.RoleSubscriptionPurchaseView;
import com.discord.chat.presentation.message.view.SafetyPolicyNoticeView;
import com.discord.chat.presentation.message.view.SafetySystemNotificationView;
import com.discord.chat.presentation.message.view.SurveyIndicationView;
import com.discord.chat.presentation.message.view.ThreadEmbedView;
import com.discord.chat.presentation.message.view.botuikit.ComponentProvider;
import com.discord.chat.presentation.message.view.botuikit.MessageComponentsView;
import com.discord.chat.presentation.message.view.customthemes.SharedCustomThemeView;
import com.discord.chat.presentation.message.view.mosaic.AttachmentMediaMosaicContainerView;
import com.discord.chat.presentation.message.view.polls.PollImageOnlyView;
import com.discord.chat.presentation.message.view.polls.PollTextAndImageView;
import com.discord.chat.presentation.message.view.voicemessages.AudioPlayerView;
import com.discord.chat.presentation.message.viewholder.ActivityInstanceEmbedViewHolder;
import com.discord.chat.presentation.message.viewholder.ActivityRichPresenceInviteEmbedViewHolder;
import com.discord.chat.presentation.message.viewholder.AppMessageEmbedViewHolder;
import com.discord.chat.presentation.message.viewholder.AttachmentMediaMosaicViewHolder;
import com.discord.chat.presentation.message.viewholder.AudioPlayerViewHolder;
import com.discord.chat.presentation.message.viewholder.AutoModerationNotificationEmbedViewHolder;
import com.discord.chat.presentation.message.viewholder.ChannelPromptActionsViewHolder;
import com.discord.chat.presentation.message.viewholder.CtaButtonViewHolder;
import com.discord.chat.presentation.message.viewholder.EmbedViewHolder;
import com.discord.chat.presentation.message.viewholder.EmbeddedActivityInviteViewHolder;
import com.discord.chat.presentation.message.viewholder.EphemeralIndicationViewHolder;
import com.discord.chat.presentation.message.viewholder.FileAttachmentViewHolder;
import com.discord.chat.presentation.message.viewholder.FlaggedMessageActionBarViewHolder;
import com.discord.chat.presentation.message.viewholder.FlaggedMessageEmbedViewHolder;
import com.discord.chat.presentation.message.viewholder.ForumPostActionBarViewHolder;
import com.discord.chat.presentation.message.viewholder.ForwardBreadcrumbViewHolder;
import com.discord.chat.presentation.message.viewholder.ForwardHeaderViewHolder;
import com.discord.chat.presentation.message.viewholder.GiftViewHolder;
import com.discord.chat.presentation.message.viewholder.GuildEventInviteViewHolder;
import com.discord.chat.presentation.message.viewholder.GuildInviteDisabledViewHolder;
import com.discord.chat.presentation.message.viewholder.GuildInviteViewHolder;
import com.discord.chat.presentation.message.viewholder.GuildProfileInviteViewHolder;
import com.discord.chat.presentation.message.viewholder.InfoLinkViewHolder;
import com.discord.chat.presentation.message.viewholder.InteractionStatusViewHolder;
import com.discord.chat.presentation.message.viewholder.InviteToSpeakViewHolder;
import com.discord.chat.presentation.message.viewholder.MessageComponentsViewHolder;
import com.discord.chat.presentation.message.viewholder.MessageContentViewHolder;
import com.discord.chat.presentation.message.viewholder.MessagePartViewHolder;
import com.discord.chat.presentation.message.viewholder.PollViewHolder;
import com.discord.chat.presentation.message.viewholder.PostPreviewEmbedViewHolder;
import com.discord.chat.presentation.message.viewholder.PremiumGroupInviteViewHolder;
import com.discord.chat.presentation.message.viewholder.ReactionsViewHolder;
import com.discord.chat.presentation.message.viewholder.ReferralViewHolder;
import com.discord.chat.presentation.message.viewholder.RoleSubscriptionPurchaseViewHolder;
import com.discord.chat.presentation.message.viewholder.SafetyPolicyNoticeViewHolder;
import com.discord.chat.presentation.message.viewholder.SafetySystemNotificationViewHolder;
import com.discord.chat.presentation.message.viewholder.SharedCustomThemeViewHolder;
import com.discord.chat.presentation.message.viewholder.StickerApngViewHolder;
import com.discord.chat.presentation.message.viewholder.StickerGifViewHolder;
import com.discord.chat.presentation.message.viewholder.StickerLottieViewHolder;
import com.discord.chat.presentation.message.viewholder.StickerPartViewHolder;
import com.discord.chat.presentation.message.viewholder.StickerPngViewHolder;
import com.discord.chat.presentation.message.viewholder.SurveyIndicationViewHolder;
import com.discord.chat.presentation.message.viewholder.ThreadEmbedViewHolder;
import com.discord.chat.presentation.message.viewholder.TimestampViewHolder;
import com.discord.chat.presentation.message.viewholder.WelcomeStickerViewHolder;
import com.discord.chat.presentation.message.viewholder.mosaicitem.attachments.MosaicItemMessageAttachmentImageViewHolder;
import com.discord.chat.presentation.message.viewholder.mosaicitem.attachments.MosaicItemMessageAttachmentVideoViewHolder;
import com.discord.chat.presentation.stickers.WelcomeStickerView;
import com.discord.chat.reactevents.ViewResizeMode;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.discord.misc.utilities.kotlin.ForceExhaustiveKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.misc.utilities.view.ViewLocationUtilsKt;
import com.discord.primitives.ChannelId;
import com.discord.primitives.GuildId;
import com.discord.primitives.MessageId;
import com.discord.reactions.ReactionView;
import com.discord.reactions.ShortcutsFlexbox;
import com.discord.sticker.StickerView;
import com.facebook.react.modules.dialog.AlertFragment;
import com.facebook.react.uimanager.ViewProps;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.functions.Function6;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0084\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0006\n\u0000\n\u0002\u0010\b\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0010\t\n\u0002\b\f\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u0017\u0012\u000e\b\u0002\u0010\u0005\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003¢\u0006\u0004\b\u0006\u0010\u0007J[\u0010\u0018\u001a\u00020\u0004*\u00020\b2\u0006\u0010\n\u001a\u00020\t2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\u000e\u001a\u00020\r2\b\u0010\u0010\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\u0012\u001a\u00020\u00112\b\u0010\u0013\u001a\u0004\u0018\u00010\u00112\b\u0010\u0014\u001a\u0004\u0018\u00010\u000b2\b\u0010\u0015\u001a\u0004\u0018\u00010\u0011H\u0002¢\u0006\u0004\b\u0016\u0010\u0017J\u0017\u0010\u001b\u001a\u00020\u00042\b\u0010\u001a\u001a\u0004\u0018\u00010\u0019¢\u0006\u0004\b\u001b\u0010\u001cJ7\u0010&\u001a\u00020\u00042\u0006\u0010\n\u001a\u00020\t2\u0006\u0010\u001e\u001a\u00020\u001d2\b\u0010 \u001a\u0004\u0018\u00010\u001f2\f\u0010#\u001a\b\u0012\u0004\u0012\u00020\"0!H\u0007¢\u0006\u0004\b$\u0010%J\u0015\u0010)\u001a\u00020\u00042\u0006\u0010(\u001a\u00020'¢\u0006\u0004\b)\u0010*J\u0017\u0010-\u001a\u00020\u00042\b\u0010,\u001a\u0004\u0018\u00010+¢\u0006\u0004\b-\u0010.J\u0017\u00100\u001a\u00020\u00042\u0006\u0010/\u001a\u00020\u0002H\u0016¢\u0006\u0004\b0\u00101J\u001f\u00105\u001a\u00020\u00022\u0006\u00103\u001a\u0002022\u0006\u00104\u001a\u00020\u0011H\u0016¢\u0006\u0004\b5\u00106J\u001f\u00108\u001a\u00020\u00042\u0006\u0010/\u001a\u00020\u00022\u0006\u00107\u001a\u00020\u0011H\u0016¢\u0006\u0004\b8\u00109J\u000f\u0010:\u001a\u00020\u0011H\u0016¢\u0006\u0004\b:\u0010;J\u0017\u0010<\u001a\u00020\u00112\u0006\u00107\u001a\u00020\u0011H\u0016¢\u0006\u0004\b<\u0010=J\u0017\u0010?\u001a\u00020>2\u0006\u00107\u001a\u00020\u0011H\u0016¢\u0006\u0004\b?\u0010@J\u000f\u0010A\u001a\u00020\u0004H\u0007¢\u0006\u0004\bA\u0010BR\u001a\u0010\u0005\u001a\b\u0012\u0004\u0012\u00020\u00040\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0005\u0010CR\u0016\u0010(\u001a\u00020'8\u0002@\u0002X\u0082.¢\u0006\u0006\n\u0004\b(\u0010DR\u0018\u0010,\u001a\u0004\u0018\u00010+8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b,\u0010ER\u0018\u0010\u001a\u001a\u0004\u0018\u00010\u00198\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001a\u0010FR\u001c\u0010#\u001a\b\u0012\u0004\u0012\u00020\"0!8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b#\u0010GR\u0018\u0010\n\u001a\u0004\u0018\u00010\t8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\n\u0010HR\u0018\u0010\u001e\u001a\u0004\u0018\u00010\u001d8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001e\u0010IR\u0018\u0010 \u001a\u0004\u0018\u00010\u001f8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b \u0010JR\"\u0010L\u001a\u000e\u0012\u0004\u0012\u00020\u0002\u0012\u0004\u0012\u00020\u00040K8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bL\u0010M¨\u0006N"}, d2 = {"Lcom/discord/chat/presentation/message/MessageAccessoriesAdapter;", "Landroidx/recyclerview/widget/RecyclerView$Adapter;", "Lcom/discord/chat/presentation/message/viewholder/MessagePartViewHolder;", "Lkotlin/Function0;", "", "measureAndLayout", "<init>", "(Lkotlin/jvm/functions/Function0;)V", "Landroid/view/View;", "Lcom/discord/primitives/MessageId;", "messageId", "", "type", "Lcom/discord/chat/reactevents/ViewResizeMode;", "viewResizeMode", "", "portal", "", "attachmentIndex", "embedIndex", "componentId", "componentMediaIndex", "onMediaClicked-mdVZsaY", "(Landroid/view/View;Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/reactevents/ViewResizeMode;Ljava/lang/Double;ILjava/lang/Integer;Ljava/lang/String;Ljava/lang/Integer;)V", "onMediaClicked", "Landroidx/recyclerview/widget/RecyclerView$RecycledViewPool;", "recyclerViewPool", "setNestedAccessoriesRecycledViewPool", "(Landroidx/recyclerview/widget/RecyclerView$RecycledViewPool;)V", "Lcom/discord/primitives/ChannelId;", "channelId", "Lcom/discord/primitives/GuildId;", "guildId", "", "Lcom/discord/chat/presentation/message/messagepart/MessageAccessory;", AlertFragment.ARG_ITEMS, "setItems-bo5iIEc", "(Ljava/lang/String;JLcom/discord/primitives/GuildId;Ljava/util/List;)V", "setItems", "Lcom/discord/chat/presentation/events/ChatEventHandler;", "eventHandler", "setEventHandler", "(Lcom/discord/chat/presentation/events/ChatEventHandler;)V", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentProvider;", "botComponentProvider", "setComponentProvider", "(Lcom/discord/chat/presentation/message/view/botuikit/ComponentProvider;)V", "holder", "onViewRecycled", "(Lcom/discord/chat/presentation/message/viewholder/MessagePartViewHolder;)V", "Landroid/view/ViewGroup;", "parent", "viewType", "onCreateViewHolder", "(Landroid/view/ViewGroup;I)Lcom/discord/chat/presentation/message/viewholder/MessagePartViewHolder;", ViewProps.POSITION, "onBindViewHolder", "(Lcom/discord/chat/presentation/message/viewholder/MessagePartViewHolder;I)V", "getItemCount", "()I", "getItemViewType", "(I)I", "", "getItemId", "(I)J", "clear", "()V", "Lkotlin/jvm/functions/Function0;", "Lcom/discord/chat/presentation/events/ChatEventHandler;", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentProvider;", "Landroidx/recyclerview/widget/RecyclerView$RecycledViewPool;", "Ljava/util/List;", "Ljava/lang/String;", "Lcom/discord/primitives/ChannelId;", "Lcom/discord/primitives/GuildId;", "Lkotlin/Function1;", "onTapSpoiler", "Lkotlin/jvm/functions/Function1;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MessageAccessoriesAdapter extends RecyclerView.Adapter {
    private ComponentProvider botComponentProvider;
    private ChannelId channelId;
    private ChatEventHandler eventHandler;
    private GuildId guildId;
    @NotNull
    private List<? extends MessageAccessory> items;
    @NotNull
    private final Function0<Unit> measureAndLayout;
    private String messageId;
    @NotNull
    private Function1<? super MessagePartViewHolder, Unit> onTapSpoiler;
    private RecyclerView.RecycledViewPool recyclerViewPool;

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;
        public static final /* synthetic */ int[] $EnumSwitchMapping$1;

        static {
            int[] iArr = new int[StickerFormatType.values().length];
            try {
                iArr[StickerFormatType.PNG.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[StickerFormatType.APNG.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[StickerFormatType.LOTTIE.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[StickerFormatType.GIF.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            $EnumSwitchMapping$0 = iArr;
            int[] iArr2 = new int[PollLayoutType.values().length];
            try {
                iArr2[PollLayoutType.UNKNOWN.ordinal()] = 1;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[PollLayoutType.TEXT_AND_IMAGE.ordinal()] = 2;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr2[PollLayoutType.IMAGE_ONLY.ordinal()] = 3;
            } catch (NoSuchFieldError unused7) {
            }
            $EnumSwitchMapping$1 = iArr2;
        }
    }

    public MessageAccessoriesAdapter() {
        this(null, 1, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$10(MessageAccessoriesAdapter messageAccessoriesAdapter, String str) {
        ChatEventHandler chatEventHandler = messageAccessoriesAdapter.eventHandler;
        if (chatEventHandler == null) {
            Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
            chatEventHandler = null;
        }
        chatEventHandler.onTapReferralRedeem(null);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$11(MessageAccessoriesAdapter messageAccessoriesAdapter, MessageAccessory messageAccessory, String giftCode) {
        Intrinsics.checkNotNullParameter(giftCode, "giftCode");
        ChatEventHandler chatEventHandler = messageAccessoriesAdapter.eventHandler;
        if (chatEventHandler == null) {
            Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
            chatEventHandler = null;
        }
        chatEventHandler.mo459onTapGiftCodeAcceptNU4t8f8(giftCode, ((GiftMessageAccessory) messageAccessory).mo536getMessageId3Eiw7ao());
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$12(MessageAccessoriesAdapter messageAccessoriesAdapter, int i10, MessageAccessory attachment, MessagePartViewHolder attachmentViewHolder) {
        Double valueOf;
        Intrinsics.checkNotNullParameter(attachment, "attachment");
        Intrinsics.checkNotNullParameter(attachmentViewHolder, "attachmentViewHolder");
        View itemView = attachmentViewHolder.itemView;
        Intrinsics.checkNotNullExpressionValue(itemView, "itemView");
        String mo536getMessageId3Eiw7ao = attachment.mo536getMessageId3Eiw7ao();
        if (attachment instanceof ImageAttachmentMessageAccessory) {
            valueOf = null;
        } else if (attachment instanceof VideoAttachmentMessageAccessory) {
            valueOf = Double.valueOf(((VideoAttachmentMessageAccessory) attachment).getPortal());
        } else {
            throw new IllegalStateException(("Unsupported accessory: " + attachment).toString());
        }
        messageAccessoriesAdapter.m504onMediaClickedmdVZsaY(itemView, mo536getMessageId3Eiw7ao, "attachment", ViewResizeMode.Cover, valueOf, i10, null, null, null);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$14$lambda$13(Function4 function4, int i10) {
        function4.invoke(MediaType.Attachment, Integer.valueOf(i10), null, null);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$15(MessageAccessoriesAdapter messageAccessoriesAdapter, MessagePartViewHolder messagePartViewHolder) {
        messageAccessoriesAdapter.onTapSpoiler.invoke(messagePartViewHolder);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$16(MessageAccessoriesAdapter messageAccessoriesAdapter, MessageAccessory messageAccessory, boolean z10) {
        ChatEventHandler chatEventHandler = messageAccessoriesAdapter.eventHandler;
        if (chatEventHandler == null) {
            Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
            chatEventHandler = null;
        }
        MediaMosaicAttachmentMessageAccessory mediaMosaicAttachmentMessageAccessory = (MediaMosaicAttachmentMessageAccessory) messageAccessory;
        chatEventHandler.mo469onTapObscuredMediaToggleZQwuxwg(mediaMosaicAttachmentMessageAccessory.mo536getMessageId3Eiw7ao(), mediaMosaicAttachmentMessageAccessory.m619getChannelIdo4g7jtM(), z10, null, null);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void onBindViewHolder$lambda$17(MessageAccessoriesAdapter messageAccessoriesAdapter, View view) {
        ChatEventHandler chatEventHandler = messageAccessoriesAdapter.eventHandler;
        if (chatEventHandler == null) {
            Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
            chatEventHandler = null;
        }
        String str = messageAccessoriesAdapter.messageId;
        Intrinsics.checkNotNull(str);
        ChatEventHandler.DefaultImpls.m491onTapReactionAFFcxXc$default(chatEventHandler, str, null, null, "Message Shortcut", 4, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void onBindViewHolder$lambda$18(MessageAccessoriesAdapter messageAccessoriesAdapter, View view) {
        ChatEventHandler chatEventHandler = messageAccessoriesAdapter.eventHandler;
        if (chatEventHandler == null) {
            Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
            chatEventHandler = null;
        }
        String str = messageAccessoriesAdapter.messageId;
        Intrinsics.checkNotNull(str);
        ChannelId channelId = messageAccessoriesAdapter.channelId;
        Intrinsics.checkNotNull(channelId);
        chatEventHandler.mo435onInitiateReply8a0ehIg(str, channelId.m1066unboximpl(), Boolean.TRUE, "message_shortcut");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$19(MessageAccessoriesAdapter messageAccessoriesAdapter, ReactionView.Reaction reaction) {
        Intrinsics.checkNotNullParameter(reaction, "reaction");
        ChatEventHandler chatEventHandler = messageAccessoriesAdapter.eventHandler;
        if (chatEventHandler == null) {
            Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
            chatEventHandler = null;
        }
        String str = messageAccessoriesAdapter.messageId;
        Intrinsics.checkNotNull(str);
        ChatEventHandler.DefaultImpls.m491onTapReactionAFFcxXc$default(chatEventHandler, str, reaction, null, null, 12, null);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$20(MessageAccessoriesAdapter messageAccessoriesAdapter, ReactionView.Reaction reaction) {
        Intrinsics.checkNotNullParameter(reaction, "reaction");
        ChatEventHandler chatEventHandler = messageAccessoriesAdapter.eventHandler;
        if (chatEventHandler == null) {
            Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
            chatEventHandler = null;
        }
        String str = messageAccessoriesAdapter.messageId;
        Intrinsics.checkNotNull(str);
        ChannelId channelId = messageAccessoriesAdapter.channelId;
        Intrinsics.checkNotNull(channelId);
        chatEventHandler.mo441onLongPressReactionEqy5D80(str, channelId.m1066unboximpl(), reaction);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$21(MessageAccessoriesAdapter messageAccessoriesAdapter, MessageAccessory messageAccessory, Sticker it) {
        Intrinsics.checkNotNullParameter(it, "it");
        ChatEventHandler chatEventHandler = messageAccessoriesAdapter.eventHandler;
        if (chatEventHandler == null) {
            Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
            chatEventHandler = null;
        }
        StickerMessageAccessory stickerMessageAccessory = (StickerMessageAccessory) messageAccessory;
        chatEventHandler.mo444onStickerClickedAyv7vGE(stickerMessageAccessory.getSticker(), stickerMessageAccessory.mo536getMessageId3Eiw7ao());
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$22(MessageAccessoriesAdapter messageAccessoriesAdapter, MessageAccessory messageAccessory, Sticker it) {
        Intrinsics.checkNotNullParameter(it, "it");
        ChatEventHandler chatEventHandler = messageAccessoriesAdapter.eventHandler;
        if (chatEventHandler == null) {
            Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
            chatEventHandler = null;
        }
        StickerMessageAccessory stickerMessageAccessory = (StickerMessageAccessory) messageAccessory;
        chatEventHandler.mo445onStickerLongClickedAyv7vGE(stickerMessageAccessory.getSticker(), stickerMessageAccessory.mo536getMessageId3Eiw7ao());
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void onBindViewHolder$lambda$23(MessageAccessoriesAdapter messageAccessoriesAdapter, View view) {
        ChatEventHandler chatEventHandler = messageAccessoriesAdapter.eventHandler;
        if (chatEventHandler == null) {
            Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
            chatEventHandler = null;
        }
        String str = messageAccessoriesAdapter.messageId;
        Intrinsics.checkNotNull(str);
        ChannelId channelId = messageAccessoriesAdapter.channelId;
        Intrinsics.checkNotNull(channelId);
        chatEventHandler.mo457onTapFollowForumPostpfaIj0E(str, channelId.m1066unboximpl());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void onBindViewHolder$lambda$24(MessageAccessoriesAdapter messageAccessoriesAdapter, View view) {
        ChatEventHandler chatEventHandler = messageAccessoriesAdapter.eventHandler;
        if (chatEventHandler == null) {
            Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
            chatEventHandler = null;
        }
        ChannelId channelId = messageAccessoriesAdapter.channelId;
        Intrinsics.checkNotNull(channelId);
        long m1066unboximpl = channelId.m1066unboximpl();
        GuildId guildId = messageAccessoriesAdapter.guildId;
        Intrinsics.checkNotNull(guildId);
        chatEventHandler.mo479onTapShareForumPostmgk6anA(m1066unboximpl, guildId.m1079unboximpl());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void onBindViewHolder$lambda$25(MessageAccessoriesAdapter messageAccessoriesAdapter, View view) {
        ChatEventHandler chatEventHandler = messageAccessoriesAdapter.eventHandler;
        if (chatEventHandler == null) {
            Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
            chatEventHandler = null;
        }
        String str = messageAccessoriesAdapter.messageId;
        Intrinsics.checkNotNull(str);
        ChatEventHandler.DefaultImpls.m491onTapReactionAFFcxXc$default(chatEventHandler, str, null, null, null, 12, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void onBindViewHolder$lambda$26(MessageAccessoriesAdapter messageAccessoriesAdapter, View view) {
        ChatEventHandler chatEventHandler = messageAccessoriesAdapter.eventHandler;
        if (chatEventHandler == null) {
            Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
            chatEventHandler = null;
        }
        String str = messageAccessoriesAdapter.messageId;
        Intrinsics.checkNotNull(str);
        ChannelId channelId = messageAccessoriesAdapter.channelId;
        Intrinsics.checkNotNull(channelId);
        chatEventHandler.mo476onTapReactionOverflowpfaIj0E(str, channelId.m1066unboximpl());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$27(MessageAccessoriesAdapter messageAccessoriesAdapter, ReactionView.Reaction reaction) {
        Intrinsics.checkNotNullParameter(reaction, "reaction");
        ChatEventHandler chatEventHandler = messageAccessoriesAdapter.eventHandler;
        if (chatEventHandler == null) {
            Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
            chatEventHandler = null;
        }
        String str = messageAccessoriesAdapter.messageId;
        Intrinsics.checkNotNull(str);
        ChatEventHandler.DefaultImpls.m491onTapReactionAFFcxXc$default(chatEventHandler, str, reaction, null, null, 12, null);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$28(MessageAccessoriesAdapter messageAccessoriesAdapter, ReactionView.Reaction reaction) {
        Intrinsics.checkNotNullParameter(reaction, "reaction");
        ChatEventHandler chatEventHandler = messageAccessoriesAdapter.eventHandler;
        if (chatEventHandler == null) {
            Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
            chatEventHandler = null;
        }
        String str = messageAccessoriesAdapter.messageId;
        Intrinsics.checkNotNull(str);
        ChannelId channelId = messageAccessoriesAdapter.channelId;
        Intrinsics.checkNotNull(channelId);
        chatEventHandler.mo441onLongPressReactionEqy5D80(str, channelId.m1066unboximpl(), reaction);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void onBindViewHolder$lambda$30(MessageAccessoriesAdapter messageAccessoriesAdapter, View view) {
        String str = messageAccessoriesAdapter.messageId;
        if (str != null) {
            ChatEventHandler chatEventHandler = messageAccessoriesAdapter.eventHandler;
            if (chatEventHandler == null) {
                Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                chatEventHandler = null;
            }
            chatEventHandler.mo456onTapDismissMediaPostSharePrompt1xi1bu0(str);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$31(MessageAccessoriesAdapter messageAccessoriesAdapter, String url, String filename) {
        Intrinsics.checkNotNullParameter(url, "url");
        Intrinsics.checkNotNullParameter(filename, "filename");
        ChatEventHandler chatEventHandler = messageAccessoriesAdapter.eventHandler;
        if (chatEventHandler == null) {
            Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
            chatEventHandler = null;
        }
        String str = messageAccessoriesAdapter.messageId;
        Intrinsics.checkNotNull(str);
        chatEventHandler.mo438onLinkClickedu7_MRrM(str, url, filename);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$32(MessageAccessoriesAdapter messageAccessoriesAdapter, MessagePartViewHolder messagePartViewHolder) {
        messageAccessoriesAdapter.onTapSpoiler.invoke(messagePartViewHolder);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$34$lambda$33(Function4 function4, String componentId, Integer num) {
        Intrinsics.checkNotNullParameter(componentId, "componentId");
        function4.invoke(MediaType.Component, null, componentId, num);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$35(MessageAccessory messageAccessory, MessageAccessoriesAdapter messageAccessoriesAdapter, View view, String componentId, Integer num, Double d10) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(componentId, "componentId");
        messageAccessoriesAdapter.m504onMediaClickedmdVZsaY(view, ((MessageComponentsAccessory) messageAccessory).mo536getMessageId3Eiw7ao(), "component", ViewResizeMode.Fill, d10, 0, null, componentId, num);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$36(MessageAccessoriesAdapter messageAccessoriesAdapter, MessagePartViewHolder messagePartViewHolder) {
        messageAccessoriesAdapter.onTapSpoiler.invoke(messagePartViewHolder);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$37(MessageAccessoriesAdapter messageAccessoriesAdapter, MessageAccessory messageAccessory, boolean z10) {
        ChatEventHandler chatEventHandler = messageAccessoriesAdapter.eventHandler;
        if (chatEventHandler == null) {
            Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
            chatEventHandler = null;
        }
        MessageComponentsAccessory messageComponentsAccessory = (MessageComponentsAccessory) messageAccessory;
        chatEventHandler.mo469onTapObscuredMediaToggleZQwuxwg(messageComponentsAccessory.mo536getMessageId3Eiw7ao(), messageComponentsAccessory.getMessage().m234getChannelIdo4g7jtM(), z10, null, null);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$39$lambda$38(Function4 function4, MessageAccessory messageAccessory, String str, Integer num) {
        Intrinsics.checkNotNullParameter(str, "<unused var>");
        function4.invoke(MediaType.Attachment, Integer.valueOf(((AudioAttachmentMessageAccessory) messageAccessory).getAttachmentIndex()), null, null);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$4$lambda$3(Function6 function6, MessageAccessoriesAdapter messageAccessoriesAdapter, MediaType mediaType, Integer num, String str, Integer num2) {
        MessageId messageId;
        Intrinsics.checkNotNullParameter(mediaType, "mediaType");
        String str2 = messageAccessoriesAdapter.messageId;
        Intrinsics.checkNotNull(str2);
        if (str2 != null) {
            messageId = MessageId.m1083boximpl(str2);
        } else {
            messageId = null;
        }
        MessageId messageId2 = messageId;
        ChannelId channelId = messageAccessoriesAdapter.channelId;
        Intrinsics.checkNotNull(channelId);
        function6.invoke(messageId2, channelId, num, mediaType, str, num2);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$40(MessageAccessoriesAdapter messageAccessoriesAdapter, MessagePartViewHolder messagePartViewHolder) {
        messageAccessoriesAdapter.onTapSpoiler.invoke(messagePartViewHolder);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$41(MessageAccessoriesAdapter messageAccessoriesAdapter, MessageAccessory messageAccessory, boolean z10) {
        ChatEventHandler chatEventHandler = messageAccessoriesAdapter.eventHandler;
        if (chatEventHandler == null) {
            Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
            chatEventHandler = null;
        }
        PostPreviewEmbedMessageAccessory postPreviewEmbedMessageAccessory = (PostPreviewEmbedMessageAccessory) messageAccessory;
        chatEventHandler.mo469onTapObscuredMediaToggleZQwuxwg(postPreviewEmbedMessageAccessory.mo536getMessageId3Eiw7ao(), postPreviewEmbedMessageAccessory.getPostPreviewEmbed().m405getThreadIdo4g7jtM(), z10, null, null);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$5(MessageAccessoriesAdapter messageAccessoriesAdapter, MessagePartViewHolder messagePartViewHolder) {
        messageAccessoriesAdapter.onTapSpoiler.invoke(messagePartViewHolder);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$6(MessageAccessoriesAdapter messageAccessoriesAdapter, MessageAccessory messageAccessory, boolean z10) {
        ChatEventHandler chatEventHandler = messageAccessoriesAdapter.eventHandler;
        if (chatEventHandler == null) {
            Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
            chatEventHandler = null;
        }
        EmbedMessageAccessory embedMessageAccessory = (EmbedMessageAccessory) messageAccessory;
        chatEventHandler.mo469onTapObscuredMediaToggleZQwuxwg(embedMessageAccessory.mo536getMessageId3Eiw7ao(), embedMessageAccessory.m562getChannelIdo4g7jtM(), z10, null, embedMessageAccessory.getEmbed().getId());
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$7(MessageAccessoriesAdapter messageAccessoriesAdapter, MessagePartViewHolder messagePartViewHolder) {
        messageAccessoriesAdapter.onTapSpoiler.invoke(messagePartViewHolder);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$8(MessagePartViewHolder messagePartViewHolder, MessageAccessory messageAccessory, MessageAccessoriesAdapter messageAccessoriesAdapter, Double d10, Integer num) {
        View itemView = messagePartViewHolder.itemView;
        Intrinsics.checkNotNullExpressionValue(itemView, "itemView");
        EmbedMessageAccessory embedMessageAccessory = (EmbedMessageAccessory) messageAccessory;
        messageAccessoriesAdapter.m504onMediaClickedmdVZsaY(itemView, embedMessageAccessory.mo536getMessageId3Eiw7ao(), "embed", ViewResizeMode.Fill, d10, embedMessageAccessory.getIndex(), num, null, null);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$9(MessageAccessoriesAdapter messageAccessoriesAdapter, MessageAccessory messageAccessory) {
        ChatEventHandler chatEventHandler = messageAccessoriesAdapter.eventHandler;
        if (chatEventHandler == null) {
            Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
            chatEventHandler = null;
        }
        InfoLinkMessageAccessory infoLinkMessageAccessory = (InfoLinkMessageAccessory) messageAccessory;
        chatEventHandler.mo468onTapObscuredMediaLearnMore8a0ehIg(infoLinkMessageAccessory.mo536getMessageId3Eiw7ao(), infoLinkMessageAccessory.m611getChannelIdo4g7jtM(), infoLinkMessageAccessory.getAttachmentId(), infoLinkMessageAccessory.getEmbedId());
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onCreateViewHolder$lambda$2(MessageAccessoriesAdapter messageAccessoriesAdapter, MessagePartViewHolder holder) {
        Intrinsics.checkNotNullParameter(holder, "holder");
        messageAccessoriesAdapter.onTapSpoiler.invoke(holder);
        return Unit.f32008a;
    }

    /* renamed from: onMediaClicked-mdVZsaY  reason: not valid java name */
    private final void m504onMediaClickedmdVZsaY(View view, String str, String str2, ViewResizeMode viewResizeMode, Double d10, int i10, Integer num, String str3, Integer num2) {
        Point locationInWindow = ViewLocationUtilsKt.getLocationInWindow(view);
        ChatEventHandler chatEventHandler = this.eventHandler;
        if (chatEventHandler == null) {
            Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
            chatEventHandler = null;
        }
        chatEventHandler.mo460onTapImageJR3bP6M(str, i10, str2, (int) SizeUtilsKt.getPxToDp(view.getWidth()), (int) SizeUtilsKt.getPxToDp(view.getHeight()), (int) SizeUtilsKt.getPxToDp(locationInWindow.x), (int) SizeUtilsKt.getPxToDp(locationInWindow.y), viewResizeMode, d10, num, str3, num2);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onTapSpoiler$lambda$1(MessageAccessoriesAdapter messageAccessoriesAdapter, MessagePartViewHolder holder) {
        Intrinsics.checkNotNullParameter(holder, "holder");
        messageAccessoriesAdapter.notifyItemChanged(holder.getBindingAdapterPosition());
        messageAccessoriesAdapter.measureAndLayout.invoke();
        return Unit.f32008a;
    }

    @SuppressLint({"NotifyDataSetChanged"})
    public final void clear() {
        this.items = CollectionsKt.l();
        this.messageId = null;
        this.channelId = null;
        this.guildId = null;
        notifyDataSetChanged();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public int getItemCount() {
        return this.items.size();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public long getItemId(int i10) {
        return this.items.get(i10).getItemId().longValue();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public int getItemViewType(int i10) {
        MessageAccessory messageAccessory = this.items.get(i10);
        if (messageAccessory instanceof EmbedMessageAccessory) {
            return 1;
        }
        if (messageAccessory instanceof GiftMessageAccessory) {
            return 16;
        }
        if (messageAccessory instanceof ReferralMessageAccessory) {
            return 52;
        }
        if (messageAccessory instanceof PremiumGroupInviteMessageAccessory) {
            return 57;
        }
        if (messageAccessory instanceof MessageContentAccessory) {
            return 0;
        }
        if (messageAccessory instanceof GuildInviteMessageAccessory) {
            return 5;
        }
        if (messageAccessory instanceof AppMessageEmbedAccessory) {
            return 54;
        }
        if (messageAccessory instanceof ActivityInstanceEmbedMessageAccessory) {
            return 40;
        }
        if (messageAccessory instanceof EmbeddedActivityInviteMessageAccessory) {
            return 31;
        }
        if (messageAccessory instanceof GuildInviteDisabledMessageAccessory) {
            return 25;
        }
        if (messageAccessory instanceof GuildEventInviteMessageAccessory) {
            return 15;
        }
        if (messageAccessory instanceof ReactionsMessageAccessory) {
            return 4;
        }
        if (messageAccessory instanceof StickerMessageAccessory) {
            int i11 = WhenMappings.$EnumSwitchMapping$0[((StickerMessageAccessory) messageAccessory).getSticker().getFormatType().ordinal()];
            if (i11 != 1) {
                if (i11 != 2) {
                    if (i11 != 3) {
                        if (i11 == 4) {
                            return 27;
                        }
                        throw new qr.p();
                    }
                    return 8;
                }
                return 7;
            }
            return 6;
        } else if (messageAccessory instanceof ThreadEmbedMessageAccessory) {
            return 9;
        } else {
            if (messageAccessory instanceof FileAttachmentMessageAccessory) {
                return 11;
            }
            if (messageAccessory instanceof MessageComponentsAccessory) {
                return 12;
            }
            if (messageAccessory instanceof TimestampMessageAccessory) {
                return 13;
            }
            if (messageAccessory instanceof WelcomeStickerAccessory) {
                return 14;
            }
            if (messageAccessory instanceof ActivityRichPresenceInviteEmbedMessageAccessory) {
                return 55;
            }
            if (messageAccessory instanceof EphemeralIndicationMessageAccessory) {
                return 18;
            }
            if (messageAccessory instanceof SurveyIndicationMessageAccessory) {
                return 24;
            }
            if (messageAccessory instanceof InteractionStatusMessageAccessory) {
                return 19;
            }
            if (messageAccessory instanceof ForumPostActionBar) {
                return 20;
            }
            if (messageAccessory instanceof FlaggedMessageEmbedAccessory) {
                return 21;
            }
            if (messageAccessory instanceof FlaggedMessageActionBarAccessory) {
                return 22;
            }
            if (messageAccessory instanceof AutoModerationNotificationEmbedAccessory) {
                return 33;
            }
            if (messageAccessory instanceof RoleSubscriptionPurchaseAccessory) {
                return 23;
            }
            if (messageAccessory instanceof MediaMosaicAttachmentMessageAccessory) {
                return 26;
            }
            if (messageAccessory instanceof InviteToSpeakAccessory) {
                return 28;
            }
            if (messageAccessory instanceof AudioAttachmentMessageAccessory) {
                return 29;
            }
            if (messageAccessory instanceof PostPreviewEmbedMessageAccessory) {
                return 32;
            }
            if (messageAccessory instanceof ChannelPromptActionsAccessory) {
                return 34;
            }
            if (messageAccessory instanceof InfoLinkMessageAccessory) {
                return 35;
            }
            if (messageAccessory instanceof SafetyPolicyNoticeMessageAccessory) {
                return 36;
            }
            if (messageAccessory instanceof SafetySystemNotificationMessageAccessory) {
                return 39;
            }
            if (messageAccessory instanceof PollMessageAccessory) {
                int i12 = WhenMappings.$EnumSwitchMapping$1[((PollMessageAccessory) messageAccessory).getData().getLayoutType().ordinal()];
                if (i12 != 1) {
                    if (i12 != 2) {
                        if (i12 == 3) {
                            return 38;
                        }
                        throw new qr.p();
                    }
                    return 37;
                }
                throw new IllegalStateException("UNKNOWN Layouts should not be presented");
            } else if (messageAccessory instanceof CtaButtonMessageAccessory) {
                return 41;
            } else {
                if (messageAccessory instanceof ForwardHeaderMessageAccessory) {
                    return 43;
                }
                if (messageAccessory instanceof ForwardBreadcrumbMessageAccessory) {
                    return 44;
                }
                if (messageAccessory instanceof GuildProfileInviteMessageAccessory) {
                    return 53;
                }
                if (messageAccessory instanceof SharedCustomThemeMessageAccessory) {
                    return 56;
                }
                if (!(messageAccessory instanceof ImageAttachmentMessageAccessory)) {
                    if (messageAccessory instanceof VideoAttachmentMessageAccessory) {
                        throw new IllegalArgumentException("No longer allowed. Use MediaMosaicAttachmentMessageAccessory");
                    }
                    throw new qr.p();
                }
                throw new IllegalArgumentException("No longer allowed. Use MediaMosaicAttachmentMessageAccessory");
            }
        }
    }

    public final void setComponentProvider(ComponentProvider componentProvider) {
        this.botComponentProvider = componentProvider;
    }

    public final void setEventHandler(@NotNull ChatEventHandler eventHandler) {
        Intrinsics.checkNotNullParameter(eventHandler, "eventHandler");
        this.eventHandler = eventHandler;
    }

    @SuppressLint({"NotifyDataSetChanged"})
    /* renamed from: setItems-bo5iIEc  reason: not valid java name */
    public final void m505setItemsbo5iIEc(@NotNull String messageId, long j10, GuildId guildId, @NotNull List<? extends MessageAccessory> items) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(items, "items");
        this.messageId = messageId;
        this.channelId = ChannelId.m1057boximpl(j10);
        this.guildId = guildId;
        this.items = items;
        notifyDataSetChanged();
    }

    public final void setNestedAccessoriesRecycledViewPool(RecyclerView.RecycledViewPool recycledViewPool) {
        this.recyclerViewPool = recycledViewPool;
    }

    public /* synthetic */ MessageAccessoriesAdapter(Function0 function0, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? new Function0() { // from class: com.discord.chat.presentation.message.f
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f32008a;
                return unit;
            }
        } : function0);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public void onBindViewHolder(@NotNull final MessagePartViewHolder holder, int i10) {
        ChatEventHandler chatEventHandler;
        ChatEventHandler chatEventHandler2;
        ChatEventHandler chatEventHandler3;
        ChatEventHandler chatEventHandler4;
        ChatEventHandler chatEventHandler5;
        Intrinsics.checkNotNullParameter(holder, "holder");
        ChatEventHandler chatEventHandler6 = this.eventHandler;
        if (chatEventHandler6 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
            chatEventHandler6 = null;
        }
        final Function6 mo493getOnMessageLongPressed = chatEventHandler6.mo493getOnMessageLongPressed();
        final Function4 function4 = mo493getOnMessageLongPressed != null ? new Function4() { // from class: com.discord.chat.presentation.message.q
            @Override // kotlin.jvm.functions.Function4
            public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
                Unit onBindViewHolder$lambda$4$lambda$3;
                onBindViewHolder$lambda$4$lambda$3 = MessageAccessoriesAdapter.onBindViewHolder$lambda$4$lambda$3(Function6.this, this, (MediaType) obj, (Integer) obj2, (String) obj3, (Integer) obj4);
                return onBindViewHolder$lambda$4$lambda$3;
            }
        } : null;
        final MessageAccessory messageAccessory = this.items.get(i10);
        if (messageAccessory instanceof EmbedMessageAccessory) {
            EmbedViewHolder embedViewHolder = (EmbedViewHolder) holder;
            ChatEventHandler chatEventHandler7 = this.eventHandler;
            if (chatEventHandler7 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                chatEventHandler5 = null;
            } else {
                chatEventHandler5 = chatEventHandler7;
            }
            EmbedMessageAccessory embedMessageAccessory = (EmbedMessageAccessory) messageAccessory;
            int dimensionPixelSize = holder.itemView.getContext().getResources().getDimensionPixelSize(R.dimen.message_media_max_height);
            int radiusPx = embedMessageAccessory.getRadiusPx();
            View.OnLongClickListener onLongClick = embedMessageAccessory.getOnLongClick();
            SpoilerAttributes spoilerAttributes = embedMessageAccessory.getSpoilerAttributes();
            embedViewHolder.bind(chatEventHandler5, embedMessageAccessory, dimensionPixelSize, radiusPx, new Function0() { // from class: com.discord.chat.presentation.message.z
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit onBindViewHolder$lambda$7;
                    onBindViewHolder$lambda$7 = MessageAccessoriesAdapter.onBindViewHolder$lambda$7(MessageAccessoriesAdapter.this, holder);
                    return onBindViewHolder$lambda$7;
                }
            }, spoilerAttributes != null ? spoilerAttributes.configure(new Function0() { // from class: com.discord.chat.presentation.message.i
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit onBindViewHolder$lambda$5;
                    onBindViewHolder$lambda$5 = MessageAccessoriesAdapter.onBindViewHolder$lambda$5(MessageAccessoriesAdapter.this, holder);
                    return onBindViewHolder$lambda$5;
                }
            }, new Function1() { // from class: com.discord.chat.presentation.message.u
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit onBindViewHolder$lambda$6;
                    onBindViewHolder$lambda$6 = MessageAccessoriesAdapter.onBindViewHolder$lambda$6(MessageAccessoriesAdapter.this, messageAccessory, ((Boolean) obj).booleanValue());
                    return onBindViewHolder$lambda$6;
                }
            }) : null, new Function2() { // from class: com.discord.chat.presentation.message.a0
                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(Object obj, Object obj2) {
                    Unit onBindViewHolder$lambda$8;
                    onBindViewHolder$lambda$8 = MessageAccessoriesAdapter.onBindViewHolder$lambda$8(MessagePartViewHolder.this, messageAccessory, this, (Double) obj, (Integer) obj2);
                    return onBindViewHolder$lambda$8;
                }
            }, onLongClick, embedMessageAccessory.getPortal());
        } else if (messageAccessory instanceof InfoLinkMessageAccessory) {
            InfoLinkMessageAccessory infoLinkMessageAccessory = (InfoLinkMessageAccessory) messageAccessory;
            ((InfoLinkViewHolder) holder).bind(infoLinkMessageAccessory.getText(), infoLinkMessageAccessory.getIcon(), new Function0() { // from class: com.discord.chat.presentation.message.c0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit onBindViewHolder$lambda$9;
                    onBindViewHolder$lambda$9 = MessageAccessoriesAdapter.onBindViewHolder$lambda$9(MessageAccessoriesAdapter.this, messageAccessory);
                    return onBindViewHolder$lambda$9;
                }
            });
        } else if (messageAccessory instanceof ReferralMessageAccessory) {
            ((ReferralViewHolder) holder).bind((ReferralMessageAccessory) messageAccessory, new Function1() { // from class: com.discord.chat.presentation.message.d0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit onBindViewHolder$lambda$10;
                    onBindViewHolder$lambda$10 = MessageAccessoriesAdapter.onBindViewHolder$lambda$10(MessageAccessoriesAdapter.this, (String) obj);
                    return onBindViewHolder$lambda$10;
                }
            }, new Function2<MessageId, LinkContentNode, Unit>() { // from class: com.discord.chat.presentation.message.MessageAccessoriesAdapter$onBindViewHolder$7
                @Override // kotlin.jvm.functions.Function2
                public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
                    m524invokentcYbpo(((MessageId) obj).m1092unboximpl(), (LinkContentNode) obj2);
                    return Unit.f32008a;
                }

                /* renamed from: invoke-ntcYbpo  reason: not valid java name */
                public final void m524invokentcYbpo(String messageId, LinkContentNode node) {
                    ChatEventHandler chatEventHandler8;
                    Intrinsics.checkNotNullParameter(messageId, "messageId");
                    Intrinsics.checkNotNullParameter(node, "node");
                    chatEventHandler8 = MessageAccessoriesAdapter.this.eventHandler;
                    if (chatEventHandler8 == null) {
                        Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                        chatEventHandler8 = null;
                    }
                    chatEventHandler8.mo437onLinkClickedntcYbpo(messageId, node);
                }
            });
        } else if (messageAccessory instanceof PremiumGroupInviteMessageAccessory) {
            ((PremiumGroupInviteViewHolder) holder).bind((PremiumGroupInviteMessageAccessory) messageAccessory, new Function2<MessageId, LinkContentNode, Unit>() { // from class: com.discord.chat.presentation.message.MessageAccessoriesAdapter$onBindViewHolder$8
                @Override // kotlin.jvm.functions.Function2
                public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
                    m525invokentcYbpo(((MessageId) obj).m1092unboximpl(), (LinkContentNode) obj2);
                    return Unit.f32008a;
                }

                /* renamed from: invoke-ntcYbpo  reason: not valid java name */
                public final void m525invokentcYbpo(String messageId, LinkContentNode node) {
                    ChatEventHandler chatEventHandler8;
                    Intrinsics.checkNotNullParameter(messageId, "messageId");
                    Intrinsics.checkNotNullParameter(node, "node");
                    chatEventHandler8 = MessageAccessoriesAdapter.this.eventHandler;
                    if (chatEventHandler8 == null) {
                        Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                        chatEventHandler8 = null;
                    }
                    chatEventHandler8.mo437onLinkClickedntcYbpo(messageId, node);
                }
            });
        } else if (messageAccessory instanceof GiftMessageAccessory) {
            GiftViewHolder giftViewHolder = (GiftViewHolder) holder;
            GiftMessageAccessory giftMessageAccessory = (GiftMessageAccessory) messageAccessory;
            ChatEventHandler chatEventHandler8 = this.eventHandler;
            if (chatEventHandler8 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                chatEventHandler4 = null;
            } else {
                chatEventHandler4 = chatEventHandler8;
            }
            giftViewHolder.bind(giftMessageAccessory, new MessageAccessoriesAdapter$onBindViewHolder$9(chatEventHandler4), new Function1() { // from class: com.discord.chat.presentation.message.e0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit onBindViewHolder$lambda$11;
                    onBindViewHolder$lambda$11 = MessageAccessoriesAdapter.onBindViewHolder$lambda$11(MessageAccessoriesAdapter.this, messageAccessory, (String) obj);
                    return onBindViewHolder$lambda$11;
                }
            });
        } else if (messageAccessory instanceof MessageContentAccessory) {
            MessageContentViewHolder messageContentViewHolder = (MessageContentViewHolder) holder;
            MessageContentAccessory messageContentAccessory = (MessageContentAccessory) messageAccessory;
            ChatEventHandler chatEventHandler9 = this.eventHandler;
            if (chatEventHandler9 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                chatEventHandler9 = null;
            }
            MessageAccessoriesAdapter$onBindViewHolder$11 messageAccessoriesAdapter$onBindViewHolder$11 = new MessageAccessoriesAdapter$onBindViewHolder$11(chatEventHandler9);
            ChatEventHandler chatEventHandler10 = this.eventHandler;
            if (chatEventHandler10 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                chatEventHandler10 = null;
            }
            MessageAccessoriesAdapter$onBindViewHolder$12 messageAccessoriesAdapter$onBindViewHolder$12 = new MessageAccessoriesAdapter$onBindViewHolder$12(chatEventHandler10);
            ChatEventHandler chatEventHandler11 = this.eventHandler;
            if (chatEventHandler11 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                chatEventHandler11 = null;
            }
            MessageAccessoriesAdapter$onBindViewHolder$13 messageAccessoriesAdapter$onBindViewHolder$13 = new MessageAccessoriesAdapter$onBindViewHolder$13(chatEventHandler11);
            ChatEventHandler chatEventHandler12 = this.eventHandler;
            if (chatEventHandler12 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                chatEventHandler12 = null;
            }
            MessageAccessoriesAdapter$onBindViewHolder$14 messageAccessoriesAdapter$onBindViewHolder$14 = new MessageAccessoriesAdapter$onBindViewHolder$14(chatEventHandler12);
            ChatEventHandler chatEventHandler13 = this.eventHandler;
            if (chatEventHandler13 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                chatEventHandler13 = null;
            }
            MessageAccessoriesAdapter$onBindViewHolder$15 messageAccessoriesAdapter$onBindViewHolder$15 = new MessageAccessoriesAdapter$onBindViewHolder$15(chatEventHandler13);
            ChatEventHandler chatEventHandler14 = this.eventHandler;
            if (chatEventHandler14 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                chatEventHandler14 = null;
            }
            MessageAccessoriesAdapter$onBindViewHolder$16 messageAccessoriesAdapter$onBindViewHolder$16 = new MessageAccessoriesAdapter$onBindViewHolder$16(chatEventHandler14);
            ChatEventHandler chatEventHandler15 = this.eventHandler;
            if (chatEventHandler15 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                chatEventHandler15 = null;
            }
            MessageAccessoriesAdapter$onBindViewHolder$17 messageAccessoriesAdapter$onBindViewHolder$17 = new MessageAccessoriesAdapter$onBindViewHolder$17(chatEventHandler15);
            Function1<? super MessagePartViewHolder, Unit> function1 = this.onTapSpoiler;
            ChatEventHandler chatEventHandler16 = this.eventHandler;
            if (chatEventHandler16 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                chatEventHandler16 = null;
            }
            MessageAccessoriesAdapter$onBindViewHolder$18 messageAccessoriesAdapter$onBindViewHolder$18 = new MessageAccessoriesAdapter$onBindViewHolder$18(chatEventHandler16);
            ChatEventHandler chatEventHandler17 = this.eventHandler;
            if (chatEventHandler17 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                chatEventHandler17 = null;
            }
            MessageAccessoriesAdapter$onBindViewHolder$19 messageAccessoriesAdapter$onBindViewHolder$19 = new MessageAccessoriesAdapter$onBindViewHolder$19(chatEventHandler17);
            ChatEventHandler chatEventHandler18 = this.eventHandler;
            if (chatEventHandler18 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                chatEventHandler18 = null;
            }
            MessageAccessoriesAdapter$onBindViewHolder$20 messageAccessoriesAdapter$onBindViewHolder$20 = new MessageAccessoriesAdapter$onBindViewHolder$20(chatEventHandler18);
            ChatEventHandler chatEventHandler19 = this.eventHandler;
            if (chatEventHandler19 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                chatEventHandler19 = null;
            }
            MessageAccessoriesAdapter$onBindViewHolder$21 messageAccessoriesAdapter$onBindViewHolder$21 = new MessageAccessoriesAdapter$onBindViewHolder$21(chatEventHandler19);
            ChatEventHandler chatEventHandler20 = this.eventHandler;
            if (chatEventHandler20 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                chatEventHandler20 = null;
            }
            MessageAccessoriesAdapter$onBindViewHolder$22 messageAccessoriesAdapter$onBindViewHolder$22 = new MessageAccessoriesAdapter$onBindViewHolder$22(chatEventHandler20);
            ChatEventHandler chatEventHandler21 = this.eventHandler;
            if (chatEventHandler21 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                chatEventHandler21 = null;
            }
            MessageAccessoriesAdapter$onBindViewHolder$23 messageAccessoriesAdapter$onBindViewHolder$23 = new MessageAccessoriesAdapter$onBindViewHolder$23(chatEventHandler21);
            ChatEventHandler chatEventHandler22 = this.eventHandler;
            if (chatEventHandler22 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                chatEventHandler22 = null;
            }
            messageContentViewHolder.bind(messageContentAccessory, messageAccessoriesAdapter$onBindViewHolder$11, messageAccessoriesAdapter$onBindViewHolder$12, messageAccessoriesAdapter$onBindViewHolder$13, messageAccessoriesAdapter$onBindViewHolder$14, messageAccessoriesAdapter$onBindViewHolder$15, messageAccessoriesAdapter$onBindViewHolder$16, messageAccessoriesAdapter$onBindViewHolder$17, messageAccessoriesAdapter$onBindViewHolder$18, messageAccessoriesAdapter$onBindViewHolder$19, function1, messageAccessoriesAdapter$onBindViewHolder$20, messageAccessoriesAdapter$onBindViewHolder$21, messageAccessoriesAdapter$onBindViewHolder$22, messageAccessoriesAdapter$onBindViewHolder$23, new MessageAccessoriesAdapter$onBindViewHolder$24(chatEventHandler22));
        } else if (messageAccessory instanceof MediaMosaicAttachmentMessageAccessory) {
            AttachmentMediaMosaicViewHolder attachmentMediaMosaicViewHolder = (AttachmentMediaMosaicViewHolder) holder;
            MediaMosaicAttachmentMessageAccessory mediaMosaicAttachmentMessageAccessory = (MediaMosaicAttachmentMessageAccessory) messageAccessory;
            MessageMargins margins = mediaMosaicAttachmentMessageAccessory.getMargins();
            ChatEventHandler chatEventHandler23 = this.eventHandler;
            if (chatEventHandler23 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                chatEventHandler3 = null;
            } else {
                chatEventHandler3 = chatEventHandler23;
            }
            attachmentMediaMosaicViewHolder.bind(margins, chatEventHandler3, mediaMosaicAttachmentMessageAccessory.getAttachments(), new Function3() { // from class: com.discord.chat.presentation.message.f0
                @Override // kotlin.jvm.functions.Function3
                public final Object invoke(Object obj, Object obj2, Object obj3) {
                    Unit onBindViewHolder$lambda$12;
                    onBindViewHolder$lambda$12 = MessageAccessoriesAdapter.onBindViewHolder$lambda$12(MessageAccessoriesAdapter.this, ((Integer) obj).intValue(), (MessageAccessory) obj2, (MessagePartViewHolder) obj3);
                    return onBindViewHolder$lambda$12;
                }
            }, function4 != null ? new Function1() { // from class: com.discord.chat.presentation.message.g0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit onBindViewHolder$lambda$14$lambda$13;
                    onBindViewHolder$lambda$14$lambda$13 = MessageAccessoriesAdapter.onBindViewHolder$lambda$14$lambda$13(Function4.this, ((Integer) obj).intValue());
                    return onBindViewHolder$lambda$14$lambda$13;
                }
            } : null, new Function0() { // from class: com.discord.chat.presentation.message.b0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit onBindViewHolder$lambda$15;
                    onBindViewHolder$lambda$15 = MessageAccessoriesAdapter.onBindViewHolder$lambda$15(MessageAccessoriesAdapter.this, holder);
                    return onBindViewHolder$lambda$15;
                }
            }, new Function1() { // from class: com.discord.chat.presentation.message.j0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit onBindViewHolder$lambda$16;
                    onBindViewHolder$lambda$16 = MessageAccessoriesAdapter.onBindViewHolder$lambda$16(MessageAccessoriesAdapter.this, messageAccessory, ((Boolean) obj).booleanValue());
                    return onBindViewHolder$lambda$16;
                }
            }, mediaMosaicAttachmentMessageAccessory.isForwardedContent(), mediaMosaicAttachmentMessageAccessory.getShouldAutoPlayGif(), mediaMosaicAttachmentMessageAccessory.getConstrainedWidth());
        } else if (messageAccessory instanceof ReactionsMessageAccessory) {
            ReactionsMessageAccessory reactionsMessageAccessory = (ReactionsMessageAccessory) messageAccessory;
            ((ReactionsViewHolder) holder).bind(reactionsMessageAccessory.getReactions(), reactionsMessageAccessory.getCanAddNewReactions(), reactionsMessageAccessory.getAddNewReactionAccessibilityLabel(), reactionsMessageAccessory.getReactionsTheme(), new View.OnClickListener() { // from class: com.discord.chat.presentation.message.k0
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    MessageAccessoriesAdapter.onBindViewHolder$lambda$17(MessageAccessoriesAdapter.this, view);
                }
            }, new Function1() { // from class: com.discord.chat.presentation.message.m0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit onBindViewHolder$lambda$19;
                    onBindViewHolder$lambda$19 = MessageAccessoriesAdapter.onBindViewHolder$lambda$19(MessageAccessoriesAdapter.this, (ReactionView.Reaction) obj);
                    return onBindViewHolder$lambda$19;
                }
            }, new Function1() { // from class: com.discord.chat.presentation.message.n0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit onBindViewHolder$lambda$20;
                    onBindViewHolder$lambda$20 = MessageAccessoriesAdapter.onBindViewHolder$lambda$20(MessageAccessoriesAdapter.this, (ReactionView.Reaction) obj);
                    return onBindViewHolder$lambda$20;
                }
            }, reactionsMessageAccessory.getTheme(), reactionsMessageAccessory.getShowReactLabel(), reactionsMessageAccessory.getShowReplyButton(), new View.OnClickListener() { // from class: com.discord.chat.presentation.message.l0
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    MessageAccessoriesAdapter.onBindViewHolder$lambda$18(MessageAccessoriesAdapter.this, view);
                }
            });
        } else if (messageAccessory instanceof StickerMessageAccessory) {
            ((StickerPartViewHolder) holder).bind(((StickerMessageAccessory) messageAccessory).getSticker(), new Function1() { // from class: com.discord.chat.presentation.message.o0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit onBindViewHolder$lambda$21;
                    onBindViewHolder$lambda$21 = MessageAccessoriesAdapter.onBindViewHolder$lambda$21(MessageAccessoriesAdapter.this, messageAccessory, (Sticker) obj);
                    return onBindViewHolder$lambda$21;
                }
            }, new Function1() { // from class: com.discord.chat.presentation.message.p0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit onBindViewHolder$lambda$22;
                    onBindViewHolder$lambda$22 = MessageAccessoriesAdapter.onBindViewHolder$lambda$22(MessageAccessoriesAdapter.this, messageAccessory, (Sticker) obj);
                    return onBindViewHolder$lambda$22;
                }
            }, 160, 160);
        } else if (messageAccessory instanceof GuildInviteMessageAccessory) {
            ((GuildInviteViewHolder) holder).bind((GuildInviteMessageAccessory) messageAccessory);
        } else if (messageAccessory instanceof AppMessageEmbedAccessory) {
            ((AppMessageEmbedViewHolder) holder).bind((AppMessageEmbedAccessory) messageAccessory);
        } else if (messageAccessory instanceof ActivityInstanceEmbedMessageAccessory) {
            ((ActivityInstanceEmbedViewHolder) holder).bind((ActivityInstanceEmbedMessageAccessory) messageAccessory);
        } else if (messageAccessory instanceof EmbeddedActivityInviteMessageAccessory) {
            ((EmbeddedActivityInviteViewHolder) holder).bind((EmbeddedActivityInviteMessageAccessory) messageAccessory);
        } else if (messageAccessory instanceof GuildProfileInviteMessageAccessory) {
            GuildProfileInviteViewHolder guildProfileInviteViewHolder = (GuildProfileInviteViewHolder) holder;
            GuildProfileInviteMessageAccessory guildProfileInviteMessageAccessory = (GuildProfileInviteMessageAccessory) messageAccessory;
            ChatEventHandler chatEventHandler24 = this.eventHandler;
            if (chatEventHandler24 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                chatEventHandler24 = null;
            }
            guildProfileInviteViewHolder.bind(guildProfileInviteMessageAccessory, chatEventHandler24);
        } else if (messageAccessory instanceof GuildInviteDisabledMessageAccessory) {
            ((GuildInviteDisabledViewHolder) holder).bind((GuildInviteDisabledMessageAccessory) messageAccessory);
        } else if (messageAccessory instanceof GuildEventInviteMessageAccessory) {
            ((GuildEventInviteViewHolder) holder).bind((GuildEventInviteMessageAccessory) messageAccessory);
        } else if (messageAccessory instanceof ThreadEmbedMessageAccessory) {
            ThreadEmbedViewHolder threadEmbedViewHolder = (ThreadEmbedViewHolder) holder;
            ThreadEmbedMessageAccessory threadEmbedMessageAccessory = (ThreadEmbedMessageAccessory) messageAccessory;
            ChatEventHandler chatEventHandler25 = this.eventHandler;
            if (chatEventHandler25 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                chatEventHandler25 = null;
            }
            threadEmbedViewHolder.bind(threadEmbedMessageAccessory, new MessageAccessoriesAdapter$onBindViewHolder$35(chatEventHandler25));
        } else if (messageAccessory instanceof ForumPostActionBar) {
            ForumPostActionBarViewHolder forumPostActionBarViewHolder = (ForumPostActionBarViewHolder) holder;
            ForumPostActionBar forumPostActionBar = (ForumPostActionBar) messageAccessory;
            ReactionsTheme reactionsTheme = forumPostActionBar.getReactionsTheme();
            View.OnClickListener onClickListener = new View.OnClickListener() { // from class: com.discord.chat.presentation.message.g
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    MessageAccessoriesAdapter.onBindViewHolder$lambda$23(MessageAccessoriesAdapter.this, view);
                }
            };
            View.OnClickListener onClickListener2 = new View.OnClickListener() { // from class: com.discord.chat.presentation.message.h
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    MessageAccessoriesAdapter.onBindViewHolder$lambda$24(MessageAccessoriesAdapter.this, view);
                }
            };
            View.OnClickListener onClickListener3 = new View.OnClickListener() { // from class: com.discord.chat.presentation.message.j
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    MessageAccessoriesAdapter.onBindViewHolder$lambda$25(MessageAccessoriesAdapter.this, view);
                }
            };
            View.OnClickListener onClickListener4 = new View.OnClickListener() { // from class: com.discord.chat.presentation.message.k
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    MessageAccessoriesAdapter.onBindViewHolder$lambda$26(MessageAccessoriesAdapter.this, view);
                }
            };
            Function1<? super ReactionView.Reaction, Unit> function12 = new Function1() { // from class: com.discord.chat.presentation.message.l
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit onBindViewHolder$lambda$27;
                    onBindViewHolder$lambda$27 = MessageAccessoriesAdapter.onBindViewHolder$lambda$27(MessageAccessoriesAdapter.this, (ReactionView.Reaction) obj);
                    return onBindViewHolder$lambda$27;
                }
            };
            Function1<? super ReactionView.Reaction, Unit> function13 = new Function1() { // from class: com.discord.chat.presentation.message.m
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit onBindViewHolder$lambda$28;
                    onBindViewHolder$lambda$28 = MessageAccessoriesAdapter.onBindViewHolder$lambda$28(MessageAccessoriesAdapter.this, (ReactionView.Reaction) obj);
                    return onBindViewHolder$lambda$28;
                }
            };
            View.OnClickListener onClickListener5 = new View.OnClickListener() { // from class: com.discord.chat.presentation.message.n
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    MessageAccessoriesAdapter.onBindViewHolder$lambda$30(MessageAccessoriesAdapter.this, view);
                }
            };
            ChatEventHandler chatEventHandler26 = this.eventHandler;
            if (chatEventHandler26 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                chatEventHandler26 = null;
            }
            forumPostActionBarViewHolder.bind(forumPostActionBar, reactionsTheme, onClickListener, onClickListener2, onClickListener3, onClickListener4, function12, function13, onClickListener5, new MessageAccessoriesAdapter$onBindViewHolder$43(chatEventHandler26));
        } else if (messageAccessory instanceof FileAttachmentMessageAccessory) {
            FileAttachmentViewHolder fileAttachmentViewHolder = (FileAttachmentViewHolder) holder;
            FileAttachmentMessageAccessory fileAttachmentMessageAccessory = (FileAttachmentMessageAccessory) messageAccessory;
            Function2<? super String, ? super String, Unit> function2 = new Function2() { // from class: com.discord.chat.presentation.message.o
                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(Object obj, Object obj2) {
                    Unit onBindViewHolder$lambda$31;
                    onBindViewHolder$lambda$31 = MessageAccessoriesAdapter.onBindViewHolder$lambda$31(MessageAccessoriesAdapter.this, (String) obj, (String) obj2);
                    return onBindViewHolder$lambda$31;
                }
            };
            SpoilerAttributes spoilerAttributes2 = fileAttachmentMessageAccessory.getSpoilerAttributes();
            fileAttachmentViewHolder.bind(fileAttachmentMessageAccessory, function2, spoilerAttributes2 != null ? SpoilerAttributes.configure$default(spoilerAttributes2, new Function0() { // from class: com.discord.chat.presentation.message.p
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit onBindViewHolder$lambda$32;
                    onBindViewHolder$lambda$32 = MessageAccessoriesAdapter.onBindViewHolder$lambda$32(MessageAccessoriesAdapter.this, holder);
                    return onBindViewHolder$lambda$32;
                }
            }, null, 2, null) : null);
        } else {
            ChatEventHandler chatEventHandler27 = null;
            if (messageAccessory instanceof MessageComponentsAccessory) {
                MessageComponentsViewHolder messageComponentsViewHolder = (MessageComponentsViewHolder) holder;
                MessageComponentsAccessory messageComponentsAccessory = (MessageComponentsAccessory) messageAccessory;
                ComponentProvider componentProvider = this.botComponentProvider;
                ChatEventHandler chatEventHandler28 = this.eventHandler;
                if (chatEventHandler28 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                    chatEventHandler2 = null;
                } else {
                    chatEventHandler2 = chatEventHandler28;
                }
                messageComponentsViewHolder.bind(messageComponentsAccessory, componentProvider, new Function4() { // from class: com.discord.chat.presentation.message.s
                    @Override // kotlin.jvm.functions.Function4
                    public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
                        Unit onBindViewHolder$lambda$35;
                        onBindViewHolder$lambda$35 = MessageAccessoriesAdapter.onBindViewHolder$lambda$35(MessageAccessory.this, this, (View) obj, (String) obj2, (Integer) obj3, (Double) obj4);
                        return onBindViewHolder$lambda$35;
                    }
                }, function4 != null ? new Function2() { // from class: com.discord.chat.presentation.message.r
                    @Override // kotlin.jvm.functions.Function2
                    public final Object invoke(Object obj, Object obj2) {
                        Unit onBindViewHolder$lambda$34$lambda$33;
                        onBindViewHolder$lambda$34$lambda$33 = MessageAccessoriesAdapter.onBindViewHolder$lambda$34$lambda$33(Function4.this, (String) obj, (Integer) obj2);
                        return onBindViewHolder$lambda$34$lambda$33;
                    }
                } : null, new Function0() { // from class: com.discord.chat.presentation.message.t
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit onBindViewHolder$lambda$36;
                        onBindViewHolder$lambda$36 = MessageAccessoriesAdapter.onBindViewHolder$lambda$36(MessageAccessoriesAdapter.this, holder);
                        return onBindViewHolder$lambda$36;
                    }
                }, new Function1() { // from class: com.discord.chat.presentation.message.v
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit onBindViewHolder$lambda$37;
                        onBindViewHolder$lambda$37 = MessageAccessoriesAdapter.onBindViewHolder$lambda$37(MessageAccessoriesAdapter.this, messageAccessory, ((Boolean) obj).booleanValue());
                        return onBindViewHolder$lambda$37;
                    }
                }, chatEventHandler2);
            } else if (messageAccessory instanceof FlaggedMessageEmbedAccessory) {
                ((FlaggedMessageEmbedViewHolder) holder).bind((FlaggedMessageEmbedAccessory) messageAccessory);
            } else if (messageAccessory instanceof FlaggedMessageActionBarAccessory) {
                FlaggedMessageActionBarViewHolder flaggedMessageActionBarViewHolder = (FlaggedMessageActionBarViewHolder) holder;
                FlaggedMessageActionBarAccessory flaggedMessageActionBarAccessory = (FlaggedMessageActionBarAccessory) messageAccessory;
                ChatEventHandler chatEventHandler29 = this.eventHandler;
                if (chatEventHandler29 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                    chatEventHandler29 = null;
                }
                MessageAccessoriesAdapter$onBindViewHolder$50 messageAccessoriesAdapter$onBindViewHolder$50 = new MessageAccessoriesAdapter$onBindViewHolder$50(chatEventHandler29);
                ChatEventHandler chatEventHandler30 = this.eventHandler;
                if (chatEventHandler30 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                    chatEventHandler30 = null;
                }
                flaggedMessageActionBarViewHolder.bind(flaggedMessageActionBarAccessory, messageAccessoriesAdapter$onBindViewHolder$50, new MessageAccessoriesAdapter$onBindViewHolder$51(chatEventHandler30));
            } else if (messageAccessory instanceof AutoModerationNotificationEmbedAccessory) {
                AutoModerationNotificationEmbedViewHolder autoModerationNotificationEmbedViewHolder = (AutoModerationNotificationEmbedViewHolder) holder;
                AutoModerationNotificationEmbedAccessory autoModerationNotificationEmbedAccessory = (AutoModerationNotificationEmbedAccessory) messageAccessory;
                ChatEventHandler chatEventHandler31 = this.eventHandler;
                if (chatEventHandler31 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                    chatEventHandler31 = null;
                }
                MessageAccessoriesAdapter$onBindViewHolder$52 messageAccessoriesAdapter$onBindViewHolder$52 = new MessageAccessoriesAdapter$onBindViewHolder$52(chatEventHandler31);
                ChatEventHandler chatEventHandler32 = this.eventHandler;
                if (chatEventHandler32 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                    chatEventHandler32 = null;
                }
                autoModerationNotificationEmbedViewHolder.bind(autoModerationNotificationEmbedAccessory, messageAccessoriesAdapter$onBindViewHolder$52, new MessageAccessoriesAdapter$onBindViewHolder$53(chatEventHandler32));
            } else if (messageAccessory instanceof TimestampMessageAccessory) {
                ((TimestampViewHolder) holder).bind((TimestampMessageAccessory) messageAccessory);
            } else if (messageAccessory instanceof WelcomeStickerAccessory) {
                ((WelcomeStickerViewHolder) holder).bind((WelcomeStickerAccessory) messageAccessory);
            } else if (messageAccessory instanceof ActivityRichPresenceInviteEmbedMessageAccessory) {
                ActivityRichPresenceInviteEmbedViewHolder activityRichPresenceInviteEmbedViewHolder = (ActivityRichPresenceInviteEmbedViewHolder) holder;
                ActivityRichPresenceInviteEmbedMessageAccessory activityRichPresenceInviteEmbedMessageAccessory = (ActivityRichPresenceInviteEmbedMessageAccessory) messageAccessory;
                ChatEventHandler chatEventHandler33 = this.eventHandler;
                if (chatEventHandler33 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                    chatEventHandler33 = null;
                }
                activityRichPresenceInviteEmbedViewHolder.bind(activityRichPresenceInviteEmbedMessageAccessory, new MessageAccessoriesAdapter$onBindViewHolder$54(chatEventHandler33));
            } else if (messageAccessory instanceof EphemeralIndicationMessageAccessory) {
                ((EphemeralIndicationViewHolder) holder).bind((EphemeralIndicationMessageAccessory) messageAccessory);
            } else if (messageAccessory instanceof SurveyIndicationMessageAccessory) {
                ((SurveyIndicationViewHolder) holder).bind((SurveyIndicationMessageAccessory) messageAccessory);
            } else if (messageAccessory instanceof InteractionStatusMessageAccessory) {
                ((InteractionStatusViewHolder) holder).bind((InteractionStatusMessageAccessory) messageAccessory);
            } else if (messageAccessory instanceof RoleSubscriptionPurchaseAccessory) {
                RoleSubscriptionPurchaseAccessory roleSubscriptionPurchaseAccessory = (RoleSubscriptionPurchaseAccessory) messageAccessory;
                ((RoleSubscriptionPurchaseViewHolder) holder).bind(roleSubscriptionPurchaseAccessory, MessageMargins.Companion.getWidth(roleSubscriptionPurchaseAccessory.getMargins(), roleSubscriptionPurchaseAccessory.getConstrainedWidth(), roleSubscriptionPurchaseAccessory.isForwardedContent()));
            } else if (messageAccessory instanceof InviteToSpeakAccessory) {
                ((InviteToSpeakViewHolder) holder).bind((InviteToSpeakAccessory) messageAccessory);
            } else if (messageAccessory instanceof AudioAttachmentMessageAccessory) {
                AudioPlayerViewHolder audioPlayerViewHolder = (AudioPlayerViewHolder) holder;
                AudioAttachmentMessageAccessory audioAttachmentMessageAccessory = (AudioAttachmentMessageAccessory) messageAccessory;
                ChatEventHandler chatEventHandler34 = this.eventHandler;
                if (chatEventHandler34 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                    chatEventHandler34 = null;
                }
                audioPlayerViewHolder.bind(audioAttachmentMessageAccessory, chatEventHandler34, function4 != null ? new Function2() { // from class: com.discord.chat.presentation.message.w
                    @Override // kotlin.jvm.functions.Function2
                    public final Object invoke(Object obj, Object obj2) {
                        Unit onBindViewHolder$lambda$39$lambda$38;
                        onBindViewHolder$lambda$39$lambda$38 = MessageAccessoriesAdapter.onBindViewHolder$lambda$39$lambda$38(Function4.this, messageAccessory, (String) obj, (Integer) obj2);
                        return onBindViewHolder$lambda$39$lambda$38;
                    }
                } : null);
            } else if (messageAccessory instanceof PostPreviewEmbedMessageAccessory) {
                PostPreviewEmbedViewHolder postPreviewEmbedViewHolder = (PostPreviewEmbedViewHolder) holder;
                PostPreviewEmbedMessageAccessory postPreviewEmbedMessageAccessory = (PostPreviewEmbedMessageAccessory) messageAccessory;
                PostPreviewEmbed postPreviewEmbed = postPreviewEmbedMessageAccessory.getPostPreviewEmbed();
                ChatEventHandler chatEventHandler35 = this.eventHandler;
                if (chatEventHandler35 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                    chatEventHandler35 = null;
                }
                MessageAccessoriesAdapter$onBindViewHolder$56 messageAccessoriesAdapter$onBindViewHolder$56 = new MessageAccessoriesAdapter$onBindViewHolder$56(chatEventHandler35);
                SpoilerAttributes spoilerAttributes3 = postPreviewEmbedMessageAccessory.getSpoilerAttributes();
                postPreviewEmbedViewHolder.bind(postPreviewEmbed, messageAccessoriesAdapter$onBindViewHolder$56, spoilerAttributes3 != null ? spoilerAttributes3.configure(new Function0() { // from class: com.discord.chat.presentation.message.x
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit onBindViewHolder$lambda$40;
                        onBindViewHolder$lambda$40 = MessageAccessoriesAdapter.onBindViewHolder$lambda$40(MessageAccessoriesAdapter.this, holder);
                        return onBindViewHolder$lambda$40;
                    }
                }, new Function1() { // from class: com.discord.chat.presentation.message.y
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit onBindViewHolder$lambda$41;
                        onBindViewHolder$lambda$41 = MessageAccessoriesAdapter.onBindViewHolder$lambda$41(MessageAccessoriesAdapter.this, messageAccessory, ((Boolean) obj).booleanValue());
                        return onBindViewHolder$lambda$41;
                    }
                }) : null);
            } else if (messageAccessory instanceof ChannelPromptActionsAccessory) {
                ChannelPromptActionsViewHolder channelPromptActionsViewHolder = (ChannelPromptActionsViewHolder) holder;
                ChannelPromptActionsAccessory channelPromptActionsAccessory = (ChannelPromptActionsAccessory) messageAccessory;
                ChatEventHandler chatEventHandler36 = this.eventHandler;
                if (chatEventHandler36 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                    chatEventHandler36 = null;
                }
                channelPromptActionsViewHolder.bind(channelPromptActionsAccessory, new MessageAccessoriesAdapter$onBindViewHolder$59(chatEventHandler36));
            } else if (messageAccessory instanceof SafetyPolicyNoticeMessageAccessory) {
                SafetyPolicyNoticeViewHolder safetyPolicyNoticeViewHolder = (SafetyPolicyNoticeViewHolder) holder;
                SafetyPolicyNoticeMessageAccessory safetyPolicyNoticeMessageAccessory = (SafetyPolicyNoticeMessageAccessory) messageAccessory;
                ChatEventHandler chatEventHandler37 = this.eventHandler;
                if (chatEventHandler37 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                    chatEventHandler37 = null;
                }
                safetyPolicyNoticeViewHolder.bind(safetyPolicyNoticeMessageAccessory, new MessageAccessoriesAdapter$onBindViewHolder$60(chatEventHandler37));
            } else if (messageAccessory instanceof SafetySystemNotificationMessageAccessory) {
                SafetySystemNotificationViewHolder safetySystemNotificationViewHolder = (SafetySystemNotificationViewHolder) holder;
                SafetySystemNotificationEmbed safetySystemNotificationEmbed = ((SafetySystemNotificationMessageAccessory) messageAccessory).getSafetySystemNotificationEmbed();
                ChatEventHandler chatEventHandler38 = this.eventHandler;
                if (chatEventHandler38 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                    chatEventHandler38 = null;
                }
                safetySystemNotificationViewHolder.bind(safetySystemNotificationEmbed, new MessageAccessoriesAdapter$onBindViewHolder$61(chatEventHandler38));
            } else if (messageAccessory instanceof PollMessageAccessory) {
                PollViewHolder pollViewHolder = (PollViewHolder) holder;
                PollMessageAccessory pollMessageAccessory = (PollMessageAccessory) messageAccessory;
                ChatEventHandler chatEventHandler39 = this.eventHandler;
                if (chatEventHandler39 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                    chatEventHandler39 = null;
                }
                MessageAccessoriesAdapter$onBindViewHolder$62 messageAccessoriesAdapter$onBindViewHolder$62 = new MessageAccessoriesAdapter$onBindViewHolder$62(chatEventHandler39);
                ChatEventHandler chatEventHandler40 = this.eventHandler;
                if (chatEventHandler40 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                    chatEventHandler40 = null;
                }
                MessageAccessoriesAdapter$onBindViewHolder$63 messageAccessoriesAdapter$onBindViewHolder$63 = new MessageAccessoriesAdapter$onBindViewHolder$63(chatEventHandler40);
                ChatEventHandler chatEventHandler41 = this.eventHandler;
                if (chatEventHandler41 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                } else {
                    chatEventHandler27 = chatEventHandler41;
                }
                pollViewHolder.bind(pollMessageAccessory, messageAccessoriesAdapter$onBindViewHolder$62, messageAccessoriesAdapter$onBindViewHolder$63, new MessageAccessoriesAdapter$onBindViewHolder$64(chatEventHandler27));
            } else if (messageAccessory instanceof SharedCustomThemeMessageAccessory) {
                SharedCustomThemeViewHolder sharedCustomThemeViewHolder = (SharedCustomThemeViewHolder) holder;
                SharedCustomThemeMessageAccessory sharedCustomThemeMessageAccessory = (SharedCustomThemeMessageAccessory) messageAccessory;
                ChatEventHandler chatEventHandler42 = this.eventHandler;
                if (chatEventHandler42 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                    chatEventHandler42 = null;
                }
                MessageAccessoriesAdapter$onBindViewHolder$65 messageAccessoriesAdapter$onBindViewHolder$65 = new MessageAccessoriesAdapter$onBindViewHolder$65(chatEventHandler42);
                ChatEventHandler chatEventHandler43 = this.eventHandler;
                if (chatEventHandler43 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                    chatEventHandler43 = null;
                }
                sharedCustomThemeViewHolder.bind(sharedCustomThemeMessageAccessory, messageAccessoriesAdapter$onBindViewHolder$65, new MessageAccessoriesAdapter$onBindViewHolder$66(chatEventHandler43));
            } else if (messageAccessory instanceof CtaButtonMessageAccessory) {
                CtaButtonViewHolder ctaButtonViewHolder = (CtaButtonViewHolder) holder;
                CtaButtonMessageAccessory ctaButtonMessageAccessory = (CtaButtonMessageAccessory) messageAccessory;
                long m557getChannelIdo4g7jtM = ctaButtonMessageAccessory.m557getChannelIdo4g7jtM();
                String mo536getMessageId3Eiw7ao = ctaButtonMessageAccessory.mo536getMessageId3Eiw7ao();
                CtaButton ctaButton = ctaButtonMessageAccessory.getCtaButton();
                ChatEventHandler chatEventHandler44 = this.eventHandler;
                if (chatEventHandler44 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                    chatEventHandler = null;
                } else {
                    chatEventHandler = chatEventHandler44;
                }
                ctaButtonViewHolder.m718bindJjTCmh4(m557getChannelIdo4g7jtM, mo536getMessageId3Eiw7ao, ctaButton, new MessageAccessoriesAdapter$onBindViewHolder$67(chatEventHandler));
            } else if (messageAccessory instanceof ForwardHeaderMessageAccessory) {
                ((ForwardHeaderViewHolder) holder).bind();
            } else if (messageAccessory instanceof ForwardBreadcrumbMessageAccessory) {
                ForwardBreadcrumbViewHolder forwardBreadcrumbViewHolder = (ForwardBreadcrumbViewHolder) holder;
                ForwardBreadcrumbMessageAccessory forwardBreadcrumbMessageAccessory = (ForwardBreadcrumbMessageAccessory) messageAccessory;
                ChatEventHandler chatEventHandler45 = this.eventHandler;
                if (chatEventHandler45 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                    chatEventHandler45 = null;
                }
                forwardBreadcrumbViewHolder.bind(forwardBreadcrumbMessageAccessory, new MessageAccessoriesAdapter$onBindViewHolder$68(chatEventHandler45));
            } else if (!(messageAccessory instanceof ImageAttachmentMessageAccessory)) {
                if (!(messageAccessory instanceof VideoAttachmentMessageAccessory)) {
                    throw new qr.p();
                }
                throw new IllegalArgumentException("No longer allowed. Use MediaMosaicAttachmentMessageAccessory");
            } else {
                throw new IllegalArgumentException("No longer allowed. Use MediaMosaicAttachmentMessageAccessory");
            }
        }
        ForceExhaustiveKt.forceExhaustive(Unit.f32008a);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    @NotNull
    public MessagePartViewHolder onCreateViewHolder(@NotNull ViewGroup parent, int i10) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        ChatEventHandler chatEventHandler = null;
        switch (i10) {
            case 0:
                Context context = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                return new MessageContentViewHolder(new MessageContentView(context, null, 0, 6, null));
            case 1:
                Context context2 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
                return new EmbedViewHolder(new EmbedView(context2, null, 2, null));
            case 2:
            case 3:
            case 10:
            case 17:
            case 30:
            case 42:
            case ChatViewRecyclerTypes.REACTION_BURST_REACTION /* 45 */:
            case 46:
            case ChatViewRecyclerTypes.REACTION_ADD_REACTION /* 47 */:
            case 48:
            case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_VISUAL_PLACEHOLDER /* 51 */:
            default:
                throw new IllegalArgumentException("Unknown view type: " + i10);
            case 4:
                Context context3 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context3, "getContext(...)");
                return new ReactionsViewHolder(new ShortcutsFlexbox(context3, null, 2, null));
            case 5:
                Context context4 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context4, "getContext(...)");
                GuildInviteView guildInviteView = new GuildInviteView(context4, null, 0, 6, null);
                ChatEventHandler chatEventHandler2 = this.eventHandler;
                if (chatEventHandler2 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                } else {
                    chatEventHandler = chatEventHandler2;
                }
                return new GuildInviteViewHolder(guildInviteView, chatEventHandler);
            case 6:
                Context context5 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context5, "getContext(...)");
                return new StickerPngViewHolder(new StickerView(context5, null, 0, 6, null));
            case 7:
                Context context6 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context6, "getContext(...)");
                return new StickerApngViewHolder(new StickerView(context6, null, 0, 6, null));
            case 8:
                Context context7 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context7, "getContext(...)");
                return new StickerLottieViewHolder(new StickerView(context7, null, 0, 6, null));
            case 9:
                Context context8 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context8, "getContext(...)");
                return new ThreadEmbedViewHolder(new ThreadEmbedView(context8, null, 0, 6, null));
            case 11:
                Context context9 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context9, "getContext(...)");
                FileAttachmentView fileAttachmentView = new FileAttachmentView(context9, null, 2, null);
                ChatEventHandler chatEventHandler3 = this.eventHandler;
                if (chatEventHandler3 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                } else {
                    chatEventHandler = chatEventHandler3;
                }
                return new FileAttachmentViewHolder(fileAttachmentView, chatEventHandler);
            case 12:
                Context context10 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context10, "getContext(...)");
                return new MessageComponentsViewHolder(new MessageComponentsView(context10, null, 0, 6, null));
            case 13:
                TextView root = TimestampViewBinding.inflate(LayoutInflater.from(parent.getContext()), parent, false).getRoot();
                Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
                return new TimestampViewHolder(root);
            case 14:
                Context context11 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context11, "getContext(...)");
                WelcomeStickerView welcomeStickerView = new WelcomeStickerView(context11, null, 2, null);
                ChatEventHandler chatEventHandler4 = this.eventHandler;
                if (chatEventHandler4 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                } else {
                    chatEventHandler = chatEventHandler4;
                }
                return new WelcomeStickerViewHolder(welcomeStickerView, new MessageAccessoriesAdapter$onCreateViewHolder$2(chatEventHandler));
            case 15:
                Context context12 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context12, "getContext(...)");
                GuildEventInviteView guildEventInviteView = new GuildEventInviteView(context12, null, 0, 6, null);
                ChatEventHandler chatEventHandler5 = this.eventHandler;
                if (chatEventHandler5 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                } else {
                    chatEventHandler = chatEventHandler5;
                }
                return new GuildEventInviteViewHolder(guildEventInviteView, chatEventHandler, new Function1() { // from class: com.discord.chat.presentation.message.h0
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit onCreateViewHolder$lambda$2;
                        onCreateViewHolder$lambda$2 = MessageAccessoriesAdapter.onCreateViewHolder$lambda$2(MessageAccessoriesAdapter.this, (MessagePartViewHolder) obj);
                        return onCreateViewHolder$lambda$2;
                    }
                });
            case 16:
                Context context13 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context13, "getContext(...)");
                return new GiftViewHolder(new GiftView(context13, null, 2, null));
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                Context context14 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context14, "getContext(...)");
                EphemeralIndicationView ephemeralIndicationView = new EphemeralIndicationView(context14, null, 0, 6, null);
                ChatEventHandler chatEventHandler6 = this.eventHandler;
                if (chatEventHandler6 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                } else {
                    chatEventHandler = chatEventHandler6;
                }
                return new EphemeralIndicationViewHolder(ephemeralIndicationView, chatEventHandler);
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                Context context15 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context15, "getContext(...)");
                return new InteractionStatusViewHolder(new InteractionStatusView(context15, null, 2, null));
            case 20:
                Context context16 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context16, "getContext(...)");
                return new ForumPostActionBarViewHolder(new ForumPostActionBarView(context16, null, 0, 6, null));
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                Context context17 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context17, "getContext(...)");
                FlaggedMessageEmbedView flaggedMessageEmbedView = new FlaggedMessageEmbedView(context17, null, 2, null);
                ChatEventHandler chatEventHandler7 = this.eventHandler;
                if (chatEventHandler7 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                } else {
                    chatEventHandler = chatEventHandler7;
                }
                return new FlaggedMessageEmbedViewHolder(flaggedMessageEmbedView, chatEventHandler);
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                Context context18 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context18, "getContext(...)");
                return new FlaggedMessageActionBarViewHolder(new FlaggedMessageActionBarView(context18, null, 0, 6, null));
            case 23:
                Context context19 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context19, "getContext(...)");
                return new RoleSubscriptionPurchaseViewHolder(new RoleSubscriptionPurchaseView(context19, null, 0, 6, null));
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                Context context20 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context20, "getContext(...)");
                SurveyIndicationView surveyIndicationView = new SurveyIndicationView(context20, null, 0, 6, null);
                ChatEventHandler chatEventHandler8 = this.eventHandler;
                if (chatEventHandler8 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                } else {
                    chatEventHandler = chatEventHandler8;
                }
                return new SurveyIndicationViewHolder(surveyIndicationView, chatEventHandler);
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                Context context21 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context21, "getContext(...)");
                GuildInviteDisabledView guildInviteDisabledView = new GuildInviteDisabledView(context21, null, 0, 6, null);
                ChatEventHandler chatEventHandler9 = this.eventHandler;
                if (chatEventHandler9 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                } else {
                    chatEventHandler = chatEventHandler9;
                }
                return new GuildInviteDisabledViewHolder(guildInviteDisabledView, chatEventHandler);
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                Context context22 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context22, "getContext(...)");
                return new AttachmentMediaMosaicViewHolder(new AttachmentMediaMosaicContainerView(context22, null, 2, null));
            case 27:
                Context context23 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context23, "getContext(...)");
                return new StickerGifViewHolder(new StickerView(context23, null, 0, 6, null));
            case 28:
                Context context24 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context24, "getContext(...)");
                InviteToSpeakView inviteToSpeakView = new InviteToSpeakView(context24, null, 2, null);
                ChatEventHandler chatEventHandler10 = this.eventHandler;
                if (chatEventHandler10 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                } else {
                    chatEventHandler = chatEventHandler10;
                }
                return new InviteToSpeakViewHolder(inviteToSpeakView, new MessageAccessoriesAdapter$onCreateViewHolder$3(chatEventHandler));
            case 29:
                Context context25 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context25, "getContext(...)");
                return new AudioPlayerViewHolder(new AudioPlayerView(context25, null, 0, 6, null));
            case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                Context context26 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context26, "getContext(...)");
                EmbeddedActivityInviteView embeddedActivityInviteView = new EmbeddedActivityInviteView(context26, null, 0, 6, null);
                ChatEventHandler chatEventHandler11 = this.eventHandler;
                if (chatEventHandler11 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                } else {
                    chatEventHandler = chatEventHandler11;
                }
                return new EmbeddedActivityInviteViewHolder(embeddedActivityInviteView, chatEventHandler);
            case 32:
                Context context27 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context27, "getContext(...)");
                return new PostPreviewEmbedViewHolder(new PostPreviewEmbedView(context27, null, 0, 6, null));
            case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                Context context28 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context28, "getContext(...)");
                return new AutoModerationNotificationEmbedViewHolder(new AutoModerationNotificationEmbedView(context28, null, 2, null));
            case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                Context context29 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context29, "getContext(...)");
                return new ChannelPromptActionsViewHolder(new ChannelPromptActionsView(context29, null, 2, null));
            case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                Context context30 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context30, "getContext(...)");
                return new InfoLinkViewHolder(new InfoLinkView(context30, null, 2, null));
            case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                Context context31 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context31, "getContext(...)");
                return new SafetyPolicyNoticeViewHolder(new SafetyPolicyNoticeView(context31, null, 2, null));
            case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                Context context32 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context32, "getContext(...)");
                return new PollViewHolder(new PollTextAndImageView(context32, null, 0, 6, null));
            case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                Context context33 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context33, "getContext(...)");
                return new PollViewHolder(new PollImageOnlyView(context33, null, 0, 6, null));
            case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                Context context34 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context34, "getContext(...)");
                return new SafetySystemNotificationViewHolder(new SafetySystemNotificationView(context34, null, 2, null));
            case 40:
                Context context35 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context35, "getContext(...)");
                ActivityInstanceEmbedView activityInstanceEmbedView = new ActivityInstanceEmbedView(context35, null, 0, 6, null);
                ChatEventHandler chatEventHandler12 = this.eventHandler;
                if (chatEventHandler12 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                } else {
                    chatEventHandler = chatEventHandler12;
                }
                return new ActivityInstanceEmbedViewHolder(activityInstanceEmbedView, chatEventHandler);
            case 41:
                Context context36 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context36, "getContext(...)");
                return new CtaButtonViewHolder(new CtaButtonView(context36, null, 2, null));
            case ChatViewRecyclerTypes.FORWARD_HEADER /* 43 */:
                Context context37 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context37, "getContext(...)");
                return new ForwardHeaderViewHolder(new ForwardHeaderView(context37, null, 2, null));
            case ChatViewRecyclerTypes.FORWARD_BREADCRUMB /* 44 */:
                Context context38 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context38, "getContext(...)");
                return new ForwardBreadcrumbViewHolder(new ForwardBreadcrumbView(context38, null, 2, null));
            case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_IMAGE /* 49 */:
                Context context39 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context39, "getContext(...)");
                return new MosaicItemMessageAttachmentImageViewHolder(new MediaImageView(context39, null, 2, null));
            case 50:
                Context context40 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context40, "getContext(...)");
                return new MosaicItemMessageAttachmentVideoViewHolder(new MediaVideoView(context40, null, 2, null));
            case ChatViewRecyclerTypes.REFERRAL /* 52 */:
                Context context41 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context41, "getContext(...)");
                return new ReferralViewHolder(new ReferralView(context41, null, 2, null));
            case ChatViewRecyclerTypes.GUILD_PROFILE_INVITE /* 53 */:
                Context context42 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context42, "getContext(...)");
                return new GuildProfileInviteViewHolder(new GuildProfileInviteView(context42, null, 0, 6, null));
            case ChatViewRecyclerTypes.APP_MESSAGE_EMBED /* 54 */:
                Context context43 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context43, "getContext(...)");
                AppMessageEmbedView appMessageEmbedView = new AppMessageEmbedView(context43, null, 0, 6, null);
                ChatEventHandler chatEventHandler13 = this.eventHandler;
                if (chatEventHandler13 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                } else {
                    chatEventHandler = chatEventHandler13;
                }
                return new AppMessageEmbedViewHolder(appMessageEmbedView, chatEventHandler);
            case ChatViewRecyclerTypes.ACTIVITY_RICH_PRESENCE_INVITE_EMBED /* 55 */:
                Context context44 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context44, "getContext(...)");
                ActivityRichPresenceInviteEmbedView activityRichPresenceInviteEmbedView = new ActivityRichPresenceInviteEmbedView(context44, null, 0, 6, null);
                ChatEventHandler chatEventHandler14 = this.eventHandler;
                if (chatEventHandler14 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("eventHandler");
                } else {
                    chatEventHandler = chatEventHandler14;
                }
                return new ActivityRichPresenceInviteEmbedViewHolder(activityRichPresenceInviteEmbedView, chatEventHandler);
            case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                Context context45 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context45, "getContext(...)");
                return new SharedCustomThemeViewHolder(new SharedCustomThemeView(context45, null, 2, null));
            case ChatViewRecyclerTypes.PREMIUM_GROUP_INVITE /* 57 */:
                Context context46 = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context46, "getContext(...)");
                return new PremiumGroupInviteViewHolder(new PremiumGroupInviteView(context46, null, 2, null));
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public void onViewRecycled(@NotNull MessagePartViewHolder holder) {
        Intrinsics.checkNotNullParameter(holder, "holder");
        if (holder instanceof AudioPlayerViewHolder) {
            ((AudioPlayerViewHolder) holder).onViewRecycled();
        }
        super.onViewRecycled((RecyclerView.ViewHolder) holder);
    }

    public MessageAccessoriesAdapter(@NotNull Function0<Unit> measureAndLayout) {
        Intrinsics.checkNotNullParameter(measureAndLayout, "measureAndLayout");
        this.measureAndLayout = measureAndLayout;
        this.items = CollectionsKt.l();
        this.onTapSpoiler = new Function1() { // from class: com.discord.chat.presentation.message.i0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit onTapSpoiler$lambda$1;
                onTapSpoiler$lambda$1 = MessageAccessoriesAdapter.onTapSpoiler$lambda$1(MessageAccessoriesAdapter.this, (MessagePartViewHolder) obj);
                return onTapSpoiler$lambda$1;
            }
        };
        setHasStableIds(true);
    }
}
