package com.google.android.gms.dynamite;

import android.content.Context;
import com.google.android.gms.dynamite.DynamiteModule;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i implements DynamiteModule.b {
    @Override // com.google.android.gms.dynamite.DynamiteModule.b
    public final DynamiteModule.b.C0196b a(Context context, String str, DynamiteModule.b.a aVar) {
        int a10;
        DynamiteModule.b.C0196b c0196b = new DynamiteModule.b.C0196b();
        int b10 = aVar.b(context, str);
        c0196b.f13982a = b10;
        int i10 = 1;
        int i11 = 0;
        if (b10 != 0) {
            a10 = aVar.a(context, str, false);
            c0196b.f13983b = a10;
        } else {
            a10 = aVar.a(context, str, true);
            c0196b.f13983b = a10;
        }
        int i12 = c0196b.f13982a;
        if (i12 == 0) {
            if (a10 == 0) {
                i10 = 0;
                c0196b.f13984c = i10;
                return c0196b;
            }
        } else {
            i11 = i12;
        }
        if (i11 >= a10) {
            i10 = -1;
        }
        c0196b.f13984c = i10;
        return c0196b;
    }
}
