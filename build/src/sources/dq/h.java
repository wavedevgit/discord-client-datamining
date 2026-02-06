package dq;

import android.view.View;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final i f21104a;

    /* renamed from: b  reason: collision with root package name */
    private final View f21105b;

    /* renamed from: c  reason: collision with root package name */
    private final View f21106c;

    public h(i viewBindings, View contentView, View view) {
        Intrinsics.checkNotNullParameter(viewBindings, "viewBindings");
        Intrinsics.checkNotNullParameter(contentView, "contentView");
        this.f21104a = viewBindings;
        this.f21105b = contentView;
        this.f21106c = view;
    }

    public final View a() {
        return this.f21105b;
    }

    public final View b() {
        return this.f21106c;
    }

    public final i c() {
        return this.f21104a;
    }
}
