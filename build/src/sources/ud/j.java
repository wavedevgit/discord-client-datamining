package ud;

import android.net.Uri;
import com.google.android.exoplayer2.Format;
import java.util.Collections;
import java.util.List;
import ji.s;
import ud.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class j {

    /* renamed from: a  reason: collision with root package name */
    public final long f50269a;

    /* renamed from: b  reason: collision with root package name */
    public final Format f50270b;

    /* renamed from: c  reason: collision with root package name */
    public final s f50271c;

    /* renamed from: d  reason: collision with root package name */
    public final long f50272d;

    /* renamed from: e  reason: collision with root package name */
    public final List f50273e;

    /* renamed from: f  reason: collision with root package name */
    public final List f50274f;

    /* renamed from: g  reason: collision with root package name */
    public final List f50275g;

    /* renamed from: h  reason: collision with root package name */
    private final i f50276h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c extends j {

        /* renamed from: i  reason: collision with root package name */
        public final Uri f50278i;

        /* renamed from: j  reason: collision with root package name */
        public final long f50279j;

        /* renamed from: k  reason: collision with root package name */
        private final String f50280k;

        /* renamed from: l  reason: collision with root package name */
        private final i f50281l;

        /* renamed from: m  reason: collision with root package name */
        private final m f50282m;

        public c(long j10, Format format, List list, k.e eVar, List list2, List list3, List list4, String str, long j11) {
            super(j10, format, list, eVar, list2, list3, list4);
            m mVar;
            this.f50278i = Uri.parse(((ud.b) list.get(0)).f50216a);
            i c10 = eVar.c();
            this.f50281l = c10;
            this.f50280k = str;
            this.f50279j = j11;
            if (c10 != null) {
                mVar = null;
            } else {
                mVar = new m(new i(null, 0L, j11));
            }
            this.f50282m = mVar;
        }

        @Override // ud.j
        public String k() {
            return this.f50280k;
        }

        @Override // ud.j
        public td.f l() {
            return this.f50282m;
        }

        @Override // ud.j
        public i m() {
            return this.f50281l;
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

    public abstract td.f l();

    public abstract i m();

    public i n() {
        return this.f50276h;
    }

    private j(long j10, Format format, List list, k kVar, List list2, List list3, List list4) {
        List unmodifiableList;
        ne.a.a(!list.isEmpty());
        this.f50269a = j10;
        this.f50270b = format;
        this.f50271c = s.m(list);
        if (list2 == null) {
            unmodifiableList = Collections.EMPTY_LIST;
        } else {
            unmodifiableList = Collections.unmodifiableList(list2);
        }
        this.f50273e = unmodifiableList;
        this.f50274f = list3;
        this.f50275g = list4;
        this.f50276h = kVar.a(this);
        this.f50272d = kVar.b();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b extends j implements td.f {

        /* renamed from: i  reason: collision with root package name */
        final k.a f50277i;

        public b(long j10, Format format, List list, k.a aVar, List list2, List list3, List list4) {
            super(j10, format, list, aVar, list2, list3, list4);
            this.f50277i = aVar;
        }

        @Override // td.f
        public long a(long j10, long j11) {
            return this.f50277i.h(j10, j11);
        }

        @Override // td.f
        public long b(long j10) {
            return this.f50277i.j(j10);
        }

        @Override // td.f
        public long c(long j10, long j11) {
            return this.f50277i.d(j10, j11);
        }

        @Override // td.f
        public long d(long j10, long j11) {
            return this.f50277i.f(j10, j11);
        }

        @Override // td.f
        public i e(long j10) {
            return this.f50277i.k(this, j10);
        }

        @Override // td.f
        public long f(long j10, long j11) {
            return this.f50277i.i(j10, j11);
        }

        @Override // td.f
        public long g(long j10) {
            return this.f50277i.g(j10);
        }

        @Override // td.f
        public boolean h() {
            return this.f50277i.l();
        }

        @Override // td.f
        public long i() {
            return this.f50277i.e();
        }

        @Override // td.f
        public long j(long j10, long j11) {
            return this.f50277i.c(j10, j11);
        }

        @Override // ud.j
        public String k() {
            return null;
        }

        @Override // ud.j
        public i m() {
            return null;
        }

        @Override // ud.j
        public td.f l() {
            return this;
        }
    }
}
