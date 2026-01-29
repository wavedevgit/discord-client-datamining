package com.google.android.gms.internal.gtm;

import se.n;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class zzby extends zzcw {
    final /* synthetic */ zzcc zza;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public zzby(zzcc zzccVar, zzbv zzbvVar) {
        super(zzbvVar);
        this.zza = zzccVar;
    }

    @Override // com.google.android.gms.internal.gtm.zzcw
    public final void zza() {
        zzcc zzccVar = this.zza;
        n.d();
        if (!zzccVar.zzg()) {
            return;
        }
        zzccVar.zzO("Inactivity, disconnecting from device AnalyticsService");
        zzccVar.zzc();
    }
}
