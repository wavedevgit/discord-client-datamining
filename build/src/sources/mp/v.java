package mp;

import android.view.Window;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class v {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f39048a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f39049b;

    public v() {
        this(false, false, 3, null);
    }

    public final i a(q fileHelper) {
        Intrinsics.checkNotNullParameter(fileHelper, "fileHelper");
        return fileHelper;
    }

    public final sp.a b(sp.b imageHelper) {
        Intrinsics.checkNotNullParameter(imageHelper, "imageHelper");
        return imageHelper;
    }

    public final vp.a c(Window window) {
        Intrinsics.checkNotNullParameter(window, "window");
        return new vp.a(window, this.f39048a, this.f39049b);
    }

    public v(boolean z10, boolean z11) {
        this.f39048a = z10;
        this.f39049b = z11;
    }

    public /* synthetic */ v(boolean z10, boolean z11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? true : z10, (i10 & 2) != 0 ? true : z11);
    }
}
