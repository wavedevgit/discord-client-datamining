package androidx.appcompat.widget;

import android.content.res.TypedArray;
import android.text.InputFilter;
import android.text.method.TransformationMethod;
import android.util.AttributeSet;
import android.widget.TextView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class AppCompatEmojiTextHelper {

    /* renamed from: a  reason: collision with root package name */
    private final TextView f1555a;

    /* renamed from: b  reason: collision with root package name */
    private final d3.f f1556b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public AppCompatEmojiTextHelper(TextView textView) {
        this.f1555a = textView;
        this.f1556b = new d3.f(textView, false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public InputFilter[] a(InputFilter[] inputFilterArr) {
        return this.f1556b.a(inputFilterArr);
    }

    public boolean b() {
        return this.f1556b.b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(AttributeSet attributeSet, int i10) {
        TypedArray obtainStyledAttributes = this.f1555a.getContext().obtainStyledAttributes(attributeSet, f.j.f22066g0, i10, 0);
        try {
            boolean z10 = true;
            if (obtainStyledAttributes.hasValue(f.j.f22136u0)) {
                z10 = obtainStyledAttributes.getBoolean(f.j.f22136u0, true);
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
        this.f1556b.c(z10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(boolean z10) {
        this.f1556b.d(z10);
    }

    public TransformationMethod f(TransformationMethod transformationMethod) {
        return this.f1556b.e(transformationMethod);
    }
}
