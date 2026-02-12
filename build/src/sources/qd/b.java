package qd;

import android.net.Uri;
import com.google.android.exoplayer2.upstream.k;
import java.io.InputStream;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements k.a {

    /* renamed from: a  reason: collision with root package name */
    private final k.a f44025a;

    /* renamed from: b  reason: collision with root package name */
    private final List f44026b;

    public b(k.a aVar, List list) {
        this.f44025a = aVar;
        this.f44026b = list;
    }

    @Override // com.google.android.exoplayer2.upstream.k.a
    /* renamed from: b */
    public a a(Uri uri, InputStream inputStream) {
        a aVar = (a) this.f44025a.a(uri, inputStream);
        List list = this.f44026b;
        if (list != null && !list.isEmpty()) {
            return (a) aVar.a(this.f44026b);
        }
        return aVar;
    }
}
