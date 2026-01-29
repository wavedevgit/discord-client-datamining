package com.google.android.gms.internal.gtm;

import com.google.android.gms.common.util.d;
import gf.q;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class zzfo {
    private final d zza;
    private long zzb;

    public zzfo(d dVar) {
        q.l(dVar);
        this.zza = dVar;
    }

    public final void zza() {
        this.zzb = 0L;
    }

    public final void zzb() {
        this.zzb = this.zza.b();
    }

    public final boolean zzc(long j10) {
        if (this.zzb == 0 || this.zza.b() - this.zzb > j10) {
            return true;
        }
        return false;
    }
}
