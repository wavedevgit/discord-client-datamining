package ci;

import android.content.Context;
import android.content.Intent;
import com.google.android.gms.tasks.Task;
import di.t;
import di.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: c  reason: collision with root package name */
    private static final di.i f7633c = new di.i("ReviewService");

    /* renamed from: a  reason: collision with root package name */
    t f7634a;

    /* renamed from: b  reason: collision with root package name */
    private final String f7635b;

    public l(Context context) {
        this.f7635b = context.getPackageName();
        if (w.a(context)) {
            this.f7634a = new t(context, f7633c, "com.google.android.finsky.inappreviewservice.InAppReviewService", new Intent("com.google.android.finsky.BIND_IN_APP_REVIEW_SERVICE").setPackage("com.android.vending"), h.f7626a, null, null);
        }
    }

    public final Task a() {
        di.i iVar = f7633c;
        iVar.d("requestInAppReview (%s)", this.f7635b);
        if (this.f7634a == null) {
            iVar.b("Play Store app is either not installed or not the official version", new Object[0]);
            return xg.m.e(new a(-1));
        }
        xg.k kVar = new xg.k();
        this.f7634a.p(new i(this, kVar, kVar), kVar);
        return kVar.a();
    }
}
