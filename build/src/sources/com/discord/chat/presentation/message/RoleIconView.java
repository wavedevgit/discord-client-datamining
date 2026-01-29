package com.discord.chat.presentation.message;

import android.content.Context;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.FrameLayout;
import com.discord.chat.bridge.roleicons.RoleIcon;
import com.discord.chat.databinding.RoleIconViewBinding;
import com.discord.chat.presentation.events.ChatEventHandler;
import com.discord.emoji.RenderableEmoji;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u0016\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000fR\u000e\u0010\b\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0010"}, d2 = {"Lcom/discord/chat/presentation/message/RoleIconView;", "Landroid/widget/FrameLayout;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "binding", "Lcom/discord/chat/databinding/RoleIconViewBinding;", "configureRoleIcon", "", "roleIcon", "Lcom/discord/chat/bridge/roleicons/RoleIcon;", "eventHandler", "Lcom/discord/chat/presentation/events/ChatEventHandler;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nRoleIconView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 RoleIconView.kt\ncom/discord/chat/presentation/message/RoleIconView\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,49:1\n1#2:50\n257#3,2:51\n*S KotlinDebug\n*F\n+ 1 RoleIconView.kt\ncom/discord/chat/presentation/message/RoleIconView\n*L\n27#1:51,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class RoleIconView extends FrameLayout {
    @NotNull
    private final RoleIconViewBinding binding;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public RoleIconView(@NotNull Context context, @NotNull AttributeSet attrs) {
        super(context, attrs);
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(attrs, "attrs");
        RoleIconViewBinding inflate = RoleIconViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void configureRoleIcon$lambda$3$lambda$2(ChatEventHandler chatEventHandler, RoleIcon roleIcon, RenderableEmoji renderableEmoji, View view) {
        chatEventHandler.onTapRoleIcon(roleIcon.getName(), renderableEmoji.getUrl(true, roleIcon.getSize()));
    }

    /* JADX WARN: Removed duplicated region for block: B:13:0x0031  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x0033  */
    /* JADX WARN: Removed duplicated region for block: B:16:0x0036  */
    /* JADX WARN: Removed duplicated region for block: B:17:0x0038  */
    /* JADX WARN: Removed duplicated region for block: B:20:0x003f A[RETURN] */
    /* JADX WARN: Removed duplicated region for block: B:21:0x0040  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void configureRoleIcon(@org.jetbrains.annotations.NotNull final com.discord.chat.bridge.roleicons.RoleIcon r13, @org.jetbrains.annotations.NotNull final com.discord.chat.presentation.events.ChatEventHandler r14) {
        /*
            r12 = this;
            java.lang.String r0 = "roleIcon"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r13, r0)
            java.lang.String r0 = "eventHandler"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r14, r0)
            java.lang.String r0 = r13.getSource()
            r1 = 0
            if (r0 == 0) goto L1f
            com.discord.emoji.RenderableEmoji$Companion r2 = com.discord.emoji.RenderableEmoji.Companion
            java.lang.String r3 = r13.getAlt()
            com.discord.emoji.RenderableEmoji$CustomWithUrl r0 = r2.customWithUrl(r0, r3)
            if (r0 == 0) goto L1f
        L1d:
            r2 = r0
            goto L2d
        L1f:
            java.lang.String r0 = r13.getUnicodeEmoji()
            if (r0 == 0) goto L2c
            com.discord.emoji.RenderableEmoji$Companion r2 = com.discord.emoji.RenderableEmoji.Companion
            com.discord.emoji.RenderableEmoji$Unicode r0 = r2.unicode(r0)
            goto L1d
        L2c:
            r2 = r1
        L2d:
            r0 = 1
            r10 = 0
            if (r2 == 0) goto L33
            r3 = r0
            goto L34
        L33:
            r3 = r10
        L34:
            if (r3 == 0) goto L38
            r3 = r10
            goto L3a
        L38:
            r3 = 8
        L3a:
            r12.setVisibility(r3)
            if (r2 != 0) goto L40
            return
        L40:
            com.discord.chat.databinding.RoleIconViewBinding r3 = r12.binding
            com.facebook.drawee.span.SimpleDraweeSpanTextView r11 = r3.roleIconViewUnicodeEmoji
            android.content.Context r3 = r11.getContext()
            java.lang.String r4 = "getContext(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r3, r4)
            int r4 = r13.getSize()
            int r4 = com.discord.misc.utilities.size.SizeUtilsKt.getSpToPx(r4)
            r8 = 48
            r9 = 0
            r5 = 1
            r6 = 0
            r7 = 0
            com.facebook.drawee.span.DraweeSpanStringBuilder r3 = com.discord.emoji.RenderableEmojiKt.renderEmoji$default(r2, r3, r4, r5, r6, r7, r8, r9)
            r11.setDraweeSpanStringBuilder(r3)
            kotlin.jvm.internal.Intrinsics.checkNotNull(r11)
            com.discord.chat.presentation.message.v1 r3 = new com.discord.chat.presentation.message.v1
            r3.<init>()
            com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(r11, r10, r3, r0, r1)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.presentation.message.RoleIconView.configureRoleIcon(com.discord.chat.bridge.roleicons.RoleIcon, com.discord.chat.presentation.events.ChatEventHandler):void");
    }
}
