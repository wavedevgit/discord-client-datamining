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
    public static final b f49618n = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final PlatformBitmapFactory f49619a;

    /* renamed from: b  reason: collision with root package name */
    private final p9.c f49620b;

    /* renamed from: c  reason: collision with root package name */
    private final s9.c f49621c;

    /* renamed from: d  reason: collision with root package name */
    private final o9.d f49622d;

    /* renamed from: e  reason: collision with root package name */
    private final int f49623e;

    /* renamed from: f  reason: collision with root package name */
    private final int f49624f;

    /* renamed from: g  reason: collision with root package name */
    private final ConcurrentHashMap f49625g;

    /* renamed from: h  reason: collision with root package name */
    private volatile int f49626h;

    /* renamed from: i  reason: collision with root package name */
    private volatile boolean f49627i;

    /* renamed from: j  reason: collision with root package name */
    private final h f49628j;

    /* renamed from: k  reason: collision with root package name */
    private int f49629k;

    /* renamed from: l  reason: collision with root package name */
    private Map f49630l;

    /* renamed from: m  reason: collision with root package name */
    private Set f49631m;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final CloseableReference f49632a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f49633b;

        public a(CloseableReference bitmapRef) {
            Intrinsics.checkNotNullParameter(bitmapRef, "bitmapRef");
            this.f49632a = bitmapRef;
        }

        public final CloseableReference a() {
            return this.f49632a;
        }

        public final boolean b() {
            if (!this.f49633b && this.f49632a.J0()) {
                return true;
            }
            return false;
        }

        public final void c() {
            CloseableReference.N(this.f49632a);
        }

        public final void d(boolean z10) {
            this.f49633b = z10;
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
        this.f49619a = platformBitmapFactory;
        this.f49620b = bitmapFrameRenderer;
        this.f49621c = fpsCompressor;
        this.f49622d = animationInformation;
        this.f49623e = i10;
        int d10 = kotlin.ranges.d.d((k(l()) * i10) / 1000, 1);
        this.f49624f = d10;
        this.f49625g = new ConcurrentHashMap();
        this.f49628j = new h(l().a());
        this.f49629k = -1;
        this.f49630l = o0.i();
        this.f49631m = x0.d();
        d(k(l()));
        this.f49626h = (int) (d10 * 0.5f);
    }

    private final void f(CloseableReference closeableReference) {
        if (closeableReference.J0()) {
            new Canvas((Bitmap) closeableReference.F0()).drawColor(0, PorterDuff.Mode.CLEAR);
        }
    }

    private final boolean g(int i10, int i11, int i12, int i13) {
        int intValue;
        CloseableReference closeableReference;
        CloseableReference a10;
        ArrayList<Number> arrayList = new ArrayList();
        for (Object obj : this.f49628j.d(i10, this.f49624f)) {
            if (this.f49631m.contains(Integer.valueOf(((Number) obj).intValue()))) {
                arrayList.add(obj);
            }
        }
        Set l12 = CollectionsKt.l1(arrayList);
        Set keySet = this.f49625g.keySet();
        Intrinsics.checkNotNullExpressionValue(keySet, "<get-keys>(...)");
        ArrayDeque arrayDeque = new ArrayDeque(x0.j(keySet, l12));
        for (Number number : arrayList) {
            int intValue2 = number.intValue();
            if (this.f49625g.get(Integer.valueOf(intValue2)) == null) {
                int i14 = this.f49629k;
                int i15 = -1;
                if (i14 != -1 && !l12.contains(Integer.valueOf(i14))) {
                    return false;
                }
                Integer num = (Integer) arrayDeque.pollFirst();
                if (num != null) {
                    i15 = num.intValue();
                }
                a aVar = (a) this.f49625g.get(Integer.valueOf(i15));
                if (aVar != null && (a10 = aVar.a()) != null) {
                    closeableReference = a10.B();
                } else {
                    closeableReference = null;
                }
                if (closeableReference == null) {
                    CloseableReference a11 = this.f49619a.a(i11, i12);
                    Intrinsics.checkNotNullExpressionValue(a11, "createBitmap(...)");
                    aVar = new a(a11);
                    closeableReference = aVar.a().clone();
                }
                aVar.d(true);
                try {
                    o(closeableReference, intValue2, i11, i12);
                    Unit unit = Unit.f33074a;
                    ur.c.a(closeableReference, null);
                    this.f49625g.remove(Integer.valueOf(i15));
                    aVar.d(false);
                    this.f49625g.put(Integer.valueOf(intValue2), aVar);
                } finally {
                }
            }
        }
        if (arrayList.isEmpty()) {
            intValue = (int) (this.f49624f * 0.5f);
        } else {
            int size = arrayList.size();
            intValue = ((Number) arrayList.get(kotlin.ranges.d.m((int) (size * 0.5f), 0, size - 1))).intValue();
        }
        this.f49626h = intValue;
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
        Iterator it = new IntRange(0, this.f49628j.b()).iterator();
        do {
            aVar = null;
            if (!it.hasNext()) {
                break;
            }
            int a10 = this.f49628j.a(i10 - ((m0) it).nextInt());
            a aVar2 = (a) this.f49625g.get(Integer.valueOf(a10));
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
            this.f49629k = i11.h();
            return new l(clone, l.a.f49643e);
        }
        return new l(null, l.a.f49644i);
    }

    private final int k(o9.d dVar) {
        return (int) kotlin.ranges.d.e(TimeUnit.SECONDS.toMillis(1L) / (dVar.j() / dVar.a()), 1L);
    }

    private final void m(final int i10, final int i11) {
        if (this.f49627i) {
            return;
        }
        this.f49627i = true;
        s9.b.f48923a.b(new Runnable() { // from class: t9.f
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
            if (h(gVar, kotlin.ranges.d.d(this$0.f49629k, 0), i12, i13, 0, 8, null)) {
                gVar.f49627i = false;
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
                    Object F0 = B.F0();
                    Intrinsics.checkNotNullExpressionValue(F0, "get(...)");
                    p(closeableReference, (Bitmap) F0);
                    Iterator it = new IntRange(h10 + 1, i10).iterator();
                    while (it.hasNext()) {
                        int nextInt = ((m0) it).nextInt();
                        p9.c cVar = this.f49620b;
                        Object F02 = closeableReference.F0();
                        Intrinsics.checkNotNullExpressionValue(F02, "get(...)");
                        cVar.a(nextInt, (Bitmap) F02);
                    }
                    ur.c.a(B, null);
                    return;
                }
                Unit unit = Unit.f33074a;
                ur.c.a(B, null);
            } catch (Throwable th2) {
                try {
                    throw th2;
                } catch (Throwable th3) {
                    ur.c.a(B, th2);
                    throw th3;
                }
            }
        }
        f(closeableReference);
        Iterator it2 = new IntRange(0, i10).iterator();
        while (it2.hasNext()) {
            int nextInt2 = ((m0) it2).nextInt();
            p9.c cVar2 = this.f49620b;
            Object F03 = closeableReference.F0();
            Intrinsics.checkNotNullExpressionValue(F03, "get(...)");
            cVar2.a(nextInt2, (Bitmap) F03);
        }
    }

    private final CloseableReference p(CloseableReference closeableReference, Bitmap bitmap) {
        if (closeableReference.J0() && !Intrinsics.areEqual(closeableReference.F0(), bitmap)) {
            Canvas canvas = new Canvas((Bitmap) closeableReference.F0());
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
        Integer num = (Integer) this.f49630l.get(Integer.valueOf(i10));
        if (num != null) {
            int intValue = num.intValue();
            this.f49629k = intValue;
            a aVar = (a) this.f49625g.get(num);
            if (aVar == null || !aVar.b()) {
                aVar = null;
            }
            if (aVar != null) {
                if (this.f49628j.c(this.f49626h, intValue, this.f49624f)) {
                    m(i11, i12);
                }
                return new l(aVar.a().clone(), l.a.f49642d);
            }
            m(i11, i12);
            return j(intValue);
        }
        return j(i10);
    }

    @Override // t9.j
    public void clear() {
        Collection<a> values = this.f49625g.values();
        Intrinsics.checkNotNullExpressionValue(values, "<get-values>(...)");
        for (a aVar : values) {
            aVar.c();
        }
        this.f49625g.clear();
        this.f49629k = -1;
    }

    @Override // t9.j
    public void d(int i10) {
        Map a10 = this.f49621c.a(l().j() * kotlin.ranges.d.d(l().b(), 1), l().a(), kotlin.ranges.d.i(i10, k(l())));
        this.f49630l = a10;
        this.f49631m = CollectionsKt.l1(a10.values());
    }

    public o9.d l() {
        return this.f49622d;
    }
}
