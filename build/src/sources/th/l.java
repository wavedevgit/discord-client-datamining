package th;

import android.content.Context;
import com.google.android.gms.tasks.Task;
import qg.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: c  reason: collision with root package name */
    private static final qg.d f50668c = new qg.d("AgeSignalsService");

    /* renamed from: a  reason: collision with root package name */
    private final Context f50669a;

    /* renamed from: b  reason: collision with root package name */
    final qg.o f50670b;

    /* JADX WARN: Type inference failed for: r6v0, types: [th.i, java.lang.Object] */
    public l(Context context) {
        this.f50669a = context;
        if (r.b(context)) {
            this.f50670b = new qg.o(context, f50668c, "AgeSignalsService", f.f50660a, new Object(), null);
        } else {
            this.f50670b = null;
        }
    }

    private static Task d(int i10) {
        f50668c.a("onError(%d)", Integer.valueOf(i10));
        return xg.m.e(new a(i10));
    }

    public final Task b(d dVar) {
        qg.o oVar = this.f50670b;
        if (oVar != null) {
            if (r.a(this.f50669a) < 82380000) {
                return d(-6);
            }
            xg.k kVar = new xg.k();
            oVar.t(new j(this, kVar, kVar, dVar), kVar);
            return kVar.a();
        }
        return d(-2);
    }
}
