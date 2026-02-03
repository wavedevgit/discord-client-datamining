package com.discord.chat.bridge.reaction;

import bt.v1;
import com.discord.reactions.ReactionView;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import ys.m;
@m
@Metadata(d1 = {"\u0000T\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0016\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 52\u00020\u0001:\u000245B?\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\b\u0012\b\b\u0002\u0010\t\u001a\u00020\u0003\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\f\u0010\rBW\b\u0010\u0012\u0006\u0010\u000e\u001a\u00020\u0003\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\u0006\u0010\t\u001a\u00020\u0003\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\u0006\u0010\u000f\u001a\u00020\u0005\u0012\b\u0010\u0010\u001a\u0004\u0018\u00010\u0011¢\u0006\u0004\b\f\u0010\u0012J\t\u0010\u001f\u001a\u00020\u0003HÆ\u0003J\t\u0010 \u001a\u00020\u0005HÆ\u0003J\t\u0010!\u001a\u00020\u0005HÆ\u0003J\t\u0010\"\u001a\u00020\bHÆ\u0003J\t\u0010#\u001a\u00020\u0003HÆ\u0003J\u000b\u0010$\u001a\u0004\u0018\u00010\u000bHÆ\u0003JG\u0010%\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00052\b\b\u0002\u0010\u0007\u001a\u00020\b2\b\b\u0002\u0010\t\u001a\u00020\u00032\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000bHÆ\u0001J\u0013\u0010&\u001a\u00020\u00052\b\u0010'\u001a\u0004\u0018\u00010(HÖ\u0003J\t\u0010)\u001a\u00020\u0003HÖ\u0001J\t\u0010*\u001a\u00020+HÖ\u0001J%\u0010,\u001a\u00020-2\u0006\u0010.\u001a\u00020\u00002\u0006\u0010/\u001a\u0002002\u0006\u00101\u001a\u000202H\u0001¢\u0006\u0002\b3R\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0014R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0006\u001a\u00020\u00058\u0016X\u0097\u0004¢\u0006\u000e\n\u0000\u0012\u0004\b\u0017\u0010\u0018\u001a\u0004\b\u0006\u0010\u0016R\u0014\u0010\u0007\u001a\u00020\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u001aR\u001c\u0010\t\u001a\u00020\u00038\u0016X\u0097\u0004¢\u0006\u000e\n\u0000\u0012\u0004\b\u001b\u0010\u0018\u001a\u0004\b\u001c\u0010\u0014R\u0016\u0010\n\u001a\u0004\u0018\u00010\u000bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u001eR\u0014\u0010\u000f\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0016¨\u00066"}, d2 = {"Lcom/discord/chat/bridge/reaction/MessageReaction;", "Lcom/discord/reactions/ReactionView$Reaction;", "count", "", "me", "", "isMeBurst", "emoji", "Lcom/discord/chat/bridge/reaction/MessageReactionEmoji;", "burstCount", "themedBurstColors", "Lcom/discord/chat/bridge/reaction/ThemedBurstReactionColorPalette;", "<init>", "(IZZLcom/discord/chat/bridge/reaction/MessageReactionEmoji;ILcom/discord/chat/bridge/reaction/ThemedBurstReactionColorPalette;)V", "seen0", "isMe", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IIZZLcom/discord/chat/bridge/reaction/MessageReactionEmoji;ILcom/discord/chat/bridge/reaction/ThemedBurstReactionColorPalette;ZLkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getCount", "()I", "getMe", "()Z", "isMeBurst$annotations", "()V", "getEmoji", "()Lcom/discord/chat/bridge/reaction/MessageReactionEmoji;", "getBurstCount$annotations", "getBurstCount", "getThemedBurstColors", "()Lcom/discord/chat/bridge/reaction/ThemedBurstReactionColorPalette;", "component1", "component2", "component3", "component4", "component5", "component6", "copy", "equals", "other", "", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MessageReaction implements ReactionView.Reaction {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final int burstCount;
    private final int count;
    @NotNull
    private final MessageReactionEmoji emoji;
    private final boolean isMe;
    private final boolean isMeBurst;

    /* renamed from: me  reason: collision with root package name */
    private final boolean f9304me;
    private final ThemedBurstReactionColorPalette themedBurstColors;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/reaction/MessageReaction$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/reaction/MessageReaction;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return MessageReaction$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ MessageReaction(int i10, int i11, boolean z10, boolean z11, MessageReactionEmoji messageReactionEmoji, int i12, ThemedBurstReactionColorPalette themedBurstReactionColorPalette, boolean z12, SerializationConstructorMarker serializationConstructorMarker) {
        if (11 != (i10 & 11)) {
            v1.b(i10, 11, MessageReaction$$serializer.INSTANCE.getDescriptor());
        }
        this.count = i11;
        this.f9304me = z10;
        if ((i10 & 4) == 0) {
            this.isMeBurst = false;
        } else {
            this.isMeBurst = z11;
        }
        this.emoji = messageReactionEmoji;
        if ((i10 & 16) == 0) {
            this.burstCount = 0;
        } else {
            this.burstCount = i12;
        }
        if ((i10 & 32) == 0) {
            this.themedBurstColors = null;
        } else {
            this.themedBurstColors = themedBurstReactionColorPalette;
        }
        if ((i10 & 64) == 0) {
            this.isMe = z10;
        } else {
            this.isMe = z12;
        }
    }

    public static /* synthetic */ MessageReaction copy$default(MessageReaction messageReaction, int i10, boolean z10, boolean z11, MessageReactionEmoji messageReactionEmoji, int i11, ThemedBurstReactionColorPalette themedBurstReactionColorPalette, int i12, Object obj) {
        if ((i12 & 1) != 0) {
            i10 = messageReaction.count;
        }
        if ((i12 & 2) != 0) {
            z10 = messageReaction.f9304me;
        }
        if ((i12 & 4) != 0) {
            z11 = messageReaction.isMeBurst;
        }
        if ((i12 & 8) != 0) {
            messageReactionEmoji = messageReaction.emoji;
        }
        if ((i12 & 16) != 0) {
            i11 = messageReaction.burstCount;
        }
        if ((i12 & 32) != 0) {
            themedBurstReactionColorPalette = messageReaction.themedBurstColors;
        }
        int i13 = i11;
        ThemedBurstReactionColorPalette themedBurstReactionColorPalette2 = themedBurstReactionColorPalette;
        return messageReaction.copy(i10, z10, z11, messageReactionEmoji, i13, themedBurstReactionColorPalette2);
    }

    public static /* synthetic */ void getBurstCount$annotations() {
    }

    public static /* synthetic */ void isMeBurst$annotations() {
    }

    public static final /* synthetic */ void write$Self$chat_release(MessageReaction messageReaction, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.v(serialDescriptor, 0, messageReaction.getCount());
        compositeEncoder.w(serialDescriptor, 1, messageReaction.f9304me);
        if (compositeEncoder.y(serialDescriptor, 2) || messageReaction.isMeBurst()) {
            compositeEncoder.w(serialDescriptor, 2, messageReaction.isMeBurst());
        }
        compositeEncoder.m(serialDescriptor, 3, MessageReactionEmoji$$serializer.INSTANCE, messageReaction.getEmoji());
        if (compositeEncoder.y(serialDescriptor, 4) || messageReaction.getBurstCount() != 0) {
            compositeEncoder.v(serialDescriptor, 4, messageReaction.getBurstCount());
        }
        if (compositeEncoder.y(serialDescriptor, 5) || messageReaction.getThemedBurstColors() != null) {
            compositeEncoder.B(serialDescriptor, 5, ThemedBurstReactionColorPalette$$serializer.INSTANCE, messageReaction.getThemedBurstColors());
        }
        if (compositeEncoder.y(serialDescriptor, 6) || messageReaction.isMe() != messageReaction.f9304me) {
            compositeEncoder.w(serialDescriptor, 6, messageReaction.isMe());
        }
    }

    public final int component1() {
        return this.count;
    }

    public final boolean component2() {
        return this.f9304me;
    }

    public final boolean component3() {
        return this.isMeBurst;
    }

    @NotNull
    public final MessageReactionEmoji component4() {
        return this.emoji;
    }

    public final int component5() {
        return this.burstCount;
    }

    public final ThemedBurstReactionColorPalette component6() {
        return this.themedBurstColors;
    }

    @NotNull
    public final MessageReaction copy(int i10, boolean z10, boolean z11, @NotNull MessageReactionEmoji emoji, int i11, ThemedBurstReactionColorPalette themedBurstReactionColorPalette) {
        Intrinsics.checkNotNullParameter(emoji, "emoji");
        return new MessageReaction(i10, z10, z11, emoji, i11, themedBurstReactionColorPalette);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof MessageReaction) {
            MessageReaction messageReaction = (MessageReaction) obj;
            return this.count == messageReaction.count && this.f9304me == messageReaction.f9304me && this.isMeBurst == messageReaction.isMeBurst && Intrinsics.areEqual(this.emoji, messageReaction.emoji) && this.burstCount == messageReaction.burstCount && Intrinsics.areEqual(this.themedBurstColors, messageReaction.themedBurstColors);
        }
        return false;
    }

    @Override // com.discord.reactions.ReactionView.Reaction
    public int getBurstCount() {
        return this.burstCount;
    }

    @Override // com.discord.reactions.ReactionView.Reaction
    public int getCount() {
        return this.count;
    }

    @Override // com.discord.recycler_view.utils.ItemDiffableType
    @NotNull
    public Long getItemId() {
        return ReactionView.Reaction.DefaultImpls.getItemId(this);
    }

    public final boolean getMe() {
        return this.f9304me;
    }

    public int hashCode() {
        int hashCode = ((((((((Integer.hashCode(this.count) * 31) + Boolean.hashCode(this.f9304me)) * 31) + Boolean.hashCode(this.isMeBurst)) * 31) + this.emoji.hashCode()) * 31) + Integer.hashCode(this.burstCount)) * 31;
        ThemedBurstReactionColorPalette themedBurstReactionColorPalette = this.themedBurstColors;
        return hashCode + (themedBurstReactionColorPalette == null ? 0 : themedBurstReactionColorPalette.hashCode());
    }

    @Override // com.discord.reactions.ReactionView.Reaction
    public boolean isBurstReaction() {
        return ReactionView.Reaction.DefaultImpls.isBurstReaction(this);
    }

    @Override // com.discord.reactions.ReactionView.Reaction
    public boolean isMe() {
        return this.isMe;
    }

    @Override // com.discord.reactions.ReactionView.Reaction
    public boolean isMeBurst() {
        return this.isMeBurst;
    }

    @NotNull
    public String toString() {
        int i10 = this.count;
        boolean z10 = this.f9304me;
        boolean z11 = this.isMeBurst;
        MessageReactionEmoji messageReactionEmoji = this.emoji;
        int i11 = this.burstCount;
        ThemedBurstReactionColorPalette themedBurstReactionColorPalette = this.themedBurstColors;
        return "MessageReaction(count=" + i10 + ", me=" + z10 + ", isMeBurst=" + z11 + ", emoji=" + messageReactionEmoji + ", burstCount=" + i11 + ", themedBurstColors=" + themedBurstReactionColorPalette + ")";
    }

    public MessageReaction(int i10, boolean z10, boolean z11, @NotNull MessageReactionEmoji emoji, int i11, ThemedBurstReactionColorPalette themedBurstReactionColorPalette) {
        Intrinsics.checkNotNullParameter(emoji, "emoji");
        this.count = i10;
        this.f9304me = z10;
        this.isMeBurst = z11;
        this.emoji = emoji;
        this.burstCount = i11;
        this.themedBurstColors = themedBurstReactionColorPalette;
        this.isMe = z10;
    }

    @Override // com.discord.reactions.ReactionView.Reaction
    @NotNull
    public MessageReactionEmoji getEmoji() {
        return this.emoji;
    }

    @Override // com.discord.reactions.ReactionView.Reaction
    public ThemedBurstReactionColorPalette getThemedBurstColors() {
        return this.themedBurstColors;
    }

    public /* synthetic */ MessageReaction(int i10, boolean z10, boolean z11, MessageReactionEmoji messageReactionEmoji, int i11, ThemedBurstReactionColorPalette themedBurstReactionColorPalette, int i12, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, z10, (i12 & 4) != 0 ? false : z11, messageReactionEmoji, (i12 & 16) != 0 ? 0 : i11, (i12 & 32) != 0 ? null : themedBurstReactionColorPalette);
    }
}
