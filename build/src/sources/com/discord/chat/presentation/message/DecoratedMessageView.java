package com.discord.chat.presentation.message;

import android.content.Context;
import android.graphics.Canvas;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.widget.FrameLayout;
import com.discord.chat.bridge.Message;
import com.discord.chat.databinding.DecoratedMessageViewBinding;
import com.discord.chat.presentation.events.ChatEventHandler;
import com.discord.chat.presentation.list.item.MessageItem;
import com.discord.chat.presentation.message.MessageView;
import com.discord.chat.presentation.message.decorations.BackgroundHighlightDrawer;
import com.discord.chat.presentation.message.decorations.HighlightedMessageDrawer;
import com.discord.chat.presentation.message.view.botuikit.ComponentProvider;
import com.discord.chat.presentation.root.MessageContext;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\\\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\u00020\u0001B\u001d\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u0010\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u0011H\u0014JP\u0010\u0012\u001a\u00020\u000f2\u0006\u0010\u0013\u001a\u00020\u00142\u0006\u0010\u0015\u001a\u00020\u00162\b\b\u0002\u0010\u0017\u001a\u00020\u00182\n\b\u0002\u0010\u0019\u001a\u0004\u0018\u00010\u001a2\u000e\b\u0002\u0010\u001b\u001a\b\u0012\u0004\u0012\u00020\u001d0\u001c2\b\b\u0002\u0010\u001e\u001a\u00020\r2\b\b\u0002\u0010\u001f\u001a\u00020\rR\u000e\u0010\b\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006 "}, d2 = {"Lcom/discord/chat/presentation/message/DecoratedMessageView;", "Landroid/widget/FrameLayout;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "binding", "Lcom/discord/chat/databinding/DecoratedMessageViewBinding;", "highlightDrawer", "Lcom/discord/chat/presentation/message/decorations/BackgroundHighlightDrawer;", "drawHighlight", "", "onDraw", "", "canvas", "Landroid/graphics/Canvas;", "setMessage", "message", "Lcom/discord/chat/bridge/Message;", "messageContext", "Lcom/discord/chat/presentation/root/MessageContext;", "eventHandler", "Lcom/discord/chat/presentation/events/ChatEventHandler;", "componentProvider", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentProvider;", "onChainPart", "Lkotlin/Function0;", "Lcom/discord/chat/presentation/message/MessageView$ChainPart;", "allowChildGestures", "renderContentOnly", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class DecoratedMessageView extends FrameLayout {
    @NotNull
    private final DecoratedMessageViewBinding binding;
    private boolean drawHighlight;
    @NotNull
    private final BackgroundHighlightDrawer highlightDrawer;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public DecoratedMessageView(@NotNull Context context) {
        this(context, null, 2, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public static /* synthetic */ void setMessage$default(DecoratedMessageView decoratedMessageView, Message message, MessageContext messageContext, ChatEventHandler chatEventHandler, ComponentProvider componentProvider, Function0 function0, boolean z10, boolean z11, int i10, Object obj) {
        boolean z12;
        if ((i10 & 4) != 0) {
            chatEventHandler = ChatEventHandler.Empty.INSTANCE;
        }
        ChatEventHandler chatEventHandler2 = chatEventHandler;
        if ((i10 & 8) != 0) {
            componentProvider = null;
        }
        ComponentProvider componentProvider2 = componentProvider;
        Function0 function02 = function0;
        if ((i10 & 16) != 0) {
            function02 = new Function0() { // from class: com.discord.chat.presentation.message.c
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    MessageView.ChainPart chainPart;
                    chainPart = MessageView.ChainPart.ONLY;
                    return chainPart;
                }
            };
        }
        Function0 function03 = function02;
        if ((i10 & 32) != 0) {
            z10 = true;
        }
        boolean z13 = z10;
        if ((i10 & 64) != 0) {
            z12 = false;
        } else {
            z12 = z11;
        }
        decoratedMessageView.setMessage(message, messageContext, chatEventHandler2, componentProvider2, function03, z13, z12);
    }

    @Override // android.view.View
    protected void onDraw(@NotNull Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        super.onDraw(canvas);
        if (this.drawHighlight) {
            HighlightedMessageDrawer.drawHighlight$default(this.highlightDrawer, canvas, this, 0, 0, 12, null);
        }
    }

    public final void setMessage(@NotNull Message message, @NotNull MessageContext messageContext, @NotNull ChatEventHandler eventHandler, ComponentProvider componentProvider, @NotNull Function0<? extends MessageView.ChainPart> onChainPart, boolean z10, boolean z11) {
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(messageContext, "messageContext");
        Intrinsics.checkNotNullParameter(eventHandler, "eventHandler");
        Intrinsics.checkNotNullParameter(onChainPart, "onChainPart");
        this.binding.messageView.setMessage(message, messageContext, eventHandler, componentProvider, onChainPart, z10, z11);
        this.drawHighlight = ((Boolean) this.highlightDrawer.getShouldRenderHighlight().invoke(new MessageItem(message, messageContext, z10, null, null, z11, 24, null))).booleanValue();
    }

    public /* synthetic */ DecoratedMessageView(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public DecoratedMessageView(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        DecoratedMessageViewBinding inflate = DecoratedMessageViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        this.highlightDrawer = new BackgroundHighlightDrawer(context);
        setWillNotDraw(false);
    }
}
