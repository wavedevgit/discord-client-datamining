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
    private final p9.d f48460a;

    /* renamed from: b  reason: collision with root package name */
    private final q9.c f48461b;

    /* renamed from: c  reason: collision with root package name */
    private final k f48462c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f48463d;

    /* renamed from: e  reason: collision with root package name */
    private final String f48464e;

    /* renamed from: f  reason: collision with root package name */
    private final int f48465f;

    /* renamed from: g  reason: collision with root package name */
    private final int f48466g;

    /* renamed from: h  reason: collision with root package name */
    private j f48467h;

    /* renamed from: i  reason: collision with root package name */
    private final int f48468i;

    /* renamed from: j  reason: collision with root package name */
    private int f48469j;

    /* renamed from: k  reason: collision with root package name */
    private final a f48470k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements i {

        /* renamed from: a  reason: collision with root package name */
        private final int f48471a;

        a() {
            this.f48471a = f.this.f48468i;
        }

        @Override // u9.i
        public int a() {
            return f.this.f48469j;
        }

        @Override // u9.i
        public void b(int i10) {
            if (i10 != f.this.f48469j) {
                f fVar = f.this;
                fVar.f48469j = kotlin.ranges.d.m(i10, 1, fVar.f48468i);
                j m10 = f.this.m();
                if (m10 != null) {
                    m10.d(f.this.f48469j);
                }
            }
        }

        @Override // u9.i
        public int c() {
            return this.f48471a;
        }
    }

    public f(String str, p9.d animationInformation, q9.c bitmapFrameRenderer, k frameLoaderFactory, boolean z10) {
        Intrinsics.checkNotNullParameter(animationInformation, "animationInformation");
        Intrinsics.checkNotNullParameter(bitmapFrameRenderer, "bitmapFrameRenderer");
        Intrinsics.checkNotNullParameter(frameLoaderFactory, "frameLoaderFactory");
        this.f48460a = animationInformation;
        this.f48461b = bitmapFrameRenderer;
        this.f48462c = frameLoaderFactory;
        this.f48463d = z10;
        this.f48464e = str == null ? String.valueOf(hashCode()) : str;
        this.f48465f = animationInformation.m();
        this.f48466g = animationInformation.g();
        int l10 = l(animationInformation);
        this.f48468i = l10;
        this.f48469j = l10;
        this.f48470k = new a();
    }

    private final g k(int i10, int i11) {
        if (!this.f48463d) {
            return new g(this.f48465f, this.f48466g);
        }
        int i12 = this.f48465f;
        int i13 = this.f48466g;
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
        if (this.f48467h == null) {
            this.f48467h = this.f48462c.b(this.f48464e, this.f48461b, this.f48460a);
        }
        return this.f48467h;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n() {
        return Unit.f32556a;
    }

    @Override // s9.a
    public void a(int i10, int i11, Function0 function0) {
        if (i10 > 0 && i11 > 0 && this.f48465f > 0 && this.f48466g > 0) {
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
            u9.e.f51099a.h(this.f48470k, lVar);
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
            k.f51128d.b(this.f48464e, m10);
        }
        this.f48467h = null;
    }

    @Override // s9.a
    public void e(b bVar, q9.b bVar2, p9.a aVar, int i10, Function0 function0) {
        a.C0649a.e(this, bVar, bVar2, aVar, i10, function0);
    }
}
