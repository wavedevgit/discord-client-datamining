package com.google.android.play.core.assetpacks;

import com.google.android.gms.common.api.Status;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends ef.b {
    /* JADX INFO: Access modifiers changed from: package-private */
    public a(int i10) {
        super(new Status(i10, String.format(Locale.getDefault(), "Asset Pack Download Error(%d): %s", Integer.valueOf(i10), yh.a.a(i10))));
        if (i10 != 0) {
            return;
        }
        throw new IllegalArgumentException("errorCode should not be 0.");
    }
}
