package xe;

import android.content.Context;
import com.google.android.gms.tasks.Task;
import ff.a;
import ff.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b extends d {

    /* renamed from: k  reason: collision with root package name */
    private static final a.g f54876k;

    /* renamed from: l  reason: collision with root package name */
    private static final a.AbstractC0331a f54877l;

    /* renamed from: m  reason: collision with root package name */
    private static final ff.a f54878m;

    static {
        a.g gVar = new a.g();
        f54876k = gVar;
        c cVar = new c();
        f54877l = cVar;
        f54878m = new ff.a("SmsRetriever.API", cVar, gVar);
    }

    public b(Context context) {
        super(context, f54878m, a.d.f22598c, d.a.f22610c);
    }

    public abstract Task C();
}
