package vp;

import android.view.View;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final i f51865a;

    /* renamed from: b  reason: collision with root package name */
    private final View f51866b;

    /* renamed from: c  reason: collision with root package name */
    private final View f51867c;

    public h(i viewBindings, View contentView, View view) {
        Intrinsics.checkNotNullParameter(viewBindings, "viewBindings");
        Intrinsics.checkNotNullParameter(contentView, "contentView");
        this.f51865a = viewBindings;
        this.f51866b = contentView;
        this.f51867c = view;
    }

    public final View a() {
        return this.f51866b;
    }

    public final View b() {
        return this.f51867c;
    }

    public final i c() {
        return this.f51865a;
    }
}
