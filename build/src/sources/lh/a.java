package lh;

import android.graphics.Typeface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends f {

    /* renamed from: a  reason: collision with root package name */
    private final Typeface f36942a;

    /* renamed from: b  reason: collision with root package name */
    private final InterfaceC0469a f36943b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f36944c;

    /* renamed from: lh.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0469a {
        void a(Typeface typeface);
    }

    public a(InterfaceC0469a interfaceC0469a, Typeface typeface) {
        this.f36942a = typeface;
        this.f36943b = interfaceC0469a;
    }

    private void d(Typeface typeface) {
        if (!this.f36944c) {
            this.f36943b.a(typeface);
        }
    }

    @Override // lh.f
    public void a(int i10) {
        d(this.f36942a);
    }

    @Override // lh.f
    public void b(Typeface typeface, boolean z10) {
        d(typeface);
    }

    public void c() {
        this.f36944c = true;
    }
}
