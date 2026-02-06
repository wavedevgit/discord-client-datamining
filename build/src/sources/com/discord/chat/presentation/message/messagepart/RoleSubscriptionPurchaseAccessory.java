package com.discord.chat.presentation.message.messagepart;

import com.discord.primitives.MessageId;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0018\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0086\b\u0018\u00002\u00020\u0001B;\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0007\u0012\u0006\u0010\t\u001a\u00020\n\u0012\u0006\u0010\u000b\u001a\u00020\f¢\u0006\u0004\b\r\u0010\u000eJ\u0010\u0010\u0019\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u001a\u0010\u0010J\t\u0010\u001b\u001a\u00020\u0005HÆ\u0003J\u000b\u0010\u001c\u001a\u0004\u0018\u00010\u0007HÆ\u0003J\u000b\u0010\u001d\u001a\u0004\u0018\u00010\u0007HÆ\u0003J\t\u0010\u001e\u001a\u00020\nHÆ\u0003J\t\u0010\u001f\u001a\u00020\fHÆ\u0003JP\u0010 \u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u00072\b\b\u0002\u0010\t\u001a\u00020\n2\b\b\u0002\u0010\u000b\u001a\u00020\fHÆ\u0001¢\u0006\u0004\b!\u0010\"J\u0013\u0010#\u001a\u00020\f2\b\u0010$\u001a\u0004\u0018\u00010%HÖ\u0003J\t\u0010&\u001a\u00020\nHÖ\u0001J\t\u0010'\u001a\u00020\u0007HÖ\u0001R\u0016\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\n\n\u0002\u0010\u0011\u001a\u0004\b\u000f\u0010\u0010R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0010R\u0013\u0010\b\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0010R\u0011\u0010\t\u001a\u00020\n¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0017R\u0011\u0010\u000b\u001a\u00020\f¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\u0018¨\u0006("}, d2 = {"Lcom/discord/chat/presentation/message/messagepart/RoleSubscriptionPurchaseAccessory;", "Lcom/discord/chat/presentation/message/messagepart/MessageAccessory;", "messageId", "Lcom/discord/primitives/MessageId;", "margins", "Lcom/discord/chat/presentation/message/messagepart/MessageMargins;", "authorUsername", "", "authorAvatar", "constrainedWidth", "", "isForwardedContent", "", "<init>", "(Ljava/lang/String;Lcom/discord/chat/presentation/message/messagepart/MessageMargins;Ljava/lang/String;Ljava/lang/String;IZLkotlin/jvm/internal/DefaultConstructorMarker;)V", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getMargins", "()Lcom/discord/chat/presentation/message/messagepart/MessageMargins;", "getAuthorUsername", "getAuthorAvatar", "getConstrainedWidth", "()I", "()Z", "component1", "component1-3Eiw7ao", "component2", "component3", "component4", "component5", "component6", "copy", "copy-LdU2QRA", "(Ljava/lang/String;Lcom/discord/chat/presentation/message/messagepart/MessageMargins;Ljava/lang/String;Ljava/lang/String;IZ)Lcom/discord/chat/presentation/message/messagepart/RoleSubscriptionPurchaseAccessory;", "equals", "other", "", "hashCode", "toString", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class RoleSubscriptionPurchaseAccessory extends MessageAccessory {
    private final String authorAvatar;
    private final String authorUsername;
    private final int constrainedWidth;
    private final boolean isForwardedContent;
    @NotNull
    private final MessageMargins margins;
    @NotNull
    private final String messageId;

    public /* synthetic */ RoleSubscriptionPurchaseAccessory(String str, MessageMargins messageMargins, String str2, String str3, int i10, boolean z10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, messageMargins, str2, str3, i10, z10);
    }

    /* renamed from: copy-LdU2QRA$default  reason: not valid java name */
    public static /* synthetic */ RoleSubscriptionPurchaseAccessory m643copyLdU2QRA$default(RoleSubscriptionPurchaseAccessory roleSubscriptionPurchaseAccessory, String str, MessageMargins messageMargins, String str2, String str3, int i10, boolean z10, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            str = roleSubscriptionPurchaseAccessory.messageId;
        }
        if ((i11 & 2) != 0) {
            messageMargins = roleSubscriptionPurchaseAccessory.margins;
        }
        if ((i11 & 4) != 0) {
            str2 = roleSubscriptionPurchaseAccessory.authorUsername;
        }
        if ((i11 & 8) != 0) {
            str3 = roleSubscriptionPurchaseAccessory.authorAvatar;
        }
        if ((i11 & 16) != 0) {
            i10 = roleSubscriptionPurchaseAccessory.constrainedWidth;
        }
        if ((i11 & 32) != 0) {
            z10 = roleSubscriptionPurchaseAccessory.isForwardedContent;
        }
        int i12 = i10;
        boolean z11 = z10;
        return roleSubscriptionPurchaseAccessory.m645copyLdU2QRA(str, messageMargins, str2, str3, i12, z11);
    }

    @NotNull
    /* renamed from: component1-3Eiw7ao  reason: not valid java name */
    public final String m644component13Eiw7ao() {
        return this.messageId;
    }

    @NotNull
    public final MessageMargins component2() {
        return this.margins;
    }

    public final String component3() {
        return this.authorUsername;
    }

    public final String component4() {
        return this.authorAvatar;
    }

    public final int component5() {
        return this.constrainedWidth;
    }

    public final boolean component6() {
        return this.isForwardedContent;
    }

    @NotNull
    /* renamed from: copy-LdU2QRA  reason: not valid java name */
    public final RoleSubscriptionPurchaseAccessory m645copyLdU2QRA(@NotNull String messageId, @NotNull MessageMargins margins, String str, String str2, int i10, boolean z10) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(margins, "margins");
        return new RoleSubscriptionPurchaseAccessory(messageId, margins, str, str2, i10, z10, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof RoleSubscriptionPurchaseAccessory) {
            RoleSubscriptionPurchaseAccessory roleSubscriptionPurchaseAccessory = (RoleSubscriptionPurchaseAccessory) obj;
            return MessageId.m1087equalsimpl0(this.messageId, roleSubscriptionPurchaseAccessory.messageId) && Intrinsics.areEqual(this.margins, roleSubscriptionPurchaseAccessory.margins) && Intrinsics.areEqual(this.authorUsername, roleSubscriptionPurchaseAccessory.authorUsername) && Intrinsics.areEqual(this.authorAvatar, roleSubscriptionPurchaseAccessory.authorAvatar) && this.constrainedWidth == roleSubscriptionPurchaseAccessory.constrainedWidth && this.isForwardedContent == roleSubscriptionPurchaseAccessory.isForwardedContent;
        }
        return false;
    }

    public final String getAuthorAvatar() {
        return this.authorAvatar;
    }

    public final String getAuthorUsername() {
        return this.authorUsername;
    }

    public final int getConstrainedWidth() {
        return this.constrainedWidth;
    }

    @NotNull
    public final MessageMargins getMargins() {
        return this.margins;
    }

    @Override // com.discord.chat.presentation.message.messagepart.MessageAccessory
    @NotNull
    /* renamed from: getMessageId-3Eiw7ao */
    public String mo536getMessageId3Eiw7ao() {
        return this.messageId;
    }

    public int hashCode() {
        int m1088hashCodeimpl = ((MessageId.m1088hashCodeimpl(this.messageId) * 31) + this.margins.hashCode()) * 31;
        String str = this.authorUsername;
        int hashCode = (m1088hashCodeimpl + (str == null ? 0 : str.hashCode())) * 31;
        String str2 = this.authorAvatar;
        return ((((hashCode + (str2 != null ? str2.hashCode() : 0)) * 31) + Integer.hashCode(this.constrainedWidth)) * 31) + Boolean.hashCode(this.isForwardedContent);
    }

    public final boolean isForwardedContent() {
        return this.isForwardedContent;
    }

    @NotNull
    public String toString() {
        String m1090toStringimpl = MessageId.m1090toStringimpl(this.messageId);
        MessageMargins messageMargins = this.margins;
        String str = this.authorUsername;
        String str2 = this.authorAvatar;
        int i10 = this.constrainedWidth;
        boolean z10 = this.isForwardedContent;
        return "RoleSubscriptionPurchaseAccessory(messageId=" + m1090toStringimpl + ", margins=" + messageMargins + ", authorUsername=" + str + ", authorAvatar=" + str2 + ", constrainedWidth=" + i10 + ", isForwardedContent=" + z10 + ")";
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    private RoleSubscriptionPurchaseAccessory(String messageId, MessageMargins margins, String str, String str2, int i10, boolean z10) {
        super(messageId, "role subscription purchase", false, 4, null);
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(margins, "margins");
        this.messageId = messageId;
        this.margins = margins;
        this.authorUsername = str;
        this.authorAvatar = str2;
        this.constrainedWidth = i10;
        this.isForwardedContent = z10;
    }
}
