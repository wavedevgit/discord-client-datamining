package ao;

import androidx.recyclerview.widget.RecyclerView;
import java.io.File;
import java.io.FileInputStream;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.MutableStateFlow;
import ms.g;
import ms.j0;
import ms.l0;
import okhttp3.MediaType;
import okhttp3.RequestBody;
import okio.BufferedSink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d extends RequestBody {

    /* renamed from: d  reason: collision with root package name */
    public static final a f5800d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final File f5801a;

    /* renamed from: b  reason: collision with root package name */
    private final MediaType f5802b;

    /* renamed from: c  reason: collision with root package name */
    private final MutableStateFlow f5803c;

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
        this.f5801a = file;
        this.f5802b = mediaType;
        this.f5803c = l0.a(0);
    }

    public final j0 a() {
        return g.a(this.f5803c);
    }

    @Override // okhttp3.RequestBody
    public long contentLength() {
        return this.f5801a.length();
    }

    @Override // okhttp3.RequestBody
    public MediaType contentType() {
        return this.f5802b;
    }

    @Override // okhttp3.RequestBody
    public void writeTo(BufferedSink sink) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        float length = (float) this.f5801a.length();
        byte[] bArr = new byte[RecyclerView.ItemAnimator.FLAG_MOVED];
        FileInputStream fileInputStream = new FileInputStream(this.f5801a);
        try {
            int read = fileInputStream.read(bArr);
            long j10 = 0;
            int i10 = 0;
            while (read != -1) {
                j10 += read;
                sink.write(bArr, 0, read);
                read = fileInputStream.read(bArr);
                int c10 = as.a.c((((float) j10) / length) * 100.0f);
                if (c10 - i10 > 1 || c10 >= 100) {
                    this.f5803c.b(Integer.valueOf(c10));
                    i10 = c10;
                }
            }
            Unit unit = Unit.f32464a;
            wr.c.a(fileInputStream, null);
        } finally {
        }
    }
}
