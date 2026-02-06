package lr;

import android.text.TextPaint;
import android.text.style.URLSpan;
import android.view.View;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g extends URLSpan {

    /* renamed from: d  reason: collision with root package name */
    private final jr.c f36559d;

    /* renamed from: e  reason: collision with root package name */
    private final String f36560e;

    /* renamed from: i  reason: collision with root package name */
    private final ir.c f36561i;

    public g(jr.c cVar, String str, ir.c cVar2) {
        super(str);
        this.f36559d = cVar;
        this.f36560e = str;
        this.f36561i = cVar2;
    }

    @Override // android.text.style.URLSpan, android.text.style.ClickableSpan
    public void onClick(View view) {
        this.f36561i.a(view, this.f36560e);
    }

    @Override // android.text.style.ClickableSpan, android.text.style.CharacterStyle
    public void updateDrawState(TextPaint textPaint) {
        this.f36559d.f(textPaint);
    }
}
