package we;

import android.content.Context;
import com.google.android.gms.tasks.Task;
import ef.a;
import ef.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b extends d {

    /* renamed from: k  reason: collision with root package name */
    private static final a.g f53713k;

    /* renamed from: l  reason: collision with root package name */
    private static final a.AbstractC0286a f53714l;

    /* renamed from: m  reason: collision with root package name */
    private static final ef.a f53715m;

    static {
        a.g gVar = new a.g();
        f53713k = gVar;
        c cVar = new c();
        f53714l = cVar;
        f53715m = new ef.a("SmsRetriever.API", cVar, gVar);
    }

    public b(Context context) {
        super(context, f53715m, a.d.f21490c, d.a.f21502c);
    }

    public abstract Task C();
}
