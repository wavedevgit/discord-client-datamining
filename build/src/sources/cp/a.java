package cp;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final androidx.browser.customtabs.b f19975a;

    /* renamed from: b  reason: collision with root package name */
    private final String f19976b;

    public a(androidx.browser.customtabs.b intent, String url) {
        Intrinsics.checkNotNullParameter(intent, "intent");
        Intrinsics.checkNotNullParameter(url, "url");
        this.f19975a = intent;
        this.f19976b = url;
    }

    public final androidx.browser.customtabs.b a() {
        return this.f19975a;
    }

    public final String b() {
        return this.f19976b;
    }
}
