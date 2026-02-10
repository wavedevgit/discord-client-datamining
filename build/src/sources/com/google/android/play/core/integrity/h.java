package com.google.android.play.core.integrity;

import android.os.Parcelable;
import android.os.RemoteException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h extends li.u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ byte[] f16294e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ Long f16295i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ Parcelable f16296o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ zg.k f16297p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ IntegrityTokenRequest f16298q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ k f16299r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(k kVar, zg.k kVar2, byte[] bArr, Long l10, Parcelable parcelable, zg.k kVar3, IntegrityTokenRequest integrityTokenRequest) {
        super(kVar2);
        this.f16294e = bArr;
        this.f16295i = l10;
        this.f16296o = parcelable;
        this.f16297p = kVar3;
        this.f16298q = integrityTokenRequest;
        this.f16299r = kVar;
    }

    @Override // li.u0
    public final void a(Exception exc) {
        if (exc instanceof li.g) {
            super.a(new a(-9, exc));
        } else {
            super.a(exc);
        }
    }

    @Override // li.u0
    protected final void b() {
        li.t0 t0Var;
        try {
            ((li.q0) this.f16299r.f16323f.e()).K(k.a(this.f16299r, this.f16294e, this.f16295i, this.f16296o), new j(this.f16299r, this.f16297p));
        } catch (RemoteException e10) {
            k kVar = this.f16299r;
            IntegrityTokenRequest integrityTokenRequest = this.f16298q;
            t0Var = kVar.f16318a;
            t0Var.b(e10, "requestIntegrityToken(%s)", integrityTokenRequest);
            this.f16297p.d(new a(-100, e10));
        }
    }
}
