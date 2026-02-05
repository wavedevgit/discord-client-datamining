package jr;

import android.text.TextPaint;
import android.text.style.URLSpan;
import android.view.View;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g extends URLSpan {

    /* renamed from: d  reason: collision with root package name */
    private final hr.c f31223d;

    /* renamed from: e  reason: collision with root package name */
    private final String f31224e;

    /* renamed from: i  reason: collision with root package name */
    private final gr.c f31225i;

    public g(hr.c cVar, String str, gr.c cVar2) {
        super(str);
        this.f31223d = cVar;
        this.f31224e = str;
        this.f31225i = cVar2;
    }

    @Override // android.text.style.URLSpan, android.text.style.ClickableSpan
    public void onClick(View view) {
        this.f31225i.a(view, this.f31224e);
    }

    @Override // android.text.style.ClickableSpan, android.text.style.CharacterStyle
    public void updateDrawState(TextPaint textPaint) {
        this.f31223d.f(textPaint);
    }
}
