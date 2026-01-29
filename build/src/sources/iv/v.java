package iv;

import iv.c;
import iv.w;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class v {

    /* renamed from: a  reason: collision with root package name */
    static final Executor f31440a;

    /* renamed from: b  reason: collision with root package name */
    static final w f31441b;

    /* renamed from: c  reason: collision with root package name */
    static final c f31442c;

    static {
        String property = System.getProperty("java.vm.name");
        property.getClass();
        if (!property.equals("RoboVM")) {
            if (!property.equals("Dalvik")) {
                f31440a = null;
                f31441b = new w.b();
                f31442c = new c.a();
                return;
            }
            f31440a = new a();
            f31441b = new w.a();
            f31442c = new c.a();
            return;
        }
        f31440a = null;
        f31441b = new w();
        f31442c = new c();
    }
}
