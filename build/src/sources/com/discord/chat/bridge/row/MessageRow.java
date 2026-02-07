package com.discord.chat.bridge.row;

import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.bridge.BackgroundHighlight;
import com.discord.chat.bridge.BackgroundHighlight$$serializer;
import com.discord.chat.bridge.ChangeType;
import com.discord.chat.bridge.MessageBase;
import com.discord.chat.bridge.SwipeActionsType;
import com.discord.chat.bridge.reaction.ReactionsTheme;
import com.discord.chat.bridge.reaction.ReactionsTheme$$serializer;
import com.discord.chat.bridge.truncation.Truncation;
import com.discord.chat.bridge.truncation.Truncation$$serializer;
import com.discord.chat.presentation.root.MessageContextType;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import ft.m;
import jt.h;
import jt.n2;
import jt.p0;
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
import qr.l;
import qr.o;
@m
@Metadata(d1 = {"\u0000r\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b1\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 \\2\u00020\u0001:\u0002[\\B\u009f\u0001\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\u0006\u0010\b\u001a\u00020\t\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u0007\u0012\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\f\u0012\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u000e\u0012\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u0007\u0012\b\b\u0002\u0010\u0010\u001a\u00020\u0007\u0012\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\u0013\u0012\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\u0015\u0012\b\b\u0002\u0010\u0016\u001a\u00020\u0017\u0012\n\b\u0002\u0010\u0018\u001a\u0004\u0018\u00010\u0019¢\u0006\u0004\b\u001a\u0010\u001bB£\u0001\b\u0010\u0012\u0006\u0010\u001c\u001a\u00020\u0003\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u000e\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\u0007\u0012\u0006\u0010\u0010\u001a\u00020\u0007\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0012\u001a\u0004\u0018\u00010\u0013\u0012\b\u0010\u0014\u001a\u0004\u0018\u00010\u0015\u0012\b\u0010\u0016\u001a\u0004\u0018\u00010\u0017\u0012\b\u0010\u0018\u001a\u0004\u0018\u00010\u0019\u0012\b\u0010\u001d\u001a\u0004\u0018\u00010\u001e¢\u0006\u0004\b\u001a\u0010\u001fJ\t\u0010>\u001a\u00020\u0003HÆ\u0003J\t\u0010?\u001a\u00020\u0005HÆ\u0003J\u0010\u0010@\u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0002\u0010%J\t\u0010A\u001a\u00020\tHÆ\u0003J\u0010\u0010B\u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0002\u0010%J\u000b\u0010C\u001a\u0004\u0018\u00010\fHÆ\u0003J\u000b\u0010D\u001a\u0004\u0018\u00010\u000eHÆ\u0003J\u0010\u0010E\u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0002\u0010%J\t\u0010F\u001a\u00020\u0007HÆ\u0003J\u0010\u0010G\u001a\u0004\u0018\u00010\u0003HÆ\u0003¢\u0006\u0002\u00104J\u000b\u0010H\u001a\u0004\u0018\u00010\u0013HÆ\u0003J\u000b\u0010I\u001a\u0004\u0018\u00010\u0015HÆ\u0003J\t\u0010J\u001a\u00020\u0017HÆ\u0003J\u000b\u0010K\u001a\u0004\u0018\u00010\u0019HÆ\u0003J¬\u0001\u0010L\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00072\b\b\u0002\u0010\b\u001a\u00020\t2\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\f2\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u000e2\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u00072\b\b\u0002\u0010\u0010\u001a\u00020\u00072\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\u00132\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\u00152\b\b\u0002\u0010\u0016\u001a\u00020\u00172\n\b\u0002\u0010\u0018\u001a\u0004\u0018\u00010\u0019HÆ\u0001¢\u0006\u0002\u0010MJ\u0013\u0010N\u001a\u00020\u00072\b\u0010O\u001a\u0004\u0018\u00010PHÖ\u0003J\t\u0010Q\u001a\u00020\u0003HÖ\u0001J\t\u0010R\u001a\u00020\fHÖ\u0001J%\u0010S\u001a\u00020T2\u0006\u0010U\u001a\u00020\u00002\u0006\u0010V\u001a\u00020W2\u0006\u0010X\u001a\u00020YH\u0001¢\u0006\u0002\bZR\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b \u0010!R\u0014\u0010\u0004\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\"\u0010#R\u0015\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\n\n\u0002\u0010&\u001a\u0004\b$\u0010%R\u001c\u0010\b\u001a\u00020\t8\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\b'\u0010(\u001a\u0004\b)\u0010*R\u0015\u0010\n\u001a\u0004\u0018\u00010\u0007¢\u0006\n\n\u0002\u0010&\u001a\u0004\b+\u0010%R\u0013\u0010\u000b\u001a\u0004\u0018\u00010\f¢\u0006\b\n\u0000\u001a\u0004\b,\u0010-R\u0013\u0010\r\u001a\u0004\u0018\u00010\u000e¢\u0006\b\n\u0000\u001a\u0004\b.\u0010/R\u0015\u0010\u000f\u001a\u0004\u0018\u00010\u0007¢\u0006\n\n\u0002\u0010&\u001a\u0004\b0\u0010%R\u0011\u0010\u0010\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b1\u00102R\u0015\u0010\u0011\u001a\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u00105\u001a\u0004\b3\u00104R\u0013\u0010\u0012\u001a\u0004\u0018\u00010\u0013¢\u0006\b\n\u0000\u001a\u0004\b6\u00107R\u0013\u0010\u0014\u001a\u0004\u0018\u00010\u0015¢\u0006\b\n\u0000\u001a\u0004\b8\u00109R\u0011\u0010\u0016\u001a\u00020\u0017¢\u0006\b\n\u0000\u001a\u0004\b:\u0010;R\u0013\u0010\u0018\u001a\u0004\u0018\u00010\u0019¢\u0006\b\n\u0000\u001a\u0004\b<\u0010=¨\u0006]"}, d2 = {"Lcom/discord/chat/bridge/row/MessageRow;", "Lcom/discord/chat/bridge/row/Row;", "index", "", "changeType", "Lcom/discord/chat/bridge/ChangeType;", "jumped", "", "message", "Lcom/discord/chat/bridge/MessageBase;", "canAddNewReactions", "addNewReactionAccessibilityLabel", "", "reactionsTheme", "Lcom/discord/chat/bridge/reaction/ReactionsTheme;", "showReplyButton", "renderContentOnly", "reactTag", "truncation", "Lcom/discord/chat/bridge/truncation/Truncation;", "backgroundHighlight", "Lcom/discord/chat/bridge/BackgroundHighlight;", "swipeActions", "Lcom/discord/chat/bridge/SwipeActionsType;", "contextType", "Lcom/discord/chat/presentation/root/MessageContextType;", "<init>", "(ILcom/discord/chat/bridge/ChangeType;Ljava/lang/Boolean;Lcom/discord/chat/bridge/MessageBase;Ljava/lang/Boolean;Ljava/lang/String;Lcom/discord/chat/bridge/reaction/ReactionsTheme;Ljava/lang/Boolean;ZLjava/lang/Integer;Lcom/discord/chat/bridge/truncation/Truncation;Lcom/discord/chat/bridge/BackgroundHighlight;Lcom/discord/chat/bridge/SwipeActionsType;Lcom/discord/chat/presentation/root/MessageContextType;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IILcom/discord/chat/bridge/ChangeType;Ljava/lang/Boolean;Lcom/discord/chat/bridge/MessageBase;Ljava/lang/Boolean;Ljava/lang/String;Lcom/discord/chat/bridge/reaction/ReactionsTheme;Ljava/lang/Boolean;ZLjava/lang/Integer;Lcom/discord/chat/bridge/truncation/Truncation;Lcom/discord/chat/bridge/BackgroundHighlight;Lcom/discord/chat/bridge/SwipeActionsType;Lcom/discord/chat/presentation/root/MessageContextType;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getIndex", "()I", "getChangeType", "()Lcom/discord/chat/bridge/ChangeType;", "getJumped", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "getMessage$annotations", "()V", "getMessage", "()Lcom/discord/chat/bridge/MessageBase;", "getCanAddNewReactions", "getAddNewReactionAccessibilityLabel", "()Ljava/lang/String;", "getReactionsTheme", "()Lcom/discord/chat/bridge/reaction/ReactionsTheme;", "getShowReplyButton", "getRenderContentOnly", "()Z", "getReactTag", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getTruncation", "()Lcom/discord/chat/bridge/truncation/Truncation;", "getBackgroundHighlight", "()Lcom/discord/chat/bridge/BackgroundHighlight;", "getSwipeActions", "()Lcom/discord/chat/bridge/SwipeActionsType;", "getContextType", "()Lcom/discord/chat/presentation/root/MessageContextType;", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "component12", "component13", "component14", "copy", "(ILcom/discord/chat/bridge/ChangeType;Ljava/lang/Boolean;Lcom/discord/chat/bridge/MessageBase;Ljava/lang/Boolean;Ljava/lang/String;Lcom/discord/chat/bridge/reaction/ReactionsTheme;Ljava/lang/Boolean;ZLjava/lang/Integer;Lcom/discord/chat/bridge/truncation/Truncation;Lcom/discord/chat/bridge/BackgroundHighlight;Lcom/discord/chat/bridge/SwipeActionsType;Lcom/discord/chat/presentation/root/MessageContextType;)Lcom/discord/chat/bridge/row/MessageRow;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MessageRow extends Row {
    private final String addNewReactionAccessibilityLabel;
    private final BackgroundHighlight backgroundHighlight;
    private final Boolean canAddNewReactions;
    @NotNull
    private final ChangeType changeType;
    private final MessageContextType contextType;
    private final int index;
    private final Boolean jumped;
    @NotNull
    private final MessageBase message;
    private final Integer reactTag;
    private final ReactionsTheme reactionsTheme;
    private final boolean renderContentOnly;
    private final Boolean showReplyButton;
    @NotNull
    private final SwipeActionsType swipeActions;
    private final Truncation truncation;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Lazy[] $childSerializers = {null, null, null, null, null, null, null, null, null, null, null, null, null, l.b(o.f48092e, new Function0() { // from class: com.discord.chat.bridge.row.d
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            KSerializer _childSerializers$_anonymous_;
            _childSerializers$_anonymous_ = MessageRow._childSerializers$_anonymous_();
            return _childSerializers$_anonymous_;
        }
    })};

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/row/MessageRow$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/row/MessageRow;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return MessageRow$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public /* synthetic */ MessageRow(int i10, int i11, ChangeType changeType, Boolean bool, MessageBase messageBase, Boolean bool2, String str, ReactionsTheme reactionsTheme, Boolean bool3, boolean z10, Integer num, Truncation truncation, BackgroundHighlight backgroundHighlight, SwipeActionsType swipeActionsType, MessageContextType messageContextType, SerializationConstructorMarker serializationConstructorMarker) {
        super(null);
        if (11 != (i10 & 11)) {
            v1.b(i10, 11, MessageRow$$serializer.INSTANCE.getDescriptor());
        }
        this.index = i11;
        this.changeType = changeType;
        if ((i10 & 4) == 0) {
            this.jumped = null;
        } else {
            this.jumped = bool;
        }
        this.message = messageBase;
        if ((i10 & 16) == 0) {
            this.canAddNewReactions = null;
        } else {
            this.canAddNewReactions = bool2;
        }
        if ((i10 & 32) == 0) {
            this.addNewReactionAccessibilityLabel = null;
        } else {
            this.addNewReactionAccessibilityLabel = str;
        }
        if ((i10 & 64) == 0) {
            this.reactionsTheme = null;
        } else {
            this.reactionsTheme = reactionsTheme;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
            this.showReplyButton = null;
        } else {
            this.showReplyButton = bool3;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 0) {
            this.renderContentOnly = false;
        } else {
            this.renderContentOnly = z10;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 0) {
            this.reactTag = null;
        } else {
            this.reactTag = num;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 0) {
            this.truncation = null;
        } else {
            this.truncation = truncation;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 0) {
            this.backgroundHighlight = null;
        } else {
            this.backgroundHighlight = backgroundHighlight;
        }
        this.swipeActions = (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 0 ? SwipeActionsType.NONE : swipeActionsType;
        if ((i10 & 8192) == 0) {
            this.contextType = null;
        } else {
            this.contextType = messageContextType;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return MessageContextType.Companion.serializer();
    }

    @m(with = MessageSerializer.class)
    public static /* synthetic */ void getMessage$annotations() {
    }

    public static final /* synthetic */ void write$Self$chat_release(MessageRow messageRow, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        Lazy[] lazyArr = $childSerializers;
        compositeEncoder.x(serialDescriptor, 0, messageRow.getIndex());
        compositeEncoder.s(serialDescriptor, 1, ChangeType.Serializer.INSTANCE, messageRow.getChangeType());
        if (compositeEncoder.A(serialDescriptor, 2) || messageRow.jumped != null) {
            compositeEncoder.l(serialDescriptor, 2, h.f31053a, messageRow.jumped);
        }
        compositeEncoder.s(serialDescriptor, 3, MessageSerializer.INSTANCE, messageRow.message);
        if (compositeEncoder.A(serialDescriptor, 4) || messageRow.canAddNewReactions != null) {
            compositeEncoder.l(serialDescriptor, 4, h.f31053a, messageRow.canAddNewReactions);
        }
        if (compositeEncoder.A(serialDescriptor, 5) || messageRow.addNewReactionAccessibilityLabel != null) {
            compositeEncoder.l(serialDescriptor, 5, n2.f31089a, messageRow.addNewReactionAccessibilityLabel);
        }
        if (compositeEncoder.A(serialDescriptor, 6) || messageRow.reactionsTheme != null) {
            compositeEncoder.l(serialDescriptor, 6, ReactionsTheme$$serializer.INSTANCE, messageRow.reactionsTheme);
        }
        if (compositeEncoder.A(serialDescriptor, 7) || messageRow.showReplyButton != null) {
            compositeEncoder.l(serialDescriptor, 7, h.f31053a, messageRow.showReplyButton);
        }
        if (compositeEncoder.A(serialDescriptor, 8) || messageRow.renderContentOnly) {
            compositeEncoder.y(serialDescriptor, 8, messageRow.renderContentOnly);
        }
        if (compositeEncoder.A(serialDescriptor, 9) || messageRow.reactTag != null) {
            compositeEncoder.l(serialDescriptor, 9, p0.f31105a, messageRow.reactTag);
        }
        if (compositeEncoder.A(serialDescriptor, 10) || messageRow.truncation != null) {
            compositeEncoder.l(serialDescriptor, 10, Truncation$$serializer.INSTANCE, messageRow.truncation);
        }
        if (compositeEncoder.A(serialDescriptor, 11) || messageRow.backgroundHighlight != null) {
            compositeEncoder.l(serialDescriptor, 11, BackgroundHighlight$$serializer.INSTANCE, messageRow.backgroundHighlight);
        }
        if (compositeEncoder.A(serialDescriptor, 12) || messageRow.swipeActions != SwipeActionsType.NONE) {
            compositeEncoder.s(serialDescriptor, 12, SwipeActionsType.Serializer.INSTANCE, messageRow.swipeActions);
        }
        if (compositeEncoder.A(serialDescriptor, 13) || messageRow.contextType != null) {
            compositeEncoder.l(serialDescriptor, 13, (ft.o) lazyArr[13].getValue(), messageRow.contextType);
        }
    }

    public final int component1() {
        return this.index;
    }

    public final Integer component10() {
        return this.reactTag;
    }

    public final Truncation component11() {
        return this.truncation;
    }

    public final BackgroundHighlight component12() {
        return this.backgroundHighlight;
    }

    @NotNull
    public final SwipeActionsType component13() {
        return this.swipeActions;
    }

    public final MessageContextType component14() {
        return this.contextType;
    }

    @NotNull
    public final ChangeType component2() {
        return this.changeType;
    }

    public final Boolean component3() {
        return this.jumped;
    }

    @NotNull
    public final MessageBase component4() {
        return this.message;
    }

    public final Boolean component5() {
        return this.canAddNewReactions;
    }

    public final String component6() {
        return this.addNewReactionAccessibilityLabel;
    }

    public final ReactionsTheme component7() {
        return this.reactionsTheme;
    }

    public final Boolean component8() {
        return this.showReplyButton;
    }

    public final boolean component9() {
        return this.renderContentOnly;
    }

    @NotNull
    public final MessageRow copy(int i10, @NotNull ChangeType changeType, Boolean bool, @NotNull MessageBase message, Boolean bool2, String str, ReactionsTheme reactionsTheme, Boolean bool3, boolean z10, Integer num, Truncation truncation, BackgroundHighlight backgroundHighlight, @NotNull SwipeActionsType swipeActions, MessageContextType messageContextType) {
        Intrinsics.checkNotNullParameter(changeType, "changeType");
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(swipeActions, "swipeActions");
        return new MessageRow(i10, changeType, bool, message, bool2, str, reactionsTheme, bool3, z10, num, truncation, backgroundHighlight, swipeActions, messageContextType);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof MessageRow) {
            MessageRow messageRow = (MessageRow) obj;
            return this.index == messageRow.index && this.changeType == messageRow.changeType && Intrinsics.areEqual(this.jumped, messageRow.jumped) && Intrinsics.areEqual(this.message, messageRow.message) && Intrinsics.areEqual(this.canAddNewReactions, messageRow.canAddNewReactions) && Intrinsics.areEqual(this.addNewReactionAccessibilityLabel, messageRow.addNewReactionAccessibilityLabel) && Intrinsics.areEqual(this.reactionsTheme, messageRow.reactionsTheme) && Intrinsics.areEqual(this.showReplyButton, messageRow.showReplyButton) && this.renderContentOnly == messageRow.renderContentOnly && Intrinsics.areEqual(this.reactTag, messageRow.reactTag) && Intrinsics.areEqual(this.truncation, messageRow.truncation) && Intrinsics.areEqual(this.backgroundHighlight, messageRow.backgroundHighlight) && this.swipeActions == messageRow.swipeActions && this.contextType == messageRow.contextType;
        }
        return false;
    }

    public final String getAddNewReactionAccessibilityLabel() {
        return this.addNewReactionAccessibilityLabel;
    }

    public final BackgroundHighlight getBackgroundHighlight() {
        return this.backgroundHighlight;
    }

    public final Boolean getCanAddNewReactions() {
        return this.canAddNewReactions;
    }

    @Override // com.discord.chat.bridge.row.Row
    @NotNull
    public ChangeType getChangeType() {
        return this.changeType;
    }

    public final MessageContextType getContextType() {
        return this.contextType;
    }

    @Override // com.discord.chat.bridge.row.Row
    public int getIndex() {
        return this.index;
    }

    public final Boolean getJumped() {
        return this.jumped;
    }

    @NotNull
    public final MessageBase getMessage() {
        return this.message;
    }

    public final Integer getReactTag() {
        return this.reactTag;
    }

    public final ReactionsTheme getReactionsTheme() {
        return this.reactionsTheme;
    }

    public final boolean getRenderContentOnly() {
        return this.renderContentOnly;
    }

    public final Boolean getShowReplyButton() {
        return this.showReplyButton;
    }

    @NotNull
    public final SwipeActionsType getSwipeActions() {
        return this.swipeActions;
    }

    public final Truncation getTruncation() {
        return this.truncation;
    }

    public int hashCode() {
        int hashCode = ((Integer.hashCode(this.index) * 31) + this.changeType.hashCode()) * 31;
        Boolean bool = this.jumped;
        int hashCode2 = (((hashCode + (bool == null ? 0 : bool.hashCode())) * 31) + this.message.hashCode()) * 31;
        Boolean bool2 = this.canAddNewReactions;
        int hashCode3 = (hashCode2 + (bool2 == null ? 0 : bool2.hashCode())) * 31;
        String str = this.addNewReactionAccessibilityLabel;
        int hashCode4 = (hashCode3 + (str == null ? 0 : str.hashCode())) * 31;
        ReactionsTheme reactionsTheme = this.reactionsTheme;
        int hashCode5 = (hashCode4 + (reactionsTheme == null ? 0 : reactionsTheme.hashCode())) * 31;
        Boolean bool3 = this.showReplyButton;
        int hashCode6 = (((hashCode5 + (bool3 == null ? 0 : bool3.hashCode())) * 31) + Boolean.hashCode(this.renderContentOnly)) * 31;
        Integer num = this.reactTag;
        int hashCode7 = (hashCode6 + (num == null ? 0 : num.hashCode())) * 31;
        Truncation truncation = this.truncation;
        int hashCode8 = (hashCode7 + (truncation == null ? 0 : truncation.hashCode())) * 31;
        BackgroundHighlight backgroundHighlight = this.backgroundHighlight;
        int hashCode9 = (((hashCode8 + (backgroundHighlight == null ? 0 : backgroundHighlight.hashCode())) * 31) + this.swipeActions.hashCode()) * 31;
        MessageContextType messageContextType = this.contextType;
        return hashCode9 + (messageContextType != null ? messageContextType.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        int i10 = this.index;
        ChangeType changeType = this.changeType;
        Boolean bool = this.jumped;
        MessageBase messageBase = this.message;
        Boolean bool2 = this.canAddNewReactions;
        String str = this.addNewReactionAccessibilityLabel;
        ReactionsTheme reactionsTheme = this.reactionsTheme;
        Boolean bool3 = this.showReplyButton;
        boolean z10 = this.renderContentOnly;
        Integer num = this.reactTag;
        Truncation truncation = this.truncation;
        BackgroundHighlight backgroundHighlight = this.backgroundHighlight;
        SwipeActionsType swipeActionsType = this.swipeActions;
        MessageContextType messageContextType = this.contextType;
        return "MessageRow(index=" + i10 + ", changeType=" + changeType + ", jumped=" + bool + ", message=" + messageBase + ", canAddNewReactions=" + bool2 + ", addNewReactionAccessibilityLabel=" + str + ", reactionsTheme=" + reactionsTheme + ", showReplyButton=" + bool3 + ", renderContentOnly=" + z10 + ", reactTag=" + num + ", truncation=" + truncation + ", backgroundHighlight=" + backgroundHighlight + ", swipeActions=" + swipeActionsType + ", contextType=" + messageContextType + ")";
    }

    public /* synthetic */ MessageRow(int i10, ChangeType changeType, Boolean bool, MessageBase messageBase, Boolean bool2, String str, ReactionsTheme reactionsTheme, Boolean bool3, boolean z10, Integer num, Truncation truncation, BackgroundHighlight backgroundHighlight, SwipeActionsType swipeActionsType, MessageContextType messageContextType, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, changeType, (i11 & 4) != 0 ? null : bool, messageBase, (i11 & 16) != 0 ? null : bool2, (i11 & 32) != 0 ? null : str, (i11 & 64) != 0 ? null : reactionsTheme, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : bool3, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? false : z10, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : num, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : truncation, (i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : backgroundHighlight, (i11 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? SwipeActionsType.NONE : swipeActionsType, (i11 & 8192) != 0 ? null : messageContextType);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MessageRow(int i10, @NotNull ChangeType changeType, Boolean bool, @NotNull MessageBase message, Boolean bool2, String str, ReactionsTheme reactionsTheme, Boolean bool3, boolean z10, Integer num, Truncation truncation, BackgroundHighlight backgroundHighlight, @NotNull SwipeActionsType swipeActions, MessageContextType messageContextType) {
        super(null);
        Intrinsics.checkNotNullParameter(changeType, "changeType");
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(swipeActions, "swipeActions");
        this.index = i10;
        this.changeType = changeType;
        this.jumped = bool;
        this.message = message;
        this.canAddNewReactions = bool2;
        this.addNewReactionAccessibilityLabel = str;
        this.reactionsTheme = reactionsTheme;
        this.showReplyButton = bool3;
        this.renderContentOnly = z10;
        this.reactTag = num;
        this.truncation = truncation;
        this.backgroundHighlight = backgroundHighlight;
        this.swipeActions = swipeActions;
        this.contextType = messageContextType;
    }
}
