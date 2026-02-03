package pd;

import android.net.Uri;
import com.google.android.exoplayer2.upstream.j;
import java.io.InputStream;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements j.a {

    /* renamed from: a  reason: collision with root package name */
    private final j.a f45109a;

    /* renamed from: b  reason: collision with root package name */
    private final List f45110b;

    public b(j.a aVar, List list) {
        this.f45109a = aVar;
        this.f45110b = list;
    }

    @Override // com.google.android.exoplayer2.upstream.j.a
    /* renamed from: b */
    public a a(Uri uri, InputStream inputStream) {
        a aVar = (a) this.f45109a.a(uri, inputStream);
        List list = this.f45110b;
        if (list != null && !list.isEmpty()) {
            return (a) aVar.a(this.f45110b);
        }
        return aVar;
    }
}
