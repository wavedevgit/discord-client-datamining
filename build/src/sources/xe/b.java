package xe;

import android.content.Context;
import com.google.android.gms.tasks.Task;
import ff.a;
import ff.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b extends d {

    /* renamed from: k  reason: collision with root package name */
    private static final a.g f54609k;

    /* renamed from: l  reason: collision with root package name */
    private static final a.AbstractC0316a f54610l;

    /* renamed from: m  reason: collision with root package name */
    private static final ff.a f54611m;

    static {
        a.g gVar = new a.g();
        f54609k = gVar;
        c cVar = new c();
        f54610l = cVar;
        f54611m = new ff.a("SmsRetriever.API", cVar, gVar);
    }

    public b(Context context) {
        super(context, f54611m, a.d.f23724g, d.a.f23736c);
    }

    public abstract Task C();
}
