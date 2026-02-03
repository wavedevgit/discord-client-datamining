package lv;

import java.util.concurrent.Executor;
import lv.c;
import lv.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class v {

    /* renamed from: a  reason: collision with root package name */
    static final Executor f37491a;

    /* renamed from: b  reason: collision with root package name */
    static final w f37492b;

    /* renamed from: c  reason: collision with root package name */
    static final c f37493c;

    static {
        String property = System.getProperty("java.vm.name");
        property.getClass();
        if (!property.equals("RoboVM")) {
            if (!property.equals("Dalvik")) {
                f37491a = null;
                f37492b = new w.b();
                f37493c = new c.a();
                return;
            }
            f37491a = new a();
            f37492b = new w.a();
            f37493c = new c.a();
            return;
        }
        f37491a = null;
        f37492b = new w();
        f37493c = new c();
    }
}
