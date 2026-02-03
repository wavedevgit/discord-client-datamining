package d3;

import android.text.Editable;
import android.text.Selection;
import android.text.Spannable;
import android.text.TextWatcher;
import android.widget.EditText;
import androidx.emoji2.text.e;
import java.lang.ref.Reference;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class g implements TextWatcher {

    /* renamed from: d  reason: collision with root package name */
    private final EditText f21237d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f21238e;

    /* renamed from: i  reason: collision with root package name */
    private e.f f21239i;

    /* renamed from: o  reason: collision with root package name */
    private int f21240o = Integer.MAX_VALUE;

    /* renamed from: p  reason: collision with root package name */
    private int f21241p = 0;

    /* renamed from: q  reason: collision with root package name */
    private boolean f21242q = true;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends e.f {

        /* renamed from: a  reason: collision with root package name */
        private final Reference f21243a;

        a(EditText editText) {
            this.f21243a = new WeakReference(editText);
        }

        @Override // androidx.emoji2.text.e.f
        public void b() {
            super.b();
            g.c((EditText) this.f21243a.get(), 1);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(EditText editText, boolean z10) {
        this.f21237d = editText;
        this.f21238e = z10;
    }

    private e.f a() {
        if (this.f21239i == null) {
            this.f21239i = new a(this.f21237d);
        }
        return this.f21239i;
    }

    static void c(EditText editText, int i10) {
        if (i10 == 1 && editText != null && editText.isAttachedToWindow()) {
            Editable editableText = editText.getEditableText();
            int selectionStart = Selection.getSelectionStart(editableText);
            int selectionEnd = Selection.getSelectionEnd(editableText);
            androidx.emoji2.text.e.c().p(editableText);
            d.b(editableText, selectionStart, selectionEnd);
        }
    }

    private boolean e() {
        if (this.f21242q) {
            if (this.f21238e || androidx.emoji2.text.e.i()) {
                return false;
            }
            return true;
        }
        return true;
    }

    public boolean b() {
        return this.f21242q;
    }

    public void d(boolean z10) {
        if (this.f21242q != z10) {
            if (this.f21239i != null) {
                androidx.emoji2.text.e.c().u(this.f21239i);
            }
            this.f21242q = z10;
            if (z10) {
                c(this.f21237d, androidx.emoji2.text.e.c().e());
            }
        }
    }

    @Override // android.text.TextWatcher
    public void onTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        if (!this.f21237d.isInEditMode() && !e() && i11 <= i12 && (charSequence instanceof Spannable)) {
            int e10 = androidx.emoji2.text.e.c().e();
            if (e10 != 0) {
                if (e10 != 1) {
                    if (e10 != 3) {
                        return;
                    }
                } else {
                    androidx.emoji2.text.e.c().s((Spannable) charSequence, i10, i10 + i12, this.f21240o, this.f21241p);
                    return;
                }
            }
            androidx.emoji2.text.e.c().t(a());
        }
    }

    @Override // android.text.TextWatcher
    public void afterTextChanged(Editable editable) {
    }

    @Override // android.text.TextWatcher
    public void beforeTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
    }
}
