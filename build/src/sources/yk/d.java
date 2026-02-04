package yk;

import ck.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d extends p {

    /* renamed from: c  reason: collision with root package name */
    private final float f54566c;

    /* renamed from: d  reason: collision with root package name */
    private final int f54567d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(float f10, float f11, float f12) {
        this(f10, f11, f12, 1);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean f(float f10, float f11, float f12) {
        if (Math.abs(f11 - d()) > f10 || Math.abs(f12 - c()) > f10) {
            return false;
        }
        float abs = Math.abs(f10 - this.f54566c);
        if (abs > 1.0f && abs > this.f54566c) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d g(float f10, float f11, float f12) {
        int i10 = this.f54567d;
        int i11 = i10 + 1;
        float c10 = (i10 * c()) + f11;
        float f13 = i11;
        return new d(c10 / f13, ((this.f54567d * d()) + f10) / f13, ((this.f54567d * this.f54566c) + f12) / f13, i11);
    }

    public int h() {
        return this.f54567d;
    }

    public float i() {
        return this.f54566c;
    }

    private d(float f10, float f11, float f12, int i10) {
        super(f10, f11);
        this.f54566c = f12;
        this.f54567d = i10;
    }
}
