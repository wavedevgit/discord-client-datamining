package com.google.android.gms.internal.gtm;

import android.content.Context;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.os.Bundle;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class zzft extends zzbs {
    protected String zza;
    protected String zzb;
    protected boolean zzc;
    protected int zzd;
    protected boolean zze;
    protected boolean zzf;

    public zzft(zzbv zzbvVar) {
        super(zzbvVar);
    }

    public final boolean zzc() {
        zzW();
        return this.zzf;
    }

    @Override // com.google.android.gms.internal.gtm.zzbs
    protected final void zzd() {
        ApplicationInfo applicationInfo;
        int i10;
        int i11;
        Context zzo = zzo();
        try {
            applicationInfo = zzo.getPackageManager().getApplicationInfo(zzo.getPackageName(), IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        } catch (PackageManager.NameNotFoundException e10) {
            zzS("PackageManager doesn't know about the app package", e10);
            applicationInfo = null;
        }
        if (applicationInfo == null) {
            zzR("Couldn't get ApplicationInfo to load global config");
            return;
        }
        Bundle bundle = applicationInfo.metaData;
        if (bundle != null && (i10 = bundle.getInt("com.google.android.gms.analytics.globalConfigResource")) > 0) {
            zzbv zzt = zzt();
            zzew zzewVar = (zzew) new zzcs(zzt, new zzev(zzt)).zza(i10);
            if (zzewVar != null) {
                zzO("Loading global XML config values");
                String str = zzewVar.zza;
                if (str != null) {
                    this.zzb = str;
                    zzG("XML config - app name", str);
                }
                String str2 = zzewVar.zzb;
                if (str2 != null) {
                    this.zza = str2;
                    zzG("XML config - app version", str2);
                }
                String str3 = zzewVar.zzc;
                boolean z10 = false;
                if (str3 != null) {
                    String lowerCase = str3.toLowerCase(Locale.US);
                    if ("verbose".equals(lowerCase)) {
                        i11 = 0;
                    } else if ("info".equals(lowerCase)) {
                        i11 = 1;
                    } else if ("warning".equals(lowerCase)) {
                        i11 = 2;
                    } else if ("error".equals(lowerCase)) {
                        i11 = 3;
                    } else {
                        i11 = -1;
                    }
                    if (i11 >= 0) {
                        zzP("XML config - log level", Integer.valueOf(i11));
                    }
                }
                int i12 = zzewVar.zzd;
                if (i12 >= 0) {
                    this.zzd = i12;
                    this.zzc = true;
                    zzG("XML config - dispatch period (sec)", Integer.valueOf(i12));
                }
                int i13 = zzewVar.zze;
                if (i13 != -1) {
                    if (1 == i13) {
                        z10 = true;
                    }
                    this.zzf = z10;
                    this.zze = true;
                    zzG("XML config - dry run", Boolean.valueOf(z10));
                }
            }
        }
    }

    public final boolean zze() {
        zzW();
        return this.zze;
    }

    public final boolean zzf() {
        zzW();
        return false;
    }
}
