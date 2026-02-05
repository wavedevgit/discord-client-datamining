package bq;

import android.view.View;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final i f7188a;

    /* renamed from: b  reason: collision with root package name */
    private final View f7189b;

    /* renamed from: c  reason: collision with root package name */
    private final View f7190c;

    public h(i viewBindings, View contentView, View view) {
        Intrinsics.checkNotNullParameter(viewBindings, "viewBindings");
        Intrinsics.checkNotNullParameter(contentView, "contentView");
        this.f7188a = viewBindings;
        this.f7189b = contentView;
        this.f7190c = view;
    }

    public final View a() {
        return this.f7189b;
    }

    public final View b() {
        return this.f7190c;
    }

    public final i c() {
        return this.f7188a;
    }
}
