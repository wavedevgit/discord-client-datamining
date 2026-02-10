package androidx.transition;

import android.animation.TimeInterpolator;
import android.util.AndroidRuntimeException;
import android.view.View;
import android.view.ViewGroup;
import androidx.transition.Transition;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.util.ArrayList;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a0 extends Transition {

    /* renamed from: d0  reason: collision with root package name */
    int f5326d0;

    /* renamed from: b0  reason: collision with root package name */
    ArrayList f5324b0 = new ArrayList();

    /* renamed from: c0  reason: collision with root package name */
    private boolean f5325c0 = true;

    /* renamed from: e0  reason: collision with root package name */
    boolean f5327e0 = false;

    /* renamed from: f0  reason: collision with root package name */
    private int f5328f0 = 0;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends w {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Transition f5329a;

        a(Transition transition) {
            this.f5329a = transition;
        }

        @Override // androidx.transition.w, androidx.transition.Transition.i
        public void onTransitionEnd(Transition transition) {
            this.f5329a.l0();
            transition.h0(this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b extends w {
        b() {
        }

        @Override // androidx.transition.w, androidx.transition.Transition.i
        public void onTransitionCancel(Transition transition) {
            a0.this.f5324b0.remove(transition);
            if (!a0.this.S()) {
                a0.this.d0(Transition.j.f5321c, false);
                a0 a0Var = a0.this;
                a0Var.M = true;
                a0Var.d0(Transition.j.f5320b, false);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c extends w {

        /* renamed from: a  reason: collision with root package name */
        a0 f5332a;

        c(a0 a0Var) {
            this.f5332a = a0Var;
        }

        @Override // androidx.transition.w, androidx.transition.Transition.i
        public void onTransitionEnd(Transition transition) {
            a0 a0Var = this.f5332a;
            int i10 = a0Var.f5326d0 - 1;
            a0Var.f5326d0 = i10;
            if (i10 == 0) {
                a0Var.f5327e0 = false;
                a0Var.u();
            }
            transition.h0(this);
        }

        @Override // androidx.transition.w, androidx.transition.Transition.i
        public void onTransitionStart(Transition transition) {
            a0 a0Var = this.f5332a;
            if (!a0Var.f5327e0) {
                a0Var.u0();
                this.f5332a.f5327e0 = true;
            }
        }
    }

    private int C0(long j10) {
        for (int i10 = 1; i10 < this.f5324b0.size(); i10++) {
            if (((Transition) this.f5324b0.get(i10)).W > j10) {
                return i10 - 1;
            }
        }
        return this.f5324b0.size() - 1;
    }

    private void J0() {
        c cVar = new c(this);
        Iterator it = this.f5324b0.iterator();
        while (it.hasNext()) {
            ((Transition) it.next()).c(cVar);
        }
        this.f5326d0 = this.f5324b0.size();
    }

    private void z0(Transition transition) {
        this.f5324b0.add(transition);
        transition.C = this;
    }

    public Transition A0(int i10) {
        if (i10 >= 0 && i10 < this.f5324b0.size()) {
            return (Transition) this.f5324b0.get(i10);
        }
        return null;
    }

    public int B0() {
        return this.f5324b0.size();
    }

    @Override // androidx.transition.Transition
    /* renamed from: D0 */
    public a0 h0(Transition.i iVar) {
        return (a0) super.h0(iVar);
    }

    @Override // androidx.transition.Transition
    /* renamed from: E0 */
    public a0 i0(View view) {
        for (int i10 = 0; i10 < this.f5324b0.size(); i10++) {
            ((Transition) this.f5324b0.get(i10)).i0(view);
        }
        return (a0) super.i0(view);
    }

    @Override // androidx.transition.Transition
    /* renamed from: F0 */
    public a0 o0(long j10) {
        ArrayList arrayList;
        super.o0(j10);
        if (this.f5287i >= 0 && (arrayList = this.f5324b0) != null) {
            int size = arrayList.size();
            for (int i10 = 0; i10 < size; i10++) {
                ((Transition) this.f5324b0.get(i10)).o0(j10);
            }
        }
        return this;
    }

    @Override // androidx.transition.Transition
    /* renamed from: G0 */
    public a0 q0(TimeInterpolator timeInterpolator) {
        this.f5328f0 |= 1;
        ArrayList arrayList = this.f5324b0;
        if (arrayList != null) {
            int size = arrayList.size();
            for (int i10 = 0; i10 < size; i10++) {
                ((Transition) this.f5324b0.get(i10)).q0(timeInterpolator);
            }
        }
        return (a0) super.q0(timeInterpolator);
    }

    public a0 H0(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f5325c0 = false;
                return this;
            }
            throw new AndroidRuntimeException("Invalid parameter for TransitionSet ordering: " + i10);
        }
        this.f5325c0 = true;
        return this;
    }

    @Override // androidx.transition.Transition
    /* renamed from: I0 */
    public a0 t0(long j10) {
        return (a0) super.t0(j10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.transition.Transition
    public boolean S() {
        for (int i10 = 0; i10 < this.f5324b0.size(); i10++) {
            if (((Transition) this.f5324b0.get(i10)).S()) {
                return true;
            }
        }
        return false;
    }

    @Override // androidx.transition.Transition
    public boolean T() {
        int size = this.f5324b0.size();
        for (int i10 = 0; i10 < size; i10++) {
            if (!((Transition) this.f5324b0.get(i10)).T()) {
                return false;
            }
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.transition.Transition
    public void cancel() {
        super.cancel();
        int size = this.f5324b0.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((Transition) this.f5324b0.get(i10)).cancel();
        }
    }

    @Override // androidx.transition.Transition
    public void e0(View view) {
        super.e0(view);
        int size = this.f5324b0.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((Transition) this.f5324b0.get(i10)).e0(view);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.transition.Transition
    public void g0() {
        this.U = 0L;
        b bVar = new b();
        for (int i10 = 0; i10 < this.f5324b0.size(); i10++) {
            Transition transition = (Transition) this.f5324b0.get(i10);
            transition.c(bVar);
            transition.g0();
            long O = transition.O();
            if (this.f5325c0) {
                this.U = Math.max(this.U, O);
            } else {
                long j10 = this.U;
                transition.W = j10;
                this.U = j10 + O;
            }
        }
    }

    @Override // androidx.transition.Transition
    public void h(c0 c0Var) {
        if (V(c0Var.f5376b)) {
            Iterator it = this.f5324b0.iterator();
            while (it.hasNext()) {
                Transition transition = (Transition) it.next();
                if (transition.V(c0Var.f5376b)) {
                    transition.h(c0Var);
                    c0Var.f5377c.add(transition);
                }
            }
        }
    }

    @Override // androidx.transition.Transition
    public void j0(View view) {
        super.j0(view);
        int size = this.f5324b0.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((Transition) this.f5324b0.get(i10)).j0(view);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.transition.Transition
    public void k(c0 c0Var) {
        super.k(c0Var);
        int size = this.f5324b0.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((Transition) this.f5324b0.get(i10)).k(c0Var);
        }
    }

    @Override // androidx.transition.Transition
    public void l(c0 c0Var) {
        if (V(c0Var.f5376b)) {
            Iterator it = this.f5324b0.iterator();
            while (it.hasNext()) {
                Transition transition = (Transition) it.next();
                if (transition.V(c0Var.f5376b)) {
                    transition.l(c0Var);
                    c0Var.f5377c.add(transition);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.transition.Transition
    public void l0() {
        if (this.f5324b0.isEmpty()) {
            u0();
            u();
            return;
        }
        J0();
        if (!this.f5325c0) {
            for (int i10 = 1; i10 < this.f5324b0.size(); i10++) {
                ((Transition) this.f5324b0.get(i10 - 1)).c(new a((Transition) this.f5324b0.get(i10)));
            }
            Transition transition = (Transition) this.f5324b0.get(0);
            if (transition != null) {
                transition.l0();
                return;
            }
            return;
        }
        Iterator it = this.f5324b0.iterator();
        while (it.hasNext()) {
            ((Transition) it.next()).l0();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.transition.Transition
    public void m0(boolean z10) {
        super.m0(z10);
        int size = this.f5324b0.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((Transition) this.f5324b0.get(i10)).m0(z10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Removed duplicated region for block: B:48:0x00ab  */
    /* JADX WARN: Removed duplicated region for block: B:65:? A[RETURN, SYNTHETIC] */
    @Override // androidx.transition.Transition
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void n0(long r20, long r22) {
        /*
            r19 = this;
            r0 = r19
            r1 = r20
            r3 = r22
            long r5 = r0.O()
            androidx.transition.a0 r7 = r0.C
            r8 = 0
            if (r7 == 0) goto L22
            int r7 = (r1 > r8 ? 1 : (r1 == r8 ? 0 : -1))
            if (r7 >= 0) goto L18
            int r7 = (r3 > r8 ? 1 : (r3 == r8 ? 0 : -1))
            if (r7 < 0) goto Lc2
        L18:
            int r7 = (r1 > r5 ? 1 : (r1 == r5 ? 0 : -1))
            if (r7 <= 0) goto L22
            int r7 = (r3 > r5 ? 1 : (r3 == r5 ? 0 : -1))
            if (r7 <= 0) goto L22
            goto Lc2
        L22:
            int r7 = (r1 > r3 ? 1 : (r1 == r3 ? 0 : -1))
            r10 = 0
            r11 = 1
            if (r7 >= 0) goto L2a
            r12 = r11
            goto L2b
        L2a:
            r12 = r10
        L2b:
            int r13 = (r1 > r8 ? 1 : (r1 == r8 ? 0 : -1))
            if (r13 < 0) goto L33
            int r14 = (r3 > r8 ? 1 : (r3 == r8 ? 0 : -1))
            if (r14 < 0) goto L3b
        L33:
            int r14 = (r1 > r5 ? 1 : (r1 == r5 ? 0 : -1))
            if (r14 > 0) goto L42
            int r14 = (r3 > r5 ? 1 : (r3 == r5 ? 0 : -1))
            if (r14 <= 0) goto L42
        L3b:
            r0.M = r10
            androidx.transition.Transition$j r14 = androidx.transition.Transition.j.f5319a
            r0.d0(r14, r12)
        L42:
            boolean r14 = r0.f5325c0
            if (r14 == 0) goto L5f
        L46:
            java.util.ArrayList r7 = r0.f5324b0
            int r7 = r7.size()
            if (r10 >= r7) goto L5c
            java.util.ArrayList r7 = r0.f5324b0
            java.lang.Object r7 = r7.get(r10)
            androidx.transition.Transition r7 = (androidx.transition.Transition) r7
            r7.n0(r1, r3)
            int r10 = r10 + 1
            goto L46
        L5c:
            r16 = r8
            goto La7
        L5f:
            int r10 = r0.C0(r3)
            if (r7 < 0) goto L8a
        L65:
            java.util.ArrayList r7 = r0.f5324b0
            int r7 = r7.size()
            if (r10 >= r7) goto L5c
            java.util.ArrayList r7 = r0.f5324b0
            java.lang.Object r7 = r7.get(r10)
            androidx.transition.Transition r7 = (androidx.transition.Transition) r7
            long r14 = r7.W
            r16 = r8
            long r8 = r1 - r14
            int r18 = (r8 > r16 ? 1 : (r8 == r16 ? 0 : -1))
            if (r18 >= 0) goto L80
            goto La7
        L80:
            long r14 = r3 - r14
            r7.n0(r8, r14)
            int r10 = r10 + 1
            r8 = r16
            goto L65
        L8a:
            r16 = r8
        L8c:
            if (r10 < 0) goto La7
            java.util.ArrayList r7 = r0.f5324b0
            java.lang.Object r7 = r7.get(r10)
            androidx.transition.Transition r7 = (androidx.transition.Transition) r7
            long r8 = r7.W
            long r14 = r1 - r8
            long r8 = r3 - r8
            r7.n0(r14, r8)
            int r7 = (r14 > r16 ? 1 : (r14 == r16 ? 0 : -1))
            if (r7 < 0) goto La4
            goto La7
        La4:
            int r10 = r10 + (-1)
            goto L8c
        La7:
            androidx.transition.a0 r7 = r0.C
            if (r7 == 0) goto Lc2
            int r1 = (r1 > r5 ? 1 : (r1 == r5 ? 0 : -1))
            if (r1 <= 0) goto Lb3
            int r2 = (r3 > r5 ? 1 : (r3 == r5 ? 0 : -1))
            if (r2 <= 0) goto Lb9
        Lb3:
            if (r13 >= 0) goto Lc2
            int r2 = (r3 > r16 ? 1 : (r3 == r16 ? 0 : -1))
            if (r2 < 0) goto Lc2
        Lb9:
            if (r1 <= 0) goto Lbd
            r0.M = r11
        Lbd:
            androidx.transition.Transition$j r1 = androidx.transition.Transition.j.f5320b
            r0.d0(r1, r12)
        Lc2:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.transition.a0.n0(long, long):void");
    }

    @Override // androidx.transition.Transition
    /* renamed from: o */
    public Transition clone() {
        a0 a0Var = (a0) super.clone();
        a0Var.f5324b0 = new ArrayList();
        int size = this.f5324b0.size();
        for (int i10 = 0; i10 < size; i10++) {
            a0Var.z0(((Transition) this.f5324b0.get(i10)).clone());
        }
        return a0Var;
    }

    @Override // androidx.transition.Transition
    public void p0(Transition.f fVar) {
        super.p0(fVar);
        this.f5328f0 |= 8;
        int size = this.f5324b0.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((Transition) this.f5324b0.get(i10)).p0(fVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.transition.Transition
    public void r(ViewGroup viewGroup, d0 d0Var, d0 d0Var2, ArrayList arrayList, ArrayList arrayList2) {
        long J = J();
        int size = this.f5324b0.size();
        for (int i10 = 0; i10 < size; i10++) {
            Transition transition = (Transition) this.f5324b0.get(i10);
            if (J > 0 && (this.f5325c0 || i10 == 0)) {
                long J2 = transition.J();
                if (J2 > 0) {
                    transition.t0(J2 + J);
                } else {
                    transition.t0(J);
                }
            }
            transition.r(viewGroup, d0Var, d0Var2, arrayList, arrayList2);
        }
    }

    @Override // androidx.transition.Transition
    public void r0(k kVar) {
        super.r0(kVar);
        this.f5328f0 |= 4;
        if (this.f5324b0 != null) {
            for (int i10 = 0; i10 < this.f5324b0.size(); i10++) {
                ((Transition) this.f5324b0.get(i10)).r0(kVar);
            }
        }
    }

    @Override // androidx.transition.Transition
    public void s0(y yVar) {
        super.s0(yVar);
        this.f5328f0 |= 2;
        int size = this.f5324b0.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((Transition) this.f5324b0.get(i10)).s0(yVar);
        }
    }

    @Override // androidx.transition.Transition
    public Transition v(Class cls, boolean z10) {
        for (int i10 = 0; i10 < this.f5324b0.size(); i10++) {
            ((Transition) this.f5324b0.get(i10)).v(cls, z10);
        }
        return super.v(cls, z10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.transition.Transition
    public String v0(String str) {
        String v02 = super.v0(str);
        for (int i10 = 0; i10 < this.f5324b0.size(); i10++) {
            StringBuilder sb2 = new StringBuilder();
            sb2.append(v02);
            sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
            sb2.append(((Transition) this.f5324b0.get(i10)).v0(str + "  "));
            v02 = sb2.toString();
        }
        return v02;
    }

    @Override // androidx.transition.Transition
    /* renamed from: w0 */
    public a0 c(Transition.i iVar) {
        return (a0) super.c(iVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.transition.Transition
    public void x(ViewGroup viewGroup) {
        super.x(viewGroup);
        int size = this.f5324b0.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((Transition) this.f5324b0.get(i10)).x(viewGroup);
        }
    }

    @Override // androidx.transition.Transition
    /* renamed from: x0 */
    public a0 d(View view) {
        for (int i10 = 0; i10 < this.f5324b0.size(); i10++) {
            ((Transition) this.f5324b0.get(i10)).d(view);
        }
        return (a0) super.d(view);
    }

    public a0 y0(Transition transition) {
        z0(transition);
        long j10 = this.f5287i;
        if (j10 >= 0) {
            transition.o0(j10);
        }
        if ((this.f5328f0 & 1) != 0) {
            transition.q0(B());
        }
        if ((this.f5328f0 & 2) != 0) {
            transition.s0(G());
        }
        if ((this.f5328f0 & 4) != 0) {
            transition.r0(F());
        }
        if ((this.f5328f0 & 8) != 0) {
            transition.p0(A());
        }
        return this;
    }
}
