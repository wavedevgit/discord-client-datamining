package pn;

import android.view.View;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.w;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements w {

    /* renamed from: d  reason: collision with root package name */
    private final List f42801d = new ArrayList();

    @Override // androidx.core.view.w
    public WindowInsetsCompat a(View v10, WindowInsetsCompat insets) {
        Intrinsics.checkNotNullParameter(v10, "v");
        Intrinsics.checkNotNullParameter(insets, "insets");
        for (w wVar : this.f42801d) {
            wVar.a(v10, insets);
        }
        return insets;
    }

    public final void b(w listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        this.f42801d.add(listener);
    }
}
