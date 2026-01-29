package com.discord.span.utilities;

import android.text.Spannable;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u001a\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u0000\n\u0000\u001a\u0015\u0010\u0000\u001a\u00020\u0001\"\u0006\b\u0000\u0010\u0002\u0018\u0001*\u00020\u0003H\u0086\b\u001a\u0012\u0010\u0004\u001a\u00020\u0005*\u00020\u00032\u0006\u0010\u0006\u001a\u00020\u0007¨\u0006\b"}, d2 = {"hasSpan", "", "T", "Landroid/text/Spannable;", "coverWithSpan", "", "what", "", "span_utilities_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class SpannableExtensionsKt {
    public static final void coverWithSpan(@NotNull Spannable spannable, @NotNull Object what) {
        Intrinsics.checkNotNullParameter(spannable, "<this>");
        Intrinsics.checkNotNullParameter(what, "what");
        spannable.setSpan(what, 0, spannable.length(), 18);
    }

    public static final /* synthetic */ <T> boolean hasSpan(Spannable spannable) {
        Intrinsics.checkNotNullParameter(spannable, "<this>");
        int length = spannable.length();
        Intrinsics.reifiedOperationMarker(4, "T");
        boolean z10 = false;
        Object[] spans = spannable.getSpans(0, length, Object.class);
        Intrinsics.checkNotNullExpressionValue(spans, "getSpans(...)");
        if (spans.length == 0) {
            z10 = true;
        }
        return !z10;
    }
}
