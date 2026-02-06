package com.discord.chat.bridge.polls;

import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.bridge.polls.PollChatAnswerInteractionType;
import com.discord.chat.bridge.polls.PollData;
import com.discord.chat.bridge.polls.PollLayoutType;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import ft.m;
import java.util.List;
import jt.f;
import jt.n2;
import jt.v1;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnection;
import qr.l;
import qr.o;
@m
@Metadata(d1 = {"\u0000f\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b0\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 Z2\u00020\u0001:\u0002YZB±\u0001\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\f\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\b0\u0007\u0012\u0006\u0010\t\u001a\u00020\n\u0012\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\f\u0012\u0006\u0010\r\u001a\u00020\u000e\u0012\b\b\u0002\u0010\u000f\u001a\u00020\u0010\u0012\u0006\u0010\u0011\u001a\u00020\u0010\u0012\u0006\u0010\u0012\u001a\u00020\u0010\u0012\u0006\u0010\u0013\u001a\u00020\u0010\u0012\u0006\u0010\u0014\u001a\u00020\u0010\u0012\b\b\u0002\u0010\u0015\u001a\u00020\f\u0012\n\b\u0002\u0010\u0016\u001a\u0004\u0018\u00010\f\u0012\n\b\u0002\u0010\u0017\u001a\u0004\u0018\u00010\u0018\u0012\n\b\u0002\u0010\u0019\u001a\u0004\u0018\u00010\u0018\u0012\n\b\u0002\u0010\u001a\u001a\u0004\u0018\u00010\u0018\u0012\n\b\u0002\u0010\u001b\u001a\u0004\u0018\u00010\f¢\u0006\u0004\b\u001c\u0010\u001dBÁ\u0001\b\u0010\u0012\u0006\u0010\u001e\u001a\u00020\u001f\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\u000e\u0010\u0006\u001a\n\u0012\u0004\u0012\u00020\b\u0018\u00010\u0007\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u000e\u0012\u0006\u0010\u000f\u001a\u00020\u0010\u0012\u0006\u0010\u0011\u001a\u00020\u0010\u0012\u0006\u0010\u0012\u001a\u00020\u0010\u0012\u0006\u0010\u0013\u001a\u00020\u0010\u0012\u0006\u0010\u0014\u001a\u00020\u0010\u0012\b\u0010\u0015\u001a\u0004\u0018\u00010\f\u0012\b\u0010\u0016\u001a\u0004\u0018\u00010\f\u0012\b\u0010\u0017\u001a\u0004\u0018\u00010\u0018\u0012\b\u0010\u0019\u001a\u0004\u0018\u00010\u0018\u0012\b\u0010\u001a\u001a\u0004\u0018\u00010\u0018\u0012\b\u0010\u001b\u001a\u0004\u0018\u00010\f\u0012\b\u0010 \u001a\u0004\u0018\u00010!¢\u0006\u0004\b\u001c\u0010\"J\t\u0010;\u001a\u00020\u0003HÆ\u0003J\t\u0010<\u001a\u00020\u0005HÆ\u0003J\u000f\u0010=\u001a\b\u0012\u0004\u0012\u00020\b0\u0007HÆ\u0003J\t\u0010>\u001a\u00020\nHÆ\u0003J\u000b\u0010?\u001a\u0004\u0018\u00010\fHÆ\u0003J\t\u0010@\u001a\u00020\u000eHÆ\u0003J\t\u0010A\u001a\u00020\u0010HÆ\u0003J\t\u0010B\u001a\u00020\u0010HÆ\u0003J\t\u0010C\u001a\u00020\u0010HÆ\u0003J\t\u0010D\u001a\u00020\u0010HÆ\u0003J\t\u0010E\u001a\u00020\u0010HÆ\u0003J\t\u0010F\u001a\u00020\fHÆ\u0003J\u000b\u0010G\u001a\u0004\u0018\u00010\fHÆ\u0003J\u000b\u0010H\u001a\u0004\u0018\u00010\u0018HÆ\u0003J\u000b\u0010I\u001a\u0004\u0018\u00010\u0018HÆ\u0003J\u000b\u0010J\u001a\u0004\u0018\u00010\u0018HÆ\u0003J\u000b\u0010K\u001a\u0004\u0018\u00010\fHÆ\u0003JÅ\u0001\u0010L\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\u000e\b\u0002\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\b0\u00072\b\b\u0002\u0010\t\u001a\u00020\n2\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\f2\b\b\u0002\u0010\r\u001a\u00020\u000e2\b\b\u0002\u0010\u000f\u001a\u00020\u00102\b\b\u0002\u0010\u0011\u001a\u00020\u00102\b\b\u0002\u0010\u0012\u001a\u00020\u00102\b\b\u0002\u0010\u0013\u001a\u00020\u00102\b\b\u0002\u0010\u0014\u001a\u00020\u00102\b\b\u0002\u0010\u0015\u001a\u00020\f2\n\b\u0002\u0010\u0016\u001a\u0004\u0018\u00010\f2\n\b\u0002\u0010\u0017\u001a\u0004\u0018\u00010\u00182\n\b\u0002\u0010\u0019\u001a\u0004\u0018\u00010\u00182\n\b\u0002\u0010\u001a\u001a\u0004\u0018\u00010\u00182\n\b\u0002\u0010\u001b\u001a\u0004\u0018\u00010\fHÆ\u0001J\u0013\u0010M\u001a\u00020\u00102\b\u0010N\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010O\u001a\u00020\u001fHÖ\u0001J\t\u0010P\u001a\u00020\fHÖ\u0001J%\u0010Q\u001a\u00020R2\u0006\u0010S\u001a\u00020\u00002\u0006\u0010T\u001a\u00020U2\u0006\u0010V\u001a\u00020WH\u0001¢\u0006\u0002\bXR\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b#\u0010$R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b%\u0010&R\u0017\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\b0\u0007¢\u0006\b\n\u0000\u001a\u0004\b'\u0010(R\u0011\u0010\t\u001a\u00020\n¢\u0006\b\n\u0000\u001a\u0004\b)\u0010*R\u0013\u0010\u000b\u001a\u0004\u0018\u00010\f¢\u0006\b\n\u0000\u001a\u0004\b+\u0010,R\u0011\u0010\r\u001a\u00020\u000e¢\u0006\b\n\u0000\u001a\u0004\b-\u0010.R\u0011\u0010\u000f\u001a\u00020\u0010¢\u0006\b\n\u0000\u001a\u0004\b/\u00100R\u0011\u0010\u0011\u001a\u00020\u0010¢\u0006\b\n\u0000\u001a\u0004\b1\u00100R\u0011\u0010\u0012\u001a\u00020\u0010¢\u0006\b\n\u0000\u001a\u0004\b2\u00100R\u0011\u0010\u0013\u001a\u00020\u0010¢\u0006\b\n\u0000\u001a\u0004\b3\u00100R\u0011\u0010\u0014\u001a\u00020\u0010¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u00100R\u0011\u0010\u0015\u001a\u00020\f¢\u0006\b\n\u0000\u001a\u0004\b4\u0010,R\u0013\u0010\u0016\u001a\u0004\u0018\u00010\f¢\u0006\b\n\u0000\u001a\u0004\b5\u0010,R\u0013\u0010\u0017\u001a\u0004\u0018\u00010\u0018¢\u0006\b\n\u0000\u001a\u0004\b6\u00107R\u0013\u0010\u0019\u001a\u0004\u0018\u00010\u0018¢\u0006\b\n\u0000\u001a\u0004\b8\u00107R\u0013\u0010\u001a\u001a\u0004\u0018\u00010\u0018¢\u0006\b\n\u0000\u001a\u0004\b9\u00107R\u0013\u0010\u001b\u001a\u0004\u0018\u00010\f¢\u0006\b\n\u0000\u001a\u0004\b:\u0010,¨\u0006["}, d2 = {"Lcom/discord/chat/bridge/polls/PollData;", "", "resources", "Lcom/discord/chat/bridge/polls/PollResources;", "question", "Lcom/discord/chat/bridge/polls/PollMedia;", "answers", "", "Lcom/discord/chat/bridge/polls/PollAnswer;", "answersInteraction", "Lcom/discord/chat/bridge/polls/PollChatAnswerInteractionType;", "answerTapAccessibilityLabel", "", "layoutType", "Lcom/discord/chat/bridge/polls/PollLayoutType;", "canSelectMultipleAnswers", "", "canTapAnswers", "canShowVoteCounts", "hasVoted", "isExpired", "containerStyle", "myAvatarUrl", "secondaryAction", "Lcom/discord/chat/bridge/polls/PollAction;", "primaryAction", "tertiaryAction", "promptLabel", "<init>", "(Lcom/discord/chat/bridge/polls/PollResources;Lcom/discord/chat/bridge/polls/PollMedia;Ljava/util/List;Lcom/discord/chat/bridge/polls/PollChatAnswerInteractionType;Ljava/lang/String;Lcom/discord/chat/bridge/polls/PollLayoutType;ZZZZZLjava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/polls/PollAction;Lcom/discord/chat/bridge/polls/PollAction;Lcom/discord/chat/bridge/polls/PollAction;Ljava/lang/String;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILcom/discord/chat/bridge/polls/PollResources;Lcom/discord/chat/bridge/polls/PollMedia;Ljava/util/List;Lcom/discord/chat/bridge/polls/PollChatAnswerInteractionType;Ljava/lang/String;Lcom/discord/chat/bridge/polls/PollLayoutType;ZZZZZLjava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/polls/PollAction;Lcom/discord/chat/bridge/polls/PollAction;Lcom/discord/chat/bridge/polls/PollAction;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getResources", "()Lcom/discord/chat/bridge/polls/PollResources;", "getQuestion", "()Lcom/discord/chat/bridge/polls/PollMedia;", "getAnswers", "()Ljava/util/List;", "getAnswersInteraction", "()Lcom/discord/chat/bridge/polls/PollChatAnswerInteractionType;", "getAnswerTapAccessibilityLabel", "()Ljava/lang/String;", "getLayoutType", "()Lcom/discord/chat/bridge/polls/PollLayoutType;", "getCanSelectMultipleAnswers", "()Z", "getCanTapAnswers", "getCanShowVoteCounts", "getHasVoted", "getContainerStyle", "getMyAvatarUrl", "getSecondaryAction", "()Lcom/discord/chat/bridge/polls/PollAction;", "getPrimaryAction", "getTertiaryAction", "getPromptLabel", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "component12", "component13", "component14", "component15", "component16", "component17", "copy", "equals", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class PollData {
    private final String answerTapAccessibilityLabel;
    @NotNull
    private final List<PollAnswer> answers;
    @NotNull
    private final PollChatAnswerInteractionType answersInteraction;
    private final boolean canSelectMultipleAnswers;
    private final boolean canShowVoteCounts;
    private final boolean canTapAnswers;
    @NotNull
    private final String containerStyle;
    private final boolean hasVoted;
    private final boolean isExpired;
    @NotNull
    private final PollLayoutType layoutType;
    private final String myAvatarUrl;
    private final PollAction primaryAction;
    private final String promptLabel;
    @NotNull
    private final PollMedia question;
    @NotNull
    private final PollResources resources;
    private final PollAction secondaryAction;
    private final PollAction tertiaryAction;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Lazy[] $childSerializers = {null, null, l.b(o.f48044e, new Function0() { // from class: n6.c
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            KSerializer _childSerializers$_anonymous_;
            _childSerializers$_anonymous_ = PollData._childSerializers$_anonymous_();
            return _childSerializers$_anonymous_;
        }
    }), null, null, null, null, null, null, null, null, null, null, null, null, null, null};

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/polls/PollData$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/polls/PollData;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return PollData$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ PollData(int i10, PollResources pollResources, PollMedia pollMedia, List list, PollChatAnswerInteractionType pollChatAnswerInteractionType, String str, PollLayoutType pollLayoutType, boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, String str2, String str3, PollAction pollAction, PollAction pollAction2, PollAction pollAction3, String str4, SerializationConstructorMarker serializationConstructorMarker) {
        if (1967 != (i10 & 1967)) {
            v1.b(i10, 1967, PollData$$serializer.INSTANCE.getDescriptor());
        }
        this.resources = pollResources;
        this.question = pollMedia;
        this.answers = list;
        this.answersInteraction = pollChatAnswerInteractionType;
        if ((i10 & 16) == 0) {
            this.answerTapAccessibilityLabel = null;
        } else {
            this.answerTapAccessibilityLabel = str;
        }
        this.layoutType = pollLayoutType;
        if ((i10 & 64) == 0) {
            this.canSelectMultipleAnswers = false;
        } else {
            this.canSelectMultipleAnswers = z10;
        }
        this.canTapAnswers = z11;
        this.canShowVoteCounts = z12;
        this.hasVoted = z13;
        this.isExpired = z14;
        if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 0) {
            this.containerStyle = "normal";
        } else {
            this.containerStyle = str2;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 0) {
            this.myAvatarUrl = null;
        } else {
            this.myAvatarUrl = str3;
        }
        if ((i10 & 8192) == 0) {
            this.secondaryAction = null;
        } else {
            this.secondaryAction = pollAction;
        }
        if ((i10 & 16384) == 0) {
            this.primaryAction = null;
        } else {
            this.primaryAction = pollAction2;
        }
        if ((32768 & i10) == 0) {
            this.tertiaryAction = null;
        } else {
            this.tertiaryAction = pollAction3;
        }
        if ((i10 & 65536) == 0) {
            this.promptLabel = null;
        } else {
            this.promptLabel = str4;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return new f(PollAnswer$$serializer.INSTANCE);
    }

    public static /* synthetic */ PollData copy$default(PollData pollData, PollResources pollResources, PollMedia pollMedia, List list, PollChatAnswerInteractionType pollChatAnswerInteractionType, String str, PollLayoutType pollLayoutType, boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, String str2, String str3, PollAction pollAction, PollAction pollAction2, PollAction pollAction3, String str4, int i10, Object obj) {
        String str5;
        PollAction pollAction4;
        PollResources pollResources2;
        PollData pollData2;
        PollAction pollAction5;
        PollMedia pollMedia2;
        List list2;
        PollChatAnswerInteractionType pollChatAnswerInteractionType2;
        String str6;
        PollLayoutType pollLayoutType2;
        boolean z15;
        boolean z16;
        boolean z17;
        boolean z18;
        boolean z19;
        String str7;
        String str8;
        PollAction pollAction6;
        PollResources pollResources3 = (i10 & 1) != 0 ? pollData.resources : pollResources;
        PollMedia pollMedia3 = (i10 & 2) != 0 ? pollData.question : pollMedia;
        List list3 = (i10 & 4) != 0 ? pollData.answers : list;
        PollChatAnswerInteractionType pollChatAnswerInteractionType3 = (i10 & 8) != 0 ? pollData.answersInteraction : pollChatAnswerInteractionType;
        String str9 = (i10 & 16) != 0 ? pollData.answerTapAccessibilityLabel : str;
        PollLayoutType pollLayoutType3 = (i10 & 32) != 0 ? pollData.layoutType : pollLayoutType;
        boolean z20 = (i10 & 64) != 0 ? pollData.canSelectMultipleAnswers : z10;
        boolean z21 = (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? pollData.canTapAnswers : z11;
        boolean z22 = (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? pollData.canShowVoteCounts : z12;
        boolean z23 = (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? pollData.hasVoted : z13;
        boolean z24 = (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? pollData.isExpired : z14;
        String str10 = (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? pollData.containerStyle : str2;
        String str11 = (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? pollData.myAvatarUrl : str3;
        PollAction pollAction7 = (i10 & 8192) != 0 ? pollData.secondaryAction : pollAction;
        PollResources pollResources4 = pollResources3;
        PollAction pollAction8 = (i10 & 16384) != 0 ? pollData.primaryAction : pollAction2;
        PollAction pollAction9 = (i10 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? pollData.tertiaryAction : pollAction3;
        if ((i10 & 65536) != 0) {
            pollAction4 = pollAction9;
            str5 = pollData.promptLabel;
            pollAction5 = pollAction8;
            pollMedia2 = pollMedia3;
            list2 = list3;
            pollChatAnswerInteractionType2 = pollChatAnswerInteractionType3;
            str6 = str9;
            pollLayoutType2 = pollLayoutType3;
            z15 = z20;
            z16 = z21;
            z17 = z22;
            z18 = z23;
            z19 = z24;
            str7 = str10;
            str8 = str11;
            pollAction6 = pollAction7;
            pollResources2 = pollResources4;
            pollData2 = pollData;
        } else {
            str5 = str4;
            pollAction4 = pollAction9;
            pollResources2 = pollResources4;
            pollData2 = pollData;
            pollAction5 = pollAction8;
            pollMedia2 = pollMedia3;
            list2 = list3;
            pollChatAnswerInteractionType2 = pollChatAnswerInteractionType3;
            str6 = str9;
            pollLayoutType2 = pollLayoutType3;
            z15 = z20;
            z16 = z21;
            z17 = z22;
            z18 = z23;
            z19 = z24;
            str7 = str10;
            str8 = str11;
            pollAction6 = pollAction7;
        }
        return pollData2.copy(pollResources2, pollMedia2, list2, pollChatAnswerInteractionType2, str6, pollLayoutType2, z15, z16, z17, z18, z19, str7, str8, pollAction6, pollAction5, pollAction4, str5);
    }

    public static final /* synthetic */ void write$Self$chat_release(PollData pollData, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        Lazy[] lazyArr = $childSerializers;
        compositeEncoder.s(serialDescriptor, 0, PollResources$$serializer.INSTANCE, pollData.resources);
        compositeEncoder.s(serialDescriptor, 1, PollMedia$$serializer.INSTANCE, pollData.question);
        compositeEncoder.s(serialDescriptor, 2, (ft.o) lazyArr[2].getValue(), pollData.answers);
        compositeEncoder.s(serialDescriptor, 3, PollChatAnswerInteractionType.Serializer.INSTANCE, pollData.answersInteraction);
        if (compositeEncoder.A(serialDescriptor, 4) || pollData.answerTapAccessibilityLabel != null) {
            compositeEncoder.l(serialDescriptor, 4, n2.f31041a, pollData.answerTapAccessibilityLabel);
        }
        compositeEncoder.s(serialDescriptor, 5, PollLayoutType.Serializer.INSTANCE, pollData.layoutType);
        if (compositeEncoder.A(serialDescriptor, 6) || pollData.canSelectMultipleAnswers) {
            compositeEncoder.y(serialDescriptor, 6, pollData.canSelectMultipleAnswers);
        }
        compositeEncoder.y(serialDescriptor, 7, pollData.canTapAnswers);
        compositeEncoder.y(serialDescriptor, 8, pollData.canShowVoteCounts);
        compositeEncoder.y(serialDescriptor, 9, pollData.hasVoted);
        compositeEncoder.y(serialDescriptor, 10, pollData.isExpired);
        if (compositeEncoder.A(serialDescriptor, 11) || !Intrinsics.areEqual(pollData.containerStyle, "normal")) {
            compositeEncoder.z(serialDescriptor, 11, pollData.containerStyle);
        }
        if (compositeEncoder.A(serialDescriptor, 12) || pollData.myAvatarUrl != null) {
            compositeEncoder.l(serialDescriptor, 12, n2.f31041a, pollData.myAvatarUrl);
        }
        if (compositeEncoder.A(serialDescriptor, 13) || pollData.secondaryAction != null) {
            compositeEncoder.l(serialDescriptor, 13, PollAction$$serializer.INSTANCE, pollData.secondaryAction);
        }
        if (compositeEncoder.A(serialDescriptor, 14) || pollData.primaryAction != null) {
            compositeEncoder.l(serialDescriptor, 14, PollAction$$serializer.INSTANCE, pollData.primaryAction);
        }
        if (compositeEncoder.A(serialDescriptor, 15) || pollData.tertiaryAction != null) {
            compositeEncoder.l(serialDescriptor, 15, PollAction$$serializer.INSTANCE, pollData.tertiaryAction);
        }
        if (compositeEncoder.A(serialDescriptor, 16) || pollData.promptLabel != null) {
            compositeEncoder.l(serialDescriptor, 16, n2.f31041a, pollData.promptLabel);
        }
    }

    @NotNull
    public final PollResources component1() {
        return this.resources;
    }

    public final boolean component10() {
        return this.hasVoted;
    }

    public final boolean component11() {
        return this.isExpired;
    }

    @NotNull
    public final String component12() {
        return this.containerStyle;
    }

    public final String component13() {
        return this.myAvatarUrl;
    }

    public final PollAction component14() {
        return this.secondaryAction;
    }

    public final PollAction component15() {
        return this.primaryAction;
    }

    public final PollAction component16() {
        return this.tertiaryAction;
    }

    public final String component17() {
        return this.promptLabel;
    }

    @NotNull
    public final PollMedia component2() {
        return this.question;
    }

    @NotNull
    public final List<PollAnswer> component3() {
        return this.answers;
    }

    @NotNull
    public final PollChatAnswerInteractionType component4() {
        return this.answersInteraction;
    }

    public final String component5() {
        return this.answerTapAccessibilityLabel;
    }

    @NotNull
    public final PollLayoutType component6() {
        return this.layoutType;
    }

    public final boolean component7() {
        return this.canSelectMultipleAnswers;
    }

    public final boolean component8() {
        return this.canTapAnswers;
    }

    public final boolean component9() {
        return this.canShowVoteCounts;
    }

    @NotNull
    public final PollData copy(@NotNull PollResources resources, @NotNull PollMedia question, @NotNull List<PollAnswer> answers, @NotNull PollChatAnswerInteractionType answersInteraction, String str, @NotNull PollLayoutType layoutType, boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, @NotNull String containerStyle, String str2, PollAction pollAction, PollAction pollAction2, PollAction pollAction3, String str3) {
        Intrinsics.checkNotNullParameter(resources, "resources");
        Intrinsics.checkNotNullParameter(question, "question");
        Intrinsics.checkNotNullParameter(answers, "answers");
        Intrinsics.checkNotNullParameter(answersInteraction, "answersInteraction");
        Intrinsics.checkNotNullParameter(layoutType, "layoutType");
        Intrinsics.checkNotNullParameter(containerStyle, "containerStyle");
        return new PollData(resources, question, answers, answersInteraction, str, layoutType, z10, z11, z12, z13, z14, containerStyle, str2, pollAction, pollAction2, pollAction3, str3);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof PollData) {
            PollData pollData = (PollData) obj;
            return Intrinsics.areEqual(this.resources, pollData.resources) && Intrinsics.areEqual(this.question, pollData.question) && Intrinsics.areEqual(this.answers, pollData.answers) && this.answersInteraction == pollData.answersInteraction && Intrinsics.areEqual(this.answerTapAccessibilityLabel, pollData.answerTapAccessibilityLabel) && this.layoutType == pollData.layoutType && this.canSelectMultipleAnswers == pollData.canSelectMultipleAnswers && this.canTapAnswers == pollData.canTapAnswers && this.canShowVoteCounts == pollData.canShowVoteCounts && this.hasVoted == pollData.hasVoted && this.isExpired == pollData.isExpired && Intrinsics.areEqual(this.containerStyle, pollData.containerStyle) && Intrinsics.areEqual(this.myAvatarUrl, pollData.myAvatarUrl) && Intrinsics.areEqual(this.secondaryAction, pollData.secondaryAction) && Intrinsics.areEqual(this.primaryAction, pollData.primaryAction) && Intrinsics.areEqual(this.tertiaryAction, pollData.tertiaryAction) && Intrinsics.areEqual(this.promptLabel, pollData.promptLabel);
        }
        return false;
    }

    public final String getAnswerTapAccessibilityLabel() {
        return this.answerTapAccessibilityLabel;
    }

    @NotNull
    public final List<PollAnswer> getAnswers() {
        return this.answers;
    }

    @NotNull
    public final PollChatAnswerInteractionType getAnswersInteraction() {
        return this.answersInteraction;
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

    @NotNull
    public final String getContainerStyle() {
        return this.containerStyle;
    }

    public final boolean getHasVoted() {
        return this.hasVoted;
    }

    @NotNull
    public final PollLayoutType getLayoutType() {
        return this.layoutType;
    }

    public final String getMyAvatarUrl() {
        return this.myAvatarUrl;
    }

    public final PollAction getPrimaryAction() {
        return this.primaryAction;
    }

    public final String getPromptLabel() {
        return this.promptLabel;
    }

    @NotNull
    public final PollMedia getQuestion() {
        return this.question;
    }

    @NotNull
    public final PollResources getResources() {
        return this.resources;
    }

    public final PollAction getSecondaryAction() {
        return this.secondaryAction;
    }

    public final PollAction getTertiaryAction() {
        return this.tertiaryAction;
    }

    public int hashCode() {
        int hashCode = ((((((this.resources.hashCode() * 31) + this.question.hashCode()) * 31) + this.answers.hashCode()) * 31) + this.answersInteraction.hashCode()) * 31;
        String str = this.answerTapAccessibilityLabel;
        int hashCode2 = (((((((((((((((hashCode + (str == null ? 0 : str.hashCode())) * 31) + this.layoutType.hashCode()) * 31) + Boolean.hashCode(this.canSelectMultipleAnswers)) * 31) + Boolean.hashCode(this.canTapAnswers)) * 31) + Boolean.hashCode(this.canShowVoteCounts)) * 31) + Boolean.hashCode(this.hasVoted)) * 31) + Boolean.hashCode(this.isExpired)) * 31) + this.containerStyle.hashCode()) * 31;
        String str2 = this.myAvatarUrl;
        int hashCode3 = (hashCode2 + (str2 == null ? 0 : str2.hashCode())) * 31;
        PollAction pollAction = this.secondaryAction;
        int hashCode4 = (hashCode3 + (pollAction == null ? 0 : pollAction.hashCode())) * 31;
        PollAction pollAction2 = this.primaryAction;
        int hashCode5 = (hashCode4 + (pollAction2 == null ? 0 : pollAction2.hashCode())) * 31;
        PollAction pollAction3 = this.tertiaryAction;
        int hashCode6 = (hashCode5 + (pollAction3 == null ? 0 : pollAction3.hashCode())) * 31;
        String str3 = this.promptLabel;
        return hashCode6 + (str3 != null ? str3.hashCode() : 0);
    }

    public final boolean isExpired() {
        return this.isExpired;
    }

    @NotNull
    public String toString() {
        PollResources pollResources = this.resources;
        PollMedia pollMedia = this.question;
        List<PollAnswer> list = this.answers;
        PollChatAnswerInteractionType pollChatAnswerInteractionType = this.answersInteraction;
        String str = this.answerTapAccessibilityLabel;
        PollLayoutType pollLayoutType = this.layoutType;
        boolean z10 = this.canSelectMultipleAnswers;
        boolean z11 = this.canTapAnswers;
        boolean z12 = this.canShowVoteCounts;
        boolean z13 = this.hasVoted;
        boolean z14 = this.isExpired;
        String str2 = this.containerStyle;
        String str3 = this.myAvatarUrl;
        PollAction pollAction = this.secondaryAction;
        PollAction pollAction2 = this.primaryAction;
        PollAction pollAction3 = this.tertiaryAction;
        String str4 = this.promptLabel;
        return "PollData(resources=" + pollResources + ", question=" + pollMedia + ", answers=" + list + ", answersInteraction=" + pollChatAnswerInteractionType + ", answerTapAccessibilityLabel=" + str + ", layoutType=" + pollLayoutType + ", canSelectMultipleAnswers=" + z10 + ", canTapAnswers=" + z11 + ", canShowVoteCounts=" + z12 + ", hasVoted=" + z13 + ", isExpired=" + z14 + ", containerStyle=" + str2 + ", myAvatarUrl=" + str3 + ", secondaryAction=" + pollAction + ", primaryAction=" + pollAction2 + ", tertiaryAction=" + pollAction3 + ", promptLabel=" + str4 + ")";
    }

    public PollData(@NotNull PollResources resources, @NotNull PollMedia question, @NotNull List<PollAnswer> answers, @NotNull PollChatAnswerInteractionType answersInteraction, String str, @NotNull PollLayoutType layoutType, boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, @NotNull String containerStyle, String str2, PollAction pollAction, PollAction pollAction2, PollAction pollAction3, String str3) {
        Intrinsics.checkNotNullParameter(resources, "resources");
        Intrinsics.checkNotNullParameter(question, "question");
        Intrinsics.checkNotNullParameter(answers, "answers");
        Intrinsics.checkNotNullParameter(answersInteraction, "answersInteraction");
        Intrinsics.checkNotNullParameter(layoutType, "layoutType");
        Intrinsics.checkNotNullParameter(containerStyle, "containerStyle");
        this.resources = resources;
        this.question = question;
        this.answers = answers;
        this.answersInteraction = answersInteraction;
        this.answerTapAccessibilityLabel = str;
        this.layoutType = layoutType;
        this.canSelectMultipleAnswers = z10;
        this.canTapAnswers = z11;
        this.canShowVoteCounts = z12;
        this.hasVoted = z13;
        this.isExpired = z14;
        this.containerStyle = containerStyle;
        this.myAvatarUrl = str2;
        this.secondaryAction = pollAction;
        this.primaryAction = pollAction2;
        this.tertiaryAction = pollAction3;
        this.promptLabel = str3;
    }

    public /* synthetic */ PollData(PollResources pollResources, PollMedia pollMedia, List list, PollChatAnswerInteractionType pollChatAnswerInteractionType, String str, PollLayoutType pollLayoutType, boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, String str2, String str3, PollAction pollAction, PollAction pollAction2, PollAction pollAction3, String str4, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(pollResources, pollMedia, list, pollChatAnswerInteractionType, (i10 & 16) != 0 ? null : str, pollLayoutType, (i10 & 64) != 0 ? false : z10, z11, z12, z13, z14, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? "normal" : str2, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : str3, (i10 & 8192) != 0 ? null : pollAction, (i10 & 16384) != 0 ? null : pollAction2, (32768 & i10) != 0 ? null : pollAction3, (i10 & 65536) != 0 ? null : str4);
    }
}
