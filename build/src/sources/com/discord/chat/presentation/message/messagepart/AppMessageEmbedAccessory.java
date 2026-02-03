package com.discord.chat.presentation.message.messagepart;

import com.discord.chat.bridge.codedlinks.AppMessageEmbedImpl;
import com.discord.primitives.MessageId;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00008\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0017\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B/\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\t\u0012\u0006\u0010\n\u001a\u00020\u0007¢\u0006\u0004\b\u000b\u0010\fJ\u0010\u0010\u0017\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u0018\u0010\u000eJ\t\u0010\u0019\u001a\u00020\u0005HÆ\u0003J\t\u0010\u001a\u001a\u00020\u0007HÆ\u0003J\t\u0010\u001b\u001a\u00020\tHÆ\u0003J\t\u0010\u001c\u001a\u00020\u0007HÆ\u0003JB\u0010\u001d\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00072\b\b\u0002\u0010\b\u001a\u00020\t2\b\b\u0002\u0010\n\u001a\u00020\u0007HÆ\u0001¢\u0006\u0004\b\u001e\u0010\u001fJ\u0013\u0010 \u001a\u00020!2\b\u0010\"\u001a\u0004\u0018\u00010#HÖ\u0003J\t\u0010$\u001a\u00020\u0007HÖ\u0001J\t\u0010%\u001a\u00020&HÖ\u0001R\u0016\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\n\n\u0002\u0010\u000f\u001a\u0004\b\r\u0010\u000eR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0011\u0010\b\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0015R\u0011\u0010\n\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0013¨\u0006'"}, d2 = {"Lcom/discord/chat/presentation/message/messagepart/AppMessageEmbedAccessory;", "Lcom/discord/chat/presentation/message/messagepart/MessageAccessory;", "messageId", "Lcom/discord/primitives/MessageId;", "margins", "Lcom/discord/chat/presentation/message/messagepart/MessageMargins;", "codedLinkIndex", "", "appMessageEmbed", "Lcom/discord/chat/bridge/codedlinks/AppMessageEmbedImpl;", "constrainedWidth", "<init>", "(Ljava/lang/String;Lcom/discord/chat/presentation/message/messagepart/MessageMargins;ILcom/discord/chat/bridge/codedlinks/AppMessageEmbedImpl;ILkotlin/jvm/internal/DefaultConstructorMarker;)V", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getMargins", "()Lcom/discord/chat/presentation/message/messagepart/MessageMargins;", "getCodedLinkIndex", "()I", "getAppMessageEmbed", "()Lcom/discord/chat/bridge/codedlinks/AppMessageEmbedImpl;", "getConstrainedWidth", "component1", "component1-3Eiw7ao", "component2", "component3", "component4", "component5", "copy", "copy-pPZZVto", "(Ljava/lang/String;Lcom/discord/chat/presentation/message/messagepart/MessageMargins;ILcom/discord/chat/bridge/codedlinks/AppMessageEmbedImpl;I)Lcom/discord/chat/presentation/message/messagepart/AppMessageEmbedAccessory;", "equals", "", "other", "", "hashCode", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AppMessageEmbedAccessory extends MessageAccessory {
    @NotNull
    private final AppMessageEmbedImpl appMessageEmbed;
    private final int codedLinkIndex;
    private final int constrainedWidth;
    @NotNull
    private final MessageMargins margins;
    @NotNull
    private final String messageId;

    public /* synthetic */ AppMessageEmbedAccessory(String str, MessageMargins messageMargins, int i10, AppMessageEmbedImpl appMessageEmbedImpl, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, messageMargins, i10, appMessageEmbedImpl, i11);
    }

    /* renamed from: copy-pPZZVto$default  reason: not valid java name */
    public static /* synthetic */ AppMessageEmbedAccessory m542copypPZZVto$default(AppMessageEmbedAccessory appMessageEmbedAccessory, String str, MessageMargins messageMargins, int i10, AppMessageEmbedImpl appMessageEmbedImpl, int i11, int i12, Object obj) {
        if ((i12 & 1) != 0) {
            str = appMessageEmbedAccessory.messageId;
        }
        if ((i12 & 2) != 0) {
            messageMargins = appMessageEmbedAccessory.margins;
        }
        if ((i12 & 4) != 0) {
            i10 = appMessageEmbedAccessory.codedLinkIndex;
        }
        if ((i12 & 8) != 0) {
            appMessageEmbedImpl = appMessageEmbedAccessory.appMessageEmbed;
        }
        if ((i12 & 16) != 0) {
            i11 = appMessageEmbedAccessory.constrainedWidth;
        }
        int i13 = i11;
        int i14 = i10;
        return appMessageEmbedAccessory.m544copypPZZVto(str, messageMargins, i14, appMessageEmbedImpl, i13);
    }

    @NotNull
    /* renamed from: component1-3Eiw7ao  reason: not valid java name */
    public final String m543component13Eiw7ao() {
        return this.messageId;
    }

    @NotNull
    public final MessageMargins component2() {
        return this.margins;
    }

    public final int component3() {
        return this.codedLinkIndex;
    }

    @NotNull
    public final AppMessageEmbedImpl component4() {
        return this.appMessageEmbed;
    }

    public final int component5() {
        return this.constrainedWidth;
    }

    @NotNull
    /* renamed from: copy-pPZZVto  reason: not valid java name */
    public final AppMessageEmbedAccessory m544copypPZZVto(@NotNull String messageId, @NotNull MessageMargins margins, int i10, @NotNull AppMessageEmbedImpl appMessageEmbed, int i11) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(margins, "margins");
        Intrinsics.checkNotNullParameter(appMessageEmbed, "appMessageEmbed");
        return new AppMessageEmbedAccessory(messageId, margins, i10, appMessageEmbed, i11, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof AppMessageEmbedAccessory) {
            AppMessageEmbedAccessory appMessageEmbedAccessory = (AppMessageEmbedAccessory) obj;
            return MessageId.m1089equalsimpl0(this.messageId, appMessageEmbedAccessory.messageId) && Intrinsics.areEqual(this.margins, appMessageEmbedAccessory.margins) && this.codedLinkIndex == appMessageEmbedAccessory.codedLinkIndex && Intrinsics.areEqual(this.appMessageEmbed, appMessageEmbedAccessory.appMessageEmbed) && this.constrainedWidth == appMessageEmbedAccessory.constrainedWidth;
        }
        return false;
    }

    @NotNull
    public final AppMessageEmbedImpl getAppMessageEmbed() {
        return this.appMessageEmbed;
    }

    public final int getCodedLinkIndex() {
        return this.codedLinkIndex;
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
    public String mo538getMessageId3Eiw7ao() {
        return this.messageId;
    }

    public int hashCode() {
        return (((((((MessageId.m1090hashCodeimpl(this.messageId) * 31) + this.margins.hashCode()) * 31) + Integer.hashCode(this.codedLinkIndex)) * 31) + this.appMessageEmbed.hashCode()) * 31) + Integer.hashCode(this.constrainedWidth);
    }

    @NotNull
    public String toString() {
        String m1092toStringimpl = MessageId.m1092toStringimpl(this.messageId);
        MessageMargins messageMargins = this.margins;
        int i10 = this.codedLinkIndex;
        AppMessageEmbedImpl appMessageEmbedImpl = this.appMessageEmbed;
        int i11 = this.constrainedWidth;
        return "AppMessageEmbedAccessory(messageId=" + m1092toStringimpl + ", margins=" + messageMargins + ", codedLinkIndex=" + i10 + ", appMessageEmbed=" + appMessageEmbedImpl + ", constrainedWidth=" + i11 + ")";
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    private AppMessageEmbedAccessory(String messageId, MessageMargins margins, int i10, AppMessageEmbedImpl appMessageEmbed, int i11) {
        super(messageId, "app message embed " + i10, false, 4, null);
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(margins, "margins");
        Intrinsics.checkNotNullParameter(appMessageEmbed, "appMessageEmbed");
        this.messageId = messageId;
        this.margins = margins;
        this.codedLinkIndex = i10;
        this.appMessageEmbed = appMessageEmbed;
        this.constrainedWidth = i11;
    }
}
