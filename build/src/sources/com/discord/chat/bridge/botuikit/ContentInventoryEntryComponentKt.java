package com.discord.chat.bridge.botuikit;

import android.graphics.Color;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\f\n\u0000\n\u0002\u0010\b\n\u0002\u0018\u0002\n\u0000\u001a\n\u0010\u0000\u001a\u00020\u0001*\u00020\u0002¨\u0006\u0003"}, d2 = {"toColorInt", "", "Lcom/discord/chat/bridge/botuikit/GradientColor;", "chat_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ContentInventoryEntryComponentKt {
    public static final int toColorInt(@NotNull GradientColor gradientColor) {
        Intrinsics.checkNotNullParameter(gradientColor, "<this>");
        return Color.argb((int) (gradientColor.getA() * ((float) SetSpanOperation.SPAN_MAX_PRIORITY)), gradientColor.getR(), gradientColor.getG(), gradientColor.getB());
    }
}
