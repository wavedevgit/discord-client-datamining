package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r6 {

    /* renamed from: a  reason: collision with root package name */
    private boolean f30555a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f30556b = true;

    /* renamed from: c  reason: collision with root package name */
    private boolean f30557c = false;

    /* renamed from: d  reason: collision with root package name */
    private boolean f30558d = true;

    /* renamed from: e  reason: collision with root package name */
    private boolean f30559e = true;

    /* renamed from: f  reason: collision with root package name */
    private boolean f30560f = true;

    /* renamed from: g  reason: collision with root package name */
    private CharSequence f30561g = "Report a Bug";

    /* renamed from: h  reason: collision with root package name */
    private CharSequence f30562h = "Send Bug Report";

    /* renamed from: i  reason: collision with root package name */
    private CharSequence f30563i = "Cancel";

    /* renamed from: j  reason: collision with root package name */
    private CharSequence f30564j = "Name";

    /* renamed from: k  reason: collision with root package name */
    private CharSequence f30565k = "Your Name";

    /* renamed from: l  reason: collision with root package name */
    private CharSequence f30566l = "Email";

    /* renamed from: m  reason: collision with root package name */
    private CharSequence f30567m = "your.email@example.org";

    /* renamed from: n  reason: collision with root package name */
    private CharSequence f30568n = " (Required)";

    /* renamed from: o  reason: collision with root package name */
    private CharSequence f30569o = "Description";

    /* renamed from: p  reason: collision with root package name */
    private CharSequence f30570p = "What's the bug? What did you expect?";

    /* renamed from: q  reason: collision with root package name */
    private CharSequence f30571q = "Thank you for your report!";

    /* renamed from: r  reason: collision with root package name */
    private a f30572r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
    }

    public r6(a aVar) {
        this.f30572r = aVar;
    }

    public boolean a() {
        return this.f30557c;
    }

    public boolean b() {
        return this.f30555a;
    }

    public boolean c() {
        return this.f30560f;
    }

    public boolean d() {
        return this.f30558d;
    }

    public boolean e() {
        return this.f30556b;
    }

    public boolean f() {
        return this.f30559e;
    }

    public void g(a aVar) {
        this.f30572r = aVar;
    }

    public void h(boolean z10) {
        this.f30557c = z10;
    }

    public void i(boolean z10) {
        this.f30555a = z10;
    }

    public void j(boolean z10) {
        this.f30560f = z10;
    }

    public void k(boolean z10) {
        this.f30558d = z10;
    }

    public void l(boolean z10) {
        this.f30556b = z10;
    }

    public void m(boolean z10) {
        this.f30559e = z10;
    }

    public String toString() {
        return "SentryFeedbackOptions{isNameRequired=" + this.f30555a + ", showName=" + this.f30556b + ", isEmailRequired=" + this.f30557c + ", showEmail=" + this.f30558d + ", useSentryUser=" + this.f30559e + ", showBranding=" + this.f30560f + ", formTitle='" + ((Object) this.f30561g) + "', submitButtonLabel='" + ((Object) this.f30562h) + "', cancelButtonLabel='" + ((Object) this.f30563i) + "', nameLabel='" + ((Object) this.f30564j) + "', namePlaceholder='" + ((Object) this.f30565k) + "', emailLabel='" + ((Object) this.f30566l) + "', emailPlaceholder='" + ((Object) this.f30567m) + "', isRequiredLabel='" + ((Object) this.f30568n) + "', messageLabel='" + ((Object) this.f30569o) + "', messagePlaceholder='" + ((Object) this.f30570p) + "'}";
    }
}
