package com.google.android.play.core.assetpacks;

import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class w extends o {

    /* renamed from: e  reason: collision with root package name */
    private final b2 f16941e;

    /* renamed from: f  reason: collision with root package name */
    private final o3 f16942f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public w(x xVar, zg.k kVar, b2 b2Var, o3 o3Var) {
        super(xVar, kVar);
        this.f16941e = b2Var;
        this.f16942f = o3Var;
    }

    @Override // com.google.android.play.core.assetpacks.o, ai.d0
    public final void v(int i10, Bundle bundle) {
        super.v(i10, bundle);
        this.f16805c.e(d.a(bundle, this.f16941e, this.f16942f));
    }
}
