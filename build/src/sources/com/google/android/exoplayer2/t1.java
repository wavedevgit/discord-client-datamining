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
    private final int f13065t;

    /* renamed from: u  reason: collision with root package name */
    private final int f13066u;

    /* renamed from: v  reason: collision with root package name */
    private final int[] f13067v;

    /* renamed from: w  reason: collision with root package name */
    private final int[] f13068w;

    /* renamed from: x  reason: collision with root package name */
    private final Timeline[] f13069x;

    /* renamed from: y  reason: collision with root package name */
    private final Object[] f13070y;

    /* renamed from: z  reason: collision with root package name */
    private final HashMap f13071z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends rd.l {

        /* renamed from: r  reason: collision with root package name */
        private final Timeline.d f13072r;

        a(Timeline timeline) {
            super(timeline);
            this.f13072r = new Timeline.d();
        }

        @Override // rd.l, com.google.android.exoplayer2.Timeline
        public Timeline.b k(int i10, Timeline.b bVar, boolean z10) {
            Timeline.b k10 = super.k(i10, bVar, z10);
            if (super.r(k10.f12017i, this.f13072r).g()) {
                k10.w(bVar.f12015d, bVar.f12016e, bVar.f12017i, bVar.f12018o, bVar.f12019p, sd.c.f49740r, true);
                return k10;
            }
            k10.f12020q = true;
            return k10;
        }
    }

    public t1(Collection collection, rd.o0 o0Var) {
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
        return this.f13070y[i10];
    }

    @Override // com.google.android.exoplayer2.a
    protected int D(int i10) {
        return this.f13067v[i10];
    }

    @Override // com.google.android.exoplayer2.a
    protected int E(int i10) {
        return this.f13068w[i10];
    }

    @Override // com.google.android.exoplayer2.a
    protected Timeline H(int i10) {
        return this.f13069x[i10];
    }

    public t1 I(rd.o0 o0Var) {
        Timeline[] timelineArr = new Timeline[this.f13069x.length];
        int i10 = 0;
        while (true) {
            Timeline[] timelineArr2 = this.f13069x;
            if (i10 < timelineArr2.length) {
                timelineArr[i10] = new a(timelineArr2[i10]);
                i10++;
            } else {
                return new t1(timelineArr, this.f13070y, o0Var);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List J() {
        return Arrays.asList(this.f13069x);
    }

    @Override // com.google.android.exoplayer2.Timeline
    public int m() {
        return this.f13066u;
    }

    @Override // com.google.android.exoplayer2.Timeline
    public int t() {
        return this.f13065t;
    }

    @Override // com.google.android.exoplayer2.a
    protected int w(Object obj) {
        Integer num = (Integer) this.f13071z.get(obj);
        if (num == null) {
            return -1;
        }
        return num.intValue();
    }

    @Override // com.google.android.exoplayer2.a
    protected int x(int i10) {
        return oe.w0.h(this.f13067v, i10 + 1, false, false);
    }

    @Override // com.google.android.exoplayer2.a
    protected int y(int i10) {
        return oe.w0.h(this.f13068w, i10 + 1, false, false);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    private t1(Timeline[] timelineArr, Object[] objArr, rd.o0 o0Var) {
        super(false, o0Var);
        int i10 = 0;
        int length = timelineArr.length;
        this.f13069x = timelineArr;
        this.f13067v = new int[length];
        this.f13068w = new int[length];
        this.f13070y = objArr;
        this.f13071z = new HashMap();
        int length2 = timelineArr.length;
        int i11 = 0;
        int i12 = 0;
        int i13 = 0;
        while (i10 < length2) {
            Timeline timeline = timelineArr[i10];
            this.f13069x[i13] = timeline;
            this.f13068w[i13] = i11;
            this.f13067v[i13] = i12;
            i11 += timeline.t();
            i12 += this.f13069x[i13].m();
            this.f13071z.put(objArr[i13], Integer.valueOf(i13));
            i10++;
            i13++;
        }
        this.f13065t = i11;
        this.f13066u = i12;
    }
}
