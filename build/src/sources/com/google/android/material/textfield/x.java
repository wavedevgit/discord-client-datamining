package com.google.android.material.textfield;

import android.text.method.PasswordTransformationMethod;
import android.view.View;
import android.widget.EditText;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class x extends s {

    /* renamed from: e  reason: collision with root package name */
    private int f15169e;

    /* renamed from: f  reason: collision with root package name */
    private EditText f15170f;

    /* renamed from: g  reason: collision with root package name */
    private final View.OnClickListener f15171g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public x(r rVar, int i10) {
        super(rVar);
        this.f15169e = yg.e.f54159a;
        this.f15171g = new View.OnClickListener() { // from class: com.google.android.material.textfield.w
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                x.v(x.this, view);
            }
        };
        if (i10 != 0) {
            this.f15169e = i10;
        }
    }

    public static /* synthetic */ void v(x xVar, View view) {
        EditText editText = xVar.f15170f;
        if (editText == null) {
            return;
        }
        int selectionEnd = editText.getSelectionEnd();
        if (xVar.w()) {
            xVar.f15170f.setTransformationMethod(null);
        } else {
            xVar.f15170f.setTransformationMethod(PasswordTransformationMethod.getInstance());
        }
        if (selectionEnd >= 0) {
            xVar.f15170f.setSelection(selectionEnd);
        }
        xVar.r();
    }

    private boolean w() {
        EditText editText = this.f15170f;
        if (editText != null && (editText.getTransformationMethod() instanceof PasswordTransformationMethod)) {
            return true;
        }
        return false;
    }

    private static boolean x(EditText editText) {
        if (editText != null) {
            if (editText.getInputType() == 16 || editText.getInputType() == 128 || editText.getInputType() == 144 || editText.getInputType() == 224) {
                return true;
            }
            return false;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public void b(CharSequence charSequence, int i10, int i11, int i12) {
        r();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public int c() {
        return yg.i.f54245v;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public int d() {
        return this.f15169e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public View.OnClickListener f() {
        return this.f15171g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public boolean l() {
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public boolean m() {
        return !w();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public void n(EditText editText) {
        this.f15170f = editText;
        r();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public void s() {
        if (x(this.f15170f)) {
            this.f15170f.setTransformationMethod(PasswordTransformationMethod.getInstance());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.textfield.s
    public void u() {
        EditText editText = this.f15170f;
        if (editText != null) {
            editText.setTransformationMethod(PasswordTransformationMethod.getInstance());
        }
    }
}
