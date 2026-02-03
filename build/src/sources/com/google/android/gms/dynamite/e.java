package com.google.android.gms.dynamite;

import android.content.Context;
import com.google.android.gms.dynamite.DynamiteModule;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e implements DynamiteModule.b {
    @Override // com.google.android.gms.dynamite.DynamiteModule.b
    public final DynamiteModule.b.C0161b a(Context context, String str, DynamiteModule.b.a aVar) {
        DynamiteModule.b.C0161b c0161b = new DynamiteModule.b.C0161b();
        int b10 = aVar.b(context, str);
        c0161b.f13485a = b10;
        if (b10 != 0) {
            c0161b.f13487c = -1;
            return c0161b;
        }
        int a10 = aVar.a(context, str, true);
        c0161b.f13486b = a10;
        if (a10 != 0) {
            c0161b.f13487c = 1;
        }
        return c0161b;
    }
}
