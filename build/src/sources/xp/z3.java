package xp;

import android.text.Editable;
import android.text.TextWatcher;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z3 implements TextWatcher {

    /* renamed from: d  reason: collision with root package name */
    private final String f53804d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f53805e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f53806i;

    public z3(String mask) {
        Intrinsics.checkNotNullParameter(mask, "mask");
        this.f53804d = mask;
    }

    @Override // android.text.TextWatcher
    public void afterTextChanged(Editable editable) {
        Intrinsics.checkNotNullParameter(editable, "editable");
        if (!this.f53805e && !this.f53806i) {
            this.f53805e = true;
            o1.f(editable, this.f53804d);
            this.f53805e = false;
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
        this.f53806i = z10;
    }

    @Override // android.text.TextWatcher
    public void onTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        Intrinsics.checkNotNullParameter(charSequence, "charSequence");
    }
}
