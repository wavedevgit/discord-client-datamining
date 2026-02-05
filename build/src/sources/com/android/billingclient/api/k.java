package com.android.billingclient.api;

import java.util.concurrent.Executors;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class k implements ThreadFactory {

    /* renamed from: a  reason: collision with root package name */
    private final ThreadFactory f8069a = Executors.defaultThreadFactory();

    /* renamed from: b  reason: collision with root package name */
    private final AtomicInteger f8070b = new AtomicInteger(1);

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(b bVar) {
    }

    @Override // java.util.concurrent.ThreadFactory
    public final Thread newThread(Runnable runnable) {
        AtomicInteger atomicInteger = this.f8070b;
        Thread newThread = this.f8069a.newThread(runnable);
        int andIncrement = atomicInteger.getAndIncrement();
        newThread.setName("PlayBillingLibrary-" + andIncrement);
        return newThread;
    }
}
