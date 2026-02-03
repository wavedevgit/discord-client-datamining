package yp;

import android.view.View;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final i f55246a;

    /* renamed from: b  reason: collision with root package name */
    private final View f55247b;

    /* renamed from: c  reason: collision with root package name */
    private final View f55248c;

    public h(i viewBindings, View contentView, View view) {
        Intrinsics.checkNotNullParameter(viewBindings, "viewBindings");
        Intrinsics.checkNotNullParameter(contentView, "contentView");
        this.f55246a = viewBindings;
        this.f55247b = contentView;
        this.f55248c = view;
    }

    public final View a() {
        return this.f55247b;
    }

    public final View b() {
        return this.f55248c;
    }

    public final i c() {
        return this.f55246a;
    }
}
