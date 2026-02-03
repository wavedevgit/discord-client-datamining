package com.google.android.gms.internal.fido;

import java.util.concurrent.Callable;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k4 extends a4 {

    /* renamed from: i  reason: collision with root package name */
    private final Callable f13645i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ l4 f13646o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k4(l4 l4Var, Callable callable) {
        this.f13646o = l4Var;
        callable.getClass();
        this.f13645i = callable;
    }

    @Override // com.google.android.gms.internal.fido.a4
    final Object a() {
        return this.f13645i.call();
    }

    @Override // com.google.android.gms.internal.fido.a4
    final String b() {
        return this.f13645i.toString();
    }

    @Override // com.google.android.gms.internal.fido.a4
    final void c(Throwable th2) {
        this.f13646o.l(th2);
    }

    @Override // com.google.android.gms.internal.fido.a4
    final void d(Object obj) {
        this.f13646o.k(obj);
    }

    @Override // com.google.android.gms.internal.fido.a4
    final boolean f() {
        return this.f13646o.isDone();
    }
}
