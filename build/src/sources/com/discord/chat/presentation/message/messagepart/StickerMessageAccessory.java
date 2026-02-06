package com.discord.chat.presentation.message.messagepart;

import com.discord.chat.bridge.sticker.Sticker;
import com.discord.primitives.MessageId;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000e\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u0010\u0010\r\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u000e\u0010\tJ\t\u0010\u000f\u001a\u00020\u0005HÆ\u0003J$\u0010\u0010\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001¢\u0006\u0004\b\u0011\u0010\u0012J\u0013\u0010\u0013\u001a\u00020\u00142\b\u0010\u0015\u001a\u0004\u0018\u00010\u0016HÖ\u0003J\t\u0010\u0017\u001a\u00020\u0018HÖ\u0001J\t\u0010\u0019\u001a\u00020\u001aHÖ\u0001R\u0016\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\n\n\u0002\u0010\n\u001a\u0004\b\b\u0010\tR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\f¨\u0006\u001b"}, d2 = {"Lcom/discord/chat/presentation/message/messagepart/StickerMessageAccessory;", "Lcom/discord/chat/presentation/message/messagepart/MessageAccessory;", "messageId", "Lcom/discord/primitives/MessageId;", "sticker", "Lcom/discord/chat/bridge/sticker/Sticker;", "<init>", "(Ljava/lang/String;Lcom/discord/chat/bridge/sticker/Sticker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getSticker", "()Lcom/discord/chat/bridge/sticker/Sticker;", "component1", "component1-3Eiw7ao", "component2", "copy", "copy-ntcYbpo", "(Ljava/lang/String;Lcom/discord/chat/bridge/sticker/Sticker;)Lcom/discord/chat/presentation/message/messagepart/StickerMessageAccessory;", "equals", "", "other", "", "hashCode", "", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class StickerMessageAccessory extends MessageAccessory {
    @NotNull
    private final String messageId;
    @NotNull
    private final Sticker sticker;

    public /* synthetic */ StickerMessageAccessory(String str, Sticker sticker, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, sticker);
    }

    /* renamed from: copy-ntcYbpo$default  reason: not valid java name */
    public static /* synthetic */ StickerMessageAccessory m657copyntcYbpo$default(StickerMessageAccessory stickerMessageAccessory, String str, Sticker sticker, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = stickerMessageAccessory.messageId;
        }
        if ((i10 & 2) != 0) {
            sticker = stickerMessageAccessory.sticker;
        }
        return stickerMessageAccessory.m659copyntcYbpo(str, sticker);
    }

    @NotNull
    /* renamed from: component1-3Eiw7ao  reason: not valid java name */
    public final String m658component13Eiw7ao() {
        return this.messageId;
    }

    @NotNull
    public final Sticker component2() {
        return this.sticker;
    }

    @NotNull
    /* renamed from: copy-ntcYbpo  reason: not valid java name */
    public final StickerMessageAccessory m659copyntcYbpo(@NotNull String messageId, @NotNull Sticker sticker) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(sticker, "sticker");
        return new StickerMessageAccessory(messageId, sticker, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof StickerMessageAccessory) {
            StickerMessageAccessory stickerMessageAccessory = (StickerMessageAccessory) obj;
            return MessageId.m1087equalsimpl0(this.messageId, stickerMessageAccessory.messageId) && Intrinsics.areEqual(this.sticker, stickerMessageAccessory.sticker);
        }
        return false;
    }

    @Override // com.discord.chat.presentation.message.messagepart.MessageAccessory
    @NotNull
    /* renamed from: getMessageId-3Eiw7ao */
    public String mo536getMessageId3Eiw7ao() {
        return this.messageId;
    }

    @NotNull
    public final Sticker getSticker() {
        return this.sticker;
    }

    public int hashCode() {
        return (MessageId.m1088hashCodeimpl(this.messageId) * 31) + this.sticker.hashCode();
    }

    @NotNull
    public String toString() {
        String m1090toStringimpl = MessageId.m1090toStringimpl(this.messageId);
        Sticker sticker = this.sticker;
        return "StickerMessageAccessory(messageId=" + m1090toStringimpl + ", sticker=" + sticker + ")";
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private StickerMessageAccessory(java.lang.String r11, com.discord.chat.bridge.sticker.Sticker r12) {
        /*
            r10 = this;
            java.lang.String r0 = "messageId"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r11, r0)
            java.lang.String r0 = "sticker"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r12, r0)
            long r0 = r12.getId()
            java.lang.StringBuilder r2 = new java.lang.StringBuilder
            r2.<init>()
            java.lang.String r3 = "sticker-"
            r2.append(r3)
            r2.append(r0)
            java.lang.String r6 = r2.toString()
            r8 = 4
            r9 = 0
            r7 = 0
            r4 = r10
            r5 = r11
            r4.<init>(r5, r6, r7, r8, r9)
            r4.messageId = r5
            r4.sticker = r12
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.presentation.message.messagepart.StickerMessageAccessory.<init>(java.lang.String, com.discord.chat.bridge.sticker.Sticker):void");
    }
}
