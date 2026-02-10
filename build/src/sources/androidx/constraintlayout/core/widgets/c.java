package androidx.constraintlayout.core.widgets;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    protected ConstraintWidget f2470a;

    /* renamed from: b  reason: collision with root package name */
    protected ConstraintWidget f2471b;

    /* renamed from: c  reason: collision with root package name */
    protected ConstraintWidget f2472c;

    /* renamed from: d  reason: collision with root package name */
    protected ConstraintWidget f2473d;

    /* renamed from: e  reason: collision with root package name */
    protected ConstraintWidget f2474e;

    /* renamed from: f  reason: collision with root package name */
    protected ConstraintWidget f2475f;

    /* renamed from: g  reason: collision with root package name */
    protected ConstraintWidget f2476g;

    /* renamed from: h  reason: collision with root package name */
    protected ArrayList f2477h;

    /* renamed from: i  reason: collision with root package name */
    protected int f2478i;

    /* renamed from: j  reason: collision with root package name */
    protected int f2479j;

    /* renamed from: k  reason: collision with root package name */
    protected float f2480k = 0.0f;

    /* renamed from: l  reason: collision with root package name */
    int f2481l;

    /* renamed from: m  reason: collision with root package name */
    int f2482m;

    /* renamed from: n  reason: collision with root package name */
    int f2483n;

    /* renamed from: o  reason: collision with root package name */
    boolean f2484o;

    /* renamed from: p  reason: collision with root package name */
    private int f2485p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f2486q;

    /* renamed from: r  reason: collision with root package name */
    protected boolean f2487r;

    /* renamed from: s  reason: collision with root package name */
    protected boolean f2488s;

    /* renamed from: t  reason: collision with root package name */
    protected boolean f2489t;

    /* renamed from: u  reason: collision with root package name */
    protected boolean f2490u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f2491v;

    public c(ConstraintWidget constraintWidget, int i10, boolean z10) {
        this.f2470a = constraintWidget;
        this.f2485p = i10;
        this.f2486q = z10;
    }

    private void b() {
        int i10 = this.f2485p * 2;
        ConstraintWidget constraintWidget = this.f2470a;
        boolean z10 = true;
        this.f2484o = true;
        ConstraintWidget constraintWidget2 = constraintWidget;
        boolean z11 = false;
        while (!z11) {
            this.f2478i++;
            ConstraintWidget[] constraintWidgetArr = constraintWidget.F0;
            int i11 = this.f2485p;
            ConstraintWidget constraintWidget3 = null;
            constraintWidgetArr[i11] = null;
            constraintWidget.E0[i11] = null;
            if (constraintWidget.V() != 8) {
                this.f2481l++;
                ConstraintWidget.b u10 = constraintWidget.u(this.f2485p);
                ConstraintWidget.b bVar = ConstraintWidget.b.MATCH_CONSTRAINT;
                if (u10 != bVar) {
                    this.f2482m += constraintWidget.E(this.f2485p);
                }
                int f10 = this.f2482m + constraintWidget.W[i10].f();
                this.f2482m = f10;
                int i12 = i10 + 1;
                this.f2482m = f10 + constraintWidget.W[i12].f();
                int f11 = this.f2483n + constraintWidget.W[i10].f();
                this.f2483n = f11;
                this.f2483n = f11 + constraintWidget.W[i12].f();
                if (this.f2471b == null) {
                    this.f2471b = constraintWidget;
                }
                this.f2473d = constraintWidget;
                ConstraintWidget.b[] bVarArr = constraintWidget.Z;
                int i13 = this.f2485p;
                if (bVarArr[i13] == bVar) {
                    int i14 = constraintWidget.f2443y[i13];
                    if (i14 == 0 || i14 == 3 || i14 == 2) {
                        this.f2479j++;
                        float f12 = constraintWidget.D0[i13];
                        if (f12 > 0.0f) {
                            this.f2480k += f12;
                        }
                        if (c(constraintWidget, i13)) {
                            if (f12 < 0.0f) {
                                this.f2487r = true;
                            } else {
                                this.f2488s = true;
                            }
                            if (this.f2477h == null) {
                                this.f2477h = new ArrayList();
                            }
                            this.f2477h.add(constraintWidget);
                        }
                        if (this.f2475f == null) {
                            this.f2475f = constraintWidget;
                        }
                        ConstraintWidget constraintWidget4 = this.f2476g;
                        if (constraintWidget4 != null) {
                            constraintWidget4.E0[this.f2485p] = constraintWidget;
                        }
                        this.f2476g = constraintWidget;
                    }
                    if (this.f2485p == 0) {
                        if (constraintWidget.f2439w != 0) {
                            this.f2484o = false;
                        } else if (constraintWidget.f2445z != 0 || constraintWidget.A != 0) {
                            this.f2484o = false;
                        }
                    } else if (constraintWidget.f2441x != 0) {
                        this.f2484o = false;
                    } else if (constraintWidget.C != 0 || constraintWidget.D != 0) {
                        this.f2484o = false;
                    }
                    if (constraintWidget.f2402d0 != 0.0f) {
                        this.f2484o = false;
                        this.f2490u = true;
                    }
                }
            }
            if (constraintWidget2 != constraintWidget) {
                constraintWidget2.F0[this.f2485p] = constraintWidget;
            }
            d dVar = constraintWidget.W[i10 + 1].f2497f;
            if (dVar != null) {
                ConstraintWidget constraintWidget5 = dVar.f2495d;
                d dVar2 = constraintWidget5.W[i10].f2497f;
                if (dVar2 != null && dVar2.f2495d == constraintWidget) {
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
        ConstraintWidget constraintWidget6 = this.f2471b;
        if (constraintWidget6 != null) {
            this.f2482m -= constraintWidget6.W[i10].f();
        }
        ConstraintWidget constraintWidget7 = this.f2473d;
        if (constraintWidget7 != null) {
            this.f2482m -= constraintWidget7.W[i10 + 1].f();
        }
        this.f2472c = constraintWidget;
        if (this.f2485p == 0 && this.f2486q) {
            this.f2474e = constraintWidget;
        } else {
            this.f2474e = this.f2470a;
        }
        if (!this.f2488s || !this.f2487r) {
            z10 = false;
        }
        this.f2489t = z10;
    }

    private static boolean c(ConstraintWidget constraintWidget, int i10) {
        if (constraintWidget.V() != 8 && constraintWidget.Z[i10] == ConstraintWidget.b.MATCH_CONSTRAINT) {
            int i11 = constraintWidget.f2443y[i10];
            if (i11 == 0 || i11 == 3) {
                return true;
            }
            return false;
        }
        return false;
    }

    public void a() {
        if (!this.f2491v) {
            b();
        }
        this.f2491v = true;
    }
}
