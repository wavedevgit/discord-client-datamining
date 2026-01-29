package com.google.android.gms.internal.play_billing;

import java.util.Comparator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i0 implements Comparator {
    @Override // java.util.Comparator
    public final /* synthetic */ int compare(Object obj, Object obj2) {
        r0 r0Var = (r0) obj;
        r0 r0Var2 = (r0) obj2;
        h0 h0Var = new h0(r0Var);
        h0 h0Var2 = new h0(r0Var2);
        while (h0Var.hasNext() && h0Var2.hasNext()) {
            int compareTo = Integer.valueOf(h0Var.zza() & 255).compareTo(Integer.valueOf(h0Var2.zza() & 255));
            if (compareTo != 0) {
                return compareTo;
            }
        }
        return Integer.valueOf(r0Var.d()).compareTo(Integer.valueOf(r0Var2.d()));
    }
}
