package ji;

import android.app.Activity;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import com.google.android.gms.tasks.Task;
import com.google.android.play.core.review.ReviewManager;
import gi.b;
import zg.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements ReviewManager {

    /* renamed from: a  reason: collision with root package name */
    private final Context f31535a;

    /* renamed from: b  reason: collision with root package name */
    private b f31536b;

    public a(Context context) {
        this.f31535a = context;
    }

    @Override // com.google.android.play.core.review.ReviewManager
    public Task a(Activity activity, b bVar) {
        if (bVar != this.f31536b) {
            return m.e(new gi.a(-2));
        }
        return m.f(null);
    }

    @Override // com.google.android.play.core.review.ReviewManager
    public Task b() {
        b c10 = b.c(PendingIntent.getBroadcast(this.f31535a, 0, new Intent(), 67108864), false);
        this.f31536b = c10;
        return m.f(c10);
    }
}
