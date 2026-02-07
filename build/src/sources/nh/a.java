package nh;

import android.graphics.Typeface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends f {

    /* renamed from: a  reason: collision with root package name */
    private final Typeface f40728a;

    /* renamed from: b  reason: collision with root package name */
    private final InterfaceC0542a f40729b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f40730c;

    /* renamed from: nh.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0542a {
        void a(Typeface typeface);
    }

    public a(InterfaceC0542a interfaceC0542a, Typeface typeface) {
        this.f40728a = typeface;
        this.f40729b = interfaceC0542a;
    }

    private void d(Typeface typeface) {
        if (!this.f40730c) {
            this.f40729b.a(typeface);
        }
    }

    @Override // nh.f
    public void a(int i10) {
        d(this.f40728a);
    }

    @Override // nh.f
    public void b(Typeface typeface, boolean z10) {
        d(typeface);
    }

    public void c() {
        this.f40730c = true;
    }
}
