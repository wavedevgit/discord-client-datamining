package fa;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f22695a = new b();

    /* renamed from: b  reason: collision with root package name */
    public static final c f22696b;

    /* renamed from: c  reason: collision with root package name */
    public static final c f22697c;

    /* renamed from: d  reason: collision with root package name */
    public static final c f22698d;

    /* renamed from: e  reason: collision with root package name */
    public static final c f22699e;

    /* renamed from: f  reason: collision with root package name */
    public static final c f22700f;

    /* renamed from: g  reason: collision with root package name */
    public static final c f22701g;

    /* renamed from: h  reason: collision with root package name */
    public static final c f22702h;

    /* renamed from: i  reason: collision with root package name */
    public static final c f22703i;

    /* renamed from: j  reason: collision with root package name */
    public static final c f22704j;

    /* renamed from: k  reason: collision with root package name */
    public static final c f22705k;

    /* renamed from: l  reason: collision with root package name */
    public static final c f22706l;

    /* renamed from: m  reason: collision with root package name */
    public static final c f22707m;

    /* renamed from: n  reason: collision with root package name */
    public static final c f22708n;

    /* renamed from: o  reason: collision with root package name */
    public static final c f22709o;

    /* renamed from: p  reason: collision with root package name */
    public static final List f22710p;

    static {
        c cVar = new c("JPEG", "jpeg");
        f22696b = cVar;
        c cVar2 = new c("PNG", "png");
        f22697c = cVar2;
        c cVar3 = new c("GIF", "gif");
        f22698d = cVar3;
        c cVar4 = new c("BMP", "bmp");
        f22699e = cVar4;
        c cVar5 = new c("ICO", "ico");
        f22700f = cVar5;
        c cVar6 = new c("WEBP_SIMPLE", "webp");
        f22701g = cVar6;
        c cVar7 = new c("WEBP_LOSSLESS", "webp");
        f22702h = cVar7;
        c cVar8 = new c("WEBP_EXTENDED", "webp");
        f22703i = cVar8;
        c cVar9 = new c("WEBP_EXTENDED_WITH_ALPHA", "webp");
        f22704j = cVar9;
        c cVar10 = new c("WEBP_ANIMATED", "webp");
        f22705k = cVar10;
        c cVar11 = new c("HEIF", "heif");
        f22706l = cVar11;
        f22707m = new c("DNG", "dng");
        c cVar12 = new c("BINARY_XML", "xml");
        f22708n = cVar12;
        c cVar13 = new c("AVIF", "avif");
        f22709o = cVar13;
        f22710p = CollectionsKt.o(cVar, cVar2, cVar3, cVar4, cVar5, cVar6, cVar7, cVar8, cVar9, cVar10, cVar11, cVar12, cVar13);
    }

    private b() {
    }

    public static final boolean a(c imageFormat) {
        Intrinsics.checkNotNullParameter(imageFormat, "imageFormat");
        if (imageFormat != f22701g && imageFormat != f22702h && imageFormat != f22703i && imageFormat != f22704j) {
            return false;
        }
        return true;
    }

    public static final boolean b(c imageFormat) {
        Intrinsics.checkNotNullParameter(imageFormat, "imageFormat");
        if (!a(imageFormat) && imageFormat != f22705k) {
            return false;
        }
        return true;
    }
}
