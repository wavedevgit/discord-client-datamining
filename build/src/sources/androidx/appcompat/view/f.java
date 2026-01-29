package androidx.appcompat.view;

import android.view.View;
import android.view.animation.Interpolator;
import androidx.core.view.r0;
import androidx.core.view.s0;
import androidx.core.view.t0;
import java.util.ArrayList;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f {

    /* renamed from: c  reason: collision with root package name */
    private Interpolator f1200c;

    /* renamed from: d  reason: collision with root package name */
    s0 f1201d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f1202e;

    /* renamed from: b  reason: collision with root package name */
    private long f1199b = -1;

    /* renamed from: f  reason: collision with root package name */
    private final t0 f1203f = new a();

    /* renamed from: a  reason: collision with root package name */
    final ArrayList f1198a = new ArrayList();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends t0 {

        /* renamed from: a  reason: collision with root package name */
        private boolean f1204a = false;

        /* renamed from: b  reason: collision with root package name */
        private int f1205b = 0;

        a() {
        }

        @Override // androidx.core.view.s0
        public void b(View view) {
            int i10 = this.f1205b + 1;
            this.f1205b = i10;
            if (i10 == f.this.f1198a.size()) {
                s0 s0Var = f.this.f1201d;
                if (s0Var != null) {
                    s0Var.b(null);
                }
                d();
            }
        }

        @Override // androidx.core.view.t0, androidx.core.view.s0
        public void c(View view) {
            if (!this.f1204a) {
                this.f1204a = true;
                s0 s0Var = f.this.f1201d;
                if (s0Var != null) {
                    s0Var.c(null);
                }
            }
        }

        void d() {
            this.f1205b = 0;
            this.f1204a = false;
            f.this.b();
        }
    }

    public void a() {
        if (!this.f1202e) {
            return;
        }
        Iterator it = this.f1198a.iterator();
        while (it.hasNext()) {
            ((r0) it.next()).c();
        }
        this.f1202e = false;
    }

    void b() {
        this.f1202e = false;
    }

    public f c(r0 r0Var) {
        if (!this.f1202e) {
            this.f1198a.add(r0Var);
        }
        return this;
    }

    public f d(r0 r0Var, r0 r0Var2) {
        this.f1198a.add(r0Var);
        r0Var2.i(r0Var.d());
        this.f1198a.add(r0Var2);
        return this;
    }

    public f e(long j10) {
        if (!this.f1202e) {
            this.f1199b = j10;
        }
        return this;
    }

    public f f(Interpolator interpolator) {
        if (!this.f1202e) {
            this.f1200c = interpolator;
        }
        return this;
    }

    public f g(s0 s0Var) {
        if (!this.f1202e) {
            this.f1201d = s0Var;
        }
        return this;
    }

    public void h() {
        if (this.f1202e) {
            return;
        }
        Iterator it = this.f1198a.iterator();
        while (it.hasNext()) {
            r0 r0Var = (r0) it.next();
            long j10 = this.f1199b;
            if (j10 >= 0) {
                r0Var.e(j10);
            }
            Interpolator interpolator = this.f1200c;
            if (interpolator != null) {
                r0Var.f(interpolator);
            }
            if (this.f1201d != null) {
                r0Var.g(this.f1203f);
            }
            r0Var.k();
        }
        this.f1202e = true;
    }
}
