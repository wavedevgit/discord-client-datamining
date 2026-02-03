package com.discord.chat.bridge.forums;

import bt.n2;
import bt.v1;
import com.discord.chat.bridge.reaction.MessageReaction;
import com.discord.chat.bridge.reaction.MessageReaction$$serializer;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
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
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u001b\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 72\u00020\u0001:\u000267BW\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\u0006\u0010\b\u001a\u00020\u0007\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u0007\u0012\u0006\u0010\n\u001a\u00020\u0007\u0012\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\f\u0012\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u000e¢\u0006\u0004\b\u000f\u0010\u0010Bg\b\u0010\u0012\u0006\u0010\u0011\u001a\u00020\u0003\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u000e\u0012\b\u0010\u0012\u001a\u0004\u0018\u00010\u0013¢\u0006\u0004\b\u000f\u0010\u0014J\t\u0010!\u001a\u00020\u0003HÆ\u0003J\t\u0010\"\u001a\u00020\u0005HÆ\u0003J\u000b\u0010#\u001a\u0004\u0018\u00010\u0007HÆ\u0003J\t\u0010$\u001a\u00020\u0007HÆ\u0003J\u000b\u0010%\u001a\u0004\u0018\u00010\u0007HÆ\u0003J\t\u0010&\u001a\u00020\u0007HÆ\u0003J\u000b\u0010'\u001a\u0004\u0018\u00010\fHÆ\u0003J\u000b\u0010(\u001a\u0004\u0018\u00010\u000eHÆ\u0003Ja\u0010)\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00072\b\b\u0002\u0010\b\u001a\u00020\u00072\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u00072\b\b\u0002\u0010\n\u001a\u00020\u00072\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\f2\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u000eHÆ\u0001J\u0013\u0010*\u001a\u00020\u00052\b\u0010+\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010,\u001a\u00020\u0003HÖ\u0001J\t\u0010-\u001a\u00020\u0007HÖ\u0001J%\u0010.\u001a\u00020/2\u0006\u00100\u001a\u00020\u00002\u0006\u00101\u001a\u0002022\u0006\u00103\u001a\u000204H\u0001¢\u0006\u0002\b5R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0016R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0004\u0010\u0017R\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0019R\u0011\u0010\b\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u0019R\u0013\u0010\t\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u0019R\u0011\u0010\n\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u001c\u0010\u0019R\u0013\u0010\u000b\u001a\u0004\u0018\u00010\f¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u001eR\u0013\u0010\r\u001a\u0004\u0018\u00010\u000e¢\u0006\b\n\u0000\u001a\u0004\b\u001f\u0010 ¨\u00068"}, d2 = {"Lcom/discord/chat/bridge/forums/ForumPostActions;", "", "numDisplayedReactions", "", "isFollowing", "", "followIcon", "", "followLabel", "shareIcon", "shareLabel", "defaultReaction", "Lcom/discord/chat/bridge/reaction/MessageReaction;", "sharePrompt", "Lcom/discord/chat/bridge/forums/PostSharePrompt;", "<init>", "(IZLjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/reaction/MessageReaction;Lcom/discord/chat/bridge/forums/PostSharePrompt;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IIZLjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/reaction/MessageReaction;Lcom/discord/chat/bridge/forums/PostSharePrompt;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getNumDisplayedReactions", "()I", "()Z", "getFollowIcon", "()Ljava/lang/String;", "getFollowLabel", "getShareIcon", "getShareLabel", "getDefaultReaction", "()Lcom/discord/chat/bridge/reaction/MessageReaction;", "getSharePrompt", "()Lcom/discord/chat/bridge/forums/PostSharePrompt;", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "copy", "equals", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ForumPostActions {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final MessageReaction defaultReaction;
    private final String followIcon;
    @NotNull
    private final String followLabel;
    private final boolean isFollowing;
    private final int numDisplayedReactions;
    private final String shareIcon;
    @NotNull
    private final String shareLabel;
    private final PostSharePrompt sharePrompt;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/forums/ForumPostActions$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/forums/ForumPostActions;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return ForumPostActions$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ ForumPostActions(int i10, int i11, boolean z10, String str, String str2, String str3, String str4, MessageReaction messageReaction, PostSharePrompt postSharePrompt, SerializationConstructorMarker serializationConstructorMarker) {
        if (43 != (i10 & 43)) {
            v1.b(i10, 43, ForumPostActions$$serializer.INSTANCE.getDescriptor());
        }
        this.numDisplayedReactions = i11;
        this.isFollowing = z10;
        if ((i10 & 4) == 0) {
            this.followIcon = null;
        } else {
            this.followIcon = str;
        }
        this.followLabel = str2;
        if ((i10 & 16) == 0) {
            this.shareIcon = null;
        } else {
            this.shareIcon = str3;
        }
        this.shareLabel = str4;
        if ((i10 & 64) == 0) {
            this.defaultReaction = null;
        } else {
            this.defaultReaction = messageReaction;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
            this.sharePrompt = null;
        } else {
            this.sharePrompt = postSharePrompt;
        }
    }

    public static /* synthetic */ ForumPostActions copy$default(ForumPostActions forumPostActions, int i10, boolean z10, String str, String str2, String str3, String str4, MessageReaction messageReaction, PostSharePrompt postSharePrompt, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            i10 = forumPostActions.numDisplayedReactions;
        }
        if ((i11 & 2) != 0) {
            z10 = forumPostActions.isFollowing;
        }
        if ((i11 & 4) != 0) {
            str = forumPostActions.followIcon;
        }
        if ((i11 & 8) != 0) {
            str2 = forumPostActions.followLabel;
        }
        if ((i11 & 16) != 0) {
            str3 = forumPostActions.shareIcon;
        }
        if ((i11 & 32) != 0) {
            str4 = forumPostActions.shareLabel;
        }
        if ((i11 & 64) != 0) {
            messageReaction = forumPostActions.defaultReaction;
        }
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            postSharePrompt = forumPostActions.sharePrompt;
        }
        MessageReaction messageReaction2 = messageReaction;
        PostSharePrompt postSharePrompt2 = postSharePrompt;
        String str5 = str3;
        String str6 = str4;
        return forumPostActions.copy(i10, z10, str, str2, str5, str6, messageReaction2, postSharePrompt2);
    }

    public static final /* synthetic */ void write$Self$chat_release(ForumPostActions forumPostActions, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.v(serialDescriptor, 0, forumPostActions.numDisplayedReactions);
        compositeEncoder.w(serialDescriptor, 1, forumPostActions.isFollowing);
        if (compositeEncoder.y(serialDescriptor, 2) || forumPostActions.followIcon != null) {
            compositeEncoder.B(serialDescriptor, 2, n2.f7662a, forumPostActions.followIcon);
        }
        compositeEncoder.x(serialDescriptor, 3, forumPostActions.followLabel);
        if (compositeEncoder.y(serialDescriptor, 4) || forumPostActions.shareIcon != null) {
            compositeEncoder.B(serialDescriptor, 4, n2.f7662a, forumPostActions.shareIcon);
        }
        compositeEncoder.x(serialDescriptor, 5, forumPostActions.shareLabel);
        if (compositeEncoder.y(serialDescriptor, 6) || forumPostActions.defaultReaction != null) {
            compositeEncoder.B(serialDescriptor, 6, MessageReaction$$serializer.INSTANCE, forumPostActions.defaultReaction);
        }
        if (compositeEncoder.y(serialDescriptor, 7) || forumPostActions.sharePrompt != null) {
            compositeEncoder.B(serialDescriptor, 7, PostSharePrompt$$serializer.INSTANCE, forumPostActions.sharePrompt);
        }
    }

    public final int component1() {
        return this.numDisplayedReactions;
    }

    public final boolean component2() {
        return this.isFollowing;
    }

    public final String component3() {
        return this.followIcon;
    }

    @NotNull
    public final String component4() {
        return this.followLabel;
    }

    public final String component5() {
        return this.shareIcon;
    }

    @NotNull
    public final String component6() {
        return this.shareLabel;
    }

    public final MessageReaction component7() {
        return this.defaultReaction;
    }

    public final PostSharePrompt component8() {
        return this.sharePrompt;
    }

    @NotNull
    public final ForumPostActions copy(int i10, boolean z10, String str, @NotNull String followLabel, String str2, @NotNull String shareLabel, MessageReaction messageReaction, PostSharePrompt postSharePrompt) {
        Intrinsics.checkNotNullParameter(followLabel, "followLabel");
        Intrinsics.checkNotNullParameter(shareLabel, "shareLabel");
        return new ForumPostActions(i10, z10, str, followLabel, str2, shareLabel, messageReaction, postSharePrompt);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ForumPostActions) {
            ForumPostActions forumPostActions = (ForumPostActions) obj;
            return this.numDisplayedReactions == forumPostActions.numDisplayedReactions && this.isFollowing == forumPostActions.isFollowing && Intrinsics.areEqual(this.followIcon, forumPostActions.followIcon) && Intrinsics.areEqual(this.followLabel, forumPostActions.followLabel) && Intrinsics.areEqual(this.shareIcon, forumPostActions.shareIcon) && Intrinsics.areEqual(this.shareLabel, forumPostActions.shareLabel) && Intrinsics.areEqual(this.defaultReaction, forumPostActions.defaultReaction) && Intrinsics.areEqual(this.sharePrompt, forumPostActions.sharePrompt);
        }
        return false;
    }

    public final MessageReaction getDefaultReaction() {
        return this.defaultReaction;
    }

    public final String getFollowIcon() {
        return this.followIcon;
    }

    @NotNull
    public final String getFollowLabel() {
        return this.followLabel;
    }

    public final int getNumDisplayedReactions() {
        return this.numDisplayedReactions;
    }

    public final String getShareIcon() {
        return this.shareIcon;
    }

    @NotNull
    public final String getShareLabel() {
        return this.shareLabel;
    }

    public final PostSharePrompt getSharePrompt() {
        return this.sharePrompt;
    }

    public int hashCode() {
        int hashCode = ((Integer.hashCode(this.numDisplayedReactions) * 31) + Boolean.hashCode(this.isFollowing)) * 31;
        String str = this.followIcon;
        int hashCode2 = (((hashCode + (str == null ? 0 : str.hashCode())) * 31) + this.followLabel.hashCode()) * 31;
        String str2 = this.shareIcon;
        int hashCode3 = (((hashCode2 + (str2 == null ? 0 : str2.hashCode())) * 31) + this.shareLabel.hashCode()) * 31;
        MessageReaction messageReaction = this.defaultReaction;
        int hashCode4 = (hashCode3 + (messageReaction == null ? 0 : messageReaction.hashCode())) * 31;
        PostSharePrompt postSharePrompt = this.sharePrompt;
        return hashCode4 + (postSharePrompt != null ? postSharePrompt.hashCode() : 0);
    }

    public final boolean isFollowing() {
        return this.isFollowing;
    }

    @NotNull
    public String toString() {
        int i10 = this.numDisplayedReactions;
        boolean z10 = this.isFollowing;
        String str = this.followIcon;
        String str2 = this.followLabel;
        String str3 = this.shareIcon;
        String str4 = this.shareLabel;
        MessageReaction messageReaction = this.defaultReaction;
        PostSharePrompt postSharePrompt = this.sharePrompt;
        return "ForumPostActions(numDisplayedReactions=" + i10 + ", isFollowing=" + z10 + ", followIcon=" + str + ", followLabel=" + str2 + ", shareIcon=" + str3 + ", shareLabel=" + str4 + ", defaultReaction=" + messageReaction + ", sharePrompt=" + postSharePrompt + ")";
    }

    public ForumPostActions(int i10, boolean z10, String str, @NotNull String followLabel, String str2, @NotNull String shareLabel, MessageReaction messageReaction, PostSharePrompt postSharePrompt) {
        Intrinsics.checkNotNullParameter(followLabel, "followLabel");
        Intrinsics.checkNotNullParameter(shareLabel, "shareLabel");
        this.numDisplayedReactions = i10;
        this.isFollowing = z10;
        this.followIcon = str;
        this.followLabel = followLabel;
        this.shareIcon = str2;
        this.shareLabel = shareLabel;
        this.defaultReaction = messageReaction;
        this.sharePrompt = postSharePrompt;
    }

    public /* synthetic */ ForumPostActions(int i10, boolean z10, String str, String str2, String str3, String str4, MessageReaction messageReaction, PostSharePrompt postSharePrompt, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, z10, (i11 & 4) != 0 ? null : str, str2, (i11 & 16) != 0 ? null : str3, str4, (i11 & 64) != 0 ? null : messageReaction, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : postSharePrompt);
    }
}
