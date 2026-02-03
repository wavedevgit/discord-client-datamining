package fa;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f23670a = new b();

    /* renamed from: b  reason: collision with root package name */
    public static final c f23671b;

    /* renamed from: c  reason: collision with root package name */
    public static final c f23672c;

    /* renamed from: d  reason: collision with root package name */
    public static final c f23673d;

    /* renamed from: e  reason: collision with root package name */
    public static final c f23674e;

    /* renamed from: f  reason: collision with root package name */
    public static final c f23675f;

    /* renamed from: g  reason: collision with root package name */
    public static final c f23676g;

    /* renamed from: h  reason: collision with root package name */
    public static final c f23677h;

    /* renamed from: i  reason: collision with root package name */
    public static final c f23678i;

    /* renamed from: j  reason: collision with root package name */
    public static final c f23679j;

    /* renamed from: k  reason: collision with root package name */
    public static final c f23680k;

    /* renamed from: l  reason: collision with root package name */
    public static final c f23681l;

    /* renamed from: m  reason: collision with root package name */
    public static final c f23682m;

    /* renamed from: n  reason: collision with root package name */
    public static final c f23683n;

    /* renamed from: o  reason: collision with root package name */
    public static final c f23684o;

    /* renamed from: p  reason: collision with root package name */
    public static final List f23685p;

    static {
        c cVar = new c("JPEG", "jpeg");
        f23671b = cVar;
        c cVar2 = new c("PNG", "png");
        f23672c = cVar2;
        c cVar3 = new c("GIF", "gif");
        f23673d = cVar3;
        c cVar4 = new c("BMP", "bmp");
        f23674e = cVar4;
        c cVar5 = new c("ICO", "ico");
        f23675f = cVar5;
        c cVar6 = new c("WEBP_SIMPLE", "webp");
        f23676g = cVar6;
        c cVar7 = new c("WEBP_LOSSLESS", "webp");
        f23677h = cVar7;
        c cVar8 = new c("WEBP_EXTENDED", "webp");
        f23678i = cVar8;
        c cVar9 = new c("WEBP_EXTENDED_WITH_ALPHA", "webp");
        f23679j = cVar9;
        c cVar10 = new c("WEBP_ANIMATED", "webp");
        f23680k = cVar10;
        c cVar11 = new c("HEIF", "heif");
        f23681l = cVar11;
        f23682m = new c("DNG", "dng");
        c cVar12 = new c("BINARY_XML", "xml");
        f23683n = cVar12;
        c cVar13 = new c("AVIF", "avif");
        f23684o = cVar13;
        f23685p = CollectionsKt.o(cVar, cVar2, cVar3, cVar4, cVar5, cVar6, cVar7, cVar8, cVar9, cVar10, cVar11, cVar12, cVar13);
    }

    private b() {
    }

    public static final boolean a(c imageFormat) {
        Intrinsics.checkNotNullParameter(imageFormat, "imageFormat");
        if (imageFormat != f23676g && imageFormat != f23677h && imageFormat != f23678i && imageFormat != f23679j) {
            return false;
        }
        return true;
    }

    public static final boolean b(c imageFormat) {
        Intrinsics.checkNotNullParameter(imageFormat, "imageFormat");
        if (!a(imageFormat) && imageFormat != f23680k) {
            return false;
        }
        return true;
    }
}
