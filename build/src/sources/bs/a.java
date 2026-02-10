package bs;

import kotlin.random.c;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends as.a {

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: bs.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0138a {
        @NotNull

        /* renamed from: a  reason: collision with root package name */
        public static final C0138a f7208a = new C0138a();

        /* renamed from: b  reason: collision with root package name */
        public static final Integer f7209b;

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
                f7209b = num2;
            }
            num = null;
            if (num != null) {
                num2 = num;
            }
            f7209b = num2;
        }

        private C0138a() {
        }
    }

    private final boolean c(int i10) {
        Integer num = C0138a.f7209b;
        if (num != null && num.intValue() < i10) {
            return false;
        }
        return true;
    }

    @Override // zr.a
    public c b() {
        if (c(34)) {
            return new hs.a();
        }
        return super.b();
    }
}
