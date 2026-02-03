package androidx.constraintlayout.core.widgets;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    protected ConstraintWidget f2360a;

    /* renamed from: b  reason: collision with root package name */
    protected ConstraintWidget f2361b;

    /* renamed from: c  reason: collision with root package name */
    protected ConstraintWidget f2362c;

    /* renamed from: d  reason: collision with root package name */
    protected ConstraintWidget f2363d;

    /* renamed from: e  reason: collision with root package name */
    protected ConstraintWidget f2364e;

    /* renamed from: f  reason: collision with root package name */
    protected ConstraintWidget f2365f;

    /* renamed from: g  reason: collision with root package name */
    protected ConstraintWidget f2366g;

    /* renamed from: h  reason: collision with root package name */
    protected ArrayList f2367h;

    /* renamed from: i  reason: collision with root package name */
    protected int f2368i;

    /* renamed from: j  reason: collision with root package name */
    protected int f2369j;

    /* renamed from: k  reason: collision with root package name */
    protected float f2370k = 0.0f;

    /* renamed from: l  reason: collision with root package name */
    int f2371l;

    /* renamed from: m  reason: collision with root package name */
    int f2372m;

    /* renamed from: n  reason: collision with root package name */
    int f2373n;

    /* renamed from: o  reason: collision with root package name */
    boolean f2374o;

    /* renamed from: p  reason: collision with root package name */
    private int f2375p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f2376q;

    /* renamed from: r  reason: collision with root package name */
    protected boolean f2377r;

    /* renamed from: s  reason: collision with root package name */
    protected boolean f2378s;

    /* renamed from: t  reason: collision with root package name */
    protected boolean f2379t;

    /* renamed from: u  reason: collision with root package name */
    protected boolean f2380u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f2381v;

    public c(ConstraintWidget constraintWidget, int i10, boolean z10) {
        this.f2360a = constraintWidget;
        this.f2375p = i10;
        this.f2376q = z10;
    }

    private void b() {
        int i10 = this.f2375p * 2;
        ConstraintWidget constraintWidget = this.f2360a;
        boolean z10 = true;
        this.f2374o = true;
        ConstraintWidget constraintWidget2 = constraintWidget;
        boolean z11 = false;
        while (!z11) {
            this.f2368i++;
            ConstraintWidget[] constraintWidgetArr = constraintWidget.F0;
            int i11 = this.f2375p;
            ConstraintWidget constraintWidget3 = null;
            constraintWidgetArr[i11] = null;
            constraintWidget.E0[i11] = null;
            if (constraintWidget.V() != 8) {
                this.f2371l++;
                ConstraintWidget.b u10 = constraintWidget.u(this.f2375p);
                ConstraintWidget.b bVar = ConstraintWidget.b.MATCH_CONSTRAINT;
                if (u10 != bVar) {
                    this.f2372m += constraintWidget.E(this.f2375p);
                }
                int f10 = this.f2372m + constraintWidget.W[i10].f();
                this.f2372m = f10;
                int i12 = i10 + 1;
                this.f2372m = f10 + constraintWidget.W[i12].f();
                int f11 = this.f2373n + constraintWidget.W[i10].f();
                this.f2373n = f11;
                this.f2373n = f11 + constraintWidget.W[i12].f();
                if (this.f2361b == null) {
                    this.f2361b = constraintWidget;
                }
                this.f2363d = constraintWidget;
                ConstraintWidget.b[] bVarArr = constraintWidget.Z;
                int i13 = this.f2375p;
                if (bVarArr[i13] == bVar) {
                    int i14 = constraintWidget.f2333y[i13];
                    if (i14 == 0 || i14 == 3 || i14 == 2) {
                        this.f2369j++;
                        float f12 = constraintWidget.D0[i13];
                        if (f12 > 0.0f) {
                            this.f2370k += f12;
                        }
                        if (c(constraintWidget, i13)) {
                            if (f12 < 0.0f) {
                                this.f2377r = true;
                            } else {
                                this.f2378s = true;
                            }
                            if (this.f2367h == null) {
                                this.f2367h = new ArrayList();
                            }
                            this.f2367h.add(constraintWidget);
                        }
                        if (this.f2365f == null) {
                            this.f2365f = constraintWidget;
                        }
                        ConstraintWidget constraintWidget4 = this.f2366g;
                        if (constraintWidget4 != null) {
                            constraintWidget4.E0[this.f2375p] = constraintWidget;
                        }
                        this.f2366g = constraintWidget;
                    }
                    if (this.f2375p == 0) {
                        if (constraintWidget.f2329w != 0) {
                            this.f2374o = false;
                        } else if (constraintWidget.f2335z != 0 || constraintWidget.A != 0) {
                            this.f2374o = false;
                        }
                    } else if (constraintWidget.f2331x != 0) {
                        this.f2374o = false;
                    } else if (constraintWidget.C != 0 || constraintWidget.D != 0) {
                        this.f2374o = false;
                    }
                    if (constraintWidget.f2292d0 != 0.0f) {
                        this.f2374o = false;
                        this.f2380u = true;
                    }
                }
            }
            if (constraintWidget2 != constraintWidget) {
                constraintWidget2.F0[this.f2375p] = constraintWidget;
            }
            d dVar = constraintWidget.W[i10 + 1].f2387f;
            if (dVar != null) {
                ConstraintWidget constraintWidget5 = dVar.f2385d;
                d dVar2 = constraintWidget5.W[i10].f2387f;
                if (dVar2 != null && dVar2.f2385d == constraintWidget) {
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
        ConstraintWidget constraintWidget6 = this.f2361b;
        if (constraintWidget6 != null) {
            this.f2372m -= constraintWidget6.W[i10].f();
        }
        ConstraintWidget constraintWidget7 = this.f2363d;
        if (constraintWidget7 != null) {
            this.f2372m -= constraintWidget7.W[i10 + 1].f();
        }
        this.f2362c = constraintWidget;
        if (this.f2375p == 0 && this.f2376q) {
            this.f2364e = constraintWidget;
        } else {
            this.f2364e = this.f2360a;
        }
        if (!this.f2378s || !this.f2377r) {
            z10 = false;
        }
        this.f2379t = z10;
    }

    private static boolean c(ConstraintWidget constraintWidget, int i10) {
        if (constraintWidget.V() != 8 && constraintWidget.Z[i10] == ConstraintWidget.b.MATCH_CONSTRAINT) {
            int i11 = constraintWidget.f2333y[i10];
            if (i11 == 0 || i11 == 3) {
                return true;
            }
            return false;
        }
        return false;
    }

    public void a() {
        if (!this.f2381v) {
            b();
        }
        this.f2381v = true;
    }
}
