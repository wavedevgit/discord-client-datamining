package vd;

import android.net.Uri;
import com.google.android.exoplayer2.Format;
import java.util.Collections;
import java.util.List;
import qi.s;
import vd.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class j {

    /* renamed from: a  reason: collision with root package name */
    public final long f52085a;

    /* renamed from: b  reason: collision with root package name */
    public final Format f52086b;

    /* renamed from: c  reason: collision with root package name */
    public final s f52087c;

    /* renamed from: d  reason: collision with root package name */
    public final long f52088d;

    /* renamed from: e  reason: collision with root package name */
    public final List f52089e;

    /* renamed from: f  reason: collision with root package name */
    public final List f52090f;

    /* renamed from: g  reason: collision with root package name */
    public final List f52091g;

    /* renamed from: h  reason: collision with root package name */
    private final i f52092h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c extends j {

        /* renamed from: i  reason: collision with root package name */
        public final Uri f52094i;

        /* renamed from: j  reason: collision with root package name */
        public final long f52095j;

        /* renamed from: k  reason: collision with root package name */
        private final String f52096k;

        /* renamed from: l  reason: collision with root package name */
        private final i f52097l;

        /* renamed from: m  reason: collision with root package name */
        private final m f52098m;

        public c(long j10, Format format, List list, k.e eVar, List list2, List list3, List list4, String str, long j11) {
            super(j10, format, list, eVar, list2, list3, list4);
            m mVar;
            this.f52094i = Uri.parse(((vd.b) list.get(0)).f52032a);
            i c10 = eVar.c();
            this.f52097l = c10;
            this.f52096k = str;
            this.f52095j = j11;
            if (c10 != null) {
                mVar = null;
            } else {
                mVar = new m(new i(null, 0L, j11));
            }
            this.f52098m = mVar;
        }

        @Override // vd.j
        public String k() {
            return this.f52096k;
        }

        @Override // vd.j
        public ud.f l() {
            return this.f52098m;
        }

        @Override // vd.j
        public i m() {
            return this.f52097l;
        }
    }

    public static j o(long j10, Format format, List list, k kVar, List list2, List list3, List list4, String str) {
        if (kVar instanceof k.e) {
            return new c(j10, format, list, (k.e) kVar, list2, list3, list4, str, -1L);
        }
        if (kVar instanceof k.a) {
            return new b(j10, format, list, (k.a) kVar, list2, list3, list4);
        }
        throw new IllegalArgumentException("segmentBase must be of type SingleSegmentBase or MultiSegmentBase");
    }

    public abstract String k();

    public abstract ud.f l();

    public abstract i m();

    public i n() {
        return this.f52092h;
    }

    private j(long j10, Format format, List list, k kVar, List list2, List list3, List list4) {
        List unmodifiableList;
        oe.a.a(!list.isEmpty());
        this.f52085a = j10;
        this.f52086b = format;
        this.f52087c = s.o(list);
        if (list2 == null) {
            unmodifiableList = Collections.EMPTY_LIST;
        } else {
            unmodifiableList = Collections.unmodifiableList(list2);
        }
        this.f52089e = unmodifiableList;
        this.f52090f = list3;
        this.f52091g = list4;
        this.f52092h = kVar.a(this);
        this.f52088d = kVar.b();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b extends j implements ud.f {

        /* renamed from: i  reason: collision with root package name */
        final k.a f52093i;

        public b(long j10, Format format, List list, k.a aVar, List list2, List list3, List list4) {
            super(j10, format, list, aVar, list2, list3, list4);
            this.f52093i = aVar;
        }

        @Override // ud.f
        public long a(long j10, long j11) {
            return this.f52093i.h(j10, j11);
        }

        @Override // ud.f
        public long b(long j10) {
            return this.f52093i.j(j10);
        }

        @Override // ud.f
        public long c(long j10, long j11) {
            return this.f52093i.d(j10, j11);
        }

        @Override // ud.f
        public long d(long j10, long j11) {
            return this.f52093i.f(j10, j11);
        }

        @Override // ud.f
        public i e(long j10) {
            return this.f52093i.k(this, j10);
        }

        @Override // ud.f
        public long f(long j10, long j11) {
            return this.f52093i.i(j10, j11);
        }

        @Override // ud.f
        public long g(long j10) {
            return this.f52093i.g(j10);
        }

        @Override // ud.f
        public boolean h() {
            return this.f52093i.l();
        }

        @Override // ud.f
        public long i() {
            return this.f52093i.e();
        }

        @Override // ud.f
        public long j(long j10, long j11) {
            return this.f52093i.c(j10, j11);
        }

        @Override // vd.j
        public String k() {
            return null;
        }

        @Override // vd.j
        public i m() {
            return null;
        }

        @Override // vd.j
        public ud.f l() {
            return this;
        }
    }
}
