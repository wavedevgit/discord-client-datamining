package fn;

import android.app.Dialog;
import android.view.View;
import android.view.Window;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class h {
    /* JADX INFO: Access modifiers changed from: private */
    public static final View b(Dialog dialog) {
        Window window = dialog.getWindow();
        if (window == null) {
            return null;
        }
        return window.getDecorView();
    }
}
