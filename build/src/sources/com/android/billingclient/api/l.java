package com.android.billingclient.api;

import java.util.concurrent.Callable;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class l implements Callable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ String f7973d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ a6.j f7974e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ b f7975i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(b bVar, String str, a6.j jVar) {
        this.f7973d = str;
        this.f7974e = jVar;
        this.f7975i = bVar;
    }

    @Override // java.util.concurrent.Callable
    public final /* bridge */ /* synthetic */ Object call() {
        a6.i0 N = b.N(this.f7975i, this.f7973d, 9);
        if (N.b() != null) {
            this.f7974e.a(N.a(), N.b());
            return null;
        }
        this.f7974e.a(N.a(), com.google.android.gms.internal.play_billing.j.l());
        return null;
    }
}
