package nq;

import android.view.View;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final i f38329a;

    /* renamed from: b  reason: collision with root package name */
    private final View f38330b;

    /* renamed from: c  reason: collision with root package name */
    private final View f38331c;

    public h(i viewBindings, View contentView, View view) {
        Intrinsics.checkNotNullParameter(viewBindings, "viewBindings");
        Intrinsics.checkNotNullParameter(contentView, "contentView");
        this.f38329a = viewBindings;
        this.f38330b = contentView;
        this.f38331c = view;
    }

    public final View a() {
        return this.f38330b;
    }

    public final View b() {
        return this.f38331c;
    }

    public final i c() {
        return this.f38329a;
    }
}
