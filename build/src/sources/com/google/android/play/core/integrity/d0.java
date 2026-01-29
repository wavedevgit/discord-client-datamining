package com.google.android.play.core.integrity;

import android.os.RemoteException;
import com.google.android.play.core.integrity.c;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 extends i0 {

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ c.d f17157i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ long f17158o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ long f17159p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ wg.k f17160q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ j0 f17161r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d0(j0 j0Var, wg.k kVar, int i10, c.d dVar, long j10, long j11, wg.k kVar2) {
        super(j0Var, kVar);
        this.f17157i = dVar;
        this.f17158o = j10;
        this.f17159p = j11;
        this.f17160q = kVar2;
        this.f17161r = j0Var;
    }

    @Override // gi.u0
    protected final void b() {
        gi.t0 t0Var;
        if (j0.j(this.f17161r)) {
            super.a(new b(-2, null));
        } else if (j0.i(this.f17161r, 0)) {
            super.a(new b(-14, null));
        } else {
            try {
                j0 j0Var = this.f17161r;
                ((gi.l0) j0Var.f17206f.e()).N0(j0.a(j0Var, this.f17157i, this.f17158o, this.f17159p, 0), new g0(this.f17161r, this.f17160q, this.f17158o));
            } catch (RemoteException e10) {
                j0 j0Var2 = this.f17161r;
                c.d dVar = this.f17157i;
                t0Var = j0Var2.f17201a;
                t0Var.b(e10, "requestExpressIntegrityToken(%s, %s, %s)", dVar.b(), this.f17157i.c(), Long.valueOf(this.f17158o));
                this.f17160q.d(new b(-100, e10));
            }
        }
    }
}
