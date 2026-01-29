package com.discord.chat.presentation.message.viewholder;

import android.content.Context;
import android.graphics.Paint;
import android.text.TextPaint;
import android.view.View;
import android.widget.TextView;
import com.discord.chat.bridge.Message;
import com.discord.chat.bridge.MessageKt;
import com.discord.chat.bridge.structurabletext.StructurableText;
import com.discord.chat.bridge.threads.ThreadEmbed;
import com.discord.chat.bridge.threads.ThreadEmbedMessage;
import com.discord.chat.presentation.message.MessageUtilsKt;
import com.discord.chat.presentation.message.messagepart.ThreadEmbedMessageAccessory;
import com.discord.chat.presentation.message.view.ThreadEmbedView;
import com.discord.chat.presentation.textutils.TextUtilsKt;
import com.discord.primitives.GuildId;
import com.discord.primitives.MessageId;
import com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchUtilsKt;
import com.facebook.drawee.span.DraweeSpanStringBuilder;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\"\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\t2\u0012\u0010\n\u001a\u000e\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\u00070\u000bR\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\r"}, d2 = {"Lcom/discord/chat/presentation/message/viewholder/ThreadEmbedViewHolder;", "Lcom/discord/chat/presentation/message/viewholder/MessagePartViewHolder;", "threadEmbedView", "Lcom/discord/chat/presentation/message/view/ThreadEmbedView;", "<init>", "(Lcom/discord/chat/presentation/message/view/ThreadEmbedView;)V", "bind", "", "threadItem", "Lcom/discord/chat/presentation/message/messagepart/ThreadEmbedMessageAccessory;", "onTapThreadEmbed", "Lkotlin/Function1;", "Lcom/discord/primitives/MessageId;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ThreadEmbedViewHolder extends MessagePartViewHolder {
    @NotNull
    private final ThreadEmbedView threadEmbedView;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ThreadEmbedViewHolder(@NotNull ThreadEmbedView threadEmbedView) {
        super(threadEmbedView, null);
        Intrinsics.checkNotNullParameter(threadEmbedView, "threadEmbedView");
        this.threadEmbedView = threadEmbedView;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void bind$lambda$2$lambda$0(Function1 function1, ThreadEmbedMessageAccessory threadEmbedMessageAccessory, View view) {
        function1.invoke(MessageId.m1084boximpl(threadEmbedMessageAccessory.mo536getMessageId3Eiw7ao()));
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r10v1, types: [java.lang.CharSequence] */
    public final void bind(@NotNull final ThreadEmbedMessageAccessory threadItem, @NotNull final Function1<? super MessageId, Unit> onTapThreadEmbed) {
        Message message;
        DraweeSpanStringBuilder draweeSpanStringBuilder;
        ?? contentlessPreviewText;
        String str;
        String str2;
        Integer num;
        String str3;
        String str4;
        Intrinsics.checkNotNullParameter(threadItem, "threadItem");
        Intrinsics.checkNotNullParameter(onTapThreadEmbed, "onTapThreadEmbed");
        ThreadEmbed threadEmbed = threadItem.getThreadEmbed();
        ThreadEmbedView threadEmbedView = this.threadEmbedView;
        threadEmbedView.setThread(threadEmbed.getTitle(), threadEmbed.getMessageCountLabel());
        Boolean archived = threadEmbed.getArchived();
        Boolean bool = Boolean.TRUE;
        threadEmbedView.setArchived(Intrinsics.areEqual(archived, bool), threadEmbed.getArchivedIconUrl());
        boolean z10 = false;
        GuildId guildId = null;
        NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(threadEmbedView, false, new View.OnClickListener() { // from class: com.discord.chat.presentation.message.viewholder.s0
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                ThreadEmbedViewHolder.bind$lambda$2$lambda$0(Function1.this, threadItem, view);
            }
        }, 1, null);
        StringBuilder sb2 = new StringBuilder();
        if (threadEmbed.getTitle().length() > 0) {
            sb2.append(threadEmbed.getTitle());
            if (threadEmbed.getMessageCountLabel().length() > 0) {
                sb2.append(", ");
            }
        }
        if (threadEmbed.getMessageCountLabel().length() > 0) {
            sb2.append(threadEmbed.getMessageCountLabel());
        }
        threadEmbedView.setAccessibilityLabel(sb2.toString());
        ThreadEmbedMessage referencedMessage = threadEmbed.getReferencedMessage();
        if (referencedMessage != null) {
            message = referencedMessage.getMessage();
        } else {
            message = null;
        }
        String str5 = "";
        if (message == null) {
            String messagePreviewString = threadEmbed.getMessagePreviewString();
            if (messagePreviewString != null) {
                str5 = messagePreviewString;
            }
            draweeSpanStringBuilder = new DraweeSpanStringBuilder(str5);
        } else if (message.getContent() != null) {
            StructurableText content = message.getContent();
            Context context = threadEmbedView.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            String m237getId3Eiw7ao = message.m237getId3Eiw7ao();
            boolean shouldAnimateEmoji = MessageKt.shouldAnimateEmoji(message);
            boolean shouldShowLinkDecorations = MessageKt.shouldShowLinkDecorations(message);
            boolean shouldShowRoleDot = message.getShouldShowRoleDot();
            boolean shouldShowRoleOnName = message.getShouldShowRoleOnName();
            Paint.FontMetrics fontMetrics = threadEmbedView.getBinding().threadEmbedMostRecentMessageContent.getPaint().getFontMetrics();
            Intrinsics.checkNotNullExpressionValue(fontMetrics, "getFontMetrics(...)");
            float baselineHeightPx = TextUtilsKt.getBaselineHeightPx(fontMetrics);
            TextPaint paint = threadEmbedView.getBinding().threadEmbedMostRecentMessageContent.getPaint();
            Intrinsics.checkNotNullExpressionValue(paint, "getPaint(...)");
            draweeSpanStringBuilder = TextUtilsKt.toSpannable$default(content, context, m237getId3Eiw7ao, shouldAnimateEmoji, shouldShowLinkDecorations, shouldShowRoleDot, shouldShowRoleOnName, paint, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, true, null, baselineHeightPx, null, false, 113246080, null);
        } else {
            Context context2 = threadEmbedView.getContext();
            Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
            contentlessPreviewText = ThreadEmbedViewHolderKt.getContentlessPreviewText(context2, message);
            if (contentlessPreviewText != 0) {
                str5 = contentlessPreviewText;
            }
            draweeSpanStringBuilder = new DraweeSpanStringBuilder(str5);
        }
        if (message != null) {
            Context context3 = threadEmbedView.getContext();
            Intrinsics.checkNotNullExpressionValue(context3, "getContext(...)");
            str = MessageKt.avatarUrl(message, context3);
        } else {
            str = null;
        }
        if (message != null) {
            str2 = message.getUsername();
        } else {
            str2 = null;
        }
        if (message != null) {
            num = Integer.valueOf(MessageKt.usernameColor$default(message, 0, 1, null));
        } else {
            num = null;
        }
        if (Intrinsics.areEqual(threadEmbed.getArchived(), bool) || message == null || message.getContent() == null) {
            z10 = true;
        }
        if (message != null) {
            str3 = message.getClanTag();
        } else {
            str3 = null;
        }
        if (message != null) {
            str4 = message.getClanBadgeUrl();
        } else {
            str4 = null;
        }
        if (message != null) {
            guildId = message.m235getClanTagGuildIdqOKuAAo();
        }
        threadEmbedView.m707setMessageCKTq3AQ(str, str2, num, draweeSpanStringBuilder, z10, str3, str4, guildId);
        if (message != null) {
            TextView threadEmbedMostRecentMessageName = threadEmbedView.getBinding().threadEmbedMostRecentMessageName;
            Intrinsics.checkNotNullExpressionValue(threadEmbedMostRecentMessageName, "threadEmbedMostRecentMessageName");
            MessageUtilsKt.clearOrSetRoleColors(threadEmbedMostRecentMessageName, message);
        }
    }
}
