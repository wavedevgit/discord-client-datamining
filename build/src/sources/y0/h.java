package y0;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.ArrayList;
import java.util.Iterator;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h implements Iterable, KMappedMarker {

    /* renamed from: p  reason: collision with root package name */
    public static final a f53605p = new a(null);

    /* renamed from: q  reason: collision with root package name */
    private static final h f53606q = new h(0, 0, 0, null);

    /* renamed from: d  reason: collision with root package name */
    private final long f53607d;

    /* renamed from: e  reason: collision with root package name */
    private final long f53608e;

    /* renamed from: i  reason: collision with root package name */
    private final long f53609i;

    /* renamed from: o  reason: collision with root package name */
    private final long[] f53610o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final h a() {
            return h.f53606q;
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class b extends kotlin.coroutines.jvm.internal.j implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f53611d;

        /* renamed from: e  reason: collision with root package name */
        int f53612e;

        /* renamed from: i  reason: collision with root package name */
        int f53613i;

        /* renamed from: o  reason: collision with root package name */
        int f53614o;

        /* renamed from: p  reason: collision with root package name */
        private /* synthetic */ Object f53615p;

        b(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            b bVar = new b(continuation);
            bVar.f53615p = obj;
            return bVar;
        }

        /* JADX WARN: Code restructure failed: missing block: B:17:0x0079, code lost:
            if (r15.b(r4, r20) == r1) goto L14;
         */
        /* JADX WARN: Code restructure failed: missing block: B:28:0x00b5, code lost:
            if (r13.b(r4, r20) == r1) goto L14;
         */
        /* JADX WARN: Removed duplicated region for block: B:16:0x0063  */
        /* JADX WARN: Removed duplicated region for block: B:20:0x007f  */
        /* JADX WARN: Removed duplicated region for block: B:23:0x008c  */
        /* JADX WARN: Removed duplicated region for block: B:25:0x0090  */
        /* JADX WARN: Removed duplicated region for block: B:31:0x00ba  */
        /* JADX WARN: Removed duplicated region for block: B:34:0x00c5  */
        /* JADX WARN: Removed duplicated region for block: B:36:0x00c8  */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:17:0x0079 -> B:19:0x007d). Please submit an issue!!! */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:26:0x009b -> B:30:0x00b8). Please submit an issue!!! */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:28:0x00b5 -> B:30:0x00b8). Please submit an issue!!! */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:37:0x00d3 -> B:43:0x00f4). Please submit an issue!!! */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:41:0x00f2 -> B:42:0x00f3). Please submit an issue!!! */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r21) {
            /*
                Method dump skipped, instructions count: 249
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: y0.h.b.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(kotlin.sequences.j jVar, Continuation continuation) {
            return ((b) create(jVar, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    private h(long j10, long j11, long j12, long[] jArr) {
        this.f53607d = j10;
        this.f53608e = j11;
        this.f53609i = j12;
        this.f53610o = jArr;
    }

    public final boolean g(long j10) {
        long[] jArr;
        long j11 = j10 - this.f53609i;
        long j12 = 0;
        if (Intrinsics.compare(j11, j12) >= 0 && Intrinsics.compare(j11, 64) < 0) {
            if (((1 << ((int) j11)) & this.f53608e) == 0) {
                return false;
            }
            return true;
        } else if (Intrinsics.compare(j11, 64) >= 0 && Intrinsics.compare(j11, (long) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) < 0) {
            if (((1 << (((int) j11) - 64)) & this.f53607d) == 0) {
                return false;
            }
            return true;
        } else if (Intrinsics.compare(j11, j12) > 0 || (jArr = this.f53610o) == null || i.a(jArr, j10) < 0) {
            return false;
        } else {
            return true;
        }
    }

    public final long h(long j10) {
        long[] jArr = this.f53610o;
        if (jArr != null) {
            return jArr[0];
        }
        long j11 = this.f53608e;
        if (j11 != 0) {
            return this.f53609i + Long.numberOfTrailingZeros(j11);
        }
        long j12 = this.f53607d;
        if (j12 != 0) {
            return this.f53609i + 64 + Long.numberOfTrailingZeros(j12);
        }
        return j10;
    }

    public final h i(long j10) {
        long j11;
        long j12;
        long[] jArr;
        long j13 = j10 - this.f53609i;
        long j14 = 0;
        if (Intrinsics.compare(j13, j14) >= 0 && Intrinsics.compare(j13, 64) < 0) {
            long j15 = 1 << ((int) j13);
            long j16 = this.f53608e;
            if ((j16 & j15) == 0) {
                return new h(this.f53607d, j16 | j15, this.f53609i, this.f53610o);
            }
        } else {
            long j17 = 64;
            if (Intrinsics.compare(j13, j17) >= 0 && Intrinsics.compare(j13, (long) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) < 0) {
                long j18 = 1 << (((int) j13) - 64);
                long j19 = this.f53607d;
                if ((j19 & j18) == 0) {
                    return new h(j19 | j18, this.f53608e, this.f53609i, this.f53610o);
                }
            } else {
                long j20 = (long) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                if (Intrinsics.compare(j13, j20) >= 0) {
                    if (!g(j10)) {
                        long j21 = this.f53607d;
                        long j22 = this.f53608e;
                        long j23 = this.f53609i;
                        long j24 = 1;
                        long j25 = ((j10 + j24) / j17) * j17;
                        if (Intrinsics.compare(j25, j14) < 0) {
                            j25 = (LongCompanionObject.MAX_VALUE - j20) + j24;
                        }
                        g gVar = null;
                        long j26 = j21;
                        while (true) {
                            if (Intrinsics.compare(j23, j25) < 0) {
                                if (j22 != 0) {
                                    if (gVar == null) {
                                        gVar = new g(this.f53610o);
                                    }
                                    int i10 = 0;
                                    while (i10 < 64) {
                                        long j27 = j22;
                                        if ((j22 & (1 << i10)) != 0) {
                                            gVar.a(i10 + j23);
                                        }
                                        i10++;
                                        j22 = j27;
                                    }
                                }
                                if (j26 == 0) {
                                    j12 = j25;
                                    j11 = 0;
                                    break;
                                }
                                j23 += j17;
                                j22 = j26;
                                j26 = 0;
                            } else {
                                j11 = j22;
                                j12 = j23;
                                break;
                            }
                        }
                        if (gVar == null || (jArr = gVar.b()) == null) {
                            jArr = this.f53610o;
                        }
                        return new h(j26, j11, j12, jArr).i(j10);
                    }
                } else {
                    long[] jArr2 = this.f53610o;
                    if (jArr2 == null) {
                        return new h(this.f53607d, this.f53608e, this.f53609i, new long[]{j10});
                    }
                    int a10 = i.a(jArr2, j10);
                    if (a10 < 0) {
                        return new h(this.f53607d, this.f53608e, this.f53609i, i.d(jArr2, -(a10 + 1), j10));
                    }
                }
            }
        }
        return this;
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        return kotlin.sequences.k.b(new b(null)).iterator();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(super.toString());
        sb2.append(" [");
        ArrayList arrayList = new ArrayList(CollectionsKt.w(this, 10));
        Iterator it = iterator();
        while (it.hasNext()) {
            arrayList.add(String.valueOf(((Number) it.next()).longValue()));
        }
        sb2.append(c.d(arrayList, null, null, null, 0, null, null, 63, null));
        sb2.append(']');
        return sb2.toString();
    }
}
