package fq;

import android.content.Context;
import android.graphics.Typeface;
import android.os.Build;
import android.widget.TextView;
import aq.p5;
import com.facebook.react.views.image.ReactImageView;
import com.facebook.react.views.text.ReactFontManager;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextViewStyle;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.x0;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a */
        public static final /* synthetic */ int[] f24380a;

        /* renamed from: b */
        public static final /* synthetic */ int[] f24381b;

        static {
            int[] iArr = new int[StyleElements.FontWeight.values().length];
            try {
                iArr[StyleElements.FontWeight.LIGHT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[StyleElements.FontWeight.NORMAL.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[StyleElements.FontWeight.MEDIUM.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[StyleElements.FontWeight.BOLD.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[StyleElements.FontWeight.HEAVY.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            f24380a = iArr;
            int[] iArr2 = new int[StyleElements.PositionType.values().length];
            try {
                iArr2[StyleElements.PositionType.START.ordinal()] = 1;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr2[StyleElements.PositionType.CENTER.ordinal()] = 2;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr2[StyleElements.PositionType.END.ordinal()] = 3;
            } catch (NoSuchFieldError unused8) {
            }
            f24381b = iArr2;
        }
    }

    private static final int d(StyleElements.FontWeight fontWeight) {
        int i10 = a.f24380a[fontWeight.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        if (i10 == 5) {
                            return 800;
                        }
                        throw new lr.p();
                    }
                    return ReactFontManager.TypefaceStyle.BOLD;
                }
                return 500;
            }
            return ReactFontManager.TypefaceStyle.NORMAL;
        }
        return ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS;
    }

    public static final void e(TextView textView, StyleElements.FontWeight fontWeight) {
        Intrinsics.checkNotNullParameter(textView, "<this>");
        Intrinsics.checkNotNullParameter(fontWeight, "fontWeight");
        Typeface create = Typeface.create(textView.getTypeface(), d(fontWeight), false);
        Intrinsics.checkNotNullExpressionValue(create, "create(...)");
        textView.setTypeface(create);
    }

    public static final void f(TextView textView, StyleElements.PositionType justification) {
        Intrinsics.checkNotNullParameter(textView, "<this>");
        Intrinsics.checkNotNullParameter(justification, "justification");
        int gravity = textView.getGravity() & 112;
        int i10 = a.f24381b[justification.ordinal()];
        int i11 = 1;
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    i11 = 8388613;
                } else {
                    throw new lr.p();
                }
            }
        } else {
            i11 = 8388611;
        }
        textView.setGravity(i11);
        textView.setGravity((textView.getGravity() & (-113)) | gravity);
    }

    private static final void g(final TextView textView, String str, StyleElements.FontWeight fontWeight, final Function1 function1) {
        String str2;
        Context context = textView.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Typeface a10 = p5.a(context, str);
        if (a10 != null) {
            textView.setTypeface(a10);
        }
        if (Build.VERSION.SDK_INT >= 29) {
            e(textView, fontWeight);
        }
        gq.a a11 = gq.a.f26485a.a();
        Map d10 = a11.d();
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        for (Map.Entry entry : d10.entrySet()) {
            if (Intrinsics.areEqual(entry.getKey(), str)) {
                linkedHashMap.put(entry.getKey(), entry.getValue());
            }
        }
        Map map = (Map) CollectionsKt.p0(linkedHashMap.values());
        if (map == null || (str2 = (String) map.get(fontWeight)) == null) {
            if (map != null) {
                str2 = (String) map.get(StyleElements.FontWeight.NORMAL);
            } else {
                str2 = null;
            }
        }
        if (str2 != null) {
            a11.a(str2, new Function1() { // from class: fq.e0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit h10;
                    h10 = f0.h(textView, function1, (Typeface) obj);
                    return h10;
                }
            });
        }
    }

    public static final Unit h(TextView textView, Function1 function1, Typeface it) {
        Intrinsics.checkNotNullParameter(it, "it");
        textView.setTypeface(it);
        function1.invoke(it);
        return Unit.f32464a;
    }

    public static final void i(final TextView textView, String str, final StyleElements.FontWeight fontWeight, Function1 onRemoteFontDownloaded) {
        Intrinsics.checkNotNullParameter(textView, "<this>");
        Intrinsics.checkNotNullParameter(onRemoteFontDownloaded, "onRemoteFontDownloaded");
        if (str != null) {
            if (fontWeight == null) {
                fontWeight = StyleElements.FontWeight.NORMAL;
            }
            g(textView, str, fontWeight, onRemoteFontDownloaded);
            return;
        }
        new Function0() { // from class: fq.d0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit k10;
                k10 = f0.k(StyleElements.FontWeight.this, textView);
                return k10;
            }
        };
    }

    public static /* synthetic */ void j(TextView textView, String str, StyleElements.FontWeight fontWeight, Function1 function1, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            function1 = new Function1() { // from class: fq.c0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit l10;
                    l10 = f0.l((Typeface) obj2);
                    return l10;
                }
            };
        }
        i(textView, str, fontWeight, function1);
    }

    public static final Unit k(StyleElements.FontWeight fontWeight, TextView textView) {
        if (fontWeight != null) {
            if (Build.VERSION.SDK_INT >= 29) {
                e(textView, fontWeight);
            }
            return Unit.f32464a;
        }
        return null;
    }

    public static final Unit l(Typeface it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32464a;
    }

    public static final void m(TextView textView, TextViewStyle styles, Set excludedStyleElements) {
        Intrinsics.checkNotNullParameter(textView, "<this>");
        Intrinsics.checkNotNullParameter(styles, "styles");
        Intrinsics.checkNotNullParameter(excludedStyleElements, "excludedStyleElements");
        StyleElements.SizeSet marginValue = styles.getMarginValue();
        if (marginValue != null) {
            iq.d.c(textView, marginValue);
        }
        Integer textColorValue = styles.getTextColorValue();
        if (textColorValue != null) {
            textView.setTextColor(textColorValue.intValue());
        }
        Integer textColorHighlightValue = styles.getTextColorHighlightValue();
        if (textColorHighlightValue != null) {
            textView.setLinkTextColor(textColorHighlightValue.intValue());
        }
        Double fontSizeValue = styles.getFontSizeValue();
        if (fontSizeValue != null) {
            double doubleValue = fontSizeValue.doubleValue();
            textView.setTextSize((float) doubleValue);
            int i10 = 1;
            if (androidx.core.widget.j.c(textView) == 1) {
                int a10 = androidx.core.widget.j.a(textView);
                int b10 = androidx.core.widget.j.b(textView);
                int d10 = (int) mp.h.d(doubleValue);
                if (a10 <= 0) {
                    a10 = (int) mp.h.d(12.0d);
                }
                if (b10 > 0) {
                    i10 = b10;
                }
                if (a10 > d10) {
                    a10 = d10;
                }
                androidx.core.widget.j.j(textView, a10, d10, i10, 0);
            }
            Double lineHeightValue = styles.getLineHeightValue();
            if (lineHeightValue != null) {
                if (excludedStyleElements.contains(b0.f24363d)) {
                    lineHeightValue = null;
                }
                if (lineHeightValue != null) {
                    double doubleValue2 = lineHeightValue.doubleValue();
                    if (Build.VERSION.SDK_INT >= 28) {
                        textView.setLineSpacing((float) (mp.h.a(doubleValue2) - mp.h.a(doubleValue)), 1.0f);
                    }
                }
            }
        }
        Double letterSpacingValue = styles.getLetterSpacingValue();
        if (letterSpacingValue != null) {
            textView.setLetterSpacing((float) (letterSpacingValue.doubleValue() / textView.getTextSize()));
        }
        String fontNameValue = styles.getFontNameValue();
        StyleElements.FontWeight fontWeightValue = styles.getFontWeightValue();
        if (fontWeightValue == null) {
            fontWeightValue = StyleElements.FontWeight.NORMAL;
        }
        j(textView, fontNameValue, fontWeightValue, null, 4, null);
        StyleElements.PositionType justificationValue = styles.getJustificationValue();
        if (justificationValue != null) {
            f(textView, justificationValue);
        }
    }

    public static /* synthetic */ void n(TextView textView, TextViewStyle textViewStyle, Set set, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            set = x0.d();
        }
        m(textView, textViewStyle, set);
    }
}
