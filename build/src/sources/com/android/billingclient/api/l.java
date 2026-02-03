package com.android.billingclient.api;

import java.util.concurrent.Callable;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class l implements Callable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ String f8721d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ a6.j f8722e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ b f8723i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(b bVar, String str, a6.j jVar) {
        this.f8721d = str;
        this.f8722e = jVar;
        this.f8723i = bVar;
    }

    @Override // java.util.concurrent.Callable
    public final /* bridge */ /* synthetic */ Object call() {
        a6.i0 N = b.N(this.f8723i, this.f8721d, 9);
        if (N.b() != null) {
            this.f8722e.a(N.a(), N.b());
            return null;
        }
        this.f8722e.a(N.a(), com.google.android.gms.internal.play_billing.j.k());
        return null;
    }
}
