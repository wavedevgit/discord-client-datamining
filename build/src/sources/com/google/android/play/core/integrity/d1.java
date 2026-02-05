package com.google.android.play.core.integrity;

import android.content.Context;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d1 {

    /* renamed from: a  reason: collision with root package name */
    private final ji.d0 f16153a;

    /* renamed from: b  reason: collision with root package name */
    private final ji.d0 f16154b;

    /* renamed from: c  reason: collision with root package name */
    private final ji.d0 f16155c;

    /* renamed from: d  reason: collision with root package name */
    private final ji.d0 f16156d;

    /* renamed from: e  reason: collision with root package name */
    private final ji.d0 f16157e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ d1(Context context, zh.i iVar) {
        zh.a aVar;
        z0 z0Var;
        z0 z0Var2;
        ji.z b10 = ji.a0.b(context);
        this.f16153a = b10;
        aVar = g.f16170a;
        ji.d0 b11 = ji.y.b(aVar);
        this.f16154b = b11;
        z0Var = y0.f16244a;
        s sVar = new s(b10, z0Var);
        this.f16155c = sVar;
        z0Var2 = y0.f16244a;
        ji.d0 b12 = ji.y.b(new m(b10, b11, sVar, z0Var2));
        this.f16156d = b12;
        this.f16157e = ji.y.b(new f(b12));
    }

    public final IntegrityManager a() {
        return (IntegrityManager) this.f16157e.a();
    }
}
