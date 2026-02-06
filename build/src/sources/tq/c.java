package tq;

import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import qr.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    private static final Lazy f50807a = l.a(new Function0() { // from class: tq.b
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            boolean e10;
            e10 = c.e();
            return Boolean.valueOf(e10);
        }
    });

    public static final a b() {
        Class c10 = c();
        if (c10 != null) {
            c10.newInstance();
            return null;
        }
        return null;
    }

    private static final Class c() {
        try {
            return Class.forName("com.withpersona.sdk2.inquiry.webrtc.impl.WebRtcManager");
        } catch (ClassNotFoundException unused) {
            return null;
        }
    }

    public static final boolean d() {
        return ((Boolean) f50807a.getValue()).booleanValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean e() {
        if (c() != null) {
            return true;
        }
        return false;
    }
}
