package com.google.android.gms.internal.fido;

import java.util.concurrent.Callable;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k4 extends a4 {

    /* renamed from: i  reason: collision with root package name */
    private final Callable f14719i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ l4 f14720o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k4(l4 l4Var, Callable callable) {
        this.f14720o = l4Var;
        callable.getClass();
        this.f14719i = callable;
    }

    @Override // com.google.android.gms.internal.fido.a4
    final Object a() {
        return this.f14719i.call();
    }

    @Override // com.google.android.gms.internal.fido.a4
    final String b() {
        return this.f14719i.toString();
    }

    @Override // com.google.android.gms.internal.fido.a4
    final void c(Throwable th2) {
        this.f14720o.l(th2);
    }

    @Override // com.google.android.gms.internal.fido.a4
    final void d(Object obj) {
        this.f14720o.k(obj);
    }

    @Override // com.google.android.gms.internal.fido.a4
    final boolean f() {
        return this.f14720o.isDone();
    }
}
