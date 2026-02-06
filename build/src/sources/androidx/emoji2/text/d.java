package androidx.emoji2.text;

import android.text.TextPaint;
import androidx.emoji2.text.e;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d implements e.InterfaceC0050e {

    /* renamed from: b  reason: collision with root package name */
    private static final ThreadLocal f4386b = new ThreadLocal();

    /* renamed from: a  reason: collision with root package name */
    private final TextPaint f4387a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d() {
        TextPaint textPaint = new TextPaint();
        this.f4387a = textPaint;
        textPaint.setTextSize(10.0f);
    }

    private static StringBuilder b() {
        ThreadLocal threadLocal = f4386b;
        if (threadLocal.get() == null) {
            threadLocal.set(new StringBuilder());
        }
        return (StringBuilder) threadLocal.get();
    }

    @Override // androidx.emoji2.text.e.InterfaceC0050e
    public boolean a(CharSequence charSequence, int i10, int i11, int i12) {
        StringBuilder b10 = b();
        b10.setLength(0);
        while (i10 < i11) {
            b10.append(charSequence.charAt(i10));
            i10++;
        }
        return r1.d.a(this.f4387a, b10.toString());
    }
}
