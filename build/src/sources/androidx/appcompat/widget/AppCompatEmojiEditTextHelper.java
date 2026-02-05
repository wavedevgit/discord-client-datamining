package androidx.appcompat.widget;

import android.content.res.TypedArray;
import android.text.method.KeyListener;
import android.text.method.NumberKeyListener;
import android.util.AttributeSet;
import android.view.inputmethod.EditorInfo;
import android.view.inputmethod.InputConnection;
import android.widget.EditText;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class AppCompatEmojiEditTextHelper {

    /* renamed from: a  reason: collision with root package name */
    private final EditText f1553a;

    /* renamed from: b  reason: collision with root package name */
    private final d3.a f1554b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public AppCompatEmojiEditTextHelper(EditText editText) {
        this.f1553a = editText;
        this.f1554b = new d3.a(editText, false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public KeyListener a(KeyListener keyListener) {
        if (b(keyListener)) {
            return this.f1554b.a(keyListener);
        }
        return keyListener;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean b(KeyListener keyListener) {
        return !(keyListener instanceof NumberKeyListener);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean c() {
        return this.f1554b.b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(AttributeSet attributeSet, int i10) {
        TypedArray obtainStyledAttributes = this.f1553a.getContext().obtainStyledAttributes(attributeSet, f.j.f22066g0, i10, 0);
        try {
            boolean z10 = true;
            if (obtainStyledAttributes.hasValue(f.j.f22136u0)) {
                z10 = obtainStyledAttributes.getBoolean(f.j.f22136u0, true);
            }
            obtainStyledAttributes.recycle();
            f(z10);
        } catch (Throwable th2) {
            obtainStyledAttributes.recycle();
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public InputConnection e(InputConnection inputConnection, EditorInfo editorInfo) {
        return this.f1554b.c(inputConnection, editorInfo);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(boolean z10) {
        this.f1554b.d(z10);
    }
}
