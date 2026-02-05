package ho;

import com.withpersona.sdk2.inquiry.governmentid.network.AutoClassifyResponse;
import java.util.Set;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class u0 {

    /* renamed from: a  reason: collision with root package name */
    public static final a f26682a = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final Set a() {
            return kotlin.collections.x0.c(AutoClassifyResponse.f18622b.a());
        }

        public final Set b(i0 governmentIdCameraScreenViewFactory) {
            Intrinsics.checkNotNullParameter(governmentIdCameraScreenViewFactory, "governmentIdCameraScreenViewFactory");
            return kotlin.collections.x0.i(p0.f26622f, governmentIdCameraScreenViewFactory, g1.f26212f, s1.f26652d, fn.c.f23154q, zp.n.f56165i, io.f0.f27667d);
        }

        private a() {
        }
    }

    public static final Set a() {
        return f26682a.a();
    }

    public static final Set b(i0 i0Var) {
        return f26682a.b(i0Var);
    }
}
