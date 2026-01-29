package dr;

import android.text.TextPaint;
import android.text.style.URLSpan;
import android.view.View;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g extends URLSpan {

    /* renamed from: d  reason: collision with root package name */
    private final br.c f22334d;

    /* renamed from: e  reason: collision with root package name */
    private final String f22335e;

    /* renamed from: i  reason: collision with root package name */
    private final ar.c f22336i;

    public g(br.c cVar, String str, ar.c cVar2) {
        super(str);
        this.f22334d = cVar;
        this.f22335e = str;
        this.f22336i = cVar2;
    }

    @Override // android.text.style.URLSpan, android.text.style.ClickableSpan
    public void onClick(View view) {
        this.f22336i.a(view, this.f22335e);
    }

    @Override // android.text.style.ClickableSpan, android.text.style.CharacterStyle
    public void updateDrawState(TextPaint textPaint) {
        this.f22334d.f(textPaint);
    }
}
