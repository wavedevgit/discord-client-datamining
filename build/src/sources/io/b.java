package io;

import android.content.Context;
import bo.c4;
import nn.f0;
import uq.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final h f28272a;

    /* renamed from: b  reason: collision with root package name */
    private final h f28273b;

    public b(h hVar, h hVar2) {
        this.f28272a = hVar;
        this.f28273b = hVar2;
    }

    public static b a(h hVar, h hVar2) {
        return new b(hVar, hVar2);
    }

    public static a c(Context context, f0 f0Var, c4.e eVar) {
        return new a(context, f0Var, eVar);
    }

    public a b(c4.e eVar) {
        return c((Context) this.f28272a.get(), (f0) this.f28273b.get(), eVar);
    }
}
