package com.google.android.play.core.integrity;

import android.os.Parcelable;
import android.os.RemoteException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h extends ki.u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ byte[] f16154e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ Long f16155i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ Parcelable f16156o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ yg.k f16157p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ IntegrityTokenRequest f16158q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ k f16159r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(k kVar, yg.k kVar2, byte[] bArr, Long l10, Parcelable parcelable, yg.k kVar3, IntegrityTokenRequest integrityTokenRequest) {
        super(kVar2);
        this.f16154e = bArr;
        this.f16155i = l10;
        this.f16156o = parcelable;
        this.f16157p = kVar3;
        this.f16158q = integrityTokenRequest;
        this.f16159r = kVar;
    }

    @Override // ki.u0
    public final void a(Exception exc) {
        if (exc instanceof ki.g) {
            super.a(new a(-9, exc));
        } else {
            super.a(exc);
        }
    }

    @Override // ki.u0
    protected final void b() {
        ki.t0 t0Var;
        try {
            ((ki.q0) this.f16159r.f16183f.e()).V0(k.a(this.f16159r, this.f16154e, this.f16155i, this.f16156o), new j(this.f16159r, this.f16157p));
        } catch (RemoteException e10) {
            k kVar = this.f16159r;
            IntegrityTokenRequest integrityTokenRequest = this.f16158q;
            t0Var = kVar.f16178a;
            t0Var.b(e10, "requestIntegrityToken(%s)", integrityTokenRequest);
            this.f16157p.d(new a(-100, e10));
        }
    }
}
