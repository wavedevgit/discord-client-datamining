package np;

import java.util.Set;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class n1 {

    /* renamed from: a  reason: collision with root package name */
    public static final a f39295a = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final Set a(o0 oldSelfieCameraScreenViewFactory, f1 selfieCameraScreenViewFactory) {
            Intrinsics.checkNotNullParameter(oldSelfieCameraScreenViewFactory, "oldSelfieCameraScreenViewFactory");
            Intrinsics.checkNotNullParameter(selfieCameraScreenViewFactory, "selfieCameraScreenViewFactory");
            return kotlin.collections.x0.i(l1.f39217d, oldSelfieCameraScreenViewFactory, selfieCameraScreenViewFactory, c2.f39080d, p1.f39330c, u1.f39415f);
        }

        private a() {
        }
    }

    public static final Set a(o0 o0Var, f1 f1Var) {
        return f39295a.a(o0Var, f1Var);
    }
}
