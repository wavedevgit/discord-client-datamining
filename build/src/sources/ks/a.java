package ks;

import kotlin.random.c;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends js.a {

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: ks.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0465a {
        @NotNull

        /* renamed from: a  reason: collision with root package name */
        public static final C0465a f35734a = new C0465a();

        /* renamed from: b  reason: collision with root package name */
        public static final Integer f35735b;

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
                f35735b = num2;
            }
            num = null;
            if (num != null) {
                num2 = num;
            }
            f35735b = num2;
        }

        private C0465a() {
        }
    }

    private final boolean c(int i10) {
        Integer num = C0465a.f35735b;
        if (num != null && num.intValue() < i10) {
            return false;
        }
        return true;
    }

    @Override // is.a
    public c b() {
        if (c(34)) {
            return new qs.a();
        }
        return super.b();
    }
}
