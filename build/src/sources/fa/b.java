package fa;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f24867a = new b();

    /* renamed from: b  reason: collision with root package name */
    public static final c f24868b;

    /* renamed from: c  reason: collision with root package name */
    public static final c f24869c;

    /* renamed from: d  reason: collision with root package name */
    public static final c f24870d;

    /* renamed from: e  reason: collision with root package name */
    public static final c f24871e;

    /* renamed from: f  reason: collision with root package name */
    public static final c f24872f;

    /* renamed from: g  reason: collision with root package name */
    public static final c f24873g;

    /* renamed from: h  reason: collision with root package name */
    public static final c f24874h;

    /* renamed from: i  reason: collision with root package name */
    public static final c f24875i;

    /* renamed from: j  reason: collision with root package name */
    public static final c f24876j;

    /* renamed from: k  reason: collision with root package name */
    public static final c f24877k;

    /* renamed from: l  reason: collision with root package name */
    public static final c f24878l;

    /* renamed from: m  reason: collision with root package name */
    public static final c f24879m;

    /* renamed from: n  reason: collision with root package name */
    public static final c f24880n;

    /* renamed from: o  reason: collision with root package name */
    public static final c f24881o;

    /* renamed from: p  reason: collision with root package name */
    public static final List f24882p;

    static {
        c cVar = new c("JPEG", "jpeg");
        f24868b = cVar;
        c cVar2 = new c("PNG", "png");
        f24869c = cVar2;
        c cVar3 = new c("GIF", "gif");
        f24870d = cVar3;
        c cVar4 = new c("BMP", "bmp");
        f24871e = cVar4;
        c cVar5 = new c("ICO", "ico");
        f24872f = cVar5;
        c cVar6 = new c("WEBP_SIMPLE", "webp");
        f24873g = cVar6;
        c cVar7 = new c("WEBP_LOSSLESS", "webp");
        f24874h = cVar7;
        c cVar8 = new c("WEBP_EXTENDED", "webp");
        f24875i = cVar8;
        c cVar9 = new c("WEBP_EXTENDED_WITH_ALPHA", "webp");
        f24876j = cVar9;
        c cVar10 = new c("WEBP_ANIMATED", "webp");
        f24877k = cVar10;
        c cVar11 = new c("HEIF", "heif");
        f24878l = cVar11;
        f24879m = new c("DNG", "dng");
        c cVar12 = new c("BINARY_XML", "xml");
        f24880n = cVar12;
        c cVar13 = new c("AVIF", "avif");
        f24881o = cVar13;
        f24882p = CollectionsKt.o(cVar, cVar2, cVar3, cVar4, cVar5, cVar6, cVar7, cVar8, cVar9, cVar10, cVar11, cVar12, cVar13);
    }

    private b() {
    }

    public static final boolean a(c imageFormat) {
        Intrinsics.checkNotNullParameter(imageFormat, "imageFormat");
        if (imageFormat != f24873g && imageFormat != f24874h && imageFormat != f24875i && imageFormat != f24876j) {
            return false;
        }
        return true;
    }

    public static final boolean b(c imageFormat) {
        Intrinsics.checkNotNullParameter(imageFormat, "imageFormat");
        if (!a(imageFormat) && imageFormat != f24877k) {
            return false;
        }
        return true;
    }
}
