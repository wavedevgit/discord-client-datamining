package com.google.android.gms.internal.gtm;

import android.content.SharedPreferences;
import se.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class zzfh extends zzbs {
    private SharedPreferences zza;
    private long zzb;
    private long zzc;
    private final zzfg zzd;

    /* JADX INFO: Access modifiers changed from: protected */
    public zzfh(zzbv zzbvVar) {
        super(zzbvVar);
        this.zzc = -1L;
        zzw();
        this.zzd = new zzfg(this, "monitoring", zzeu.zzP.zzb().longValue(), null);
    }

    public final long zza() {
        n.d();
        zzW();
        long j10 = this.zzb;
        if (j10 == 0) {
            long j11 = this.zza.getLong("first_run", 0L);
            if (j11 != 0) {
                this.zzb = j11;
                return j11;
            }
            long a10 = zzC().a();
            SharedPreferences.Editor edit = this.zza.edit();
            edit.putLong("first_run", a10);
            if (!edit.commit()) {
                zzR("Failed to commit first run time");
            }
            this.zzb = a10;
            return a10;
        }
        return j10;
    }

    public final long zzb() {
        n.d();
        zzW();
        long j10 = this.zzc;
        if (j10 == -1) {
            long j11 = this.zza.getLong("last_dispatch", 0L);
            this.zzc = j11;
            return j11;
        }
        return j10;
    }

    @Override // com.google.android.gms.internal.gtm.zzbs
    protected final void zzd() {
        this.zza = zzo().getSharedPreferences("com.google.android.gms.analytics.prefs", 0);
    }

    public final zzfg zze() {
        return this.zzd;
    }

    public final void zzi() {
        n.d();
        zzW();
        long a10 = zzC().a();
        SharedPreferences.Editor edit = this.zza.edit();
        edit.putLong("last_dispatch", a10);
        edit.apply();
        this.zzc = a10;
    }
}
