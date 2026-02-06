package vv;

import java.util.concurrent.Executor;
import vv.c;
import vv.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class v {

    /* renamed from: a  reason: collision with root package name */
    static final Executor f53144a;

    /* renamed from: b  reason: collision with root package name */
    static final w f53145b;

    /* renamed from: c  reason: collision with root package name */
    static final c f53146c;

    static {
        String property = System.getProperty("java.vm.name");
        property.getClass();
        if (!property.equals("RoboVM")) {
            if (!property.equals("Dalvik")) {
                f53144a = null;
                f53145b = new w.b();
                f53146c = new c.a();
                return;
            }
            f53144a = new a();
            f53145b = new w.a();
            f53146c = new c.a();
            return;
        }
        f53144a = null;
        f53145b = new w();
        f53146c = new c();
    }
}
