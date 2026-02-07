package wd;

import android.net.Uri;
import com.google.android.exoplayer2.Format;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g extends h {

    /* renamed from: n  reason: collision with root package name */
    public static final g f53656n;

    /* renamed from: d  reason: collision with root package name */
    public final List f53657d;

    /* renamed from: e  reason: collision with root package name */
    public final List f53658e;

    /* renamed from: f  reason: collision with root package name */
    public final List f53659f;

    /* renamed from: g  reason: collision with root package name */
    public final List f53660g;

    /* renamed from: h  reason: collision with root package name */
    public final List f53661h;

    /* renamed from: i  reason: collision with root package name */
    public final List f53662i;

    /* renamed from: j  reason: collision with root package name */
    public final Format f53663j;

    /* renamed from: k  reason: collision with root package name */
    public final List f53664k;

    /* renamed from: l  reason: collision with root package name */
    public final Map f53665l;

    /* renamed from: m  reason: collision with root package name */
    public final List f53666m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final Uri f53667a;

        /* renamed from: b  reason: collision with root package name */
        public final Format f53668b;

        /* renamed from: c  reason: collision with root package name */
        public final String f53669c;

        /* renamed from: d  reason: collision with root package name */
        public final String f53670d;

        public a(Uri uri, Format format, String str, String str2) {
            this.f53667a = uri;
            this.f53668b = format;
            this.f53669c = str;
            this.f53670d = str2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final Uri f53671a;

        /* renamed from: b  reason: collision with root package name */
        public final Format f53672b;

        /* renamed from: c  reason: collision with root package name */
        public final String f53673c;

        /* renamed from: d  reason: collision with root package name */
        public final String f53674d;

        /* renamed from: e  reason: collision with root package name */
        public final String f53675e;

        /* renamed from: f  reason: collision with root package name */
        public final String f53676f;

        public b(Uri uri, Format format, String str, String str2, String str3, String str4) {
            this.f53671a = uri;
            this.f53672b = format;
            this.f53673c = str;
            this.f53674d = str2;
            this.f53675e = str3;
            this.f53676f = str4;
        }

        public static b b(Uri uri) {
            return new b(uri, new Format.b().U("0").M("application/x-mpegURL").G(), null, null, null, null);
        }

        public b a(Format format) {
            return new b(this.f53671a, format, this.f53673c, this.f53674d, this.f53675e, this.f53676f);
        }
    }

    static {
        List list = Collections.EMPTY_LIST;
        f53656n = new g("", list, list, list, list, list, list, null, list, false, Collections.EMPTY_MAP, list);
    }

    public g(String str, List list, List list2, List list3, List list4, List list5, List list6, Format format, List list7, boolean z10, Map map, List list8) {
        super(str, list, z10);
        List list9;
        this.f53657d = Collections.unmodifiableList(f(list2, list3, list4, list5, list6));
        this.f53658e = Collections.unmodifiableList(list2);
        this.f53659f = Collections.unmodifiableList(list3);
        this.f53660g = Collections.unmodifiableList(list4);
        this.f53661h = Collections.unmodifiableList(list5);
        this.f53662i = Collections.unmodifiableList(list6);
        this.f53663j = format;
        if (list7 != null) {
            list9 = Collections.unmodifiableList(list7);
        } else {
            list9 = null;
        }
        this.f53664k = list9;
        this.f53665l = Collections.unmodifiableMap(map);
        this.f53666m = Collections.unmodifiableList(list8);
    }

    private static void b(List list, List list2) {
        for (int i10 = 0; i10 < list.size(); i10++) {
            Uri uri = ((a) list.get(i10)).f53667a;
            if (uri != null && !list2.contains(uri)) {
                list2.add(uri);
            }
        }
    }

    private static List d(List list, int i10, List list2) {
        ArrayList arrayList = new ArrayList(list2.size());
        for (int i11 = 0; i11 < list.size(); i11++) {
            Object obj = list.get(i11);
            int i12 = 0;
            while (true) {
                if (i12 < list2.size()) {
                    pd.c cVar = (pd.c) list2.get(i12);
                    if (cVar.f43848e == i10 && cVar.f43849i == i11) {
                        arrayList.add(obj);
                        break;
                    }
                    i12++;
                }
            }
        }
        return arrayList;
    }

    public static g e(String str) {
        List singletonList = Collections.singletonList(b.b(Uri.parse(str)));
        List list = Collections.EMPTY_LIST;
        return new g("", list, singletonList, list, list, list, list, null, null, false, Collections.EMPTY_MAP, list);
    }

    private static List f(List list, List list2, List list3, List list4, List list5) {
        ArrayList arrayList = new ArrayList();
        for (int i10 = 0; i10 < list.size(); i10++) {
            Uri uri = ((b) list.get(i10)).f53671a;
            if (!arrayList.contains(uri)) {
                arrayList.add(uri);
            }
        }
        b(list2, arrayList);
        b(list3, arrayList);
        b(list4, arrayList);
        b(list5, arrayList);
        return arrayList;
    }

    @Override // pd.a
    /* renamed from: c */
    public g a(List list) {
        String str = this.f53677a;
        List list2 = this.f53678b;
        List d10 = d(this.f53658e, 0, list);
        List list3 = Collections.EMPTY_LIST;
        return new g(str, list2, d10, list3, d(this.f53660g, 1, list), d(this.f53661h, 2, list), list3, this.f53663j, this.f53664k, this.f53679c, this.f53665l, this.f53666m);
    }
}
