package kp;

import android.text.Editable;
import android.text.TextWatcher;
import android.widget.TextView;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a0 {
    public static final void a(TextView textView, TextWatcher watcher) {
        Intrinsics.checkNotNullParameter(textView, "<this>");
        Intrinsics.checkNotNullParameter(watcher, "watcher");
        Object tag = textView.getTag(m.f36273l);
        if (tag != null) {
            textView.removeTextChangedListener((TextWatcher) tag);
        }
        textView.addTextChangedListener(watcher);
        textView.setTag(m.f36273l, watcher);
    }

    public static final void b(TextView textView, Function1 listener) {
        Intrinsics.checkNotNullParameter(textView, "<this>");
        Intrinsics.checkNotNullParameter(listener, "listener");
        Object tag = textView.getTag(m.f36273l);
        if (tag != null) {
            textView.removeTextChangedListener((TextWatcher) tag);
        }
        TextWatcher aVar = new a(listener);
        textView.addTextChangedListener(aVar);
        textView.setTag(m.f36273l, aVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements TextWatcher {

        /* renamed from: d  reason: collision with root package name */
        private String f36211d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function1 f36212e;

        a(Function1 function1) {
            this.f36212e = function1;
        }

        @Override // android.text.TextWatcher
        public void afterTextChanged(Editable editable) {
            String valueOf = String.valueOf(editable);
            String str = this.f36211d;
            if (str == null) {
                Intrinsics.throwUninitializedPropertyAccessException("oldText");
                str = null;
            }
            if (!Intrinsics.areEqual(valueOf, str)) {
                this.f36212e.invoke(String.valueOf(editable));
            }
        }

        @Override // android.text.TextWatcher
        public void beforeTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
            this.f36211d = String.valueOf(charSequence);
        }

        @Override // android.text.TextWatcher
        public void onTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        }
    }
}
