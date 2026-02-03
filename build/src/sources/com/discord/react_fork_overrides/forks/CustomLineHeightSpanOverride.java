package com.discord.react_fork_overrides.forks;

import android.graphics.Paint;
import com.facebook.react.bridge.Callback;
import com.facebook.react.views.text.internal.span.CustomLineHeightSpan;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\bÀ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0006\u0010\u0004\u001a\u00020\u0005J\u0018\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\nH\u0002¨\u0006\u000b"}, d2 = {"Lcom/discord/react_fork_overrides/forks/CustomLineHeightSpanOverride;", "", "<init>", "()V", "override", "", "overrideLineHeight", "fm", "Landroid/graphics/Paint$FontMetricsInt;", "mHeight", "", "react_fork_overrides_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class CustomLineHeightSpanOverride {
    @NotNull
    public static final CustomLineHeightSpanOverride INSTANCE = new CustomLineHeightSpanOverride();

    private CustomLineHeightSpanOverride() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void override$lambda$0(Object[] objArr) {
        Intrinsics.checkNotNullParameter(objArr, "<destruct>");
        Object obj = objArr[0];
        Object obj2 = objArr[1];
        CustomLineHeightSpanOverride customLineHeightSpanOverride = INSTANCE;
        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type android.graphics.Paint.FontMetricsInt");
        Intrinsics.checkNotNull(obj2, "null cannot be cast to non-null type kotlin.Int");
        customLineHeightSpanOverride.overrideLineHeight((Paint.FontMetricsInt) obj, ((Integer) obj2).intValue());
    }

    private final void overrideLineHeight(Paint.FontMetricsInt fontMetricsInt, int i10) {
        int i11 = fontMetricsInt.bottom;
        int i12 = fontMetricsInt.top;
        if (i10 >= i11 - i12) {
            double d10 = (i10 - ((-i12) + i11)) / 2.0f;
            fontMetricsInt.top = i12 - ((int) Math.ceil(d10));
            int floor = fontMetricsInt.bottom + ((int) Math.floor(d10));
            fontMetricsInt.bottom = floor;
            fontMetricsInt.ascent = fontMetricsInt.top;
            fontMetricsInt.descent = floor;
            return;
        }
        int i13 = fontMetricsInt.descent;
        int i14 = i13 - fontMetricsInt.ascent;
        if (i14 <= 0) {
            return;
        }
        int c10 = as.a.c(i13 * ((i10 * 0.75f) / i14));
        fontMetricsInt.descent = c10;
        fontMetricsInt.ascent = c10 - i10;
    }

    public final void override() {
        CustomLineHeightSpan.Companion.setChooseHeightOverride(new Callback() { // from class: com.discord.react_fork_overrides.forks.g
            @Override // com.facebook.react.bridge.Callback
            public final void invoke(Object[] objArr) {
                CustomLineHeightSpanOverride.override$lambda$0(objArr);
            }
        });
    }
}
