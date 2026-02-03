package d3;

import android.text.method.KeyListener;
import android.text.method.NumberKeyListener;
import android.view.inputmethod.EditorInfo;
import android.view.inputmethod.InputConnection;
import android.widget.EditText;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final b f20075a;

    /* renamed from: b  reason: collision with root package name */
    private int f20076b = Integer.MAX_VALUE;

    /* renamed from: c  reason: collision with root package name */
    private int f20077c = 0;

    /* renamed from: d3.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class C0268a extends b {

        /* renamed from: a  reason: collision with root package name */
        private final EditText f20078a;

        /* renamed from: b  reason: collision with root package name */
        private final g f20079b;

        C0268a(EditText editText, boolean z10) {
            this.f20078a = editText;
            g gVar = new g(editText, z10);
            this.f20079b = gVar;
            editText.addTextChangedListener(gVar);
            editText.setEditableFactory(d3.b.getInstance());
        }

        @Override // d3.a.b
        KeyListener a(KeyListener keyListener) {
            if (keyListener instanceof e) {
                return keyListener;
            }
            if (keyListener == null) {
                return null;
            }
            if (keyListener instanceof NumberKeyListener) {
                return keyListener;
            }
            return new e(keyListener);
        }

        @Override // d3.a.b
        boolean b() {
            return this.f20079b.b();
        }

        @Override // d3.a.b
        InputConnection c(InputConnection inputConnection, EditorInfo editorInfo) {
            if (inputConnection instanceof c) {
                return inputConnection;
            }
            return new c(this.f20078a, inputConnection, editorInfo);
        }

        @Override // d3.a.b
        void d(boolean z10) {
            this.f20079b.d(z10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class b {
        b() {
        }

        abstract KeyListener a(KeyListener keyListener);

        abstract boolean b();

        abstract InputConnection c(InputConnection inputConnection, EditorInfo editorInfo);

        abstract void d(boolean z10);
    }

    public a(EditText editText, boolean z10) {
        b2.e.h(editText, "editText cannot be null");
        this.f20075a = new C0268a(editText, z10);
    }

    public KeyListener a(KeyListener keyListener) {
        return this.f20075a.a(keyListener);
    }

    public boolean b() {
        return this.f20075a.b();
    }

    public InputConnection c(InputConnection inputConnection, EditorInfo editorInfo) {
        if (inputConnection == null) {
            return null;
        }
        return this.f20075a.c(inputConnection, editorInfo);
    }

    public void d(boolean z10) {
        this.f20075a.d(z10);
    }
}
