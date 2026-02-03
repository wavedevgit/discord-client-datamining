package ku;

import java.io.IOException;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import jr.v;
import ju.c0;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.Ref;
import kotlin.text.CharsKt;
import kotlin.text.StringsKt;
import okio.BufferedSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class j {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Comparator {
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            return mr.a.d(((i) obj).b(), ((i) obj2).b());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Ref.BooleanRef f36760d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ long f36761e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Ref.LongRef f36762i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ BufferedSource f36763o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ Ref.LongRef f36764p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ Ref.LongRef f36765q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f36766r;

        /* renamed from: s  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f36767s;

        /* renamed from: t  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f36768t;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends Lambda implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Ref.ObjectRef f36769d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ BufferedSource f36770e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Ref.ObjectRef f36771i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ Ref.ObjectRef f36772o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(Ref.ObjectRef objectRef, BufferedSource bufferedSource, Ref.ObjectRef objectRef2, Ref.ObjectRef objectRef3) {
                super(2);
                this.f36769d = objectRef;
                this.f36770e = bufferedSource;
                this.f36771i = objectRef2;
                this.f36772o = objectRef3;
            }

            /* JADX WARN: Type inference failed for: r4v12, types: [T, java.lang.Long] */
            /* JADX WARN: Type inference failed for: r4v6, types: [T, java.lang.Long] */
            /* JADX WARN: Type inference failed for: r4v9, types: [T, java.lang.Long] */
            public final void a(int i10, long j10) {
                if (i10 == 1) {
                    Ref.ObjectRef objectRef = this.f36769d;
                    if (objectRef.element == 0) {
                        if (j10 == 24) {
                            objectRef.element = Long.valueOf(this.f36770e.Q0());
                            this.f36771i.element = Long.valueOf(this.f36770e.Q0());
                            this.f36772o.element = Long.valueOf(this.f36770e.Q0());
                            return;
                        }
                        throw new IOException("bad zip: NTFS extra attribute tag 0x0001 size != 24");
                    }
                    throw new IOException("bad zip: NTFS extra attribute tag 0x0001 repeated");
                }
            }

            @Override // kotlin.jvm.functions.Function2
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
                a(((Number) obj).intValue(), ((Number) obj2).longValue());
                return Unit.f33074a;
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(Ref.BooleanRef booleanRef, long j10, Ref.LongRef longRef, BufferedSource bufferedSource, Ref.LongRef longRef2, Ref.LongRef longRef3, Ref.ObjectRef objectRef, Ref.ObjectRef objectRef2, Ref.ObjectRef objectRef3) {
            super(2);
            this.f36760d = booleanRef;
            this.f36761e = j10;
            this.f36762i = longRef;
            this.f36763o = bufferedSource;
            this.f36764p = longRef2;
            this.f36765q = longRef3;
            this.f36766r = objectRef;
            this.f36767s = objectRef2;
            this.f36768t = objectRef3;
        }

        public final void a(int i10, long j10) {
            long j11;
            if (i10 != 1) {
                if (i10 != 10) {
                    return;
                }
                if (j10 >= 4) {
                    this.f36763o.skip(4L);
                    BufferedSource bufferedSource = this.f36763o;
                    j.i(bufferedSource, (int) (j10 - 4), new a(this.f36766r, bufferedSource, this.f36767s, this.f36768t));
                    return;
                }
                throw new IOException("bad zip: NTFS extra too short");
            }
            Ref.BooleanRef booleanRef = this.f36760d;
            if (!booleanRef.element) {
                booleanRef.element = true;
                if (j10 >= this.f36761e) {
                    Ref.LongRef longRef = this.f36762i;
                    long j12 = longRef.element;
                    if (j12 == 4294967295L) {
                        j12 = this.f36763o.Q0();
                    }
                    longRef.element = j12;
                    Ref.LongRef longRef2 = this.f36764p;
                    long j13 = 0;
                    if (longRef2.element == 4294967295L) {
                        j11 = this.f36763o.Q0();
                    } else {
                        j11 = 0;
                    }
                    longRef2.element = j11;
                    Ref.LongRef longRef3 = this.f36765q;
                    if (longRef3.element == 4294967295L) {
                        j13 = this.f36763o.Q0();
                    }
                    longRef3.element = j13;
                    return;
                }
                throw new IOException("bad zip: zip64 extra too short");
            }
            throw new IOException("bad zip: zip64 extra repeated");
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a(((Number) obj).intValue(), ((Number) obj2).longValue());
            return Unit.f33074a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BufferedSource f36773d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f36774e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f36775i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f36776o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(BufferedSource bufferedSource, Ref.ObjectRef objectRef, Ref.ObjectRef objectRef2, Ref.ObjectRef objectRef3) {
            super(2);
            this.f36773d = bufferedSource;
            this.f36774e = objectRef;
            this.f36775i = objectRef2;
            this.f36776o = objectRef3;
        }

        /* JADX WARN: Type inference failed for: r10v11, types: [T, java.lang.Integer] */
        /* JADX WARN: Type inference failed for: r11v4, types: [T, java.lang.Integer] */
        /* JADX WARN: Type inference failed for: r11v7, types: [T, java.lang.Integer] */
        public final void a(int i10, long j10) {
            boolean z10;
            boolean z11;
            if (i10 == 21589) {
                long j11 = 1;
                if (j10 >= 1) {
                    byte readByte = this.f36773d.readByte();
                    boolean z12 = false;
                    if ((readByte & 1) == 1) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    if ((readByte & 2) == 2) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    if ((readByte & 4) == 4) {
                        z12 = true;
                    }
                    BufferedSource bufferedSource = this.f36773d;
                    if (z10) {
                        j11 = 5;
                    }
                    if (z11) {
                        j11 += 4;
                    }
                    if (z12) {
                        j11 += 4;
                    }
                    if (j10 >= j11) {
                        if (z10) {
                            this.f36774e.element = Integer.valueOf(bufferedSource.Q1());
                        }
                        if (z11) {
                            this.f36775i.element = Integer.valueOf(this.f36773d.Q1());
                        }
                        if (z12) {
                            this.f36776o.element = Integer.valueOf(this.f36773d.Q1());
                            return;
                        }
                        return;
                    }
                    throw new IOException("bad zip: extended timestamp extra too short");
                }
                throw new IOException("bad zip: extended timestamp extra too short");
            }
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a(((Number) obj).intValue(), ((Number) obj2).longValue());
            return Unit.f33074a;
        }
    }

    private static final Map b(List list) {
        c0 e10 = c0.a.e(c0.f32326e, "/", false, 1, null);
        Map n10 = o0.n(v.a(e10, new i(e10, true, null, 0L, 0L, 0L, 0, 0L, 0, 0, null, null, null, null, null, null, 65532, null)));
        for (i iVar : CollectionsKt.W0(list, new a())) {
            if (((i) n10.put(iVar.b(), iVar)) == null) {
                while (true) {
                    c0 i10 = iVar.b().i();
                    if (i10 != null) {
                        i iVar2 = (i) n10.get(i10);
                        if (iVar2 != null) {
                            iVar2.c().add(iVar.b());
                            break;
                        }
                        i iVar3 = new i(i10, true, null, 0L, 0L, 0L, 0, 0L, 0, 0, null, null, null, null, null, null, 65532, null);
                        n10.put(i10, iVar3);
                        iVar3.c().add(iVar.b());
                        iVar = iVar3;
                    }
                }
            }
        }
        return n10;
    }

    public static final Long c(int i10, int i11) {
        if (i11 == -1) {
            return null;
        }
        return Long.valueOf(l.a(((i10 >> 9) & 127) + 1980, (i10 >> 5) & 15, i10 & 31, (i11 >> 11) & 31, (i11 >> 5) & 63, (i11 & 31) << 1));
    }

    public static final long d(long j10) {
        return (j10 / 10000) - 11644473600000L;
    }

    private static final String e(int i10) {
        StringBuilder sb2 = new StringBuilder();
        sb2.append("0x");
        String num = Integer.toString(i10, CharsKt.checkRadix(16));
        Intrinsics.checkNotNullExpressionValue(num, "toString(...)");
        sb2.append(num);
        return sb2.toString();
    }

    /* JADX WARN: Removed duplicated region for block: B:64:0x0106  */
    /* JADX WARN: Removed duplicated region for block: B:65:0x0107 A[Catch: all -> 0x00ff, TryCatch #13 {all -> 0x00ff, blocks: (B:3:0x0019, B:5:0x0027, B:6:0x0030, B:10:0x004e, B:12:0x005a, B:65:0x0107, B:66:0x0108, B:93:0x0168, B:97:0x0177, B:100:0x017a, B:103:0x0186, B:104:0x018d, B:107:0x0192, B:108:0x01ac, B:67:0x0119, B:70:0x0121, B:72:0x0131, B:74:0x013d, B:77:0x0144, B:78:0x0148, B:79:0x014f, B:80:0x0150, B:7:0x0038, B:9:0x0041, B:56:0x00f6), top: B:132:0x0019 }] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final ju.l0 f(ju.c0 r18, ju.h r19, kotlin.jvm.functions.Function1 r20) {
        /*
            Method dump skipped, instructions count: 440
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: ku.j.f(ju.c0, ju.h, kotlin.jvm.functions.Function1):ju.l0");
    }

    public static final i g(BufferedSource bufferedSource) {
        int Q1;
        long j10;
        Intrinsics.checkNotNullParameter(bufferedSource, "<this>");
        if (bufferedSource.Q1() == 33639248) {
            bufferedSource.skip(4L);
            short P0 = bufferedSource.P0();
            int i10 = P0 & 65535;
            if ((P0 & 1) == 0) {
                int P02 = bufferedSource.P0() & 65535;
                int P03 = bufferedSource.P0() & 65535;
                int P04 = bufferedSource.P0() & 65535;
                long Q12 = bufferedSource.Q1() & 4294967295L;
                Ref.LongRef longRef = new Ref.LongRef();
                longRef.element = bufferedSource.Q1() & 4294967295L;
                Ref.LongRef longRef2 = new Ref.LongRef();
                longRef2.element = bufferedSource.Q1() & 4294967295L;
                int P05 = bufferedSource.P0() & 65535;
                int P06 = bufferedSource.P0() & 65535;
                bufferedSource.skip(8L);
                Ref.LongRef longRef3 = new Ref.LongRef();
                longRef3.element = bufferedSource.Q1() & 4294967295L;
                String c12 = bufferedSource.c1(bufferedSource.P0() & 65535);
                if (!StringsKt.U(c12, (char) 0, false, 2, null)) {
                    if (longRef2.element == 4294967295L) {
                        j10 = 8;
                    } else {
                        j10 = 0;
                    }
                    if (longRef.element == 4294967295L) {
                        j10 += 8;
                    }
                    if (longRef3.element == 4294967295L) {
                        j10 += 8;
                    }
                    long j11 = j10;
                    Ref.ObjectRef objectRef = new Ref.ObjectRef();
                    Ref.ObjectRef objectRef2 = new Ref.ObjectRef();
                    Ref.ObjectRef objectRef3 = new Ref.ObjectRef();
                    Ref.BooleanRef booleanRef = new Ref.BooleanRef();
                    i(bufferedSource, P05, new b(booleanRef, j11, longRef2, bufferedSource, longRef, longRef3, objectRef, objectRef2, objectRef3));
                    if (j11 > 0 && !booleanRef.element) {
                        throw new IOException("bad zip: zip64 extra required but absent");
                    }
                    return new i(c0.a.e(c0.f32326e, "/", false, 1, null).l(c12), StringsKt.z(c12, "/", false, 2, null), bufferedSource.c1(P06), Q12, longRef.element, longRef2.element, P02, longRef3.element, P04, P03, (Long) objectRef.element, (Long) objectRef2.element, (Long) objectRef3.element, null, null, null, 57344, null);
                }
                throw new IOException("bad zip: filename contains 0x00");
            }
            throw new IOException("unsupported zip: general purpose bit flag=" + e(i10));
        }
        throw new IOException("bad zip: expected " + e(33639248) + " but was " + e(Q1));
    }

    private static final f h(BufferedSource bufferedSource) {
        int P0 = bufferedSource.P0() & 65535;
        int P02 = bufferedSource.P0() & 65535;
        long P03 = bufferedSource.P0() & 65535;
        if (P03 == (bufferedSource.P0() & 65535) && P0 == 0 && P02 == 0) {
            bufferedSource.skip(4L);
            return new f(P03, 4294967295L & bufferedSource.Q1(), bufferedSource.P0() & 65535);
        }
        throw new IOException("unsupported zip: spanned");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void i(BufferedSource bufferedSource, int i10, Function2 function2) {
        long j10 = i10;
        while (j10 != 0) {
            if (j10 >= 4) {
                int P0 = bufferedSource.P0() & 65535;
                long P02 = bufferedSource.P0() & 65535;
                long j11 = j10 - 4;
                if (j11 >= P02) {
                    bufferedSource.U0(P02);
                    long size = bufferedSource.e().size();
                    function2.invoke(Integer.valueOf(P0), Long.valueOf(P02));
                    long size2 = (bufferedSource.e().size() + P02) - size;
                    int i11 = (size2 > 0L ? 1 : (size2 == 0L ? 0 : -1));
                    if (i11 >= 0) {
                        if (i11 > 0) {
                            bufferedSource.e().skip(size2);
                        }
                        j10 = j11 - P02;
                    } else {
                        throw new IOException("unsupported zip: too many bytes processed for " + P0);
                    }
                } else {
                    throw new IOException("bad zip: truncated value in extra field");
                }
            } else {
                throw new IOException("bad zip: truncated header in extra field");
            }
        }
    }

    public static final i j(BufferedSource bufferedSource, i centralDirectoryZipEntry) {
        Intrinsics.checkNotNullParameter(bufferedSource, "<this>");
        Intrinsics.checkNotNullParameter(centralDirectoryZipEntry, "centralDirectoryZipEntry");
        i k10 = k(bufferedSource, centralDirectoryZipEntry);
        Intrinsics.checkNotNull(k10);
        return k10;
    }

    private static final i k(BufferedSource bufferedSource, i iVar) {
        int Q1 = bufferedSource.Q1();
        if (Q1 == 67324752) {
            bufferedSource.skip(2L);
            short P0 = bufferedSource.P0();
            int i10 = P0 & 65535;
            if ((P0 & 1) == 0) {
                bufferedSource.skip(18L);
                int P02 = bufferedSource.P0() & 65535;
                bufferedSource.skip(bufferedSource.P0() & 65535);
                if (iVar == null) {
                    bufferedSource.skip(P02);
                    return null;
                }
                Ref.ObjectRef objectRef = new Ref.ObjectRef();
                Ref.ObjectRef objectRef2 = new Ref.ObjectRef();
                Ref.ObjectRef objectRef3 = new Ref.ObjectRef();
                i(bufferedSource, P02, new c(bufferedSource, objectRef, objectRef2, objectRef3));
                return iVar.a((Integer) objectRef.element, (Integer) objectRef2.element, (Integer) objectRef3.element);
            }
            throw new IOException("unsupported zip: general purpose bit flag=" + e(i10));
        }
        throw new IOException("bad zip: expected " + e(67324752) + " but was " + e(Q1));
    }

    private static final f l(BufferedSource bufferedSource, f fVar) {
        bufferedSource.skip(12L);
        int Q1 = bufferedSource.Q1();
        int Q12 = bufferedSource.Q1();
        long Q0 = bufferedSource.Q0();
        if (Q0 == bufferedSource.Q0() && Q1 == 0 && Q12 == 0) {
            bufferedSource.skip(8L);
            return new f(Q0, bufferedSource.Q0(), fVar.b());
        }
        throw new IOException("unsupported zip: spanned");
    }

    public static final void m(BufferedSource bufferedSource) {
        Intrinsics.checkNotNullParameter(bufferedSource, "<this>");
        k(bufferedSource, null);
    }
}
