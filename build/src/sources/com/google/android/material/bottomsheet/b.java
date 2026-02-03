package com.google.android.material.bottomsheet;

import android.app.Dialog;
import android.os.Bundle;
import android.view.View;
import androidx.appcompat.app.m;
import com.google.android.material.bottomsheet.BottomSheetBehavior;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b extends m {

    /* renamed from: d  reason: collision with root package name */
    private boolean f14257d;

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: com.google.android.material.bottomsheet.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class C0164b extends BottomSheetBehavior.g {
        private C0164b() {
        }

        @Override // com.google.android.material.bottomsheet.BottomSheetBehavior.g
        public void b(View view, float f10) {
        }

        @Override // com.google.android.material.bottomsheet.BottomSheetBehavior.g
        public void c(View view, int i10) {
            if (i10 == 5) {
                b.this.A();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void A() {
        if (this.f14257d) {
            super.dismissAllowingStateLoss();
        } else {
            super.dismiss();
        }
    }

    private void B(BottomSheetBehavior bottomSheetBehavior, boolean z10) {
        this.f14257d = z10;
        if (bottomSheetBehavior.w0() == 5) {
            A();
            return;
        }
        if (getDialog() instanceof com.google.android.material.bottomsheet.a) {
            ((com.google.android.material.bottomsheet.a) getDialog()).r();
        }
        bottomSheetBehavior.c0(new C0164b());
        bottomSheetBehavior.Y0(5);
    }

    private boolean C(boolean z10) {
        Dialog dialog = getDialog();
        if (dialog instanceof com.google.android.material.bottomsheet.a) {
            com.google.android.material.bottomsheet.a aVar = (com.google.android.material.bottomsheet.a) dialog;
            BottomSheetBehavior p10 = aVar.p();
            if (p10.C0() && aVar.q()) {
                B(p10, z10);
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // androidx.fragment.app.DialogFragment
    public void dismiss() {
        if (!C(false)) {
            super.dismiss();
        }
    }

    @Override // androidx.fragment.app.DialogFragment
    public void dismissAllowingStateLoss() {
        if (!C(true)) {
            super.dismissAllowingStateLoss();
        }
    }

    @Override // androidx.appcompat.app.m, androidx.fragment.app.DialogFragment
    public Dialog onCreateDialog(Bundle bundle) {
        return new com.google.android.material.bottomsheet.a(getContext(), getTheme());
    }
}
