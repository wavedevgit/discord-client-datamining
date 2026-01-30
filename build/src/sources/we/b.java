package we;

import android.content.Context;
import com.google.android.gms.tasks.Task;
import ef.a;
import ef.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b extends d {

    /* renamed from: k  reason: collision with root package name */
    private static final a.g f52443k;

    /* renamed from: l  reason: collision with root package name */
    private static final a.AbstractC0290a f52444l;

    /* renamed from: m  reason: collision with root package name */
    private static final ef.a f52445m;

    static {
        a.g gVar = new a.g();
        f52443k = gVar;
        c cVar = new c();
        f52444l = cVar;
        f52445m = new ef.a("SmsRetriever.API", cVar, gVar);
    }

    public b(Context context) {
        super(context, f52445m, a.d.f22762c, d.a.f22774c);
    }

    public abstract Task C();
}
