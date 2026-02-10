package androidx.appcompat.widget;

import android.content.res.TypedArray;
import android.text.InputFilter;
import android.text.method.TransformationMethod;
import android.util.AttributeSet;
import android.widget.TextView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class AppCompatEmojiTextHelper {

    /* renamed from: a  reason: collision with root package name */
    private final TextView f1583a;

    /* renamed from: b  reason: collision with root package name */
    private final d3.f f1584b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public AppCompatEmojiTextHelper(TextView textView) {
        this.f1583a = textView;
        this.f1584b = new d3.f(textView, false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public InputFilter[] a(InputFilter[] inputFilterArr) {
        return this.f1584b.a(inputFilterArr);
    }

    public boolean b() {
        return this.f1584b.b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(AttributeSet attributeSet, int i10) {
        TypedArray obtainStyledAttributes = this.f1583a.getContext().obtainStyledAttributes(attributeSet, f.j.f23447g0, i10, 0);
        try {
            boolean z10 = true;
            if (obtainStyledAttributes.hasValue(f.j.f23517u0)) {
                z10 = obtainStyledAttributes.getBoolean(f.j.f23517u0, true);
            }
            obtainStyledAttributes.recycle();
            e(z10);
        } catch (Throwable th2) {
            obtainStyledAttributes.recycle();
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(boolean z10) {
        this.f1584b.c(z10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(boolean z10) {
        this.f1584b.d(z10);
    }

    public TransformationMethod f(TransformationMethod transformationMethod) {
        return this.f1584b.e(transformationMethod);
    }
}
