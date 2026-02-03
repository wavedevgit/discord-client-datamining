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
import ji.t;
import ne.w0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    private static final Pattern f12873a = Pattern.compile("(&#13;)?&#10;");

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        public final String f12874a;

        /* renamed from: b  reason: collision with root package name */
        public final Map f12875b;

        private b(String str, Map map) {
            this.f12874a = str;
            this.f12875b = map;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: com.google.android.exoplayer2.ui.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0157c {

        /* renamed from: e  reason: collision with root package name */
        private static final Comparator f12876e = new Comparator() { // from class: com.google.android.exoplayer2.ui.d
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                return c.C0157c.a((c.C0157c) obj, (c.C0157c) obj2);
            }
        };

        /* renamed from: f  reason: collision with root package name */
        private static final Comparator f12877f = new Comparator() { // from class: com.google.android.exoplayer2.ui.e
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                return c.C0157c.b((c.C0157c) obj, (c.C0157c) obj2);
            }
        };

        /* renamed from: a  reason: collision with root package name */
        public final int f12878a;

        /* renamed from: b  reason: collision with root package name */
        public final int f12879b;

        /* renamed from: c  reason: collision with root package name */
        public final String f12880c;

        /* renamed from: d  reason: collision with root package name */
        public final String f12881d;

        public static /* synthetic */ int a(C0157c c0157c, C0157c c0157c2) {
            int compare = Integer.compare(c0157c2.f12879b, c0157c.f12879b);
            if (compare != 0) {
                return compare;
            }
            int compareTo = c0157c.f12880c.compareTo(c0157c2.f12880c);
            if (compareTo != 0) {
                return compareTo;
            }
            return c0157c.f12881d.compareTo(c0157c2.f12881d);
        }

        public static /* synthetic */ int b(C0157c c0157c, C0157c c0157c2) {
            int compare = Integer.compare(c0157c2.f12878a, c0157c.f12878a);
            if (compare != 0) {
                return compare;
            }
            int compareTo = c0157c2.f12880c.compareTo(c0157c.f12880c);
            if (compareTo != 0) {
                return compareTo;
            }
            return c0157c2.f12881d.compareTo(c0157c.f12881d);
        }

        private C0157c(int i10, int i11, String str, String str2) {
            this.f12878a = i10;
            this.f12879b = i11;
            this.f12880c = str;
            this.f12881d = str2;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        private final List f12882a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        private final List f12883b = new ArrayList();
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
            Collections.sort(dVar.f12883b, C0157c.f12877f);
            for (C0157c c0157c : dVar.f12883b) {
                sb2.append(c0157c.f12881d);
            }
            Collections.sort(dVar.f12882a, C0157c.f12876e);
            for (C0157c c0157c2 : dVar.f12882a) {
                sb2.append(c0157c2.f12880c);
            }
            i10++;
            i11 = keyAt;
        }
        sb2.append(b(spanned.subSequence(i11, spanned.length())));
        return new b(sb2.toString(), hashMap);
    }

    private static String b(CharSequence charSequence) {
        return f12873a.matcher(Html.escapeHtml(charSequence)).replaceAll("<br>");
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
                ne.a.e(d10);
                C0157c c0157c = new C0157c(spanStart, spanEnd, e10, d10);
                f(sparseArray, spanStart).f12882a.add(c0157c);
                f(sparseArray, spanEnd).f12883b.add(c0157c);
            }
        }
        return sparseArray;
    }

    private static String d(Object obj) {
        if ((obj instanceof StrikethroughSpan) || (obj instanceof ForegroundColorSpan) || (obj instanceof BackgroundColorSpan) || (obj instanceof de.a) || (obj instanceof AbsoluteSizeSpan) || (obj instanceof RelativeSizeSpan) || (obj instanceof de.e)) {
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
        } else if (obj instanceof de.c) {
            return "<rt>" + b(((de.c) obj).f20538a) + "</rt></ruby>";
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
        if (obj instanceof de.a) {
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
            } else if (obj instanceof de.c) {
                int i10 = ((de.c) obj).f20539b;
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
                if (!(obj instanceof de.e)) {
                    return null;
                }
                de.e eVar = (de.e) obj;
                return w0.D("<span style='-webkit-text-emphasis-style:%1$s;text-emphasis-style:%1$s;-webkit-text-emphasis-position:%2$s;text-emphasis-position:%2$s;display:inline-block;'>", h(eVar.f20540a, eVar.f20541b), g(eVar.f20542c));
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
