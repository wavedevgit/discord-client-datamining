package vr;

import android.text.TextPaint;
import android.text.style.URLSpan;
import android.view.View;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g extends URLSpan {

    /* renamed from: d  reason: collision with root package name */
    private final tr.c f51797d;

    /* renamed from: e  reason: collision with root package name */
    private final String f51798e;

    /* renamed from: i  reason: collision with root package name */
    private final sr.c f51799i;

    public g(tr.c cVar, String str, sr.c cVar2) {
        super(str);
        this.f51797d = cVar;
        this.f51798e = str;
        this.f51799i = cVar2;
    }

    @Override // android.text.style.URLSpan, android.text.style.ClickableSpan
    public void onClick(View view) {
        this.f51799i.a(view, this.f51798e);
    }

    @Override // android.text.style.ClickableSpan, android.text.style.CharacterStyle
    public void updateDrawState(TextPaint textPaint) {
        this.f51797d.f(textPaint);
    }
}
