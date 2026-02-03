package sm;

import android.view.MotionEvent;
import com.facebook.react.uimanager.RootView;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface h extends RootView {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public static void a(h hVar, MotionEvent ev2) {
            Intrinsics.checkNotNullParameter(ev2, "ev");
            hVar.onChildStartedNativeGesture(null, ev2);
        }
    }
}
