package zh;

import ai.t;
import ai.w;
import android.content.Context;
import android.content.Intent;
import com.google.android.gms.tasks.Task;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: c  reason: collision with root package name */
    private static final ai.i f55839c = new ai.i("ReviewService");

    /* renamed from: a  reason: collision with root package name */
    t f55840a;

    /* renamed from: b  reason: collision with root package name */
    private final String f55841b;

    public l(Context context) {
        this.f55841b = context.getPackageName();
        if (w.a(context)) {
            this.f55840a = new t(context, f55839c, "com.google.android.finsky.inappreviewservice.InAppReviewService", new Intent("com.google.android.finsky.BIND_IN_APP_REVIEW_SERVICE").setPackage("com.android.vending"), h.f55832a, null, null);
        }
    }

    public final Task a() {
        ai.i iVar = f55839c;
        iVar.d("requestInAppReview (%s)", this.f55841b);
        if (this.f55840a == null) {
            iVar.b("Play Store app is either not installed or not the official version", new Object[0]);
            return wg.m.e(new a(-1));
        }
        wg.k kVar = new wg.k();
        this.f55840a.p(new i(this, kVar, kVar), kVar);
        return kVar.a();
    }
}
