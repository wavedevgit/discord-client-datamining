package com.google.android.play.core.integrity;

import android.os.RemoteException;
import com.google.android.play.core.integrity.c;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 extends i0 {

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ c.d f15754i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ long f15755o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ long f15756p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ wg.k f15757q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ j0 f15758r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d0(j0 j0Var, wg.k kVar, int i10, c.d dVar, long j10, long j11, wg.k kVar2) {
        super(j0Var, kVar);
        this.f15754i = dVar;
        this.f15755o = j10;
        this.f15756p = j11;
        this.f15757q = kVar2;
        this.f15758r = j0Var;
    }

    @Override // gi.u0
    protected final void b() {
        gi.t0 t0Var;
        if (j0.j(this.f15758r)) {
            super.a(new b(-2, null));
        } else if (j0.i(this.f15758r, 0)) {
            super.a(new b(-14, null));
        } else {
            try {
                j0 j0Var = this.f15758r;
                ((gi.l0) j0Var.f15803f.e()).N0(j0.a(j0Var, this.f15754i, this.f15755o, this.f15756p, 0), new g0(this.f15758r, this.f15757q, this.f15755o));
            } catch (RemoteException e10) {
                j0 j0Var2 = this.f15758r;
                c.d dVar = this.f15754i;
                t0Var = j0Var2.f15798a;
                t0Var.b(e10, "requestExpressIntegrityToken(%s, %s, %s)", dVar.b(), this.f15754i.c(), Long.valueOf(this.f15755o));
                this.f15757q.d(new b(-100, e10));
            }
        }
    }
}
