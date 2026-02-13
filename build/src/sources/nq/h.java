package nq;

import android.view.View;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final i f38897a;

    /* renamed from: b  reason: collision with root package name */
    private final View f38898b;

    /* renamed from: c  reason: collision with root package name */
    private final View f38899c;

    public h(i viewBindings, View contentView, View view) {
        Intrinsics.checkNotNullParameter(viewBindings, "viewBindings");
        Intrinsics.checkNotNullParameter(contentView, "contentView");
        this.f38897a = viewBindings;
        this.f38898b = contentView;
        this.f38899c = view;
    }

    public final View a() {
        return this.f38898b;
    }

    public final View b() {
        return this.f38899c;
    }

    public final i c() {
        return this.f38897a;
    }
}
