package ga;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f25382a = new b();

    /* renamed from: b  reason: collision with root package name */
    public static final c f25383b;

    /* renamed from: c  reason: collision with root package name */
    public static final c f25384c;

    /* renamed from: d  reason: collision with root package name */
    public static final c f25385d;

    /* renamed from: e  reason: collision with root package name */
    public static final c f25386e;

    /* renamed from: f  reason: collision with root package name */
    public static final c f25387f;

    /* renamed from: g  reason: collision with root package name */
    public static final c f25388g;

    /* renamed from: h  reason: collision with root package name */
    public static final c f25389h;

    /* renamed from: i  reason: collision with root package name */
    public static final c f25390i;

    /* renamed from: j  reason: collision with root package name */
    public static final c f25391j;

    /* renamed from: k  reason: collision with root package name */
    public static final c f25392k;

    /* renamed from: l  reason: collision with root package name */
    public static final c f25393l;

    /* renamed from: m  reason: collision with root package name */
    public static final c f25394m;

    /* renamed from: n  reason: collision with root package name */
    public static final c f25395n;

    /* renamed from: o  reason: collision with root package name */
    public static final c f25396o;

    /* renamed from: p  reason: collision with root package name */
    public static final List f25397p;

    static {
        c cVar = new c("JPEG", "jpeg");
        f25383b = cVar;
        c cVar2 = new c("PNG", "png");
        f25384c = cVar2;
        c cVar3 = new c("GIF", "gif");
        f25385d = cVar3;
        c cVar4 = new c("BMP", "bmp");
        f25386e = cVar4;
        c cVar5 = new c("ICO", "ico");
        f25387f = cVar5;
        c cVar6 = new c("WEBP_SIMPLE", "webp");
        f25388g = cVar6;
        c cVar7 = new c("WEBP_LOSSLESS", "webp");
        f25389h = cVar7;
        c cVar8 = new c("WEBP_EXTENDED", "webp");
        f25390i = cVar8;
        c cVar9 = new c("WEBP_EXTENDED_WITH_ALPHA", "webp");
        f25391j = cVar9;
        c cVar10 = new c("WEBP_ANIMATED", "webp");
        f25392k = cVar10;
        c cVar11 = new c("HEIF", "heif");
        f25393l = cVar11;
        f25394m = new c("DNG", "dng");
        c cVar12 = new c("BINARY_XML", "xml");
        f25395n = cVar12;
        c cVar13 = new c("AVIF", "avif");
        f25396o = cVar13;
        f25397p = CollectionsKt.o(cVar, cVar2, cVar3, cVar4, cVar5, cVar6, cVar7, cVar8, cVar9, cVar10, cVar11, cVar12, cVar13);
    }

    private b() {
    }

    public static final boolean a(c imageFormat) {
        Intrinsics.checkNotNullParameter(imageFormat, "imageFormat");
        if (imageFormat != f25388g && imageFormat != f25389h && imageFormat != f25390i && imageFormat != f25391j) {
            return false;
        }
        return true;
    }

    public static final boolean b(c imageFormat) {
        Intrinsics.checkNotNullParameter(imageFormat, "imageFormat");
        if (!a(imageFormat) && imageFormat != f25392k) {
            return false;
        }
        return true;
    }
}
