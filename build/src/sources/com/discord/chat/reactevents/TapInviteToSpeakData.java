package com.discord.chat.reactevents;

import com.discord.primitives.MessageId;
import com.discord.react.utilities.NativeMapExtensionsKt;
import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import lr.v;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\t\u001a\u00020\nH\u0016J\u0010\u0010\u000b\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\f\u0010\u0007J\u001a\u0010\r\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u0003HÆ\u0001¢\u0006\u0004\b\u000e\u0010\u000fJ\u0013\u0010\u0010\u001a\u00020\u00112\b\u0010\u0012\u001a\u0004\u0018\u00010\u0013HÖ\u0003J\t\u0010\u0014\u001a\u00020\u0015HÖ\u0001J\t\u0010\u0016\u001a\u00020\u0017HÖ\u0001R\u0013\u0010\u0002\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010\b\u001a\u0004\b\u0006\u0010\u0007¨\u0006\u0018"}, d2 = {"Lcom/discord/chat/reactevents/TapInviteToSpeakData;", "Lcom/discord/reactevents/ReactEvent;", "messageId", "Lcom/discord/primitives/MessageId;", "<init>", "(Ljava/lang/String;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "serialize", "Lcom/facebook/react/bridge/WritableMap;", "component1", "component1-3Eiw7ao", "copy", "copy-1xi1bu0", "(Ljava/lang/String;)Lcom/discord/chat/reactevents/TapInviteToSpeakData;", "equals", "", "other", "", "hashCode", "", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TapInviteToSpeakData implements ReactEvent {
    @NotNull
    private final String messageId;

    public /* synthetic */ TapInviteToSpeakData(String str, DefaultConstructorMarker defaultConstructorMarker) {
        this(str);
    }

    /* renamed from: copy-1xi1bu0$default  reason: not valid java name */
    public static /* synthetic */ TapInviteToSpeakData m804copy1xi1bu0$default(TapInviteToSpeakData tapInviteToSpeakData, String str, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = tapInviteToSpeakData.messageId;
        }
        return tapInviteToSpeakData.m806copy1xi1bu0(str);
    }

    @NotNull
    /* renamed from: component1-3Eiw7ao  reason: not valid java name */
    public final String m805component13Eiw7ao() {
        return this.messageId;
    }

    @NotNull
    /* renamed from: copy-1xi1bu0  reason: not valid java name */
    public final TapInviteToSpeakData m806copy1xi1bu0(@NotNull String messageId) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        return new TapInviteToSpeakData(messageId, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        return (obj instanceof TapInviteToSpeakData) && MessageId.m1089equalsimpl0(this.messageId, ((TapInviteToSpeakData) obj).messageId);
    }

    @NotNull
    /* renamed from: getMessageId-3Eiw7ao  reason: not valid java name */
    public final String m807getMessageId3Eiw7ao() {
        return this.messageId;
    }

    public int hashCode() {
        return MessageId.m1090hashCodeimpl(this.messageId);
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return NativeMapExtensionsKt.nativeMapOf(v.a("messageId", MessageId.m1092toStringimpl(this.messageId)));
    }

    @NotNull
    public String toString() {
        String m1092toStringimpl = MessageId.m1092toStringimpl(this.messageId);
        return "TapInviteToSpeakData(messageId=" + m1092toStringimpl + ")";
    }

    private TapInviteToSpeakData(String messageId) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.messageId = messageId;
    }
}
