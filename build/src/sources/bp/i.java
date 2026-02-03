package bp;

import androidx.activity.result.ActivityResultCallback;
import kotlin.jvm.internal.Intrinsics;
import xo.f0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class i {
    public static final f0 b() {
        return new f0(new f(), new ActivityResultCallback() { // from class: bp.h
            @Override // androidx.activity.result.ActivityResultCallback
            public final void a(Object obj) {
                i.c((k) obj);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void c(k result) {
        Intrinsics.checkNotNullParameter(result, "result");
        new l().a(result);
    }
}
