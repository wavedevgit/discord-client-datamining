package pp;

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
        Object tag = textView.getTag(m.f46197l);
        if (tag != null) {
            textView.removeTextChangedListener((TextWatcher) tag);
        }
        textView.addTextChangedListener(watcher);
        textView.setTag(m.f46197l, watcher);
    }

    public static final void b(TextView textView, Function1 listener) {
        Intrinsics.checkNotNullParameter(textView, "<this>");
        Intrinsics.checkNotNullParameter(listener, "listener");
        Object tag = textView.getTag(m.f46197l);
        if (tag != null) {
            textView.removeTextChangedListener((TextWatcher) tag);
        }
        TextWatcher aVar = new a(listener);
        textView.addTextChangedListener(aVar);
        textView.setTag(m.f46197l, aVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements TextWatcher {

        /* renamed from: d  reason: collision with root package name */
        private String f46135d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function1 f46136e;

        a(Function1 function1) {
            this.f46136e = function1;
        }

        @Override // android.text.TextWatcher
        public void afterTextChanged(Editable editable) {
            String valueOf = String.valueOf(editable);
            String str = this.f46135d;
            if (str == null) {
                Intrinsics.throwUninitializedPropertyAccessException("oldText");
                str = null;
            }
            if (!Intrinsics.areEqual(valueOf, str)) {
                this.f46136e.invoke(String.valueOf(editable));
            }
        }

        @Override // android.text.TextWatcher
        public void beforeTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
            this.f46135d = String.valueOf(charSequence);
        }

        @Override // android.text.TextWatcher
        public void onTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        }
    }
}
