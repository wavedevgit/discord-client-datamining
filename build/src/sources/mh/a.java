package mh;

import android.graphics.Typeface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends f {

    /* renamed from: a  reason: collision with root package name */
    private final Typeface f38517a;

    /* renamed from: b  reason: collision with root package name */
    private final InterfaceC0498a f38518b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f38519c;

    /* renamed from: mh.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0498a {
        void a(Typeface typeface);
    }

    public a(InterfaceC0498a interfaceC0498a, Typeface typeface) {
        this.f38517a = typeface;
        this.f38518b = interfaceC0498a;
    }

    private void d(Typeface typeface) {
        if (!this.f38519c) {
            this.f38518b.a(typeface);
        }
    }

    @Override // mh.f
    public void a(int i10) {
        d(this.f38517a);
    }

    @Override // mh.f
    public void b(Typeface typeface, boolean z10) {
        d(typeface);
    }

    public void c() {
        this.f38519c = true;
    }
}
