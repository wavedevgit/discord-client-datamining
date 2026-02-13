package u9;

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
import u9.j;
import u9.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g implements j {

    /* renamed from: n  reason: collision with root package name */
    public static final b f51111n = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final PlatformBitmapFactory f51112a;

    /* renamed from: b  reason: collision with root package name */
    private final q9.c f51113b;

    /* renamed from: c  reason: collision with root package name */
    private final t9.c f51114c;

    /* renamed from: d  reason: collision with root package name */
    private final p9.d f51115d;

    /* renamed from: e  reason: collision with root package name */
    private final int f51116e;

    /* renamed from: f  reason: collision with root package name */
    private final int f51117f;

    /* renamed from: g  reason: collision with root package name */
    private final ConcurrentHashMap f51118g;

    /* renamed from: h  reason: collision with root package name */
    private volatile int f51119h;

    /* renamed from: i  reason: collision with root package name */
    private volatile boolean f51120i;

    /* renamed from: j  reason: collision with root package name */
    private final h f51121j;

    /* renamed from: k  reason: collision with root package name */
    private int f51122k;

    /* renamed from: l  reason: collision with root package name */
    private Map f51123l;

    /* renamed from: m  reason: collision with root package name */
    private Set f51124m;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final CloseableReference f51125a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f51126b;

        public a(CloseableReference bitmapRef) {
            Intrinsics.checkNotNullParameter(bitmapRef, "bitmapRef");
            this.f51125a = bitmapRef;
        }

        public final CloseableReference a() {
            return this.f51125a;
        }

        public final boolean b() {
            if (!this.f51126b && this.f51125a.z0()) {
                return true;
            }
            return false;
        }

        public final void c() {
            CloseableReference.z(this.f51125a);
        }

        public final void d(boolean z10) {
            this.f51126b = z10;
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

    public g(PlatformBitmapFactory platformBitmapFactory, q9.c bitmapFrameRenderer, t9.c fpsCompressor, p9.d animationInformation, int i10) {
        Intrinsics.checkNotNullParameter(platformBitmapFactory, "platformBitmapFactory");
        Intrinsics.checkNotNullParameter(bitmapFrameRenderer, "bitmapFrameRenderer");
        Intrinsics.checkNotNullParameter(fpsCompressor, "fpsCompressor");
        Intrinsics.checkNotNullParameter(animationInformation, "animationInformation");
        this.f51112a = platformBitmapFactory;
        this.f51113b = bitmapFrameRenderer;
        this.f51114c = fpsCompressor;
        this.f51115d = animationInformation;
        this.f51116e = i10;
        int d10 = kotlin.ranges.d.d((k(l()) * i10) / 1000, 1);
        this.f51117f = d10;
        this.f51118g = new ConcurrentHashMap();
        this.f51121j = new h(l().a());
        this.f51122k = -1;
        this.f51123l = o0.i();
        this.f51124m = x0.d();
        d(k(l()));
        this.f51119h = (int) (d10 * 0.5f);
    }

    private final void f(CloseableReference closeableReference) {
        if (closeableReference.z0()) {
            new Canvas((Bitmap) closeableReference.J()).drawColor(0, PorterDuff.Mode.CLEAR);
        }
    }

    private final boolean g(int i10, int i11, int i12, int i13) {
        int intValue;
        CloseableReference closeableReference;
        CloseableReference a10;
        ArrayList<Number> arrayList = new ArrayList();
        for (Object obj : this.f51121j.d(i10, this.f51117f)) {
            if (this.f51124m.contains(Integer.valueOf(((Number) obj).intValue()))) {
                arrayList.add(obj);
            }
        }
        Set l12 = CollectionsKt.l1(arrayList);
        Set keySet = this.f51118g.keySet();
        Intrinsics.checkNotNullExpressionValue(keySet, "<get-keys>(...)");
        ArrayDeque arrayDeque = new ArrayDeque(x0.j(keySet, l12));
        for (Number number : arrayList) {
            int intValue2 = number.intValue();
            if (this.f51118g.get(Integer.valueOf(intValue2)) == null) {
                int i14 = this.f51122k;
                int i15 = -1;
                if (i14 != -1 && !l12.contains(Integer.valueOf(i14))) {
                    return false;
                }
                Integer num = (Integer) arrayDeque.pollFirst();
                if (num != null) {
                    i15 = num.intValue();
                }
                a aVar = (a) this.f51118g.get(Integer.valueOf(i15));
                if (aVar != null && (a10 = aVar.a()) != null) {
                    closeableReference = a10.m();
                } else {
                    closeableReference = null;
                }
                if (closeableReference == null) {
                    CloseableReference a11 = this.f51112a.a(i11, i12);
                    Intrinsics.checkNotNullExpressionValue(a11, "createBitmap(...)");
                    aVar = new a(a11);
                    closeableReference = aVar.a().clone();
                }
                aVar.d(true);
                try {
                    o(closeableReference, intValue2, i11, i12);
                    Unit unit = Unit.f32556a;
                    ls.c.a(closeableReference, null);
                    this.f51118g.remove(Integer.valueOf(i15));
                    aVar.d(false);
                    this.f51118g.put(Integer.valueOf(intValue2), aVar);
                } finally {
                }
            }
        }
        if (arrayList.isEmpty()) {
            intValue = (int) (this.f51117f * 0.5f);
        } else {
            int size = arrayList.size();
            intValue = ((Number) arrayList.get(kotlin.ranges.d.m((int) (size * 0.5f), 0, size - 1))).intValue();
        }
        this.f51119h = intValue;
        return true;
    }

    static /* synthetic */ boolean h(g gVar, int i10, int i11, int i12, int i13, int i14, Object obj) {
        if ((i14 & 8) != 0) {
            i13 = 0;
        }
        return gVar.g(i10, i11, i12, i13);
    }

    private final u9.a i(int i10) {
        u9.a aVar;
        Iterator it = new IntRange(0, this.f51121j.b()).iterator();
        do {
            aVar = null;
            if (!it.hasNext()) {
                break;
            }
            int a10 = this.f51121j.a(i10 - ((m0) it).nextInt());
            a aVar2 = (a) this.f51118g.get(Integer.valueOf(a10));
            if (aVar2 != null) {
                if (!aVar2.b()) {
                    aVar2 = null;
                }
                if (aVar2 != null) {
                    aVar = new u9.a(a10, aVar2.a());
                    continue;
                } else {
                    continue;
                }
            }
        } while (aVar == null);
        return aVar;
    }

    private final l j(int i10) {
        u9.a i11 = i(i10);
        if (i11 != null) {
            CloseableReference clone = i11.a().clone();
            Intrinsics.checkNotNullExpressionValue(clone, "clone(...)");
            this.f51122k = i11.h();
            return new l(clone, l.a.f51136e);
        }
        return new l(null, l.a.f51137i);
    }

    private final int k(p9.d dVar) {
        return (int) kotlin.ranges.d.e(TimeUnit.SECONDS.toMillis(1L) / (dVar.j() / dVar.a()), 1L);
    }

    private final void m(final int i10, final int i11) {
        if (this.f51120i) {
            return;
        }
        this.f51120i = true;
        t9.b.f49204a.b(new Runnable() { // from class: u9.f
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
            if (h(gVar, kotlin.ranges.d.d(this$0.f51122k, 0), i12, i13, 0, 8, null)) {
                gVar.f51120i = false;
                return;
            }
            this$0 = gVar;
            i10 = i12;
            i11 = i13;
        }
    }

    private final void o(CloseableReference closeableReference, int i10, int i11, int i12) {
        CloseableReference a10;
        CloseableReference m10;
        u9.a i13 = i(i10);
        if (i13 != null && (a10 = i13.a()) != null && (m10 = a10.m()) != null) {
            try {
                int h10 = i13.h();
                if (h10 < i10) {
                    Object J = m10.J();
                    Intrinsics.checkNotNullExpressionValue(J, "get(...)");
                    p(closeableReference, (Bitmap) J);
                    Iterator it = new IntRange(h10 + 1, i10).iterator();
                    while (it.hasNext()) {
                        int nextInt = ((m0) it).nextInt();
                        q9.c cVar = this.f51113b;
                        Object J2 = closeableReference.J();
                        Intrinsics.checkNotNullExpressionValue(J2, "get(...)");
                        cVar.a(nextInt, (Bitmap) J2);
                    }
                    ls.c.a(m10, null);
                    return;
                }
                Unit unit = Unit.f32556a;
                ls.c.a(m10, null);
            } catch (Throwable th2) {
                try {
                    throw th2;
                } catch (Throwable th3) {
                    ls.c.a(m10, th2);
                    throw th3;
                }
            }
        }
        f(closeableReference);
        Iterator it2 = new IntRange(0, i10).iterator();
        while (it2.hasNext()) {
            int nextInt2 = ((m0) it2).nextInt();
            q9.c cVar2 = this.f51113b;
            Object J3 = closeableReference.J();
            Intrinsics.checkNotNullExpressionValue(J3, "get(...)");
            cVar2.a(nextInt2, (Bitmap) J3);
        }
    }

    private final CloseableReference p(CloseableReference closeableReference, Bitmap bitmap) {
        if (closeableReference.z0() && !Intrinsics.areEqual(closeableReference.J(), bitmap)) {
            Canvas canvas = new Canvas((Bitmap) closeableReference.J());
            canvas.drawColor(0, PorterDuff.Mode.CLEAR);
            canvas.drawBitmap(bitmap, 0.0f, 0.0f, (Paint) null);
        }
        return closeableReference;
    }

    @Override // u9.j
    public void a(int i10, int i11, Function0 onAnimationLoaded) {
        Intrinsics.checkNotNullParameter(onAnimationLoaded, "onAnimationLoaded");
        m(i10, i11);
        onAnimationLoaded.invoke();
    }

    @Override // u9.j
    public void b() {
        j.a.a(this);
    }

    @Override // u9.j
    public l c(int i10, int i11, int i12) {
        Integer num = (Integer) this.f51123l.get(Integer.valueOf(i10));
        if (num != null) {
            int intValue = num.intValue();
            this.f51122k = intValue;
            a aVar = (a) this.f51118g.get(num);
            if (aVar == null || !aVar.b()) {
                aVar = null;
            }
            if (aVar != null) {
                if (this.f51121j.c(this.f51119h, intValue, this.f51117f)) {
                    m(i11, i12);
                }
                return new l(aVar.a().clone(), l.a.f51135d);
            }
            m(i11, i12);
            return j(intValue);
        }
        return j(i10);
    }

    @Override // u9.j
    public void clear() {
        Collection<a> values = this.f51118g.values();
        Intrinsics.checkNotNullExpressionValue(values, "<get-values>(...)");
        for (a aVar : values) {
            aVar.c();
        }
        this.f51118g.clear();
        this.f51122k = -1;
    }

    @Override // u9.j
    public void d(int i10) {
        Map a10 = this.f51114c.a(l().j() * kotlin.ranges.d.d(l().b(), 1), l().a(), kotlin.ranges.d.i(i10, k(l())));
        this.f51123l = a10;
        this.f51124m = CollectionsKt.l1(a10.values());
    }

    public p9.d l() {
        return this.f51115d;
    }
}
