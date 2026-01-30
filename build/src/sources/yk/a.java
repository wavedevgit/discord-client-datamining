package yk;

import ck.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends p {

    /* renamed from: c  reason: collision with root package name */
    private final float f54826c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(float f10, float f11, float f12) {
        super(f10, f11);
        this.f54826c = f12;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean f(float f10, float f11, float f12) {
        if (Math.abs(f11 - d()) > f10 || Math.abs(f12 - c()) > f10) {
            return false;
        }
        float abs = Math.abs(f10 - this.f54826c);
        if (abs > 1.0f && abs > this.f54826c) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a g(float f10, float f11, float f12) {
        return new a((c() + f11) / 2.0f, (d() + f10) / 2.0f, (this.f54826c + f12) / 2.0f);
    }
}
