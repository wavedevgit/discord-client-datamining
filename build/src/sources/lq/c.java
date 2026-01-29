package lq;

import ir.l;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    private static final Lazy f37424a = l.b(new Function0() { // from class: lq.b
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
        return ((Boolean) f37424a.getValue()).booleanValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean e() {
        if (c() != null) {
            return true;
        }
        return false;
    }
}
