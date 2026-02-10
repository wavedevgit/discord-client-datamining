package oh;

import android.graphics.Typeface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends f {

    /* renamed from: a  reason: collision with root package name */
    private final Typeface f41753a;

    /* renamed from: b  reason: collision with root package name */
    private final InterfaceC0589a f41754b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f41755c;

    /* renamed from: oh.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0589a {
        void a(Typeface typeface);
    }

    public a(InterfaceC0589a interfaceC0589a, Typeface typeface) {
        this.f41753a = typeface;
        this.f41754b = interfaceC0589a;
    }

    private void d(Typeface typeface) {
        if (!this.f41755c) {
            this.f41754b.a(typeface);
        }
    }

    @Override // oh.f
    public void a(int i10) {
        d(this.f41753a);
    }

    @Override // oh.f
    public void b(Typeface typeface, boolean z10) {
        d(typeface);
    }

    public void c() {
        this.f41755c = true;
    }
}
