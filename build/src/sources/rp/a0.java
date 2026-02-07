package rp;

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
        Object tag = textView.getTag(m.f49146l);
        if (tag != null) {
            textView.removeTextChangedListener((TextWatcher) tag);
        }
        textView.addTextChangedListener(watcher);
        textView.setTag(m.f49146l, watcher);
    }

    public static final void b(TextView textView, Function1 listener) {
        Intrinsics.checkNotNullParameter(textView, "<this>");
        Intrinsics.checkNotNullParameter(listener, "listener");
        Object tag = textView.getTag(m.f49146l);
        if (tag != null) {
            textView.removeTextChangedListener((TextWatcher) tag);
        }
        TextWatcher aVar = new a(listener);
        textView.addTextChangedListener(aVar);
        textView.setTag(m.f49146l, aVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements TextWatcher {

        /* renamed from: d  reason: collision with root package name */
        private String f49084d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function1 f49085e;

        a(Function1 function1) {
            this.f49085e = function1;
        }

        @Override // android.text.TextWatcher
        public void afterTextChanged(Editable editable) {
            String valueOf = String.valueOf(editable);
            String str = this.f49084d;
            if (str == null) {
                Intrinsics.throwUninitializedPropertyAccessException("oldText");
                str = null;
            }
            if (!Intrinsics.areEqual(valueOf, str)) {
                this.f49085e.invoke(String.valueOf(editable));
            }
        }

        @Override // android.text.TextWatcher
        public void beforeTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
            this.f49084d = String.valueOf(charSequence);
        }

        @Override // android.text.TextWatcher
        public void onTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        }
    }
}
