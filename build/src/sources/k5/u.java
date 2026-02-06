package k5;

import android.content.Context;
import y4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class u {

    /* renamed from: a  reason: collision with root package name */
    public static final u f31506a = new u();

    /* renamed from: b  reason: collision with root package name */
    private static y4.a f31507b;

    private u() {
    }

    public final synchronized y4.a a(Context context) {
        y4.a aVar;
        aVar = f31507b;
        if (aVar == null) {
            aVar = new a.C0739a().b(bs.j.x(k.m(context), "image_cache")).a();
            f31507b = aVar;
        }
        return aVar;
    }
}
