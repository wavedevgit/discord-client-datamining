package com.discord.chat.presentation.root;

import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.bridge.reaction.ReactionsTheme;
import com.discord.chat.bridge.truncation.Truncation;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00008\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b&\n\u0002\u0010\b\n\u0002\b\u0002\b\u0086\b\u0018\u00002\u00020\u0001B\u008d\u0001\u0012\b\b\u0002\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0005\u001a\u00020\u0006\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\b\b\u0002\u0010\t\u001a\u00020\u0003\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\b\b\u0002\u0010\f\u001a\u00020\u0003\u0012\b\b\u0002\u0010\r\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u000e\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u000f\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0010\u001a\u00020\u0006\u0012\b\b\u0002\u0010\u0011\u001a\u00020\u0012\u0012\b\b\u0002\u0010\u0013\u001a\u00020\u0003¢\u0006\u0004\b\u0014\u0010\u0015J\t\u0010(\u001a\u00020\u0003HÆ\u0003J\t\u0010)\u001a\u00020\u0003HÆ\u0003J\t\u0010*\u001a\u00020\u0006HÆ\u0003J\u000b\u0010+\u001a\u0004\u0018\u00010\bHÆ\u0003J\t\u0010,\u001a\u00020\u0003HÆ\u0003J\u000b\u0010-\u001a\u0004\u0018\u00010\u000bHÆ\u0003J\t\u0010.\u001a\u00020\u0003HÆ\u0003J\t\u0010/\u001a\u00020\u0003HÆ\u0003J\t\u00100\u001a\u00020\u0003HÆ\u0003J\t\u00101\u001a\u00020\u0003HÆ\u0003J\t\u00102\u001a\u00020\u0006HÆ\u0003J\t\u00103\u001a\u00020\u0012HÆ\u0003J\t\u00104\u001a\u00020\u0003HÆ\u0003J\u008f\u0001\u00105\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00062\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\b2\b\b\u0002\u0010\t\u001a\u00020\u00032\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000b2\b\b\u0002\u0010\f\u001a\u00020\u00032\b\b\u0002\u0010\r\u001a\u00020\u00032\b\b\u0002\u0010\u000e\u001a\u00020\u00032\b\b\u0002\u0010\u000f\u001a\u00020\u00032\b\b\u0002\u0010\u0010\u001a\u00020\u00062\b\b\u0002\u0010\u0011\u001a\u00020\u00122\b\b\u0002\u0010\u0013\u001a\u00020\u0003HÆ\u0001J\u0013\u00106\u001a\u00020\u00032\b\u00107\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u00108\u001a\u000209HÖ\u0001J\t\u0010:\u001a\u00020\u0006HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0017R\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0017R\u0011\u0010\u0005\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u001aR\u0013\u0010\u0007\u001a\u0004\u0018\u00010\b¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u001cR\u0011\u0010\t\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u0017R\u0013\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u001fR\u0011\u0010\f\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b \u0010\u0017R\u0011\u0010\r\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b!\u0010\u0017R\u0011\u0010\u000e\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\"\u0010\u0017R\u0011\u0010\u000f\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b#\u0010\u0017R\u0011\u0010\u0010\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b$\u0010\u001aR\u0011\u0010\u0011\u001a\u00020\u0012¢\u0006\b\n\u0000\u001a\u0004\b%\u0010&R\u0011\u0010\u0013\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b'\u0010\u0017¨\u0006;"}, d2 = {"Lcom/discord/chat/presentation/root/MessageContext;", "", "showDivider", "", "canAddNewReactions", "addNewReactionAccessibilityLabel", "", "reactionsTheme", "Lcom/discord/chat/bridge/reaction/ReactionsTheme;", "usingGradientTheme", "truncation", "Lcom/discord/chat/bridge/truncation/Truncation;", "useAttachmentGridLayout", "useAttachmentUploadPreview", "enableSwipeToReply", "enableSwipeToEdit", "obscureLearnMoreLabel", "contextType", "Lcom/discord/chat/presentation/root/MessageContextType;", "showReplyButton", "<init>", "(ZZLjava/lang/String;Lcom/discord/chat/bridge/reaction/ReactionsTheme;ZLcom/discord/chat/bridge/truncation/Truncation;ZZZZLjava/lang/String;Lcom/discord/chat/presentation/root/MessageContextType;Z)V", "getShowDivider", "()Z", "getCanAddNewReactions", "getAddNewReactionAccessibilityLabel", "()Ljava/lang/String;", "getReactionsTheme", "()Lcom/discord/chat/bridge/reaction/ReactionsTheme;", "getUsingGradientTheme", "getTruncation", "()Lcom/discord/chat/bridge/truncation/Truncation;", "getUseAttachmentGridLayout", "getUseAttachmentUploadPreview", "getEnableSwipeToReply", "getEnableSwipeToEdit", "getObscureLearnMoreLabel", "getContextType", "()Lcom/discord/chat/presentation/root/MessageContextType;", "getShowReplyButton", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "component12", "component13", "copy", "equals", "other", "hashCode", "", "toString", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MessageContext {
    @NotNull
    private final String addNewReactionAccessibilityLabel;
    private final boolean canAddNewReactions;
    @NotNull
    private final MessageContextType contextType;
    private final boolean enableSwipeToEdit;
    private final boolean enableSwipeToReply;
    @NotNull
    private final String obscureLearnMoreLabel;
    private final ReactionsTheme reactionsTheme;
    private final boolean showDivider;
    private final boolean showReplyButton;
    private final Truncation truncation;
    private final boolean useAttachmentGridLayout;
    private final boolean useAttachmentUploadPreview;
    private final boolean usingGradientTheme;

    public MessageContext() {
        this(false, false, null, null, false, null, false, false, false, false, null, null, false, 8191, null);
    }

    public static /* synthetic */ MessageContext copy$default(MessageContext messageContext, boolean z10, boolean z11, String str, ReactionsTheme reactionsTheme, boolean z12, Truncation truncation, boolean z13, boolean z14, boolean z15, boolean z16, String str2, MessageContextType messageContextType, boolean z17, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = messageContext.showDivider;
        }
        return messageContext.copy(z10, (i10 & 2) != 0 ? messageContext.canAddNewReactions : z11, (i10 & 4) != 0 ? messageContext.addNewReactionAccessibilityLabel : str, (i10 & 8) != 0 ? messageContext.reactionsTheme : reactionsTheme, (i10 & 16) != 0 ? messageContext.usingGradientTheme : z12, (i10 & 32) != 0 ? messageContext.truncation : truncation, (i10 & 64) != 0 ? messageContext.useAttachmentGridLayout : z13, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? messageContext.useAttachmentUploadPreview : z14, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? messageContext.enableSwipeToReply : z15, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? messageContext.enableSwipeToEdit : z16, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? messageContext.obscureLearnMoreLabel : str2, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? messageContext.contextType : messageContextType, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? messageContext.showReplyButton : z17);
    }

    public final boolean component1() {
        return this.showDivider;
    }

    public final boolean component10() {
        return this.enableSwipeToEdit;
    }

    @NotNull
    public final String component11() {
        return this.obscureLearnMoreLabel;
    }

    @NotNull
    public final MessageContextType component12() {
        return this.contextType;
    }

    public final boolean component13() {
        return this.showReplyButton;
    }

    public final boolean component2() {
        return this.canAddNewReactions;
    }

    @NotNull
    public final String component3() {
        return this.addNewReactionAccessibilityLabel;
    }

    public final ReactionsTheme component4() {
        return this.reactionsTheme;
    }

    public final boolean component5() {
        return this.usingGradientTheme;
    }

    public final Truncation component6() {
        return this.truncation;
    }

    public final boolean component7() {
        return this.useAttachmentGridLayout;
    }

    public final boolean component8() {
        return this.useAttachmentUploadPreview;
    }

    public final boolean component9() {
        return this.enableSwipeToReply;
    }

    @NotNull
    public final MessageContext copy(boolean z10, boolean z11, @NotNull String addNewReactionAccessibilityLabel, ReactionsTheme reactionsTheme, boolean z12, Truncation truncation, boolean z13, boolean z14, boolean z15, boolean z16, @NotNull String obscureLearnMoreLabel, @NotNull MessageContextType contextType, boolean z17) {
        Intrinsics.checkNotNullParameter(addNewReactionAccessibilityLabel, "addNewReactionAccessibilityLabel");
        Intrinsics.checkNotNullParameter(obscureLearnMoreLabel, "obscureLearnMoreLabel");
        Intrinsics.checkNotNullParameter(contextType, "contextType");
        return new MessageContext(z10, z11, addNewReactionAccessibilityLabel, reactionsTheme, z12, truncation, z13, z14, z15, z16, obscureLearnMoreLabel, contextType, z17);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof MessageContext) {
            MessageContext messageContext = (MessageContext) obj;
            return this.showDivider == messageContext.showDivider && this.canAddNewReactions == messageContext.canAddNewReactions && Intrinsics.areEqual(this.addNewReactionAccessibilityLabel, messageContext.addNewReactionAccessibilityLabel) && Intrinsics.areEqual(this.reactionsTheme, messageContext.reactionsTheme) && this.usingGradientTheme == messageContext.usingGradientTheme && Intrinsics.areEqual(this.truncation, messageContext.truncation) && this.useAttachmentGridLayout == messageContext.useAttachmentGridLayout && this.useAttachmentUploadPreview == messageContext.useAttachmentUploadPreview && this.enableSwipeToReply == messageContext.enableSwipeToReply && this.enableSwipeToEdit == messageContext.enableSwipeToEdit && Intrinsics.areEqual(this.obscureLearnMoreLabel, messageContext.obscureLearnMoreLabel) && this.contextType == messageContext.contextType && this.showReplyButton == messageContext.showReplyButton;
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

    @NotNull
    public final MessageContextType getContextType() {
        return this.contextType;
    }

    public final boolean getEnableSwipeToEdit() {
        return this.enableSwipeToEdit;
    }

    public final boolean getEnableSwipeToReply() {
        return this.enableSwipeToReply;
    }

    @NotNull
    public final String getObscureLearnMoreLabel() {
        return this.obscureLearnMoreLabel;
    }

    public final ReactionsTheme getReactionsTheme() {
        return this.reactionsTheme;
    }

    public final boolean getShowDivider() {
        return this.showDivider;
    }

    public final boolean getShowReplyButton() {
        return this.showReplyButton;
    }

    public final Truncation getTruncation() {
        return this.truncation;
    }

    public final boolean getUseAttachmentGridLayout() {
        return this.useAttachmentGridLayout;
    }

    public final boolean getUseAttachmentUploadPreview() {
        return this.useAttachmentUploadPreview;
    }

    public final boolean getUsingGradientTheme() {
        return this.usingGradientTheme;
    }

    public int hashCode() {
        int hashCode = ((((Boolean.hashCode(this.showDivider) * 31) + Boolean.hashCode(this.canAddNewReactions)) * 31) + this.addNewReactionAccessibilityLabel.hashCode()) * 31;
        ReactionsTheme reactionsTheme = this.reactionsTheme;
        int hashCode2 = (((hashCode + (reactionsTheme == null ? 0 : reactionsTheme.hashCode())) * 31) + Boolean.hashCode(this.usingGradientTheme)) * 31;
        Truncation truncation = this.truncation;
        return ((((((((((((((hashCode2 + (truncation != null ? truncation.hashCode() : 0)) * 31) + Boolean.hashCode(this.useAttachmentGridLayout)) * 31) + Boolean.hashCode(this.useAttachmentUploadPreview)) * 31) + Boolean.hashCode(this.enableSwipeToReply)) * 31) + Boolean.hashCode(this.enableSwipeToEdit)) * 31) + this.obscureLearnMoreLabel.hashCode()) * 31) + this.contextType.hashCode()) * 31) + Boolean.hashCode(this.showReplyButton);
    }

    @NotNull
    public String toString() {
        boolean z10 = this.showDivider;
        boolean z11 = this.canAddNewReactions;
        String str = this.addNewReactionAccessibilityLabel;
        ReactionsTheme reactionsTheme = this.reactionsTheme;
        boolean z12 = this.usingGradientTheme;
        Truncation truncation = this.truncation;
        boolean z13 = this.useAttachmentGridLayout;
        boolean z14 = this.useAttachmentUploadPreview;
        boolean z15 = this.enableSwipeToReply;
        boolean z16 = this.enableSwipeToEdit;
        String str2 = this.obscureLearnMoreLabel;
        MessageContextType messageContextType = this.contextType;
        boolean z17 = this.showReplyButton;
        return "MessageContext(showDivider=" + z10 + ", canAddNewReactions=" + z11 + ", addNewReactionAccessibilityLabel=" + str + ", reactionsTheme=" + reactionsTheme + ", usingGradientTheme=" + z12 + ", truncation=" + truncation + ", useAttachmentGridLayout=" + z13 + ", useAttachmentUploadPreview=" + z14 + ", enableSwipeToReply=" + z15 + ", enableSwipeToEdit=" + z16 + ", obscureLearnMoreLabel=" + str2 + ", contextType=" + messageContextType + ", showReplyButton=" + z17 + ")";
    }

    public MessageContext(boolean z10, boolean z11, @NotNull String addNewReactionAccessibilityLabel, ReactionsTheme reactionsTheme, boolean z12, Truncation truncation, boolean z13, boolean z14, boolean z15, boolean z16, @NotNull String obscureLearnMoreLabel, @NotNull MessageContextType contextType, boolean z17) {
        Intrinsics.checkNotNullParameter(addNewReactionAccessibilityLabel, "addNewReactionAccessibilityLabel");
        Intrinsics.checkNotNullParameter(obscureLearnMoreLabel, "obscureLearnMoreLabel");
        Intrinsics.checkNotNullParameter(contextType, "contextType");
        this.showDivider = z10;
        this.canAddNewReactions = z11;
        this.addNewReactionAccessibilityLabel = addNewReactionAccessibilityLabel;
        this.reactionsTheme = reactionsTheme;
        this.usingGradientTheme = z12;
        this.truncation = truncation;
        this.useAttachmentGridLayout = z13;
        this.useAttachmentUploadPreview = z14;
        this.enableSwipeToReply = z15;
        this.enableSwipeToEdit = z16;
        this.obscureLearnMoreLabel = obscureLearnMoreLabel;
        this.contextType = contextType;
        this.showReplyButton = z17;
    }

    public /* synthetic */ MessageContext(boolean z10, boolean z11, String str, ReactionsTheme reactionsTheme, boolean z12, Truncation truncation, boolean z13, boolean z14, boolean z15, boolean z16, String str2, MessageContextType messageContextType, boolean z17, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? false : z10, (i10 & 2) != 0 ? false : z11, (i10 & 4) != 0 ? "" : str, (i10 & 8) != 0 ? null : reactionsTheme, (i10 & 16) != 0 ? false : z12, (i10 & 32) == 0 ? truncation : null, (i10 & 64) != 0 ? false : z13, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? false : z14, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? false : z15, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? false : z16, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 0 ? str2 : "", (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? MessageContextType.DEFAULT : messageContextType, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? false : z17);
    }
}
