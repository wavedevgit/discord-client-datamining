package androidx.appcompat.view;

import android.view.View;
import android.view.animation.Interpolator;
import androidx.core.view.s0;
import androidx.core.view.t0;
import androidx.core.view.u0;
import java.util.ArrayList;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f {

    /* renamed from: c  reason: collision with root package name */
    private Interpolator f1352c;

    /* renamed from: d  reason: collision with root package name */
    t0 f1353d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f1354e;

    /* renamed from: b  reason: collision with root package name */
    private long f1351b = -1;

    /* renamed from: f  reason: collision with root package name */
    private final u0 f1355f = new a();

    /* renamed from: a  reason: collision with root package name */
    final ArrayList f1350a = new ArrayList();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends u0 {

        /* renamed from: a  reason: collision with root package name */
        private boolean f1356a = false;

        /* renamed from: b  reason: collision with root package name */
        private int f1357b = 0;

        a() {
        }

        @Override // androidx.core.view.t0
        public void b(View view) {
            int i10 = this.f1357b + 1;
            this.f1357b = i10;
            if (i10 == f.this.f1350a.size()) {
                t0 t0Var = f.this.f1353d;
                if (t0Var != null) {
                    t0Var.b(null);
                }
                d();
            }
        }

        @Override // androidx.core.view.u0, androidx.core.view.t0
        public void c(View view) {
            if (!this.f1356a) {
                this.f1356a = true;
                t0 t0Var = f.this.f1353d;
                if (t0Var != null) {
                    t0Var.c(null);
                }
            }
        }

        void d() {
            this.f1357b = 0;
            this.f1356a = false;
            f.this.b();
        }
    }

    public void a() {
        if (!this.f1354e) {
            return;
        }
        Iterator it = this.f1350a.iterator();
        while (it.hasNext()) {
            ((s0) it.next()).c();
        }
        this.f1354e = false;
    }

    void b() {
        this.f1354e = false;
    }

    public f c(s0 s0Var) {
        if (!this.f1354e) {
            this.f1350a.add(s0Var);
        }
        return this;
    }

    public f d(s0 s0Var, s0 s0Var2) {
        this.f1350a.add(s0Var);
        s0Var2.i(s0Var.d());
        this.f1350a.add(s0Var2);
        return this;
    }

    public f e(long j10) {
        if (!this.f1354e) {
            this.f1351b = j10;
        }
        return this;
    }

    public f f(Interpolator interpolator) {
        if (!this.f1354e) {
            this.f1352c = interpolator;
        }
        return this;
    }

    public f g(t0 t0Var) {
        if (!this.f1354e) {
            this.f1353d = t0Var;
        }
        return this;
    }

    public void h() {
        if (this.f1354e) {
            return;
        }
        Iterator it = this.f1350a.iterator();
        while (it.hasNext()) {
            s0 s0Var = (s0) it.next();
            long j10 = this.f1351b;
            if (j10 >= 0) {
                s0Var.e(j10);
            }
            Interpolator interpolator = this.f1352c;
            if (interpolator != null) {
                s0Var.f(interpolator);
            }
            if (this.f1353d != null) {
                s0Var.g(this.f1355f);
            }
            s0Var.k();
        }
        this.f1354e = true;
    }
}
