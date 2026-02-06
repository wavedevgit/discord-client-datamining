package we;

import android.content.Context;
import com.google.android.gms.tasks.Task;
import ef.a;
import ef.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b extends d {

    /* renamed from: k  reason: collision with root package name */
    private static final a.g f53665k;

    /* renamed from: l  reason: collision with root package name */
    private static final a.AbstractC0286a f53666l;

    /* renamed from: m  reason: collision with root package name */
    private static final ef.a f53667m;

    static {
        a.g gVar = new a.g();
        f53665k = gVar;
        c cVar = new c();
        f53666l = cVar;
        f53667m = new ef.a("SmsRetriever.API", cVar, gVar);
    }

    public b(Context context) {
        super(context, f53667m, a.d.f21490c, d.a.f21502c);
    }

    public abstract Task C();
}
