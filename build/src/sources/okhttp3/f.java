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
    public static final b f41118c = new b(null);

    /* renamed from: d  reason: collision with root package name */
    private static final MediaType f41119d = MediaType.f40866e.b("application/x-www-form-urlencoded");

    /* renamed from: a  reason: collision with root package name */
    private final List f41120a;

    /* renamed from: b  reason: collision with root package name */
    private final List f41121b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Charset f41122a;

        /* renamed from: b  reason: collision with root package name */
        private final List f41123b;

        /* renamed from: c  reason: collision with root package name */
        private final List f41124c;

        public a() {
            this(null, 1, null);
        }

        public final a a(String name, String value) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(value, "value");
            HttpUrl.b bVar = HttpUrl.f40845k;
            this.f41123b.add(HttpUrl.b.b(bVar, name, 0, 0, " \"':;<=>@[]^`{}|/\\?#&!$(),~", false, false, true, false, this.f41122a, 91, null));
            this.f41124c.add(HttpUrl.b.b(bVar, value, 0, 0, " \"':;<=>@[]^`{}|/\\?#&!$(),~", false, false, true, false, this.f41122a, 91, null));
            return this;
        }

        public final a b(String name, String value) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(value, "value");
            HttpUrl.b bVar = HttpUrl.f40845k;
            this.f41123b.add(HttpUrl.b.b(bVar, name, 0, 0, " \"':;<=>@[]^`{}|/\\?#&!$(),~", true, false, true, false, this.f41122a, 83, null));
            this.f41124c.add(HttpUrl.b.b(bVar, value, 0, 0, " \"':;<=>@[]^`{}|/\\?#&!$(),~", true, false, true, false, this.f41122a, 83, null));
            return this;
        }

        public final f c() {
            return new f(this.f41123b, this.f41124c);
        }

        public a(Charset charset) {
            this.f41122a = charset;
            this.f41123b = new ArrayList();
            this.f41124c = new ArrayList();
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
        this.f41120a = mu.e.V(encodedNames);
        this.f41121b = mu.e.V(encodedValues);
    }

    private final long a(BufferedSink bufferedSink, boolean z10) {
        Buffer f10;
        if (z10) {
            f10 = new Buffer();
        } else {
            Intrinsics.checkNotNull(bufferedSink);
            f10 = bufferedSink.f();
        }
        int size = this.f41120a.size();
        for (int i10 = 0; i10 < size; i10++) {
            if (i10 > 0) {
                f10.writeByte(38);
            }
            f10.q0((String) this.f41120a.get(i10));
            f10.writeByte(61);
            f10.q0((String) this.f41121b.get(i10));
        }
        if (z10) {
            long size2 = f10.size();
            f10.h();
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
        return f41119d;
    }

    @Override // okhttp3.RequestBody
    public void writeTo(BufferedSink sink) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        a(sink, false);
    }
}
