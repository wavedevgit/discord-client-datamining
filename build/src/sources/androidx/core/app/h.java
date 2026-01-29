package androidx.core.app;

import android.content.res.Configuration;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f3091a;

    /* renamed from: b  reason: collision with root package name */
    private Configuration f3092b;

    public h(boolean z10) {
        this.f3091a = z10;
    }

    public final boolean a() {
        return this.f3091a;
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public h(boolean z10, Configuration newConfig) {
        this(z10);
        Intrinsics.checkNotNullParameter(newConfig, "newConfig");
        this.f3092b = newConfig;
    }
}
