package com.discord.chat.presentation.message.view.polls;

import android.content.Context;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.FrameLayout;
import com.discord.chat.bridge.polls.PollAction;
import com.discord.chat.bridge.polls.PollActionPresentation;
import com.discord.chat.databinding.PollActionButtonBinding;
import com.discord.primitives.ChannelId;
import com.discord.primitives.MessageId;
import kotlin.Metadata;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000H\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\u00020\u0001B\u001d\b\u0007\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004¢\u0006\u0004\b\u0006\u0010\u0007JG\u0010\u0014\u001a\u00020\u00102\b\u0010\t\u001a\u0004\u0018\u00010\b2\u0006\u0010\u000b\u001a\u00020\n2\u0006\u0010\r\u001a\u00020\f2\u001e\u0010\u0011\u001a\u001a\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\u000f\u0012\u0004\u0012\u00020\u00100\u000e¢\u0006\u0004\b\u0012\u0010\u0013J\r\u0010\u0016\u001a\u00020\u0015¢\u0006\u0004\b\u0016\u0010\u0017R\u0014\u0010\u0019\u001a\u00020\u00188\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0019\u0010\u001a¨\u0006\u001b"}, d2 = {"Lcom/discord/chat/presentation/message/view/polls/PollActionButton;", "Landroid/widget/FrameLayout;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "Lcom/discord/chat/bridge/polls/PollAction;", "action", "Lcom/discord/primitives/ChannelId;", "channelId", "Lcom/discord/primitives/MessageId;", "messageId", "Lkotlin/Function3;", "", "", "onTapPollAction", "bind-urJ__Hs", "(Lcom/discord/chat/bridge/polls/PollAction;JLjava/lang/String;Lkotlin/jvm/functions/Function3;)V", "bind", "", "hasAccessibilityFocus", "()Z", "Lcom/discord/chat/databinding/PollActionButtonBinding;", "binding", "Lcom/discord/chat/databinding/PollActionButtonBinding;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nPollActionButton.kt\nKotlin\n*S Kotlin\n*F\n+ 1 PollActionButton.kt\ncom/discord/chat/presentation/message/view/polls/PollActionButton\n+ 2 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,134:1\n257#2,2:135\n257#2,2:137\n257#2,2:139\n257#2,2:141\n257#2,2:143\n257#2,2:145\n257#2,2:147\n*S KotlinDebug\n*F\n+ 1 PollActionButton.kt\ncom/discord/chat/presentation/message/view/polls/PollActionButton\n*L\n34#1:135,2\n41#1:137,2\n43#1:139,2\n62#1:141,2\n82#1:143,2\n99#1:145,2\n121#1:147,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class PollActionButton extends FrameLayout {
    @NotNull
    private final PollActionButtonBinding binding;

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[PollActionPresentation.values().length];
            try {
                iArr[PollActionPresentation.TEXT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[PollActionPresentation.TEXT_BUTTON.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[PollActionPresentation.BUTTON.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[PollActionPresentation.SECONDARY_BUTTON.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public PollActionButton(@NotNull Context context) {
        this(context, null, 2, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void bind_urJ__Hs$lambda$1$lambda$0(PollAction pollAction, Function3 function3, long j10, String str, View view) {
        if (pollAction.getType() != null) {
            function3.invoke(ChannelId.m1060boximpl(j10), MessageId.m1086boximpl(str), pollAction.getType());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void bind_urJ__Hs$lambda$3$lambda$2(PollAction pollAction, Function3 function3, long j10, String str, View view) {
        if (pollAction.getType() != null) {
            function3.invoke(ChannelId.m1060boximpl(j10), MessageId.m1086boximpl(str), pollAction.getType());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void bind_urJ__Hs$lambda$5$lambda$4(PollAction pollAction, Function3 function3, long j10, String str, View view) {
        if (pollAction.getType() != null) {
            function3.invoke(ChannelId.m1060boximpl(j10), MessageId.m1086boximpl(str), pollAction.getType());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void bind_urJ__Hs$lambda$7$lambda$6(PollAction pollAction, Function3 function3, long j10, String str, View view) {
        if (pollAction.getType() != null) {
            function3.invoke(ChannelId.m1060boximpl(j10), MessageId.m1086boximpl(str), pollAction.getType());
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Removed duplicated region for block: B:40:0x01a3  */
    /* renamed from: bind-urJ__Hs  reason: not valid java name */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void m711bindurJ__Hs(final com.discord.chat.bridge.polls.PollAction r17, final long r18, @org.jetbrains.annotations.NotNull final java.lang.String r20, @org.jetbrains.annotations.NotNull final kotlin.jvm.functions.Function3 r21) {
        /*
            Method dump skipped, instructions count: 449
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.presentation.message.view.polls.PollActionButton.m711bindurJ__Hs(com.discord.chat.bridge.polls.PollAction, long, java.lang.String, kotlin.jvm.functions.Function3):void");
    }

    public final boolean hasAccessibilityFocus() {
        if (!this.binding.actionButton.isAccessibilityFocused() && !this.binding.actionText.isAccessibilityFocused()) {
            return false;
        }
        return true;
    }

    public /* synthetic */ PollActionButton(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public PollActionButton(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        PollActionButtonBinding inflate = PollActionButtonBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
    }
}
