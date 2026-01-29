package com.google.android.gms.common.util;

import android.os.StrictMode;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class q {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static StrictMode.VmPolicy.Builder a(StrictMode.VmPolicy.Builder builder) {
        return builder.permitUnsafeIntentLaunch();
    }
}
