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
    public static final g f52386n;

    /* renamed from: d  reason: collision with root package name */
    public final List f52387d;

    /* renamed from: e  reason: collision with root package name */
    public final List f52388e;

    /* renamed from: f  reason: collision with root package name */
    public final List f52389f;

    /* renamed from: g  reason: collision with root package name */
    public final List f52390g;

    /* renamed from: h  reason: collision with root package name */
    public final List f52391h;

    /* renamed from: i  reason: collision with root package name */
    public final List f52392i;

    /* renamed from: j  reason: collision with root package name */
    public final Format f52393j;

    /* renamed from: k  reason: collision with root package name */
    public final List f52394k;

    /* renamed from: l  reason: collision with root package name */
    public final Map f52395l;

    /* renamed from: m  reason: collision with root package name */
    public final List f52396m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final Uri f52397a;

        /* renamed from: b  reason: collision with root package name */
        public final Format f52398b;

        /* renamed from: c  reason: collision with root package name */
        public final String f52399c;

        /* renamed from: d  reason: collision with root package name */
        public final String f52400d;

        public a(Uri uri, Format format, String str, String str2) {
            this.f52397a = uri;
            this.f52398b = format;
            this.f52399c = str;
            this.f52400d = str2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final Uri f52401a;

        /* renamed from: b  reason: collision with root package name */
        public final Format f52402b;

        /* renamed from: c  reason: collision with root package name */
        public final String f52403c;

        /* renamed from: d  reason: collision with root package name */
        public final String f52404d;

        /* renamed from: e  reason: collision with root package name */
        public final String f52405e;

        /* renamed from: f  reason: collision with root package name */
        public final String f52406f;

        public b(Uri uri, Format format, String str, String str2, String str3, String str4) {
            this.f52401a = uri;
            this.f52402b = format;
            this.f52403c = str;
            this.f52404d = str2;
            this.f52405e = str3;
            this.f52406f = str4;
        }

        public static b b(Uri uri) {
            return new b(uri, new Format.b().U("0").M("application/x-mpegURL").G(), null, null, null, null);
        }

        public b a(Format format) {
            return new b(this.f52401a, format, this.f52403c, this.f52404d, this.f52405e, this.f52406f);
        }
    }

    static {
        List list = Collections.EMPTY_LIST;
        f52386n = new g("", list, list, list, list, list, list, null, list, false, Collections.EMPTY_MAP, list);
    }

    public g(String str, List list, List list2, List list3, List list4, List list5, List list6, Format format, List list7, boolean z10, Map map, List list8) {
        super(str, list, z10);
        List list9;
        this.f52387d = Collections.unmodifiableList(f(list2, list3, list4, list5, list6));
        this.f52388e = Collections.unmodifiableList(list2);
        this.f52389f = Collections.unmodifiableList(list3);
        this.f52390g = Collections.unmodifiableList(list4);
        this.f52391h = Collections.unmodifiableList(list5);
        this.f52392i = Collections.unmodifiableList(list6);
        this.f52393j = format;
        if (list7 != null) {
            list9 = Collections.unmodifiableList(list7);
        } else {
            list9 = null;
        }
        this.f52394k = list9;
        this.f52395l = Collections.unmodifiableMap(map);
        this.f52396m = Collections.unmodifiableList(list8);
    }

    private static void b(List list, List list2) {
        for (int i10 = 0; i10 < list.size(); i10++) {
            Uri uri = ((a) list.get(i10)).f52397a;
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
                    if (cVar.f45041e == i10 && cVar.f45042i == i11) {
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
            Uri uri = ((b) list.get(i10)).f52401a;
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
        String str = this.f52407a;
        List list2 = this.f52408b;
        List d10 = d(this.f52388e, 0, list);
        List list3 = Collections.EMPTY_LIST;
        return new g(str, list2, d10, list3, d(this.f52390g, 1, list), d(this.f52391h, 2, list), list3, this.f52393j, this.f52394k, this.f52409c, this.f52395l, this.f52396m);
    }
}
