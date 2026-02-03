package jv;

import java.util.concurrent.Executor;
import jv.c;
import jv.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class v {

    /* renamed from: a  reason: collision with root package name */
    static final Executor f32553a;

    /* renamed from: b  reason: collision with root package name */
    static final w f32554b;

    /* renamed from: c  reason: collision with root package name */
    static final c f32555c;

    static {
        String property = System.getProperty("java.vm.name");
        property.getClass();
        if (!property.equals("RoboVM")) {
            if (!property.equals("Dalvik")) {
                f32553a = null;
                f32554b = new w.b();
                f32555c = new c.a();
                return;
            }
            f32553a = new a();
            f32554b = new w.a();
            f32555c = new c.a();
            return;
        }
        f32553a = null;
        f32554b = new w();
        f32555c = new c();
    }
}
