package androidx.constraintlayout.core.widgets;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    protected ConstraintWidget f2329a;

    /* renamed from: b  reason: collision with root package name */
    protected ConstraintWidget f2330b;

    /* renamed from: c  reason: collision with root package name */
    protected ConstraintWidget f2331c;

    /* renamed from: d  reason: collision with root package name */
    protected ConstraintWidget f2332d;

    /* renamed from: e  reason: collision with root package name */
    protected ConstraintWidget f2333e;

    /* renamed from: f  reason: collision with root package name */
    protected ConstraintWidget f2334f;

    /* renamed from: g  reason: collision with root package name */
    protected ConstraintWidget f2335g;

    /* renamed from: h  reason: collision with root package name */
    protected ArrayList f2336h;

    /* renamed from: i  reason: collision with root package name */
    protected int f2337i;

    /* renamed from: j  reason: collision with root package name */
    protected int f2338j;

    /* renamed from: k  reason: collision with root package name */
    protected float f2339k = 0.0f;

    /* renamed from: l  reason: collision with root package name */
    int f2340l;

    /* renamed from: m  reason: collision with root package name */
    int f2341m;

    /* renamed from: n  reason: collision with root package name */
    int f2342n;

    /* renamed from: o  reason: collision with root package name */
    boolean f2343o;

    /* renamed from: p  reason: collision with root package name */
    private int f2344p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f2345q;

    /* renamed from: r  reason: collision with root package name */
    protected boolean f2346r;

    /* renamed from: s  reason: collision with root package name */
    protected boolean f2347s;

    /* renamed from: t  reason: collision with root package name */
    protected boolean f2348t;

    /* renamed from: u  reason: collision with root package name */
    protected boolean f2349u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f2350v;

    public c(ConstraintWidget constraintWidget, int i10, boolean z10) {
        this.f2329a = constraintWidget;
        this.f2344p = i10;
        this.f2345q = z10;
    }

    private void b() {
        int i10 = this.f2344p * 2;
        ConstraintWidget constraintWidget = this.f2329a;
        boolean z10 = true;
        this.f2343o = true;
        ConstraintWidget constraintWidget2 = constraintWidget;
        boolean z11 = false;
        while (!z11) {
            this.f2337i++;
            ConstraintWidget[] constraintWidgetArr = constraintWidget.F0;
            int i11 = this.f2344p;
            ConstraintWidget constraintWidget3 = null;
            constraintWidgetArr[i11] = null;
            constraintWidget.E0[i11] = null;
            if (constraintWidget.V() != 8) {
                this.f2340l++;
                ConstraintWidget.b u10 = constraintWidget.u(this.f2344p);
                ConstraintWidget.b bVar = ConstraintWidget.b.MATCH_CONSTRAINT;
                if (u10 != bVar) {
                    this.f2341m += constraintWidget.E(this.f2344p);
                }
                int f10 = this.f2341m + constraintWidget.W[i10].f();
                this.f2341m = f10;
                int i12 = i10 + 1;
                this.f2341m = f10 + constraintWidget.W[i12].f();
                int f11 = this.f2342n + constraintWidget.W[i10].f();
                this.f2342n = f11;
                this.f2342n = f11 + constraintWidget.W[i12].f();
                if (this.f2330b == null) {
                    this.f2330b = constraintWidget;
                }
                this.f2332d = constraintWidget;
                ConstraintWidget.b[] bVarArr = constraintWidget.Z;
                int i13 = this.f2344p;
                if (bVarArr[i13] == bVar) {
                    int i14 = constraintWidget.f2302y[i13];
                    if (i14 == 0 || i14 == 3 || i14 == 2) {
                        this.f2338j++;
                        float f12 = constraintWidget.D0[i13];
                        if (f12 > 0.0f) {
                            this.f2339k += f12;
                        }
                        if (c(constraintWidget, i13)) {
                            if (f12 < 0.0f) {
                                this.f2346r = true;
                            } else {
                                this.f2347s = true;
                            }
                            if (this.f2336h == null) {
                                this.f2336h = new ArrayList();
                            }
                            this.f2336h.add(constraintWidget);
                        }
                        if (this.f2334f == null) {
                            this.f2334f = constraintWidget;
                        }
                        ConstraintWidget constraintWidget4 = this.f2335g;
                        if (constraintWidget4 != null) {
                            constraintWidget4.E0[this.f2344p] = constraintWidget;
                        }
                        this.f2335g = constraintWidget;
                    }
                    if (this.f2344p == 0) {
                        if (constraintWidget.f2298w != 0) {
                            this.f2343o = false;
                        } else if (constraintWidget.f2304z != 0 || constraintWidget.A != 0) {
                            this.f2343o = false;
                        }
                    } else if (constraintWidget.f2300x != 0) {
                        this.f2343o = false;
                    } else if (constraintWidget.C != 0 || constraintWidget.D != 0) {
                        this.f2343o = false;
                    }
                    if (constraintWidget.f2261d0 != 0.0f) {
                        this.f2343o = false;
                        this.f2349u = true;
                    }
                }
            }
            if (constraintWidget2 != constraintWidget) {
                constraintWidget2.F0[this.f2344p] = constraintWidget;
            }
            d dVar = constraintWidget.W[i10 + 1].f2356f;
            if (dVar != null) {
                ConstraintWidget constraintWidget5 = dVar.f2354d;
                d dVar2 = constraintWidget5.W[i10].f2356f;
                if (dVar2 != null && dVar2.f2354d == constraintWidget) {
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
        ConstraintWidget constraintWidget6 = this.f2330b;
        if (constraintWidget6 != null) {
            this.f2341m -= constraintWidget6.W[i10].f();
        }
        ConstraintWidget constraintWidget7 = this.f2332d;
        if (constraintWidget7 != null) {
            this.f2341m -= constraintWidget7.W[i10 + 1].f();
        }
        this.f2331c = constraintWidget;
        if (this.f2344p == 0 && this.f2345q) {
            this.f2333e = constraintWidget;
        } else {
            this.f2333e = this.f2329a;
        }
        if (!this.f2347s || !this.f2346r) {
            z10 = false;
        }
        this.f2348t = z10;
    }

    private static boolean c(ConstraintWidget constraintWidget, int i10) {
        if (constraintWidget.V() != 8 && constraintWidget.Z[i10] == ConstraintWidget.b.MATCH_CONSTRAINT) {
            int i11 = constraintWidget.f2302y[i10];
            if (i11 == 0 || i11 == 3) {
                return true;
            }
            return false;
        }
        return false;
    }

    public void a() {
        if (!this.f2350v) {
            b();
        }
        this.f2350v = true;
    }
}
