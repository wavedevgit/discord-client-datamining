package ko;

import com.withpersona.sdk2.inquiry.governmentid.network.AutoClassifyResponse;
import java.util.Set;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class u0 {

    /* renamed from: a  reason: collision with root package name */
    public static final a f31677a = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final Set a() {
            return kotlin.collections.x0.c(AutoClassifyResponse.f18742a.a());
        }

        public final Set b(i0 governmentIdCameraScreenViewFactory) {
            Intrinsics.checkNotNullParameter(governmentIdCameraScreenViewFactory, "governmentIdCameraScreenViewFactory");
            return kotlin.collections.x0.i(p0.f31617f, governmentIdCameraScreenViewFactory, g1.f31207f, s1.f31647d, in.c.f27042q, cq.n.f20149i, lo.f0.f36225d);
        }

        private a() {
        }
    }

    public static final Set a() {
        return f31677a.a();
    }

    public static final Set b(i0 i0Var) {
        return f31677a.b(i0Var);
    }
}
