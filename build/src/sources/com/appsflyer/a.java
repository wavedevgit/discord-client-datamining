package com.appsflyer;

import kotlin.jvm.functions.Function1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final /* synthetic */ class a implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    public final /* synthetic */ Function1 f8868d;

    public /* synthetic */ a(Function1 function1) {
        this.f8868d = function1;
    }

    @Override // java.lang.Runnable
    public final void run() {
        AFLogger.b(this.f8868d);
    }
}
