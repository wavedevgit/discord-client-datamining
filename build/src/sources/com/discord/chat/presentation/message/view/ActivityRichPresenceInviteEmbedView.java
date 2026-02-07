package com.discord.chat.presentation.message.view;

import android.content.Context;
import android.graphics.Color;
import android.graphics.drawable.GradientDrawable;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.discord.SetTextSizeSpKt;
import com.discord.activity_invites.RGBAColorModel;
import com.discord.chat.bridge.contentnode.CommandMentionContentNode;
import com.discord.chat.bridge.contentnode.EmojiContentNode;
import com.discord.chat.bridge.contentnode.InlineCodeContentNode;
import com.discord.chat.bridge.contentnode.LinkContentNode;
import com.discord.chat.bridge.contentnode.SoundmojiContentNode;
import com.discord.chat.bridge.structurabletext.StructurableText;
import com.discord.chat.databinding.ActivityRichPresenceInviteEmbedViewBinding;
import com.discord.chat.presentation.message.messagepart.MessageMargins;
import com.discord.core.DCDButton;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.misc.utilities.view.ViewBackgroundUtilsKt;
import com.discord.misc.utilities.view.ViewUtilsKt;
import com.discord.overlapping_circles.OverlappingCirclesView;
import com.discord.overlapping_circles.OverlappingItem;
import com.discord.primitives.MessageId;
import com.discord.react_asset_fetcher.ReactAsset;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.discord.theme.R;
import com.discord.theme.ThemeManagerKt;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.drawee.view.SimpleDraweeView;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000¦\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010 \n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0018\u0002\n\u0002\b\u0004\u0018\u0000 S2\u00020\u0001:\u0001SB'\b\u0007\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004\u0012\b\b\u0002\u0010\u0007\u001a\u00020\u0006¢\u0006\u0004\b\b\u0010\tJ'\u0010\u000f\u001a\u00020\u000e2\u000e\u0010\f\u001a\n\u0012\u0004\u0012\u00020\u000b\u0018\u00010\n2\u0006\u0010\r\u001a\u00020\u0006H\u0002¢\u0006\u0004\b\u000f\u0010\u0010J\u001f\u0010\u0013\u001a\u00020\u000e2\u000e\u0010\u0012\u001a\n\u0012\u0004\u0012\u00020\u0011\u0018\u00010\nH\u0002¢\u0006\u0004\b\u0013\u0010\u0014J\u0019\u0010\u0016\u001a\u00020\u000e2\b\u0010\u0015\u001a\u0004\u0018\u00010\u000bH\u0002¢\u0006\u0004\b\u0016\u0010\u0017J\u0099\u0003\u00109\u001a\u00020\u000e2\u0006\u0010\u0019\u001a\u00020\u00182\u0006\u0010\u001b\u001a\u00020\u001a2\u0006\u0010\u001d\u001a\u00020\u001c2\u0018\u0010 \u001a\u0014\u0012\u0004\u0012\u00020\u001c\u0012\u0004\u0012\u00020\u001f\u0012\u0004\u0012\u00020\u000e0\u001e2\u0012\u0010\"\u001a\u000e\u0012\u0004\u0012\u00020\u001f\u0012\u0004\u0012\u00020\u000e0!2\"\u0010$\u001a\u001e\u0012\u0004\u0012\u00020\u000b\u0012\u0006\u0012\u0004\u0018\u00010\u000b\u0012\u0006\u0012\u0004\u0018\u00010\u000b\u0012\u0004\u0012\u00020\u000e0#2*\u0010&\u001a&\u0012\u0004\u0012\u00020\u000b\u0012\u0006\u0012\u0004\u0018\u00010\u000b\u0012\u0006\u0012\u0004\u0018\u00010\u000b\u0012\u0006\u0012\u0004\u0018\u00010\u000b\u0012\u0004\u0012\u00020\u000e0%2\u0012\u0010'\u001a\u000e\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\u000e0!2\u0018\u0010(\u001a\u0014\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\u000e0\u001e2*\u0010)\u001a&\u0012\u0006\u0012\u0004\u0018\u00010\u000b\u0012\u0004\u0012\u00020\u000b\u0012\u0006\u0012\u0004\u0018\u00010\u000b\u0012\u0006\u0012\u0004\u0018\u00010\u000b\u0012\u0004\u0012\u00020\u000e0%2\u0012\u0010+\u001a\u000e\u0012\u0004\u0012\u00020*\u0012\u0004\u0012\u00020\u000e0!2\u0012\u0010,\u001a\u000e\u0012\u0004\u0012\u00020*\u0012\u0004\u0012\u00020\u000e0!2\f\u0010.\u001a\b\u0012\u0004\u0012\u00020\u000e0-2\u0012\u0010/\u001a\u000e\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\u000e0!2\u0012\u00101\u001a\u000e\u0012\u0004\u0012\u000200\u0012\u0004\u0012\u00020\u000e0!2\u0012\u00103\u001a\u000e\u0012\u0004\u0012\u000202\u0012\u0004\u0012\u00020\u000e0!2\u0012\u00104\u001a\u000e\u0012\u0004\u0012\u00020\u001c\u0012\u0004\u0012\u00020\u000e0!2\u0012\u00106\u001a\u000e\u0012\u0004\u0012\u000205\u0012\u0004\u0012\u00020\u000e0!H\u0002¢\u0006\u0004\b7\u00108J\u000f\u0010:\u001a\u00020\u000eH\u0002¢\u0006\u0004\b:\u0010;J\u008b\u0005\u0010O\u001a\u00020\u000e2\u0006\u0010\u0019\u001a\u00020\u00182\u0006\u0010=\u001a\u00020<2\b\u0010>\u001a\u0004\u0018\u00010\u000b2\u0006\u0010?\u001a\u00020<2\b\u0010@\u001a\u0004\u0018\u00010\u000b2\u000e\u0010\u0012\u001a\n\u0012\u0004\u0012\u00020\u0011\u0018\u00010\n2\b\u0010A\u001a\u0004\u0018\u00010\u000b2\b\u0010B\u001a\u0004\u0018\u00010\u000b2\u0006\u0010C\u001a\u00020<2\u0006\u0010D\u001a\u00020<2\u0006\u0010\r\u001a\u00020\u00062\u0006\u0010F\u001a\u00020E2\u000e\u0010G\u001a\n\u0012\u0004\u0012\u00020\u000b\u0018\u00010\n2\b\u0010H\u001a\u0004\u0018\u00010\u000b2\u000e\u0010I\u001a\n\u0012\u0004\u0012\u00020\u000b\u0018\u00010\n2\b\u0010\u0015\u001a\u0004\u0018\u00010\u000b2\b\u0010J\u001a\u0004\u0018\u00010\u000b2\b\u0010K\u001a\u0004\u0018\u00010\u000b2\n\b\u0002\u0010L\u001a\u0004\u0018\u00010\u001a2\n\b\u0002\u0010\u001d\u001a\u0004\u0018\u00010\u001c2\u001c\b\u0002\u0010 \u001a\u0016\u0012\u0004\u0012\u00020\u001c\u0012\u0004\u0012\u00020\u001f\u0012\u0004\u0012\u00020\u000e\u0018\u00010\u001e2\u0016\b\u0002\u0010\"\u001a\u0010\u0012\u0004\u0012\u00020\u001f\u0012\u0004\u0012\u00020\u000e\u0018\u00010!2&\b\u0002\u0010$\u001a \u0012\u0004\u0012\u00020\u000b\u0012\u0006\u0012\u0004\u0018\u00010\u000b\u0012\u0006\u0012\u0004\u0018\u00010\u000b\u0012\u0004\u0012\u00020\u000e\u0018\u00010#2.\b\u0002\u0010&\u001a(\u0012\u0004\u0012\u00020\u000b\u0012\u0006\u0012\u0004\u0018\u00010\u000b\u0012\u0006\u0012\u0004\u0018\u00010\u000b\u0012\u0006\u0012\u0004\u0018\u00010\u000b\u0012\u0004\u0012\u00020\u000e\u0018\u00010%2\u0016\b\u0002\u0010'\u001a\u0010\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\u000e\u0018\u00010!2\u001c\b\u0002\u0010(\u001a\u0016\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\u000e\u0018\u00010\u001e2.\b\u0002\u0010)\u001a(\u0012\u0006\u0012\u0004\u0018\u00010\u000b\u0012\u0004\u0012\u00020\u000b\u0012\u0006\u0012\u0004\u0018\u00010\u000b\u0012\u0006\u0012\u0004\u0018\u00010\u000b\u0012\u0004\u0012\u00020\u000e\u0018\u00010%2\u0016\b\u0002\u0010+\u001a\u0010\u0012\u0004\u0012\u00020*\u0012\u0004\u0012\u00020\u000e\u0018\u00010!2\u0016\b\u0002\u0010,\u001a\u0010\u0012\u0004\u0012\u00020*\u0012\u0004\u0012\u00020\u000e\u0018\u00010!2\u0010\b\u0002\u0010.\u001a\n\u0012\u0004\u0012\u00020\u000e\u0018\u00010-2\u0016\b\u0002\u0010/\u001a\u0010\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\u000e\u0018\u00010!2\u0016\b\u0002\u00101\u001a\u0010\u0012\u0004\u0012\u000200\u0012\u0004\u0012\u00020\u000e\u0018\u00010!2\u0016\b\u0002\u00103\u001a\u0010\u0012\u0004\u0012\u000202\u0012\u0004\u0012\u00020\u000e\u0018\u00010!2\u0016\b\u0002\u00104\u001a\u0010\u0012\u0004\u0012\u00020\u001c\u0012\u0004\u0012\u00020\u000e\u0018\u00010!2\u0016\b\u0002\u00106\u001a\u0010\u0012\u0004\u0012\u000205\u0012\u0004\u0012\u00020\u000e\u0018\u00010!¢\u0006\u0004\bM\u0010NR\u0014\u0010Q\u001a\u00020P8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bQ\u0010R¨\u0006T"}, d2 = {"Lcom/discord/chat/presentation/message/view/ActivityRichPresenceInviteEmbedView;", "Landroidx/constraintlayout/widget/ConstraintLayout;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "", "defStyleAttr", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "", "", "avatarURIs", "maxPartySize", "", "setPartyAvatars", "(Ljava/util/List;I)V", "Lcom/discord/activity_invites/RGBAColorModel;", "gradientColors", "applyGradientBackground", "(Ljava/util/List;)V", "coverImageUrl", "setCoverImage", "(Ljava/lang/String;)V", "Lcom/discord/chat/presentation/message/messagepart/MessageMargins;", "margins", "Lcom/discord/chat/bridge/structurabletext/StructurableText;", "hiddenContent", "Lcom/discord/primitives/MessageId;", "messageId", "Lkotlin/Function2;", "Lcom/discord/chat/bridge/contentnode/LinkContentNode;", "onTapLink", "Lkotlin/Function1;", "onLongTapLink", "Lkotlin/Function3;", "onTapChannel", "Lkotlin/Function4;", "onLongPressChannel", "onTapAttachmentLink", "onLongPressAttachmentLink", "onTapMention", "Lcom/discord/chat/bridge/contentnode/CommandMentionContentNode;", "onTapCommand", "onLongPressCommand", "Lkotlin/Function0;", "onTapSpoiler", "onTapTimestamp", "Lcom/discord/chat/bridge/contentnode/InlineCodeContentNode;", "onTapInlineCode", "Lcom/discord/chat/bridge/contentnode/EmojiContentNode;", "onTapEmoji", "onTapSeeMore", "Lcom/discord/chat/bridge/contentnode/SoundmojiContentNode;", "onTapSoundmoji", "showHiddenContent-2dg2Uz0", "(Lcom/discord/chat/presentation/message/messagepart/MessageMargins;Lcom/discord/chat/bridge/structurabletext/StructurableText;Ljava/lang/String;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function3;Lkotlin/jvm/functions/Function4;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function4;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;)V", "showHiddenContent", "showNormalContent", "()V", "", "ctaButtonEnabled", "ctaButtonText", "ctaButtonIsLoading", "footerLabel", "headerText", "iconSrc", "isActive", "isSpotifyParty", "Landroid/view/View$OnClickListener;", "onTapJoinRichPresence", "partyMemberAvatarURIs", "partySizeText", "platformIconKeys", "subtitle", "title", "hiddenEmbedMessageContent", "setActivityRichPresenceInviteEmbed-dJIpDCQ", "(Lcom/discord/chat/presentation/message/messagepart/MessageMargins;ZLjava/lang/String;ZLjava/lang/String;Ljava/util/List;Ljava/lang/String;Ljava/lang/String;ZZILandroid/view/View$OnClickListener;Ljava/util/List;Ljava/lang/String;Ljava/util/List;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/structurabletext/StructurableText;Ljava/lang/String;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function3;Lkotlin/jvm/functions/Function4;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function4;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;)V", "setActivityRichPresenceInviteEmbed", "Lcom/discord/chat/databinding/ActivityRichPresenceInviteEmbedViewBinding;", "binding", "Lcom/discord/chat/databinding/ActivityRichPresenceInviteEmbedViewBinding;", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nActivityRichPresenceInviteEmbedView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ActivityRichPresenceInviteEmbedView.kt\ncom/discord/chat/presentation/message/view/ActivityRichPresenceInviteEmbedView\n+ 2 View.kt\nandroidx/core/view/ViewKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,385:1\n257#2,2:386\n257#2,2:388\n257#2,2:390\n257#2,2:392\n257#2,2:394\n257#2,2:396\n257#2,2:398\n257#2,2:400\n257#2,2:402\n257#2,2:404\n257#2,2:406\n257#2,2:408\n257#2,2:410\n257#2,2:412\n257#2,2:414\n257#2,2:416\n257#2,2:418\n257#2,2:420\n257#2,2:422\n257#2,2:424\n257#2,2:426\n257#2,2:428\n257#2,2:434\n257#2,2:436\n257#2,2:438\n257#2,2:440\n257#2,2:446\n257#2,2:448\n257#2,2:450\n257#2,2:452\n257#2,2:454\n257#2,2:456\n257#2,2:458\n257#2,2:460\n257#2,2:462\n257#2,2:464\n257#2,2:466\n257#2,2:468\n1563#3:430\n1634#3,3:431\n1563#3:442\n1634#3,3:443\n*S KotlinDebug\n*F\n+ 1 ActivityRichPresenceInviteEmbedView.kt\ncom/discord/chat/presentation/message/view/ActivityRichPresenceInviteEmbedView\n*L\n159#1:386,2\n164#1:388,2\n166#1:390,2\n183#1:392,2\n186#1:394,2\n194#1:396,2\n196#1:398,2\n199#1:400,2\n203#1:402,2\n217#1:404,2\n221#1:406,2\n227#1:408,2\n229#1:410,2\n235#1:412,2\n237#1:414,2\n243#1:416,2\n245#1:418,2\n248#1:420,2\n249#1:422,2\n250#1:424,2\n251#1:426,2\n252#1:428,2\n273#1:434,2\n275#1:436,2\n281#1:438,2\n285#1:440,2\n308#1:446,2\n335#1:448,2\n367#1:450,2\n368#1:452,2\n369#1:454,2\n370#1:456,2\n371#1:458,2\n378#1:460,2\n379#1:462,2\n380#1:464,2\n381#1:466,2\n382#1:468,2\n270#1:430\n270#1:431,3\n288#1:442\n288#1:443,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ActivityRichPresenceInviteEmbedView extends ConstraintLayout {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final int whiteAlpha70 = Color.argb(178, (int) SetSpanOperation.SPAN_MAX_PRIORITY, (int) SetSpanOperation.SPAN_MAX_PRIORITY, (int) SetSpanOperation.SPAN_MAX_PRIORITY);
    @NotNull
    private final ActivityRichPresenceInviteEmbedViewBinding binding;

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\b"}, d2 = {"Lcom/discord/chat/presentation/message/view/ActivityRichPresenceInviteEmbedView$Companion;", "", "<init>", "()V", "whiteAlpha70", "", "getWhiteAlpha70", "()I", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final int getWhiteAlpha70() {
            return ActivityRichPresenceInviteEmbedView.whiteAlpha70;
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public ActivityRichPresenceInviteEmbedView(@NotNull Context context) {
        this(context, null, 0, 6, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    private final void applyGradientBackground(List<RGBAColorModel> list) {
        if (list != null && !list.isEmpty()) {
            View gradientBackground = this.binding.gradientBackground;
            Intrinsics.checkNotNullExpressionValue(gradientBackground, "gradientBackground");
            gradientBackground.setVisibility(0);
            List<RGBAColorModel> list2 = list;
            ArrayList arrayList = new ArrayList(CollectionsKt.w(list2, 10));
            for (RGBAColorModel rGBAColorModel : list2) {
                arrayList.add(Integer.valueOf(Color.argb((int) (rGBAColorModel.getA() * ((float) SetSpanOperation.SPAN_MAX_PRIORITY)), (int) rGBAColorModel.getR(), (int) rGBAColorModel.getG(), (int) rGBAColorModel.getB())));
            }
            int[] g12 = CollectionsKt.g1(arrayList);
            GradientDrawable gradientDrawable = new GradientDrawable();
            gradientDrawable.setColors(g12);
            gradientDrawable.setCornerRadius(SizeUtilsKt.getDpToPx(12));
            gradientDrawable.setOrientation(GradientDrawable.Orientation.BL_TR);
            this.binding.gradientBackground.setBackground(gradientDrawable);
            return;
        }
        View gradientBackground2 = this.binding.gradientBackground;
        Intrinsics.checkNotNullExpressionValue(gradientBackground2, "gradientBackground");
        gradientBackground2.setVisibility(8);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setActivityRichPresenceInviteEmbed_dJIpDCQ$lambda$10(String str, String str2, String str3, String str4) {
        Intrinsics.checkNotNullParameter(str2, "<unused var>");
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setActivityRichPresenceInviteEmbed_dJIpDCQ$lambda$11(CommandMentionContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setActivityRichPresenceInviteEmbed_dJIpDCQ$lambda$12(CommandMentionContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setActivityRichPresenceInviteEmbed_dJIpDCQ$lambda$14(String it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setActivityRichPresenceInviteEmbed_dJIpDCQ$lambda$15(InlineCodeContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setActivityRichPresenceInviteEmbed_dJIpDCQ$lambda$16(EmojiContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setActivityRichPresenceInviteEmbed_dJIpDCQ$lambda$17(SoundmojiContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setActivityRichPresenceInviteEmbed_dJIpDCQ$lambda$5(LinkContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setActivityRichPresenceInviteEmbed_dJIpDCQ$lambda$6(String str, String str2, String str3) {
        Intrinsics.checkNotNullParameter(str, "<unused var>");
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setActivityRichPresenceInviteEmbed_dJIpDCQ$lambda$7(String str, String str2, String str3, String str4) {
        Intrinsics.checkNotNullParameter(str, "<unused var>");
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setActivityRichPresenceInviteEmbed_dJIpDCQ$lambda$8(String it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setActivityRichPresenceInviteEmbed_dJIpDCQ$lambda$9(String str, String str2) {
        Intrinsics.checkNotNullParameter(str, "<unused var>");
        Intrinsics.checkNotNullParameter(str2, "<unused var>");
        return Unit.f32056a;
    }

    private final void setCoverImage(String str) {
        boolean z10;
        SimpleDraweeView coverImage = this.binding.coverImage;
        Intrinsics.checkNotNullExpressionValue(coverImage, "coverImage");
        int i10 = 0;
        if (str != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10) {
            i10 = 8;
        }
        coverImage.setVisibility(i10);
        if (str != null) {
            this.binding.coverImage.setImageURI(w8.f.r(str));
        }
    }

    private final void setPartyAvatars(List<String> list, int i10) {
        if (list == null) {
            list = CollectionsKt.l();
        }
        if (!list.isEmpty()) {
            int max = Math.max(0, i10 - list.size());
            List<String> list2 = list;
            ArrayList arrayList = new ArrayList(CollectionsKt.w(list2, 10));
            for (String str : list2) {
                arrayList.add(new OverlappingItem(str));
            }
            OverlappingItem[] overlappingItemArr = new OverlappingItem[max];
            for (int i11 = 0; i11 < max; i11++) {
                overlappingItemArr[i11] = new OverlappingItem(null);
            }
            this.binding.partyAvatars.setItems(CollectionsKt.N0(arrayList, overlappingItemArr));
            OverlappingCirclesView partyAvatars = this.binding.partyAvatars;
            Intrinsics.checkNotNullExpressionValue(partyAvatars, "partyAvatars");
            partyAvatars.setVisibility(0);
            return;
        }
        OverlappingCirclesView partyAvatars2 = this.binding.partyAvatars;
        Intrinsics.checkNotNullExpressionValue(partyAvatars2, "partyAvatars");
        partyAvatars2.setVisibility(8);
    }

    /* renamed from: showHiddenContent-2dg2Uz0  reason: not valid java name */
    private final void m680showHiddenContent2dg2Uz0(MessageMargins messageMargins, StructurableText structurableText, final String str, final Function2<? super MessageId, ? super LinkContentNode, Unit> function2, Function1<? super LinkContentNode, Unit> function1, Function3 function3, Function4 function4, Function1<? super String, Unit> function12, Function2<? super String, ? super String, Unit> function22, Function4 function42, Function1<? super CommandMentionContentNode, Unit> function13, Function1<? super CommandMentionContentNode, Unit> function14, Function0<Unit> function0, Function1<? super String, Unit> function15, Function1<? super InlineCodeContentNode, Unit> function16, Function1<? super EmojiContentNode, Unit> function17, Function1<? super MessageId, Unit> function18, Function1<? super SoundmojiContentNode, Unit> function19) {
        MessageContentView hiddenContent = this.binding.hiddenContent;
        Intrinsics.checkNotNullExpressionValue(hiddenContent, "hiddenContent");
        hiddenContent.setVisibility(0);
        this.binding.hiddenContent.setTextColor(ThemeManagerKt.getTheme().getTextDefault());
        MessageContentView hiddenContent2 = this.binding.hiddenContent;
        Intrinsics.checkNotNullExpressionValue(hiddenContent2, "hiddenContent");
        DiscordFontUtilsKt.setDiscordFont(hiddenContent2, DiscordFont.PrimaryNormal);
        MessageContentView hiddenContent3 = this.binding.hiddenContent;
        Intrinsics.checkNotNullExpressionValue(hiddenContent3, "hiddenContent");
        SetTextSizeSpKt.setTextSizeSp(hiddenContent3, 14.0f);
        MessageContentView.m698setMessageContent4q5Jro$default(this.binding.hiddenContent, messageMargins, structurableText, str, true, true, false, false, new Function1() { // from class: com.discord.chat.presentation.message.view.e
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit showHiddenContent_2dg2Uz0$lambda$23;
                showHiddenContent_2dg2Uz0$lambda$23 = ActivityRichPresenceInviteEmbedView.showHiddenContent_2dg2Uz0$lambda$23(Function2.this, str, (LinkContentNode) obj);
                return showHiddenContent_2dg2Uz0$lambda$23;
            }
        }, function1, function3, function4, function12, function22, function42, function13, function14, function0, function15, function16, function17, function18, function19, null, 0, 0, false, null, null, null, null, null, false, -62914560, null);
        SimpleDraweeView coverImage = this.binding.coverImage;
        Intrinsics.checkNotNullExpressionValue(coverImage, "coverImage");
        coverImage.setVisibility(8);
        TextView headerText = this.binding.headerText;
        Intrinsics.checkNotNullExpressionValue(headerText, "headerText");
        headerText.setVisibility(8);
        ConstraintLayout contentContainer = this.binding.contentContainer;
        Intrinsics.checkNotNullExpressionValue(contentContainer, "contentContainer");
        contentContainer.setVisibility(8);
        LinearLayout actionWrapper = this.binding.actionWrapper;
        Intrinsics.checkNotNullExpressionValue(actionWrapper, "actionWrapper");
        actionWrapper.setVisibility(8);
        View gradientBackground = this.binding.gradientBackground;
        Intrinsics.checkNotNullExpressionValue(gradientBackground, "gradientBackground");
        gradientBackground.setVisibility(8);
        setBackground(null);
        setAlpha(1.0f);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit showHiddenContent_2dg2Uz0$lambda$23(Function2 function2, String str, LinkContentNode node) {
        Intrinsics.checkNotNullParameter(node, "node");
        function2.invoke(MessageId.m1083boximpl(str), node);
        return Unit.f32056a;
    }

    private final void showNormalContent() {
        MessageContentView hiddenContent = this.binding.hiddenContent;
        Intrinsics.checkNotNullExpressionValue(hiddenContent, "hiddenContent");
        hiddenContent.setVisibility(8);
        TextView headerText = this.binding.headerText;
        Intrinsics.checkNotNullExpressionValue(headerText, "headerText");
        headerText.setVisibility(0);
        ConstraintLayout contentContainer = this.binding.contentContainer;
        Intrinsics.checkNotNullExpressionValue(contentContainer, "contentContainer");
        contentContainer.setVisibility(0);
        LinearLayout actionWrapper = this.binding.actionWrapper;
        Intrinsics.checkNotNullExpressionValue(actionWrapper, "actionWrapper");
        actionWrapper.setVisibility(0);
        View gradientBackground = this.binding.gradientBackground;
        Intrinsics.checkNotNullExpressionValue(gradientBackground, "gradientBackground");
        gradientBackground.setVisibility(0);
    }

    /* renamed from: setActivityRichPresenceInviteEmbed-dJIpDCQ  reason: not valid java name */
    public final void m681setActivityRichPresenceInviteEmbeddJIpDCQ(@NotNull MessageMargins margins, boolean z10, String str, boolean z11, String str2, List<RGBAColorModel> list, String str3, String str4, boolean z12, boolean z13, int i10, @NotNull View.OnClickListener onTapJoinRichPresence, List<String> list2, String str5, List<String> list3, String str6, String str7, String str8, StructurableText structurableText, String str9, Function2<? super MessageId, ? super LinkContentNode, Unit> function2, Function1<? super LinkContentNode, Unit> function1, Function3 function3, Function4 function4, Function1<? super String, Unit> function12, Function2<? super String, ? super String, Unit> function22, Function4 function42, Function1<? super CommandMentionContentNode, Unit> function13, Function1<? super CommandMentionContentNode, Unit> function14, Function0<Unit> function0, Function1<? super String, Unit> function15, Function1<? super InlineCodeContentNode, Unit> function16, Function1<? super EmojiContentNode, Unit> function17, Function1<? super MessageId, Unit> function18, Function1<? super SoundmojiContentNode, Unit> function19) {
        Intrinsics.checkNotNullParameter(margins, "margins");
        Intrinsics.checkNotNullParameter(onTapJoinRichPresence, "onTapJoinRichPresence");
        if (structurableText != null && str9 != null) {
            m680showHiddenContent2dg2Uz0(margins, structurableText, str9, function2 == null ? new Function2<MessageId, LinkContentNode, Unit>() { // from class: com.discord.chat.presentation.message.view.ActivityRichPresenceInviteEmbedView$setActivityRichPresenceInviteEmbed$1
                @Override // kotlin.jvm.functions.Function2
                public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
                    m682invokentcYbpo(((MessageId) obj).m1092unboximpl(), (LinkContentNode) obj2);
                    return Unit.f32056a;
                }

                /* renamed from: invoke-ntcYbpo  reason: not valid java name */
                public final void m682invokentcYbpo(String str10, LinkContentNode linkContentNode) {
                    Intrinsics.checkNotNullParameter(str10, "<unused var>");
                    Intrinsics.checkNotNullParameter(linkContentNode, "<unused var>");
                }
            } : function2, function1 == null ? new Function1() { // from class: com.discord.chat.presentation.message.view.a
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit activityRichPresenceInviteEmbed_dJIpDCQ$lambda$5;
                    activityRichPresenceInviteEmbed_dJIpDCQ$lambda$5 = ActivityRichPresenceInviteEmbedView.setActivityRichPresenceInviteEmbed_dJIpDCQ$lambda$5((LinkContentNode) obj);
                    return activityRichPresenceInviteEmbed_dJIpDCQ$lambda$5;
                }
            } : function1, function3 == null ? new Function3() { // from class: com.discord.chat.presentation.message.view.i
                @Override // kotlin.jvm.functions.Function3
                public final Object invoke(Object obj, Object obj2, Object obj3) {
                    Unit activityRichPresenceInviteEmbed_dJIpDCQ$lambda$6;
                    activityRichPresenceInviteEmbed_dJIpDCQ$lambda$6 = ActivityRichPresenceInviteEmbedView.setActivityRichPresenceInviteEmbed_dJIpDCQ$lambda$6((String) obj, (String) obj2, (String) obj3);
                    return activityRichPresenceInviteEmbed_dJIpDCQ$lambda$6;
                }
            } : function3, function4 == null ? new Function4() { // from class: com.discord.chat.presentation.message.view.j
                @Override // kotlin.jvm.functions.Function4
                public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
                    Unit activityRichPresenceInviteEmbed_dJIpDCQ$lambda$7;
                    activityRichPresenceInviteEmbed_dJIpDCQ$lambda$7 = ActivityRichPresenceInviteEmbedView.setActivityRichPresenceInviteEmbed_dJIpDCQ$lambda$7((String) obj, (String) obj2, (String) obj3, (String) obj4);
                    return activityRichPresenceInviteEmbed_dJIpDCQ$lambda$7;
                }
            } : function4, function12 == null ? new Function1() { // from class: com.discord.chat.presentation.message.view.k
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit activityRichPresenceInviteEmbed_dJIpDCQ$lambda$8;
                    activityRichPresenceInviteEmbed_dJIpDCQ$lambda$8 = ActivityRichPresenceInviteEmbedView.setActivityRichPresenceInviteEmbed_dJIpDCQ$lambda$8((String) obj);
                    return activityRichPresenceInviteEmbed_dJIpDCQ$lambda$8;
                }
            } : function12, function22 == null ? new Function2() { // from class: com.discord.chat.presentation.message.view.l
                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(Object obj, Object obj2) {
                    Unit activityRichPresenceInviteEmbed_dJIpDCQ$lambda$9;
                    activityRichPresenceInviteEmbed_dJIpDCQ$lambda$9 = ActivityRichPresenceInviteEmbedView.setActivityRichPresenceInviteEmbed_dJIpDCQ$lambda$9((String) obj, (String) obj2);
                    return activityRichPresenceInviteEmbed_dJIpDCQ$lambda$9;
                }
            } : function22, function42 == null ? new Function4() { // from class: com.discord.chat.presentation.message.view.m
                @Override // kotlin.jvm.functions.Function4
                public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
                    Unit activityRichPresenceInviteEmbed_dJIpDCQ$lambda$10;
                    activityRichPresenceInviteEmbed_dJIpDCQ$lambda$10 = ActivityRichPresenceInviteEmbedView.setActivityRichPresenceInviteEmbed_dJIpDCQ$lambda$10((String) obj, (String) obj2, (String) obj3, (String) obj4);
                    return activityRichPresenceInviteEmbed_dJIpDCQ$lambda$10;
                }
            } : function42, function13 == null ? new Function1() { // from class: com.discord.chat.presentation.message.view.n
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit activityRichPresenceInviteEmbed_dJIpDCQ$lambda$11;
                    activityRichPresenceInviteEmbed_dJIpDCQ$lambda$11 = ActivityRichPresenceInviteEmbedView.setActivityRichPresenceInviteEmbed_dJIpDCQ$lambda$11((CommandMentionContentNode) obj);
                    return activityRichPresenceInviteEmbed_dJIpDCQ$lambda$11;
                }
            } : function13, function14 == null ? new Function1() { // from class: com.discord.chat.presentation.message.view.b
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit activityRichPresenceInviteEmbed_dJIpDCQ$lambda$12;
                    activityRichPresenceInviteEmbed_dJIpDCQ$lambda$12 = ActivityRichPresenceInviteEmbedView.setActivityRichPresenceInviteEmbed_dJIpDCQ$lambda$12((CommandMentionContentNode) obj);
                    return activityRichPresenceInviteEmbed_dJIpDCQ$lambda$12;
                }
            } : function14, function0 == null ? new Function0() { // from class: com.discord.chat.presentation.message.view.c
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit unit;
                    unit = Unit.f32056a;
                    return unit;
                }
            } : function0, function15 == null ? new Function1() { // from class: com.discord.chat.presentation.message.view.d
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit activityRichPresenceInviteEmbed_dJIpDCQ$lambda$14;
                    activityRichPresenceInviteEmbed_dJIpDCQ$lambda$14 = ActivityRichPresenceInviteEmbedView.setActivityRichPresenceInviteEmbed_dJIpDCQ$lambda$14((String) obj);
                    return activityRichPresenceInviteEmbed_dJIpDCQ$lambda$14;
                }
            } : function15, function16 == null ? new Function1() { // from class: com.discord.chat.presentation.message.view.f
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit activityRichPresenceInviteEmbed_dJIpDCQ$lambda$15;
                    activityRichPresenceInviteEmbed_dJIpDCQ$lambda$15 = ActivityRichPresenceInviteEmbedView.setActivityRichPresenceInviteEmbed_dJIpDCQ$lambda$15((InlineCodeContentNode) obj);
                    return activityRichPresenceInviteEmbed_dJIpDCQ$lambda$15;
                }
            } : function16, function17 == null ? new Function1() { // from class: com.discord.chat.presentation.message.view.g
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit activityRichPresenceInviteEmbed_dJIpDCQ$lambda$16;
                    activityRichPresenceInviteEmbed_dJIpDCQ$lambda$16 = ActivityRichPresenceInviteEmbedView.setActivityRichPresenceInviteEmbed_dJIpDCQ$lambda$16((EmojiContentNode) obj);
                    return activityRichPresenceInviteEmbed_dJIpDCQ$lambda$16;
                }
            } : function17, function18 == null ? new Function1<MessageId, Unit>() { // from class: com.discord.chat.presentation.message.view.ActivityRichPresenceInviteEmbedView$setActivityRichPresenceInviteEmbed$14
                @Override // kotlin.jvm.functions.Function1
                public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                    m683invoke1xi1bu0(((MessageId) obj).m1092unboximpl());
                    return Unit.f32056a;
                }

                /* renamed from: invoke-1xi1bu0  reason: not valid java name */
                public final void m683invoke1xi1bu0(String it) {
                    Intrinsics.checkNotNullParameter(it, "it");
                }
            } : function18, function19 == null ? new Function1() { // from class: com.discord.chat.presentation.message.view.h
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit activityRichPresenceInviteEmbed_dJIpDCQ$lambda$17;
                    activityRichPresenceInviteEmbed_dJIpDCQ$lambda$17 = ActivityRichPresenceInviteEmbedView.setActivityRichPresenceInviteEmbed_dJIpDCQ$lambda$17((SoundmojiContentNode) obj);
                    return activityRichPresenceInviteEmbed_dJIpDCQ$lambda$17;
                }
            } : function19);
            return;
        }
        showNormalContent();
        Context context = getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        ViewBackgroundUtilsKt.setBackgroundRectangle$default(this, ColorUtilsKt.getColorCompat(context, ThemeManagerKt.getTheme().getColorRes(R.color.primary_130, R.color.primary_630)), SizeUtilsKt.getDpToPx(12), null, 0, 12, null);
        if (!z12 && z13) {
            SimpleDraweeView activityIcon = this.binding.activityIcon;
            Intrinsics.checkNotNullExpressionValue(activityIcon, "activityIcon");
            ReactAssetUtilsKt.setReactAsset(activityIcon, ReactAsset.SpotifyBrandNeutral);
            SimpleDraweeView activityIcon2 = this.binding.activityIcon;
            Intrinsics.checkNotNullExpressionValue(activityIcon2, "activityIcon");
            activityIcon2.setVisibility(0);
        } else if (str4 != null) {
            this.binding.activityIcon.setImageURI(w8.f.r(str4));
            SimpleDraweeView activityIcon3 = this.binding.activityIcon;
            Intrinsics.checkNotNullExpressionValue(activityIcon3, "activityIcon");
            activityIcon3.setVisibility(0);
        } else {
            SimpleDraweeView activityIcon4 = this.binding.activityIcon;
            Intrinsics.checkNotNullExpressionValue(activityIcon4, "activityIcon");
            activityIcon4.setVisibility(8);
        }
        TextView headerText = this.binding.headerText;
        Intrinsics.checkNotNullExpressionValue(headerText, "headerText");
        ViewUtilsKt.setOptionalText(headerText, str3);
        TextView title = this.binding.title;
        Intrinsics.checkNotNullExpressionValue(title, "title");
        ViewUtilsKt.setOptionalText(title, str8);
        TextView subtitle = this.binding.subtitle;
        Intrinsics.checkNotNullExpressionValue(subtitle, "subtitle");
        ViewUtilsKt.setOptionalText(subtitle, str7);
        if (z12) {
            if (z13) {
                SimpleDraweeView subtitleIcon = this.binding.subtitleIcon;
                Intrinsics.checkNotNullExpressionValue(subtitleIcon, "subtitleIcon");
                ReactAssetUtilsKt.setReactAsset(subtitleIcon, ReactAsset.Music);
            } else {
                SimpleDraweeView subtitleIcon2 = this.binding.subtitleIcon;
                Intrinsics.checkNotNullExpressionValue(subtitleIcon2, "subtitleIcon");
                ReactAssetUtilsKt.setReactAsset(subtitleIcon2, ReactAsset.GameController);
            }
            SimpleDraweeView subtitleIcon3 = this.binding.subtitleIcon;
            Intrinsics.checkNotNullExpressionValue(subtitleIcon3, "subtitleIcon");
            subtitleIcon3.setVisibility(0);
            SimpleDraweeView subtitleIcon4 = this.binding.subtitleIcon;
            Intrinsics.checkNotNullExpressionValue(subtitleIcon4, "subtitleIcon");
            ColorUtilsKt.setTintColor(subtitleIcon4, Integer.valueOf(whiteAlpha70));
        } else {
            SimpleDraweeView subtitleIcon5 = this.binding.subtitleIcon;
            Intrinsics.checkNotNullExpressionValue(subtitleIcon5, "subtitleIcon");
            subtitleIcon5.setVisibility(8);
        }
        setPartyAvatars(list2, i10);
        if (str5 != null) {
            TextView partySizeText = this.binding.partySizeText;
            Intrinsics.checkNotNullExpressionValue(partySizeText, "partySizeText");
            ViewUtilsKt.setOptionalText(partySizeText, str5);
            TextView partySizeText2 = this.binding.partySizeText;
            Intrinsics.checkNotNullExpressionValue(partySizeText2, "partySizeText");
            partySizeText2.setVisibility(0);
        } else {
            TextView partySizeText3 = this.binding.partySizeText;
            Intrinsics.checkNotNullExpressionValue(partySizeText3, "partySizeText");
            partySizeText3.setVisibility(8);
        }
        ConstraintLayout partyContainer = this.binding.partyContainer;
        Intrinsics.checkNotNullExpressionValue(partyContainer, "partyContainer");
        partyContainer.setVisibility(z12 ? 0 : 8);
        if (str != null) {
            DCDButton button = this.binding.button;
            Intrinsics.checkNotNullExpressionValue(button, "button");
            button.setVisibility(0);
            this.binding.button.setBackgroundColor(ThemeManagerKt.getTheme().getControlOverlayPrimaryBackgroundDefault());
            this.binding.button.setTextColor(Integer.valueOf(ThemeManagerKt.getTheme().getControlOverlayPrimaryTextDefault()));
            this.binding.button.setText(str);
            this.binding.button.setClickable(z10 && !z11);
            if (z10) {
                this.binding.button.setOnClickButtonListener(onTapJoinRichPresence);
            } else {
                this.binding.button.setOnClickButtonListener(null);
            }
            this.binding.button.setAlpha(z10 ? 1.0f : 0.5f);
            this.binding.button.setLoading(z11, true);
        } else {
            this.binding.button.setOnClickButtonListener(null);
            DCDButton button2 = this.binding.button;
            Intrinsics.checkNotNullExpressionValue(button2, "button");
            button2.setVisibility(8);
        }
        if (str2 != null && str2.length() > 0) {
            ConstraintLayout footerContainer = this.binding.footerContainer;
            Intrinsics.checkNotNullExpressionValue(footerContainer, "footerContainer");
            footerContainer.setVisibility(0);
            TextView footerLabel = this.binding.footerLabel;
            Intrinsics.checkNotNullExpressionValue(footerLabel, "footerLabel");
            ViewUtilsKt.setOptionalText(footerLabel, str2);
            if (list3 != null && list3.contains("xbox")) {
                SimpleDraweeView xboxIcon = this.binding.xboxIcon;
                Intrinsics.checkNotNullExpressionValue(xboxIcon, "xboxIcon");
                ReactAssetUtilsKt.setReactAsset(xboxIcon, ReactAsset.XboxNeutral);
                SimpleDraweeView xboxIcon2 = this.binding.xboxIcon;
                Intrinsics.checkNotNullExpressionValue(xboxIcon2, "xboxIcon");
                ColorUtilsKt.setTintColor(xboxIcon2, Integer.valueOf(whiteAlpha70));
                SimpleDraweeView xboxIcon3 = this.binding.xboxIcon;
                Intrinsics.checkNotNullExpressionValue(xboxIcon3, "xboxIcon");
                xboxIcon3.setVisibility(0);
            } else {
                SimpleDraweeView xboxIcon4 = this.binding.xboxIcon;
                Intrinsics.checkNotNullExpressionValue(xboxIcon4, "xboxIcon");
                xboxIcon4.setVisibility(8);
            }
            if (list3 != null && list3.contains("playstation")) {
                SimpleDraweeView playstationIcon = this.binding.playstationIcon;
                Intrinsics.checkNotNullExpressionValue(playstationIcon, "playstationIcon");
                ReactAssetUtilsKt.setReactAsset(playstationIcon, ReactAsset.PlaystationNeutral);
                SimpleDraweeView playstationIcon2 = this.binding.playstationIcon;
                Intrinsics.checkNotNullExpressionValue(playstationIcon2, "playstationIcon");
                ColorUtilsKt.setTintColor(playstationIcon2, Integer.valueOf(whiteAlpha70));
                SimpleDraweeView playstationIcon3 = this.binding.playstationIcon;
                Intrinsics.checkNotNullExpressionValue(playstationIcon3, "playstationIcon");
                playstationIcon3.setVisibility(0);
            } else {
                SimpleDraweeView playstationIcon4 = this.binding.playstationIcon;
                Intrinsics.checkNotNullExpressionValue(playstationIcon4, "playstationIcon");
                playstationIcon4.setVisibility(8);
            }
            if (list3 != null && list3.contains("desktop")) {
                SimpleDraweeView desktopIcon = this.binding.desktopIcon;
                Intrinsics.checkNotNullExpressionValue(desktopIcon, "desktopIcon");
                ReactAssetUtilsKt.setReactAsset(desktopIcon, ReactAsset.Screen);
                SimpleDraweeView desktopIcon2 = this.binding.desktopIcon;
                Intrinsics.checkNotNullExpressionValue(desktopIcon2, "desktopIcon");
                ColorUtilsKt.setTintColor(desktopIcon2, Integer.valueOf(whiteAlpha70));
                SimpleDraweeView desktopIcon3 = this.binding.desktopIcon;
                Intrinsics.checkNotNullExpressionValue(desktopIcon3, "desktopIcon");
                desktopIcon3.setVisibility(0);
            } else {
                SimpleDraweeView desktopIcon4 = this.binding.desktopIcon;
                Intrinsics.checkNotNullExpressionValue(desktopIcon4, "desktopIcon");
                desktopIcon4.setVisibility(8);
            }
        } else {
            ConstraintLayout footerContainer2 = this.binding.footerContainer;
            Intrinsics.checkNotNullExpressionValue(footerContainer2, "footerContainer");
            footerContainer2.setVisibility(8);
            TextView footerLabel2 = this.binding.footerLabel;
            Intrinsics.checkNotNullExpressionValue(footerLabel2, "footerLabel");
            footerLabel2.setVisibility(8);
            SimpleDraweeView xboxIcon5 = this.binding.xboxIcon;
            Intrinsics.checkNotNullExpressionValue(xboxIcon5, "xboxIcon");
            xboxIcon5.setVisibility(8);
            SimpleDraweeView playstationIcon5 = this.binding.playstationIcon;
            Intrinsics.checkNotNullExpressionValue(playstationIcon5, "playstationIcon");
            playstationIcon5.setVisibility(8);
            SimpleDraweeView desktopIcon5 = this.binding.desktopIcon;
            Intrinsics.checkNotNullExpressionValue(desktopIcon5, "desktopIcon");
            desktopIcon5.setVisibility(8);
        }
        setCoverImage(str6);
        applyGradientBackground(list);
        setAlpha(z12 ? 1.0f : 0.6f);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public ActivityRichPresenceInviteEmbedView(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 4, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public /* synthetic */ ActivityRichPresenceInviteEmbedView(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i11 & 2) != 0 ? null : attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ActivityRichPresenceInviteEmbedView(@NotNull Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Intrinsics.checkNotNullParameter(context, "context");
        ActivityRichPresenceInviteEmbedViewBinding inflate = ActivityRichPresenceInviteEmbedViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        TextView textView = inflate.headerText;
        Intrinsics.checkNotNull(textView);
        SetTextSizeSpKt.setTextSizeSp(textView, 14.0f);
        DiscordFont discordFont = DiscordFont.PrimarySemibold;
        DiscordFontUtilsKt.setDiscordFont(textView, discordFont);
        TextView textView2 = inflate.title;
        Intrinsics.checkNotNull(textView2);
        SetTextSizeSpKt.setTextSizeSp(textView2, 16.0f);
        DiscordFontUtilsKt.setDiscordFont(textView2, discordFont);
        TextView textView3 = inflate.subtitle;
        Intrinsics.checkNotNull(textView3);
        SetTextSizeSpKt.setTextSizeSp(textView3, 12.0f);
        DiscordFont discordFont2 = DiscordFont.PrimaryMedium;
        DiscordFontUtilsKt.setDiscordFont(textView3, discordFont2);
        TextView textView4 = inflate.partySizeText;
        Intrinsics.checkNotNull(textView4);
        SetTextSizeSpKt.setTextSizeSp(textView4, 12.0f);
        DiscordFontUtilsKt.setDiscordFont(textView4, discordFont2);
        TextView textView5 = inflate.footerLabel;
        Intrinsics.checkNotNull(textView5);
        SetTextSizeSpKt.setTextSizeSp(textView5, 12.0f);
        DiscordFontUtilsKt.setDiscordFont(textView5, discordFont2);
    }
}
