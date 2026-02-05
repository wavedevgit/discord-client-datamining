package lq;

import android.graphics.Typeface;
import android.text.TextPaint;
import android.text.style.MetricAffectingSpan;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class c extends MetricAffectingSpan {

    /* renamed from: d  reason: collision with root package name */
    private final Typeface f37193d;

    public c(Typeface typeface) {
        Intrinsics.checkNotNullParameter(typeface, "typeface");
        this.f37193d = typeface;
    }

    @Override // android.text.style.CharacterStyle
    public void updateDrawState(TextPaint textPaint) {
        Intrinsics.checkNotNullParameter(textPaint, "textPaint");
        textPaint.setTypeface(this.f37193d);
        textPaint.setFlags(textPaint.getFlags() | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
    }

    @Override // android.text.style.MetricAffectingSpan
    public void updateMeasureState(TextPaint paint) {
        Intrinsics.checkNotNullParameter(paint, "paint");
        paint.setTypeface(this.f37193d);
        paint.setFlags(paint.getFlags() | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
    }
}
