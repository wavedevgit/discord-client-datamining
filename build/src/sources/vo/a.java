package vo;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final androidx.browser.customtabs.b f51468a;

    /* renamed from: b  reason: collision with root package name */
    private final String f51469b;

    public a(androidx.browser.customtabs.b intent, String url) {
        Intrinsics.checkNotNullParameter(intent, "intent");
        Intrinsics.checkNotNullParameter(url, "url");
        this.f51468a = intent;
        this.f51469b = url;
    }

    public final androidx.browser.customtabs.b a() {
        return this.f51468a;
    }

    public final String b() {
        return this.f51469b;
    }
}
