package xh;

import android.content.Context;
import com.google.android.gms.tasks.Task;
import sg.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: c  reason: collision with root package name */
    private static final sg.d f54780c = new sg.d("AgeSignalsService");

    /* renamed from: a  reason: collision with root package name */
    private final Context f54781a;

    /* renamed from: b  reason: collision with root package name */
    final sg.o f54782b;

    /* JADX WARN: Type inference failed for: r6v0, types: [xh.i, java.lang.Object] */
    public l(Context context) {
        this.f54781a = context;
        if (r.b(context)) {
            this.f54782b = new sg.o(context, f54780c, "AgeSignalsService", f.f54772a, new Object(), null);
        } else {
            this.f54782b = null;
        }
    }

    private static Task d(int i10) {
        f54780c.a("onError(%d)", Integer.valueOf(i10));
        return zg.m.e(new a(i10));
    }

    public final Task b(d dVar) {
        sg.o oVar = this.f54782b;
        if (oVar != null) {
            if (r.a(this.f54781a) < 82380000) {
                return d(-6);
            }
            zg.k kVar = new zg.k();
            oVar.t(new j(this, kVar, kVar, dVar), kVar);
            return kVar.a();
        }
        return d(-2);
    }
}
