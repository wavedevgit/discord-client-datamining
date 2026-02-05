package ap;

import androidx.activity.result.ActivityResultCallback;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class w {
    public static final f0 b() {
        return g0.a(new androidx.activity.result.contract.g(), new ActivityResultCallback() { // from class: ap.v
            @Override // androidx.activity.result.ActivityResultCallback
            public final void a(Object obj) {
                w.c(((Boolean) obj).booleanValue());
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void c(boolean z10) {
        new z().a(z10);
    }
}
