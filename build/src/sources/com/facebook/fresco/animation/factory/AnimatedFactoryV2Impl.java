package com.facebook.fresco.animation.factory;

import android.content.Context;
import android.graphics.Rect;
import com.facebook.common.internal.Supplier;
import com.facebook.common.time.RealtimeSinceBootClock;
import com.facebook.fresco.animation.factory.AnimatedFactoryV2Impl;
import com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
import com.facebook.imagepipeline.common.ImageDecodeOptions;
import java.util.concurrent.ExecutorService;
import n8.g;
import n8.i;
import oa.n;
import p8.d;
import p8.m;
import ta.e;
import ta.k;
import ta.o;
@d
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class AnimatedFactoryV2Impl implements ia.a {

    /* renamed from: a  reason: collision with root package name */
    private final PlatformBitmapFactory f10219a;

    /* renamed from: b  reason: collision with root package name */
    private final n f10220b;

    /* renamed from: c  reason: collision with root package name */
    private final ma.n f10221c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f10222d;

    /* renamed from: e  reason: collision with root package name */
    private ia.d f10223e;

    /* renamed from: f  reason: collision with root package name */
    private ja.b f10224f;

    /* renamed from: g  reason: collision with root package name */
    private ka.a f10225g;

    /* renamed from: h  reason: collision with root package name */
    private sa.a f10226h;

    /* renamed from: i  reason: collision with root package name */
    private g f10227i;

    /* renamed from: j  reason: collision with root package name */
    private int f10228j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f10229k;

    /* renamed from: l  reason: collision with root package name */
    private int f10230l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements ra.c {
        a() {
        }

        @Override // ra.c
        public e a(k kVar, int i10, o oVar, ImageDecodeOptions imageDecodeOptions) {
            return AnimatedFactoryV2Impl.this.n().a(kVar, imageDecodeOptions, imageDecodeOptions.f10475i);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b implements ja.b {
        b() {
        }

        @Override // ja.b
        public ha.a a(ha.e eVar, Rect rect) {
            return new ja.a(AnimatedFactoryV2Impl.this.m(), eVar, rect, AnimatedFactoryV2Impl.this.f10222d);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class c implements ja.b {
        c() {
        }

        @Override // ja.b
        public ha.a a(ha.e eVar, Rect rect) {
            return new ja.a(AnimatedFactoryV2Impl.this.m(), eVar, rect, AnimatedFactoryV2Impl.this.f10222d);
        }
    }

    @d
    public AnimatedFactoryV2Impl(PlatformBitmapFactory platformBitmapFactory, n nVar, ma.n nVar2, boolean z10, boolean z11, int i10, int i11, g gVar) {
        this.f10219a = platformBitmapFactory;
        this.f10220b = nVar;
        this.f10221c = nVar2;
        this.f10228j = i10;
        this.f10229k = z11;
        this.f10222d = z10;
        this.f10227i = gVar;
        this.f10230l = i11;
    }

    public static /* synthetic */ Integer e() {
        return 2;
    }

    public static /* synthetic */ Integer f() {
        return 3;
    }

    private ia.d j() {
        return new ia.e(new c(), this.f10219a, this.f10229k);
    }

    private x9.d k() {
        Supplier supplier = new Supplier() { // from class: x9.b
            @Override // com.facebook.common.internal.Supplier
            public final Object get() {
                return AnimatedFactoryV2Impl.e();
            }
        };
        ExecutorService executorService = this.f10227i;
        if (executorService == null) {
            executorService = new n8.d(this.f10220b.d());
        }
        Supplier supplier2 = new Supplier() { // from class: x9.c
            @Override // com.facebook.common.internal.Supplier
            public final Object get() {
                return AnimatedFactoryV2Impl.f();
            }
        };
        Supplier supplier3 = m.f43065b;
        return new x9.d(l(), i.y(), executorService, RealtimeSinceBootClock.get(), this.f10219a, this.f10221c, supplier, supplier2, supplier3, m.a(Boolean.valueOf(this.f10229k)), m.a(Boolean.valueOf(this.f10222d)), m.a(Integer.valueOf(this.f10228j)), m.a(Integer.valueOf(this.f10230l)));
    }

    private ja.b l() {
        if (this.f10224f == null) {
            this.f10224f = new b();
        }
        return this.f10224f;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public ka.a m() {
        if (this.f10225g == null) {
            this.f10225g = new ka.a();
        }
        return this.f10225g;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public ia.d n() {
        if (this.f10223e == null) {
            this.f10223e = j();
        }
        return this.f10223e;
    }

    @Override // ia.a
    public sa.a a(Context context) {
        if (this.f10226h == null) {
            this.f10226h = k();
        }
        return this.f10226h;
    }

    @Override // ia.a
    public ra.c b() {
        return new ra.c() { // from class: x9.a
            @Override // ra.c
            public final e a(k kVar, int i10, o oVar, ImageDecodeOptions imageDecodeOptions) {
                e b10;
                b10 = AnimatedFactoryV2Impl.this.n().b(kVar, imageDecodeOptions, imageDecodeOptions.f10475i);
                return b10;
            }
        };
    }

    @Override // ia.a
    public ra.c c() {
        return new a();
    }
}
