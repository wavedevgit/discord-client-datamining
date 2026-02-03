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
    public static final g f51953n;

    /* renamed from: d  reason: collision with root package name */
    public final List f51954d;

    /* renamed from: e  reason: collision with root package name */
    public final List f51955e;

    /* renamed from: f  reason: collision with root package name */
    public final List f51956f;

    /* renamed from: g  reason: collision with root package name */
    public final List f51957g;

    /* renamed from: h  reason: collision with root package name */
    public final List f51958h;

    /* renamed from: i  reason: collision with root package name */
    public final List f51959i;

    /* renamed from: j  reason: collision with root package name */
    public final Format f51960j;

    /* renamed from: k  reason: collision with root package name */
    public final List f51961k;

    /* renamed from: l  reason: collision with root package name */
    public final Map f51962l;

    /* renamed from: m  reason: collision with root package name */
    public final List f51963m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final Uri f51964a;

        /* renamed from: b  reason: collision with root package name */
        public final Format f51965b;

        /* renamed from: c  reason: collision with root package name */
        public final String f51966c;

        /* renamed from: d  reason: collision with root package name */
        public final String f51967d;

        public a(Uri uri, Format format, String str, String str2) {
            this.f51964a = uri;
            this.f51965b = format;
            this.f51966c = str;
            this.f51967d = str2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final Uri f51968a;

        /* renamed from: b  reason: collision with root package name */
        public final Format f51969b;

        /* renamed from: c  reason: collision with root package name */
        public final String f51970c;

        /* renamed from: d  reason: collision with root package name */
        public final String f51971d;

        /* renamed from: e  reason: collision with root package name */
        public final String f51972e;

        /* renamed from: f  reason: collision with root package name */
        public final String f51973f;

        public b(Uri uri, Format format, String str, String str2, String str3, String str4) {
            this.f51968a = uri;
            this.f51969b = format;
            this.f51970c = str;
            this.f51971d = str2;
            this.f51972e = str3;
            this.f51973f = str4;
        }

        public static b b(Uri uri) {
            return new b(uri, new Format.b().U("0").M("application/x-mpegURL").G(), null, null, null, null);
        }

        public b a(Format format) {
            return new b(this.f51968a, format, this.f51970c, this.f51971d, this.f51972e, this.f51973f);
        }
    }

    static {
        List list = Collections.EMPTY_LIST;
        f51953n = new g("", list, list, list, list, list, list, null, list, false, Collections.EMPTY_MAP, list);
    }

    public g(String str, List list, List list2, List list3, List list4, List list5, List list6, Format format, List list7, boolean z10, Map map, List list8) {
        super(str, list, z10);
        List list9;
        this.f51954d = Collections.unmodifiableList(f(list2, list3, list4, list5, list6));
        this.f51955e = Collections.unmodifiableList(list2);
        this.f51956f = Collections.unmodifiableList(list3);
        this.f51957g = Collections.unmodifiableList(list4);
        this.f51958h = Collections.unmodifiableList(list5);
        this.f51959i = Collections.unmodifiableList(list6);
        this.f51960j = format;
        if (list7 != null) {
            list9 = Collections.unmodifiableList(list7);
        } else {
            list9 = null;
        }
        this.f51961k = list9;
        this.f51962l = Collections.unmodifiableMap(map);
        this.f51963m = Collections.unmodifiableList(list8);
    }

    private static void b(List list, List list2) {
        for (int i10 = 0; i10 < list.size(); i10++) {
            Uri uri = ((a) list.get(i10)).f51964a;
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
                    if (cVar.f45115e == i10 && cVar.f45116i == i11) {
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
            Uri uri = ((b) list.get(i10)).f51968a;
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
        String str = this.f51974a;
        List list2 = this.f51975b;
        List d10 = d(this.f51955e, 0, list);
        List list3 = Collections.EMPTY_LIST;
        return new g(str, list2, d10, list3, d(this.f51957g, 1, list), d(this.f51958h, 2, list), list3, this.f51960j, this.f51961k, this.f51976c, this.f51962l, this.f51963m);
    }
}
