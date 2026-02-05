package com.google.android.gms.dynamite;

import android.content.Context;
import com.google.android.gms.dynamite.DynamiteModule;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k implements DynamiteModule.b {
    @Override // com.google.android.gms.dynamite.DynamiteModule.b
    public final DynamiteModule.b.C0177b a(Context context, String str, DynamiteModule.b.a aVar) {
        int a10;
        DynamiteModule.b.C0177b c0177b = new DynamiteModule.b.C0177b();
        int b10 = aVar.b(context, str);
        c0177b.f13879a = b10;
        int i10 = 1;
        int i11 = 0;
        if (b10 != 0) {
            a10 = aVar.a(context, str, false);
            c0177b.f13880b = a10;
        } else {
            a10 = aVar.a(context, str, true);
            c0177b.f13880b = a10;
        }
        int i12 = c0177b.f13879a;
        if (i12 == 0) {
            if (a10 == 0) {
                i10 = 0;
                c0177b.f13881c = i10;
                return c0177b;
            }
        } else {
            i11 = i12;
        }
        if (a10 < i11) {
            i10 = -1;
        }
        c0177b.f13881c = i10;
        return c0177b;
    }
}
