package js;

import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends is.a {

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: js.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0436a {
        @NotNull

        /* renamed from: a  reason: collision with root package name */
        public static final C0436a f31319a = new C0436a();

        /* renamed from: b  reason: collision with root package name */
        public static final Integer f31320b;

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
                f31320b = num2;
            }
            num = null;
            if (num != null) {
                num2 = num;
            }
            f31320b = num2;
        }

        private C0436a() {
        }
    }

    private final boolean c(int i10) {
        Integer num = C0436a.f31320b;
        if (num != null && num.intValue() < i10) {
            return false;
        }
        return true;
    }

    @Override // is.a
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
