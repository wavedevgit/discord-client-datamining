package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r6 {

    /* renamed from: a  reason: collision with root package name */
    private boolean f30121a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f30122b = true;

    /* renamed from: c  reason: collision with root package name */
    private boolean f30123c = false;

    /* renamed from: d  reason: collision with root package name */
    private boolean f30124d = true;

    /* renamed from: e  reason: collision with root package name */
    private boolean f30125e = true;

    /* renamed from: f  reason: collision with root package name */
    private boolean f30126f = true;

    /* renamed from: g  reason: collision with root package name */
    private CharSequence f30127g = "Report a Bug";

    /* renamed from: h  reason: collision with root package name */
    private CharSequence f30128h = "Send Bug Report";

    /* renamed from: i  reason: collision with root package name */
    private CharSequence f30129i = "Cancel";

    /* renamed from: j  reason: collision with root package name */
    private CharSequence f30130j = "Name";

    /* renamed from: k  reason: collision with root package name */
    private CharSequence f30131k = "Your Name";

    /* renamed from: l  reason: collision with root package name */
    private CharSequence f30132l = "Email";

    /* renamed from: m  reason: collision with root package name */
    private CharSequence f30133m = "your.email@example.org";

    /* renamed from: n  reason: collision with root package name */
    private CharSequence f30134n = " (Required)";

    /* renamed from: o  reason: collision with root package name */
    private CharSequence f30135o = "Description";

    /* renamed from: p  reason: collision with root package name */
    private CharSequence f30136p = "What's the bug? What did you expect?";

    /* renamed from: q  reason: collision with root package name */
    private CharSequence f30137q = "Thank you for your report!";

    /* renamed from: r  reason: collision with root package name */
    private a f30138r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
    }

    public r6(a aVar) {
        this.f30138r = aVar;
    }

    public boolean a() {
        return this.f30123c;
    }

    public boolean b() {
        return this.f30121a;
    }

    public boolean c() {
        return this.f30126f;
    }

    public boolean d() {
        return this.f30124d;
    }

    public boolean e() {
        return this.f30122b;
    }

    public boolean f() {
        return this.f30125e;
    }

    public void g(a aVar) {
        this.f30138r = aVar;
    }

    public void h(boolean z10) {
        this.f30123c = z10;
    }

    public void i(boolean z10) {
        this.f30121a = z10;
    }

    public void j(boolean z10) {
        this.f30126f = z10;
    }

    public void k(boolean z10) {
        this.f30124d = z10;
    }

    public void l(boolean z10) {
        this.f30122b = z10;
    }

    public void m(boolean z10) {
        this.f30125e = z10;
    }

    public String toString() {
        return "SentryFeedbackOptions{isNameRequired=" + this.f30121a + ", showName=" + this.f30122b + ", isEmailRequired=" + this.f30123c + ", showEmail=" + this.f30124d + ", useSentryUser=" + this.f30125e + ", showBranding=" + this.f30126f + ", formTitle='" + ((Object) this.f30127g) + "', submitButtonLabel='" + ((Object) this.f30128h) + "', cancelButtonLabel='" + ((Object) this.f30129i) + "', nameLabel='" + ((Object) this.f30130j) + "', namePlaceholder='" + ((Object) this.f30131k) + "', emailLabel='" + ((Object) this.f30132l) + "', emailPlaceholder='" + ((Object) this.f30133m) + "', isRequiredLabel='" + ((Object) this.f30134n) + "', messageLabel='" + ((Object) this.f30135o) + "', messagePlaceholder='" + ((Object) this.f30136p) + "'}";
    }
}
