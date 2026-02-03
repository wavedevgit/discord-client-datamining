package um;

import java.util.Map;
import kotlin.Lazy;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import okio.Buffer;
import okio.BufferedSource;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: c  reason: collision with root package name */
    public static final a f50493c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Lazy f50494a;

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f50495b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: um.m$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0667a extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ BufferedSource f50496d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0667a(BufferedSource bufferedSource) {
                super(0);
                this.f50496d = bufferedSource;
            }

            @Override // kotlin.jvm.functions.Function0
            /* renamed from: a */
            public final Map invoke() {
                int readInt = this.f50496d.readInt();
                BufferedSource bufferedSource = this.f50496d;
                Map d10 = o0.d(readInt);
                int i10 = 0;
                while (i10 < readInt) {
                    i10++;
                    d10.put(vm.k.f51427c.a(j.a(bufferedSource)), m.f50493c.a(j.a(bufferedSource)));
                }
                return o0.b(d10);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final m a(ByteString bytes) {
            Intrinsics.checkNotNullParameter(bytes, "bytes");
            Buffer a22 = new Buffer().a2(bytes);
            return new m(i.f50480c.b(j.a(a22)), new C0667a(a22));
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ i f50497d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(i iVar) {
            super(0);
            this.f50497d = iVar;
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final i invoke() {
            i iVar = this.f50497d;
            if (iVar == null || iVar.b().G() == 0) {
                return null;
            }
            return iVar;
        }
    }

    public m(i iVar, Function0 childTreeSnapshots) {
        Intrinsics.checkNotNullParameter(childTreeSnapshots, "childTreeSnapshots");
        jr.o oVar = jr.o.f32183i;
        this.f50494a = jr.l.a(oVar, new b(iVar));
        this.f50495b = jr.l.a(oVar, childTreeSnapshots);
    }

    public final Map a() {
        return (Map) this.f50495b.getValue();
    }

    public final i b() {
        return (i) this.f50494a.getValue();
    }

    /* JADX WARN: Removed duplicated region for block: B:29:0x0060 A[SYNTHETIC] */
    /* JADX WARN: Removed duplicated region for block: B:32:0x002a A[SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final okio.ByteString c() {
        /*
            r7 = this;
            okio.Buffer r0 = new okio.Buffer
            r0.<init>()
            um.i r1 = r7.b()
            r2 = 0
            if (r1 != 0) goto Le
            r1 = r2
            goto L12
        Le:
            okio.ByteString r1 = r1.b()
        L12:
            if (r1 != 0) goto L16
            okio.ByteString r1 = okio.ByteString.f44508p
        L16:
            um.j.c(r0, r1)
            java.util.Map r1 = r7.a()
            java.util.ArrayList r3 = new java.util.ArrayList
            r3.<init>()
            java.util.Set r1 = r1.entrySet()
            java.util.Iterator r1 = r1.iterator()
        L2a:
            boolean r4 = r1.hasNext()
            if (r4 == 0) goto L64
            java.lang.Object r4 = r1.next()
            java.util.Map$Entry r4 = (java.util.Map.Entry) r4
            java.lang.Object r5 = r4.getKey()
            vm.k r5 = (vm.k) r5
            java.lang.Object r4 = r4.getValue()
            um.m r4 = (um.m) r4
            okio.ByteString r5 = r5.d()
            if (r5 != 0) goto L4a
        L48:
            r6 = r2
            goto L5d
        L4a:
            okio.ByteString r4 = r4.c()
            int r6 = r4.G()
            if (r6 != 0) goto L55
            r4 = r2
        L55:
            if (r4 != 0) goto L58
            goto L48
        L58:
            kotlin.Pair r6 = new kotlin.Pair
            r6.<init>(r5, r4)
        L5d:
            if (r6 != 0) goto L60
            goto L2a
        L60:
            r3.add(r6)
            goto L2a
        L64:
            int r1 = r3.size()
            r0.writeInt(r1)
            java.util.Iterator r1 = r3.iterator()
        L6f:
            boolean r2 = r1.hasNext()
            if (r2 == 0) goto L8e
            java.lang.Object r2 = r1.next()
            kotlin.Pair r2 = (kotlin.Pair) r2
            java.lang.Object r3 = r2.a()
            okio.ByteString r3 = (okio.ByteString) r3
            java.lang.Object r2 = r2.b()
            okio.ByteString r2 = (okio.ByteString) r2
            um.j.c(r0, r3)
            um.j.c(r0, r2)
            goto L6f
        L8e:
            okio.ByteString r0 = r0.L1()
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: um.m.c():okio.ByteString");
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof m)) {
            return false;
        }
        m mVar = (m) obj;
        if (Intrinsics.areEqual(mVar.b(), b()) && Intrinsics.areEqual(mVar.a(), a())) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        i b10 = b();
        if (b10 == null) {
            hashCode = 0;
        } else {
            hashCode = b10.hashCode();
        }
        return (hashCode * 31) + a().hashCode();
    }
}
