package ji;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class h {
    public static Context a(Context context) {
        Context applicationContext = context.getApplicationContext();
        if (applicationContext != null) {
            return applicationContext;
        }
        return context;
    }
}
