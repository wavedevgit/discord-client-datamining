package com.google.android.gms.internal.gtm;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class zzey extends zzas implements IInterface {
    /* JADX INFO: Access modifiers changed from: package-private */
    public zzey(IBinder iBinder) {
        super(iBinder, "com.google.android.gms.analytics.internal.IAnalyticsService");
    }

    public final void zzf(Map map, long j10, String str, List<zzcp> list) {
        Parcel zza = zza();
        zza.writeMap(map);
        zza.writeLong(j10);
        zza.writeString(str);
        zza.writeTypedList(list);
        zzl(1, zza);
    }
}
