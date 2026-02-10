package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class p implements d {

    /* renamed from: a  reason: collision with root package name */
    public int f35588a;

    /* renamed from: b  reason: collision with root package name */
    ConstraintWidget f35589b;

    /* renamed from: c  reason: collision with root package name */
    m f35590c;

    /* renamed from: d  reason: collision with root package name */
    protected ConstraintWidget.b f35591d;

    /* renamed from: e  reason: collision with root package name */
    g f35592e = new g(this);

    /* renamed from: f  reason: collision with root package name */
    public int f35593f = 0;

    /* renamed from: g  reason: collision with root package name */
    boolean f35594g = false;

    /* renamed from: h  reason: collision with root package name */
    public f f35595h = new f(this);

    /* renamed from: i  reason: collision with root package name */
    public f f35596i = new f(this);

    /* renamed from: j  reason: collision with root package name */
    protected b f35597j = b.NONE;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f35598a;

        static {
            int[] iArr = new int[d.a.values().length];
            f35598a = iArr;
            try {
                iArr[d.a.LEFT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f35598a[d.a.RIGHT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f35598a[d.a.TOP.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f35598a[d.a.BASELINE.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f35598a[d.a.BOTTOM.ordinal()] = 5;
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
        this.f35589b = constraintWidget;
    }

    private void l(int i10, int i11) {
        p pVar;
        float f10;
        int i12;
        int i13 = this.f35588a;
        if (i13 != 0) {
            if (i13 != 1) {
                if (i13 != 2) {
                    if (i13 == 3) {
                        ConstraintWidget constraintWidget = this.f35589b;
                        p pVar2 = constraintWidget.f2400e;
                        ConstraintWidget.b bVar = pVar2.f35591d;
                        ConstraintWidget.b bVar2 = ConstraintWidget.b.MATCH_CONSTRAINT;
                        if (bVar == bVar2 && pVar2.f35588a == 3) {
                            n nVar = constraintWidget.f2402f;
                            if (nVar.f35591d == bVar2 && nVar.f35588a == 3) {
                                return;
                            }
                        }
                        if (i10 == 0) {
                            pVar2 = constraintWidget.f2402f;
                        }
                        if (pVar2.f35592e.f35545j) {
                            float v10 = constraintWidget.v();
                            if (i10 == 1) {
                                i12 = (int) ((pVar2.f35592e.f35542g / v10) + 0.5f);
                            } else {
                                i12 = (int) ((v10 * pVar2.f35592e.f35542g) + 0.5f);
                            }
                            this.f35592e.d(i12);
                            return;
                        }
                        return;
                    }
                    return;
                }
                ConstraintWidget K = this.f35589b.K();
                if (K != null) {
                    if (i10 == 0) {
                        pVar = K.f2400e;
                    } else {
                        pVar = K.f2402f;
                    }
                    g gVar = pVar.f35592e;
                    if (gVar.f35545j) {
                        if (i10 == 0) {
                            f10 = this.f35589b.B;
                        } else {
                            f10 = this.f35589b.E;
                        }
                        this.f35592e.d(g((int) ((gVar.f35542g * f10) + 0.5f), i10));
                        return;
                    }
                    return;
                }
                return;
            }
            this.f35592e.d(Math.min(g(this.f35592e.f35557m, i10), i11));
            return;
        }
        this.f35592e.d(g(i11, i10));
    }

    @Override // l1.d
    public abstract void a(d dVar);

    /* JADX INFO: Access modifiers changed from: protected */
    public final void b(f fVar, f fVar2, int i10) {
        fVar.f35547l.add(fVar2);
        fVar.f35541f = i10;
        fVar2.f35546k.add(fVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void c(f fVar, f fVar2, int i10, g gVar) {
        fVar.f35547l.add(fVar2);
        fVar.f35547l.add(this.f35592e);
        fVar.f35543h = i10;
        fVar.f35544i = gVar;
        fVar2.f35546k.add(fVar);
        gVar.f35546k.add(fVar);
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
            ConstraintWidget constraintWidget = this.f35589b;
            int i12 = constraintWidget.A;
            int max = Math.max(constraintWidget.f2442z, i10);
            if (i12 > 0) {
                max = Math.min(i12, i10);
            }
            if (max != i10) {
                return max;
            }
        } else {
            ConstraintWidget constraintWidget2 = this.f35589b;
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
        androidx.constraintlayout.core.widgets.d dVar2 = dVar.f2494f;
        if (dVar2 == null) {
            return null;
        }
        ConstraintWidget constraintWidget = dVar2.f2492d;
        int i10 = a.f35598a[dVar2.f2493e.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        if (i10 != 5) {
                            return null;
                        }
                        return constraintWidget.f2402f.f35596i;
                    }
                    return constraintWidget.f2402f.f35571k;
                }
                return constraintWidget.f2402f.f35595h;
            }
            return constraintWidget.f2400e.f35596i;
        }
        return constraintWidget.f2400e.f35595h;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final f i(androidx.constraintlayout.core.widgets.d dVar, int i10) {
        p pVar;
        androidx.constraintlayout.core.widgets.d dVar2 = dVar.f2494f;
        if (dVar2 == null) {
            return null;
        }
        ConstraintWidget constraintWidget = dVar2.f2492d;
        if (i10 == 0) {
            pVar = constraintWidget.f2400e;
        } else {
            pVar = constraintWidget.f2402f;
        }
        int i11 = a.f35598a[dVar2.f2493e.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 != 3) {
                    if (i11 != 5) {
                        return null;
                    }
                }
            }
            return pVar.f35596i;
        }
        return pVar.f35595h;
    }

    public long j() {
        g gVar = this.f35592e;
        if (gVar.f35545j) {
            return gVar.f35542g;
        }
        return 0L;
    }

    public boolean k() {
        return this.f35594g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract boolean m();

    /* JADX INFO: Access modifiers changed from: protected */
    public void n(d dVar, androidx.constraintlayout.core.widgets.d dVar2, androidx.constraintlayout.core.widgets.d dVar3, int i10) {
        float R;
        f h10 = h(dVar2);
        f h11 = h(dVar3);
        if (h10.f35545j && h11.f35545j) {
            int f10 = h10.f35542g + dVar2.f();
            int f11 = h11.f35542g - dVar3.f();
            int i11 = f11 - f10;
            if (!this.f35592e.f35545j && this.f35591d == ConstraintWidget.b.MATCH_CONSTRAINT) {
                l(i10, i11);
            }
            g gVar = this.f35592e;
            if (gVar.f35545j) {
                if (gVar.f35542g == i11) {
                    this.f35595h.d(f10);
                    this.f35596i.d(f11);
                    return;
                }
                if (i10 == 0) {
                    R = this.f35589b.y();
                } else {
                    R = this.f35589b.R();
                }
                if (h10 == h11) {
                    f10 = h10.f35542g;
                    f11 = h11.f35542g;
                    R = 0.5f;
                }
                this.f35595h.d((int) (f10 + 0.5f + (((f11 - f10) - this.f35592e.f35542g) * R)));
                this.f35596i.d(this.f35595h.f35542g + this.f35592e.f35542g);
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
