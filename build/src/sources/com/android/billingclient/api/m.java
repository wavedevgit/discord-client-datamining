package com.android.billingclient.api;

import java.util.concurrent.Callable;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class m implements Callable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ String f8727d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ a6.i f8728e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ b f8729i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(b bVar, String str, a6.i iVar) {
        this.f8727d = str;
        this.f8728e = iVar;
        this.f8729i = bVar;
    }

    @Override // java.util.concurrent.Callable
    public final /* bridge */ /* synthetic */ Object call() {
        r h02 = b.h0(this.f8729i, this.f8727d);
        this.f8728e.a(h02.a(), h02.b());
        return null;
    }
}
