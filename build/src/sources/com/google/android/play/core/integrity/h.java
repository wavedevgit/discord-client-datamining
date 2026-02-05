package com.google.android.play.core.integrity;

import android.os.Parcelable;
import android.os.RemoteException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h extends ji.u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ byte[] f16174e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ Long f16175i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ Parcelable f16176o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ xg.k f16177p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ IntegrityTokenRequest f16178q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ k f16179r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(k kVar, xg.k kVar2, byte[] bArr, Long l10, Parcelable parcelable, xg.k kVar3, IntegrityTokenRequest integrityTokenRequest) {
        super(kVar2);
        this.f16174e = bArr;
        this.f16175i = l10;
        this.f16176o = parcelable;
        this.f16177p = kVar3;
        this.f16178q = integrityTokenRequest;
        this.f16179r = kVar;
    }

    @Override // ji.u0
    public final void a(Exception exc) {
        if (exc instanceof ji.g) {
            super.a(new a(-9, exc));
        } else {
            super.a(exc);
        }
    }

    @Override // ji.u0
    protected final void b() {
        ji.t0 t0Var;
        try {
            ((ji.q0) this.f16179r.f16203f.e()).i(k.a(this.f16179r, this.f16174e, this.f16175i, this.f16176o), new j(this.f16179r, this.f16177p));
        } catch (RemoteException e10) {
            k kVar = this.f16179r;
            IntegrityTokenRequest integrityTokenRequest = this.f16178q;
            t0Var = kVar.f16198a;
            t0Var.b(e10, "requestIntegrityToken(%s)", integrityTokenRequest);
            this.f16177p.d(new a(-100, e10));
        }
    }
}
