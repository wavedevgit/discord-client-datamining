package we;

import android.content.Context;
import com.google.android.gms.tasks.Task;
import ef.a;
import ef.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b extends d {

    /* renamed from: k  reason: collision with root package name */
    private static final a.g f52232k;

    /* renamed from: l  reason: collision with root package name */
    private static final a.AbstractC0279a f52233l;

    /* renamed from: m  reason: collision with root package name */
    private static final ef.a f52234m;

    static {
        a.g gVar = new a.g();
        f52232k = gVar;
        c cVar = new c();
        f52233l = cVar;
        f52234m = new ef.a("SmsRetriever.API", cVar, gVar);
    }

    public b(Context context) {
        super(context, f52234m, a.d.f21485c, d.a.f21497c);
    }

    public abstract Task C();
}
