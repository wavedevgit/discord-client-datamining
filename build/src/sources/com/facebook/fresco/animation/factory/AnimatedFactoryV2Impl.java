package com.facebook.fresco.animation.factory;

import android.content.Context;
import android.graphics.Rect;
import com.facebook.common.internal.Supplier;
import com.facebook.common.time.RealtimeSinceBootClock;
import com.facebook.fresco.animation.factory.AnimatedFactoryV2Impl;
import com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
import com.facebook.imagepipeline.common.ImageDecodeOptions;
import java.util.concurrent.ExecutorService;
import m8.g;
import m8.i;
import na.n;
import o8.d;
import o8.m;
import sa.e;
import sa.k;
import sa.o;
@d
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class AnimatedFactoryV2Impl implements ha.a {

    /* renamed from: a  reason: collision with root package name */
    private final PlatformBitmapFactory f10827a;

    /* renamed from: b  reason: collision with root package name */
    private final n f10828b;

    /* renamed from: c  reason: collision with root package name */
    private final la.n f10829c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f10830d;

    /* renamed from: e  reason: collision with root package name */
    private ha.d f10831e;

    /* renamed from: f  reason: collision with root package name */
    private ia.b f10832f;

    /* renamed from: g  reason: collision with root package name */
    private ja.a f10833g;

    /* renamed from: h  reason: collision with root package name */
    private ra.a f10834h;

    /* renamed from: i  reason: collision with root package name */
    private g f10835i;

    /* renamed from: j  reason: collision with root package name */
    private int f10836j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f10837k;

    /* renamed from: l  reason: collision with root package name */
    private int f10838l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements qa.c {
        a() {
        }

        @Override // qa.c
        public e a(k kVar, int i10, o oVar, ImageDecodeOptions imageDecodeOptions) {
            return AnimatedFactoryV2Impl.this.n().a(kVar, imageDecodeOptions, imageDecodeOptions.f11083i);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b implements ia.b {
        b() {
        }

        @Override // ia.b
        public ga.a a(ga.e eVar, Rect rect) {
            return new ia.a(AnimatedFactoryV2Impl.this.m(), eVar, rect, AnimatedFactoryV2Impl.this.f10830d);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class c implements ia.b {
        c() {
        }

        @Override // ia.b
        public ga.a a(ga.e eVar, Rect rect) {
            return new ia.a(AnimatedFactoryV2Impl.this.m(), eVar, rect, AnimatedFactoryV2Impl.this.f10830d);
        }
    }

    @d
    public AnimatedFactoryV2Impl(PlatformBitmapFactory platformBitmapFactory, n nVar, la.n nVar2, boolean z10, boolean z11, int i10, int i11, g gVar) {
        this.f10827a = platformBitmapFactory;
        this.f10828b = nVar;
        this.f10829c = nVar2;
        this.f10836j = i10;
        this.f10837k = z11;
        this.f10830d = z10;
        this.f10835i = gVar;
        this.f10838l = i11;
    }

    public static /* synthetic */ Integer e() {
        return 2;
    }

    public static /* synthetic */ Integer f() {
        return 3;
    }

    private ha.d j() {
        return new ha.e(new c(), this.f10827a, this.f10837k);
    }

    private w9.d k() {
        Supplier supplier = new Supplier() { // from class: w9.b
            @Override // com.facebook.common.internal.Supplier
            public final Object get() {
                return AnimatedFactoryV2Impl.e();
            }
        };
        ExecutorService executorService = this.f10835i;
        if (executorService == null) {
            executorService = new m8.d(this.f10828b.d());
        }
        Supplier supplier2 = new Supplier() { // from class: w9.c
            @Override // com.facebook.common.internal.Supplier
            public final Object get() {
                return AnimatedFactoryV2Impl.f();
            }
        };
        Supplier supplier3 = m.f42628b;
        return new w9.d(l(), i.F(), executorService, RealtimeSinceBootClock.get(), this.f10827a, this.f10829c, supplier, supplier2, supplier3, m.a(Boolean.valueOf(this.f10837k)), m.a(Boolean.valueOf(this.f10830d)), m.a(Integer.valueOf(this.f10836j)), m.a(Integer.valueOf(this.f10838l)));
    }

    private ia.b l() {
        if (this.f10832f == null) {
            this.f10832f = new b();
        }
        return this.f10832f;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public ja.a m() {
        if (this.f10833g == null) {
            this.f10833g = new ja.a();
        }
        return this.f10833g;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public ha.d n() {
        if (this.f10831e == null) {
            this.f10831e = j();
        }
        return this.f10831e;
    }

    @Override // ha.a
    public ra.a a(Context context) {
        if (this.f10834h == null) {
            this.f10834h = k();
        }
        return this.f10834h;
    }

    @Override // ha.a
    public qa.c b() {
        return new qa.c() { // from class: w9.a
            @Override // qa.c
            public final e a(k kVar, int i10, o oVar, ImageDecodeOptions imageDecodeOptions) {
                e b10;
                b10 = AnimatedFactoryV2Impl.this.n().b(kVar, imageDecodeOptions, imageDecodeOptions.f11083i);
                return b10;
            }
        };
    }

    @Override // ha.a
    public qa.c c() {
        return new a();
    }
}
