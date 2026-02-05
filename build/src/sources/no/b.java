package no;

import android.content.Context;
import ho.c4;
import sn.f0;
import zq.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final h f41400a;

    /* renamed from: b  reason: collision with root package name */
    private final h f41401b;

    public b(h hVar, h hVar2) {
        this.f41400a = hVar;
        this.f41401b = hVar2;
    }

    public static b a(h hVar, h hVar2) {
        return new b(hVar, hVar2);
    }

    public static a c(Context context, f0 f0Var, c4.e eVar) {
        return new a(context, f0Var, eVar);
    }

    public a b(c4.e eVar) {
        return c((Context) this.f41400a.get(), (f0) this.f41401b.get(), eVar);
    }
}
