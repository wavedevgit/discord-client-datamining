package com.google.android.gms.internal.gtm;

import android.annotation.TargetApi;
import android.app.job.JobParameters;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.content.pm.ServiceInfo;
import android.os.Handler;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.google.android.gms.internal.gtm.zzfm;
import gf.q;
import xg.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class zzfn<T extends Context & zzfm> {
    private static Boolean zza;
    private final Handler zzb;
    private final T zzc;

    public zzfn(T t10) {
        q.l(t10);
        this.zzc = t10;
        this.zzb = new zzga();
    }

    public static boolean zzh(Context context) {
        q.l(context);
        Boolean bool = zza;
        if (bool != null) {
            return bool.booleanValue();
        }
        boolean z10 = false;
        try {
            ServiceInfo serviceInfo = context.getPackageManager().getServiceInfo(new ComponentName(context, "com.google.android.gms.analytics.AnalyticsService"), 0);
            if (serviceInfo != null) {
                if (serviceInfo.enabled) {
                    z10 = true;
                }
            }
        } catch (PackageManager.NameNotFoundException unused) {
        }
        zza = Boolean.valueOf(z10);
        return z10;
    }

    public final int zza(Intent intent, int i10, final int i11) {
        try {
            synchronized (zzfi.zza) {
                a aVar = zzfi.zzb;
                if (aVar != null && aVar.b()) {
                    aVar.c();
                }
            }
        } catch (SecurityException unused) {
        }
        zzbv zzg = zzbv.zzg(this.zzc);
        final zzfb zzm = zzg.zzm();
        if (intent == null) {
            zzm.zzR("AnalyticsService started with null intent");
            return 2;
        }
        String action = intent.getAction();
        zzg.zzj();
        zzm.zzQ("Local AnalyticsService called. startId, action", Integer.valueOf(i11), action);
        if ("com.google.android.gms.analytics.ANALYTICS_DISPATCH".equals(action)) {
            zzg(new Runnable() { // from class: com.google.android.gms.internal.gtm.zzfj
                @Override // java.lang.Runnable
                public final void run() {
                    zzfn.this.zzc(i11, zzm);
                }
            });
        }
        return 2;
    }

    public final /* synthetic */ void zzc(int i10, zzfb zzfbVar) {
        if (this.zzc.callServiceStopSelfResult(i10)) {
            zzfbVar.zzO("Local AnalyticsService processed last dispatch request");
        }
    }

    public final /* synthetic */ void zzd(zzfb zzfbVar, JobParameters jobParameters) {
        zzfbVar.zzO("AnalyticsJobService processed last dispatch request");
        this.zzc.zza(jobParameters, false);
    }

    public final void zze() {
        zzbv zzg = zzbv.zzg(this.zzc);
        zzfb zzm = zzg.zzm();
        zzg.zzj();
        zzm.zzO("Local AnalyticsService is starting up");
    }

    public final void zzf() {
        zzbv zzg = zzbv.zzg(this.zzc);
        zzfb zzm = zzg.zzm();
        zzg.zzj();
        zzm.zzO("Local AnalyticsService is shutting down");
    }

    public final void zzg(Runnable runnable) {
        zzbv.zzg(this.zzc).zzf().zze(new zzfl(this, runnable));
    }

    @TargetApi(ChatViewRecyclerTypes.SURVEY_INDICATION)
    public final boolean zzi(final JobParameters jobParameters) {
        zzbv zzg = zzbv.zzg(this.zzc);
        final zzfb zzm = zzg.zzm();
        String string = jobParameters.getExtras().getString("action");
        zzg.zzj();
        zzm.zzP("Local AnalyticsJobService called. action", string);
        if ("com.google.android.gms.analytics.ANALYTICS_DISPATCH".equals(string)) {
            zzg(new Runnable() { // from class: com.google.android.gms.internal.gtm.zzfk
                @Override // java.lang.Runnable
                public final void run() {
                    zzfn.this.zzd(zzm, jobParameters);
                }
            });
            return true;
        }
        return true;
    }
}
