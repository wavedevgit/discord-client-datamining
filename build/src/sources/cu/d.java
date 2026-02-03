package cu;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import ju.x;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.BufferedSource;
import okio.ByteString;
import okio.Source;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    public static final d f20865a;

    /* renamed from: b  reason: collision with root package name */
    private static final c[] f20866b;

    /* renamed from: c  reason: collision with root package name */
    private static final Map f20867c;

    static {
        d dVar = new d();
        f20865a = dVar;
        c cVar = new c(c.f20861j, "");
        ByteString byteString = c.f20858g;
        c cVar2 = new c(byteString, "GET");
        c cVar3 = new c(byteString, "POST");
        ByteString byteString2 = c.f20859h;
        c cVar4 = new c(byteString2, "/");
        c cVar5 = new c(byteString2, "/index.html");
        ByteString byteString3 = c.f20860i;
        c cVar6 = new c(byteString3, "http");
        c cVar7 = new c(byteString3, "https");
        ByteString byteString4 = c.f20857f;
        f20866b = new c[]{cVar, cVar2, cVar3, cVar4, cVar5, cVar6, cVar7, new c(byteString4, "200"), new c(byteString4, "204"), new c(byteString4, "206"), new c(byteString4, "304"), new c(byteString4, "400"), new c(byteString4, "404"), new c(byteString4, "500"), new c("accept-charset", ""), new c("accept-encoding", "gzip, deflate"), new c("accept-language", ""), new c("accept-ranges", ""), new c("accept", ""), new c("access-control-allow-origin", ""), new c("age", ""), new c("allow", ""), new c("authorization", ""), new c("cache-control", ""), new c("content-disposition", ""), new c("content-encoding", ""), new c("content-language", ""), new c("content-length", ""), new c("content-location", ""), new c("content-range", ""), new c("content-type", ""), new c("cookie", ""), new c(InquiryField.DateField.TYPE, ""), new c("etag", ""), new c("expect", ""), new c("expires", ""), new c("from", ""), new c("host", ""), new c("if-match", ""), new c("if-modified-since", ""), new c("if-none-match", ""), new c("if-range", ""), new c("if-unmodified-since", ""), new c("last-modified", ""), new c("link", ""), new c("location", ""), new c("max-forwards", ""), new c("proxy-authenticate", ""), new c("proxy-authorization", ""), new c("range", ""), new c("referer", ""), new c("refresh", ""), new c("retry-after", ""), new c("server", ""), new c("set-cookie", ""), new c("strict-transport-security", ""), new c("transfer-encoding", ""), new c("user-agent", ""), new c("vary", ""), new c("via", ""), new c("www-authenticate", "")};
        f20867c = dVar.d();
    }

    private d() {
    }

    private final Map d() {
        c[] cVarArr = f20866b;
        LinkedHashMap linkedHashMap = new LinkedHashMap(cVarArr.length);
        int length = cVarArr.length;
        for (int i10 = 0; i10 < length; i10++) {
            c[] cVarArr2 = f20866b;
            if (!linkedHashMap.containsKey(cVarArr2[i10].f20862a)) {
                linkedHashMap.put(cVarArr2[i10].f20862a, Integer.valueOf(i10));
            }
        }
        Map unmodifiableMap = Collections.unmodifiableMap(linkedHashMap);
        Intrinsics.checkNotNullExpressionValue(unmodifiableMap, "unmodifiableMap(result)");
        return unmodifiableMap;
    }

    public final ByteString a(ByteString name) {
        Intrinsics.checkNotNullParameter(name, "name");
        int G = name.G();
        for (int i10 = 0; i10 < G; i10++) {
            byte k10 = name.k(i10);
            if (65 <= k10 && k10 < 91) {
                throw new IOException("PROTOCOL_ERROR response malformed: mixed case name: " + name.M());
            }
        }
        return name;
    }

    public final Map b() {
        return f20867c;
    }

    public final c[] c() {
        return f20866b;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final int f20868a;

        /* renamed from: b  reason: collision with root package name */
        private int f20869b;

        /* renamed from: c  reason: collision with root package name */
        private final List f20870c;

        /* renamed from: d  reason: collision with root package name */
        private final BufferedSource f20871d;

        /* renamed from: e  reason: collision with root package name */
        public c[] f20872e;

        /* renamed from: f  reason: collision with root package name */
        private int f20873f;

        /* renamed from: g  reason: collision with root package name */
        public int f20874g;

        /* renamed from: h  reason: collision with root package name */
        public int f20875h;

        public a(Source source, int i10, int i11) {
            Intrinsics.checkNotNullParameter(source, "source");
            this.f20868a = i10;
            this.f20869b = i11;
            this.f20870c = new ArrayList();
            this.f20871d = x.d(source);
            c[] cVarArr = new c[8];
            this.f20872e = cVarArr;
            this.f20873f = cVarArr.length - 1;
        }

        private final void a() {
            int i10 = this.f20869b;
            int i11 = this.f20875h;
            if (i10 < i11) {
                if (i10 == 0) {
                    b();
                } else {
                    d(i11 - i10);
                }
            }
        }

        private final void b() {
            kotlin.collections.i.z(this.f20872e, null, 0, 0, 6, null);
            this.f20873f = this.f20872e.length - 1;
            this.f20874g = 0;
            this.f20875h = 0;
        }

        private final int c(int i10) {
            return this.f20873f + 1 + i10;
        }

        private final int d(int i10) {
            int i11;
            int i12 = 0;
            if (i10 > 0) {
                int length = this.f20872e.length;
                while (true) {
                    length--;
                    i11 = this.f20873f;
                    if (length < i11 || i10 <= 0) {
                        break;
                    }
                    c cVar = this.f20872e[length];
                    Intrinsics.checkNotNull(cVar);
                    int i13 = cVar.f20864c;
                    i10 -= i13;
                    this.f20875h -= i13;
                    this.f20874g--;
                    i12++;
                }
                c[] cVarArr = this.f20872e;
                System.arraycopy(cVarArr, i11 + 1, cVarArr, i11 + 1 + i12, this.f20874g);
                this.f20873f += i12;
            }
            return i12;
        }

        private final ByteString f(int i10) {
            if (h(i10)) {
                return d.f20865a.c()[i10].f20862a;
            }
            int c10 = c(i10 - d.f20865a.c().length);
            if (c10 >= 0) {
                c[] cVarArr = this.f20872e;
                if (c10 < cVarArr.length) {
                    c cVar = cVarArr[c10];
                    Intrinsics.checkNotNull(cVar);
                    return cVar.f20862a;
                }
            }
            throw new IOException("Header index too large " + (i10 + 1));
        }

        private final void g(int i10, c cVar) {
            this.f20870c.add(cVar);
            int i11 = cVar.f20864c;
            if (i10 != -1) {
                c cVar2 = this.f20872e[c(i10)];
                Intrinsics.checkNotNull(cVar2);
                i11 -= cVar2.f20864c;
            }
            int i12 = this.f20869b;
            if (i11 > i12) {
                b();
                return;
            }
            int d10 = d((this.f20875h + i11) - i12);
            if (i10 == -1) {
                int i13 = this.f20874g + 1;
                c[] cVarArr = this.f20872e;
                if (i13 > cVarArr.length) {
                    c[] cVarArr2 = new c[cVarArr.length * 2];
                    System.arraycopy(cVarArr, 0, cVarArr2, cVarArr.length, cVarArr.length);
                    this.f20873f = this.f20872e.length - 1;
                    this.f20872e = cVarArr2;
                }
                int i14 = this.f20873f;
                this.f20873f = i14 - 1;
                this.f20872e[i14] = cVar;
                this.f20874g++;
            } else {
                this.f20872e[i10 + c(i10) + d10] = cVar;
            }
            this.f20875h += i11;
        }

        private final boolean h(int i10) {
            if (i10 >= 0 && i10 <= d.f20865a.c().length - 1) {
                return true;
            }
            return false;
        }

        private final int i() {
            return vt.e.d(this.f20871d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
        }

        private final void l(int i10) {
            if (h(i10)) {
                this.f20870c.add(d.f20865a.c()[i10]);
                return;
            }
            int c10 = c(i10 - d.f20865a.c().length);
            if (c10 >= 0) {
                c[] cVarArr = this.f20872e;
                if (c10 < cVarArr.length) {
                    c cVar = cVarArr[c10];
                    Intrinsics.checkNotNull(cVar);
                    this.f20870c.add(cVar);
                    return;
                }
            }
            throw new IOException("Header index too large " + (i10 + 1));
        }

        private final void n(int i10) {
            g(-1, new c(f(i10), j()));
        }

        private final void o() {
            g(-1, new c(d.f20865a.a(j()), j()));
        }

        private final void p(int i10) {
            this.f20870c.add(new c(f(i10), j()));
        }

        private final void q() {
            this.f20870c.add(new c(d.f20865a.a(j()), j()));
        }

        public final List e() {
            List h12 = CollectionsKt.h1(this.f20870c);
            this.f20870c.clear();
            return h12;
        }

        public final ByteString j() {
            boolean z10;
            int i10 = i();
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                z10 = true;
            } else {
                z10 = false;
            }
            long m10 = m(i10, 127);
            if (z10) {
                Buffer buffer = new Buffer();
                k.f21010a.b(this.f20871d, m10, buffer);
                return buffer.L1();
            }
            return this.f20871d.g1(m10);
        }

        public final void k() {
            while (!this.f20871d.o1()) {
                int d10 = vt.e.d(this.f20871d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                if (d10 != 128) {
                    if ((d10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                        l(m(d10, 127) - 1);
                    } else if (d10 == 64) {
                        o();
                    } else if ((d10 & 64) == 64) {
                        n(m(d10, 63) - 1);
                    } else if ((d10 & 32) == 32) {
                        int m10 = m(d10, 31);
                        this.f20869b = m10;
                        if (m10 >= 0 && m10 <= this.f20868a) {
                            a();
                        } else {
                            throw new IOException("Invalid dynamic table size update " + this.f20869b);
                        }
                    } else if (d10 != 16 && d10 != 0) {
                        p(m(d10, 15) - 1);
                    } else {
                        q();
                    }
                } else {
                    throw new IOException("index == 0");
                }
            }
        }

        public final int m(int i10, int i11) {
            int i12 = i10 & i11;
            if (i12 < i11) {
                return i12;
            }
            int i13 = 0;
            while (true) {
                int i14 = i();
                if ((i14 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    i11 += (i14 & 127) << i13;
                    i13 += 7;
                } else {
                    return i11 + (i14 << i13);
                }
            }
        }

        public /* synthetic */ a(Source source, int i10, int i11, int i12, DefaultConstructorMarker defaultConstructorMarker) {
            this(source, i10, (i12 & 4) != 0 ? i10 : i11);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public int f20876a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f20877b;

        /* renamed from: c  reason: collision with root package name */
        private final Buffer f20878c;

        /* renamed from: d  reason: collision with root package name */
        private int f20879d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f20880e;

        /* renamed from: f  reason: collision with root package name */
        public int f20881f;

        /* renamed from: g  reason: collision with root package name */
        public c[] f20882g;

        /* renamed from: h  reason: collision with root package name */
        private int f20883h;

        /* renamed from: i  reason: collision with root package name */
        public int f20884i;

        /* renamed from: j  reason: collision with root package name */
        public int f20885j;

        public b(int i10, boolean z10, Buffer out) {
            Intrinsics.checkNotNullParameter(out, "out");
            this.f20876a = i10;
            this.f20877b = z10;
            this.f20878c = out;
            this.f20879d = Integer.MAX_VALUE;
            this.f20881f = i10;
            c[] cVarArr = new c[8];
            this.f20882g = cVarArr;
            this.f20883h = cVarArr.length - 1;
        }

        private final void a() {
            int i10 = this.f20881f;
            int i11 = this.f20885j;
            if (i10 < i11) {
                if (i10 == 0) {
                    b();
                } else {
                    c(i11 - i10);
                }
            }
        }

        private final void b() {
            kotlin.collections.i.z(this.f20882g, null, 0, 0, 6, null);
            this.f20883h = this.f20882g.length - 1;
            this.f20884i = 0;
            this.f20885j = 0;
        }

        private final int c(int i10) {
            int i11;
            int i12 = 0;
            if (i10 > 0) {
                int length = this.f20882g.length;
                while (true) {
                    length--;
                    i11 = this.f20883h;
                    if (length < i11 || i10 <= 0) {
                        break;
                    }
                    c cVar = this.f20882g[length];
                    Intrinsics.checkNotNull(cVar);
                    i10 -= cVar.f20864c;
                    int i13 = this.f20885j;
                    c cVar2 = this.f20882g[length];
                    Intrinsics.checkNotNull(cVar2);
                    this.f20885j = i13 - cVar2.f20864c;
                    this.f20884i--;
                    i12++;
                }
                c[] cVarArr = this.f20882g;
                System.arraycopy(cVarArr, i11 + 1, cVarArr, i11 + 1 + i12, this.f20884i);
                c[] cVarArr2 = this.f20882g;
                int i14 = this.f20883h;
                Arrays.fill(cVarArr2, i14 + 1, i14 + 1 + i12, (Object) null);
                this.f20883h += i12;
            }
            return i12;
        }

        private final void d(c cVar) {
            int i10 = cVar.f20864c;
            int i11 = this.f20881f;
            if (i10 > i11) {
                b();
                return;
            }
            c((this.f20885j + i10) - i11);
            int i12 = this.f20884i + 1;
            c[] cVarArr = this.f20882g;
            if (i12 > cVarArr.length) {
                c[] cVarArr2 = new c[cVarArr.length * 2];
                System.arraycopy(cVarArr, 0, cVarArr2, cVarArr.length, cVarArr.length);
                this.f20883h = this.f20882g.length - 1;
                this.f20882g = cVarArr2;
            }
            int i13 = this.f20883h;
            this.f20883h = i13 - 1;
            this.f20882g[i13] = cVar;
            this.f20884i++;
            this.f20885j += i10;
        }

        public final void e(int i10) {
            this.f20876a = i10;
            int min = Math.min(i10, 16384);
            int i11 = this.f20881f;
            if (i11 == min) {
                return;
            }
            if (min < i11) {
                this.f20879d = Math.min(this.f20879d, min);
            }
            this.f20880e = true;
            this.f20881f = min;
            a();
        }

        public final void f(ByteString data) {
            Intrinsics.checkNotNullParameter(data, "data");
            if (this.f20877b) {
                k kVar = k.f21010a;
                if (kVar.d(data) < data.G()) {
                    Buffer buffer = new Buffer();
                    kVar.c(data, buffer);
                    ByteString L1 = buffer.L1();
                    h(L1.G(), 127, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                    this.f20878c.a2(L1);
                    return;
                }
            }
            h(data.G(), 127, 0);
            this.f20878c.a2(data);
        }

        public final void g(List headerBlock) {
            int i10;
            int i11;
            Intrinsics.checkNotNullParameter(headerBlock, "headerBlock");
            if (this.f20880e) {
                int i12 = this.f20879d;
                if (i12 < this.f20881f) {
                    h(i12, 31, 32);
                }
                this.f20880e = false;
                this.f20879d = Integer.MAX_VALUE;
                h(this.f20881f, 31, 32);
            }
            int size = headerBlock.size();
            for (int i13 = 0; i13 < size; i13++) {
                c cVar = (c) headerBlock.get(i13);
                ByteString K = cVar.f20862a.K();
                ByteString byteString = cVar.f20863b;
                d dVar = d.f20865a;
                Integer num = (Integer) dVar.b().get(K);
                if (num != null) {
                    int intValue = num.intValue();
                    i11 = intValue + 1;
                    if (2 <= i11 && i11 < 8) {
                        if (Intrinsics.areEqual(dVar.c()[intValue].f20863b, byteString)) {
                            i10 = i11;
                        } else if (Intrinsics.areEqual(dVar.c()[i11].f20863b, byteString)) {
                            i10 = i11;
                            i11 = intValue + 2;
                        }
                    }
                    i10 = i11;
                    i11 = -1;
                } else {
                    i10 = -1;
                    i11 = -1;
                }
                if (i11 == -1) {
                    int i14 = this.f20883h + 1;
                    int length = this.f20882g.length;
                    while (true) {
                        if (i14 >= length) {
                            break;
                        }
                        c cVar2 = this.f20882g[i14];
                        Intrinsics.checkNotNull(cVar2);
                        if (Intrinsics.areEqual(cVar2.f20862a, K)) {
                            c cVar3 = this.f20882g[i14];
                            Intrinsics.checkNotNull(cVar3);
                            if (Intrinsics.areEqual(cVar3.f20863b, byteString)) {
                                i11 = d.f20865a.c().length + (i14 - this.f20883h);
                                break;
                            } else if (i10 == -1) {
                                i10 = (i14 - this.f20883h) + d.f20865a.c().length;
                            }
                        }
                        i14++;
                    }
                }
                if (i11 != -1) {
                    h(i11, 127, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                } else if (i10 == -1) {
                    this.f20878c.writeByte(64);
                    f(K);
                    f(byteString);
                    d(cVar);
                } else if (K.H(c.f20856e) && !Intrinsics.areEqual(c.f20861j, K)) {
                    h(i10, 15, 0);
                    f(byteString);
                } else {
                    h(i10, 63, 64);
                    f(byteString);
                    d(cVar);
                }
            }
        }

        public final void h(int i10, int i11, int i12) {
            if (i10 < i11) {
                this.f20878c.writeByte(i10 | i12);
                return;
            }
            this.f20878c.writeByte(i12 | i11);
            int i13 = i10 - i11;
            while (i13 >= 128) {
                this.f20878c.writeByte(128 | (i13 & 127));
                i13 >>>= 7;
            }
            this.f20878c.writeByte(i13);
        }

        public /* synthetic */ b(int i10, boolean z10, Buffer buffer, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this((i11 & 1) != 0 ? RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT : i10, (i11 & 2) != 0 ? true : z10, buffer);
        }
    }
}
