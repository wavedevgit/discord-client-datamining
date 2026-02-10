package ei;

import android.content.Context;
import android.content.Intent;
import com.google.android.gms.tasks.Task;
import fi.t;
import fi.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: c  reason: collision with root package name */
    private static final fi.i f21669c = new fi.i("ReviewService");

    /* renamed from: a  reason: collision with root package name */
    t f21670a;

    /* renamed from: b  reason: collision with root package name */
    private final String f21671b;

    public l(Context context) {
        this.f21671b = context.getPackageName();
        if (w.a(context)) {
            this.f21670a = new t(context, f21669c, "com.google.android.finsky.inappreviewservice.InAppReviewService", new Intent("com.google.android.finsky.BIND_IN_APP_REVIEW_SERVICE").setPackage("com.android.vending"), h.f21662a, null, null);
        }
    }

    public final Task a() {
        fi.i iVar = f21669c;
        iVar.d("requestInAppReview (%s)", this.f21671b);
        if (this.f21670a == null) {
            iVar.b("Play Store app is either not installed or not the official version", new Object[0]);
            return zg.m.e(new a(-1));
        }
        zg.k kVar = new zg.k();
        this.f21670a.p(new i(this, kVar, kVar), kVar);
        return kVar.a();
    }
}
