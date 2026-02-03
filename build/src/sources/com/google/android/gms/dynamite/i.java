package com.google.android.gms.dynamite;

import android.content.Context;
import com.google.android.gms.dynamite.DynamiteModule;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i implements DynamiteModule.b {
    @Override // com.google.android.gms.dynamite.DynamiteModule.b
    public final DynamiteModule.b.C0180b a(Context context, String str, DynamiteModule.b.a aVar) {
        DynamiteModule.b.C0180b c0180b = new DynamiteModule.b.C0180b();
        c0180b.f14517a = aVar.b(context, str);
        int i10 = 1;
        int a10 = aVar.a(context, str, true);
        c0180b.f14518b = a10;
        int i11 = c0180b.f14517a;
        if (i11 == 0) {
            i11 = 0;
            if (a10 == 0) {
                i10 = 0;
                c0180b.f14519c = i10;
                return c0180b;
            }
        }
        if (a10 < i11) {
            i10 = -1;
        }
        c0180b.f14519c = i10;
        return c0180b;
    }
}
