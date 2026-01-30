package okhttp3;

import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.HttpUrl;
import okio.Buffer;
import okio.BufferedSink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f extends RequestBody {

    /* renamed from: c  reason: collision with root package name */
    public static final b f44337c = new b(null);

    /* renamed from: d  reason: collision with root package name */
    private static final MediaType f44338d = MediaType.f44085e.b("application/x-www-form-urlencoded");

    /* renamed from: a  reason: collision with root package name */
    private final List f44339a;

    /* renamed from: b  reason: collision with root package name */
    private final List f44340b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Charset f44341a;

        /* renamed from: b  reason: collision with root package name */
        private final List f44342b;

        /* renamed from: c  reason: collision with root package name */
        private final List f44343c;

        public a() {
            this(null, 1, null);
        }

        public final a a(String name, String value) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(value, "value");
            HttpUrl.b bVar = HttpUrl.f44064k;
            this.f44342b.add(HttpUrl.b.b(bVar, name, 0, 0, " \"':;<=>@[]^`{}|/\\?#&!$(),~", false, false, true, false, this.f44341a, 91, null));
            this.f44343c.add(HttpUrl.b.b(bVar, value, 0, 0, " \"':;<=>@[]^`{}|/\\?#&!$(),~", false, false, true, false, this.f44341a, 91, null));
            return this;
        }

        public final a b(String name, String value) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(value, "value");
            HttpUrl.b bVar = HttpUrl.f44064k;
            this.f44342b.add(HttpUrl.b.b(bVar, name, 0, 0, " \"':;<=>@[]^`{}|/\\?#&!$(),~", true, false, true, false, this.f44341a, 83, null));
            this.f44343c.add(HttpUrl.b.b(bVar, value, 0, 0, " \"':;<=>@[]^`{}|/\\?#&!$(),~", true, false, true, false, this.f44341a, 83, null));
            return this;
        }

        public final f c() {
            return new f(this.f44342b, this.f44343c);
        }

        public a(Charset charset) {
            this.f44341a = charset;
            this.f44342b = new ArrayList();
            this.f44343c = new ArrayList();
        }

        public /* synthetic */ a(Charset charset, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? null : charset);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    public f(List encodedNames, List encodedValues) {
        Intrinsics.checkNotNullParameter(encodedNames, "encodedNames");
        Intrinsics.checkNotNullParameter(encodedValues, "encodedValues");
        this.f44339a = ut.e.V(encodedNames);
        this.f44340b = ut.e.V(encodedValues);
    }

    private final long a(BufferedSink bufferedSink, boolean z10) {
        Buffer e10;
        if (z10) {
            e10 = new Buffer();
        } else {
            Intrinsics.checkNotNull(bufferedSink);
            e10 = bufferedSink.e();
        }
        int size = this.f44339a.size();
        for (int i10 = 0; i10 < size; i10++) {
            if (i10 > 0) {
                e10.writeByte(38);
            }
            e10.n0((String) this.f44339a.get(i10));
            e10.writeByte(61);
            e10.n0((String) this.f44340b.get(i10));
        }
        if (z10) {
            long size2 = e10.size();
            e10.l();
            return size2;
        }
        return 0L;
    }

    @Override // okhttp3.RequestBody
    public long contentLength() {
        return a(null, true);
    }

    @Override // okhttp3.RequestBody
    public MediaType contentType() {
        return f44338d;
    }

    @Override // okhttp3.RequestBody
    public void writeTo(BufferedSink sink) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        a(sink, false);
    }
}
