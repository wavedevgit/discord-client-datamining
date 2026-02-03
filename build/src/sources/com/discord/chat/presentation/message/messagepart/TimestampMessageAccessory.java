package com.discord.chat.presentation.message.messagepart;

import com.discord.fonts.DiscordFont;
import com.discord.primitives.MessageId;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0013\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0086\b\u0018\u00002\u00020\u0001B)\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\b\b\u0001\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\t¢\u0006\u0004\b\n\u0010\u000bJ\u0010\u0010\u0014\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u0015\u0010\rJ\t\u0010\u0016\u001a\u00020\u0005HÆ\u0003J\t\u0010\u0017\u001a\u00020\u0007HÆ\u0003J\t\u0010\u0018\u001a\u00020\tHÆ\u0003J8\u0010\u0019\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0003\u0010\u0006\u001a\u00020\u00072\b\b\u0002\u0010\b\u001a\u00020\tHÆ\u0001¢\u0006\u0004\b\u001a\u0010\u001bJ\u0013\u0010\u001c\u001a\u00020\u001d2\b\u0010\u001e\u001a\u0004\u0018\u00010\u001fHÖ\u0003J\t\u0010 \u001a\u00020\u0007HÖ\u0001J\t\u0010!\u001a\u00020\u0005HÖ\u0001R\u0016\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\n\n\u0002\u0010\u000e\u001a\u0004\b\f\u0010\rR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\rR\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0011\u0010\b\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013¨\u0006\""}, d2 = {"Lcom/discord/chat/presentation/message/messagepart/TimestampMessageAccessory;", "Lcom/discord/chat/presentation/message/messagepart/MessageAccessory;", "messageId", "Lcom/discord/primitives/MessageId;", "timestamp", "", "textColor", "", "discordFont", "Lcom/discord/fonts/DiscordFont;", "<init>", "(Ljava/lang/String;Ljava/lang/String;ILcom/discord/fonts/DiscordFont;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getTimestamp", "getTextColor", "()I", "getDiscordFont", "()Lcom/discord/fonts/DiscordFont;", "component1", "component1-3Eiw7ao", "component2", "component3", "component4", "copy", "copy-AFFcxXc", "(Ljava/lang/String;Ljava/lang/String;ILcom/discord/fonts/DiscordFont;)Lcom/discord/chat/presentation/message/messagepart/TimestampMessageAccessory;", "equals", "", "other", "", "hashCode", "toString", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TimestampMessageAccessory extends MessageAccessory {
    @NotNull
    private final DiscordFont discordFont;
    @NotNull
    private final String messageId;
    private final int textColor;
    @NotNull
    private final String timestamp;

    public /* synthetic */ TimestampMessageAccessory(String str, String str2, int i10, DiscordFont discordFont, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, str2, i10, discordFont);
    }

    /* renamed from: copy-AFFcxXc$default  reason: not valid java name */
    public static /* synthetic */ TimestampMessageAccessory m668copyAFFcxXc$default(TimestampMessageAccessory timestampMessageAccessory, String str, String str2, int i10, DiscordFont discordFont, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            str = timestampMessageAccessory.messageId;
        }
        if ((i11 & 2) != 0) {
            str2 = timestampMessageAccessory.timestamp;
        }
        if ((i11 & 4) != 0) {
            i10 = timestampMessageAccessory.textColor;
        }
        if ((i11 & 8) != 0) {
            discordFont = timestampMessageAccessory.discordFont;
        }
        return timestampMessageAccessory.m670copyAFFcxXc(str, str2, i10, discordFont);
    }

    @NotNull
    /* renamed from: component1-3Eiw7ao  reason: not valid java name */
    public final String m669component13Eiw7ao() {
        return this.messageId;
    }

    @NotNull
    public final String component2() {
        return this.timestamp;
    }

    public final int component3() {
        return this.textColor;
    }

    @NotNull
    public final DiscordFont component4() {
        return this.discordFont;
    }

    @NotNull
    /* renamed from: copy-AFFcxXc  reason: not valid java name */
    public final TimestampMessageAccessory m670copyAFFcxXc(@NotNull String messageId, @NotNull String timestamp, int i10, @NotNull DiscordFont discordFont) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(timestamp, "timestamp");
        Intrinsics.checkNotNullParameter(discordFont, "discordFont");
        return new TimestampMessageAccessory(messageId, timestamp, i10, discordFont, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof TimestampMessageAccessory) {
            TimestampMessageAccessory timestampMessageAccessory = (TimestampMessageAccessory) obj;
            return MessageId.m1090equalsimpl0(this.messageId, timestampMessageAccessory.messageId) && Intrinsics.areEqual(this.timestamp, timestampMessageAccessory.timestamp) && this.textColor == timestampMessageAccessory.textColor && this.discordFont == timestampMessageAccessory.discordFont;
        }
        return false;
    }

    @NotNull
    public final DiscordFont getDiscordFont() {
        return this.discordFont;
    }

    @Override // com.discord.chat.presentation.message.messagepart.MessageAccessory
    @NotNull
    /* renamed from: getMessageId-3Eiw7ao */
    public String mo538getMessageId3Eiw7ao() {
        return this.messageId;
    }

    public final int getTextColor() {
        return this.textColor;
    }

    @NotNull
    public final String getTimestamp() {
        return this.timestamp;
    }

    public int hashCode() {
        return (((((MessageId.m1091hashCodeimpl(this.messageId) * 31) + this.timestamp.hashCode()) * 31) + Integer.hashCode(this.textColor)) * 31) + this.discordFont.hashCode();
    }

    @NotNull
    public String toString() {
        String m1093toStringimpl = MessageId.m1093toStringimpl(this.messageId);
        String str = this.timestamp;
        int i10 = this.textColor;
        DiscordFont discordFont = this.discordFont;
        return "TimestampMessageAccessory(messageId=" + m1093toStringimpl + ", timestamp=" + str + ", textColor=" + i10 + ", discordFont=" + discordFont + ")";
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    private TimestampMessageAccessory(String messageId, String timestamp, int i10, DiscordFont discordFont) {
        super(messageId, "timestamp " + timestamp, false, 4, null);
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(timestamp, "timestamp");
        Intrinsics.checkNotNullParameter(discordFont, "discordFont");
        this.messageId = messageId;
        this.timestamp = timestamp;
        this.textColor = i10;
        this.discordFont = discordFont;
    }
}
