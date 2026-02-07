package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r6 {

    /* renamed from: a  reason: collision with root package name */
    private boolean f28732a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f28733b = true;

    /* renamed from: c  reason: collision with root package name */
    private boolean f28734c = false;

    /* renamed from: d  reason: collision with root package name */
    private boolean f28735d = true;

    /* renamed from: e  reason: collision with root package name */
    private boolean f28736e = true;

    /* renamed from: f  reason: collision with root package name */
    private boolean f28737f = true;

    /* renamed from: g  reason: collision with root package name */
    private CharSequence f28738g = "Report a Bug";

    /* renamed from: h  reason: collision with root package name */
    private CharSequence f28739h = "Send Bug Report";

    /* renamed from: i  reason: collision with root package name */
    private CharSequence f28740i = "Cancel";

    /* renamed from: j  reason: collision with root package name */
    private CharSequence f28741j = "Name";

    /* renamed from: k  reason: collision with root package name */
    private CharSequence f28742k = "Your Name";

    /* renamed from: l  reason: collision with root package name */
    private CharSequence f28743l = "Email";

    /* renamed from: m  reason: collision with root package name */
    private CharSequence f28744m = "your.email@example.org";

    /* renamed from: n  reason: collision with root package name */
    private CharSequence f28745n = " (Required)";

    /* renamed from: o  reason: collision with root package name */
    private CharSequence f28746o = "Description";

    /* renamed from: p  reason: collision with root package name */
    private CharSequence f28747p = "What's the bug? What did you expect?";

    /* renamed from: q  reason: collision with root package name */
    private CharSequence f28748q = "Thank you for your report!";

    /* renamed from: r  reason: collision with root package name */
    private a f28749r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
    }

    public r6(a aVar) {
        this.f28749r = aVar;
    }

    public boolean a() {
        return this.f28734c;
    }

    public boolean b() {
        return this.f28732a;
    }

    public boolean c() {
        return this.f28737f;
    }

    public boolean d() {
        return this.f28735d;
    }

    public boolean e() {
        return this.f28733b;
    }

    public boolean f() {
        return this.f28736e;
    }

    public void g(a aVar) {
        this.f28749r = aVar;
    }

    public void h(boolean z10) {
        this.f28734c = z10;
    }

    public void i(boolean z10) {
        this.f28732a = z10;
    }

    public void j(boolean z10) {
        this.f28737f = z10;
    }

    public void k(boolean z10) {
        this.f28735d = z10;
    }

    public void l(boolean z10) {
        this.f28733b = z10;
    }

    public void m(boolean z10) {
        this.f28736e = z10;
    }

    public String toString() {
        return "SentryFeedbackOptions{isNameRequired=" + this.f28732a + ", showName=" + this.f28733b + ", isEmailRequired=" + this.f28734c + ", showEmail=" + this.f28735d + ", useSentryUser=" + this.f28736e + ", showBranding=" + this.f28737f + ", formTitle='" + ((Object) this.f28738g) + "', submitButtonLabel='" + ((Object) this.f28739h) + "', cancelButtonLabel='" + ((Object) this.f28740i) + "', nameLabel='" + ((Object) this.f28741j) + "', namePlaceholder='" + ((Object) this.f28742k) + "', emailLabel='" + ((Object) this.f28743l) + "', emailPlaceholder='" + ((Object) this.f28744m) + "', isRequiredLabel='" + ((Object) this.f28745n) + "', messageLabel='" + ((Object) this.f28746o) + "', messagePlaceholder='" + ((Object) this.f28747p) + "'}";
    }
}
