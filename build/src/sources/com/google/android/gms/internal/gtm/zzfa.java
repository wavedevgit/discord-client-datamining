package com.google.android.gms.internal.gtm;

import android.annotation.SuppressLint;
import android.util.Log;
import com.google.android.gms.common.util.VisibleForTesting;
import se.c;
@VisibleForTesting
@Deprecated
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class zzfa {
    private static volatile c zza = new zzcu();

    @SuppressLint({"LogTagMismatch"})
    public static void zzb(String str, Object obj) {
        String str2;
        zzfb zza2 = zzfb.zza();
        if (zza2 != null) {
            zza2.zzK(str, obj);
        } else if (zzf(3)) {
            if (obj != null) {
                String str3 = (String) obj;
                StringBuilder sb2 = new StringBuilder(str.length() + 1 + str3.length());
                sb2.append(str);
                sb2.append(":");
                sb2.append(str3);
                str2 = sb2.toString();
            } else {
                str2 = str;
            }
            Log.e(zzeu.zzc.zzb(), str2);
        }
        c cVar = zza;
        if (cVar != null) {
            cVar.error(str);
        }
    }

    public static boolean zzf(int i10) {
        if (zza == null || zza.getLogLevel() > i10) {
            return false;
        }
        return true;
    }
}
