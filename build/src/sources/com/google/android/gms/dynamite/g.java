package com.google.android.gms.dynamite;

import android.content.Context;
import com.google.android.gms.dynamite.DynamiteModule;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g implements DynamiteModule.b {
    @Override // com.google.android.gms.dynamite.DynamiteModule.b
    public final DynamiteModule.b.C0177b a(Context context, String str, DynamiteModule.b.a aVar) {
        DynamiteModule.b.C0177b c0177b = new DynamiteModule.b.C0177b();
        int i10 = 0;
        int a10 = aVar.a(context, str, false);
        c0177b.f13880b = a10;
        if (a10 != 0) {
            i10 = 1;
        }
        c0177b.f13881c = i10;
        return c0177b;
    }
}
