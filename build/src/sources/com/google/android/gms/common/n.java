package com.google.android.gms.common;

import android.app.AlertDialog;
import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.os.Bundle;
import androidx.fragment.app.DialogFragment;
import androidx.fragment.app.FragmentManager;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class n extends DialogFragment {

    /* renamed from: d  reason: collision with root package name */
    private Dialog f14506d;

    /* renamed from: e  reason: collision with root package name */
    private DialogInterface.OnCancelListener f14507e;

    /* renamed from: i  reason: collision with root package name */
    private Dialog f14508i;

    public static n z(Dialog dialog, DialogInterface.OnCancelListener onCancelListener) {
        n nVar = new n();
        Dialog dialog2 = (Dialog) hf.q.m(dialog, "Cannot display null dialog");
        dialog2.setOnCancelListener(null);
        dialog2.setOnDismissListener(null);
        nVar.f14506d = dialog2;
        if (onCancelListener != null) {
            nVar.f14507e = onCancelListener;
        }
        return nVar;
    }

    @Override // androidx.fragment.app.DialogFragment, android.content.DialogInterface.OnCancelListener
    public void onCancel(DialogInterface dialogInterface) {
        DialogInterface.OnCancelListener onCancelListener = this.f14507e;
        if (onCancelListener != null) {
            onCancelListener.onCancel(dialogInterface);
        }
    }

    @Override // androidx.fragment.app.DialogFragment
    public Dialog onCreateDialog(Bundle bundle) {
        Dialog dialog = this.f14506d;
        if (dialog == null) {
            setShowsDialog(false);
            if (this.f14508i == null) {
                this.f14508i = new AlertDialog.Builder((Context) hf.q.l(getContext())).create();
            }
            return this.f14508i;
        }
        return dialog;
    }

    @Override // androidx.fragment.app.DialogFragment
    public void show(FragmentManager fragmentManager, String str) {
        super.show(fragmentManager, str);
    }
}
