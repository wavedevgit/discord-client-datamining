package com.google.android.gms.dynamite;

import android.content.Context;
import com.google.android.gms.dynamite.DynamiteModule;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i implements DynamiteModule.b {
    @Override // com.google.android.gms.dynamite.DynamiteModule.b
    public final DynamiteModule.b.C0161b a(Context context, String str, DynamiteModule.b.a aVar) {
        DynamiteModule.b.C0161b c0161b = new DynamiteModule.b.C0161b();
        c0161b.f13485a = aVar.b(context, str);
        int i10 = 1;
        int a10 = aVar.a(context, str, true);
        c0161b.f13486b = a10;
        int i11 = c0161b.f13485a;
        if (i11 == 0) {
            i11 = 0;
            if (a10 == 0) {
                i10 = 0;
                c0161b.f13487c = i10;
                return c0161b;
            }
        }
        if (a10 < i11) {
            i10 = -1;
        }
        c0161b.f13487c = i10;
        return c0161b;
    }
}
