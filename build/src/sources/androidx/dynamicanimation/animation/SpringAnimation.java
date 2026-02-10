package androidx.dynamicanimation.animation;

import android.util.AndroidRuntimeException;
import androidx.dynamicanimation.animation.c;
import b3.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class SpringAnimation extends c {
    private d B;
    private float C;
    private boolean D;

    public SpringAnimation(e eVar) {
        super(eVar);
        this.B = null;
        this.C = Float.MAX_VALUE;
        this.D = false;
    }

    private void y() {
        d dVar = this.B;
        if (dVar != null) {
            double b10 = dVar.b();
            if (b10 <= this.f4064g) {
                if (b10 >= this.f4065h) {
                    return;
                }
                throw new UnsupportedOperationException("Final position of the spring cannot be less than the min value.");
            }
            throw new UnsupportedOperationException("Final position of the spring cannot be greater than the max value.");
        }
        throw new UnsupportedOperationException("Incomplete SpringAnimation: Either final position or a spring force needs to be set.");
    }

    public void A() {
        if (v()) {
            if (f().j()) {
                if (this.f4063f) {
                    this.D = true;
                    return;
                }
                return;
            }
            throw new AndroidRuntimeException("Animations may only be started on the same thread as the animation handler");
        }
        throw new UnsupportedOperationException("Spring animations can only come to an end when there is damping");
    }

    @Override // androidx.dynamicanimation.animation.c
    public void d() {
        super.d();
        float f10 = this.C;
        if (f10 != Float.MAX_VALUE) {
            d dVar = this.B;
            if (dVar == null) {
                this.B = new d(f10);
            } else {
                dVar.g(f10);
            }
            this.C = Float.MAX_VALUE;
        }
    }

    @Override // androidx.dynamicanimation.animation.c
    void q(float f10) {
    }

    @Override // androidx.dynamicanimation.animation.c
    public void r() {
        y();
        this.B.i(h());
        super.r();
    }

    @Override // androidx.dynamicanimation.animation.c
    boolean t(long j10) {
        if (this.D) {
            float f10 = this.C;
            if (f10 != Float.MAX_VALUE) {
                this.B.g(f10);
                this.C = Float.MAX_VALUE;
            }
            this.f4059b = this.B.b();
            this.f4058a = 0.0f;
            this.D = false;
            return true;
        }
        if (this.C != Float.MAX_VALUE) {
            long j11 = j10 / 2;
            c.p j12 = this.B.j(this.f4059b, this.f4058a, j11);
            this.B.g(this.C);
            this.C = Float.MAX_VALUE;
            c.p j13 = this.B.j(j12.f4073a, j12.f4074b, j11);
            this.f4059b = j13.f4073a;
            this.f4058a = j13.f4074b;
        } else {
            c.p j14 = this.B.j(this.f4059b, this.f4058a, j10);
            this.f4059b = j14.f4073a;
            this.f4058a = j14.f4074b;
        }
        float max = Math.max(this.f4059b, this.f4065h);
        this.f4059b = max;
        float min = Math.min(max, this.f4064g);
        this.f4059b = min;
        if (!x(min, this.f4058a)) {
            return false;
        }
        this.f4059b = this.B.b();
        this.f4058a = 0.0f;
        return true;
    }

    public void u(float f10) {
        if (i()) {
            this.C = f10;
            return;
        }
        if (this.B == null) {
            this.B = new d(f10);
        }
        this.B.g(f10);
        r();
    }

    public boolean v() {
        if (this.B.f4076b > 0.0d) {
            return true;
        }
        return false;
    }

    public d w() {
        return this.B;
    }

    boolean x(float f10, float f11) {
        return this.B.e(f10, f11);
    }

    public SpringAnimation z(d dVar) {
        this.B = dVar;
        return this;
    }

    public SpringAnimation(e eVar, float f10) {
        super(eVar);
        this.B = null;
        this.C = Float.MAX_VALUE;
        this.D = false;
        this.B = new d(f10);
    }

    public SpringAnimation(Object obj, b3.d dVar) {
        super(obj, dVar);
        this.B = null;
        this.C = Float.MAX_VALUE;
        this.D = false;
    }

    public SpringAnimation(Object obj, b3.d dVar, float f10) {
        super(obj, dVar);
        this.B = null;
        this.C = Float.MAX_VALUE;
        this.D = false;
        this.B = new d(f10);
    }
}
