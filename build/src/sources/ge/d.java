package ge;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.text.SpannableStringBuilder;
import android.util.Base64;
import android.util.Pair;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import java.util.TreeSet;
import zd.b;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    public final String f24702a;

    /* renamed from: b  reason: collision with root package name */
    public final String f24703b;

    /* renamed from: c  reason: collision with root package name */
    public final boolean f24704c;

    /* renamed from: d  reason: collision with root package name */
    public final long f24705d;

    /* renamed from: e  reason: collision with root package name */
    public final long f24706e;

    /* renamed from: f  reason: collision with root package name */
    public final g f24707f;

    /* renamed from: g  reason: collision with root package name */
    private final String[] f24708g;

    /* renamed from: h  reason: collision with root package name */
    public final String f24709h;

    /* renamed from: i  reason: collision with root package name */
    public final String f24710i;

    /* renamed from: j  reason: collision with root package name */
    public final d f24711j;

    /* renamed from: k  reason: collision with root package name */
    private final HashMap f24712k;

    /* renamed from: l  reason: collision with root package name */
    private final HashMap f24713l;

    /* renamed from: m  reason: collision with root package name */
    private List f24714m;

    private d(String str, String str2, long j10, long j11, g gVar, String[] strArr, String str3, String str4, d dVar) {
        boolean z10;
        this.f24702a = str;
        this.f24703b = str2;
        this.f24710i = str4;
        this.f24707f = gVar;
        this.f24708g = strArr;
        if (str2 != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f24704c = z10;
        this.f24705d = j10;
        this.f24706e = j11;
        this.f24709h = (String) ne.a.e(str3);
        this.f24711j = dVar;
        this.f24712k = new HashMap();
        this.f24713l = new HashMap();
    }

    private void b(Map map, b.C0782b c0782b, int i10, int i11, int i12) {
        g f10 = f.f(this.f24707f, this.f24708g, map);
        SpannableStringBuilder spannableStringBuilder = (SpannableStringBuilder) c0782b.e();
        if (spannableStringBuilder == null) {
            spannableStringBuilder = new SpannableStringBuilder();
            c0782b.o(spannableStringBuilder);
        }
        SpannableStringBuilder spannableStringBuilder2 = spannableStringBuilder;
        if (f10 != null) {
            f.a(spannableStringBuilder2, i10, i11, f10, this.f24711j, map, i12);
            if ("p".equals(this.f24702a)) {
                if (f10.k() != Float.MAX_VALUE) {
                    c0782b.m((f10.k() * (-90.0f)) / 100.0f);
                }
                if (f10.m() != null) {
                    c0782b.p(f10.m());
                }
                if (f10.h() != null) {
                    c0782b.j(f10.h());
                }
            }
        }
    }

    public static d c(String str, long j10, long j11, g gVar, String[] strArr, String str2, String str3, d dVar) {
        return new d(str, null, j10, j11, gVar, strArr, str2, str3, dVar);
    }

    public static d d(String str) {
        return new d(null, f.b(str), -9223372036854775807L, -9223372036854775807L, null, null, "", null, null);
    }

    private static void e(SpannableStringBuilder spannableStringBuilder) {
        a[] aVarArr;
        for (a aVar : (a[]) spannableStringBuilder.getSpans(0, spannableStringBuilder.length(), a.class)) {
            spannableStringBuilder.replace(spannableStringBuilder.getSpanStart(aVar), spannableStringBuilder.getSpanEnd(aVar), "");
        }
        for (int i10 = 0; i10 < spannableStringBuilder.length(); i10++) {
            if (spannableStringBuilder.charAt(i10) == ' ') {
                int i11 = i10 + 1;
                int i12 = i11;
                while (i12 < spannableStringBuilder.length() && spannableStringBuilder.charAt(i12) == ' ') {
                    i12++;
                }
                int i13 = i12 - i11;
                if (i13 > 0) {
                    spannableStringBuilder.delete(i10, i13 + i10);
                }
            }
        }
        if (spannableStringBuilder.length() > 0 && spannableStringBuilder.charAt(0) == ' ') {
            spannableStringBuilder.delete(0, 1);
        }
        for (int i14 = 0; i14 < spannableStringBuilder.length() - 1; i14++) {
            if (spannableStringBuilder.charAt(i14) == '\n') {
                int i15 = i14 + 1;
                if (spannableStringBuilder.charAt(i15) == ' ') {
                    spannableStringBuilder.delete(i15, i14 + 2);
                }
            }
        }
        if (spannableStringBuilder.length() > 0 && spannableStringBuilder.charAt(spannableStringBuilder.length() - 1) == ' ') {
            spannableStringBuilder.delete(spannableStringBuilder.length() - 1, spannableStringBuilder.length());
        }
        for (int i16 = 0; i16 < spannableStringBuilder.length() - 1; i16++) {
            if (spannableStringBuilder.charAt(i16) == ' ') {
                int i17 = i16 + 1;
                if (spannableStringBuilder.charAt(i17) == '\n') {
                    spannableStringBuilder.delete(i16, i17);
                }
            }
        }
        if (spannableStringBuilder.length() > 0 && spannableStringBuilder.charAt(spannableStringBuilder.length() - 1) == '\n') {
            spannableStringBuilder.delete(spannableStringBuilder.length() - 1, spannableStringBuilder.length());
        }
    }

    private void i(TreeSet treeSet, boolean z10) {
        boolean z11;
        boolean equals = "p".equals(this.f24702a);
        boolean equals2 = "div".equals(this.f24702a);
        if (z10 || equals || (equals2 && this.f24710i != null)) {
            long j10 = this.f24705d;
            if (j10 != -9223372036854775807L) {
                treeSet.add(Long.valueOf(j10));
            }
            long j11 = this.f24706e;
            if (j11 != -9223372036854775807L) {
                treeSet.add(Long.valueOf(j11));
            }
        }
        if (this.f24714m != null) {
            for (int i10 = 0; i10 < this.f24714m.size(); i10++) {
                d dVar = (d) this.f24714m.get(i10);
                if (!z10 && !equals) {
                    z11 = false;
                } else {
                    z11 = true;
                }
                dVar.i(treeSet, z11);
            }
        }
    }

    private static SpannableStringBuilder k(String str, Map map) {
        if (!map.containsKey(str)) {
            b.C0782b c0782b = new b.C0782b();
            c0782b.o(new SpannableStringBuilder());
            map.put(str, c0782b);
        }
        return (SpannableStringBuilder) ne.a.e(((b.C0782b) map.get(str)).e());
    }

    private void n(long j10, String str, List list) {
        if (!"".equals(this.f24709h)) {
            str = this.f24709h;
        }
        if (m(j10) && "div".equals(this.f24702a) && this.f24710i != null) {
            list.add(new Pair(str, this.f24710i));
            return;
        }
        for (int i10 = 0; i10 < g(); i10++) {
            f(i10).n(j10, str, list);
        }
    }

    private void o(long j10, Map map, Map map2, String str, Map map3) {
        String str2;
        if (m(j10)) {
            if ("".equals(this.f24709h)) {
                str2 = str;
            } else {
                str2 = this.f24709h;
            }
            Iterator it = this.f24713l.entrySet().iterator();
            while (true) {
                int i10 = 0;
                if (!it.hasNext()) {
                    break;
                }
                Map.Entry entry = (Map.Entry) it.next();
                String str3 = (String) entry.getKey();
                if (this.f24712k.containsKey(str3)) {
                    i10 = ((Integer) this.f24712k.get(str3)).intValue();
                }
                int intValue = ((Integer) entry.getValue()).intValue();
                if (i10 != intValue) {
                    b(map, (b.C0782b) ne.a.e((b.C0782b) map3.get(str3)), i10, intValue, ((e) ne.a.e((e) map2.get(str2))).f24724j);
                }
            }
            for (int i11 = 0; i11 < g(); i11++) {
                f(i11).o(j10, map, map2, str2, map3);
            }
        }
    }

    private void p(long j10, boolean z10, String str, Map map) {
        boolean z11;
        Map map2;
        long j11;
        this.f24712k.clear();
        this.f24713l.clear();
        if (!"metadata".equals(this.f24702a)) {
            if (!"".equals(this.f24709h)) {
                str = this.f24709h;
            }
            String str2 = str;
            if (this.f24704c && z10) {
                k(str2, map).append((CharSequence) ne.a.e(this.f24703b));
            } else if ("br".equals(this.f24702a) && z10) {
                k(str2, map).append('\n');
            } else if (m(j10)) {
                for (Map.Entry entry : map.entrySet()) {
                    this.f24712k.put((String) entry.getKey(), Integer.valueOf(((CharSequence) ne.a.e(((b.C0782b) entry.getValue()).e())).length()));
                }
                boolean equals = "p".equals(this.f24702a);
                int i10 = 0;
                while (i10 < g()) {
                    d f10 = f(i10);
                    if (!z10 && !equals) {
                        z11 = false;
                        j11 = j10;
                        map2 = map;
                    } else {
                        z11 = true;
                        map2 = map;
                        j11 = j10;
                    }
                    f10.p(j11, z11, str2, map2);
                    i10++;
                    j10 = j11;
                    map = map2;
                }
                Map map3 = map;
                if (equals) {
                    f.c(k(str2, map3));
                }
                for (Map.Entry entry2 : map3.entrySet()) {
                    this.f24713l.put((String) entry2.getKey(), Integer.valueOf(((CharSequence) ne.a.e(((b.C0782b) entry2.getValue()).e())).length()));
                }
            }
        }
    }

    public void a(d dVar) {
        if (this.f24714m == null) {
            this.f24714m = new ArrayList();
        }
        this.f24714m.add(dVar);
    }

    public d f(int i10) {
        List list = this.f24714m;
        if (list != null) {
            return (d) list.get(i10);
        }
        throw new IndexOutOfBoundsException();
    }

    public int g() {
        List list = this.f24714m;
        if (list == null) {
            return 0;
        }
        return list.size();
    }

    public List h(long j10, Map map, Map map2, Map map3) {
        List<Pair> arrayList = new ArrayList();
        n(j10, this.f24709h, arrayList);
        TreeMap treeMap = new TreeMap();
        p(j10, false, this.f24709h, treeMap);
        o(j10, map, map2, this.f24709h, treeMap);
        ArrayList arrayList2 = new ArrayList();
        for (Pair pair : arrayList) {
            String str = (String) map3.get(pair.second);
            if (str != null) {
                byte[] decode = Base64.decode(str, 0);
                Bitmap decodeByteArray = BitmapFactory.decodeByteArray(decode, 0, decode.length);
                e eVar = (e) ne.a.e((e) map2.get(pair.first));
                arrayList2.add(new b.C0782b().f(decodeByteArray).k(eVar.f24716b).l(0).h(eVar.f24717c, 0).i(eVar.f24719e).n(eVar.f24720f).g(eVar.f24721g).r(eVar.f24724j).a());
            }
        }
        for (Map.Entry entry : treeMap.entrySet()) {
            e eVar2 = (e) ne.a.e((e) map2.get(entry.getKey()));
            b.C0782b c0782b = (b.C0782b) entry.getValue();
            e((SpannableStringBuilder) ne.a.e(c0782b.e()));
            c0782b.h(eVar2.f24717c, eVar2.f24718d);
            c0782b.i(eVar2.f24719e);
            c0782b.k(eVar2.f24716b);
            c0782b.n(eVar2.f24720f);
            c0782b.q(eVar2.f24723i, eVar2.f24722h);
            c0782b.r(eVar2.f24724j);
            arrayList2.add(c0782b.a());
        }
        return arrayList2;
    }

    public long[] j() {
        TreeSet treeSet = new TreeSet();
        int i10 = 0;
        i(treeSet, false);
        long[] jArr = new long[treeSet.size()];
        Iterator it = treeSet.iterator();
        while (it.hasNext()) {
            jArr[i10] = ((Long) it.next()).longValue();
            i10++;
        }
        return jArr;
    }

    public String[] l() {
        return this.f24708g;
    }

    public boolean m(long j10) {
        long j11 = this.f24705d;
        if (j11 != -9223372036854775807L || this.f24706e != -9223372036854775807L) {
            if (j11 > j10 || this.f24706e != -9223372036854775807L) {
                if (j11 != -9223372036854775807L || j10 >= this.f24706e) {
                    if (j11 <= j10 && j10 < this.f24706e) {
                        return true;
                    }
                    return false;
                }
                return true;
            }
            return true;
        }
        return true;
    }
}
