package fi;

import android.app.Activity;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import ci.b;
import com.google.android.gms.tasks.Task;
import com.google.android.play.core.review.ReviewManager;
import xg.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements ReviewManager {

    /* renamed from: a  reason: collision with root package name */
    private final Context f23015a;

    /* renamed from: b  reason: collision with root package name */
    private b f23016b;

    public a(Context context) {
        this.f23015a = context;
    }

    @Override // com.google.android.play.core.review.ReviewManager
    public Task a() {
        b c10 = b.c(PendingIntent.getBroadcast(this.f23015a, 0, new Intent(), 67108864), false);
        this.f23016b = c10;
        return m.f(c10);
    }

    @Override // com.google.android.play.core.review.ReviewManager
    public Task b(Activity activity, b bVar) {
        if (bVar != this.f23016b) {
            return m.e(new ci.a(-2));
        }
        return m.f(null);
    }
}
