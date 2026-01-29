package com.discord.chat.presentation.message.messagepart;

import android.content.Context;
import com.discord.chat.bridge.Message;
import com.discord.chat.bridge.MessageKt;
import com.discord.chat.bridge.attachment.Attachment;
import com.discord.chat.bridge.polls.IPollStyleSet;
import com.discord.chat.bridge.polls.PollAnswer;
import com.discord.chat.bridge.polls.PollChatAnswerInteractionType;
import com.discord.chat.bridge.polls.PollData;
import com.discord.chat.bridge.polls.PollResources;
import com.discord.chat.presentation.message.messagepart.polls.PollAnswerAccessory;
import com.discord.primitives.ChannelId;
import com.discord.primitives.MessageId;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.facebook.react.uimanager.ViewProps;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnection;
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u001c\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0014\b\u0086\b\u0018\u0000 A2\u00020\u00012\u00020\u0002:\u0001ABA\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\u0006\u0010\t\u001a\u00020\n\u0012\f\u0010\u000b\u001a\b\u0012\u0004\u0012\u00020\r0\f\u0012\b\b\u0002\u0010\u000e\u001a\u00020\u0002¢\u0006\u0004\b\u000f\u0010\u0010J\u0010\u0010\u001e\u001a\u00020\u0004HÆ\u0003¢\u0006\u0004\b\u001f\u0010\u0012J\u0010\u0010 \u001a\u00020\u0006HÆ\u0003¢\u0006\u0004\b!\u0010\u0015J\u000b\u0010\"\u001a\u0004\u0018\u00010\bHÆ\u0003J\t\u0010#\u001a\u00020\nHÆ\u0003J\u000f\u0010$\u001a\b\u0012\u0004\u0012\u00020\r0\fHÆ\u0003J\t\u0010%\u001a\u00020\u0002HÆ\u0003JT\u0010&\u001a\u00020\u00002\b\b\u0002\u0010\u0003\u001a\u00020\u00042\b\b\u0002\u0010\u0005\u001a\u00020\u00062\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\b2\b\b\u0002\u0010\t\u001a\u00020\n2\u000e\b\u0002\u0010\u000b\u001a\b\u0012\u0004\u0012\u00020\r0\f2\b\b\u0002\u0010\u000e\u001a\u00020\u0002HÆ\u0001¢\u0006\u0004\b'\u0010(J\u0013\u0010)\u001a\u00020*2\b\u0010+\u001a\u0004\u0018\u00010,HÖ\u0003J\t\u0010-\u001a\u00020.HÖ\u0001J\t\u0010/\u001a\u00020\bHÖ\u0001R\u0013\u0010\u0003\u001a\u00020\u0004¢\u0006\n\n\u0002\u0010\u0013\u001a\u0004\b\u0011\u0010\u0012R\u0016\u0010\u0005\u001a\u00020\u0006X\u0096\u0004¢\u0006\n\n\u0002\u0010\u0016\u001a\u0004\b\u0014\u0010\u0015R\u0013\u0010\u0007\u001a\u0004\u0018\u00010\b¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0015R\u0011\u0010\t\u001a\u00020\n¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0019R\u0017\u0010\u000b\u001a\b\u0012\u0004\u0012\u00020\r0\f¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u001bR\u0011\u0010\u000e\u001a\u00020\u0002¢\u0006\b\n\u0000\u001a\u0004\b\u001c\u0010\u001dR\u0014\u00100\u001a\u00020.8WX\u0096\u0005¢\u0006\u0006\u001a\u0004\b1\u00102R\u0014\u00103\u001a\u00020.8WX\u0096\u0005¢\u0006\u0006\u001a\u0004\b4\u00102R\u0014\u00105\u001a\u00020.8WX\u0096\u0005¢\u0006\u0006\u001a\u0004\b6\u00102R\u0012\u00107\u001a\u00020.X\u0096\u0005¢\u0006\u0006\u001a\u0004\b8\u00102R\u0014\u00109\u001a\u00020.8WX\u0096\u0005¢\u0006\u0006\u001a\u0004\b:\u00102R\u0014\u0010;\u001a\u00020.8WX\u0096\u0005¢\u0006\u0006\u001a\u0004\b<\u00102R\u0014\u0010=\u001a\u00020.8WX\u0096\u0005¢\u0006\u0006\u001a\u0004\b>\u00102R\u0014\u0010?\u001a\u00020.8WX\u0096\u0005¢\u0006\u0006\u001a\u0004\b@\u00102¨\u0006B"}, d2 = {"Lcom/discord/chat/presentation/message/messagepart/PollMessageAccessory;", "Lcom/discord/chat/presentation/message/messagepart/MessageAccessory;", "Lcom/discord/chat/bridge/polls/IPollStyleSet;", "channelId", "Lcom/discord/primitives/ChannelId;", "messageId", "Lcom/discord/primitives/MessageId;", "myAvatarUrl", "", "data", "Lcom/discord/chat/bridge/polls/PollData;", "answers", "", "Lcom/discord/chat/presentation/message/messagepart/polls/PollAnswerAccessory;", "containerStyleSet", "<init>", "(JLjava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/polls/PollData;Ljava/util/List;Lcom/discord/chat/bridge/polls/IPollStyleSet;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getChannelId-o4g7jtM", "()J", "J", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getMyAvatarUrl", "getData", "()Lcom/discord/chat/bridge/polls/PollData;", "getAnswers", "()Ljava/util/List;", "getContainerStyleSet", "()Lcom/discord/chat/bridge/polls/IPollStyleSet;", "component1", "component1-o4g7jtM", "component2", "component2-3Eiw7ao", "component3", "component4", "component5", "component6", "copy", "copy-j8a4Y88", "(JLjava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/polls/PollData;Ljava/util/List;Lcom/discord/chat/bridge/polls/IPollStyleSet;)Lcom/discord/chat/presentation/message/messagepart/PollMessageAccessory;", "equals", "", "other", "", "hashCode", "", "toString", "answerBackgroundColor", "getAnswerBackgroundColor", "()I", "answerFillColor", "getAnswerFillColor", ViewProps.BORDER_COLOR, "getBorderColor", "borderWidthPx", "getBorderWidthPx", "fillColor", "getFillColor", "labelColor", "getLabelColor", "radioBackgroundColor", "getRadioBackgroundColor", "radioForegroundColor", "getRadioForegroundColor", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class PollMessageAccessory extends MessageAccessory implements IPollStyleSet {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final List<PollAnswerAccessory> answers;
    private final long channelId;
    @NotNull
    private final IPollStyleSet containerStyleSet;
    @NotNull
    private final PollData data;
    @NotNull
    private final String messageId;
    private final String myAvatarUrl;

    @Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u001e\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000b¨\u0006\f"}, d2 = {"Lcom/discord/chat/presentation/message/messagepart/PollMessageAccessory$Companion;", "", "<init>", "()V", "create", "Lcom/discord/chat/presentation/message/messagepart/PollMessageAccessory;", "context", "Landroid/content/Context;", "message", "Lcom/discord/chat/bridge/Message;", "pollData", "Lcom/discord/chat/bridge/polls/PollData;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nPollMessageAccessory.kt\nKotlin\n*S Kotlin\n*F\n+ 1 PollMessageAccessory.kt\ncom/discord/chat/presentation/message/messagepart/PollMessageAccessory$Companion\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,59:1\n1563#2:60\n1634#2,2:61\n774#2:63\n865#2,2:64\n1636#2:66\n*S KotlinDebug\n*F\n+ 1 PollMessageAccessory.kt\ncom/discord/chat/presentation/message/messagepart/PollMessageAccessory$Companion\n*L\n27#1:60\n27#1:61,2\n43#1:63\n43#1:64,2\n27#1:66\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final PollMessageAccessory create(@NotNull Context context, @NotNull Message message, @NotNull PollData pollData) {
            boolean z10;
            List l10;
            Intrinsics.checkNotNullParameter(context, "context");
            Intrinsics.checkNotNullParameter(message, "message");
            Intrinsics.checkNotNullParameter(pollData, "pollData");
            String inflateUrl = ReactAssetUtilsKt.inflateUrl(context, pollData.getMyAvatarUrl());
            List<PollAnswer> answers = pollData.getAnswers();
            ArrayList arrayList = new ArrayList(CollectionsKt.w(answers, 10));
            for (PollAnswer pollAnswer : answers) {
                String m237getId3Eiw7ao = message.m237getId3Eiw7ao();
                PollResources resources = pollData.getResources();
                boolean canTapAnswers = pollData.getCanTapAnswers();
                boolean canSelectMultipleAnswers = pollData.getCanSelectMultipleAnswers();
                boolean canShowVoteCounts = pollData.getCanShowVoteCounts();
                boolean hasVoted = pollData.getHasVoted();
                boolean isExpired = pollData.isExpired();
                PollChatAnswerInteractionType answersInteraction = pollData.getAnswersInteraction();
                String answerTapAccessibilityLabel = pollData.getAnswerTapAccessibilityLabel();
                Boolean shouldAnimateTransition = pollAnswer.getShouldAnimateTransition();
                if (shouldAnimateTransition != null) {
                    z10 = shouldAnimateTransition.booleanValue();
                } else {
                    z10 = false;
                }
                boolean z11 = z10;
                boolean shouldAnimateEmoji = MessageKt.shouldAnimateEmoji(message);
                boolean shouldAutoPlayGifs = MessageKt.shouldAutoPlayGifs(message);
                List<Attachment> attachments = message.getAttachments();
                if (attachments != null) {
                    l10 = new ArrayList();
                    for (Object obj : attachments) {
                        if (CollectionsKt.d0(pollAnswer.getPollMedia().getAttachmentIds(), ((Attachment) obj).getId())) {
                            l10.add(obj);
                        }
                    }
                } else {
                    l10 = CollectionsKt.l();
                }
                arrayList.add(new PollAnswerAccessory(m237getId3Eiw7ao, resources, pollAnswer, l10, canTapAnswers, canSelectMultipleAnswers, canShowVoteCounts, hasVoted, isExpired, inflateUrl, answersInteraction, answerTapAccessibilityLabel, z11, shouldAnimateEmoji, shouldAutoPlayGifs, null, PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS, null));
            }
            return new PollMessageAccessory(message.m234getChannelIdo4g7jtM(), message.m237getId3Eiw7ao(), inflateUrl, pollData, arrayList, null, 32, null);
        }

        private Companion() {
        }
    }

    public /* synthetic */ PollMessageAccessory(long j10, String str, String str2, PollData pollData, List list, IPollStyleSet iPollStyleSet, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, str, str2, pollData, list, iPollStyleSet);
    }

    /* renamed from: copy-j8a4Y88$default  reason: not valid java name */
    public static /* synthetic */ PollMessageAccessory m626copyj8a4Y88$default(PollMessageAccessory pollMessageAccessory, long j10, String str, String str2, PollData pollData, List list, IPollStyleSet iPollStyleSet, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            j10 = pollMessageAccessory.channelId;
        }
        long j11 = j10;
        if ((i10 & 2) != 0) {
            str = pollMessageAccessory.messageId;
        }
        String str3 = str;
        if ((i10 & 4) != 0) {
            str2 = pollMessageAccessory.myAvatarUrl;
        }
        String str4 = str2;
        if ((i10 & 8) != 0) {
            pollData = pollMessageAccessory.data;
        }
        PollData pollData2 = pollData;
        List<PollAnswerAccessory> list2 = list;
        if ((i10 & 16) != 0) {
            list2 = pollMessageAccessory.answers;
        }
        List list3 = list2;
        if ((i10 & 32) != 0) {
            iPollStyleSet = pollMessageAccessory.containerStyleSet;
        }
        return pollMessageAccessory.m629copyj8a4Y88(j11, str3, str4, pollData2, list3, iPollStyleSet);
    }

    /* renamed from: component1-o4g7jtM  reason: not valid java name */
    public final long m627component1o4g7jtM() {
        return this.channelId;
    }

    @NotNull
    /* renamed from: component2-3Eiw7ao  reason: not valid java name */
    public final String m628component23Eiw7ao() {
        return this.messageId;
    }

    public final String component3() {
        return this.myAvatarUrl;
    }

    @NotNull
    public final PollData component4() {
        return this.data;
    }

    @NotNull
    public final List<PollAnswerAccessory> component5() {
        return this.answers;
    }

    @NotNull
    public final IPollStyleSet component6() {
        return this.containerStyleSet;
    }

    @NotNull
    /* renamed from: copy-j8a4Y88  reason: not valid java name */
    public final PollMessageAccessory m629copyj8a4Y88(long j10, @NotNull String messageId, String str, @NotNull PollData data, @NotNull List<PollAnswerAccessory> answers, @NotNull IPollStyleSet containerStyleSet) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(data, "data");
        Intrinsics.checkNotNullParameter(answers, "answers");
        Intrinsics.checkNotNullParameter(containerStyleSet, "containerStyleSet");
        return new PollMessageAccessory(j10, messageId, str, data, answers, containerStyleSet, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof PollMessageAccessory) {
            PollMessageAccessory pollMessageAccessory = (PollMessageAccessory) obj;
            return ChannelId.m1062equalsimpl0(this.channelId, pollMessageAccessory.channelId) && MessageId.m1088equalsimpl0(this.messageId, pollMessageAccessory.messageId) && Intrinsics.areEqual(this.myAvatarUrl, pollMessageAccessory.myAvatarUrl) && Intrinsics.areEqual(this.data, pollMessageAccessory.data) && Intrinsics.areEqual(this.answers, pollMessageAccessory.answers) && Intrinsics.areEqual(this.containerStyleSet, pollMessageAccessory.containerStyleSet);
        }
        return false;
    }

    @Override // com.discord.chat.bridge.polls.IPollStyleSet
    public int getAnswerBackgroundColor() {
        return this.containerStyleSet.getAnswerBackgroundColor();
    }

    @Override // com.discord.chat.bridge.polls.IPollStyleSet
    public int getAnswerFillColor() {
        return this.containerStyleSet.getAnswerFillColor();
    }

    @NotNull
    public final List<PollAnswerAccessory> getAnswers() {
        return this.answers;
    }

    @Override // com.discord.chat.bridge.polls.IPollStyleSet
    public int getBorderColor() {
        return this.containerStyleSet.getBorderColor();
    }

    @Override // com.discord.chat.bridge.polls.IPollStyleSet
    public int getBorderWidthPx() {
        return this.containerStyleSet.getBorderWidthPx();
    }

    /* renamed from: getChannelId-o4g7jtM  reason: not valid java name */
    public final long m630getChannelIdo4g7jtM() {
        return this.channelId;
    }

    @NotNull
    public final IPollStyleSet getContainerStyleSet() {
        return this.containerStyleSet;
    }

    @NotNull
    public final PollData getData() {
        return this.data;
    }

    @Override // com.discord.chat.bridge.polls.IPollStyleSet
    public int getFillColor() {
        return this.containerStyleSet.getFillColor();
    }

    @Override // com.discord.chat.bridge.polls.IPollStyleSet
    public int getLabelColor() {
        return this.containerStyleSet.getLabelColor();
    }

    @Override // com.discord.chat.presentation.message.messagepart.MessageAccessory
    @NotNull
    /* renamed from: getMessageId-3Eiw7ao */
    public String mo536getMessageId3Eiw7ao() {
        return this.messageId;
    }

    public final String getMyAvatarUrl() {
        return this.myAvatarUrl;
    }

    @Override // com.discord.chat.bridge.polls.IPollStyleSet
    public int getRadioBackgroundColor() {
        return this.containerStyleSet.getRadioBackgroundColor();
    }

    @Override // com.discord.chat.bridge.polls.IPollStyleSet
    public int getRadioForegroundColor() {
        return this.containerStyleSet.getRadioForegroundColor();
    }

    public int hashCode() {
        int m1063hashCodeimpl = ((ChannelId.m1063hashCodeimpl(this.channelId) * 31) + MessageId.m1089hashCodeimpl(this.messageId)) * 31;
        String str = this.myAvatarUrl;
        return ((((((m1063hashCodeimpl + (str == null ? 0 : str.hashCode())) * 31) + this.data.hashCode()) * 31) + this.answers.hashCode()) * 31) + this.containerStyleSet.hashCode();
    }

    @NotNull
    public String toString() {
        String m1065toStringimpl = ChannelId.m1065toStringimpl(this.channelId);
        String m1091toStringimpl = MessageId.m1091toStringimpl(this.messageId);
        String str = this.myAvatarUrl;
        PollData pollData = this.data;
        List<PollAnswerAccessory> list = this.answers;
        IPollStyleSet iPollStyleSet = this.containerStyleSet;
        return "PollMessageAccessory(channelId=" + m1065toStringimpl + ", messageId=" + m1091toStringimpl + ", myAvatarUrl=" + str + ", data=" + pollData + ", answers=" + list + ", containerStyleSet=" + iPollStyleSet + ")";
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ PollMessageAccessory(long r11, java.lang.String r13, java.lang.String r14, com.discord.chat.bridge.polls.PollData r15, java.util.List r16, com.discord.chat.bridge.polls.IPollStyleSet r17, int r18, kotlin.jvm.internal.DefaultConstructorMarker r19) {
        /*
            r10 = this;
            r0 = r18 & 32
            if (r0 == 0) goto L21
            com.discord.chat.bridge.polls.PollResources r0 = r15.getResources()
            java.util.Map r0 = r0.getStyles()
            java.lang.String r1 = r15.getContainerStyle()
            java.lang.Object r0 = r0.get(r1)
            com.discord.chat.bridge.polls.PollStyleSet r0 = (com.discord.chat.bridge.polls.PollStyleSet) r0
            if (r0 == 0) goto L19
            goto L1f
        L19:
            com.discord.chat.bridge.polls.PollStyleSet$Companion r0 = com.discord.chat.bridge.polls.PollStyleSet.Companion
            com.discord.chat.bridge.polls.PollStyleSet r0 = r0.getDEFAULT()
        L1f:
            r8 = r0
            goto L23
        L21:
            r8 = r17
        L23:
            r9 = 0
            r1 = r10
            r2 = r11
            r4 = r13
            r5 = r14
            r6 = r15
            r7 = r16
            r1.<init>(r2, r4, r5, r6, r7, r8, r9)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.presentation.message.messagepart.PollMessageAccessory.<init>(long, java.lang.String, java.lang.String, com.discord.chat.bridge.polls.PollData, java.util.List, com.discord.chat.bridge.polls.IPollStyleSet, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    private PollMessageAccessory(long j10, String messageId, String str, PollData data, List<PollAnswerAccessory> answers, IPollStyleSet containerStyleSet) {
        super(messageId, "poll", false, 4, null);
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(data, "data");
        Intrinsics.checkNotNullParameter(answers, "answers");
        Intrinsics.checkNotNullParameter(containerStyleSet, "containerStyleSet");
        this.channelId = j10;
        this.messageId = messageId;
        this.myAvatarUrl = str;
        this.data = data;
        this.answers = answers;
        this.containerStyleSet = containerStyleSet;
    }
}
