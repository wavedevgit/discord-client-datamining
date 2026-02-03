package ie;

import android.graphics.Color;
import android.text.Layout;
import android.text.SpannableStringBuilder;
import android.text.SpannedString;
import android.text.TextUtils;
import android.text.style.AbsoluteSizeSpan;
import android.text.style.BackgroundColorSpan;
import android.text.style.ForegroundColorSpan;
import android.text.style.RelativeSizeSpan;
import android.text.style.StrikethroughSpan;
import android.text.style.StyleSpan;
import android.text.style.TypefaceSpan;
import android.text.style.UnderlineSpan;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import ie.f;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import ne.h0;
import ne.w0;
import ne.y;
import zd.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class f {

    /* renamed from: a  reason: collision with root package name */
    public static final Pattern f28358a = Pattern.compile("^(\\S+)\\s+-->\\s+(\\S+)(.*)?$");

    /* renamed from: b  reason: collision with root package name */
    private static final Pattern f28359b = Pattern.compile("(\\S+?):(\\S+)");

    /* renamed from: c  reason: collision with root package name */
    private static final Map f28360c;

    /* renamed from: d  reason: collision with root package name */
    private static final Map f28361d;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: c  reason: collision with root package name */
        private static final Comparator f28362c = new Comparator() { // from class: ie.g
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                int compare;
                compare = Integer.compare(((f.b) obj).f28363a.f28366b, ((f.b) obj2).f28363a.f28366b);
                return compare;
            }
        };

        /* renamed from: a  reason: collision with root package name */
        private final c f28363a;

        /* renamed from: b  reason: collision with root package name */
        private final int f28364b;

        private b(c cVar, int i10) {
            this.f28363a = cVar;
            this.f28364b = i10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final String f28365a;

        /* renamed from: b  reason: collision with root package name */
        public final int f28366b;

        /* renamed from: c  reason: collision with root package name */
        public final String f28367c;

        /* renamed from: d  reason: collision with root package name */
        public final Set f28368d;

        private c(String str, int i10, String str2, Set set) {
            this.f28366b = i10;
            this.f28365a = str;
            this.f28367c = str2;
            this.f28368d = set;
        }

        public static c a(String str, int i10) {
            String str2;
            String trim = str.trim();
            ne.a.a(!trim.isEmpty());
            int indexOf = trim.indexOf(" ");
            if (indexOf == -1) {
                str2 = "";
            } else {
                String trim2 = trim.substring(indexOf).trim();
                trim = trim.substring(0, indexOf);
                str2 = trim2;
            }
            String[] d12 = w0.d1(trim, "\\.");
            String str3 = d12[0];
            HashSet hashSet = new HashSet();
            for (int i11 = 1; i11 < d12.length; i11++) {
                hashSet.add(d12[i11]);
            }
            return new c(str3, i10, str2, hashSet);
        }

        public static c b() {
            return new c("", 0, "", Collections.EMPTY_SET);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d implements Comparable {

        /* renamed from: d  reason: collision with root package name */
        public final int f28369d;

        /* renamed from: e  reason: collision with root package name */
        public final ie.d f28370e;

        public d(int i10, ie.d dVar) {
            this.f28369d = i10;
            this.f28370e = dVar;
        }

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(d dVar) {
            return Integer.compare(this.f28369d, dVar.f28369d);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e {

        /* renamed from: c  reason: collision with root package name */
        public CharSequence f28373c;

        /* renamed from: a  reason: collision with root package name */
        public long f28371a = 0;

        /* renamed from: b  reason: collision with root package name */
        public long f28372b = 0;

        /* renamed from: d  reason: collision with root package name */
        public int f28374d = 2;

        /* renamed from: e  reason: collision with root package name */
        public float f28375e = -3.4028235E38f;

        /* renamed from: f  reason: collision with root package name */
        public int f28376f = 1;

        /* renamed from: g  reason: collision with root package name */
        public int f28377g = 0;

        /* renamed from: h  reason: collision with root package name */
        public float f28378h = -3.4028235E38f;

        /* renamed from: i  reason: collision with root package name */
        public int f28379i = Integer.MIN_VALUE;

        /* renamed from: j  reason: collision with root package name */
        public float f28380j = 1.0f;

        /* renamed from: k  reason: collision with root package name */
        public int f28381k = Integer.MIN_VALUE;

        private static float b(float f10, int i10) {
            int i11 = (f10 > (-3.4028235E38f) ? 1 : (f10 == (-3.4028235E38f) ? 0 : -1));
            if (i11 != 0 && i10 == 0 && (f10 < 0.0f || f10 > 1.0f)) {
                return 1.0f;
            }
            if (i11 != 0) {
                return f10;
            }
            if (i10 != 0) {
                return -3.4028235E38f;
            }
            return 1.0f;
        }

        private static Layout.Alignment c(int i10) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 != 4) {
                            if (i10 != 5) {
                                y.i("WebvttCueParser", "Unknown textAlignment: " + i10);
                                return null;
                            }
                        }
                    }
                    return Layout.Alignment.ALIGN_OPPOSITE;
                }
                return Layout.Alignment.ALIGN_CENTER;
            }
            return Layout.Alignment.ALIGN_NORMAL;
        }

        private static float d(int i10, float f10) {
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 == 2) {
                        return f10;
                    }
                    throw new IllegalStateException(String.valueOf(i10));
                } else if (f10 <= 0.5f) {
                    return f10 * 2.0f;
                } else {
                    return (1.0f - f10) * 2.0f;
                }
            }
            return 1.0f - f10;
        }

        private static float e(int i10) {
            if (i10 != 4) {
                if (i10 != 5) {
                    return 0.5f;
                }
                return 1.0f;
            }
            return 0.0f;
        }

        private static int f(int i10) {
            if (i10 != 1) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        if (i10 != 5) {
                            return 1;
                        }
                        return 2;
                    }
                    return 0;
                }
                return 2;
            }
            return 0;
        }

        public ie.e a() {
            return new ie.e(g().a(), this.f28371a, this.f28372b);
        }

        public b.C0784b g() {
            float f10 = this.f28378h;
            if (f10 == -3.4028235E38f) {
                f10 = e(this.f28374d);
            }
            int i10 = this.f28379i;
            if (i10 == Integer.MIN_VALUE) {
                i10 = f(this.f28374d);
            }
            b.C0784b r10 = new b.C0784b().p(c(this.f28374d)).h(b(this.f28375e, this.f28376f), this.f28376f).i(this.f28377g).k(f10).l(i10).n(Math.min(this.f28380j, d(i10, f10))).r(this.f28381k);
            CharSequence charSequence = this.f28373c;
            if (charSequence != null) {
                r10.o(charSequence);
            }
            return r10;
        }
    }

    static {
        HashMap hashMap = new HashMap();
        hashMap.put("white", Integer.valueOf(Color.rgb((int) SetSpanOperation.SPAN_MAX_PRIORITY, (int) SetSpanOperation.SPAN_MAX_PRIORITY, (int) SetSpanOperation.SPAN_MAX_PRIORITY)));
        hashMap.put("lime", Integer.valueOf(Color.rgb(0, (int) SetSpanOperation.SPAN_MAX_PRIORITY, 0)));
        hashMap.put("cyan", Integer.valueOf(Color.rgb(0, (int) SetSpanOperation.SPAN_MAX_PRIORITY, (int) SetSpanOperation.SPAN_MAX_PRIORITY)));
        hashMap.put("red", Integer.valueOf(Color.rgb((int) SetSpanOperation.SPAN_MAX_PRIORITY, 0, 0)));
        hashMap.put("yellow", Integer.valueOf(Color.rgb((int) SetSpanOperation.SPAN_MAX_PRIORITY, (int) SetSpanOperation.SPAN_MAX_PRIORITY, 0)));
        hashMap.put("magenta", Integer.valueOf(Color.rgb((int) SetSpanOperation.SPAN_MAX_PRIORITY, 0, (int) SetSpanOperation.SPAN_MAX_PRIORITY)));
        hashMap.put("blue", Integer.valueOf(Color.rgb(0, 0, (int) SetSpanOperation.SPAN_MAX_PRIORITY)));
        hashMap.put("black", Integer.valueOf(Color.rgb(0, 0, 0)));
        f28360c = Collections.unmodifiableMap(hashMap);
        HashMap hashMap2 = new HashMap();
        hashMap2.put("bg_white", Integer.valueOf(Color.rgb((int) SetSpanOperation.SPAN_MAX_PRIORITY, (int) SetSpanOperation.SPAN_MAX_PRIORITY, (int) SetSpanOperation.SPAN_MAX_PRIORITY)));
        hashMap2.put("bg_lime", Integer.valueOf(Color.rgb(0, (int) SetSpanOperation.SPAN_MAX_PRIORITY, 0)));
        hashMap2.put("bg_cyan", Integer.valueOf(Color.rgb(0, (int) SetSpanOperation.SPAN_MAX_PRIORITY, (int) SetSpanOperation.SPAN_MAX_PRIORITY)));
        hashMap2.put("bg_red", Integer.valueOf(Color.rgb((int) SetSpanOperation.SPAN_MAX_PRIORITY, 0, 0)));
        hashMap2.put("bg_yellow", Integer.valueOf(Color.rgb((int) SetSpanOperation.SPAN_MAX_PRIORITY, (int) SetSpanOperation.SPAN_MAX_PRIORITY, 0)));
        hashMap2.put("bg_magenta", Integer.valueOf(Color.rgb((int) SetSpanOperation.SPAN_MAX_PRIORITY, 0, (int) SetSpanOperation.SPAN_MAX_PRIORITY)));
        hashMap2.put("bg_blue", Integer.valueOf(Color.rgb(0, 0, (int) SetSpanOperation.SPAN_MAX_PRIORITY)));
        hashMap2.put("bg_black", Integer.valueOf(Color.rgb(0, 0, 0)));
        f28361d = Collections.unmodifiableMap(hashMap2);
    }

    private static void a(SpannableStringBuilder spannableStringBuilder, Set set, int i10, int i11) {
        Iterator it = set.iterator();
        while (it.hasNext()) {
            String str = (String) it.next();
            Map map = f28360c;
            if (map.containsKey(str)) {
                spannableStringBuilder.setSpan(new ForegroundColorSpan(((Integer) map.get(str)).intValue()), i10, i11, 33);
            } else {
                Map map2 = f28361d;
                if (map2.containsKey(str)) {
                    spannableStringBuilder.setSpan(new BackgroundColorSpan(((Integer) map2.get(str)).intValue()), i10, i11, 33);
                }
            }
        }
    }

    private static void b(String str, SpannableStringBuilder spannableStringBuilder) {
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case 3309:
                if (str.equals("gt")) {
                    c10 = 0;
                    break;
                }
                break;
            case 3464:
                if (str.equals("lt")) {
                    c10 = 1;
                    break;
                }
                break;
            case 96708:
                if (str.equals("amp")) {
                    c10 = 2;
                    break;
                }
                break;
            case 3374865:
                if (str.equals("nbsp")) {
                    c10 = 3;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                spannableStringBuilder.append('>');
                return;
            case 1:
                spannableStringBuilder.append('<');
                return;
            case 2:
                spannableStringBuilder.append('&');
                return;
            case 3:
                spannableStringBuilder.append(' ');
                return;
            default:
                y.i("WebvttCueParser", "ignoring unsupported entity: '&" + str + ";'");
                return;
        }
    }

    private static void c(SpannableStringBuilder spannableStringBuilder, String str, c cVar, List list, List list2) {
        int i10 = i(list2, str, cVar);
        ArrayList arrayList = new ArrayList(list.size());
        arrayList.addAll(list);
        Collections.sort(arrayList, b.f28362c);
        int i11 = cVar.f28366b;
        int i12 = 0;
        for (int i13 = 0; i13 < arrayList.size(); i13++) {
            if ("rt".equals(((b) arrayList.get(i13)).f28363a.f28365a)) {
                b bVar = (b) arrayList.get(i13);
                int g10 = g(i(list2, str, bVar.f28363a), i10, 1);
                int i14 = bVar.f28363a.f28366b - i12;
                int i15 = bVar.f28364b - i12;
                CharSequence subSequence = spannableStringBuilder.subSequence(i14, i15);
                spannableStringBuilder.delete(i14, i15);
                spannableStringBuilder.setSpan(new de.c(subSequence.toString(), g10), i11, i14, 33);
                i12 += subSequence.length();
                i11 = i14;
            }
        }
    }

    private static void d(String str, c cVar, List list, SpannableStringBuilder spannableStringBuilder, List list2) {
        int i10 = cVar.f28366b;
        int length = spannableStringBuilder.length();
        String str2 = cVar.f28365a;
        str2.getClass();
        char c10 = 65535;
        switch (str2.hashCode()) {
            case 0:
                if (str2.equals("")) {
                    c10 = 0;
                    break;
                }
                break;
            case 98:
                if (str2.equals("b")) {
                    c10 = 1;
                    break;
                }
                break;
            case 99:
                if (str2.equals("c")) {
                    c10 = 2;
                    break;
                }
                break;
            case 105:
                if (str2.equals("i")) {
                    c10 = 3;
                    break;
                }
                break;
            case 117:
                if (str2.equals("u")) {
                    c10 = 4;
                    break;
                }
                break;
            case 118:
                if (str2.equals("v")) {
                    c10 = 5;
                    break;
                }
                break;
            case 3314158:
                if (str2.equals("lang")) {
                    c10 = 6;
                    break;
                }
                break;
            case 3511770:
                if (str2.equals("ruby")) {
                    c10 = 7;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
            case 5:
            case 6:
                break;
            case 1:
                spannableStringBuilder.setSpan(new StyleSpan(1), i10, length, 33);
                break;
            case 2:
                a(spannableStringBuilder, cVar.f28368d, i10, length);
                break;
            case 3:
                spannableStringBuilder.setSpan(new StyleSpan(2), i10, length, 33);
                break;
            case 4:
                spannableStringBuilder.setSpan(new UnderlineSpan(), i10, length, 33);
                break;
            case 7:
                c(spannableStringBuilder, str, cVar, list, list2);
                break;
            default:
                return;
        }
        List h10 = h(list2, str, cVar);
        for (int i11 = 0; i11 < h10.size(); i11++) {
            e(spannableStringBuilder, ((d) h10.get(i11)).f28370e, i10, length);
        }
    }

    private static void e(SpannableStringBuilder spannableStringBuilder, ie.d dVar, int i10, int i11) {
        if (dVar != null) {
            if (dVar.i() != -1) {
                de.d.a(spannableStringBuilder, new StyleSpan(dVar.i()), i10, i11, 33);
            }
            if (dVar.l()) {
                spannableStringBuilder.setSpan(new StrikethroughSpan(), i10, i11, 33);
            }
            if (dVar.m()) {
                spannableStringBuilder.setSpan(new UnderlineSpan(), i10, i11, 33);
            }
            if (dVar.k()) {
                de.d.a(spannableStringBuilder, new ForegroundColorSpan(dVar.c()), i10, i11, 33);
            }
            if (dVar.j()) {
                de.d.a(spannableStringBuilder, new BackgroundColorSpan(dVar.a()), i10, i11, 33);
            }
            if (dVar.d() != null) {
                de.d.a(spannableStringBuilder, new TypefaceSpan(dVar.d()), i10, i11, 33);
            }
            int f10 = dVar.f();
            if (f10 != 1) {
                if (f10 != 2) {
                    if (f10 == 3) {
                        de.d.a(spannableStringBuilder, new RelativeSizeSpan(dVar.e() / 100.0f), i10, i11, 33);
                    }
                } else {
                    de.d.a(spannableStringBuilder, new RelativeSizeSpan(dVar.e()), i10, i11, 33);
                }
            } else {
                de.d.a(spannableStringBuilder, new AbsoluteSizeSpan((int) dVar.e(), true), i10, i11, 33);
            }
            if (dVar.b()) {
                spannableStringBuilder.setSpan(new de.a(), i10, i11, 33);
            }
        }
    }

    private static int f(String str, int i10) {
        int indexOf = str.indexOf(62, i10);
        if (indexOf == -1) {
            return str.length();
        }
        return indexOf + 1;
    }

    private static int g(int i10, int i11, int i12) {
        if (i10 != -1) {
            return i10;
        }
        if (i11 != -1) {
            return i11;
        }
        if (i12 != -1) {
            return i12;
        }
        throw new IllegalArgumentException();
    }

    private static List h(List list, String str, c cVar) {
        ArrayList arrayList = new ArrayList();
        for (int i10 = 0; i10 < list.size(); i10++) {
            ie.d dVar = (ie.d) list.get(i10);
            int h10 = dVar.h(str, cVar.f28365a, cVar.f28368d, cVar.f28367c);
            if (h10 > 0) {
                arrayList.add(new d(h10, dVar));
            }
        }
        Collections.sort(arrayList);
        return arrayList;
    }

    private static int i(List list, String str, c cVar) {
        List h10 = h(list, str, cVar);
        for (int i10 = 0; i10 < h10.size(); i10++) {
            ie.d dVar = ((d) h10.get(i10)).f28370e;
            if (dVar.g() != -1) {
                return dVar.g();
            }
        }
        return -1;
    }

    private static String j(String str) {
        String trim = str.trim();
        ne.a.a(!trim.isEmpty());
        return w0.e1(trim, "[ \\.]")[0];
    }

    private static boolean k(String str) {
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case 98:
                if (str.equals("b")) {
                    c10 = 0;
                    break;
                }
                break;
            case 99:
                if (str.equals("c")) {
                    c10 = 1;
                    break;
                }
                break;
            case 105:
                if (str.equals("i")) {
                    c10 = 2;
                    break;
                }
                break;
            case 117:
                if (str.equals("u")) {
                    c10 = 3;
                    break;
                }
                break;
            case 118:
                if (str.equals("v")) {
                    c10 = 4;
                    break;
                }
                break;
            case 3650:
                if (str.equals("rt")) {
                    c10 = 5;
                    break;
                }
                break;
            case 3314158:
                if (str.equals("lang")) {
                    c10 = 6;
                    break;
                }
                break;
            case 3511770:
                if (str.equals("ruby")) {
                    c10 = 7;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                return true;
            default:
                return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static zd.b l(CharSequence charSequence) {
        e eVar = new e();
        eVar.f28373c = charSequence;
        return eVar.g().a();
    }

    private static ie.e m(String str, Matcher matcher, h0 h0Var, List list) {
        e eVar = new e();
        try {
            eVar.f28371a = i.d((String) ne.a.e(matcher.group(1)));
            eVar.f28372b = i.d((String) ne.a.e(matcher.group(2)));
            p((String) ne.a.e(matcher.group(3)), eVar);
            StringBuilder sb2 = new StringBuilder();
            String s10 = h0Var.s();
            while (!TextUtils.isEmpty(s10)) {
                if (sb2.length() > 0) {
                    sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
                }
                sb2.append(s10.trim());
                s10 = h0Var.s();
            }
            eVar.f28373c = q(str, sb2.toString(), list);
            return eVar.a();
        } catch (NumberFormatException unused) {
            y.i("WebvttCueParser", "Skipping cue with bad header: " + matcher.group());
            return null;
        }
    }

    public static ie.e n(h0 h0Var, List list) {
        String s10 = h0Var.s();
        if (s10 == null) {
            return null;
        }
        Pattern pattern = f28358a;
        Matcher matcher = pattern.matcher(s10);
        if (matcher.matches()) {
            return m(null, matcher, h0Var, list);
        }
        String s11 = h0Var.s();
        if (s11 == null) {
            return null;
        }
        Matcher matcher2 = pattern.matcher(s11);
        if (!matcher2.matches()) {
            return null;
        }
        return m(s10.trim(), matcher2, h0Var, list);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b.C0784b o(String str) {
        e eVar = new e();
        p(str, eVar);
        return eVar.g();
    }

    private static void p(String str, e eVar) {
        Matcher matcher = f28359b.matcher(str);
        while (matcher.find()) {
            String str2 = (String) ne.a.e(matcher.group(1));
            String str3 = (String) ne.a.e(matcher.group(2));
            try {
                if ("line".equals(str2)) {
                    s(str3, eVar);
                } else if ("align".equals(str2)) {
                    eVar.f28374d = v(str3);
                } else if (ViewProps.POSITION.equals(str2)) {
                    u(str3, eVar);
                } else if ("size".equals(str2)) {
                    eVar.f28380j = i.c(str3);
                } else if ("vertical".equals(str2)) {
                    eVar.f28381k = w(str3);
                } else {
                    y.i("WebvttCueParser", "Unknown cue setting " + str2 + ":" + str3);
                }
            } catch (NumberFormatException unused) {
                y.i("WebvttCueParser", "Skipping bad cue setting: " + matcher.group());
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static SpannedString q(String str, String str2, List list) {
        boolean z10;
        boolean z11;
        SpannableStringBuilder spannableStringBuilder = new SpannableStringBuilder();
        ArrayDeque arrayDeque = new ArrayDeque();
        ArrayList arrayList = new ArrayList();
        int i10 = 0;
        while (i10 < str2.length()) {
            char charAt = str2.charAt(i10);
            if (charAt != '&') {
                if (charAt != '<') {
                    spannableStringBuilder.append(charAt);
                    i10++;
                } else {
                    int i11 = i10 + 1;
                    if (i11 < str2.length()) {
                        int i12 = 1;
                        if (str2.charAt(i11) == '/') {
                            z10 = true;
                        } else {
                            z10 = false;
                        }
                        i11 = f(str2, i11);
                        int i13 = i11 - 2;
                        if (str2.charAt(i13) == '/') {
                            z11 = true;
                        } else {
                            z11 = false;
                        }
                        if (z10) {
                            i12 = 2;
                        }
                        int i14 = i10 + i12;
                        if (!z11) {
                            i13 = i11 - 1;
                        }
                        String substring = str2.substring(i14, i13);
                        if (!substring.trim().isEmpty()) {
                            String j10 = j(substring);
                            if (k(j10)) {
                                if (z10) {
                                    while (!arrayDeque.isEmpty()) {
                                        c cVar = (c) arrayDeque.pop();
                                        d(str, cVar, arrayList, spannableStringBuilder, list);
                                        if (!arrayDeque.isEmpty()) {
                                            arrayList.add(new b(cVar, spannableStringBuilder.length()));
                                        } else {
                                            arrayList.clear();
                                        }
                                        if (cVar.f28365a.equals(j10)) {
                                            break;
                                        }
                                    }
                                } else if (!z11) {
                                    arrayDeque.push(c.a(substring, spannableStringBuilder.length()));
                                }
                            }
                        }
                    }
                    i10 = i11;
                }
            } else {
                i10++;
                int indexOf = str2.indexOf(59, i10);
                int indexOf2 = str2.indexOf(32, i10);
                if (indexOf == -1) {
                    indexOf = indexOf2;
                } else if (indexOf2 != -1) {
                    indexOf = Math.min(indexOf, indexOf2);
                }
                if (indexOf != -1) {
                    b(str2.substring(i10, indexOf), spannableStringBuilder);
                    if (indexOf == indexOf2) {
                        spannableStringBuilder.append((CharSequence) " ");
                    }
                    i10 = indexOf + 1;
                } else {
                    spannableStringBuilder.append(charAt);
                }
            }
        }
        while (!arrayDeque.isEmpty()) {
            d(str, (c) arrayDeque.pop(), arrayList, spannableStringBuilder, list);
        }
        d(str, c.b(), Collections.EMPTY_LIST, spannableStringBuilder, list);
        return SpannedString.valueOf(spannableStringBuilder);
    }

    private static int r(String str) {
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1364013995:
                if (str.equals("center")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1074341483:
                if (str.equals("middle")) {
                    c10 = 1;
                    break;
                }
                break;
            case 100571:
                if (str.equals(ViewProps.END)) {
                    c10 = 2;
                    break;
                }
                break;
            case 109757538:
                if (str.equals(ViewProps.START)) {
                    c10 = 3;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 0;
            default:
                y.i("WebvttCueParser", "Invalid anchor value: " + str);
                return Integer.MIN_VALUE;
        }
    }

    private static void s(String str, e eVar) {
        int indexOf = str.indexOf(44);
        if (indexOf != -1) {
            eVar.f28377g = r(str.substring(indexOf + 1));
            str = str.substring(0, indexOf);
        }
        if (str.endsWith("%")) {
            eVar.f28375e = i.c(str);
            eVar.f28376f = 0;
            return;
        }
        eVar.f28375e = Integer.parseInt(str);
        eVar.f28376f = 1;
    }

    private static int t(String str) {
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1842484672:
                if (str.equals("line-left")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1364013995:
                if (str.equals("center")) {
                    c10 = 1;
                    break;
                }
                break;
            case -1276788989:
                if (str.equals("line-right")) {
                    c10 = 2;
                    break;
                }
                break;
            case -1074341483:
                if (str.equals("middle")) {
                    c10 = 3;
                    break;
                }
                break;
            case 100571:
                if (str.equals(ViewProps.END)) {
                    c10 = 4;
                    break;
                }
                break;
            case 109757538:
                if (str.equals(ViewProps.START)) {
                    c10 = 5;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
            case 5:
                return 0;
            case 1:
            case 3:
                return 1;
            case 2:
            case 4:
                return 2;
            default:
                y.i("WebvttCueParser", "Invalid anchor value: " + str);
                return Integer.MIN_VALUE;
        }
    }

    private static void u(String str, e eVar) {
        int indexOf = str.indexOf(44);
        if (indexOf != -1) {
            eVar.f28379i = t(str.substring(indexOf + 1));
            str = str.substring(0, indexOf);
        }
        eVar.f28378h = i.c(str);
    }

    private static int v(String str) {
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1364013995:
                if (str.equals("center")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1074341483:
                if (str.equals("middle")) {
                    c10 = 1;
                    break;
                }
                break;
            case 100571:
                if (str.equals(ViewProps.END)) {
                    c10 = 2;
                    break;
                }
                break;
            case 3317767:
                if (str.equals(ViewProps.LEFT)) {
                    c10 = 3;
                    break;
                }
                break;
            case 108511772:
                if (str.equals(ViewProps.RIGHT)) {
                    c10 = 4;
                    break;
                }
                break;
            case 109757538:
                if (str.equals(ViewProps.START)) {
                    c10 = 5;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
            case 1:
                return 2;
            case 2:
                return 3;
            case 3:
                return 4;
            case 4:
                return 5;
            case 5:
                return 1;
            default:
                y.i("WebvttCueParser", "Invalid alignment value: " + str);
                return 2;
        }
    }

    private static int w(String str) {
        str.getClass();
        if (!str.equals("lr")) {
            if (!str.equals("rl")) {
                y.i("WebvttCueParser", "Invalid 'vertical' value: " + str);
                return Integer.MIN_VALUE;
            }
            return 1;
        }
        return 2;
    }
}
