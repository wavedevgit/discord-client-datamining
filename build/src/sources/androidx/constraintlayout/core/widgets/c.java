package androidx.constraintlayout.core.widgets;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    protected ConstraintWidget f2467a;

    /* renamed from: b  reason: collision with root package name */
    protected ConstraintWidget f2468b;

    /* renamed from: c  reason: collision with root package name */
    protected ConstraintWidget f2469c;

    /* renamed from: d  reason: collision with root package name */
    protected ConstraintWidget f2470d;

    /* renamed from: e  reason: collision with root package name */
    protected ConstraintWidget f2471e;

    /* renamed from: f  reason: collision with root package name */
    protected ConstraintWidget f2472f;

    /* renamed from: g  reason: collision with root package name */
    protected ConstraintWidget f2473g;

    /* renamed from: h  reason: collision with root package name */
    protected ArrayList f2474h;

    /* renamed from: i  reason: collision with root package name */
    protected int f2475i;

    /* renamed from: j  reason: collision with root package name */
    protected int f2476j;

    /* renamed from: k  reason: collision with root package name */
    protected float f2477k = 0.0f;

    /* renamed from: l  reason: collision with root package name */
    int f2478l;

    /* renamed from: m  reason: collision with root package name */
    int f2479m;

    /* renamed from: n  reason: collision with root package name */
    int f2480n;

    /* renamed from: o  reason: collision with root package name */
    boolean f2481o;

    /* renamed from: p  reason: collision with root package name */
    private int f2482p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f2483q;

    /* renamed from: r  reason: collision with root package name */
    protected boolean f2484r;

    /* renamed from: s  reason: collision with root package name */
    protected boolean f2485s;

    /* renamed from: t  reason: collision with root package name */
    protected boolean f2486t;

    /* renamed from: u  reason: collision with root package name */
    protected boolean f2487u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f2488v;

    public c(ConstraintWidget constraintWidget, int i10, boolean z10) {
        this.f2467a = constraintWidget;
        this.f2482p = i10;
        this.f2483q = z10;
    }

    private void b() {
        int i10 = this.f2482p * 2;
        ConstraintWidget constraintWidget = this.f2467a;
        boolean z10 = true;
        this.f2481o = true;
        ConstraintWidget constraintWidget2 = constraintWidget;
        boolean z11 = false;
        while (!z11) {
            this.f2475i++;
            ConstraintWidget[] constraintWidgetArr = constraintWidget.F0;
            int i11 = this.f2482p;
            ConstraintWidget constraintWidget3 = null;
            constraintWidgetArr[i11] = null;
            constraintWidget.E0[i11] = null;
            if (constraintWidget.V() != 8) {
                this.f2478l++;
                ConstraintWidget.b u10 = constraintWidget.u(this.f2482p);
                ConstraintWidget.b bVar = ConstraintWidget.b.MATCH_CONSTRAINT;
                if (u10 != bVar) {
                    this.f2479m += constraintWidget.E(this.f2482p);
                }
                int f10 = this.f2479m + constraintWidget.W[i10].f();
                this.f2479m = f10;
                int i12 = i10 + 1;
                this.f2479m = f10 + constraintWidget.W[i12].f();
                int f11 = this.f2480n + constraintWidget.W[i10].f();
                this.f2480n = f11;
                this.f2480n = f11 + constraintWidget.W[i12].f();
                if (this.f2468b == null) {
                    this.f2468b = constraintWidget;
                }
                this.f2470d = constraintWidget;
                ConstraintWidget.b[] bVarArr = constraintWidget.Z;
                int i13 = this.f2482p;
                if (bVarArr[i13] == bVar) {
                    int i14 = constraintWidget.f2440y[i13];
                    if (i14 == 0 || i14 == 3 || i14 == 2) {
                        this.f2476j++;
                        float f12 = constraintWidget.D0[i13];
                        if (f12 > 0.0f) {
                            this.f2477k += f12;
                        }
                        if (c(constraintWidget, i13)) {
                            if (f12 < 0.0f) {
                                this.f2484r = true;
                            } else {
                                this.f2485s = true;
                            }
                            if (this.f2474h == null) {
                                this.f2474h = new ArrayList();
                            }
                            this.f2474h.add(constraintWidget);
                        }
                        if (this.f2472f == null) {
                            this.f2472f = constraintWidget;
                        }
                        ConstraintWidget constraintWidget4 = this.f2473g;
                        if (constraintWidget4 != null) {
                            constraintWidget4.E0[this.f2482p] = constraintWidget;
                        }
                        this.f2473g = constraintWidget;
                    }
                    if (this.f2482p == 0) {
                        if (constraintWidget.f2436w != 0) {
                            this.f2481o = false;
                        } else if (constraintWidget.f2442z != 0 || constraintWidget.A != 0) {
                            this.f2481o = false;
                        }
                    } else if (constraintWidget.f2438x != 0) {
                        this.f2481o = false;
                    } else if (constraintWidget.C != 0 || constraintWidget.D != 0) {
                        this.f2481o = false;
                    }
                    if (constraintWidget.f2399d0 != 0.0f) {
                        this.f2481o = false;
                        this.f2487u = true;
                    }
                }
            }
            if (constraintWidget2 != constraintWidget) {
                constraintWidget2.F0[this.f2482p] = constraintWidget;
            }
            d dVar = constraintWidget.W[i10 + 1].f2494f;
            if (dVar != null) {
                ConstraintWidget constraintWidget5 = dVar.f2492d;
                d dVar2 = constraintWidget5.W[i10].f2494f;
                if (dVar2 != null && dVar2.f2492d == constraintWidget) {
                    constraintWidget3 = constraintWidget5;
                }
            }
            if (constraintWidget3 == null) {
                constraintWidget3 = constraintWidget;
                z11 = true;
            }
            constraintWidget2 = constraintWidget;
            constraintWidget = constraintWidget3;
        }
        ConstraintWidget constraintWidget6 = this.f2468b;
        if (constraintWidget6 != null) {
            this.f2479m -= constraintWidget6.W[i10].f();
        }
        ConstraintWidget constraintWidget7 = this.f2470d;
        if (constraintWidget7 != null) {
            this.f2479m -= constraintWidget7.W[i10 + 1].f();
        }
        this.f2469c = constraintWidget;
        if (this.f2482p == 0 && this.f2483q) {
            this.f2471e = constraintWidget;
        } else {
            this.f2471e = this.f2467a;
        }
        if (!this.f2485s || !this.f2484r) {
            z10 = false;
        }
        this.f2486t = z10;
    }

    private static boolean c(ConstraintWidget constraintWidget, int i10) {
        if (constraintWidget.V() != 8 && constraintWidget.Z[i10] == ConstraintWidget.b.MATCH_CONSTRAINT) {
            int i11 = constraintWidget.f2440y[i10];
            if (i11 == 0 || i11 == 3) {
                return true;
            }
            return false;
        }
        return false;
    }

    public void a() {
        if (!this.f2488v) {
            b();
        }
        this.f2488v = true;
    }
}
