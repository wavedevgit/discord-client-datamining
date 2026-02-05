package com.discord.reactions;

import android.content.Context;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewGroup;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.react_asset_fetcher.ReactAsset;
import com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchUtilsKt;
import com.discord.react_strings.I18nMessage;
import com.discord.react_strings.I18nUtilsKt;
import com.discord.reactions.ReactionView;
import com.discord.theme.DiscordTheme;
import com.discord.theme.ThemeManager;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.flexbox.FlexboxLayout;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000f\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0005\u0018\u0000 *2\u00020\u0001:\u0001*B\u001d\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u008c\u0001\u0010\f\u001a\u00020\r2\f\u0010\u000e\u001a\b\u0012\u0004\u0012\u00020\u00100\u000f2\u0006\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00142\b\u0010\u0015\u001a\u0004\u0018\u00010\u00162\b\b\u0002\u0010\u0017\u001a\u00020\u00182\u0012\u0010\u0019\u001a\u000e\u0012\u0004\u0012\u00020\u0010\u0012\u0004\u0012\u00020\r0\u001a2\u0014\b\u0002\u0010\u001b\u001a\u000e\u0012\u0004\u0012\u00020\u0010\u0012\u0004\u0012\u00020\r0\u001a2\n\b\u0002\u0010\u001c\u001a\u0004\u0018\u00010\u001d2\b\b\u0002\u0010\u001e\u001a\u00020\u00122\b\b\u0002\u0010\u001f\u001a\u00020\u00122\b\b\u0002\u0010 \u001a\u00020\u0018J\u0010\u0010!\u001a\u00020\r2\u0006\u0010\"\u001a\u00020\tH\u0002J\u0010\u0010#\u001a\u00020$2\u0006\u0010%\u001a\u00020&H\u0002J\u0010\u0010'\u001a\u00020$2\u0006\u0010%\u001a\u00020&H\u0002J\u0010\u0010(\u001a\u00020\r2\u0006\u0010)\u001a\u00020&H\u0002R\u000e\u0010\b\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u0001X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006+"}, d2 = {"Lcom/discord/reactions/ShortcutsFlexbox;", "Lcom/google/android/flexbox/FlexboxLayout;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "replyButtonView", "Lcom/discord/reactions/AddReactionView;", "addReactionView", "shortcutsView", "setReactions", "", "reactions", "", "Lcom/discord/reactions/ReactionView$Reaction;", "canAddNewReactions", "", "addNewReactionAccessibilityLabel", "", "reactionsTheme", "Lcom/discord/reactions/ReactionView$ReactionsTheme;", "onAddReactionClick", "Landroid/view/View$OnClickListener;", "onReactionClick", "Lkotlin/Function1;", "onReactionLongPress", "theme", "Lcom/discord/theme/DiscordTheme;", "showReactLabel", "showReplyButton", "onReplyClick", "setShortcutMargins", "shortcutView", "getOrCreateReactionView", "Lcom/discord/reactions/ReactionView;", "index", "", "createAndAddReactionView", "hideRemainingReactionsInRow", "startIndex", "Companion", "reactions_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nShortcutsFlexbox.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ShortcutsFlexbox.kt\ncom/discord/reactions/ShortcutsFlexbox\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,188:1\n1878#2,3:189\n1#3:192\n*S KotlinDebug\n*F\n+ 1 ShortcutsFlexbox.kt\ncom/discord/reactions/ShortcutsFlexbox\n*L\n64#1:189,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ShortcutsFlexbox extends FlexboxLayout {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final AddReactionView addReactionView;
    @NotNull
    private final AddReactionView replyButtonView;
    @NotNull
    private final FlexboxLayout shortcutsView;

    @Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010 \n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0016\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\bJ\u001c\u0010\t\u001a\b\u0012\u0004\u0012\u00020\u00050\n2\u000e\u0010\u000b\u001a\n\u0012\u0004\u0012\u00020\u0005\u0018\u00010\n¨\u0006\f"}, d2 = {"Lcom/discord/reactions/ShortcutsFlexbox$Companion;", "", "<init>", "()V", "copyReactionWithoutCount", "Lcom/discord/reactions/ReactionView$Reaction;", "reaction", "isBurstReaction", "", "separateAndSortDuplicateReactions", "", "reactions", "reactions_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final ReactionView.Reaction copyReactionWithoutCount(@NotNull final ReactionView.Reaction reaction, final boolean z10) {
            Intrinsics.checkNotNullParameter(reaction, "reaction");
            return new ReactionView.Reaction(z10, reaction) { // from class: com.discord.reactions.ShortcutsFlexbox$Companion$copyReactionWithoutCount$1
                private final int burstCount;
                private final int count;
                private final ReactionView.Emoji emoji;
                private final boolean isMe;
                private final boolean isMeBurst;
                private final ReactionView.ThemedBurstColorPalette themedBurstColors;

                /* JADX INFO: Access modifiers changed from: package-private */
                {
                    int count;
                    if (z10) {
                        count = 0;
                    } else {
                        count = reaction.getCount();
                    }
                    this.count = count;
                    this.burstCount = z10 ? reaction.getBurstCount() : 0;
                    this.isMe = reaction.isMe();
                    this.isMeBurst = reaction.isMeBurst();
                    this.emoji = reaction.getEmoji();
                    this.themedBurstColors = reaction.getThemedBurstColors();
                }

                @Override // com.discord.reactions.ReactionView.Reaction
                public int getBurstCount() {
                    return this.burstCount;
                }

                @Override // com.discord.reactions.ReactionView.Reaction
                public int getCount() {
                    return this.count;
                }

                @Override // com.discord.reactions.ReactionView.Reaction
                public ReactionView.Emoji getEmoji() {
                    return this.emoji;
                }

                @Override // com.discord.recycler_view.utils.ItemDiffableType
                public Long getItemId() {
                    return ReactionView.Reaction.DefaultImpls.getItemId(this);
                }

                @Override // com.discord.reactions.ReactionView.Reaction
                public ReactionView.ThemedBurstColorPalette getThemedBurstColors() {
                    return this.themedBurstColors;
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
            };
        }

        @NotNull
        public final List<ReactionView.Reaction> separateAndSortDuplicateReactions(List<? extends ReactionView.Reaction> list) {
            ArrayList arrayList = new ArrayList();
            if (list != null) {
                for (ReactionView.Reaction reaction : list) {
                    if (reaction.getBurstCount() > 0 && reaction.getCount() > 0) {
                        arrayList.add(copyReactionWithoutCount(reaction, true));
                        arrayList.add(copyReactionWithoutCount(reaction, false));
                    } else {
                        arrayList.add(reaction);
                    }
                }
            }
            return arrayList;
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public ShortcutsFlexbox(@NotNull Context context) {
        this(context, null, 2, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    private final ReactionView createAndAddReactionView(int i10) {
        Context context = getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        ReactionView reactionView = new ReactionView(context, null, 2, null);
        addView(reactionView, i10);
        ViewGroup.LayoutParams layoutParams = reactionView.getLayoutParams();
        Intrinsics.checkNotNull(layoutParams, "null cannot be cast to non-null type com.google.android.flexbox.FlexboxLayout.LayoutParams");
        FlexboxLayout.LayoutParams layoutParams2 = (FlexboxLayout.LayoutParams) layoutParams;
        layoutParams2.setMargins(0, 0, SizeUtilsKt.getDpToPx(4), SizeUtilsKt.getDpToPx(4));
        reactionView.setLayoutParams(layoutParams2);
        return reactionView;
    }

    private final ReactionView getOrCreateReactionView(int i10) {
        int i11 = i10 + 1;
        if (i11 < getChildCount() - 1) {
            View childAt = getChildAt(i11);
            Intrinsics.checkNotNull(childAt, "null cannot be cast to non-null type com.discord.reactions.ReactionView");
            ReactionView reactionView = (ReactionView) childAt;
            ViewGroup.LayoutParams layoutParams = reactionView.getLayoutParams();
            Intrinsics.checkNotNull(layoutParams, "null cannot be cast to non-null type com.google.android.flexbox.FlexboxLayout.LayoutParams");
            reactionView.setLayoutParams((FlexboxLayout.LayoutParams) layoutParams);
            reactionView.setVisibility(0);
            return reactionView;
        }
        return createAndAddReactionView(getChildCount() - 1);
    }

    private final void hideRemainingReactionsInRow(int i10) {
        int childCount = getChildCount() - 1;
        for (int i11 = i10 + 1; i11 < childCount; i11++) {
            getChildAt(i11).setVisibility(8);
        }
    }

    public static /* synthetic */ void setReactions$default(ShortcutsFlexbox shortcutsFlexbox, List list, boolean z10, String str, ReactionView.ReactionsTheme reactionsTheme, View.OnClickListener onClickListener, Function1 function1, Function1 function12, DiscordTheme discordTheme, boolean z11, boolean z12, View.OnClickListener onClickListener2, int i10, Object obj) {
        View.OnClickListener onClickListener3;
        Function1 function13;
        DiscordTheme discordTheme2;
        boolean z13;
        boolean z14;
        View.OnClickListener onClickListener4;
        if ((i10 & 16) != 0) {
            onClickListener3 = new View.OnClickListener() { // from class: com.discord.reactions.d
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    ShortcutsFlexbox.setReactions$lambda$0(view);
                }
            };
        } else {
            onClickListener3 = onClickListener;
        }
        if ((i10 & 64) != 0) {
            function13 = new Function1() { // from class: com.discord.reactions.e
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit reactions$lambda$1;
                    reactions$lambda$1 = ShortcutsFlexbox.setReactions$lambda$1((ReactionView.Reaction) obj2);
                    return reactions$lambda$1;
                }
            };
        } else {
            function13 = function12;
        }
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
            onClickListener4 = new View.OnClickListener() { // from class: com.discord.reactions.f
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    ShortcutsFlexbox.setReactions$lambda$2(view);
                }
            };
        } else {
            onClickListener4 = onClickListener2;
        }
        shortcutsFlexbox.setReactions(list, z10, str, reactionsTheme, onClickListener3, function1, function13, discordTheme2, z13, z14, onClickListener4);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void setReactions$lambda$0(View view) {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setReactions$lambda$1(ReactionView.Reaction reaction) {
        Intrinsics.checkNotNullParameter(reaction, "<unused var>");
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void setReactions$lambda$2(View view) {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean setReactions$lambda$5$lambda$4(Function1 function1, ReactionView.Reaction reaction, View view) {
        function1.invoke(reaction);
        return true;
    }

    private final void setShortcutMargins(AddReactionView addReactionView) {
        ViewGroup.LayoutParams layoutParams = addReactionView.getLayoutParams();
        Intrinsics.checkNotNull(layoutParams, "null cannot be cast to non-null type com.google.android.flexbox.FlexboxLayout.LayoutParams");
        FlexboxLayout.LayoutParams layoutParams2 = (FlexboxLayout.LayoutParams) layoutParams;
        layoutParams2.setMargins(0, 0, SizeUtilsKt.getDpToPx(6), SizeUtilsKt.getDpToPx(4));
        addReactionView.setLayoutParams(layoutParams2);
    }

    public final void setReactions(@NotNull List<? extends ReactionView.Reaction> reactions, boolean z10, @NotNull String addNewReactionAccessibilityLabel, ReactionView.ReactionsTheme reactionsTheme, @NotNull View.OnClickListener onAddReactionClick, @NotNull final Function1<? super ReactionView.Reaction, Unit> onReactionClick, @NotNull final Function1<? super ReactionView.Reaction, Unit> onReactionLongPress, DiscordTheme discordTheme, boolean z11, boolean z12, @NotNull View.OnClickListener onReplyClick) {
        int i10;
        int i11;
        Intrinsics.checkNotNullParameter(reactions, "reactions");
        Intrinsics.checkNotNullParameter(addNewReactionAccessibilityLabel, "addNewReactionAccessibilityLabel");
        Intrinsics.checkNotNullParameter(onAddReactionClick, "onAddReactionClick");
        Intrinsics.checkNotNullParameter(onReactionClick, "onReactionClick");
        Intrinsics.checkNotNullParameter(onReactionLongPress, "onReactionLongPress");
        Intrinsics.checkNotNullParameter(onReplyClick, "onReplyClick");
        ThemeManager themeManager = ThemeManager.INSTANCE;
        DiscordTheme themeOverride = themeManager.getThemeOverride();
        themeManager.setThemeOverride(discordTheme);
        List<ReactionView.Reaction> separateAndSortDuplicateReactions = Companion.separateAndSortDuplicateReactions(reactions);
        int i12 = 0;
        int i13 = 0;
        for (Object obj : separateAndSortDuplicateReactions) {
            int i14 = i13 + 1;
            if (i13 < 0) {
                CollectionsKt.v();
            }
            final ReactionView.Reaction reaction = (ReactionView.Reaction) obj;
            ReactionView orCreateReactionView = getOrCreateReactionView(i13);
            orCreateReactionView.setReaction(reaction, reactionsTheme);
            NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(orCreateReactionView, false, new View.OnClickListener() { // from class: com.discord.reactions.g
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    Function1.this.invoke(reaction);
                }
            }, 1, null);
            NestedScrollOnTouchUtilsKt.setOnLongClickListenerNested$default(orCreateReactionView, false, new View.OnLongClickListener() { // from class: com.discord.reactions.h
                @Override // android.view.View.OnLongClickListener
                public final boolean onLongClick(View view) {
                    boolean reactions$lambda$5$lambda$4;
                    reactions$lambda$5$lambda$4 = ShortcutsFlexbox.setReactions$lambda$5$lambda$4(Function1.this, reaction, view);
                    return reactions$lambda$5$lambda$4;
                }
            }, 1, null);
            separateAndSortDuplicateReactions = separateAndSortDuplicateReactions;
            i13 = i14;
        }
        hideRemainingReactionsInRow(separateAndSortDuplicateReactions.size());
        if (z12) {
            Context context = getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            String obj2 = I18nUtilsKt.i18nFormat$default(context, I18nMessage.MESSAGE_ACTION_REPLY, null, 2, null).toString();
            this.replyButtonView.configure(reactionsTheme, false, ReactAsset.Reply, true, obj2);
            this.replyButtonView.setContentDescription(obj2);
            NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(this.replyButtonView, false, onReplyClick, 1, null);
            AddReactionView addReactionView = this.replyButtonView;
            ViewGroup.LayoutParams layoutParams = addReactionView.getLayoutParams();
            Intrinsics.checkNotNull(layoutParams, "null cannot be cast to non-null type com.google.android.flexbox.FlexboxLayout.LayoutParams");
            ((FlexboxLayout.LayoutParams) layoutParams).setMargins(0, 0, SizeUtilsKt.getDpToPx(6), SizeUtilsKt.getDpToPx(4));
            addReactionView.setLayoutParams(layoutParams);
        }
        AddReactionView addReactionView2 = this.replyButtonView;
        if (z12) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        addReactionView2.setVisibility(i10);
        if (z10) {
            AddReactionView.configure$default(this.addReactionView, reactionsTheme, false, null, z11, null, 20, null);
            this.addReactionView.setContentDescription(addNewReactionAccessibilityLabel);
            NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(this.addReactionView, false, onAddReactionClick, 1, null);
            setShortcutMargins(this.addReactionView);
        }
        FlexboxLayout flexboxLayout = this.shortcutsView;
        if (z10) {
            i11 = 0;
        } else {
            i11 = 8;
        }
        flexboxLayout.setVisibility(i11);
        AddReactionView addReactionView3 = this.addReactionView;
        if (!z10) {
            i12 = 8;
        }
        addReactionView3.setVisibility(i12);
        ThemeManager.INSTANCE.setThemeOverride(themeOverride);
    }

    public /* synthetic */ ShortcutsFlexbox(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ShortcutsFlexbox(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        AddReactionView addReactionView = new AddReactionView(context, null, 2, null);
        this.replyButtonView = addReactionView;
        this.addReactionView = new AddReactionView(context, null, 2, null);
        this.shortcutsView = new FlexboxLayout(context);
        setFlexDirection(0);
        setFlexWrap(1);
        setJustifyContent(0);
        addView(addReactionView);
        int i10 = 0;
        while (i10 < 10) {
            i10++;
            createAndAddReactionView(i10);
        }
        addView(this.shortcutsView);
        this.shortcutsView.setFlexDirection(0);
        this.shortcutsView.setFlexWrap(0);
        this.shortcutsView.setJustifyContent(0);
        this.shortcutsView.addView(this.addReactionView);
    }
}
