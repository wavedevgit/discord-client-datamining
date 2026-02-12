package un;

import android.view.View;
import android.view.ViewGroup;
import android.widget.ScrollView;
import com.swmansion.rnscreens.ScreenStack;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    public static final f f50811a = new f();

    private f() {
    }

    public final ScreenStack a(View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        while (view != null) {
            if (view instanceof ScreenStack) {
                return (ScreenStack) view;
            }
            if (view instanceof ViewGroup) {
                ViewGroup viewGroup = (ViewGroup) view;
                if (viewGroup.getChildCount() != 0) {
                    view = viewGroup.getChildAt(0);
                } else {
                    return null;
                }
            } else {
                return null;
            }
        }
        return null;
    }

    public final ScrollView b(View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        while (view != null) {
            if (view instanceof ScrollView) {
                return (ScrollView) view;
            }
            if (view instanceof ViewGroup) {
                ViewGroup viewGroup = (ViewGroup) view;
                if (viewGroup.getChildCount() != 0) {
                    view = viewGroup.getChildAt(0);
                } else {
                    return null;
                }
            } else {
                return null;
            }
        }
        return null;
    }
}
