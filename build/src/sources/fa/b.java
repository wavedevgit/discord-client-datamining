package fa;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f22996a = new b();

    /* renamed from: b  reason: collision with root package name */
    public static final c f22997b;

    /* renamed from: c  reason: collision with root package name */
    public static final c f22998c;

    /* renamed from: d  reason: collision with root package name */
    public static final c f22999d;

    /* renamed from: e  reason: collision with root package name */
    public static final c f23000e;

    /* renamed from: f  reason: collision with root package name */
    public static final c f23001f;

    /* renamed from: g  reason: collision with root package name */
    public static final c f23002g;

    /* renamed from: h  reason: collision with root package name */
    public static final c f23003h;

    /* renamed from: i  reason: collision with root package name */
    public static final c f23004i;

    /* renamed from: j  reason: collision with root package name */
    public static final c f23005j;

    /* renamed from: k  reason: collision with root package name */
    public static final c f23006k;

    /* renamed from: l  reason: collision with root package name */
    public static final c f23007l;

    /* renamed from: m  reason: collision with root package name */
    public static final c f23008m;

    /* renamed from: n  reason: collision with root package name */
    public static final c f23009n;

    /* renamed from: o  reason: collision with root package name */
    public static final c f23010o;

    /* renamed from: p  reason: collision with root package name */
    public static final List f23011p;

    static {
        c cVar = new c("JPEG", "jpeg");
        f22997b = cVar;
        c cVar2 = new c("PNG", "png");
        f22998c = cVar2;
        c cVar3 = new c("GIF", "gif");
        f22999d = cVar3;
        c cVar4 = new c("BMP", "bmp");
        f23000e = cVar4;
        c cVar5 = new c("ICO", "ico");
        f23001f = cVar5;
        c cVar6 = new c("WEBP_SIMPLE", "webp");
        f23002g = cVar6;
        c cVar7 = new c("WEBP_LOSSLESS", "webp");
        f23003h = cVar7;
        c cVar8 = new c("WEBP_EXTENDED", "webp");
        f23004i = cVar8;
        c cVar9 = new c("WEBP_EXTENDED_WITH_ALPHA", "webp");
        f23005j = cVar9;
        c cVar10 = new c("WEBP_ANIMATED", "webp");
        f23006k = cVar10;
        c cVar11 = new c("HEIF", "heif");
        f23007l = cVar11;
        f23008m = new c("DNG", "dng");
        c cVar12 = new c("BINARY_XML", "xml");
        f23009n = cVar12;
        c cVar13 = new c("AVIF", "avif");
        f23010o = cVar13;
        f23011p = CollectionsKt.o(cVar, cVar2, cVar3, cVar4, cVar5, cVar6, cVar7, cVar8, cVar9, cVar10, cVar11, cVar12, cVar13);
    }

    private b() {
    }

    public static final boolean a(c imageFormat) {
        Intrinsics.checkNotNullParameter(imageFormat, "imageFormat");
        if (imageFormat != f23002g && imageFormat != f23003h && imageFormat != f23004i && imageFormat != f23005j) {
            return false;
        }
        return true;
    }

    public static final boolean b(c imageFormat) {
        Intrinsics.checkNotNullParameter(imageFormat, "imageFormat");
        if (!a(imageFormat) && imageFormat != f23006k) {
            return false;
        }
        return true;
    }
}
