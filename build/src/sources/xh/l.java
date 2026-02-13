package xh;

import android.content.Context;
import com.google.android.gms.tasks.Task;
import sg.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: c  reason: collision with root package name */
    private static final sg.d f55349c = new sg.d("AgeSignalsService");

    /* renamed from: a  reason: collision with root package name */
    private final Context f55350a;

    /* renamed from: b  reason: collision with root package name */
    final sg.o f55351b;

    /* JADX WARN: Type inference failed for: r6v0, types: [xh.i, java.lang.Object] */
    public l(Context context) {
        this.f55350a = context;
        if (r.b(context)) {
            this.f55351b = new sg.o(context, f55349c, "AgeSignalsService", f.f55341a, new Object(), null);
        } else {
            this.f55351b = null;
        }
    }

    private static Task d(int i10) {
        f55349c.a("onError(%d)", Integer.valueOf(i10));
        return zg.m.e(new a(i10));
    }

    public final Task b(d dVar) {
        sg.o oVar = this.f55351b;
        if (oVar != null) {
            if (r.a(this.f55350a) < 82380000) {
                return d(-6);
            }
            zg.k kVar = new zg.k();
            oVar.t(new j(this, kVar, kVar, dVar), kVar);
            return kVar.a();
        }
        return d(-2);
    }
}
