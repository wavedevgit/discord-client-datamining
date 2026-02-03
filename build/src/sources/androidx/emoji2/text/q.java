package androidx.emoji2.text;

import android.os.Build;
import android.text.Spannable;
import android.text.SpannableString;
import androidx.core.text.PrecomputedTextCompat;
import java.util.stream.IntStream;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class q implements Spannable {

    /* renamed from: d  reason: collision with root package name */
    private boolean f4036d = false;

    /* renamed from: e  reason: collision with root package name */
    private Spannable f4037e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a {
        static IntStream a(CharSequence charSequence) {
            return charSequence.chars();
        }

        static IntStream b(CharSequence charSequence) {
            return charSequence.codePoints();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {
        b() {
        }

        boolean a(CharSequence charSequence) {
            return charSequence instanceof PrecomputedTextCompat;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c extends b {
        c() {
        }

        @Override // androidx.emoji2.text.q.b
        boolean a(CharSequence charSequence) {
            if (!a2.b.a(charSequence) && !(charSequence instanceof PrecomputedTextCompat)) {
                return false;
            }
            return true;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(Spannable spannable) {
        this.f4037e = spannable;
    }

    private void a() {
        Spannable spannable = this.f4037e;
        if (!this.f4036d && c().a(spannable)) {
            this.f4037e = new SpannableString(spannable);
        }
        this.f4036d = true;
    }

    static b c() {
        if (Build.VERSION.SDK_INT < 28) {
            return new b();
        }
        return new c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Spannable b() {
        return this.f4037e;
    }

    @Override // java.lang.CharSequence
    public char charAt(int i10) {
        return this.f4037e.charAt(i10);
    }

    @Override // java.lang.CharSequence
    public IntStream chars() {
        return a.a(this.f4037e);
    }

    @Override // java.lang.CharSequence
    public IntStream codePoints() {
        return a.b(this.f4037e);
    }

    @Override // android.text.Spanned
    public int getSpanEnd(Object obj) {
        return this.f4037e.getSpanEnd(obj);
    }

    @Override // android.text.Spanned
    public int getSpanFlags(Object obj) {
        return this.f4037e.getSpanFlags(obj);
    }

    @Override // android.text.Spanned
    public int getSpanStart(Object obj) {
        return this.f4037e.getSpanStart(obj);
    }

    @Override // android.text.Spanned
    public Object[] getSpans(int i10, int i11, Class cls) {
        return this.f4037e.getSpans(i10, i11, cls);
    }

    @Override // java.lang.CharSequence
    public int length() {
        return this.f4037e.length();
    }

    @Override // android.text.Spanned
    public int nextSpanTransition(int i10, int i11, Class cls) {
        return this.f4037e.nextSpanTransition(i10, i11, cls);
    }

    @Override // android.text.Spannable
    public void removeSpan(Object obj) {
        a();
        this.f4037e.removeSpan(obj);
    }

    @Override // android.text.Spannable
    public void setSpan(Object obj, int i10, int i11, int i12) {
        a();
        this.f4037e.setSpan(obj, i10, i11, i12);
    }

    @Override // java.lang.CharSequence
    public CharSequence subSequence(int i10, int i11) {
        return this.f4037e.subSequence(i10, i11);
    }

    @Override // java.lang.CharSequence
    public String toString() {
        return this.f4037e.toString();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(CharSequence charSequence) {
        this.f4037e = new SpannableString(charSequence);
    }
}
