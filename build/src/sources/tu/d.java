package tu;

import androidx.recyclerview.widget.RecyclerView;
import av.x;
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
    public static final d f50705a;

    /* renamed from: b  reason: collision with root package name */
    private static final c[] f50706b;

    /* renamed from: c  reason: collision with root package name */
    private static final Map f50707c;

    static {
        d dVar = new d();
        f50705a = dVar;
        c cVar = new c(c.f50701j, "");
        ByteString byteString = c.f50698g;
        c cVar2 = new c(byteString, "GET");
        c cVar3 = new c(byteString, "POST");
        ByteString byteString2 = c.f50699h;
        c cVar4 = new c(byteString2, "/");
        c cVar5 = new c(byteString2, "/index.html");
        ByteString byteString3 = c.f50700i;
        c cVar6 = new c(byteString3, "http");
        c cVar7 = new c(byteString3, "https");
        ByteString byteString4 = c.f50697f;
        f50706b = new c[]{cVar, cVar2, cVar3, cVar4, cVar5, cVar6, cVar7, new c(byteString4, "200"), new c(byteString4, "204"), new c(byteString4, "206"), new c(byteString4, "304"), new c(byteString4, "400"), new c(byteString4, "404"), new c(byteString4, "500"), new c("accept-charset", ""), new c("accept-encoding", "gzip, deflate"), new c("accept-language", ""), new c("accept-ranges", ""), new c("accept", ""), new c("access-control-allow-origin", ""), new c("age", ""), new c("allow", ""), new c("authorization", ""), new c("cache-control", ""), new c("content-disposition", ""), new c("content-encoding", ""), new c("content-language", ""), new c("content-length", ""), new c("content-location", ""), new c("content-range", ""), new c("content-type", ""), new c("cookie", ""), new c(InquiryField.DateField.TYPE, ""), new c("etag", ""), new c("expect", ""), new c("expires", ""), new c("from", ""), new c("host", ""), new c("if-match", ""), new c("if-modified-since", ""), new c("if-none-match", ""), new c("if-range", ""), new c("if-unmodified-since", ""), new c("last-modified", ""), new c("link", ""), new c("location", ""), new c("max-forwards", ""), new c("proxy-authenticate", ""), new c("proxy-authorization", ""), new c("range", ""), new c("referer", ""), new c("refresh", ""), new c("retry-after", ""), new c("server", ""), new c("set-cookie", ""), new c("strict-transport-security", ""), new c("transfer-encoding", ""), new c("user-agent", ""), new c("vary", ""), new c("via", ""), new c("www-authenticate", "")};
        f50707c = dVar.d();
    }

    private d() {
    }

    private final Map d() {
        c[] cVarArr = f50706b;
        LinkedHashMap linkedHashMap = new LinkedHashMap(cVarArr.length);
        int length = cVarArr.length;
        for (int i10 = 0; i10 < length; i10++) {
            c[] cVarArr2 = f50706b;
            if (!linkedHashMap.containsKey(cVarArr2[i10].f50702a)) {
                linkedHashMap.put(cVarArr2[i10].f50702a, Integer.valueOf(i10));
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
        return f50707c;
    }

    public final c[] c() {
        return f50706b;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final int f50708a;

        /* renamed from: b  reason: collision with root package name */
        private int f50709b;

        /* renamed from: c  reason: collision with root package name */
        private final List f50710c;

        /* renamed from: d  reason: collision with root package name */
        private final BufferedSource f50711d;

        /* renamed from: e  reason: collision with root package name */
        public c[] f50712e;

        /* renamed from: f  reason: collision with root package name */
        private int f50713f;

        /* renamed from: g  reason: collision with root package name */
        public int f50714g;

        /* renamed from: h  reason: collision with root package name */
        public int f50715h;

        public a(Source source, int i10, int i11) {
            Intrinsics.checkNotNullParameter(source, "source");
            this.f50708a = i10;
            this.f50709b = i11;
            this.f50710c = new ArrayList();
            this.f50711d = x.d(source);
            c[] cVarArr = new c[8];
            this.f50712e = cVarArr;
            this.f50713f = cVarArr.length - 1;
        }

        private final void a() {
            int i10 = this.f50709b;
            int i11 = this.f50715h;
            if (i10 < i11) {
                if (i10 == 0) {
                    b();
                } else {
                    d(i11 - i10);
                }
            }
        }

        private final void b() {
            kotlin.collections.i.z(this.f50712e, null, 0, 0, 6, null);
            this.f50713f = this.f50712e.length - 1;
            this.f50714g = 0;
            this.f50715h = 0;
        }

        private final int c(int i10) {
            return this.f50713f + 1 + i10;
        }

        private final int d(int i10) {
            int i11;
            int i12 = 0;
            if (i10 > 0) {
                int length = this.f50712e.length;
                while (true) {
                    length--;
                    i11 = this.f50713f;
                    if (length < i11 || i10 <= 0) {
                        break;
                    }
                    c cVar = this.f50712e[length];
                    Intrinsics.checkNotNull(cVar);
                    int i13 = cVar.f50704c;
                    i10 -= i13;
                    this.f50715h -= i13;
                    this.f50714g--;
                    i12++;
                }
                c[] cVarArr = this.f50712e;
                System.arraycopy(cVarArr, i11 + 1, cVarArr, i11 + 1 + i12, this.f50714g);
                this.f50713f += i12;
            }
            return i12;
        }

        private final ByteString f(int i10) {
            if (h(i10)) {
                return d.f50705a.c()[i10].f50702a;
            }
            int c10 = c(i10 - d.f50705a.c().length);
            if (c10 >= 0) {
                c[] cVarArr = this.f50712e;
                if (c10 < cVarArr.length) {
                    c cVar = cVarArr[c10];
                    Intrinsics.checkNotNull(cVar);
                    return cVar.f50702a;
                }
            }
            throw new IOException("Header index too large " + (i10 + 1));
        }

        private final void g(int i10, c cVar) {
            this.f50710c.add(cVar);
            int i11 = cVar.f50704c;
            if (i10 != -1) {
                c cVar2 = this.f50712e[c(i10)];
                Intrinsics.checkNotNull(cVar2);
                i11 -= cVar2.f50704c;
            }
            int i12 = this.f50709b;
            if (i11 > i12) {
                b();
                return;
            }
            int d10 = d((this.f50715h + i11) - i12);
            if (i10 == -1) {
                int i13 = this.f50714g + 1;
                c[] cVarArr = this.f50712e;
                if (i13 > cVarArr.length) {
                    c[] cVarArr2 = new c[cVarArr.length * 2];
                    System.arraycopy(cVarArr, 0, cVarArr2, cVarArr.length, cVarArr.length);
                    this.f50713f = this.f50712e.length - 1;
                    this.f50712e = cVarArr2;
                }
                int i14 = this.f50713f;
                this.f50713f = i14 - 1;
                this.f50712e[i14] = cVar;
                this.f50714g++;
            } else {
                this.f50712e[i10 + c(i10) + d10] = cVar;
            }
            this.f50715h += i11;
        }

        private final boolean h(int i10) {
            if (i10 >= 0 && i10 <= d.f50705a.c().length - 1) {
                return true;
            }
            return false;
        }

        private final int i() {
            return mu.e.d(this.f50711d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
        }

        private final void l(int i10) {
            if (h(i10)) {
                this.f50710c.add(d.f50705a.c()[i10]);
                return;
            }
            int c10 = c(i10 - d.f50705a.c().length);
            if (c10 >= 0) {
                c[] cVarArr = this.f50712e;
                if (c10 < cVarArr.length) {
                    c cVar = cVarArr[c10];
                    Intrinsics.checkNotNull(cVar);
                    this.f50710c.add(cVar);
                    return;
                }
            }
            throw new IOException("Header index too large " + (i10 + 1));
        }

        private final void n(int i10) {
            g(-1, new c(f(i10), j()));
        }

        private final void o() {
            g(-1, new c(d.f50705a.a(j()), j()));
        }

        private final void p(int i10) {
            this.f50710c.add(new c(f(i10), j()));
        }

        private final void q() {
            this.f50710c.add(new c(d.f50705a.a(j()), j()));
        }

        public final List e() {
            List h12 = CollectionsKt.h1(this.f50710c);
            this.f50710c.clear();
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
                k.f50850a.b(this.f50711d, m10, buffer);
                return buffer.M1();
            }
            return this.f50711d.h1(m10);
        }

        public final void k() {
            while (!this.f50711d.p1()) {
                int d10 = mu.e.d(this.f50711d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                if (d10 != 128) {
                    if ((d10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                        l(m(d10, 127) - 1);
                    } else if (d10 == 64) {
                        o();
                    } else if ((d10 & 64) == 64) {
                        n(m(d10, 63) - 1);
                    } else if ((d10 & 32) == 32) {
                        int m10 = m(d10, 31);
                        this.f50709b = m10;
                        if (m10 >= 0 && m10 <= this.f50708a) {
                            a();
                        } else {
                            throw new IOException("Invalid dynamic table size update " + this.f50709b);
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
        public int f50716a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f50717b;

        /* renamed from: c  reason: collision with root package name */
        private final Buffer f50718c;

        /* renamed from: d  reason: collision with root package name */
        private int f50719d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f50720e;

        /* renamed from: f  reason: collision with root package name */
        public int f50721f;

        /* renamed from: g  reason: collision with root package name */
        public c[] f50722g;

        /* renamed from: h  reason: collision with root package name */
        private int f50723h;

        /* renamed from: i  reason: collision with root package name */
        public int f50724i;

        /* renamed from: j  reason: collision with root package name */
        public int f50725j;

        public b(int i10, boolean z10, Buffer out) {
            Intrinsics.checkNotNullParameter(out, "out");
            this.f50716a = i10;
            this.f50717b = z10;
            this.f50718c = out;
            this.f50719d = Integer.MAX_VALUE;
            this.f50721f = i10;
            c[] cVarArr = new c[8];
            this.f50722g = cVarArr;
            this.f50723h = cVarArr.length - 1;
        }

        private final void a() {
            int i10 = this.f50721f;
            int i11 = this.f50725j;
            if (i10 < i11) {
                if (i10 == 0) {
                    b();
                } else {
                    c(i11 - i10);
                }
            }
        }

        private final void b() {
            kotlin.collections.i.z(this.f50722g, null, 0, 0, 6, null);
            this.f50723h = this.f50722g.length - 1;
            this.f50724i = 0;
            this.f50725j = 0;
        }

        private final int c(int i10) {
            int i11;
            int i12 = 0;
            if (i10 > 0) {
                int length = this.f50722g.length;
                while (true) {
                    length--;
                    i11 = this.f50723h;
                    if (length < i11 || i10 <= 0) {
                        break;
                    }
                    c cVar = this.f50722g[length];
                    Intrinsics.checkNotNull(cVar);
                    i10 -= cVar.f50704c;
                    int i13 = this.f50725j;
                    c cVar2 = this.f50722g[length];
                    Intrinsics.checkNotNull(cVar2);
                    this.f50725j = i13 - cVar2.f50704c;
                    this.f50724i--;
                    i12++;
                }
                c[] cVarArr = this.f50722g;
                System.arraycopy(cVarArr, i11 + 1, cVarArr, i11 + 1 + i12, this.f50724i);
                c[] cVarArr2 = this.f50722g;
                int i14 = this.f50723h;
                Arrays.fill(cVarArr2, i14 + 1, i14 + 1 + i12, (Object) null);
                this.f50723h += i12;
            }
            return i12;
        }

        private final void d(c cVar) {
            int i10 = cVar.f50704c;
            int i11 = this.f50721f;
            if (i10 > i11) {
                b();
                return;
            }
            c((this.f50725j + i10) - i11);
            int i12 = this.f50724i + 1;
            c[] cVarArr = this.f50722g;
            if (i12 > cVarArr.length) {
                c[] cVarArr2 = new c[cVarArr.length * 2];
                System.arraycopy(cVarArr, 0, cVarArr2, cVarArr.length, cVarArr.length);
                this.f50723h = this.f50722g.length - 1;
                this.f50722g = cVarArr2;
            }
            int i13 = this.f50723h;
            this.f50723h = i13 - 1;
            this.f50722g[i13] = cVar;
            this.f50724i++;
            this.f50725j += i10;
        }

        public final void e(int i10) {
            this.f50716a = i10;
            int min = Math.min(i10, 16384);
            int i11 = this.f50721f;
            if (i11 == min) {
                return;
            }
            if (min < i11) {
                this.f50719d = Math.min(this.f50719d, min);
            }
            this.f50720e = true;
            this.f50721f = min;
            a();
        }

        public final void f(ByteString data) {
            Intrinsics.checkNotNullParameter(data, "data");
            if (this.f50717b) {
                k kVar = k.f50850a;
                if (kVar.d(data) < data.G()) {
                    Buffer buffer = new Buffer();
                    kVar.c(data, buffer);
                    ByteString M1 = buffer.M1();
                    h(M1.G(), 127, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                    this.f50718c.e2(M1);
                    return;
                }
            }
            h(data.G(), 127, 0);
            this.f50718c.e2(data);
        }

        public final void g(List headerBlock) {
            int i10;
            int i11;
            Intrinsics.checkNotNullParameter(headerBlock, "headerBlock");
            if (this.f50720e) {
                int i12 = this.f50719d;
                if (i12 < this.f50721f) {
                    h(i12, 31, 32);
                }
                this.f50720e = false;
                this.f50719d = Integer.MAX_VALUE;
                h(this.f50721f, 31, 32);
            }
            int size = headerBlock.size();
            for (int i13 = 0; i13 < size; i13++) {
                c cVar = (c) headerBlock.get(i13);
                ByteString K = cVar.f50702a.K();
                ByteString byteString = cVar.f50703b;
                d dVar = d.f50705a;
                Integer num = (Integer) dVar.b().get(K);
                if (num != null) {
                    int intValue = num.intValue();
                    i11 = intValue + 1;
                    if (2 <= i11 && i11 < 8) {
                        if (Intrinsics.areEqual(dVar.c()[intValue].f50703b, byteString)) {
                            i10 = i11;
                        } else if (Intrinsics.areEqual(dVar.c()[i11].f50703b, byteString)) {
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
                    int i14 = this.f50723h + 1;
                    int length = this.f50722g.length;
                    while (true) {
                        if (i14 >= length) {
                            break;
                        }
                        c cVar2 = this.f50722g[i14];
                        Intrinsics.checkNotNull(cVar2);
                        if (Intrinsics.areEqual(cVar2.f50702a, K)) {
                            c cVar3 = this.f50722g[i14];
                            Intrinsics.checkNotNull(cVar3);
                            if (Intrinsics.areEqual(cVar3.f50703b, byteString)) {
                                i11 = d.f50705a.c().length + (i14 - this.f50723h);
                                break;
                            } else if (i10 == -1) {
                                i10 = (i14 - this.f50723h) + d.f50705a.c().length;
                            }
                        }
                        i14++;
                    }
                }
                if (i11 != -1) {
                    h(i11, 127, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                } else if (i10 == -1) {
                    this.f50718c.writeByte(64);
                    f(K);
                    f(byteString);
                    d(cVar);
                } else if (K.H(c.f50696e) && !Intrinsics.areEqual(c.f50701j, K)) {
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
                this.f50718c.writeByte(i10 | i12);
                return;
            }
            this.f50718c.writeByte(i12 | i11);
            int i13 = i10 - i11;
            while (i13 >= 128) {
                this.f50718c.writeByte(128 | (i13 & 127));
                i13 >>>= 7;
            }
            this.f50718c.writeByte(i13);
        }

        public /* synthetic */ b(int i10, boolean z10, Buffer buffer, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this((i11 & 1) != 0 ? RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT : i10, (i11 & 2) != 0 ? true : z10, buffer);
        }
    }
}
