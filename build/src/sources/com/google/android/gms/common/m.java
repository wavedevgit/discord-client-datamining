package com.google.android.gms.common;

import android.app.AlertDialog;
import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.os.Bundle;
import androidx.fragment.app.DialogFragment;
import androidx.fragment.app.FragmentManager;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class m extends DialogFragment {

    /* renamed from: d  reason: collision with root package name */
    private Dialog f14829d;

    /* renamed from: e  reason: collision with root package name */
    private DialogInterface.OnCancelListener f14830e;

    /* renamed from: i  reason: collision with root package name */
    private Dialog f14831i;

    public static m z(Dialog dialog, DialogInterface.OnCancelListener onCancelListener) {
        m mVar = new m();
        Dialog dialog2 = (Dialog) gf.q.m(dialog, "Cannot display null dialog");
        dialog2.setOnCancelListener(null);
        dialog2.setOnDismissListener(null);
        mVar.f14829d = dialog2;
        if (onCancelListener != null) {
            mVar.f14830e = onCancelListener;
        }
        return mVar;
    }

    @Override // androidx.fragment.app.DialogFragment, android.content.DialogInterface.OnCancelListener
    public void onCancel(DialogInterface dialogInterface) {
        DialogInterface.OnCancelListener onCancelListener = this.f14830e;
        if (onCancelListener != null) {
            onCancelListener.onCancel(dialogInterface);
        }
    }

    @Override // androidx.fragment.app.DialogFragment
    public Dialog onCreateDialog(Bundle bundle) {
        Dialog dialog = this.f14829d;
        if (dialog == null) {
            setShowsDialog(false);
            if (this.f14831i == null) {
                this.f14831i = new AlertDialog.Builder((Context) gf.q.l(getContext())).create();
            }
            return this.f14831i;
        }
        return dialog;
    }

    @Override // androidx.fragment.app.DialogFragment
    public void show(FragmentManager fragmentManager, String str) {
        super.show(fragmentManager, str);
    }
}
