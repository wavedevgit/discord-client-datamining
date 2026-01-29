package com.google.android.play.core.integrity;

import android.os.Parcelable;
import android.os.RemoteException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h extends gi.u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ byte[] f17183e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ Long f17184i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ Parcelable f17185o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ wg.k f17186p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ IntegrityTokenRequest f17187q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ k f17188r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(k kVar, wg.k kVar2, byte[] bArr, Long l10, Parcelable parcelable, wg.k kVar3, IntegrityTokenRequest integrityTokenRequest) {
        super(kVar2);
        this.f17183e = bArr;
        this.f17184i = l10;
        this.f17185o = parcelable;
        this.f17186p = kVar3;
        this.f17187q = integrityTokenRequest;
        this.f17188r = kVar;
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
            ((gi.q0) this.f17188r.f17212f.e()).l(k.a(this.f17188r, this.f17183e, this.f17184i, this.f17185o), new j(this.f17188r, this.f17186p));
        } catch (RemoteException e10) {
            k kVar = this.f17188r;
            IntegrityTokenRequest integrityTokenRequest = this.f17187q;
            t0Var = kVar.f17207a;
            t0Var.b(e10, "requestIntegrityToken(%s)", integrityTokenRequest);
            this.f17186p.d(new a(-100, e10));
        }
    }
}
