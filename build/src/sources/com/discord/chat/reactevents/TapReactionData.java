package com.discord.chat.reactevents;

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
@Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\b\u0080\b\u0018\u00002\u00020\u0001B/\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\u0004\b\n\u0010\u000bJ\b\u0010\u0014\u001a\u00020\u0015H\u0016J\u0010\u0010\u0016\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u0017\u0010\rJ\u000b\u0010\u0018\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\u0010\u0010\u0019\u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0002\u0010\u0011J\u000b\u0010\u001a\u001a\u0004\u0018\u00010\tHÆ\u0003J>\u0010\u001b\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\tHÆ\u0001¢\u0006\u0004\b\u001c\u0010\u001dJ\u0013\u0010\u001e\u001a\u00020\u00072\b\u0010\u001f\u001a\u0004\u0018\u00010 HÖ\u0003J\t\u0010!\u001a\u00020\"HÖ\u0001J\t\u0010#\u001a\u00020\tHÖ\u0001R\u0013\u0010\u0002\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010\u000e\u001a\u0004\b\f\u0010\rR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0015\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\n\n\u0002\u0010\u0012\u001a\u0004\b\u0006\u0010\u0011R\u0013\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\r¨\u0006$"}, d2 = {"Lcom/discord/chat/reactevents/TapReactionData;", "Lcom/discord/reactevents/ReactEvent;", "messageId", "Lcom/discord/primitives/MessageId;", "reaction", "Lcom/discord/reactions/ReactionView$Reaction;", "isBurst", "", "location", "", "<init>", "(Ljava/lang/String;Lcom/discord/reactions/ReactionView$Reaction;Ljava/lang/Boolean;Ljava/lang/String;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getReaction", "()Lcom/discord/reactions/ReactionView$Reaction;", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "getLocation", "serialize", "Lcom/facebook/react/bridge/WritableMap;", "component1", "component1-3Eiw7ao", "component2", "component3", "component4", "copy", "copy-AFFcxXc", "(Ljava/lang/String;Lcom/discord/reactions/ReactionView$Reaction;Ljava/lang/Boolean;Ljava/lang/String;)Lcom/discord/chat/reactevents/TapReactionData;", "equals", "other", "", "hashCode", "", "toString", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TapReactionData implements ReactEvent {
    private final Boolean isBurst;
    private final String location;
    @NotNull
    private final String messageId;
    private final ReactionView.Reaction reaction;

    public /* synthetic */ TapReactionData(String str, ReactionView.Reaction reaction, Boolean bool, String str2, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, reaction, bool, str2);
    }

    /* renamed from: copy-AFFcxXc$default  reason: not valid java name */
    public static /* synthetic */ TapReactionData m826copyAFFcxXc$default(TapReactionData tapReactionData, String str, ReactionView.Reaction reaction, Boolean bool, String str2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = tapReactionData.messageId;
        }
        if ((i10 & 2) != 0) {
            reaction = tapReactionData.reaction;
        }
        if ((i10 & 4) != 0) {
            bool = tapReactionData.isBurst;
        }
        if ((i10 & 8) != 0) {
            str2 = tapReactionData.location;
        }
        return tapReactionData.m828copyAFFcxXc(str, reaction, bool, str2);
    }

    @NotNull
    /* renamed from: component1-3Eiw7ao  reason: not valid java name */
    public final String m827component13Eiw7ao() {
        return this.messageId;
    }

    public final ReactionView.Reaction component2() {
        return this.reaction;
    }

    public final Boolean component3() {
        return this.isBurst;
    }

    public final String component4() {
        return this.location;
    }

    @NotNull
    /* renamed from: copy-AFFcxXc  reason: not valid java name */
    public final TapReactionData m828copyAFFcxXc(@NotNull String messageId, ReactionView.Reaction reaction, Boolean bool, String str) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        return new TapReactionData(messageId, reaction, bool, str, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof TapReactionData) {
            TapReactionData tapReactionData = (TapReactionData) obj;
            return MessageId.m1087equalsimpl0(this.messageId, tapReactionData.messageId) && Intrinsics.areEqual(this.reaction, tapReactionData.reaction) && Intrinsics.areEqual(this.isBurst, tapReactionData.isBurst) && Intrinsics.areEqual(this.location, tapReactionData.location);
        }
        return false;
    }

    public final String getLocation() {
        return this.location;
    }

    @NotNull
    /* renamed from: getMessageId-3Eiw7ao  reason: not valid java name */
    public final String m829getMessageId3Eiw7ao() {
        return this.messageId;
    }

    public final ReactionView.Reaction getReaction() {
        return this.reaction;
    }

    public int hashCode() {
        int m1088hashCodeimpl = MessageId.m1088hashCodeimpl(this.messageId) * 31;
        ReactionView.Reaction reaction = this.reaction;
        int hashCode = (m1088hashCodeimpl + (reaction == null ? 0 : reaction.hashCode())) * 31;
        Boolean bool = this.isBurst;
        int hashCode2 = (hashCode + (bool == null ? 0 : bool.hashCode())) * 31;
        String str = this.location;
        return hashCode2 + (str != null ? str.hashCode() : 0);
    }

    public final Boolean isBurst() {
        return this.isBurst;
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        WritableNativeMap writableNativeMap;
        Boolean bool;
        ReactionView.Reaction reaction = this.reaction;
        if (reaction != null) {
            writableNativeMap = NativeMapExtensionsKt.nativeMapOf(v.a("emoji", NativeMapExtensionsKt.nativeMapOf(v.a(StackTraceHelper.NAME_KEY, reaction.getEmoji().getName()), v.a(StackTraceHelper.ID_KEY, this.reaction.getEmoji().getId()))), v.a("me", Boolean.valueOf(this.reaction.isMe())), v.a("me_burst", Boolean.valueOf(this.reaction.isMeBurst())));
        } else {
            writableNativeMap = null;
        }
        Pair a10 = v.a("messageId", this.messageId);
        Pair a11 = v.a("reaction", writableNativeMap);
        ReactionView.Reaction reaction2 = this.reaction;
        if (reaction2 != null) {
            bool = Boolean.valueOf(reaction2.isBurstReaction());
        } else {
            bool = this.isBurst;
        }
        return NativeMapExtensionsKt.nativeMapOf(a10, a11, v.a("isBurst", bool), v.a("location", this.location));
    }

    @NotNull
    public String toString() {
        String m1090toStringimpl = MessageId.m1090toStringimpl(this.messageId);
        ReactionView.Reaction reaction = this.reaction;
        Boolean bool = this.isBurst;
        String str = this.location;
        return "TapReactionData(messageId=" + m1090toStringimpl + ", reaction=" + reaction + ", isBurst=" + bool + ", location=" + str + ")";
    }

    private TapReactionData(String messageId, ReactionView.Reaction reaction, Boolean bool, String str) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.messageId = messageId;
        this.reaction = reaction;
        this.isBurst = bool;
        this.location = str;
    }

    public /* synthetic */ TapReactionData(String str, ReactionView.Reaction reaction, Boolean bool, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, reaction, (i10 & 4) != 0 ? Boolean.FALSE : bool, str2, null);
    }
}
