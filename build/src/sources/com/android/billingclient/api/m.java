package com.android.billingclient.api;

import java.util.concurrent.Callable;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class m implements Callable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ String f9098d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ a6.i f9099e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ b f9100i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(b bVar, String str, a6.i iVar) {
        this.f9098d = str;
        this.f9099e = iVar;
        this.f9100i = bVar;
    }

    @Override // java.util.concurrent.Callable
    public final /* bridge */ /* synthetic */ Object call() {
        r h02 = b.h0(this.f9100i, this.f9098d);
        this.f9099e.a(h02.a(), h02.b());
        return null;
    }
}
