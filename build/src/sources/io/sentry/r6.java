package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r6 {

    /* renamed from: a  reason: collision with root package name */
    private boolean f30482a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f30483b = true;

    /* renamed from: c  reason: collision with root package name */
    private boolean f30484c = false;

    /* renamed from: d  reason: collision with root package name */
    private boolean f30485d = true;

    /* renamed from: e  reason: collision with root package name */
    private boolean f30486e = true;

    /* renamed from: f  reason: collision with root package name */
    private boolean f30487f = true;

    /* renamed from: g  reason: collision with root package name */
    private CharSequence f30488g = "Report a Bug";

    /* renamed from: h  reason: collision with root package name */
    private CharSequence f30489h = "Send Bug Report";

    /* renamed from: i  reason: collision with root package name */
    private CharSequence f30490i = "Cancel";

    /* renamed from: j  reason: collision with root package name */
    private CharSequence f30491j = "Name";

    /* renamed from: k  reason: collision with root package name */
    private CharSequence f30492k = "Your Name";

    /* renamed from: l  reason: collision with root package name */
    private CharSequence f30493l = "Email";

    /* renamed from: m  reason: collision with root package name */
    private CharSequence f30494m = "your.email@example.org";

    /* renamed from: n  reason: collision with root package name */
    private CharSequence f30495n = " (Required)";

    /* renamed from: o  reason: collision with root package name */
    private CharSequence f30496o = "Description";

    /* renamed from: p  reason: collision with root package name */
    private CharSequence f30497p = "What's the bug? What did you expect?";

    /* renamed from: q  reason: collision with root package name */
    private CharSequence f30498q = "Thank you for your report!";

    /* renamed from: r  reason: collision with root package name */
    private a f30499r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
    }

    public r6(a aVar) {
        this.f30499r = aVar;
    }

    public boolean a() {
        return this.f30484c;
    }

    public boolean b() {
        return this.f30482a;
    }

    public boolean c() {
        return this.f30487f;
    }

    public boolean d() {
        return this.f30485d;
    }

    public boolean e() {
        return this.f30483b;
    }

    public boolean f() {
        return this.f30486e;
    }

    public void g(a aVar) {
        this.f30499r = aVar;
    }

    public void h(boolean z10) {
        this.f30484c = z10;
    }

    public void i(boolean z10) {
        this.f30482a = z10;
    }

    public void j(boolean z10) {
        this.f30487f = z10;
    }

    public void k(boolean z10) {
        this.f30485d = z10;
    }

    public void l(boolean z10) {
        this.f30483b = z10;
    }

    public void m(boolean z10) {
        this.f30486e = z10;
    }

    public String toString() {
        return "SentryFeedbackOptions{isNameRequired=" + this.f30482a + ", showName=" + this.f30483b + ", isEmailRequired=" + this.f30484c + ", showEmail=" + this.f30485d + ", useSentryUser=" + this.f30486e + ", showBranding=" + this.f30487f + ", formTitle='" + ((Object) this.f30488g) + "', submitButtonLabel='" + ((Object) this.f30489h) + "', cancelButtonLabel='" + ((Object) this.f30490i) + "', nameLabel='" + ((Object) this.f30491j) + "', namePlaceholder='" + ((Object) this.f30492k) + "', emailLabel='" + ((Object) this.f30493l) + "', emailPlaceholder='" + ((Object) this.f30494m) + "', isRequiredLabel='" + ((Object) this.f30495n) + "', messageLabel='" + ((Object) this.f30496o) + "', messagePlaceholder='" + ((Object) this.f30497p) + "'}";
    }
}
