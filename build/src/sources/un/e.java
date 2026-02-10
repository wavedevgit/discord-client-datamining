package un;

import android.content.Context;
import android.graphics.drawable.Drawable;
import android.util.Log;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e {
    public static final Drawable a(Context context, String str) {
        Intrinsics.checkNotNullParameter(context, "context");
        if (str == null) {
            return null;
        }
        int identifier = context.getResources().getIdentifier(str, "drawable", context.getPackageName());
        if (identifier > 0) {
            return g.a.b(context, identifier);
        }
        int identifier2 = context.getResources().getIdentifier(str, "drawable", "android");
        if (identifier2 > 0) {
            return g.a.b(context, identifier2);
        }
        Log.w("TabScreen", "TabScreen could not resolve drawable resource with the name " + str);
        return null;
    }
}
