package gr;

import android.text.TextPaint;
import android.text.style.URLSpan;
import android.view.View;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g extends URLSpan {

    /* renamed from: d  reason: collision with root package name */
    private final er.c f26540d;

    /* renamed from: e  reason: collision with root package name */
    private final String f26541e;

    /* renamed from: i  reason: collision with root package name */
    private final dr.c f26542i;

    public g(er.c cVar, String str, dr.c cVar2) {
        super(str);
        this.f26540d = cVar;
        this.f26541e = str;
        this.f26542i = cVar2;
    }

    @Override // android.text.style.URLSpan, android.text.style.ClickableSpan
    public void onClick(View view) {
        this.f26542i.a(view, this.f26541e);
    }

    @Override // android.text.style.ClickableSpan, android.text.style.CharacterStyle
    public void updateDrawState(TextPaint textPaint) {
        this.f26540d.f(textPaint);
    }
}
