package com.discord.chat.presentation.message.messagepart;

import com.discord.chat.bridge.reaction.MessageReaction;
import com.discord.chat.bridge.reaction.ReactionsTheme;
import com.discord.primitives.MessageId;
import com.discord.theme.DiscordTheme;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b&\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0086\b\u0018\u00002\u00020\u0001Bo\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005\u0012\u0006\u0010\u0007\u001a\u00020\b\u0012\u0006\u0010\t\u001a\u00020\n\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f\u0012\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u000e\u0012\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\n\u0012\n\b\u0002\u0010\u0010\u001a\u0004\u0018\u00010\u0011\u0012\b\b\u0002\u0010\u0012\u001a\u00020\b\u0012\b\b\u0002\u0010\u0013\u001a\u00020\b¢\u0006\u0004\b\u0014\u0010\u0015J\u0010\u0010(\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b)\u0010\u0017J\u000f\u0010*\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005HÆ\u0003J\t\u0010+\u001a\u00020\bHÆ\u0003J\t\u0010,\u001a\u00020\nHÆ\u0003J\u000b\u0010-\u001a\u0004\u0018\u00010\fHÆ\u0003J\u000b\u0010.\u001a\u0004\u0018\u00010\u000eHÆ\u0003J\u000b\u0010/\u001a\u0004\u0018\u00010\nHÆ\u0003J\u0010\u00100\u001a\u0004\u0018\u00010\u0011HÆ\u0003¢\u0006\u0002\u0010$J\t\u00101\u001a\u00020\bHÆ\u0003J\t\u00102\u001a\u00020\bHÆ\u0003J\u0082\u0001\u00103\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\u000e\b\u0002\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u00052\b\b\u0002\u0010\u0007\u001a\u00020\b2\b\b\u0002\u0010\t\u001a\u00020\n2\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\f2\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u000e2\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\n2\n\b\u0002\u0010\u0010\u001a\u0004\u0018\u00010\u00112\b\b\u0002\u0010\u0012\u001a\u00020\b2\b\b\u0002\u0010\u0013\u001a\u00020\bHÆ\u0001¢\u0006\u0004\b4\u00105J\u0013\u00106\u001a\u00020\b2\b\u00107\u001a\u0004\u0018\u000108HÖ\u0003J\t\u00109\u001a\u00020\u0011HÖ\u0001J\t\u0010:\u001a\u00020\nHÖ\u0001R\u0016\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\n\n\u0002\u0010\u0018\u001a\u0004\b\u0016\u0010\u0017R\u0017\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u001aR\u0011\u0010\u0007\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u001cR\u0011\u0010\t\u001a\u00020\n¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u0017R\u0013\u0010\u000b\u001a\u0004\u0018\u00010\f¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u001fR\u0013\u0010\r\u001a\u0004\u0018\u00010\u000e¢\u0006\b\n\u0000\u001a\u0004\b \u0010!R\u0013\u0010\u000f\u001a\u0004\u0018\u00010\n¢\u0006\b\n\u0000\u001a\u0004\b\"\u0010\u0017R\u0015\u0010\u0010\u001a\u0004\u0018\u00010\u0011¢\u0006\n\n\u0002\u0010%\u001a\u0004\b#\u0010$R\u0011\u0010\u0012\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b&\u0010\u001cR\u0011\u0010\u0013\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b'\u0010\u001c¨\u0006;"}, d2 = {"Lcom/discord/chat/presentation/message/messagepart/ReactionsMessageAccessory;", "Lcom/discord/chat/presentation/message/messagepart/MessageAccessory;", "messageId", "Lcom/discord/primitives/MessageId;", "reactions", "", "Lcom/discord/chat/bridge/reaction/MessageReaction;", "canAddNewReactions", "", "addNewReactionAccessibilityLabel", "", "reactionsTheme", "Lcom/discord/chat/bridge/reaction/ReactionsTheme;", "theme", "Lcom/discord/theme/DiscordTheme;", "targetKind", "embedIndex", "", "showReactLabel", "showReplyButton", "<init>", "(Ljava/lang/String;Ljava/util/List;ZLjava/lang/String;Lcom/discord/chat/bridge/reaction/ReactionsTheme;Lcom/discord/theme/DiscordTheme;Ljava/lang/String;Ljava/lang/Integer;ZZLkotlin/jvm/internal/DefaultConstructorMarker;)V", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getReactions", "()Ljava/util/List;", "getCanAddNewReactions", "()Z", "getAddNewReactionAccessibilityLabel", "getReactionsTheme", "()Lcom/discord/chat/bridge/reaction/ReactionsTheme;", "getTheme", "()Lcom/discord/theme/DiscordTheme;", "getTargetKind", "getEmbedIndex", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getShowReactLabel", "getShowReplyButton", "component1", "component1-3Eiw7ao", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "copy", "copy-a6FnO-k", "(Ljava/lang/String;Ljava/util/List;ZLjava/lang/String;Lcom/discord/chat/bridge/reaction/ReactionsTheme;Lcom/discord/theme/DiscordTheme;Ljava/lang/String;Ljava/lang/Integer;ZZ)Lcom/discord/chat/presentation/message/messagepart/ReactionsMessageAccessory;", "equals", "other", "", "hashCode", "toString", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ReactionsMessageAccessory extends MessageAccessory {
    @NotNull
    private final String addNewReactionAccessibilityLabel;
    private final boolean canAddNewReactions;
    private final Integer embedIndex;
    @NotNull
    private final String messageId;
    @NotNull
    private final List<MessageReaction> reactions;
    private final ReactionsTheme reactionsTheme;
    private final boolean showReactLabel;
    private final boolean showReplyButton;
    private final String targetKind;
    private final DiscordTheme theme;

    public /* synthetic */ ReactionsMessageAccessory(String str, List list, boolean z10, String str2, ReactionsTheme reactionsTheme, DiscordTheme discordTheme, String str3, Integer num, boolean z11, boolean z12, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, list, z10, str2, reactionsTheme, discordTheme, str3, num, z11, z12);
    }

    /* renamed from: copy-a6FnO-k$default  reason: not valid java name */
    public static /* synthetic */ ReactionsMessageAccessory m639copya6FnOk$default(ReactionsMessageAccessory reactionsMessageAccessory, String str, List list, boolean z10, String str2, ReactionsTheme reactionsTheme, DiscordTheme discordTheme, String str3, Integer num, boolean z11, boolean z12, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = reactionsMessageAccessory.messageId;
        }
        List<MessageReaction> list2 = list;
        if ((i10 & 2) != 0) {
            list2 = reactionsMessageAccessory.reactions;
        }
        if ((i10 & 4) != 0) {
            z10 = reactionsMessageAccessory.canAddNewReactions;
        }
        if ((i10 & 8) != 0) {
            str2 = reactionsMessageAccessory.addNewReactionAccessibilityLabel;
        }
        if ((i10 & 16) != 0) {
            reactionsTheme = reactionsMessageAccessory.reactionsTheme;
        }
        if ((i10 & 32) != 0) {
            discordTheme = reactionsMessageAccessory.theme;
        }
        if ((i10 & 64) != 0) {
            str3 = reactionsMessageAccessory.targetKind;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            num = reactionsMessageAccessory.embedIndex;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            z11 = reactionsMessageAccessory.showReactLabel;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            z12 = reactionsMessageAccessory.showReplyButton;
        }
        boolean z13 = z11;
        boolean z14 = z12;
        String str4 = str3;
        Integer num2 = num;
        ReactionsTheme reactionsTheme2 = reactionsTheme;
        DiscordTheme discordTheme2 = discordTheme;
        return reactionsMessageAccessory.m641copya6FnOk(str, list2, z10, str2, reactionsTheme2, discordTheme2, str4, num2, z13, z14);
    }

    @NotNull
    /* renamed from: component1-3Eiw7ao  reason: not valid java name */
    public final String m640component13Eiw7ao() {
        return this.messageId;
    }

    public final boolean component10() {
        return this.showReplyButton;
    }

    @NotNull
    public final List<MessageReaction> component2() {
        return this.reactions;
    }

    public final boolean component3() {
        return this.canAddNewReactions;
    }

    @NotNull
    public final String component4() {
        return this.addNewReactionAccessibilityLabel;
    }

    public final ReactionsTheme component5() {
        return this.reactionsTheme;
    }

    public final DiscordTheme component6() {
        return this.theme;
    }

    public final String component7() {
        return this.targetKind;
    }

    public final Integer component8() {
        return this.embedIndex;
    }

    public final boolean component9() {
        return this.showReactLabel;
    }

    @NotNull
    /* renamed from: copy-a6FnO-k  reason: not valid java name */
    public final ReactionsMessageAccessory m641copya6FnOk(@NotNull String messageId, @NotNull List<MessageReaction> reactions, boolean z10, @NotNull String addNewReactionAccessibilityLabel, ReactionsTheme reactionsTheme, DiscordTheme discordTheme, String str, Integer num, boolean z11, boolean z12) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(reactions, "reactions");
        Intrinsics.checkNotNullParameter(addNewReactionAccessibilityLabel, "addNewReactionAccessibilityLabel");
        return new ReactionsMessageAccessory(messageId, reactions, z10, addNewReactionAccessibilityLabel, reactionsTheme, discordTheme, str, num, z11, z12, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ReactionsMessageAccessory) {
            ReactionsMessageAccessory reactionsMessageAccessory = (ReactionsMessageAccessory) obj;
            return MessageId.m1089equalsimpl0(this.messageId, reactionsMessageAccessory.messageId) && Intrinsics.areEqual(this.reactions, reactionsMessageAccessory.reactions) && this.canAddNewReactions == reactionsMessageAccessory.canAddNewReactions && Intrinsics.areEqual(this.addNewReactionAccessibilityLabel, reactionsMessageAccessory.addNewReactionAccessibilityLabel) && Intrinsics.areEqual(this.reactionsTheme, reactionsMessageAccessory.reactionsTheme) && this.theme == reactionsMessageAccessory.theme && Intrinsics.areEqual(this.targetKind, reactionsMessageAccessory.targetKind) && Intrinsics.areEqual(this.embedIndex, reactionsMessageAccessory.embedIndex) && this.showReactLabel == reactionsMessageAccessory.showReactLabel && this.showReplyButton == reactionsMessageAccessory.showReplyButton;
        }
        return false;
    }

    @NotNull
    public final String getAddNewReactionAccessibilityLabel() {
        return this.addNewReactionAccessibilityLabel;
    }

    public final boolean getCanAddNewReactions() {
        return this.canAddNewReactions;
    }

    public final Integer getEmbedIndex() {
        return this.embedIndex;
    }

    @Override // com.discord.chat.presentation.message.messagepart.MessageAccessory
    @NotNull
    /* renamed from: getMessageId-3Eiw7ao */
    public String mo538getMessageId3Eiw7ao() {
        return this.messageId;
    }

    @NotNull
    public final List<MessageReaction> getReactions() {
        return this.reactions;
    }

    public final ReactionsTheme getReactionsTheme() {
        return this.reactionsTheme;
    }

    public final boolean getShowReactLabel() {
        return this.showReactLabel;
    }

    public final boolean getShowReplyButton() {
        return this.showReplyButton;
    }

    public final String getTargetKind() {
        return this.targetKind;
    }

    public final DiscordTheme getTheme() {
        return this.theme;
    }

    public int hashCode() {
        int m1090hashCodeimpl = ((((((MessageId.m1090hashCodeimpl(this.messageId) * 31) + this.reactions.hashCode()) * 31) + Boolean.hashCode(this.canAddNewReactions)) * 31) + this.addNewReactionAccessibilityLabel.hashCode()) * 31;
        ReactionsTheme reactionsTheme = this.reactionsTheme;
        int hashCode = (m1090hashCodeimpl + (reactionsTheme == null ? 0 : reactionsTheme.hashCode())) * 31;
        DiscordTheme discordTheme = this.theme;
        int hashCode2 = (hashCode + (discordTheme == null ? 0 : discordTheme.hashCode())) * 31;
        String str = this.targetKind;
        int hashCode3 = (hashCode2 + (str == null ? 0 : str.hashCode())) * 31;
        Integer num = this.embedIndex;
        return ((((hashCode3 + (num != null ? num.hashCode() : 0)) * 31) + Boolean.hashCode(this.showReactLabel)) * 31) + Boolean.hashCode(this.showReplyButton);
    }

    @NotNull
    public String toString() {
        String m1092toStringimpl = MessageId.m1092toStringimpl(this.messageId);
        List<MessageReaction> list = this.reactions;
        boolean z10 = this.canAddNewReactions;
        String str = this.addNewReactionAccessibilityLabel;
        ReactionsTheme reactionsTheme = this.reactionsTheme;
        DiscordTheme discordTheme = this.theme;
        String str2 = this.targetKind;
        Integer num = this.embedIndex;
        boolean z11 = this.showReactLabel;
        boolean z12 = this.showReplyButton;
        return "ReactionsMessageAccessory(messageId=" + m1092toStringimpl + ", reactions=" + list + ", canAddNewReactions=" + z10 + ", addNewReactionAccessibilityLabel=" + str + ", reactionsTheme=" + reactionsTheme + ", theme=" + discordTheme + ", targetKind=" + str2 + ", embedIndex=" + num + ", showReactLabel=" + z11 + ", showReplyButton=" + z12 + ")";
    }

    public /* synthetic */ ReactionsMessageAccessory(String str, List list, boolean z10, String str2, ReactionsTheme reactionsTheme, DiscordTheme discordTheme, String str3, Integer num, boolean z11, boolean z12, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, list, z10, str2, reactionsTheme, (i10 & 32) != 0 ? null : discordTheme, (i10 & 64) != 0 ? null : str3, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : num, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? false : z11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? false : z12, null);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    private ReactionsMessageAccessory(String messageId, List<MessageReaction> reactions, boolean z10, String addNewReactionAccessibilityLabel, ReactionsTheme reactionsTheme, DiscordTheme discordTheme, String str, Integer num, boolean z11, boolean z12) {
        super(messageId, "reactions", false, null);
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(reactions, "reactions");
        Intrinsics.checkNotNullParameter(addNewReactionAccessibilityLabel, "addNewReactionAccessibilityLabel");
        this.messageId = messageId;
        this.reactions = reactions;
        this.canAddNewReactions = z10;
        this.addNewReactionAccessibilityLabel = addNewReactionAccessibilityLabel;
        this.reactionsTheme = reactionsTheme;
        this.theme = discordTheme;
        this.targetKind = str;
        this.embedIndex = num;
        this.showReactLabel = z11;
        this.showReplyButton = z12;
    }
}
