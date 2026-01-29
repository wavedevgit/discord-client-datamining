package com.google.android.gms.internal.gtm;

import android.os.Handler;
import gf.q;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class zzcw {
    private static volatile Handler zza;
    private final zzbv zzb;
    private final Runnable zzc;
    private volatile long zzd;

    /* JADX INFO: Access modifiers changed from: package-private */
    public zzcw(zzbv zzbvVar) {
        q.l(zzbvVar);
        this.zzb = zzbvVar;
        this.zzc = new zzcv(this);
    }

    private final Handler zzi() {
        Handler handler;
        if (zza != null) {
            return zza;
        }
        synchronized (zzcw.class) {
            try {
                if (zza == null) {
                    zza = new zzga(this.zzb.zza().getMainLooper());
                }
                handler = zza;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return handler;
    }

    public abstract void zza();

    public final long zzb() {
        if (this.zzd == 0) {
            return 0L;
        }
        return Math.abs(this.zzb.zzr().a() - this.zzd);
    }

    public final void zze(long j10) {
        if (zzh()) {
            long j11 = 0;
            if (j10 < 0) {
                zzf();
                return;
            }
            long abs = j10 - Math.abs(this.zzb.zzr().a() - this.zzd);
            if (abs >= 0) {
                j11 = abs;
            }
            zzi().removeCallbacks(this.zzc);
            if (!zzi().postDelayed(this.zzc, j11)) {
                this.zzb.zzm().zzK("Failed to adjust delayed post. time", Long.valueOf(j11));
            }
        }
    }

    public final void zzf() {
        this.zzd = 0L;
        zzi().removeCallbacks(this.zzc);
    }

    public final void zzg(long j10) {
        zzf();
        if (j10 >= 0) {
            this.zzd = this.zzb.zzr().a();
            if (!zzi().postDelayed(this.zzc, j10)) {
                this.zzb.zzm().zzK("Failed to schedule delayed post. time", Long.valueOf(j10));
            }
        }
    }

    public final boolean zzh() {
        return this.zzd != 0;
    }
}
