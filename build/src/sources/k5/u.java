package k5;

import android.content.Context;
import y4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class u {

    /* renamed from: a  reason: collision with root package name */
    public static final u f33055a = new u();

    /* renamed from: b  reason: collision with root package name */
    private static y4.a f33056b;

    private u() {
    }

    public final synchronized y4.a a(Context context) {
        y4.a aVar;
        aVar = f33056b;
        if (aVar == null) {
            aVar = new a.C0750a().c(tr.j.x(k.m(context), "image_cache")).a();
            f33056b = aVar;
        }
        return aVar;
    }
}
