package dr;

import android.text.TextPaint;
import android.text.style.MetricAffectingSpan;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d extends MetricAffectingSpan {

    /* renamed from: d  reason: collision with root package name */
    private final br.c f22329d;

    public d(br.c cVar) {
        this.f22329d = cVar;
    }

    private void a(TextPaint textPaint) {
        this.f22329d.c(textPaint);
    }

    @Override // android.text.style.CharacterStyle
    public void updateDrawState(TextPaint textPaint) {
        a(textPaint);
        textPaint.bgColor = this.f22329d.m(textPaint);
    }

    @Override // android.text.style.MetricAffectingSpan
    public void updateMeasureState(TextPaint textPaint) {
        a(textPaint);
    }
}
