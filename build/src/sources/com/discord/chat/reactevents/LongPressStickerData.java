package com.discord.chat.reactevents;

import com.discord.chat.bridge.sticker.Sticker;
import com.discord.primitives.MessageId;
import com.discord.react.utilities.NativeMapExtensionsKt;
import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.devsupport.StackTraceHelper;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import qr.v;
@Metadata(d1 = {"\u00008\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\b\u0010\r\u001a\u00020\u000eH\u0016J\u0010\u0010\u000f\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u0010\u0010\tJ\t\u0010\u0011\u001a\u00020\u0005HÆ\u0003J$\u0010\u0012\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001¢\u0006\u0004\b\u0013\u0010\u0014J\u0013\u0010\u0015\u001a\u00020\u00162\b\u0010\u0017\u001a\u0004\u0018\u00010\u0018HÖ\u0003J\t\u0010\u0019\u001a\u00020\u001aHÖ\u0001J\t\u0010\u001b\u001a\u00020\u001cHÖ\u0001R\u0013\u0010\u0002\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010\n\u001a\u0004\b\b\u0010\tR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\f¨\u0006\u001d"}, d2 = {"Lcom/discord/chat/reactevents/LongPressStickerData;", "Lcom/discord/reactevents/ReactEvent;", "messageId", "Lcom/discord/primitives/MessageId;", "sticker", "Lcom/discord/chat/bridge/sticker/Sticker;", "<init>", "(Ljava/lang/String;Lcom/discord/chat/bridge/sticker/Sticker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getSticker", "()Lcom/discord/chat/bridge/sticker/Sticker;", "serialize", "Lcom/facebook/react/bridge/WritableMap;", "component1", "component1-3Eiw7ao", "component2", "copy", "copy-ntcYbpo", "(Ljava/lang/String;Lcom/discord/chat/bridge/sticker/Sticker;)Lcom/discord/chat/reactevents/LongPressStickerData;", "equals", "", "other", "", "hashCode", "", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class LongPressStickerData implements ReactEvent {
    @NotNull
    private final String messageId;
    @NotNull
    private final Sticker sticker;

    public /* synthetic */ LongPressStickerData(String str, Sticker sticker, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, sticker);
    }

    /* renamed from: copy-ntcYbpo$default  reason: not valid java name */
    public static /* synthetic */ LongPressStickerData m756copyntcYbpo$default(LongPressStickerData longPressStickerData, String str, Sticker sticker, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = longPressStickerData.messageId;
        }
        if ((i10 & 2) != 0) {
            sticker = longPressStickerData.sticker;
        }
        return longPressStickerData.m758copyntcYbpo(str, sticker);
    }

    @NotNull
    /* renamed from: component1-3Eiw7ao  reason: not valid java name */
    public final String m757component13Eiw7ao() {
        return this.messageId;
    }

    @NotNull
    public final Sticker component2() {
        return this.sticker;
    }

    @NotNull
    /* renamed from: copy-ntcYbpo  reason: not valid java name */
    public final LongPressStickerData m758copyntcYbpo(@NotNull String messageId, @NotNull Sticker sticker) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(sticker, "sticker");
        return new LongPressStickerData(messageId, sticker, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof LongPressStickerData) {
            LongPressStickerData longPressStickerData = (LongPressStickerData) obj;
            return MessageId.m1087equalsimpl0(this.messageId, longPressStickerData.messageId) && Intrinsics.areEqual(this.sticker, longPressStickerData.sticker);
        }
        return false;
    }

    @NotNull
    /* renamed from: getMessageId-3Eiw7ao  reason: not valid java name */
    public final String m759getMessageId3Eiw7ao() {
        return this.messageId;
    }

    @NotNull
    public final Sticker getSticker() {
        return this.sticker;
    }

    public int hashCode() {
        return (MessageId.m1088hashCodeimpl(this.messageId) * 31) + this.sticker.hashCode();
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return NativeMapExtensionsKt.nativeMapOf(v.a("messageId", this.messageId), v.a("sticker", NativeMapExtensionsKt.nativeMapOf(v.a(StackTraceHelper.ID_KEY, String.valueOf(this.sticker.getId())), v.a(StackTraceHelper.NAME_KEY, this.sticker.getName()))));
    }

    @NotNull
    public String toString() {
        String m1090toStringimpl = MessageId.m1090toStringimpl(this.messageId);
        Sticker sticker = this.sticker;
        return "LongPressStickerData(messageId=" + m1090toStringimpl + ", sticker=" + sticker + ")";
    }

    private LongPressStickerData(String messageId, Sticker sticker) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(sticker, "sticker");
        this.messageId = messageId;
        this.sticker = sticker;
    }
}
