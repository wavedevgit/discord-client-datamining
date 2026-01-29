package com.google.android.gms.internal.gtm;

import android.content.SharedPreferences;
import com.google.android.gms.common.util.VisibleForTesting;
import gf.q;
import java.util.UUID;
import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class zzfg {
    final /* synthetic */ zzfh zza;
    private final String zzb;
    private final long zzc;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ zzfg(zzfh zzfhVar, String str, long j10, zzff zzffVar) {
        boolean z10;
        this.zza = zzfhVar;
        q.f("monitoring");
        if (j10 > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        q.a(z10);
        this.zzb = "monitoring";
        this.zzc = j10;
    }

    private final long zzd() {
        SharedPreferences sharedPreferences;
        sharedPreferences = this.zza.zza;
        return sharedPreferences.getLong(zzf(), 0L);
    }

    private final String zze() {
        return this.zzb.concat(":count");
    }

    private final String zzf() {
        return this.zzb.concat(":start");
    }

    private final void zzg() {
        SharedPreferences sharedPreferences;
        long a10 = this.zza.zzC().a();
        sharedPreferences = this.zza.zza;
        SharedPreferences.Editor edit = sharedPreferences.edit();
        edit.remove(zze());
        edit.remove(zzb());
        edit.putLong(zzf(), a10);
        edit.commit();
    }

    @VisibleForTesting
    protected final String zzb() {
        return this.zzb.concat(":value");
    }

    public final void zzc(String str) {
        SharedPreferences sharedPreferences;
        SharedPreferences sharedPreferences2;
        SharedPreferences sharedPreferences3;
        if (zzd() == 0) {
            zzg();
        }
        if (str == null) {
            str = "";
        }
        synchronized (this) {
            try {
                sharedPreferences = this.zza.zza;
                long j10 = sharedPreferences.getLong(zze(), 0L);
                if (j10 <= 0) {
                    sharedPreferences3 = this.zza.zza;
                    SharedPreferences.Editor edit = sharedPreferences3.edit();
                    edit.putString(zzb(), str);
                    edit.putLong(zze(), 1L);
                    edit.apply();
                    return;
                }
                long leastSignificantBits = UUID.randomUUID().getLeastSignificantBits() & LongCompanionObject.MAX_VALUE;
                long j11 = j10 + 1;
                long j12 = LongCompanionObject.MAX_VALUE / j11;
                sharedPreferences2 = this.zza.zza;
                SharedPreferences.Editor edit2 = sharedPreferences2.edit();
                if (leastSignificantBits < j12) {
                    edit2.putString(zzb(), str);
                }
                edit2.putLong(zze(), j11);
                edit2.apply();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
