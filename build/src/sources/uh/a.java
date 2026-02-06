package uh;

import com.google.android.gms.common.api.Status;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends ef.b {
    public a(int i10) {
        super(new Status(i10, String.format(Locale.getDefault(), "Age Signals Error: %d", Integer.valueOf(i10))));
        if (i10 != 0) {
            return;
        }
        throw new IllegalArgumentException("errorCode should not be 0.");
    }
}
