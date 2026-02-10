package xe;

import android.content.Context;
import com.google.android.gms.tasks.Task;
import ff.a;
import ff.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b extends d {

    /* renamed from: k  reason: collision with root package name */
    private static final a.g f54608k;

    /* renamed from: l  reason: collision with root package name */
    private static final a.AbstractC0316a f54609l;

    /* renamed from: m  reason: collision with root package name */
    private static final ff.a f54610m;

    static {
        a.g gVar = new a.g();
        f54608k = gVar;
        c cVar = new c();
        f54609l = cVar;
        f54610m = new ff.a("SmsRetriever.API", cVar, gVar);
    }

    public b(Context context) {
        super(context, f54610m, a.d.f23723g, d.a.f23735c);
    }

    public abstract Task C();
}
