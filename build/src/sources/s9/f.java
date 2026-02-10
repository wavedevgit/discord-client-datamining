package s9;

import com.facebook.common.references.CloseableReference;
import java.util.concurrent.TimeUnit;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import s9.a;
import u9.i;
import u9.j;
import u9.k;
import u9.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f implements s9.a {

    /* renamed from: a  reason: collision with root package name */
    private final p9.d f47891a;

    /* renamed from: b  reason: collision with root package name */
    private final q9.c f47892b;

    /* renamed from: c  reason: collision with root package name */
    private final k f47893c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f47894d;

    /* renamed from: e  reason: collision with root package name */
    private final String f47895e;

    /* renamed from: f  reason: collision with root package name */
    private final int f47896f;

    /* renamed from: g  reason: collision with root package name */
    private final int f47897g;

    /* renamed from: h  reason: collision with root package name */
    private j f47898h;

    /* renamed from: i  reason: collision with root package name */
    private final int f47899i;

    /* renamed from: j  reason: collision with root package name */
    private int f47900j;

    /* renamed from: k  reason: collision with root package name */
    private final a f47901k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements i {

        /* renamed from: a  reason: collision with root package name */
        private final int f47902a;

        a() {
            this.f47902a = f.this.f47899i;
        }

        @Override // u9.i
        public int a() {
            return f.this.f47900j;
        }

        @Override // u9.i
        public void b(int i10) {
            if (i10 != f.this.f47900j) {
                f fVar = f.this;
                fVar.f47900j = kotlin.ranges.d.m(i10, 1, fVar.f47899i);
                j m10 = f.this.m();
                if (m10 != null) {
                    m10.d(f.this.f47900j);
                }
            }
        }

        @Override // u9.i
        public int c() {
            return this.f47902a;
        }
    }

    public f(String str, p9.d animationInformation, q9.c bitmapFrameRenderer, k frameLoaderFactory, boolean z10) {
        Intrinsics.checkNotNullParameter(animationInformation, "animationInformation");
        Intrinsics.checkNotNullParameter(bitmapFrameRenderer, "bitmapFrameRenderer");
        Intrinsics.checkNotNullParameter(frameLoaderFactory, "frameLoaderFactory");
        this.f47891a = animationInformation;
        this.f47892b = bitmapFrameRenderer;
        this.f47893c = frameLoaderFactory;
        this.f47894d = z10;
        this.f47895e = str == null ? String.valueOf(hashCode()) : str;
        this.f47896f = animationInformation.m();
        this.f47897g = animationInformation.g();
        int l10 = l(animationInformation);
        this.f47899i = l10;
        this.f47900j = l10;
        this.f47901k = new a();
    }

    private final g k(int i10, int i11) {
        if (!this.f47894d) {
            return new g(this.f47896f, this.f47897g);
        }
        int i12 = this.f47896f;
        int i13 = this.f47897g;
        if (i10 < i12 || i11 < i13) {
            double d10 = i12 / i13;
            if (i11 > i10) {
                i13 = kotlin.ranges.d.i(i11, i13);
                i12 = (int) (i13 * d10);
            } else {
                i12 = kotlin.ranges.d.i(i10, i12);
                i13 = (int) (i12 / d10);
            }
        }
        return new g(i12, i13);
    }

    private final int l(p9.d dVar) {
        return (int) kotlin.ranges.d.e(TimeUnit.SECONDS.toMillis(1L) / (dVar.j() / dVar.a()), 1L);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final j m() {
        if (this.f47898h == null) {
            this.f47898h = this.f47893c.b(this.f47895e, this.f47892b, this.f47891a);
        }
        return this.f47898h;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n() {
        return Unit.f31987a;
    }

    @Override // s9.a
    public void a(int i10, int i11, Function0 function0) {
        if (i10 > 0 && i11 > 0 && this.f47896f > 0 && this.f47897g > 0) {
            g k10 = k(i10, i11);
            j m10 = m();
            if (m10 != null) {
                int b10 = k10.b();
                int b11 = k10.b();
                if (function0 == null) {
                    function0 = new Function0() { // from class: s9.e
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit n10;
                            n10 = f.n();
                            return n10;
                        }
                    };
                }
                m10.a(b10, b11, function0);
            }
        }
    }

    @Override // s9.a
    public void b() {
        j m10 = m();
        if (m10 != null) {
            m10.b();
        }
        d();
    }

    @Override // s9.a
    public CloseableReference c(int i10, int i11, int i12) {
        l lVar;
        g k10 = k(i11, i12);
        j m10 = m();
        if (m10 != null) {
            lVar = m10.c(i10, k10.b(), k10.a());
        } else {
            lVar = null;
        }
        if (lVar != null) {
            u9.e.f50530a.h(this.f47901k, lVar);
        }
        if (lVar == null) {
            return null;
        }
        return lVar.a();
    }

    @Override // s9.a
    public void d() {
        j m10 = m();
        if (m10 != null) {
            k.f50559d.b(this.f47895e, m10);
        }
        this.f47898h = null;
    }

    @Override // s9.a
    public void e(b bVar, q9.b bVar2, p9.a aVar, int i10, Function0 function0) {
        a.C0649a.e(this, bVar, bVar2, aVar, i10, function0);
    }
}
