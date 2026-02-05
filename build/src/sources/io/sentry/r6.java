package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r6 {

    /* renamed from: a  reason: collision with root package name */
    private boolean f29540a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f29541b = true;

    /* renamed from: c  reason: collision with root package name */
    private boolean f29542c = false;

    /* renamed from: d  reason: collision with root package name */
    private boolean f29543d = true;

    /* renamed from: e  reason: collision with root package name */
    private boolean f29544e = true;

    /* renamed from: f  reason: collision with root package name */
    private boolean f29545f = true;

    /* renamed from: g  reason: collision with root package name */
    private CharSequence f29546g = "Report a Bug";

    /* renamed from: h  reason: collision with root package name */
    private CharSequence f29547h = "Send Bug Report";

    /* renamed from: i  reason: collision with root package name */
    private CharSequence f29548i = "Cancel";

    /* renamed from: j  reason: collision with root package name */
    private CharSequence f29549j = "Name";

    /* renamed from: k  reason: collision with root package name */
    private CharSequence f29550k = "Your Name";

    /* renamed from: l  reason: collision with root package name */
    private CharSequence f29551l = "Email";

    /* renamed from: m  reason: collision with root package name */
    private CharSequence f29552m = "your.email@example.org";

    /* renamed from: n  reason: collision with root package name */
    private CharSequence f29553n = " (Required)";

    /* renamed from: o  reason: collision with root package name */
    private CharSequence f29554o = "Description";

    /* renamed from: p  reason: collision with root package name */
    private CharSequence f29555p = "What's the bug? What did you expect?";

    /* renamed from: q  reason: collision with root package name */
    private CharSequence f29556q = "Thank you for your report!";

    /* renamed from: r  reason: collision with root package name */
    private a f29557r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
    }

    public r6(a aVar) {
        this.f29557r = aVar;
    }

    public boolean a() {
        return this.f29542c;
    }

    public boolean b() {
        return this.f29540a;
    }

    public boolean c() {
        return this.f29545f;
    }

    public boolean d() {
        return this.f29543d;
    }

    public boolean e() {
        return this.f29541b;
    }

    public boolean f() {
        return this.f29544e;
    }

    public void g(a aVar) {
        this.f29557r = aVar;
    }

    public void h(boolean z10) {
        this.f29542c = z10;
    }

    public void i(boolean z10) {
        this.f29540a = z10;
    }

    public void j(boolean z10) {
        this.f29545f = z10;
    }

    public void k(boolean z10) {
        this.f29543d = z10;
    }

    public void l(boolean z10) {
        this.f29541b = z10;
    }

    public void m(boolean z10) {
        this.f29544e = z10;
    }

    public String toString() {
        return "SentryFeedbackOptions{isNameRequired=" + this.f29540a + ", showName=" + this.f29541b + ", isEmailRequired=" + this.f29542c + ", showEmail=" + this.f29543d + ", useSentryUser=" + this.f29544e + ", showBranding=" + this.f29545f + ", formTitle='" + ((Object) this.f29546g) + "', submitButtonLabel='" + ((Object) this.f29547h) + "', cancelButtonLabel='" + ((Object) this.f29548i) + "', nameLabel='" + ((Object) this.f29549j) + "', namePlaceholder='" + ((Object) this.f29550k) + "', emailLabel='" + ((Object) this.f29551l) + "', emailPlaceholder='" + ((Object) this.f29552m) + "', isRequiredLabel='" + ((Object) this.f29553n) + "', messageLabel='" + ((Object) this.f29554o) + "', messagePlaceholder='" + ((Object) this.f29555p) + "'}";
    }
}
