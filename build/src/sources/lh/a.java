package lh;

import android.graphics.Typeface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends f {

    /* renamed from: a  reason: collision with root package name */
    private final Typeface f37359a;

    /* renamed from: b  reason: collision with root package name */
    private final InterfaceC0480a f37360b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f37361c;

    /* renamed from: lh.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0480a {
        void a(Typeface typeface);
    }

    public a(InterfaceC0480a interfaceC0480a, Typeface typeface) {
        this.f37359a = typeface;
        this.f37360b = interfaceC0480a;
    }

    private void d(Typeface typeface) {
        if (!this.f37361c) {
            this.f37360b.a(typeface);
        }
    }

    @Override // lh.f
    public void a(int i10) {
        d(this.f37359a);
    }

    @Override // lh.f
    public void b(Typeface typeface, boolean z10) {
        d(typeface);
    }

    public void c() {
        this.f37361c = true;
    }
}
