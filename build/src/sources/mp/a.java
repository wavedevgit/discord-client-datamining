package mp;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final androidx.browser.customtabs.b f36561a;

    /* renamed from: b  reason: collision with root package name */
    private final String f36562b;

    public a(androidx.browser.customtabs.b intent, String url) {
        Intrinsics.checkNotNullParameter(intent, "intent");
        Intrinsics.checkNotNullParameter(url, "url");
        this.f36561a = intent;
        this.f36562b = url;
    }

    public final androidx.browser.customtabs.b a() {
        return this.f36561a;
    }

    public final String b() {
        return this.f36562b;
    }
}
