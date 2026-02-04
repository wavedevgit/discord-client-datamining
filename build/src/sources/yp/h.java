package yp;

import android.view.View;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final i f55243a;

    /* renamed from: b  reason: collision with root package name */
    private final View f55244b;

    /* renamed from: c  reason: collision with root package name */
    private final View f55245c;

    public h(i viewBindings, View contentView, View view) {
        Intrinsics.checkNotNullParameter(viewBindings, "viewBindings");
        Intrinsics.checkNotNullParameter(contentView, "contentView");
        this.f55243a = viewBindings;
        this.f55244b = contentView;
        this.f55245c = view;
    }

    public final View a() {
        return this.f55244b;
    }

    public final View b() {
        return this.f55245c;
    }

    public final i c() {
        return this.f55243a;
    }
}
