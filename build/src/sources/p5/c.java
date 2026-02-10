package p5;

import android.content.Context;
import y5.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c implements b {
    @Override // p5.b
    public a a(Context context) {
        if (context != null && j.f(context) == 0.0f) {
            return a.REDUCED_MOTION;
        }
        return a.STANDARD_MOTION;
    }
}
