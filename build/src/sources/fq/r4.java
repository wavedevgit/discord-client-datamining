package fq;

import android.content.Context;
import android.graphics.Color;
import android.net.Uri;
import android.view.View;
import android.widget.ImageView;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import g5.h;
import java.nio.charset.Charset;
import java.util.Locale;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
import kotlin.text.Charsets;
import kotlin.text.StringsKt;
import okio.Buffer;
import v4.b;
import v4.h;
import x4.k;
import x4.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class r4 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f23613a;

        static {
            int[] iArr = new int[RemoteImage.ContentType.values().length];
            try {
                iArr[RemoteImage.ContentType.JSON.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[RemoteImage.ContentType.Image.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[RemoteImage.ContentType.SVG.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f23613a = iArr;
        }
    }

    private static final String i(String str, RemoteImage.RemoteImageComponentStyle remoteImageComponentStyle) {
        String str2;
        Integer originalStrokeColorValue;
        String g10;
        Integer originalBackgroundColorValue;
        String g11;
        Integer originalHighlightColorValue;
        String g12;
        Integer originalFillColorValue;
        String g13;
        Integer originalStrokeColorValue2;
        Integer originalBackgroundColorValue2;
        Integer originalHighlightColorValue2;
        Integer originalFillColorValue2;
        String str3;
        if (remoteImageComponentStyle != null && (originalFillColorValue2 = remoteImageComponentStyle.getOriginalFillColorValue()) != null) {
            int intValue = originalFillColorValue2.intValue();
            Integer newFillColorValue = remoteImageComponentStyle.getNewFillColorValue();
            if (newFillColorValue != null && rp.h.g(newFillColorValue.intValue()) != null) {
                str3 = StringsKt.J(str, rp.h.g(intValue), "{{ fill_color }}", false, 4, null);
            } else {
                str3 = str;
            }
            str2 = str3;
        } else {
            str2 = str;
        }
        if (remoteImageComponentStyle != null && (originalHighlightColorValue2 = remoteImageComponentStyle.getOriginalHighlightColorValue()) != null) {
            int intValue2 = originalHighlightColorValue2.intValue();
            Integer newHighlightColorValue = remoteImageComponentStyle.getNewHighlightColorValue();
            if (newHighlightColorValue != null && rp.h.g(newHighlightColorValue.intValue()) != null) {
                str2 = StringsKt.J(str2, rp.h.g(intValue2), "{{ highlight_color }}", false, 4, null);
            }
        }
        String str4 = str2;
        if (remoteImageComponentStyle != null && (originalBackgroundColorValue2 = remoteImageComponentStyle.getOriginalBackgroundColorValue()) != null) {
            int intValue3 = originalBackgroundColorValue2.intValue();
            Integer newBackgroundColorValue = remoteImageComponentStyle.getNewBackgroundColorValue();
            if (newBackgroundColorValue != null && rp.h.g(newBackgroundColorValue.intValue()) != null) {
                str4 = StringsKt.J(str4, rp.h.g(intValue3), "{{ background_color }}", false, 4, null);
            }
        }
        String str5 = str4;
        if (remoteImageComponentStyle != null && (originalStrokeColorValue2 = remoteImageComponentStyle.getOriginalStrokeColorValue()) != null) {
            int intValue4 = originalStrokeColorValue2.intValue();
            Integer newStrokeColorValue = remoteImageComponentStyle.getNewStrokeColorValue();
            if (newStrokeColorValue != null && rp.h.g(newStrokeColorValue.intValue()) != null) {
                str5 = StringsKt.J(str5, rp.h.g(intValue4), "{{ stroke_color }}", false, 4, null);
            }
        }
        if (remoteImageComponentStyle != null && (originalFillColorValue = remoteImageComponentStyle.getOriginalFillColorValue()) != null) {
            int intValue5 = originalFillColorValue.intValue();
            Integer newFillColorValue2 = remoteImageComponentStyle.getNewFillColorValue();
            if (newFillColorValue2 != null && (g13 = rp.h.g(newFillColorValue2.intValue())) != null) {
                str5 = w(str5, "{{ fill_color }}", g13, rp.h.g(intValue5));
            }
        }
        if (remoteImageComponentStyle != null && (originalHighlightColorValue = remoteImageComponentStyle.getOriginalHighlightColorValue()) != null) {
            int intValue6 = originalHighlightColorValue.intValue();
            Integer newHighlightColorValue2 = remoteImageComponentStyle.getNewHighlightColorValue();
            if (newHighlightColorValue2 != null && (g12 = rp.h.g(newHighlightColorValue2.intValue())) != null) {
                str5 = w(str5, "{{ highlight_color }}", g12, rp.h.g(intValue6));
            }
        }
        if (remoteImageComponentStyle != null && (originalBackgroundColorValue = remoteImageComponentStyle.getOriginalBackgroundColorValue()) != null) {
            int intValue7 = originalBackgroundColorValue.intValue();
            Integer newBackgroundColorValue2 = remoteImageComponentStyle.getNewBackgroundColorValue();
            if (newBackgroundColorValue2 != null && (g11 = rp.h.g(newBackgroundColorValue2.intValue())) != null) {
                str5 = w(str5, "{{ background_color }}", g11, rp.h.g(intValue7));
            }
        }
        if (remoteImageComponentStyle != null && (originalStrokeColorValue = remoteImageComponentStyle.getOriginalStrokeColorValue()) != null) {
            int intValue8 = originalStrokeColorValue.intValue();
            Integer newStrokeColorValue2 = remoteImageComponentStyle.getNewStrokeColorValue();
            if (newStrokeColorValue2 != null && (g10 = rp.h.g(newStrokeColorValue2.intValue())) != null) {
                return w(str5, "{{ stroke_color }}", g10, rp.h.g(intValue8));
            }
        }
        return str5;
    }

    private static final void j(ImageView imageView, String str) {
        Context context = imageView.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        h.a aVar = new h.a(context);
        b.a aVar2 = new b.a();
        aVar2.d(new z.b(false, 1, null));
        aVar.h(aVar2.e()).j(true).i(500).d().a(new h.a(imageView.getContext()).d(str).r(imageView).a());
    }

    private static final void k(final ImageView imageView, String str, final RemoteImage.RemoteImageComponentStyle remoteImageComponentStyle) {
        Context context = imageView.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        v4.h d10 = new h.a(context).j(true).i(500).d();
        h.a r10 = new h.a(imageView.getContext()).d(str).r(imageView);
        r10.e(new k.a() { // from class: fq.p4
            @Override // x4.k.a
            public final x4.k a(a5.l lVar, g5.m mVar, v4.h hVar) {
                x4.k l10;
                l10 = r4.l(RemoteImage.RemoteImageComponentStyle.this, imageView, lVar, mVar, hVar);
                return l10;
            }
        });
        d10.a(r10.a());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final x4.k l(RemoteImage.RemoteImageComponentStyle remoteImageComponentStyle, ImageView imageView, a5.l result, g5.m options, v4.h hVar) {
        Intrinsics.checkNotNullParameter(result, "result");
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(hVar, "<unused var>");
        byte[] m12 = result.c().g().m1();
        Charset charset = Charsets.UTF_8;
        byte[] bytes = i(new String(m12, charset), remoteImageComponentStyle).getBytes(charset);
        Intrinsics.checkNotNullExpressionValue(bytes, "getBytes(...)");
        Buffer write = new Buffer().write(bytes);
        Context context = imageView.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        return new x4.z(x4.u.e(write, context), options, false, 4, null);
    }

    public static final View m(i4 i4Var, m5 uiComponentHelper, RemoteImage config) {
        Intrinsics.checkNotNullParameter(i4Var, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        View n10 = n(i4Var, uiComponentHelper, config);
        if (n10 == null) {
            return s(i4Var, uiComponentHelper, config);
        }
        return n10;
    }

    /* JADX WARN: Multi-variable type inference failed */
    private static final View n(i4 i4Var, m5 m5Var, final RemoteImage remoteImage) {
        String str;
        RemoteImage.ContentType contentType;
        Integer g10;
        tp.e eVar;
        RemoteImage.Attributes attributes = remoteImage.getAttributes();
        if (attributes != null) {
            str = attributes.getLocalAssetName();
        } else {
            str = null;
        }
        if (attributes != null) {
            contentType = attributes.getLocalAssetContentType();
        } else {
            contentType = null;
        }
        final Context a10 = m5Var.a();
        if (str != null && contentType != null) {
            final Ref.BooleanRef booleanRef = new Ref.BooleanRef();
            int[] iArr = a.f23613a;
            int i10 = iArr[contentType.ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        g10 = rp.s.g(a10, str, rp.t.f49186i);
                        if (g10 != null) {
                            booleanRef.element = true;
                        } else {
                            g10 = rp.s.g(a10, str, rp.t.f49185e);
                        }
                    } else {
                        throw new qr.p();
                    }
                } else {
                    g10 = rp.s.g(a10, str, rp.t.f49185e);
                }
            } else {
                g10 = rp.s.g(a10, str, rp.t.f49186i);
            }
            if (g10 != null) {
                final int intValue = g10.intValue();
                int i11 = iArr[contentType.ordinal()];
                if (i11 != 1) {
                    if (i11 != 2) {
                        if (i11 == 3) {
                            final tp.f c10 = tp.f.c(m5Var.b());
                            m5Var.d(new Function0() { // from class: fq.o4
                                @Override // kotlin.jvm.functions.Function0
                                public final Object invoke() {
                                    Unit q10;
                                    q10 = r4.q(tp.f.this, remoteImage, booleanRef, a10, intValue);
                                    return q10;
                                }
                            });
                            eVar = c10;
                        } else {
                            throw new qr.p();
                        }
                    } else {
                        final tp.f c11 = tp.f.c(m5Var.b());
                        m5Var.d(new Function0() { // from class: fq.n4
                            @Override // kotlin.jvm.functions.Function0
                            public final Object invoke() {
                                Unit p10;
                                p10 = r4.p(tp.f.this, remoteImage, intValue);
                                return p10;
                            }
                        });
                        eVar = c11;
                    }
                } else {
                    final tp.e c12 = tp.e.c(m5Var.b());
                    m5Var.d(new Function0() { // from class: fq.m4
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit o10;
                            o10 = r4.o(tp.e.this, remoteImage);
                            return o10;
                        }
                    });
                    c12.f50852b.setAnimation(intValue);
                    eVar = c12;
                }
                return eVar.getRoot();
            }
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o(tp.e eVar, RemoteImage remoteImage) {
        ThemeableLottieAnimationView lottieView = eVar.f50852b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        kq.g.f(lottieView, remoteImage);
        eVar.f50852b.setRepeatMode(1);
        eVar.f50852b.setRepeatCount(-1);
        eVar.f50852b.playAnimation();
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p(tp.f fVar, RemoteImage remoteImage, int i10) {
        ImageView imageView = fVar.f50854b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        kq.g.f(imageView, remoteImage);
        fVar.f50854b.setImageResource(i10);
        fVar.f50854b.setScaleType(ImageView.ScaleType.FIT_XY);
        fVar.f50854b.setAdjustViewBounds(true);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q(final tp.f fVar, final RemoteImage remoteImage, Ref.BooleanRef booleanRef, Context context, int i10) {
        ImageView imageView = fVar.f50854b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        kq.g.f(imageView, remoteImage);
        if (booleanRef.element) {
            Context context2 = fVar.f50854b.getContext();
            Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
            v4.h d10 = new h.a(context2).d();
            String resourcePackageName = context.getResources().getResourcePackageName(i10);
            String lowerCase = rp.t.f49186i.toString().toLowerCase(Locale.ROOT);
            Intrinsics.checkNotNullExpressionValue(lowerCase, "toLowerCase(...)");
            String resourceEntryName = context.getResources().getResourceEntryName(i10);
            Uri parse = Uri.parse("android.resource://" + resourcePackageName + "/" + lowerCase + "/" + resourceEntryName);
            ImageView imageView2 = fVar.f50854b;
            Intrinsics.checkNotNullExpressionValue(imageView2, "imageView");
            h.a r10 = new h.a(imageView2.getContext()).d(parse).r(imageView2);
            r10.e(new k.a() { // from class: fq.q4
                @Override // x4.k.a
                public final x4.k a(a5.l lVar, g5.m mVar, v4.h hVar) {
                    x4.k r11;
                    r11 = r4.r(RemoteImage.this, fVar, lVar, mVar, hVar);
                    return r11;
                }
            });
            d10.a(r10.a());
        } else {
            fVar.f50854b.setImageResource(i10);
        }
        fVar.f50854b.setScaleType(ImageView.ScaleType.FIT_XY);
        fVar.f50854b.setAdjustViewBounds(true);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final x4.k r(RemoteImage remoteImage, tp.f fVar, a5.l result, g5.m options, v4.h hVar) {
        Intrinsics.checkNotNullParameter(result, "result");
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(hVar, "<unused var>");
        byte[] m12 = result.c().g().m1();
        Charset charset = Charsets.UTF_8;
        byte[] bytes = i(new String(m12, charset), remoteImage.getStyles()).getBytes(charset);
        Intrinsics.checkNotNullExpressionValue(bytes, "getBytes(...)");
        Buffer write = new Buffer().write(bytes);
        Context context = fVar.f50854b.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        return new x4.z(x4.u.e(write, context), options, false, 4, null);
    }

    /* JADX WARN: Multi-variable type inference failed */
    private static final View s(i4 i4Var, m5 m5Var, final RemoteImage remoteImage) {
        RemoteImage.ContentType contentType;
        int i10;
        tp.e eVar;
        final RemoteImage.Attributes attributes = remoteImage.getAttributes();
        if (attributes != null) {
            contentType = attributes.getContentType();
        } else {
            contentType = null;
        }
        if (contentType == null) {
            i10 = -1;
        } else {
            i10 = a.f23613a[contentType.ordinal()];
        }
        if (i10 != 1) {
            if (i10 != 3) {
                final tp.f c10 = tp.f.c(m5Var.b());
                m5Var.d(new Function0() { // from class: fq.l4
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit v10;
                        v10 = r4.v(tp.f.this, remoteImage, attributes);
                        return v10;
                    }
                });
                eVar = c10;
            } else {
                final tp.f c11 = tp.f.c(m5Var.b());
                m5Var.d(new Function0() { // from class: fq.j4
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit t10;
                        t10 = r4.t(tp.f.this, remoteImage, attributes);
                        return t10;
                    }
                });
                eVar = c11;
            }
        } else {
            final tp.e c12 = tp.e.c(m5Var.b());
            m5Var.d(new Function0() { // from class: fq.k4
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit u10;
                    u10 = r4.u(tp.e.this, remoteImage);
                    return u10;
                }
            });
            c12.f50852b.J(attributes.getUrl());
            eVar = c12;
        }
        View root = eVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        return root;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t(tp.f fVar, RemoteImage remoteImage, RemoteImage.Attributes attributes) {
        ImageView imageView = fVar.f50854b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        kq.g.f(imageView, remoteImage);
        String url = attributes.getUrl();
        ImageView imageView2 = fVar.f50854b;
        Intrinsics.checkNotNullExpressionValue(imageView2, "imageView");
        k(imageView2, url, remoteImage.getStyles());
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u(tp.e eVar, RemoteImage remoteImage) {
        ThemeableLottieAnimationView lottieView = eVar.f50852b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        kq.g.f(lottieView, remoteImage);
        eVar.f50852b.setRepeatMode(1);
        eVar.f50852b.setRepeatCount(-1);
        eVar.f50852b.playAnimation();
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v(tp.f fVar, RemoteImage remoteImage, RemoteImage.Attributes attributes) {
        String str;
        ImageView imageView = fVar.f50854b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        kq.g.f(imageView, remoteImage);
        if (attributes != null) {
            str = attributes.getUrl();
        } else {
            str = null;
        }
        ImageView imageView2 = fVar.f50854b;
        Intrinsics.checkNotNullExpressionValue(imageView2, "imageView");
        j(imageView2, str);
        return Unit.f32056a;
    }

    private static final String w(String str, String str2, String str3, String str4) {
        String str5;
        String str6;
        try {
            Color.parseColor(str3);
            str5 = str;
            str6 = str2;
        } catch (IllegalArgumentException unused) {
            str5 = str;
            str6 = str2;
        }
        try {
            return StringsKt.J(str5, str6, str3, false, 4, null);
        } catch (IllegalArgumentException unused2) {
            return StringsKt.J(str5, str6, str4, false, 4, null);
        }
    }
}
