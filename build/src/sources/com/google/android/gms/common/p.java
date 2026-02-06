package com.google.android.gms.common;

import android.content.Context;
import android.os.Message;
import android.util.Log;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p extends fg.h {

    /* renamed from: b  reason: collision with root package name */
    private final Context f13792b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ f f13793c;

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public p(com.google.android.gms.common.f r1, android.content.Context r2) {
        /*
            r0 = this;
            r0.f13793c = r1
            android.os.Looper r1 = android.os.Looper.myLooper()
            if (r1 != 0) goto Ld
            android.os.Looper r1 = android.os.Looper.getMainLooper()
            goto L11
        Ld:
            android.os.Looper r1 = android.os.Looper.myLooper()
        L11:
            r0.<init>(r1)
            android.content.Context r1 = r2.getApplicationContext()
            r0.f13792b = r1
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.gms.common.p.<init>(com.google.android.gms.common.f, android.content.Context):void");
    }

    @Override // android.os.Handler
    public final void handleMessage(Message message) {
        int i10 = message.what;
        if (i10 != 1) {
            Log.w("GoogleApiAvailability", "Don't know how to handle this message: " + i10);
            return;
        }
        f fVar = this.f13793c;
        int g10 = fVar.g(this.f13792b);
        if (fVar.j(g10)) {
            this.f13793c.p(this.f13792b, g10);
        }
    }
}
