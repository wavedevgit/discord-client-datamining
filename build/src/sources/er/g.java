package er;

import android.text.TextPaint;
import android.text.style.URLSpan;
import android.view.View;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g extends URLSpan {

    /* renamed from: d  reason: collision with root package name */
    private final cr.c f23137d;

    /* renamed from: e  reason: collision with root package name */
    private final String f23138e;

    /* renamed from: i  reason: collision with root package name */
    private final br.c f23139i;

    public g(cr.c cVar, String str, br.c cVar2) {
        super(str);
        this.f23137d = cVar;
        this.f23138e = str;
        this.f23139i = cVar2;
    }

    @Override // android.text.style.URLSpan, android.text.style.ClickableSpan
    public void onClick(View view) {
        this.f23139i.a(view, this.f23138e);
    }

    @Override // android.text.style.ClickableSpan, android.text.style.CharacterStyle
    public void updateDrawState(TextPaint textPaint) {
        this.f23137d.f(textPaint);
    }
}
