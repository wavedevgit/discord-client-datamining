package androidx.core.content;

import android.content.Intent;
import android.os.Build;
import android.os.Parcelable;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a {
        static ArrayList a(Intent intent, String str, Class cls) {
            return intent.getParcelableArrayListExtra(str, cls);
        }

        static Object b(Intent intent, String str, Class cls) {
            return intent.getParcelableExtra(str, cls);
        }
    }

    public static ArrayList a(Intent intent, String str, Class cls) {
        if (Build.VERSION.SDK_INT >= 34) {
            return a.a(intent, str, cls);
        }
        return intent.getParcelableArrayListExtra(str);
    }

    public static Object b(Intent intent, String str, Class cls) {
        if (Build.VERSION.SDK_INT >= 34) {
            return a.b(intent, str, cls);
        }
        Parcelable parcelableExtra = intent.getParcelableExtra(str);
        if (cls.isInstance(parcelableExtra)) {
            return parcelableExtra;
        }
        return null;
    }
}
