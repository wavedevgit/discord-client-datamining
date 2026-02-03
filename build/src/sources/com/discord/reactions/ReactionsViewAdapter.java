package com.discord.reactions;

import android.annotation.SuppressLint;
import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import androidx.recyclerview.widget.RecyclerView;
import androidx.recyclerview.widget.e;
import com.discord.misc.utilities.ids.IdUtilsKt;
import com.discord.reactions.ReactionView;
import com.discord.recycler_view.utils.ItemDiffer;
import com.discord.theme.DiscordTheme;
import com.discord.theme.ThemeManager;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import com.google.android.flexbox.FlexboxLayoutManager;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\\\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\t\n\u0002\b\u0004\b\u0000\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0004¢\u0006\u0004\b\u0005\u0010\u0006J\u0018\u0010\u001a\u001a\u00020\u00022\u0006\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u0004H\u0016J\u0018\u0010\u001e\u001a\u00020\u00122\u0006\u0010\u001f\u001a\u00020\u00022\u0006\u0010 \u001a\u00020\u0004H\u0016J\b\u0010!\u001a\u00020\u0004H\u0016J\u0010\u0010\"\u001a\u00020\u00042\u0006\u0010 \u001a\u00020\u0004H\u0016J\u0010\u0010#\u001a\u00020$2\u0006\u0010 \u001a\u00020\u0004H\u0016J\b\u0010%\u001a\u00020\u0004H\u0002J\u0088\u0001\u0010&\u001a\u00020\u00122\u0006\u0010\f\u001a\u00020\r2\f\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\t0\b2\u0006\u0010\u0017\u001a\u00020\u00182\u0006\u0010\u0014\u001a\u00020\r2\b\u0010\n\u001a\u0004\u0018\u00010\u000b2\u0006\u0010\u000e\u001a\u00020\u000f2\u0012\u0010\u0010\u001a\u000e\u0012\u0004\u0012\u00020\t\u0012\u0004\u0012\u00020\u00120\u00112\u0012\u0010\u0013\u001a\u000e\u0012\u0004\u0012\u00020\t\u0012\u0004\u0012\u00020\u00120\u00112\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u00162\b\b\u0002\u0010'\u001a\u00020\u00182\b\b\u0002\u0010\u0019\u001a\u00020\u0018H\u0007R\u000e\u0010\u0003\u001a\u00020\u0004X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\t0\bX\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\n\u001a\u0004\u0018\u00010\u000bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0082.¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u000fX\u0082.¢\u0006\u0002\n\u0000R\u001a\u0010\u0010\u001a\u000e\u0012\u0004\u0012\u00020\t\u0012\u0004\u0012\u00020\u00120\u0011X\u0082.¢\u0006\u0002\n\u0000R\u001a\u0010\u0013\u001a\u000e\u0012\u0004\u0012\u00020\t\u0012\u0004\u0012\u00020\u00120\u0011X\u0082.¢\u0006\u0002\n\u0000R\u000e\u0010\u0014\u001a\u00020\rX\u0082.¢\u0006\u0002\n\u0000R\u0010\u0010\u0015\u001a\u0004\u0018\u00010\u0016X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0017\u001a\u00020\u0018X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0019\u001a\u00020\u0018X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006("}, d2 = {"Lcom/discord/reactions/ReactionsViewAdapter;", "Landroidx/recyclerview/widget/RecyclerView$Adapter;", "Landroidx/recyclerview/widget/RecyclerView$ViewHolder;", "reactionHeight", "", "<init>", "(I)V", "reactions", "", "Lcom/discord/reactions/ReactionView$Reaction;", "reactionsTheme", "Lcom/discord/reactions/ReactionView$ReactionsTheme;", "messageId", "", "onAddReactionClick", "Landroid/view/View$OnClickListener;", "onReactionClick", "Lkotlin/Function1;", "", "onReactionLongPress", "addNewReactionAccessibilityLabel", "theme", "Lcom/discord/theme/DiscordTheme;", "canAddNewReactions", "", "showReactLabel", "onCreateViewHolder", "parent", "Landroid/view/ViewGroup;", "viewType", "onBindViewHolder", "holder", ViewProps.POSITION, "getItemCount", "getItemViewType", "getItemId", "", "getAddReactionIndex", "setReactions", "areChatAnimationsEnabled", "reactions_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nReactionsViewAdapter.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReactionsViewAdapter.kt\ncom/discord/reactions/ReactionsViewAdapter\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,147:1\n1#2:148\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactionsViewAdapter extends RecyclerView.Adapter {
    private String addNewReactionAccessibilityLabel;
    private boolean canAddNewReactions;
    private String messageId;
    private View.OnClickListener onAddReactionClick;
    private Function1<? super ReactionView.Reaction, Unit> onReactionClick;
    private Function1<? super ReactionView.Reaction, Unit> onReactionLongPress;
    private final int reactionHeight;
    @NotNull
    private List<? extends ReactionView.Reaction> reactions = CollectionsKt.l();
    private ReactionView.ReactionsTheme reactionsTheme;
    private boolean showReactLabel;
    private DiscordTheme theme;

    public ReactionsViewAdapter(int i10) {
        this.reactionHeight = i10;
        setHasStableIds(true);
    }

    private final int getAddReactionIndex() {
        return this.reactions.size();
    }

    public static /* synthetic */ void setReactions$default(ReactionsViewAdapter reactionsViewAdapter, String str, List list, boolean z10, String str2, ReactionView.ReactionsTheme reactionsTheme, View.OnClickListener onClickListener, Function1 function1, Function1 function12, DiscordTheme discordTheme, boolean z11, boolean z12, int i10, Object obj) {
        DiscordTheme discordTheme2;
        boolean z13;
        boolean z14;
        ReactionsViewAdapter reactionsViewAdapter2;
        String str3;
        List list2;
        boolean z15;
        String str4;
        ReactionView.ReactionsTheme reactionsTheme2;
        View.OnClickListener onClickListener2;
        Function1 function13;
        Function1 function14;
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            discordTheme2 = null;
        } else {
            discordTheme2 = discordTheme;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            z13 = false;
        } else {
            z13 = z11;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
            z14 = false;
            str3 = str;
            list2 = list;
            z15 = z10;
            str4 = str2;
            reactionsTheme2 = reactionsTheme;
            onClickListener2 = onClickListener;
            function13 = function1;
            function14 = function12;
            reactionsViewAdapter2 = reactionsViewAdapter;
        } else {
            z14 = z12;
            reactionsViewAdapter2 = reactionsViewAdapter;
            str3 = str;
            list2 = list;
            z15 = z10;
            str4 = str2;
            reactionsTheme2 = reactionsTheme;
            onClickListener2 = onClickListener;
            function13 = function1;
            function14 = function12;
        }
        reactionsViewAdapter2.setReactions(str3, list2, z15, str4, reactionsTheme2, onClickListener2, function13, function14, discordTheme2, z13, z14);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public int getItemCount() {
        int size = this.reactions.size();
        if (this.canAddNewReactions) {
            return size + 1;
        }
        return size;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public long getItemId(int i10) {
        String str = null;
        if (i10 == getAddReactionIndex()) {
            String str2 = this.messageId;
            if (str2 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("messageId");
            } else {
                str = str2;
            }
            return IdUtilsKt.convertToId(str + "_add_reactions");
        }
        ReactionView.Reaction reaction = this.reactions.get(i10);
        String str3 = this.messageId;
        if (str3 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("messageId");
        } else {
            str = str3;
        }
        String emojiId = reaction.getEmoji().getEmojiId();
        boolean isBurstReaction = reaction.isBurstReaction();
        return IdUtilsKt.convertToId(str + "_" + emojiId + isBurstReaction);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public int getItemViewType(int i10) {
        if (i10 == getAddReactionIndex()) {
            return 47;
        }
        if (this.reactions.get(i10).isBurstReaction()) {
            return 45;
        }
        return 46;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public void onBindViewHolder(@NotNull RecyclerView.ViewHolder holder, int i10) {
        Intrinsics.checkNotNullParameter(holder, "holder");
        ThemeManager themeManager = ThemeManager.INSTANCE;
        DiscordTheme themeOverride = themeManager.getThemeOverride();
        themeManager.setThemeOverride(this.theme);
        View.OnClickListener onClickListener = null;
        Function1<? super ReactionView.Reaction, Unit> function1 = null;
        if (holder instanceof ReactionViewHolder) {
            ReactionView.Reaction reaction = this.reactions.get(i10);
            ReactionViewHolder reactionViewHolder = (ReactionViewHolder) holder;
            Function1<? super ReactionView.Reaction, Unit> function12 = this.onReactionClick;
            if (function12 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("onReactionClick");
                function12 = null;
            }
            Function1<? super ReactionView.Reaction, Unit> function13 = this.onReactionLongPress;
            if (function13 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("onReactionLongPress");
            } else {
                function1 = function13;
            }
            reactionViewHolder.bind(reaction, function12, function1, this.reactionsTheme);
        } else if (holder instanceof AddReactionViewHolder) {
            AddReactionViewHolder addReactionViewHolder = (AddReactionViewHolder) holder;
            String str = this.addNewReactionAccessibilityLabel;
            if (str == null) {
                Intrinsics.throwUninitializedPropertyAccessException("addNewReactionAccessibilityLabel");
                str = null;
            }
            View.OnClickListener onClickListener2 = this.onAddReactionClick;
            if (onClickListener2 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("onAddReactionClick");
            } else {
                onClickListener = onClickListener2;
            }
            addReactionViewHolder.bind(str, onClickListener, this.reactionsTheme, this.showReactLabel);
        } else {
            throw new IllegalStateException(("Invalid view holder type " + holder.getClass()).toString());
        }
        themeManager.setThemeOverride(themeOverride);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    @NotNull
    public RecyclerView.ViewHolder onCreateViewHolder(@NotNull ViewGroup parent, int i10) {
        RecyclerView.ViewHolder reactionViewHolder;
        Intrinsics.checkNotNullParameter(parent, "parent");
        FlexboxLayoutManager.c cVar = new FlexboxLayoutManager.c(-2, this.reactionHeight);
        ThemeManager themeManager = ThemeManager.INSTANCE;
        DiscordTheme themeOverride = themeManager.getThemeOverride();
        themeManager.setThemeOverride(this.theme);
        if (i10 != 46) {
            if (i10 == 47) {
                Context context = parent.getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                AddReactionView addReactionView = new AddReactionView(context, null, 2, null);
                addReactionView.setLayoutParams(cVar);
                reactionViewHolder = new AddReactionViewHolder(addReactionView);
            } else {
                throw new IllegalStateException(("Invalid view type " + i10).toString());
            }
        } else {
            Context context2 = parent.getContext();
            Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
            ReactionView reactionView = new ReactionView(context2, null, 2, null);
            reactionView.setLayoutParams(cVar);
            reactionViewHolder = new ReactionViewHolder(reactionView);
        }
        themeManager.setThemeOverride(themeOverride);
        return reactionViewHolder;
    }

    @SuppressLint({"NotifyDataSetChanged"})
    public final void setReactions(@NotNull String messageId, @NotNull List<? extends ReactionView.Reaction> reactions, boolean z10, @NotNull String addNewReactionAccessibilityLabel, ReactionView.ReactionsTheme reactionsTheme, @NotNull View.OnClickListener onAddReactionClick, @NotNull Function1<? super ReactionView.Reaction, Unit> onReactionClick, @NotNull Function1<? super ReactionView.Reaction, Unit> onReactionLongPress, DiscordTheme discordTheme, boolean z11, boolean z12) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(reactions, "reactions");
        Intrinsics.checkNotNullParameter(addNewReactionAccessibilityLabel, "addNewReactionAccessibilityLabel");
        Intrinsics.checkNotNullParameter(onAddReactionClick, "onAddReactionClick");
        Intrinsics.checkNotNullParameter(onReactionClick, "onReactionClick");
        Intrinsics.checkNotNullParameter(onReactionLongPress, "onReactionLongPress");
        this.messageId = messageId;
        this.canAddNewReactions = z10;
        this.addNewReactionAccessibilityLabel = addNewReactionAccessibilityLabel;
        this.showReactLabel = z12;
        this.reactionsTheme = reactionsTheme;
        this.onAddReactionClick = onAddReactionClick;
        this.onReactionClick = onReactionClick;
        this.onReactionLongPress = onReactionLongPress;
        this.theme = discordTheme;
        if (z11) {
            List<? extends ReactionView.Reaction> list = this.reactions;
            this.reactions = reactions;
            e.C0067e c10 = androidx.recyclerview.widget.e.c(new ItemDiffer(list, reactions), true);
            Intrinsics.checkNotNullExpressionValue(c10, "calculateDiff(...)");
            c10.c(this);
            return;
        }
        this.reactions = reactions;
        notifyDataSetChanged();
    }
}
