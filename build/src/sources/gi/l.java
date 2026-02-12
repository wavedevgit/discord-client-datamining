package gi;

import android.content.Context;
import android.content.Intent;
import com.google.android.gms.tasks.Task;
import hi.t;
import hi.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: c  reason: collision with root package name */
    private static final hi.i f25716c = new hi.i("ReviewService");

    /* renamed from: a  reason: collision with root package name */
    t f25717a;

    /* renamed from: b  reason: collision with root package name */
    private final String f25718b;

    public l(Context context) {
        this.f25718b = context.getPackageName();
        if (w.a(context)) {
            this.f25717a = new t(context, f25716c, "com.google.android.finsky.inappreviewservice.InAppReviewService", new Intent("com.google.android.finsky.BIND_IN_APP_REVIEW_SERVICE").setPackage("com.android.vending"), h.f25709a, null, null);
        }
    }

    public final Task a() {
        hi.i iVar = f25716c;
        iVar.d("requestInAppReview (%s)", this.f25718b);
        if (this.f25717a == null) {
            iVar.b("Play Store app is either not installed or not the official version", new Object[0]);
            return zg.m.e(new a(-1));
        }
        zg.k kVar = new zg.k();
        this.f25717a.p(new i(this, kVar, kVar), kVar);
        return kVar.a();
    }
}
