package com.facebook.soloader;

import android.content.Context;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b0 extends c0 {
    public b0(String str, String str2) {
        super(str, str2);
    }

    public static b0 b(String str, Context context, e0[] e0VarArr) {
        StringBuilder sb2 = new StringBuilder("couldn't find DSO to load: ");
        sb2.append(str);
        sb2.append("\n\texisting SO sources: ");
        for (int i10 = 0; i10 < e0VarArr.length; i10++) {
            sb2.append("\n\t\tSoSource ");
            sb2.append(i10);
            sb2.append(": ");
            sb2.append(e0VarArr[i10].toString());
        }
        if (context != null) {
            sb2.append("\n\tNative lib dir: ");
            sb2.append(context.getApplicationInfo().nativeLibraryDir);
            sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
        }
        return new b0(str, sb2.toString());
    }
}
