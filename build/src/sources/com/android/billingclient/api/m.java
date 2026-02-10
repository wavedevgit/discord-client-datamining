package com.android.billingclient.api;

import java.util.concurrent.Callable;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class m implements Callable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ String f8119d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ b6.i f8120e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ b f8121i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(b bVar, String str, b6.i iVar) {
        this.f8119d = str;
        this.f8120e = iVar;
        this.f8121i = bVar;
    }

    @Override // java.util.concurrent.Callable
    public final /* bridge */ /* synthetic */ Object call() {
        r h02 = b.h0(this.f8121i, this.f8119d);
        this.f8120e.a(h02.a(), h02.b());
        return null;
    }
}
