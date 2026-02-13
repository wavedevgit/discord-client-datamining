package k5;

import android.content.Context;
import y4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class u {

    /* renamed from: a  reason: collision with root package name */
    public static final u f32149a = new u();

    /* renamed from: b  reason: collision with root package name */
    private static y4.a f32150b;

    private u() {
    }

    public final synchronized y4.a a(Context context) {
        y4.a aVar;
        aVar = f32150b;
        if (aVar == null) {
            aVar = new a.C0772a().c(ls.j.x(k.m(context), "image_cache")).a();
            f32150b = aVar;
        }
        return aVar;
    }
}
