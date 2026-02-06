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
    private final PlatformBitmapFactory f10079a;

    /* renamed from: b  reason: collision with root package name */
    private final n f10080b;

    /* renamed from: c  reason: collision with root package name */
    private final la.n f10081c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f10082d;

    /* renamed from: e  reason: collision with root package name */
    private ha.d f10083e;

    /* renamed from: f  reason: collision with root package name */
    private ia.b f10084f;

    /* renamed from: g  reason: collision with root package name */
    private ja.a f10085g;

    /* renamed from: h  reason: collision with root package name */
    private ra.a f10086h;

    /* renamed from: i  reason: collision with root package name */
    private g f10087i;

    /* renamed from: j  reason: collision with root package name */
    private int f10088j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f10089k;

    /* renamed from: l  reason: collision with root package name */
    private int f10090l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements qa.c {
        a() {
        }

        @Override // qa.c
        public e a(k kVar, int i10, o oVar, ImageDecodeOptions imageDecodeOptions) {
            return AnimatedFactoryV2Impl.this.n().a(kVar, imageDecodeOptions, imageDecodeOptions.f10335i);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b implements ia.b {
        b() {
        }

        @Override // ia.b
        public ga.a a(ga.e eVar, Rect rect) {
            return new ia.a(AnimatedFactoryV2Impl.this.m(), eVar, rect, AnimatedFactoryV2Impl.this.f10082d);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class c implements ia.b {
        c() {
        }

        @Override // ia.b
        public ga.a a(ga.e eVar, Rect rect) {
            return new ia.a(AnimatedFactoryV2Impl.this.m(), eVar, rect, AnimatedFactoryV2Impl.this.f10082d);
        }
    }

    @d
    public AnimatedFactoryV2Impl(PlatformBitmapFactory platformBitmapFactory, n nVar, la.n nVar2, boolean z10, boolean z11, int i10, int i11, g gVar) {
        this.f10079a = platformBitmapFactory;
        this.f10080b = nVar;
        this.f10081c = nVar2;
        this.f10088j = i10;
        this.f10089k = z11;
        this.f10082d = z10;
        this.f10087i = gVar;
        this.f10090l = i11;
    }

    public static /* synthetic */ Integer e() {
        return 2;
    }

    public static /* synthetic */ Integer f() {
        return 3;
    }

    private ha.d j() {
        return new ha.e(new c(), this.f10079a, this.f10089k);
    }

    private w9.d k() {
        Supplier supplier = new Supplier() { // from class: w9.b
            @Override // com.facebook.common.internal.Supplier
            public final Object get() {
                return AnimatedFactoryV2Impl.e();
            }
        };
        ExecutorService executorService = this.f10087i;
        if (executorService == null) {
            executorService = new m8.d(this.f10080b.d());
        }
        Supplier supplier2 = new Supplier() { // from class: w9.c
            @Override // com.facebook.common.internal.Supplier
            public final Object get() {
                return AnimatedFactoryV2Impl.f();
            }
        };
        Supplier supplier3 = m.f41557b;
        return new w9.d(l(), i.y(), executorService, RealtimeSinceBootClock.get(), this.f10079a, this.f10081c, supplier, supplier2, supplier3, m.a(Boolean.valueOf(this.f10089k)), m.a(Boolean.valueOf(this.f10082d)), m.a(Integer.valueOf(this.f10088j)), m.a(Integer.valueOf(this.f10090l)));
    }

    private ia.b l() {
        if (this.f10084f == null) {
            this.f10084f = new b();
        }
        return this.f10084f;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public ja.a m() {
        if (this.f10085g == null) {
            this.f10085g = new ja.a();
        }
        return this.f10085g;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public ha.d n() {
        if (this.f10083e == null) {
            this.f10083e = j();
        }
        return this.f10083e;
    }

    @Override // ha.a
    public ra.a a(Context context) {
        if (this.f10086h == null) {
            this.f10086h = k();
        }
        return this.f10086h;
    }

    @Override // ha.a
    public qa.c b() {
        return new qa.c() { // from class: w9.a
            @Override // qa.c
            public final e a(k kVar, int i10, o oVar, ImageDecodeOptions imageDecodeOptions) {
                e b10;
                b10 = AnimatedFactoryV2Impl.this.n().b(kVar, imageDecodeOptions, imageDecodeOptions.f10335i);
                return b10;
            }
        };
    }

    @Override // ha.a
    public qa.c c() {
        return new a();
    }
}
