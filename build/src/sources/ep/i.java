package ep;

import androidx.activity.result.ActivityResultCallback;
import ap.f0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class i {
    public static final f0 b() {
        return new f0(new f(), new ActivityResultCallback() { // from class: ep.h
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
