package com.discord.chat.reactevents;

import com.discord.primitives.ChannelId;
import com.discord.primitives.MessageId;
import com.discord.react.utilities.NativeMapExtensionsKt;
import com.discord.reactevents.ReactEvent;
import com.discord.reactions.ReactionView;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.devsupport.StackTraceHelper;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import qr.v;
@Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0080\b\u0018\u00002\u00020\u0001B!\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\u0004\b\b\u0010\tJ\b\u0010\u0012\u001a\u00020\u0013H\u0016J\u0010\u0010\u0014\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u0015\u0010\u000bJ\u0010\u0010\u0016\u001a\u00020\u0005HÆ\u0003¢\u0006\u0004\b\u0017\u0010\u000eJ\u000b\u0010\u0018\u001a\u0004\u0018\u00010\u0007HÆ\u0003J0\u0010\u0019\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007HÆ\u0001¢\u0006\u0004\b\u001a\u0010\u001bJ\u0013\u0010\u001c\u001a\u00020\u001d2\b\u0010\u001e\u001a\u0004\u0018\u00010\u001fHÖ\u0003J\t\u0010 \u001a\u00020!HÖ\u0001J\t\u0010\"\u001a\u00020#HÖ\u0001R\u0013\u0010\u0002\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010\f\u001a\u0004\b\n\u0010\u000bR\u0013\u0010\u0004\u001a\u00020\u0005¢\u0006\n\n\u0002\u0010\u000f\u001a\u0004\b\r\u0010\u000eR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011¨\u0006$"}, d2 = {"Lcom/discord/chat/reactevents/LongPressReactionData;", "Lcom/discord/reactevents/ReactEvent;", "messageId", "Lcom/discord/primitives/MessageId;", "channelId", "Lcom/discord/primitives/ChannelId;", "reaction", "Lcom/discord/reactions/ReactionView$Reaction;", "<init>", "(Ljava/lang/String;JLcom/discord/reactions/ReactionView$Reaction;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getChannelId-o4g7jtM", "()J", "J", "getReaction", "()Lcom/discord/reactions/ReactionView$Reaction;", "serialize", "Lcom/facebook/react/bridge/WritableMap;", "component1", "component1-3Eiw7ao", "component2", "component2-o4g7jtM", "component3", "copy", "copy-Eqy5D80", "(Ljava/lang/String;JLcom/discord/reactions/ReactionView$Reaction;)Lcom/discord/chat/reactevents/LongPressReactionData;", "equals", "", "other", "", "hashCode", "", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class LongPressReactionData implements ReactEvent {
    private final long channelId;
    @NotNull
    private final String messageId;
    private final ReactionView.Reaction reaction;

    public /* synthetic */ LongPressReactionData(String str, long j10, ReactionView.Reaction reaction, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, j10, reaction);
    }

    /* renamed from: copy-Eqy5D80$default  reason: not valid java name */
    public static /* synthetic */ LongPressReactionData m750copyEqy5D80$default(LongPressReactionData longPressReactionData, String str, long j10, ReactionView.Reaction reaction, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = longPressReactionData.messageId;
        }
        if ((i10 & 2) != 0) {
            j10 = longPressReactionData.channelId;
        }
        if ((i10 & 4) != 0) {
            reaction = longPressReactionData.reaction;
        }
        return longPressReactionData.m753copyEqy5D80(str, j10, reaction);
    }

    @NotNull
    /* renamed from: component1-3Eiw7ao  reason: not valid java name */
    public final String m751component13Eiw7ao() {
        return this.messageId;
    }

    /* renamed from: component2-o4g7jtM  reason: not valid java name */
    public final long m752component2o4g7jtM() {
        return this.channelId;
    }

    public final ReactionView.Reaction component3() {
        return this.reaction;
    }

    @NotNull
    /* renamed from: copy-Eqy5D80  reason: not valid java name */
    public final LongPressReactionData m753copyEqy5D80(@NotNull String messageId, long j10, ReactionView.Reaction reaction) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        return new LongPressReactionData(messageId, j10, reaction, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof LongPressReactionData) {
            LongPressReactionData longPressReactionData = (LongPressReactionData) obj;
            return MessageId.m1087equalsimpl0(this.messageId, longPressReactionData.messageId) && ChannelId.m1061equalsimpl0(this.channelId, longPressReactionData.channelId) && Intrinsics.areEqual(this.reaction, longPressReactionData.reaction);
        }
        return false;
    }

    /* renamed from: getChannelId-o4g7jtM  reason: not valid java name */
    public final long m754getChannelIdo4g7jtM() {
        return this.channelId;
    }

    @NotNull
    /* renamed from: getMessageId-3Eiw7ao  reason: not valid java name */
    public final String m755getMessageId3Eiw7ao() {
        return this.messageId;
    }

    public final ReactionView.Reaction getReaction() {
        return this.reaction;
    }

    public int hashCode() {
        int m1088hashCodeimpl = ((MessageId.m1088hashCodeimpl(this.messageId) * 31) + ChannelId.m1062hashCodeimpl(this.channelId)) * 31;
        ReactionView.Reaction reaction = this.reaction;
        return m1088hashCodeimpl + (reaction == null ? 0 : reaction.hashCode());
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        WritableNativeMap writableNativeMap;
        ReactionView.Reaction reaction = this.reaction;
        Boolean bool = null;
        if (reaction != null) {
            writableNativeMap = NativeMapExtensionsKt.nativeMapOf(v.a("emoji", NativeMapExtensionsKt.nativeMapOf(v.a(StackTraceHelper.NAME_KEY, reaction.getEmoji().getName()), v.a(StackTraceHelper.ID_KEY, this.reaction.getEmoji().getId()))), v.a("me", Boolean.valueOf(this.reaction.isMe())));
        } else {
            writableNativeMap = null;
        }
        Pair a10 = v.a("messageId", this.messageId);
        Pair a11 = v.a("channelId", ChannelId.m1064toStringimpl(this.channelId));
        Pair a12 = v.a("reaction", writableNativeMap);
        ReactionView.Reaction reaction2 = this.reaction;
        if (reaction2 != null) {
            bool = Boolean.valueOf(reaction2.isBurstReaction());
        }
        return NativeMapExtensionsKt.nativeMapOf(a10, a11, a12, v.a("isBurst", bool));
    }

    @NotNull
    public String toString() {
        String m1090toStringimpl = MessageId.m1090toStringimpl(this.messageId);
        String m1064toStringimpl = ChannelId.m1064toStringimpl(this.channelId);
        ReactionView.Reaction reaction = this.reaction;
        return "LongPressReactionData(messageId=" + m1090toStringimpl + ", channelId=" + m1064toStringimpl + ", reaction=" + reaction + ")";
    }

    private LongPressReactionData(String messageId, long j10, ReactionView.Reaction reaction) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.messageId = messageId;
        this.channelId = j10;
        this.reaction = reaction;
    }
}
