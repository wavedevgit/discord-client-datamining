package com.discord.chat.bridge.reaction;

import at.m;
import com.discord.emoji.RenderableEmoji;
import com.discord.reactions.ReactionView;
import com.facebook.react.devsupport.StackTraceHelper;
import dt.h;
import dt.n2;
import dt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@m
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0012\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 -2\u00020\u0001:\u0002,-B;\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\b¢\u0006\u0004\b\t\u0010\nBM\b\u0010\u0012\u0006\u0010\u000b\u001a\u00020\f\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u000e¢\u0006\u0004\b\t\u0010\u000fJ\u000b\u0010\u0018\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010\u0019\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001a\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\u001b\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0010\u0010\u001c\u001a\u0004\u0018\u00010\bHÆ\u0003¢\u0006\u0002\u0010\u0016JF\u0010\u001d\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00032\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\bHÆ\u0001¢\u0006\u0002\u0010\u001eJ\u0013\u0010\u001f\u001a\u00020\b2\b\u0010 \u001a\u0004\u0018\u00010!HÖ\u0003J\t\u0010\"\u001a\u00020\fHÖ\u0001J\t\u0010#\u001a\u00020\u0003HÖ\u0001J%\u0010$\u001a\u00020%2\u0006\u0010&\u001a\u00020\u00002\u0006\u0010'\u001a\u00020(2\u0006\u0010)\u001a\u00020*H\u0001¢\u0006\u0002\b+R\u0016\u0010\u0002\u001a\u0004\u0018\u00010\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0014\u0010\u0004\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0011R\u0014\u0010\u0005\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0011R\u0016\u0010\u0006\u001a\u0004\u0018\u00010\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0011R\u0018\u0010\u0007\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\n\n\u0002\u0010\u0017\u001a\u0004\b\u0015\u0010\u0016¨\u0006."}, d2 = {"Lcom/discord/chat/bridge/reaction/MessageReactionEmoji;", "Lcom/discord/reactions/ReactionView$Emoji;", StackTraceHelper.NAME_KEY, "", "src", "displayName", StackTraceHelper.ID_KEY, "animated", "", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getName", "()Ljava/lang/String;", "getSrc", "getDisplayName", "getId", "getAnimated", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "component1", "component2", "component3", "component4", "component5", "copy", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;)Lcom/discord/chat/bridge/reaction/MessageReactionEmoji;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MessageReactionEmoji implements ReactionView.Emoji {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final Boolean animated;
    @NotNull
    private final String displayName;

    /* renamed from: id  reason: collision with root package name */
    private final String f8273id;
    private final String name;
    @NotNull
    private final String src;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/reaction/MessageReactionEmoji$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/reaction/MessageReactionEmoji;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return MessageReactionEmoji$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ MessageReactionEmoji(int i10, String str, String str2, String str3, String str4, Boolean bool, SerializationConstructorMarker serializationConstructorMarker) {
        if (6 != (i10 & 6)) {
            v1.b(i10, 6, MessageReactionEmoji$$serializer.INSTANCE.getDescriptor());
        }
        if ((i10 & 1) == 0) {
            this.name = null;
        } else {
            this.name = str;
        }
        this.src = str2;
        this.displayName = str3;
        if ((i10 & 8) == 0) {
            this.f8273id = null;
        } else {
            this.f8273id = str4;
        }
        if ((i10 & 16) == 0) {
            this.animated = null;
        } else {
            this.animated = bool;
        }
    }

    public static /* synthetic */ MessageReactionEmoji copy$default(MessageReactionEmoji messageReactionEmoji, String str, String str2, String str3, String str4, Boolean bool, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = messageReactionEmoji.name;
        }
        if ((i10 & 2) != 0) {
            str2 = messageReactionEmoji.src;
        }
        if ((i10 & 4) != 0) {
            str3 = messageReactionEmoji.displayName;
        }
        if ((i10 & 8) != 0) {
            str4 = messageReactionEmoji.f8273id;
        }
        if ((i10 & 16) != 0) {
            bool = messageReactionEmoji.animated;
        }
        Boolean bool2 = bool;
        String str5 = str3;
        return messageReactionEmoji.copy(str, str2, str5, str4, bool2);
    }

    public static final /* synthetic */ void write$Self$chat_release(MessageReactionEmoji messageReactionEmoji, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        if (compositeEncoder.z(serialDescriptor, 0) || messageReactionEmoji.getName() != null) {
            compositeEncoder.s(serialDescriptor, 0, n2.f20978a, messageReactionEmoji.getName());
        }
        compositeEncoder.y(serialDescriptor, 1, messageReactionEmoji.getSrc());
        compositeEncoder.y(serialDescriptor, 2, messageReactionEmoji.getDisplayName());
        if (compositeEncoder.z(serialDescriptor, 3) || messageReactionEmoji.getId() != null) {
            compositeEncoder.s(serialDescriptor, 3, n2.f20978a, messageReactionEmoji.getId());
        }
        if (compositeEncoder.z(serialDescriptor, 4) || messageReactionEmoji.getAnimated() != null) {
            compositeEncoder.s(serialDescriptor, 4, h.f20942a, messageReactionEmoji.getAnimated());
        }
    }

    public final String component1() {
        return this.name;
    }

    @NotNull
    public final String component2() {
        return this.src;
    }

    @NotNull
    public final String component3() {
        return this.displayName;
    }

    public final String component4() {
        return this.f8273id;
    }

    public final Boolean component5() {
        return this.animated;
    }

    @NotNull
    public final MessageReactionEmoji copy(String str, @NotNull String src, @NotNull String displayName, String str2, Boolean bool) {
        Intrinsics.checkNotNullParameter(src, "src");
        Intrinsics.checkNotNullParameter(displayName, "displayName");
        return new MessageReactionEmoji(str, src, displayName, str2, bool);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof MessageReactionEmoji) {
            MessageReactionEmoji messageReactionEmoji = (MessageReactionEmoji) obj;
            return Intrinsics.areEqual(this.name, messageReactionEmoji.name) && Intrinsics.areEqual(this.src, messageReactionEmoji.src) && Intrinsics.areEqual(this.displayName, messageReactionEmoji.displayName) && Intrinsics.areEqual(this.f8273id, messageReactionEmoji.f8273id) && Intrinsics.areEqual(this.animated, messageReactionEmoji.animated);
        }
        return false;
    }

    @Override // com.discord.reactions.ReactionView.Emoji
    public Boolean getAnimated() {
        return this.animated;
    }

    @Override // com.discord.reactions.ReactionView.Emoji
    @NotNull
    public String getDisplayName() {
        return this.displayName;
    }

    @Override // com.discord.reactions.ReactionView.Emoji
    public String getEmojiId() {
        return ReactionView.Emoji.DefaultImpls.getEmojiId(this);
    }

    @Override // com.discord.reactions.ReactionView.Emoji
    public String getId() {
        return this.f8273id;
    }

    @Override // com.discord.reactions.ReactionView.Emoji
    public String getName() {
        return this.name;
    }

    @Override // com.discord.reactions.ReactionView.Emoji
    public boolean getShouldAnimate() {
        return ReactionView.Emoji.DefaultImpls.getShouldAnimate(this);
    }

    @Override // com.discord.reactions.ReactionView.Emoji
    @NotNull
    public String getSrc() {
        return this.src;
    }

    public int hashCode() {
        String str = this.name;
        int hashCode = (((((str == null ? 0 : str.hashCode()) * 31) + this.src.hashCode()) * 31) + this.displayName.hashCode()) * 31;
        String str2 = this.f8273id;
        int hashCode2 = (hashCode + (str2 == null ? 0 : str2.hashCode())) * 31;
        Boolean bool = this.animated;
        return hashCode2 + (bool != null ? bool.hashCode() : 0);
    }

    @Override // com.discord.reactions.ReactionView.Emoji
    @NotNull
    public RenderableEmoji renderable() {
        return ReactionView.Emoji.DefaultImpls.renderable(this);
    }

    @NotNull
    public String toString() {
        String str = this.name;
        String str2 = this.src;
        String str3 = this.displayName;
        String str4 = this.f8273id;
        Boolean bool = this.animated;
        return "MessageReactionEmoji(name=" + str + ", src=" + str2 + ", displayName=" + str3 + ", id=" + str4 + ", animated=" + bool + ")";
    }

    public MessageReactionEmoji(String str, @NotNull String src, @NotNull String displayName, String str2, Boolean bool) {
        Intrinsics.checkNotNullParameter(src, "src");
        Intrinsics.checkNotNullParameter(displayName, "displayName");
        this.name = str;
        this.src = src;
        this.displayName = displayName;
        this.f8273id = str2;
        this.animated = bool;
    }

    public /* synthetic */ MessageReactionEmoji(String str, String str2, String str3, String str4, Boolean bool, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : str, str2, str3, (i10 & 8) != 0 ? null : str4, (i10 & 16) != 0 ? null : bool);
    }
}
