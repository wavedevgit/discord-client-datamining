package xe;

import android.content.Context;
import com.google.android.gms.tasks.Task;
import ff.a;
import ff.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b extends d {

    /* renamed from: k  reason: collision with root package name */
    private static final a.g f55177k;

    /* renamed from: l  reason: collision with root package name */
    private static final a.AbstractC0316a f55178l;

    /* renamed from: m  reason: collision with root package name */
    private static final ff.a f55179m;

    static {
        a.g gVar = new a.g();
        f55177k = gVar;
        c cVar = new c();
        f55178l = cVar;
        f55179m = new ff.a("SmsRetriever.API", cVar, gVar);
    }

    public b(Context context) {
        super(context, f55179m, a.d.f23724g, d.a.f23736c);
    }

    public abstract Task C();
}
