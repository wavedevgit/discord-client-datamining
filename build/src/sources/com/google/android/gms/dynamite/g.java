package com.google.android.gms.dynamite;

import android.content.Context;
import com.google.android.gms.dynamite.DynamiteModule;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g implements DynamiteModule.b {
    @Override // com.google.android.gms.dynamite.DynamiteModule.b
    public final DynamiteModule.b.C0169b a(Context context, String str, DynamiteModule.b.a aVar) {
        DynamiteModule.b.C0169b c0169b = new DynamiteModule.b.C0169b();
        int i10 = 0;
        int a10 = aVar.a(context, str, false);
        c0169b.f13843b = a10;
        if (a10 != 0) {
            i10 = 1;
        }
        c0169b.f13844c = i10;
        return c0169b;
    }
}
