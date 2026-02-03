package com.google.android.play.core.assetpacks;

import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class w extends o {

    /* renamed from: e  reason: collision with root package name */
    private final b2 f15678e;

    /* renamed from: f  reason: collision with root package name */
    private final o3 f15679f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public w(x xVar, wg.k kVar, b2 b2Var, o3 o3Var) {
        super(xVar, kVar);
        this.f15678e = b2Var;
        this.f15679f = o3Var;
    }

    @Override // com.google.android.play.core.assetpacks.o, th.d0
    public final void q(int i10, Bundle bundle) {
        super.q(i10, bundle);
        this.f15542c.e(d.a(bundle, this.f15678e, this.f15679f));
    }
}
