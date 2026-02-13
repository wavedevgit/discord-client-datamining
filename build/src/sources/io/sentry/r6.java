package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r6 {

    /* renamed from: a  reason: collision with root package name */
    private boolean f30436a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f30437b = true;

    /* renamed from: c  reason: collision with root package name */
    private boolean f30438c = false;

    /* renamed from: d  reason: collision with root package name */
    private boolean f30439d = true;

    /* renamed from: e  reason: collision with root package name */
    private boolean f30440e = true;

    /* renamed from: f  reason: collision with root package name */
    private boolean f30441f = true;

    /* renamed from: g  reason: collision with root package name */
    private CharSequence f30442g = "Report a Bug";

    /* renamed from: h  reason: collision with root package name */
    private CharSequence f30443h = "Send Bug Report";

    /* renamed from: i  reason: collision with root package name */
    private CharSequence f30444i = "Cancel";

    /* renamed from: j  reason: collision with root package name */
    private CharSequence f30445j = "Name";

    /* renamed from: k  reason: collision with root package name */
    private CharSequence f30446k = "Your Name";

    /* renamed from: l  reason: collision with root package name */
    private CharSequence f30447l = "Email";

    /* renamed from: m  reason: collision with root package name */
    private CharSequence f30448m = "your.email@example.org";

    /* renamed from: n  reason: collision with root package name */
    private CharSequence f30449n = " (Required)";

    /* renamed from: o  reason: collision with root package name */
    private CharSequence f30450o = "Description";

    /* renamed from: p  reason: collision with root package name */
    private CharSequence f30451p = "What's the bug? What did you expect?";

    /* renamed from: q  reason: collision with root package name */
    private CharSequence f30452q = "Thank you for your report!";

    /* renamed from: r  reason: collision with root package name */
    private a f30453r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
    }

    public r6(a aVar) {
        this.f30453r = aVar;
    }

    public boolean a() {
        return this.f30438c;
    }

    public boolean b() {
        return this.f30436a;
    }

    public boolean c() {
        return this.f30441f;
    }

    public boolean d() {
        return this.f30439d;
    }

    public boolean e() {
        return this.f30437b;
    }

    public boolean f() {
        return this.f30440e;
    }

    public void g(a aVar) {
        this.f30453r = aVar;
    }

    public void h(boolean z10) {
        this.f30438c = z10;
    }

    public void i(boolean z10) {
        this.f30436a = z10;
    }

    public void j(boolean z10) {
        this.f30441f = z10;
    }

    public void k(boolean z10) {
        this.f30439d = z10;
    }

    public void l(boolean z10) {
        this.f30437b = z10;
    }

    public void m(boolean z10) {
        this.f30440e = z10;
    }

    public String toString() {
        return "SentryFeedbackOptions{isNameRequired=" + this.f30436a + ", showName=" + this.f30437b + ", isEmailRequired=" + this.f30438c + ", showEmail=" + this.f30439d + ", useSentryUser=" + this.f30440e + ", showBranding=" + this.f30441f + ", formTitle='" + ((Object) this.f30442g) + "', submitButtonLabel='" + ((Object) this.f30443h) + "', cancelButtonLabel='" + ((Object) this.f30444i) + "', nameLabel='" + ((Object) this.f30445j) + "', namePlaceholder='" + ((Object) this.f30446k) + "', emailLabel='" + ((Object) this.f30447l) + "', emailPlaceholder='" + ((Object) this.f30448m) + "', isRequiredLabel='" + ((Object) this.f30449n) + "', messageLabel='" + ((Object) this.f30450o) + "', messagePlaceholder='" + ((Object) this.f30451p) + "'}";
    }
}
