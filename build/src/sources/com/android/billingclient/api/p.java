package com.android.billingclient.api;

import android.content.ComponentName;
import android.content.ServiceConnection;
import android.os.IBinder;
import com.google.android.gms.internal.play_billing.c6;
import com.google.android.gms.internal.play_billing.j6;
import java.util.concurrent.Callable;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class p implements ServiceConnection {

    /* renamed from: d  reason: collision with root package name */
    private final Object f8709d = new Object();

    /* renamed from: e  reason: collision with root package name */
    private boolean f8710e = false;

    /* renamed from: i  reason: collision with root package name */
    private b6.c f8711i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ b f8712o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ p(b bVar, b6.c cVar, b6.q qVar) {
        this.f8712o = bVar;
        this.f8711i = cVar;
    }

    private final void d(BillingResult billingResult) {
        synchronized (this.f8709d) {
            try {
                b6.c cVar = this.f8711i;
                if (cVar != null) {
                    cVar.onBillingSetupFinished(billingResult);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Removed duplicated region for block: B:127:0x0213  */
    /* JADX WARN: Removed duplicated region for block: B:130:0x0244  */
    /* JADX WARN: Removed duplicated region for block: B:133:0x0252  */
    /* JADX WARN: Removed duplicated region for block: B:134:0x025d  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final /* synthetic */ java.lang.Object a() {
        /*
            Method dump skipped, instructions count: 622
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.android.billingclient.api.p.a():java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void b() {
        b.q0(this.f8712o, 0);
        b.A(this.f8712o, null);
        BillingResult billingResult = u.f8733n;
        b.O(this.f8712o, 24, 6, billingResult);
        d(billingResult);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c() {
        synchronized (this.f8709d) {
            this.f8711i = null;
            this.f8710e = true;
        }
    }

    @Override // android.content.ServiceConnection
    public final void onServiceConnected(ComponentName componentName, IBinder iBinder) {
        com.google.android.gms.internal.play_billing.a0.h("BillingClient", "Billing service connected.");
        b.A(this.f8712o, j6.f(iBinder));
        Callable callable = new Callable() { // from class: com.android.billingclient.api.n
            @Override // java.util.concurrent.Callable
            public final Object call() {
                p.this.a();
                return null;
            }
        };
        Runnable runnable = new Runnable() { // from class: com.android.billingclient.api.o
            @Override // java.lang.Runnable
            public final void run() {
                p.this.b();
            }
        };
        b bVar = this.f8712o;
        if (b.p0(bVar, callable, 30000L, runnable, b.f0(bVar)) == null) {
            b bVar2 = this.f8712o;
            BillingResult j02 = b.j0(bVar2);
            b.O(bVar2, 25, 6, j02);
            d(j02);
        }
    }

    @Override // android.content.ServiceConnection
    public final void onServiceDisconnected(ComponentName componentName) {
        com.google.android.gms.internal.play_billing.a0.i("BillingClient", "Billing service disconnected.");
        b.i0(this.f8712o).c(c6.C());
        b.A(this.f8712o, null);
        b.q0(this.f8712o, 0);
        synchronized (this.f8709d) {
            try {
                b6.c cVar = this.f8711i;
                if (cVar != null) {
                    cVar.onBillingServiceDisconnected();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
