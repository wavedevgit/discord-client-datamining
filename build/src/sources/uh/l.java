package uh;

import android.content.Context;
import com.google.android.gms.tasks.Task;
import rg.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: c  reason: collision with root package name */
    private static final rg.d f51524c = new rg.d("AgeSignalsService");

    /* renamed from: a  reason: collision with root package name */
    private final Context f51525a;

    /* renamed from: b  reason: collision with root package name */
    final rg.o f51526b;

    /* JADX WARN: Type inference failed for: r6v0, types: [uh.i, java.lang.Object] */
    public l(Context context) {
        this.f51525a = context;
        if (r.b(context)) {
            this.f51526b = new rg.o(context, f51524c, "AgeSignalsService", f.f51516a, new Object(), null);
        } else {
            this.f51526b = null;
        }
    }

    private static Task d(int i10) {
        f51524c.a("onError(%d)", Integer.valueOf(i10));
        return yg.m.e(new a(i10));
    }

    public final Task b(d dVar) {
        rg.o oVar = this.f51526b;
        if (oVar != null) {
            if (r.a(this.f51525a) < 82380000) {
                return d(-6);
            }
            yg.k kVar = new yg.k();
            oVar.t(new j(this, kVar, kVar, dVar), kVar);
            return kVar.a();
        }
        return d(-2);
    }
}
