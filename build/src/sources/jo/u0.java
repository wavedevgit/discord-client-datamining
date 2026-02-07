package jo;

import com.withpersona.sdk2.inquiry.governmentid.network.AutoClassifyResponse;
import java.util.Set;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class u0 {

    /* renamed from: a  reason: collision with root package name */
    public static final a f30726a = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final Set a() {
            return kotlin.collections.x0.c(AutoClassifyResponse.f18602a.a());
        }

        public final Set b(i0 governmentIdCameraScreenViewFactory) {
            Intrinsics.checkNotNullParameter(governmentIdCameraScreenViewFactory, "governmentIdCameraScreenViewFactory");
            return kotlin.collections.x0.i(p0.f30666f, governmentIdCameraScreenViewFactory, g1.f30256f, s1.f30696d, hn.c.f26227q, bq.n.f6994i, ko.f0.f32005d);
        }

        private a() {
        }
    }

    public static final Set a() {
        return f30726a.a();
    }

    public static final Set b(i0 i0Var) {
        return f30726a.b(i0Var);
    }
}
