package com.google.android.play.core.integrity;

import android.content.Context;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d1 {

    /* renamed from: a  reason: collision with root package name */
    private final ki.d0 f16133a;

    /* renamed from: b  reason: collision with root package name */
    private final ki.d0 f16134b;

    /* renamed from: c  reason: collision with root package name */
    private final ki.d0 f16135c;

    /* renamed from: d  reason: collision with root package name */
    private final ki.d0 f16136d;

    /* renamed from: e  reason: collision with root package name */
    private final ki.d0 f16137e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ d1(Context context, ai.i iVar) {
        ai.a aVar;
        z0 z0Var;
        z0 z0Var2;
        ki.z b10 = ki.a0.b(context);
        this.f16133a = b10;
        aVar = g.f16150a;
        ki.d0 b11 = ki.y.b(aVar);
        this.f16134b = b11;
        z0Var = y0.f16224a;
        s sVar = new s(b10, z0Var);
        this.f16135c = sVar;
        z0Var2 = y0.f16224a;
        ki.d0 b12 = ki.y.b(new m(b10, b11, sVar, z0Var2));
        this.f16136d = b12;
        this.f16137e = ki.y.b(new f(b12));
    }

    public final IntegrityManager a() {
        return (IntegrityManager) this.f16137e.a();
    }
}
