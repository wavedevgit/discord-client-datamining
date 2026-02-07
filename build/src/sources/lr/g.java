package lr;

import android.text.TextPaint;
import android.text.style.URLSpan;
import android.view.View;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g extends URLSpan {

    /* renamed from: d  reason: collision with root package name */
    private final jr.c f36607d;

    /* renamed from: e  reason: collision with root package name */
    private final String f36608e;

    /* renamed from: i  reason: collision with root package name */
    private final ir.c f36609i;

    public g(jr.c cVar, String str, ir.c cVar2) {
        super(str);
        this.f36607d = cVar;
        this.f36608e = str;
        this.f36609i = cVar2;
    }

    @Override // android.text.style.URLSpan, android.text.style.ClickableSpan
    public void onClick(View view) {
        this.f36609i.a(view, this.f36608e);
    }

    @Override // android.text.style.ClickableSpan, android.text.style.CharacterStyle
    public void updateDrawState(TextPaint textPaint) {
        this.f36607d.f(textPaint);
    }
}
