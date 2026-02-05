package com.google.android.play.core.integrity;

import android.os.RemoteException;
import com.google.android.play.core.integrity.c;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 extends i0 {

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ c.d f16148i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ long f16149o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ long f16150p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ xg.k f16151q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ j0 f16152r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d0(j0 j0Var, xg.k kVar, int i10, c.d dVar, long j10, long j11, xg.k kVar2) {
        super(j0Var, kVar);
        this.f16148i = dVar;
        this.f16149o = j10;
        this.f16150p = j11;
        this.f16151q = kVar2;
        this.f16152r = j0Var;
    }

    @Override // ji.u0
    protected final void b() {
        ji.t0 t0Var;
        if (j0.j(this.f16152r)) {
            super.a(new b(-2, null));
        } else if (j0.i(this.f16152r, 0)) {
            super.a(new b(-14, null));
        } else {
            try {
                j0 j0Var = this.f16152r;
                ((ji.l0) j0Var.f16197f.e()).F(j0.a(j0Var, this.f16148i, this.f16149o, this.f16150p, 0), new g0(this.f16152r, this.f16151q, this.f16149o));
            } catch (RemoteException e10) {
                j0 j0Var2 = this.f16152r;
                c.d dVar = this.f16148i;
                t0Var = j0Var2.f16192a;
                t0Var.b(e10, "requestExpressIntegrityToken(%s, %s, %s)", dVar.b(), this.f16148i.c(), Long.valueOf(this.f16149o));
                this.f16151q.d(new b(-100, e10));
            }
        }
    }
}
