package vp;

import android.view.View;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final i f51881a;

    /* renamed from: b  reason: collision with root package name */
    private final View f51882b;

    /* renamed from: c  reason: collision with root package name */
    private final View f51883c;

    public h(i viewBindings, View contentView, View view) {
        Intrinsics.checkNotNullParameter(viewBindings, "viewBindings");
        Intrinsics.checkNotNullParameter(contentView, "contentView");
        this.f51881a = viewBindings;
        this.f51882b = contentView;
        this.f51883c = view;
    }

    public final View a() {
        return this.f51882b;
    }

    public final View b() {
        return this.f51883c;
    }

    public final i c() {
        return this.f51881a;
    }
}
