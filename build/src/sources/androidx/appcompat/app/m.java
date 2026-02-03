package androidx.appcompat.app;

import android.app.Dialog;
import android.os.Bundle;
import androidx.fragment.app.DialogFragment;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class m extends DialogFragment {
    @Override // androidx.fragment.app.DialogFragment
    public Dialog onCreateDialog(Bundle bundle) {
        return new l(getContext(), getTheme());
    }

    @Override // androidx.fragment.app.DialogFragment
    public void setupDialog(Dialog dialog, int i10) {
        if (dialog instanceof l) {
            l lVar = (l) dialog;
            if (i10 != 1 && i10 != 2) {
                if (i10 != 3) {
                    return;
                }
                dialog.getWindow().addFlags(24);
            }
            lVar.i(1);
            return;
        }
        super.setupDialog(dialog, i10);
    }
}
