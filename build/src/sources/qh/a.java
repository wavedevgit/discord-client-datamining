package qh;

import android.graphics.Typeface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends f {

    /* renamed from: a  reason: collision with root package name */
    private final Typeface f45808a;

    /* renamed from: b  reason: collision with root package name */
    private final InterfaceC0604a f45809b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f45810c;

    /* renamed from: qh.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0604a {
        void a(Typeface typeface);
    }

    public a(InterfaceC0604a interfaceC0604a, Typeface typeface) {
        this.f45808a = typeface;
        this.f45809b = interfaceC0604a;
    }

    private void d(Typeface typeface) {
        if (!this.f45810c) {
            this.f45809b.a(typeface);
        }
    }

    @Override // qh.f
    public void a(int i10) {
        d(this.f45808a);
    }

    @Override // qh.f
    public void b(Typeface typeface, boolean z10) {
        d(typeface);
    }

    public void c() {
        this.f45810c = true;
    }
}
