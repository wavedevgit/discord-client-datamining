package fw;

import fw.c;
import fw.w;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class v {

    /* renamed from: a  reason: collision with root package name */
    static final Executor f24544a;

    /* renamed from: b  reason: collision with root package name */
    static final w f24545b;

    /* renamed from: c  reason: collision with root package name */
    static final c f24546c;

    static {
        String property = System.getProperty("java.vm.name");
        property.getClass();
        if (!property.equals("RoboVM")) {
            if (!property.equals("Dalvik")) {
                f24544a = null;
                f24545b = new w.b();
                f24546c = new c.a();
                return;
            }
            f24544a = new a();
            f24545b = new w.a();
            f24546c = new c.a();
            return;
        }
        f24544a = null;
        f24545b = new w();
        f24546c = new c();
    }
}
