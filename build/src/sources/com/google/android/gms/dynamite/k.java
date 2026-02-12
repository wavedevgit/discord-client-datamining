package com.google.android.gms.dynamite;

import android.content.Context;
import com.google.android.gms.dynamite.DynamiteModule;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k implements DynamiteModule.b {
    @Override // com.google.android.gms.dynamite.DynamiteModule.b
    public final DynamiteModule.b.C0173b a(Context context, String str, DynamiteModule.b.a aVar) {
        int a10;
        DynamiteModule.b.C0173b c0173b = new DynamiteModule.b.C0173b();
        int b10 = aVar.b(context, str);
        c0173b.f14560a = b10;
        int i10 = 1;
        int i11 = 0;
        if (b10 != 0) {
            a10 = aVar.a(context, str, false);
            c0173b.f14561b = a10;
        } else {
            a10 = aVar.a(context, str, true);
            c0173b.f14561b = a10;
        }
        int i12 = c0173b.f14560a;
        if (i12 == 0) {
            if (a10 == 0) {
                i10 = 0;
                c0173b.f14562c = i10;
                return c0173b;
            }
        } else {
            i11 = i12;
        }
        if (a10 < i11) {
            i10 = -1;
        }
        c0173b.f14562c = i10;
        return c0173b;
    }
}
