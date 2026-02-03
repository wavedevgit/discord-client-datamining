package com.google.android.play.core.integrity;

import android.os.Parcelable;
import android.os.RemoteException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h extends gi.u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ byte[] f15780e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ Long f15781i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ Parcelable f15782o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ wg.k f15783p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ IntegrityTokenRequest f15784q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ k f15785r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(k kVar, wg.k kVar2, byte[] bArr, Long l10, Parcelable parcelable, wg.k kVar3, IntegrityTokenRequest integrityTokenRequest) {
        super(kVar2);
        this.f15780e = bArr;
        this.f15781i = l10;
        this.f15782o = parcelable;
        this.f15783p = kVar3;
        this.f15784q = integrityTokenRequest;
        this.f15785r = kVar;
    }

    @Override // gi.u0
    public final void a(Exception exc) {
        if (exc instanceof gi.g) {
            super.a(new a(-9, exc));
        } else {
            super.a(exc);
        }
    }

    @Override // gi.u0
    protected final void b() {
        gi.t0 t0Var;
        try {
            ((gi.q0) this.f15785r.f15809f.e()).l(k.a(this.f15785r, this.f15780e, this.f15781i, this.f15782o), new j(this.f15785r, this.f15783p));
        } catch (RemoteException e10) {
            k kVar = this.f15785r;
            IntegrityTokenRequest integrityTokenRequest = this.f15784q;
            t0Var = kVar.f15804a;
            t0Var.b(e10, "requestIntegrityToken(%s)", integrityTokenRequest);
            this.f15783p.d(new a(-100, e10));
        }
    }
}
