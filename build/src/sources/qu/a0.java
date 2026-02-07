package qu;

import java.util.List;
import java.util.RandomAccess;
import kotlin.jvm.internal.DefaultConstructorMarker;
import okio.Buffer;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a0 extends kotlin.collections.d implements RandomAccess {

    /* renamed from: o  reason: collision with root package name */
    public static final a f48228o = new a(null);

    /* renamed from: e  reason: collision with root package name */
    private final ByteString[] f48229e;

    /* renamed from: i  reason: collision with root package name */
    private final int[] f48230i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final void a(long j10, Buffer buffer, int i10, List list, int i11, int i12, List list2) {
            int i13;
            int i14;
            int i15;
            long j11;
            int i16 = i10;
            if (i11 < i12) {
                for (int i17 = i11; i17 < i12; i17++) {
                    if (((ByteString) list.get(i17)).G() < i16) {
                        throw new IllegalArgumentException("Failed requirement.");
                    }
                }
                ByteString byteString = (ByteString) list.get(i11);
                ByteString byteString2 = (ByteString) list.get(i12 - 1);
                if (i16 == byteString.G()) {
                    int i18 = i11 + 1;
                    i13 = i18;
                    i14 = ((Number) list2.get(i11)).intValue();
                    byteString = (ByteString) list.get(i18);
                } else {
                    i13 = i11;
                    i14 = -1;
                }
                if (byteString.j(i16) != byteString2.j(i16)) {
                    int i19 = 1;
                    for (int i20 = i13 + 1; i20 < i12; i20++) {
                        if (((ByteString) list.get(i20 - 1)).j(i16) != ((ByteString) list.get(i20)).j(i16)) {
                            i19++;
                        }
                    }
                    long c10 = j10 + c(buffer) + 2 + (i19 * 2);
                    buffer.writeInt(i19);
                    buffer.writeInt(i14);
                    for (int i21 = i13; i21 < i12; i21++) {
                        byte j12 = ((ByteString) list.get(i21)).j(i16);
                        if (i21 == i13 || j12 != ((ByteString) list.get(i21 - 1)).j(i16)) {
                            buffer.writeInt(j12 & 255);
                        }
                    }
                    Buffer buffer2 = new Buffer();
                    while (i13 < i12) {
                        byte j13 = ((ByteString) list.get(i13)).j(i16);
                        int i22 = i13 + 1;
                        int i23 = i22;
                        while (true) {
                            if (i23 < i12) {
                                if (j13 != ((ByteString) list.get(i23)).j(i16)) {
                                    i15 = i23;
                                    break;
                                }
                                i23++;
                            } else {
                                i15 = i12;
                                break;
                            }
                        }
                        if (i22 == i15 && i16 + 1 == ((ByteString) list.get(i13)).G()) {
                            buffer.writeInt(((Number) list2.get(i13)).intValue());
                            j11 = c10;
                        } else {
                            buffer.writeInt(((int) (c(buffer2) + c10)) * (-1));
                            j11 = c10;
                            a(j11, buffer2, i16 + 1, list, i13, i15, list2);
                        }
                        c10 = j11;
                        i13 = i15;
                    }
                    buffer.B0(buffer2);
                    return;
                }
                int min = Math.min(byteString.G(), byteString2.G());
                int i24 = 0;
                for (int i25 = i16; i25 < min && byteString.j(i25) == byteString2.j(i25); i25++) {
                    i24++;
                }
                long c11 = j10 + c(buffer) + 2 + i24 + 1;
                buffer.writeInt(-i24);
                buffer.writeInt(i14);
                int i26 = i16 + i24;
                while (i16 < i26) {
                    buffer.writeInt(byteString.j(i16) & 255);
                    i16++;
                }
                if (i13 + 1 == i12) {
                    if (i26 == ((ByteString) list.get(i13)).G()) {
                        buffer.writeInt(((Number) list2.get(i13)).intValue());
                        return;
                    }
                    throw new IllegalStateException("Check failed.");
                }
                Buffer buffer3 = new Buffer();
                buffer.writeInt(((int) (c(buffer3) + c11)) * (-1));
                a(c11, buffer3, i26, list, i13, i12, list2);
                buffer.B0(buffer3);
                return;
            }
            throw new IllegalArgumentException("Failed requirement.");
        }

        static /* synthetic */ void b(a aVar, long j10, Buffer buffer, int i10, List list, int i11, int i12, List list2, int i13, Object obj) {
            int i14;
            int i15;
            int i16;
            if ((i13 & 1) != 0) {
                j10 = 0;
            }
            long j11 = j10;
            if ((i13 & 4) != 0) {
                i14 = 0;
            } else {
                i14 = i10;
            }
            if ((i13 & 16) != 0) {
                i15 = 0;
            } else {
                i15 = i11;
            }
            if ((i13 & 32) != 0) {
                i16 = list.size();
            } else {
                i16 = i12;
            }
            aVar.a(j11, buffer, i14, list, i15, i16, list2);
        }

        private final long c(Buffer buffer) {
            return buffer.size() / 4;
        }

        /* JADX WARN: Code restructure failed: missing block: B:43:0x00c5, code lost:
            continue;
         */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final qu.a0 d(okio.ByteString... r17) {
            /*
                Method dump skipped, instructions count: 264
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: qu.a0.a.d(okio.ByteString[]):qu.a0");
        }

        private a() {
        }
    }

    public /* synthetic */ a0(ByteString[] byteStringArr, int[] iArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(byteStringArr, iArr);
    }

    public static final a0 l(ByteString... byteStringArr) {
        return f48228o.d(byteStringArr);
    }

    @Override // kotlin.collections.b
    public int c() {
        return this.f48229e.length;
    }

    @Override // kotlin.collections.b, java.util.Collection
    public final /* bridge */ boolean contains(Object obj) {
        if (!(obj instanceof ByteString)) {
            return false;
        }
        return e((ByteString) obj);
    }

    public /* bridge */ boolean e(ByteString byteString) {
        return super.contains(byteString);
    }

    @Override // kotlin.collections.d, java.util.List
    /* renamed from: f */
    public ByteString get(int i10) {
        return this.f48229e[i10];
    }

    public final ByteString[] g() {
        return this.f48229e;
    }

    public final int[] h() {
        return this.f48230i;
    }

    public /* bridge */ int i(ByteString byteString) {
        return super.indexOf(byteString);
    }

    @Override // kotlin.collections.d, java.util.List
    public final /* bridge */ int indexOf(Object obj) {
        if (!(obj instanceof ByteString)) {
            return -1;
        }
        return i((ByteString) obj);
    }

    public /* bridge */ int j(ByteString byteString) {
        return super.lastIndexOf(byteString);
    }

    @Override // kotlin.collections.d, java.util.List
    public final /* bridge */ int lastIndexOf(Object obj) {
        if (!(obj instanceof ByteString)) {
            return -1;
        }
        return j((ByteString) obj);
    }

    private a0(ByteString[] byteStringArr, int[] iArr) {
        this.f48229e = byteStringArr;
        this.f48230i = iArr;
    }
}
