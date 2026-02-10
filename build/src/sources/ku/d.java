package ku;

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
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.BufferedSource;
import okio.ByteString;
import okio.Source;
import ru.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    public static final d f35285a;

    /* renamed from: b  reason: collision with root package name */
    private static final c[] f35286b;

    /* renamed from: c  reason: collision with root package name */
    private static final Map f35287c;

    static {
        d dVar = new d();
        f35285a = dVar;
        c cVar = new c(c.f35281j, "");
        ByteString byteString = c.f35278g;
        c cVar2 = new c(byteString, "GET");
        c cVar3 = new c(byteString, "POST");
        ByteString byteString2 = c.f35279h;
        c cVar4 = new c(byteString2, "/");
        c cVar5 = new c(byteString2, "/index.html");
        ByteString byteString3 = c.f35280i;
        c cVar6 = new c(byteString3, "http");
        c cVar7 = new c(byteString3, "https");
        ByteString byteString4 = c.f35277f;
        f35286b = new c[]{cVar, cVar2, cVar3, cVar4, cVar5, cVar6, cVar7, new c(byteString4, "200"), new c(byteString4, "204"), new c(byteString4, "206"), new c(byteString4, "304"), new c(byteString4, "400"), new c(byteString4, "404"), new c(byteString4, "500"), new c("accept-charset", ""), new c("accept-encoding", "gzip, deflate"), new c("accept-language", ""), new c("accept-ranges", ""), new c("accept", ""), new c("access-control-allow-origin", ""), new c("age", ""), new c("allow", ""), new c("authorization", ""), new c("cache-control", ""), new c("content-disposition", ""), new c("content-encoding", ""), new c("content-language", ""), new c("content-length", ""), new c("content-location", ""), new c("content-range", ""), new c("content-type", ""), new c("cookie", ""), new c(InquiryField.DateField.TYPE, ""), new c("etag", ""), new c("expect", ""), new c("expires", ""), new c("from", ""), new c("host", ""), new c("if-match", ""), new c("if-modified-since", ""), new c("if-none-match", ""), new c("if-range", ""), new c("if-unmodified-since", ""), new c("last-modified", ""), new c("link", ""), new c("location", ""), new c("max-forwards", ""), new c("proxy-authenticate", ""), new c("proxy-authorization", ""), new c("range", ""), new c("referer", ""), new c("refresh", ""), new c("retry-after", ""), new c("server", ""), new c("set-cookie", ""), new c("strict-transport-security", ""), new c("transfer-encoding", ""), new c("user-agent", ""), new c("vary", ""), new c("via", ""), new c("www-authenticate", "")};
        f35287c = dVar.d();
    }

    private d() {
    }

    private final Map d() {
        c[] cVarArr = f35286b;
        LinkedHashMap linkedHashMap = new LinkedHashMap(cVarArr.length);
        int length = cVarArr.length;
        for (int i10 = 0; i10 < length; i10++) {
            c[] cVarArr2 = f35286b;
            if (!linkedHashMap.containsKey(cVarArr2[i10].f35282a)) {
                linkedHashMap.put(cVarArr2[i10].f35282a, Integer.valueOf(i10));
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
        return f35287c;
    }

    public final c[] c() {
        return f35286b;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final int f35288a;

        /* renamed from: b  reason: collision with root package name */
        private int f35289b;

        /* renamed from: c  reason: collision with root package name */
        private final List f35290c;

        /* renamed from: d  reason: collision with root package name */
        private final BufferedSource f35291d;

        /* renamed from: e  reason: collision with root package name */
        public c[] f35292e;

        /* renamed from: f  reason: collision with root package name */
        private int f35293f;

        /* renamed from: g  reason: collision with root package name */
        public int f35294g;

        /* renamed from: h  reason: collision with root package name */
        public int f35295h;

        public a(Source source, int i10, int i11) {
            Intrinsics.checkNotNullParameter(source, "source");
            this.f35288a = i10;
            this.f35289b = i11;
            this.f35290c = new ArrayList();
            this.f35291d = x.d(source);
            c[] cVarArr = new c[8];
            this.f35292e = cVarArr;
            this.f35293f = cVarArr.length - 1;
        }

        private final void a() {
            int i10 = this.f35289b;
            int i11 = this.f35295h;
            if (i10 < i11) {
                if (i10 == 0) {
                    b();
                } else {
                    d(i11 - i10);
                }
            }
        }

        private final void b() {
            kotlin.collections.i.z(this.f35292e, null, 0, 0, 6, null);
            this.f35293f = this.f35292e.length - 1;
            this.f35294g = 0;
            this.f35295h = 0;
        }

        private final int c(int i10) {
            return this.f35293f + 1 + i10;
        }

        private final int d(int i10) {
            int i11;
            int i12 = 0;
            if (i10 > 0) {
                int length = this.f35292e.length;
                while (true) {
                    length--;
                    i11 = this.f35293f;
                    if (length < i11 || i10 <= 0) {
                        break;
                    }
                    c cVar = this.f35292e[length];
                    Intrinsics.checkNotNull(cVar);
                    int i13 = cVar.f35284c;
                    i10 -= i13;
                    this.f35295h -= i13;
                    this.f35294g--;
                    i12++;
                }
                c[] cVarArr = this.f35292e;
                System.arraycopy(cVarArr, i11 + 1, cVarArr, i11 + 1 + i12, this.f35294g);
                this.f35293f += i12;
            }
            return i12;
        }

        private final ByteString f(int i10) {
            if (h(i10)) {
                return d.f35285a.c()[i10].f35282a;
            }
            int c10 = c(i10 - d.f35285a.c().length);
            if (c10 >= 0) {
                c[] cVarArr = this.f35292e;
                if (c10 < cVarArr.length) {
                    c cVar = cVarArr[c10];
                    Intrinsics.checkNotNull(cVar);
                    return cVar.f35282a;
                }
            }
            throw new IOException("Header index too large " + (i10 + 1));
        }

        private final void g(int i10, c cVar) {
            this.f35290c.add(cVar);
            int i11 = cVar.f35284c;
            if (i10 != -1) {
                c cVar2 = this.f35292e[c(i10)];
                Intrinsics.checkNotNull(cVar2);
                i11 -= cVar2.f35284c;
            }
            int i12 = this.f35289b;
            if (i11 > i12) {
                b();
                return;
            }
            int d10 = d((this.f35295h + i11) - i12);
            if (i10 == -1) {
                int i13 = this.f35294g + 1;
                c[] cVarArr = this.f35292e;
                if (i13 > cVarArr.length) {
                    c[] cVarArr2 = new c[cVarArr.length * 2];
                    System.arraycopy(cVarArr, 0, cVarArr2, cVarArr.length, cVarArr.length);
                    this.f35293f = this.f35292e.length - 1;
                    this.f35292e = cVarArr2;
                }
                int i14 = this.f35293f;
                this.f35293f = i14 - 1;
                this.f35292e[i14] = cVar;
                this.f35294g++;
            } else {
                this.f35292e[i10 + c(i10) + d10] = cVar;
            }
            this.f35295h += i11;
        }

        private final boolean h(int i10) {
            if (i10 >= 0 && i10 <= d.f35285a.c().length - 1) {
                return true;
            }
            return false;
        }

        private final int i() {
            return du.e.d(this.f35291d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
        }

        private final void l(int i10) {
            if (h(i10)) {
                this.f35290c.add(d.f35285a.c()[i10]);
                return;
            }
            int c10 = c(i10 - d.f35285a.c().length);
            if (c10 >= 0) {
                c[] cVarArr = this.f35292e;
                if (c10 < cVarArr.length) {
                    c cVar = cVarArr[c10];
                    Intrinsics.checkNotNull(cVar);
                    this.f35290c.add(cVar);
                    return;
                }
            }
            throw new IOException("Header index too large " + (i10 + 1));
        }

        private final void n(int i10) {
            g(-1, new c(f(i10), j()));
        }

        private final void o() {
            g(-1, new c(d.f35285a.a(j()), j()));
        }

        private final void p(int i10) {
            this.f35290c.add(new c(f(i10), j()));
        }

        private final void q() {
            this.f35290c.add(new c(d.f35285a.a(j()), j()));
        }

        public final List e() {
            List h12 = CollectionsKt.h1(this.f35290c);
            this.f35290c.clear();
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
                k.f35430a.b(this.f35291d, m10, buffer);
                return buffer.I1();
            }
            return this.f35291d.c1(m10);
        }

        public final void k() {
            while (!this.f35291d.k1()) {
                int d10 = du.e.d(this.f35291d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                if (d10 != 128) {
                    if ((d10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                        l(m(d10, 127) - 1);
                    } else if (d10 == 64) {
                        o();
                    } else if ((d10 & 64) == 64) {
                        n(m(d10, 63) - 1);
                    } else if ((d10 & 32) == 32) {
                        int m10 = m(d10, 31);
                        this.f35289b = m10;
                        if (m10 >= 0 && m10 <= this.f35288a) {
                            a();
                        } else {
                            throw new IOException("Invalid dynamic table size update " + this.f35289b);
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
        public int f35296a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f35297b;

        /* renamed from: c  reason: collision with root package name */
        private final Buffer f35298c;

        /* renamed from: d  reason: collision with root package name */
        private int f35299d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f35300e;

        /* renamed from: f  reason: collision with root package name */
        public int f35301f;

        /* renamed from: g  reason: collision with root package name */
        public c[] f35302g;

        /* renamed from: h  reason: collision with root package name */
        private int f35303h;

        /* renamed from: i  reason: collision with root package name */
        public int f35304i;

        /* renamed from: j  reason: collision with root package name */
        public int f35305j;

        public b(int i10, boolean z10, Buffer out) {
            Intrinsics.checkNotNullParameter(out, "out");
            this.f35296a = i10;
            this.f35297b = z10;
            this.f35298c = out;
            this.f35299d = Integer.MAX_VALUE;
            this.f35301f = i10;
            c[] cVarArr = new c[8];
            this.f35302g = cVarArr;
            this.f35303h = cVarArr.length - 1;
        }

        private final void a() {
            int i10 = this.f35301f;
            int i11 = this.f35305j;
            if (i10 < i11) {
                if (i10 == 0) {
                    b();
                } else {
                    c(i11 - i10);
                }
            }
        }

        private final void b() {
            kotlin.collections.i.z(this.f35302g, null, 0, 0, 6, null);
            this.f35303h = this.f35302g.length - 1;
            this.f35304i = 0;
            this.f35305j = 0;
        }

        private final int c(int i10) {
            int i11;
            int i12 = 0;
            if (i10 > 0) {
                int length = this.f35302g.length;
                while (true) {
                    length--;
                    i11 = this.f35303h;
                    if (length < i11 || i10 <= 0) {
                        break;
                    }
                    c cVar = this.f35302g[length];
                    Intrinsics.checkNotNull(cVar);
                    i10 -= cVar.f35284c;
                    int i13 = this.f35305j;
                    c cVar2 = this.f35302g[length];
                    Intrinsics.checkNotNull(cVar2);
                    this.f35305j = i13 - cVar2.f35284c;
                    this.f35304i--;
                    i12++;
                }
                c[] cVarArr = this.f35302g;
                System.arraycopy(cVarArr, i11 + 1, cVarArr, i11 + 1 + i12, this.f35304i);
                c[] cVarArr2 = this.f35302g;
                int i14 = this.f35303h;
                Arrays.fill(cVarArr2, i14 + 1, i14 + 1 + i12, (Object) null);
                this.f35303h += i12;
            }
            return i12;
        }

        private final void d(c cVar) {
            int i10 = cVar.f35284c;
            int i11 = this.f35301f;
            if (i10 > i11) {
                b();
                return;
            }
            c((this.f35305j + i10) - i11);
            int i12 = this.f35304i + 1;
            c[] cVarArr = this.f35302g;
            if (i12 > cVarArr.length) {
                c[] cVarArr2 = new c[cVarArr.length * 2];
                System.arraycopy(cVarArr, 0, cVarArr2, cVarArr.length, cVarArr.length);
                this.f35303h = this.f35302g.length - 1;
                this.f35302g = cVarArr2;
            }
            int i13 = this.f35303h;
            this.f35303h = i13 - 1;
            this.f35302g[i13] = cVar;
            this.f35304i++;
            this.f35305j += i10;
        }

        public final void e(int i10) {
            this.f35296a = i10;
            int min = Math.min(i10, 16384);
            int i11 = this.f35301f;
            if (i11 == min) {
                return;
            }
            if (min < i11) {
                this.f35299d = Math.min(this.f35299d, min);
            }
            this.f35300e = true;
            this.f35301f = min;
            a();
        }

        public final void f(ByteString data) {
            Intrinsics.checkNotNullParameter(data, "data");
            if (this.f35297b) {
                k kVar = k.f35430a;
                if (kVar.d(data) < data.G()) {
                    Buffer buffer = new Buffer();
                    kVar.c(data, buffer);
                    ByteString I1 = buffer.I1();
                    h(I1.G(), 127, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                    this.f35298c.Y1(I1);
                    return;
                }
            }
            h(data.G(), 127, 0);
            this.f35298c.Y1(data);
        }

        public final void g(List headerBlock) {
            int i10;
            int i11;
            Intrinsics.checkNotNullParameter(headerBlock, "headerBlock");
            if (this.f35300e) {
                int i12 = this.f35299d;
                if (i12 < this.f35301f) {
                    h(i12, 31, 32);
                }
                this.f35300e = false;
                this.f35299d = Integer.MAX_VALUE;
                h(this.f35301f, 31, 32);
            }
            int size = headerBlock.size();
            for (int i13 = 0; i13 < size; i13++) {
                c cVar = (c) headerBlock.get(i13);
                ByteString K = cVar.f35282a.K();
                ByteString byteString = cVar.f35283b;
                d dVar = d.f35285a;
                Integer num = (Integer) dVar.b().get(K);
                if (num != null) {
                    int intValue = num.intValue();
                    i11 = intValue + 1;
                    if (2 <= i11 && i11 < 8) {
                        if (Intrinsics.areEqual(dVar.c()[intValue].f35283b, byteString)) {
                            i10 = i11;
                        } else if (Intrinsics.areEqual(dVar.c()[i11].f35283b, byteString)) {
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
                    int i14 = this.f35303h + 1;
                    int length = this.f35302g.length;
                    while (true) {
                        if (i14 >= length) {
                            break;
                        }
                        c cVar2 = this.f35302g[i14];
                        Intrinsics.checkNotNull(cVar2);
                        if (Intrinsics.areEqual(cVar2.f35282a, K)) {
                            c cVar3 = this.f35302g[i14];
                            Intrinsics.checkNotNull(cVar3);
                            if (Intrinsics.areEqual(cVar3.f35283b, byteString)) {
                                i11 = d.f35285a.c().length + (i14 - this.f35303h);
                                break;
                            } else if (i10 == -1) {
                                i10 = (i14 - this.f35303h) + d.f35285a.c().length;
                            }
                        }
                        i14++;
                    }
                }
                if (i11 != -1) {
                    h(i11, 127, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                } else if (i10 == -1) {
                    this.f35298c.writeByte(64);
                    f(K);
                    f(byteString);
                    d(cVar);
                } else if (K.H(c.f35276e) && !Intrinsics.areEqual(c.f35281j, K)) {
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
                this.f35298c.writeByte(i10 | i12);
                return;
            }
            this.f35298c.writeByte(i12 | i11);
            int i13 = i10 - i11;
            while (i13 >= 128) {
                this.f35298c.writeByte(128 | (i13 & 127));
                i13 >>>= 7;
            }
            this.f35298c.writeByte(i13);
        }

        public /* synthetic */ b(int i10, boolean z10, Buffer buffer, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this((i11 & 1) != 0 ? RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT : i10, (i11 & 2) != 0 ? true : z10, buffer);
        }
    }
}
