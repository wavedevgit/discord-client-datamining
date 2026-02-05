package we;

import android.content.Context;
import com.google.android.gms.tasks.Task;
import ef.a;
import ef.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b extends d {

    /* renamed from: k  reason: collision with root package name */
    private static final a.g f52886k;

    /* renamed from: l  reason: collision with root package name */
    private static final a.AbstractC0294a f52887l;

    /* renamed from: m  reason: collision with root package name */
    private static final ef.a f52888m;

    static {
        a.g gVar = new a.g();
        f52886k = gVar;
        c cVar = new c();
        f52887l = cVar;
        f52888m = new ef.a("SmsRetriever.API", cVar, gVar);
    }

    public b(Context context) {
        super(context, f52888m, a.d.f21557f, d.a.f21569c);
    }

    public abstract Task C();
}
