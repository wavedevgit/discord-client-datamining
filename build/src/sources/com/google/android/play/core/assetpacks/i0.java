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
    private static final th.k0 f15400c = new th.k0("AssetPackStateListenerRegistryV2");

    /* renamed from: a  reason: collision with root package name */
    private final Set f15401a = new HashSet();

    /* renamed from: b  reason: collision with root package name */
    private final Handler f15402b = new Handler(Looper.getMainLooper());

    /* JADX INFO: Access modifiers changed from: package-private */
    public final synchronized void a(yh.a aVar) {
        f15400c.d("registerListener", new Object[0]);
        th.k.a(aVar, "Registered Asset Pack listener should not be null.");
        this.f15401a.add(aVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final synchronized void b(AssetPackState assetPackState) {
        Iterator it = new HashSet(this.f15401a).iterator();
        while (it.hasNext()) {
            ((yh.a) it.next()).a(assetPackState);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c(final AssetPackState assetPackState) {
        this.f15402b.post(new Runnable() { // from class: com.google.android.play.core.assetpacks.h0
            @Override // java.lang.Runnable
            public final void run() {
                i0.this.b(assetPackState);
            }
        });
    }
}
