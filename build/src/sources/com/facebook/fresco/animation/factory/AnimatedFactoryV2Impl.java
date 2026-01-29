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
    private final PlatformBitmapFactory f11198a;

    /* renamed from: b  reason: collision with root package name */
    private final n f11199b;

    /* renamed from: c  reason: collision with root package name */
    private final la.n f11200c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f11201d;

    /* renamed from: e  reason: collision with root package name */
    private ha.d f11202e;

    /* renamed from: f  reason: collision with root package name */
    private ia.b f11203f;

    /* renamed from: g  reason: collision with root package name */
    private ja.a f11204g;

    /* renamed from: h  reason: collision with root package name */
    private ra.a f11205h;

    /* renamed from: i  reason: collision with root package name */
    private g f11206i;

    /* renamed from: j  reason: collision with root package name */
    private int f11207j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f11208k;

    /* renamed from: l  reason: collision with root package name */
    private int f11209l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements qa.c {
        a() {
        }

        @Override // qa.c
        public e a(k kVar, int i10, o oVar, ImageDecodeOptions imageDecodeOptions) {
            return AnimatedFactoryV2Impl.this.n().a(kVar, imageDecodeOptions, imageDecodeOptions.f11454i);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b implements ia.b {
        b() {
        }

        @Override // ia.b
        public ga.a a(ga.e eVar, Rect rect) {
            return new ia.a(AnimatedFactoryV2Impl.this.m(), eVar, rect, AnimatedFactoryV2Impl.this.f11201d);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class c implements ia.b {
        c() {
        }

        @Override // ia.b
        public ga.a a(ga.e eVar, Rect rect) {
            return new ia.a(AnimatedFactoryV2Impl.this.m(), eVar, rect, AnimatedFactoryV2Impl.this.f11201d);
        }
    }

    @d
    public AnimatedFactoryV2Impl(PlatformBitmapFactory platformBitmapFactory, n nVar, la.n nVar2, boolean z10, boolean z11, int i10, int i11, g gVar) {
        this.f11198a = platformBitmapFactory;
        this.f11199b = nVar;
        this.f11200c = nVar2;
        this.f11207j = i10;
        this.f11208k = z11;
        this.f11201d = z10;
        this.f11206i = gVar;
        this.f11209l = i11;
    }

    public static /* synthetic */ Integer e() {
        return 2;
    }

    public static /* synthetic */ Integer f() {
        return 3;
    }

    private ha.d j() {
        return new ha.e(new c(), this.f11198a, this.f11208k);
    }

    private w9.d k() {
        Supplier supplier = new Supplier() { // from class: w9.b
            @Override // com.facebook.common.internal.Supplier
            public final Object get() {
                return AnimatedFactoryV2Impl.e();
            }
        };
        ExecutorService executorService = this.f11206i;
        if (executorService == null) {
            executorService = new m8.d(this.f11199b.d());
        }
        Supplier supplier2 = new Supplier() { // from class: w9.c
            @Override // com.facebook.common.internal.Supplier
            public final Object get() {
                return AnimatedFactoryV2Impl.f();
            }
        };
        Supplier supplier3 = m.f42484b;
        return new w9.d(l(), i.F(), executorService, RealtimeSinceBootClock.get(), this.f11198a, this.f11200c, supplier, supplier2, supplier3, m.a(Boolean.valueOf(this.f11208k)), m.a(Boolean.valueOf(this.f11201d)), m.a(Integer.valueOf(this.f11207j)), m.a(Integer.valueOf(this.f11209l)));
    }

    private ia.b l() {
        if (this.f11203f == null) {
            this.f11203f = new b();
        }
        return this.f11203f;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public ja.a m() {
        if (this.f11204g == null) {
            this.f11204g = new ja.a();
        }
        return this.f11204g;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public ha.d n() {
        if (this.f11202e == null) {
            this.f11202e = j();
        }
        return this.f11202e;
    }

    @Override // ha.a
    public ra.a a(Context context) {
        if (this.f11205h == null) {
            this.f11205h = k();
        }
        return this.f11205h;
    }

    @Override // ha.a
    public qa.c b() {
        return new qa.c() { // from class: w9.a
            @Override // qa.c
            public final e a(k kVar, int i10, o oVar, ImageDecodeOptions imageDecodeOptions) {
                e b10;
                b10 = AnimatedFactoryV2Impl.this.n().b(kVar, imageDecodeOptions, imageDecodeOptions.f11454i);
                return b10;
            }
        };
    }

    @Override // ha.a
    public qa.c c() {
        return new a();
    }
}
