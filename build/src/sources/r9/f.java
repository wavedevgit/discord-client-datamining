package r9;

import com.facebook.common.references.CloseableReference;
import java.util.concurrent.TimeUnit;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import r9.a;
import t9.i;
import t9.j;
import t9.k;
import t9.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f implements r9.a {

    /* renamed from: a  reason: collision with root package name */
    private final o9.d f48100a;

    /* renamed from: b  reason: collision with root package name */
    private final p9.c f48101b;

    /* renamed from: c  reason: collision with root package name */
    private final k f48102c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f48103d;

    /* renamed from: e  reason: collision with root package name */
    private final String f48104e;

    /* renamed from: f  reason: collision with root package name */
    private final int f48105f;

    /* renamed from: g  reason: collision with root package name */
    private final int f48106g;

    /* renamed from: h  reason: collision with root package name */
    private j f48107h;

    /* renamed from: i  reason: collision with root package name */
    private final int f48108i;

    /* renamed from: j  reason: collision with root package name */
    private int f48109j;

    /* renamed from: k  reason: collision with root package name */
    private final a f48110k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements i {

        /* renamed from: a  reason: collision with root package name */
        private final int f48111a;

        a() {
            this.f48111a = f.this.f48108i;
        }

        @Override // t9.i
        public int a() {
            return f.this.f48109j;
        }

        @Override // t9.i
        public void b(int i10) {
            if (i10 != f.this.f48109j) {
                f fVar = f.this;
                fVar.f48109j = kotlin.ranges.d.m(i10, 1, fVar.f48108i);
                j m10 = f.this.m();
                if (m10 != null) {
                    m10.d(f.this.f48109j);
                }
            }
        }

        @Override // t9.i
        public int c() {
            return this.f48111a;
        }
    }

    public f(String str, o9.d animationInformation, p9.c bitmapFrameRenderer, k frameLoaderFactory, boolean z10) {
        Intrinsics.checkNotNullParameter(animationInformation, "animationInformation");
        Intrinsics.checkNotNullParameter(bitmapFrameRenderer, "bitmapFrameRenderer");
        Intrinsics.checkNotNullParameter(frameLoaderFactory, "frameLoaderFactory");
        this.f48100a = animationInformation;
        this.f48101b = bitmapFrameRenderer;
        this.f48102c = frameLoaderFactory;
        this.f48103d = z10;
        this.f48104e = str == null ? String.valueOf(hashCode()) : str;
        this.f48105f = animationInformation.n();
        this.f48106g = animationInformation.g();
        int l10 = l(animationInformation);
        this.f48108i = l10;
        this.f48109j = l10;
        this.f48110k = new a();
    }

    private final g k(int i10, int i11) {
        if (!this.f48103d) {
            return new g(this.f48105f, this.f48106g);
        }
        int i12 = this.f48105f;
        int i13 = this.f48106g;
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

    private final int l(o9.d dVar) {
        return (int) kotlin.ranges.d.e(TimeUnit.SECONDS.toMillis(1L) / (dVar.j() / dVar.a()), 1L);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final j m() {
        if (this.f48107h == null) {
            this.f48107h = this.f48102c.b(this.f48104e, this.f48101b, this.f48100a);
        }
        return this.f48107h;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n() {
        return Unit.f33298a;
    }

    @Override // r9.a
    public void a(int i10, int i11, Function0 function0) {
        if (i10 > 0 && i11 > 0 && this.f48105f > 0 && this.f48106g > 0) {
            g k10 = k(i10, i11);
            j m10 = m();
            if (m10 != null) {
                int b10 = k10.b();
                int b11 = k10.b();
                if (function0 == null) {
                    function0 = new Function0() { // from class: r9.e
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

    @Override // r9.a
    public void b() {
        j m10 = m();
        if (m10 != null) {
            m10.b();
        }
        d();
    }

    @Override // r9.a
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
            t9.e.f49334a.h(this.f48110k, lVar);
        }
        if (lVar == null) {
            return null;
        }
        return lVar.a();
    }

    @Override // r9.a
    public void d() {
        j m10 = m();
        if (m10 != null) {
            k.f49363d.b(this.f48104e, m10);
        }
        this.f48107h = null;
    }

    @Override // r9.a
    public void e(b bVar, p9.b bVar2, o9.a aVar, int i10, Function0 function0) {
        a.C0584a.e(this, bVar, bVar2, aVar, i10, function0);
    }
}
