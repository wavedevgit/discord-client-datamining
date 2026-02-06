package di;

import android.content.Context;
import com.google.android.play.core.review.ReviewManager;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {
    public static ReviewManager a(Context context) {
        Context applicationContext = context.getApplicationContext();
        if (applicationContext != null) {
            context = applicationContext;
        }
        return new g(new l(context));
    }
}
