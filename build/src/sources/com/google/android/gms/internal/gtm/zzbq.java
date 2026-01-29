package com.google.android.gms.internal.gtm;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import gf.q;
import se.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class zzbq extends zzbs {
    private final zzck zza;

    public zzbq(zzbv zzbvVar, zzbw zzbwVar) {
        super(zzbvVar);
        q.l(zzbwVar);
        this.zza = new zzck(zzbvVar, zzbwVar);
    }

    public final void zzc() {
        zzW();
        Context zzo = zzo();
        if (zzfi.zza(zzo) && zzfn.zzh(zzo)) {
            Intent intent = new Intent("com.google.android.gms.analytics.ANALYTICS_DISPATCH");
            intent.setComponent(new ComponentName(zzo, "com.google.android.gms.analytics.AnalyticsService"));
            zzo.startService(intent);
            return;
        }
        zze(null);
    }

    @Override // com.google.android.gms.internal.gtm.zzbs
    protected final void zzd() {
        this.zza.zzX();
    }

    public final void zze(zzcz zzczVar) {
        zzW();
        zzq().e(new zzbo(this, zzczVar));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void zzi() {
        n.d();
        this.zza.zzl();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void zzj() {
        n.d();
        this.zza.zzm();
    }

    public final void zzk() {
        zzW();
        n.d();
        zzck zzckVar = this.zza;
        n.d();
        zzckVar.zzW();
        zzckVar.zzO("Service disconnected");
    }

    public final void zzm() {
        this.zza.zzaa();
    }
}
