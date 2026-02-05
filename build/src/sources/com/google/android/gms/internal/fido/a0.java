package com.google.android.gms.internal.fido;

import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a0 {
    public static final Appendable a(Appendable appendable, Iterator it, c0 c0Var, String str) {
        String str2;
        if (it.hasNext()) {
            Map.Entry entry = (Map.Entry) it.next();
            appendable.append(c0.d(entry.getKey()));
            appendable.append(str);
            appendable.append(c0.d(entry.getValue()));
            while (it.hasNext()) {
                str2 = c0Var.f13969a;
                appendable.append(str2);
                Map.Entry entry2 = (Map.Entry) it.next();
                appendable.append(c0.d(entry2.getKey()));
                appendable.append(str);
                appendable.append(c0.d(entry2.getValue()));
            }
        }
        return appendable;
    }
}
