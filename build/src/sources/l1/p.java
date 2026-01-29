package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class p implements d {

    /* renamed from: a  reason: collision with root package name */
    public int f36786a;

    /* renamed from: b  reason: collision with root package name */
    ConstraintWidget f36787b;

    /* renamed from: c  reason: collision with root package name */
    m f36788c;

    /* renamed from: d  reason: collision with root package name */
    protected ConstraintWidget.b f36789d;

    /* renamed from: e  reason: collision with root package name */
    g f36790e = new g(this);

    /* renamed from: f  reason: collision with root package name */
    public int f36791f = 0;

    /* renamed from: g  reason: collision with root package name */
    boolean f36792g = false;

    /* renamed from: h  reason: collision with root package name */
    public f f36793h = new f(this);

    /* renamed from: i  reason: collision with root package name */
    public f f36794i = new f(this);

    /* renamed from: j  reason: collision with root package name */
    protected b f36795j = b.NONE;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f36796a;

        static {
            int[] iArr = new int[d.a.values().length];
            f36796a = iArr;
            try {
                iArr[d.a.LEFT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f36796a[d.a.RIGHT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f36796a[d.a.TOP.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f36796a[d.a.BASELINE.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f36796a[d.a.BOTTOM.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    enum b {
        NONE,
        START,
        END,
        CENTER
    }

    public p(ConstraintWidget constraintWidget) {
        this.f36787b = constraintWidget;
    }

    private void l(int i10, int i11) {
        p pVar;
        float f10;
        int i12;
        int i13 = this.f36786a;
        if (i13 != 0) {
            if (i13 != 1) {
                if (i13 != 2) {
                    if (i13 == 3) {
                        ConstraintWidget constraintWidget = this.f36787b;
                        p pVar2 = constraintWidget.f2249e;
                        ConstraintWidget.b bVar = pVar2.f36789d;
                        ConstraintWidget.b bVar2 = ConstraintWidget.b.MATCH_CONSTRAINT;
                        if (bVar == bVar2 && pVar2.f36786a == 3) {
                            n nVar = constraintWidget.f2251f;
                            if (nVar.f36789d == bVar2 && nVar.f36786a == 3) {
                                return;
                            }
                        }
                        if (i10 == 0) {
                            pVar2 = constraintWidget.f2251f;
                        }
                        if (pVar2.f36790e.f36743j) {
                            float v10 = constraintWidget.v();
                            if (i10 == 1) {
                                i12 = (int) ((pVar2.f36790e.f36740g / v10) + 0.5f);
                            } else {
                                i12 = (int) ((v10 * pVar2.f36790e.f36740g) + 0.5f);
                            }
                            this.f36790e.d(i12);
                            return;
                        }
                        return;
                    }
                    return;
                }
                ConstraintWidget K = this.f36787b.K();
                if (K != null) {
                    if (i10 == 0) {
                        pVar = K.f2249e;
                    } else {
                        pVar = K.f2251f;
                    }
                    g gVar = pVar.f36790e;
                    if (gVar.f36743j) {
                        if (i10 == 0) {
                            f10 = this.f36787b.B;
                        } else {
                            f10 = this.f36787b.E;
                        }
                        this.f36790e.d(g((int) ((gVar.f36740g * f10) + 0.5f), i10));
                        return;
                    }
                    return;
                }
                return;
            }
            this.f36790e.d(Math.min(g(this.f36790e.f36755m, i10), i11));
            return;
        }
        this.f36790e.d(g(i11, i10));
    }

    @Override // l1.d
    public abstract void a(d dVar);

    /* JADX INFO: Access modifiers changed from: protected */
    public final void b(f fVar, f fVar2, int i10) {
        fVar.f36745l.add(fVar2);
        fVar.f36739f = i10;
        fVar2.f36744k.add(fVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void c(f fVar, f fVar2, int i10, g gVar) {
        fVar.f36745l.add(fVar2);
        fVar.f36745l.add(this.f36790e);
        fVar.f36741h = i10;
        fVar.f36742i = gVar;
        fVar2.f36744k.add(fVar);
        gVar.f36744k.add(fVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void d();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void e();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void f();

    /* JADX INFO: Access modifiers changed from: protected */
    public final int g(int i10, int i11) {
        if (i11 == 0) {
            ConstraintWidget constraintWidget = this.f36787b;
            int i12 = constraintWidget.A;
            int max = Math.max(constraintWidget.f2291z, i10);
            if (i12 > 0) {
                max = Math.min(i12, i10);
            }
            if (max != i10) {
                return max;
            }
        } else {
            ConstraintWidget constraintWidget2 = this.f36787b;
            int i13 = constraintWidget2.D;
            int max2 = Math.max(constraintWidget2.C, i10);
            if (i13 > 0) {
                max2 = Math.min(i13, i10);
            }
            if (max2 != i10) {
                return max2;
            }
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final f h(androidx.constraintlayout.core.widgets.d dVar) {
        androidx.constraintlayout.core.widgets.d dVar2 = dVar.f2343f;
        if (dVar2 == null) {
            return null;
        }
        ConstraintWidget constraintWidget = dVar2.f2341d;
        int i10 = a.f36796a[dVar2.f2342e.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        if (i10 != 5) {
                            return null;
                        }
                        return constraintWidget.f2251f.f36794i;
                    }
                    return constraintWidget.f2251f.f36769k;
                }
                return constraintWidget.f2251f.f36793h;
            }
            return constraintWidget.f2249e.f36794i;
        }
        return constraintWidget.f2249e.f36793h;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final f i(androidx.constraintlayout.core.widgets.d dVar, int i10) {
        p pVar;
        androidx.constraintlayout.core.widgets.d dVar2 = dVar.f2343f;
        if (dVar2 == null) {
            return null;
        }
        ConstraintWidget constraintWidget = dVar2.f2341d;
        if (i10 == 0) {
            pVar = constraintWidget.f2249e;
        } else {
            pVar = constraintWidget.f2251f;
        }
        int i11 = a.f36796a[dVar2.f2342e.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 != 3) {
                    if (i11 != 5) {
                        return null;
                    }
                }
            }
            return pVar.f36794i;
        }
        return pVar.f36793h;
    }

    public long j() {
        g gVar = this.f36790e;
        if (gVar.f36743j) {
            return gVar.f36740g;
        }
        return 0L;
    }

    public boolean k() {
        return this.f36792g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract boolean m();

    /* JADX INFO: Access modifiers changed from: protected */
    public void n(d dVar, androidx.constraintlayout.core.widgets.d dVar2, androidx.constraintlayout.core.widgets.d dVar3, int i10) {
        float R;
        f h10 = h(dVar2);
        f h11 = h(dVar3);
        if (h10.f36743j && h11.f36743j) {
            int f10 = h10.f36740g + dVar2.f();
            int f11 = h11.f36740g - dVar3.f();
            int i11 = f11 - f10;
            if (!this.f36790e.f36743j && this.f36789d == ConstraintWidget.b.MATCH_CONSTRAINT) {
                l(i10, i11);
            }
            g gVar = this.f36790e;
            if (gVar.f36743j) {
                if (gVar.f36740g == i11) {
                    this.f36793h.d(f10);
                    this.f36794i.d(f11);
                    return;
                }
                if (i10 == 0) {
                    R = this.f36787b.y();
                } else {
                    R = this.f36787b.R();
                }
                if (h10 == h11) {
                    f10 = h10.f36740g;
                    f11 = h11.f36740g;
                    R = 0.5f;
                }
                this.f36793h.d((int) (f10 + 0.5f + (((f11 - f10) - this.f36790e.f36740g) * R)));
                this.f36794i.d(this.f36793h.f36740g + this.f36790e.f36740g);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void o(d dVar) {
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void p(d dVar) {
    }
}
