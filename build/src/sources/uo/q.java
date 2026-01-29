package uo;

import android.net.Uri;
import androidx.activity.result.ActivityResultCallback;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class q {
    public static final f0 b() {
        return new f0(new androidx.activity.result.contract.b(), new ActivityResultCallback() { // from class: uo.p
            @Override // androidx.activity.result.ActivityResultCallback
            public final void a(Object obj) {
                q.c((Uri) obj);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void c(Uri uri) {
        new s().c(uri);
    }
}
