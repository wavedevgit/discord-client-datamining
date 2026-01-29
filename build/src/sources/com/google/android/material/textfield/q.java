package com.google.android.material.textfield;

import android.widget.EditText;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class q {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean a(EditText editText) {
        if (editText.getInputType() != 0) {
            return true;
        }
        return false;
    }
}
