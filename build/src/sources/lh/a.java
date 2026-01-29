package lh;

import android.graphics.Typeface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends f {

    /* renamed from: a  reason: collision with root package name */
    private final Typeface f37343a;

    /* renamed from: b  reason: collision with root package name */
    private final InterfaceC0480a f37344b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f37345c;

    /* renamed from: lh.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0480a {
        void a(Typeface typeface);
    }

    public a(InterfaceC0480a interfaceC0480a, Typeface typeface) {
        this.f37343a = typeface;
        this.f37344b = interfaceC0480a;
    }

    private void d(Typeface typeface) {
        if (!this.f37345c) {
            this.f37344b.a(typeface);
        }
    }

    @Override // lh.f
    public void a(int i10) {
        d(this.f37343a);
    }

    @Override // lh.f
    public void b(Typeface typeface, boolean z10) {
        d(typeface);
    }

    public void c() {
        this.f37345c = true;
    }
}
