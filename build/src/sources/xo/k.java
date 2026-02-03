package xo;

import androidx.activity.result.ActivityResultCallback;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class k {
    public static final f0 d() {
        return new f0(new androidx.activity.result.contract.c(), new ActivityResultCallback() { // from class: xo.i
            @Override // androidx.activity.result.ActivityResultCallback
            public final void a(Object obj) {
                k.e((List) obj);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void e(List uriList) {
        Intrinsics.checkNotNullParameter(uriList, "uriList");
        new t().a(uriList);
    }

    public static final f0 f() {
        return new f0(new androidx.activity.result.contract.d(0, 1, null), new ActivityResultCallback() { // from class: xo.h
            @Override // androidx.activity.result.ActivityResultCallback
            public final void a(Object obj) {
                k.g((List) obj);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void g(List uriList) {
        Intrinsics.checkNotNullParameter(uriList, "uriList");
        new t().a(uriList);
    }

    public static final f0 h() {
        return new f0(new androidx.activity.result.contract.h(), new ActivityResultCallback() { // from class: xo.j
            @Override // androidx.activity.result.ActivityResultCallback
            public final void a(Object obj) {
                k.i(((Boolean) obj).booleanValue());
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void i(boolean z10) {
        new y().a(z10);
    }
}
