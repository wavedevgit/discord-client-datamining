package com.android.billingclient.api;

import java.util.concurrent.Callable;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class m implements Callable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ String f8080d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ a6.i f8081e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ b f8082i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(b bVar, String str, a6.i iVar) {
        this.f8080d = str;
        this.f8081e = iVar;
        this.f8082i = bVar;
    }

    @Override // java.util.concurrent.Callable
    public final /* bridge */ /* synthetic */ Object call() {
        r h02 = b.h0(this.f8082i, this.f8080d);
        this.f8081e.a(h02.a(), h02.b());
        return null;
    }
}
