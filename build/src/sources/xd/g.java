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
    public static final g f54552n;

    /* renamed from: d  reason: collision with root package name */
    public final List f54553d;

    /* renamed from: e  reason: collision with root package name */
    public final List f54554e;

    /* renamed from: f  reason: collision with root package name */
    public final List f54555f;

    /* renamed from: g  reason: collision with root package name */
    public final List f54556g;

    /* renamed from: h  reason: collision with root package name */
    public final List f54557h;

    /* renamed from: i  reason: collision with root package name */
    public final List f54558i;

    /* renamed from: j  reason: collision with root package name */
    public final Format f54559j;

    /* renamed from: k  reason: collision with root package name */
    public final List f54560k;

    /* renamed from: l  reason: collision with root package name */
    public final Map f54561l;

    /* renamed from: m  reason: collision with root package name */
    public final List f54562m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final Uri f54563a;

        /* renamed from: b  reason: collision with root package name */
        public final Format f54564b;

        /* renamed from: c  reason: collision with root package name */
        public final String f54565c;

        /* renamed from: d  reason: collision with root package name */
        public final String f54566d;

        public a(Uri uri, Format format, String str, String str2) {
            this.f54563a = uri;
            this.f54564b = format;
            this.f54565c = str;
            this.f54566d = str2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final Uri f54567a;

        /* renamed from: b  reason: collision with root package name */
        public final Format f54568b;

        /* renamed from: c  reason: collision with root package name */
        public final String f54569c;

        /* renamed from: d  reason: collision with root package name */
        public final String f54570d;

        /* renamed from: e  reason: collision with root package name */
        public final String f54571e;

        /* renamed from: f  reason: collision with root package name */
        public final String f54572f;

        public b(Uri uri, Format format, String str, String str2, String str3, String str4) {
            this.f54567a = uri;
            this.f54568b = format;
            this.f54569c = str;
            this.f54570d = str2;
            this.f54571e = str3;
            this.f54572f = str4;
        }

        public static b b(Uri uri) {
            return new b(uri, new Format.b().U("0").M("application/x-mpegURL").G(), null, null, null, null);
        }

        public b a(Format format) {
            return new b(this.f54567a, format, this.f54569c, this.f54570d, this.f54571e, this.f54572f);
        }
    }

    static {
        List list = Collections.EMPTY_LIST;
        f54552n = new g("", list, list, list, list, list, list, null, list, false, Collections.EMPTY_MAP, list);
    }

    public g(String str, List list, List list2, List list3, List list4, List list5, List list6, Format format, List list7, boolean z10, Map map, List list8) {
        super(str, list, z10);
        List list9;
        this.f54553d = Collections.unmodifiableList(f(list2, list3, list4, list5, list6));
        this.f54554e = Collections.unmodifiableList(list2);
        this.f54555f = Collections.unmodifiableList(list3);
        this.f54556g = Collections.unmodifiableList(list4);
        this.f54557h = Collections.unmodifiableList(list5);
        this.f54558i = Collections.unmodifiableList(list6);
        this.f54559j = format;
        if (list7 != null) {
            list9 = Collections.unmodifiableList(list7);
        } else {
            list9 = null;
        }
        this.f54560k = list9;
        this.f54561l = Collections.unmodifiableMap(map);
        this.f54562m = Collections.unmodifiableList(list8);
    }

    private static void b(List list, List list2) {
        for (int i10 = 0; i10 < list.size(); i10++) {
            Uri uri = ((a) list.get(i10)).f54563a;
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
                    if (cVar.f44031e == i10 && cVar.f44032i == i11) {
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
            Uri uri = ((b) list.get(i10)).f54567a;
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
        String str = this.f54573a;
        List list2 = this.f54574b;
        List d10 = d(this.f54554e, 0, list);
        List list3 = Collections.EMPTY_LIST;
        return new g(str, list2, d10, list3, d(this.f54556g, 1, list), d(this.f54557h, 2, list), list3, this.f54559j, this.f54560k, this.f54575c, this.f54561l, this.f54562m);
    }
}
