package eo;

import com.withpersona.sdk2.inquiry.governmentid.network.AutoClassifyResponse;
import java.util.Set;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class u0 {

    /* renamed from: a  reason: collision with root package name */
    public static final a f22370a = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final Set a() {
            return kotlin.collections.x0.c(AutoClassifyResponse.f18216a.a());
        }

        public final Set b(i0 governmentIdCameraScreenViewFactory) {
            Intrinsics.checkNotNullParameter(governmentIdCameraScreenViewFactory, "governmentIdCameraScreenViewFactory");
            return kotlin.collections.x0.i(p0.f22310f, governmentIdCameraScreenViewFactory, g1.f21900f, s1.f22340d, cn.c.f7340q, wp.n.f52636i, fo.f0.f24275d);
        }

        private a() {
        }
    }

    public static final Set a() {
        return f22370a.a();
    }

    public static final Set b(i0 i0Var) {
        return f22370a.b(i0Var);
    }
}
