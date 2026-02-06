package androidx.constraintlayout.core.widgets;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    protected ConstraintWidget f2770a;

    /* renamed from: b  reason: collision with root package name */
    protected ConstraintWidget f2771b;

    /* renamed from: c  reason: collision with root package name */
    protected ConstraintWidget f2772c;

    /* renamed from: d  reason: collision with root package name */
    protected ConstraintWidget f2773d;

    /* renamed from: e  reason: collision with root package name */
    protected ConstraintWidget f2774e;

    /* renamed from: f  reason: collision with root package name */
    protected ConstraintWidget f2775f;

    /* renamed from: g  reason: collision with root package name */
    protected ConstraintWidget f2776g;

    /* renamed from: h  reason: collision with root package name */
    protected ArrayList f2777h;

    /* renamed from: i  reason: collision with root package name */
    protected int f2778i;

    /* renamed from: j  reason: collision with root package name */
    protected int f2779j;

    /* renamed from: k  reason: collision with root package name */
    protected float f2780k = 0.0f;

    /* renamed from: l  reason: collision with root package name */
    int f2781l;

    /* renamed from: m  reason: collision with root package name */
    int f2782m;

    /* renamed from: n  reason: collision with root package name */
    int f2783n;

    /* renamed from: o  reason: collision with root package name */
    boolean f2784o;

    /* renamed from: p  reason: collision with root package name */
    private int f2785p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f2786q;

    /* renamed from: r  reason: collision with root package name */
    protected boolean f2787r;

    /* renamed from: s  reason: collision with root package name */
    protected boolean f2788s;

    /* renamed from: t  reason: collision with root package name */
    protected boolean f2789t;

    /* renamed from: u  reason: collision with root package name */
    protected boolean f2790u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f2791v;

    public c(ConstraintWidget constraintWidget, int i10, boolean z10) {
        this.f2770a = constraintWidget;
        this.f2785p = i10;
        this.f2786q = z10;
    }

    private void b() {
        int i10 = this.f2785p * 2;
        ConstraintWidget constraintWidget = this.f2770a;
        boolean z10 = true;
        this.f2784o = true;
        ConstraintWidget constraintWidget2 = constraintWidget;
        boolean z11 = false;
        while (!z11) {
            this.f2778i++;
            ConstraintWidget[] constraintWidgetArr = constraintWidget.F0;
            int i11 = this.f2785p;
            ConstraintWidget constraintWidget3 = null;
            constraintWidgetArr[i11] = null;
            constraintWidget.E0[i11] = null;
            if (constraintWidget.V() != 8) {
                this.f2781l++;
                ConstraintWidget.b u10 = constraintWidget.u(this.f2785p);
                ConstraintWidget.b bVar = ConstraintWidget.b.MATCH_CONSTRAINT;
                if (u10 != bVar) {
                    this.f2782m += constraintWidget.E(this.f2785p);
                }
                int f10 = this.f2782m + constraintWidget.W[i10].f();
                this.f2782m = f10;
                int i12 = i10 + 1;
                this.f2782m = f10 + constraintWidget.W[i12].f();
                int f11 = this.f2783n + constraintWidget.W[i10].f();
                this.f2783n = f11;
                this.f2783n = f11 + constraintWidget.W[i12].f();
                if (this.f2771b == null) {
                    this.f2771b = constraintWidget;
                }
                this.f2773d = constraintWidget;
                ConstraintWidget.b[] bVarArr = constraintWidget.Z;
                int i13 = this.f2785p;
                if (bVarArr[i13] == bVar) {
                    int i14 = constraintWidget.f2743y[i13];
                    if (i14 == 0 || i14 == 3 || i14 == 2) {
                        this.f2779j++;
                        float f12 = constraintWidget.D0[i13];
                        if (f12 > 0.0f) {
                            this.f2780k += f12;
                        }
                        if (c(constraintWidget, i13)) {
                            if (f12 < 0.0f) {
                                this.f2787r = true;
                            } else {
                                this.f2788s = true;
                            }
                            if (this.f2777h == null) {
                                this.f2777h = new ArrayList();
                            }
                            this.f2777h.add(constraintWidget);
                        }
                        if (this.f2775f == null) {
                            this.f2775f = constraintWidget;
                        }
                        ConstraintWidget constraintWidget4 = this.f2776g;
                        if (constraintWidget4 != null) {
                            constraintWidget4.E0[this.f2785p] = constraintWidget;
                        }
                        this.f2776g = constraintWidget;
                    }
                    if (this.f2785p == 0) {
                        if (constraintWidget.f2739w != 0) {
                            this.f2784o = false;
                        } else if (constraintWidget.f2745z != 0 || constraintWidget.A != 0) {
                            this.f2784o = false;
                        }
                    } else if (constraintWidget.f2741x != 0) {
                        this.f2784o = false;
                    } else if (constraintWidget.C != 0 || constraintWidget.D != 0) {
                        this.f2784o = false;
                    }
                    if (constraintWidget.f2702d0 != 0.0f) {
                        this.f2784o = false;
                        this.f2790u = true;
                    }
                }
            }
            if (constraintWidget2 != constraintWidget) {
                constraintWidget2.F0[this.f2785p] = constraintWidget;
            }
            d dVar = constraintWidget.W[i10 + 1].f2797f;
            if (dVar != null) {
                ConstraintWidget constraintWidget5 = dVar.f2795d;
                d dVar2 = constraintWidget5.W[i10].f2797f;
                if (dVar2 != null && dVar2.f2795d == constraintWidget) {
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
        ConstraintWidget constraintWidget6 = this.f2771b;
        if (constraintWidget6 != null) {
            this.f2782m -= constraintWidget6.W[i10].f();
        }
        ConstraintWidget constraintWidget7 = this.f2773d;
        if (constraintWidget7 != null) {
            this.f2782m -= constraintWidget7.W[i10 + 1].f();
        }
        this.f2772c = constraintWidget;
        if (this.f2785p == 0 && this.f2786q) {
            this.f2774e = constraintWidget;
        } else {
            this.f2774e = this.f2770a;
        }
        if (!this.f2788s || !this.f2787r) {
            z10 = false;
        }
        this.f2789t = z10;
    }

    private static boolean c(ConstraintWidget constraintWidget, int i10) {
        if (constraintWidget.V() != 8 && constraintWidget.Z[i10] == ConstraintWidget.b.MATCH_CONSTRAINT) {
            int i11 = constraintWidget.f2743y[i10];
            if (i11 == 0 || i11 == 3) {
                return true;
            }
            return false;
        }
        return false;
    }

    public void a() {
        if (!this.f2791v) {
            b();
        }
        this.f2791v = true;
    }
}
