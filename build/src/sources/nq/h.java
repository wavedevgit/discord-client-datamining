package nq;

import android.view.View;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final i f38328a;

    /* renamed from: b  reason: collision with root package name */
    private final View f38329b;

    /* renamed from: c  reason: collision with root package name */
    private final View f38330c;

    public h(i viewBindings, View contentView, View view) {
        Intrinsics.checkNotNullParameter(viewBindings, "viewBindings");
        Intrinsics.checkNotNullParameter(contentView, "contentView");
        this.f38328a = viewBindings;
        this.f38329b = contentView;
        this.f38330c = view;
    }

    public final View a() {
        return this.f38329b;
    }

    public final View b() {
        return this.f38330c;
    }

    public final i c() {
        return this.f38328a;
    }
}
