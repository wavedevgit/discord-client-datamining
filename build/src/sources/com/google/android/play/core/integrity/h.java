package com.google.android.play.core.integrity;

import android.os.Parcelable;
import android.os.RemoteException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h extends ni.u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ byte[] f17044e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ Long f17045i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ Parcelable f17046o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ zg.k f17047p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ IntegrityTokenRequest f17048q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ k f17049r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(k kVar, zg.k kVar2, byte[] bArr, Long l10, Parcelable parcelable, zg.k kVar3, IntegrityTokenRequest integrityTokenRequest) {
        super(kVar2);
        this.f17044e = bArr;
        this.f17045i = l10;
        this.f17046o = parcelable;
        this.f17047p = kVar3;
        this.f17048q = integrityTokenRequest;
        this.f17049r = kVar;
    }

    @Override // ni.u0
    public final void a(Exception exc) {
        if (exc instanceof ni.g) {
            super.a(new a(-9, exc));
        } else {
            super.a(exc);
        }
    }

    @Override // ni.u0
    protected final void b() {
        ni.t0 t0Var;
        try {
            ((ni.q0) this.f17049r.f17073f.e()).w0(k.a(this.f17049r, this.f17044e, this.f17045i, this.f17046o), new j(this.f17049r, this.f17047p));
        } catch (RemoteException e10) {
            k kVar = this.f17049r;
            IntegrityTokenRequest integrityTokenRequest = this.f17048q;
            t0Var = kVar.f17068a;
            t0Var.b(e10, "requestIntegrityToken(%s)", integrityTokenRequest);
            this.f17047p.d(new a(-100, e10));
        }
    }
}
