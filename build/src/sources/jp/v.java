package jp;

import android.view.Window;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class v {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f32386a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f32387b;

    public v() {
        this(false, false, 3, null);
    }

    public final i a(q fileHelper) {
        Intrinsics.checkNotNullParameter(fileHelper, "fileHelper");
        return fileHelper;
    }

    public final pp.a b(pp.b imageHelper) {
        Intrinsics.checkNotNullParameter(imageHelper, "imageHelper");
        return imageHelper;
    }

    public final sp.a c(Window window) {
        Intrinsics.checkNotNullParameter(window, "window");
        return new sp.a(window, this.f32386a, this.f32387b);
    }

    public v(boolean z10, boolean z11) {
        this.f32386a = z10;
        this.f32387b = z11;
    }

    public /* synthetic */ v(boolean z10, boolean z11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? true : z10, (i10 & 2) != 0 ? true : z11);
    }
}
