package t9;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeUnit;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.m0;
import kotlin.collections.o0;
import kotlin.collections.x0;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.IntRange;
import t9.j;
import t9.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g implements j {

    /* renamed from: n  reason: collision with root package name */
    public static final b f49826n = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final PlatformBitmapFactory f49827a;

    /* renamed from: b  reason: collision with root package name */
    private final p9.c f49828b;

    /* renamed from: c  reason: collision with root package name */
    private final s9.c f49829c;

    /* renamed from: d  reason: collision with root package name */
    private final o9.d f49830d;

    /* renamed from: e  reason: collision with root package name */
    private final int f49831e;

    /* renamed from: f  reason: collision with root package name */
    private final int f49832f;

    /* renamed from: g  reason: collision with root package name */
    private final ConcurrentHashMap f49833g;

    /* renamed from: h  reason: collision with root package name */
    private volatile int f49834h;

    /* renamed from: i  reason: collision with root package name */
    private volatile boolean f49835i;

    /* renamed from: j  reason: collision with root package name */
    private final h f49836j;

    /* renamed from: k  reason: collision with root package name */
    private int f49837k;

    /* renamed from: l  reason: collision with root package name */
    private Map f49838l;

    /* renamed from: m  reason: collision with root package name */
    private Set f49839m;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final CloseableReference f49840a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f49841b;

        public a(CloseableReference bitmapRef) {
            Intrinsics.checkNotNullParameter(bitmapRef, "bitmapRef");
            this.f49840a = bitmapRef;
        }

        public final CloseableReference a() {
            return this.f49840a;
        }

        public final boolean b() {
            if (!this.f49841b && this.f49840a.E0()) {
                return true;
            }
            return false;
        }

        public final void c() {
            CloseableReference.N(this.f49840a);
        }

        public final void d(boolean z10) {
            this.f49841b = z10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    public g(PlatformBitmapFactory platformBitmapFactory, p9.c bitmapFrameRenderer, s9.c fpsCompressor, o9.d animationInformation, int i10) {
        Intrinsics.checkNotNullParameter(platformBitmapFactory, "platformBitmapFactory");
        Intrinsics.checkNotNullParameter(bitmapFrameRenderer, "bitmapFrameRenderer");
        Intrinsics.checkNotNullParameter(fpsCompressor, "fpsCompressor");
        Intrinsics.checkNotNullParameter(animationInformation, "animationInformation");
        this.f49827a = platformBitmapFactory;
        this.f49828b = bitmapFrameRenderer;
        this.f49829c = fpsCompressor;
        this.f49830d = animationInformation;
        this.f49831e = i10;
        int d10 = kotlin.ranges.d.d((k(l()) * i10) / 1000, 1);
        this.f49832f = d10;
        this.f49833g = new ConcurrentHashMap();
        this.f49836j = new h(l().a());
        this.f49837k = -1;
        this.f49838l = o0.i();
        this.f49839m = x0.d();
        d(k(l()));
        this.f49834h = (int) (d10 * 0.5f);
    }

    private final void f(CloseableReference closeableReference) {
        if (closeableReference.E0()) {
            new Canvas((Bitmap) closeableReference.C0()).drawColor(0, PorterDuff.Mode.CLEAR);
        }
    }

    private final boolean g(int i10, int i11, int i12, int i13) {
        int intValue;
        CloseableReference closeableReference;
        CloseableReference a10;
        ArrayList<Number> arrayList = new ArrayList();
        for (Object obj : this.f49836j.d(i10, this.f49832f)) {
            if (this.f49839m.contains(Integer.valueOf(((Number) obj).intValue()))) {
                arrayList.add(obj);
            }
        }
        Set l12 = CollectionsKt.l1(arrayList);
        Set keySet = this.f49833g.keySet();
        Intrinsics.checkNotNullExpressionValue(keySet, "<get-keys>(...)");
        ArrayDeque arrayDeque = new ArrayDeque(x0.j(keySet, l12));
        for (Number number : arrayList) {
            int intValue2 = number.intValue();
            if (this.f49833g.get(Integer.valueOf(intValue2)) == null) {
                int i14 = this.f49837k;
                int i15 = -1;
                if (i14 != -1 && !l12.contains(Integer.valueOf(i14))) {
                    return false;
                }
                Integer num = (Integer) arrayDeque.pollFirst();
                if (num != null) {
                    i15 = num.intValue();
                }
                a aVar = (a) this.f49833g.get(Integer.valueOf(i15));
                if (aVar != null && (a10 = aVar.a()) != null) {
                    closeableReference = a10.B();
                } else {
                    closeableReference = null;
                }
                if (closeableReference == null) {
                    CloseableReference a11 = this.f49827a.a(i11, i12);
                    Intrinsics.checkNotNullExpressionValue(a11, "createBitmap(...)");
                    aVar = new a(a11);
                    closeableReference = aVar.a().clone();
                }
                aVar.d(true);
                try {
                    o(closeableReference, intValue2, i11, i12);
                    Unit unit = Unit.f32464a;
                    wr.c.a(closeableReference, null);
                    this.f49833g.remove(Integer.valueOf(i15));
                    aVar.d(false);
                    this.f49833g.put(Integer.valueOf(intValue2), aVar);
                } finally {
                }
            }
        }
        if (arrayList.isEmpty()) {
            intValue = (int) (this.f49832f * 0.5f);
        } else {
            int size = arrayList.size();
            intValue = ((Number) arrayList.get(kotlin.ranges.d.m((int) (size * 0.5f), 0, size - 1))).intValue();
        }
        this.f49834h = intValue;
        return true;
    }

    static /* synthetic */ boolean h(g gVar, int i10, int i11, int i12, int i13, int i14, Object obj) {
        if ((i14 & 8) != 0) {
            i13 = 0;
        }
        return gVar.g(i10, i11, i12, i13);
    }

    private final t9.a i(int i10) {
        t9.a aVar;
        Iterator it = new IntRange(0, this.f49836j.b()).iterator();
        do {
            aVar = null;
            if (!it.hasNext()) {
                break;
            }
            int a10 = this.f49836j.a(i10 - ((m0) it).nextInt());
            a aVar2 = (a) this.f49833g.get(Integer.valueOf(a10));
            if (aVar2 != null) {
                if (!aVar2.b()) {
                    aVar2 = null;
                }
                if (aVar2 != null) {
                    aVar = new t9.a(a10, aVar2.a());
                    continue;
                } else {
                    continue;
                }
            }
        } while (aVar == null);
        return aVar;
    }

    private final l j(int i10) {
        t9.a i11 = i(i10);
        if (i11 != null) {
            CloseableReference clone = i11.a().clone();
            Intrinsics.checkNotNullExpressionValue(clone, "clone(...)");
            this.f49837k = i11.h();
            return new l(clone, l.a.f49851e);
        }
        return new l(null, l.a.f49852i);
    }

    private final int k(o9.d dVar) {
        return (int) kotlin.ranges.d.e(TimeUnit.SECONDS.toMillis(1L) / (dVar.j() / dVar.a()), 1L);
    }

    private final void m(final int i10, final int i11) {
        if (this.f49835i) {
            return;
        }
        this.f49835i = true;
        s9.b.f49330a.b(new Runnable() { // from class: t9.f
            @Override // java.lang.Runnable
            public final void run() {
                g.n(g.this, i10, i11);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n(g this$0, int i10, int i11) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        while (true) {
            g gVar = this$0;
            int i12 = i10;
            int i13 = i11;
            if (h(gVar, kotlin.ranges.d.d(this$0.f49837k, 0), i12, i13, 0, 8, null)) {
                gVar.f49835i = false;
                return;
            }
            this$0 = gVar;
            i10 = i12;
            i11 = i13;
        }
    }

    private final void o(CloseableReference closeableReference, int i10, int i11, int i12) {
        CloseableReference a10;
        CloseableReference B;
        t9.a i13 = i(i10);
        if (i13 != null && (a10 = i13.a()) != null && (B = a10.B()) != null) {
            try {
                int h10 = i13.h();
                if (h10 < i10) {
                    Object C0 = B.C0();
                    Intrinsics.checkNotNullExpressionValue(C0, "get(...)");
                    p(closeableReference, (Bitmap) C0);
                    Iterator it = new IntRange(h10 + 1, i10).iterator();
                    while (it.hasNext()) {
                        int nextInt = ((m0) it).nextInt();
                        p9.c cVar = this.f49828b;
                        Object C02 = closeableReference.C0();
                        Intrinsics.checkNotNullExpressionValue(C02, "get(...)");
                        cVar.a(nextInt, (Bitmap) C02);
                    }
                    wr.c.a(B, null);
                    return;
                }
                Unit unit = Unit.f32464a;
                wr.c.a(B, null);
            } catch (Throwable th2) {
                try {
                    throw th2;
                } catch (Throwable th3) {
                    wr.c.a(B, th2);
                    throw th3;
                }
            }
        }
        f(closeableReference);
        Iterator it2 = new IntRange(0, i10).iterator();
        while (it2.hasNext()) {
            int nextInt2 = ((m0) it2).nextInt();
            p9.c cVar2 = this.f49828b;
            Object C03 = closeableReference.C0();
            Intrinsics.checkNotNullExpressionValue(C03, "get(...)");
            cVar2.a(nextInt2, (Bitmap) C03);
        }
    }

    private final CloseableReference p(CloseableReference closeableReference, Bitmap bitmap) {
        if (closeableReference.E0() && !Intrinsics.areEqual(closeableReference.C0(), bitmap)) {
            Canvas canvas = new Canvas((Bitmap) closeableReference.C0());
            canvas.drawColor(0, PorterDuff.Mode.CLEAR);
            canvas.drawBitmap(bitmap, 0.0f, 0.0f, (Paint) null);
        }
        return closeableReference;
    }

    @Override // t9.j
    public void a(int i10, int i11, Function0 onAnimationLoaded) {
        Intrinsics.checkNotNullParameter(onAnimationLoaded, "onAnimationLoaded");
        m(i10, i11);
        onAnimationLoaded.invoke();
    }

    @Override // t9.j
    public void b() {
        j.a.a(this);
    }

    @Override // t9.j
    public l c(int i10, int i11, int i12) {
        Integer num = (Integer) this.f49838l.get(Integer.valueOf(i10));
        if (num != null) {
            int intValue = num.intValue();
            this.f49837k = intValue;
            a aVar = (a) this.f49833g.get(num);
            if (aVar == null || !aVar.b()) {
                aVar = null;
            }
            if (aVar != null) {
                if (this.f49836j.c(this.f49834h, intValue, this.f49832f)) {
                    m(i11, i12);
                }
                return new l(aVar.a().clone(), l.a.f49850d);
            }
            m(i11, i12);
            return j(intValue);
        }
        return j(i10);
    }

    @Override // t9.j
    public void clear() {
        Collection<a> values = this.f49833g.values();
        Intrinsics.checkNotNullExpressionValue(values, "<get-values>(...)");
        for (a aVar : values) {
            aVar.c();
        }
        this.f49833g.clear();
        this.f49837k = -1;
    }

    @Override // t9.j
    public void d(int i10) {
        Map a10 = this.f49829c.a(l().j() * kotlin.ranges.d.d(l().b(), 1), l().a(), kotlin.ranges.d.i(i10, k(l())));
        this.f49838l = a10;
        this.f49839m = CollectionsKt.l1(a10.values());
    }

    public o9.d l() {
        return this.f49830d;
    }
}
