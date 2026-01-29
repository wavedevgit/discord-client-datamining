package androidx.dynamicanimation.animation;

import android.os.Looper;
import android.util.AndroidRuntimeException;
import androidx.dynamicanimation.animation.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class SpringAnimation extends b {
    private c A;
    private float B;
    private boolean C;

    public SpringAnimation(b3.c cVar) {
        super(cVar);
        this.A = null;
        this.B = Float.MAX_VALUE;
        this.C = false;
    }

    private void x() {
        c cVar = this.A;
        if (cVar != null) {
            double a10 = cVar.a();
            if (a10 <= this.f3904g) {
                if (a10 >= this.f3905h) {
                    return;
                }
                throw new UnsupportedOperationException("Final position of the spring cannot be less than the min value.");
            }
            throw new UnsupportedOperationException("Final position of the spring cannot be greater than the max value.");
        }
        throw new UnsupportedOperationException("Incomplete SpringAnimation: Either final position or a spring force needs to be set.");
    }

    @Override // androidx.dynamicanimation.animation.b
    public void d() {
        super.d();
        float f10 = this.B;
        if (f10 != Float.MAX_VALUE) {
            c cVar = this.A;
            if (cVar == null) {
                this.A = new c(f10);
            } else {
                cVar.e(f10);
            }
            this.B = Float.MAX_VALUE;
        }
    }

    @Override // androidx.dynamicanimation.animation.b
    void p(float f10) {
    }

    @Override // androidx.dynamicanimation.animation.b
    public void q() {
        x();
        this.A.g(g());
        super.q();
    }

    @Override // androidx.dynamicanimation.animation.b
    boolean s(long j10) {
        if (this.C) {
            float f10 = this.B;
            if (f10 != Float.MAX_VALUE) {
                this.A.e(f10);
                this.B = Float.MAX_VALUE;
            }
            this.f3899b = this.A.a();
            this.f3898a = 0.0f;
            this.C = false;
            return true;
        }
        if (this.B != Float.MAX_VALUE) {
            long j11 = j10 / 2;
            b.p h10 = this.A.h(this.f3899b, this.f3898a, j11);
            this.A.e(this.B);
            this.B = Float.MAX_VALUE;
            b.p h11 = this.A.h(h10.f3912a, h10.f3913b, j11);
            this.f3899b = h11.f3912a;
            this.f3898a = h11.f3913b;
        } else {
            b.p h12 = this.A.h(this.f3899b, this.f3898a, j10);
            this.f3899b = h12.f3912a;
            this.f3898a = h12.f3913b;
        }
        float max = Math.max(this.f3899b, this.f3905h);
        this.f3899b = max;
        float min = Math.min(max, this.f3904g);
        this.f3899b = min;
        if (!w(min, this.f3898a)) {
            return false;
        }
        this.f3899b = this.A.a();
        this.f3898a = 0.0f;
        return true;
    }

    public void t(float f10) {
        if (h()) {
            this.B = f10;
            return;
        }
        if (this.A == null) {
            this.A = new c(f10);
        }
        this.A.e(f10);
        q();
    }

    public boolean u() {
        if (this.A.f3915b > 0.0d) {
            return true;
        }
        return false;
    }

    public c v() {
        return this.A;
    }

    boolean w(float f10, float f11) {
        return this.A.c(f10, f11);
    }

    public SpringAnimation y(c cVar) {
        this.A = cVar;
        return this;
    }

    public void z() {
        if (u()) {
            if (Looper.myLooper() == Looper.getMainLooper()) {
                if (this.f3903f) {
                    this.C = true;
                    return;
                }
                return;
            }
            throw new AndroidRuntimeException("Animations may only be started on the main thread");
        }
        throw new UnsupportedOperationException("Spring animations can only come to an end when there is damping");
    }

    public SpringAnimation(b3.c cVar, float f10) {
        super(cVar);
        this.A = null;
        this.B = Float.MAX_VALUE;
        this.C = false;
        this.A = new c(f10);
    }

    public SpringAnimation(Object obj, b3.b bVar) {
        super(obj, bVar);
        this.A = null;
        this.B = Float.MAX_VALUE;
        this.C = false;
    }

    public SpringAnimation(Object obj, b3.b bVar, float f10) {
        super(obj, bVar);
        this.A = null;
        this.B = Float.MAX_VALUE;
        this.C = false;
        this.A = new c(f10);
    }
}
