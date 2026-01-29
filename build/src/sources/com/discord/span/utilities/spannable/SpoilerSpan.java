package com.discord.span.utilities.spannable;

import android.graphics.Color;
import android.text.TextPaint;
import android.text.style.CharacterStyle;
import android.text.style.UpdateAppearance;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u00020\u00012\u00020\u0002B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0004¢\u0006\u0004\b\u0005\u0010\u0006J\u0010\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000bH\u0016R\u0011\u0010\u0003\u001a\u00020\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0003\u0010\u0007¨\u0006\f"}, d2 = {"Lcom/discord/span/utilities/spannable/SpoilerSpan;", "Landroid/text/style/CharacterStyle;", "Landroid/text/style/UpdateAppearance;", "isRevealed", "", "<init>", "(Z)V", "()Z", "updateDrawState", "", "tp", "Landroid/text/TextPaint;", "span_utilities_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class SpoilerSpan extends CharacterStyle implements UpdateAppearance {
    private final boolean isRevealed;

    public SpoilerSpan(boolean z10) {
        this.isRevealed = z10;
    }

    public final boolean isRevealed() {
        return this.isRevealed;
    }

    @Override // android.text.style.CharacterStyle
    public void updateDrawState(@NotNull TextPaint tp2) {
        Intrinsics.checkNotNullParameter(tp2, "tp");
        if (!this.isRevealed) {
            tp2.setColor(Color.argb(0, 0, 0, 0));
        }
    }
}
