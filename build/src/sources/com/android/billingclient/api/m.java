package com.android.billingclient.api;

import java.util.concurrent.Callable;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class m implements Callable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ String f8697d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ b6.i f8698e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ b f8699i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(b bVar, String str, b6.i iVar) {
        this.f8697d = str;
        this.f8698e = iVar;
        this.f8699i = bVar;
    }

    @Override // java.util.concurrent.Callable
    public final /* bridge */ /* synthetic */ Object call() {
        r h02 = b.h0(this.f8699i, this.f8697d);
        this.f8698e.a(h02.a(), h02.b());
        return null;
    }
}
