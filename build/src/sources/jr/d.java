package jr;

import android.text.TextPaint;
import android.text.style.MetricAffectingSpan;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d extends MetricAffectingSpan {

    /* renamed from: d  reason: collision with root package name */
    private final hr.c f31218d;

    public d(hr.c cVar) {
        this.f31218d = cVar;
    }

    private void a(TextPaint textPaint) {
        this.f31218d.c(textPaint);
    }

    @Override // android.text.style.CharacterStyle
    public void updateDrawState(TextPaint textPaint) {
        a(textPaint);
        textPaint.bgColor = this.f31218d.m(textPaint);
    }

    @Override // android.text.style.MetricAffectingSpan
    public void updateMeasureState(TextPaint textPaint) {
        a(textPaint);
    }
}
