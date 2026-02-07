package vv;

import java.util.concurrent.Executor;
import vv.c;
import vv.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class v {

    /* renamed from: a  reason: collision with root package name */
    static final Executor f53192a;

    /* renamed from: b  reason: collision with root package name */
    static final w f53193b;

    /* renamed from: c  reason: collision with root package name */
    static final c f53194c;

    static {
        String property = System.getProperty("java.vm.name");
        property.getClass();
        if (!property.equals("RoboVM")) {
            if (!property.equals("Dalvik")) {
                f53192a = null;
                f53193b = new w.b();
                f53194c = new c.a();
                return;
            }
            f53192a = new a();
            f53193b = new w.a();
            f53194c = new c.a();
            return;
        }
        f53192a = null;
        f53193b = new w();
        f53194c = new c();
    }
}
