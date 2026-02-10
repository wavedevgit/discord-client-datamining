package com.google.android.gms.dynamite;

import android.content.Context;
import com.google.android.gms.dynamite.DynamiteModule;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g implements DynamiteModule.b {
    @Override // com.google.android.gms.dynamite.DynamiteModule.b
    public final DynamiteModule.b.C0196b a(Context context, String str, DynamiteModule.b.a aVar) {
        DynamiteModule.b.C0196b c0196b = new DynamiteModule.b.C0196b();
        int i10 = 0;
        int a10 = aVar.a(context, str, false);
        c0196b.f13983b = a10;
        if (a10 != 0) {
            i10 = 1;
        }
        c0196b.f13984c = i10;
        return c0196b;
    }
}
