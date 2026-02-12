package qh;

import android.graphics.Typeface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends f {

    /* renamed from: a  reason: collision with root package name */
    private final Typeface f45240a;

    /* renamed from: b  reason: collision with root package name */
    private final InterfaceC0604a f45241b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f45242c;

    /* renamed from: qh.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0604a {
        void a(Typeface typeface);
    }

    public a(InterfaceC0604a interfaceC0604a, Typeface typeface) {
        this.f45240a = typeface;
        this.f45241b = interfaceC0604a;
    }

    private void d(Typeface typeface) {
        if (!this.f45242c) {
            this.f45241b.a(typeface);
        }
    }

    @Override // qh.f
    public void a(int i10) {
        d(this.f45240a);
    }

    @Override // qh.f
    public void b(Typeface typeface, boolean z10) {
        d(typeface);
    }

    public void c() {
        this.f45242c = true;
    }
}
