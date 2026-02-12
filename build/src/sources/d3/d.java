package d3;

import android.text.InputFilter;
import android.text.Selection;
import android.text.Spannable;
import android.text.Spanned;
import android.widget.TextView;
import androidx.emoji2.text.e;
import java.lang.ref.Reference;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class d implements InputFilter {

    /* renamed from: a  reason: collision with root package name */
    private final TextView f21437a;

    /* renamed from: b  reason: collision with root package name */
    private e.f f21438b;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends e.f {

        /* renamed from: a  reason: collision with root package name */
        private final Reference f21439a;

        /* renamed from: b  reason: collision with root package name */
        private final Reference f21440b;

        a(TextView textView, d dVar) {
            this.f21439a = new WeakReference(textView);
            this.f21440b = new WeakReference(dVar);
        }

        private boolean c(TextView textView, InputFilter inputFilter) {
            InputFilter[] filters;
            if (inputFilter == null || textView == null || (filters = textView.getFilters()) == null) {
                return false;
            }
            for (InputFilter inputFilter2 : filters) {
                if (inputFilter2 == inputFilter) {
                    return true;
                }
            }
            return false;
        }

        @Override // androidx.emoji2.text.e.f
        public void b() {
            CharSequence text;
            CharSequence p10;
            super.b();
            TextView textView = (TextView) this.f21439a.get();
            if (c(textView, (InputFilter) this.f21440b.get()) && textView.isAttachedToWindow() && text != (p10 = androidx.emoji2.text.e.c().p((text = textView.getText())))) {
                int selectionStart = Selection.getSelectionStart(p10);
                int selectionEnd = Selection.getSelectionEnd(p10);
                textView.setText(p10);
                if (p10 instanceof Spannable) {
                    d.b((Spannable) p10, selectionStart, selectionEnd);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(TextView textView) {
        this.f21437a = textView;
    }

    private e.f a() {
        if (this.f21438b == null) {
            this.f21438b = new a(this.f21437a, this);
        }
        return this.f21438b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void b(Spannable spannable, int i10, int i11) {
        if (i10 >= 0 && i11 >= 0) {
            Selection.setSelection(spannable, i10, i11);
        } else if (i10 >= 0) {
            Selection.setSelection(spannable, i10);
        } else if (i11 >= 0) {
            Selection.setSelection(spannable, i11);
        }
    }

    @Override // android.text.InputFilter
    public CharSequence filter(CharSequence charSequence, int i10, int i11, Spanned spanned, int i12, int i13) {
        if (!this.f21437a.isInEditMode()) {
            int e10 = androidx.emoji2.text.e.c().e();
            if (e10 != 0) {
                if (e10 != 1) {
                    if (e10 != 3) {
                        return charSequence;
                    }
                } else if (i13 == 0 && i12 == 0 && spanned.length() == 0 && charSequence == this.f21437a.getText()) {
                    return charSequence;
                } else {
                    if (charSequence != null) {
                        if (i10 != 0 || i11 != charSequence.length()) {
                            charSequence = charSequence.subSequence(i10, i11);
                        }
                        return androidx.emoji2.text.e.c().q(charSequence, 0, charSequence.length());
                    }
                    return charSequence;
                }
            }
            androidx.emoji2.text.e.c().t(a());
            return charSequence;
        }
        return charSequence;
    }
}
