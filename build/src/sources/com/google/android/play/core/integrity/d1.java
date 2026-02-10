package com.google.android.play.core.integrity;

import android.content.Context;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d1 {

    /* renamed from: a  reason: collision with root package name */
    private final ni.d0 f17022a;

    /* renamed from: b  reason: collision with root package name */
    private final ni.d0 f17023b;

    /* renamed from: c  reason: collision with root package name */
    private final ni.d0 f17024c;

    /* renamed from: d  reason: collision with root package name */
    private final ni.d0 f17025d;

    /* renamed from: e  reason: collision with root package name */
    private final ni.d0 f17026e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ d1(Context context, di.i iVar) {
        di.a aVar;
        z0 z0Var;
        z0 z0Var2;
        ni.z b10 = ni.a0.b(context);
        this.f17022a = b10;
        aVar = g.f17039a;
        ni.d0 b11 = ni.y.b(aVar);
        this.f17023b = b11;
        z0Var = y0.f17113a;
        s sVar = new s(b10, z0Var);
        this.f17024c = sVar;
        z0Var2 = y0.f17113a;
        ni.d0 b12 = ni.y.b(new m(b10, b11, sVar, z0Var2));
        this.f17025d = b12;
        this.f17026e = ni.y.b(new f(b12));
    }

    public final IntegrityManager a() {
        return (IntegrityManager) this.f17026e.a();
    }
}
