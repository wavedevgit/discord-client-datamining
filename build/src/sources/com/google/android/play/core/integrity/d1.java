package com.google.android.play.core.integrity;

import android.content.Context;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d1 {

    /* renamed from: a  reason: collision with root package name */
    private final gi.d0 f16791a;

    /* renamed from: b  reason: collision with root package name */
    private final gi.d0 f16792b;

    /* renamed from: c  reason: collision with root package name */
    private final gi.d0 f16793c;

    /* renamed from: d  reason: collision with root package name */
    private final gi.d0 f16794d;

    /* renamed from: e  reason: collision with root package name */
    private final gi.d0 f16795e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ d1(Context context, wh.i iVar) {
        wh.a aVar;
        z0 z0Var;
        z0 z0Var2;
        gi.z b10 = gi.a0.b(context);
        this.f16791a = b10;
        aVar = g.f16808a;
        gi.d0 b11 = gi.y.b(aVar);
        this.f16792b = b11;
        z0Var = y0.f16882a;
        s sVar = new s(b10, z0Var);
        this.f16793c = sVar;
        z0Var2 = y0.f16882a;
        gi.d0 b12 = gi.y.b(new m(b10, b11, sVar, z0Var2));
        this.f16794d = b12;
        this.f16795e = gi.y.b(new f(b12));
    }

    public final IntegrityManager a() {
        return (IntegrityManager) this.f16795e.a();
    }
}
