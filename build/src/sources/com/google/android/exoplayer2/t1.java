package com.google.android.exoplayer2;

import com.google.android.exoplayer2.Timeline;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class t1 extends com.google.android.exoplayer2.a {

    /* renamed from: t  reason: collision with root package name */
    private final int f12579t;

    /* renamed from: u  reason: collision with root package name */
    private final int f12580u;

    /* renamed from: v  reason: collision with root package name */
    private final int[] f12581v;

    /* renamed from: w  reason: collision with root package name */
    private final int[] f12582w;

    /* renamed from: x  reason: collision with root package name */
    private final Timeline[] f12583x;

    /* renamed from: y  reason: collision with root package name */
    private final Object[] f12584y;

    /* renamed from: z  reason: collision with root package name */
    private final HashMap f12585z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends qd.l {

        /* renamed from: r  reason: collision with root package name */
        private final Timeline.d f12586r;

        a(Timeline timeline) {
            super(timeline);
            this.f12586r = new Timeline.d();
        }

        @Override // qd.l, com.google.android.exoplayer2.Timeline
        public Timeline.b k(int i10, Timeline.b bVar, boolean z10) {
            Timeline.b k10 = super.k(i10, bVar, z10);
            if (super.r(k10.f11593i, this.f12586r).g()) {
                k10.w(bVar.f11591d, bVar.f11592e, bVar.f11593i, bVar.f11594o, bVar.f11595p, rd.c.f48776r, true);
                return k10;
            }
            k10.f11596q = true;
            return k10;
        }
    }

    public t1(Collection collection, qd.o0 o0Var) {
        this(K(collection), L(collection), o0Var);
    }

    private static Timeline[] K(Collection collection) {
        Timeline[] timelineArr = new Timeline[collection.size()];
        Iterator it = collection.iterator();
        int i10 = 0;
        while (it.hasNext()) {
            timelineArr[i10] = ((a1) it.next()).b();
            i10++;
        }
        return timelineArr;
    }

    private static Object[] L(Collection collection) {
        Object[] objArr = new Object[collection.size()];
        Iterator it = collection.iterator();
        int i10 = 0;
        while (it.hasNext()) {
            objArr[i10] = ((a1) it.next()).a();
            i10++;
        }
        return objArr;
    }

    @Override // com.google.android.exoplayer2.a
    protected Object B(int i10) {
        return this.f12584y[i10];
    }

    @Override // com.google.android.exoplayer2.a
    protected int D(int i10) {
        return this.f12581v[i10];
    }

    @Override // com.google.android.exoplayer2.a
    protected int E(int i10) {
        return this.f12582w[i10];
    }

    @Override // com.google.android.exoplayer2.a
    protected Timeline H(int i10) {
        return this.f12583x[i10];
    }

    public t1 I(qd.o0 o0Var) {
        Timeline[] timelineArr = new Timeline[this.f12583x.length];
        int i10 = 0;
        while (true) {
            Timeline[] timelineArr2 = this.f12583x;
            if (i10 < timelineArr2.length) {
                timelineArr[i10] = new a(timelineArr2[i10]);
                i10++;
            } else {
                return new t1(timelineArr, this.f12584y, o0Var);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List J() {
        return Arrays.asList(this.f12583x);
    }

    @Override // com.google.android.exoplayer2.Timeline
    public int m() {
        return this.f12580u;
    }

    @Override // com.google.android.exoplayer2.Timeline
    public int t() {
        return this.f12579t;
    }

    @Override // com.google.android.exoplayer2.a
    protected int w(Object obj) {
        Integer num = (Integer) this.f12585z.get(obj);
        if (num == null) {
            return -1;
        }
        return num.intValue();
    }

    @Override // com.google.android.exoplayer2.a
    protected int x(int i10) {
        return ne.w0.h(this.f12581v, i10 + 1, false, false);
    }

    @Override // com.google.android.exoplayer2.a
    protected int y(int i10) {
        return ne.w0.h(this.f12582w, i10 + 1, false, false);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    private t1(Timeline[] timelineArr, Object[] objArr, qd.o0 o0Var) {
        super(false, o0Var);
        int i10 = 0;
        int length = timelineArr.length;
        this.f12583x = timelineArr;
        this.f12581v = new int[length];
        this.f12582w = new int[length];
        this.f12584y = objArr;
        this.f12585z = new HashMap();
        int length2 = timelineArr.length;
        int i11 = 0;
        int i12 = 0;
        int i13 = 0;
        while (i10 < length2) {
            Timeline timeline = timelineArr[i10];
            this.f12583x[i13] = timeline;
            this.f12582w[i13] = i11;
            this.f12581v[i13] = i12;
            i11 += timeline.t();
            i12 += this.f12583x[i13].m();
            this.f12585z.put(objArr[i13], Integer.valueOf(i13));
            i10++;
            i13++;
        }
        this.f12579t = i11;
        this.f12580u = i12;
    }
}
