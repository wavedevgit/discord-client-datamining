package we;

import android.content.Context;
import com.google.android.gms.tasks.Task;
import ef.a;
import ef.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b extends d {

    /* renamed from: k  reason: collision with root package name */
    private static final a.g f52010k;

    /* renamed from: l  reason: collision with root package name */
    private static final a.AbstractC0301a f52011l;

    /* renamed from: m  reason: collision with root package name */
    private static final ef.a f52012m;

    static {
        a.g gVar = new a.g();
        f52010k = gVar;
        c cVar = new c();
        f52011l = cVar;
        f52012m = new ef.a("SmsRetriever.API", cVar, gVar);
    }

    public b(Context context) {
        super(context, f52012m, a.d.f22794c, d.a.f22806c);
    }

    public abstract Task C();
}
