package vh;

import android.content.Context;
import com.google.android.gms.tasks.Task;
import sg.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: c  reason: collision with root package name */
    private static final sg.d f52384c = new sg.d("AgeSignalsService");

    /* renamed from: a  reason: collision with root package name */
    private final Context f52385a;

    /* renamed from: b  reason: collision with root package name */
    final sg.o f52386b;

    /* JADX WARN: Type inference failed for: r6v0, types: [java.lang.Object, vh.i] */
    public l(Context context) {
        this.f52385a = context;
        if (r.b(context)) {
            this.f52386b = new sg.o(context, f52384c, "AgeSignalsService", f.f52376a, new Object(), null);
        } else {
            this.f52386b = null;
        }
    }

    private static Task d(int i10) {
        f52384c.a("onError(%d)", Integer.valueOf(i10));
        return zg.m.e(new a(i10));
    }

    public final Task b(d dVar) {
        sg.o oVar = this.f52386b;
        if (oVar != null) {
            if (r.a(this.f52385a) < 82380000) {
                return d(-6);
            }
            zg.k kVar = new zg.k();
            oVar.t(new j(this, kVar, kVar, dVar), kVar);
            return kVar.a();
        }
        return d(-2);
    }
}
