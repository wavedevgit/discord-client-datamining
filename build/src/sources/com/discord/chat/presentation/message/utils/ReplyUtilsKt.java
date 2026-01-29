package com.discord.chat.presentation.message.utils;

import android.text.style.LeadingMarginSpan;
import android.text.style.StyleSpan;
import android.view.View;
import com.facebook.drawee.span.DraweeSpanStringBuilder;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0018\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\u001a\u0016\u0010\u0000\u001a\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0001\u001a\u0016\u0010\u0005\u001a\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0006\u001a\u00020\u0007\u001a\u0016\u0010\b\u001a\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0001¨\u0006\t"}, d2 = {"createSystemReplyContentFromBuilder", "Lcom/facebook/drawee/span/DraweeSpanStringBuilder;", "referenceView", "Landroid/view/View;", "builder", "createSystemReplyContent", "content", "", "createReplyContent", "chat_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ReplyUtilsKt {
    @NotNull
    public static final DraweeSpanStringBuilder createReplyContent(@NotNull View referenceView, @NotNull DraweeSpanStringBuilder builder) {
        Intrinsics.checkNotNullParameter(referenceView, "referenceView");
        Intrinsics.checkNotNullParameter(builder, "builder");
        referenceView.measure(0, 0);
        builder.setSpan(new LeadingMarginSpan.Standard(referenceView.getMeasuredWidth(), 0), 0, builder.length(), 33);
        return builder;
    }

    @NotNull
    public static final DraweeSpanStringBuilder createSystemReplyContent(@NotNull View referenceView, @NotNull String content) {
        Intrinsics.checkNotNullParameter(referenceView, "referenceView");
        Intrinsics.checkNotNullParameter(content, "content");
        return createSystemReplyContentFromBuilder(referenceView, new DraweeSpanStringBuilder(content));
    }

    @NotNull
    public static final DraweeSpanStringBuilder createSystemReplyContentFromBuilder(@NotNull View referenceView, @NotNull DraweeSpanStringBuilder builder) {
        Intrinsics.checkNotNullParameter(referenceView, "referenceView");
        Intrinsics.checkNotNullParameter(builder, "builder");
        builder.setSpan(new StyleSpan(2), 0, builder.length(), 33);
        return createReplyContent(referenceView, builder);
    }
}
