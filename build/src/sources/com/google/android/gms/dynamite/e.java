package com.google.android.gms.dynamite;

import android.content.Context;
import com.google.android.gms.dynamite.DynamiteModule;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e implements DynamiteModule.b {
    @Override // com.google.android.gms.dynamite.DynamiteModule.b
    public final DynamiteModule.b.C0173b a(Context context, String str, DynamiteModule.b.a aVar) {
        DynamiteModule.b.C0173b c0173b = new DynamiteModule.b.C0173b();
        int a10 = aVar.a(context, str, true);
        c0173b.f14561b = a10;
        if (a10 != 0) {
            c0173b.f14562c = 1;
            return c0173b;
        }
        int b10 = aVar.b(context, str);
        c0173b.f14560a = b10;
        if (b10 != 0) {
            c0173b.f14562c = -1;
        }
        return c0173b;
    }
}
