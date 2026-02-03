package com.google.android.play.core.integrity;

import android.os.Parcelable;
import android.os.RemoteException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h extends gi.u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ byte[] f16812e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ Long f16813i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ Parcelable f16814o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ wg.k f16815p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ IntegrityTokenRequest f16816q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ k f16817r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(k kVar, wg.k kVar2, byte[] bArr, Long l10, Parcelable parcelable, wg.k kVar3, IntegrityTokenRequest integrityTokenRequest) {
        super(kVar2);
        this.f16812e = bArr;
        this.f16813i = l10;
        this.f16814o = parcelable;
        this.f16815p = kVar3;
        this.f16816q = integrityTokenRequest;
        this.f16817r = kVar;
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
            ((gi.q0) this.f16817r.f16841f.e()).l(k.a(this.f16817r, this.f16812e, this.f16813i, this.f16814o), new j(this.f16817r, this.f16815p));
        } catch (RemoteException e10) {
            k kVar = this.f16817r;
            IntegrityTokenRequest integrityTokenRequest = this.f16816q;
            t0Var = kVar.f16836a;
            t0Var.b(e10, "requestIntegrityToken(%s)", integrityTokenRequest);
            this.f16815p.d(new a(-100, e10));
        }
    }
}
