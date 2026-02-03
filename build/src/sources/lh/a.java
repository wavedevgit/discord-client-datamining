package lh;

import android.graphics.Typeface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends f {

    /* renamed from: a  reason: collision with root package name */
    private final Typeface f37473a;

    /* renamed from: b  reason: collision with root package name */
    private final InterfaceC0485a f37474b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f37475c;

    /* renamed from: lh.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0485a {
        void a(Typeface typeface);
    }

    public a(InterfaceC0485a interfaceC0485a, Typeface typeface) {
        this.f37473a = typeface;
        this.f37474b = interfaceC0485a;
    }

    private void d(Typeface typeface) {
        if (!this.f37475c) {
            this.f37474b.a(typeface);
        }
    }

    @Override // lh.f
    public void a(int i10) {
        d(this.f37473a);
    }

    @Override // lh.f
    public void b(Typeface typeface, boolean z10) {
        d(typeface);
    }

    public void c() {
        this.f37475c = true;
    }
}
