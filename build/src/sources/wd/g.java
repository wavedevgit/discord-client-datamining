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
    public static final g f52829n;

    /* renamed from: d  reason: collision with root package name */
    public final List f52830d;

    /* renamed from: e  reason: collision with root package name */
    public final List f52831e;

    /* renamed from: f  reason: collision with root package name */
    public final List f52832f;

    /* renamed from: g  reason: collision with root package name */
    public final List f52833g;

    /* renamed from: h  reason: collision with root package name */
    public final List f52834h;

    /* renamed from: i  reason: collision with root package name */
    public final List f52835i;

    /* renamed from: j  reason: collision with root package name */
    public final Format f52836j;

    /* renamed from: k  reason: collision with root package name */
    public final List f52837k;

    /* renamed from: l  reason: collision with root package name */
    public final Map f52838l;

    /* renamed from: m  reason: collision with root package name */
    public final List f52839m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final Uri f52840a;

        /* renamed from: b  reason: collision with root package name */
        public final Format f52841b;

        /* renamed from: c  reason: collision with root package name */
        public final String f52842c;

        /* renamed from: d  reason: collision with root package name */
        public final String f52843d;

        public a(Uri uri, Format format, String str, String str2) {
            this.f52840a = uri;
            this.f52841b = format;
            this.f52842c = str;
            this.f52843d = str2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final Uri f52844a;

        /* renamed from: b  reason: collision with root package name */
        public final Format f52845b;

        /* renamed from: c  reason: collision with root package name */
        public final String f52846c;

        /* renamed from: d  reason: collision with root package name */
        public final String f52847d;

        /* renamed from: e  reason: collision with root package name */
        public final String f52848e;

        /* renamed from: f  reason: collision with root package name */
        public final String f52849f;

        public b(Uri uri, Format format, String str, String str2, String str3, String str4) {
            this.f52844a = uri;
            this.f52845b = format;
            this.f52846c = str;
            this.f52847d = str2;
            this.f52848e = str3;
            this.f52849f = str4;
        }

        public static b b(Uri uri) {
            return new b(uri, new Format.b().U("0").M("application/x-mpegURL").G(), null, null, null, null);
        }

        public b a(Format format) {
            return new b(this.f52844a, format, this.f52846c, this.f52847d, this.f52848e, this.f52849f);
        }
    }

    static {
        List list = Collections.EMPTY_LIST;
        f52829n = new g("", list, list, list, list, list, list, null, list, false, Collections.EMPTY_MAP, list);
    }

    public g(String str, List list, List list2, List list3, List list4, List list5, List list6, Format format, List list7, boolean z10, Map map, List list8) {
        super(str, list, z10);
        List list9;
        this.f52830d = Collections.unmodifiableList(f(list2, list3, list4, list5, list6));
        this.f52831e = Collections.unmodifiableList(list2);
        this.f52832f = Collections.unmodifiableList(list3);
        this.f52833g = Collections.unmodifiableList(list4);
        this.f52834h = Collections.unmodifiableList(list5);
        this.f52835i = Collections.unmodifiableList(list6);
        this.f52836j = format;
        if (list7 != null) {
            list9 = Collections.unmodifiableList(list7);
        } else {
            list9 = null;
        }
        this.f52837k = list9;
        this.f52838l = Collections.unmodifiableMap(map);
        this.f52839m = Collections.unmodifiableList(list8);
    }

    private static void b(List list, List list2) {
        for (int i10 = 0; i10 < list.size(); i10++) {
            Uri uri = ((a) list.get(i10)).f52840a;
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
                    if (cVar.f45003e == i10 && cVar.f45004i == i11) {
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
            Uri uri = ((b) list.get(i10)).f52844a;
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
        String str = this.f52850a;
        List list2 = this.f52851b;
        List d10 = d(this.f52831e, 0, list);
        List list3 = Collections.EMPTY_LIST;
        return new g(str, list2, d10, list3, d(this.f52833g, 1, list), d(this.f52834h, 2, list), list3, this.f52836j, this.f52837k, this.f52852c, this.f52838l, this.f52839m);
    }
}
