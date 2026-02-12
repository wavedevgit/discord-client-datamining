package com.google.android.exoplayer2.ui;

import android.text.Html;
import android.text.Spanned;
import android.text.style.AbsoluteSizeSpan;
import android.text.style.BackgroundColorSpan;
import android.text.style.ForegroundColorSpan;
import android.text.style.RelativeSizeSpan;
import android.text.style.StrikethroughSpan;
import android.text.style.StyleSpan;
import android.text.style.TypefaceSpan;
import android.text.style.UnderlineSpan;
import android.util.SparseArray;
import com.facebook.react.uimanager.ViewProps;
import com.google.android.exoplayer2.ui.c;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;
import oe.w0;
import qi.t;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    private static final Pattern f13937a = Pattern.compile("(&#13;)?&#10;");

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        public final String f13938a;

        /* renamed from: b  reason: collision with root package name */
        public final Map f13939b;

        private b(String str, Map map) {
            this.f13938a = str;
            this.f13939b = map;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: com.google.android.exoplayer2.ui.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0170c {

        /* renamed from: e  reason: collision with root package name */
        private static final Comparator f13940e = new Comparator() { // from class: com.google.android.exoplayer2.ui.d
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                return c.C0170c.a((c.C0170c) obj, (c.C0170c) obj2);
            }
        };

        /* renamed from: f  reason: collision with root package name */
        private static final Comparator f13941f = new Comparator() { // from class: com.google.android.exoplayer2.ui.e
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                return c.C0170c.b((c.C0170c) obj, (c.C0170c) obj2);
            }
        };

        /* renamed from: a  reason: collision with root package name */
        public final int f13942a;

        /* renamed from: b  reason: collision with root package name */
        public final int f13943b;

        /* renamed from: c  reason: collision with root package name */
        public final String f13944c;

        /* renamed from: d  reason: collision with root package name */
        public final String f13945d;

        public static /* synthetic */ int a(C0170c c0170c, C0170c c0170c2) {
            int compare = Integer.compare(c0170c2.f13943b, c0170c.f13943b);
            if (compare != 0) {
                return compare;
            }
            int compareTo = c0170c.f13944c.compareTo(c0170c2.f13944c);
            if (compareTo != 0) {
                return compareTo;
            }
            return c0170c.f13945d.compareTo(c0170c2.f13945d);
        }

        public static /* synthetic */ int b(C0170c c0170c, C0170c c0170c2) {
            int compare = Integer.compare(c0170c2.f13942a, c0170c.f13942a);
            if (compare != 0) {
                return compare;
            }
            int compareTo = c0170c2.f13944c.compareTo(c0170c.f13944c);
            if (compareTo != 0) {
                return compareTo;
            }
            return c0170c2.f13945d.compareTo(c0170c.f13945d);
        }

        private C0170c(int i10, int i11, String str, String str2) {
            this.f13942a = i10;
            this.f13943b = i11;
            this.f13944c = str;
            this.f13945d = str2;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        private final List f13946a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        private final List f13947b = new ArrayList();
    }

    public static b a(CharSequence charSequence, float f10) {
        if (charSequence == null) {
            return new b("", t.j());
        }
        if (!(charSequence instanceof Spanned)) {
            return new b(b(charSequence), t.j());
        }
        Spanned spanned = (Spanned) charSequence;
        HashSet<Integer> hashSet = new HashSet();
        int i10 = 0;
        for (BackgroundColorSpan backgroundColorSpan : (BackgroundColorSpan[]) spanned.getSpans(0, spanned.length(), BackgroundColorSpan.class)) {
            hashSet.add(Integer.valueOf(backgroundColorSpan.getBackgroundColor()));
        }
        HashMap hashMap = new HashMap();
        for (Integer num : hashSet) {
            int intValue = num.intValue();
            hashMap.put(com.google.android.exoplayer2.ui.b.a("bg_" + intValue), w0.D("background-color:%s;", com.google.android.exoplayer2.ui.b.b(intValue)));
        }
        SparseArray c10 = c(spanned, f10);
        StringBuilder sb2 = new StringBuilder(spanned.length());
        int i11 = 0;
        while (i10 < c10.size()) {
            int keyAt = c10.keyAt(i10);
            sb2.append(b(spanned.subSequence(i11, keyAt)));
            d dVar = (d) c10.get(keyAt);
            Collections.sort(dVar.f13947b, C0170c.f13941f);
            for (C0170c c0170c : dVar.f13947b) {
                sb2.append(c0170c.f13945d);
            }
            Collections.sort(dVar.f13946a, C0170c.f13940e);
            for (C0170c c0170c2 : dVar.f13946a) {
                sb2.append(c0170c2.f13944c);
            }
            i10++;
            i11 = keyAt;
        }
        sb2.append(b(spanned.subSequence(i11, spanned.length())));
        return new b(sb2.toString(), hashMap);
    }

    private static String b(CharSequence charSequence) {
        return f13937a.matcher(Html.escapeHtml(charSequence)).replaceAll("<br>");
    }

    private static SparseArray c(Spanned spanned, float f10) {
        Object[] spans;
        SparseArray sparseArray = new SparseArray();
        for (Object obj : spanned.getSpans(0, spanned.length(), Object.class)) {
            String e10 = e(obj, f10);
            String d10 = d(obj);
            int spanStart = spanned.getSpanStart(obj);
            int spanEnd = spanned.getSpanEnd(obj);
            if (e10 != null) {
                oe.a.e(d10);
                C0170c c0170c = new C0170c(spanStart, spanEnd, e10, d10);
                f(sparseArray, spanStart).f13946a.add(c0170c);
                f(sparseArray, spanEnd).f13947b.add(c0170c);
            }
        }
        return sparseArray;
    }

    private static String d(Object obj) {
        if ((obj instanceof StrikethroughSpan) || (obj instanceof ForegroundColorSpan) || (obj instanceof BackgroundColorSpan) || (obj instanceof ee.a) || (obj instanceof AbsoluteSizeSpan) || (obj instanceof RelativeSizeSpan) || (obj instanceof ee.e)) {
            return "</span>";
        }
        if (obj instanceof TypefaceSpan) {
            if (((TypefaceSpan) obj).getFamily() != null) {
                return "</span>";
            }
            return null;
        }
        if (obj instanceof StyleSpan) {
            int style = ((StyleSpan) obj).getStyle();
            if (style != 1) {
                if (style != 2) {
                    if (style == 3) {
                        return "</i></b>";
                    }
                } else {
                    return "</i>";
                }
            } else {
                return "</b>";
            }
        } else if (obj instanceof ee.c) {
            return "<rt>" + b(((ee.c) obj).f22766a) + "</rt></ruby>";
        } else if (obj instanceof UnderlineSpan) {
            return "</u>";
        }
        return null;
    }

    private static String e(Object obj, float f10) {
        float size;
        if (obj instanceof StrikethroughSpan) {
            return "<span style='text-decoration:line-through;'>";
        }
        if (obj instanceof ForegroundColorSpan) {
            return w0.D("<span style='color:%s;'>", com.google.android.exoplayer2.ui.b.b(((ForegroundColorSpan) obj).getForegroundColor()));
        }
        if (obj instanceof BackgroundColorSpan) {
            return w0.D("<span class='bg_%s'>", Integer.valueOf(((BackgroundColorSpan) obj).getBackgroundColor()));
        }
        if (obj instanceof ee.a) {
            return "<span style='text-combine-upright:all;'>";
        }
        if (obj instanceof AbsoluteSizeSpan) {
            AbsoluteSizeSpan absoluteSizeSpan = (AbsoluteSizeSpan) obj;
            if (absoluteSizeSpan.getDip()) {
                size = absoluteSizeSpan.getSize();
            } else {
                size = absoluteSizeSpan.getSize() / f10;
            }
            return w0.D("<span style='font-size:%.2fpx;'>", Float.valueOf(size));
        } else if (obj instanceof RelativeSizeSpan) {
            return w0.D("<span style='font-size:%.2f%%;'>", Float.valueOf(((RelativeSizeSpan) obj).getSizeChange() * 100.0f));
        } else {
            if (obj instanceof TypefaceSpan) {
                String family = ((TypefaceSpan) obj).getFamily();
                if (family == null) {
                    return null;
                }
                return w0.D("<span style='font-family:\"%s\";'>", family);
            } else if (obj instanceof StyleSpan) {
                int style = ((StyleSpan) obj).getStyle();
                if (style != 1) {
                    if (style != 2) {
                        if (style != 3) {
                            return null;
                        }
                        return "<b><i>";
                    }
                    return "<i>";
                }
                return "<b>";
            } else if (obj instanceof ee.c) {
                int i10 = ((ee.c) obj).f22767b;
                if (i10 != -1) {
                    if (i10 != 1) {
                        if (i10 != 2) {
                            return null;
                        }
                        return "<ruby style='ruby-position:under;'>";
                    }
                    return "<ruby style='ruby-position:over;'>";
                }
                return "<ruby style='ruby-position:unset;'>";
            } else if (obj instanceof UnderlineSpan) {
                return "<u>";
            } else {
                if (!(obj instanceof ee.e)) {
                    return null;
                }
                ee.e eVar = (ee.e) obj;
                return w0.D("<span style='-webkit-text-emphasis-style:%1$s;text-emphasis-style:%1$s;-webkit-text-emphasis-position:%2$s;text-emphasis-position:%2$s;display:inline-block;'>", h(eVar.f22768a, eVar.f22769b), g(eVar.f22770c));
            }
        }
    }

    private static d f(SparseArray sparseArray, int i10) {
        d dVar = (d) sparseArray.get(i10);
        if (dVar == null) {
            d dVar2 = new d();
            sparseArray.put(i10, dVar2);
            return dVar2;
        }
        return dVar;
    }

    private static String g(int i10) {
        if (i10 != 2) {
            return "over right";
        }
        return "under left";
    }

    private static String h(int i10, int i11) {
        StringBuilder sb2 = new StringBuilder();
        if (i11 != 1) {
            if (i11 == 2) {
                sb2.append("open ");
            }
        } else {
            sb2.append("filled ");
        }
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        sb2.append("unset");
                    } else {
                        sb2.append("sesame");
                    }
                } else {
                    sb2.append("dot");
                }
            } else {
                sb2.append("circle");
            }
        } else {
            sb2.append(ViewProps.NONE);
        }
        return sb2.toString();
    }
}
