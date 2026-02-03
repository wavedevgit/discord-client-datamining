package com.google.android.gms.dynamite;

import android.content.Context;
import com.google.android.gms.dynamite.DynamiteModule;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class j implements DynamiteModule.b {
    @Override // com.google.android.gms.dynamite.DynamiteModule.b
    public final DynamiteModule.b.C0161b a(Context context, String str, DynamiteModule.b.a aVar) {
        int a10;
        DynamiteModule.b.C0161b c0161b = new DynamiteModule.b.C0161b();
        int b10 = aVar.b(context, str);
        c0161b.f13485a = b10;
        int i10 = 1;
        int i11 = 0;
        if (b10 != 0) {
            a10 = aVar.a(context, str, false);
            c0161b.f13486b = a10;
        } else {
            a10 = aVar.a(context, str, true);
            c0161b.f13486b = a10;
        }
        int i12 = c0161b.f13485a;
        if (i12 == 0) {
            if (a10 == 0) {
                i10 = 0;
                c0161b.f13487c = i10;
                return c0161b;
            }
        } else {
            i11 = i12;
        }
        if (a10 < i11) {
            i10 = -1;
        }
        c0161b.f13487c = i10;
        return c0161b;
    }
}
