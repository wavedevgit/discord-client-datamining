package com.discord.chat.presentation.message.viewholder;

import com.discord.chat.bridge.contentnode.CommandMentionContentNode;
import com.discord.chat.bridge.contentnode.EmojiContentNode;
import com.discord.chat.bridge.contentnode.InlineCodeContentNode;
import com.discord.chat.bridge.contentnode.LinkContentNode;
import com.discord.chat.bridge.contentnode.SoundmojiContentNode;
import com.discord.chat.presentation.message.messagepart.MessageContentAccessory;
import com.discord.primitives.MessageId;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000n\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u001c\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0018\b\u0086\b\u0018\u00002\u00020\u0001B\u0087\u0003\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0018\u0010\b\u001a\u0014\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00070\u0004\u0012\u0012\u0010\n\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00070\t\u0012\"\u0010\r\u001a\u001e\u0012\u0004\u0012\u00020\f\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0004\u0012\u00020\u00070\u000b\u0012*\u0010\u000f\u001a&\u0012\u0004\u0012\u00020\f\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0004\u0012\u00020\u00070\u000e\u0012\u0012\u0010\u0010\u001a\u000e\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\u00070\t\u0012\u0018\u0010\u0011\u001a\u0014\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\u00070\u0004\u0012*\u0010\u0012\u001a&\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0004\u0012\u00020\f\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0004\u0012\u00020\u00070\u000e\u0012\u0012\u0010\u0014\u001a\u000e\u0012\u0004\u0012\u00020\u0013\u0012\u0004\u0012\u00020\u00070\t\u0012\u0012\u0010\u0015\u001a\u000e\u0012\u0004\u0012\u00020\u0013\u0012\u0004\u0012\u00020\u00070\t\u0012\u0012\u0010\u0017\u001a\u000e\u0012\u0004\u0012\u00020\u0016\u0012\u0004\u0012\u00020\u00070\t\u0012\u0012\u0010\u0018\u001a\u000e\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\u00070\t\u0012\u0012\u0010\u001a\u001a\u000e\u0012\u0004\u0012\u00020\u0019\u0012\u0004\u0012\u00020\u00070\t\u0012\u0012\u0010\u001c\u001a\u000e\u0012\u0004\u0012\u00020\u001b\u0012\u0004\u0012\u00020\u00070\t\u0012\u0012\u0010\u001d\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00070\t\u0012\u0012\u0010\u001f\u001a\u000e\u0012\u0004\u0012\u00020\u001e\u0012\u0004\u0012\u00020\u00070\t¢\u0006\u0004\b \u0010!J\u0010\u0010\"\u001a\u00020\u0002HÆ\u0003¢\u0006\u0004\b\"\u0010#J\"\u0010$\u001a\u0014\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00070\u0004HÆ\u0003¢\u0006\u0004\b$\u0010%J\u001c\u0010&\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00070\tHÆ\u0003¢\u0006\u0004\b&\u0010'J,\u0010(\u001a\u001e\u0012\u0004\u0012\u00020\f\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0004\u0012\u00020\u00070\u000bHÆ\u0003¢\u0006\u0004\b(\u0010)J4\u0010*\u001a&\u0012\u0004\u0012\u00020\f\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0004\u0012\u00020\u00070\u000eHÆ\u0003¢\u0006\u0004\b*\u0010+J\u001c\u0010,\u001a\u000e\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\u00070\tHÆ\u0003¢\u0006\u0004\b,\u0010'J\"\u0010-\u001a\u0014\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\u00070\u0004HÆ\u0003¢\u0006\u0004\b-\u0010%J4\u0010.\u001a&\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0004\u0012\u00020\f\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0004\u0012\u00020\u00070\u000eHÆ\u0003¢\u0006\u0004\b.\u0010+J\u001c\u0010/\u001a\u000e\u0012\u0004\u0012\u00020\u0013\u0012\u0004\u0012\u00020\u00070\tHÆ\u0003¢\u0006\u0004\b/\u0010'J\u001c\u00100\u001a\u000e\u0012\u0004\u0012\u00020\u0013\u0012\u0004\u0012\u00020\u00070\tHÆ\u0003¢\u0006\u0004\b0\u0010'J\u001c\u00101\u001a\u000e\u0012\u0004\u0012\u00020\u0016\u0012\u0004\u0012\u00020\u00070\tHÆ\u0003¢\u0006\u0004\b1\u0010'J\u001c\u00102\u001a\u000e\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\u00070\tHÆ\u0003¢\u0006\u0004\b2\u0010'J\u001c\u00103\u001a\u000e\u0012\u0004\u0012\u00020\u0019\u0012\u0004\u0012\u00020\u00070\tHÆ\u0003¢\u0006\u0004\b3\u0010'J\u001c\u00104\u001a\u000e\u0012\u0004\u0012\u00020\u001b\u0012\u0004\u0012\u00020\u00070\tHÆ\u0003¢\u0006\u0004\b4\u0010'J\u001c\u00105\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00070\tHÆ\u0003¢\u0006\u0004\b5\u0010'J\u001c\u00106\u001a\u000e\u0012\u0004\u0012\u00020\u001e\u0012\u0004\u0012\u00020\u00070\tHÆ\u0003¢\u0006\u0004\b6\u0010'J°\u0003\u00107\u001a\u00020\u00002\b\b\u0002\u0010\u0003\u001a\u00020\u00022\u001a\b\u0002\u0010\b\u001a\u0014\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00070\u00042\u0014\b\u0002\u0010\n\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00070\t2$\b\u0002\u0010\r\u001a\u001e\u0012\u0004\u0012\u00020\f\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0004\u0012\u00020\u00070\u000b2,\b\u0002\u0010\u000f\u001a&\u0012\u0004\u0012\u00020\f\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0004\u0012\u00020\u00070\u000e2\u0014\b\u0002\u0010\u0010\u001a\u000e\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\u00070\t2\u001a\b\u0002\u0010\u0011\u001a\u0014\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\u00070\u00042,\b\u0002\u0010\u0012\u001a&\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0004\u0012\u00020\f\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0004\u0012\u00020\u00070\u000e2\u0014\b\u0002\u0010\u0014\u001a\u000e\u0012\u0004\u0012\u00020\u0013\u0012\u0004\u0012\u00020\u00070\t2\u0014\b\u0002\u0010\u0015\u001a\u000e\u0012\u0004\u0012\u00020\u0013\u0012\u0004\u0012\u00020\u00070\t2\u0014\b\u0002\u0010\u0017\u001a\u000e\u0012\u0004\u0012\u00020\u0016\u0012\u0004\u0012\u00020\u00070\t2\u0014\b\u0002\u0010\u0018\u001a\u000e\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\u00070\t2\u0014\b\u0002\u0010\u001a\u001a\u000e\u0012\u0004\u0012\u00020\u0019\u0012\u0004\u0012\u00020\u00070\t2\u0014\b\u0002\u0010\u001c\u001a\u000e\u0012\u0004\u0012\u00020\u001b\u0012\u0004\u0012\u00020\u00070\t2\u0014\b\u0002\u0010\u001d\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00070\t2\u0014\b\u0002\u0010\u001f\u001a\u000e\u0012\u0004\u0012\u00020\u001e\u0012\u0004\u0012\u00020\u00070\tHÆ\u0001¢\u0006\u0004\b7\u00108J\u0010\u00109\u001a\u00020\fHÖ\u0001¢\u0006\u0004\b9\u0010:J\u0010\u0010<\u001a\u00020;HÖ\u0001¢\u0006\u0004\b<\u0010=J\u001a\u0010@\u001a\u00020?2\b\u0010>\u001a\u0004\u0018\u00010\u0001HÖ\u0003¢\u0006\u0004\b@\u0010AR\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u0003\u0010B\u001a\u0004\bC\u0010#R)\u0010\b\u001a\u0014\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00070\u00048\u0006¢\u0006\f\n\u0004\b\b\u0010D\u001a\u0004\bE\u0010%R#\u0010\n\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00070\t8\u0006¢\u0006\f\n\u0004\b\n\u0010F\u001a\u0004\bG\u0010'R3\u0010\r\u001a\u001e\u0012\u0004\u0012\u00020\f\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0004\u0012\u00020\u00070\u000b8\u0006¢\u0006\f\n\u0004\b\r\u0010H\u001a\u0004\bI\u0010)R;\u0010\u000f\u001a&\u0012\u0004\u0012\u00020\f\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0004\u0012\u00020\u00070\u000e8\u0006¢\u0006\f\n\u0004\b\u000f\u0010J\u001a\u0004\bK\u0010+R#\u0010\u0010\u001a\u000e\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\u00070\t8\u0006¢\u0006\f\n\u0004\b\u0010\u0010F\u001a\u0004\bL\u0010'R)\u0010\u0011\u001a\u0014\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\u00070\u00048\u0006¢\u0006\f\n\u0004\b\u0011\u0010D\u001a\u0004\bM\u0010%R;\u0010\u0012\u001a&\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0004\u0012\u00020\f\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0004\u0012\u00020\u00070\u000e8\u0006¢\u0006\f\n\u0004\b\u0012\u0010J\u001a\u0004\bN\u0010+R#\u0010\u0014\u001a\u000e\u0012\u0004\u0012\u00020\u0013\u0012\u0004\u0012\u00020\u00070\t8\u0006¢\u0006\f\n\u0004\b\u0014\u0010F\u001a\u0004\bO\u0010'R#\u0010\u0015\u001a\u000e\u0012\u0004\u0012\u00020\u0013\u0012\u0004\u0012\u00020\u00070\t8\u0006¢\u0006\f\n\u0004\b\u0015\u0010F\u001a\u0004\bP\u0010'R#\u0010\u0017\u001a\u000e\u0012\u0004\u0012\u00020\u0016\u0012\u0004\u0012\u00020\u00070\t8\u0006¢\u0006\f\n\u0004\b\u0017\u0010F\u001a\u0004\bQ\u0010'R#\u0010\u0018\u001a\u000e\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\u00070\t8\u0006¢\u0006\f\n\u0004\b\u0018\u0010F\u001a\u0004\bR\u0010'R#\u0010\u001a\u001a\u000e\u0012\u0004\u0012\u00020\u0019\u0012\u0004\u0012\u00020\u00070\t8\u0006¢\u0006\f\n\u0004\b\u001a\u0010F\u001a\u0004\bS\u0010'R#\u0010\u001c\u001a\u000e\u0012\u0004\u0012\u00020\u001b\u0012\u0004\u0012\u00020\u00070\t8\u0006¢\u0006\f\n\u0004\b\u001c\u0010F\u001a\u0004\bT\u0010'R#\u0010\u001d\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00070\t8\u0006¢\u0006\f\n\u0004\b\u001d\u0010F\u001a\u0004\bU\u0010'R#\u0010\u001f\u001a\u000e\u0012\u0004\u0012\u00020\u001e\u0012\u0004\u0012\u00020\u00070\t8\u0006¢\u0006\f\n\u0004\b\u001f\u0010F\u001a\u0004\bV\u0010'¨\u0006W"}, d2 = {"Lcom/discord/chat/presentation/message/viewholder/MessageContentBindData;", "", "Lcom/discord/chat/presentation/message/messagepart/MessageContentAccessory;", "messageContentItem", "Lkotlin/Function2;", "Lcom/discord/primitives/MessageId;", "Lcom/discord/chat/bridge/contentnode/LinkContentNode;", "", "onLinkClicked", "Lkotlin/Function1;", "onLinkLongClicked", "Lkotlin/Function3;", "", "onTapChannel", "Lkotlin/Function4;", "onLongPressChannel", "onTapAttachmentLink", "onLongPressAttachmentLink", "onTapMention", "Lcom/discord/chat/bridge/contentnode/CommandMentionContentNode;", "onTapCommand", "onLongPressCommand", "Lcom/discord/chat/presentation/message/viewholder/MessagePartViewHolder;", "onTapSpoiler", "onTapTimestamp", "Lcom/discord/chat/bridge/contentnode/InlineCodeContentNode;", "onTapInlineCode", "Lcom/discord/chat/bridge/contentnode/EmojiContentNode;", "onTapEmoji", "onTapSeeMore", "Lcom/discord/chat/bridge/contentnode/SoundmojiContentNode;", "onTapSoundmoji", "<init>", "(Lcom/discord/chat/presentation/message/messagepart/MessageContentAccessory;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function3;Lkotlin/jvm/functions/Function4;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function4;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;)V", "component1", "()Lcom/discord/chat/presentation/message/messagepart/MessageContentAccessory;", "component2", "()Lkotlin/jvm/functions/Function2;", "component3", "()Lkotlin/jvm/functions/Function1;", "component4", "()Lkotlin/jvm/functions/Function3;", "component5", "()Lkotlin/jvm/functions/Function4;", "component6", "component7", "component8", "component9", "component10", "component11", "component12", "component13", "component14", "component15", "component16", "copy", "(Lcom/discord/chat/presentation/message/messagepart/MessageContentAccessory;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function3;Lkotlin/jvm/functions/Function4;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function4;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;)Lcom/discord/chat/presentation/message/viewholder/MessageContentBindData;", "toString", "()Ljava/lang/String;", "", "hashCode", "()I", "other", "", "equals", "(Ljava/lang/Object;)Z", "Lcom/discord/chat/presentation/message/messagepart/MessageContentAccessory;", "getMessageContentItem", "Lkotlin/jvm/functions/Function2;", "getOnLinkClicked", "Lkotlin/jvm/functions/Function1;", "getOnLinkLongClicked", "Lkotlin/jvm/functions/Function3;", "getOnTapChannel", "Lkotlin/jvm/functions/Function4;", "getOnLongPressChannel", "getOnTapAttachmentLink", "getOnLongPressAttachmentLink", "getOnTapMention", "getOnTapCommand", "getOnLongPressCommand", "getOnTapSpoiler", "getOnTapTimestamp", "getOnTapInlineCode", "getOnTapEmoji", "getOnTapSeeMore", "getOnTapSoundmoji", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MessageContentBindData {
    @NotNull
    private final MessageContentAccessory messageContentItem;
    @NotNull
    private final Function2<MessageId, LinkContentNode, Unit> onLinkClicked;
    @NotNull
    private final Function1<LinkContentNode, Unit> onLinkLongClicked;
    @NotNull
    private final Function2<String, String, Unit> onLongPressAttachmentLink;
    @NotNull
    private final Function4 onLongPressChannel;
    @NotNull
    private final Function1<CommandMentionContentNode, Unit> onLongPressCommand;
    @NotNull
    private final Function1<String, Unit> onTapAttachmentLink;
    @NotNull
    private final Function3 onTapChannel;
    @NotNull
    private final Function1<CommandMentionContentNode, Unit> onTapCommand;
    @NotNull
    private final Function1<EmojiContentNode, Unit> onTapEmoji;
    @NotNull
    private final Function1<InlineCodeContentNode, Unit> onTapInlineCode;
    @NotNull
    private final Function4 onTapMention;
    @NotNull
    private final Function1<MessageId, Unit> onTapSeeMore;
    @NotNull
    private final Function1<SoundmojiContentNode, Unit> onTapSoundmoji;
    @NotNull
    private final Function1<MessagePartViewHolder, Unit> onTapSpoiler;
    @NotNull
    private final Function1<String, Unit> onTapTimestamp;

    /* JADX WARN: Multi-variable type inference failed */
    public MessageContentBindData(@NotNull MessageContentAccessory messageContentItem, @NotNull Function2<? super MessageId, ? super LinkContentNode, Unit> onLinkClicked, @NotNull Function1<? super LinkContentNode, Unit> onLinkLongClicked, @NotNull Function3 onTapChannel, @NotNull Function4 onLongPressChannel, @NotNull Function1<? super String, Unit> onTapAttachmentLink, @NotNull Function2<? super String, ? super String, Unit> onLongPressAttachmentLink, @NotNull Function4 onTapMention, @NotNull Function1<? super CommandMentionContentNode, Unit> onTapCommand, @NotNull Function1<? super CommandMentionContentNode, Unit> onLongPressCommand, @NotNull Function1<? super MessagePartViewHolder, Unit> onTapSpoiler, @NotNull Function1<? super String, Unit> onTapTimestamp, @NotNull Function1<? super InlineCodeContentNode, Unit> onTapInlineCode, @NotNull Function1<? super EmojiContentNode, Unit> onTapEmoji, @NotNull Function1<? super MessageId, Unit> onTapSeeMore, @NotNull Function1<? super SoundmojiContentNode, Unit> onTapSoundmoji) {
        Intrinsics.checkNotNullParameter(messageContentItem, "messageContentItem");
        Intrinsics.checkNotNullParameter(onLinkClicked, "onLinkClicked");
        Intrinsics.checkNotNullParameter(onLinkLongClicked, "onLinkLongClicked");
        Intrinsics.checkNotNullParameter(onTapChannel, "onTapChannel");
        Intrinsics.checkNotNullParameter(onLongPressChannel, "onLongPressChannel");
        Intrinsics.checkNotNullParameter(onTapAttachmentLink, "onTapAttachmentLink");
        Intrinsics.checkNotNullParameter(onLongPressAttachmentLink, "onLongPressAttachmentLink");
        Intrinsics.checkNotNullParameter(onTapMention, "onTapMention");
        Intrinsics.checkNotNullParameter(onTapCommand, "onTapCommand");
        Intrinsics.checkNotNullParameter(onLongPressCommand, "onLongPressCommand");
        Intrinsics.checkNotNullParameter(onTapSpoiler, "onTapSpoiler");
        Intrinsics.checkNotNullParameter(onTapTimestamp, "onTapTimestamp");
        Intrinsics.checkNotNullParameter(onTapInlineCode, "onTapInlineCode");
        Intrinsics.checkNotNullParameter(onTapEmoji, "onTapEmoji");
        Intrinsics.checkNotNullParameter(onTapSeeMore, "onTapSeeMore");
        Intrinsics.checkNotNullParameter(onTapSoundmoji, "onTapSoundmoji");
        this.messageContentItem = messageContentItem;
        this.onLinkClicked = onLinkClicked;
        this.onLinkLongClicked = onLinkLongClicked;
        this.onTapChannel = onTapChannel;
        this.onLongPressChannel = onLongPressChannel;
        this.onTapAttachmentLink = onTapAttachmentLink;
        this.onLongPressAttachmentLink = onLongPressAttachmentLink;
        this.onTapMention = onTapMention;
        this.onTapCommand = onTapCommand;
        this.onLongPressCommand = onLongPressCommand;
        this.onTapSpoiler = onTapSpoiler;
        this.onTapTimestamp = onTapTimestamp;
        this.onTapInlineCode = onTapInlineCode;
        this.onTapEmoji = onTapEmoji;
        this.onTapSeeMore = onTapSeeMore;
        this.onTapSoundmoji = onTapSoundmoji;
    }

    @NotNull
    public final MessageContentAccessory component1() {
        return this.messageContentItem;
    }

    @NotNull
    public final Function1<CommandMentionContentNode, Unit> component10() {
        return this.onLongPressCommand;
    }

    @NotNull
    public final Function1<MessagePartViewHolder, Unit> component11() {
        return this.onTapSpoiler;
    }

    @NotNull
    public final Function1<String, Unit> component12() {
        return this.onTapTimestamp;
    }

    @NotNull
    public final Function1<InlineCodeContentNode, Unit> component13() {
        return this.onTapInlineCode;
    }

    @NotNull
    public final Function1<EmojiContentNode, Unit> component14() {
        return this.onTapEmoji;
    }

    @NotNull
    public final Function1<MessageId, Unit> component15() {
        return this.onTapSeeMore;
    }

    @NotNull
    public final Function1<SoundmojiContentNode, Unit> component16() {
        return this.onTapSoundmoji;
    }

    @NotNull
    public final Function2<MessageId, LinkContentNode, Unit> component2() {
        return this.onLinkClicked;
    }

    @NotNull
    public final Function1<LinkContentNode, Unit> component3() {
        return this.onLinkLongClicked;
    }

    @NotNull
    public final Function3 component4() {
        return this.onTapChannel;
    }

    @NotNull
    public final Function4 component5() {
        return this.onLongPressChannel;
    }

    @NotNull
    public final Function1<String, Unit> component6() {
        return this.onTapAttachmentLink;
    }

    @NotNull
    public final Function2<String, String, Unit> component7() {
        return this.onLongPressAttachmentLink;
    }

    @NotNull
    public final Function4 component8() {
        return this.onTapMention;
    }

    @NotNull
    public final Function1<CommandMentionContentNode, Unit> component9() {
        return this.onTapCommand;
    }

    @NotNull
    public final MessageContentBindData copy(@NotNull MessageContentAccessory messageContentItem, @NotNull Function2<? super MessageId, ? super LinkContentNode, Unit> onLinkClicked, @NotNull Function1<? super LinkContentNode, Unit> onLinkLongClicked, @NotNull Function3 onTapChannel, @NotNull Function4 onLongPressChannel, @NotNull Function1<? super String, Unit> onTapAttachmentLink, @NotNull Function2<? super String, ? super String, Unit> onLongPressAttachmentLink, @NotNull Function4 onTapMention, @NotNull Function1<? super CommandMentionContentNode, Unit> onTapCommand, @NotNull Function1<? super CommandMentionContentNode, Unit> onLongPressCommand, @NotNull Function1<? super MessagePartViewHolder, Unit> onTapSpoiler, @NotNull Function1<? super String, Unit> onTapTimestamp, @NotNull Function1<? super InlineCodeContentNode, Unit> onTapInlineCode, @NotNull Function1<? super EmojiContentNode, Unit> onTapEmoji, @NotNull Function1<? super MessageId, Unit> onTapSeeMore, @NotNull Function1<? super SoundmojiContentNode, Unit> onTapSoundmoji) {
        Intrinsics.checkNotNullParameter(messageContentItem, "messageContentItem");
        Intrinsics.checkNotNullParameter(onLinkClicked, "onLinkClicked");
        Intrinsics.checkNotNullParameter(onLinkLongClicked, "onLinkLongClicked");
        Intrinsics.checkNotNullParameter(onTapChannel, "onTapChannel");
        Intrinsics.checkNotNullParameter(onLongPressChannel, "onLongPressChannel");
        Intrinsics.checkNotNullParameter(onTapAttachmentLink, "onTapAttachmentLink");
        Intrinsics.checkNotNullParameter(onLongPressAttachmentLink, "onLongPressAttachmentLink");
        Intrinsics.checkNotNullParameter(onTapMention, "onTapMention");
        Intrinsics.checkNotNullParameter(onTapCommand, "onTapCommand");
        Intrinsics.checkNotNullParameter(onLongPressCommand, "onLongPressCommand");
        Intrinsics.checkNotNullParameter(onTapSpoiler, "onTapSpoiler");
        Intrinsics.checkNotNullParameter(onTapTimestamp, "onTapTimestamp");
        Intrinsics.checkNotNullParameter(onTapInlineCode, "onTapInlineCode");
        Intrinsics.checkNotNullParameter(onTapEmoji, "onTapEmoji");
        Intrinsics.checkNotNullParameter(onTapSeeMore, "onTapSeeMore");
        Intrinsics.checkNotNullParameter(onTapSoundmoji, "onTapSoundmoji");
        return new MessageContentBindData(messageContentItem, onLinkClicked, onLinkLongClicked, onTapChannel, onLongPressChannel, onTapAttachmentLink, onLongPressAttachmentLink, onTapMention, onTapCommand, onLongPressCommand, onTapSpoiler, onTapTimestamp, onTapInlineCode, onTapEmoji, onTapSeeMore, onTapSoundmoji);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof MessageContentBindData) {
            MessageContentBindData messageContentBindData = (MessageContentBindData) obj;
            return Intrinsics.areEqual(this.messageContentItem, messageContentBindData.messageContentItem) && Intrinsics.areEqual(this.onLinkClicked, messageContentBindData.onLinkClicked) && Intrinsics.areEqual(this.onLinkLongClicked, messageContentBindData.onLinkLongClicked) && Intrinsics.areEqual(this.onTapChannel, messageContentBindData.onTapChannel) && Intrinsics.areEqual(this.onLongPressChannel, messageContentBindData.onLongPressChannel) && Intrinsics.areEqual(this.onTapAttachmentLink, messageContentBindData.onTapAttachmentLink) && Intrinsics.areEqual(this.onLongPressAttachmentLink, messageContentBindData.onLongPressAttachmentLink) && Intrinsics.areEqual(this.onTapMention, messageContentBindData.onTapMention) && Intrinsics.areEqual(this.onTapCommand, messageContentBindData.onTapCommand) && Intrinsics.areEqual(this.onLongPressCommand, messageContentBindData.onLongPressCommand) && Intrinsics.areEqual(this.onTapSpoiler, messageContentBindData.onTapSpoiler) && Intrinsics.areEqual(this.onTapTimestamp, messageContentBindData.onTapTimestamp) && Intrinsics.areEqual(this.onTapInlineCode, messageContentBindData.onTapInlineCode) && Intrinsics.areEqual(this.onTapEmoji, messageContentBindData.onTapEmoji) && Intrinsics.areEqual(this.onTapSeeMore, messageContentBindData.onTapSeeMore) && Intrinsics.areEqual(this.onTapSoundmoji, messageContentBindData.onTapSoundmoji);
        }
        return false;
    }

    @NotNull
    public final MessageContentAccessory getMessageContentItem() {
        return this.messageContentItem;
    }

    @NotNull
    public final Function2<MessageId, LinkContentNode, Unit> getOnLinkClicked() {
        return this.onLinkClicked;
    }

    @NotNull
    public final Function1<LinkContentNode, Unit> getOnLinkLongClicked() {
        return this.onLinkLongClicked;
    }

    @NotNull
    public final Function2<String, String, Unit> getOnLongPressAttachmentLink() {
        return this.onLongPressAttachmentLink;
    }

    @NotNull
    public final Function4 getOnLongPressChannel() {
        return this.onLongPressChannel;
    }

    @NotNull
    public final Function1<CommandMentionContentNode, Unit> getOnLongPressCommand() {
        return this.onLongPressCommand;
    }

    @NotNull
    public final Function1<String, Unit> getOnTapAttachmentLink() {
        return this.onTapAttachmentLink;
    }

    @NotNull
    public final Function3 getOnTapChannel() {
        return this.onTapChannel;
    }

    @NotNull
    public final Function1<CommandMentionContentNode, Unit> getOnTapCommand() {
        return this.onTapCommand;
    }

    @NotNull
    public final Function1<EmojiContentNode, Unit> getOnTapEmoji() {
        return this.onTapEmoji;
    }

    @NotNull
    public final Function1<InlineCodeContentNode, Unit> getOnTapInlineCode() {
        return this.onTapInlineCode;
    }

    @NotNull
    public final Function4 getOnTapMention() {
        return this.onTapMention;
    }

    @NotNull
    public final Function1<MessageId, Unit> getOnTapSeeMore() {
        return this.onTapSeeMore;
    }

    @NotNull
    public final Function1<SoundmojiContentNode, Unit> getOnTapSoundmoji() {
        return this.onTapSoundmoji;
    }

    @NotNull
    public final Function1<MessagePartViewHolder, Unit> getOnTapSpoiler() {
        return this.onTapSpoiler;
    }

    @NotNull
    public final Function1<String, Unit> getOnTapTimestamp() {
        return this.onTapTimestamp;
    }

    public int hashCode() {
        return (((((((((((((((((((((((((((((this.messageContentItem.hashCode() * 31) + this.onLinkClicked.hashCode()) * 31) + this.onLinkLongClicked.hashCode()) * 31) + this.onTapChannel.hashCode()) * 31) + this.onLongPressChannel.hashCode()) * 31) + this.onTapAttachmentLink.hashCode()) * 31) + this.onLongPressAttachmentLink.hashCode()) * 31) + this.onTapMention.hashCode()) * 31) + this.onTapCommand.hashCode()) * 31) + this.onLongPressCommand.hashCode()) * 31) + this.onTapSpoiler.hashCode()) * 31) + this.onTapTimestamp.hashCode()) * 31) + this.onTapInlineCode.hashCode()) * 31) + this.onTapEmoji.hashCode()) * 31) + this.onTapSeeMore.hashCode()) * 31) + this.onTapSoundmoji.hashCode();
    }

    @NotNull
    public String toString() {
        MessageContentAccessory messageContentAccessory = this.messageContentItem;
        Function2<MessageId, LinkContentNode, Unit> function2 = this.onLinkClicked;
        Function1<LinkContentNode, Unit> function1 = this.onLinkLongClicked;
        Function3 function3 = this.onTapChannel;
        Function4 function4 = this.onLongPressChannel;
        Function1<String, Unit> function12 = this.onTapAttachmentLink;
        Function2<String, String, Unit> function22 = this.onLongPressAttachmentLink;
        Function4 function42 = this.onTapMention;
        Function1<CommandMentionContentNode, Unit> function13 = this.onTapCommand;
        Function1<CommandMentionContentNode, Unit> function14 = this.onLongPressCommand;
        Function1<MessagePartViewHolder, Unit> function15 = this.onTapSpoiler;
        Function1<String, Unit> function16 = this.onTapTimestamp;
        Function1<InlineCodeContentNode, Unit> function17 = this.onTapInlineCode;
        Function1<EmojiContentNode, Unit> function18 = this.onTapEmoji;
        Function1<MessageId, Unit> function19 = this.onTapSeeMore;
        Function1<SoundmojiContentNode, Unit> function110 = this.onTapSoundmoji;
        return "MessageContentBindData(messageContentItem=" + messageContentAccessory + ", onLinkClicked=" + function2 + ", onLinkLongClicked=" + function1 + ", onTapChannel=" + function3 + ", onLongPressChannel=" + function4 + ", onTapAttachmentLink=" + function12 + ", onLongPressAttachmentLink=" + function22 + ", onTapMention=" + function42 + ", onTapCommand=" + function13 + ", onLongPressCommand=" + function14 + ", onTapSpoiler=" + function15 + ", onTapTimestamp=" + function16 + ", onTapInlineCode=" + function17 + ", onTapEmoji=" + function18 + ", onTapSeeMore=" + function19 + ", onTapSoundmoji=" + function110 + ")";
    }
}
