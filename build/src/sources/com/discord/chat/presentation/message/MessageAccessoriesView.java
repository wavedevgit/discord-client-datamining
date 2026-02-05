package com.discord.chat.presentation.message;

import android.annotation.SuppressLint;
import android.content.Context;
import android.content.res.Resources;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.View;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.R;
import com.discord.chat.presentation.events.ChatEventHandler;
import com.discord.chat.presentation.message.decorations.MessageAccessoriesHorizontalSpacingDecoration;
import com.discord.chat.presentation.message.decorations.ThreadSpineItemDecoration;
import com.discord.chat.presentation.message.messagepart.MessageAccessory;
import com.discord.chat.presentation.message.messagepart.MessageMargins;
import com.discord.chat.presentation.message.messagepart.ThreadEmbedMessageAccessory;
import com.discord.chat.presentation.message.view.botuikit.ComponentProvider;
import com.discord.device.utils.IsMetaQuestKt;
import com.discord.primitives.GuildId;
import com.discord.recycler_view.decorations.VerticalSpacingItemDecoration;
import com.discord.recycler_view.utils.TransitionResilientLinearLayoutManager;
import com.discord.theme.ThemeManagerKt;
import com.facebook.react.modules.dialog.AlertFragment;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u009c\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0005\u0018\u00002\u00020\u0001B\u001d\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u0012\u0010\u0010\u001a\u00020\u00112\b\u0010\u0012\u001a\u0004\u0018\u00010\u0013H\u0016J\u0012\u0010\u001e\u001a\u00020\u00112\b\u0010\u001f\u001a\u0004\u0018\u00010 H\u0016J\u0012\u0010!\u001a\u00020\u00112\b\u0010\u001f\u001a\u0004\u0018\u00010 H\u0016J\b\u0010\"\u001a\u00020#H\u0002J\u0010\u0010$\u001a\u00020\u00112\u0006\u0010%\u001a\u00020&H\u0016J\u0010\u0010'\u001a\u00020\u00112\u0006\u0010(\u001a\u00020\u000bH\u0002JW\u0010)\u001a\u00020\u00112\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010*\u001a\u00020+2\u0006\u0010,\u001a\u00020-2\b\u0010.\u001a\u0004\u0018\u00010/2\f\u00100\u001a\b\u0012\u0004\u0012\u000202012\u0006\u00103\u001a\u0002042\b\u00105\u001a\u0004\u0018\u0001062\u0006\u00107\u001a\u00020\u001d¢\u0006\u0004\b8\u00109J\u0012\u0010:\u001a\u00020\u001d2\b\u0010;\u001a\u0004\u0018\u00010<H\u0017J\u0012\u0010=\u001a\u00020\u001d2\b\u0010>\u001a\u0004\u0018\u00010<H\u0016J\u0010\u0010?\u001a\u00020\u00112\b\b\u0002\u0010@\u001a\u00020\u001dR\u000e\u0010\b\u001a\u00020\tX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u000fX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0014\u001a\u00020\u0015X\u0082\u000e¢\u0006\u0002\n\u0000R\u001b\u0010\u0016\u001a\u00020\u00178BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b\u001a\u0010\u001b\u001a\u0004\b\u0018\u0010\u0019R\u000e\u0010\u001c\u001a\u00020\u001dX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006A"}, d2 = {"Lcom/discord/chat/presentation/message/MessageAccessoriesView;", "Landroidx/recyclerview/widget/RecyclerView;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "threadSpineDecoration", "Lcom/discord/chat/presentation/message/decorations/ThreadSpineItemDecoration;", "margins", "Lcom/discord/chat/presentation/message/messagepart/MessageMargins;", "accessoriesAdapter", "Lcom/discord/chat/presentation/message/MessageAccessoriesAdapter;", "transitionResilientLinearLayoutManager", "Lcom/discord/recycler_view/utils/TransitionResilientLinearLayoutManager;", "setRecycledViewPool", "", "pool", "Landroidx/recyclerview/widget/RecyclerView$RecycledViewPool;", "messageAccessoriesDecoration", "Lcom/discord/chat/presentation/message/decorations/MessageAccessoriesHorizontalSpacingDecoration;", "forwardBarPaint", "Landroid/graphics/Paint;", "getForwardBarPaint", "()Landroid/graphics/Paint;", "forwardBarPaint$delegate", "Lkotlin/Lazy;", "showingForwardBar", "", "startViewTransition", "view", "Landroid/view/View;", "endViewTransition", "getForwardBarHeight", "", "onDraw", "c", "Landroid/graphics/Canvas;", "updateMargins", "newMargins", "setAccessories", "messageId", "Lcom/discord/primitives/MessageId;", "channelId", "Lcom/discord/primitives/ChannelId;", "guildId", "Lcom/discord/primitives/GuildId;", AlertFragment.ARG_ITEMS, "", "Lcom/discord/chat/presentation/message/messagepart/MessageAccessory;", "eventHandler", "Lcom/discord/chat/presentation/events/ChatEventHandler;", "messageComponentProvider", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentProvider;", "drawForward", "setAccessories-dvvEyHs", "(Lcom/discord/chat/presentation/message/messagepart/MessageMargins;Ljava/lang/String;JLcom/discord/primitives/GuildId;Ljava/util/List;Lcom/discord/chat/presentation/events/ChatEventHandler;Lcom/discord/chat/presentation/message/view/botuikit/ComponentProvider;Z)V", "onTouchEvent", "e", "Landroid/view/MotionEvent;", "onGenericMotionEvent", "event", "clear", "removeViews", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nMessageAccessoriesView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MessageAccessoriesView.kt\ncom/discord/chat/presentation/message/MessageAccessoriesView\n+ 2 _Sequences.kt\nkotlin/sequences/SequencesKt___SequencesKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,207:1\n1321#2,2:208\n1761#3,3:210\n*S KotlinDebug\n*F\n+ 1 MessageAccessoriesView.kt\ncom/discord/chat/presentation/message/MessageAccessoriesView\n*L\n105#1:208,2\n166#1:210,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MessageAccessoriesView extends RecyclerView {
    @NotNull
    private final MessageAccessoriesAdapter accessoriesAdapter;
    @NotNull
    private final Lazy forwardBarPaint$delegate;
    @NotNull
    private MessageMargins margins;
    @NotNull
    private MessageAccessoriesHorizontalSpacingDecoration messageAccessoriesDecoration;
    private boolean showingForwardBar;
    @NotNull
    private ThreadSpineItemDecoration threadSpineDecoration;
    @NotNull
    private final TransitionResilientLinearLayoutManager transitionResilientLinearLayoutManager;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public MessageAccessoriesView(@NotNull Context context) {
        this(context, null, 2, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public static /* synthetic */ void clear$default(MessageAccessoriesView messageAccessoriesView, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = true;
        }
        messageAccessoriesView.clear(z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Paint forwardBarPaint_delegate$lambda$1() {
        Paint paint = new Paint();
        paint.setStyle(Paint.Style.FILL);
        return paint;
    }

    /* JADX WARN: Removed duplicated region for block: B:5:0x0012  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final int getForwardBarHeight() {
        /*
            r4 = this;
            kotlin.sequences.Sequence r0 = androidx.core.view.n0.a(r4)
            kotlin.sequences.Sequence r0 = kotlin.sequences.k.c0(r0)
            java.util.Iterator r0 = r0.iterator()
        Lc:
            boolean r1 = r0.hasNext()
            if (r1 == 0) goto L31
            java.lang.Object r1 = r0.next()
            kotlin.Pair r1 = (kotlin.Pair) r1
            java.lang.Object r2 = r1.c()
            android.view.View r2 = (android.view.View) r2
            java.lang.Object r1 = r1.d()
            android.view.View r1 = (android.view.View) r1
            boolean r3 = r1 instanceof com.discord.reactions.ShortcutsFlexbox
            if (r3 != 0) goto L2c
            boolean r1 = r1 instanceof com.discord.chat.presentation.message.view.ThreadEmbedView
            if (r1 == 0) goto Lc
        L2c:
            int r0 = r2.getBottom()
            return r0
        L31:
            int r0 = r4.getHeight()
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.presentation.message.MessageAccessoriesView.getForwardBarHeight():int");
    }

    private final Paint getForwardBarPaint() {
        return (Paint) this.forwardBarPaint$delegate.getValue();
    }

    private final void updateMargins(MessageMargins messageMargins) {
        if (Intrinsics.areEqual(messageMargins, this.messageAccessoriesDecoration.getMargins()) && this.showingForwardBar == this.messageAccessoriesDecoration.getIsForwardedMessage()) {
            return;
        }
        this.margins = messageMargins;
        removeItemDecoration(this.messageAccessoriesDecoration);
        MessageAccessoriesHorizontalSpacingDecoration messageAccessoriesHorizontalSpacingDecoration = new MessageAccessoriesHorizontalSpacingDecoration(this.margins, this.showingForwardBar);
        this.messageAccessoriesDecoration = messageAccessoriesHorizontalSpacingDecoration;
        addItemDecoration(messageAccessoriesHorizontalSpacingDecoration);
    }

    public final void clear(boolean z10) {
        this.accessoriesAdapter.clear();
        if (z10) {
            removeAllViewsInLayout();
        }
    }

    @Override // android.view.ViewGroup
    public void endViewTransition(View view) {
        super.endViewTransition(view);
        suppressLayout(false);
        this.transitionResilientLinearLayoutManager.disableRecycling(false);
    }

    @Override // androidx.recyclerview.widget.RecyclerView, android.view.View
    public void onDraw(@NotNull Canvas c10) {
        Intrinsics.checkNotNullParameter(c10, "c");
        super.onDraw(c10);
        if (!this.showingForwardBar) {
            return;
        }
        getForwardBarPaint().setColor(ThemeManagerKt.getTheme().getBorderStrong());
        MessageMargins.Companion companion = MessageMargins.Companion;
        c10.drawRoundRect(this.margins.getLeftMarginPx(), 0.0f, this.margins.getLeftMarginPx() + companion.getFORWARD_BAR_WIDTH(), getForwardBarHeight(), companion.getFORWARD_BAR_WIDTH() / 2, companion.getFORWARD_BAR_WIDTH() / 2, getForwardBarPaint());
    }

    @Override // androidx.recyclerview.widget.RecyclerView, android.view.View
    public boolean onGenericMotionEvent(MotionEvent motionEvent) {
        if (IsMetaQuestKt.isMetaQuest() && motionEvent != null && motionEvent.getAction() == 8) {
            return false;
        }
        return super.onGenericMotionEvent(motionEvent);
    }

    @Override // androidx.recyclerview.widget.RecyclerView, android.view.View
    @SuppressLint({"ClickableViewAccessibility"})
    public boolean onTouchEvent(MotionEvent motionEvent) {
        super.onTouchEvent(motionEvent);
        return false;
    }

    /* renamed from: setAccessories-dvvEyHs  reason: not valid java name */
    public final void m530setAccessoriesdvvEyHs(@NotNull MessageMargins margins, @NotNull String messageId, long j10, GuildId guildId, @NotNull List<? extends MessageAccessory> items, @NotNull ChatEventHandler eventHandler, ComponentProvider componentProvider, boolean z10) {
        Intrinsics.checkNotNullParameter(margins, "margins");
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(items, "items");
        Intrinsics.checkNotNullParameter(eventHandler, "eventHandler");
        setItemAnimator(null);
        if (this.showingForwardBar != z10) {
            this.showingForwardBar = z10;
        }
        updateMargins(margins);
        ThreadSpineItemDecoration threadSpineItemDecoration = this.threadSpineDecoration;
        List<? extends MessageAccessory> list = items;
        boolean z11 = false;
        if (!(list instanceof Collection) || !list.isEmpty()) {
            Iterator<T> it = list.iterator();
            while (true) {
                if (!it.hasNext()) {
                    break;
                } else if (((MessageAccessory) it.next()) instanceof ThreadEmbedMessageAccessory) {
                    z11 = true;
                    break;
                }
            }
        }
        threadSpineItemDecoration.setShowThreadSpine(z11);
        this.accessoriesAdapter.setEventHandler(eventHandler);
        this.accessoriesAdapter.setComponentProvider(componentProvider);
        this.accessoriesAdapter.m507setItemsbo5iIEc(messageId, j10, guildId, items);
    }

    @Override // androidx.recyclerview.widget.RecyclerView
    public void setRecycledViewPool(RecyclerView.RecycledViewPool recycledViewPool) {
        super.setRecycledViewPool(recycledViewPool);
        this.accessoriesAdapter.setNestedAccessoriesRecycledViewPool(recycledViewPool);
    }

    @Override // android.view.ViewGroup
    public void startViewTransition(View view) {
        super.startViewTransition(view);
        suppressLayout(true);
        this.transitionResilientLinearLayoutManager.disableRecycling(true);
    }

    public /* synthetic */ MessageAccessoriesView(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MessageAccessoriesView(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        Resources resources = getResources();
        Intrinsics.checkNotNullExpressionValue(resources, "getResources(...)");
        this.margins = new MessageMargins(resources);
        MessageAccessoriesAdapter messageAccessoriesAdapter = new MessageAccessoriesAdapter(new MessageAccessoriesView$accessoriesAdapter$1(this));
        this.accessoriesAdapter = messageAccessoriesAdapter;
        TransitionResilientLinearLayoutManager transitionResilientLinearLayoutManager = new TransitionResilientLinearLayoutManager(context, 1, false, null, 8, null);
        this.transitionResilientLinearLayoutManager = transitionResilientLinearLayoutManager;
        this.forwardBarPaint$delegate = or.l.a(new Function0() { // from class: com.discord.chat.presentation.message.q0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Paint forwardBarPaint_delegate$lambda$1;
                forwardBarPaint_delegate$lambda$1 = MessageAccessoriesView.forwardBarPaint_delegate$lambda$1();
                return forwardBarPaint_delegate$lambda$1;
            }
        });
        setItemAnimator(null);
        setNestedScrollingEnabled(false);
        this.threadSpineDecoration = new ThreadSpineItemDecoration(context, this.margins.getLeftMarginPx());
        this.messageAccessoriesDecoration = new MessageAccessoriesHorizontalSpacingDecoration(this.margins, false);
        addItemDecoration(this.threadSpineDecoration);
        addItemDecoration(this.messageAccessoriesDecoration);
        addItemDecoration(new VerticalSpacingItemDecoration(getResources().getDimensionPixelSize(R.dimen.message_accessories_vertical_spacing), 0, 0, false, 14, null));
        setLayoutManager(transitionResilientLinearLayoutManager);
        setAdapter(messageAccessoriesAdapter);
    }
}
