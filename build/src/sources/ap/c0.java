package ap;

import androidx.activity.result.ActivityResultCallback;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c0 {
    public static final f0 b() {
        return new f0(new e.b(), new ActivityResultCallback() { // from class: ap.b0
            @Override // androidx.activity.result.ActivityResultCallback
            public final void a(Object obj) {
                c0.c((d.a) obj);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void c(d.a success) {
        Intrinsics.checkNotNullParameter(success, "success");
        new e0().a(success);
    }
}
