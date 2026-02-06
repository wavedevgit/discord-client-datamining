package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r6 {

    /* renamed from: a  reason: collision with root package name */
    private boolean f28684a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f28685b = true;

    /* renamed from: c  reason: collision with root package name */
    private boolean f28686c = false;

    /* renamed from: d  reason: collision with root package name */
    private boolean f28687d = true;

    /* renamed from: e  reason: collision with root package name */
    private boolean f28688e = true;

    /* renamed from: f  reason: collision with root package name */
    private boolean f28689f = true;

    /* renamed from: g  reason: collision with root package name */
    private CharSequence f28690g = "Report a Bug";

    /* renamed from: h  reason: collision with root package name */
    private CharSequence f28691h = "Send Bug Report";

    /* renamed from: i  reason: collision with root package name */
    private CharSequence f28692i = "Cancel";

    /* renamed from: j  reason: collision with root package name */
    private CharSequence f28693j = "Name";

    /* renamed from: k  reason: collision with root package name */
    private CharSequence f28694k = "Your Name";

    /* renamed from: l  reason: collision with root package name */
    private CharSequence f28695l = "Email";

    /* renamed from: m  reason: collision with root package name */
    private CharSequence f28696m = "your.email@example.org";

    /* renamed from: n  reason: collision with root package name */
    private CharSequence f28697n = " (Required)";

    /* renamed from: o  reason: collision with root package name */
    private CharSequence f28698o = "Description";

    /* renamed from: p  reason: collision with root package name */
    private CharSequence f28699p = "What's the bug? What did you expect?";

    /* renamed from: q  reason: collision with root package name */
    private CharSequence f28700q = "Thank you for your report!";

    /* renamed from: r  reason: collision with root package name */
    private a f28701r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
    }

    public r6(a aVar) {
        this.f28701r = aVar;
    }

    public boolean a() {
        return this.f28686c;
    }

    public boolean b() {
        return this.f28684a;
    }

    public boolean c() {
        return this.f28689f;
    }

    public boolean d() {
        return this.f28687d;
    }

    public boolean e() {
        return this.f28685b;
    }

    public boolean f() {
        return this.f28688e;
    }

    public void g(a aVar) {
        this.f28701r = aVar;
    }

    public void h(boolean z10) {
        this.f28686c = z10;
    }

    public void i(boolean z10) {
        this.f28684a = z10;
    }

    public void j(boolean z10) {
        this.f28689f = z10;
    }

    public void k(boolean z10) {
        this.f28687d = z10;
    }

    public void l(boolean z10) {
        this.f28685b = z10;
    }

    public void m(boolean z10) {
        this.f28688e = z10;
    }

    public String toString() {
        return "SentryFeedbackOptions{isNameRequired=" + this.f28684a + ", showName=" + this.f28685b + ", isEmailRequired=" + this.f28686c + ", showEmail=" + this.f28687d + ", useSentryUser=" + this.f28688e + ", showBranding=" + this.f28689f + ", formTitle='" + ((Object) this.f28690g) + "', submitButtonLabel='" + ((Object) this.f28691h) + "', cancelButtonLabel='" + ((Object) this.f28692i) + "', nameLabel='" + ((Object) this.f28693j) + "', namePlaceholder='" + ((Object) this.f28694k) + "', emailLabel='" + ((Object) this.f28695l) + "', emailPlaceholder='" + ((Object) this.f28696m) + "', isRequiredLabel='" + ((Object) this.f28697n) + "', messageLabel='" + ((Object) this.f28698o) + "', messagePlaceholder='" + ((Object) this.f28699p) + "'}";
    }
}
