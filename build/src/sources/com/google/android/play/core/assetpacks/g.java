package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class g extends ai.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ List f16642e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ Map f16643i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ zg.k f16644o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ x f16645p;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g(x xVar, zg.k kVar, List list, Map map, zg.k kVar2) {
        super(kVar);
        this.f16642e = list;
        this.f16643i = map;
        this.f16644o = kVar2;
        this.f16645p = xVar;
    }

    @Override // ai.l0
    protected final void a() {
        ai.k0 k0Var;
        ai.v0 v0Var;
        String str;
        b2 b2Var;
        o3 o3Var;
        ArrayList w10 = x.w(this.f16642e);
        try {
            v0Var = this.f16645p.f16956d;
            str = this.f16645p.f16953a;
            Bundle o10 = x.o(this.f16643i);
            x xVar = this.f16645p;
            zg.k kVar = this.f16644o;
            b2Var = xVar.f16954b;
            o3Var = xVar.f16955c;
            ((ai.b0) v0Var.e()).z(str, w10, o10, new w(xVar, kVar, b2Var, o3Var));
        } catch (RemoteException e10) {
            List list = this.f16642e;
            k0Var = x.f16951g;
            k0Var.c(e10, "startDownload(%s)", list);
            this.f16644o.d(new RuntimeException(e10));
        }
    }
}
