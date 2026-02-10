package vd;

import android.net.Uri;
import com.google.android.exoplayer2.Format;
import java.util.Collections;
import java.util.List;
import oi.s;
import vd.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class j {

    /* renamed from: a  reason: collision with root package name */
    public final long f52274a;

    /* renamed from: b  reason: collision with root package name */
    public final Format f52275b;

    /* renamed from: c  reason: collision with root package name */
    public final s f52276c;

    /* renamed from: d  reason: collision with root package name */
    public final long f52277d;

    /* renamed from: e  reason: collision with root package name */
    public final List f52278e;

    /* renamed from: f  reason: collision with root package name */
    public final List f52279f;

    /* renamed from: g  reason: collision with root package name */
    public final List f52280g;

    /* renamed from: h  reason: collision with root package name */
    private final i f52281h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c extends j {

        /* renamed from: i  reason: collision with root package name */
        public final Uri f52283i;

        /* renamed from: j  reason: collision with root package name */
        public final long f52284j;

        /* renamed from: k  reason: collision with root package name */
        private final String f52285k;

        /* renamed from: l  reason: collision with root package name */
        private final i f52286l;

        /* renamed from: m  reason: collision with root package name */
        private final m f52287m;

        public c(long j10, Format format, List list, k.e eVar, List list2, List list3, List list4, String str, long j11) {
            super(j10, format, list, eVar, list2, list3, list4);
            m mVar;
            this.f52283i = Uri.parse(((vd.b) list.get(0)).f52221a);
            i c10 = eVar.c();
            this.f52286l = c10;
            this.f52285k = str;
            this.f52284j = j11;
            if (c10 != null) {
                mVar = null;
            } else {
                mVar = new m(new i(null, 0L, j11));
            }
            this.f52287m = mVar;
        }

        @Override // vd.j
        public String k() {
            return this.f52285k;
        }

        @Override // vd.j
        public ud.f l() {
            return this.f52287m;
        }

        @Override // vd.j
        public i m() {
            return this.f52286l;
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
        return this.f52281h;
    }

    private j(long j10, Format format, List list, k kVar, List list2, List list3, List list4) {
        List unmodifiableList;
        oe.a.a(!list.isEmpty());
        this.f52274a = j10;
        this.f52275b = format;
        this.f52276c = s.o(list);
        if (list2 == null) {
            unmodifiableList = Collections.EMPTY_LIST;
        } else {
            unmodifiableList = Collections.unmodifiableList(list2);
        }
        this.f52278e = unmodifiableList;
        this.f52279f = list3;
        this.f52280g = list4;
        this.f52281h = kVar.a(this);
        this.f52277d = kVar.b();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b extends j implements ud.f {

        /* renamed from: i  reason: collision with root package name */
        final k.a f52282i;

        public b(long j10, Format format, List list, k.a aVar, List list2, List list3, List list4) {
            super(j10, format, list, aVar, list2, list3, list4);
            this.f52282i = aVar;
        }

        @Override // ud.f
        public long a(long j10, long j11) {
            return this.f52282i.h(j10, j11);
        }

        @Override // ud.f
        public long b(long j10) {
            return this.f52282i.j(j10);
        }

        @Override // ud.f
        public long c(long j10, long j11) {
            return this.f52282i.d(j10, j11);
        }

        @Override // ud.f
        public long d(long j10, long j11) {
            return this.f52282i.f(j10, j11);
        }

        @Override // ud.f
        public i e(long j10) {
            return this.f52282i.k(this, j10);
        }

        @Override // ud.f
        public long f(long j10, long j11) {
            return this.f52282i.i(j10, j11);
        }

        @Override // ud.f
        public long g(long j10) {
            return this.f52282i.g(j10);
        }

        @Override // ud.f
        public boolean h() {
            return this.f52282i.l();
        }

        @Override // ud.f
        public long i() {
            return this.f52282i.e();
        }

        @Override // ud.f
        public long j(long j10, long j11) {
            return this.f52282i.c(j10, j11);
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
