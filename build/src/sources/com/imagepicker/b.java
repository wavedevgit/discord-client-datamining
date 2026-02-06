package com.imagepicker;

import android.content.Context;
import android.net.Uri;
import android.util.Log;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b extends f {
    public b(Uri uri, Context context) {
        try {
            String k10 = new e3.a(context.getContentResolver().openInputStream(uri)).k("DateTime");
            if (k10 != null) {
                this.f17115a = a(k10, "yyyy:MM:dd HH:mm:ss");
            }
        } catch (Exception e10) {
            Log.e("RNIP", "Could not load image metadata: " + e10.getMessage());
        }
    }

    public String b() {
        return this.f17115a;
    }
}
