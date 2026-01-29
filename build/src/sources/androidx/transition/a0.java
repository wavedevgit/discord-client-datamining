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
    int f5165d0;

    /* renamed from: b0  reason: collision with root package name */
    ArrayList f5163b0 = new ArrayList();

    /* renamed from: c0  reason: collision with root package name */
    private boolean f5164c0 = true;

    /* renamed from: e0  reason: collision with root package name */
    boolean f5166e0 = false;

    /* renamed from: f0  reason: collision with root package name */
    private int f5167f0 = 0;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends w {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Transition f5168a;

        a(Transition transition) {
            this.f5168a = transition;
        }

        @Override // androidx.transition.w, androidx.transition.Transition.h
        public void onTransitionEnd(Transition transition) {
            this.f5168a.i0();
            transition.e0(this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b extends w {
        b() {
        }

        @Override // androidx.transition.w, androidx.transition.Transition.h
        public void onTransitionCancel(Transition transition) {
            a0.this.f5163b0.remove(transition);
            if (!a0.this.P()) {
                a0.this.a0(Transition.i.f5160c, false);
                a0 a0Var = a0.this;
                a0Var.M = true;
                a0Var.a0(Transition.i.f5159b, false);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c extends w {

        /* renamed from: a  reason: collision with root package name */
        a0 f5171a;

        c(a0 a0Var) {
            this.f5171a = a0Var;
        }

        @Override // androidx.transition.w, androidx.transition.Transition.h
        public void onTransitionEnd(Transition transition) {
            a0 a0Var = this.f5171a;
            int i10 = a0Var.f5165d0 - 1;
            a0Var.f5165d0 = i10;
            if (i10 == 0) {
                a0Var.f5166e0 = false;
                a0Var.t();
            }
            transition.e0(this);
        }

        @Override // androidx.transition.w, androidx.transition.Transition.h
        public void onTransitionStart(Transition transition) {
            a0 a0Var = this.f5171a;
            if (!a0Var.f5166e0) {
                a0Var.r0();
                this.f5171a.f5166e0 = true;
            }
        }
    }

    private void I0() {
        c cVar = new c(this);
        Iterator it = this.f5163b0.iterator();
        while (it.hasNext()) {
            ((Transition) it.next()).c(cVar);
        }
        this.f5165d0 = this.f5163b0.size();
    }

    private void w0(Transition transition) {
        this.f5163b0.add(transition);
        transition.C = this;
    }

    private int z0(long j10) {
        for (int i10 = 1; i10 < this.f5163b0.size(); i10++) {
            if (((Transition) this.f5163b0.get(i10)).W > j10) {
                return i10 - 1;
            }
        }
        return this.f5163b0.size() - 1;
    }

    @Override // androidx.transition.Transition
    /* renamed from: B0 */
    public a0 e0(Transition.h hVar) {
        return (a0) super.e0(hVar);
    }

    @Override // androidx.transition.Transition
    /* renamed from: D0 */
    public a0 f0(View view) {
        for (int i10 = 0; i10 < this.f5163b0.size(); i10++) {
            ((Transition) this.f5163b0.get(i10)).f0(view);
        }
        return (a0) super.f0(view);
    }

    @Override // androidx.transition.Transition
    /* renamed from: E0 */
    public a0 l0(long j10) {
        ArrayList arrayList;
        super.l0(j10);
        if (this.f5126i >= 0 && (arrayList = this.f5163b0) != null) {
            int size = arrayList.size();
            for (int i10 = 0; i10 < size; i10++) {
                ((Transition) this.f5163b0.get(i10)).l0(j10);
            }
        }
        return this;
    }

    @Override // androidx.transition.Transition
    /* renamed from: F0 */
    public a0 n0(TimeInterpolator timeInterpolator) {
        this.f5167f0 |= 1;
        ArrayList arrayList = this.f5163b0;
        if (arrayList != null) {
            int size = arrayList.size();
            for (int i10 = 0; i10 < size; i10++) {
                ((Transition) this.f5163b0.get(i10)).n0(timeInterpolator);
            }
        }
        return (a0) super.n0(timeInterpolator);
    }

    public a0 G0(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f5164c0 = false;
                return this;
            }
            throw new AndroidRuntimeException("Invalid parameter for TransitionSet ordering: " + i10);
        }
        this.f5164c0 = true;
        return this;
    }

    @Override // androidx.transition.Transition
    /* renamed from: H0 */
    public a0 q0(long j10) {
        return (a0) super.q0(j10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.transition.Transition
    public boolean P() {
        for (int i10 = 0; i10 < this.f5163b0.size(); i10++) {
            if (((Transition) this.f5163b0.get(i10)).P()) {
                return true;
            }
        }
        return false;
    }

    @Override // androidx.transition.Transition
    public boolean Q() {
        int size = this.f5163b0.size();
        for (int i10 = 0; i10 < size; i10++) {
            if (!((Transition) this.f5163b0.get(i10)).Q()) {
                return false;
            }
        }
        return true;
    }

    @Override // androidx.transition.Transition
    public void b0(View view) {
        super.b0(view);
        int size = this.f5163b0.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((Transition) this.f5163b0.get(i10)).b0(view);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.transition.Transition
    public void cancel() {
        super.cancel();
        int size = this.f5163b0.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((Transition) this.f5163b0.get(i10)).cancel();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.transition.Transition
    public void d0() {
        this.U = 0L;
        b bVar = new b();
        for (int i10 = 0; i10 < this.f5163b0.size(); i10++) {
            Transition transition = (Transition) this.f5163b0.get(i10);
            transition.c(bVar);
            transition.d0();
            long M = transition.M();
            if (this.f5164c0) {
                this.U = Math.max(this.U, M);
            } else {
                long j10 = this.U;
                transition.W = j10;
                this.U = j10 + M;
            }
        }
    }

    @Override // androidx.transition.Transition
    public void g0(View view) {
        super.g0(view);
        int size = this.f5163b0.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((Transition) this.f5163b0.get(i10)).g0(view);
        }
    }

    @Override // androidx.transition.Transition
    public void i(c0 c0Var) {
        if (S(c0Var.f5215b)) {
            Iterator it = this.f5163b0.iterator();
            while (it.hasNext()) {
                Transition transition = (Transition) it.next();
                if (transition.S(c0Var.f5215b)) {
                    transition.i(c0Var);
                    c0Var.f5216c.add(transition);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.transition.Transition
    public void i0() {
        if (this.f5163b0.isEmpty()) {
            r0();
            t();
            return;
        }
        I0();
        if (!this.f5164c0) {
            for (int i10 = 1; i10 < this.f5163b0.size(); i10++) {
                ((Transition) this.f5163b0.get(i10 - 1)).c(new a((Transition) this.f5163b0.get(i10)));
            }
            Transition transition = (Transition) this.f5163b0.get(0);
            if (transition != null) {
                transition.i0();
                return;
            }
            return;
        }
        Iterator it = this.f5163b0.iterator();
        while (it.hasNext()) {
            ((Transition) it.next()).i0();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.transition.Transition
    public void j0(boolean z10) {
        super.j0(z10);
        int size = this.f5163b0.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((Transition) this.f5163b0.get(i10)).j0(z10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.transition.Transition
    public void k(c0 c0Var) {
        super.k(c0Var);
        int size = this.f5163b0.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((Transition) this.f5163b0.get(i10)).k(c0Var);
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
    public void k0(long r20, long r22) {
        /*
            r19 = this;
            r0 = r19
            r1 = r20
            r3 = r22
            long r5 = r0.M()
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
            androidx.transition.Transition$i r14 = androidx.transition.Transition.i.f5158a
            r0.a0(r14, r12)
        L42:
            boolean r14 = r0.f5164c0
            if (r14 == 0) goto L5f
        L46:
            java.util.ArrayList r7 = r0.f5163b0
            int r7 = r7.size()
            if (r10 >= r7) goto L5c
            java.util.ArrayList r7 = r0.f5163b0
            java.lang.Object r7 = r7.get(r10)
            androidx.transition.Transition r7 = (androidx.transition.Transition) r7
            r7.k0(r1, r3)
            int r10 = r10 + 1
            goto L46
        L5c:
            r16 = r8
            goto La7
        L5f:
            int r10 = r0.z0(r3)
            if (r7 < 0) goto L8a
        L65:
            java.util.ArrayList r7 = r0.f5163b0
            int r7 = r7.size()
            if (r10 >= r7) goto L5c
            java.util.ArrayList r7 = r0.f5163b0
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
            r7.k0(r8, r14)
            int r10 = r10 + 1
            r8 = r16
            goto L65
        L8a:
            r16 = r8
        L8c:
            if (r10 < 0) goto La7
            java.util.ArrayList r7 = r0.f5163b0
            java.lang.Object r7 = r7.get(r10)
            androidx.transition.Transition r7 = (androidx.transition.Transition) r7
            long r8 = r7.W
            long r14 = r1 - r8
            long r8 = r3 - r8
            r7.k0(r14, r8)
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
            androidx.transition.Transition$i r1 = androidx.transition.Transition.i.f5159b
            r0.a0(r1, r12)
        Lc2:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.transition.a0.k0(long, long):void");
    }

    @Override // androidx.transition.Transition
    public void l(c0 c0Var) {
        if (S(c0Var.f5215b)) {
            Iterator it = this.f5163b0.iterator();
            while (it.hasNext()) {
                Transition transition = (Transition) it.next();
                if (transition.S(c0Var.f5215b)) {
                    transition.l(c0Var);
                    c0Var.f5216c.add(transition);
                }
            }
        }
    }

    @Override // androidx.transition.Transition
    public void m0(Transition.e eVar) {
        super.m0(eVar);
        this.f5167f0 |= 8;
        int size = this.f5163b0.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((Transition) this.f5163b0.get(i10)).m0(eVar);
        }
    }

    @Override // androidx.transition.Transition
    public void o0(k kVar) {
        super.o0(kVar);
        this.f5167f0 |= 4;
        if (this.f5163b0 != null) {
            for (int i10 = 0; i10 < this.f5163b0.size(); i10++) {
                ((Transition) this.f5163b0.get(i10)).o0(kVar);
            }
        }
    }

    @Override // androidx.transition.Transition
    /* renamed from: p */
    public Transition clone() {
        a0 a0Var = (a0) super.clone();
        a0Var.f5163b0 = new ArrayList();
        int size = this.f5163b0.size();
        for (int i10 = 0; i10 < size; i10++) {
            a0Var.w0(((Transition) this.f5163b0.get(i10)).clone());
        }
        return a0Var;
    }

    @Override // androidx.transition.Transition
    public void p0(y yVar) {
        super.p0(yVar);
        this.f5167f0 |= 2;
        int size = this.f5163b0.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((Transition) this.f5163b0.get(i10)).p0(yVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.transition.Transition
    public void r(ViewGroup viewGroup, d0 d0Var, d0 d0Var2, ArrayList arrayList, ArrayList arrayList2) {
        long G = G();
        int size = this.f5163b0.size();
        for (int i10 = 0; i10 < size; i10++) {
            Transition transition = (Transition) this.f5163b0.get(i10);
            if (G > 0 && (this.f5164c0 || i10 == 0)) {
                long G2 = transition.G();
                if (G2 > 0) {
                    transition.q0(G2 + G);
                } else {
                    transition.q0(G);
                }
            }
            transition.r(viewGroup, d0Var, d0Var2, arrayList, arrayList2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.transition.Transition
    public String s0(String str) {
        String s02 = super.s0(str);
        for (int i10 = 0; i10 < this.f5163b0.size(); i10++) {
            StringBuilder sb2 = new StringBuilder();
            sb2.append(s02);
            sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
            sb2.append(((Transition) this.f5163b0.get(i10)).s0(str + "  "));
            s02 = sb2.toString();
        }
        return s02;
    }

    @Override // androidx.transition.Transition
    /* renamed from: t0 */
    public a0 c(Transition.h hVar) {
        return (a0) super.c(hVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.transition.Transition
    public void u(ViewGroup viewGroup) {
        super.u(viewGroup);
        int size = this.f5163b0.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((Transition) this.f5163b0.get(i10)).u(viewGroup);
        }
    }

    @Override // androidx.transition.Transition
    /* renamed from: u0 */
    public a0 d(View view) {
        for (int i10 = 0; i10 < this.f5163b0.size(); i10++) {
            ((Transition) this.f5163b0.get(i10)).d(view);
        }
        return (a0) super.d(view);
    }

    public a0 v0(Transition transition) {
        w0(transition);
        long j10 = this.f5126i;
        if (j10 >= 0) {
            transition.l0(j10);
        }
        if ((this.f5167f0 & 1) != 0) {
            transition.n0(z());
        }
        if ((this.f5167f0 & 2) != 0) {
            transition.p0(D());
        }
        if ((this.f5167f0 & 4) != 0) {
            transition.o0(C());
        }
        if ((this.f5167f0 & 8) != 0) {
            transition.m0(y());
        }
        return this;
    }

    public Transition x0(int i10) {
        if (i10 >= 0 && i10 < this.f5163b0.size()) {
            return (Transition) this.f5163b0.get(i10);
        }
        return null;
    }

    public int y0() {
        return this.f5163b0.size();
    }
}
