package ur;

import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends tr.a {

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: ur.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0650a {
        @NotNull

        /* renamed from: a  reason: collision with root package name */
        public static final C0650a f50858a = new C0650a();

        /* renamed from: b  reason: collision with root package name */
        public static final Integer f50859b;

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
                f50859b = num2;
            }
            num = null;
            if (num != null) {
                num2 = num;
            }
            f50859b = num2;
        }

        private C0650a() {
        }
    }

    private final boolean c(int i10) {
        Integer num = C0650a.f50859b;
        if (num != null && num.intValue() < i10) {
            return false;
        }
        return true;
    }

    @Override // tr.a
    public void a(Throwable cause, Throwable exception) {
        Intrinsics.checkNotNullParameter(cause, "cause");
        Intrinsics.checkNotNullParameter(exception, "exception");
        if (c(19)) {
            cause.addSuppressed(exception);
        } else {
            super.a(cause, exception);
        }
    }
}
