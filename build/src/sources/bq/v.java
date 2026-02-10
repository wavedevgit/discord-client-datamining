package bq;

import android.view.Window;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class v {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f7448a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f7449b;

    public v() {
        this(false, false, 3, null);
    }

    public final i a(q fileHelper) {
        Intrinsics.checkNotNullParameter(fileHelper, "fileHelper");
        return fileHelper;
    }

    public final hq.a b(hq.b imageHelper) {
        Intrinsics.checkNotNullParameter(imageHelper, "imageHelper");
        return imageHelper;
    }

    public final kq.a c(Window window) {
        Intrinsics.checkNotNullParameter(window, "window");
        return new kq.a(window, this.f7448a, this.f7449b);
    }

    public v(boolean z10, boolean z11) {
        this.f7448a = z10;
        this.f7449b = z11;
    }

    public /* synthetic */ v(boolean z10, boolean z11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? true : z10, (i10 & 2) != 0 ? true : z11);
    }
}
