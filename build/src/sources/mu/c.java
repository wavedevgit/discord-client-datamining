package mu;

import java.util.List;
import javax.net.ssl.X509TrustManager;
import ju.h;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    public static final a f38970a = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final c a(X509TrustManager trustManager) {
            Intrinsics.checkNotNullParameter(trustManager, "trustManager");
            return h.f31441a.g().c(trustManager);
        }

        private a() {
        }
    }

    public abstract List a(List list, String str);
}
