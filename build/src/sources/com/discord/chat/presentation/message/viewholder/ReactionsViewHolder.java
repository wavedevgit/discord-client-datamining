package com.discord.chat.presentation.message.viewholder;

import android.view.View;
import com.discord.chat.bridge.reaction.MessageReaction;
import com.discord.chat.bridge.reaction.ReactionsTheme;
import com.discord.reactions.ReactionView;
import com.discord.reactions.ShortcutsFlexbox;
import com.discord.theme.DiscordTheme;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000N\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0088\u0001\u0010\u0006\u001a\u00020\u00072\f\u0010\b\u001a\b\u0012\u0004\u0012\u00020\n0\t2\u0006\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000e2\b\u0010\u000f\u001a\u0004\u0018\u00010\u00102\u0006\u0010\u0011\u001a\u00020\u00122\u0012\u0010\u0013\u001a\u000e\u0012\u0004\u0012\u00020\u0015\u0012\u0004\u0012\u00020\u00070\u00142\u0012\u0010\u0016\u001a\u000e\u0012\u0004\u0012\u00020\u0015\u0012\u0004\u0012\u00020\u00070\u00142\n\b\u0002\u0010\u0017\u001a\u0004\u0018\u00010\u00182\b\b\u0002\u0010\u0019\u001a\u00020\f2\b\b\u0002\u0010\u001a\u001a\u00020\f2\b\b\u0002\u0010\u001b\u001a\u00020\u0012R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u001c"}, d2 = {"Lcom/discord/chat/presentation/message/viewholder/ReactionsViewHolder;", "Lcom/discord/chat/presentation/message/viewholder/MessagePartViewHolder;", "reactionsView", "Lcom/discord/reactions/ShortcutsFlexbox;", "<init>", "(Lcom/discord/reactions/ShortcutsFlexbox;)V", "bind", "", "reactions", "", "Lcom/discord/chat/bridge/reaction/MessageReaction;", "canAddNewReactions", "", "addNewReactionAccessibilityLabel", "", "reactionsTheme", "Lcom/discord/chat/bridge/reaction/ReactionsTheme;", "onAddReactionClick", "Landroid/view/View$OnClickListener;", "onReactionClick", "Lkotlin/Function1;", "Lcom/discord/reactions/ReactionView$Reaction;", "onReactionLongPress", "theme", "Lcom/discord/theme/DiscordTheme;", "showReactLabel", "showReplyButton", "onReplyClick", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ReactionsViewHolder extends MessagePartViewHolder {
    @NotNull
    private final ShortcutsFlexbox reactionsView;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ReactionsViewHolder(@NotNull ShortcutsFlexbox reactionsView) {
        super(reactionsView, null);
        Intrinsics.checkNotNullParameter(reactionsView, "reactionsView");
        this.reactionsView = reactionsView;
    }

    public static /* synthetic */ void bind$default(ReactionsViewHolder reactionsViewHolder, List list, boolean z10, String str, ReactionsTheme reactionsTheme, View.OnClickListener onClickListener, Function1 function1, Function1 function12, DiscordTheme discordTheme, boolean z11, boolean z12, View.OnClickListener onClickListener2, int i10, Object obj) {
        DiscordTheme discordTheme2;
        boolean z13;
        boolean z14;
        View.OnClickListener onClickListener3;
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            discordTheme2 = null;
        } else {
            discordTheme2 = discordTheme;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            z13 = false;
        } else {
            z13 = z11;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            z14 = false;
        } else {
            z14 = z12;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
            onClickListener3 = new View.OnClickListener() { // from class: com.discord.chat.presentation.message.viewholder.j0
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    ReactionsViewHolder.bind$lambda$0(view);
                }
            };
        } else {
            onClickListener3 = onClickListener2;
        }
        reactionsViewHolder.bind(list, z10, str, reactionsTheme, onClickListener, function1, function12, discordTheme2, z13, z14, onClickListener3);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void bind$lambda$0(View view) {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit bind$lambda$1(Function1 function1, ReactionView.Reaction reaction) {
        Intrinsics.checkNotNullParameter(reaction, "reaction");
        function1.invoke(reaction);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit bind$lambda$2(Function1 function1, ReactionView.Reaction reaction) {
        Intrinsics.checkNotNullParameter(reaction, "reaction");
        function1.invoke(reaction);
        return Unit.f31988a;
    }

    public final void bind(@NotNull List<MessageReaction> reactions, boolean z10, @NotNull String addNewReactionAccessibilityLabel, ReactionsTheme reactionsTheme, @NotNull View.OnClickListener onAddReactionClick, @NotNull final Function1<? super ReactionView.Reaction, Unit> onReactionClick, @NotNull final Function1<? super ReactionView.Reaction, Unit> onReactionLongPress, DiscordTheme discordTheme, boolean z11, boolean z12, @NotNull View.OnClickListener onReplyClick) {
        Intrinsics.checkNotNullParameter(reactions, "reactions");
        Intrinsics.checkNotNullParameter(addNewReactionAccessibilityLabel, "addNewReactionAccessibilityLabel");
        Intrinsics.checkNotNullParameter(onAddReactionClick, "onAddReactionClick");
        Intrinsics.checkNotNullParameter(onReactionClick, "onReactionClick");
        Intrinsics.checkNotNullParameter(onReactionLongPress, "onReactionLongPress");
        Intrinsics.checkNotNullParameter(onReplyClick, "onReplyClick");
        this.reactionsView.setReactions(reactions, z10, addNewReactionAccessibilityLabel, reactionsTheme, onAddReactionClick, new Function1() { // from class: com.discord.chat.presentation.message.viewholder.h0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit bind$lambda$1;
                bind$lambda$1 = ReactionsViewHolder.bind$lambda$1(Function1.this, (ReactionView.Reaction) obj);
                return bind$lambda$1;
            }
        }, new Function1() { // from class: com.discord.chat.presentation.message.viewholder.i0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit bind$lambda$2;
                bind$lambda$2 = ReactionsViewHolder.bind$lambda$2(Function1.this, (ReactionView.Reaction) obj);
                return bind$lambda$2;
            }
        }, discordTheme, z11, z12, onReplyClick);
    }
}
