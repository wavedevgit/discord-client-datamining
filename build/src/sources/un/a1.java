package un;

import android.graphics.Bitmap;
import android.graphics.Rect;
import android.media.Image;
import bk.e;
import com.google.android.gms.tasks.Task;
import java.nio.ByteBuffer;
import java.util.List;
import java.util.concurrent.ExecutionException;
import kotlin.Lazy;
import kotlin.collections.CollectionsKt;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.webrtc.PeerConnection;
import un.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a1 {

    /* renamed from: g  reason: collision with root package name */
    public static final a f51660g = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private xn.c f51662b;

    /* renamed from: a  reason: collision with root package name */
    private double f51661a = 0.35d;

    /* renamed from: c  reason: collision with root package name */
    private c f51663c = c.f51675o;

    /* renamed from: d  reason: collision with root package name */
    private Rect f51664d = new Rect();

    /* renamed from: e  reason: collision with root package name */
    private final byte[] f51665e = new byte[PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS];

    /* renamed from: f  reason: collision with root package name */
    private final Lazy f51666f = qr.l.a(new Function0() { // from class: un.z0
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            bk.d g10;
            g10 = a1.g();
            return g10;
        }
    });

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: d  reason: collision with root package name */
        public static final b f51667d = new b("Center", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f51668e = new b("Left", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final b f51669i = new b("Right", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ b[] f51670o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f51671p;

        static {
            b[] a10 = a();
            f51670o = a10;
            f51671p = xr.a.a(a10);
        }

        private b(String str, int i10) {
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f51667d, f51668e, f51669i};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f51670o.clone();
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: d  reason: collision with root package name */
        public static final c f51672d = new c("Center", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final c f51673e = new c("Left", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final c f51674i = new c("Right", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final c f51675o = new c("All", 3);

        /* renamed from: p  reason: collision with root package name */
        public static final c f51676p = new c("None", 4);

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ c[] f51677q;

        /* renamed from: r  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f51678r;

        static {
            c[] a10 = a();
            f51677q = a10;
            f51678r = xr.a.a(a10);
        }

        private c(String str, int i10) {
        }

        private static final /* synthetic */ c[] a() {
            return new c[]{f51672d, f51673e, f51674i, f51675o, f51676p};
        }

        public static c valueOf(String str) {
            return (c) Enum.valueOf(c.class, str);
        }

        public static c[] values() {
            return (c[]) f51677q.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class d {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f51679a;

        static {
            int[] iArr = new int[b.values().length];
            try {
                iArr[b.f51667d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[b.f51668e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[b.f51669i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f51679a = iArr;
        }
    }

    private final int b(int i10, int i11, int i12) {
        int i13 = i10 - 1;
        int i14 = i11 - 1;
        return (((i14 * h(i12)) + (i13 * i(i12)) + 1) * 3) + ((h(i12) * i13) - (i(i12) * i14)) + 1;
    }

    private final y0 c(j0 j0Var, b bVar) {
        Bitmap e10 = j0Var.e();
        if (e10 != null) {
            return m(bVar, e10);
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bk.d g() {
        bk.d a10 = bk.c.a(new e.a().c(0.35f).b(2).a());
        Intrinsics.checkNotNullExpressionValue(a10, "getClient(...)");
        return a10;
    }

    private final int h(int i10) {
        return i(i10 + 90);
    }

    private final int i(int i10) {
        int abs = Math.abs(i10 / 90) % 4;
        if (abs == 0) {
            return 0;
        }
        if (abs == 1) {
            return 1;
        }
        if (abs == 2) {
            return 0;
        }
        if (abs == 3) {
            return -1;
        }
        throw new IllegalStateException("unreachable");
    }

    private final Rect j(zj.a aVar) {
        if (aVar.k() != 90 && aVar.k() != 270) {
            return new Rect(0, 0, aVar.l(), aVar.h());
        }
        return new Rect(0, 0, aVar.h(), aVar.l());
    }

    private final yn.a k(j0 j0Var, Rect rect) {
        Image.Plane plane;
        int width = j0Var.F().getWidth();
        int height = j0Var.F().getHeight();
        Image.Plane[] planes = j0Var.F().getPlanes();
        if (width == 0 || height == 0 || planes == null || (plane = planes[0]) == null) {
            return null;
        }
        ByteBuffer buffer = plane.getBuffer();
        if (rect == null) {
            rect = new Rect(0, 0, width, height);
        }
        rect.width();
        int width2 = rect.width() / 3;
        int height2 = rect.height() / 3;
        Rect rect2 = this.f51664d;
        int i10 = rect.left;
        int i11 = rect.top;
        rect2.set(i10, i11, i10 + width2, i11 + height2);
        Float[] fArr = new Float[9];
        for (int i12 = 0; i12 < 9; i12++) {
            fArr[i12] = Float.valueOf(0.0f);
        }
        for (int i13 = 0; i13 < 3; i13++) {
            for (int i14 = 0; i14 < 3; i14++) {
                int b10 = b(i14, i13, j0Var.d());
                Intrinsics.checkNotNull(buffer);
                fArr[b10] = Float.valueOf(n(buffer, width, height, this.f51664d));
                Rect rect3 = this.f51664d;
                rect3.left += width2;
                rect3.right += width2;
            }
            Rect rect4 = this.f51664d;
            rect4.left = rect.left;
            rect4.right = rect.left + width2;
            rect4.top += height2;
            rect4.bottom += height2;
        }
        buffer.rewind();
        return new yn.a(fArr);
    }

    private final bk.d l() {
        return (bk.d) this.f51666f.getValue();
    }

    private final y0 m(b bVar, Bitmap bitmap) {
        int i10 = d.f51679a[bVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    return new y0.c(bitmap);
                }
                throw new qr.p();
            }
            return new y0.b(bitmap);
        }
        return new y0.a(bitmap);
    }

    private final float n(ByteBuffer byteBuffer, int i10, int i11, Rect rect) {
        byteBuffer.rewind();
        int width = rect.width();
        int height = rect.height() * width;
        if (width > 32768) {
            return 0.0f;
        }
        kotlin.ranges.a s10 = kotlin.ranges.d.s(kotlin.ranges.d.u(rect.top, rect.bottom), 2);
        int d10 = s10.d();
        int e10 = s10.e();
        int f10 = s10.f();
        long j10 = 0;
        if ((f10 > 0 && d10 <= e10) || (f10 < 0 && e10 <= d10)) {
            while (true) {
                byteBuffer.position((d10 * i10) + rect.left);
                byteBuffer.get(this.f51665e, 0, width);
                for (int i12 = 0; i12 < width; i12++) {
                    j10 += this.f51665e[i12] & 255;
                }
                if (d10 == e10) {
                    break;
                }
                d10 += f10;
            }
        }
        return ((((float) j10) / height) / 255.0f) * 2;
    }

    private final boolean o(bk.a aVar, Rect rect) {
        int width = rect.width();
        int height = rect.height();
        bk.f d10 = aVar.d(6);
        if (d10 == null) {
            return false;
        }
        double d11 = width / 2;
        double min = (Math.min(width, height) * 0.4d) / 2;
        double d12 = height / 2;
        return new Rect((int) (d11 - min), (int) (d12 - min), (int) (d11 + min), (int) (d12 + min)).contains((int) d10.a().x, (int) d10.a().y);
    }

    private final boolean p(Rect rect, Rect rect2) {
        int width = rect2.width();
        int height = rect2.height();
        int i10 = width / 2;
        int i11 = height / 2;
        int min = Math.min(width, height) / 2;
        Rect rect3 = new Rect(0, 0, width, height);
        rect3.inset(25, 25);
        if (!rect3.contains(rect) || Math.abs(kotlin.ranges.d.d(rect2.width() - rect.right, 1) - kotlin.ranges.d.d(rect.left, 1)) / rect2.width() > 0.3d || rect.left <= i10 - min || rect.right >= i10 + min || rect.top <= i11 - min || rect.bottom >= i11 + min) {
            return false;
        }
        return true;
    }

    private final boolean q(Rect rect, Rect rect2) {
        int width = rect2.width();
        int height = rect2.height();
        if (Math.max(rect.width(), rect.height()) > Math.min(width, height) * 0.8d) {
            return true;
        }
        return false;
    }

    private final boolean r(Rect rect, Rect rect2) {
        int width = rect2.width();
        int height = rect2.height();
        if (Math.max(rect.width(), rect.height()) < Math.min(width, height) * this.f51661a) {
            return true;
        }
        return false;
    }

    public final yn.c d(Image image, int i10) {
        Intrinsics.checkNotNullParameter(image, "image");
        return f(m0.d(image, i10));
    }

    public final yn.c e(androidx.camera.core.n image) {
        Intrinsics.checkNotNullParameter(image, "image");
        j0 e10 = m0.e(image);
        if (e10 == null) {
            return new yn.c(null, yn.b.f55484t, 0, false, false, false, 0.0f, null);
        }
        return f(e10);
    }

    public final yn.c f(j0 imageToAnalyze) {
        Rect rect;
        yn.b bVar;
        y0 c10;
        y0 y0Var;
        yn.b bVar2;
        Intrinsics.checkNotNullParameter(imageToAnalyze, "imageToAnalyze");
        xn.c cVar = this.f51662b;
        if (cVar != null) {
            rect = xn.d.a(cVar, imageToAnalyze);
        } else {
            rect = null;
        }
        zj.a f10 = imageToAnalyze.f();
        Rect j10 = j(f10);
        yn.a k10 = k(imageToAnalyze, rect);
        Task j11 = l().j(f10);
        Intrinsics.checkNotNullExpressionValue(j11, "process(...)");
        try {
            List list = (List) yg.m.a(j11);
            List list2 = (List) j11.l();
            if (list2.isEmpty()) {
                return new yn.c(null, yn.b.f55481q, list2.size(), false, false, false, 0.0f, k10);
            }
            if (list2.size() > 1) {
                return new yn.c(null, yn.b.f55479o, list2.size(), false, false, false, 0.0f, k10);
            }
            Intrinsics.checkNotNull(list2);
            bk.a aVar = (bk.a) CollectionsKt.o0(list2);
            Rect a10 = aVar.a();
            Intrinsics.checkNotNullExpressionValue(a10, "getBoundingBox(...)");
            boolean q10 = q(a10, j10);
            Rect a11 = aVar.a();
            Intrinsics.checkNotNullExpressionValue(a11, "getBoundingBox(...)");
            boolean r10 = r(a11, j10);
            Rect a12 = aVar.a();
            Intrinsics.checkNotNullExpressionValue(a12, "getBoundingBox(...)");
            boolean p10 = p(a12, j10);
            float c11 = aVar.c();
            if (q10) {
                bVar = yn.b.f55477e;
            } else if (r10) {
                bVar = yn.b.f55478i;
            } else if (!p10) {
                bVar = yn.b.f55476d;
            } else {
                if (-10.0f < c11 && c11 < 10.0f) {
                    Intrinsics.checkNotNull(aVar);
                    if (!o(aVar, j10)) {
                        bVar = yn.b.f55476d;
                    } else {
                        c cVar2 = this.f51663c;
                        if (cVar2 != c.f51672d && cVar2 != c.f51675o) {
                            bVar = yn.b.f55482r;
                        } else {
                            c10 = c(imageToAnalyze, b.f51667d);
                            y0Var = c10;
                            bVar2 = null;
                        }
                    }
                } else if (c11 < -15.0f) {
                    c cVar3 = this.f51663c;
                    if (cVar3 != c.f51674i && cVar3 != c.f51675o) {
                        bVar = yn.b.f55482r;
                    } else {
                        c10 = c(imageToAnalyze, b.f51669i);
                        y0Var = c10;
                        bVar2 = null;
                    }
                } else if (15.0f < c11) {
                    c cVar4 = this.f51663c;
                    if (cVar4 != c.f51673e && cVar4 != c.f51675o) {
                        bVar = yn.b.f55482r;
                    } else {
                        c10 = c(imageToAnalyze, b.f51668e);
                        y0Var = c10;
                        bVar2 = null;
                    }
                } else {
                    bVar = yn.b.f55482r;
                }
                return new yn.c(y0Var, bVar2, list2.size(), q10, r10, p10, c11, k10);
            }
            bVar2 = bVar;
            y0Var = null;
            return new yn.c(y0Var, bVar2, list2.size(), q10, r10, p10, c11, k10);
        } catch (ExecutionException unused) {
            return new yn.c(null, yn.b.f55483s, 0, false, false, false, 0.0f, k10);
        }
    }

    public final void s(boolean z10) {
        double d10;
        if (z10) {
            d10 = 0.45d;
        } else {
            d10 = 0.35d;
        }
        this.f51661a = d10;
    }

    public final void t(c pose) {
        Intrinsics.checkNotNullParameter(pose, "pose");
        this.f51663c = pose;
    }

    public final void u(Rect rect, Rect previewRect) {
        Intrinsics.checkNotNullParameter(rect, "rect");
        Intrinsics.checkNotNullParameter(previewRect, "previewRect");
        this.f51662b = new xn.c(rect, previewRect);
    }
}
