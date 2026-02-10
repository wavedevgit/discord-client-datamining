package hi;

import android.app.Activity;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import com.google.android.gms.tasks.Task;
import com.google.android.play.core.review.ReviewManager;
import ei.b;
import zg.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements ReviewManager {

    /* renamed from: a  reason: collision with root package name */
    private final Context f26128a;

    /* renamed from: b  reason: collision with root package name */
    private b f26129b;

    public a(Context context) {
        this.f26128a = context;
    }

    @Override // com.google.android.play.core.review.ReviewManager
    public Task a(Activity activity, b bVar) {
        if (bVar != this.f26129b) {
            return m.e(new ei.a(-2));
        }
        return m.f(null);
    }

    @Override // com.google.android.play.core.review.ReviewManager
    public Task b() {
        b c10 = b.c(PendingIntent.getBroadcast(this.f26128a, 0, new Intent(), 67108864), false);
        this.f26129b = c10;
        return m.f(c10);
    }
}
