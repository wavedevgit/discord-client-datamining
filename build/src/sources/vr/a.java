package vr;

import kotlin.random.c;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends ur.a {

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: vr.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0684a {
        @NotNull

        /* renamed from: a  reason: collision with root package name */
        public static final C0684a f51744a = new C0684a();

        /* renamed from: b  reason: collision with root package name */
        public static final Integer f51745b;

        static {
            Integer num;
            Object obj;
            Integer num2 = null;
            try {
                obj = Class.forName("android.os.Build$VERSION").getField("SDK_INT").get(null);
            } catch (Throwable unused) {
            }
            if (obj instanceof Integer) {
                num = (Integer) obj;
                if (num != null && num.intValue() > 0) {
                    num2 = num;
                }
                f51745b = num2;
            }
            num = null;
            if (num != null) {
                num2 = num;
            }
            f51745b = num2;
        }

        private C0684a() {
        }
    }

    private final boolean c(int i10) {
        Integer num = C0684a.f51745b;
        if (num != null && num.intValue() < i10) {
            return false;
        }
        return true;
    }

    @Override // tr.a
    public c b() {
        if (c(34)) {
            return new bs.a();
        }
        return super.b();
    }
}
