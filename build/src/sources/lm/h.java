package lm;

import android.view.ViewGroup;
import android.view.ViewParent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class h {
    public static final void a(ViewGroup viewGroup) {
        ViewGroup viewGroup2;
        if (viewGroup != null) {
            ViewParent parent = viewGroup.getParent();
            if (parent instanceof ViewGroup) {
                viewGroup2 = (ViewGroup) parent;
            } else {
                viewGroup2 = null;
            }
            if (viewGroup2 == null) {
                return;
            }
            viewGroup2.removeView(viewGroup);
        }
    }
}
