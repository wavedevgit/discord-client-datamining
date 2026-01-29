package pm;

import android.view.MotionEvent;
import com.facebook.react.uimanager.RootView;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface g extends RootView {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public static void a(g gVar, MotionEvent ev2) {
            Intrinsics.checkNotNullParameter(ev2, "ev");
            gVar.onChildStartedNativeGesture(null, ev2);
        }
    }
}
