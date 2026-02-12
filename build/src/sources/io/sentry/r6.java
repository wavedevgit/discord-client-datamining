package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r6 {

    /* renamed from: a  reason: collision with root package name */
    private boolean f29868a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f29869b = true;

    /* renamed from: c  reason: collision with root package name */
    private boolean f29870c = false;

    /* renamed from: d  reason: collision with root package name */
    private boolean f29871d = true;

    /* renamed from: e  reason: collision with root package name */
    private boolean f29872e = true;

    /* renamed from: f  reason: collision with root package name */
    private boolean f29873f = true;

    /* renamed from: g  reason: collision with root package name */
    private CharSequence f29874g = "Report a Bug";

    /* renamed from: h  reason: collision with root package name */
    private CharSequence f29875h = "Send Bug Report";

    /* renamed from: i  reason: collision with root package name */
    private CharSequence f29876i = "Cancel";

    /* renamed from: j  reason: collision with root package name */
    private CharSequence f29877j = "Name";

    /* renamed from: k  reason: collision with root package name */
    private CharSequence f29878k = "Your Name";

    /* renamed from: l  reason: collision with root package name */
    private CharSequence f29879l = "Email";

    /* renamed from: m  reason: collision with root package name */
    private CharSequence f29880m = "your.email@example.org";

    /* renamed from: n  reason: collision with root package name */
    private CharSequence f29881n = " (Required)";

    /* renamed from: o  reason: collision with root package name */
    private CharSequence f29882o = "Description";

    /* renamed from: p  reason: collision with root package name */
    private CharSequence f29883p = "What's the bug? What did you expect?";

    /* renamed from: q  reason: collision with root package name */
    private CharSequence f29884q = "Thank you for your report!";

    /* renamed from: r  reason: collision with root package name */
    private a f29885r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
    }

    public r6(a aVar) {
        this.f29885r = aVar;
    }

    public boolean a() {
        return this.f29870c;
    }

    public boolean b() {
        return this.f29868a;
    }

    public boolean c() {
        return this.f29873f;
    }

    public boolean d() {
        return this.f29871d;
    }

    public boolean e() {
        return this.f29869b;
    }

    public boolean f() {
        return this.f29872e;
    }

    public void g(a aVar) {
        this.f29885r = aVar;
    }

    public void h(boolean z10) {
        this.f29870c = z10;
    }

    public void i(boolean z10) {
        this.f29868a = z10;
    }

    public void j(boolean z10) {
        this.f29873f = z10;
    }

    public void k(boolean z10) {
        this.f29871d = z10;
    }

    public void l(boolean z10) {
        this.f29869b = z10;
    }

    public void m(boolean z10) {
        this.f29872e = z10;
    }

    public String toString() {
        return "SentryFeedbackOptions{isNameRequired=" + this.f29868a + ", showName=" + this.f29869b + ", isEmailRequired=" + this.f29870c + ", showEmail=" + this.f29871d + ", useSentryUser=" + this.f29872e + ", showBranding=" + this.f29873f + ", formTitle='" + ((Object) this.f29874g) + "', submitButtonLabel='" + ((Object) this.f29875h) + "', cancelButtonLabel='" + ((Object) this.f29876i) + "', nameLabel='" + ((Object) this.f29877j) + "', namePlaceholder='" + ((Object) this.f29878k) + "', emailLabel='" + ((Object) this.f29879l) + "', emailPlaceholder='" + ((Object) this.f29880m) + "', isRequiredLabel='" + ((Object) this.f29881n) + "', messageLabel='" + ((Object) this.f29882o) + "', messagePlaceholder='" + ((Object) this.f29883p) + "'}";
    }
}
