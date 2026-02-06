package com.google.android.play.core.integrity;

import android.os.RemoteException;
import com.google.android.play.core.integrity.c;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 extends i0 {

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ c.d f16128i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ long f16129o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ long f16130p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ yg.k f16131q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ j0 f16132r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d0(j0 j0Var, yg.k kVar, int i10, c.d dVar, long j10, long j11, yg.k kVar2) {
        super(j0Var, kVar);
        this.f16128i = dVar;
        this.f16129o = j10;
        this.f16130p = j11;
        this.f16131q = kVar2;
        this.f16132r = j0Var;
    }

    @Override // ki.u0
    protected final void b() {
        ki.t0 t0Var;
        if (j0.j(this.f16132r)) {
            super.a(new b(-2, null));
        } else if (j0.i(this.f16132r, 0)) {
            super.a(new b(-14, null));
        } else {
            try {
                j0 j0Var = this.f16132r;
                ((ki.l0) j0Var.f16177f.e()).w(j0.a(j0Var, this.f16128i, this.f16129o, this.f16130p, 0), new g0(this.f16132r, this.f16131q, this.f16129o));
            } catch (RemoteException e10) {
                j0 j0Var2 = this.f16132r;
                c.d dVar = this.f16128i;
                t0Var = j0Var2.f16172a;
                t0Var.b(e10, "requestExpressIntegrityToken(%s, %s, %s)", dVar.b(), this.f16128i.c(), Long.valueOf(this.f16129o));
                this.f16131q.d(new b(-100, e10));
            }
        }
    }
}
