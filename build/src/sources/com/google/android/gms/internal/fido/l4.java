package com.google.android.gms.internal.fido;

import java.util.concurrent.Callable;
import java.util.concurrent.Executors;
import java.util.concurrent.RunnableFuture;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class l4 extends r3 implements RunnableFuture {

    /* renamed from: s  reason: collision with root package name */
    private volatile a4 f13662s;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l4(Callable callable) {
        this.f13662s = new k4(this, callable);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static l4 t(Runnable runnable, Object obj) {
        return new l4(Executors.callable(runnable, obj));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.google.android.gms.internal.fido.l3
    public final String f() {
        a4 a4Var = this.f13662s;
        if (a4Var != null) {
            String obj = a4Var.toString();
            return "task=[" + obj + "]";
        }
        return super.f();
    }

    @Override // com.google.android.gms.internal.fido.l3
    protected final void j() {
        a4 a4Var;
        if (m() && (a4Var = this.f13662s) != null) {
            a4Var.e();
        }
        this.f13662s = null;
    }

    @Override // java.util.concurrent.RunnableFuture, java.lang.Runnable
    public final void run() {
        a4 a4Var = this.f13662s;
        if (a4Var != null) {
            a4Var.run();
        }
        this.f13662s = null;
    }
}
