package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r6 {

    /* renamed from: a  reason: collision with root package name */
    private boolean f28932a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f28933b = true;

    /* renamed from: c  reason: collision with root package name */
    private boolean f28934c = false;

    /* renamed from: d  reason: collision with root package name */
    private boolean f28935d = true;

    /* renamed from: e  reason: collision with root package name */
    private boolean f28936e = true;

    /* renamed from: f  reason: collision with root package name */
    private boolean f28937f = true;

    /* renamed from: g  reason: collision with root package name */
    private CharSequence f28938g = "Report a Bug";

    /* renamed from: h  reason: collision with root package name */
    private CharSequence f28939h = "Send Bug Report";

    /* renamed from: i  reason: collision with root package name */
    private CharSequence f28940i = "Cancel";

    /* renamed from: j  reason: collision with root package name */
    private CharSequence f28941j = "Name";

    /* renamed from: k  reason: collision with root package name */
    private CharSequence f28942k = "Your Name";

    /* renamed from: l  reason: collision with root package name */
    private CharSequence f28943l = "Email";

    /* renamed from: m  reason: collision with root package name */
    private CharSequence f28944m = "your.email@example.org";

    /* renamed from: n  reason: collision with root package name */
    private CharSequence f28945n = " (Required)";

    /* renamed from: o  reason: collision with root package name */
    private CharSequence f28946o = "Description";

    /* renamed from: p  reason: collision with root package name */
    private CharSequence f28947p = "What's the bug? What did you expect?";

    /* renamed from: q  reason: collision with root package name */
    private CharSequence f28948q = "Thank you for your report!";

    /* renamed from: r  reason: collision with root package name */
    private a f28949r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
    }

    public r6(a aVar) {
        this.f28949r = aVar;
    }

    public boolean a() {
        return this.f28934c;
    }

    public boolean b() {
        return this.f28932a;
    }

    public boolean c() {
        return this.f28937f;
    }

    public boolean d() {
        return this.f28935d;
    }

    public boolean e() {
        return this.f28933b;
    }

    public boolean f() {
        return this.f28936e;
    }

    public void g(a aVar) {
        this.f28949r = aVar;
    }

    public void h(boolean z10) {
        this.f28934c = z10;
    }

    public void i(boolean z10) {
        this.f28932a = z10;
    }

    public void j(boolean z10) {
        this.f28937f = z10;
    }

    public void k(boolean z10) {
        this.f28935d = z10;
    }

    public void l(boolean z10) {
        this.f28933b = z10;
    }

    public void m(boolean z10) {
        this.f28936e = z10;
    }

    public String toString() {
        return "SentryFeedbackOptions{isNameRequired=" + this.f28932a + ", showName=" + this.f28933b + ", isEmailRequired=" + this.f28934c + ", showEmail=" + this.f28935d + ", useSentryUser=" + this.f28936e + ", showBranding=" + this.f28937f + ", formTitle='" + ((Object) this.f28938g) + "', submitButtonLabel='" + ((Object) this.f28939h) + "', cancelButtonLabel='" + ((Object) this.f28940i) + "', nameLabel='" + ((Object) this.f28941j) + "', namePlaceholder='" + ((Object) this.f28942k) + "', emailLabel='" + ((Object) this.f28943l) + "', emailPlaceholder='" + ((Object) this.f28944m) + "', isRequiredLabel='" + ((Object) this.f28945n) + "', messageLabel='" + ((Object) this.f28946o) + "', messagePlaceholder='" + ((Object) this.f28947p) + "'}";
    }
}
