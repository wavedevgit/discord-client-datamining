package mr;

import android.text.TextPaint;
import android.text.style.MetricAffectingSpan;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d extends MetricAffectingSpan {

    /* renamed from: d  reason: collision with root package name */
    private final kr.c f37432d;

    public d(kr.c cVar) {
        this.f37432d = cVar;
    }

    private void a(TextPaint textPaint) {
        this.f37432d.c(textPaint);
    }

    @Override // android.text.style.CharacterStyle
    public void updateDrawState(TextPaint textPaint) {
        a(textPaint);
        textPaint.bgColor = this.f37432d.m(textPaint);
    }

    @Override // android.text.style.MetricAffectingSpan
    public void updateMeasureState(TextPaint textPaint) {
        a(textPaint);
    }
}
