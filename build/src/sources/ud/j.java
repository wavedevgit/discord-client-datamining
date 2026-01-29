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
    public final long f50197a;

    /* renamed from: b  reason: collision with root package name */
    public final Format f50198b;

    /* renamed from: c  reason: collision with root package name */
    public final s f50199c;

    /* renamed from: d  reason: collision with root package name */
    public final long f50200d;

    /* renamed from: e  reason: collision with root package name */
    public final List f50201e;

    /* renamed from: f  reason: collision with root package name */
    public final List f50202f;

    /* renamed from: g  reason: collision with root package name */
    public final List f50203g;

    /* renamed from: h  reason: collision with root package name */
    private final i f50204h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c extends j {

        /* renamed from: i  reason: collision with root package name */
        public final Uri f50206i;

        /* renamed from: j  reason: collision with root package name */
        public final long f50207j;

        /* renamed from: k  reason: collision with root package name */
        private final String f50208k;

        /* renamed from: l  reason: collision with root package name */
        private final i f50209l;

        /* renamed from: m  reason: collision with root package name */
        private final m f50210m;

        public c(long j10, Format format, List list, k.e eVar, List list2, List list3, List list4, String str, long j11) {
            super(j10, format, list, eVar, list2, list3, list4);
            m mVar;
            this.f50206i = Uri.parse(((ud.b) list.get(0)).f50144a);
            i c10 = eVar.c();
            this.f50209l = c10;
            this.f50208k = str;
            this.f50207j = j11;
            if (c10 != null) {
                mVar = null;
            } else {
                mVar = new m(new i(null, 0L, j11));
            }
            this.f50210m = mVar;
        }

        @Override // ud.j
        public String k() {
            return this.f50208k;
        }

        @Override // ud.j
        public td.f l() {
            return this.f50210m;
        }

        @Override // ud.j
        public i m() {
            return this.f50209l;
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
        return this.f50204h;
    }

    private j(long j10, Format format, List list, k kVar, List list2, List list3, List list4) {
        List unmodifiableList;
        ne.a.a(!list.isEmpty());
        this.f50197a = j10;
        this.f50198b = format;
        this.f50199c = s.m(list);
        if (list2 == null) {
            unmodifiableList = Collections.EMPTY_LIST;
        } else {
            unmodifiableList = Collections.unmodifiableList(list2);
        }
        this.f50201e = unmodifiableList;
        this.f50202f = list3;
        this.f50203g = list4;
        this.f50204h = kVar.a(this);
        this.f50200d = kVar.b();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b extends j implements td.f {

        /* renamed from: i  reason: collision with root package name */
        final k.a f50205i;

        public b(long j10, Format format, List list, k.a aVar, List list2, List list3, List list4) {
            super(j10, format, list, aVar, list2, list3, list4);
            this.f50205i = aVar;
        }

        @Override // td.f
        public long a(long j10, long j11) {
            return this.f50205i.h(j10, j11);
        }

        @Override // td.f
        public long b(long j10) {
            return this.f50205i.j(j10);
        }

        @Override // td.f
        public long c(long j10, long j11) {
            return this.f50205i.d(j10, j11);
        }

        @Override // td.f
        public long d(long j10, long j11) {
            return this.f50205i.f(j10, j11);
        }

        @Override // td.f
        public i e(long j10) {
            return this.f50205i.k(this, j10);
        }

        @Override // td.f
        public long f(long j10, long j11) {
            return this.f50205i.i(j10, j11);
        }

        @Override // td.f
        public long g(long j10) {
            return this.f50205i.g(j10);
        }

        @Override // td.f
        public boolean h() {
            return this.f50205i.l();
        }

        @Override // td.f
        public long i() {
            return this.f50205i.e();
        }

        @Override // td.f
        public long j(long j10, long j11) {
            return this.f50205i.c(j10, j11);
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
