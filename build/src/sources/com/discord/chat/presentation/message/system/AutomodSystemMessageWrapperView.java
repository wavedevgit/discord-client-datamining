package com.discord.chat.presentation.message.system;

import android.content.Context;
import android.graphics.Canvas;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.widget.FrameLayout;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.bridge.Message;
import com.discord.chat.databinding.DecoratedMessageViewBinding;
import com.discord.chat.presentation.events.ChatEventHandler;
import com.discord.chat.presentation.list.delegate.AutomodSystemMessageDelegate;
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
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u00020\u0001B\u001d\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u0010\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u0011H\u0014J\u001e\u0010\u0012\u001a\u00020\u000f2\u0006\u0010\u0013\u001a\u00020\u00142\u0006\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u0018R\u000e\u0010\b\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u0019"}, d2 = {"Lcom/discord/chat/presentation/message/system/AutomodSystemMessageWrapperView;", "Landroid/widget/FrameLayout;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "binding", "Lcom/discord/chat/databinding/DecoratedMessageViewBinding;", "highlightDrawer", "Lcom/discord/chat/presentation/message/decorations/BackgroundHighlightDrawer;", "drawHighlight", "", "onDraw", "", "canvas", "Landroid/graphics/Canvas;", "setMessage", "message", "Lcom/discord/chat/bridge/Message;", "messageContext", "Lcom/discord/chat/presentation/root/MessageContext;", "eventHandler", "Lcom/discord/chat/presentation/events/ChatEventHandler;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AutomodSystemMessageWrapperView extends FrameLayout {
    @NotNull
    private final DecoratedMessageViewBinding binding;
    private boolean drawHighlight;
    @NotNull
    private final BackgroundHighlightDrawer highlightDrawer;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public AutomodSystemMessageWrapperView(@NotNull Context context) {
        this(context, null, 2, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ChatEventHandler setMessage$lambda$0(ChatEventHandler chatEventHandler) {
        return chatEventHandler;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ComponentProvider setMessage$lambda$1(ComponentProvider componentProvider) {
        return componentProvider;
    }

    @Override // android.view.View
    protected void onDraw(@NotNull Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        super.onDraw(canvas);
        if (this.drawHighlight) {
            HighlightedMessageDrawer.drawHighlight$default(this.highlightDrawer, canvas, this, 0, 0, 12, null);
        }
    }

    public final void setMessage(@NotNull Message message, @NotNull MessageContext messageContext, @NotNull final ChatEventHandler eventHandler) {
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(messageContext, "messageContext");
        Intrinsics.checkNotNullParameter(eventHandler, "eventHandler");
        MessageView.setMessage$default(this.binding.messageView, message, messageContext, eventHandler, null, null, false, false, 120, null);
        Function0 function0 = new Function0() { // from class: com.discord.chat.presentation.message.system.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                ChatEventHandler message$lambda$0;
                message$lambda$0 = AutomodSystemMessageWrapperView.setMessage$lambda$0(ChatEventHandler.this);
                return message$lambda$0;
            }
        };
        Context context = getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        final ComponentProvider componentProvider = new ComponentProvider(context, true);
        removeAllViews();
        addView(new AutomodSystemMessageDelegate(function0, new Function0() { // from class: com.discord.chat.presentation.message.system.c
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                ComponentProvider message$lambda$1;
                message$lambda$1 = AutomodSystemMessageWrapperView.setMessage$lambda$1(ComponentProvider.this);
                return message$lambda$1;
            }
        }, new RecyclerView.RecycledViewPool()).createAndBindStandaloneView(this, message, messageContext), -1, -2);
        this.drawHighlight = ((Boolean) this.highlightDrawer.getShouldRenderHighlight().invoke(new MessageItem(message, messageContext, false, null, null, false, 60, null))).booleanValue();
    }

    public /* synthetic */ AutomodSystemMessageWrapperView(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public AutomodSystemMessageWrapperView(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        DecoratedMessageViewBinding inflate = DecoratedMessageViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        this.highlightDrawer = new BackgroundHighlightDrawer(context);
        setWillNotDraw(false);
    }
}
