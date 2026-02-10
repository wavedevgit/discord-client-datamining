package wv;

import java.util.concurrent.Executor;
import wv.c;
import wv.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class v {

    /* renamed from: a  reason: collision with root package name */
    static final Executor f54219a;

    /* renamed from: b  reason: collision with root package name */
    static final w f54220b;

    /* renamed from: c  reason: collision with root package name */
    static final c f54221c;

    static {
        String property = System.getProperty("java.vm.name");
        property.getClass();
        if (!property.equals("RoboVM")) {
            if (!property.equals("Dalvik")) {
                f54219a = null;
                f54220b = new w.b();
                f54221c = new c.a();
                return;
            }
            f54219a = new a();
            f54220b = new w.a();
            f54221c = new c.a();
            return;
        }
        f54219a = null;
        f54220b = new w();
        f54221c = new c();
    }
}
