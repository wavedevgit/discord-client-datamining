package com.discord.chat.presentation.message.messagepart;

import com.discord.chat.bridge.forums.ForumPostActions;
import com.discord.chat.bridge.reaction.MessageReaction;
import com.discord.chat.bridge.reaction.ReactionsTheme;
import com.discord.primitives.MessageId;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000B\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u001a\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\b\u0086\b\u0018\u00002\u00020\u0001BA\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u000e\u0010\u0006\u001a\n\u0012\u0004\u0012\u00020\b\u0018\u00010\u0007\u0012\u0006\u0010\t\u001a\u00020\n\u0012\u0006\u0010\u000b\u001a\u00020\f\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u000e¢\u0006\u0004\b\u000f\u0010\u0010J\u0010\u0010\u001d\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u001e\u0010\u0012J\t\u0010\u001f\u001a\u00020\u0005HÆ\u0003J\u0011\u0010 \u001a\n\u0012\u0004\u0012\u00020\b\u0018\u00010\u0007HÆ\u0003J\t\u0010!\u001a\u00020\nHÆ\u0003J\t\u0010\"\u001a\u00020\fHÆ\u0003J\u000b\u0010#\u001a\u0004\u0018\u00010\u000eHÆ\u0003JV\u0010$\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\u0010\b\u0002\u0010\u0006\u001a\n\u0012\u0004\u0012\u00020\b\u0018\u00010\u00072\b\b\u0002\u0010\t\u001a\u00020\n2\b\b\u0002\u0010\u000b\u001a\u00020\f2\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u000eHÆ\u0001¢\u0006\u0004\b%\u0010&J\u0013\u0010'\u001a\u00020\n2\b\u0010(\u001a\u0004\u0018\u00010)HÖ\u0003J\t\u0010*\u001a\u00020+HÖ\u0001J\t\u0010,\u001a\u00020\fHÖ\u0001R\u0016\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\n\n\u0002\u0010\u0013\u001a\u0004\b\u0011\u0010\u0012R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0015R\u0019\u0010\u0006\u001a\n\u0012\u0004\u0012\u00020\b\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0017R\u0011\u0010\t\u001a\u00020\n¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0019R\u0011\u0010\u000b\u001a\u00020\f¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u0012R\u0013\u0010\r\u001a\u0004\u0018\u00010\u000e¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u001c¨\u0006-"}, d2 = {"Lcom/discord/chat/presentation/message/messagepart/ForumPostActionBar;", "Lcom/discord/chat/presentation/message/messagepart/MessageAccessory;", "messageId", "Lcom/discord/primitives/MessageId;", "postActions", "Lcom/discord/chat/bridge/forums/ForumPostActions;", "reactions", "", "Lcom/discord/chat/bridge/reaction/MessageReaction;", "canAddNewReactions", "", "addNewReactionAccessibilityLabel", "", "reactionsTheme", "Lcom/discord/chat/bridge/reaction/ReactionsTheme;", "<init>", "(Ljava/lang/String;Lcom/discord/chat/bridge/forums/ForumPostActions;Ljava/util/List;ZLjava/lang/String;Lcom/discord/chat/bridge/reaction/ReactionsTheme;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getPostActions", "()Lcom/discord/chat/bridge/forums/ForumPostActions;", "getReactions", "()Ljava/util/List;", "getCanAddNewReactions", "()Z", "getAddNewReactionAccessibilityLabel", "getReactionsTheme", "()Lcom/discord/chat/bridge/reaction/ReactionsTheme;", "component1", "component1-3Eiw7ao", "component2", "component3", "component4", "component5", "component6", "copy", "copy-LdU2QRA", "(Ljava/lang/String;Lcom/discord/chat/bridge/forums/ForumPostActions;Ljava/util/List;ZLjava/lang/String;Lcom/discord/chat/bridge/reaction/ReactionsTheme;)Lcom/discord/chat/presentation/message/messagepart/ForumPostActionBar;", "equals", "other", "", "hashCode", "", "toString", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ForumPostActionBar extends MessageAccessory {
    @NotNull
    private final String addNewReactionAccessibilityLabel;
    private final boolean canAddNewReactions;
    @NotNull
    private final String messageId;
    @NotNull
    private final ForumPostActions postActions;
    private final List<MessageReaction> reactions;
    private final ReactionsTheme reactionsTheme;

    public /* synthetic */ ForumPostActionBar(String str, ForumPostActions forumPostActions, List list, boolean z10, String str2, ReactionsTheme reactionsTheme, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, forumPostActions, list, z10, str2, reactionsTheme);
    }

    /* renamed from: copy-LdU2QRA$default  reason: not valid java name */
    public static /* synthetic */ ForumPostActionBar m578copyLdU2QRA$default(ForumPostActionBar forumPostActionBar, String str, ForumPostActions forumPostActions, List list, boolean z10, String str2, ReactionsTheme reactionsTheme, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = forumPostActionBar.messageId;
        }
        if ((i10 & 2) != 0) {
            forumPostActions = forumPostActionBar.postActions;
        }
        List<MessageReaction> list2 = list;
        if ((i10 & 4) != 0) {
            list2 = forumPostActionBar.reactions;
        }
        if ((i10 & 8) != 0) {
            z10 = forumPostActionBar.canAddNewReactions;
        }
        if ((i10 & 16) != 0) {
            str2 = forumPostActionBar.addNewReactionAccessibilityLabel;
        }
        if ((i10 & 32) != 0) {
            reactionsTheme = forumPostActionBar.reactionsTheme;
        }
        String str3 = str2;
        ReactionsTheme reactionsTheme2 = reactionsTheme;
        return forumPostActionBar.m580copyLdU2QRA(str, forumPostActions, list2, z10, str3, reactionsTheme2);
    }

    @NotNull
    /* renamed from: component1-3Eiw7ao  reason: not valid java name */
    public final String m579component13Eiw7ao() {
        return this.messageId;
    }

    @NotNull
    public final ForumPostActions component2() {
        return this.postActions;
    }

    public final List<MessageReaction> component3() {
        return this.reactions;
    }

    public final boolean component4() {
        return this.canAddNewReactions;
    }

    @NotNull
    public final String component5() {
        return this.addNewReactionAccessibilityLabel;
    }

    public final ReactionsTheme component6() {
        return this.reactionsTheme;
    }

    @NotNull
    /* renamed from: copy-LdU2QRA  reason: not valid java name */
    public final ForumPostActionBar m580copyLdU2QRA(@NotNull String messageId, @NotNull ForumPostActions postActions, List<MessageReaction> list, boolean z10, @NotNull String addNewReactionAccessibilityLabel, ReactionsTheme reactionsTheme) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(postActions, "postActions");
        Intrinsics.checkNotNullParameter(addNewReactionAccessibilityLabel, "addNewReactionAccessibilityLabel");
        return new ForumPostActionBar(messageId, postActions, list, z10, addNewReactionAccessibilityLabel, reactionsTheme, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ForumPostActionBar) {
            ForumPostActionBar forumPostActionBar = (ForumPostActionBar) obj;
            return MessageId.m1088equalsimpl0(this.messageId, forumPostActionBar.messageId) && Intrinsics.areEqual(this.postActions, forumPostActionBar.postActions) && Intrinsics.areEqual(this.reactions, forumPostActionBar.reactions) && this.canAddNewReactions == forumPostActionBar.canAddNewReactions && Intrinsics.areEqual(this.addNewReactionAccessibilityLabel, forumPostActionBar.addNewReactionAccessibilityLabel) && Intrinsics.areEqual(this.reactionsTheme, forumPostActionBar.reactionsTheme);
        }
        return false;
    }

    @NotNull
    public final String getAddNewReactionAccessibilityLabel() {
        return this.addNewReactionAccessibilityLabel;
    }

    public final boolean getCanAddNewReactions() {
        return this.canAddNewReactions;
    }

    @Override // com.discord.chat.presentation.message.messagepart.MessageAccessory
    @NotNull
    /* renamed from: getMessageId-3Eiw7ao */
    public String mo536getMessageId3Eiw7ao() {
        return this.messageId;
    }

    @NotNull
    public final ForumPostActions getPostActions() {
        return this.postActions;
    }

    public final List<MessageReaction> getReactions() {
        return this.reactions;
    }

    public final ReactionsTheme getReactionsTheme() {
        return this.reactionsTheme;
    }

    public int hashCode() {
        int m1089hashCodeimpl = ((MessageId.m1089hashCodeimpl(this.messageId) * 31) + this.postActions.hashCode()) * 31;
        List<MessageReaction> list = this.reactions;
        int hashCode = (((((m1089hashCodeimpl + (list == null ? 0 : list.hashCode())) * 31) + Boolean.hashCode(this.canAddNewReactions)) * 31) + this.addNewReactionAccessibilityLabel.hashCode()) * 31;
        ReactionsTheme reactionsTheme = this.reactionsTheme;
        return hashCode + (reactionsTheme != null ? reactionsTheme.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        String m1091toStringimpl = MessageId.m1091toStringimpl(this.messageId);
        ForumPostActions forumPostActions = this.postActions;
        List<MessageReaction> list = this.reactions;
        boolean z10 = this.canAddNewReactions;
        String str = this.addNewReactionAccessibilityLabel;
        ReactionsTheme reactionsTheme = this.reactionsTheme;
        return "ForumPostActionBar(messageId=" + m1091toStringimpl + ", postActions=" + forumPostActions + ", reactions=" + list + ", canAddNewReactions=" + z10 + ", addNewReactionAccessibilityLabel=" + str + ", reactionsTheme=" + reactionsTheme + ")";
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    private ForumPostActionBar(String messageId, ForumPostActions postActions, List<MessageReaction> list, boolean z10, String addNewReactionAccessibilityLabel, ReactionsTheme reactionsTheme) {
        super(messageId, "post-actions", false, 4, null);
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(postActions, "postActions");
        Intrinsics.checkNotNullParameter(addNewReactionAccessibilityLabel, "addNewReactionAccessibilityLabel");
        this.messageId = messageId;
        this.postActions = postActions;
        this.reactions = list;
        this.canAddNewReactions = z10;
        this.addNewReactionAccessibilityLabel = addNewReactionAccessibilityLabel;
        this.reactionsTheme = reactionsTheme;
    }
}
