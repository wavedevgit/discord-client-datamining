package mr;

import android.text.TextPaint;
import android.text.style.URLSpan;
import android.view.View;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g extends URLSpan {

    /* renamed from: d  reason: collision with root package name */
    private final kr.c f37437d;

    /* renamed from: e  reason: collision with root package name */
    private final String f37438e;

    /* renamed from: i  reason: collision with root package name */
    private final jr.c f37439i;

    public g(kr.c cVar, String str, jr.c cVar2) {
        super(str);
        this.f37437d = cVar;
        this.f37438e = str;
        this.f37439i = cVar2;
    }

    @Override // android.text.style.URLSpan, android.text.style.ClickableSpan
    public void onClick(View view) {
        this.f37439i.a(view, this.f37438e);
    }

    @Override // android.text.style.ClickableSpan, android.text.style.CharacterStyle
    public void updateDrawState(TextPaint textPaint) {
        this.f37437d.f(textPaint);
    }
}
