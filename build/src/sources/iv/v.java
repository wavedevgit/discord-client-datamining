package iv;

import iv.c;
import iv.w;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class v {

    /* renamed from: a  reason: collision with root package name */
    static final Executor f31456a;

    /* renamed from: b  reason: collision with root package name */
    static final w f31457b;

    /* renamed from: c  reason: collision with root package name */
    static final c f31458c;

    static {
        String property = System.getProperty("java.vm.name");
        property.getClass();
        if (!property.equals("RoboVM")) {
            if (!property.equals("Dalvik")) {
                f31456a = null;
                f31457b = new w.b();
                f31458c = new c.a();
                return;
            }
            f31456a = new a();
            f31457b = new w.a();
            f31458c = new c.a();
            return;
        }
        f31456a = null;
        f31457b = new w();
        f31458c = new c();
    }
}
