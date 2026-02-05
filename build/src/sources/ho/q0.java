package ho;

import android.widget.TextView;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class q0 {
    public static final /* synthetic */ void a(TextView textView, String str) {
        b(textView, str);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void b(TextView textView, String str) {
        if (StringsKt.k0(str)) {
            textView.setVisibility(8);
        } else {
            textView.setText(str);
        }
    }
}
