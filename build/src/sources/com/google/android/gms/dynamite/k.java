package com.google.android.gms.dynamite;

import android.content.Context;
import com.google.android.gms.dynamite.DynamiteModule;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k implements DynamiteModule.b {
    @Override // com.google.android.gms.dynamite.DynamiteModule.b
    public final DynamiteModule.b.C0169b a(Context context, String str, DynamiteModule.b.a aVar) {
        int a10;
        DynamiteModule.b.C0169b c0169b = new DynamiteModule.b.C0169b();
        int b10 = aVar.b(context, str);
        c0169b.f13842a = b10;
        int i10 = 1;
        int i11 = 0;
        if (b10 != 0) {
            a10 = aVar.a(context, str, false);
            c0169b.f13843b = a10;
        } else {
            a10 = aVar.a(context, str, true);
            c0169b.f13843b = a10;
        }
        int i12 = c0169b.f13842a;
        if (i12 == 0) {
            if (a10 == 0) {
                i10 = 0;
                c0169b.f13844c = i10;
                return c0169b;
            }
        } else {
            i11 = i12;
        }
        if (a10 < i11) {
            i10 = -1;
        }
        c0169b.f13844c = i10;
        return c0169b;
    }
}
