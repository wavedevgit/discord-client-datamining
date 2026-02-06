package as;

import kotlin.random.c;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends zr.a {

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: as.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0087a {
        @NotNull

        /* renamed from: a  reason: collision with root package name */
        public static final C0087a f6282a = new C0087a();

        /* renamed from: b  reason: collision with root package name */
        public static final Integer f6283b;

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
                f6283b = num2;
            }
            num = null;
            if (num != null) {
                num2 = num;
            }
            f6283b = num2;
        }

        private C0087a() {
        }
    }

    private final boolean c(int i10) {
        Integer num = C0087a.f6283b;
        if (num != null && num.intValue() < i10) {
            return false;
        }
        return true;
    }

    @Override // yr.a
    public c b() {
        if (c(34)) {
            return new gs.a();
        }
        return super.b();
    }
}
