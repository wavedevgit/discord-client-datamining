package xd;

import android.net.Uri;
import com.google.android.exoplayer2.Format;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g extends h {

    /* renamed from: n  reason: collision with root package name */
    public static final g f54819n;

    /* renamed from: d  reason: collision with root package name */
    public final List f54820d;

    /* renamed from: e  reason: collision with root package name */
    public final List f54821e;

    /* renamed from: f  reason: collision with root package name */
    public final List f54822f;

    /* renamed from: g  reason: collision with root package name */
    public final List f54823g;

    /* renamed from: h  reason: collision with root package name */
    public final List f54824h;

    /* renamed from: i  reason: collision with root package name */
    public final List f54825i;

    /* renamed from: j  reason: collision with root package name */
    public final Format f54826j;

    /* renamed from: k  reason: collision with root package name */
    public final List f54827k;

    /* renamed from: l  reason: collision with root package name */
    public final Map f54828l;

    /* renamed from: m  reason: collision with root package name */
    public final List f54829m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final Uri f54830a;

        /* renamed from: b  reason: collision with root package name */
        public final Format f54831b;

        /* renamed from: c  reason: collision with root package name */
        public final String f54832c;

        /* renamed from: d  reason: collision with root package name */
        public final String f54833d;

        public a(Uri uri, Format format, String str, String str2) {
            this.f54830a = uri;
            this.f54831b = format;
            this.f54832c = str;
            this.f54833d = str2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final Uri f54834a;

        /* renamed from: b  reason: collision with root package name */
        public final Format f54835b;

        /* renamed from: c  reason: collision with root package name */
        public final String f54836c;

        /* renamed from: d  reason: collision with root package name */
        public final String f54837d;

        /* renamed from: e  reason: collision with root package name */
        public final String f54838e;

        /* renamed from: f  reason: collision with root package name */
        public final String f54839f;

        public b(Uri uri, Format format, String str, String str2, String str3, String str4) {
            this.f54834a = uri;
            this.f54835b = format;
            this.f54836c = str;
            this.f54837d = str2;
            this.f54838e = str3;
            this.f54839f = str4;
        }

        public static b b(Uri uri) {
            return new b(uri, new Format.b().U("0").M("application/x-mpegURL").G(), null, null, null, null);
        }

        public b a(Format format) {
            return new b(this.f54834a, format, this.f54836c, this.f54837d, this.f54838e, this.f54839f);
        }
    }

    static {
        List list = Collections.EMPTY_LIST;
        f54819n = new g("", list, list, list, list, list, list, null, list, false, Collections.EMPTY_MAP, list);
    }

    public g(String str, List list, List list2, List list3, List list4, List list5, List list6, Format format, List list7, boolean z10, Map map, List list8) {
        super(str, list, z10);
        List list9;
        this.f54820d = Collections.unmodifiableList(f(list2, list3, list4, list5, list6));
        this.f54821e = Collections.unmodifiableList(list2);
        this.f54822f = Collections.unmodifiableList(list3);
        this.f54823g = Collections.unmodifiableList(list4);
        this.f54824h = Collections.unmodifiableList(list5);
        this.f54825i = Collections.unmodifiableList(list6);
        this.f54826j = format;
        if (list7 != null) {
            list9 = Collections.unmodifiableList(list7);
        } else {
            list9 = null;
        }
        this.f54827k = list9;
        this.f54828l = Collections.unmodifiableMap(map);
        this.f54829m = Collections.unmodifiableList(list8);
    }

    private static void b(List list, List list2) {
        for (int i10 = 0; i10 < list.size(); i10++) {
            Uri uri = ((a) list.get(i10)).f54830a;
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
                    qd.c cVar = (qd.c) list2.get(i12);
                    if (cVar.f45362e == i10 && cVar.f45363i == i11) {
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
            Uri uri = ((b) list.get(i10)).f54834a;
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

    @Override // qd.a
    /* renamed from: c */
    public g a(List list) {
        String str = this.f54840a;
        List list2 = this.f54841b;
        List d10 = d(this.f54821e, 0, list);
        List list3 = Collections.EMPTY_LIST;
        return new g(str, list2, d10, list3, d(this.f54823g, 1, list), d(this.f54824h, 2, list), list3, this.f54826j, this.f54827k, this.f54842c, this.f54828l, this.f54829m);
    }
}
