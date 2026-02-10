package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r6 {

    /* renamed from: a  reason: collision with root package name */
    private boolean f29867a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f29868b = true;

    /* renamed from: c  reason: collision with root package name */
    private boolean f29869c = false;

    /* renamed from: d  reason: collision with root package name */
    private boolean f29870d = true;

    /* renamed from: e  reason: collision with root package name */
    private boolean f29871e = true;

    /* renamed from: f  reason: collision with root package name */
    private boolean f29872f = true;

    /* renamed from: g  reason: collision with root package name */
    private CharSequence f29873g = "Report a Bug";

    /* renamed from: h  reason: collision with root package name */
    private CharSequence f29874h = "Send Bug Report";

    /* renamed from: i  reason: collision with root package name */
    private CharSequence f29875i = "Cancel";

    /* renamed from: j  reason: collision with root package name */
    private CharSequence f29876j = "Name";

    /* renamed from: k  reason: collision with root package name */
    private CharSequence f29877k = "Your Name";

    /* renamed from: l  reason: collision with root package name */
    private CharSequence f29878l = "Email";

    /* renamed from: m  reason: collision with root package name */
    private CharSequence f29879m = "your.email@example.org";

    /* renamed from: n  reason: collision with root package name */
    private CharSequence f29880n = " (Required)";

    /* renamed from: o  reason: collision with root package name */
    private CharSequence f29881o = "Description";

    /* renamed from: p  reason: collision with root package name */
    private CharSequence f29882p = "What's the bug? What did you expect?";

    /* renamed from: q  reason: collision with root package name */
    private CharSequence f29883q = "Thank you for your report!";

    /* renamed from: r  reason: collision with root package name */
    private a f29884r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
    }

    public r6(a aVar) {
        this.f29884r = aVar;
    }

    public boolean a() {
        return this.f29869c;
    }

    public boolean b() {
        return this.f29867a;
    }

    public boolean c() {
        return this.f29872f;
    }

    public boolean d() {
        return this.f29870d;
    }

    public boolean e() {
        return this.f29868b;
    }

    public boolean f() {
        return this.f29871e;
    }

    public void g(a aVar) {
        this.f29884r = aVar;
    }

    public void h(boolean z10) {
        this.f29869c = z10;
    }

    public void i(boolean z10) {
        this.f29867a = z10;
    }

    public void j(boolean z10) {
        this.f29872f = z10;
    }

    public void k(boolean z10) {
        this.f29870d = z10;
    }

    public void l(boolean z10) {
        this.f29868b = z10;
    }

    public void m(boolean z10) {
        this.f29871e = z10;
    }

    public String toString() {
        return "SentryFeedbackOptions{isNameRequired=" + this.f29867a + ", showName=" + this.f29868b + ", isEmailRequired=" + this.f29869c + ", showEmail=" + this.f29870d + ", useSentryUser=" + this.f29871e + ", showBranding=" + this.f29872f + ", formTitle='" + ((Object) this.f29873g) + "', submitButtonLabel='" + ((Object) this.f29874h) + "', cancelButtonLabel='" + ((Object) this.f29875i) + "', nameLabel='" + ((Object) this.f29876j) + "', namePlaceholder='" + ((Object) this.f29877k) + "', emailLabel='" + ((Object) this.f29878l) + "', emailPlaceholder='" + ((Object) this.f29879m) + "', isRequiredLabel='" + ((Object) this.f29880n) + "', messageLabel='" + ((Object) this.f29881o) + "', messagePlaceholder='" + ((Object) this.f29882p) + "'}";
    }
}
