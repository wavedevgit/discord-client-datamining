package com.google.android.play.core.assetpacks;

import android.os.Handler;
import android.os.Looper;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i0 {

    /* renamed from: c  reason: collision with root package name */
    private static final yh.k0 f15914c = new yh.k0("AssetPackStateListenerRegistryV2");

    /* renamed from: a  reason: collision with root package name */
    private final Set f15915a = new HashSet();

    /* renamed from: b  reason: collision with root package name */
    private final Handler f15916b = new Handler(Looper.getMainLooper());

    /* JADX INFO: Access modifiers changed from: package-private */
    public final synchronized void a(di.a aVar) {
        f15914c.d("registerListener", new Object[0]);
        yh.k.a(aVar, "Registered Asset Pack listener should not be null.");
        this.f15915a.add(aVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final synchronized void b(AssetPackState assetPackState) {
        Iterator it = new HashSet(this.f15915a).iterator();
        while (it.hasNext()) {
            ((di.a) it.next()).a(assetPackState);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c(final AssetPackState assetPackState) {
        this.f15916b.post(new Runnable() { // from class: com.google.android.play.core.assetpacks.h0
            @Override // java.lang.Runnable
            public final void run() {
                i0.this.b(assetPackState);
            }
        });
    }
}
