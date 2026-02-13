package to;

import com.withpersona.sdk2.inquiry.governmentid.network.AutoClassifyResponse;
import java.util.Set;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class u0 {

    /* renamed from: a  reason: collision with root package name */
    public static final a f50238a = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final Set a() {
            return kotlin.collections.x0.c(AutoClassifyResponse.f19623b.a());
        }

        public final Set b(i0 governmentIdCameraScreenViewFactory) {
            Intrinsics.checkNotNullParameter(governmentIdCameraScreenViewFactory, "governmentIdCameraScreenViewFactory");
            return kotlin.collections.x0.i(p0.f50178f, governmentIdCameraScreenViewFactory, g1.f49768f, s1.f50208d, kn.c.f32499q, lq.n.f36556i, uo.f0.f51399d);
        }

        private a() {
        }
    }

    public static final Set a() {
        return f50238a.a();
    }

    public static final Set b(i0 i0Var) {
        return f50238a.b(i0Var);
    }
}
