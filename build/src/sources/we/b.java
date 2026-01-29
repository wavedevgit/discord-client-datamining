package we;

import android.content.Context;
import com.google.android.gms.tasks.Task;
import ef.a;
import ef.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b extends d {

    /* renamed from: k  reason: collision with root package name */
    private static final a.g f52427k;

    /* renamed from: l  reason: collision with root package name */
    private static final a.AbstractC0290a f52428l;

    /* renamed from: m  reason: collision with root package name */
    private static final ef.a f52429m;

    static {
        a.g gVar = new a.g();
        f52427k = gVar;
        c cVar = new c();
        f52428l = cVar;
        f52429m = new ef.a("SmsRetriever.API", cVar, gVar);
    }

    public b(Context context) {
        super(context, f52429m, a.d.f22762c, d.a.f22774c);
    }

    public abstract Task C();
}
