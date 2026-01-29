package com.google.android.material.carousel;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final float f15793a;

    /* renamed from: b  reason: collision with root package name */
    private final List f15794b;

    /* renamed from: c  reason: collision with root package name */
    private final int f15795c;

    /* renamed from: d  reason: collision with root package name */
    private final int f15796d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final float f15797a;

        /* renamed from: b  reason: collision with root package name */
        private final float f15798b;

        /* renamed from: d  reason: collision with root package name */
        private c f15800d;

        /* renamed from: e  reason: collision with root package name */
        private c f15801e;

        /* renamed from: c  reason: collision with root package name */
        private final List f15799c = new ArrayList();

        /* renamed from: f  reason: collision with root package name */
        private int f15802f = -1;

        /* renamed from: g  reason: collision with root package name */
        private int f15803g = -1;

        /* renamed from: h  reason: collision with root package name */
        private float f15804h = 0.0f;

        /* renamed from: i  reason: collision with root package name */
        private int f15805i = -1;

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(float f10, float f11) {
            this.f15797a = f10;
            this.f15798b = f11;
        }

        private static float j(float f10, float f11, int i10, int i11) {
            return (f10 - (i10 * f11)) + (i11 * f11);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public b a(float f10, float f11, float f12) {
            return d(f10, f11, f12, false, true);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public b b(float f10, float f11, float f12) {
            return c(f10, f11, f12, false);
        }

        b c(float f10, float f11, float f12, boolean z10) {
            return d(f10, f11, f12, z10, false);
        }

        b d(float f10, float f11, float f12, boolean z10, boolean z11) {
            float f13;
            float f14 = f12 / 2.0f;
            float f15 = f10 - f14;
            float f16 = f14 + f10;
            float f17 = this.f15798b;
            if (f16 > f17) {
                f13 = Math.abs(f16 - Math.max(f16 - f12, f17));
            } else {
                f13 = 0.0f;
                if (f15 < 0.0f) {
                    f13 = Math.abs(f15 - Math.min(f15 + f12, 0.0f));
                }
            }
            return e(f10, f11, f12, z10, z11, f13);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public b e(float f10, float f11, float f12, boolean z10, boolean z11, float f13) {
            return f(f10, f11, f12, z10, z11, f13, 0.0f, 0.0f);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public b f(float f10, float f11, float f12, boolean z10, boolean z11, float f13, float f14, float f15) {
            if (f12 <= 0.0f) {
                return this;
            }
            if (z11) {
                if (!z10) {
                    int i10 = this.f15805i;
                    if (i10 != -1 && i10 != 0) {
                        throw new IllegalArgumentException("Anchor keylines must be either the first or last keyline.");
                    }
                    this.f15805i = this.f15799c.size();
                } else {
                    throw new IllegalArgumentException("Anchor keylines cannot be focal.");
                }
            }
            c cVar = new c(Float.MIN_VALUE, f10, f11, f12, z11, f13, f14, f15);
            if (z10) {
                if (this.f15800d == null) {
                    this.f15800d = cVar;
                    this.f15802f = this.f15799c.size();
                }
                if (this.f15803g != -1 && this.f15799c.size() - this.f15803g > 1) {
                    throw new IllegalArgumentException("Keylines marked as focal must be placed next to each other. There cannot be non-focal keylines between focal keylines.");
                }
                if (f12 == this.f15800d.f15809d) {
                    this.f15801e = cVar;
                    this.f15803g = this.f15799c.size();
                } else {
                    throw new IllegalArgumentException("Keylines that are marked as focal must all have the same masked item size.");
                }
            } else if (this.f15800d == null && cVar.f15809d < this.f15804h) {
                throw new IllegalArgumentException("Keylines before the first focal keyline must be ordered by incrementing masked item size.");
            } else {
                if (this.f15801e != null && cVar.f15809d > this.f15804h) {
                    throw new IllegalArgumentException("Keylines after the last focal keyline must be ordered by decreasing masked item size.");
                }
            }
            this.f15804h = cVar.f15809d;
            this.f15799c.add(cVar);
            return this;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public b g(float f10, float f11, float f12, int i10) {
            return h(f10, f11, f12, i10, false);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public b h(float f10, float f11, float f12, int i10, boolean z10) {
            if (i10 > 0 && f12 > 0.0f) {
                for (int i11 = 0; i11 < i10; i11++) {
                    c((i11 * f12) + f10, f11, f12, z10);
                }
            }
            return this;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public f i() {
            if (this.f15800d != null) {
                ArrayList arrayList = new ArrayList();
                for (int i10 = 0; i10 < this.f15799c.size(); i10++) {
                    c cVar = (c) this.f15799c.get(i10);
                    arrayList.add(new c(j(this.f15800d.f15807b, this.f15797a, this.f15802f, i10), cVar.f15807b, cVar.f15808c, cVar.f15809d, cVar.f15810e, cVar.f15811f, cVar.f15812g, cVar.f15813h));
                }
                return new f(this.f15797a, arrayList, this.f15802f, this.f15803g);
            }
            throw new IllegalStateException("There must be a keyline marked as focal.");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        final float f15806a;

        /* renamed from: b  reason: collision with root package name */
        final float f15807b;

        /* renamed from: c  reason: collision with root package name */
        final float f15808c;

        /* renamed from: d  reason: collision with root package name */
        final float f15809d;

        /* renamed from: e  reason: collision with root package name */
        final boolean f15810e;

        /* renamed from: f  reason: collision with root package name */
        final float f15811f;

        /* renamed from: g  reason: collision with root package name */
        final float f15812g;

        /* renamed from: h  reason: collision with root package name */
        final float f15813h;

        c(float f10, float f11, float f12, float f13) {
            this(f10, f11, f12, f13, false, 0.0f, 0.0f, 0.0f);
        }

        static c a(c cVar, c cVar2, float f10) {
            return new c(zg.a.a(cVar.f15806a, cVar2.f15806a, f10), zg.a.a(cVar.f15807b, cVar2.f15807b, f10), zg.a.a(cVar.f15808c, cVar2.f15808c, f10), zg.a.a(cVar.f15809d, cVar2.f15809d, f10));
        }

        c(float f10, float f11, float f12, float f13, boolean z10, float f14, float f15, float f16) {
            this.f15806a = f10;
            this.f15807b = f11;
            this.f15808c = f12;
            this.f15809d = f13;
            this.f15810e = z10;
            this.f15811f = f14;
            this.f15812g = f15;
            this.f15813h = f16;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static f m(f fVar, f fVar2, float f10) {
        if (fVar.f() == fVar2.f()) {
            List g10 = fVar.g();
            List g11 = fVar2.g();
            if (g10.size() == g11.size()) {
                ArrayList arrayList = new ArrayList();
                for (int i10 = 0; i10 < fVar.g().size(); i10++) {
                    arrayList.add(c.a((c) g10.get(i10), (c) g11.get(i10), f10));
                }
                return new f(fVar.f(), arrayList, zg.a.c(fVar.b(), fVar2.b(), f10), zg.a.c(fVar.i(), fVar2.i(), f10));
            }
            throw new IllegalArgumentException("Keylines being linearly interpolated must have the same number of keylines.");
        }
        throw new IllegalArgumentException("Keylines being linearly interpolated must have the same item size.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static f n(f fVar, float f10) {
        boolean z10;
        b bVar = new b(fVar.f(), f10);
        float f11 = (f10 - fVar.j().f15807b) - (fVar.j().f15809d / 2.0f);
        for (int size = fVar.g().size() - 1; size >= 0; size--) {
            c cVar = (c) fVar.g().get(size);
            float f12 = (cVar.f15809d / 2.0f) + f11;
            if (size >= fVar.b() && size <= fVar.i()) {
                z10 = true;
            } else {
                z10 = false;
            }
            bVar.d(f12, cVar.f15808c, cVar.f15809d, z10, cVar.f15810e);
            f11 += cVar.f15809d;
        }
        return bVar.i();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c a() {
        return (c) this.f15794b.get(this.f15795c);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int b() {
        return this.f15795c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c c() {
        return (c) this.f15794b.get(0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c d() {
        for (int i10 = 0; i10 < this.f15794b.size(); i10++) {
            c cVar = (c) this.f15794b.get(i10);
            if (!cVar.f15810e) {
                return cVar;
            }
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List e() {
        return this.f15794b.subList(this.f15795c, this.f15796d + 1);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float f() {
        return this.f15793a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List g() {
        return this.f15794b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c h() {
        return (c) this.f15794b.get(this.f15796d);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int i() {
        return this.f15796d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c j() {
        List list = this.f15794b;
        return (c) list.get(list.size() - 1);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c k() {
        for (int size = this.f15794b.size() - 1; size >= 0; size--) {
            c cVar = (c) this.f15794b.get(size);
            if (!cVar.f15810e) {
                return cVar;
            }
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int l() {
        int i10 = 0;
        for (c cVar : this.f15794b) {
            if (cVar.f15810e) {
                i10++;
            }
        }
        return this.f15794b.size() - i10;
    }

    private f(float f10, List list, int i10, int i11) {
        this.f15793a = f10;
        this.f15794b = Collections.unmodifiableList(list);
        this.f15795c = i10;
        this.f15796d = i11;
    }
}
