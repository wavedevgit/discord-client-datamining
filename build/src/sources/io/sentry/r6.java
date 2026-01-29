package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r6 {

    /* renamed from: a  reason: collision with root package name */
    private boolean f30539a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f30540b = true;

    /* renamed from: c  reason: collision with root package name */
    private boolean f30541c = false;

    /* renamed from: d  reason: collision with root package name */
    private boolean f30542d = true;

    /* renamed from: e  reason: collision with root package name */
    private boolean f30543e = true;

    /* renamed from: f  reason: collision with root package name */
    private boolean f30544f = true;

    /* renamed from: g  reason: collision with root package name */
    private CharSequence f30545g = "Report a Bug";

    /* renamed from: h  reason: collision with root package name */
    private CharSequence f30546h = "Send Bug Report";

    /* renamed from: i  reason: collision with root package name */
    private CharSequence f30547i = "Cancel";

    /* renamed from: j  reason: collision with root package name */
    private CharSequence f30548j = "Name";

    /* renamed from: k  reason: collision with root package name */
    private CharSequence f30549k = "Your Name";

    /* renamed from: l  reason: collision with root package name */
    private CharSequence f30550l = "Email";

    /* renamed from: m  reason: collision with root package name */
    private CharSequence f30551m = "your.email@example.org";

    /* renamed from: n  reason: collision with root package name */
    private CharSequence f30552n = " (Required)";

    /* renamed from: o  reason: collision with root package name */
    private CharSequence f30553o = "Description";

    /* renamed from: p  reason: collision with root package name */
    private CharSequence f30554p = "What's the bug? What did you expect?";

    /* renamed from: q  reason: collision with root package name */
    private CharSequence f30555q = "Thank you for your report!";

    /* renamed from: r  reason: collision with root package name */
    private a f30556r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
    }

    public r6(a aVar) {
        this.f30556r = aVar;
    }

    public boolean a() {
        return this.f30541c;
    }

    public boolean b() {
        return this.f30539a;
    }

    public boolean c() {
        return this.f30544f;
    }

    public boolean d() {
        return this.f30542d;
    }

    public boolean e() {
        return this.f30540b;
    }

    public boolean f() {
        return this.f30543e;
    }

    public void g(a aVar) {
        this.f30556r = aVar;
    }

    public void h(boolean z10) {
        this.f30541c = z10;
    }

    public void i(boolean z10) {
        this.f30539a = z10;
    }

    public void j(boolean z10) {
        this.f30544f = z10;
    }

    public void k(boolean z10) {
        this.f30542d = z10;
    }

    public void l(boolean z10) {
        this.f30540b = z10;
    }

    public void m(boolean z10) {
        this.f30543e = z10;
    }

    public String toString() {
        return "SentryFeedbackOptions{isNameRequired=" + this.f30539a + ", showName=" + this.f30540b + ", isEmailRequired=" + this.f30541c + ", showEmail=" + this.f30542d + ", useSentryUser=" + this.f30543e + ", showBranding=" + this.f30544f + ", formTitle='" + ((Object) this.f30545g) + "', submitButtonLabel='" + ((Object) this.f30546h) + "', cancelButtonLabel='" + ((Object) this.f30547i) + "', nameLabel='" + ((Object) this.f30548j) + "', namePlaceholder='" + ((Object) this.f30549k) + "', emailLabel='" + ((Object) this.f30550l) + "', emailPlaceholder='" + ((Object) this.f30551m) + "', isRequiredLabel='" + ((Object) this.f30552n) + "', messageLabel='" + ((Object) this.f30553o) + "', messagePlaceholder='" + ((Object) this.f30554p) + "'}";
    }
}
