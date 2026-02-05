package com.android.billingclient.api;

import java.util.concurrent.Callable;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class l implements Callable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ String f8074d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ a6.j f8075e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ b f8076i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(b bVar, String str, a6.j jVar) {
        this.f8074d = str;
        this.f8075e = jVar;
        this.f8076i = bVar;
    }

    @Override // java.util.concurrent.Callable
    public final /* bridge */ /* synthetic */ Object call() {
        a6.i0 N = b.N(this.f8076i, this.f8074d, 9);
        if (N.b() != null) {
            this.f8075e.a(N.a(), N.b());
            return null;
        }
        this.f8075e.a(N.a(), com.google.android.gms.internal.play_billing.j.l());
        return null;
    }
}
