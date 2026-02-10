package com.google.android.play.core.integrity;

import android.content.Context;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d1 {

    /* renamed from: a  reason: collision with root package name */
    private final li.d0 f16273a;

    /* renamed from: b  reason: collision with root package name */
    private final li.d0 f16274b;

    /* renamed from: c  reason: collision with root package name */
    private final li.d0 f16275c;

    /* renamed from: d  reason: collision with root package name */
    private final li.d0 f16276d;

    /* renamed from: e  reason: collision with root package name */
    private final li.d0 f16277e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ d1(Context context, bi.i iVar) {
        bi.a aVar;
        z0 z0Var;
        z0 z0Var2;
        li.z b10 = li.a0.b(context);
        this.f16273a = b10;
        aVar = g.f16290a;
        li.d0 b11 = li.y.b(aVar);
        this.f16274b = b11;
        z0Var = y0.f16364a;
        s sVar = new s(b10, z0Var);
        this.f16275c = sVar;
        z0Var2 = y0.f16364a;
        li.d0 b12 = li.y.b(new m(b10, b11, sVar, z0Var2));
        this.f16276d = b12;
        this.f16277e = li.y.b(new f(b12));
    }

    public final IntegrityManager a() {
        return (IntegrityManager) this.f16277e.a();
    }
}
