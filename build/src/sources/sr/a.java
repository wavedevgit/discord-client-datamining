package sr;

import kotlin.random.c;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends rr.a {

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: sr.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0629a {
        @NotNull

        /* renamed from: a  reason: collision with root package name */
        public static final C0629a f49137a = new C0629a();

        /* renamed from: b  reason: collision with root package name */
        public static final Integer f49138b;

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
                f49138b = num2;
            }
            num = null;
            if (num != null) {
                num2 = num;
            }
            f49138b = num2;
        }

        private C0629a() {
        }
    }

    private final boolean c(int i10) {
        Integer num = C0629a.f49138b;
        if (num != null && num.intValue() < i10) {
            return false;
        }
        return true;
    }

    @Override // qr.a
    public c b() {
        if (c(34)) {
            return new yr.a();
        }
        return super.b();
    }
}
