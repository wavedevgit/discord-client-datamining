package fp;

import java.util.Set;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class n1 {

    /* renamed from: a  reason: collision with root package name */
    public static final a f24818a = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final Set a(o0 oldSelfieCameraScreenViewFactory, f1 selfieCameraScreenViewFactory) {
            Intrinsics.checkNotNullParameter(oldSelfieCameraScreenViewFactory, "oldSelfieCameraScreenViewFactory");
            Intrinsics.checkNotNullParameter(selfieCameraScreenViewFactory, "selfieCameraScreenViewFactory");
            return kotlin.collections.x0.i(l1.f24740d, oldSelfieCameraScreenViewFactory, selfieCameraScreenViewFactory, c2.f24603d, p1.f24853c, u1.f24938f);
        }

        private a() {
        }
    }

    public static final Set a(o0 o0Var, f1 f1Var) {
        return f24818a.a(o0Var, f1Var);
    }
}
