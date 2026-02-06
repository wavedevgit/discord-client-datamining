package pd;

import android.net.Uri;
import com.google.android.exoplayer2.upstream.k;
import java.io.InputStream;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements k.a {

    /* renamed from: a  reason: collision with root package name */
    private final k.a f43794a;

    /* renamed from: b  reason: collision with root package name */
    private final List f43795b;

    public b(k.a aVar, List list) {
        this.f43794a = aVar;
        this.f43795b = list;
    }

    @Override // com.google.android.exoplayer2.upstream.k.a
    /* renamed from: b */
    public a a(Uri uri, InputStream inputStream) {
        a aVar = (a) this.f43794a.a(uri, inputStream);
        List list = this.f43795b;
        if (list != null && !list.isEmpty()) {
            return (a) aVar.a(this.f43795b);
        }
        return aVar;
    }
}
