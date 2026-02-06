package com.android.billingclient.api;

import java.util.concurrent.Callable;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class m implements Callable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ String f7979d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ a6.i f7980e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ b f7981i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(b bVar, String str, a6.i iVar) {
        this.f7979d = str;
        this.f7980e = iVar;
        this.f7981i = bVar;
    }

    @Override // java.util.concurrent.Callable
    public final /* bridge */ /* synthetic */ Object call() {
        r h02 = b.h0(this.f7981i, this.f7979d);
        this.f7980e.a(h02.a(), h02.b());
        return null;
    }
}
