package nh;

import android.graphics.Typeface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends f {

    /* renamed from: a  reason: collision with root package name */
    private final Typeface f40680a;

    /* renamed from: b  reason: collision with root package name */
    private final InterfaceC0542a f40681b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f40682c;

    /* renamed from: nh.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0542a {
        void a(Typeface typeface);
    }

    public a(InterfaceC0542a interfaceC0542a, Typeface typeface) {
        this.f40680a = typeface;
        this.f40681b = interfaceC0542a;
    }

    private void d(Typeface typeface) {
        if (!this.f40682c) {
            this.f40681b.a(typeface);
        }
    }

    @Override // nh.f
    public void a(int i10) {
        d(this.f40680a);
    }

    @Override // nh.f
    public void b(Typeface typeface, boolean z10) {
        d(typeface);
    }

    public void c() {
        this.f40682c = true;
    }
}
