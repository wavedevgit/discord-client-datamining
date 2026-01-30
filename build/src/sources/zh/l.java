package zh;

import ai.t;
import ai.w;
import android.content.Context;
import android.content.Intent;
import com.google.android.gms.tasks.Task;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: c  reason: collision with root package name */
    private static final ai.i f55707c = new ai.i("ReviewService");

    /* renamed from: a  reason: collision with root package name */
    t f55708a;

    /* renamed from: b  reason: collision with root package name */
    private final String f55709b;

    public l(Context context) {
        this.f55709b = context.getPackageName();
        if (w.a(context)) {
            this.f55708a = new t(context, f55707c, "com.google.android.finsky.inappreviewservice.InAppReviewService", new Intent("com.google.android.finsky.BIND_IN_APP_REVIEW_SERVICE").setPackage("com.android.vending"), h.f55700a, null, null);
        }
    }

    public final Task a() {
        ai.i iVar = f55707c;
        iVar.d("requestInAppReview (%s)", this.f55709b);
        if (this.f55708a == null) {
            iVar.b("Play Store app is either not installed or not the official version", new Object[0]);
            return wg.m.e(new a(-1));
        }
        wg.k kVar = new wg.k();
        this.f55708a.p(new i(this, kVar, kVar), kVar);
        return kVar.a();
    }
}
