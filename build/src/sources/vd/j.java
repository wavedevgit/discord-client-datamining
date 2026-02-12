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
    public final long f51517a;

    /* renamed from: b  reason: collision with root package name */
    public final Format f51518b;

    /* renamed from: c  reason: collision with root package name */
    public final s f51519c;

    /* renamed from: d  reason: collision with root package name */
    public final long f51520d;

    /* renamed from: e  reason: collision with root package name */
    public final List f51521e;

    /* renamed from: f  reason: collision with root package name */
    public final List f51522f;

    /* renamed from: g  reason: collision with root package name */
    public final List f51523g;

    /* renamed from: h  reason: collision with root package name */
    private final i f51524h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c extends j {

        /* renamed from: i  reason: collision with root package name */
        public final Uri f51526i;

        /* renamed from: j  reason: collision with root package name */
        public final long f51527j;

        /* renamed from: k  reason: collision with root package name */
        private final String f51528k;

        /* renamed from: l  reason: collision with root package name */
        private final i f51529l;

        /* renamed from: m  reason: collision with root package name */
        private final m f51530m;

        public c(long j10, Format format, List list, k.e eVar, List list2, List list3, List list4, String str, long j11) {
            super(j10, format, list, eVar, list2, list3, list4);
            m mVar;
            this.f51526i = Uri.parse(((vd.b) list.get(0)).f51464a);
            i c10 = eVar.c();
            this.f51529l = c10;
            this.f51528k = str;
            this.f51527j = j11;
            if (c10 != null) {
                mVar = null;
            } else {
                mVar = new m(new i(null, 0L, j11));
            }
            this.f51530m = mVar;
        }

        @Override // vd.j
        public String k() {
            return this.f51528k;
        }

        @Override // vd.j
        public ud.f l() {
            return this.f51530m;
        }

        @Override // vd.j
        public i m() {
            return this.f51529l;
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
        return this.f51524h;
    }

    private j(long j10, Format format, List list, k kVar, List list2, List list3, List list4) {
        List unmodifiableList;
        oe.a.a(!list.isEmpty());
        this.f51517a = j10;
        this.f51518b = format;
        this.f51519c = s.o(list);
        if (list2 == null) {
            unmodifiableList = Collections.EMPTY_LIST;
        } else {
            unmodifiableList = Collections.unmodifiableList(list2);
        }
        this.f51521e = unmodifiableList;
        this.f51522f = list3;
        this.f51523g = list4;
        this.f51524h = kVar.a(this);
        this.f51520d = kVar.b();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b extends j implements ud.f {

        /* renamed from: i  reason: collision with root package name */
        final k.a f51525i;

        public b(long j10, Format format, List list, k.a aVar, List list2, List list3, List list4) {
            super(j10, format, list, aVar, list2, list3, list4);
            this.f51525i = aVar;
        }

        @Override // ud.f
        public long a(long j10, long j11) {
            return this.f51525i.h(j10, j11);
        }

        @Override // ud.f
        public long b(long j10) {
            return this.f51525i.j(j10);
        }

        @Override // ud.f
        public long c(long j10, long j11) {
            return this.f51525i.d(j10, j11);
        }

        @Override // ud.f
        public long d(long j10, long j11) {
            return this.f51525i.f(j10, j11);
        }

        @Override // ud.f
        public i e(long j10) {
            return this.f51525i.k(this, j10);
        }

        @Override // ud.f
        public long f(long j10, long j11) {
            return this.f51525i.i(j10, j11);
        }

        @Override // ud.f
        public long g(long j10) {
            return this.f51525i.g(j10);
        }

        @Override // ud.f
        public boolean h() {
            return this.f51525i.l();
        }

        @Override // ud.f
        public long i() {
            return this.f51525i.e();
        }

        @Override // ud.f
        public long j(long j10, long j11) {
            return this.f51525i.c(j10, j11);
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
