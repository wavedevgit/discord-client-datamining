package com.discord.chat.presentation.message.messagepart;

import com.discord.chat.bridge.Message;
import com.discord.chat.bridge.sticker.Sticker;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\t\u0010\f\u001a\u00020\u0003HÆ\u0003J\t\u0010\r\u001a\u00020\u0005HÆ\u0003J\u001d\u0010\u000e\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u000f\u001a\u00020\u00102\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012HÖ\u0003J\t\u0010\u0013\u001a\u00020\u0014HÖ\u0001J\t\u0010\u0015\u001a\u00020\u0016HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000b¨\u0006\u0017"}, d2 = {"Lcom/discord/chat/presentation/message/messagepart/WelcomeStickerAccessory;", "Lcom/discord/chat/presentation/message/messagepart/MessageAccessory;", "message", "Lcom/discord/chat/bridge/Message;", "sticker", "Lcom/discord/chat/bridge/sticker/Sticker;", "<init>", "(Lcom/discord/chat/bridge/Message;Lcom/discord/chat/bridge/sticker/Sticker;)V", "getMessage", "()Lcom/discord/chat/bridge/Message;", "getSticker", "()Lcom/discord/chat/bridge/sticker/Sticker;", "component1", "component2", "copy", "equals", "", "other", "", "hashCode", "", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class WelcomeStickerAccessory extends MessageAccessory {
    @NotNull
    private final Message message;
    @NotNull
    private final Sticker sticker;

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public WelcomeStickerAccessory(@org.jetbrains.annotations.NotNull com.discord.chat.bridge.Message r8, @org.jetbrains.annotations.NotNull com.discord.chat.bridge.sticker.Sticker r9) {
        /*
            r7 = this;
            java.lang.String r0 = "message"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r8, r0)
            java.lang.String r0 = "sticker"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r9, r0)
            java.lang.String r2 = r8.m239getId3Eiw7ao()
            long r0 = r9.getId()
            java.lang.StringBuilder r3 = new java.lang.StringBuilder
            r3.<init>()
            java.lang.String r4 = "welcome sticker "
            r3.append(r4)
            r3.append(r0)
            java.lang.String r3 = r3.toString()
            r5 = 4
            r6 = 0
            r4 = 0
            r1 = r7
            r1.<init>(r2, r3, r4, r5, r6)
            r1.message = r8
            r1.sticker = r9
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.presentation.message.messagepart.WelcomeStickerAccessory.<init>(com.discord.chat.bridge.Message, com.discord.chat.bridge.sticker.Sticker):void");
    }

    public static /* synthetic */ WelcomeStickerAccessory copy$default(WelcomeStickerAccessory welcomeStickerAccessory, Message message, Sticker sticker, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            message = welcomeStickerAccessory.message;
        }
        if ((i10 & 2) != 0) {
            sticker = welcomeStickerAccessory.sticker;
        }
        return welcomeStickerAccessory.copy(message, sticker);
    }

    @NotNull
    public final Message component1() {
        return this.message;
    }

    @NotNull
    public final Sticker component2() {
        return this.sticker;
    }

    @NotNull
    public final WelcomeStickerAccessory copy(@NotNull Message message, @NotNull Sticker sticker) {
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(sticker, "sticker");
        return new WelcomeStickerAccessory(message, sticker);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof WelcomeStickerAccessory) {
            WelcomeStickerAccessory welcomeStickerAccessory = (WelcomeStickerAccessory) obj;
            return Intrinsics.areEqual(this.message, welcomeStickerAccessory.message) && Intrinsics.areEqual(this.sticker, welcomeStickerAccessory.sticker);
        }
        return false;
    }

    @NotNull
    public final Message getMessage() {
        return this.message;
    }

    @NotNull
    public final Sticker getSticker() {
        return this.sticker;
    }

    public int hashCode() {
        return (this.message.hashCode() * 31) + this.sticker.hashCode();
    }

    @NotNull
    public String toString() {
        Message message = this.message;
        Sticker sticker = this.sticker;
        return "WelcomeStickerAccessory(message=" + message + ", sticker=" + sticker + ")";
    }
}
