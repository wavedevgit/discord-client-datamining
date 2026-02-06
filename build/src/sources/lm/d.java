package lm;

import android.content.res.Resources;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d {
    public static final double a(float f10) {
        return f10 / Resources.getSystem().getDisplayMetrics().density;
    }

    public static final double b(float f10) {
        return f10 * Resources.getSystem().getDisplayMetrics().density;
    }
}
