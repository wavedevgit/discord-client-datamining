package com.google.android.material.carousel;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final float f15513a;

    /* renamed from: b  reason: collision with root package name */
    private int f15514b;

    /* renamed from: c  reason: collision with root package name */
    private final List f15515c;

    /* renamed from: d  reason: collision with root package name */
    private final int f15516d;

    /* renamed from: e  reason: collision with root package name */
    private final int f15517e;

    /* renamed from: f  reason: collision with root package name */
    private final int f15518f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final float f15519a;

        /* renamed from: b  reason: collision with root package name */
        private final int f15520b;

        /* renamed from: d  reason: collision with root package name */
        private c f15522d;

        /* renamed from: e  reason: collision with root package name */
        private c f15523e;

        /* renamed from: c  reason: collision with root package name */
        private final List f15521c = new ArrayList();

        /* renamed from: f  reason: collision with root package name */
        private int f15524f = -1;

        /* renamed from: g  reason: collision with root package name */
        private int f15525g = -1;

        /* renamed from: h  reason: collision with root package name */
        private float f15526h = 0.0f;

        /* renamed from: i  reason: collision with root package name */
        private int f15527i = -1;

        public b(float f10, int i10) {
            this.f15519a = f10;
            this.f15520b = i10;
        }

        private static float j(float f10, float f11, int i10, int i11) {
            return (f10 - (i10 * f11)) + (i11 * f11);
        }

        public b a(float f10, float f11, float f12) {
            return d(f10, f11, f12, false, true);
        }

        public b b(float f10, float f11, float f12) {
            return c(f10, f11, f12, false);
        }

        public b c(float f10, float f11, float f12, boolean z10) {
            return d(f10, f11, f12, z10, false);
        }

        public b d(float f10, float f11, float f12, boolean z10, boolean z11) {
            float f13;
            float f14 = f12 / 2.0f;
            float f15 = f10 - f14;
            float f16 = f14 + f10;
            int i10 = this.f15520b;
            if (f16 > i10) {
                f13 = Math.abs(f16 - Math.max(f16 - f12, i10));
            } else {
                f13 = 0.0f;
                if (f15 < 0.0f) {
                    f13 = Math.abs(f15 - Math.min(f15 + f12, 0.0f));
                }
            }
            return e(f10, f11, f12, z10, z11, f13);
        }

        public b e(float f10, float f11, float f12, boolean z10, boolean z11, float f13) {
            return f(f10, f11, f12, z10, z11, f13, 0.0f, 0.0f);
        }

        public b f(float f10, float f11, float f12, boolean z10, boolean z11, float f13, float f14, float f15) {
            if (f12 <= 0.0f) {
                return this;
            }
            if (z11) {
                if (!z10) {
                    int i10 = this.f15527i;
                    if (i10 != -1 && i10 != 0) {
                        throw new IllegalArgumentException("Anchor keylines must be either the first or last keyline.");
                    }
                    this.f15527i = this.f15521c.size();
                } else {
                    throw new IllegalArgumentException("Anchor keylines cannot be focal.");
                }
            }
            c cVar = new c(Float.MIN_VALUE, f10, f11, f12, z11, f13, f14, f15);
            if (z10) {
                if (this.f15522d == null) {
                    this.f15522d = cVar;
                    this.f15524f = this.f15521c.size();
                }
                if (this.f15525g != -1 && this.f15521c.size() - this.f15525g > 1) {
                    throw new IllegalArgumentException("Keylines marked as focal must be placed next to each other. There cannot be non-focal keylines between focal keylines.");
                }
                if (f12 == this.f15522d.f15531d) {
                    this.f15523e = cVar;
                    this.f15525g = this.f15521c.size();
                } else {
                    throw new IllegalArgumentException("Keylines that are marked as focal must all have the same masked item size.");
                }
            } else if (this.f15522d == null && cVar.f15531d < this.f15526h) {
                throw new IllegalArgumentException("Keylines before the first focal keyline must be ordered by incrementing masked item size.");
            } else {
                if (this.f15523e != null && cVar.f15531d > this.f15526h) {
                    throw new IllegalArgumentException("Keylines after the last focal keyline must be ordered by decreasing masked item size.");
                }
            }
            this.f15526h = cVar.f15531d;
            this.f15521c.add(cVar);
            return this;
        }

        public b g(float f10, float f11, float f12, int i10) {
            return h(f10, f11, f12, i10, false);
        }

        public b h(float f10, float f11, float f12, int i10, boolean z10) {
            if (i10 > 0 && f12 > 0.0f) {
                for (int i11 = 0; i11 < i10; i11++) {
                    c((i11 * f12) + f10, f11, f12, z10);
                }
            }
            return this;
        }

        public e i() {
            if (this.f15522d != null) {
                ArrayList arrayList = new ArrayList();
                for (int i10 = 0; i10 < this.f15521c.size(); i10++) {
                    c cVar = (c) this.f15521c.get(i10);
                    arrayList.add(new c(j(this.f15522d.f15529b, this.f15519a, this.f15524f, i10), cVar.f15529b, cVar.f15530c, cVar.f15531d, cVar.f15532e, cVar.f15533f, cVar.f15534g, cVar.f15535h));
                }
                return new e(this.f15519a, arrayList, this.f15524f, this.f15525g, this.f15520b);
            }
            throw new IllegalStateException("There must be a keyline marked as focal.");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        final float f15528a;

        /* renamed from: b  reason: collision with root package name */
        final float f15529b;

        /* renamed from: c  reason: collision with root package name */
        final float f15530c;

        /* renamed from: d  reason: collision with root package name */
        final float f15531d;

        /* renamed from: e  reason: collision with root package name */
        final boolean f15532e;

        /* renamed from: f  reason: collision with root package name */
        final float f15533f;

        /* renamed from: g  reason: collision with root package name */
        final float f15534g;

        /* renamed from: h  reason: collision with root package name */
        final float f15535h;

        c(float f10, float f11, float f12, float f13) {
            this(f10, f11, f12, f13, false, 0.0f, 0.0f, 0.0f);
        }

        static c a(c cVar, c cVar2, float f10) {
            return new c(ch.a.a(cVar.f15528a, cVar2.f15528a, f10), ch.a.a(cVar.f15529b, cVar2.f15529b, f10), ch.a.a(cVar.f15530c, cVar2.f15530c, f10), ch.a.a(cVar.f15531d, cVar2.f15531d, f10));
        }

        c(float f10, float f11, float f12, float f13, boolean z10, float f14, float f15, float f16) {
            this.f15528a = f10;
            this.f15529b = f11;
            this.f15530c = f12;
            this.f15531d = f13;
            this.f15532e = z10;
            this.f15533f = f14;
            this.f15534g = f15;
            this.f15535h = f16;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static e o(e eVar, e eVar2, float f10) {
        if (eVar.g() == eVar2.g()) {
            List h10 = eVar.h();
            List h11 = eVar2.h();
            if (h10.size() == h11.size()) {
                ArrayList arrayList = new ArrayList();
                for (int i10 = 0; i10 < eVar.h().size(); i10++) {
                    arrayList.add(c.a((c) h10.get(i10), (c) h11.get(i10), f10));
                }
                return new e(eVar.g(), arrayList, ch.a.c(eVar.c(), eVar2.c(), f10), ch.a.c(eVar.j(), eVar2.j(), f10), eVar.f15518f);
            }
            throw new IllegalArgumentException("Keylines being linearly interpolated must have the same number of keylines.");
        }
        throw new IllegalArgumentException("Keylines being linearly interpolated must have the same item size.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static e p(e eVar, int i10) {
        boolean z10;
        b bVar = new b(eVar.g(), i10);
        float f10 = (i10 - eVar.k().f15529b) - (eVar.k().f15531d / 2.0f);
        for (int size = eVar.h().size() - 1; size >= 0; size--) {
            c cVar = (c) eVar.h().get(size);
            float f11 = (cVar.f15531d / 2.0f) + f10;
            if (size >= eVar.c() && size <= eVar.j()) {
                z10 = true;
            } else {
                z10 = false;
            }
            bVar.d(f11, cVar.f15530c, cVar.f15531d, z10, cVar.f15532e);
            f10 += cVar.f15531d;
        }
        return bVar.i();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int a() {
        return this.f15518f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c b() {
        return (c) this.f15515c.get(this.f15516d);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c() {
        return this.f15516d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c d() {
        return (c) this.f15515c.get(0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c e() {
        for (int i10 = 0; i10 < this.f15515c.size(); i10++) {
            c cVar = (c) this.f15515c.get(i10);
            if (!cVar.f15532e) {
                return cVar;
            }
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List f() {
        return this.f15515c.subList(this.f15516d, this.f15517e + 1);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float g() {
        return this.f15513a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List h() {
        return this.f15515c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c i() {
        return (c) this.f15515c.get(this.f15517e);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int j() {
        return this.f15517e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c k() {
        List list = this.f15515c;
        return (c) list.get(list.size() - 1);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c l() {
        for (int size = this.f15515c.size() - 1; size >= 0; size--) {
            c cVar = (c) this.f15515c.get(size);
            if (!cVar.f15532e) {
                return cVar;
            }
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int m() {
        int i10 = 0;
        for (c cVar : this.f15515c) {
            if (cVar.f15532e) {
                i10++;
            }
        }
        return this.f15515c.size() - i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int n() {
        return this.f15514b;
    }

    private e(float f10, List list, int i10, int i11, int i12) {
        this.f15513a = f10;
        this.f15515c = Collections.unmodifiableList(list);
        this.f15516d = i10;
        this.f15517e = i11;
        while (i10 <= i11) {
            if (((c) list.get(i10)).f15533f == 0.0f) {
                this.f15514b++;
            }
            i10++;
        }
        this.f15518f = i12;
    }
}
