package yn;

import androidx.recyclerview.widget.RecyclerView;
import java.io.File;
import java.io.FileInputStream;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.MutableStateFlow;
import ks.g;
import ks.j0;
import ks.l0;
import okhttp3.MediaType;
import okhttp3.RequestBody;
import okio.BufferedSink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d extends RequestBody {

    /* renamed from: d  reason: collision with root package name */
    public static final a f54851d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final File f54852a;

    /* renamed from: b  reason: collision with root package name */
    private final MediaType f54853b;

    /* renamed from: c  reason: collision with root package name */
    private final MutableStateFlow f54854c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public d(File file, MediaType mediaType) {
        Intrinsics.checkNotNullParameter(file, "file");
        this.f54852a = file;
        this.f54853b = mediaType;
        this.f54854c = l0.a(0);
    }

    public final j0 a() {
        return g.a(this.f54854c);
    }

    @Override // okhttp3.RequestBody
    public long contentLength() {
        return this.f54852a.length();
    }

    @Override // okhttp3.RequestBody
    public MediaType contentType() {
        return this.f54853b;
    }

    @Override // okhttp3.RequestBody
    public void writeTo(BufferedSink sink) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        float length = (float) this.f54852a.length();
        byte[] bArr = new byte[RecyclerView.ItemAnimator.FLAG_MOVED];
        FileInputStream fileInputStream = new FileInputStream(this.f54852a);
        try {
            int read = fileInputStream.read(bArr);
            long j10 = 0;
            int i10 = 0;
            while (read != -1) {
                j10 += read;
                sink.write(bArr, 0, read);
                read = fileInputStream.read(bArr);
                int c10 = yr.a.c((((float) j10) / length) * 100.0f);
                if (c10 - i10 > 1 || c10 >= 100) {
                    this.f54854c.b(Integer.valueOf(c10));
                    i10 = c10;
                }
            }
            Unit unit = Unit.f33074a;
            ur.c.a(fileInputStream, null);
        } finally {
        }
    }
}
