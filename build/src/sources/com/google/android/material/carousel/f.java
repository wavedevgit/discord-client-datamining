package com.google.android.material.carousel;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final float f14764a;

    /* renamed from: b  reason: collision with root package name */
    private final List f14765b;

    /* renamed from: c  reason: collision with root package name */
    private final int f14766c;

    /* renamed from: d  reason: collision with root package name */
    private final int f14767d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final float f14768a;

        /* renamed from: b  reason: collision with root package name */
        private final float f14769b;

        /* renamed from: d  reason: collision with root package name */
        private c f14771d;

        /* renamed from: e  reason: collision with root package name */
        private c f14772e;

        /* renamed from: c  reason: collision with root package name */
        private final List f14770c = new ArrayList();

        /* renamed from: f  reason: collision with root package name */
        private int f14773f = -1;

        /* renamed from: g  reason: collision with root package name */
        private int f14774g = -1;

        /* renamed from: h  reason: collision with root package name */
        private float f14775h = 0.0f;

        /* renamed from: i  reason: collision with root package name */
        private int f14776i = -1;

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(float f10, float f11) {
            this.f14768a = f10;
            this.f14769b = f11;
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
            float f17 = this.f14769b;
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
                    int i10 = this.f14776i;
                    if (i10 != -1 && i10 != 0) {
                        throw new IllegalArgumentException("Anchor keylines must be either the first or last keyline.");
                    }
                    this.f14776i = this.f14770c.size();
                } else {
                    throw new IllegalArgumentException("Anchor keylines cannot be focal.");
                }
            }
            c cVar = new c(Float.MIN_VALUE, f10, f11, f12, z11, f13, f14, f15);
            if (z10) {
                if (this.f14771d == null) {
                    this.f14771d = cVar;
                    this.f14773f = this.f14770c.size();
                }
                if (this.f14774g != -1 && this.f14770c.size() - this.f14774g > 1) {
                    throw new IllegalArgumentException("Keylines marked as focal must be placed next to each other. There cannot be non-focal keylines between focal keylines.");
                }
                if (f12 == this.f14771d.f14780d) {
                    this.f14772e = cVar;
                    this.f14774g = this.f14770c.size();
                } else {
                    throw new IllegalArgumentException("Keylines that are marked as focal must all have the same masked item size.");
                }
            } else if (this.f14771d == null && cVar.f14780d < this.f14775h) {
                throw new IllegalArgumentException("Keylines before the first focal keyline must be ordered by incrementing masked item size.");
            } else {
                if (this.f14772e != null && cVar.f14780d > this.f14775h) {
                    throw new IllegalArgumentException("Keylines after the last focal keyline must be ordered by decreasing masked item size.");
                }
            }
            this.f14775h = cVar.f14780d;
            this.f14770c.add(cVar);
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
            if (this.f14771d != null) {
                ArrayList arrayList = new ArrayList();
                for (int i10 = 0; i10 < this.f14770c.size(); i10++) {
                    c cVar = (c) this.f14770c.get(i10);
                    arrayList.add(new c(j(this.f14771d.f14778b, this.f14768a, this.f14773f, i10), cVar.f14778b, cVar.f14779c, cVar.f14780d, cVar.f14781e, cVar.f14782f, cVar.f14783g, cVar.f14784h));
                }
                return new f(this.f14768a, arrayList, this.f14773f, this.f14774g);
            }
            throw new IllegalStateException("There must be a keyline marked as focal.");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        final float f14777a;

        /* renamed from: b  reason: collision with root package name */
        final float f14778b;

        /* renamed from: c  reason: collision with root package name */
        final float f14779c;

        /* renamed from: d  reason: collision with root package name */
        final float f14780d;

        /* renamed from: e  reason: collision with root package name */
        final boolean f14781e;

        /* renamed from: f  reason: collision with root package name */
        final float f14782f;

        /* renamed from: g  reason: collision with root package name */
        final float f14783g;

        /* renamed from: h  reason: collision with root package name */
        final float f14784h;

        c(float f10, float f11, float f12, float f13) {
            this(f10, f11, f12, f13, false, 0.0f, 0.0f, 0.0f);
        }

        static c a(c cVar, c cVar2, float f10) {
            return new c(bh.a.a(cVar.f14777a, cVar2.f14777a, f10), bh.a.a(cVar.f14778b, cVar2.f14778b, f10), bh.a.a(cVar.f14779c, cVar2.f14779c, f10), bh.a.a(cVar.f14780d, cVar2.f14780d, f10));
        }

        c(float f10, float f11, float f12, float f13, boolean z10, float f14, float f15, float f16) {
            this.f14777a = f10;
            this.f14778b = f11;
            this.f14779c = f12;
            this.f14780d = f13;
            this.f14781e = z10;
            this.f14782f = f14;
            this.f14783g = f15;
            this.f14784h = f16;
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
                return new f(fVar.f(), arrayList, bh.a.c(fVar.b(), fVar2.b(), f10), bh.a.c(fVar.i(), fVar2.i(), f10));
            }
            throw new IllegalArgumentException("Keylines being linearly interpolated must have the same number of keylines.");
        }
        throw new IllegalArgumentException("Keylines being linearly interpolated must have the same item size.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static f n(f fVar, float f10) {
        boolean z10;
        b bVar = new b(fVar.f(), f10);
        float f11 = (f10 - fVar.j().f14778b) - (fVar.j().f14780d / 2.0f);
        for (int size = fVar.g().size() - 1; size >= 0; size--) {
            c cVar = (c) fVar.g().get(size);
            float f12 = (cVar.f14780d / 2.0f) + f11;
            if (size >= fVar.b() && size <= fVar.i()) {
                z10 = true;
            } else {
                z10 = false;
            }
            bVar.d(f12, cVar.f14779c, cVar.f14780d, z10, cVar.f14781e);
            f11 += cVar.f14780d;
        }
        return bVar.i();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c a() {
        return (c) this.f14765b.get(this.f14766c);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int b() {
        return this.f14766c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c c() {
        return (c) this.f14765b.get(0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c d() {
        for (int i10 = 0; i10 < this.f14765b.size(); i10++) {
            c cVar = (c) this.f14765b.get(i10);
            if (!cVar.f14781e) {
                return cVar;
            }
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List e() {
        return this.f14765b.subList(this.f14766c, this.f14767d + 1);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float f() {
        return this.f14764a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List g() {
        return this.f14765b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c h() {
        return (c) this.f14765b.get(this.f14767d);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int i() {
        return this.f14767d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c j() {
        List list = this.f14765b;
        return (c) list.get(list.size() - 1);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c k() {
        for (int size = this.f14765b.size() - 1; size >= 0; size--) {
            c cVar = (c) this.f14765b.get(size);
            if (!cVar.f14781e) {
                return cVar;
            }
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int l() {
        int i10 = 0;
        for (c cVar : this.f14765b) {
            if (cVar.f14781e) {
                i10++;
            }
        }
        return this.f14765b.size() - i10;
    }

    private f(float f10, List list, int i10, int i11) {
        this.f14764a = f10;
        this.f14765b = Collections.unmodifiableList(list);
        this.f14766c = i10;
        this.f14767d = i11;
    }
}
