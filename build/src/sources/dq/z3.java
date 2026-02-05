package dq;

import android.text.Editable;
import android.text.TextWatcher;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z3 implements TextWatcher {

    /* renamed from: d  reason: collision with root package name */
    private final String f21221d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f21222e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f21223i;

    public z3(String mask) {
        Intrinsics.checkNotNullParameter(mask, "mask");
        this.f21221d = mask;
    }

    @Override // android.text.TextWatcher
    public void afterTextChanged(Editable editable) {
        Intrinsics.checkNotNullParameter(editable, "editable");
        if (!this.f21222e && !this.f21223i) {
            this.f21222e = true;
            o1.f(editable, this.f21221d);
            this.f21222e = false;
        }
    }

    @Override // android.text.TextWatcher
    public void beforeTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        boolean z10;
        Intrinsics.checkNotNullParameter(charSequence, "charSequence");
        if (i11 > i12) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f21223i = z10;
    }

    @Override // android.text.TextWatcher
    public void onTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        Intrinsics.checkNotNullParameter(charSequence, "charSequence");
    }
}
