package ga;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f25381a = new b();

    /* renamed from: b  reason: collision with root package name */
    public static final c f25382b;

    /* renamed from: c  reason: collision with root package name */
    public static final c f25383c;

    /* renamed from: d  reason: collision with root package name */
    public static final c f25384d;

    /* renamed from: e  reason: collision with root package name */
    public static final c f25385e;

    /* renamed from: f  reason: collision with root package name */
    public static final c f25386f;

    /* renamed from: g  reason: collision with root package name */
    public static final c f25387g;

    /* renamed from: h  reason: collision with root package name */
    public static final c f25388h;

    /* renamed from: i  reason: collision with root package name */
    public static final c f25389i;

    /* renamed from: j  reason: collision with root package name */
    public static final c f25390j;

    /* renamed from: k  reason: collision with root package name */
    public static final c f25391k;

    /* renamed from: l  reason: collision with root package name */
    public static final c f25392l;

    /* renamed from: m  reason: collision with root package name */
    public static final c f25393m;

    /* renamed from: n  reason: collision with root package name */
    public static final c f25394n;

    /* renamed from: o  reason: collision with root package name */
    public static final c f25395o;

    /* renamed from: p  reason: collision with root package name */
    public static final List f25396p;

    static {
        c cVar = new c("JPEG", "jpeg");
        f25382b = cVar;
        c cVar2 = new c("PNG", "png");
        f25383c = cVar2;
        c cVar3 = new c("GIF", "gif");
        f25384d = cVar3;
        c cVar4 = new c("BMP", "bmp");
        f25385e = cVar4;
        c cVar5 = new c("ICO", "ico");
        f25386f = cVar5;
        c cVar6 = new c("WEBP_SIMPLE", "webp");
        f25387g = cVar6;
        c cVar7 = new c("WEBP_LOSSLESS", "webp");
        f25388h = cVar7;
        c cVar8 = new c("WEBP_EXTENDED", "webp");
        f25389i = cVar8;
        c cVar9 = new c("WEBP_EXTENDED_WITH_ALPHA", "webp");
        f25390j = cVar9;
        c cVar10 = new c("WEBP_ANIMATED", "webp");
        f25391k = cVar10;
        c cVar11 = new c("HEIF", "heif");
        f25392l = cVar11;
        f25393m = new c("DNG", "dng");
        c cVar12 = new c("BINARY_XML", "xml");
        f25394n = cVar12;
        c cVar13 = new c("AVIF", "avif");
        f25395o = cVar13;
        f25396p = CollectionsKt.o(cVar, cVar2, cVar3, cVar4, cVar5, cVar6, cVar7, cVar8, cVar9, cVar10, cVar11, cVar12, cVar13);
    }

    private b() {
    }

    public static final boolean a(c imageFormat) {
        Intrinsics.checkNotNullParameter(imageFormat, "imageFormat");
        if (imageFormat != f25387g && imageFormat != f25388h && imageFormat != f25389i && imageFormat != f25390j) {
            return false;
        }
        return true;
    }

    public static final boolean b(c imageFormat) {
        Intrinsics.checkNotNullParameter(imageFormat, "imageFormat");
        if (!a(imageFormat) && imageFormat != f25391k) {
            return false;
        }
        return true;
    }
}
