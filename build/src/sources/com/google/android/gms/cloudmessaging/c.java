package com.google.android.gms.cloudmessaging;

import android.os.Looper;
import android.os.Message;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c extends gg.f {

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ Rpc f13372b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(Rpc rpc, Looper looper) {
        super(looper);
        this.f13372b = rpc;
    }

    @Override // android.os.Handler
    public final void handleMessage(Message message) {
        Rpc.g(this.f13372b, message);
    }
}
