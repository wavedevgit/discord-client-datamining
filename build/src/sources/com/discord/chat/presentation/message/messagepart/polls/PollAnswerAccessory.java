package com.discord.chat.presentation.message.messagepart.polls;

import com.discord.chat.bridge.attachment.Attachment;
import com.discord.chat.bridge.polls.IPollStyleSet;
import com.discord.chat.bridge.polls.PollAnswer;
import com.discord.chat.bridge.polls.PollChatAnswerInteractionType;
import com.discord.chat.bridge.polls.PollResources;
import com.discord.chat.bridge.polls.PollStyleSet;
import com.discord.misc.utilities.ids.IdUtilsKt;
import com.discord.primitives.MessageId;
import com.discord.recycler_view.utils.ItemDiffableType;
import com.facebook.react.uimanager.ViewProps;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000^\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0005\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u001a\n\u0002\u0010\t\n\u0002\b\u0018\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0013\b\u0086\b\u0018\u00002\u00020\u00012\u00020\u0002B\u0097\u0001\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\u0006\u0010\u0007\u001a\u00020\b\u0012\f\u0010\t\u001a\b\u0012\u0004\u0012\u00020\u000b0\n\u0012\u0006\u0010\f\u001a\u00020\r\u0012\u0006\u0010\u000e\u001a\u00020\r\u0012\u0006\u0010\u000f\u001a\u00020\r\u0012\u0006\u0010\u0010\u001a\u00020\r\u0012\u0006\u0010\u0011\u001a\u00020\r\u0012\b\u0010\u0012\u001a\u0004\u0018\u00010\u0013\u0012\u0006\u0010\u0014\u001a\u00020\u0015\u0012\b\u0010\u0016\u001a\u0004\u0018\u00010\u0013\u0012\u0006\u0010\u0017\u001a\u00020\r\u0012\b\b\u0002\u0010\u0018\u001a\u00020\r\u0012\b\b\u0002\u0010\u0019\u001a\u00020\r\u0012\b\b\u0002\u0010\u001a\u001a\u00020\u001b¢\u0006\u0004\b\u001c\u0010\u001dJ\u0010\u00109\u001a\u00020\u0004HÆ\u0003¢\u0006\u0004\b:\u0010\u001fJ\t\u0010;\u001a\u00020\u0006HÆ\u0003J\t\u0010<\u001a\u00020\bHÆ\u0003J\u000f\u0010=\u001a\b\u0012\u0004\u0012\u00020\u000b0\nHÆ\u0003J\t\u0010>\u001a\u00020\rHÆ\u0003J\t\u0010?\u001a\u00020\rHÆ\u0003J\t\u0010@\u001a\u00020\rHÆ\u0003J\t\u0010A\u001a\u00020\rHÆ\u0003J\t\u0010B\u001a\u00020\rHÆ\u0003J\u000b\u0010C\u001a\u0004\u0018\u00010\u0013HÆ\u0003J\t\u0010D\u001a\u00020\u0015HÆ\u0003J\u000b\u0010E\u001a\u0004\u0018\u00010\u0013HÆ\u0003J\t\u0010F\u001a\u00020\rHÆ\u0003J\t\u0010G\u001a\u00020\rHÆ\u0003J\t\u0010H\u001a\u00020\rHÆ\u0003J\t\u0010I\u001a\u00020\u001bHÆ\u0003Jº\u0001\u0010J\u001a\u00020\u00002\b\b\u0002\u0010\u0003\u001a\u00020\u00042\b\b\u0002\u0010\u0005\u001a\u00020\u00062\b\b\u0002\u0010\u0007\u001a\u00020\b2\u000e\b\u0002\u0010\t\u001a\b\u0012\u0004\u0012\u00020\u000b0\n2\b\b\u0002\u0010\f\u001a\u00020\r2\b\b\u0002\u0010\u000e\u001a\u00020\r2\b\b\u0002\u0010\u000f\u001a\u00020\r2\b\b\u0002\u0010\u0010\u001a\u00020\r2\b\b\u0002\u0010\u0011\u001a\u00020\r2\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\u00132\b\b\u0002\u0010\u0014\u001a\u00020\u00152\n\b\u0002\u0010\u0016\u001a\u0004\u0018\u00010\u00132\b\b\u0002\u0010\u0017\u001a\u00020\r2\b\b\u0002\u0010\u0018\u001a\u00020\r2\b\b\u0002\u0010\u0019\u001a\u00020\r2\b\b\u0002\u0010\u001a\u001a\u00020\u001bHÆ\u0001¢\u0006\u0004\bK\u0010LJ\u0013\u0010M\u001a\u00020\r2\b\u0010N\u001a\u0004\u0018\u00010OHÖ\u0003J\t\u0010P\u001a\u00020QHÖ\u0001J\t\u0010R\u001a\u00020\u0013HÖ\u0001R\u0013\u0010\u0003\u001a\u00020\u0004¢\u0006\n\n\u0002\u0010 \u001a\u0004\b\u001e\u0010\u001fR\u0011\u0010\u0005\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b!\u0010\"R\u0011\u0010\u0007\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b#\u0010$R\u0017\u0010\t\u001a\b\u0012\u0004\u0012\u00020\u000b0\n¢\u0006\b\n\u0000\u001a\u0004\b%\u0010&R\u0011\u0010\f\u001a\u00020\r¢\u0006\b\n\u0000\u001a\u0004\b'\u0010(R\u0011\u0010\u000e\u001a\u00020\r¢\u0006\b\n\u0000\u001a\u0004\b)\u0010(R\u0011\u0010\u000f\u001a\u00020\r¢\u0006\b\n\u0000\u001a\u0004\b*\u0010(R\u0011\u0010\u0010\u001a\u00020\r¢\u0006\b\n\u0000\u001a\u0004\b+\u0010(R\u0011\u0010\u0011\u001a\u00020\r¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010(R\u0013\u0010\u0012\u001a\u0004\u0018\u00010\u0013¢\u0006\b\n\u0000\u001a\u0004\b,\u0010\u001fR\u0011\u0010\u0014\u001a\u00020\u0015¢\u0006\b\n\u0000\u001a\u0004\b-\u0010.R\u0013\u0010\u0016\u001a\u0004\u0018\u00010\u0013¢\u0006\b\n\u0000\u001a\u0004\b/\u0010\u001fR\u0011\u0010\u0017\u001a\u00020\r¢\u0006\b\n\u0000\u001a\u0004\b0\u0010(R\u0011\u0010\u0018\u001a\u00020\r¢\u0006\b\n\u0000\u001a\u0004\b1\u0010(R\u0011\u0010\u0019\u001a\u00020\r¢\u0006\b\n\u0000\u001a\u0004\b2\u0010(R\u0011\u0010\u001a\u001a\u00020\u001b¢\u0006\b\n\u0000\u001a\u0004\b3\u00104R\u0014\u00105\u001a\u000206X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b7\u00108R\u0014\u0010S\u001a\u00020Q8WX\u0096\u0005¢\u0006\u0006\u001a\u0004\bT\u0010UR\u0014\u0010V\u001a\u00020Q8WX\u0096\u0005¢\u0006\u0006\u001a\u0004\bW\u0010UR\u0014\u0010X\u001a\u00020Q8WX\u0096\u0005¢\u0006\u0006\u001a\u0004\bY\u0010UR\u0012\u0010Z\u001a\u00020QX\u0096\u0005¢\u0006\u0006\u001a\u0004\b[\u0010UR\u0014\u0010\\\u001a\u00020Q8WX\u0096\u0005¢\u0006\u0006\u001a\u0004\b]\u0010UR\u0014\u0010^\u001a\u00020Q8WX\u0096\u0005¢\u0006\u0006\u001a\u0004\b_\u0010UR\u0014\u0010`\u001a\u00020Q8WX\u0096\u0005¢\u0006\u0006\u001a\u0004\ba\u0010UR\u0014\u0010b\u001a\u00020Q8WX\u0096\u0005¢\u0006\u0006\u001a\u0004\bc\u0010U¨\u0006d"}, d2 = {"Lcom/discord/chat/presentation/message/messagepart/polls/PollAnswerAccessory;", "Lcom/discord/recycler_view/utils/ItemDiffableType;", "Lcom/discord/chat/bridge/polls/IPollStyleSet;", "messageId", "Lcom/discord/primitives/MessageId;", "resources", "Lcom/discord/chat/bridge/polls/PollResources;", "answer", "Lcom/discord/chat/bridge/polls/PollAnswer;", "attachments", "", "Lcom/discord/chat/bridge/attachment/Attachment;", "canTapAnswers", "", "canSelectMultipleAnswers", "canShowVoteCounts", "hasVoted", "isExpired", "myAvatarUrl", "", "interactionType", "Lcom/discord/chat/bridge/polls/PollChatAnswerInteractionType;", "tapAccessibilityLabel", "shouldAnimateTransition", "shouldAnimateEmoji", "shouldAutoPlayGifs", "styleSet", "Lcom/discord/chat/bridge/polls/PollStyleSet;", "<init>", "(Ljava/lang/String;Lcom/discord/chat/bridge/polls/PollResources;Lcom/discord/chat/bridge/polls/PollAnswer;Ljava/util/List;ZZZZZLjava/lang/String;Lcom/discord/chat/bridge/polls/PollChatAnswerInteractionType;Ljava/lang/String;ZZZLcom/discord/chat/bridge/polls/PollStyleSet;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getResources", "()Lcom/discord/chat/bridge/polls/PollResources;", "getAnswer", "()Lcom/discord/chat/bridge/polls/PollAnswer;", "getAttachments", "()Ljava/util/List;", "getCanTapAnswers", "()Z", "getCanSelectMultipleAnswers", "getCanShowVoteCounts", "getHasVoted", "getMyAvatarUrl", "getInteractionType", "()Lcom/discord/chat/bridge/polls/PollChatAnswerInteractionType;", "getTapAccessibilityLabel", "getShouldAnimateTransition", "getShouldAnimateEmoji", "getShouldAutoPlayGifs", "getStyleSet", "()Lcom/discord/chat/bridge/polls/PollStyleSet;", "itemId", "", "getItemId", "()Ljava/lang/Long;", "component1", "component1-3Eiw7ao", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "component12", "component13", "component14", "component15", "component16", "copy", "copy-VVrV5cY", "(Ljava/lang/String;Lcom/discord/chat/bridge/polls/PollResources;Lcom/discord/chat/bridge/polls/PollAnswer;Ljava/util/List;ZZZZZLjava/lang/String;Lcom/discord/chat/bridge/polls/PollChatAnswerInteractionType;Ljava/lang/String;ZZZLcom/discord/chat/bridge/polls/PollStyleSet;)Lcom/discord/chat/presentation/message/messagepart/polls/PollAnswerAccessory;", "equals", "other", "", "hashCode", "", "toString", "answerBackgroundColor", "getAnswerBackgroundColor", "()I", "answerFillColor", "getAnswerFillColor", ViewProps.BORDER_COLOR, "getBorderColor", "borderWidthPx", "getBorderWidthPx", "fillColor", "getFillColor", "labelColor", "getLabelColor", "radioBackgroundColor", "getRadioBackgroundColor", "radioForegroundColor", "getRadioForegroundColor", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class PollAnswerAccessory implements ItemDiffableType, IPollStyleSet {
    @NotNull
    private final PollAnswer answer;
    @NotNull
    private final List<Attachment> attachments;
    private final boolean canSelectMultipleAnswers;
    private final boolean canShowVoteCounts;
    private final boolean canTapAnswers;
    private final boolean hasVoted;
    @NotNull
    private final PollChatAnswerInteractionType interactionType;
    private final boolean isExpired;
    private final long itemId;
    @NotNull
    private final String messageId;
    private final String myAvatarUrl;
    @NotNull
    private final PollResources resources;
    private final boolean shouldAnimateEmoji;
    private final boolean shouldAnimateTransition;
    private final boolean shouldAutoPlayGifs;
    @NotNull
    private final PollStyleSet styleSet;
    private final String tapAccessibilityLabel;

    public /* synthetic */ PollAnswerAccessory(String str, PollResources pollResources, PollAnswer pollAnswer, List list, boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, String str2, PollChatAnswerInteractionType pollChatAnswerInteractionType, String str3, boolean z15, boolean z16, boolean z17, PollStyleSet pollStyleSet, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, pollResources, pollAnswer, list, z10, z11, z12, z13, z14, str2, pollChatAnswerInteractionType, str3, z15, z16, z17, pollStyleSet);
    }

    @NotNull
    /* renamed from: component1-3Eiw7ao  reason: not valid java name */
    public final String m675component13Eiw7ao() {
        return this.messageId;
    }

    public final String component10() {
        return this.myAvatarUrl;
    }

    @NotNull
    public final PollChatAnswerInteractionType component11() {
        return this.interactionType;
    }

    public final String component12() {
        return this.tapAccessibilityLabel;
    }

    public final boolean component13() {
        return this.shouldAnimateTransition;
    }

    public final boolean component14() {
        return this.shouldAnimateEmoji;
    }

    public final boolean component15() {
        return this.shouldAutoPlayGifs;
    }

    @NotNull
    public final PollStyleSet component16() {
        return this.styleSet;
    }

    @NotNull
    public final PollResources component2() {
        return this.resources;
    }

    @NotNull
    public final PollAnswer component3() {
        return this.answer;
    }

    @NotNull
    public final List<Attachment> component4() {
        return this.attachments;
    }

    public final boolean component5() {
        return this.canTapAnswers;
    }

    public final boolean component6() {
        return this.canSelectMultipleAnswers;
    }

    public final boolean component7() {
        return this.canShowVoteCounts;
    }

    public final boolean component8() {
        return this.hasVoted;
    }

    public final boolean component9() {
        return this.isExpired;
    }

    @NotNull
    /* renamed from: copy-VVrV5cY  reason: not valid java name */
    public final PollAnswerAccessory m676copyVVrV5cY(@NotNull String messageId, @NotNull PollResources resources, @NotNull PollAnswer answer, @NotNull List<Attachment> attachments, boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, String str, @NotNull PollChatAnswerInteractionType interactionType, String str2, boolean z15, boolean z16, boolean z17, @NotNull PollStyleSet styleSet) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(resources, "resources");
        Intrinsics.checkNotNullParameter(answer, "answer");
        Intrinsics.checkNotNullParameter(attachments, "attachments");
        Intrinsics.checkNotNullParameter(interactionType, "interactionType");
        Intrinsics.checkNotNullParameter(styleSet, "styleSet");
        return new PollAnswerAccessory(messageId, resources, answer, attachments, z10, z11, z12, z13, z14, str, interactionType, str2, z15, z16, z17, styleSet, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof PollAnswerAccessory) {
            PollAnswerAccessory pollAnswerAccessory = (PollAnswerAccessory) obj;
            return MessageId.m1087equalsimpl0(this.messageId, pollAnswerAccessory.messageId) && Intrinsics.areEqual(this.resources, pollAnswerAccessory.resources) && Intrinsics.areEqual(this.answer, pollAnswerAccessory.answer) && Intrinsics.areEqual(this.attachments, pollAnswerAccessory.attachments) && this.canTapAnswers == pollAnswerAccessory.canTapAnswers && this.canSelectMultipleAnswers == pollAnswerAccessory.canSelectMultipleAnswers && this.canShowVoteCounts == pollAnswerAccessory.canShowVoteCounts && this.hasVoted == pollAnswerAccessory.hasVoted && this.isExpired == pollAnswerAccessory.isExpired && Intrinsics.areEqual(this.myAvatarUrl, pollAnswerAccessory.myAvatarUrl) && this.interactionType == pollAnswerAccessory.interactionType && Intrinsics.areEqual(this.tapAccessibilityLabel, pollAnswerAccessory.tapAccessibilityLabel) && this.shouldAnimateTransition == pollAnswerAccessory.shouldAnimateTransition && this.shouldAnimateEmoji == pollAnswerAccessory.shouldAnimateEmoji && this.shouldAutoPlayGifs == pollAnswerAccessory.shouldAutoPlayGifs && Intrinsics.areEqual(this.styleSet, pollAnswerAccessory.styleSet);
        }
        return false;
    }

    @NotNull
    public final PollAnswer getAnswer() {
        return this.answer;
    }

    @Override // com.discord.chat.bridge.polls.IPollStyleSet
    public int getAnswerBackgroundColor() {
        return this.styleSet.getAnswerBackgroundColor();
    }

    @Override // com.discord.chat.bridge.polls.IPollStyleSet
    public int getAnswerFillColor() {
        return this.styleSet.getAnswerFillColor();
    }

    @NotNull
    public final List<Attachment> getAttachments() {
        return this.attachments;
    }

    @Override // com.discord.chat.bridge.polls.IPollStyleSet
    public int getBorderColor() {
        return this.styleSet.getBorderColor();
    }

    @Override // com.discord.chat.bridge.polls.IPollStyleSet
    public int getBorderWidthPx() {
        return this.styleSet.getBorderWidthPx();
    }

    public final boolean getCanSelectMultipleAnswers() {
        return this.canSelectMultipleAnswers;
    }

    public final boolean getCanShowVoteCounts() {
        return this.canShowVoteCounts;
    }

    public final boolean getCanTapAnswers() {
        return this.canTapAnswers;
    }

    @Override // com.discord.chat.bridge.polls.IPollStyleSet
    public int getFillColor() {
        return this.styleSet.getFillColor();
    }

    public final boolean getHasVoted() {
        return this.hasVoted;
    }

    @NotNull
    public final PollChatAnswerInteractionType getInteractionType() {
        return this.interactionType;
    }

    @Override // com.discord.chat.bridge.polls.IPollStyleSet
    public int getLabelColor() {
        return this.styleSet.getLabelColor();
    }

    @NotNull
    /* renamed from: getMessageId-3Eiw7ao  reason: not valid java name */
    public final String m677getMessageId3Eiw7ao() {
        return this.messageId;
    }

    public final String getMyAvatarUrl() {
        return this.myAvatarUrl;
    }

    @Override // com.discord.chat.bridge.polls.IPollStyleSet
    public int getRadioBackgroundColor() {
        return this.styleSet.getRadioBackgroundColor();
    }

    @Override // com.discord.chat.bridge.polls.IPollStyleSet
    public int getRadioForegroundColor() {
        return this.styleSet.getRadioForegroundColor();
    }

    @NotNull
    public final PollResources getResources() {
        return this.resources;
    }

    public final boolean getShouldAnimateEmoji() {
        return this.shouldAnimateEmoji;
    }

    public final boolean getShouldAnimateTransition() {
        return this.shouldAnimateTransition;
    }

    public final boolean getShouldAutoPlayGifs() {
        return this.shouldAutoPlayGifs;
    }

    @NotNull
    public final PollStyleSet getStyleSet() {
        return this.styleSet;
    }

    public final String getTapAccessibilityLabel() {
        return this.tapAccessibilityLabel;
    }

    public int hashCode() {
        int m1088hashCodeimpl = ((((((((((((((((MessageId.m1088hashCodeimpl(this.messageId) * 31) + this.resources.hashCode()) * 31) + this.answer.hashCode()) * 31) + this.attachments.hashCode()) * 31) + Boolean.hashCode(this.canTapAnswers)) * 31) + Boolean.hashCode(this.canSelectMultipleAnswers)) * 31) + Boolean.hashCode(this.canShowVoteCounts)) * 31) + Boolean.hashCode(this.hasVoted)) * 31) + Boolean.hashCode(this.isExpired)) * 31;
        String str = this.myAvatarUrl;
        int hashCode = (((m1088hashCodeimpl + (str == null ? 0 : str.hashCode())) * 31) + this.interactionType.hashCode()) * 31;
        String str2 = this.tapAccessibilityLabel;
        return ((((((((hashCode + (str2 != null ? str2.hashCode() : 0)) * 31) + Boolean.hashCode(this.shouldAnimateTransition)) * 31) + Boolean.hashCode(this.shouldAnimateEmoji)) * 31) + Boolean.hashCode(this.shouldAutoPlayGifs)) * 31) + this.styleSet.hashCode();
    }

    public final boolean isExpired() {
        return this.isExpired;
    }

    @NotNull
    public String toString() {
        String m1090toStringimpl = MessageId.m1090toStringimpl(this.messageId);
        PollResources pollResources = this.resources;
        PollAnswer pollAnswer = this.answer;
        List<Attachment> list = this.attachments;
        boolean z10 = this.canTapAnswers;
        boolean z11 = this.canSelectMultipleAnswers;
        boolean z12 = this.canShowVoteCounts;
        boolean z13 = this.hasVoted;
        boolean z14 = this.isExpired;
        String str = this.myAvatarUrl;
        PollChatAnswerInteractionType pollChatAnswerInteractionType = this.interactionType;
        String str2 = this.tapAccessibilityLabel;
        boolean z15 = this.shouldAnimateTransition;
        boolean z16 = this.shouldAnimateEmoji;
        boolean z17 = this.shouldAutoPlayGifs;
        PollStyleSet pollStyleSet = this.styleSet;
        return "PollAnswerAccessory(messageId=" + m1090toStringimpl + ", resources=" + pollResources + ", answer=" + pollAnswer + ", attachments=" + list + ", canTapAnswers=" + z10 + ", canSelectMultipleAnswers=" + z11 + ", canShowVoteCounts=" + z12 + ", hasVoted=" + z13 + ", isExpired=" + z14 + ", myAvatarUrl=" + str + ", interactionType=" + pollChatAnswerInteractionType + ", tapAccessibilityLabel=" + str2 + ", shouldAnimateTransition=" + z15 + ", shouldAnimateEmoji=" + z16 + ", shouldAutoPlayGifs=" + z17 + ", styleSet=" + pollStyleSet + ")";
    }

    private PollAnswerAccessory(String messageId, PollResources resources, PollAnswer answer, List<Attachment> attachments, boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, String str, PollChatAnswerInteractionType interactionType, String str2, boolean z15, boolean z16, boolean z17, PollStyleSet styleSet) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(resources, "resources");
        Intrinsics.checkNotNullParameter(answer, "answer");
        Intrinsics.checkNotNullParameter(attachments, "attachments");
        Intrinsics.checkNotNullParameter(interactionType, "interactionType");
        Intrinsics.checkNotNullParameter(styleSet, "styleSet");
        this.messageId = messageId;
        this.resources = resources;
        this.answer = answer;
        this.attachments = attachments;
        this.canTapAnswers = z10;
        this.canSelectMultipleAnswers = z11;
        this.canShowVoteCounts = z12;
        this.hasVoted = z13;
        this.isExpired = z14;
        this.myAvatarUrl = str;
        this.interactionType = interactionType;
        this.tapAccessibilityLabel = str2;
        this.shouldAnimateTransition = z15;
        this.shouldAnimateEmoji = z16;
        this.shouldAutoPlayGifs = z17;
        this.styleSet = styleSet;
        String m1090toStringimpl = MessageId.m1090toStringimpl(messageId);
        String answerId = answer.getAnswerId();
        this.itemId = IdUtilsKt.convertToId(m1090toStringimpl + ":" + answerId);
    }

    @Override // com.discord.recycler_view.utils.ItemDiffableType
    @NotNull
    public Long getItemId() {
        return Long.valueOf(this.itemId);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ PollAnswerAccessory(java.lang.String r22, com.discord.chat.bridge.polls.PollResources r23, com.discord.chat.bridge.polls.PollAnswer r24, java.util.List r25, boolean r26, boolean r27, boolean r28, boolean r29, boolean r30, java.lang.String r31, com.discord.chat.bridge.polls.PollChatAnswerInteractionType r32, java.lang.String r33, boolean r34, boolean r35, boolean r36, com.discord.chat.bridge.polls.PollStyleSet r37, int r38, kotlin.jvm.internal.DefaultConstructorMarker r39) {
        /*
            r21 = this;
            r0 = r38
            r1 = r0 & 8192(0x2000, float:1.14794E-41)
            r2 = 0
            if (r1 == 0) goto La
            r17 = r2
            goto Lc
        La:
            r17 = r35
        Lc:
            r1 = r0 & 16384(0x4000, float:2.2959E-41)
            if (r1 == 0) goto L13
            r18 = r2
            goto L15
        L13:
            r18 = r36
        L15:
            r1 = 32768(0x8000, float:4.5918E-41)
            r0 = r0 & r1
            if (r0 == 0) goto L34
            java.util.Map r0 = r23.getStyles()
            java.lang.String r1 = r24.getStyle()
            java.lang.Object r0 = r0.get(r1)
            com.discord.chat.bridge.polls.PollStyleSet r0 = (com.discord.chat.bridge.polls.PollStyleSet) r0
            if (r0 != 0) goto L31
            com.discord.chat.bridge.polls.PollStyleSet$Companion r0 = com.discord.chat.bridge.polls.PollStyleSet.Companion
            com.discord.chat.bridge.polls.PollStyleSet r0 = r0.getDEFAULT()
        L31:
            r19 = r0
            goto L36
        L34:
            r19 = r37
        L36:
            r20 = 0
            r3 = r21
            r4 = r22
            r5 = r23
            r6 = r24
            r7 = r25
            r8 = r26
            r9 = r27
            r10 = r28
            r11 = r29
            r12 = r30
            r13 = r31
            r14 = r32
            r15 = r33
            r16 = r34
            r3.<init>(r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.presentation.message.messagepart.polls.PollAnswerAccessory.<init>(java.lang.String, com.discord.chat.bridge.polls.PollResources, com.discord.chat.bridge.polls.PollAnswer, java.util.List, boolean, boolean, boolean, boolean, boolean, java.lang.String, com.discord.chat.bridge.polls.PollChatAnswerInteractionType, java.lang.String, boolean, boolean, boolean, com.discord.chat.bridge.polls.PollStyleSet, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
    }
}
