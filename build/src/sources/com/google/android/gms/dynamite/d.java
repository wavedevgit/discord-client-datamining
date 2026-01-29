package com.google.android.gms.dynamite;

import android.content.Context;
import com.google.android.gms.dynamite.DynamiteModule;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d implements DynamiteModule.b {
    @Override // com.google.android.gms.dynamite.DynamiteModule.b
    public final DynamiteModule.b.C0175b a(Context context, String str, DynamiteModule.b.a aVar) {
        DynamiteModule.b.C0175b c0175b = new DynamiteModule.b.C0175b();
        int a10 = aVar.a(context, str, true);
        c0175b.f14889b = a10;
        if (a10 != 0) {
            c0175b.f14890c = 1;
            return c0175b;
        }
        int b10 = aVar.b(context, str);
        c0175b.f14888a = b10;
        if (b10 != 0) {
            c0175b.f14890c = -1;
        }
        return c0175b;
    }
}
