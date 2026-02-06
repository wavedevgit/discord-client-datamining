package com.discord.chat.presentation.message.messagepart;

import com.discord.chat.bridge.codedlinks.GuildProfileInviteEmbedImpl;
import com.discord.primitives.MessageId;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0011\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u001f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tJ\u0010\u0010\u0011\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u0012\u0010\u000bJ\t\u0010\u0013\u001a\u00020\u0005HÆ\u0003J\t\u0010\u0014\u001a\u00020\u0007HÆ\u0003J.\u0010\u0015\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u0007HÆ\u0001¢\u0006\u0004\b\u0016\u0010\u0017J\u0013\u0010\u0018\u001a\u00020\u00192\b\u0010\u001a\u001a\u0004\u0018\u00010\u001bHÖ\u0003J\t\u0010\u001c\u001a\u00020\u0005HÖ\u0001J\t\u0010\u001d\u001a\u00020\u001eHÖ\u0001R\u0016\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\n\n\u0002\u0010\f\u001a\u0004\b\n\u0010\u000bR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010¨\u0006\u001f"}, d2 = {"Lcom/discord/chat/presentation/message/messagepart/GuildProfileInviteMessageAccessory;", "Lcom/discord/chat/presentation/message/messagepart/MessageAccessory;", "messageId", "Lcom/discord/primitives/MessageId;", "codedLinkIndex", "", "invite", "Lcom/discord/chat/bridge/codedlinks/GuildProfileInviteEmbedImpl;", "<init>", "(Ljava/lang/String;ILcom/discord/chat/bridge/codedlinks/GuildProfileInviteEmbedImpl;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getCodedLinkIndex", "()I", "getInvite", "()Lcom/discord/chat/bridge/codedlinks/GuildProfileInviteEmbedImpl;", "component1", "component1-3Eiw7ao", "component2", "component3", "copy", "copy-u7_MRrM", "(Ljava/lang/String;ILcom/discord/chat/bridge/codedlinks/GuildProfileInviteEmbedImpl;)Lcom/discord/chat/presentation/message/messagepart/GuildProfileInviteMessageAccessory;", "equals", "", "other", "", "hashCode", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class GuildProfileInviteMessageAccessory extends MessageAccessory {
    private final int codedLinkIndex;
    @NotNull
    private final GuildProfileInviteEmbedImpl invite;
    @NotNull
    private final String messageId;

    public /* synthetic */ GuildProfileInviteMessageAccessory(String str, int i10, GuildProfileInviteEmbedImpl guildProfileInviteEmbedImpl, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, i10, guildProfileInviteEmbedImpl);
    }

    /* renamed from: copy-u7_MRrM$default  reason: not valid java name */
    public static /* synthetic */ GuildProfileInviteMessageAccessory m601copyu7_MRrM$default(GuildProfileInviteMessageAccessory guildProfileInviteMessageAccessory, String str, int i10, GuildProfileInviteEmbedImpl guildProfileInviteEmbedImpl, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            str = guildProfileInviteMessageAccessory.messageId;
        }
        if ((i11 & 2) != 0) {
            i10 = guildProfileInviteMessageAccessory.codedLinkIndex;
        }
        if ((i11 & 4) != 0) {
            guildProfileInviteEmbedImpl = guildProfileInviteMessageAccessory.invite;
        }
        return guildProfileInviteMessageAccessory.m603copyu7_MRrM(str, i10, guildProfileInviteEmbedImpl);
    }

    @NotNull
    /* renamed from: component1-3Eiw7ao  reason: not valid java name */
    public final String m602component13Eiw7ao() {
        return this.messageId;
    }

    public final int component2() {
        return this.codedLinkIndex;
    }

    @NotNull
    public final GuildProfileInviteEmbedImpl component3() {
        return this.invite;
    }

    @NotNull
    /* renamed from: copy-u7_MRrM  reason: not valid java name */
    public final GuildProfileInviteMessageAccessory m603copyu7_MRrM(@NotNull String messageId, int i10, @NotNull GuildProfileInviteEmbedImpl invite) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(invite, "invite");
        return new GuildProfileInviteMessageAccessory(messageId, i10, invite, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof GuildProfileInviteMessageAccessory) {
            GuildProfileInviteMessageAccessory guildProfileInviteMessageAccessory = (GuildProfileInviteMessageAccessory) obj;
            return MessageId.m1087equalsimpl0(this.messageId, guildProfileInviteMessageAccessory.messageId) && this.codedLinkIndex == guildProfileInviteMessageAccessory.codedLinkIndex && Intrinsics.areEqual(this.invite, guildProfileInviteMessageAccessory.invite);
        }
        return false;
    }

    public final int getCodedLinkIndex() {
        return this.codedLinkIndex;
    }

    @NotNull
    public final GuildProfileInviteEmbedImpl getInvite() {
        return this.invite;
    }

    @Override // com.discord.chat.presentation.message.messagepart.MessageAccessory
    @NotNull
    /* renamed from: getMessageId-3Eiw7ao */
    public String mo536getMessageId3Eiw7ao() {
        return this.messageId;
    }

    public int hashCode() {
        return (((MessageId.m1088hashCodeimpl(this.messageId) * 31) + Integer.hashCode(this.codedLinkIndex)) * 31) + this.invite.hashCode();
    }

    @NotNull
    public String toString() {
        String m1090toStringimpl = MessageId.m1090toStringimpl(this.messageId);
        int i10 = this.codedLinkIndex;
        GuildProfileInviteEmbedImpl guildProfileInviteEmbedImpl = this.invite;
        return "GuildProfileInviteMessageAccessory(messageId=" + m1090toStringimpl + ", codedLinkIndex=" + i10 + ", invite=" + guildProfileInviteEmbedImpl + ")";
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    private GuildProfileInviteMessageAccessory(String messageId, int i10, GuildProfileInviteEmbedImpl invite) {
        super(messageId, "embedded guild profile invite " + i10, false, 4, null);
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(invite, "invite");
        this.messageId = messageId;
        this.codedLinkIndex = i10;
        this.invite = invite;
    }
}
