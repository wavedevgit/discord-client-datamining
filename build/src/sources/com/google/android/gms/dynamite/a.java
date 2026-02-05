package com.google.android.gms.dynamite;

import android.content.Context;
import com.google.android.gms.dynamite.DynamiteModule;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a implements DynamiteModule.b {
    @Override // com.google.android.gms.dynamite.DynamiteModule.b
    public final DynamiteModule.b.C0177b a(Context context, String str, DynamiteModule.b.a aVar) {
        int i10;
        DynamiteModule.b.C0177b c0177b = new DynamiteModule.b.C0177b();
        int b10 = aVar.b(context, str);
        c0177b.f13879a = b10;
        if (b10 != 0) {
            i10 = -1;
        } else {
            i10 = 0;
        }
        c0177b.f13881c = i10;
        return c0177b;
    }
}
