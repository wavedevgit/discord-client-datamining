package eq;

import android.view.View;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final i f22052a;

    /* renamed from: b  reason: collision with root package name */
    private final View f22053b;

    /* renamed from: c  reason: collision with root package name */
    private final View f22054c;

    public h(i viewBindings, View contentView, View view) {
        Intrinsics.checkNotNullParameter(viewBindings, "viewBindings");
        Intrinsics.checkNotNullParameter(contentView, "contentView");
        this.f22052a = viewBindings;
        this.f22053b = contentView;
        this.f22054c = view;
    }

    public final View a() {
        return this.f22053b;
    }

    public final View b() {
        return this.f22054c;
    }

    public final i c() {
        return this.f22052a;
    }
}
