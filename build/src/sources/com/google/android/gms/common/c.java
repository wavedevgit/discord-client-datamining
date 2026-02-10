package com.google.android.gms.common;

import android.app.AlertDialog;
import android.app.Dialog;
import android.app.DialogFragment;
import android.app.FragmentManager;
import android.content.Context;
import android.content.DialogInterface;
import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c extends DialogFragment {

    /* renamed from: d  reason: collision with root package name */
    private Dialog f14473d;

    /* renamed from: e  reason: collision with root package name */
    private DialogInterface.OnCancelListener f14474e;

    /* renamed from: i  reason: collision with root package name */
    private Dialog f14475i;

    public static c a(Dialog dialog, DialogInterface.OnCancelListener onCancelListener) {
        c cVar = new c();
        Dialog dialog2 = (Dialog) hf.q.m(dialog, "Cannot display null dialog");
        dialog2.setOnCancelListener(null);
        dialog2.setOnDismissListener(null);
        cVar.f14473d = dialog2;
        if (onCancelListener != null) {
            cVar.f14474e = onCancelListener;
        }
        return cVar;
    }

    @Override // android.app.DialogFragment, android.content.DialogInterface.OnCancelListener
    public void onCancel(DialogInterface dialogInterface) {
        DialogInterface.OnCancelListener onCancelListener = this.f14474e;
        if (onCancelListener != null) {
            onCancelListener.onCancel(dialogInterface);
        }
    }

    @Override // android.app.DialogFragment
    public Dialog onCreateDialog(Bundle bundle) {
        Dialog dialog = this.f14473d;
        if (dialog == null) {
            setShowsDialog(false);
            if (this.f14475i == null) {
                this.f14475i = new AlertDialog.Builder((Context) hf.q.l(getActivity())).create();
            }
            return this.f14475i;
        }
        return dialog;
    }

    @Override // android.app.DialogFragment
    public void show(FragmentManager fragmentManager, String str) {
        super.show(fragmentManager, str);
    }
}
