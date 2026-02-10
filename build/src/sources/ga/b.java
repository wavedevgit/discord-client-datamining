package ga;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f24081a = new b();

    /* renamed from: b  reason: collision with root package name */
    public static final c f24082b;

    /* renamed from: c  reason: collision with root package name */
    public static final c f24083c;

    /* renamed from: d  reason: collision with root package name */
    public static final c f24084d;

    /* renamed from: e  reason: collision with root package name */
    public static final c f24085e;

    /* renamed from: f  reason: collision with root package name */
    public static final c f24086f;

    /* renamed from: g  reason: collision with root package name */
    public static final c f24087g;

    /* renamed from: h  reason: collision with root package name */
    public static final c f24088h;

    /* renamed from: i  reason: collision with root package name */
    public static final c f24089i;

    /* renamed from: j  reason: collision with root package name */
    public static final c f24090j;

    /* renamed from: k  reason: collision with root package name */
    public static final c f24091k;

    /* renamed from: l  reason: collision with root package name */
    public static final c f24092l;

    /* renamed from: m  reason: collision with root package name */
    public static final c f24093m;

    /* renamed from: n  reason: collision with root package name */
    public static final c f24094n;

    /* renamed from: o  reason: collision with root package name */
    public static final c f24095o;

    /* renamed from: p  reason: collision with root package name */
    public static final List f24096p;

    static {
        c cVar = new c("JPEG", "jpeg");
        f24082b = cVar;
        c cVar2 = new c("PNG", "png");
        f24083c = cVar2;
        c cVar3 = new c("GIF", "gif");
        f24084d = cVar3;
        c cVar4 = new c("BMP", "bmp");
        f24085e = cVar4;
        c cVar5 = new c("ICO", "ico");
        f24086f = cVar5;
        c cVar6 = new c("WEBP_SIMPLE", "webp");
        f24087g = cVar6;
        c cVar7 = new c("WEBP_LOSSLESS", "webp");
        f24088h = cVar7;
        c cVar8 = new c("WEBP_EXTENDED", "webp");
        f24089i = cVar8;
        c cVar9 = new c("WEBP_EXTENDED_WITH_ALPHA", "webp");
        f24090j = cVar9;
        c cVar10 = new c("WEBP_ANIMATED", "webp");
        f24091k = cVar10;
        c cVar11 = new c("HEIF", "heif");
        f24092l = cVar11;
        f24093m = new c("DNG", "dng");
        c cVar12 = new c("BINARY_XML", "xml");
        f24094n = cVar12;
        c cVar13 = new c("AVIF", "avif");
        f24095o = cVar13;
        f24096p = CollectionsKt.o(cVar, cVar2, cVar3, cVar4, cVar5, cVar6, cVar7, cVar8, cVar9, cVar10, cVar11, cVar12, cVar13);
    }

    private b() {
    }

    public static final boolean a(c imageFormat) {
        Intrinsics.checkNotNullParameter(imageFormat, "imageFormat");
        if (imageFormat != f24087g && imageFormat != f24088h && imageFormat != f24089i && imageFormat != f24090j) {
            return false;
        }
        return true;
    }

    public static final boolean b(c imageFormat) {
        Intrinsics.checkNotNullParameter(imageFormat, "imageFormat");
        if (!a(imageFormat) && imageFormat != f24091k) {
            return false;
        }
        return true;
    }
}
