package b0;

import android.app.Application;
import android.content.Context;
import android.content.ContextWrapper;
import android.os.Build;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class e {

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {
        static Context a(Context context, String str) {
            return context.createAttributionContext(str);
        }

        static String b(Context context) {
            return context.getAttributionTag();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {
        static Context a(Context context, int i10) {
            return context.createDeviceContext(i10);
        }

        static int b(Context context) {
            return context.getDeviceId();
        }
    }

    public static Context a(Context context) {
        int b10;
        Context applicationContext = context.getApplicationContext();
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 34 && (b10 = b.b(context)) != b.b(applicationContext)) {
            applicationContext = b.a(applicationContext, b10);
        }
        if (i10 >= 30) {
            String b11 = a.b(context);
            if (!Objects.equals(b11, a.b(applicationContext))) {
                return a.a(applicationContext, b11);
            }
        }
        return applicationContext;
    }

    public static Application b(Context context) {
        for (Context a10 = a(context); a10 instanceof ContextWrapper; a10 = ((ContextWrapper) a10).getBaseContext()) {
            if (a10 instanceof Application) {
                return (Application) a10;
            }
        }
        return null;
    }
}
