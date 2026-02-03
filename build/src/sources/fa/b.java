package fa;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f24078a = new b();

    /* renamed from: b  reason: collision with root package name */
    public static final c f24079b;

    /* renamed from: c  reason: collision with root package name */
    public static final c f24080c;

    /* renamed from: d  reason: collision with root package name */
    public static final c f24081d;

    /* renamed from: e  reason: collision with root package name */
    public static final c f24082e;

    /* renamed from: f  reason: collision with root package name */
    public static final c f24083f;

    /* renamed from: g  reason: collision with root package name */
    public static final c f24084g;

    /* renamed from: h  reason: collision with root package name */
    public static final c f24085h;

    /* renamed from: i  reason: collision with root package name */
    public static final c f24086i;

    /* renamed from: j  reason: collision with root package name */
    public static final c f24087j;

    /* renamed from: k  reason: collision with root package name */
    public static final c f24088k;

    /* renamed from: l  reason: collision with root package name */
    public static final c f24089l;

    /* renamed from: m  reason: collision with root package name */
    public static final c f24090m;

    /* renamed from: n  reason: collision with root package name */
    public static final c f24091n;

    /* renamed from: o  reason: collision with root package name */
    public static final c f24092o;

    /* renamed from: p  reason: collision with root package name */
    public static final List f24093p;

    static {
        c cVar = new c("JPEG", "jpeg");
        f24079b = cVar;
        c cVar2 = new c("PNG", "png");
        f24080c = cVar2;
        c cVar3 = new c("GIF", "gif");
        f24081d = cVar3;
        c cVar4 = new c("BMP", "bmp");
        f24082e = cVar4;
        c cVar5 = new c("ICO", "ico");
        f24083f = cVar5;
        c cVar6 = new c("WEBP_SIMPLE", "webp");
        f24084g = cVar6;
        c cVar7 = new c("WEBP_LOSSLESS", "webp");
        f24085h = cVar7;
        c cVar8 = new c("WEBP_EXTENDED", "webp");
        f24086i = cVar8;
        c cVar9 = new c("WEBP_EXTENDED_WITH_ALPHA", "webp");
        f24087j = cVar9;
        c cVar10 = new c("WEBP_ANIMATED", "webp");
        f24088k = cVar10;
        c cVar11 = new c("HEIF", "heif");
        f24089l = cVar11;
        f24090m = new c("DNG", "dng");
        c cVar12 = new c("BINARY_XML", "xml");
        f24091n = cVar12;
        c cVar13 = new c("AVIF", "avif");
        f24092o = cVar13;
        f24093p = CollectionsKt.o(cVar, cVar2, cVar3, cVar4, cVar5, cVar6, cVar7, cVar8, cVar9, cVar10, cVar11, cVar12, cVar13);
    }

    private b() {
    }

    public static final boolean a(c imageFormat) {
        Intrinsics.checkNotNullParameter(imageFormat, "imageFormat");
        if (imageFormat != f24084g && imageFormat != f24085h && imageFormat != f24086i && imageFormat != f24087j) {
            return false;
        }
        return true;
    }

    public static final boolean b(c imageFormat) {
        Intrinsics.checkNotNullParameter(imageFormat, "imageFormat");
        if (!a(imageFormat) && imageFormat != f24088k) {
            return false;
        }
        return true;
    }
}
