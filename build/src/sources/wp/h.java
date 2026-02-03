package wp;

import android.view.View;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final i f52957a;

    /* renamed from: b  reason: collision with root package name */
    private final View f52958b;

    /* renamed from: c  reason: collision with root package name */
    private final View f52959c;

    public h(i viewBindings, View contentView, View view) {
        Intrinsics.checkNotNullParameter(viewBindings, "viewBindings");
        Intrinsics.checkNotNullParameter(contentView, "contentView");
        this.f52957a = viewBindings;
        this.f52958b = contentView;
        this.f52959c = view;
    }

    public final View a() {
        return this.f52958b;
    }

    public final View b() {
        return this.f52959c;
    }

    public final i c() {
        return this.f52957a;
    }
}
