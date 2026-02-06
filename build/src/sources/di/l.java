package di;

import android.content.Context;
import android.content.Intent;
import com.google.android.gms.tasks.Task;
import ei.t;
import ei.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: c  reason: collision with root package name */
    private static final ei.i f20780c = new ei.i("ReviewService");

    /* renamed from: a  reason: collision with root package name */
    t f20781a;

    /* renamed from: b  reason: collision with root package name */
    private final String f20782b;

    public l(Context context) {
        this.f20782b = context.getPackageName();
        if (w.a(context)) {
            this.f20781a = new t(context, f20780c, "com.google.android.finsky.inappreviewservice.InAppReviewService", new Intent("com.google.android.finsky.BIND_IN_APP_REVIEW_SERVICE").setPackage("com.android.vending"), h.f20773a, null, null);
        }
    }

    public final Task a() {
        ei.i iVar = f20780c;
        iVar.d("requestInAppReview (%s)", this.f20782b);
        if (this.f20781a == null) {
            iVar.b("Play Store app is either not installed or not the official version", new Object[0]);
            return yg.m.e(new a(-1));
        }
        yg.k kVar = new yg.k();
        this.f20781a.p(new i(this, kVar, kVar), kVar);
        return kVar.a();
    }
}
