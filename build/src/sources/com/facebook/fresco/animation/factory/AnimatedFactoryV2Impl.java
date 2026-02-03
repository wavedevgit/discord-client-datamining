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
    private final PlatformBitmapFactory f9795a;

    /* renamed from: b  reason: collision with root package name */
    private final n f9796b;

    /* renamed from: c  reason: collision with root package name */
    private final la.n f9797c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f9798d;

    /* renamed from: e  reason: collision with root package name */
    private ha.d f9799e;

    /* renamed from: f  reason: collision with root package name */
    private ia.b f9800f;

    /* renamed from: g  reason: collision with root package name */
    private ja.a f9801g;

    /* renamed from: h  reason: collision with root package name */
    private ra.a f9802h;

    /* renamed from: i  reason: collision with root package name */
    private g f9803i;

    /* renamed from: j  reason: collision with root package name */
    private int f9804j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f9805k;

    /* renamed from: l  reason: collision with root package name */
    private int f9806l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements qa.c {
        a() {
        }

        @Override // qa.c
        public e a(k kVar, int i10, o oVar, ImageDecodeOptions imageDecodeOptions) {
            return AnimatedFactoryV2Impl.this.n().a(kVar, imageDecodeOptions, imageDecodeOptions.f10051i);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b implements ia.b {
        b() {
        }

        @Override // ia.b
        public ga.a a(ga.e eVar, Rect rect) {
            return new ia.a(AnimatedFactoryV2Impl.this.m(), eVar, rect, AnimatedFactoryV2Impl.this.f9798d);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class c implements ia.b {
        c() {
        }

        @Override // ia.b
        public ga.a a(ga.e eVar, Rect rect) {
            return new ia.a(AnimatedFactoryV2Impl.this.m(), eVar, rect, AnimatedFactoryV2Impl.this.f9798d);
        }
    }

    @d
    public AnimatedFactoryV2Impl(PlatformBitmapFactory platformBitmapFactory, n nVar, la.n nVar2, boolean z10, boolean z11, int i10, int i11, g gVar) {
        this.f9795a = platformBitmapFactory;
        this.f9796b = nVar;
        this.f9797c = nVar2;
        this.f9804j = i10;
        this.f9805k = z11;
        this.f9798d = z10;
        this.f9803i = gVar;
        this.f9806l = i11;
    }

    public static /* synthetic */ Integer e() {
        return 2;
    }

    public static /* synthetic */ Integer f() {
        return 3;
    }

    private ha.d j() {
        return new ha.e(new c(), this.f9795a, this.f9805k);
    }

    private w9.d k() {
        Supplier supplier = new Supplier() { // from class: w9.b
            @Override // com.facebook.common.internal.Supplier
            public final Object get() {
                return AnimatedFactoryV2Impl.e();
            }
        };
        ExecutorService executorService = this.f9803i;
        if (executorService == null) {
            executorService = new m8.d(this.f9796b.d());
        }
        Supplier supplier2 = new Supplier() { // from class: w9.c
            @Override // com.facebook.common.internal.Supplier
            public final Object get() {
                return AnimatedFactoryV2Impl.f();
            }
        };
        Supplier supplier3 = m.f42428b;
        return new w9.d(l(), i.F(), executorService, RealtimeSinceBootClock.get(), this.f9795a, this.f9797c, supplier, supplier2, supplier3, m.a(Boolean.valueOf(this.f9805k)), m.a(Boolean.valueOf(this.f9798d)), m.a(Integer.valueOf(this.f9804j)), m.a(Integer.valueOf(this.f9806l)));
    }

    private ia.b l() {
        if (this.f9800f == null) {
            this.f9800f = new b();
        }
        return this.f9800f;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public ja.a m() {
        if (this.f9801g == null) {
            this.f9801g = new ja.a();
        }
        return this.f9801g;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public ha.d n() {
        if (this.f9799e == null) {
            this.f9799e = j();
        }
        return this.f9799e;
    }

    @Override // ha.a
    public ra.a a(Context context) {
        if (this.f9802h == null) {
            this.f9802h = k();
        }
        return this.f9802h;
    }

    @Override // ha.a
    public qa.c b() {
        return new qa.c() { // from class: w9.a
            @Override // qa.c
            public final e a(k kVar, int i10, o oVar, ImageDecodeOptions imageDecodeOptions) {
                e b10;
                b10 = AnimatedFactoryV2Impl.this.n().b(kVar, imageDecodeOptions, imageDecodeOptions.f10051i);
                return b10;
            }
        };
    }

    @Override // ha.a
    public qa.c c() {
        return new a();
    }
}
