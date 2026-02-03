package xo;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final androidx.browser.customtabs.b f53507a;

    /* renamed from: b  reason: collision with root package name */
    private final String f53508b;

    public a(androidx.browser.customtabs.b intent, String url) {
        Intrinsics.checkNotNullParameter(intent, "intent");
        Intrinsics.checkNotNullParameter(url, "url");
        this.f53507a = intent;
        this.f53508b = url;
    }

    public final androidx.browser.customtabs.b a() {
        return this.f53507a;
    }

    public final String b() {
        return this.f53508b;
    }
}
