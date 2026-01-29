package com.discord.chat.presentation.message.view.botuikit;

import com.discord.chat.bridge.contentnode.CommandMentionContentNode;
import com.discord.chat.bridge.contentnode.EmojiContentNode;
import com.discord.chat.bridge.contentnode.InlineCodeContentNode;
import com.discord.chat.bridge.contentnode.LinkContentNode;
import com.discord.chat.bridge.contentnode.SoundmojiContentNode;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000f\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u001a\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0016\b\u0086\b\u0018\u00002\u00020\u0001Bß\u0002\u0012\u0012\u0010\u0005\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00040\u0002\u0012\u0012\u0010\u0006\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00040\u0002\u0012\"\u0010\t\u001a\u001e\u0012\u0004\u0012\u00020\b\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0004\u0012\u00020\u00040\u0007\u0012*\u0010\u000b\u001a&\u0012\u0004\u0012\u00020\b\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0004\u0012\u00020\u00040\n\u0012\u0012\u0010\f\u001a\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\u00040\u0002\u0012\u0018\u0010\u000e\u001a\u0014\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\u00040\r\u0012*\u0010\u000f\u001a&\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0004\u0012\u00020\b\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0004\u0012\u00020\u00040\n\u0012\u0012\u0010\u0011\u001a\u000e\u0012\u0004\u0012\u00020\u0010\u0012\u0004\u0012\u00020\u00040\u0002\u0012\u0012\u0010\u0012\u001a\u000e\u0012\u0004\u0012\u00020\u0010\u0012\u0004\u0012\u00020\u00040\u0002\u0012\f\u0010\u0014\u001a\b\u0012\u0004\u0012\u00020\u00040\u0013\u0012\u0012\u0010\u0015\u001a\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\u00040\u0002\u0012\u0012\u0010\u0017\u001a\u000e\u0012\u0004\u0012\u00020\u0016\u0012\u0004\u0012\u00020\u00040\u0002\u0012\u0012\u0010\u0019\u001a\u000e\u0012\u0004\u0012\u00020\u0018\u0012\u0004\u0012\u00020\u00040\u0002\u0012\u0012\u0010\u001b\u001a\u000e\u0012\u0004\u0012\u00020\u001a\u0012\u0004\u0012\u00020\u00040\u0002¢\u0006\u0004\b\u001c\u0010\u001dJ\u001c\u0010\u001e\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00040\u0002HÆ\u0003¢\u0006\u0004\b\u001e\u0010\u001fJ\u001c\u0010 \u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00040\u0002HÆ\u0003¢\u0006\u0004\b \u0010\u001fJ,\u0010!\u001a\u001e\u0012\u0004\u0012\u00020\b\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0004\u0012\u00020\u00040\u0007HÆ\u0003¢\u0006\u0004\b!\u0010\"J4\u0010#\u001a&\u0012\u0004\u0012\u00020\b\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0004\u0012\u00020\u00040\nHÆ\u0003¢\u0006\u0004\b#\u0010$J\u001c\u0010%\u001a\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\u00040\u0002HÆ\u0003¢\u0006\u0004\b%\u0010\u001fJ\"\u0010&\u001a\u0014\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\u00040\rHÆ\u0003¢\u0006\u0004\b&\u0010'J4\u0010(\u001a&\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0004\u0012\u00020\b\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0004\u0012\u00020\u00040\nHÆ\u0003¢\u0006\u0004\b(\u0010$J\u001c\u0010)\u001a\u000e\u0012\u0004\u0012\u00020\u0010\u0012\u0004\u0012\u00020\u00040\u0002HÆ\u0003¢\u0006\u0004\b)\u0010\u001fJ\u001c\u0010*\u001a\u000e\u0012\u0004\u0012\u00020\u0010\u0012\u0004\u0012\u00020\u00040\u0002HÆ\u0003¢\u0006\u0004\b*\u0010\u001fJ\u0016\u0010+\u001a\b\u0012\u0004\u0012\u00020\u00040\u0013HÆ\u0003¢\u0006\u0004\b+\u0010,J\u001c\u0010-\u001a\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\u00040\u0002HÆ\u0003¢\u0006\u0004\b-\u0010\u001fJ\u001c\u0010.\u001a\u000e\u0012\u0004\u0012\u00020\u0016\u0012\u0004\u0012\u00020\u00040\u0002HÆ\u0003¢\u0006\u0004\b.\u0010\u001fJ\u001c\u0010/\u001a\u000e\u0012\u0004\u0012\u00020\u0018\u0012\u0004\u0012\u00020\u00040\u0002HÆ\u0003¢\u0006\u0004\b/\u0010\u001fJ\u001c\u00100\u001a\u000e\u0012\u0004\u0012\u00020\u001a\u0012\u0004\u0012\u00020\u00040\u0002HÆ\u0003¢\u0006\u0004\b0\u0010\u001fJ\u0084\u0003\u00101\u001a\u00020\u00002\u0014\b\u0002\u0010\u0005\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00040\u00022\u0014\b\u0002\u0010\u0006\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00040\u00022$\b\u0002\u0010\t\u001a\u001e\u0012\u0004\u0012\u00020\b\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0004\u0012\u00020\u00040\u00072,\b\u0002\u0010\u000b\u001a&\u0012\u0004\u0012\u00020\b\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0004\u0012\u00020\u00040\n2\u0014\b\u0002\u0010\f\u001a\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\u00040\u00022\u001a\b\u0002\u0010\u000e\u001a\u0014\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\u00040\r2,\b\u0002\u0010\u000f\u001a&\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0004\u0012\u00020\b\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0004\u0012\u00020\u00040\n2\u0014\b\u0002\u0010\u0011\u001a\u000e\u0012\u0004\u0012\u00020\u0010\u0012\u0004\u0012\u00020\u00040\u00022\u0014\b\u0002\u0010\u0012\u001a\u000e\u0012\u0004\u0012\u00020\u0010\u0012\u0004\u0012\u00020\u00040\u00022\u000e\b\u0002\u0010\u0014\u001a\b\u0012\u0004\u0012\u00020\u00040\u00132\u0014\b\u0002\u0010\u0015\u001a\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\u00040\u00022\u0014\b\u0002\u0010\u0017\u001a\u000e\u0012\u0004\u0012\u00020\u0016\u0012\u0004\u0012\u00020\u00040\u00022\u0014\b\u0002\u0010\u0019\u001a\u000e\u0012\u0004\u0012\u00020\u0018\u0012\u0004\u0012\u00020\u00040\u00022\u0014\b\u0002\u0010\u001b\u001a\u000e\u0012\u0004\u0012\u00020\u001a\u0012\u0004\u0012\u00020\u00040\u0002HÆ\u0001¢\u0006\u0004\b1\u00102J\u0010\u00103\u001a\u00020\bHÖ\u0001¢\u0006\u0004\b3\u00104J\u0010\u00106\u001a\u000205HÖ\u0001¢\u0006\u0004\b6\u00107J\u001a\u0010:\u001a\u0002092\b\u00108\u001a\u0004\u0018\u00010\u0001HÖ\u0003¢\u0006\u0004\b:\u0010;R#\u0010\u0005\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00040\u00028\u0006¢\u0006\f\n\u0004\b\u0005\u0010<\u001a\u0004\b=\u0010\u001fR#\u0010\u0006\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00040\u00028\u0006¢\u0006\f\n\u0004\b\u0006\u0010<\u001a\u0004\b>\u0010\u001fR3\u0010\t\u001a\u001e\u0012\u0004\u0012\u00020\b\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0004\u0012\u00020\u00040\u00078\u0006¢\u0006\f\n\u0004\b\t\u0010?\u001a\u0004\b@\u0010\"R;\u0010\u000b\u001a&\u0012\u0004\u0012\u00020\b\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0004\u0012\u00020\u00040\n8\u0006¢\u0006\f\n\u0004\b\u000b\u0010A\u001a\u0004\bB\u0010$R#\u0010\f\u001a\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\u00040\u00028\u0006¢\u0006\f\n\u0004\b\f\u0010<\u001a\u0004\bC\u0010\u001fR)\u0010\u000e\u001a\u0014\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\u00040\r8\u0006¢\u0006\f\n\u0004\b\u000e\u0010D\u001a\u0004\bE\u0010'R;\u0010\u000f\u001a&\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0004\u0012\u00020\b\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0006\u0012\u0004\u0018\u00010\b\u0012\u0004\u0012\u00020\u00040\n8\u0006¢\u0006\f\n\u0004\b\u000f\u0010A\u001a\u0004\bF\u0010$R#\u0010\u0011\u001a\u000e\u0012\u0004\u0012\u00020\u0010\u0012\u0004\u0012\u00020\u00040\u00028\u0006¢\u0006\f\n\u0004\b\u0011\u0010<\u001a\u0004\bG\u0010\u001fR#\u0010\u0012\u001a\u000e\u0012\u0004\u0012\u00020\u0010\u0012\u0004\u0012\u00020\u00040\u00028\u0006¢\u0006\f\n\u0004\b\u0012\u0010<\u001a\u0004\bH\u0010\u001fR\u001d\u0010\u0014\u001a\b\u0012\u0004\u0012\u00020\u00040\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010I\u001a\u0004\bJ\u0010,R#\u0010\u0015\u001a\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\u00040\u00028\u0006¢\u0006\f\n\u0004\b\u0015\u0010<\u001a\u0004\bK\u0010\u001fR#\u0010\u0017\u001a\u000e\u0012\u0004\u0012\u00020\u0016\u0012\u0004\u0012\u00020\u00040\u00028\u0006¢\u0006\f\n\u0004\b\u0017\u0010<\u001a\u0004\bL\u0010\u001fR#\u0010\u0019\u001a\u000e\u0012\u0004\u0012\u00020\u0018\u0012\u0004\u0012\u00020\u00040\u00028\u0006¢\u0006\f\n\u0004\b\u0019\u0010<\u001a\u0004\bM\u0010\u001fR#\u0010\u001b\u001a\u000e\u0012\u0004\u0012\u00020\u001a\u0012\u0004\u0012\u00020\u00040\u00028\u0006¢\u0006\f\n\u0004\b\u001b\u0010<\u001a\u0004\bN\u0010\u001f¨\u0006O"}, d2 = {"Lcom/discord/chat/presentation/message/view/botuikit/MarkdownTextRenderEventHandlers;", "", "Lkotlin/Function1;", "Lcom/discord/chat/bridge/contentnode/LinkContentNode;", "", "onLinkClicked", "onLinkLongClicked", "Lkotlin/Function3;", "", "onTapChannel", "Lkotlin/Function4;", "onLongPressChannel", "onTapAttachmentLink", "Lkotlin/Function2;", "onLongPressAttachmentLink", "onTapMention", "Lcom/discord/chat/bridge/contentnode/CommandMentionContentNode;", "onTapCommand", "onLongPressCommand", "Lkotlin/Function0;", "onTapSpoiler", "onTapTimestamp", "Lcom/discord/chat/bridge/contentnode/InlineCodeContentNode;", "onTapInlineCode", "Lcom/discord/chat/bridge/contentnode/EmojiContentNode;", "onTapEmoji", "Lcom/discord/chat/bridge/contentnode/SoundmojiContentNode;", "onTapSoundmoji", "<init>", "(Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function3;Lkotlin/jvm/functions/Function4;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function4;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;)V", "component1", "()Lkotlin/jvm/functions/Function1;", "component2", "component3", "()Lkotlin/jvm/functions/Function3;", "component4", "()Lkotlin/jvm/functions/Function4;", "component5", "component6", "()Lkotlin/jvm/functions/Function2;", "component7", "component8", "component9", "component10", "()Lkotlin/jvm/functions/Function0;", "component11", "component12", "component13", "component14", "copy", "(Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function3;Lkotlin/jvm/functions/Function4;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function4;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;)Lcom/discord/chat/presentation/message/view/botuikit/MarkdownTextRenderEventHandlers;", "toString", "()Ljava/lang/String;", "", "hashCode", "()I", "other", "", "equals", "(Ljava/lang/Object;)Z", "Lkotlin/jvm/functions/Function1;", "getOnLinkClicked", "getOnLinkLongClicked", "Lkotlin/jvm/functions/Function3;", "getOnTapChannel", "Lkotlin/jvm/functions/Function4;", "getOnLongPressChannel", "getOnTapAttachmentLink", "Lkotlin/jvm/functions/Function2;", "getOnLongPressAttachmentLink", "getOnTapMention", "getOnTapCommand", "getOnLongPressCommand", "Lkotlin/jvm/functions/Function0;", "getOnTapSpoiler", "getOnTapTimestamp", "getOnTapInlineCode", "getOnTapEmoji", "getOnTapSoundmoji", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MarkdownTextRenderEventHandlers {
    @NotNull
    private final Function1<LinkContentNode, Unit> onLinkClicked;
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
    private final Function1<SoundmojiContentNode, Unit> onTapSoundmoji;
    @NotNull
    private final Function0<Unit> onTapSpoiler;
    @NotNull
    private final Function1<String, Unit> onTapTimestamp;

    /* JADX WARN: Multi-variable type inference failed */
    public MarkdownTextRenderEventHandlers(@NotNull Function1<? super LinkContentNode, Unit> onLinkClicked, @NotNull Function1<? super LinkContentNode, Unit> onLinkLongClicked, @NotNull Function3 onTapChannel, @NotNull Function4 onLongPressChannel, @NotNull Function1<? super String, Unit> onTapAttachmentLink, @NotNull Function2<? super String, ? super String, Unit> onLongPressAttachmentLink, @NotNull Function4 onTapMention, @NotNull Function1<? super CommandMentionContentNode, Unit> onTapCommand, @NotNull Function1<? super CommandMentionContentNode, Unit> onLongPressCommand, @NotNull Function0<Unit> onTapSpoiler, @NotNull Function1<? super String, Unit> onTapTimestamp, @NotNull Function1<? super InlineCodeContentNode, Unit> onTapInlineCode, @NotNull Function1<? super EmojiContentNode, Unit> onTapEmoji, @NotNull Function1<? super SoundmojiContentNode, Unit> onTapSoundmoji) {
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
        Intrinsics.checkNotNullParameter(onTapSoundmoji, "onTapSoundmoji");
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
        this.onTapSoundmoji = onTapSoundmoji;
    }

    @NotNull
    public final Function1<LinkContentNode, Unit> component1() {
        return this.onLinkClicked;
    }

    @NotNull
    public final Function0<Unit> component10() {
        return this.onTapSpoiler;
    }

    @NotNull
    public final Function1<String, Unit> component11() {
        return this.onTapTimestamp;
    }

    @NotNull
    public final Function1<InlineCodeContentNode, Unit> component12() {
        return this.onTapInlineCode;
    }

    @NotNull
    public final Function1<EmojiContentNode, Unit> component13() {
        return this.onTapEmoji;
    }

    @NotNull
    public final Function1<SoundmojiContentNode, Unit> component14() {
        return this.onTapSoundmoji;
    }

    @NotNull
    public final Function1<LinkContentNode, Unit> component2() {
        return this.onLinkLongClicked;
    }

    @NotNull
    public final Function3 component3() {
        return this.onTapChannel;
    }

    @NotNull
    public final Function4 component4() {
        return this.onLongPressChannel;
    }

    @NotNull
    public final Function1<String, Unit> component5() {
        return this.onTapAttachmentLink;
    }

    @NotNull
    public final Function2<String, String, Unit> component6() {
        return this.onLongPressAttachmentLink;
    }

    @NotNull
    public final Function4 component7() {
        return this.onTapMention;
    }

    @NotNull
    public final Function1<CommandMentionContentNode, Unit> component8() {
        return this.onTapCommand;
    }

    @NotNull
    public final Function1<CommandMentionContentNode, Unit> component9() {
        return this.onLongPressCommand;
    }

    @NotNull
    public final MarkdownTextRenderEventHandlers copy(@NotNull Function1<? super LinkContentNode, Unit> onLinkClicked, @NotNull Function1<? super LinkContentNode, Unit> onLinkLongClicked, @NotNull Function3 onTapChannel, @NotNull Function4 onLongPressChannel, @NotNull Function1<? super String, Unit> onTapAttachmentLink, @NotNull Function2<? super String, ? super String, Unit> onLongPressAttachmentLink, @NotNull Function4 onTapMention, @NotNull Function1<? super CommandMentionContentNode, Unit> onTapCommand, @NotNull Function1<? super CommandMentionContentNode, Unit> onLongPressCommand, @NotNull Function0<Unit> onTapSpoiler, @NotNull Function1<? super String, Unit> onTapTimestamp, @NotNull Function1<? super InlineCodeContentNode, Unit> onTapInlineCode, @NotNull Function1<? super EmojiContentNode, Unit> onTapEmoji, @NotNull Function1<? super SoundmojiContentNode, Unit> onTapSoundmoji) {
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
        Intrinsics.checkNotNullParameter(onTapSoundmoji, "onTapSoundmoji");
        return new MarkdownTextRenderEventHandlers(onLinkClicked, onLinkLongClicked, onTapChannel, onLongPressChannel, onTapAttachmentLink, onLongPressAttachmentLink, onTapMention, onTapCommand, onLongPressCommand, onTapSpoiler, onTapTimestamp, onTapInlineCode, onTapEmoji, onTapSoundmoji);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof MarkdownTextRenderEventHandlers) {
            MarkdownTextRenderEventHandlers markdownTextRenderEventHandlers = (MarkdownTextRenderEventHandlers) obj;
            return Intrinsics.areEqual(this.onLinkClicked, markdownTextRenderEventHandlers.onLinkClicked) && Intrinsics.areEqual(this.onLinkLongClicked, markdownTextRenderEventHandlers.onLinkLongClicked) && Intrinsics.areEqual(this.onTapChannel, markdownTextRenderEventHandlers.onTapChannel) && Intrinsics.areEqual(this.onLongPressChannel, markdownTextRenderEventHandlers.onLongPressChannel) && Intrinsics.areEqual(this.onTapAttachmentLink, markdownTextRenderEventHandlers.onTapAttachmentLink) && Intrinsics.areEqual(this.onLongPressAttachmentLink, markdownTextRenderEventHandlers.onLongPressAttachmentLink) && Intrinsics.areEqual(this.onTapMention, markdownTextRenderEventHandlers.onTapMention) && Intrinsics.areEqual(this.onTapCommand, markdownTextRenderEventHandlers.onTapCommand) && Intrinsics.areEqual(this.onLongPressCommand, markdownTextRenderEventHandlers.onLongPressCommand) && Intrinsics.areEqual(this.onTapSpoiler, markdownTextRenderEventHandlers.onTapSpoiler) && Intrinsics.areEqual(this.onTapTimestamp, markdownTextRenderEventHandlers.onTapTimestamp) && Intrinsics.areEqual(this.onTapInlineCode, markdownTextRenderEventHandlers.onTapInlineCode) && Intrinsics.areEqual(this.onTapEmoji, markdownTextRenderEventHandlers.onTapEmoji) && Intrinsics.areEqual(this.onTapSoundmoji, markdownTextRenderEventHandlers.onTapSoundmoji);
        }
        return false;
    }

    @NotNull
    public final Function1<LinkContentNode, Unit> getOnLinkClicked() {
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
    public final Function1<SoundmojiContentNode, Unit> getOnTapSoundmoji() {
        return this.onTapSoundmoji;
    }

    @NotNull
    public final Function0<Unit> getOnTapSpoiler() {
        return this.onTapSpoiler;
    }

    @NotNull
    public final Function1<String, Unit> getOnTapTimestamp() {
        return this.onTapTimestamp;
    }

    public int hashCode() {
        return (((((((((((((((((((((((((this.onLinkClicked.hashCode() * 31) + this.onLinkLongClicked.hashCode()) * 31) + this.onTapChannel.hashCode()) * 31) + this.onLongPressChannel.hashCode()) * 31) + this.onTapAttachmentLink.hashCode()) * 31) + this.onLongPressAttachmentLink.hashCode()) * 31) + this.onTapMention.hashCode()) * 31) + this.onTapCommand.hashCode()) * 31) + this.onLongPressCommand.hashCode()) * 31) + this.onTapSpoiler.hashCode()) * 31) + this.onTapTimestamp.hashCode()) * 31) + this.onTapInlineCode.hashCode()) * 31) + this.onTapEmoji.hashCode()) * 31) + this.onTapSoundmoji.hashCode();
    }

    @NotNull
    public String toString() {
        Function1<LinkContentNode, Unit> function1 = this.onLinkClicked;
        Function1<LinkContentNode, Unit> function12 = this.onLinkLongClicked;
        Function3 function3 = this.onTapChannel;
        Function4 function4 = this.onLongPressChannel;
        Function1<String, Unit> function13 = this.onTapAttachmentLink;
        Function2<String, String, Unit> function2 = this.onLongPressAttachmentLink;
        Function4 function42 = this.onTapMention;
        Function1<CommandMentionContentNode, Unit> function14 = this.onTapCommand;
        Function1<CommandMentionContentNode, Unit> function15 = this.onLongPressCommand;
        Function0<Unit> function0 = this.onTapSpoiler;
        Function1<String, Unit> function16 = this.onTapTimestamp;
        Function1<InlineCodeContentNode, Unit> function17 = this.onTapInlineCode;
        Function1<EmojiContentNode, Unit> function18 = this.onTapEmoji;
        Function1<SoundmojiContentNode, Unit> function19 = this.onTapSoundmoji;
        return "MarkdownTextRenderEventHandlers(onLinkClicked=" + function1 + ", onLinkLongClicked=" + function12 + ", onTapChannel=" + function3 + ", onLongPressChannel=" + function4 + ", onTapAttachmentLink=" + function13 + ", onLongPressAttachmentLink=" + function2 + ", onTapMention=" + function42 + ", onTapCommand=" + function14 + ", onLongPressCommand=" + function15 + ", onTapSpoiler=" + function0 + ", onTapTimestamp=" + function16 + ", onTapInlineCode=" + function17 + ", onTapEmoji=" + function18 + ", onTapSoundmoji=" + function19 + ")";
    }
}
