package vp;

import jr.l;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private static final Lazy f51505a = l.b(new Function0() { // from class: vp.a
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            boolean c10;
            c10 = b.c();
            return Boolean.valueOf(c10);
        }
    });

    public static final boolean b() {
        return ((Boolean) f51505a.getValue()).booleanValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean c() {
        try {
            Class.forName("androidx.test.espresso.Espresso");
            return true;
        } catch (ClassNotFoundException unused) {
            return false;
        }
    }
}
