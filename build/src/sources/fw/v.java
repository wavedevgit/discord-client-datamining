package fw;

import fw.c;
import fw.w;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class v {

    /* renamed from: a  reason: collision with root package name */
    static final Executor f24545a;

    /* renamed from: b  reason: collision with root package name */
    static final w f24546b;

    /* renamed from: c  reason: collision with root package name */
    static final c f24547c;

    static {
        String property = System.getProperty("java.vm.name");
        property.getClass();
        if (!property.equals("RoboVM")) {
            if (!property.equals("Dalvik")) {
                f24545a = null;
                f24546b = new w.b();
                f24547c = new c.a();
                return;
            }
            f24545a = new a();
            f24546b = new w.a();
            f24547c = new c.a();
            return;
        }
        f24545a = null;
        f24546b = new w();
        f24547c = new c();
    }
}
