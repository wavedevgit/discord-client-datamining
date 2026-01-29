package com.google.android.gms.internal.gtm;

import com.google.android.gms.common.util.VisibleForTesting;
@VisibleForTesting
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class zzet<V> {
    private final zzes<V> zza;
    private final V zzb;
    private final V zzc;
    private final Object zzd = new Object();

    private zzet(V v10, V v11, zzes<V> zzesVar) {
        this.zzb = v10;
        this.zzc = v11;
        this.zza = zzesVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static <T> zzet<T> zza(T t10, T t11, zzes<T> zzesVar) {
        return new zzet<>(t10, t11, zzesVar);
    }

    public final V zzb() {
        synchronized (this.zzd) {
        }
        return this.zzb;
    }
}
