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
    public static final g f55120n;

    /* renamed from: d  reason: collision with root package name */
    public final List f55121d;

    /* renamed from: e  reason: collision with root package name */
    public final List f55122e;

    /* renamed from: f  reason: collision with root package name */
    public final List f55123f;

    /* renamed from: g  reason: collision with root package name */
    public final List f55124g;

    /* renamed from: h  reason: collision with root package name */
    public final List f55125h;

    /* renamed from: i  reason: collision with root package name */
    public final List f55126i;

    /* renamed from: j  reason: collision with root package name */
    public final Format f55127j;

    /* renamed from: k  reason: collision with root package name */
    public final List f55128k;

    /* renamed from: l  reason: collision with root package name */
    public final Map f55129l;

    /* renamed from: m  reason: collision with root package name */
    public final List f55130m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final Uri f55131a;

        /* renamed from: b  reason: collision with root package name */
        public final Format f55132b;

        /* renamed from: c  reason: collision with root package name */
        public final String f55133c;

        /* renamed from: d  reason: collision with root package name */
        public final String f55134d;

        public a(Uri uri, Format format, String str, String str2) {
            this.f55131a = uri;
            this.f55132b = format;
            this.f55133c = str;
            this.f55134d = str2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final Uri f55135a;

        /* renamed from: b  reason: collision with root package name */
        public final Format f55136b;

        /* renamed from: c  reason: collision with root package name */
        public final String f55137c;

        /* renamed from: d  reason: collision with root package name */
        public final String f55138d;

        /* renamed from: e  reason: collision with root package name */
        public final String f55139e;

        /* renamed from: f  reason: collision with root package name */
        public final String f55140f;

        public b(Uri uri, Format format, String str, String str2, String str3, String str4) {
            this.f55135a = uri;
            this.f55136b = format;
            this.f55137c = str;
            this.f55138d = str2;
            this.f55139e = str3;
            this.f55140f = str4;
        }

        public static b b(Uri uri) {
            return new b(uri, new Format.b().U("0").M("application/x-mpegURL").G(), null, null, null, null);
        }

        public b a(Format format) {
            return new b(this.f55135a, format, this.f55137c, this.f55138d, this.f55139e, this.f55140f);
        }
    }

    static {
        List list = Collections.EMPTY_LIST;
        f55120n = new g("", list, list, list, list, list, list, null, list, false, Collections.EMPTY_MAP, list);
    }

    public g(String str, List list, List list2, List list3, List list4, List list5, List list6, Format format, List list7, boolean z10, Map map, List list8) {
        super(str, list, z10);
        List list9;
        this.f55121d = Collections.unmodifiableList(f(list2, list3, list4, list5, list6));
        this.f55122e = Collections.unmodifiableList(list2);
        this.f55123f = Collections.unmodifiableList(list3);
        this.f55124g = Collections.unmodifiableList(list4);
        this.f55125h = Collections.unmodifiableList(list5);
        this.f55126i = Collections.unmodifiableList(list6);
        this.f55127j = format;
        if (list7 != null) {
            list9 = Collections.unmodifiableList(list7);
        } else {
            list9 = null;
        }
        this.f55128k = list9;
        this.f55129l = Collections.unmodifiableMap(map);
        this.f55130m = Collections.unmodifiableList(list8);
    }

    private static void b(List list, List list2) {
        for (int i10 = 0; i10 < list.size(); i10++) {
            Uri uri = ((a) list.get(i10)).f55131a;
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
                    if (cVar.f44599e == i10 && cVar.f44600i == i11) {
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
            Uri uri = ((b) list.get(i10)).f55135a;
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
        String str = this.f55141a;
        List list2 = this.f55142b;
        List d10 = d(this.f55122e, 0, list);
        List list3 = Collections.EMPTY_LIST;
        return new g(str, list2, d10, list3, d(this.f55124g, 1, list), d(this.f55125h, 2, list), list3, this.f55127j, this.f55128k, this.f55143c, this.f55129l, this.f55130m);
    }
}
