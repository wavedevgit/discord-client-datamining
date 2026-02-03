package pd;

import android.net.Uri;
import com.google.android.exoplayer2.upstream.j;
import java.io.InputStream;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements j.a {

    /* renamed from: a  reason: collision with root package name */
    private final j.a f45067a;

    /* renamed from: b  reason: collision with root package name */
    private final List f45068b;

    public b(j.a aVar, List list) {
        this.f45067a = aVar;
        this.f45068b = list;
    }

    @Override // com.google.android.exoplayer2.upstream.j.a
    /* renamed from: b */
    public a a(Uri uri, InputStream inputStream) {
        a aVar = (a) this.f45067a.a(uri, inputStream);
        List list = this.f45068b;
        if (list != null && !list.isEmpty()) {
            return (a) aVar.a(this.f45068b);
        }
        return aVar;
    }
}
