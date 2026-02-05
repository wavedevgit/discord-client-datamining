package ov;

import java.util.concurrent.Executor;
import ov.c;
import ov.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class v {

    /* renamed from: a  reason: collision with root package name */
    static final Executor f44699a;

    /* renamed from: b  reason: collision with root package name */
    static final w f44700b;

    /* renamed from: c  reason: collision with root package name */
    static final c f44701c;

    static {
        String property = System.getProperty("java.vm.name");
        property.getClass();
        if (!property.equals("RoboVM")) {
            if (!property.equals("Dalvik")) {
                f44699a = null;
                f44700b = new w.b();
                f44701c = new c.a();
                return;
            }
            f44699a = new a();
            f44700b = new w.a();
            f44701c = new c.a();
            return;
        }
        f44699a = null;
        f44700b = new w();
        f44701c = new c();
    }
}
