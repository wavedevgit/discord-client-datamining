package com.google.android.gms.internal.fido;

import java.util.concurrent.ScheduledExecutorService;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class j4 {
    public static d4 a(ScheduledExecutorService scheduledExecutorService) {
        if (scheduledExecutorService instanceof d4) {
            return (d4) scheduledExecutorService;
        }
        return new i4(scheduledExecutorService);
    }
}
