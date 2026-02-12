package com.google.android.exoplayer2.trackselection;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.Timeline;
import java.util.List;
import ke.l;
import oe.y;
import rd.r;
import rd.u0;
import td.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface g extends l {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final u0 f13819a;

        /* renamed from: b  reason: collision with root package name */
        public final int[] f13820b;

        /* renamed from: c  reason: collision with root package name */
        public final int f13821c;

        public a(u0 u0Var, int... iArr) {
            this(u0Var, iArr, 0);
        }

        public a(u0 u0Var, int[] iArr, int i10) {
            if (iArr.length == 0) {
                y.d("ETSDefinition", "Empty tracks are not allowed", new IllegalArgumentException());
            }
            this.f13819a = u0Var;
            this.f13820b = iArr;
            this.f13821c = i10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        g[] a(a[] aVarArr, me.e eVar, r.b bVar, Timeline timeline);
    }

    boolean a(int i10, long j10);

    int b();

    void disable();

    void e(long j10, long j11, long j12, List list, o[] oVarArr);

    void enable();

    boolean f(int i10, long j10);

    void g(float f10);

    Object h();

    default void i() {
    }

    default boolean k(long j10, td.f fVar, List list) {
        return false;
    }

    default void m(boolean z10) {
    }

    int n(long j10, List list);

    int p();

    Format q();

    int r();

    default void s() {
    }
}
